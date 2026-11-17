package com.xlzhen.bilitablet

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.ContentValues
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Environment
import android.os.Handler
import android.os.Looper
import android.provider.DocumentsContract
import android.provider.MediaStore
import android.webkit.CookieManager
import android.widget.Toast
import androidx.core.app.NotificationCompat
import androidx.core.content.FileProvider
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import java.io.FileOutputStream
import java.io.OutputStream
import java.net.HttpURLConnection
import java.net.URL
import java.util.concurrent.Executors

object DownloadHelper {
    private const val CHANNEL_ID = "bili_download_channel"
    private val executor = Executors.newFixedThreadPool(3)
    private val mainHandler = Handler(Looper.getMainLooper())

    private fun ensureNotificationChannel(context: Context) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val notificationManager = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            if (notificationManager.getNotificationChannel(CHANNEL_ID) == null) {
                val channel = NotificationChannel(
                    CHANNEL_ID,
                    "离线缓存下载",
                    NotificationManager.IMPORTANCE_LOW
                ).apply {
                    description = "视频下载进度及完成通知"
                    enableVibration(false)
                    setShowBadge(false)
                }
                notificationManager.createNotificationChannel(channel)
            }
        }
    }

    fun startDownloadTasks(context: Context, tasksJson: String, userAgent: String) {
        val appContext = context.applicationContext
        ensureNotificationChannel(appContext)

        executor.execute {
            try {
                val tasksArray = if (tasksJson.trim().startsWith("[")) {
                    JSONArray(tasksJson)
                } else {
                    val obj = JSONObject(tasksJson)
                    obj.optJSONArray("tasks") ?: JSONArray()
                }

                for (i in 0 until tasksArray.length()) {
                    val taskObj = tasksArray.getJSONObject(i)
                    val task = DownloadTask.fromJsonObject(taskObj)
                    DownloadTaskStore.addOrUpdateTask(appContext, task)
                    downloadSingleTask(appContext, task, userAgent)
                }
            } catch (e: Exception) {
                mainHandler.post {
                    Toast.makeText(appContext, "解析下载任务失败：${e.message}", Toast.LENGTH_SHORT).show()
                }
            }
        }
    }

    private fun downloadSingleTask(context: Context, task: DownloadTask, userAgent: String) {
        val notificationManager = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        val notificationId = (task.itemId % 100000).toInt().coerceAtLeast(1000)

        // 1. 初始化正在下载的通知
        val initialNotification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(android.R.drawable.stat_sys_download)
            .setContentTitle(task.title)
            .setContentText("正在准备下载...")
            .setProgress(100, 0, false)
            .setOngoing(true)
            .setOnlyAlertOnce(true)
            .build()
        notificationManager.notify(notificationId, initialNotification)

        // 2. 获取视频下载直链
        val cookieManager = CookieManager.getInstance()
        val cookie = cookieManager.getCookie("https://api.bilibili.com")
            ?: cookieManager.getCookie("https://bilipc.bilibili.com")
            ?: cookieManager.getCookie("https://bilibili.com")
            ?: ""

        val bvidParam = if (task.bvid.isNotEmpty()) "bvid=${task.bvid}" else "avid=${task.aid}"
        val playUrlApi = "https://api.bilibili.com/x/player/playurl?$bvidParam&cid=${task.cid}&qn=${task.qn}&fnval=0&fnver=0&fourk=1"
        var videoUrl: String? = null
        var totalBytes = task.totalSize

        try {
            val url = URL(playUrlApi)
            val conn = (url.openConnection() as HttpURLConnection).apply {
                requestMethod = "GET"
                connectTimeout = 10000
                readTimeout = 10000
                setRequestProperty("User-Agent", userAgent)
                setRequestProperty("Referer", if (task.bvid.isNotEmpty()) "https://www.bilibili.com/video/${task.bvid}" else "https://www.bilibili.com")
                if (cookie.isNotEmpty()) {
                    setRequestProperty("Cookie", cookie)
                }
            }
            if (conn.responseCode == 200) {
                val respText = conn.inputStream.bufferedReader().use { it.readText() }
                val respJson = JSONObject(respText)
                if (respJson.optInt("code") == 0) {
                    val durl = respJson.optJSONObject("data")?.optJSONArray("durl")
                    if (durl != null && durl.length() > 0) {
                        val durlObj = durl.getJSONObject(0)
                        videoUrl = durlObj.optString("url")
                        val size = durlObj.optLong("size", 0)
                        if (size > 0) totalBytes = size
                    }
                }
            }
        } catch (e: Exception) {
            failTask(context, notificationManager, notificationId, task, "获取下载地址失败：${e.message}")
            return
        }

        if (videoUrl.isNullOrEmpty()) {
            failTask(context, notificationManager, notificationId, task, "未找到可用视频下载流")
            return
        }

        // 3. 准备目标文件与输出流
        val sanitizedTitle = task.title.replace(Regex("[\\\\/:*?\"<>|]"), "_")
        val fileName = "${sanitizedTitle}_${task.bvid}.mp4"
        val customTreeUriStr = SettingsStore.get(context, "downloadUri", "")
        var outputStream: OutputStream? = null
        var targetUri: Uri? = null
        var localFilePath = ""

        try {
            if (customTreeUriStr.isNotEmpty()) {
                try {
                    val treeUri = Uri.parse(customTreeUriStr)
                    val docId = DocumentsContract.getTreeDocumentId(treeUri)
                    val parentDocUri = DocumentsContract.buildDocumentUriUsingTree(treeUri, docId)
                    val newFileUri = DocumentsContract.createDocument(context.contentResolver, parentDocUri, "video/mp4", fileName)
                    if (newFileUri != null) {
                        outputStream = context.contentResolver.openOutputStream(newFileUri)
                        targetUri = newFileUri
                        val customPath = SettingsStore.get(context, "downloadPath", "")
                        localFilePath = if (customPath.isNotEmpty()) "$customPath/$fileName" else ""
                    }
                } catch (_: Exception) {
                    outputStream = null
                }
            }

            if (outputStream == null && Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                try {
                    val selection = "${MediaStore.MediaColumns.DISPLAY_NAME} = ? AND ${MediaStore.MediaColumns.RELATIVE_PATH} LIKE ?"
                    val selectionArgs = arrayOf(fileName, "%Download/Bilibili%")
                    context.contentResolver.delete(MediaStore.Downloads.EXTERNAL_CONTENT_URI, selection, selectionArgs)
                } catch (_: Exception) {}

                val values = ContentValues().apply {
                    put(MediaStore.MediaColumns.DISPLAY_NAME, fileName)
                    put(MediaStore.MediaColumns.MIME_TYPE, "video/mp4")
                    put(MediaStore.MediaColumns.RELATIVE_PATH, "Download/Bilibili")
                }
                val uri = context.contentResolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, values)
                if (uri != null) {
                    outputStream = context.contentResolver.openOutputStream(uri)
                    targetUri = uri
                    localFilePath = "${Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS).absolutePath}/Bilibili/$fileName"
                }
            }

            if (outputStream == null) {
                val dir = File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS), "Bilibili")
                if (!dir.exists()) dir.mkdirs()
                val file = File(dir, fileName)
                outputStream = FileOutputStream(file)
                localFilePath = file.absolutePath
                targetUri = Uri.fromFile(file)
            }
        } catch (e: Exception) {
            failTask(context, notificationManager, notificationId, task, "创建文件失败：${e.message}")
            return
        }

        // 4. 流式下载并更新进度与通知
        try {
            val url = URL(videoUrl)
            val conn = (url.openConnection() as HttpURLConnection).apply {
                requestMethod = "GET"
                connectTimeout = 15000
                readTimeout = 15000
                setRequestProperty("User-Agent", userAgent)
                setRequestProperty("Referer", "https://www.bilibili.com")
                if (cookie.isNotEmpty()) {
                    setRequestProperty("Cookie", cookie)
                }
            }

            if (conn.responseCode in 200..299) {
                val streamLength = conn.contentLengthLong
                if (streamLength > 0) totalBytes = streamLength

                conn.inputStream.use { input ->
                    outputStream!!.use { output ->
                        val buffer = ByteArray(64 * 1024)
                        var read: Int
                        var downloadedBytes = 0L
                        var lastNotifyTime = 0L

                        while (input.read(buffer).also { read = it } != -1) {
                            output.write(buffer, 0, read)
                            downloadedBytes += read

                            val progress = if (totalBytes > 0) {
                                ((downloadedBytes * 100) / totalBytes).toInt().coerceIn(0, 100)
                            } else 0

                            val now = System.currentTimeMillis()
                            if (now - lastNotifyTime > 500) {
                                lastNotifyTime = now
                                val progressText = "正在下载... $progress% (${formatBytes(downloadedBytes)} / ${formatBytes(totalBytes)})"
                                val notify = NotificationCompat.Builder(context, CHANNEL_ID)
                                    .setSmallIcon(android.R.drawable.stat_sys_download)
                                    .setContentTitle(task.title)
                                    .setContentText(progressText)
                                    .setProgress(100, progress, false)
                                    .setOngoing(true)
                                    .setOnlyAlertOnce(true)
                                    .build()
                                notificationManager.notify(notificationId, notify)

                                DownloadTaskStore.updateProgress(context, task.itemId, downloadedBytes, totalBytes, progress)
                                BiliWebActivity.broadcastProgress(task.itemId, progress, downloadedBytes, totalBytes)
                            }
                        }
                    }
                }

                // 5. 下载完成：更新状态，构建并弹出完成通知（支持点击打开本地播放器）
                DownloadTaskStore.updateStatus(context, task.itemId, "completed", targetUri?.toString() ?: "", localFilePath)
                BiliWebActivity.broadcastStatusChange(task.itemId, "completed")

                val playableUri = getPlayableUri(context, localFilePath, targetUri)
                val playIntent = Intent(Intent.ACTION_VIEW).apply {
                    setDataAndType(playableUri, "video/*")
                    addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_GRANT_READ_URI_PERMISSION)
                }
                val chooser = Intent.createChooser(playIntent, "选择本地播放器播放").apply {
                    addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_GRANT_READ_URI_PERMISSION)
                }
                val pendingIntent = PendingIntent.getActivity(
                    context,
                    notificationId,
                    chooser,
                    PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
                )

                val completeNotification = NotificationCompat.Builder(context, CHANNEL_ID)
                    .setSmallIcon(android.R.drawable.stat_sys_download_done)
                    .setContentTitle(task.title)
                    .setContentText("下载完成，点击打开本地播放器播放")
                    .setProgress(0, 0, false)
                    .setOngoing(false)
                    .setAutoCancel(true)
                    .setContentIntent(pendingIntent)
                    .build()
                notificationManager.notify(notificationId, completeNotification)

                mainHandler.post {
                    Toast.makeText(context, "《${task.title}》已下载完成", Toast.LENGTH_SHORT).show()
                }
            } else {
                failTask(context, notificationManager, notificationId, task, "网络响应异常：HTTP ${conn.responseCode}")
            }
        } catch (e: Exception) {
            failTask(context, notificationManager, notificationId, task, "下载中断：${e.message}")
        }
    }

    private fun failTask(
        context: Context,
        notificationManager: NotificationManager,
        notificationId: Int,
        task: DownloadTask,
        errorMsg: String
    ) {
        DownloadTaskStore.updateStatus(context, task.itemId, "error")
        BiliWebActivity.broadcastStatusChange(task.itemId, "error")

        val failNotification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(android.R.drawable.stat_notify_error)
            .setContentTitle(task.title)
            .setContentText(errorMsg)
            .setProgress(0, 0, false)
            .setOngoing(false)
            .setAutoCancel(true)
            .build()
        notificationManager.notify(notificationId, failNotification)

        mainHandler.post {
            Toast.makeText(context, errorMsg, Toast.LENGTH_SHORT).show()
        }
    }

    private fun getPlayableUri(context: Context, localFilePath: String, mediaUri: Uri?): Uri {
        if (localFilePath.isNotEmpty()) {
            val file = File(localFilePath)
            if (file.exists()) {
                try {
                    return FileProvider.getUriForFile(
                        context,
                        "${context.packageName}.fileprovider",
                        file
                    )
                } catch (_: Exception) {}
            }
        }
        return mediaUri ?: Uri.parse("file://$localFilePath")
    }

    private fun formatBytes(bytes: Long): String {
        if (bytes <= 0) return "0 B"
        val units = arrayOf("B", "KB", "MB", "GB")
        var digitGroups = (Math.log10(bytes.toDouble()) / Math.log10(1024.0)).toInt()
        if (digitGroups >= units.size) digitGroups = units.size - 1
        return String.format("%.1f %s", bytes / Math.pow(1024.0, digitGroups.toDouble()), units[digitGroups])
    }
}
