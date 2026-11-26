package com.xlzhen.bilitablet

import android.content.Intent
import android.os.Bundle
import java.lang.ref.WeakReference

class MainActivity : BiliWebActivity() {

    companion object {
        private var live: WeakReference<MainActivity>? = null
        fun currentInstance(): MainActivity? = live?.get()
    }

    override val startUrl: String = "https://bilipc.bilibili.com/index.html"

    override fun shouldOpenPlayerInNewActivity(): Boolean = true

    override fun shouldOpenLiveRoomInNewActivity(): Boolean = true

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        live = WeakReference(this)
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.TIRAMISU) {
            if (checkSelfPermission(android.Manifest.permission.POST_NOTIFICATIONS) != android.content.pm.PackageManager.PERMISSION_GRANTED) {
                requestPermissions(arrayOf(android.Manifest.permission.POST_NOTIFICATIONS), 101)
            }
        }
    }

    override fun onDestroy() {
        if (live?.get() === this) {
            live = null
        }
        super.onDestroy()
    }

    fun bringToFrontIfNeeded() {
        startActivity(
            Intent(this, MainActivity::class.java)
                .addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT)
        )
    }

    override fun onClose() {
        // 首页的关闭按钮：退出软件。
        finishAndRemoveTask()
    }
}
