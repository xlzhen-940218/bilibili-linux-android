package dev.bilitablet

import android.webkit.WebView
import java.lang.ref.WeakReference

/** 通知/媒体会话和 WebView 之间的桥，只持有弱引用，避免内存泄漏。 */
object PlaybackController {

    private var webViewRef: WeakReference<WebView>? = null

    fun bind(webView: WebView) {
        webViewRef = WeakReference(webView)
    }

    fun toggle() {
        evaluate(
            "(function(){var v=document.querySelector('video');" +
                "if(!v)return 'none';" +
                "if(v.paused){v.play()}else{v.pause()}" +
                "return v.paused?'paused':'playing'})()"
        )
    }

    fun play() {
        evaluate(
            "(function(){var v=document.querySelector('video');" +
                "if(v&&v.paused)v.play()})()"
        )
    }

    fun pause() {
        evaluate(
            "(function(){var v=document.querySelector('video');" +
                "if(v&&!v.paused)v.pause()})()"
        )
    }

    fun seekTo(positionMs: Long) {
        evaluate(
            "(function(){var v=document.querySelector('video');" +
                "if(v)v.currentTime=" + (positionMs / 1000.0) + "})()"
        )
    }

    private fun evaluate(script: String) {
        val webView = webViewRef?.get() ?: return
        webView.post {
            webView.evaluateJavascript(script, null)
        }
    }
}
