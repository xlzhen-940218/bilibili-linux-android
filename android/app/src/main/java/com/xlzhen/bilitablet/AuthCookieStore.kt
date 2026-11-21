package com.xlzhen.bilitablet

import android.content.Context
import org.json.JSONArray
import org.json.JSONObject

/**
 * 一条被持久化的 Cookie。
 *
 * @param expirationDate 过期时间（epoch 秒）；0 表示未知过期时间（跟随 WebView 自身的持久化）。
 */
data class AuthCookie(
    val name: String,
    val value: String,
    val expirationDate: Long = 0L
) {
    fun isExpired(now: Long = System.currentTimeMillis() / 1000): Boolean =
        expirationDate > 0 && expirationDate <= now
}

/**
 * 登录态持久化，对齐官方 PC 客户端的 secureStore。
 *
 * 官方客户端把 auth cookies（name/value/expirationDate）、refresh_token、用户信息
 * 都放在 secureStore 里加密保存，并在启动时通过 updateBiliCookie() 重新写回 session。
 * Android 这边对应的是 SharedPreferences + WebView 的 CookieManager。
 */
object AuthCookieStore {
    private const val NAME = "bili_tablet_auth"
    private const val KEY_COOKIES = "auth_cookies"
    private const val KEY_REFRESH_TOKEN = "refresh_token"
    private const val KEY_MID = "mid"

    /** 官方 loginCookies：登录态相关、退出登录时需要清掉的 cookie。 */
    val LOGIN_COOKIE_NAMES = listOf(
        "SESSDATA",
        "SESSDATA__ckMd5",
        "DedeUserID",
        "DedeUserID__ckMd5",
        "bili_jct",
        "bili_jct__ckMd5"
    )

    private fun prefs(context: Context) =
        context.getSharedPreferences(NAME, Context.MODE_PRIVATE)

    fun getCookies(context: Context): List<AuthCookie> {
        val raw = prefs(context).getString(KEY_COOKIES, null) ?: return emptyList()
        return try {
            val array = JSONArray(raw)
            (0 until array.length()).mapNotNull { index ->
                val item = array.optJSONObject(index) ?: return@mapNotNull null
                val name = item.optString("name")
                if (name.isEmpty()) return@mapNotNull null
                AuthCookie(
                    name = name,
                    value = item.optString("value"),
                    expirationDate = item.optLong("expirationDate")
                )
            }
        } catch (e: Exception) {
            emptyList()
        }
    }

    fun setCookies(context: Context, cookies: List<AuthCookie>) {
        if (cookies.isEmpty()) {
            prefs(context).edit().remove(KEY_COOKIES).apply()
            return
        }
        val array = JSONArray()
        cookies.forEach { cookie ->
            array.put(
                JSONObject()
                    .put("name", cookie.name)
                    .put("value", cookie.value)
                    .put("expirationDate", cookie.expirationDate)
            )
        }
        prefs(context).edit().putString(KEY_COOKIES, array.toString()).apply()
    }

    /** 按名字合并更新（官方 setCookies 的语义：同名覆盖，未命名的追加）。 */
    fun upsert(context: Context, cookies: List<AuthCookie>) {
        if (cookies.isEmpty()) return
        val current = getCookies(context).toMutableList()
        cookies.forEach { incoming ->
            val index = current.indexOfFirst { it.name == incoming.name }
            if (index >= 0) {
                // 已知过期时间的条目不被「无过期信息」的快照降级。
                val existing = current[index]
                current[index] = if (existing.expirationDate > 0 && incoming.expirationDate <= 0) {
                    existing.copy(value = incoming.value)
                } else {
                    incoming
                }
            } else {
                current.add(incoming)
            }
        }
        setCookies(context, current)
    }

    fun remove(context: Context, name: String) {
        setCookies(context, getCookies(context).filterNot { it.name == name })
    }

    fun getRefreshToken(context: Context): String =
        prefs(context).getString(KEY_REFRESH_TOKEN, "") ?: ""

    fun setRefreshToken(context: Context, token: String) {
        prefs(context).edit().putString(KEY_REFRESH_TOKEN, token).apply()
    }

    fun getMid(context: Context): Long = prefs(context).getLong(KEY_MID, 0L)

    fun setMid(context: Context, mid: Long) {
        prefs(context).edit().putLong(KEY_MID, mid).apply()
    }

    /** 退出登录时清空全部登录态。 */
    fun clear(context: Context) {
        prefs(context).edit()
            .remove(KEY_COOKIES)
            .remove(KEY_REFRESH_TOKEN)
            .remove(KEY_MID)
            .apply()
    }
}
