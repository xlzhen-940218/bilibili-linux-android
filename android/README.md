# Android 模块

`com.xlzhen.bilitablet`：把哔哩哔哩 PC 客户端的 `render` 界面搬进 Android WebView 的平板客户端。
功能总览、截图和下载见[根目录 README](../README.md)，本文记录模块结构与实现细节。

## 结构

```
android/app/src/main/
├── assets/
│   ├── bridge.js                  # biliBridgePc polyfill：IPC、配置、下载、直播间桥接
│   └── render/                    # 官方客户端 render 资源（从 app.asar 提取）
├── java/com/xlzhen/bilitablet/
│   ├── BiliWebActivity.kt         # WebView 基类：拦截、代理、PiP、主题、JS 桥、退出 PiP 复位缩放
│   ├── MainActivity.kt            # 首页
│   ├── PlayerActivity.kt          # 播放页（player.html），单实例复用
│   ├── LiveRoomActivity.kt        # 直播间（官方桌面端直播间宿主页）
│   ├── LoginActivity.kt           # 官方 passport 登录 + 拦截 refresh_token
│   ├── LoginSessionManager.kt     # 登录态判定、Cookie 恢复、票据续期
│   ├── AuthCookieStore.kt         # Cookie / refresh_token 持久化
│   ├── BiliPassportApi.kt         # passport 票据接口
│   ├── BiliCrypto.kt              # 票据 AES-256-GCM 加解密
│   ├── PlaybackNotification.kt    # MediaSession 通知（播放页 / 直播间共用）
│   ├── PlaybackController.kt      # 通知按钮 → 页面 <video>（播放页顶层文档 / 直播间 iframe）
│   ├── PlaybackActionReceiver.kt
│   ├── DownloadHelper.kt          # 视频流式下载、通知栏进度、调起本地播放器
│   ├── DownloadTaskStore.kt       # 离线任务持久化、本地视频扫描
│   ├── ThemePrefs.kt / SettingsStore.kt
│   └── （AndroidBridge 内嵌在 BiliWebActivity：openPlayer / openLiveRoom / closeWindow…）
└── res/                           # 自适应图标、多尺寸 WebP、FileProvider 配置
```

## 关键实现

### 复用官方 render

WebView 加载 `https://bilipc.bilibili.com/index.html`，`shouldInterceptRequest` 把该域映射到
`assets/render/`；`api.bilibili.com` / `app.bilibili.com` / `api.vc.bilibili.com` 的 GET 请求由原生代理
（带 Cookie / Referer，回显 `Origin`、补 CORS 头）。POST 不代理。

### bridge.js

复刻 Electron preload 的 `window.biliBridgePc`，补齐 render 依赖的同步 / 异步接口：

- 配置：`app/getInitInfo`、`app/version`、`app/getTheme`、`config/*`；
- 窗口：`window/openMainWindow`、`window/openPlayerWindow`、`window/openLiveRoomWindow`、
  `window/focusLiveRoomWindow`、`window/minimize`、`window/reload`、`window/isLiveRoomWindowOpened`；
- 桌面相关：`system/isWin` **只在 `live.bilibili.com` 返回 true**（首页 render 的 Windows 分支会读取
  `system/getFontsInfo` 等桌面接口，全局返回 true 会让首页空白），`system/getFontsInfo → []`；
- 交互：拦截直播卡片点击（`//live.bilibili.com/<房间号>`）转给 `AndroidBridge.openLiveRoom`；
- 布局：按内容区宽度计算卡片列数，写入 `--bili-tablet-cols`（2~6 列，横屏四列、竖屏自动减列）。

### 播放页与直播间

- 两者和首页在**同一任务**里，单实例复用：切换视频调用 `PlayerActivity.loadVideo()`，
  切换房间调用 `LiveRoomActivity.loadRoom()`，重复打开只 `REORDER_TO_FRONT`，不再新增最近任务；
- 直播间加载官方桌面端宿主页 `https://live.bilibili.com/desktop/<房间号>`（标题「桌面端直播间」），
  内部同源 iframe 加载 `/blanc/<房间号>?liteVersion=true&spmid_source=client`；
  宿主页依赖 `biliBridgePc`，所以 bridge 的注入来源是 `https://live.bilibili.com`；
- 直播间锁定横屏（`sensorLandscape`），返回键直接关闭窗口。

### 系统画中画

播放页和直播间按 Home 进入 16:9 画中画；直播间隔 5 秒轮询 iframe 内的 `video` / 标题 / 主播头像，
同步到媒体通知。

进入直播间小窗时会注入 CSS：隐藏宿主标题栏、聊天区、礼物栏、主播信息，
把 `#fullscreen-container` 改为单行网格让播放器铺满（原礼物栏还占着 99px 网格行）；
退出时移除注入样式、还原进小窗前保存的内联样式并派发 `resize`。

退出小窗后 WebView 内核会残留 >100% 的页面缩放（`visualViewport.scale ≈ 1.0937`），
表现为画面放大、左上角对齐、可手指拖动、右上角按钮和底部内容被裁掉。
`WebView.getScale()` / `zoomBy()` 管不到这个缩放，因此退出时注入脚本把
`<meta name="viewport">` 临时改成 `initial-scale=1.0001` 再还原，强制内核重新应用 100%；
并在 3 秒内每 250ms 复查一次，避免缩放出现在窗口尺寸切换完成之后。

### 媒体通知

`PlaybackNotification` + `PlaybackController`：播放页绑定顶层 `document`，
直播间绑定 iframe 文档（`bindLive`）。通知带封面、标题、简介、进度与播放/暂停，
点击回到播放页 / 直播间；Activity 销毁时用 `cancelIfOwner()` 只撤销自己发的通知。

### 离线下载

`DownloadHelper` 流式下载视频流并写入 SAF 目录（默认 `/sdcard/Download/Bilibili/`），
进度通过 `download/progressChange` 事件回写 render 并同步到通知栏；
完成后点击通知经 `FileProvider` 调起系统播放器。

## 构建

要求：JDK 17、Android SDK Platform 35。

```bash
cd android
export JAVA_HOME=/path/to/jdk17
./gradlew assembleDebug
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

> 工程当前使用 AGP 9.4.0 / Kotlin 2.2.10 / Gradle 9.6.0。

## 调试

WebView 已开启 `setWebContentsDebuggingEnabled(true)`，可以连 Chrome DevTools：

```bash
adb shell cat /proc/net/unix | grep webview_devtools   # 取 pid
adb forward tcp:9222 localabstract:webview_devtools_remote_<pid>
# 浏览器打开 chrome://inspect，或直接访问 http://127.0.0.1:9222/json/list
```

## 更新记录

### 1.0.4（2026-11-26）

**新增**

- 独立直播间窗口：官方桌面端直播间页面（标题栏 / 播放器 / 聊天 / 礼物栏），
  与首页同任务、单实例复用，切换房间复用同一窗口，返回键直接关闭；
- 直播间媒体通知：房间标题、主播、封面、播放/暂停同步，点击通知回到直播间；
- 直播间画中画：小窗只显示播放器并铺满，隐藏标题栏、聊天区、礼物栏和主播信息；
- 首页推荐 / 直播卡片列数随内容区宽度自适应（2~6 列）。

**修复**

- 直播间展开画中画后页面被放大到约 109%（左上角对齐、可拖动、右上角按钮与底部内容不可见）：
  退出 PiP 时通过改写 viewport meta 把内核页面缩放复位到 100%；
- 直播间画中画只显示上半、下半纯黑：隐藏礼物栏后仍占一行网格，改为单行网格让播放器铺满；
- 直播间画中画往返后布局错乱：进入时保存播放器容器内联样式，退出时还原并触发 resize；
- 播放页 / 直播间退出后媒体通知残留：Activity 销毁时撤销自己的通知；
- 反复打开视频 / 直播间导致最近任务堆叠：去掉 `NEW_TASK` / `MULTIPLE_TASK` 与独立任务亲和，
  改为同一任务内单实例复用；
- 首页空白：`system/isWin` 只在直播间域名返回 true，并补齐 `system/getFontsInfo` 等桌面接口。

## 已知限制

- POST 请求（点赞、投币、评论等）未代理，`shouldInterceptRequest` 拿不到 POST body；
- 空间页动态 / 投稿、评论详情依赖对官方 render JS 的本地补丁，客户端资源更新后需重新打，
  并同步 `bridge.js` 里的 `APP_VERSION`；
- 系统 PiP 小窗内页面按钮不可点击（Android 限制），只能使用系统提供的关闭 / 全屏；
- 竖屏顶栏频道与搜索框偏挤，推荐横屏使用。
