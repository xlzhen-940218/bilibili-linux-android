package com.xlzhen.bilitablet

import android.content.Context
import android.net.Uri
import android.os.Environment
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import kotlin.math.abs

data class DownloadTask(
    val itemId: Long,
    val groupId: String,
    val groupTitle: String,
    val groupCoverUrl: String,
    val title: String,
    val coverUrl: String,
    var totalSize: Long,
    var downloadedSize: Long,
    val duration: Long,
    val uname: String,
    val uid: String,
    val bvid: String,
    val aid: Long,
    val cid: Long,
    val p: Int,
    val qn: Int,
    val type: String,
    var status: String, // "downloading", "pending", "paused", "error", "completed"
    var progress: Int,
    var filePath: String = "",
    var fileUri: String = "",
    val createTime: Long = System.currentTimeMillis()
) {
    fun toJsonObject(): JSONObject = JSONObject().apply {
        put("itemId", itemId)
        put("taskId", itemId.toString())
        put("groupId", groupId)
        put("groupTitle", groupTitle)
        put("groupCoverUrl", groupCoverUrl)
        put("groupCoverImg", groupCoverUrl)
        put("title", title)
        put("coverUrl", coverUrl)
        put("coverImg", coverUrl)
        put("totalSize", totalSize)
        put("downloadedSize", downloadedSize)
        put("loadedSize", downloadedSize)
        put("duration", duration)
        put("uname", uname)
        put("uid", uid)
        put("bvid", bvid)
        put("aid", aid)
        put("cid", cid)
        put("p", p)
        put("qn", qn)
        put("type", type)
        put("status", status)
        put("progress", progress)
        put("filePath", filePath)
        put("fileUri", fileUri)
        put("createTime", createTime)
    }

    companion object {
        fun fromJsonObject(obj: JSONObject): DownloadTask {
            val cid = obj.optLong("cid", 0)
            val itemId = obj.optLong("itemId", if (cid != 0L) cid else abs(System.currentTimeMillis().hashCode().toLong()))
            val bvid = obj.optString("bvid", "")
            val title = obj.optString("title", obj.optString("name", "video"))
            val cover = obj.optString("coverUrl", obj.optString("coverImg", obj.optString("cover", obj.optString("pic", ""))))
            val groupCover = obj.optString("groupCoverUrl", obj.optString("groupCoverImg", cover))
            val groupTitle = obj.optString("groupTitle", obj.optString("bvidTitle", title))
            val downloaded = obj.optLong("downloadedSize", obj.optLong("loadedSize", 0))
            return DownloadTask(
                itemId = itemId,
                groupId = obj.optString("groupId", bvid.ifEmpty { itemId.toString() }),
                groupTitle = groupTitle,
                groupCoverUrl = groupCover,
                title = title,
                coverUrl = cover,
                totalSize = obj.optLong("totalSize", 0),
                downloadedSize = downloaded,
                duration = obj.optLong("duration", 0),
                uname = obj.optString("uname", ""),
                uid = obj.optString("uid", ""),
                bvid = bvid,
                aid = obj.optLong("aid", 0),
                cid = cid,
                p = obj.optInt("p", 1),
                qn = obj.optInt("qn", 32),
                type = obj.optString("type", "ugc"),
                status = obj.optString("status", "downloading"),
                progress = obj.optInt("progress", 0),
                filePath = obj.optString("filePath", ""),
                fileUri = obj.optString("fileUri", ""),
                createTime = obj.optLong("createTime", System.currentTimeMillis())
            )
        }
    }
}

object DownloadTaskStore {
    private const val FILE_NAME = "bili_download_tasks.json"
    private val taskList = mutableListOf<DownloadTask>()
    private var isLoaded = false

    @Synchronized
    private fun load(context: Context) {
        if (isLoaded) return
        isLoaded = true
        val file = File(context.filesDir, FILE_NAME)
        if (file.exists()) {
            try {
                val jsonStr = file.readText()
                val array = JSONArray(jsonStr)
                for (i in 0 until array.length()) {
                    taskList.add(DownloadTask.fromJsonObject(array.getJSONObject(i)))
                }
            } catch (_: Exception) {}
        }
        val countBefore = taskList.size
        scanExistingDownloads()
        if (taskList.size != countBefore) {
            save(context)
        }
    }

    private fun scanExistingDownloads() {
        try {
            val dir = File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS), "Bilibili")
            if (dir.exists() && dir.isDirectory) {
                val files = dir.listFiles { f -> f.extension.equals("mp4", ignoreCase = true) }
                files?.forEach { file ->
                    val name = file.nameWithoutExtension
                    val bvid = Regex("BV[a-zA-Z0-9]+").find(name)?.value ?: ""
                    val title = if (bvid.isNotEmpty()) name.substringBefore("_$bvid") else name
                    val calculatedId = abs(name.hashCode().toLong()).coerceAtLeast(1000L)
                    if (taskList.none { it.filePath == file.absolutePath || (it.bvid.isNotEmpty() && it.bvid == bvid) }) {
                        taskList.add(
                            DownloadTask(
                                itemId = calculatedId,
                                groupId = bvid.ifEmpty { name },
                                groupTitle = title,
                                groupCoverUrl = "",
                                title = title,
                                coverUrl = "",
                                totalSize = file.length(),
                                downloadedSize = file.length(),
                                duration = 2055L,
                                uname = "碧诗",
                                uid = "2",
                                bvid = bvid,
                                aid = 2L,
                                cid = calculatedId,
                                p = 1,
                                qn = 32,
                                type = "ugc",
                                status = "completed",
                                progress = 100,
                                filePath = file.absolutePath,
                                fileUri = Uri.fromFile(file).toString()
                            )
                        )
                    }
                }
            }
        } catch (_: Exception) {}
    }

    @Synchronized
    private fun save(context: Context) {
        try {
            val array = JSONArray()
            taskList.forEach { array.put(it.toJsonObject()) }
            val file = File(context.filesDir, FILE_NAME)
            file.writeText(array.toString())
        } catch (_: Exception) {}
    }

    @Synchronized
    fun addOrUpdateTask(context: Context, task: DownloadTask) {
        load(context)
        val idx = taskList.indexOfFirst { it.itemId == task.itemId }
        if (idx >= 0) {
            taskList[idx] = task
        } else {
            taskList.add(0, task)
        }
        save(context)
    }

    @Synchronized
    fun updateProgress(context: Context, itemId: Long, downloadedBytes: Long, totalBytes: Long, progress: Int) {
        load(context)
        val task = taskList.find { it.itemId == itemId }
        if (task != null) {
            task.downloadedSize = downloadedBytes
            if (totalBytes > 0) task.totalSize = totalBytes
            task.progress = progress
            task.status = "downloading"
            save(context)
        }
    }

    @Synchronized
    fun updateStatus(context: Context, itemId: Long, status: String, fileUri: String = "", filePath: String = "") {
        load(context)
        val task = taskList.find { it.itemId == itemId }
        if (task != null) {
            task.status = status
            if (status == "completed") {
                task.progress = 100
                if (task.totalSize > 0) task.downloadedSize = task.totalSize
            }
            if (fileUri.isNotEmpty()) task.fileUri = fileUri
            if (filePath.isNotEmpty()) task.filePath = filePath
            save(context)
        }
    }

    @Synchronized
    fun getCompletedGroupsJson(context: Context): String {
        load(context)
        val completed = taskList.filter { it.status == "completed" }
        val grouped = completed.groupBy { it.groupId }
        val groupList = JSONArray()

        for ((groupId, items) in grouped) {
            val first = items.first()
            val groupObj = JSONObject().apply {
                put("groupId", groupId)
                put("groupTitle", first.groupTitle.ifEmpty { first.title })
                put("groupCoverUrl", first.groupCoverUrl.ifEmpty { first.coverUrl })
                put("groupCoverImg", first.groupCoverUrl.ifEmpty { first.coverUrl })
                put("title", first.title)
                put("coverUrl", first.coverUrl)
                put("coverImg", first.coverUrl)
                put("totalSize", items.sumOf { it.totalSize })
                put("downloadedSize", items.sumOf { it.downloadedSize })
                put("loadedSize", items.sumOf { it.downloadedSize })
                put("duration", items.sumOf { it.duration })
                put("uname", first.uname)
                put("uid", first.uid)
                put("bvid", first.bvid)
                put("aid", first.aid)
                put("cid", first.cid)
                put("p", first.p)
                put("type", first.type)
                put("status", "completed")
                val itemArray = JSONArray()
                items.forEach { item ->
                    itemArray.put(item.toJsonObject())
                }
                put("itemList", itemArray)
            }
            groupList.put(groupObj)
        }
        return groupList.toString()
    }

    @Synchronized
    fun getTaskListJson(context: Context): String {
        load(context)
        val downloading = taskList.filter { it.status != "completed" }
        val array = JSONArray()
        downloading.forEach { array.put(it.toJsonObject()) }
        return array.toString()
    }

    @Synchronized
    fun getGroupAllItemsJson(context: Context, groupId: String): String {
        load(context)
        val matched = taskList.filter { it.groupId == groupId }
        val array = JSONArray()
        matched.forEach { array.put(it.toJsonObject()) }
        return array.toString()
    }

    @Synchronized
    fun getAllVideoListJson(context: Context, search: String): String {
        load(context)
        val matched = taskList.filter { it.title.contains(search, ignoreCase = true) }
        val array = JSONArray()
        matched.forEach { array.put(it.toJsonObject()) }
        return array.toString()
    }

    @Synchronized
    fun deleteTasks(context: Context, itemIds: List<Long>) {
        load(context)
        val toRemove = taskList.filter { it.itemId in itemIds }
        toRemove.forEach { task ->
            try {
                if (task.filePath.isNotEmpty()) {
                    File(task.filePath).delete()
                }
            } catch (_: Exception) {}
        }
        taskList.removeAll(toRemove)
        save(context)
    }

    @Synchronized
    fun deleteGroups(context: Context, groupIds: List<String>) {
        load(context)
        val toRemove = taskList.filter { it.groupId in groupIds }
        toRemove.forEach { task ->
            try {
                if (task.filePath.isNotEmpty()) {
                    File(task.filePath).delete()
                }
            } catch (_: Exception) {}
        }
        taskList.removeAll(toRemove)
        save(context)
    }

    @Synchronized
    fun deleteGroupItems(context: Context, groupId: String, itemIds: List<Long>) {
        load(context)
        val toRemove = taskList.filter { it.groupId == groupId && it.itemId in itemIds }
        toRemove.forEach { task ->
            try {
                if (task.filePath.isNotEmpty()) {
                    File(task.filePath).delete()
                }
            } catch (_: Exception) {}
        }
        taskList.removeAll(toRemove)
        save(context)
    }

    @Synchronized
    fun deleteAllTasks(context: Context) {
        load(context)
        val toRemove = taskList.filter { it.status != "completed" }
        taskList.removeAll(toRemove)
        save(context)
    }

    @Synchronized
    fun deleteAllGroups(context: Context) {
        load(context)
        val toRemove = taskList.filter { it.status == "completed" }
        toRemove.forEach { task ->
            try {
                if (task.filePath.isNotEmpty()) {
                    File(task.filePath).delete()
                }
            } catch (_: Exception) {}
        }
        taskList.removeAll(toRemove)
        save(context)
    }
}
