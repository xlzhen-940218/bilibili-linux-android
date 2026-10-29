/*
 * Bili Tablet — 官方 render 页面的 bridge polyfill。
 *
 * 官方客户端通过 Electron preload 注入 window.biliBridgePc；这里用纯 JS
 * 复刻 render 启动所需的同步/异步接口。返回值类型要和官方封装保持一致：
 *  - app/getInitInfo、system/getPlayerInfo 走 JSON.parse，返回 JSON 字符串；
 *  - auth/getUserInfo 直接当对象用，返回对象；
 *  - 其余未实现的接口返回 null，并在 console 里留痕。
 */
(function () {
    'use strict';

    if (window.__biliTabletBridge) {
        return;
    }
    window.__biliTabletBridge = true;

    // render 的 WBI 签名依赖 UNIFY_HTTP_WBI_CONFIG 和 bili_ticket。
    // 原生登录页不会走官方 auth/setCookies，所以这里从 localStorage 的 wbi_img_urls
    // 还原 keys，并放一个未过期的 ticket 占位，避免 isWbi 请求卡在 forticket 获取上。
    (function seedWbi() {
        try {
            var urls = localStorage.getItem('wbi_img_urls');
            if (urls && !window.UNIFY_HTTP_WBI_CONFIG) {
                var parts = urls.split('-');
                if (parts.length === 2) {
                    var img = parts[0].split('/').pop().split('.')[0];
                    var sub = parts[1].split('/').pop().split('.')[0];
                    window.UNIFY_HTTP_WBI_CONFIG = img + '-' + sub;
                }
            }
            if (!localStorage.getItem('bili_ticket')) {
                localStorage.setItem('bili_ticket', 'bili-tablet');
                localStorage.setItem(
                    'bili_ticket_expires',
                    String(Math.floor(Date.now() / 1000) + 3600)
                );
            }
        } catch (e) {
            /* localStorage 不可用时忽略 */
        }
    })();

    var INIT = {
        IS_MAC: false,
        IS_WIN: true,
        IS_LINUX: false,
        IS_DEV: false,
        IS_RELEASE: true,
        APP_VERSION: '1.19.0',
        IS_DEV_M: false,
        JSB_PRELOAD_URL: '',
        appId: 'com.bilibili.app',
        platform: 'win'
    };

    var GUEST = {
        isLogin: false,
        mid: 0,
        uname: '',
        face: '',
        level: 0,
        vip: 0
    };

    var listeners = {};

    var cachedUser = GUEST;

    /**
     * 登录后 Cookie 由原生 CookieManager 共享，这里用真实 nav 接口刷新用户信息。
     * 结果同时用于 auth/getUserInfo 的同步返回，以及 auth/userInfoChange 事件。
     */
    function refreshUser() {
        fetch('https://api.bilibili.com/x/web-interface/nav', { credentials: 'include' })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                if (!res || !res.data) {
                    return;
                }
                cachedUser = res.data.isLogin ? res.data : GUEST;
                emit('auth/userInfoChange', { data: cachedUser });
            })
            .catch(function () {});
    }

    function add(event, cb, once) {
        (listeners[event] = listeners[event] || []).push({ cb: cb, once: once });
    }

    function remove(event, cb) {
        var list = listeners[event];
        if (!list) {
            return;
        }
        listeners[event] = list.filter(function (item) {
            return item.cb !== cb;
        });
    }

    function emit(event) {
        var args = [].slice.call(arguments, 1);
        var list = listeners[event] || [];
        listeners[event] = list.filter(function (item) {
            return !item.once;
        });
        list.forEach(function (item) {
            try {
                item.cb.apply(null, args);
            } catch (err) {
                console.error('[bili-tablet] listener error', event, err);
            }
        });
    }

    function callNativeSync(action) {
        switch (action) {
            case 'app/getInitInfo':
                return JSON.stringify(INIT);
            case 'app/mainProcessReady':
                return true;
            case 'app/getTheme':
                return 'light';
            case 'window/isFocused':
            case 'window/isVisible':
            case 'window/isMaximized':
                return true;
            case 'window/isPined':
            case 'window/isMainWindowMini':
            case 'window/isPlayerWindowVisible':
            case 'window/isLiveRoomWindowVisible':
            case 'window/isBiliPetVisible':
                return false;
            case 'config/getIsShowConsoleLog':
                // 保留 console，方便在 logcat / DevTools 里定位 render 报错。
                return true;
            case 'config/getSystemFont':
                return 'system-ui';
            case 'config/getCustomConfig':
                return '{}';
            case 'config/getUseMediaSession':
                return false;
            case 'config/getIsQuitDialogPoped':
                return true;
            case 'system/getPlayerInfo':
                // 官方播放器核心在 render/assets/lib/core.js，player.html 会把它当 script 加载。
                // 注意这里必须返回对象：player.html 用 qs() 直接解构，不会 JSON.parse。
                return { playerSrc: '/assets/lib/core.js', playerExpInfo: {} };
            case 'system/getWxInstallInfo':
                // 推荐接口 Oc() 会直接解构这个返回值，返回 null 会让请求发不出去。
                return { isWeChatInstalled: false };
            case 'app/getAppInfo':
                return { version: '1.19.0', appId: 'com.bilibili.app', channel: 'official' };
            case 'config/getRemoteConfig':
            case 'config/getGeneralConfig':
            case 'system/getAbTestInfo':
                return '{}';
            case 'system/getFontsInfo':
                return '[]';
            case 'system/getBuvidWlCode':
                return '';
            case 'system/getBucketInfo':
                return '{}';
            case 'system/getAppCache':
                return '';
            case 'config/getDownloadInfo':
                return '{}';
            case 'config/getDlParallelNum':
                return 2;
            case 'config/getIsShowLicense':
                // 协议弹窗只适合首次启动；原型阶段直接跳过，避免每次重装都挡一层。
                return false;
            case 'store/getData':
                // 协议弹窗用 store/getData 判断是否已同意；原型阶段直接视为已同意。
                return true;
            case 'auth/getUserInfo':
                // 先返回已登录占位，避免首页在 nav 返回前一直按未登录渲染；
                // refreshUser 拿到真实 nav 后会 emit userInfoChange，触发重新读取。
                if (cachedUser && cachedUser.isLogin) {
                    return cachedUser;
                }
                if (window.AndroidBridge &&
                    typeof window.AndroidBridge.isLoggedIn === 'function' &&
                    window.AndroidBridge.isLoggedIn()) {
                    return { isLogin: true, mid: 0, uname: '', face: '', level: 0, vip: 0 };
                }
                return GUEST;
            default:
                console.log('[bridge-sync]', action);
                return null;
        }
    }

    function callNative(action) {
        console.log('[bridge-async]', action);
        if (action === 'window/pinPlayerWindow') {
            // 播放页的迷你播放器按钮：转到 Android 系统画中画。
            if (window.AndroidBridge && typeof window.AndroidBridge.enterPip === 'function') {
                window.AndroidBridge.enterPip();
            }
            return Promise.resolve({ code: 0 });
        }
        if (action === 'window/unpinPlayerWindow') {
            if (window.AndroidBridge && typeof window.AndroidBridge.exitPip === 'function') {
                window.AndroidBridge.exitPip();
            }
            return Promise.resolve({ code: 0 });
        }
        if (action === 'window/openMainWindow') {
            // 播放页左上角「回到主界面」：WebView 里直接回首页。
            location.href = '/index.html#/page/home/recommends';
            return Promise.resolve({ code: 0 });
        }
        if (action === 'window/openPlayerWindow') {
            // 官方客户端会开独立播放窗口；WebView 里直接跳到同源的 player.html。
            var info = arguments[1] || {};
            var parts = [];
            if (info.type) parts.push('type=' + encodeURIComponent(info.type));
            if (info.bvid) parts.push('bvid=' + encodeURIComponent(info.bvid));
            if (info.aid) parts.push('aid=' + encodeURIComponent(info.aid));
            if (info.epid) parts.push('epid=' + encodeURIComponent(info.epid));
            if (info.seasonId) parts.push('seasonId=' + encodeURIComponent(info.seasonId));
            if (parts.length) {
                location.href = '/player.html?' + parts.join('&');
            }
            return Promise.resolve({ code: 0 });
        }
        if (action === 'auth/requestLogin') {
            // 官方 login.html 内嵌 Electron <webview>，Android 改为原生登录页。
            if (window.AndroidBridge && typeof window.AndroidBridge.startLogin === 'function') {
                window.AndroidBridge.startLogin();
            }
            return Promise.resolve({ code: 0 });
        }
        if (action === 'auth/reloadUserInfo') {
            refreshUser();
            return Promise.resolve(cachedUser);
        }
        if (action === 'window/splashWindowReady') {
            // 官方主进程收到 splashWindowReady 后会回调 render 的 handleMainWindowReady。
            setTimeout(function () {
                if (typeof window.handleMainWindowReady === 'function') {
                    window.handleMainWindowReady();
                }
            }, 30);
        }
        return Promise.resolve(null);
    }

    window.biliBridgePc = {
        callNativeSync: callNativeSync,
        callNative: callNative,
        on: function (event, cb) { add(event, cb, false); },
        once: function (event, cb) { add(event, cb, true); },
        addListener: function (event, cb) { add(event, cb, false); },
        removeListener: remove,
        off: remove,
        emit: emit
    };
    window.biliBridge = window.biliBridgePc;

    // Chromium 自带只读的 window.cookieStore（Cookie Store API）时不要覆盖，否则脚本直接中断。
    if (!window.cookieStore) {
        try {
            Object.defineProperty(window, 'cookieStore', {
                configurable: true,
                value: {
                    get: function () { return Promise.resolve([]); },
                    set: function () { return Promise.resolve(); }
                }
            });
        } catch (e) {
            /* 原生实现不可写，直接沿用 */
        }
    }
    window.dataSync = function () {};

    // 首次启动先拉一次用户信息；登录成功回到主页面后会重新执行。
    setTimeout(refreshUser, 200);
})();
