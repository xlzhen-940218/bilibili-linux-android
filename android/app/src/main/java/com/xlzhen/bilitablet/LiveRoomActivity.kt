package com.xlzhen.bilitablet

import android.content.Intent
import android.os.Bundle
import java.lang.ref.WeakReference

/**
 * 直播间独立窗口。
 *
 * 和官方客户端完全一致：加载 https://live.bilibili.com/desktop/<roomId>。
 * 这是官方桌面端直播间的宿主页（标题「桌面端直播间」），自带标题栏
 * （回到主界面 / 前进后退 / 最小化等），内部再用同源 iframe 加载
 * /blanc/<roomId>?liteVersion=true&spmid_source=client 的简单版直播间。
 * 直接加载 /<roomId> 或不带 liteVersion 只会得到整站网页版。
 *
 * - 同一时间只保留一个直播间窗口，切换房间时复用当前窗口；
 * - 返回键直接关闭直播间，不处理网页内部历史；
 * - 按 Home 时和播放页一样进入系统画中画。
 */
class LiveRoomActivity : BiliWebActivity() {

    companion object {
        const val EXTRA_ROOM_ID = "live_room_id"

        private var live: WeakReference<LiveRoomActivity>? = null

        fun currentInstance(): LiveRoomActivity? = live?.get()

        fun roomUrl(roomId: String): String =
            "https://live.bilibili.com/desktop/$roomId"
    }

    private val roomId: String
        get() = intent?.getStringExtra(EXTRA_ROOM_ID).orEmpty()

    override val startUrl: String
        get() = roomUrl(roomId)

    /** 直播间和播放页一样用黑底窗口主题。 */
    override val windowType: String = "PlayerWindowTheme"

    /** 桌面端直播间宿主页依赖 window.biliBridgePc，需要把 bridge 注入这个来源。 */
    override val injectRenderBridge: Boolean = true

    override val bridgeScriptOrigins: Set<String> = setOf("https://live.bilibili.com")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        live = WeakReference(this)
        broadcastLiveRoomVisible(true)
    }

    /** 复用当前直播间窗口时切换到新的房间。 */
    fun loadRoom(newRoomId: String) {
        if (newRoomId.isEmpty() || newRoomId == roomId) {
            return
        }
        intent = Intent(intent).putExtra(EXTRA_ROOM_ID, newRoomId)
        loadUrl(roomUrl(newRoomId))
    }

    fun bringToFrontIfNeeded() {
        if (isInPictureInPictureMode || hasWindowFocus()) {
            return
        }
        startActivity(
            Intent(this, LiveRoomActivity::class.java)
                .addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT)
                .putExtra(EXTRA_ROOM_ID, roomId)
        )
    }

    override fun shouldHandleWebBack(): Boolean = false

    override fun shouldEnterPipOnLeave(): Boolean = true

    override fun onClose() {
        finish()
    }

    override fun onDestroy() {
        if (live?.get() === this) {
            live = null
            broadcastLiveRoomVisible(false)
        }
        super.onDestroy()
    }
}
