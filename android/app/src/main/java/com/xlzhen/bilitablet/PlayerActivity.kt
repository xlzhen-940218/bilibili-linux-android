package com.xlzhen.bilitablet

import android.content.res.Configuration

/**
 * 播放页独立 Activity：
 * - 与首页分开任务，允许手动分屏；
 * - 最小化回桌面，全屏切换进入系统 PiP，关闭只结束播放页（回首页不刷新）。
 */
class PlayerActivity : BiliWebActivity() {

    companion object {
        const val EXTRA_URL = "player_url"
    }

    override val startUrl: String
        get() {
            val raw = intent.getStringExtra(EXTRA_URL) ?: "/player.html"
            return if (raw.startsWith("/")) {
                "https://bilipc.bilibili.com$raw"
            } else {
                raw
            }
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
