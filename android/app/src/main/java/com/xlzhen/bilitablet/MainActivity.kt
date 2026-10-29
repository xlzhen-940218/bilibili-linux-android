package com.xlzhen.bilitablet

import android.annotation.SuppressLint
import android.app.DownloadManager
import android.app.PictureInPictureParams
import android.content.ActivityNotFoundException
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.content.res.Configuration
import android.graphics.Bitmap
import android.graphics.Color
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.Environment
import android.util.Rational
import android.view.View
import android.view.ViewGroup
import android.view.WindowManager
import android.webkit.CookieManager
import android.webkit.JavascriptInterface
import android.webkit.PermissionRequest
import android.webkit.URLUtil
import android.webkit.WebChromeClient
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.FrameLayout
import android.widget.Toast
import androidx.activity.OnBackPressedCallback
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.webkit.WebViewCompat
import androidx.webkit.WebViewFeature
import org.json.JSONObject
import java.io.ByteArrayInputStream
import java.io.IOException
import java.net.HttpURLConnection
import java.net.URL

/**
 * 加载官方桌面客户端的 render 页面（Vue），而不是 www.bilibili.com 网页版。
 *
 * 资源来自官方客户端 app.asar 的 render/ 目录，打包进 assets；
 * 通过 shouldInterceptRequest 把 https://bilipc.bilibili.com/ 下的请求映射到本地 assets，
 * 再用 bridge.js 复刻 Electron preload 暴露的 window.biliBridgePc。
 */
class MainActivity : AppCompatActivity() {

    companion object {
        private const val START_URL = "https://bilipc.bilibili.com/index.html"
        private const val STATE_URL = "bili_tablet_url"
    }

    private lateinit var root: FrameLayout
    private lateinit var webView: WebView
    private lateinit var bridgeScript: String
    private lateinit var desktopUserAgent: String

    private var customView: View? = null
    private var customViewCallback: WebChromeClient.CustomViewCallback? = null
    private var immersive = true

    private val loginLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode == RESULT_OK) {
            // 登录成功后 Cookie 已写入共享的 CookieManager，重载让 bridge 重新拉取 nav。
            webView.reload()
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        WindowCompat.setDecorFitsSystemWindows(window, false)

        bridgeScript = assets.open("bridge.js").bufferedReader().use { it.readText() }
        desktopUserAgent = buildDesktopUserAgent()

        root = FrameLayout(this)
        root.setBackgroundColor(Color.WHITE)

        webView = WebView(this)
        root.addView(
            webView,
            FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )
        )
        PlaybackController.bind(webView)
        setContentView(root)

        configureWebView()
        enterImmersive()
        requestNotificationPermission()
        applyTheme()

        webView.loadUrl(savedInstanceState?.getString(STATE_URL) ?: START_URL)

        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                when {
                    customView != null -> exitFullscreen()
                    webView.canGoBack() -> webView.goBack()
                    else -> finish()
                }
            }
        })
    }

    @SuppressLint("SetJavaScriptEnabled")
    private fun configureWebView() {
        WebView.setWebContentsDebuggingEnabled(true)
        webView.setBackgroundColor(Color.WHITE)
        webView.overScrollMode = View.OVER_SCROLL_NEVER

        with(webView.settings) {
            javaScriptEnabled = true
            domStorageEnabled = true
            databaseEnabled = true
            mediaPlaybackRequiresUserGesture = false
            javaScriptCanOpenWindowsAutomatically = false
            setSupportMultipleWindows(false)
            useWideViewPort = true
            loadWithOverviewMode = true
            setSupportZoom(true)
            builtInZoomControls = false
            displayZoomControls = false
            textZoom = 100
            cacheMode = WebSettings.LOAD_DEFAULT
            // render 页面仍会加载 http 的验证码脚本，兼容模式避免整页被拦。
            mixedContentMode = WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE
            allowFileAccess = false
            allowContentAccess = false
            userAgentString = desktopUserAgent
        }

        CookieManager.getInstance().apply {
            setAcceptCookie(true)
            setAcceptThirdPartyCookies(webView, true)
        }

        // render 的 auth/requestLogin 通过这个接口打开原生登录 Activity。
        webView.addJavascriptInterface(JsBridge(), "AndroidBridge")

        // 必须在 render 自己的 bundle 之前注入，否则 biliBridgePc 不存在会直接崩。
        if (WebViewFeature.isFeatureSupported(WebViewFeature.DOCUMENT_START_SCRIPT)) {
            WebViewCompat.addDocumentStartJavaScript(
                webView,
                bridgeScript,
                setOf("https://bilipc.bilibili.com")
            )
        }

        webView.webViewClient = object : WebViewClient() {
            override fun onPageStarted(view: WebView, url: String, favicon: Bitmap?) {
                if (view.settings.userAgentString != desktopUserAgent) {
                    view.settings.userAgentString = desktopUserAgent
                }
            }

            override fun onPageFinished(view: WebView, url: String) {
                // 不支持 document-start 注入时的兜底；bridge.js 自身幂等。
                view.evaluateJavascript(bridgeScript, null)
            }

            override fun shouldInterceptRequest(
                view: WebView,
                request: WebResourceRequest
            ): WebResourceResponse? {
                val uri = request.url
                val host = uri.host
                if (host == "api.bilibili.com" || host == "app.bilibili.com" ||
                    host == "api.vc.bilibili.com"
                ) {
                    android.util.Log.d("BiliTabletNet", "${request.method} $uri")
                    val origin = header(request, "Origin")
                    val requestedHeaders = header(request, "Access-Control-Request-Headers")
                    if (request.method == "OPTIONS") {
                        return WebResourceResponse(
                            "text/plain",
                            "utf-8",
                            204,
                            "No Content",
                            corsHeaders(origin, requestedHeaders),
                            ByteArrayInputStream(ByteArray(0))
                        )
                    }
                    if (request.method == "GET") {
                        return proxyRequest(uri, origin, requestedHeaders)
                    }
                    return null
                }
                if (host != "bilipc.bilibili.com") {
                    return null
                }
                val rawPath = uri.path?.trimStart('/')?.takeIf { it.isNotEmpty() } ?: "index.html"
                val path = rawPath.replace("..", "")
                if (path == "empty.js") {
                    return WebResourceResponse(
                        "application/javascript",
                        "utf-8",
                        200,
                        "OK",
                        emptyMap(),
                        ByteArrayInputStream("/* bili-tablet stub player */".toByteArray())
                    )
                }
                return try {
                    val stream = assets.open("render/$path")
                    WebResourceResponse(
                        mimeFor(path),
                        null,
                        200,
                        "OK",
                        mapOf("Access-Control-Allow-Origin" to "*"),
                        stream
                    )
                } catch (_: IOException) {
                    WebResourceResponse(
                        "text/plain",
                        "utf-8",
                        404,
                        "Not Found",
                        emptyMap(),
                        ByteArrayInputStream("404 $path".toByteArray())
                    )
                }
            }

            override fun shouldOverrideUrlLoading(
                view: WebView,
                request: WebResourceRequest
            ): Boolean {
                val uri = request.url
                val scheme = uri.scheme?.lowercase()
                if (scheme == "http" || scheme == "https") {
                    // 站内页面（含 render 的 player.html/search.html）都留在 WebView。
                    return false
                }
                return try {
                    startActivity(Intent(Intent.ACTION_VIEW, uri))
                    true
                } catch (_: ActivityNotFoundException) {
                    true
                }
            }

            override fun onReceivedError(
                view: WebView,
                request: WebResourceRequest,
                error: WebResourceError
            ) {
                if (request.isForMainFrame) {
                    Toast.makeText(
                        this@MainActivity,
                        "加载失败：${error.description}",
                        Toast.LENGTH_SHORT
                    ).show()
                }
            }
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onShowCustomView(
                view: View,
                callback: WebChromeClient.CustomViewCallback
            ) {
                if (customView != null) {
                    callback.onCustomViewHidden()
                    return
                }
                customView = view
                customViewCallback = callback
                root.setBackgroundColor(Color.BLACK)
                root.addView(
                    view,
                    FrameLayout.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT
                    )
                )
                webView.visibility = View.GONE
                window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
                hideSystemBars()
            }

            override fun onHideCustomView() {
                exitFullscreen()
            }

            override fun onPermissionRequest(request: PermissionRequest) {
                request.deny()
            }
        }

        webView.setDownloadListener { url, userAgent, contentDisposition, mimeType, _ ->
            startDownload(url, userAgent, contentDisposition, mimeType)
        }
    }

    private fun header(request: WebResourceRequest, name: String): String? {
        return request.requestHeaders.entries
            .firstOrNull { it.key.equals(name, ignoreCase = true) }
            ?.value
    }

    private fun corsHeaders(origin: String?, requestedHeaders: String?): Map<String, String> =
        mapOf(
            // 回显实际 Origin：render 在 bilipc.bilibili.com，但第三方脚本会在 www.bilibili.com 下发请求。
            "Access-Control-Allow-Origin" to (origin ?: "https://bilipc.bilibili.com"),
            "Access-Control-Allow-Credentials" to "true",
            "Access-Control-Allow-Methods" to "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers" to (requestedHeaders ?: "*"),
            "Vary" to "Origin"
        )

    /**
     * render 页面在 https://bilipc.bilibili.com 下请求 api.bilibili.com，属于跨域；
     * Electron 主进程里不存在这个问题，WebView 里必须由原生层转发并补 CORS 头。
     * 只代理 GET：shouldInterceptRequest 拿不到 POST body，登录等请求先交给 WebView。
     */
    private fun proxyRequest(
        uri: Uri,
        origin: String?,
        requestedHeaders: String?
    ): WebResourceResponse {
        android.util.Log.d(
            "BiliTabletNet",
            "proxy $uri cookie=${CookieManager.getInstance().getCookie(uri.toString())?.take(24)}"
        )
        return try {
            val conn = URL(uri.toString()).openConnection() as HttpURLConnection
            conn.requestMethod = "GET"
            conn.instanceFollowRedirects = true
            conn.connectTimeout = 10_000
            conn.readTimeout = 15_000
            conn.setRequestProperty("User-Agent", desktopUserAgent)
            conn.setRequestProperty("Referer", "https://www.bilibili.com/")
            conn.setRequestProperty("Accept", "application/json, text/plain, */*")
            // 返回明文，避免压缩流交给 WebView 后无法解压。
            conn.setRequestProperty("Accept-Encoding", "identity")
            CookieManager.getInstance().getCookie(uri.toString())?.let {
                conn.setRequestProperty("Cookie", it)
            }
            val code = conn.responseCode
            val stream = if (code in 200..299) conn.inputStream else conn.errorStream
            val headers = corsHeaders(origin, requestedHeaders).toMutableMap()
            conn.contentType?.let { headers["Content-Type"] = it }
            WebResourceResponse(
                conn.contentType?.substringBefore(';')?.trim() ?: "application/json",
                "utf-8",
                code,
                conn.responseMessage ?: "OK",
                headers,
                stream ?: ByteArrayInputStream(ByteArray(0))
            )
        } catch (_: Exception) {
            WebResourceResponse(
                "application/json",
                "utf-8",
                502,
                "Bad Gateway",
                corsHeaders(origin, requestedHeaders),
                ByteArrayInputStream("{}".toByteArray())
            )
        }
    }

    private fun mimeFor(path: String): String {        return when (path.substringAfterLast('.', "").lowercase()) {
            "html" -> "text/html"
            "js", "mjs" -> "application/javascript"
            "css" -> "text/css"
            "json" -> "application/json"
            "png" -> "image/png"
            "jpg", "jpeg" -> "image/jpeg"
            "svg" -> "image/svg+xml"
            "gif" -> "image/gif"
            "webp" -> "image/webp"
            "woff" -> "font/woff"
            "woff2" -> "font/woff2"
            "ttf" -> "font/ttf"
            "ico" -> "image/x-icon"
            "map" -> "application/json"
            else -> "application/octet-stream"
        }
    }

    private fun exitFullscreen() {
        val view = customView ?: return
        root.removeView(view)
        customView = null
        root.setBackgroundColor(Color.WHITE)
        webView.visibility = View.VISIBLE
        window.clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        customViewCallback?.onCustomViewHidden()
        customViewCallback = null
        enterImmersive()
    }

    private fun enterImmersive() {
        hideSystemBars()
    }

    private fun hideSystemBars() {
        WindowInsetsControllerCompat(window, window.decorView).apply {
            hide(WindowInsetsCompat.Type.systemBars())
            systemBarsBehavior =
                WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
        }
    }

    private fun applyTheme() {
        val dark = ThemePrefs.isDark(this)
        val theme = if (dark) "dark" else "light"
        val background = Color.parseColor(if (dark) "#17181A" else "#FFFFFF")
        root.setBackgroundColor(background)
        webView.setBackgroundColor(background)
        val js = "(function(){var d=document.documentElement;if(!d)return;" +
            "d.classList.toggle('bili_dark',$dark);" +
            "d.classList.toggle('bili_light',${!dark});" +
            "if(window.biliBridgePc&&window.biliBridgePc.emit){" +
            "window.biliBridgePc.emit('config/themeChange',{data:'$theme'});}" +
            "})()"
        webView.evaluateJavascript(js, null)
    }

    override fun onConfigurationChanged(newConfig: Configuration) {
        super.onConfigurationChanged(newConfig)
        applyTheme()
    }

    private fun requestNotificationPermission() {        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU &&
            ContextCompat.checkSelfPermission(
                this,
                android.Manifest.permission.POST_NOTIFICATIONS
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            ActivityCompat.requestPermissions(
                this,
                arrayOf(android.Manifest.permission.POST_NOTIFICATIONS),
                200
            )
        }
    }

    private fun startDownload(
        url: String,
        userAgent: String?,
        contentDisposition: String?,
        mimeType: String?
    ) {
        if (url.startsWith("blob:") || url.startsWith("data:")) {
            Toast.makeText(this, "暂不支持该类型下载", Toast.LENGTH_SHORT).show()
            return
        }
        try {
            val fileName = URLUtil.guessFileName(url, contentDisposition, mimeType)
            val request = DownloadManager.Request(Uri.parse(url)).apply {
                setMimeType(mimeType)
                addRequestHeader("User-Agent", userAgent)
                CookieManager.getInstance().getCookie(url)?.let { addRequestHeader("Cookie", it) }
                setNotificationVisibility(
                    DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED
                )
                setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, fileName)
                setTitle(fileName)
            }
            (getSystemService(Context.DOWNLOAD_SERVICE) as DownloadManager).enqueue(request)
            Toast.makeText(this, "已开始下载", Toast.LENGTH_SHORT).show()
        } catch (e: Exception) {
            Toast.makeText(this, "下载失败：${e.message}", Toast.LENGTH_SHORT).show()
        }
    }

    private fun buildDesktopUserAgent(): String {
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

    override fun onSaveInstanceState(outState: Bundle) {
        outState.putString(STATE_URL, webView.url ?: START_URL)
        super.onSaveInstanceState(outState)
    }

    /**
     * 播放页按 Home 时进入系统画中画：
     * - 全屏视频（onShowCustomView）时 PiP 显示视频层；
     * - 非全屏的 player.html 也允许进入，至少小窗继续播放。
     */
    override fun onUserLeaveHint() {
        super.onUserLeaveHint()
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
            return
        }
        val isPlayerPage = webView.url?.contains("player.html") == true
        if (customView != null || isPlayerPage) {
            enterPip()
        }
    }

    private fun enterPip() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
            return
        }
        try {
            val params = PictureInPictureParams.Builder()
                .setAspectRatio(Rational(16, 9))
                .build()
            enterPictureInPictureMode(params)
        } catch (_: Exception) {
            // 设备不支持或当前状态不允许时忽略。
        }
    }

    override fun onPictureInPictureModeChanged(
        isInPictureInPictureMode: Boolean,
        newConfig: Configuration
    ) {
        super.onPictureInPictureModeChanged(isInPictureInPictureMode, newConfig)
        // 进入 PiP 时不要隐藏系统栏，否则 SystemUI 的小窗控制按钮会被一起藏掉。
        if (!isInPictureInPictureMode) {
            hideSystemBars()
        }
    }

    override fun onDestroy() {
        if (customView != null) {
            exitFullscreen()
        }
        root.removeView(webView)
        webView.stopLoading()
        webView.clearHistory()
        webView.removeAllViews()
        webView.destroy()
        super.onDestroy()
    }

    inner class JsBridge {
        @JavascriptInterface
        fun startLogin() {
            runOnUiThread {
                loginLauncher.launch(Intent(this@MainActivity, LoginActivity::class.java))
            }
        }

        @JavascriptInterface
        fun enterPip() {
            runOnUiThread { this@MainActivity.enterPip() }
        }

        @JavascriptInterface
        fun exitPip() {
            runOnUiThread {
                // 把当前 Activity 调回前台，系统会自动退出 PiP。
                startActivity(
                    Intent(this@MainActivity, MainActivity::class.java)
                        .addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT)
                )
            }
        }

        @JavascriptInterface
        fun toggleImmersive() {
            runOnUiThread {
                immersive = !immersive
                if (immersive) {
                    hideSystemBars()
                } else {
                    WindowInsetsControllerCompat(window, window.decorView)
                        .show(WindowInsetsCompat.Type.systemBars())
                }
            }
        }

        @JavascriptInterface
        fun closeApp() {
            runOnUiThread { finish() }
        }

        @JavascriptInterface
        fun updatePlayback(json: String) {
            try {
                val obj = JSONObject(json)
                val title = obj.optString("title")
                val cover = obj.optString("cover")
                val desc = obj.optString("desc")
                val playing = obj.optBoolean("playing")
                val position = obj.optLong("position")
                val duration = obj.optLong("duration")
                runOnUiThread {
                    PlaybackNotification.update(
                        this@MainActivity,
                        title,
                        cover,
                        desc,
                        playing,
                        position,
                        duration
                    )
                }
            } catch (_: Exception) {
                /* 忽略格式错误 */
            }
        }

        @JavascriptInterface
        fun hidePlayback() {
            runOnUiThread { PlaybackNotification.cancel(this@MainActivity) }
        }

        @JavascriptInterface
        fun getTheme(windowType: String?): String {
            return ThemePrefs.effective(
                this@MainActivity,
                windowType ?: "MainWindowTheme"
            )
        }

        @JavascriptInterface
        fun setTheme(windowType: String?, theme: String?) {
            if (theme.isNullOrEmpty()) {
                return
            }
            if (windowType == "PlayerWindowTheme") {
                ThemePrefs.setPlayer(this@MainActivity, theme)
            } else {
                ThemePrefs.setMain(this@MainActivity, theme)
            }
            runOnUiThread { applyTheme() }
        }

        @JavascriptInterface
        fun getSetting(key: String, defaultValue: String): String {
            return SettingsStore.get(this@MainActivity, key, defaultValue)
        }

        @JavascriptInterface
        fun setSetting(key: String, value: String) {
            SettingsStore.set(this@MainActivity, key, value)
            if (key == "isShowConsoleLog") {
                // 客户端用它判断是否保留 console，这里只持久化即可。
            }
        }

        @JavascriptInterface
        fun clearAppCache() {
            runOnUiThread {
                webView.clearCache(true)
                SettingsStore.set(this@MainActivity, "appCacheSize", "0")
            }
        }

        @JavascriptInterface
        fun isLoggedIn(): Boolean {
            val manager = CookieManager.getInstance()
            val cookie = manager.getCookie("https://api.bilibili.com")
                ?: manager.getCookie("https://www.bilibili.com")
                ?: manager.getCookie("https://bilipc.bilibili.com")
            return cookie?.contains("SESSDATA=") == true
        }
    }
}
