# Bili Tablet（Android 大屏壳原型）

在 Android 平板上运行**官方桌面客户端的 render 页面**（`bilipc.bilibili.com` 的 Vue 应用），
而不是 `www.bilibili.com` 网页版。

## 资源来源

图一那套界面不在这个仓库里，也不在网页版里，而在官方客户端：

```
C:\Program Files\bilibili\resources\app.asar
  └── render/            <- index.html / player.html / login.html / search.html + assets
  └── main/assets/bili-preload.js   <- Electron preload 暴露的 window.biliBridgePc
```

`render/` 已复制到 `app/src/main/assets/render/`（26 MB，356 个文件）。
这些文件版权归哔哩哔哩，仅用于本机自用原型，不要随应用分发。

## 架构

1. `WebView` 加载 `https://bilipc.bilibili.com/index.html`；
2. `WebViewClient.shouldInterceptRequest` 把 `bilipc.bilibili.com` 的请求映射到
   `assets/render/`，包括 `index.html`、`assets/*.js`、`*.css`、图片和字体；
3. `assets/bridge.js` 在 document-start 注入，复刻官方 preload 的
   `window.biliBridgePc`（`callNativeSync` / `callNative` / 事件 API），
   并返回 render 启动所需的 `app/getInitInfo`、`app/mainProcessReady`、
   `system/getPlayerInfo`、`auth/getUserInfo`、`store/getData` 等；
4. `shouldInterceptRequest` 同时转发 `api.bilibili.com` / `app.bilibili.com` /
   `api.vc.bilibili.com` 的 GET 请求，带 Cookie 和 Referer，回显请求的 `Origin`
   并补 CORS 头——WebView 里跨域，不能像 Electron 主进程那样直接放行；
5. `auth/requestLogin` 被 bridge 拦截后打开原生 `LoginActivity`，加载 B 站官方
   `passport.bilibili.com/login`（二维码 / 账号密码 / 短信均可），登录成功后
   CookieManager 是进程级共享的，主 WebView 直接复用；`auth/getUserInfo`
   通过 `api.bilibili.com/x/web-interface/nav` 返回登录用户；
6. 原生接管全屏视频、返回键、Cookie、下载和非 http(s) 协议。

## 已验证（Pixel 6 / Android 17）

- 首页渲染出客户端原生顶栏：logo、搜索框、直播 / 推荐 / 热门 / 追番 / 影视、
  窗口控制按钮、右下角刷新；
- 左侧竖排导航（首页 / 精选 / 动态 / 我的）正常；
- 推荐列表已加载真实数据：31 张卡片、封面、标题、UP 主、播放量、弹幕数、时长；
- 首次启动的《哔哩哔哩用户协议与隐私保护》弹窗正常出现；
- 点击登录（或 render 调用 `auth/requestLogin`）会打开官方登录页，
  二维码、账号密码、短信登录均正常显示；
- 真实账号登录后，`auth/getUserInfo` 返回 nav 用户信息（昵称、头像、等级、大会员），
  首页头像和「我的」页面（动态/关注/粉丝、历史记录）均正常，不再误报未登录；
- 个人空间页的「动态」和「投稿」都能加载真实内容：动态流（投稿视频卡片）
  与投稿视频列表（含播放量、时长、UP 主）；
- 播放器可用：首页点视频进入客户端 `player.html`，`nano` 播放核心加载，
  视频、字幕、评论、推荐均正常；播放页左上角「回到主界面」可回首页；
- 画中画：播放页按 Home 进入系统 PiP，小窗继续播放视频；
- `fetch('https://api.bilibili.com/x/web-interface/nav')` 返回真实响应，
  `feed/rcmd` 返回 `code:0` 和真实视频数据，说明 API 代理和 CORS 已打通。

## 当前限制

- `player.html` 播放页需要真实的 `system/getPlayerInfo.playerSrc`（客户端播放器核心）
  和 `window.nano`，目前指向空脚本；
- POST 请求（点赞、评论等）未代理：`shouldInterceptRequest` 拿不到 POST body；
  登录页在 `passport.bilibili.com` 同域内完成，不经过该代理，因此登录本身不受影响；
- 空间页动态/投稿依赖对官方 render JS 的本地补丁：
  `Space.75f46eb4.js`（默认激活 tab）、`AllFeedFragment.025ca0f7.js`
  （`active` watcher 加 `immediate`）、`index.55978b26.js`
  （`getBuildParam` 的 `APP_VERSION` 兜底）。官方客户端资源更新后需要重新打；
- 手机竖屏（CSS 宽度 < 1200）会横向溢出，横屏和 11 寸平板正常。

## 下一步

1. 从 `main/assets/bili-preload.js`（obfuscator 混淆）或官方客户端运行时抓出
   `system/getPlayerInfo` 的真实 `playerSrc`，补播放器核心；
2. 用原生 `WebViewClient` + `OkHttp`/`HttpURLConnection` 代理 POST，补登录；
3. 平板上按 1280 宽度验证布局，必要时再注入 viewport 锁定。

## 构建

要求：JDK 17、Android SDK Platform 35。

```bash
cd android
export JAVA_HOME=/path/to/jdk17
./gradlew assembleDebug
adb install -r app/build/outputs/apk/debug/app-debug.apk
```
