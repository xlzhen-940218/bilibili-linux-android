package com.xlzhen.bilitablet

import android.content.Context

/** 设置页的通用键值存储，桥接 render 的 config 系列读写。 */
object SettingsStore {
    private const val NAME = "bili_tablet_settings"

    private fun prefs(context: Context) =
        context.getSharedPreferences(NAME, Context.MODE_PRIVATE)

    fun get(context: Context, key: String, defaultValue: String): String =
        prefs(context).getString(key, defaultValue) ?: defaultValue

    fun set(context: Context, key: String, value: String) {
        prefs(context).edit().putString(key, value).apply()
    }

    fun remove(context: Context, key: String) {
        prefs(context).edit().remove(key).apply()
    }
}
