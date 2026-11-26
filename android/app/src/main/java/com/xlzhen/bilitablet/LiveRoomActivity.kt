package com.xlzhen.bilitablet

import android.content.Intent
import android.content.res.Configuration
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import org.json.JSONObject
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
 * - 按 Home 时和播放页一样进入系统画中画；
 * - 播放状态同步到通知栏（视频播放页那套 MediaSession）。
 */
class LiveRoomActivity : BiliWebActivity() {

    companion object {
        const val EXTRA_ROOM_ID = "live_room_id"

        /** 直播页 iframe 里的标题、主播头像和播放状态。 */
        private val PLAYBACK_INFO_SCRIPT = """
            (function(){
              var f=document.querySelector('iframe');var w=f&&f.contentWindow;var d=w&&w.document;
              if(!d)return null;
              var v=d.querySelector('video');if(!v)return null;
              var parts=(d.title||'').split(' - ');
              var title=parts[0]||'直播间';var anchor=parts[1]||'';
              var face=d.querySelector('.head-info-section .blive-avatar-face');var cover='';
              if(face){var bg=getComputedStyle(face).backgroundImage||'';
                var m=bg.match(/url\(["']?(.*?)["']?\)/);if(m)cover=m[1];}
              return {title:title,cover:cover,
                desc:anchor?(anchor+' · 哔哩哔哩直播'):'哔哩哔哩直播',
                playing:!v.paused};
            })()
        """.trimIndent()

        private var live: WeakReference<LiveRoomActivity>? = null

        /**
         * 画中画只保留播放器：隐藏宿主的标题栏、聊天区、礼物栏和主播信息，
         * 让固定定位的播放器铺满整个小窗。页面会周期性重写内联样式，所以定时重刷。
         * 进小窗前会记下播放器容器的原始内联样式，退出时还原，避免回来画面比例不对。
         */
        private val PIP_ENTER_SCRIPT = """
            (function(){
              function style(doc,id,css){var s=doc.getElementById(id);
                if(!s){s=doc.createElement('style');s.id=id;(doc.head||doc.documentElement).appendChild(s);}
                s.textContent=css;}
              function apply(){
                style(document,'tbl-pip-host','.app-live-header{display:none !important}.main.pc-live-main{height:100% !important}');
                var f=document.querySelector('iframe');var d=f&&f.contentWindow&&f.contentWindow.document;
                if(!d)return;
                style(d,'tbl-pip-room','.aside-area{display:none !important}.gift-control-section{display:none !important}.head-info-section{display:none !important}');
                var fs=d.querySelector('#fullscreen-container');
                var ps=d.querySelector('.player-section');
                if(!window.__biliPipSaved&&fs&&ps){
                  window.__biliPipSaved={fs:fs.getAttribute('style')||'',ps:ps.getAttribute('style')||''};
                }
                if(fs){['left','top','right','bottom'].forEach(function(k){fs.style.setProperty(k,'0','important')});
                  fs.style.setProperty('width','auto','important');
                  fs.style.setProperty('height','auto','important');
                  // 隐藏礼物栏后它还占着 99px 的网格行，改成单行让播放器真正铺满。
                  fs.style.setProperty('grid-template-rows','minmax(0, 1fr)','important');}
                if(ps){ps.style.setProperty('height','100%','important');}
              }
              apply();
              if(window.__biliPipTimer)clearInterval(window.__biliPipTimer);
              window.__biliPipTimer=setInterval(apply,800);
            })()
        """.trimIndent()

        private val PIP_EXIT_SCRIPT = """
            (function(){
              if(window.__biliPipTimer){clearInterval(window.__biliPipTimer);window.__biliPipTimer=null;}
              var hs=document.getElementById('tbl-pip-host');if(hs)hs.remove();
              var f=document.querySelector('iframe');var d=f&&f.contentWindow&&f.contentWindow.document;
              if(!d)return;
              var rs=d.getElementById('tbl-pip-room');if(rs)rs.remove();
              var saved=window.__biliPipSaved;
              if(saved){
                var fs=d.querySelector('#fullscreen-container');
                if(fs)fs.setAttribute('style',saved.fs);
                var ps=d.querySelector('.player-section');
                if(ps)ps.setAttribute('style',saved.ps);
                window.__biliPipSaved=null;
              }
              try{d.defaultView.dispatchEvent(new Event('resize'));}catch(e){}
              try{window.dispatchEvent(new Event('resize'));}catch(e){}
            })()
        """.trimIndent()

        fun currentInstance(): LiveRoomActivity? = live?.get()

        fun roomUrl(roomId: String): String =
            "https://live.bilibili.com/desktop/$roomId"
    }

    private val roomId: String
        get() = intent?.getStringExtra(EXTRA_ROOM_ID).orEmpty()

    private val handler = Handler(Looper.getMainLooper())

    /** 定时把直播间的标题/主播/播放状态同步到通知栏。 */
    private val playbackSync = object : Runnable {
        override fun run() {
            pushPlaybackNotification()
            handler.postDelayed(this, 5000L)
        }
    }

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
        handler.postDelayed(playbackSync, 2500L)
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

    private fun pushPlaybackNotification() {
        evaluateJavascript(PLAYBACK_INFO_SCRIPT) { value ->
            if (value.isNullOrBlank() || value == "null") {
                return@evaluateJavascript
            }
            try {
                val info = JSONObject(value)
                PlaybackController.bindLive(currentWebView())
                PlaybackNotification.update(
                    this,
                    info.optString("title").ifEmpty { "直播间" },
                    info.optString("cover"),
                    info.optString("desc"),
                    info.optBoolean("playing"),
                    0L,
                    0L,
                    Intent(this, LiveRoomActivity::class.java)
                        .putExtra(EXTRA_ROOM_ID, roomId)
                        .addFlags(
                            Intent.FLAG_ACTIVITY_NEW_TASK or
                                Intent.FLAG_ACTIVITY_REORDER_TO_FRONT
                        )
                )
            } catch (_: Exception) {
                /* 页面结构变化时忽略这一轮 */
            }
        }
    }

    override fun onPictureInPictureModeChanged(
        isInPictureInPictureMode: Boolean,
        newConfig: Configuration
    ) {
        super.onPictureInPictureModeChanged(isInPictureInPictureMode, newConfig)
        // 和播放页一致：小窗里只显示播放器。
        evaluateJavascript(if (isInPictureInPictureMode) PIP_ENTER_SCRIPT else PIP_EXIT_SCRIPT)
    }

    override fun shouldHandleWebBack(): Boolean = false

    override fun shouldEnterPipOnLeave(): Boolean = true

    override fun onClose() {
        finish()
    }

    override fun onDestroy() {
        handler.removeCallbacks(playbackSync)
        if (live?.get() === this) {
            live = null
            broadcastLiveRoomVisible(false)
        }
        super.onDestroy()
    }
}
