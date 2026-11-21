package com.xlzhen.bilitablet

import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder
import java.text.SimpleDateFormat
import java.util.Locale
import java.util.TimeZone

/**
 * passport / web 接口，对齐官方 PC 客户端 `fetchService` 里的这五个方法：
 *
 * - `getIsRefreshToken()`    GET  /x/passport-login/web/cookie/info?csrf=
 * - `getRefreshCsrf()`       GET  https://www.bilibili.com/correspond/2/<payload>
 * - `postRefreshToken()`     POST /x/passport-login/web/cookie/refresh
 * - `postConfirmRefreshToken()` POST /x/passport-login/web/confirm/refresh
 * - `getUserInfo()`          GET  /x/web-interface/nav
 *
 * 官方流程（refreshCookeAndToken）依赖这些接口把即将过期的登录票据续期，
 * 没有这一步，B 站 web 端的登录态大约一天后就会被服务端判定失效。
 */
object BiliPassportApi {
    private const val UA =
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    private const val TIMEOUT_MS = 12_000
    private const val PASSPORT = "https://passport.bilibili.com"
    private const val WWW = "https://www.bilibili.com"
    private const val API = "https://api.bilibili.com"

    data class HttpResult(val status: Int, val body: String, val setCookies: List<String>)

    data class RefreshResult(val refreshToken: String, val setCookies: List<AuthCookie>)

    data class NavInfo(val isLogin: Boolean, val mid: Long, val uname: String)

    /** GET /x/passport-login/web/cookie/info?csrf=xxx —— 服务端是否要求续期。 */
    fun isRefreshNeeded(cookieHeader: String, csrf: String): Boolean {
        val res = request(
            "$PASSPORT/x/passport-login/web/cookie/info?csrf=${encode(csrf)}",
            "GET", cookieHeader
        )
        val data = dataOf(parse(res.body)) ?: return false
        return data.optBoolean("refresh", false)
    }

    /** GET https://www.bilibili.com/correspond/2/<payload> —— 取回 2-value。 */
    fun fetchCorrespondValue(cookieHeader: String, payload: String): String {
        val res = request("$WWW/correspond/2/$payload", "GET", cookieHeader)
        val match = Regex("<div\\sid=\"2-value\">(\\w*)</div>").find(res.body)
        return match?.groupValues?.getOrNull(1).orEmpty()
    }

    /**
     * POST /x/passport-login/web/cookie/refresh
     * 响应头里带新的 SESSDATA 等 cookie，响应体里带新的 refresh_token。
     */
    fun refreshCookie(cookieHeader: String, refreshCsrf: String, refreshToken: String): RefreshResult {
        val body = "refresh_csrf=${encode(refreshCsrf)}&refresh_token=${encode(refreshToken)}"
        val res = request("$PASSPORT/x/passport-login/web/cookie/refresh", "POST", cookieHeader, body)
        val data = dataOf(parse(res.body))
        val newToken = data?.optString("refresh_token").orEmpty()
        return RefreshResult(newToken, parseSetCookies(res.setCookies))
    }

    /** POST /x/passport-login/web/confirm/refresh —— 确认本次续期。 */
    fun confirmRefresh(cookieHeader: String, refreshToken: String): Boolean {
        val body = "refresh_token=${encode(refreshToken)}"
        val res = request("$PASSPORT/x/passport-login/web/confirm/refresh", "POST", cookieHeader, body)
        val json = parse(res.body) ?: return false
        return json.optInt("code", -1) == 0
    }

    /** GET /x/web-interface/nav —— 判定登录态并拿到 mid。 */
    fun fetchNav(cookieHeader: String): NavInfo {
        val res = request("$API/x/web-interface/nav", "GET", cookieHeader)
        val data = dataOf(parse(res.body)) ?: return NavInfo(false, 0L, "")
        return NavInfo(
            isLogin = data.optBoolean("isLogin", false),
            mid = data.optLong("mid", 0L),
            uname = data.optString("uname")
        )
    }

    // ---------------------------------------------------------------- 内部实现

    private fun request(
        url: String,
        method: String,
        cookieHeader: String,
        body: String? = null,
        referer: String = "$WWW/"
    ): HttpResult {
        val conn = URL(url).openConnection() as HttpURLConnection
        try {
            conn.requestMethod = method
            conn.connectTimeout = TIMEOUT_MS
            conn.readTimeout = TIMEOUT_MS
            // 续期响应头里的 Set-Cookie 必须自己收，不能让连接自动跟随跳转。
            conn.instanceFollowRedirects = false
            conn.setRequestProperty("User-Agent", UA)
            conn.setRequestProperty("Referer", referer)
            conn.setRequestProperty("Origin", PASSPORT)
            if (cookieHeader.isNotEmpty()) {
                conn.setRequestProperty("Cookie", cookieHeader)
            }
            if (body != null) {
                conn.doOutput = true
                conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded")
                conn.outputStream.use { it.write(body.toByteArray(Charsets.UTF_8)) }
            }
            val status = conn.responseCode
            val stream = if (status in 200..399) conn.inputStream else conn.errorStream
            val text = stream?.bufferedReader()?.use { it.readText() }.orEmpty()
            val setCookies = conn.getHeaderFields()
                .filterKeys { it != null && it.equals("Set-Cookie", ignoreCase = true) }
                .values
                .flatten()
            return HttpResult(status, text, setCookies)
        } finally {
            conn.disconnect()
        }
    }

    /** 官方 getHeaderSetCookies：解析 Set-Cookie，并取出 Expires 作为 expirationDate。 */
    private fun parseSetCookies(raw: List<String>): List<AuthCookie> {
        return raw.mapNotNull { line ->
            val pair = line.substringBefore(";").trim()
            if (!pair.contains("=")) return@mapNotNull null
            val name = pair.substringBefore("=").trim()
            val value = pair.substringAfter("=").trim()
            if (name.isEmpty()) return@mapNotNull null
            var expiration = 0L
            val match = Regex("Expires=\\s?([\\w,\\s:]*);?").find(line)
            if (match != null) {
                val millis = parseHttpDate(match.groupValues[1])
                if (millis > 0) expiration = millis / 1000
            }
            AuthCookie(name, value, expiration)
        }
    }

    private fun parseHttpDate(raw: String): Long {
        val text = raw.trim()
        if (text.isEmpty()) return 0L
        val patterns = listOf(
            "EEE, dd MMM yyyy HH:mm:ss zzz",
            "EEE, dd-MMM-yyyy HH:mm:ss zzz",
            "EEE MMM d HH:mm:ss yyyy"
        )
        for (pattern in patterns) {
            try {
                val format = SimpleDateFormat(pattern, Locale.US)
                format.timeZone = TimeZone.getTimeZone("GMT")
                return format.parse(text)?.time ?: 0L
            } catch (e: Exception) {
                // 换下一个格式
            }
        }
        return 0L
    }

    /** 兼容 data 包裹与扁平两种返回。 */
    private fun dataOf(json: JSONObject?): JSONObject? {
        if (json == null) return null
        return json.optJSONObject("data") ?: json
    }

    private fun parse(body: String): JSONObject? {
        if (body.isBlank()) return null
        return try {
            JSONObject(body)
        } catch (e: Exception) {
            null
        }
    }

    private fun encode(value: String): String = URLEncoder.encode(value, "UTF-8")
}
