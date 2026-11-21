package com.xlzhen.bilitablet

import android.content.Context
import android.util.Log
import android.webkit.CookieManager
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import java.util.TimeZone

/**
 * 登录态管理，对齐官方 PC 客户端 `AuthService` 的四个动作：
 *
 * - `updateBiliCookie()`      把持久化的 cookie 写回 session
 * - `judgeUserLoginStatus()`  判定登录态
 * - `checkIsRefreshToken()`   询问服务端是否需要续期
 * - `refreshCookeAndToken()`  执行续期，拿到新的 SESSDATA 与 refresh_token
 *
 * 官方客户端之所以要这一套：B 站 web 端的登录票据（refresh_token）有效期约一天，
 * 不主动续期的话，服务端会把登录态判为失效——表现就是「今天登录了，明天打开就掉了」。
 */
object LoginSessionManager {
    private const val TAG = "BiliLogin"

    private val COOKIE_HOSTS = listOf(
        "https://www.bilibili.com",
        "https://api.bilibili.com",
        "https://bilipc.bilibili.com",
        "https://passport.bilibili.com"
    )

    /** 取当前 WebView 里 bilibili 的 cookie，拼成请求头。 */
    fun cookieHeader(): String {
        val manager = CookieManager.getInstance()
        val map = LinkedHashMap<String, String>()
        COOKIE_HOSTS.forEach { host ->
            val raw = manager.getCookie(host) ?: return@forEach
            raw.split(";").forEach { part ->
                val trimmed = part.trim()
                val idx = trimmed.indexOf('=')
                if (idx > 0) {
                    map[trimmed.substring(0, idx).trim()] = trimmed.substring(idx + 1)
                }
            }
        }
        return map.entries.joinToString("; ") { "${it.key}=${it.value}" }
    }

    /** 官方 getCsrf()：csrf 就是 bili_jct。 */
    fun csrf(cookieHeader: String): String {
        val match = Regex("(?:^|;\\s*)bili_jct=([^;]*)").find(cookieHeader)
        return match?.groupValues?.getOrNull(1).orEmpty()
    }

    /**
     * 把持久化的 cookie 写回 CookieManager（对齐官方 updateBiliCookie）。
     *
     * 只带明确过期时间的 cookie 才会覆盖写入；没有过期信息的（如登录 cookie）
     * 仅在 WebView 里确实缺失时才补，避免把原本长期有效的 cookie 降级成会话 cookie。
     */
    fun restoreCookies(context: Context) {
        val stored = AuthCookieStore.getCookies(context)
        if (stored.isEmpty()) return
        val manager = CookieManager.getInstance()
        val existing = manager.getCookie("https://bilipc.bilibili.com").orEmpty()
        val now = System.currentTimeMillis() / 1000
        var changed = false
        stored.forEach { cookie ->
            if (cookie.isExpired(now)) return@forEach
            if (cookie.expirationDate <= 0 && existing.contains("${cookie.name}=")) {
                return@forEach
            }
            val value = cookieString(cookie)
            manager.setCookie("https://bilipc.bilibili.com", value)
            manager.setCookie("https://api.bilibili.com", value)
            manager.setCookie("https://www.bilibili.com", value)
            changed = true
        }
        if (changed) manager.flush()
    }

    /** 登录成功后把当前 cookie 快照进持久化存储。 */
    fun captureCookies(context: Context) {
        val manager = CookieManager.getInstance()
        val raw = manager.getCookie("https://www.bilibili.com")
            ?: manager.getCookie("https://bilibili.com")
            ?: return
        val cookies = raw.split(";").mapNotNull { part ->
            val trimmed = part.trim()
            val idx = trimmed.indexOf('=')
            if (idx <= 0) return@mapNotNull null
            AuthCookie(trimmed.substring(0, idx), trimmed.substring(idx + 1), 0L)
        }
        if (cookies.isNotEmpty()) {
            AuthCookieStore.upsert(context, cookies)
        }
    }

    /** 判定登录态（对齐官方 judgeUserLoginStatus）。 */
    fun judgeLoginStatus(context: Context): Boolean {
        val header = cookieHeader()
        if (header.isEmpty()) return false
        return try {
            val nav = BiliPassportApi.fetchNav(header)
            if (nav.isLogin) {
                if (nav.mid > 0) AuthCookieStore.setMid(context, nav.mid)
                captureCookies(context)
                true
            } else {
                Log.i(TAG, "judgeLoginStatus: 未登录")
                false
            }
        } catch (e: Exception) {
            Log.w(TAG, "judgeLoginStatus 失败", e)
            false
        }
    }

    /** 需要时续期（对齐官方 checkIsRefreshToken + refreshCookeAndToken）。 */
    fun refreshIfNeeded(context: Context): Boolean {
        val refreshToken = AuthCookieStore.getRefreshToken(context)
        if (refreshToken.isEmpty()) return false
        val header = cookieHeader()
        if (header.isEmpty()) return false
        val csrf = csrf(header)
        if (csrf.isEmpty()) return false
        return try {
            if (!BiliPassportApi.isRefreshNeeded(header, csrf)) {
                Log.i(TAG, "票据仍然有效，无需续期")
                return false
            }
            Log.i(TAG, "票据需要续期，开始执行 refreshCookeAndToken")
            refreshCookieAndToken(context, header, refreshToken)
        } catch (e: Exception) {
            Log.w(TAG, "续期失败", e)
            false
        }
    }

    /**
     * 官方 refreshCookeAndToken 的等价实现：
     * 用 mid + 随机串加密后请求 correspond/2，取回 refresh_csrf，
     * 再用 refresh_token 换新的 SESSDATA 与 refresh_token。
     */
    private fun refreshCookieAndToken(
        context: Context,
        header: String,
        refreshToken: String
    ): Boolean {
        val mid = AuthCookieStore.getMid(context)
        if (mid <= 0L) {
            Log.w(TAG, "缺少 mid，无法续期")
            return false
        }
        val plain = "$mid" + BiliCrypto.randomId(5)
        val key = BiliCrypto.md5Hex(Math.random().toString())
        val iv = BiliCrypto.md5Hex(Math.random().toString())
        val (encrypted, authTag) = BiliCrypto.encryptGcm(plain, key, iv)
        val payload = BiliCrypto.randomHexId(10) + key + iv + authTag + encrypted

        val correspond = BiliPassportApi.fetchCorrespondValue(header, payload)
        if (correspond.isEmpty()) {
            Log.w(TAG, "correspond/2 未返回 2-value")
            return false
        }
        val refreshCsrf = decryptCorrespond(correspond)
        if (refreshCsrf.isNullOrEmpty()) {
            Log.w(TAG, "correspond/2 的 2-value 解密失败")
            return false
        }

        val result = BiliPassportApi.refreshCookie(header, refreshCsrf, refreshToken)
        if (result.setCookies.isEmpty() && result.refreshToken.isEmpty()) {
            Log.w(TAG, "续期接口没有返回新票据")
            return false
        }
        applyCookies(context, result.setCookies)
        if (result.refreshToken.isNotEmpty()) {
            AuthCookieStore.setRefreshToken(context, result.refreshToken)
        }
        BiliPassportApi.confirmRefresh(cookieHeader(), refreshToken)
        Log.i(TAG, "续期完成，已更新 ${result.setCookies.size} 条 cookie")
        return true
    }

    /** 官方 a1.split("") 之后的切片逻辑：key(32) + pad(5) + iv(32) + pad(5) + 密文 + pad(5) + tag(32)。 */
    private fun decryptCorrespond(value: String): String? {
        val length = value.length
        if (length < 32 + 5 + 32 + 5 + 32 + 5) return null
        return try {
            val key = value.substring(0, 32)
            val iv = value.substring(37, 69)
            val authTag = value.substring(length - 32)
            val cipherStart = 74
            val cipherEnd = length - 32 - 5
            if (cipherEnd <= cipherStart) return null
            val ciphertext = value.substring(cipherStart, cipherEnd)
            BiliCrypto.decryptGcm(ciphertext, authTag, key, iv)
        } catch (e: Exception) {
            Log.w(TAG, "decryptCorrespond 异常", e)
            null
        }
    }

    /** 把续期拿到的新 cookie 写进 CookieManager 与持久化存储。 */
    private fun applyCookies(context: Context, cookies: List<AuthCookie>) {
        if (cookies.isEmpty()) return
        val manager = CookieManager.getInstance()
        cookies.forEach { cookie ->
            val value = cookieString(cookie)
            manager.setCookie("https://www.bilibili.com", value)
            manager.setCookie("https://api.bilibili.com", value)
            manager.setCookie("https://bilipc.bilibili.com", value)
        }
        manager.flush()
        AuthCookieStore.upsert(context, cookies)
    }

    private fun cookieString(cookie: AuthCookie): String = buildString {
        append(cookie.name).append('=').append(cookie.value)
        append("; path=/; domain=.bilibili.com")
        if (cookie.expirationDate > 0) {
            append("; expires=").append(httpDate(cookie.expirationDate))
        }
    }

    private fun httpDate(epochSeconds: Long): String {
        val format = SimpleDateFormat("EEE, dd MMM yyyy HH:mm:ss zzz", Locale.US)
        format.timeZone = TimeZone.getTimeZone("GMT")
        return format.format(Date(epochSeconds * 1000))
    }
}
