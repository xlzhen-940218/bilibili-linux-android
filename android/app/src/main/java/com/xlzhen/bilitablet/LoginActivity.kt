package com.xlzhen.bilitablet

import android.annotation.SuppressLint
import android.content.Intent
import android.graphics.Color
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.util.Log
import android.view.ViewGroup
import android.webkit.CookieManager
import android.webkit.JavascriptInterface
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
import androidx.webkit.WebViewCompat
import androidx.webkit.WebViewFeature

/**
 * 官方 render 的登录页（login.html）内嵌 Electron <webview>，Android 不支持。
 * 这里改用独立 Activity 加载 B 站官方 passport 登录页，扫码/账号登录都走官方页面；
 * CookieManager 是进程级共享的，登录成功后的 Cookie 主 WebView 直接可用。
 *
 * 对齐官方 PC 客户端的登录：除了拿 SESSDATA，还要从登录接口的响应里取 refresh_token
 * （官方是在登录窗口拦截 XHR 后交给原生层的）。refresh_token 是登录票据续期的凭据，
 * 没有它，服务端会在票据过期后（约一天）把登录态判为失效。
 */
class LoginActivity : AppCompatActivity() {

    companion object {
        private const val TAG = "BiliLogin"
        private const val LOGIN_URL = "https://passport.bilibili.com/login"
        private const val CHECK_INTERVAL_MS = 1_000L

        /**
         * 登录页拦截脚本：抓取 passport 登录接口响应里的 refresh_token。
         * 官方客户端的 handleSetRefreshToken 拿的就是这个值。
         */
        private const val LOGIN_HOOK = """
(function () {
    if (window.__biliTabletLoginHook) { return; }
    window.__biliTabletLoginHook = true;
    function pick(text) {
        if (!text || typeof text !== 'string') { return ''; }
        try {
            var json = JSON.parse(text);
            var data = json && json.data;
            if (!data || typeof data !== 'object') { return ''; }
            var token = data.refresh_token || data.token || '';
            return token ? String(token) : '';
        } catch (e) { return ''; }
    }
    function report(text) {
        var token = pick(text);
        if (!token) { return; }
        try {
            if (window.AndroidBridge && typeof window.AndroidBridge.setRefreshToken === 'function') {
                window.AndroidBridge.setRefreshToken(token);
            }
        } catch (e) {}
    }
    var xhrOpen = XMLHttpRequest.prototype.open;
    var xhrSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function (method, url) {
        this.__biliUrl = String(url || '');
        return xhrOpen.apply(this, arguments);
    };
    XMLHttpRequest.prototype.send = function () {
        var xhr = this;
        try {
            xhr.addEventListener('load', function () {
                try {
                    if (!xhr.responseType || xhr.responseType === 'text') {
                        report(xhr.responseText);
                    }
                } catch (e) {}
            });
        } catch (e) {}
        return xhrSend.apply(this, arguments);
    };
    var rawFetch = window.fetch;
    if (typeof rawFetch === 'function') {
        window.fetch = function () {
            var p = rawFetch.apply(this, arguments);
            try {
                p.then(function (res) {
                    try {
                        var clone = res.clone();
                        clone.text().then(report)['catch'](function () {});
                    } catch (e) {}
                })['catch'](function () {});
            } catch (e) {}
            return p;
        };
    }
})();
"""
    }

    private lateinit var webView: WebView
    private val handler = Handler(Looper.getMainLooper())
    private var finished = false
    private var refreshTokenCaptured = false

    private val cookieCheck = object : Runnable {
        override fun run() {
            if (finished) return
            val cookies = CookieManager.getInstance().getCookie("https://www.bilibili.com")
                ?: CookieManager.getInstance().getCookie("https://passport.bilibili.com")
            if (cookies?.contains("SESSDATA=") == true) {
                finishLogin()
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

        // 登录页拦截 refresh_token，需要原生接口接收。
        webView.addJavascriptInterface(LoginBridge(), "AndroidBridge")

        // 必须在登录请求发出前挂钩 XHR，所以用 document-start 注入。
        if (WebViewFeature.isFeatureSupported(WebViewFeature.DOCUMENT_START_SCRIPT)) {
            WebViewCompat.addDocumentStartJavaScript(
                webView,
                LOGIN_HOOK,
                setOf("https://passport.bilibili.com")
            )
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

    /**
     * 登录完成：落盘 cookie 与 refresh_token，并立即做一次登录态判定。
     * 判定会拿到 mid，续期时要用。
     */
    private fun finishLogin() {
        if (finished) return
        finished = true
        handler.removeCallbacks(cookieCheck)

        val manager = CookieManager.getInstance()
        manager.flush()

        // 快照登录 cookie 到持久化存储。
        LoginSessionManager.captureCookies(this)

        setResult(RESULT_OK, Intent())
        finish()

        // 登录态判定与票据续期走网络，放到后台线程，避免拖慢退出动画。
        Thread {
            try {
                LoginSessionManager.judgeLoginStatus(this)
                LoginSessionManager.refreshIfNeeded(this)
            } catch (e: Exception) {
                Log.w(TAG, "登录后初始化失败", e)
            }
        }.start()
    }

    /** 供登录页脚本回调，把 refresh_token 交给原生层保存。 */
    private inner class LoginBridge {
        @JavascriptInterface
        fun setRefreshToken(token: String?) {
            if (token.isNullOrEmpty() || refreshTokenCaptured) return
            refreshTokenCaptured = true
            Log.i(TAG, "已捕获登录 refresh_token")
            AuthCookieStore.setRefreshToken(this@LoginActivity, token)
        }
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
