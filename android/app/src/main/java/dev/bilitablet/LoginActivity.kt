package dev.bilitablet

import android.annotation.SuppressLint
import android.content.Intent
import android.graphics.Color
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.ViewGroup
import android.webkit.CookieManager
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.FrameLayout
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat

/**
 * 官方 render 的登录页（login.html）内嵌 Electron <webview>，Android 不支持。
 * 这里改用独立 Activity 加载 B 站官方 passport 登录页，扫码/账号登录都走官方页面；
 * CookieManager 是进程级共享的，登录成功后的 Cookie 主 WebView 直接可用。
 */
class LoginActivity : AppCompatActivity() {

    companion object {
        private const val LOGIN_URL = "https://passport.bilibili.com/login"
        private const val CHECK_INTERVAL_MS = 1_000L
    }

    private lateinit var webView: WebView
    private val handler = Handler(Looper.getMainLooper())
    private val cookieCheck = object : Runnable {
        override fun run() {
            val cookies = CookieManager.getInstance().getCookie("https://www.bilibili.com")
                ?: CookieManager.getInstance().getCookie("https://passport.bilibili.com")
            if (cookies?.contains("SESSDATA=") == true) {
                CookieManager.getInstance().flush()
                setResult(RESULT_OK, Intent())
                finish()
                return
            }
            handler.postDelayed(this, CHECK_INTERVAL_MS)
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        WindowCompat.setDecorFitsSystemWindows(window, false)

        val root = FrameLayout(this)
        root.setBackgroundColor(Color.WHITE)
        webView = WebView(this)
        root.addView(
            webView,
            FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )
        )
        setContentView(root)
        hideSystemBars()

        with(webView.settings) {
            javaScriptEnabled = true
            domStorageEnabled = true
            databaseEnabled = true
            mediaPlaybackRequiresUserGesture = false
            setSupportMultipleWindows(false)
            javaScriptCanOpenWindowsAutomatically = false
            useWideViewPort = true
            loadWithOverviewMode = true
            userAgentString = desktopUserAgent()
            mixedContentMode = WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE
        }

        CookieManager.getInstance().apply {
            setAcceptCookie(true)
            setAcceptThirdPartyCookies(webView, true)
        }

        webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(
                view: WebView,
                request: WebResourceRequest
            ): Boolean {
                val scheme = request.url.scheme?.lowercase()
                // 登录页内的 http(s) 跳转全部留在 WebView；非 http 协议交给系统。
                return scheme != "http" && scheme != "https"
            }
        }

        webView.webChromeClient = object : WebChromeClient() {}

        webView.loadUrl(LOGIN_URL)
        handler.postDelayed(cookieCheck, 1_500)
    }

    private fun desktopUserAgent(): String {
        val defaultUa = WebSettings.getDefaultUserAgent(this)
        val chromeVersion = Regex("Chrome/([\\d.]+)")
            .find(defaultUa)
            ?.groupValues
            ?.get(1)
            ?: "120.0.0.0"
        return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
            "AppleWebKit/537.36 (KHTML, like Gecko) " +
            "Chrome/$chromeVersion Safari/537.36"
    }

    private fun hideSystemBars() {
        WindowInsetsControllerCompat(window, window.decorView).apply {
            hide(WindowInsetsCompat.Type.systemBars())
            systemBarsBehavior =
                WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
        }
    }

    override fun onDestroy() {
        handler.removeCallbacks(cookieCheck)
        webView.stopLoading()
        webView.destroy()
        super.onDestroy()
    }
}
