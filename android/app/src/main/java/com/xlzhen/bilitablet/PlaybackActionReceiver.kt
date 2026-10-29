package com.xlzhen.bilitablet

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent

class PlaybackActionReceiver : BroadcastReceiver() {

    companion object {
        const val ACTION_TOGGLE = "com.xlzhen.bilitablet.PLAYBACK_TOGGLE"
    }

    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action == ACTION_TOGGLE) {
            PlaybackController.toggle()
        }
    }
}
