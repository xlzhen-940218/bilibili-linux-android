package com.xlzhen.bilitablet

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.os.Build
import android.os.Handler
import android.os.Looper
import android.support.v4.media.MediaMetadataCompat
import android.support.v4.media.session.MediaSessionCompat
import android.support.v4.media.session.PlaybackStateCompat
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.core.content.ContextCompat
import java.net.HttpURLConnection
import java.net.URL

/**
 * 播放页通知：标题、UP 主/简介、封面，以及播放/暂停/进度。
 * 通过 MediaSessionCompat + MediaStyle 交给系统渲染，避免各家 ROM 的媒体卡片
 * 自己推断播放状态导致图标和实际状态相反。
 */
object PlaybackNotification {

    private const val CHANNEL_ID = "playback"
    private const val NOTIFICATION_ID = 1001

    data class Data(
        val title: String,
        val cover: String,
        val desc: String,
        val playing: Boolean,
        val position: Long,
        val duration: Long
    )

    private var current: Data? = null
    private var coverUrl: String? = null
    private var coverBitmap: Bitmap? = null
    private var mediaSession: MediaSessionCompat? = null

    fun update(
        context: Context,
        title: String,
        cover: String,
        desc: String,
        playing: Boolean,
        position: Long,
        duration: Long
    ) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU &&
            ContextCompat.checkSelfPermission(
                context,
                android.Manifest.permission.POST_NOTIFICATIONS
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            return
        }
        ensureChannel(context)
        ensureSession(context)
        val data = Data(title, cover, desc, playing, position, duration)
        current = data
        show(context, data)
        if (cover.isNotEmpty() && cover != coverUrl) {
            coverUrl = cover
            loadCover(context, cover) { bitmap ->
                coverBitmap = bitmap
                current?.let { show(context, it) }
            }
        }
    }

    fun cancel(context: Context) {
        NotificationManagerCompat.from(context).cancel(NOTIFICATION_ID)
        current = null
        coverUrl = null
        coverBitmap = null
    }

    private fun ensureChannel(context: Context) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
            return
        }
        val manager = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        if (manager.getNotificationChannel(CHANNEL_ID) == null) {
            val channel = NotificationChannel(
                CHANNEL_ID,
                "播放控制",
                NotificationManager.IMPORTANCE_LOW
            ).apply {
                description = "播放页的标题、封面和播放控制"
                setShowBadge(false)
            }
            manager.createNotificationChannel(channel)
        }
    }

    private fun ensureSession(context: Context) {
        if (mediaSession != null) {
            return
        }
        val session = MediaSessionCompat(context, "BiliTablet")
        session.setCallback(object : MediaSessionCompat.Callback() {
            override fun onPlay() {
                PlaybackController.play()
            }

            override fun onPause() {
                PlaybackController.pause()
            }

            override fun onSeekTo(pos: Long) {
                PlaybackController.seekTo(pos)
            }
        })
        session.isActive = true
        mediaSession = session
    }

    private fun show(context: Context, data: Data) {
        val session = mediaSession
        val metadata = MediaMetadataCompat.Builder()
            .putString(MediaMetadataCompat.METADATA_KEY_TITLE, data.title)
            .putString(MediaMetadataCompat.METADATA_KEY_ARTIST, data.desc)
            .putLong(MediaMetadataCompat.METADATA_KEY_DURATION, data.duration)
        coverBitmap?.let {
            metadata.putBitmap(MediaMetadataCompat.METADATA_KEY_ALBUM_ART, it)
            metadata.putBitmap(MediaMetadataCompat.METADATA_KEY_ART, it)
        }
        session?.setMetadata(metadata.build())

        val actions = PlaybackStateCompat.ACTION_PLAY or
            PlaybackStateCompat.ACTION_PAUSE or
            PlaybackStateCompat.ACTION_PLAY_PAUSE or
            PlaybackStateCompat.ACTION_SEEK_TO
        session?.setPlaybackState(
            PlaybackStateCompat.Builder()
                .setActions(actions)
                .setState(
                    if (data.playing) PlaybackStateCompat.STATE_PLAYING
                    else PlaybackStateCompat.STATE_PAUSED,
                    data.position.coerceAtLeast(0),
                    if (data.playing) 1f else 0f
                )
                .build()
        )

        val openIntent = Intent(context, MainActivity::class.java).apply {
            addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP or Intent.FLAG_ACTIVITY_REORDER_TO_FRONT)
        }
        val contentIntent = PendingIntent.getActivity(
            context,
            0,
            openIntent,
            PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
        )
        val toggleIntent = PendingIntent.getBroadcast(
            context,
            1,
            Intent(context, PlaybackActionReceiver::class.java)
                .setAction(PlaybackActionReceiver.ACTION_TOGGLE),
            PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
        )

        val builder = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_stat_bili)
            .setContentTitle(data.title)
            .setContentText(data.desc)
            .setContentIntent(contentIntent)
            .setOnlyAlertOnce(true)
            .setOngoing(data.playing)
            .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
            .addAction(
                if (data.playing) android.R.drawable.ic_media_pause
                else android.R.drawable.ic_media_play,
                if (data.playing) "暂停" else "播放",
                toggleIntent
            )
            .setStyle(
                androidx.media.app.NotificationCompat.MediaStyle()
                    .setMediaSession(session?.sessionToken)
                    .setShowActionsInCompactView(0)
            )

        coverBitmap?.let { builder.setLargeIcon(it) }

        @Suppress("MissingPermission")
        NotificationManagerCompat.from(context).notify(NOTIFICATION_ID, builder.build())
    }

    private fun loadCover(context: Context, url: String, onDone: (Bitmap?) -> Unit) {
        Thread {
            var bitmap: Bitmap? = null
            try {
                val connection = URL(url).openConnection() as HttpURLConnection
                connection.connectTimeout = 5_000
                connection.readTimeout = 8_000
                connection.setRequestProperty(
                    "User-Agent",
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36"
                )
                connection.setRequestProperty("Referer", "https://www.bilibili.com/")
                bitmap = BitmapFactory.decodeStream(connection.inputStream)
            } catch (_: Exception) {
                bitmap = null
            }
            Handler(Looper.getMainLooper()).post { onDone(bitmap) }
        }.start()
    }
}
