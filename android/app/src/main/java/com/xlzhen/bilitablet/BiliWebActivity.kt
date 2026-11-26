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
import android.os.Handler
import android.os.Looper
import android.os.Environment
import android.provider.DocumentsContract
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
import org.json.JSONArray
import org.json.JSONObject
import java.io.ByteArrayInputStream
import java.io.File
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
open class BiliWebActivity : AppCompatActivity() {

    companion object {
        private const val STATE_URL = "bili_tablet_url"

        /** 登录态判定 + 票据续期的检查间隔。官方客户端在窗口就绪时检查一次，这里做周期检查。 */
        private const val LOGIN_CHECK_INTERVAL_MS = 30 * 60 * 1000L

        private val activeActivities = mutableListOf<BiliWebActivity>()

        fun registerActivity(activity: BiliWebActivity) {
            synchronized(activeActivities) {
                if (!activeActivities.contains(activity)) {
                    activeActivities.add(activity)
                }
            }
        }

        fun unregisterActivity(activity: BiliWebActivity) {
            synchronized(activeActivities) {
                activeActivities.remove(activity)
            }
        }

        fun broadcastProgress(itemId: Long, progress: Int, downloadedSize: Long, totalSize: Long) {
            val script = "(function(){" +
                "if(window.biliBridgePc&&window.biliBridgePc.emit){" +
                "window.biliBridgePc.emit('download/progressChange',{data:{itemId:$itemId,progress:$progress,downloadedSize:$downloadedSize,loadedSize:$downloadedSize,totalSize:$totalSize,status:'downloading'}});" +
                "}" +
                "})()"
            synchronized(activeActivities) {
                activeActivities.forEach { act ->
                    act.runOnUiThread {
                        try { act.webView.evaluateJavascript(script, null) } catch (_: Exception) {}
                    }
                }
            }
        }

        fun broadcastStatusChange(itemId: Long, status: String) {
            val script = "(function(){" +
                "if(window.biliBridgePc&&window.biliBridgePc.emit){" +
                "window.biliBridgePc.emit('download/statusChange',{data:{itemId:$itemId,status:'$status'}});" +
                "window.biliBridgePc.emit('download/itemListEvent',{data:{}});" +
                "window.biliBridgePc.emit('download/taskListEvent',{data:{}});" +
                "}" +
                "})()"
            synchronized(activeActivities) {
                activeActivities.forEach { act ->
                    act.runOnUiThread {
                        try { act.webView.evaluateJavascript(script, null) } catch (_: Exception) {}
                    }
                }
            }
        }

        /** 直播间窗口的打开/关闭要同步给首页，用于显示/隐藏侧边栏的「直播间」按钮。 */
        fun broadcastLiveRoomVisible(visible: Boolean) {
            val script = "(function(){" +
                "if(window.biliBridgePc&&window.biliBridgePc.emit){" +
                "window.biliBridgePc.emit('window/liveRoomWindowVisibleChange',{data:$visible});" +
                "}" +
                "})()"
            synchronized(activeActivities) {
                activeActivities.forEach { act ->
                    act.runOnUiThread {
                        try { act.webView.evaluateJavascript(script, null) } catch (_: Exception) {}
                    }
                }
            }
        }
    }

    protected open val startUrl: String = "https://bilipc.bilibili.com/index.html"
    protected open val windowType: String = "MainWindowTheme"

    /**
     * 是否注入 render 的 bridge。首页/播放页加载 bilipc 的 render 资源，需要；
     * 直播间宿主页挂在 live.bilibili.com 下（为了让同源 iframe 不被 X-Frame-Options 拦截）。
     */
    protected open val injectRenderBridge: Boolean = true

    /** bridge.js 注入的页面来源。直播间宿主页在 live.bilibili.com。 */
    protected open val bridgeScriptOrigins: Set<String> =
        setOf("https://bilipc.bilibili.com")

    private lateinit var root: FrameLayout
    private lateinit var webView: WebView
    private lateinit var bridgeScript: String
    private lateinit var desktopUserAgent: String

    private var customView: View? = null
    private var customViewCallback: WebChromeClient.CustomViewCallback? = null
    private var immersive = true

    /** 登录态检查用的主线程调度器。 */
    private val handler = Handler(Looper.getMainLooper())

    /** 被自家新窗口覆盖时置位，避免把「被覆盖」误判成「用户按 Home」而进入 PiP。 */
    private var pipSuppressed = false

    private val loginLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult(),
    ) { result ->
        if (result.resultCode == RESULT_OK) {
            // 登录成功后 Cookie 已写入共享的 CookieManager，重载让 bridge 重新拉取 nav。
            webView.reload()
            // 立刻做一次登录态判定与票据续期，避免刚登录就因为票据问题掉线。
            scheduleLoginCheck()
        }
    }

    private val folderPickerLauncher = registerForActivityResult(
        ActivityResultContracts.OpenDocumentTree()
    ) { uri: Uri? ->
        if (uri != null) {
            try {
                val takeFlags = Intent.FLAG_GRANT_READ_URI_PERMISSION or Intent.FLAG_GRANT_WRITE_URI_PERMISSION
                contentResolver.takePersistableUriPermission(uri, takeFlags)
            } catch (_: Exception) {}

            val resolvedPath = resolveTreeUriPath(uri)
            SettingsStore.set(this, "downloadPath", resolvedPath)
            SettingsStore.set(this, "isDownloadDefault", "false")
            SettingsStore.set(this, "downloadUri", uri.toString())
            notifyDownloadInfoChanged()
            Toast.makeText(this, "下载目录已更改为：$resolvedPath", Toast.LENGTH_SHORT).show()
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        registerActivity(this)
        WindowCompat.setDecorFitsSystemWindows(window, false)

        bridgeScript = assets.open("bridge.js").bufferedReader().use { it.readText() }
        desktopUserAgent = buildDesktopUserAgent()

        val isPlayer = windowType == "PlayerWindowTheme"
        root = FrameLayout(this)
        root.setBackgroundColor(if (isPlayer) Color.BLACK else Color.WHITE)

        webView = WebView(this)
        if (isPlayer) {
            webView.setBackgroundColor(Color.BLACK)
        }
        root.addView(
            webView,
            FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )
        )
        setContentView(root)

        configureWebView()
        enterImmersive()
        requestNotificationPermission()
        applyTheme()

        // 把持久化的登录 cookie 写回 CookieManager（对齐官方 updateBiliCookie），
        // 保证进程重启后登录态还在。
        LoginSessionManager.restoreCookies(this)

        webView.loadUrl(savedInstanceState?.getString(STATE_URL) ?: startUrl)

        // 启动后判定登录态并在需要时续期（对齐官方 judgeUserLoginStatus / checkIsRefreshToken）。
        scheduleLoginCheck()

        onBackPressedDispatcher.addCallback(
            this,
            object : OnBackPressedCallback(enabled = true) {
                override fun handleOnBackPressed() {
                when {
                    customView != null -> exitFullscreen()
                    shouldHandleWebBack() && webView.canGoBack() -> webView.goBack()
                    else -> onClose()
                }
            }
        })
    }

    /**
     * 登录态判定 + 票据续期的定时任务。
     *
     * 官方客户端在主窗口就绪时调用一次 checkIsRefreshToken()，这里额外做周期检查，
     * 保证应用长时间开着也不会因为票据过期而掉登录。
     */
    private fun scheduleLoginCheck() {
        handler.removeCallbacks(loginCheckTask)
        handler.post(loginCheckTask)
    }

    private val loginCheckTask = object : Runnable {
        override fun run() {
            Thread {
                try {
                    if (LoginSessionManager.judgeLoginStatus(this@BiliWebActivity)) {
                        LoginSessionManager.refreshIfNeeded(this@BiliWebActivity)
                    }
                } catch (_: Exception) {
                    /* 网络异常时忽略，等下一轮 */
                }
            }.start()
            handler.postDelayed(this, LOGIN_CHECK_INTERVAL_MS)
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    private fun configureWebView() {
        WebView.setWebContentsDebuggingEnabled(true)
        webView.setBackgroundColor(if (windowType == "PlayerWindowTheme") Color.BLACK else Color.WHITE)
        webView.overScrollMode = View.OVER_SCROLL_NEVER

        with(webView.settings) {
            javaScriptEnabled = true
            domStorageEnabled = true
            mediaPlaybackRequiresUserGesture = false
            javaScriptCanOpenWindowsAutomatically = false
            setSupportMultipleWindows(false)
            useWideViewPort = true
            // 关掉「按内容宽度自动缩放」：进/出画中画时窗口尺寸变化，
            // 开着这项 WebView 会把页面缩放改成 >100%，回来后画面被裁掉且可拖动。
            loadWithOverviewMode = false
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
        if (injectRenderBridge && WebViewFeature.isFeatureSupported(WebViewFeature.DOCUMENT_START_SCRIPT)) {
            WebViewCompat.addDocumentStartJavaScript(
                webView,
                bridgeScript,
                bridgeScriptOrigins
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
                if (injectRenderBridge) {
                    view.evaluateJavascript(bridgeScript, null)
                }
            }

            override fun shouldInterceptRequest(
                view: WebView,
                request: WebResourceRequest
            ): WebResourceResponse? {
                val uri = request.url
                val host = uri.host
                if ((host == "api.bilibili.com" || host == "app.bilibili.com" ||
                        host == "api.vc.bilibili.com")
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
                        return proxyRequest(request, origin, requestedHeaders)
                    }
                    return null
                }
                if (host == "api.live.bilibili.com") {
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
                        return liveApiResponse(uri, origin, requestedHeaders)
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
                    if (shouldBlockExternalNavigation(uri)) {
                        return true
                    }
                    // 首页的视频链接（不管是 bilipc 的 player.html 还是网页版 /video/BVxxx）
                    // 都转成客户端播放页，避免首页 WebView 自己跳到网页版。
                    if (shouldOpenPlayerInNewActivity()) {
                        val playerUrl = clientPlayerUrlFor(uri)
                        if (playerUrl != null) {
                            openPlayer(playerUrl)
                            return true
                        }
                    }
                    // 直播卡片/直播链接统一交给独立的直播间窗口。
                    if (shouldOpenLiveRoomInNewActivity()) {
                        val roomId = liveRoomIdFor(uri)
                        if (roomId != null) {
                            openLiveRoom(roomId)
                            return true
                        }
                    }
                    // 站内其他页面（含 render 的 search.html）留在 WebView。
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
                        this@BiliWebActivity,
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
            .firstOrNull { (k, _) -> k.equals(name, ignoreCase = true) }
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

    private fun getMergedCookieForBili(uri: Uri): String? {
        val manager = CookieManager.getInstance()
        val hosts = listOf(
            uri.toString(),
            "https://api.bilibili.com",
            "https://www.bilibili.com",
            "https://bilipc.bilibili.com",
            "https://passport.bilibili.com"
        )
        val cookieMap = mutableMapOf<String, String>()
        for (h in hosts) {
            val raw = manager.getCookie(h) ?: continue
            for (part in raw.split(';')) {
                val trimmed = part.trim()
                val eqIdx = trimmed.indexOf('=')
                if (eqIdx > 0) {
                    val k = trimmed.substring(0, eqIdx).trim()
                    val v = trimmed.substring(eqIdx + 1).trim()
                    if (k.isNotEmpty() && !cookieMap.containsKey(k)) {
                        cookieMap[k] = v
                    }
                }
            }
        }
        if (cookieMap.isEmpty()) return null
        return cookieMap.entries.joinToString("; ") { "${it.key}=${it.value}" }
    }

    /**
     * render 页面在 https://bilipc.bilibili.com 下请求 api.bilibili.com，属于跨域；
     * Electron 主进程里不存在这个问题，WebView 里必须由原生层转发并补 CORS 头。
     * 只代理 GET：shouldInterceptRequest 拿不到 POST body，登录等请求先交给 WebView。
     */
    private fun proxyRequest(
        request: WebResourceRequest,
        origin: String?,
        requestedHeaders: String?
    ): WebResourceResponse {
        val uri = request.url
        val cookie = getMergedCookieForBili(uri)
        android.util.Log.d(
            "BiliTabletNet",
            "proxy $uri cookie=${cookie?.take(48)}"
        )
        return try {
            val conn = URL(uri.toString()).openConnection() as HttpURLConnection
            conn.requestMethod = "GET"
            conn.instanceFollowRedirects = true
            conn.connectTimeout = 10_000
            conn.readTimeout = 15_000
            for ((key, value) in request.requestHeaders) {
                if (key.equals("Accept-Encoding", ignoreCase = true) ||
                    key.equals("Host", ignoreCase = true) ||
                    key.equals("Cookie", ignoreCase = true) ||
                    key.equals("User-Agent", ignoreCase = true)
                ) {
                    continue
                }
                conn.setRequestProperty(key, value)
            }
            conn.setRequestProperty("User-Agent", desktopUserAgent)
            if (conn.getRequestProperty("Referer").isNullOrEmpty()) {
                conn.setRequestProperty("Referer", "https://www.bilibili.com/")
            }
            if (conn.getRequestProperty("Accept").isNullOrEmpty()) {
                conn.setRequestProperty("Accept", "application/json, text/plain, */*")
            }
            // 返回明文，避免压缩流交给 WebView 后无法解压。
            conn.setRequestProperty("Accept-Encoding", "identity")
            cookie?.let {
                conn.setRequestProperty("Cookie", it)
            }
            val code = conn.responseCode
            val isDynamic = uri.path?.contains("polymer/web-dynamic") == true ||
                uri.path?.contains("feed") == true
            if (isDynamic) {
                android.util.Log.d("BiliTabletNet", "Dynamic GET $uri status=$code")
            }
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
        } catch (e: Exception) {
            android.util.Log.e("BiliTabletNet", "proxy failed $uri: ${e.message}")
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

    /**
     * 直播首页依赖 app-interface 的 feedV2 / second/getList，这两个接口需要官方主进程
     * 的私有签名（auth/signQueryParams），网页侧无法构造。这里改用公开的
     * room/v1/area/getRoomList 数据合成同样的响应结构，其余直播请求继续交给 WebView。
     */
    private fun liveApiResponse(
        uri: Uri,
        origin: String?,
        requestedHeaders: String?
    ): WebResourceResponse? {
        val path = uri.path.orEmpty()
        val isFeed = path.contains("/xlive/app-interface/v2/index/feedV2")
        val isList = path.contains("/xlive/app-interface/v2/second/getList")
        if (!isFeed && !isList) {
            return null
        }
        val page = uri.getQueryParameter("page")?.toIntOrNull() ?: 1
        val pageSize = (uri.getQueryParameter("page_size")?.toIntOrNull() ?: 20).coerceIn(1, 30)
        val parentAreaId = uri.getQueryParameter("parent_area_id") ?: "0"
        val areaId = uri.getQueryParameter("area_id") ?: "0"
        val rooms = try {
            JSONObject(
                fetchText(
                    "https://api.live.bilibili.com/room/v1/area/getRoomList" +
                        "?platform=web&parent_area_id=$parentAreaId&area_id=$areaId" +
                        "&page=$page&page_size=$pageSize&sort_type=online"
                )
            ).optJSONArray("data") ?: JSONArray()
        } catch (e: Exception) {
            android.util.Log.e("BiliTabletNet", "live feed failed: ${e.message}")
            JSONArray()
        }

        val data = JSONObject()
        if (isFeed) {
            val cards = JSONArray()
            for (i in 0 until rooms.length()) {
                cards.put(
                    JSONObject()
                        .put("card_type", "small_card_v1")
                        .put("card_data", JSONObject().put("small_card_v1", rooms.optJSONObject(i)))
                )
            }
            data.put("card_list", cards)
        } else {
            data.put("list", rooms)
        }
        data.put("has_more", rooms.length() >= pageSize)

        val body = JSONObject()
            .put("code", 0)
            .put("message", "0")
            .put("ttl", 1)
            .put("data", data)
            .toString()
        return WebResourceResponse(
            "application/json",
            "utf-8",
            200,
            "OK",
            corsHeaders(origin, requestedHeaders),
            ByteArrayInputStream(body.toByteArray())
        )
    }

    private fun fetchText(url: String): String {
        val conn = URL(url).openConnection() as HttpURLConnection
        conn.connectTimeout = 8_000
        conn.readTimeout = 10_000
        conn.setRequestProperty("User-Agent", desktopUserAgent)
        conn.setRequestProperty("Accept", "application/json, text/plain, */*")
        conn.setRequestProperty("Accept-Encoding", "identity")
        return conn.inputStream.bufferedReader().use { it.readText() }
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
        val isPlayer = windowType == "PlayerWindowTheme"
        val effectiveTheme = ThemePrefs.effective(this, windowType)
        val dark = effectiveTheme == "dark"
        val background = if (isPlayer) {
            Color.BLACK
        } else {
            Color.parseColor(if (dark) "#17181A" else "#FFFFFF")
        }
        root.setBackgroundColor(background)
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

    protected fun applyTheme() {
        val isPlayer = windowType == "PlayerWindowTheme"
        val effectiveTheme = ThemePrefs.effective(this, windowType)
        val dark = effectiveTheme == "dark"
        val background = if (isPlayer) {
            Color.BLACK
        } else {
            Color.parseColor(if (dark) "#17181A" else "#FFFFFF")
        }
        root.setBackgroundColor(background)
        webView.setBackgroundColor(background)
        // 网页版直播间不是 render 页面，不往它的 DOM 上挂 bili_dark/bili_light。
        if (!injectRenderBridge) {
            return
        }
        val js = "(function(){var d=document.documentElement;if(!d)return;" +
            "d.classList.toggle('bili_dark',$dark);" +
            "d.classList.toggle('bili_light',${!dark});" +
            "if(window.biliBridgePc&&window.biliBridgePc.emit){" +
            "window.biliBridgePc.emit('config/themeChange',{data:'$effectiveTheme'});}" +
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
        outState.putString(STATE_URL, webView.url ?: startUrl)
        super.onSaveInstanceState(outState)
    }

    /**
     * 播放页按 Home 时进入系统画中画：
     * - 全屏视频（onShowCustomView）时 PiP 显示视频层；
     * - 非全屏的 player.html 也允许进入，至少小窗继续播放。
     */
    override fun onUserLeaveHint() {
        super.onUserLeaveHint()
        if (pipSuppressed) {
            // 是新窗口把当前 Activity 顶下去，不是用户按 Home。
            pipSuppressed = false
            return
        }
        if (customView != null || shouldEnterPipOnLeave()) {
            enterPip()
        }
    }

    /** 播放页与直播间都是视频窗口，按 Home 时进系统画中画。 */
    protected open fun shouldEnterPipOnLeave(): Boolean =
        webView.url?.contains("player.html") == true

    override fun onResume() {
        super.onResume()
        pipSuppressed = false
    }

    internal fun suppressPipOnLeave() {
        pipSuppressed = true
    }

    protected fun enterPip() {
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
            // 小窗的显示密度和全屏不同，WebView 会留下 >100% 的页面缩放，
            // 回来后画面被放大、左上角对齐且能拖动。这里把缩放恢复成 100%。
            resetPageZoom()
        }
    }

    /**
     * 清掉画中画留下的页面缩放。
     *
     * 从系统小窗展开回全屏时，直播页的内核页面缩放会停在 >100%
     * （visualViewport.scale ≈ 1.0937），画面被放大、以左上角对齐、还能用手指拖动。
     * 这个缩放 WebView 的 getScale()/zoomBy() 管不到，只有页面的 viewport 元信息变化
     * 才会让内核重新应用 initial-scale。所以这里把 viewport 临时改成一个只差万分之一的
     * 值再改回去，强制页面缩回 100%（视觉上察觉不到）。
     * 缩放可能在内核完成窗口尺寸切换后才出现，所以额外观察一小段时间。
     */
    private fun resetPageZoom() {
        val script = """
            (function(){
              function fix(){
                try{
                  var vv=window.visualViewport;
                  if(!vv||vv.scale<=1.005)return;
                  var m=document.querySelector('meta[name="viewport"]');
                  var orig=m?m.getAttribute('content'):null;
                  if(!m){
                    m=document.createElement('meta');m.setAttribute('name','viewport');
                    (document.head||document.documentElement).appendChild(m);
                  }
                  m.setAttribute('content','width=device-width, initial-scale=1.0001');
                  requestAnimationFrame(function(){requestAnimationFrame(function(){
                    if(orig===null){if(m.parentNode)m.parentNode.removeChild(m);}
                    else{m.setAttribute('content',orig);}
                  });});
                }catch(e){}
              }
              if(window.__tblZoomWatch){clearInterval(window.__tblZoomWatch);window.__tblZoomWatch=null;}
              var n=0;
              fix();
              window.__tblZoomWatch=setInterval(function(){
                fix();
                if(++n>=12){clearInterval(window.__tblZoomWatch);window.__tblZoomWatch=null;}
              },250);
            })()
        """.trimIndent()
        evaluateJavascript(script)
    }

    protected open fun onMinimize() {
        // 首页和播放页是独立任务，moveTaskToBack 只会移动当前任务，
        // 可能把另一个任务带回前台；这里直接回桌面。
        val home = Intent(Intent.ACTION_MAIN)
            .addCategory(Intent.CATEGORY_HOME)
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        startActivity(home)
    }

    protected open fun shouldHandleWebBack(): Boolean = true

    protected open fun shouldOpenPlayerInNewActivity(): Boolean = false

    protected open fun shouldOpenLiveRoomInNewActivity(): Boolean = false

    protected open fun shouldBlockExternalNavigation(uri: android.net.Uri): Boolean = false

    private fun clientPlayerUrlFor(uri: android.net.Uri): String? {
        val host = uri.host ?: return null
        val path = uri.path ?: return null
        if (host == "bilipc.bilibili.com" && path.endsWith("/player.html")) {
            return uri.toString()
        }
        if ((host == "www.bilibili.com" || host == "m.bilibili.com") &&
            path.startsWith("/video/")
        ) {
            val bvid = path.substringAfter("/video/").substringBefore("/")
            if (bvid.startsWith("BV")) {
                return "/player.html?type=ugc&bvid=$bvid"
            }
        }
        return null
    }

    /** live.bilibili.com/<房间号> 这类地址返回房间号，其余返回 null。 */
    private fun liveRoomIdFor(uri: android.net.Uri): String? {
        if (uri.host != "live.bilibili.com") {
            return null
        }
        val segment = uri.path?.trim('/')?.substringBefore('/').orEmpty()
        return if (segment.isNotEmpty() && segment.all { it.isDigit() }) segment else null
    }

    protected fun openPlayer(url: String) {
        val target = if (url.startsWith("/")) "https://bilipc.bilibili.com$url" else url
        val existing = PlayerActivity.currentInstance()
        if (existing !== this && existing != null) {
            // 播放页只保留一个窗口：同一条视频直接带回前台，别的视频在当前窗口里切换。
            // 不再为每次打开新建任务，否则最近任务里会堆满播放页。
            if (!PlayerActivity.isSameVideo(existing.playUrl, target)) {
                if (!existing.isInPictureInPictureMode) {
                    // 新视频顶掉旧视频；旧页面被覆盖不是用户按 Home，不该自动进 PiP。
                    existing.suppressPipOnLeave()
                }
                existing.loadVideo(url)
            }
            existing.bringToFrontIfNeeded()
            PlayerActivity.rememberLaunch(target)
            return
        }
        if (existing == null && PlayerActivity.isLaunchingSameVideo(target)) {
            // 上一个播放页还没创建完（startActivity 异步），不能再开第二个。
            return
        }
        PlayerActivity.rememberLaunch(target)
        startActivity(
            Intent(this, PlayerActivity::class.java)
                .putExtra(PlayerActivity.EXTRA_URL, url)
        )
    }

    /**
     * 打开直播间。官方客户端只保留一个直播间窗口，切换房间时复用当前窗口。
     */
    protected fun openLiveRoom(roomId: String) {
        val id = roomId.trim()
        if (id.isEmpty()) return
        val existing = LiveRoomActivity.currentInstance()
        if (existing !== this && existing != null) {
            existing.loadRoom(id)
            existing.bringToFrontIfNeeded()
            return
        }
        // 和播放页一样留在当前任务里，不再新建任务，避免最近任务被填满。
        startActivity(
            Intent(this, LiveRoomActivity::class.java)
                .putExtra(LiveRoomActivity.EXTRA_ROOM_ID, id)
        )
    }

    /** 供子类（直播间复用窗口）切换当前页面。 */
    protected fun loadUrl(url: String) {
        webView.loadUrl(url)
    }

    /** 子类（直播间）需要在 WebView 里取页面信息。 */
    protected fun currentWebView(): WebView = webView

    protected fun evaluateJavascript(script: String, callback: ((String?) -> Unit)? = null) {
        runOnUiThread {
            try {
                webView.evaluateJavascript(script) { value -> callback?.invoke(value) }
            } catch (_: Exception) {
                /* 页面还没准备好时忽略 */
            }
        }
    }

    protected open fun onToggleMaximize() {
        // 首页默认不响应；PlayerActivity 覆盖为进入系统 PiP。
    }

    protected open fun onClose() {
        finish()
    }

    override fun onDestroy() {
        unregisterActivity(this)
        handler.removeCallbacks(loginCheckTask)
        // 播放页/直播间直接退出时页面不会触发 beforeunload，这里兜底撤掉通知。
        PlaybackNotification.cancelIfOwner(this)
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

    private fun resolveTreeUriPath(uri: Uri): String {
        val docId = DocumentsContract.getTreeDocumentId(uri) ?: return uri.path ?: uri.toString()
        return if (docId.startsWith("primary:")) {
            val sub = docId.substringAfter("primary:")
            "/storage/emulated/0" + if (sub.isNotEmpty()) "/$sub" else ""
        } else if (docId.contains(":")) {
            val parts = docId.split(":", limit = 2)
            "/storage/${parts[0]}" + if (parts.size > 1 && parts[1].isNotEmpty()) "/${parts[1]}" else ""
        } else {
            uri.path ?: docId
        }
    }

    fun resetDownloadDirectory() {
        val defaultPath = File(
            Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS),
            "Bilibili"
        ).absolutePath
        SettingsStore.set(this, "downloadPath", defaultPath)
        SettingsStore.set(this, "isDownloadDefault", "true")
        SettingsStore.remove(this, "downloadUri")
        notifyDownloadInfoChanged()
        Toast.makeText(this, "已恢复默认下载目录", Toast.LENGTH_SHORT).show()
    }

    fun notifyDownloadInfoChanged() {
        val infoJson = getDownloadInfoJson()
        runOnUiThread {
            val script = "(function(){" +
                "if(window.biliBridgePc&&window.biliBridgePc.emit){" +
                "window.biliBridgePc.emit('config/downloadInfoChange', { data: $infoJson });" +
                "}" +
                "})()"
            webView.evaluateJavascript(script, null)
        }
    }

    fun getDownloadInfoJson(): String {
        val defaultPath = File(
            Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS),
            "Bilibili"
        ).absolutePath
        val savedPath = SettingsStore.get(this, "downloadPath", defaultPath)
        val path = if (savedPath.isBlank() || savedPath.startsWith("[object")) {
            SettingsStore.set(this, "downloadPath", defaultPath)
            SettingsStore.set(this, "isDownloadDefault", "true")
            defaultPath
        } else {
            savedPath
        }
        val isDefault = SettingsStore.get(this, "isDownloadDefault", "true") == "true"
        val isAutoStart = SettingsStore.get(this, "isDlAutoStart", "true") == "true"
        val isDlNoSleep = SettingsStore.get(this, "isDlNoSleep", "false") == "true"
        val obj = JSONObject().apply {
            put("downloadPath", path)
            put("isDefault", isDefault)
            put("isAutoStart", isAutoStart)
            put("isDlNoSleep", isDlNoSleep)
            put("gameDownloadPath", "")
            put("isGameDefault", true)
        }
        return obj.toString()
    }

    fun goToPage(page: String, metaJson: String?) {
        val meta = if (!metaJson.isNullOrBlank()) metaJson else "{}"
        val script = "(function(){" +
            "if(window.biliBridgePc&&window.biliBridgePc.emit){" +
            "window.biliBridgePc.emit('events/goToPage', { data: { page: '$page', meta: $meta } });" +
            "}" +
            "})()"
        runOnUiThread {
            webView.evaluateJavascript(script, null)
        }
    }

    @Suppress("unused")
    inner class JsBridge {
        @JavascriptInterface
        fun startLogin() {
            runOnUiThread {
                loginLauncher.launch(Intent(this@BiliWebActivity, LoginActivity::class.java))
            }
        }

        @JavascriptInterface
        fun enterPip() {
            runOnUiThread { this@BiliWebActivity.enterPip() }
        }

        @JavascriptInterface
        fun exitPip() {
            runOnUiThread {
                // 把当前 Activity 调回前台，系统会自动退出 PiP。
                startActivity(
                    Intent(this@BiliWebActivity, this@BiliWebActivity::class.java)
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
            runOnUiThread { onClose() }
        }

        @JavascriptInterface
        fun moveToBack() {
            runOnUiThread { onMinimize() }
        }

        @JavascriptInterface
        fun toggleMaximize() {
            runOnUiThread { onToggleMaximize() }
        }

        @JavascriptInterface
        fun closeWindow() {
            runOnUiThread { onClose() }
        }

        @JavascriptInterface
        fun openPlayer(url: String) {
            runOnUiThread { this@BiliWebActivity.openPlayer(url) }
        }

        /** render 的 window/openLiveRoomWindow：打开独立直播间窗口。 */
        @JavascriptInterface
        fun openLiveRoom(roomId: String?) {
            val id = roomId?.trim().orEmpty()
            if (id.isEmpty()) return
            runOnUiThread { this@BiliWebActivity.openLiveRoom(id) }
        }

        /** render 的 window/focusLiveRoomWindow：把已打开的直播间窗口带回前台。 */
        @JavascriptInterface
        fun focusLiveRoom() {
            runOnUiThread { LiveRoomActivity.currentInstance()?.bringToFrontIfNeeded() }
        }

        @JavascriptInterface
        fun isLiveRoomVisible(): Boolean = LiveRoomActivity.currentInstance() != null

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
                    PlaybackController.bind(webView)
                    PlaybackNotification.update(
                        this@BiliWebActivity,
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
            runOnUiThread { PlaybackNotification.cancel(this@BiliWebActivity) }
        }

        @JavascriptInterface
        fun getTheme(windowType: String?): String {
            return ThemePrefs.effective(
                this@BiliWebActivity,
                windowType ?: "MainWindowTheme"
            )
        }

        @JavascriptInterface
        fun setTheme(windowType: String?, theme: String?) {
            if (theme.isNullOrEmpty()) {
                return
            }
            if (windowType == "PlayerWindowTheme") {
                ThemePrefs.setPlayer(this@BiliWebActivity, theme)
            } else {
                ThemePrefs.setMain(this@BiliWebActivity, theme)
            }
            runOnUiThread { applyTheme() }
        }

        @JavascriptInterface
        fun getSetting(key: String, defaultValue: String): String {
            return SettingsStore.get(this@BiliWebActivity, key, defaultValue)
        }

        @JavascriptInterface
        fun setSetting(key: String, value: String) {
            SettingsStore.set(this@BiliWebActivity, key, value)
            // 客户端用它判断是否保留 console，这里只持久化即可。
        }

        @JavascriptInterface
        fun clearAppCache() {
            runOnUiThread {
                webView.clearCache(true)
                SettingsStore.set(this@BiliWebActivity, "appCacheSize", "0")
            }
        }

        @JavascriptInterface
        fun setCookie(url: String, cookieString: String) {
            val manager = CookieManager.getInstance()
            manager.setCookie(url, cookieString)
            manager.flush()
        }

        /**
         * render 通过 auth/setCookies 交回来的 cookie（含 expirationDate），
         * 这里存进持久化存储，对齐官方 secureStore 的行为。
         */
        @JavascriptInterface
        fun setAuthCookies(cookiesJson: String?) {
            val json = cookiesJson ?: return
            try {
                val array = org.json.JSONArray(json)
                val cookies = (0 until array.length()).mapNotNull { index ->
                    val item = array.optJSONObject(index) ?: return@mapNotNull null
                    val name = item.optString("name")
                    if (name.isEmpty()) return@mapNotNull null
                    AuthCookie(
                        name = name,
                        value = item.optString("value"),
                        expirationDate = item.optLong("expirationDate")
                    )
                }
                if (cookies.isNotEmpty()) {
                    AuthCookieStore.upsert(this@BiliWebActivity, cookies)
                }
            } catch (_: Exception) {
                /* 忽略格式错误 */
            }
        }

        @JavascriptInterface
        fun getAuthCookies(): String {
            return try {
                val array = org.json.JSONArray()
                AuthCookieStore.getCookies(this@BiliWebActivity).forEach { cookie ->
                    array.put(
                        org.json.JSONObject()
                            .put("name", cookie.name)
                            .put("value", cookie.value)
                            .put("expirationDate", cookie.expirationDate)
                    )
                }
                array.toString()
            } catch (_: Exception) {
                "[]"
            }
        }

        /** 官方 handleSetRefreshToken：保存登录票据续期用的 refresh_token。 */
        @JavascriptInterface
        fun setRefreshToken(token: String?) {
            if (token.isNullOrEmpty()) return
            AuthCookieStore.setRefreshToken(this@BiliWebActivity, token)
        }

        @JavascriptInterface
        fun isLoggedIn(): Boolean {
            val manager = CookieManager.getInstance()
            val cookie = manager.getCookie("https://api.bilibili.com")
                ?: manager.getCookie("https://www.bilibili.com")
                ?: manager.getCookie("https://bilipc.bilibili.com")
            return cookie?.contains("SESSDATA=") == true
        }

        @JavascriptInterface
        fun getDownloadInfo(): String {
            return getDownloadInfoJson()
        }

        @JavascriptInterface
        fun chooseDownloadDirectory() {
            runOnUiThread {
                folderPickerLauncher.launch(null)
            }
        }

        @JavascriptInterface
        fun resetDownloadDirectory() {
            runOnUiThread {
                this@BiliWebActivity.resetDownloadDirectory()
            }
        }

        @JavascriptInterface
        fun createDownloadTasks(tasksJson: String) {
            DownloadHelper.startDownloadTasks(this@BiliWebActivity, tasksJson, desktopUserAgent)
        }

        @JavascriptInterface
        fun getCompletedGroups(): String {
            return DownloadTaskStore.getCompletedGroupsJson(this@BiliWebActivity)
        }

        @JavascriptInterface
        fun getTaskList(): String {
            return DownloadTaskStore.getTaskListJson(this@BiliWebActivity)
        }

        @JavascriptInterface
        fun getGroupAllItems(groupId: String): String {
            return DownloadTaskStore.getGroupAllItemsJson(this@BiliWebActivity, groupId)
        }

        @JavascriptInterface
        fun getAllVideoList(search: String): String {
            return DownloadTaskStore.getAllVideoListJson(this@BiliWebActivity, search)
        }

        @JavascriptInterface
        fun deleteTasks(itemIdsJson: String) {
            try {
                val array = org.json.JSONArray(itemIdsJson)
                val list = mutableListOf<Long>()
                for (i in 0 until array.length()) list.add(array.getLong(i))
                DownloadTaskStore.deleteTasks(this@BiliWebActivity, list)
                broadcastStatusChange(0L, "deleted")
            } catch (_: Exception) {}
        }

        @JavascriptInterface
        fun deleteGroups(groupIdsJson: String) {
            try {
                val array = org.json.JSONArray(groupIdsJson)
                val list = mutableListOf<String>()
                for (i in 0 until array.length()) list.add(array.getString(i))
                DownloadTaskStore.deleteGroups(this@BiliWebActivity, list)
                broadcastStatusChange(0L, "deleted")
            } catch (_: Exception) {}
        }

        @JavascriptInterface
        fun deleteGroupItems(groupId: String, itemIdsJson: String) {
            try {
                val array = org.json.JSONArray(itemIdsJson)
                val list = mutableListOf<Long>()
                for (i in 0 until array.length()) list.add(array.getLong(i))
                DownloadTaskStore.deleteGroupItems(this@BiliWebActivity, groupId, list)
                broadcastStatusChange(0L, "deleted")
            } catch (_: Exception) {}
        }

        @JavascriptInterface
        fun deleteAllTasks() {
            DownloadTaskStore.deleteAllTasks(this@BiliWebActivity)
            broadcastStatusChange(0L, "deleted")
        }

        @JavascriptInterface
        fun deleteAllGroups() {
            DownloadTaskStore.deleteAllGroups(this@BiliWebActivity)
            broadcastStatusChange(0L, "deleted")
        }

        @JavascriptInterface
        fun openMainWindowPage(page: String, metaJson: String?) {
            runOnUiThread {
                val main = MainActivity.currentInstance()
                if (main != null) {
                    main.goToPage(page, metaJson)
                    val metaObj = try { JSONObject(metaJson ?: "{}") } catch (_: Exception) { null }
                    if (metaObj?.optInt("tab") == 1) {
                        main.bringToFrontIfNeeded()
                    }
                } else {
                    this@BiliWebActivity.goToPage(page, metaJson)
                }
            }
        }
    }
}
