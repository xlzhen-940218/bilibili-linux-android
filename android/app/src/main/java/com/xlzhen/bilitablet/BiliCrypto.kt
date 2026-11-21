package com.xlzhen.bilitablet

import java.security.MessageDigest
import java.security.SecureRandom
import javax.crypto.Cipher
import javax.crypto.spec.GCMParameterSpec
import javax.crypto.spec.SecretKeySpec

/**
 * 票据加密工具，对齐官方 PC 客户端 `main/app.js` 里的 cG / cH / cI。
 *
 * 官方实现：
 * ```
 * cG(g)        = md5(g)                                    // 十六进制
 * cH(g, h, i)  = aes-256-gcm 加密 (明文 g, key h, iv i)     // 返回 {encrypted, authTag}
 * cI(g, h, i, j) = aes-256-gcm 解密 (密文 g, authTag h, key i, iv j)
 * ```
 *
 * key 与 iv 都是 32 位十六进制字符串（按 UTF-8 取字节，即 32 字节）。
 * Node 的 aes-256-gcm 允许非 96 位 IV，Java 侧用 GCMParameterSpec 传原始长度即可对齐。
 */
object BiliCrypto {
    private const val GCM_TAG_BITS = 128
    private const val GCM_TAG_BYTES = GCM_TAG_BITS / 8
    private const val ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz"
    private const val HEX_ALPHABET = "0123456789abcdef"

    private val secureRandom = SecureRandom()

    fun md5Hex(text: String): String {
        val digest = MessageDigest.getInstance("MD5").digest(text.toByteArray(Charsets.UTF_8))
        return digest.toHex()
    }

    /** 返回 Pair(密文 hex, authTag hex)，与官方 `cH` 的返回一致。 */
    fun encryptGcm(plain: String, key: String, iv: String): Pair<String, String> {
        val cipher = Cipher.getInstance("AES/GCM/NoPadding")
        cipher.init(
            Cipher.ENCRYPT_MODE,
            SecretKeySpec(key.toByteArray(Charsets.UTF_8), "AES"),
            GCMParameterSpec(GCM_TAG_BITS, iv.toByteArray(Charsets.UTF_8))
        )
        val combined = cipher.doFinal(plain.toByteArray(Charsets.UTF_8))
        val tag = combined.copyOfRange(combined.size - GCM_TAG_BYTES, combined.size)
        val data = combined.copyOfRange(0, combined.size - GCM_TAG_BYTES)
        return data.toHex() to tag.toHex()
    }

    /** 与官方 `cI(g, h, i, j)` 同序：密文、authTag、key、iv。 */
    fun decryptGcm(cipherHex: String, tagHex: String, key: String, iv: String): String {
        val cipher = Cipher.getInstance("AES/GCM/NoPadding")
        cipher.init(
            Cipher.DECRYPT_MODE,
            SecretKeySpec(key.toByteArray(Charsets.UTF_8), "AES"),
            GCMParameterSpec(GCM_TAG_BITS, iv.toByteArray(Charsets.UTF_8))
        )
        val combined = hexToBytes(cipherHex) + hexToBytes(tagHex)
        return String(cipher.doFinal(combined), Charsets.UTF_8)
    }

    /** 官方 `randomId(n)`：n 位随机字符串。 */
    fun randomId(length: Int): String {
        val sb = StringBuilder(length)
        repeat(length) {
            sb.append(ALPHABET[secureRandom.nextInt(ALPHABET.length)])
        }
        return sb.toString()
    }

    /** 官方 `randomId(n, "0-9abcdef")`：n 位十六进制随机串。 */
    fun randomHexId(length: Int): String {
        val sb = StringBuilder(length)
        repeat(length) {
            sb.append(HEX_ALPHABET[secureRandom.nextInt(HEX_ALPHABET.length)])
        }
        return sb.toString()
    }

    private fun ByteArray.toHex(): String {
        val sb = StringBuilder(size * 2)
        for (b in this) {
            val v = b.toInt() and 0xFF
            sb.append(HEX_ALPHABET[v ushr 4])
            sb.append(HEX_ALPHABET[v and 0x0F])
        }
        return sb.toString()
    }

    private fun hexToBytes(hex: String): ByteArray {
        val clean = hex.trim()
        val size = clean.length / 2
        val out = ByteArray(size)
        for (i in 0 until size) {
            val hi = Character.digit(clean[i * 2], 16)
            val lo = Character.digit(clean[i * 2 + 1], 16)
            if (hi < 0 || lo < 0) throw IllegalArgumentException("非法 hex: $hex")
            out[i] = ((hi shl 4) or lo).toByte()
        }
        return out
    }
}
