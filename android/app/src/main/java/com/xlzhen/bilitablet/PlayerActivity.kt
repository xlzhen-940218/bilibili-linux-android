package com.xlzhen.bilitablet

import android.content.Intent
import android.content.res.Configuration
import android.net.Uri
import android.os.Bundle
import android.os.SystemClock
import java.lang.ref.WeakReference

/**
 * 播放页独立 Activity：
 * - 与首页分开任务，允许手动分屏；
 * - 最小化回桌面，全屏切换进入系统 PiP，关闭只结束播放页（回首页不刷新）；
 * - 同一条视频只保留一个播放页：首页卡片既触发 <a href> 导航，又会调用
 *   window/openPlayerWindow，两条路径都会走到 openPlayer。
 */
class PlayerActivity : BiliWebActivity() {

    companion object {
        const val EXTRA_URL = "player_url"

        /** 两次打开请求的间隔小于该值时视为同一次点击。 */
        private const val DEDUPE_WINDOW_MS = 1500L

        private var live: WeakReference<PlayerActivity>? = null
        private var lastLaunchUrl: String? = null
        private var lastLaunchAt = 0L

        fun currentInstance(): PlayerActivity? = live?.get()

        /** 上一个播放页可能还没创建完成（startActivity 是异步的），用请求时间兜底去重。 */
        fun isLaunchingSameVideo(url: String): Boolean {
            val previous = lastLaunchUrl ?: return false
            return isSameVideo(previous, url) &&
                SystemClock.elapsedRealtime() - lastLaunchAt < DEDUPE_WINDOW_MS
        }

        fun rememberLaunch(url: String) {
            lastLaunchUrl = url
            lastLaunchAt = SystemClock.elapsedRealtime()
        }

        fun isSameVideo(a: String?, b: String?): Boolean {
            if (a.isNullOrBlank() || b.isNullOrBlank()) {
                return false
            }
            val keyA = videoKey(a)
            val keyB = videoKey(b)
            return if (keyA != null && keyB != null) keyA == keyB else a == b
        }

        /** 首页两条路径给出的 URL 参数并不完全一致，按视频标识而不是整串 URL 比较。 */
        private fun videoKey(url: String): String? {
            val uri = Uri.parse(url)
            uri.getQueryParameter("bvid")?.takeIf { it.isNotEmpty() }?.let { return "bvid:$it" }
            uri.getQueryParameter("aid")?.takeIf { it.isNotEmpty() }?.let { return "aid:$it" }
            uri.getQueryParameter("epid")?.takeIf { it.isNotEmpty() }?.let { return "epid:$it" }
            uri.getQueryParameter("seasonId")?.takeIf { it.isNotEmpty() }?.let { return "season:$it" }
            return null
        }
    }

    /** 启动请求里的原始地址，可能是 `/player.html?...` 或绝对地址。 */
    val rawUrl: String
        get() = intent.getStringExtra(EXTRA_URL) ?: "/player.html"

    /** 实际加载的绝对地址。 */
    val playUrl: String
        get() = startUrl

    override val startUrl: String
        get() {
            val raw = rawUrl
            return if (raw.startsWith("/")) {
                "https://bilipc.bilibili.com$raw"
            } else {
                raw
            }
        }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        live = WeakReference(this)
    }

    override fun onDestroy() {
        if (live?.get() === this) {
            live = null
            // 播放页已经关掉，下一次点同一个视频不应该被去重逻辑吞掉。
            lastLaunchUrl = null
        }
        super.onDestroy()
    }

    /** 同一视频重复点击时，把已在运行的播放页带回前台，而不是再开一个。 */
    fun bringToFrontIfNeeded() {
        if (isInPictureInPictureMode || hasWindowFocus()) {
            return
        }
        startActivity(
            Intent(this, PlayerActivity::class.java)
                .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_REORDER_TO_FRONT)
                .putExtra(EXTRA_URL, rawUrl)
        )
    }

    override fun onToggleMaximize() {
        enterPip()
    }

    override fun onPictureInPictureModeChanged(
        isInPictureInPictureMode: Boolean,
        newConfig: Configuration
    ) {
        super.onPictureInPictureModeChanged(isInPictureInPictureMode, newConfig)
        if (!isInPictureInPictureMode) {
            // 从 PiP 退出后回首页，不停留在播放页。
            finish()
        }
    }

    override fun shouldBlockExternalNavigation(uri: android.net.Uri): Boolean {
        // 播放页只保留客户端 render；网页版会把 PiP 退出后的画面带偏。
        val host = uri.host ?: return false
        return host == "www.bilibili.com" ||
            host == "bilibili.com" ||
            host == "m.bilibili.com"
    }

    override fun onClose() {
        finish()
    }

    override fun shouldHandleWebBack(): Boolean = false
}
