package com.xlzhen.bilitablet

import android.app.DownloadManager
import android.content.Context
import android.net.Uri
import android.os.Environment
import android.os.Handler
import android.os.Looper
import android.webkit.CookieManager
import android.widget.Toast
import org.json.JSONArray
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.util.concurrent.Executors

object DownloadHelper {
    private val executor = Executors.newFixedThreadPool(3)
    private val mainHandler = Handler(Looper.getMainLooper())

    fun startDownloadTasks(context: Context, tasksJson: String, userAgent: String) {
        val appContext = context.applicationContext
        executor.execute {
            try {
                val tasksArray = if (tasksJson.trim().startsWith("[")) {
                    JSONArray(tasksJson)
                } else {
                    val obj = JSONObject(tasksJson)
                    obj.optJSONArray("tasks") ?: JSONArray()
                }

                for (i in 0 until tasksArray.length()) {
                    val task = tasksArray.getJSONObject(i)
                    downloadSingleTask(appContext, task, userAgent)
                }
            } catch (e: Exception) {
                mainHandler.post {
                    Toast.makeText(appContext, "解析下载任务失败：${e.message}", Toast.LENGTH_SHORT).show()
                }
            }
        }
    }

    private fun downloadSingleTask(context: Context, task: JSONObject, userAgent: String) {
        val bvid = task.optString("bvid")
        val cid = task.optLong("cid")
        val qn = task.optInt("qn", 32)
        val title = task.optString("title", "video").ifEmpty { "video" }
        val sanitizedTitle = title.replace(Regex("[\\\\/:*?\"<>|]"), "_")

        // 1. 获取视频播放直链
        val cookieManager = CookieManager.getInstance()
        val cookie = cookieManager.getCookie("https://api.bilibili.com")
            ?: cookieManager.getCookie("https://bilipc.bilibili.com")
            ?: ""

        val playUrlApi = "https://api.bilibili.com/x/player/playurl?bvid=$bvid&cid=$cid&qn=$qn&fnval=0&fnver=0&fourk=1"
        var videoUrl: String? = null

        try {
            val url = URL(playUrlApi)
            val conn = (url.openConnection() as HttpURLConnection).apply {
                requestMethod = "GET"
                connectTimeout = 10000
                readTimeout = 10000
                setRequestProperty("User-Agent", userAgent)
                setRequestProperty("Referer", "https://www.bilibili.com")
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
                        videoUrl = durl.getJSONObject(0).optString("url")
                    }
                }
            }
        } catch (e: Exception) {
            mainHandler.post {
                Toast.makeText(context, "获取视频下载地址失败：${e.message}", Toast.LENGTH_SHORT).show()
            }
            return
        }

        if (videoUrl.isNullOrEmpty()) {
            mainHandler.post {
                Toast.makeText(context, "未找到可用视频下载流", Toast.LENGTH_SHORT).show()
            }
            return
        }

        // 2. 加入系统 DownloadManager
        val fileName = "${sanitizedTitle}_${bvid}.mp4"
        try {
            val dm = context.getSystemService(Context.DOWNLOAD_SERVICE) as DownloadManager
            val request = DownloadManager.Request(Uri.parse(videoUrl)).apply {
                setTitle(title)
                setDescription("Bilibili 视频缓存 · $bvid")
                setMimeType("video/mp4")
                addRequestHeader("User-Agent", userAgent)
                addRequestHeader("Referer", "https://www.bilibili.com")
                if (cookie.isNotEmpty()) {
                    addRequestHeader("Cookie", cookie)
                }
                setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED)
                setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, "Bilibili/$fileName")
            }
            dm.enqueue(request)

            mainHandler.post {
                Toast.makeText(context, "已加入系统下载：$title", Toast.LENGTH_SHORT).show()
            }
        } catch (e: Exception) {
            mainHandler.post {
                Toast.makeText(context, "加入下载失败：${e.message}", Toast.LENGTH_SHORT).show()
            }
        }
    }
}
