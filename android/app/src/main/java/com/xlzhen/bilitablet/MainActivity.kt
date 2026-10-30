package com.xlzhen.bilitablet

class MainActivity : BiliWebActivity() {

    override val startUrl: String = "https://bilipc.bilibili.com/index.html"

    override fun shouldOpenPlayerInNewActivity(): Boolean = true

    override fun onClose() {
        // 首页的关闭按钮：退出软件。
        finishAndRemoveTask()
    }
}
