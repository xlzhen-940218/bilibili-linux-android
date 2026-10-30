package com.xlzhen.bilitablet

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

    override fun onClose() {
        finish()
    }
}
