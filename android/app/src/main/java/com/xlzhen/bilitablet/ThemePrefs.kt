package com.xlzhen.bilitablet

import android.content.Context
import android.content.res.Configuration

/** 主题与通用设置持久化。 */
object ThemePrefs {
    private const val NAME = "bili_tablet_settings"
    private const val KEY_MAIN = "theme_main"
    private const val KEY_PLAYER = "theme_player"

    private fun prefs(context: Context) =
        context.getSharedPreferences(NAME, Context.MODE_PRIVATE)

    fun getMain(context: Context): String =
        prefs(context).getString(KEY_MAIN, "system") ?: "system"

    fun getPlayer(context: Context): String =
        prefs(context).getString(KEY_PLAYER, "followMain") ?: "followMain"

    fun setMain(context: Context, value: String) {
        prefs(context).edit().putString(KEY_MAIN, value).apply()
    }

    fun setPlayer(context: Context, value: String) {
        prefs(context).edit().putString(KEY_PLAYER, value).apply()
    }

    fun isDark(context: Context, theme: String = getMain(context)): Boolean {
        return when (theme) {
            "dark" -> true
            "light" -> false
            else -> {
                val mode = context.resources.configuration.uiMode and
                    Configuration.UI_MODE_NIGHT_MASK
                mode == Configuration.UI_MODE_NIGHT_YES
            }
        }
    }

    fun effective(context: Context, windowType: String): String {
        val mainDark = isDark(context, getMain(context))
        if (windowType != "PlayerWindowTheme") {
            return if (mainDark) "dark" else "light"
        }
        return when (getPlayer(context)) {
            "dark" -> "dark"
            "light" -> "light"
            else -> if (mainDark) "dark" else "light"
        }
    }
}
