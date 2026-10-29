package dev.bilitablet

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent

class PlaybackActionReceiver : BroadcastReceiver() {

    companion object {
        const val ACTION_TOGGLE = "dev.bilitablet.PLAYBACK_TOGGLE"
    }

    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action == ACTION_TOGGLE) {
            PlaybackController.toggle()
        }
    }
}
