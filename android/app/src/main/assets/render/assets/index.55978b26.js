import{o as openBlock,c as createElementBlock,a as createBaseVNode,f as http,s as server,r as resToObj,cq as getCsrf,h as httpServer,cr as httpSvc,cs as APP_VERSION,aL as IS_MAC,bw as IS_WIN,bW as IS_LINUX,ct as initEmojiPackage,P as formatImg,N as defineComponent,V as createVNode,j as events,ac as inject,cu as DYNAMIC_URL_REG_EXP,aa as openInAppBrowser,am as useRouter,a5 as messageEvents,ab as openPlayerWindow,l as ref,p as onMounted,B as computed,aV as useGamepadStore,Q as watch$1,q as onBeforeUnmount,au as renderSlot,T as withDirectives,U as vShow,Y as Fragment,Z as renderList,_ as normalizeClass,$ as withModifiers,ak as createBlock,X as unref,a1 as createCommentVNode,a3 as createTextVNode,a0 as toDisplayString,x as nextTick,cv as openMainWindowPage,bM as callNativeSync,bp as openInBrowser,al as openInAppBrowser$1,v as allCustomReport,A as reactive,cw as usePopupZIndexStore,W as withCtx,af as normalizeStyle,a2 as Transition,bf as debounce,cx as getUserByKeyword,bO as createApp,y as storeToRefs,z as useUserInfoStore,aP as resolveDirective,aA as setClipboardData,cy as mitt,R as resolveComponent,t as toastAsync,a6 as alertAsync,D as requestLogin,cc as getDefaultExportFromCjs,aX as withKeys,bc as Upinfo,cz as biliMsg,ay as createStaticVNode,aK as callNative,bh as throttle$1,a9 as h$6}from"./index.ef2cf61c.js";import{E as _imports_2,F as utils$2,G as createPopper,V as VImg,P as PlayTime,H as promiseTimeout,T as Tabs}from"./MoreFeedback.8bceae7c.js";import{_ as _export_sfc}from"./plugin-vue_export-helper.21dcd24c.js";import{I as IcoClose$1}from"./ico_max_exit.99493ff1.js";import{v as vuiCssPrefix}from"./style.b992499f.js";const _hoisted_1$J={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$G=createBaseVNode("path",{opacity:".01",d:"M4 4h24v24H4V4Z",fill:"currentColor"},null,-1),_hoisted_3$F=createBaseVNode("path",{d:"M25.111 17.323c.124-.862-.58-1.502-1.316-1.502A5.973 5.973 0 0 1 17.87 9.08l-.991-.126.991.127c.124-.969-.492-2.284-1.869-2.284a9.205 9.205 0 0 0 0 18.41c4.636 0 8.47-3.425 9.111-7.883Z",stroke:"currentColor","stroke-width":"2"},null,-1),_hoisted_4$j=[_hoisted_2$G,_hoisted_3$F];function render$v(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$J,[..._hoisted_4$j])}var IcoDark={render:render$v};const _hoisted_1$I={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$F=createBaseVNode("path",{d:"M8.3 16a1.1 1.1 0 0 0-1.1-1.1H6.1a1.1 1.1 0 0 0 0 2.2h1.1A1.1 1.1 0 0 0 8.3 16Zm.704 5.5-.781.781a1.1 1.1 0 0 0 0 1.551 1.1 1.1 0 0 0 1.551 0l.781-.781A1.1 1.1 0 0 0 9.004 21.5ZM16 8.3a1.1 1.1 0 0 0 1.1-1.1V6.1a1.1 1.1 0 0 0-2.2 0v1.1A1.1 1.1 0 0 0 16 8.3Zm6.226 2.574a1.1 1.1 0 0 0 .77-.319l.781-.781a1.099 1.099 0 1 0-1.551-1.551l-.726.781a1.1 1.1 0 0 0 0 1.551 1.1 1.1 0 0 0 .726.319Zm-13.2-.319a1.1 1.1 0 0 0 1.551 0 1.1 1.1 0 0 0 0-1.551l-.781-.781a1.105 1.105 0 0 0-1.573 1.551l.803.781ZM25.9 14.9h-1.1a1.1 1.1 0 0 0 0 2.2h1.1a1.1 1.1 0 0 0 0-2.2Zm-2.904 6.6a1.1 1.1 0 0 0-1.496 1.496l.781.781a1.1 1.1 0 0 0 1.551 0 1.1 1.1 0 0 0 0-1.551l-.836-.726ZM16 9.95A6.05 6.05 0 1 0 22.05 16 6.06 6.06 0 0 0 16 9.95Zm0 9.9a3.85 3.85 0 1 1 0-7.7 3.85 3.85 0 0 1 0 7.7Zm0 3.85a1.1 1.1 0 0 0-1.1 1.1v1.1a1.1 1.1 0 0 0 2.2 0v-1.1a1.1 1.1 0 0 0-1.1-1.1Z",fill:"currentColor"},null,-1),_hoisted_3$E=[_hoisted_2$F];function render$u(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$I,[..._hoisted_3$E])}var IcoLight={render:render$u};function removeElement(ge){var be="__butils_element_dustbin",$e=document.getElementById(be);$e||($e=document.createElement("DIV"),$e.id=be,$e.style.display="none",document.body.appendChild($e)),$e.appendChild(ge),$e.innerHTML=""}function copyText(ge,be){return!be&&navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(ge):new Promise(function($e,ke){try{var Ee=document.createElement("textarea");Ee.value=ge,Ee.setAttribute("readonly",""),Ee.style.position="absolute",Ee.style.left="-9999px";var Ce=document.fullscreenElement||document.body;Ce.appendChild(Ee);var Te=document.getSelection().rangeCount>0?document.getSelection().getRangeAt(0):!1;Ee.select(),document.execCommand("copy"),Ce.removeChild(Ee),removeElement(Ee),Te&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(Te)),$e()}catch(Se){ke(Se)}})}function isFullscreen(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)}const DEFAULT_FACE="//i0.hdslb.com/bfs/face/member/noface.jpg",DEFAULT_IMG="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAYAAAA850oKAAAAAXNSR0IArs4c6QAACSlJREFUeAHtnFtsFFUYx1toiw1CpYiCEqURokhK6SUaIZE7ohArCokRlQdN9MUnH8REjYlEXzTB8AAmJsaEEAFFLlGMQBTRkChsL1K5FGMRVAxQAgi0tFB/X8O0y3am7NLd7tnZ/yTTM/Od6/zOf851tjk5OkRABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABEQglkBurCEM9w0NDQUtLS3zc3Nzb+PcUV5e3pjs56qpqRnT3t7+yIABA04XFxdvLikpaUl2HulOb0C6C5CK/C9evLi0o6PjiytXrqzk3BeJRB5PZj6kN+vy5cu/IbxV5LO2ubn5nWSm70paoRSHtRgeYCqvAIF8zpte7dn64pLObNLbQhqFXjrk0ZWfZwuDG0px0NS/T+Ucj6qgfN709Xv27HkiypbwJfHnkM5mIt4UFbk5Pz//3aj70FyGUhyMMZqooemc1wiE+3V79+5dgJvwQbxHiLSJM1oYpwYOHDizrKzsYMIJZkCEUA5IPe51dXX3trW1fcf9KM+G20a383RlZeWGKFuvlwhjLgE20n0Migp4ihZqZkVFRV2ULVSXoWw5vBqyNzovL28aYvjbs+Hm2yCSQeVTUbbAS8I9imesME6S5owwC8OAhFoc9oCTJk06RNM/PUYgeQwqP2MMscjCBB0MPh9DSF9Gtxikc4LwM2h56oPihcWecd0KFVoK/CVUUhXunZz5cVZGEZV8S0zYy6RzLMbWdUv4O7iJTf8scU53BerlgvgthD2Ku4su6FNamiO9BHfOK2PE0djYOPTMmTMfQPBF5yjGV6A2BPIeLdayqqqqtviipDdURoijvr5+GAPLbbyBlenFlZTcbcazKBME4vyYA0HkXrp0aUNIhGHqqqarWZEUmaU4EefFwTTyFRhMSzGHfk0eob9kK639mukNZJZ3A3H6LYptoLFP8vp1MjzEm9h8nTD97o0AbDB7V1DGjD3exm9bkL8LdqfF0dra+iSQRvqBQhC2+LSQKeVhP38XbKyRPIQI1lGW0bHlQTyTGUvdN3HixAOxfq7cO92tAHBOAKiLiKPaZWFYuZm67maG8mzAM+Sw5T8lyM8Fu9PiANCDAZC+ypQ1A8q5k2do8HsOWpUyP7srNqfFQcvh26UAb78rAOMsR1B5b40zflqCOS0Ouo5hflRoqi/52V218RytfmXDPtTP7orNaXHQcmTEIl0fKtNp/k4Xrg/QFTUJBLJOHKydjKRFGpgoOzb8or8JSTR6RoZ3ep2jr0T52KeEz/oqEEO5naRXzqLaKFYnJ3Ft6yRxHQjqZr5mP4ZATjNOqCFSDW6ETwFqWKdo5PpKXAllWKBQiMNaAhaUxiOEThF4QmCzrsivPvCvwB63ONjbKSOOtbLDcWfhzsLNYSqaw0LXeZb4La1OwTBYruGb0oYJEyZk1KCZ8vc4QiEOKudrnixowazHQ1Ox1op80sMjwEB4E5Pvgd9gPCbb6QkGke6+avONkynGsIw5fk0QeGBl+6XTmzj8wmOrD7BnlDkULQfEI3FQP0cYa/4jNP32ZidyrCXwKcYW1m3ZeKX4OpHjKc91kki/dyjFQSWeoBJt4BjhusbGAXxLepjrjhtBzh7ON8Szs/NgnHE34w3rmipMMLgmGvtksfPAJnF4MNLtUnmHmIG8SQXV2gwCIfyVyjJd3dc5Qh4bvXwQzAhPMEOGDEm0m/OSccoNRcvBm2pTyWXpJItg7Kv0b6+e6SxK0vIOy4A0aUCUUDcBiaObha5iCEgcMUB0201A4uhmoasYAlknDmYVL9TW1tr085oD2wOstO5k/6THR8HYZ3Dar+yz6sgqcZgomG5+zLebPyIS+zll57F///7hLHmvZSr8MIY1CKTrJ5CEW4htO+dW+9VdZ4Qs+ROKqWy8dcViWBNh/+EchUh2IIK3mAYfvHDhwjKEMQa7HVOwbUAUHxJmKudr2Oyjo8jYsWP/swDZcmRVy8H2um25z+W0NQlrBZYjiq2clVy3Y+9cBeV+PqKw35S8wWmtyIHCwsJ5+Nt6StYcWSUOq1VWU+sLCgrsl/prqGzbVm/n/JlWZSZ+9r84FnPuw8+W2s/hLmcLvoot+Oj/EoRX+I+s6la86iwtLf2X68W0EEuampryov9NJD9wXoPfGj4UGkxLY7+PyarWwmNkrtPisLeXI2UfGZO+tRp29jj4r0DnexiTb3BaeE53Kwij2a8+GA8M8rM7bIv+J3NdxeT5znTdOHjhtDjg5dvP88bf7yDL3ooUVN6TvUVKt5/r4gj6KGce09B70g0vnvyZEtv3puP9wiLyWj+7KzbXxWFb4D0OYA8C7BYEYrMOZw+EMZMucHVQAfn25KcgPxfsKRvsJePhbKUSEfyBGLq+svJJ9yhhTvvY020aRblHBBWCMv/A1HlqkL8LdqfFYYB4+17m7VvpAqxklQFhdLCuMoP/tPx9stJMRTqudys5APyIB/ftXlIBpD/SpEVZ4bowjIPz4rC3rKioaBFu0OC0P+ozaXnwHGvpTl5NWoIpTMh5cdizjxs37iz/pno2lyuA6/TCUS911UJXspRvTRfzDL4Lb73ETYuX82OOWCp8VzGWZvl5AFfhjsbtXOXluoSwPRab8LdNtqSvJ5Cf/Xbl9tjykZ/t1/xudsK0cv8n7i427lZn2v5MxokjtjK8e0Rj/6t0gXfvuVTOczTjgdNJL1yiLj+FqOYbkK6fJnjxyW87+Vkrl/FHRnQr8VBGGKt8wh3DvsXH3mcTwtiGEA77JBSamVVoxMFuqs1oFlBhv+Aep3/fxPV07CnZvyDdC6Q/i3zWW35cRxDiM7QaG3wEI5MIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIpJPA/+0R7s0ypFpmAAAAAElFTkSuQmCC",LINE_FEED=`
`,MAX_SAVE_STEPS=50,shareAdd=(ge,be)=>http.post(server.api+"/x/web-interface/share/add",ge,be),replyAdd=ge=>http.post(server.api+"/x/v2/reply/add",{...ge,jsonp:"jsonp",scene:"msg",plat:1,from:ge.from||"im-reply",build:0,mobi_app:"web"}),replyAction=ge=>http.post(server.api+"/x/v2/reply/action",{...ge,build:0,mobi_app:"web"}),dmThumbupAdd=ge=>http.post(server.api+"/x/v2/dm/thumbup/add",{oid:ge.oid,dmid:ge.dmid,op:ge.op,scene:ge.scene||"msg",from:ge.from||"im-reply"}),watchAdd=ge=>http.post(server.api+"/x/v2/history/toview/add",{aid:ge}),watchDel=ge=>http.post(server.api+"/x/v2/history/toview/del",{aid:ge}),CONTENT_TYPE_JSON="application/json;charset=UTF-8",_addCsrfToApiUrl=ge=>`${ge}?csrf=${getCsrf()}`,_post=(ge,be)=>http.post(_addCsrfToApiUrl(ge),be,{headers:{"Content-Type":CONTENT_TYPE_JSON}});function getDynamicPublishConfig(){return http.get("//api.bilibili.com/x/dynamic/feed/create/init_check",{params:{scene:1,meta:{platform:"pc"}}}).then(resToObj)}function getUnameToMid(ge){return http.get("//api.bilibili.com/x/polymer/web-dynamic/v1/name-to-uid",{params:{names:ge,teenagers_mode:0}}).then(resToObj)}const _createDynamicCheck=({dyn_req:{content:ge,pics:be}})=>_post("//api.bilibili.com/x/dynamic/feed/create/submit_check",{content:ge,pics:be}).then(resToObj),_createDynamicSubmit=ge=>_post("//api.bilibili.com/x/dynamic/feed/create/dyn",ge).then(resToObj),_createDynamic=async ge=>{try{return await _createDynamicCheck(ge),await _createDynamicSubmit(ge)}catch(be){return Promise.reject(be)}},_topicPubUpload=ge=>_post("//api.bilibili.com/x/topic/web/pub/upload",ge).then(resToObj),_setParamsOption=(ge,be,$e)=>{ge.option||(ge.option={}),ge.option[be]=$e},_getCreateContents=(ge,be)=>{switch(be.type){case"text":ge.push({raw_text:be.text,type:1,biz_id:""});break;case"highlight":switch(be.data.type){case"at":ge.push({raw_text:be.text,type:2,biz_id:String(be.data.rid)});break;case"lottery":ge.push({raw_text:be.text,type:3,biz_id:String(be.data.rid)});break;case"vote":ge.push({raw_text:be.text,type:4,biz_id:String(be.data.rid)});break;case"bv":ge.push({raw_text:be.data.rid,type:7,biz_id:be.data.rid});break}break;case"emoji":ge.push({raw_text:be.text,type:9,biz_id:""});break}return ge},_setCommentOption=(ge,be)=>{switch(be){case 0:_setParamsOption(ge,"close_comment",1);break;case 2:_setParamsOption(ge,"up_choose_comment",1);break}},_setCreateScene=ge=>{var be,$e,ke;if(!ge.scene&&(($e=(be=ge.content)==null?void 0:be.contents)!=null&&$e.length&&(ge.scene=1),(ke=ge.pics)!=null&&ke.length&&(ge.scene=2),ge.video&&(ge.scene=3),ge.repost_src&&(ge.repost_src.dynId?ge.scene=4:ge.repost_src.revsId&&(ge.scene=5)),ge.sketch&&(ge.scene=6),!ge.scene))throw new Error("dyn create params scene empty")};async function createDynamic(ge){var be,$e,ke,Ee,Ce;try{const Te={content:{contents:(be=ge==null?void 0:ge.nodes)==null?void 0:be.reduce(_getCreateContents,[])},pics:($e=ge==null?void 0:ge.pics)!=null&&$e.length?ge==null?void 0:ge.pics:void 0,scene:ge==null?void 0:ge.scene,sketch_type:ge==null?void 0:ge.sketchType,sketch:ge==null?void 0:ge.sketch,attach_card:ge==null?void 0:ge.attachCard,repost_src:ge==null?void 0:ge.repostSrc,upload_id:ge==null?void 0:ge.uploadId,meta:{app_meta:{from:(ge==null?void 0:ge.from)||"create.dynamic.pc"}}};(ke=ge==null?void 0:ge.topic)!=null&&ke.id&&(Te.topic={id:ge.topic.id,name:ge.topic.name,from_source:ge.topic.fromSource,from_topic_id:ge.topic.fromTopicId||0}),_setCreateScene(Te);const Se={dyn_req:Te};[4,5].includes(Te.scene)&&(delete Te.repost_src,Se.web_repost_src={},Te.scene===4?Se.web_repost_src.dyn_id_str=ge.repostSrc.dynId:Se.web_repost_src.revs_id=ge.repostSrc.revsId),_setCommentOption(Te,ge.comment);const Ke=await _createDynamic(Se);if(Te.topic)try{_topicPubUpload({topic_id:(Ee=ge==null?void 0:ge.topic)==null?void 0:Ee.id,request_id:(Ce=ge==null?void 0:ge.topic)==null?void 0:Ce.requestId,upload_id:ge==null?void 0:ge.uploadId})}catch(Je){console.log(Je)}return Ke}catch(Te){return Promise.reject(Te)}}function removeDynamic(ge){return _post("//api.bilibili.com/x/dynamic/feed/operate/remove",{dyn_id_str:ge}).then(resToObj)}function padZero(ge,be=2){if(be<1)return ge.toString();be=Math.floor(be);const $e=10**be;return ge<$e?`${"0".repeat(be-ge.toString().length)}${ge}`:$e.toString()}const COMMON_PARAMS={build:0,platform:"web",device:"",mobi_app:"pc_electron"};function getBuildParam(){const ge=(APP_VERSION||"1.19.0").split(".");return parseInt(`${ge[0]}${padZero(ge[1])}${padZero(ge[2])}`)}function getDeviceParam(){let ge="";return IS_MAC?ge="mac":IS_WIN?ge="win":IS_LINUX?ge="linux":ge="unknow",ge}function getCommonQueryParams(){return COMMON_PARAMS.build||(COMMON_PARAMS.build=getBuildParam(),COMMON_PARAMS.device=getDeviceParam()),COMMON_PARAMS}let fakeMid="";function getFakeMid(ge=!1){return(ge||!fakeMid)&&(fakeMid=Math.random().toString().slice(2,8)),fakeMid}async function getDynamicListAll({page:ge=1,current:be="",offset:$e="",hostMid:ke=0}){return http.get("//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/feed/all",{params:{page:ge,update_baseline:be,offset:$e,host_mid:ke,timezone_offset:new Date().getTimezoneOffset(),...getCommonQueryParams()}}).then(resToObj)}function getDynamicList({scene:ge="GENERAL",page:be=1,current:$e="",offset:ke="",hostMid:Ee=0,isLogin:Ce=!0}){return ge==="SPACE"?httpServer.get("//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/feed/space",{params:{page:be,offset:ke,host_mid:Ee,timezone_offset:new Date().getTimezoneOffset(),...getCommonQueryParams()},isWbi:!0}).then(resToObj):Ce?(Ee&&be===1&&getAllDynamicDetails(Ee),getDynamicListAll({page:be,current:$e,offset:ke,hostMid:Ee})):http.get("//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/feed/hot",{params:{page:be,offset:ke,timezone_offset:new Date().getTimezoneOffset(),fake_mid:getFakeMid(be===1),...getCommonQueryParams()}}).then(resToObj)}async function getDynamicUpdate(ge,be=!1){const $e=`//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/feed/all/update${be?"?type=video":""}`;return http.get($e,{params:{update_baseline:ge,...getCommonQueryParams()}}).then(resToObj)}async function getDynamicFeedVideo({page:ge=1,offset:be="",hostMid:$e=0}){try{return await http.get("//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/feed/video",{params:{page:ge,offset:be,host_mid:$e,...getCommonQueryParams()}})}catch(ke){return Promise.reject(ke)}}async function getDynamicVideos({page:ge=1,offset:be="",hostMid:$e=0},ke=[]){var Ee,Ce,Te,Se;try{if($e){ge===1&&getAllDynamicDetails($e);const Ke=30,Je=await http.get("//api.bilibili.com/x/space/arc/list",{params:{ps:Ke,pn:ge,mid:$e}}),mt=resToObj(Je);let bt=!0;return(Te=mt.page)!=null&&Te.count?(mt.page.pn||ge)*(mt.page.ps||Ke)>=mt.page.count&&(bt=!1):bt=!1,(Se=mt.archives)!=null&&Se.length&&(ke=[...ke,...mt.archives]),{items:ke,offset:"",has_more:bt,page:ge}}else{const Ke=await getDynamicFeedVideo({page:ge,offset:be,hostMid:0}),Je=resToObj(Ke),mt=!!(Je.has_more&&((Ee=Je.items)==null?void 0:Ee.length));return(Ce=Je.items)!=null&&Ce.length&&(ke=[...ke,...Je.items]),ke.length<30&&mt?await getDynamicVideos({page:++ge,offset:Je.offset,hostMid:$e},ke):{items:ke,offset:Je.offset,has_more:mt,page:ge}}}catch(Ke){return Promise.reject(Ke)}}function getDynamicDetail(ge,be=!1,$e=0){const ke={...getCommonQueryParams()};return $e?(ke.rid=ge,ke.type=$e):(ke.id=ge,ke.preview=be?"1":""),httpServer.get("//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/detail",{params:ke,isWbi:!0}).then(resToObj)}function getDynamicDetailForward(ge){return httpSvc.request({url:"//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/detail/forward",params:{...ge,...getCommonQueryParams()}}).then(resToObj)}function getDynamicForwardPreview(ge,be=0){const $e={...getCommonQueryParams()};return be?($e.rid=ge,$e.type=be):$e.id=ge,httpSvc.request({url:"//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/forward/preview",params:$e}).then(resToObj)}function postDynamicLike({dynamic_id:ge,up:be,statistics:$e,spmid:ke,from_spmid:Ee}){return http.post("//api.vc.bilibili.com/dynamic_like/v1/dynamic_like/thumb",{dynamic_id:ge,up:be,statistics:$e,spmid:ke,from_spmid:Ee}).then(resToObj)}function postDynamicReport({id:ge,uid:be,type:$e,desc:ke=""}){return http.post("//api.bilibili.com/x/dynamic/feed/dynamic_report/add",{dynamic_id:ge,accused_uid:be,reason_type:$e,reason_desc:ke}).then(resToObj)}function postSetDynamicSpaceTop(ge){return http.post(_addCsrfToApiUrl(`//api.bilibili.com/x/dynamic/feed/space/${ge.status?"rm_top":"set_top"}`),{dyn_str:ge.dynamic_id},{headers:{"Content-Type":"application/json"}}).then(resToObj)}function getAllDynamicDetails(ge){const be=`${server.api}/x/polymer/web-dynamic/v1/feed/all?host_mid=${ge}&offset=&page=1`;return http.get(be).then(resToObj)}const map={},getMidByUname=ge=>map[ge]||null,getMidMapBatchByUnames=ge=>new Promise((be,$e)=>{const ke={},Ee={};let Ce=!0;if(ge.forEach(Te=>{map[Te]?ke[Te]=map[Te]:(Ce=!1,Ee[Te]=0)}),Ce)return be(ke);getUnameToMid(Object.keys(Ee).join(",")).then(Te=>{var Se;(Se=Te.uid_list)!=null&&Se.length&&(Te.uid_list.forEach(Ke=>{Ke.name&&Ke.uid&&(Ee[Ke.name]=Ke.uid)}),Object.assign(map,Ee),Object.assign(ke,Ee)),be(ke)}).catch($e)}),FULL_PATTERN="[\0-\xFF]",getStringLength=(ge="")=>{if(typeof ge!="string")return 0;let be=ge.length;const $e=new RegExp(FULL_PATTERN,"g");if($e.test(ge)){const ke=ge.replace($e,"").length;be=Math.ceil((be-ke)/2)+ke}return be},getRange=ge=>{const be=ge.ownerDocument||ge.document,ke=(be.defaultView||be.parentWindow).getSelection();return ke.rangeCount>0?ke.getRangeAt(0):null},getElChildNode=(ge,be)=>{for(;be.parentElement;){if(be.parentElement===ge)return be;be=be.parentElement}return null},getCursorPosition=(ge,be=!1)=>{const $e={start:{index:0,offset:0},end:{index:0,offset:0},position:{top:0,left:0}};if(!ge)return $e;const ke=getRange(ge);if(!ke)return $e;if(be){const Te=ge.getBoundingClientRect(),Se=ke.getBoundingClientRect(),{scrollTop:Ke}=ge.parentElement||{scrollTop:0};$e.position.top=Se.top-Te.top-Ke,$e.position.left=Se.left-Te.left}const Ee=getElChildNode(ge,ke.startContainer),Ce=getElChildNode(ge,ke.endContainer);return Ee?($e.start.index=Array.from(ge.childNodes).indexOf(Ee),$e.start.offset=ke.startOffset):$e.start.index=ke.startOffset,Ce?($e.end.index=Array.from(ge.childNodes).indexOf(Ce),$e.end.offset=ke.endOffset):$e.end.index=ke.endOffset,$e};let packages=null;const dict={},initEmoji=async()=>{try{packages=await initEmojiPackage()}catch(ge){return Promise.reject(ge)}},getEmojiData=ge=>{var $e;if(dict[ge])return dict[ge];if(!packages)return null;let be=null;for(let ke=0;ke<packages.length;ke++)if(!!(($e=packages[ke].emote)!=null&&$e.length))for(let Ee=0;Ee<packages[ke].emote.length;Ee++){const Ce=packages[ke].emote[Ee];if(Ce.text===ge){be=Ce;break}}return be&&be.type!==4?(dict[ge]={...be,src:formatImg(be.url,{w:48,h:48})},dict[ge]):null},getRichTextareaNodeId=(ge,be)=>ge&&be?`${ge}:${be}`:null,getRichTextareaTextNode=ge=>({type:"text",text:ge,data:null}),getRichTextareaHighlightNode=({type:ge,data:be,unique:$e})=>({id:$e&&getRichTextareaNodeId(ge,be.rid)||null,type:"highlight",text:be.text,data:{...be,type:ge}}),getRichTextareaEmojiNode=(ge,be)=>{const $e=be||getEmojiData(ge);return $e?{type:"emoji",text:$e.text,data:$e}:getRichTextareaTextNode(ge)},getRichTextareaNode=({type:ge,data:be})=>{switch(ge){case"text":return getRichTextareaTextNode(be.text);case"at":return getRichTextareaHighlightNode({type:ge,data:be,unique:!1});case"vote":case"lottery":return getRichTextareaHighlightNode({type:ge,data:be,unique:!0});case"emoji":return getRichTextareaEmojiNode(be.text,be);default:return null}},mergeTextNodes=(ge,be=0)=>{const $e=[];let ke=0;for(let Ee=0;Ee<ge.length;Ee++){const Ce=ge[Ee],Te=getArrayLastItem($e);(Te==null?void 0:Te.type)==="text"&&Ce.type==="text"?(Te.text+=Ce.text,Ee>=be&&ke++):Ce.type==="text"?Ce.text&&$e.push(Ce):$e.push(Ce)}return[$e,ke]},_genSplitFunc=(ge,be)=>async($e,ke)=>{for(let Ee=0;Ee<ke.length;Ee++){const Ce=ke[Ee];Ce.type?$e.push(ge(Ce.text)):await be($e,Ce.text)}},upgradeText2RichTextareaNodes=async(ge="")=>{const be=[];if(!ge)return be;const $e=_genSplitFunc(getRichTextareaEmojiNode,async(Ce,Te)=>{Ce.push(getRichTextareaTextNode(Te))}),ke=_genSplitFunc(Ce=>{const Te=getMidByUname(Ce.substr(1));return Te?getRichTextareaHighlightNode({type:"at",data:{text:Ce,rid:Te},unique:!1}):getRichTextareaTextNode(Ce)},async(Ce,Te)=>{const Se=splitStringWithRegExp(Te,new RegExp(/\[[^([.*\])]+\]/g));await $e(Ce,Se)}),Ee=splitStringWithRegExp(ge,/@[^\s$]{1,16}/g);return await getMidMapBatchByUnames(Ee.filter(Ce=>Ce.type===1).map(Ce=>Ce.text.substr(1))),await ke(be,Ee),mergeTextNodes(be)[0]},splitStrByIndex=(ge,be)=>{const $e=ge.slice(0,be),ke=ge.slice(be);return{before:$e,after:ke}},insertStrIntoStr=(ge,be,$e)=>{const{before:ke,after:Ee}=splitStrByIndex(ge,be);return`${ke}${$e}${Ee}`},spliceStr=(ge,be,$e,ke="")=>{const{before:Ee,after:Ce}=splitStrByIndex(ge,be);return`${Ee}${ke}${Ce.slice($e)}`},_genTextNode=ge=>({type:"text",text:ge,data:null}),_findUniqueNodeIndex=(ge,be)=>be.findIndex($e=>$e.id===ge.id&&$e.type===ge.type),_updateNodes=(ge,be)=>{for(let $e=0;$e<ge.length;$e++)if(ge[$e].id){const ke=_findUniqueNodeIndex(ge[$e],be);ke>-1&&(ge[$e]=be.splice(ke,1)[0])}},insertNodesIntoNodes=({oldNodes:ge,position:be,newPositiveNodesSlice:$e})=>{$e=mergeTextNodes($e)[0],_updateNodes(ge.positive,$e);const ke={nodes:ge.positive,position:{start:{...be.start},end:{...be.end}}};if(!$e.length)return ke;const Ee=getArrayLastItem($e),Ce=Ee.type==="text"?Ee.text.length:0;if(ge.positive.length===0)return ke.nodes=$e,ke.position.start.index=ke.nodes.length,ke.position.start.offset=Ce,ke.nodes[0].type==="text"&&ke.position.start.index--,ke.position.end={...ke.position.start},ke;const Te=be.start.index,Se=ge.positive[Te];if((Se==null?void 0:Se.type)!=="text"||!(Se!=null&&Se.text)){const[St]=mergeTextNodes([...ke.nodes.slice(0,Te),...$e,...ke.nodes.slice(Te)]);return ke.nodes=St,ke.position.start.index+=Ce?$e.length-1:$e.length,ke.position.start.offset=Ce,ke.position.end={...ke.position.start},ke}const{before:Ke,after:Je}=splitStrByIndex(Se.text,be.start.offset),mt=ke.nodes.slice(0,Te),bt=ke.nodes.slice(Te+1);Ke&&mt.push(_genTextNode(Ke)),Je&&bt.unshift(_genTextNode(Je));const[$t]=mergeTextNodes([...mt,...$e,...bt]);if(ke.nodes.length===$t.length)ke.position.start.offset=Ce+be.start.offset;else{let St=ke.position.start.index+$e.length;Ke&&St++,(Ee==null?void 0:Ee.type)==="text"&&St--,ke.position.start.index=St,ke.position.start.offset=Ce}return ke.position.end={...ke.position.start},ke.nodes=$t,ke},getNodeText=ge=>{if((ge==null?void 0:ge.nodeType)!==3)throw new Error("getNodeText error");return ge.textContent},setNodeText=(ge,be)=>{if(!ge)throw new Error("setNodeText error");ge.textContent=be},createTrimTextNode=ge=>{const be=getNodeText(ge),$e={prefix:"",text:"",suffix:"",revert(Ce){return`${this.prefix}${Ce||this.text}${this.suffix}`}};if(!be)return $e;const ke=0;let Ee;return be.slice(-1)===LINE_FEED&&(Ee=-1,$e.suffix=LINE_FEED),$e.text=be.slice(ke,Ee),$e},restoreFromRealNodes=ge=>{const be=[];for(let $e=0;$e<ge.length;$e++){const ke=ge[$e];if(ke.nodeType===3){let Ee=getNodeText(ke);if(($e===0||$e===ge.length-1)&&(Ee=createTrimTextNode(ge[$e]).text),Ee){const Ce=be.length-1,Te=be[Ce];(Te==null?void 0:Te.type)==="text"?Te.text+=Ee:be.push({type:"text",text:Ee})}}else be.push(JSON.parse(ke.dataset.data))}return be},degradeRichTextareaNodes2Text=ge=>ge.reduce((be,$e)=>be+=$e.text,""),splitStringWithRegExp=(ge,be)=>{if(!ge)return[];const $e=ge.match(be);if(!$e)return[{type:0,text:ge}];let ke=0;const Ee=$e.reduce((Ce,Te)=>{const Se=[],Ke=ge.slice(ke).indexOf(Te),Je=ge.slice(ke,ke+Ke);return Je&&Se.push({type:0,text:Je}),Se.push({type:1,text:Te}),ke=ke+Ke+Te.length,Ce.concat(Se)},[]);return ke<ge.length&&Ee.push({type:0,text:ge.slice(ke)}),Ee};var RichTextNodeType=(ge=>(ge.RICH_TEXT_NODE_TYPE_NONE="RICH_TEXT_NODE_TYPE_NONE",ge.RICH_TEXT_NODE_TYPE_TEXT="RICH_TEXT_NODE_TYPE_TEXT",ge.RICH_TEXT_NODE_TYPE_AT="RICH_TEXT_NODE_TYPE_AT",ge.RICH_TEXT_NODE_TYPE_LOTTERY="RICH_TEXT_NODE_TYPE_LOTTERY",ge.RICH_TEXT_NODE_TYPE_VOTE="RICH_TEXT_NODE_TYPE_VOTE",ge.RICH_TEXT_NODE_TYPE_TOPIC="RICH_TEXT_NODE_TYPE_TOPIC",ge.RICH_TEXT_NODE_TYPE_GOODS="RICH_TEXT_NODE_TYPE_GOODS",ge.RICH_TEXT_NODE_TYPE_BV="RICH_TEXT_NODE_TYPE_BV",ge.RICH_TEXT_NODE_TYPE_AV="RICH_TEXT_NODE_TYPE_AV",ge.RICH_TEXT_NODE_TYPE_EMOJI="RICH_TEXT_NODE_TYPE_EMOJI",ge.RICH_TEXT_NODE_TYPE_USER="RICH_TEXT_NODE_TYPE_USER",ge.RICH_TEXT_NODE_TYPE_CV="RICH_TEXT_NODE_TYPE_CV",ge.RICH_TEXT_NODE_TYPE_VC="RICH_TEXT_NODE_TYPE_VC",ge.RICH_TEXT_NODE_TYPE_WEB="RICH_TEXT_NODE_TYPE_WEB",ge.RICH_TEXT_NODE_TYPE_TAOBAO="RICH_TEXT_NODE_TYPE_TAOBAO",ge.RICH_TEXT_NODE_TYPE_MAIL="RICH_TEXT_NODE_TYPE_MAIL",ge.RICH_TEXT_NODE_TYPE_OGV_SEASON="RICH_TEXT_NODE_TYPE_OGV_SEASON",ge.RICH_TEXT_NODE_TYPE_OGV_EP="RICH_TEXT_NODE_TYPE_OGV_EP",ge.RICH_TEXT_NODE_TYPE_SEARCH_WORD="RICH_TEXT_NODE_TYPE_SEARCH_WORD",ge))(RichTextNodeType||{}),MdlDynType=(ge=>(ge.MDL_DYN_TYPE_FORWARD="MDL_DYN_TYPE_FORWARD",ge.MDL_DYN_TYPE_ARCHIVE="MDL_DYN_TYPE_ARCHIVE",ge.MDL_DYN_TYPE_DRAW="MDL_DYN_TYPE_DRAW",ge.MDL_DYN_TYPE_LIVE_RCMD="MDL_DYN_TYPE_LIVE_RCMD",ge))(MdlDynType||{}),ThreePoint=(ge=>(ge.THREE_POINT_DELETE="THREE_POINT_DELETE",ge.THREE_POINT_REPORT="THREE_POINT_REPORT",ge.THREE_POINT_FOLLOWING="THREE_POINT_FOLLOWING",ge.THREE_POINT_COPY="THREE_POINT_COPY",ge.THREE_POINT_TOP="THREE_POINT_TOP",ge.THREE_POINT_WATCH_LATER="THREE_POINT_WATCH_LATER",ge.THREE_POINT_AUTOPLAY="THREE_POINT_AUTOPLAY",ge.THREE_POINT_UNFAV="THREE_POINT_UNFAV",ge.THREE_POINT_UNSUBS="THREE_POINT_UNSUBS",ge.THREE_POINT_TOPIC_REPORT="THREE_POINT_TOPIC_REPORT",ge.THREE_POINT_TOPIC_IRRELEVANT="THREE_POINT_TOPIC_IRRELEVANT",ge.THREE_POINT_RCMD_RESOURCE="THREE_POINT_RCMD_RESOURCE",ge.THREE_POINT_RCMD_FEEDBACK="THREE_POINT_RCMD_FEEDBACK",ge))(ThreePoint||{}),ModuleType=(ge=>(ge.MODULE_TYPE_TAG="MODULE_TYPE_TAG",ge.MODULE_TYPE_AUTHOR="MODULE_TYPE_AUTHOR",ge.MODULE_TYPE_ITEM_NULL="MODULE_TYPE_ITEM_NULL",ge.MODULE_TYPE_DISPUTE="MODULE_TYPE_DISPUTE",ge.MODULE_TYPE_TOPIC="MODULE_TYPE_TOPIC",ge.MODULE_TYPE_DESC="MODULE_TYPE_DESC",ge.MODULE_TYPE_DYNAMIC="MODULE_TYPE_DYNAMIC",ge.MODULE_TYPE_INTERACTION="MODULE_TYPE_INTERACTION",ge.MODULE_TYPE_STAT="MODULE_TYPE_STAT",ge))(ModuleType||{});const _compare=(ge,be)=>{if(!be||typeof be!="object")return!0;for(const $e in be)if(be[$e]!==ge[$e])return!1;return!0},eventPathInclude=(ge,be,$e="ELEMENT")=>{const ke=ge.path;for(let Ee=0;Ee<ke.length;Ee++)if($e==="ELEMENT"&&ke[Ee]===be||$e==="ABSTRACT"&&_compare(ke[Ee],be))return!0;return!1},getScrollParent=ge=>{let be=ge;if(!be)return null;for(;be&&be.tagName!=="HTML"&&be.tagName!=="BOYD"&&be.nodeType===1;){const $e=window.getComputedStyle(be).overflowY;if($e==="scroll"||$e==="auto"||$e==="overlay")return be.tagName==="HTML"||be.tagName==="BODY"?document.documentElement:be;be=be.parentNode}return document.documentElement},getSelectorByClassNames=(...ge)=>"."+ge.filter(Boolean).join("."),getArrayLastItem=ge=>ge.length>0?ge[ge.length-1]:null,clearArray=(ge,...be)=>(ge.splice(0,ge.length,...be),ge);function composeFunc(...ge){return()=>{ge.forEach(be=>{try{be()}catch($e){console.log($e)}})}}const _hoisted_1$H={viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$E=createBaseVNode("path",{"clip-rule":"evenodd",d:"m11.05 3.168 1.741 3.528c.163.33.48.56.844.613l3.894.566a1.12 1.12 0 0 1 .621 1.911l-2.817 2.747a1.12 1.12 0 0 0-.323.993l.666 3.877a1.12 1.12 0 0 1-1.626 1.181l-3.484-1.83a1.12 1.12 0 0 0-1.042 0l-3.483 1.83a1.12 1.12 0 0 1-1.626-1.18l.664-3.878a1.119 1.119 0 0 0-.321-.993L1.939 9.786a1.121 1.121 0 0 1 .622-1.911l3.894-.566a1.12 1.12 0 0 0 .843-.613L9.04 3.168a1.121 1.121 0 0 1 2.01 0Z",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),_hoisted_3$D=createBaseVNode("path",{d:"M11.603 11.874a1.618 1.618 0 0 1-3.12-.017",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),_hoisted_4$i=[_hoisted_2$E,_hoisted_3$D];function render$t(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$H,[..._hoisted_4$i])}var IcoCollect={render:render$t},style$1="";const Emoji$1=defineComponent({name:"DynamicRichTextNodeEmoji",props:{src:{type:String,required:!0},alt:{type:String,default:""}},setup(ge){return()=>createVNode("img",{class:"dynamic_rich_text_emoji",src:ge.src,alt:ge.alt},null)}}),Tag=defineComponent({name:"DynamicRichTextNodeTag",props:{text:{type:String,default:"",required:!0}},setup(ge){function be($e){$e.stopPropagation(),events.emit("hidePopover"),events.emit("search",ge.text.slice(1,-1))}return()=>createVNode("span",{class:"dynamic_rich_text_tag",onClick:be},[ge.text])}}),Link=defineComponent({name:"DynamicRichTextNodeLink",props:{href:{type:String,default:""},text:{type:String,default:""}},setup(ge){const be=inject("dynamicScene"),$e=ke=>{ke.stopPropagation(),events.emit("hidePopover");const Ee=ge.href.match(DYNAMIC_URL_REG_EXP);if(Ee!=null&&Ee[0]){ke.preventDefault();const Ce=Ee[0].replace("t.bilibili.com/","");events.emit("viewDynamicDetails",{id:Ce,scene:be});return}openInAppBrowser(ge.href,"dynamic.RichText")};return()=>createVNode("span",{class:"dynamic_rich_text_link",onClick:$e},[ge.text])}}),At$2=defineComponent({name:"DynamicRichTextNodeAt",props:{text:{type:String,default:""},rid:{type:String,default:""}},setup(ge){const be=useRouter(),$e=ke=>{ke.stopPropagation(),events.emit("hidePopover"),be.push({name:"Space",query:{mid:Number(ge.rid)}}),messageEvents.emit("close")};return()=>createVNode("span",{class:"dynamic_rich_text_at",onClick:$e},[ge.text])}}),Vote=defineComponent({name:"DynamicRichTextNodeVote",props:{href:{type:String,default:""},text:{type:String,default:""}},setup(ge){const be=$e=>{$e.stopPropagation(),events.emit("hidePopover"),openInAppBrowser(ge.href,"dynamic.Vote")};return()=>createVNode("span",{class:"dynamic_rich_text_vote",onClick:be},[ge.text])}}),Lottery=defineComponent({name:"DynamicRichTextNodeLottery",props:{href:{type:String,default:""},text:{type:String,default:""}},setup(ge){const be=$e=>{$e.stopPropagation(),events.emit("hidePopover"),openInAppBrowser(ge.href,"dynamic.Lottery")};return()=>createVNode("span",{class:"dynamic_rich_text_lottery",onClick:be},[ge.text])}}),Video$1=defineComponent({name:"DynamicRichTextNodeVideo",props:{href:{type:String,default:""},aid:String,bvid:String,epid:String,ssid:String,text:{type:String,default:""}},setup(ge){const be=inject("pageSpmId"),$e=ke=>{if(ke.stopPropagation(),events.emit("hidePopover"),ge.bvid){openPlayerWindow({type:"ugc",bvid:ge.bvid,fromSpmid:be});return}if(ge.aid){openPlayerWindow({type:"ugc",aid:Number(ge.aid),fromSpmid:be});return}if(ge.ssid){openPlayerWindow({type:"ogv",seasonId:Number(ge.ssid),fromSpmid:be});return}if(ge.epid){openPlayerWindow({type:"ogv",epid:Number(ge.epid),fromSpmid:be});return}};return()=>createVNode("span",{class:"dynamic_rich_text_video",onClick:$e},[ge.text])}}),Video=defineComponent({name:"DynamicRichTextNodeVideo",props:{cvid:String,text:{type:String,default:""}},setup(ge){const be=$e=>{$e.stopPropagation(),events.emit("hidePopover"),openInAppBrowser(`https://www.bilibili.com/read/cv${ge.cvid}`,"dynamic.Article")};return()=>createVNode("span",{class:"dynamic_rich_text_article",onClick:be},[ge.text])}});var RichText=defineComponent({name:"DynamicRichText",components:{Emoji:Emoji$1,Tag},props:{nodes:{type:Array,default:()=>[]},unfold:{type:Boolean,default:!0},showAction:{type:Boolean,default:!0},lines:{type:String,default:"6"},once:{type:Boolean,default:!1},actionTexts:{type:Array,default:()=>["\u5C55\u5F00","\u6536\u8D77"]}},setup(ge){const be=ref(!0),$e=ref(!1),ke=Je=>{Je.stopPropagation(),events.emit("hidePopover"),be.value=!be.value},Ee=ref(null),Ce=Je=>{Ee.value=Je};onMounted(()=>{!ge.unfold&&be.value?($e.value=Ee.value.scrollHeight>Ee.value.clientHeight+2,be.value=$e.value):be.value=!1});const Te=Je=>{switch(Je.type){case RichTextNodeType.RICH_TEXT_NODE_TYPE_AT:return createVNode(At$2,{text:Je.text,rid:Je.rid},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_VOTE:return createVNode(Vote,{text:Je.text,href:Je.jump_url},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_LOTTERY:return createVNode(Lottery,{text:Je.text,href:Je.jump_url},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_EMOJI:return createVNode(Emoji$1,{src:Je.emoji.icon_url,alt:Je.text},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_WEB:return createVNode(Link,{text:Je.text,href:Je.jump_url},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_TOPIC:return createVNode(Tag,{text:Je.text},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_AV:return createVNode(Video$1,{text:Je.text,aid:Je.rid},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_BV:return createVNode(Video$1,{text:Je.text,bvid:Je.rid||Je.orig_text},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_OGV_SEASON:return createVNode(Video$1,{text:Je.text,ssid:Je.rid},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_OGV_EP:return createVNode(Video$1,{text:Je.text,epid:Je.rid},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_CV:return createVNode(Video,{text:Je.text,cvid:Je.rid},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_TEXT:return createVNode("span",null,[Je.text]);default:return createVNode("span",null,[Je.orig_text||Je.text])}},Se=ge.nodes.map(Te),Ke=computed(()=>({"dynamic_rich_text--content":!0,folded:be.value,[`line--${ge.lines}`]:be.value}));return ge.unfold||!be.value&&ge.once?()=>createVNode("div",{class:"dynamic_rich_text"},[createVNode("div",{class:Ke.value},[Se])]):()=>createVNode("div",{class:"dynamic_rich_text"},[createVNode("div",{class:Ke.value,ref:Ce},[Se]),$e.value&&ge.showAction&&createVNode("div",{class:"dynamic_rich_text--action",onClick:ke},[be.value?ge.actionTexts[0]:ge.actionTexts[1]])])}}),Loading_vue_vue_type_style_index_0_lang$1="";const _sfc_main$g={},_hoisted_1$G={class:"loading_wrapper p_relative"},_hoisted_2$D=createBaseVNode("img",{class:"loading-gif p_center",src:_imports_2,alt:""},null,-1),_hoisted_3$C=[_hoisted_2$D];function _sfc_render$1(ge,be){return openBlock(),createElementBlock("div",_hoisted_1$G,_hoisted_3$C)}var Loading=_export_sfc(_sfc_main$g,[["render",_sfc_render$1]]);const _hoisted_1$F={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$C=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.22 9.221a.75.75 0 0 1 1.06 0l6.01 6.01 6.012-6.011a.75.75 0 0 1 1.061 1.06l-6.012 6.012 6.01 6.01a.75.75 0 1 1-1.06 1.061l-6.01-6.01-6.01 6.009a.75.75 0 1 1-1.06-1.06l6.009-6.01-6.01-6.01a.75.75 0 0 1 0-1.06Z",fill:"#fff"},null,-1),_hoisted_3$B=createBaseVNode("path",{d:"m10.28 9.221-.212.212.212-.212Zm6.01 6.01-.212.213.213.212.212-.212-.212-.213Zm6.012-6.011-.212-.212.212.212Zm1.061 1.06.212.213-.212-.213Zm-6.012 6.012-.212-.212-.212.212.212.212.212-.212Zm4.95 7.071-.212.213.212-.213Zm-6.01-6.01.212-.212-.212-.212-.213.212.213.212Zm-6.01 6.009-.212-.212.213.212Zm-1.06-1.06-.212-.213.212.212Zm6.009-6.01.212.212.212-.212-.212-.212-.212.212Zm-6.01-6.01.212-.212-.212.212Zm1.272-1.273a1.05 1.05 0 0 0-1.484 0l.424.424a.45.45 0 0 1 .636 0l.425-.424Zm6.01 6.01-6.01-6.01-.424.424 6.01 6.01.425-.424Zm5.588-6.011-6.012 6.011.425.425 6.012-6.012-.425-.424Zm1.485 0a1.05 1.05 0 0 0-1.485 0l.425.424a.45.45 0 0 1 .636 0l.424-.424Zm0 1.485a1.05 1.05 0 0 0 0-1.485l-.424.424a.45.45 0 0 1 0 .636l.424.425Zm-6.012 6.011 6.012-6.012-.424-.424-6.012 6.012.424.424Zm6.01 5.587-6.01-6.01-.424.423 6.01 6.01.425-.423Zm0 1.485a1.05 1.05 0 0 0 0-1.485l-.423.424a.45.45 0 0 1 0 .636l.424.425Zm-1.484 0c.41.41 1.075.41 1.485 0l-.424-.425a.45.45 0 0 1-.637 0l-.424.425Zm-6.01-6.011 6.01 6.01.424-.424-6.01-6.01-.425.424Zm-5.585 6.009 6.009-6.009-.425-.424-6.008 6.009.424.424Zm-1.485 0c.41.41 1.075.41 1.485 0l-.425-.424a.45.45 0 0 1-.636 0l-.424.424Zm0-1.485a1.05 1.05 0 0 0 0 1.485l.424-.424a.45.45 0 0 1 0-.637l-.424-.424Zm6.009-6.009-6.01 6.009.425.424 6.009-6.009-.424-.424Zm-6.01-5.586 6.01 6.01.424-.424-6.01-6.01-.424.424Zm0-1.485a1.05 1.05 0 0 0 0 1.485l.424-.424a.45.45 0 0 1 0-.637l-.424-.424Z",fill:"#fff"},null,-1),_hoisted_4$h=[_hoisted_2$C,_hoisted_3$B];function render$s(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$F,[..._hoisted_4$h])}var IcoClose={render:render$s};const _hoisted_1$E={width:"15",height:"13",viewBox:"0 0 15 13",fill:"currentColor"},_hoisted_2$B=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.5 1.834c0-.92-.746-1.667-1.666-1.667H6.167C5.247.167 4.5.913 4.5 1.834v.333H1.333a.5.5 0 1 0 0 1h12.334a.5.5 0 1 0 0-1H10.5v-.333Zm-1 .333h-4v-.333c0-.369.299-.667.667-.667h2.667c.368 0 .666.298.666.667v.333Zm-6.333 2.5a.5.5 0 0 0-1 0v5.436c0 1.333.99 2.48 2.345 2.592.87.073 1.944.139 2.988.139 1.045 0 2.118-.066 2.989-.139 1.354-.113 2.345-1.259 2.345-2.592V4.667a.5.5 0 0 0-1 0v5.436c0 .84-.618 1.528-1.428 1.596-.856.071-1.9.135-2.906.135-1.006 0-2.05-.064-2.905-.135-.81-.068-1.428-.756-1.428-1.596V4.667Zm2.667.833a.5.5 0 0 1 .5.5v2.334a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3.833.5a.5.5 0 1 0-1 0v2.334a.5.5 0 0 0 1 0V6Z"},null,-1),_hoisted_3$A=[_hoisted_2$B];function render$r(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$E,[..._hoisted_3$A])}var IcoDelete={render:render$r},MoreDropdown_vue_vue_type_style_index_0_lang="";const _hoisted_1$D=["onClick"],_hoisted_2$A={class:"more_dropdown--btn"},_hoisted_3$z=["onClick"],_hoisted_4$g=createBaseVNode("span",{class:"gamepad-cursor"},null,-1),_sfc_main$f=defineComponent({__name:"MoreDropdown",props:{items:{type:Array,default:()=>[]},info:{type:Object,default:()=>{}},isHover:{type:Boolean,default:!1},showMenu:{type:Boolean,default:!1}},emits:["select"],setup(ge,{emit:be}){const $e=ge,ke=ref(!1),Ee=useGamepadStore(),Ce=()=>Ee.flashPageCursors();watch$1(ke,()=>Ee.flashPageCursors(200));function Te(bt){events.emit("hidePopover"),be("select",bt),mt()}function Se(){$e.isHover||(ke.value||events.emit("hidePopover"),ke.value=!ke.value)}const Ke=()=>{$e.isHover&&$e.showMenu&&(ke.value=!0)},Je=()=>{$e.isHover&&$e.showMenu&&(ke.value=!1)},mt=()=>{ke.value&&(ke.value=!1)};return events.on("hidePopover",mt),onBeforeUnmount(()=>{events.off("hidePopover",mt)}),(bt,$t)=>(openBlock(),createElementBlock("div",{class:"more_dropdown",onClick:withModifiers(Se,["stop"]),onMouseenter:Ke,onMouseleave:Je},[createBaseVNode("div",_hoisted_2$A,[renderSlot(bt.$slots,"default")]),withDirectives(createBaseVNode("div",{class:"more_dropdown--dropdown p_absolute",onScroll:Ce},[(openBlock(!0),createElementBlock(Fragment,null,renderList(ge.items,(St,It)=>(openBlock(),createElementBlock(Fragment,null,[!St.info||St.info.aid?(openBlock(),createElementBlock("div",{key:It,class:normalizeClass(["more_dropdown--dropdown--item p_relative",{"more_dropdown--disabled":St.disabled}]),onClick:withModifiers(Bt=>Te(St),["stop"])},[St.icon==="collect"?(openBlock(),createBlock(unref(IcoCollect),{key:0,class:"ico_collect mr_xs"})):createCommentVNode("",!0),St.icon==="delete"?(openBlock(),createBlock(unref(IcoDelete),{key:1,class:"mr_xs"})):createCommentVNode("",!0),bt.$slots.label?renderSlot(bt.$slots,"label",{key:2,item:St}):(openBlock(),createElementBlock(Fragment,{key:3},[createTextVNode(toDisplayString(St.label)+" ",1),_hoisted_4$g],64))],10,_hoisted_3$z)):createCommentVNode("",!0)],64))),256))],544),[[vShow,ke.value]])],40,_hoisted_1$D))}}),_hoisted_1$C={width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$z=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.742 3.924A52.952 52.952 0 0 1 8 3.75c1.714 0 3.208.088 4.258.174A1.45 1.45 0 0 1 13.6 5.245c.078.862.151 2.004.151 3.255s-.073 2.393-.15 3.255a1.45 1.45 0 0 1-1.342 1.321c-1.05.086-2.544.174-4.258.174s-3.208-.088-4.258-.174A1.45 1.45 0 0 1 2.4 11.754 36.666 36.666 0 0 1 2.25 8.5c0-1.25.073-2.393.15-3.254a1.45 1.45 0 0 1 1.342-1.322ZM8 2.75c-1.747 0-3.27.09-4.34.177a2.45 2.45 0 0 0-2.255 2.229c-.08.883-.155 2.056-.155 3.344 0 1.288.075 2.461.155 3.344a2.45 2.45 0 0 0 2.255 2.229A53.91 53.91 0 0 0 8 14.25c1.747 0 3.27-.09 4.34-.177a2.45 2.45 0 0 0 2.255-2.229c.08-.882.155-2.056.155-3.344 0-1.288-.075-2.462-.155-3.345a2.45 2.45 0 0 0-2.255-2.228A53.953 53.953 0 0 0 8 2.75Zm1.75 6.328a.667.667 0 0 0 0-1.155l-2.5-1.444a.667.667 0 0 0-1 .577v2.888c0 .513.555.834 1 .578l2.5-1.444Z",fill:"currentColor"},null,-1),_hoisted_3$y=[_hoisted_2$z];function render$q(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$C,[..._hoisted_3$y])}var IcoPlay={render:render$q};const _hoisted_1$B={width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$y=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 3.75c-1.714 0-3.208.088-4.258.174A1.45 1.45 0 0 0 2.4 5.246C2.323 6.107 2.25 7.25 2.25 8.5s.073 2.393.15 3.254a1.45 1.45 0 0 0 1.342 1.322c1.05.086 2.544.174 4.258.174s3.208-.088 4.258-.174a1.45 1.45 0 0 0 1.341-1.321c.078-.862.151-2.004.151-3.255s-.073-2.393-.15-3.255a1.45 1.45 0 0 0-1.342-1.321A52.956 52.956 0 0 0 8 3.75Zm-4.34-.823A53.955 53.955 0 0 1 8 2.75c1.747 0 3.27.09 4.34.177a2.45 2.45 0 0 1 2.255 2.228c.08.883.155 2.057.155 3.345 0 1.288-.075 2.462-.155 3.345a2.45 2.45 0 0 1-2.255 2.228c-1.07.087-2.593.177-4.34.177-1.747 0-3.27-.09-4.34-.177a2.45 2.45 0 0 1-2.255-2.229A37.662 37.662 0 0 1 1.25 8.5c0-1.288.075-2.461.155-3.344A2.45 2.45 0 0 1 3.66 2.927ZM4 7.25a.5.5 0 0 1 .5-.5h.25a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5Zm2 0a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm-.5 2a.5.5 0 0 0 0 1h.25a.5.5 0 0 0 0-1H5.5Zm2 0a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",fill:"currentColor"},null,-1),_hoisted_3$x=[_hoisted_2$y];function render$p(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$B,[..._hoisted_3$x])}var IcoDanmaku={render:render$p},b$a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p$8={exports:{}};(function(ge,be){(function($e,ke){ke(be)})(b$a,function($e){var ke=function(){function Ee(Ce){var Te=this;this.disposables=[],this.playing=!1,this.valid=!1,this.remove=!1,this.raf=0;var Se=Ce.src,Ke=Ce.width,Je=Ce.height,mt=Ce.sizing,bt=Ce.autoplay,$t=Ce.loop,St=Ce.canvas||document.createElement("canvas");this.canvas=St,Ce.container&&(Ce.container.appendChild(St),this.remove=!0),this.initVideo(Se,bt,$t),this.initWebgl(Ke,Je,mt),this.disposables.unshift(function(){Te.playing&&Te.pause(),Te.raf&&window.cancelAnimationFrame(Te.raf),Te.remove&&Te.canvas.parentElement&&Te.canvas.parentElement.removeChild(Te.canvas)})}return Object.defineProperty(Ee.prototype,"currentTime",{get:function(){return this.video.currentTime},enumerable:!1,configurable:!0}),Object.defineProperty(Ee.prototype,"duration",{get:function(){return this.video.duration},enumerable:!1,configurable:!0}),Object.defineProperty(Ee.prototype,"src",{get:function(){return this.video.src},enumerable:!1,configurable:!0}),Ee.prototype.addEventListener=function(Ce,Te,Se){var Ke=this;this.video.addEventListener(Ce,Te,Se),this.disposables.push(function(){Ke.video.removeEventListener(Ce,Te,Se)})},Ee.prototype.initVideo=function(Ce,Te,Se){var Ke=this,Je=document.createElement("video");this.video=Je,Je.src=Ce,Je.autoplay=Te||!1,Je.muted=!0,Je.volume=0,Je.muted=!0,Je.loop=Se||!1,Je.style.display="none",Je.crossOrigin="anonymous",Je.setAttribute("type","video/mp4"),this.addEventListener("play",function(){Ke.raf=window.requestAnimationFrame(function(){Ke.nextFrame()})}),this.addEventListener("playing",function(){Ke.valid=!0}),this.addEventListener("ended",function(){Ke.playing=!1})},Ee.prototype.nextFrame=function(){var Ce=this;this.playing&&(this.callWebglDraw(),this.raf=window.requestAnimationFrame(function(){Ce.nextFrame()}))},Ee.prototype.callWebglDraw=function(){var Ce=this.gl;this.valid&&(Ce.texImage2D(Ce.TEXTURE_2D,0,Ce.RGB,Ce.RGB,Ce.UNSIGNED_BYTE,this.video),Ce.drawArrays(Ce.TRIANGLE_STRIP,0,4))},Ee.prototype.dispose=function(){for(;this.disposables.length;)this.disposables.pop()()},Ee.prototype.play=function(){return this.playing=!0,this.valid=!1,this.video.play(),this},Ee.prototype.pause=function(){return this.playing=!1,this.video.pause(),this},Ee.prototype.reload=function(Ce){if(Ce)return this.video.src=Ce,this;console.warn("please set a valid src")},Ee.prototype.initWebgl=function(Ce,Te,Se){var Ke=1,Je=[Ce,Te];Se!=="raw"&&(Ke=window.devicePixelRatio||1,Je.forEach(function(jt,zt){Je[zt]=jt*Ke}),Se==="dpr-raw"&&(this.canvas.style.setProperty("transform","scale(".concat(1/Ke,")")),this.canvas.style.setProperty("transform-origin","left top"))),this.canvas.width=Je[0],this.canvas.height=Je[1];var mt=this.canvas.getContext("webgl");this.gl=mt,mt.viewport(0,0,Je[0],Je[1]);var bt=this.initShaderProgram(mt);mt.linkProgram(bt),mt.useProgram(bt);var $t=this.initBuffer(mt);mt.bindBuffer(mt.ARRAY_BUFFER,$t.position);var St=mt.getAttribLocation(bt,"a_position");mt.enableVertexAttribArray(St),mt.vertexAttribPointer(St,2,mt.FLOAT,!1,0,0),mt.bindBuffer(mt.ARRAY_BUFFER,$t.texture);var It=mt.getAttribLocation(bt,"a_texCoord");mt.enableVertexAttribArray(It),mt.vertexAttribPointer(It,2,mt.FLOAT,!1,0,0);var Bt=this.initTexture(mt);mt.bindTexture(mt.TEXTURE_2D,Bt);var Dt=mt.getUniformLocation(bt,"u_scale");return mt.uniform2fv(Dt,[Ke,Ke]),mt},Ee.prototype.createShader=function(Ce,Te,Se){var Ke=Ce.createShader(Te);return Ce.shaderSource(Ke,Se),Ce.compileShader(Ke),Ce.getShaderParameter(Ke,Ce.COMPILE_STATUS)||console.error(Ce.getShaderInfoLog(Ke)),Ke},Ee.prototype.initShaderProgram=function(Ce){var Te=this.createShader(Ce,Ce.VERTEX_SHADER,`
          attribute vec2 a_position;
          attribute vec2 a_texCoord;
          varying vec2 v_texCoord;
          uniform vec2 u_scale;
          void main(void) {
              gl_Position = vec4(a_position, 0.0, 1.0);
              v_texCoord = a_texCoord;
          }
          `),Se=this.createShader(Ce,Ce.FRAGMENT_SHADER,`
          precision lowp float;
          varying vec2 v_texCoord;
          uniform sampler2D u_sampler;
          void main(void) {
              gl_FragColor = vec4(texture2D(u_sampler, v_texCoord).rgb, texture2D(u_sampler, v_texCoord+vec2(-0.5, 0)).r);
          }
          `),Ke=Ce.createProgram();return Ce.attachShader(Ke,Te),Ce.attachShader(Ke,Se),Ce.linkProgram(Ke),Ke},Ee.prototype.initBuffer=function(Ce){var Te=new Float32Array([-1,1,1,1,-1,-1,1,-1]),Se=Ce.createBuffer();Ce.bindBuffer(Ce.ARRAY_BUFFER,Se),Ce.bufferData(Ce.ARRAY_BUFFER,Te,Ce.STATIC_DRAW);var Ke=Ce.createBuffer(),Je=new Float32Array([.5,1,1,1,.5,0,1,0]);return Ce.bindBuffer(Ce.ARRAY_BUFFER,Ke),Ce.bufferData(Ce.ARRAY_BUFFER,Je,Ce.STATIC_DRAW),{position:Se,texture:Ke}},Ee.prototype.initTexture=function(Ce){var Te=Ce.createTexture();return Ce.bindTexture(Ce.TEXTURE_2D,Te),Ce.pixelStorei(Ce.UNPACK_FLIP_Y_WEBGL,1),Ce.texParameteri(Ce.TEXTURE_2D,Ce.TEXTURE_MIN_FILTER,Ce.NEAREST),Ce.texParameteri(Ce.TEXTURE_2D,Ce.TEXTURE_WRAP_S,Ce.CLAMP_TO_EDGE),Ce.texParameteri(Ce.TEXTURE_2D,Ce.TEXTURE_WRAP_T,Ce.CLAMP_TO_EDGE),Te},Ee}();$e.create=function(Ee){return new ke(Ee)},Object.defineProperty($e,"__esModule",{value:!0})})})(p$8,p$8.exports);var _$5=p$8.exports;class A$3 extends HTMLElement{constructor(){super(),this.alphaVideo=null;const be=this.attachShadow({mode:"open"});be.innerHTML=`
      <style>
        #wrap {
          overflow: hidden;
        }
      </style>
      <div id="wrap">
        <canvas></canvas>
      </div>
    `}get wrap(){return this.shadowRoot.querySelector("#wrap")}get canvas(){return this.shadowRoot.querySelector("canvas")}connectedCallback(){const be=this.getAttribute("src"),$e=this.getAttribute("width"),ke=this.getAttribute("height"),Ee=this.getAttribute("loop")!==null,Ce=this.getAttribute("autoplay")!==null;!be||!$e||!ke||(this.wrap.style.setProperty("width",`${$e}px`),this.wrap.style.setProperty("height",`${ke}px`),this.alphaVideo=_$5.create({src:be,canvas:this.canvas,width:Number($e),height:Number(ke),sizing:"dpr-raw",loop:Ee}),this.alphaVideo.addEventListener("ended",()=>{this.dispatchEvent(new CustomEvent("ended"))}),Ce&&this.play())}play(){var be;(be=this.alphaVideo)==null||be.play()}disconnectedCallback(){this.alphaVideo&&(this.alphaVideo.dispose(),this.alphaVideo=null)}}customElements.get("bili-alpha-video")||customElements.define("bili-alpha-video",A$3);let _isSSR$1=!0;const isSSR$1=()=>(_isSSR$1&&(_isSSR$1=typeof window=="undefined"),_isSSR$1),canUseAvif$1=()=>(isSSR$1(),!1);let webp;const canUseWebP=()=>{var ge,be,$e,ke;if(isSSR$1())return!1;if(typeof webp!="undefined")return webp;try{if(typeof navigator!="undefined"&&/Firefox\/(\d+)/i.test(navigator.userAgent))return webp=Number(((ge=navigator.userAgent.match(/Firefox\/(\d+)/i))===null||ge===void 0?void 0:ge[1])||"0")>=65,webp;const Ee=document.createElement("canvas");webp=!((be=Ee.getContext)===null||be===void 0)&&be.call(Ee,"2d")?((ke=($e=Ee.toDataURL)===null||$e===void 0?void 0:$e.call(Ee,"image/webp"))===null||ke===void 0?void 0:ke.indexOf("data:image/webp"))===0:!1}catch{webp=!1}return webp};var canUseHtmlPictureElement$1=()=>isSSR$1()?!1:!!window.HTMLPictureElement;const autoDetect=(ge=["webp"])=>{for(let be=0;be<ge.length;be++)if(ge[be]==="avif"&&canUseAvif$1()||ge[be]==="webp"&&canUseWebP())return ge[be];return""};isSSR$1()||window.IntersectionObserver;const isNum=ge=>typeof ge=="number",isInt=ge=>isNum(ge)&&(ge|0)===ge;function trimURL(ge){return ge?ge.replace(/^http(s)?:/,""):""}const EXT_REG$1=/\.(jpeg|jpg|png|webp|gif|avif)$/,getImgUrlExt$2=ge=>{var be;return((be=ge.match(EXT_REG$1))===null||be===void 0?void 0:be[0])||null},isBFS=ge=>!!/\/bfs\//.test(ge),isBSS=ge=>/pic.bstarstatic.com/.test(ge),isSupportBmgFormat=ge=>!isBFS(ge)&&!isBSS(ge)?!1:!!getImgUrlExt$2(ge),getIntNum=ge=>typeof ge!="number"||isNaN(ge)?0:Math.floor(ge)||0,getBmgSrc$1=(ge,be={c:!0})=>{var $e;if(typeof ge!="string")return"";if(!isSupportBmgFormat(ge))return ge;if(ge.indexOf("@")>-1){if(be.cache)return ge;ge=ge.split("@")[0]}ge=ge.replace("//pre-","//");const ke=be.dpr||(isSSR$1()?2:Math.floor(($e=window==null?void 0:window.devicePixelRatio)!==null&&$e!==void 0?$e:2)||1),Ee=[];be.w&&isInt(be.w)&&Ee.push(`${Math.floor(be.w*ke)}w`),be.h&&isInt(be.h)&&Ee.push(`${Math.floor(be.h*ke)}h`),be.e&&Ee.push(`${be.e}e`),be.c&&Ee.push("1c"),be.a&&Ee.push(`${[getIntNum(be.a.x),getIntNum(be.a.y),getIntNum(be.a.w)*ke,getIntNum(be.a.h)*ke].join("-")}a`),be.p&&isInt(be.p)&&Ee.push(`${be.p}p`),be.s&&Ee.push("1s"),be.q&&isInt(be.q)&&Ee.push(`${be.q}q`),be.style&&Ee.push(`!${be.style}`);let Ce="";return be.ext&&["webp","avif"].includes(be.ext)&&(Ce=be.ext),Ee.length===0&&!Ce?ge:`${trimURL(ge)}@${Ee.join("_")}${Ce?`.${Ce}`:""}`};function _typeof$1(ge){return _typeof$1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(be){return typeof be}:function(be){return be&&typeof Symbol=="function"&&be.constructor===Symbol&&be!==Symbol.prototype?"symbol":typeof be},_typeof$1(ge)}var e$1$1="bmgOnLoad",t$1$1="bmgOnError",r$1$1="__BMG_TRACKER_COLLECT_EXTS__";var l$1$1=function(be){return typeof be=="function"},w$1$1=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},h$5={};Object.defineProperty(h$5,"__esModule",{value:!0});var m$7=!0,g$4=h$5.default=function(){return m$7&&(m$7=typeof window=="undefined"),m$7},y$2={};Object.defineProperty(y$2,"__esModule",{value:!0});var _$1$1=/\.(jpeg|jpg|png|webp|gif|avif)$/;y$2.default=function(ge){var be;return((be=ge.match(_$1$1))===null||be===void 0?void 0:be[0])||null};var E$5={};(function(ge){var be=w$1$1&&w$1$1.__importDefault||function(Ee){return Ee&&Ee.__esModule?Ee:{default:Ee}};Object.defineProperty(ge,"__esModule",{value:!0}),ge.asyncCanUseAvif=ge.canUseAvif=ge.setAvif=void 0;var $e,ke=be(h$5);ge.setAvif=function(Ee){$e=Ee},ge.canUseAvif=function(){return!(0,ke.default)()&&$e!==void 0&&$e},ge.asyncCanUseAvif=function(){return new Promise(function(Ee){if((0,ke.default)())return Ee(!1);if((0,ge.canUseAvif)())return Ee(!0);var Ce=new Image;Ce.onerror=function(){(0,ge.setAvif)(!1),Ee(!1)},Ce.onload=function(){(0,ge.setAvif)(!0),Ee(!0)},Ce.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="})}})(E$5);var O$2={};(function(ge){var be=w$1$1&&w$1$1.__importDefault||function(Ee){return Ee&&Ee.__esModule?Ee:{default:Ee}};Object.defineProperty(ge,"__esModule",{value:!0}),ge.asyncCanUseWebP=ge.canUseWebP=ge.setWebp=void 0;var $e,ke=be(h$5);ge.setWebp=function(Ee){$e=Ee},ge.canUseWebP=function(){var Ee,Ce,Te,Se;if((0,ke.default)())return!1;if($e!==void 0)return $e;try{if(typeof navigator!="undefined"&&/Firefox\/(\d+)/i.test(navigator.userAgent))return $e=Number(((Ee=navigator.userAgent.match(/Firefox\/(\d+)/i))===null||Ee===void 0?void 0:Ee[1])||"0")>=65;var Ke=document.createElement("canvas");$e=!!(!((Ce=Ke.getContext)===null||Ce===void 0)&&Ce.call(Ke,"2d"))&&((Se=(Te=Ke.toDataURL)===null||Te===void 0?void 0:Te.call(Ke,"image/webp"))===null||Se===void 0?void 0:Se.indexOf("data:image/webp"))===0}catch{$e=!1}return $e},ge.asyncCanUseWebP=function(){return new Promise(function(Ee){if((0,ke.default)())return Ee(!1);if((0,ge.canUseWebP)())return Ee(!0);var Ce=new Image;Ce.onerror=function(){(0,ge.setWebp)(!1),Ee(!1)},Ce.onload=function(){(0,ge.setWebp)(!0),Ee(!0)},Ce.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="})}})(O$2);var I$4="BMG_EXTS",B$3=null,C$2=function(be){if(be===void 0&&(be=!1),!window[r$1$1]||be){var $e=function(){if(B$3)return B$3;try{B$3=(localStorage.getItem(I$4)||"").split(",")}catch(ke){console.warn(ke),B$3=[]}return B$3}();window[r$1$1]={avif:$e.includes("avif"),webp:$e.includes("webp")}}},T$3=function(){if(g$4())return!1;var be=window.rawWindow;return!!be&&!!be.__MICRO_APP_PROXY_WINDOW__},D$3=function(){return!g$4()&&!T$3()&&l$1$1(window[e$1$1])&&l$1$1(window[t$1$1])},k$5={};(function(ge){Object.defineProperty(ge,"__esModule",{value:!0}),ge.commitLog=ge.getSpmId=ge.getSpmPrefix=void 0;var be=function(){return typeof window=="undefined"},$e="";ge.getSpmPrefix=function(){var ke=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,Ee;if(be())return"";if($e&&!ke)return $e;try{return $e=((Ee=document.querySelector("meta[name=spm_prefix]"))===null||Ee===void 0?void 0:Ee.content)||"",$e}catch{return""}},ge.getSpmId=function(ke){if(!ke)return"";var Ee=(0,ge.getSpmPrefix)();return Ee?ke.indexOf(Ee)>-1?ke:"".concat(Ee,".").concat(ke):""},ge.commitLog=function(ke,Ee,Ce,Te){var Se,Ke,Je,mt;if(!be()&&!(!window.reportConfig&&!window.MReporter)&&!(!ke||!Ee)){var bt=null;if(!bt&&window.reportConfig)if(window.reportMsgObj)bt=window.reportMsgObj;else{var $t=window.reportConfig.msgObjects;bt=window[$t]||null}var St=Ee.indexOf("selfDef");if(St>-1)return void(bt&&(bt[Ee.substring(St+8)]=Ce,(Se=window.reportObserver)===null||Se===void 0||Se.forceCommit()));var It=(0,ge.getSpmPrefix)();if(!!It){var Bt=_typeof$1(Ce)=="object"?JSON.stringify(Ce):JSON.stringify({});if(window.MReporter)return Ee.indexOf(It)>-1&&(Ee=Ee.replace("".concat(It,"."),"")),void((Je=(Ke=window.MReporter)[ke])===null||Je===void 0||Je.call(Ke,{evt:Ee,msg:Bt,target_url:Te||""}));(mt=window.reportObserver)===null||mt===void 0||mt.reportCustomData(ke,{spm_id:(0,ge.getSpmId)(Ee),msg:Bt,target_url:Te||""})}}}})(k$5);var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},detect={},canUseAvif={},isSsr={};Object.defineProperty(isSsr,"__esModule",{value:!0});var _isSSR=!0,isSSR=function(){return _isSSR&&(_isSSR=typeof window=="undefined"),_isSSR},_default=isSsr.default=isSSR;(function(ge){var be=commonjsGlobal&&commonjsGlobal.__importDefault||function(Se){return Se&&Se.__esModule?Se:{default:Se}};Object.defineProperty(ge,"__esModule",{value:!0}),ge.asyncCanUseAvif=ge.canUseAvif=ge.setAvif=void 0;var $e=be(isSsr),ke,Ee=function(Se){ke=Se};ge.setAvif=Ee;var Ce=function(){return(0,$e.default)()?!1:typeof ke!="undefined"?ke:!1};ge.canUseAvif=Ce;var Te=function(){return new Promise(function(Se){if((0,$e.default)())return Se(!1);if((0,ge.canUseAvif)())return Se(!0);var Ke=new Image;Ke.onerror=function(){(0,ge.setAvif)(!1),Se(!1)},Ke.onload=function(){(0,ge.setAvif)(!0),Se(!0)},Ke.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="})};ge.asyncCanUseAvif=Te})(canUseAvif);var canUseWebp={};(function(ge){var be=commonjsGlobal&&commonjsGlobal.__importDefault||function(Se){return Se&&Se.__esModule?Se:{default:Se}};Object.defineProperty(ge,"__esModule",{value:!0}),ge.asyncCanUseWebP=ge.canUseWebP=ge.setWebp=void 0;var $e=be(isSsr),ke,Ee=function(Se){ke=Se};ge.setWebp=Ee;var Ce=function(){var Se,Ke,Je,mt;if((0,$e.default)())return!1;if(typeof ke!="undefined")return ke;try{if(typeof navigator!="undefined"&&/Firefox\/(\d+)/i.test(navigator.userAgent))return ke=Number(((Se=navigator.userAgent.match(/Firefox\/(\d+)/i))===null||Se===void 0?void 0:Se[1])||"0")>=65,ke;var bt=document.createElement("canvas");ke=!((Ke=bt.getContext)===null||Ke===void 0)&&Ke.call(bt,"2d")?((mt=(Je=bt.toDataURL)===null||Je===void 0?void 0:Je.call(bt,"image/webp"))===null||mt===void 0?void 0:mt.indexOf("data:image/webp"))===0:!1}catch{ke=!1}return ke};ge.canUseWebP=Ce;var Te=function(){return new Promise(function(Se){if((0,$e.default)())return Se(!1);if((0,ge.canUseWebP)())return Se(!0);var Ke=new Image;Ke.onerror=function(){(0,ge.setWebp)(!1),Se(!1)},Ke.onload=function(){(0,ge.setWebp)(!0),Se(!0)},Ke.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="})};ge.asyncCanUseWebP=Te})(canUseWebp);var canUseHtmlPictureElement={},__importDefault=commonjsGlobal&&commonjsGlobal.__importDefault||function(ge){return ge&&ge.__esModule?ge:{default:ge}};Object.defineProperty(canUseHtmlPictureElement,"__esModule",{value:!0});var is_ssr_1=__importDefault(isSsr);canUseHtmlPictureElement.default=function(){return(0,is_ssr_1.default)()?!1:!!window.HTMLPictureElement};(function(ge){var be=commonjsGlobal&&commonjsGlobal.__importDefault||function(Se){return Se&&Se.__esModule?Se:{default:Se}};Object.defineProperty(ge,"__esModule",{value:!0}),ge.autoDetectAll=ge.autoDetect=ge.canUseHtmlPictureElement=ge.canUseWebP=ge.setWebp=ge.canUseAvif=ge.setAvif=void 0;var $e=canUseAvif;Object.defineProperty(ge,"canUseAvif",{enumerable:!0,get:function(){return $e.canUseAvif}}),Object.defineProperty(ge,"setAvif",{enumerable:!0,get:function(){return $e.setAvif}});var ke=canUseWebp;Object.defineProperty(ge,"canUseWebP",{enumerable:!0,get:function(){return ke.canUseWebP}}),Object.defineProperty(ge,"setWebp",{enumerable:!0,get:function(){return ke.setWebp}});var Ee=be(canUseHtmlPictureElement);ge.canUseHtmlPictureElement=Ee.default;var Ce=function(Se){Se===void 0&&(Se=["webp"]);for(var Ke=0;Ke<Se.length;Ke++)if(Se[Ke]==="avif"&&(0,$e.canUseAvif)()||Se[Ke]==="webp"&&(0,ke.canUseWebP)())return Se[Ke];return""};ge.autoDetect=Ce;var Te=function(){return new Promise(function(Se){Promise.all([(0,$e.asyncCanUseAvif)(),(0,ke.asyncCanUseWebP)()]).then(function(Ke){var Je=Ke[0],mt=Ke[1];Se({avif:Je,webp:mt})})})};ge.autoDetectAll=Te})(detect);var getBmgSrc={},trimUrl={};Object.defineProperty(trimUrl,"__esModule",{value:!0});function default_1(ge){return ge?ge.replace(/^http(s)?:/,""):""}trimUrl.default=default_1;var shared={};(function(ge){Object.defineProperty(ge,"__esModule",{value:!0}),ge.isInt=ge.isNum=void 0;var be=function(ke){return typeof ke=="number"};ge.isNum=be;var $e=function(ke){return(0,ge.isNum)(ke)&&(ke|0)===ke};ge.isInt=$e})(shared);var getImgUrlExt$1={};Object.defineProperty(getImgUrlExt$1,"__esModule",{value:!0});var EXT_REG=/\.(jpeg|jpg|png|webp|gif|avif)$/,getImgUrlExt=function(ge){var be;return((be=ge.match(EXT_REG))===null||be===void 0?void 0:be[0])||null};getImgUrlExt$1.default=getImgUrlExt;(function(ge){var be=commonjsGlobal&&commonjsGlobal.__importDefault||function(bt){return bt&&bt.__esModule?bt:{default:bt}};Object.defineProperty(ge,"__esModule",{value:!0}),ge.getBmgSrc=ge.isSupportBmgFormat=void 0;var $e=be(trimUrl),ke=be(isSsr),Ee=shared,Ce=be(getImgUrlExt$1),Te=function(bt){return!!/\/bfs\//.test(bt)},Se=function(bt){return/pic.bstarstatic.com/.test(bt)},Ke=function(bt){return!Te(bt)&&!Se(bt)?!1:!!(0,Ce.default)(bt)};ge.isSupportBmgFormat=Ke;var Je=function(bt){return typeof bt!="number"||isNaN(bt)?0:Math.floor(bt)||0},mt=function(bt,$t){var St;if($t===void 0&&($t={c:!0}),typeof bt!="string")return"";if(!(0,ge.isSupportBmgFormat)(bt))return bt;if(bt.indexOf("@")>-1){if($t.cache)return bt;bt=bt.split("@")[0]}bt=bt.replace("//pre-","//");var It=$t.dpr||((0,ke.default)()?2:Math.floor((St=window==null?void 0:window.devicePixelRatio)!==null&&St!==void 0?St:2)||1),Bt=[];$t.w&&(0,Ee.isInt)($t.w)&&Bt.push("".concat(Math.floor($t.w*It),"w")),$t.h&&(0,Ee.isInt)($t.h)&&Bt.push("".concat(Math.floor($t.h*It),"h")),$t.e&&Bt.push("".concat($t.e,"e")),$t.c&&Bt.push("1c"),$t.a&&Bt.push("".concat([Je($t.a.x),Je($t.a.y),Je($t.a.w)*It,Je($t.a.h)*It].join("-"),"a")),$t.p&&(0,Ee.isInt)($t.p)&&Bt.push("".concat($t.p,"p")),$t.s&&Bt.push("1s"),$t.q&&(0,Ee.isInt)($t.q)&&Bt.push("".concat($t.q,"q")),$t.style&&Bt.push("!".concat($t.style));var Dt="";return $t.ext&&["webp","avif"].includes($t.ext)&&(Dt=$t.ext),Bt.length===0&&!Dt?bt:"".concat((0,$e.default)(bt),"@").concat(Bt.join("_")).concat(Dt?".".concat(Dt):"")};ge.getBmgSrc=mt})(getBmgSrc);var collect={},getWindowExtsState;function _typeof(ge){return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(be){return typeof be}:function(be){return be&&typeof Symbol=="function"&&be.constructor===Symbol&&be!==Symbol.prototype?"symbol":typeof be},_typeof(ge)}Object.defineProperty(collect,"__esModule",{value:!0});var e$9="__BMG_TRACKER_COLLECT_QUEUE__",A$2="__BMG_TRACKER_COLLECT_EXTS__",n$a="__BMG_TRACKER_COLLECT_MODE__",t$4=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof commonjsGlobal!="undefined"?commonjsGlobal:typeof self!="undefined"?self:{},i$7={};Object.defineProperty(i$7,"__esModule",{value:!0});var o$9=!0,a$4=i$7.default=function(){return o$9&&(o$9=typeof window=="undefined"),o$9},r$9={};Object.defineProperty(r$9,"__esModule",{value:!0});var u$5=/\.(jpeg|jpg|png|webp|gif|avif)$/,f$6=r$9.default=function(ge){var be;return((be=ge.match(u$5))===null||be===void 0?void 0:be[0])||null},d$4={};(function(ge){var be=t$4&&t$4.__importDefault||function(Ee){return Ee&&Ee.__esModule?Ee:{default:Ee}};Object.defineProperty(ge,"__esModule",{value:!0}),ge.asyncCanUseAvif=ge.canUseAvif=ge.setAvif=void 0;var $e,ke=be(i$7);ge.setAvif=function(Ee){$e=Ee},ge.canUseAvif=function(){return!(0,ke.default)()&&$e!==void 0&&$e},ge.asyncCanUseAvif=function(){return new Promise(function(Ee){if((0,ke.default)())return Ee(!1);if((0,ge.canUseAvif)())return Ee(!0);var Ce=new Image;Ce.onerror=function(){(0,ge.setAvif)(!1),Ee(!1)},Ce.onload=function(){(0,ge.setAvif)(!0),Ee(!0)},Ce.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="})}})(d$4);var l$c={};(function(ge){var be=t$4&&t$4.__importDefault||function(Ee){return Ee&&Ee.__esModule?Ee:{default:Ee}};Object.defineProperty(ge,"__esModule",{value:!0}),ge.asyncCanUseWebP=ge.canUseWebP=ge.setWebp=void 0;var $e,ke=be(i$7);ge.setWebp=function(Ee){$e=Ee},ge.canUseWebP=function(){var Ee,Ce,Te,Se;if((0,ke.default)())return!1;if($e!==void 0)return $e;try{if(typeof navigator!="undefined"&&/Firefox\/(\d+)/i.test(navigator.userAgent))return $e=Number(((Ee=navigator.userAgent.match(/Firefox\/(\d+)/i))===null||Ee===void 0?void 0:Ee[1])||"0")>=65;var Ke=document.createElement("canvas");$e=!!(!((Ce=Ke.getContext)===null||Ce===void 0)&&Ce.call(Ke,"2d"))&&((Se=(Te=Ke.toDataURL)===null||Te===void 0?void 0:Te.call(Ke,"image/webp"))===null||Se===void 0?void 0:Se.indexOf("data:image/webp"))===0}catch{$e=!1}return $e},ge.asyncCanUseWebP=function(){return new Promise(function(Ee){if((0,ke.default)())return Ee(!1);if((0,ge.canUseWebP)())return Ee(!0);var Ce=new Image;Ce.onerror=function(){(0,ge.setWebp)(!1),Ee(!1)},Ce.onload=function(){(0,ge.setWebp)(!0),Ee(!0)},Ce.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="})}})(l$c);var c$9="BMG_EXTS",s$8=null,v$6=function(){if(s$8)return s$8;try{s$8=(localStorage.getItem(c$9)||"").split(",")}catch(be){console.warn(be),s$8=[]}return s$8},w$4=function(be){if(be===void 0&&(be=!1),!window[A$2]||be){var $e=v$6();window[A$2]={avif:$e.includes("avif"),webp:$e.includes("webp")}}},p$7=function(be){return function($e){switch(function(){var ke=[],Ee=window[A$2]||{avif:!1,webp:!1};Ee.avif&&ke.push("avif"),Ee.webp&&ke.push("webp");try{localStorage.setItem(c$9,ke.join(","))}catch(Ce){console.warn(Ce)}}(),be){case"avif":d$4.setAvif($e);break;case"webp":l$c.setWebp($e)}}},b$9=function(be){var $e;_typeof(window[A$2])!="object"&&w$4(),!(($e=window[A$2])===null||$e===void 0)&&$e[be]||(window[A$2][be]=!0,p$7(be)(!0))},_$4=function(){return window[n$a]};collect.collect=function(ge,be,$e){if(!a$4()){var ke=a$4()?null:window.__BMG_TRACKER__||null;$e=$e||_$4();var Ee=(f$6(ge)||"").substring(1);if(["avif","webp"].indexOf(Ee)>-1&&b$9(Ee),$e!=="onlyext"){if(ke)ke.collect(ge,be);else if($e!=="nocache"){var Ce={src:ge,type:be,ts:Date.now()/1e3|0};Array.isArray(window[e$9])?window[e$9].push(Ce):window[e$9]=[Ce]}}}},collect.getCollectMode=_$4,collect.getLocalExtsState=v$6,getWindowExtsState=collect.getWindowExtsState=function(ge){var be,$e;return ge==="avif"?((be=window[A$2])===null||be===void 0?void 0:be.avif)||!1:ge==="webp"?(($e=window[A$2])===null||$e===void 0?void 0:$e.webp)||!1:window[A$2]||null},collect.initWindowExtsState=w$4,collect.setCollectMode=function(ge){window[n$a]=ge},collect.updateExtState=p$7,collect.updateWindowExtsState=b$9;const getDomain=(ge,be)=>`${ge}${be}.hdslb.com`,DOMAIN_REGEXP=new RegExp(getDomain("(s|i)","\\d")),getSrcDefDomain=ge=>{if(_default())return ge||"";const be=window.__BMG_AF__;return be!=null&&be.defDomain?(be.defUpdated,be.defDomain):ge||""},replaceSrcDefDomain=(ge,be)=>{var $e;if(!be)return ge;const ke=(($e=ge.match(DOMAIN_REGEXP))===null||$e===void 0?void 0:$e[0])||"";return ke&&ke!==be?ge.replace(DOMAIN_REGEXP,be):ge},getBmgSrcNext=(ge,be,$e)=>{var ke,Ee,Ce,Te;let Se="";if(_default())return getBmgSrc.getBmgSrc($e!=null&&$e.domain?replaceSrcDefDomain(ge,$e.domain):ge,be);if(!(!((ke=$e==null?void 0:$e.disabledExts)===null||ke===void 0)&&ke.avif)&&getWindowExtsState("avif"))Se="avif";else if(!(!((Ee=$e==null?void 0:$e.disabledExts)===null||Ee===void 0)&&Ee.webp)&&getWindowExtsState("webp"))Se="webp";else{const Je=[];!((Ce=$e==null?void 0:$e.disabledExts)===null||Ce===void 0)&&Ce.avif||Je.push("avif"),!((Te=$e==null?void 0:$e.disabledExts)===null||Te===void 0)&&Te.webp||Je.push("webp"),Je.length&&(Se=detect.autoDetect(Je))}return getBmgSrc.getBmgSrc(replaceSrcDefDomain(ge,getSrcDefDomain($e==null?void 0:$e.domain)),Object.assign(Object.assign({},be),{ext:Se}))};let cacheClass="";const unhtml=function(ge,be){return ge?ge.replace(be||/[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g,function($e,ke){return ke?$e:{"<":"&lt;","&":"&amp;",'"':"&quot;",">":"&gt;","'":"&#39;"}[$e]||""}):""},renderDOM=(ge,be,$e)=>{$e=($e==null?void 0:$e.filter(Boolean))||[];const ke=ge==="img"?">":`>${$e.length?$e.join(""):""}</${ge}>`;return`<${ge} ${Object.keys(be).filter(Ee=>typeof be[Ee]=="string").map(Ee=>`${Ee}="${unhtml(be[Ee]||"")}"`).join(" ")} ${ke}`},getImgCbStr=ge=>ge?`${ge}(this)`:"",getSrcsetByExt=(ge,be)=>ge.indexOf("@")===-1?`${ge}@.${be}`:(ge=ge.replace(new RegExp(".(avif|webp)$"),""),`${ge}.${be}`),getBmgExt=(ge=!1)=>{var be,$e;return isSSR$1()?"":ge&&((be=window[r$1$1])===null||be===void 0?void 0:be.avif)?"avif":!(($e=window[r$1$1])===null||$e===void 0)&&$e.webp?"webp":autoDetect()},render$o=(ge,be,$e)=>{var ke,Ee;const Ce=[];let Te="";be.class?(Ce.push(be.class),Te=Ce.join(" ")):Te=cacheClass,ge=replaceSrcDefDomain(ge,getSrcDefDomain($e==null?void 0:$e.domain));const Se=!!(!((ke=$e==null?void 0:$e.exts)===null||ke===void 0)&&ke.avif),Ke=((Ee=$e==null?void 0:$e.exts)===null||Ee===void 0?void 0:Ee.webp)!==!1,Je=!(Se||Ke),mt=!!($e!=null&&$e.performance),bt=isSupportBmgFormat(ge)&&($e!=null&&$e.tag?$e.tag==="picture":canUseHtmlPictureElement$1());let $t=D$3();const St={};if(typeof be.dataset=="object")for(const zt in be.dataset)St[`data-${zt}`]=be.dataset[zt];let It=Je?void 0:getBmgExt(mt&&Se),Bt=!1;mt&&(Se&&It==="avif"||Ke&&It==="webp"||Je&&It==="")&&(Bt=!0),!Bt&&bt&&($e==null?void 0:$e.safe)===!0&&(It=void 0,isSSR$1()&&($t=!0));const Dt=getBmgSrc$1(ge,Object.assign({},be,{ext:It})),jt=renderDOM("img",Object.assign({src:Dt,class:Bt||!bt?Te:null,alt:be.alt||null,loading:(be==null?void 0:be.loading)&&"lazy"||null,onload:$t?getImgCbStr(e$1$1):getImgCbStr(($e==null?void 0:$e.onload)||"")||null,onerror:$t?getImgCbStr(t$1$1):getImgCbStr(($e==null?void 0:$e.onerror)||"")||null,"data-onload":$t&&($e==null?void 0:$e.onload)||null,"data-onerror":$t&&($e==null?void 0:$e.onerror)||null},St));return Bt?jt:bt?renderDOM("picture",{class:Te||null},[Se&&renderDOM("source",{type:"image/avif",srcset:getSrcsetByExt(Dt,"avif")})||"",Ke&&renderDOM("source",{type:"image/webp",srcset:getSrcsetByExt(Dt,"webp")})||"",jt]):jt};typeof window!="undefined"&&C$2();const m$6=()=>({group_id:"",layers:[{layer_id:"",layer_config:{allow_over_paint:!1,is_critical:!0,layer_mask:null,tags:{AVATAR_LAYER:{config_type:0},GENERAL_CONFIG:{config_type:1,general_config:{web_css_style:{borderRadius:"50%"}}}}},general_spec:{pos_spec:{axis_x:.675,axis_y:.675,coordinate_pos:2},render_spec:{opacity:1},size_spec:{height:1,width:1}},visible:!0,resource:{res_type:3,res_image:{image_src:{src_type:2,placeholder:6,local:6}}}}],group_mask:null,is_critical_group:!0}),h$4="onAvtSrcError",v$5={animationWebpSrc:0,maskImageStyle:0},b$8=(ge,be)=>{v$5[ge]=be?1:2};class k$4{constructor(be,$e){this.payload=be,this.size=$e,this.layers=[],this.id=be.group_id,this.createElement()}createElement(){this.el=document.createElement("div"),this.el.classList.add("layers")}async render(){try{return await Promise.all(this.payload.layers.filter(be=>!!be.visible).map(be=>this.addLayer(be,this.size))),this}catch(be){return Promise.reject(be)}}async addLayer(be,$e){try{const ke=await new z$4(be,$e).render();this.layers.push(ke),this.el.appendChild(ke.el)}catch(ke){return Promise.reject(ke)}}removeLayer(be){const $e=this.layers.findIndex(ke=>ke.id===be);if($e>-1){const ke=this.layers[$e];this.el.removeChild(ke.el),this.layers.splice($e,1)}}}class L$4{constructor(be,$e){switch(this.localSrcList=["//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local1.png","//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local2.png","//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local3.png","//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local4.png","//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local5.png","//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local6.jpeg"],this.type=be.res_type,this.createElement(),this.type){case 3:this.loadLocal(be.res_image.image_src.placeholder),this.load(be.res_image.image_src,$e);break;case 4:this.play(be.res_animation.webp_src,$e);break;case 5:this.draw(be.res_native_draw.draw_src.draw);break}}createElement(){this.el=document.createElement("div"),this.el.classList.add("layer-res")}registerHandler(){const be=window;be[h$4]||(be[h$4]=$e=>{$e.style.opacity="0"})}setStyle(be,$e){this.el.style[be]=$e}draw(be){var $e;const{draw_type:ke,fill_mode:Ee,color_config:Ce}=be;ke===1&&this.setStyle("borderRadius","50%"),Ee===1&&this.setStyle("backgroundColor",($e=Ce==null?void 0:Ce.day)==null?void 0:$e.argb)}async play(be,$e){const{src_type:ke}=be;switch(ke){case 1:try{return this.setStyle("background",`url(${getBmgSrcNext(be.remote.url,{w:Math.floor($e.width),h:Math.floor($e.height),c:!0,dpr:2})}) center / cover no-repeat`),!0}catch(Ee){return Promise.reject(Ee)}case 2:return this.loadLocal(be.local),!0;case 3:return this.draw(be.draw),!0;default:return!0}}load(be,$e){const{src_type:ke}=be;switch(ke){case 1:this.registerHandler(),this.el.innerHTML=render$o(be.remote.url,{w:Math.floor($e.width),h:Math.floor($e.height),s:!0,c:!0,dpr:2},{onerror:h$4,exts:{avif:!0}});break;case 2:this.loadLocal(be.local);break;case 3:this.draw(be.draw);break}}loadLocal(be){const $e=Math.floor(be)-1;$e>-1&&this.localSrcList[$e]&&this.setStyle("backgroundImage",`url(${this.localSrcList[$e]})`)}}const S$4=(ge,be)=>new Promise(($e,ke)=>{if(!ge)return ke();const Ee=new Image;Ee.crossOrigin="anonymous",Ee.src=ge,Ee.onload=()=>{if(!be)return $e(ge);be(Ee).then($e).catch(ke)},Ee.onerror=()=>{ke()}});class z$4{constructor(be,$e){this.payload=be,this.size=$e,this.id=be.layer_id,this.createElement()}createElement(){this.el=document.createElement("div"),this.el.classList.add("layer")}async render(){try{return this.renderGeneralSpec(),await this.renderResource(),this.renderTag(),this.renderMask(),this}catch(be){return Promise.reject(be)}}renderGeneralSpec(){const{general_spec:be}=this.payload;be.pos_spec&&(be.pos_spec.coordinate_pos===2?this.el.classList.add("center"):(this.el.style.left=`${be.pos_spec.axis_x*this.size.width}px`,this.el.style.top=`${be.pos_spec.axis_y*this.size.height}px`)),be.size_spec&&(this.size={width:be.size_spec.width*this.size.width,height:be.size_spec.height*this.size.height},this.el.style.width=`${this.size.width}px`,this.el.style.height=`${this.size.height}px`),be.render_spec&&typeof be.render_spec.opacity=="number"&&(this.el.style.opacity=String(be.render_spec.opacity))}renderTag(){var be;const $e=(be=this.payload.layer_config)==null?void 0:be.tags;if($e)for(const ke in $e){const{config_type:Ee,general_config:Ce}=$e[ke];if(Ee===1&&Ce){const Te=Ce.web_css_style;if(Te)for(const Se in Te)this.el.style[Se]=Te[Se]}}}async renderMask(){var be,$e;const ke=(be=this.payload.layer_config)==null?void 0:be.layer_mask;if(!ke)return;const{mask_src:Ee}=ke;if(Ee.src_type===1){switch(v$5.maskImageStyle){case 0:b$8("maskImageStyle",!0);break;case 2:throw new Error("Not support [maskImageStyle]")}const Ce=getBmgSrcNext(Ee.remote.url,{w:Math.round(this.size.width),h:Math.round(this.size.height)}),Te=await S$4(Ce);this.resource.setStyle("-webkit-mask-image",`url(${Te})`),this.resource.setStyle("-webkit-mask-size","cover")}else(Ee==null?void 0:Ee.src_type)===3&&(($e=Ee.draw)==null?void 0:$e.draw_type)===1&&this.resource.setStyle("borderRadius","50%")}renderResource(){this.resource=new L$4(this.payload.resource,this.size),this.el.appendChild(this.resource.el)}}var p$6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n$9={},u$4={};Object.defineProperty(u$4,"__esModule",{value:!0});var c$8=!0,E$4=function(){return c$8&&(c$8=typeof window>"u"),c$8};u$4.default=E$4;var x$4=p$6&&p$6.__importDefault||function(ge){return ge&&ge.__esModule?ge:{default:ge}};Object.defineProperty(n$9,"__esModule",{value:!0});var d$3=n$9.unobserve=g$3=n$9.observe=void 0,_$3=x$4(u$4),l$b=null;(0,_$3.default)()||window.IntersectionObserver;var R$3=function(ge,be){ge.forEach(function($e){var ke,Ee;(Ee=(ke=$e.target)===null||ke===void 0?void 0:ke.__i18r_callback__)===null||Ee===void 0||Ee.call(ke,$e)})},M$1=function(ge,be){(0,_$3.default)()||(l$b||(l$b=new IntersectionObserver(R$3)),ge.__i18r_callback__=be,l$b.observe(ge))},g$3=n$9.observe=M$1,P$5=function(ge){var be;l$b&&((be=l$b.unobserve)===null||be===void 0||be.call(l$b,ge),delete ge.__i18r_callback__)};d$3=n$9.unobserve=P$5;class j$1 extends HTMLElement{constructor(){super(),this.loaded=!1,this.size={width:0,height:0},this.config={baseSize:0,isFloat:!1,lazyload:!1},this.layers=[],this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
        <style>
          :host {
            display: inline-block;
            position: relative;
            width: var(--avatar-width);
            height: var(--avatar-height);
          }
          #canvas {
            width: var(--avatar-canvas-width);
            height: var(--avatar-canvas-height);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
          }
          .layers {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
          }
          .layer {
            position: absolute;
            isolation: isolate;
            overflow: hidden;
          }
          .layer.center {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .layer-res {
            width: 100%;
            height: 100%;
            isolation: isolate;
            overflow: hidden;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
          .layer-res picture {
            display: inline-block;
          }
          .layer-res div,
          .layer-res picture,
          .layer-res img {
            width: 100%;
            height: 100%;
          }
        </style>
        <div id="canvas"></div>
      `,this.canvasElement=this.shadowRoot.querySelector("#canvas"))}disconnectedCallback(){this.config.lazyload&&!this.loaded&&d$3(this.canvasElement),this.clearCanvas(),this.clearLayers(),this.loaded=!1}load(be,$e){const ke={width:0,height:0};typeof $e=="number"?(ke.width=$e,ke.height=$e):typeof $e=="object"?(typeof $e.baseSize=="number"?(ke.width=$e.baseSize,ke.height=$e.baseSize):typeof $e.baseSize=="object"?(ke.width=$e.baseSize.width,ke.height=$e.baseSize.height):console.warn("Not found 'baseSize' in Avatar Config"),this.config.isFloat=$e.isFloat||!1,this.config.lazyload=$e.lazyload||!1):console.warn("Not found 'baseSize' in Avatar Config"),this.size={...ke},this.config.baseSize=ke,this.initCanvas(be),this.renderLayers(be)}renderLayers(be){var $e;if(this.config.lazyload&&!this.loaded){this.renderDefaultLayers(),g$3(this.canvasElement,ke=>{ke.isIntersecting&&(this.loaded=!0,this.renderLayers(be),d$3(this.canvasElement))});return}($e=be.layers)!=null&&$e.length?this.renderNormalLayers(be):be.fallback_layers&&this.renderFallbackLayers(be.fallback_layers)}initCanvas(be){const $e={width:this.size.width*be.container_size.width,height:this.size.height*be.container_size.height};this.config.isFloat?(this.style.setProperty("--avatar-width",`${this.size.width}px`),this.style.setProperty("--avatar-height",`${this.size.height}px`)):(this.style.setProperty("--avatar-width",$e.width+"px"),this.style.setProperty("--avatar-height",$e.height+"px")),this.canvasElement.style.setProperty("--avatar-canvas-width",$e.width+"px"),this.canvasElement.style.setProperty("--avatar-canvas-height",$e.height+"px")}async renderDefaultLayers(){await this.addLayerGroup(m$6(),this.size),this.renderCanvas()}async renderNormalLayers(be){try{await Promise.all(be.layers.map($e=>this.addLayerGroup($e,this.size))),this.renderCanvas()}catch{this.clearCanvas(),this.clearLayers(),this.renderFallbackLayers(be.fallback_layers);return}}async renderFallbackLayers(be){try{await this.addLayerGroup(be,this.size),this.renderCanvas()}catch{this.clearCanvas(),this.clearLayers(),this.renderDefaultLayers()}}clearCanvas(){Array.from(this.canvasElement.children).forEach(be=>{this.canvasElement.removeChild(be)})}clearLayers(){this.layers=[]}renderCanvas(){this.clearCanvas(),this.layers.forEach(be=>{this.canvasElement.appendChild(be.el)})}async addLayerGroup(be,$e){try{const ke=await new k$4(be,$e).render();this.layers.push(ke)}catch(ke){return Promise.reject(ke)}}}customElements.define("bili-avatar",j$1);function b$7(ge){typeof queueMicrotask=="function"?queueMicrotask(ge):Promise.resolve().then(ge).catch(be=>setTimeout(()=>{throw be}))}function p$5(ge,be,$e,ke){ge.removeEventListener(be,$e,ke)}function m$5(ge,be,$e,ke){return ge.addEventListener(be,$e,ke),()=>{p$5(ge,be,$e,ke)}}class l$a{constructor(){this.disposables=[]}addEventListener(be,$e,ke,Ee){return this.add(m$5(be,$e,ke,Ee))}mutationObserve(be,$e,ke){let Ee=!1;const Ce=Se=>{Ee||(Ee=!0,Se.disconnect())},Te=new MutationObserver($e);return Te.observe(be,ke),()=>Ce(Te)}requestAnimationFrame(...be){const $e=requestAnimationFrame(...be);return this.add(()=>cancelAnimationFrame($e))}nextFrame(...be){return this.requestAnimationFrame(()=>this.requestAnimationFrame(...be))}setTimeout(...be){const $e=setTimeout(...be);return this.add(()=>clearTimeout($e))}microTask(...be){const $e={current:!0};return b$7(()=>{$e.current&&be[0]()}),this.add(()=>{$e.current=!1})}style(be,$e,ke){const Ee=be.style.getPropertyValue($e);return Object.assign(be.style,{[$e]:ke}),this.add(()=>{Object.assign(be.style,{[$e]:Ee})})}group(be){const $e=new l$a;return be($e),this.add(()=>$e.dispose())}add(be){return this.disposables.push(be),()=>{const $e=this.disposables.indexOf(be);$e>=0&&this.remove($e,1)}}remove(be,$e){const ke=this.disposables.splice(be,$e!=null?$e:this.disposables.length);for(const Ee of ke)Ee()}dispose(){this.remove(0)}}function k$3(){return new l$a}const x$3=typeof window<"u",v$4=1e3;x$3&&(window.__BILI_POPPER_ZINDEX__||(window.__BILI_POPPER_ZINDEX__=v$4));const d$2=class eh extends HTMLElement{constructor(){super(),this.disposables=k$3(),this.state={label:"",value:"",name:"",disabled:!1,checked:!1},this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
        <style>
          :host {
            --bili-checkbox-size: 16px;
            --bili-checkbox-font-size: 14px;
            --bili-checkbox-border-width: 1px;
            --bili-checkbox-border-radius: 2px;
            --bili-checkbox-checked-color: var(--brand_blue);
            --bili-checkbox-margin-inline-end: 8px;

            display: inline-flex;
            align-items: baseline;
            padding: 0;
            margin: 0;
            cursor: pointer;
            margin-inline-end: var(--bili-checkbox-margin-inline-end);
          }
          #input {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            list-style: none;
            position: relative;
            display: inline-block;
            outline: none;
            cursor: pointer;
            align-self: center;
            border-radius: var(--bili-checkbox-border-radius);
            width: var(--bili-checkbox-size);
            height: var(--bili-checkbox-size);
          }
          #input input {
            bottom: 0;
            left: 0;
            margin: 0;
            opacity: 0;
            outline: none;
            position: absolute;
            right: 0;
            top: 0;
            z-index: -1;
          }
          #input #inner {
            display: block;
            background-color: var(--bg1_float);
            border: 1px solid var(--text4);
            border-radius: var(--bili-checkbox-border-radius);
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            transition: all .3s ease-in-out;
          }
          #input #inner:hover {
            border-color: var(--bili-checkbox-checked-color);
          }
          #input[checked] #inner {
            border-color: var(--bili-checkbox-checked-color);
            background-color: var(--bili-checkbox-checked-color);
          }
          #input[checked] #inner::after {
            transform: rotate(45deg) scale(1) translate(-65%, -50%);
            opacity: 1;
          }
          #input #inner::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 25%;
            display: table;
            width: 4px;
            height: 8px;
            border: 2px solid var(--text_white);
            opacity: 0;
            border-top: 0;
            border-left: 0;
            transition: all .3s ease-in-out;
            transform: rotate(45deg) scale(0) translate(-50%, -50%);
          }
          #label {
            margin-left: 8px;
            font-size: var(--bili-checkbox-font-size);
            color: var(--text2);
          }
        </style>
        <span id="input">
          <input type="checkbox">
          <span id="inner"></span>
        </span>
        <slot>
          <span id="label"></span>
        </slot>
      `)}static get observedAttributes(){return["name","value","label","disabled","checked"]}connectedCallback(){if(this.shadowRoot){const be=this.getAttribute("label");eh.observedAttributes.forEach($e=>{const ke=this.getAttribute($e);ke!==null&&($e==="value"&&!be&&this.updateAttribute("label",ke),this.updateAttribute($e,ke))}),this.shadowRoot&&this.disposables.addEventListener(this,"click",()=>{if(this.state.disabled)return;this.state.checked=!this.state.checked,this.updateInput("checked",this.state.checked);const $e={name:this.state.name,value:this.state.value,checked:this.state.checked},ke=new CustomEvent("change",{detail:$e});this.parentElement&&this.parentElement.isCheckboxGroup&&this.parentElement.onCheckboxChange(ke),this.dispatchEvent(ke)})}}disconnectedCallback(){this.disposables.dispose()}updateInput(be,$e){var ke,Ee;const Ce=(ke=this.shadowRoot)==null?void 0:ke.querySelector("#input"),Te=(Ee=this.shadowRoot)==null?void 0:Ee.querySelector("input");if(!(!Ce||!Te))switch(be){case"value":Te.setAttribute(be,$e);break;case"disabled":case"checked":$e?(Ce.setAttribute(be,""),Te.setAttribute(be,"")):(Ce.removeAttribute(be),Te.removeAttribute(be));break}}updateLabel(be){var $e;const ke=($e=this.shadowRoot)==null?void 0:$e.querySelector("#label");ke&&(ke.textContent=be)}updateAttribute(be,$e){switch(be){case"name":this.state.name=$e;break;case"label":this.updateLabel($e),this.state.label=$e;break;case"value":this.updateInput(be,$e),this.state[be]=$e;break;case"disabled":case"checked":this.updateInput(be,$e==="true"),this.state[be]=$e==="true";break}}attributeChangedCallback(be,$e,ke){this.updateAttribute(be,ke)}};d$2.elName="bili-checkbox";let r$8=d$2;class c$7 extends HTMLElement{constructor(){super(...arguments),this.isCheckboxGroup=!0,this.valueList=[]}onCheckboxChange(be){const{value:$e,checked:ke}=be.detail;if(ke){if(this.valueList.includes($e))return;this.valueList.push($e),this.dispatchEvent(new CustomEvent("change",{detail:[...this.valueList]}));return}const Ee=this.valueList.indexOf($e);Ee!==-1&&(this.valueList.splice(Ee,1),this.dispatchEvent(new CustomEvent("change",{detail:[...this.valueList]})))}}c$7.elName="bili-checkbox-group";customElements.get(r$8.elName)||(customElements.define(r$8.elName,r$8),customElements.define(c$7.elName,c$7));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$3=window,e$8=t$3.ShadowRoot&&(t$3.ShadyCSS===void 0||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$7=Symbol(),n$8=new WeakMap;class o$8{constructor(be,$e,ke){if(this._$cssResult$=!0,ke!==s$7)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=be,this.t=$e}get styleSheet(){let be=this.o;const $e=this.t;if(e$8&&be===void 0){const ke=$e!==void 0&&$e.length===1;ke&&(be=n$8.get($e)),be===void 0&&((this.o=be=new CSSStyleSheet).replaceSync(this.cssText),ke&&n$8.set($e,be))}return be}toString(){return this.cssText}}const r$7=ge=>new o$8(typeof ge=="string"?ge:ge+"",void 0,s$7),i$6=(ge,...be)=>{const $e=ge.length===1?ge[0]:be.reduce((ke,Ee,Ce)=>ke+(Te=>{if(Te._$cssResult$===!0)return Te.cssText;if(typeof Te=="number")return Te;throw Error("Value passed to 'css' function must be a 'css' function result: "+Te+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(Ee)+ge[Ce+1],ge[0]);return new o$8($e,ge,s$7)},S$3=(ge,be)=>{e$8?ge.adoptedStyleSheets=be.map($e=>$e instanceof CSSStyleSheet?$e:$e.styleSheet):be.forEach($e=>{const ke=document.createElement("style"),Ee=t$3.litNonce;Ee!==void 0&&ke.setAttribute("nonce",Ee),ke.textContent=$e.cssText,ge.appendChild(ke)})},c$6=e$8?ge=>ge:ge=>ge instanceof CSSStyleSheet?(be=>{let $e="";for(const ke of be.cssRules)$e+=ke.cssText;return r$7($e)})(ge):ge;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$6;const e$7=window,r$6=e$7.trustedTypes,h$3=r$6?r$6.emptyScript:"",o$7=e$7.reactiveElementPolyfillSupport,n$7={toAttribute(ge,be){switch(be){case Boolean:ge=ge?h$3:null;break;case Object:case Array:ge=ge==null?ge:JSON.stringify(ge)}return ge},fromAttribute(ge,be){let $e=ge;switch(be){case Boolean:$e=ge!==null;break;case Number:$e=ge===null?null:Number(ge);break;case Object:case Array:try{$e=JSON.parse(ge)}catch{$e=null}}return $e}},a$3=(ge,be)=>be!==ge&&(be==be||ge==ge),l$9={attribute:!0,type:String,converter:n$7,reflect:!1,hasChanged:a$3},d$1="finalized";class u$3 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(be){var $e;this.finalize(),(($e=this.h)!==null&&$e!==void 0?$e:this.h=[]).push(be)}static get observedAttributes(){this.finalize();const be=[];return this.elementProperties.forEach(($e,ke)=>{const Ee=this._$Ep(ke,$e);Ee!==void 0&&(this._$Ev.set(Ee,ke),be.push(Ee))}),be}static createProperty(be,$e=l$9){if($e.state&&($e.attribute=!1),this.finalize(),this.elementProperties.set(be,$e),!$e.noAccessor&&!this.prototype.hasOwnProperty(be)){const ke=typeof be=="symbol"?Symbol():"__"+be,Ee=this.getPropertyDescriptor(be,ke,$e);Ee!==void 0&&Object.defineProperty(this.prototype,be,Ee)}}static getPropertyDescriptor(be,$e,ke){return{get(){return this[$e]},set(Ee){const Ce=this[be];this[$e]=Ee,this.requestUpdate(be,Ce,ke)},configurable:!0,enumerable:!0}}static getPropertyOptions(be){return this.elementProperties.get(be)||l$9}static finalize(){if(this.hasOwnProperty(d$1))return!1;this[d$1]=!0;const be=Object.getPrototypeOf(this);if(be.finalize(),be.h!==void 0&&(this.h=[...be.h]),this.elementProperties=new Map(be.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const $e=this.properties,ke=[...Object.getOwnPropertyNames($e),...Object.getOwnPropertySymbols($e)];for(const Ee of ke)this.createProperty(Ee,$e[Ee])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(be){const $e=[];if(Array.isArray(be)){const ke=new Set(be.flat(1/0).reverse());for(const Ee of ke)$e.unshift(c$6(Ee))}else be!==void 0&&$e.push(c$6(be));return $e}static _$Ep(be,$e){const ke=$e.attribute;return ke===!1?void 0:typeof ke=="string"?ke:typeof be=="string"?be.toLowerCase():void 0}_$Eu(){var be;this._$E_=new Promise($e=>this.enableUpdating=$e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(be=this.constructor.h)===null||be===void 0||be.forEach($e=>$e(this))}addController(be){var $e,ke;(($e=this._$ES)!==null&&$e!==void 0?$e:this._$ES=[]).push(be),this.renderRoot!==void 0&&this.isConnected&&((ke=be.hostConnected)===null||ke===void 0||ke.call(be))}removeController(be){var $e;($e=this._$ES)===null||$e===void 0||$e.splice(this._$ES.indexOf(be)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((be,$e)=>{this.hasOwnProperty($e)&&(this._$Ei.set($e,this[$e]),delete this[$e])})}createRenderRoot(){var be;const $e=(be=this.shadowRoot)!==null&&be!==void 0?be:this.attachShadow(this.constructor.shadowRootOptions);return S$3($e,this.constructor.elementStyles),$e}connectedCallback(){var be;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(be=this._$ES)===null||be===void 0||be.forEach($e=>{var ke;return(ke=$e.hostConnected)===null||ke===void 0?void 0:ke.call($e)})}enableUpdating(be){}disconnectedCallback(){var be;(be=this._$ES)===null||be===void 0||be.forEach($e=>{var ke;return(ke=$e.hostDisconnected)===null||ke===void 0?void 0:ke.call($e)})}attributeChangedCallback(be,$e,ke){this._$AK(be,ke)}_$EO(be,$e,ke=l$9){var Ee;const Ce=this.constructor._$Ep(be,ke);if(Ce!==void 0&&ke.reflect===!0){const Te=(((Ee=ke.converter)===null||Ee===void 0?void 0:Ee.toAttribute)!==void 0?ke.converter:n$7).toAttribute($e,ke.type);this._$El=be,Te==null?this.removeAttribute(Ce):this.setAttribute(Ce,Te),this._$El=null}}_$AK(be,$e){var ke;const Ee=this.constructor,Ce=Ee._$Ev.get(be);if(Ce!==void 0&&this._$El!==Ce){const Te=Ee.getPropertyOptions(Ce),Se=typeof Te.converter=="function"?{fromAttribute:Te.converter}:((ke=Te.converter)===null||ke===void 0?void 0:ke.fromAttribute)!==void 0?Te.converter:n$7;this._$El=Ce,this[Ce]=Se.fromAttribute($e,Te.type),this._$El=null}}requestUpdate(be,$e,ke){let Ee=!0;be!==void 0&&(((ke=ke||this.constructor.getPropertyOptions(be)).hasChanged||a$3)(this[be],$e)?(this._$AL.has(be)||this._$AL.set(be,$e),ke.reflect===!0&&this._$El!==be&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(be,ke))):Ee=!1),!this.isUpdatePending&&Ee&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch($e){Promise.reject($e)}const be=this.scheduleUpdate();return be!=null&&await be,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var be;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((Ee,Ce)=>this[Ce]=Ee),this._$Ei=void 0);let $e=!1;const ke=this._$AL;try{$e=this.shouldUpdate(ke),$e?(this.willUpdate(ke),(be=this._$ES)===null||be===void 0||be.forEach(Ee=>{var Ce;return(Ce=Ee.hostUpdate)===null||Ce===void 0?void 0:Ce.call(Ee)}),this.update(ke)):this._$Ek()}catch(Ee){throw $e=!1,this._$Ek(),Ee}$e&&this._$AE(ke)}willUpdate(be){}_$AE(be){var $e;($e=this._$ES)===null||$e===void 0||$e.forEach(ke=>{var Ee;return(Ee=ke.hostUpdated)===null||Ee===void 0?void 0:Ee.call(ke)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(be)),this.updated(be)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(be){return!0}update(be){this._$EC!==void 0&&(this._$EC.forEach(($e,ke)=>this._$EO(ke,this[ke],$e)),this._$EC=void 0),this._$Ek()}updated(be){}firstUpdated(be){}}u$3[d$1]=!0,u$3.elementProperties=new Map,u$3.elementStyles=[],u$3.shadowRootOptions={mode:"open"},o$7==null||o$7({ReactiveElement:u$3}),((s$6=e$7.reactiveElementVersions)!==null&&s$6!==void 0?s$6:e$7.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t$2;const i$5=window,s$5=i$5.trustedTypes,e$6=s$5?s$5.createPolicy("lit-html",{createHTML:ge=>ge}):void 0,o$6="$lit$",n$6=`lit$${(Math.random()+"").slice(9)}$`,l$8="?"+n$6,h$2=`<${l$8}>`,r$5=document,u$2=()=>r$5.createComment(""),d=ge=>ge===null||typeof ge!="object"&&typeof ge!="function",c$5=Array.isArray,v$3=ge=>c$5(ge)||typeof(ge==null?void 0:ge[Symbol.iterator])=="function",a$2=`[ 	
\f\r]`,f$5=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_$2=/-->/g,m$4=/>/g,p$4=RegExp(`>|${a$2}(?:([^\\s"'>=/]+)(${a$2}*=${a$2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),g$2=/'/g,$$3=/"/g,y$1=/^(?:script|style|textarea|title)$/i,w$3=ge=>(be,...$e)=>({_$litType$:ge,strings:be,values:$e}),x$2=w$3(1),T$2=Symbol.for("lit-noChange"),A$1=Symbol.for("lit-nothing"),E$3=new WeakMap,C$1=r$5.createTreeWalker(r$5,129,null,!1);function P$4(ge,be){if(!Array.isArray(ge)||!ge.hasOwnProperty("raw"))throw Error("invalid template strings array");return e$6!==void 0?e$6.createHTML(be):be}const V$1=(ge,be)=>{const $e=ge.length-1,ke=[];let Ee,Ce=be===2?"<svg>":"",Te=f$5;for(let Se=0;Se<$e;Se++){const Ke=ge[Se];let Je,mt,bt=-1,$t=0;for(;$t<Ke.length&&(Te.lastIndex=$t,mt=Te.exec(Ke),mt!==null);)$t=Te.lastIndex,Te===f$5?mt[1]==="!--"?Te=_$2:mt[1]!==void 0?Te=m$4:mt[2]!==void 0?(y$1.test(mt[2])&&(Ee=RegExp("</"+mt[2],"g")),Te=p$4):mt[3]!==void 0&&(Te=p$4):Te===p$4?mt[0]===">"?(Te=Ee!=null?Ee:f$5,bt=-1):mt[1]===void 0?bt=-2:(bt=Te.lastIndex-mt[2].length,Je=mt[1],Te=mt[3]===void 0?p$4:mt[3]==='"'?$$3:g$2):Te===$$3||Te===g$2?Te=p$4:Te===_$2||Te===m$4?Te=f$5:(Te=p$4,Ee=void 0);const St=Te===p$4&&ge[Se+1].startsWith("/>")?" ":"";Ce+=Te===f$5?Ke+h$2:bt>=0?(ke.push(Je),Ke.slice(0,bt)+o$6+Ke.slice(bt)+n$6+St):Ke+n$6+(bt===-2?(ke.push(void 0),Se):St)}return[P$4(ge,Ce+(ge[$e]||"<?>")+(be===2?"</svg>":"")),ke]};class N$1{constructor({strings:be,_$litType$:$e},ke){let Ee;this.parts=[];let Ce=0,Te=0;const Se=be.length-1,Ke=this.parts,[Je,mt]=V$1(be,$e);if(this.el=N$1.createElement(Je,ke),C$1.currentNode=this.el.content,$e===2){const bt=this.el.content,$t=bt.firstChild;$t.remove(),bt.append(...$t.childNodes)}for(;(Ee=C$1.nextNode())!==null&&Ke.length<Se;){if(Ee.nodeType===1){if(Ee.hasAttributes()){const bt=[];for(const $t of Ee.getAttributeNames())if($t.endsWith(o$6)||$t.startsWith(n$6)){const St=mt[Te++];if(bt.push($t),St!==void 0){const It=Ee.getAttribute(St.toLowerCase()+o$6).split(n$6),Bt=/([.?@])?(.*)/.exec(St);Ke.push({type:1,index:Ce,name:Bt[2],strings:It,ctor:Bt[1]==="."?H:Bt[1]==="?"?L$3:Bt[1]==="@"?z$3:k$2})}else Ke.push({type:6,index:Ce})}for(const $t of bt)Ee.removeAttribute($t)}if(y$1.test(Ee.tagName)){const bt=Ee.textContent.split(n$6),$t=bt.length-1;if($t>0){Ee.textContent=s$5?s$5.emptyScript:"";for(let St=0;St<$t;St++)Ee.append(bt[St],u$2()),C$1.nextNode(),Ke.push({type:2,index:++Ce});Ee.append(bt[$t],u$2())}}}else if(Ee.nodeType===8)if(Ee.data===l$8)Ke.push({type:2,index:Ce});else{let bt=-1;for(;(bt=Ee.data.indexOf(n$6,bt+1))!==-1;)Ke.push({type:7,index:Ce}),bt+=n$6.length-1}Ce++}}static createElement(be,$e){const ke=r$5.createElement("template");return ke.innerHTML=be,ke}}function S$2(ge,be,$e=ge,ke){var Ee,Ce,Te,Se;if(be===T$2)return be;let Ke=ke!==void 0?(Ee=$e._$Co)===null||Ee===void 0?void 0:Ee[ke]:$e._$Cl;const Je=d(be)?void 0:be._$litDirective$;return(Ke==null?void 0:Ke.constructor)!==Je&&((Ce=Ke==null?void 0:Ke._$AO)===null||Ce===void 0||Ce.call(Ke,!1),Je===void 0?Ke=void 0:(Ke=new Je(ge),Ke._$AT(ge,$e,ke)),ke!==void 0?((Te=(Se=$e)._$Co)!==null&&Te!==void 0?Te:Se._$Co=[])[ke]=Ke:$e._$Cl=Ke),Ke!==void 0&&(be=S$2(ge,Ke._$AS(ge,be.values),Ke,ke)),be}class M{constructor(be,$e){this._$AV=[],this._$AN=void 0,this._$AD=be,this._$AM=$e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(be){var $e;const{el:{content:ke},parts:Ee}=this._$AD,Ce=(($e=be==null?void 0:be.creationScope)!==null&&$e!==void 0?$e:r$5).importNode(ke,!0);C$1.currentNode=Ce;let Te=C$1.nextNode(),Se=0,Ke=0,Je=Ee[0];for(;Je!==void 0;){if(Se===Je.index){let mt;Je.type===2?mt=new R$2(Te,Te.nextSibling,this,be):Je.type===1?mt=new Je.ctor(Te,Je.name,Je.strings,this,be):Je.type===6&&(mt=new Z$2(Te,this,be)),this._$AV.push(mt),Je=Ee[++Ke]}Se!==(Je==null?void 0:Je.index)&&(Te=C$1.nextNode(),Se++)}return C$1.currentNode=r$5,Ce}v(be){let $e=0;for(const ke of this._$AV)ke!==void 0&&(ke.strings!==void 0?(ke._$AI(be,ke,$e),$e+=ke.strings.length-2):ke._$AI(be[$e])),$e++}}class R$2{constructor(be,$e,ke,Ee){var Ce;this.type=2,this._$AH=A$1,this._$AN=void 0,this._$AA=be,this._$AB=$e,this._$AM=ke,this.options=Ee,this._$Cp=(Ce=Ee==null?void 0:Ee.isConnected)===null||Ce===void 0||Ce}get _$AU(){var be,$e;return($e=(be=this._$AM)===null||be===void 0?void 0:be._$AU)!==null&&$e!==void 0?$e:this._$Cp}get parentNode(){let be=this._$AA.parentNode;const $e=this._$AM;return $e!==void 0&&(be==null?void 0:be.nodeType)===11&&(be=$e.parentNode),be}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(be,$e=this){be=S$2(this,be,$e),d(be)?be===A$1||be==null||be===""?(this._$AH!==A$1&&this._$AR(),this._$AH=A$1):be!==this._$AH&&be!==T$2&&this._(be):be._$litType$!==void 0?this.g(be):be.nodeType!==void 0?this.$(be):v$3(be)?this.T(be):this._(be)}k(be){return this._$AA.parentNode.insertBefore(be,this._$AB)}$(be){this._$AH!==be&&(this._$AR(),this._$AH=this.k(be))}_(be){this._$AH!==A$1&&d(this._$AH)?this._$AA.nextSibling.data=be:this.$(r$5.createTextNode(be)),this._$AH=be}g(be){var $e;const{values:ke,_$litType$:Ee}=be,Ce=typeof Ee=="number"?this._$AC(be):(Ee.el===void 0&&(Ee.el=N$1.createElement(P$4(Ee.h,Ee.h[0]),this.options)),Ee);if((($e=this._$AH)===null||$e===void 0?void 0:$e._$AD)===Ce)this._$AH.v(ke);else{const Te=new M(Ce,this),Se=Te.u(this.options);Te.v(ke),this.$(Se),this._$AH=Te}}_$AC(be){let $e=E$3.get(be.strings);return $e===void 0&&E$3.set(be.strings,$e=new N$1(be)),$e}T(be){c$5(this._$AH)||(this._$AH=[],this._$AR());const $e=this._$AH;let ke,Ee=0;for(const Ce of be)Ee===$e.length?$e.push(ke=new R$2(this.k(u$2()),this.k(u$2()),this,this.options)):ke=$e[Ee],ke._$AI(Ce),Ee++;Ee<$e.length&&(this._$AR(ke&&ke._$AB.nextSibling,Ee),$e.length=Ee)}_$AR(be=this._$AA.nextSibling,$e){var ke;for((ke=this._$AP)===null||ke===void 0||ke.call(this,!1,!0,$e);be&&be!==this._$AB;){const Ee=be.nextSibling;be.remove(),be=Ee}}setConnected(be){var $e;this._$AM===void 0&&(this._$Cp=be,($e=this._$AP)===null||$e===void 0||$e.call(this,be))}}class k$2{constructor(be,$e,ke,Ee,Ce){this.type=1,this._$AH=A$1,this._$AN=void 0,this.element=be,this.name=$e,this._$AM=Ee,this.options=Ce,ke.length>2||ke[0]!==""||ke[1]!==""?(this._$AH=Array(ke.length-1).fill(new String),this.strings=ke):this._$AH=A$1}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(be,$e=this,ke,Ee){const Ce=this.strings;let Te=!1;if(Ce===void 0)be=S$2(this,be,$e,0),Te=!d(be)||be!==this._$AH&&be!==T$2,Te&&(this._$AH=be);else{const Se=be;let Ke,Je;for(be=Ce[0],Ke=0;Ke<Ce.length-1;Ke++)Je=S$2(this,Se[ke+Ke],$e,Ke),Je===T$2&&(Je=this._$AH[Ke]),Te||(Te=!d(Je)||Je!==this._$AH[Ke]),Je===A$1?be=A$1:be!==A$1&&(be+=(Je!=null?Je:"")+Ce[Ke+1]),this._$AH[Ke]=Je}Te&&!Ee&&this.j(be)}j(be){be===A$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,be!=null?be:"")}}class H extends k$2{constructor(){super(...arguments),this.type=3}j(be){this.element[this.name]=be===A$1?void 0:be}}const I$3=s$5?s$5.emptyScript:"";class L$3 extends k$2{constructor(){super(...arguments),this.type=4}j(be){be&&be!==A$1?this.element.setAttribute(this.name,I$3):this.element.removeAttribute(this.name)}}class z$3 extends k$2{constructor(be,$e,ke,Ee,Ce){super(be,$e,ke,Ee,Ce),this.type=5}_$AI(be,$e=this){var ke;if((be=(ke=S$2(this,be,$e,0))!==null&&ke!==void 0?ke:A$1)===T$2)return;const Ee=this._$AH,Ce=be===A$1&&Ee!==A$1||be.capture!==Ee.capture||be.once!==Ee.once||be.passive!==Ee.passive,Te=be!==A$1&&(Ee===A$1||Ce);Ce&&this.element.removeEventListener(this.name,this,Ee),Te&&this.element.addEventListener(this.name,this,be),this._$AH=be}handleEvent(be){var $e,ke;typeof this._$AH=="function"?this._$AH.call((ke=($e=this.options)===null||$e===void 0?void 0:$e.host)!==null&&ke!==void 0?ke:this.element,be):this._$AH.handleEvent(be)}}class Z$2{constructor(be,$e,ke){this.element=be,this.type=6,this._$AN=void 0,this._$AM=$e,this.options=ke}get _$AU(){return this._$AM._$AU}_$AI(be){S$2(this,be)}}const j={O:o$6,P:n$6,A:l$8,C:1,M:V$1,L:M,R:v$3,D:S$2,I:R$2,V:k$2,H:L$3,N:z$3,U:H,F:Z$2},B$2=i$5.litHtmlPolyfillSupport;B$2==null||B$2(N$1,R$2),((t$2=i$5.litHtmlVersions)!==null&&t$2!==void 0?t$2:i$5.litHtmlVersions=[]).push("2.8.0");const D$2=(ge,be,$e)=>{var ke,Ee;const Ce=(ke=$e==null?void 0:$e.renderBefore)!==null&&ke!==void 0?ke:be;let Te=Ce._$litPart$;if(Te===void 0){const Se=(Ee=$e==null?void 0:$e.renderBefore)!==null&&Ee!==void 0?Ee:null;Ce._$litPart$=Te=new R$2(be.insertBefore(u$2(),Se),Se,void 0,$e!=null?$e:{})}return Te._$AI(ge),Te};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$7,o$5;class s$4 extends u$3{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var be,$e;const ke=super.createRenderRoot();return(be=($e=this.renderOptions).renderBefore)!==null&&be!==void 0||($e.renderBefore=ke.firstChild),ke}update(be){const $e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(be),this._$Do=D$2($e,this.renderRoot,this.renderOptions)}connectedCallback(){var be;super.connectedCallback(),(be=this._$Do)===null||be===void 0||be.setConnected(!0)}disconnectedCallback(){var be;super.disconnectedCallback(),(be=this._$Do)===null||be===void 0||be.setConnected(!1)}render(){return T$2}}s$4.finalized=!0,s$4._$litElement$=!0,(l$7=globalThis.litElementHydrateSupport)===null||l$7===void 0||l$7.call(globalThis,{LitElement:s$4});const n$5=globalThis.litElementPolyfillSupport;n$5==null||n$5({LitElement:s$4});((o$5=globalThis.litElementVersions)!==null&&o$5!==void 0?o$5:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$5=ge=>be=>typeof be=="function"?(($e,ke)=>(customElements.define($e,ke),ke))(ge,be):(($e,ke)=>{const{kind:Ee,elements:Ce}=ke;return{kind:Ee,elements:Ce,finisher(Te){customElements.define($e,Te)}}})(ge,be);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$4=(ge,be)=>be.kind==="method"&&be.descriptor&&!("value"in be.descriptor)?{...be,finisher($e){$e.createProperty(be.key,ge)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:be.key,initializer(){typeof be.initializer=="function"&&(this[be.key]=be.initializer.call(this))},finisher($e){$e.createProperty(be.key,ge)}},e$4=(ge,be,$e)=>{be.constructor.createProperty($e,ge)};function n$4(ge){return(be,$e)=>$e!==void 0?e$4(ge,be,$e):i$4(ge,be)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(ge){return n$4({...ge,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$4=({finisher:ge,descriptor:be})=>($e,ke)=>{var Ee;if(ke===void 0){const Ce=(Ee=$e.originalKey)!==null&&Ee!==void 0?Ee:$e.key,Te=be!=null?{kind:"method",placement:"prototype",key:Ce,descriptor:be($e.key)}:{...$e,key:Ce};return ge!=null&&(Te.finisher=function(Se){ge(Se,Ce)}),Te}{const Ce=$e.constructor;be!==void 0&&Object.defineProperty($e,ke,be(ke)),ge==null||ge(Ce,ke)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$3(ge,be){return o$4({descriptor:$e=>{const ke={get(){var Ee,Ce;return(Ce=(Ee=this.renderRoot)===null||Ee===void 0?void 0:Ee.querySelector(ge))!==null&&Ce!==void 0?Ce:null},enumerable:!0,configurable:!0};if(be){const Ee=typeof $e=="symbol"?Symbol():"__"+$e;ke.get=function(){var Ce,Te;return this[Ee]===void 0&&(this[Ee]=(Te=(Ce=this.renderRoot)===null||Ce===void 0?void 0:Ce.querySelector(ge))!==null&&Te!==void 0?Te:null),this[Ee]}}return ke}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$3;const e$3=((n$3=window.HTMLSlotElement)===null||n$3===void 0?void 0:n$3.prototype.assignedElements)!=null?(ge,be)=>ge.assignedElements(be):(ge,be)=>ge.assignedNodes(be).filter($e=>$e.nodeType===Node.ELEMENT_NODE);function l$6(ge){const{slot:be,selector:$e}=ge!=null?ge:{};return o$4({descriptor:ke=>({get(){var Ee;const Ce="slot"+(be?`[name=${be}]`:":not([name])"),Te=(Ee=this.renderRoot)===null||Ee===void 0?void 0:Ee.querySelector(Ce),Se=Te!=null?e$3(Te,ge):[];return $e?Se.filter(Ke=>Ke.matches($e)):Se},enumerable:!0,configurable:!0})})}class _$1{constructor(){this.reset()}reset(be){this.promise=new Promise(($e,ke)=>{this.resolve=$e,this.reject=ke})}}function P$3(){return new _$1}function T$1(ge){typeof queueMicrotask=="function"?queueMicrotask(ge):Promise.resolve().then(ge).catch(be=>setTimeout(()=>{throw be}))}function E$2(ge,be,$e,ke){ge.removeEventListener(be,$e,ke)}function g$1(ge,be,$e,ke){return ge.addEventListener(be,$e,ke),()=>{E$2(ge,be,$e,ke)}}class h$1{constructor(){this.disposables=[]}addEventListener(be,$e,ke,Ee){return this.add(g$1(be,$e,ke,Ee))}mutationObserve(be,$e,ke){let Ee=!1;const Ce=Se=>{Ee||(Ee=!0,Se.disconnect())},Te=new MutationObserver($e);return Te.observe(be,ke),()=>Ce(Te)}requestAnimationFrame(...be){const $e=requestAnimationFrame(...be);return this.add(()=>cancelAnimationFrame($e))}nextFrame(...be){return this.requestAnimationFrame(()=>this.requestAnimationFrame(...be))}setTimeout(...be){const $e=setTimeout(...be);return this.add(()=>clearTimeout($e))}microTask(...be){const $e={current:!0};return T$1(()=>{$e.current&&be[0]()}),this.add(()=>{$e.current=!1})}style(be,$e,ke){const Ee=be.style.getPropertyValue($e);return Object.assign(be.style,{[$e]:ke}),this.add(()=>{Object.assign(be.style,{[$e]:Ee})})}group(be){const $e=new h$1;return be($e),this.add(()=>$e.dispose())}add(be){return this.disposables.push(be),()=>{const $e=this.disposables.indexOf(be);$e>=0&&this.remove($e,1)}}remove(be,$e){const ke=this.disposables.splice(be,$e!=null?$e:this.disposables.length);for(const Ee of ke)Ee()}dispose(){this.remove(0)}}function p$3(){return new h$1}function f$4(ge,be,...$e){if(ge in be){const Ee=be[ge];return typeof Ee=="function"?Ee(...$e):Ee}const ke=new Error(`Tried to handle "${ge}" but there is no handler defined. Only defined handlers are: ${Object.keys(be).map(Ee=>`"${Ee}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(ke,f$4),ke}function F$1(){return()=>{}}function y(ge){const be={called:!1};return(...$e)=>{if(!be.called)return be.called=!0,ge(...$e)}}const v$2=typeof window<"u",b$6=1e3;v$2&&(window.__BILI_POPPER_ZINDEX__||(window.__BILI_POPPER_ZINDEX__=b$6));function I$2(){return v$2?window.__BILI_POPPER_ZINDEX__++:b$6}function m$3(ge,...be){ge&&be.length>0&&ge.classList.add(...be)}function l$5(ge,...be){ge&&be.length>0&&ge.classList.remove(...be)}function L$2(ge,be){const $e=p$3();if(!ge)return $e.dispose;const{transitionDuration:ke,transitionDelay:Ee}=getComputedStyle(ge),[Ce,Te]=[ke,Ee].map(Ke=>{const[Je=0]=Ke.split(",").filter(Boolean).map(mt=>mt.includes("ms")?parseFloat(mt):parseFloat(mt)*1e3).sort((mt,bt)=>bt-mt);return Je}),Se=Ce+Te;if(Se!==0){$e.group(Je=>{Je.setTimeout(()=>{be(),Je.dispose()},Se),Je.addEventListener(ge,"transitionrun",mt=>{mt.target===mt.currentTarget&&Je.dispose()})});const Ke=$e.addEventListener(ge,"transitionend",Je=>{Je.target===Je.currentTarget&&(be(),Ke())})}else be();return $e.add(()=>be()),$e.dispose}function O$1(ge,be,$e,ke){const Ee=$e?"enter":"leave",Ce=p$3(),Te=ke!==void 0?y(ke):F$1();Ee==="enter"&&(ge.removeAttribute("hidden"),ge.style.display="");const Se=f$4(Ee,{enter:()=>be.enter,leave:()=>be.leave}),Ke=f$4(Ee,{enter:()=>be.enterTo,leave:()=>be.leaveTo}),Je=f$4(Ee,{enter:()=>be.enterFrom,leave:()=>be.leaveFrom});return l$5(ge,...be.base,...be.enter,...be.enterTo,...be.enterFrom,...be.leave,...be.leaveFrom,...be.leaveTo,...be.entered),m$3(ge,...be.base,...Se,...Je),Ce.nextFrame(()=>{l$5(ge,...be.base,...Se,...Je),m$3(ge,...be.base,...Se,...Ke),L$2(ge,()=>(l$5(ge,...be.base,...Se,...Ke),m$3(ge,...be.base,...be.entered),Te()))}),Ce.dispose}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$2=ge=>(...be)=>({_$litDirective$:ge,values:be});class i$2{constructor(be){}get _$AU(){return this._$AM._$AU}_$AT(be,$e,ke){this._$Ct=be,this._$AM=$e,this._$Ci=ke}_$AS(be,$e){return this.update(be,$e)}update(be,$e){return this.render(...$e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$1="important",n$2=" !"+i$1,o$3=e$2(class extends i$2{constructor(ge){var be;if(super(ge),ge.type!==t.ATTRIBUTE||ge.name!=="style"||((be=ge.strings)===null||be===void 0?void 0:be.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(ge){return Object.keys(ge).reduce((be,$e)=>{const ke=ge[$e];return ke==null?be:be+`${$e=$e.includes("-")?$e:$e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${ke};`},"")}update(ge,[be]){const{style:$e}=ge.element;if(this.ht===void 0){this.ht=new Set;for(const ke in be)this.ht.add(ke);return this.render(be)}this.ht.forEach(ke=>{be[ke]==null&&(this.ht.delete(ke),ke.includes("-")?$e.removeProperty(ke):$e[ke]="")});for(const ke in be){const Ee=be[ke];if(Ee!=null){this.ht.add(ke);const Ce=typeof Ee=="string"&&Ee.endsWith(n$2);ke.includes("-")||Ce?$e.setProperty(ke,Ce?Ee.slice(0,-11):Ee,Ce?i$1:""):$e[ke]=Ee}}return T$2}});var f$3=Object.defineProperty,b$5=Object.getOwnPropertyDescriptor,r$4=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?b$5(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&f$3(be,$e,Ee),Ee};class o$2 extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.eventId="cm_goods_common",this.sourceFrom="",this.spmIdFrom="",this.selectIds="",this.loaded=!1,this.url="",this.size={width:960,height:642}}initUrl(){const be="//cm.bilibili.com/goods-plugin/pc#/goods-modal",$e={eventId:this.eventId,selectIds:this.selectIds,show:!0,source:"2",source_from:this.sourceFrom,no_top:1};this.spmIdFrom&&($e.spm_id_from=this.spmIdFrom);const ke=Object.entries($e).map(([Ee,Ce])=>`${Ee}=${Ce}`);this.url=`${be}?${ke.join("&")}`}connectedCallback(){super.connectedCallback(),this.initUrl(),this.disposables.addEventListener(window,"message",be=>{try{if(typeof be.data=="string"){const $e=JSON.parse(be.data);if(typeof $e!="object"||$e.eventId!==this.eventId)return;const ke=$e.data;switch($e.type){case"on-ready":ke.width&&ke.height&&(this.size={width:ke.width,height:ke.height}),this.loaded=!0;break;case"close":this.dispatchEvent(new CustomEvent("cancel")),setTimeout(()=>{this.remove()},0);break;case"on-confirm":this.dispatchEvent(new CustomEvent("confirm",{detail:ke}));break;default:break}}}catch{}})}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}spinnerTemplate(){return x$2`<div id="spinner">
      <img width="24" height="24" src="//i0.hdslb.com/bfs/static/jinkela/long/gif/loading-blue.gif" />
      <span>正在玩命加载…</span>
    </div>`}render(){return x$2`
      <div id="wrap">
        <div
          id="window"
          style="${o$3({display:this.loaded?"flex":"",width:`${this.size.width}px`,height:`${this.size.height}px`})}"
        >
          ${this.url?x$2`<iframe src="${this.url}"></iframe>`:""}
        </div>
        ${this.loaded?"":this.spinnerTemplate()}
      </div>
    `}}o$2.styles=i$6`
    #wrap {
      min-height: 100px;
      min-width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #window {
      width: 960px;
      height: 642px;
      display: none;
      border-radius: 8px;
      overflow: hidden;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
    #spinner {
      padding: 20px 0;
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: var(--text3);
    }
    #spinner img {
      margin-right: 8px;
      vertical-align: bottom;
    }
  `;r$4([n$4({type:String,attribute:"event-id"})],o$2.prototype,"eventId",2);r$4([n$4({type:String,attribute:"source-from"})],o$2.prototype,"sourceFrom",2);r$4([n$4({type:String,attribute:"spm-id-from"})],o$2.prototype,"spmIdFrom",2);r$4([n$4({type:String,attribute:"data-select-ids"})],o$2.prototype,"selectIds",2);r$4([t$1()],o$2.prototype,"loaded",2);r$4([t$1()],o$2.prototype,"url",2);r$4([t$1()],o$2.prototype,"size",2);customElements.get("bili-cm-goods")||customElements.define("bili-cm-goods",o$2);var setCache=function(be,$e){typeof window!="undefined"&&(window.__BILI_X_ENGINE_SCRIPT_CACHE__||(window.__BILI_X_ENGINE_SCRIPT_CACHE__={}),window.__BILI_X_ENGINE_SCRIPT_CACHE__[be]=$e)},getCache=function(be){return typeof window=="undefined"||!window.__BILI_X_ENGINE_SCRIPT_CACHE__?null:window.__BILI_X_ENGINE_SCRIPT_CACHE__[be]||null},removeCache=function(be){typeof window!="undefined"&&(!window.__BILI_X_ENGINE_SCRIPT_CACHE__||typeof window.__BILI_X_ENGINE_SCRIPT_CACHE__[be]!="undefined"&&delete window.__BILI_X_ENGINE_SCRIPT_CACHE__[be])},loadScript=function(be,$e){if(typeof window=="undefined")return Promise.reject(new Error("window is not defined"));be=be.replace(/^https?:\/\//,"//");var ke=be,Ee=getCache(ke);if(Ee!=null&&Ee.promise)return Ee.promise;var Ce=new Promise(function(Te,Se){var Ke=document.createElement("script");Ke.src=be,$e!=null&&$e.behavior&&Ke.setAttribute($e.behavior,""),Ke.onload=function(){var Je=window;if($e.lib)return Je[$e.lib]?Te(Je[$e.lib]):Se(new Error('Failed to access library "'+$e.lib+'" from '+be));Te(null)},Ke.onerror=function(){Se(new Error("Failed to load "+be)),document.head.removeChild(Ke)},document.head.appendChild(Ke)});return setCache(ke,{promise:Ce,lib:$e==null?void 0:$e.lib}),Ce.then(function(){($e==null?void 0:$e.cache)===!1&&removeCache(ke)}).catch(function(){($e==null?void 0:$e.cache)===!1&&removeCache(ke)}),Ce},loadKvSDK=function(){try{return window.KvSDK?Promise.resolve(window.KvSDK):Promise.resolve(loadScript("//s1.hdslb.com/bfs/seed/jinkela/kv-sdk/index.js",{lib:"KvSDK"}))}catch(be){return Promise.reject(be)}},useKv=function(be){return Promise.resolve(loadKvSDK()).then(function($e){return new $e(be)})},loadMiniLogin=function(){try{return window.MiniLogin?Promise.resolve(window.MiniLogin):Promise.resolve(loadScript("//s1.hdslb.com/bfs/seed/jinkela/short/mini-login/miniLogin.umd.min.js",{lib:"MiniLogin"}))}catch(be){return Promise.reject(be)}},loadBiliUser=function(){try{return Promise.resolve(loadScript("//s1.hdslb.com/bfs/seed/jinkela/short/bili-user/index.js",{lib:"__BiliUser__"}))}catch(be){return Promise.reject(be)}},useAuthData=function(){try{var be=function(){return Promise.resolve(window.__BiliUser__.get())},$e=function(){if(!window.__BiliUser__)return Promise.resolve(loadBiliUser()).then(function(){})}();return Promise.resolve($e&&$e.then?$e.then(be):be($e))}catch(ke){return Promise.reject(ke)}},miniLogin,useAuthLogin=function(be){if(window.__BiliUser__){var $e=window.__BiliUser__;return new Promise(function(ke,Ee){$e.quickLogin(function(Ce){var Te=Ce.code;if(Te===0){ke();return}Ee()},be)})}return new Promise(function(ke,Ee){function Ce(){miniLogin.showComponent(),miniLogin.addEventListener("success",function(){ke(),miniLogin.removeEventListener("success"),miniLogin.removeEventListener("cancel")}),miniLogin.addEventListener("cancel",function(){Ee(),miniLogin.removeEventListener("success"),miniLogin.removeEventListener("cancel")})}if(miniLogin){Ce();return}loadMiniLogin().then(function(Te){if(!Te)return Ee("MiniLogin is not found");miniLogin=new Te(be),Ce()}).catch(Ee)})};function _extends(){return _extends=Object.assign?Object.assign.bind():function(ge){for(var be=1;be<arguments.length;be++){var $e=arguments[be];for(var ke in $e)Object.prototype.hasOwnProperty.call($e,ke)&&(ge[ke]=$e[ke])}return ge},_extends.apply(this,arguments)}var useMeta=function(be){if(typeof window=="undefined")return"";var $e=document.querySelector('meta[name="'+be+'"]');return $e!=null&&$e.content?$e.content:""},spmId="",useSpmPrefix=function(){return spmId||(spmId=useMeta("spm_prefix"),spmId||"0.0")},loadReporter=function(){try{return window.ReporterPb?Promise.resolve(window.ReporterPb):Promise.resolve(loadScript("//s1.hdslb.com/bfs/seed/jinkela/short/reporter-pb/index.js",{lib:"ReporterPb"}))}catch(be){return Promise.reject(be)}},useReporter=function(be){return Promise.resolve(loadReporter()).then(function($e){return new $e(be)})},noopReport=function(be,$e,ke,Ee){console.warn("["+(typeof window=="undefined"?"Node":"Browser")+"]Miss reporter args: "+JSON.stringify({type:be,spm:$e,data:ke,options:Ee}))},bindGlobalReport=function(be){var $e=window,ke=useSpmPrefix(),Ee=$e[be].report.bind($e[be]);return function(Ce,Te,Se,Ke){return typeof Te!="string"?Te.prefix||(Te=_extends({},Te,{prefix:ke})):Te.split(".").length<=3&&(Te=ke+"."+Te),Ee(Ce,Te,Se,Ke)}},mirrorReport=function(be,$e,ke,Ee){var Ce=window.biliMirror,Te=Ce.customReportPb,Se=Ce.techReportPb,Ke="",Je="";if(typeof $e!="string")Je=[$e.c,$e.d,$e.e].filter(Boolean).join("."),$e.prefix&&(Ke=$e.prefix);else{var mt=$e.split(".");!isNaN(Number(mt[0]))&&!isNaN(Number(mt[1]))?(Ke=mt.splice(0,2).join("."),Je=mt.join(".")):Je=$e}if(be==="tech"){if(Se){Se({eventId:Je,msg:ke,otherSpmId:Ke});return}}else if(Te){Te({type:be,eventId:Je,msg:ke,otherSpmId:Ke});return}noopReport(be,$e,ke,Ee)},useReportFunc=function(be){if(typeof window=="undefined")return noopReport;var $e=window,ke="";function Ee(){var Ce=$e[ke];return!!(Ce!=null&&Ce.report)}return typeof(be==null?void 0:be.globalInst)=="string"&&(ke=be.globalInst,Ee())?bindGlobalReport(ke):(be==null?void 0:be.mirror)!==!1&&window.biliMirror?mirrorReport:(ke="__biliMirrorPbInstance__",Ee()?bindGlobalReport(ke):noopReport)},useReport=function(be,$e,ke,Ee){return useReportFunc()(be,$e,ke,Ee)},loadRequest=function(be){if(window.Unios)return Promise.resolve(window.Unios);var $e=window.__LOAD_REQUEST_TYPE__||be||"web";return loadScript("//s1.hdslb.com/bfs/seed/jinkela/short/unios/"+$e+".min.js",{lib:"Unios"})},useRequest=function(be){try{return window.Unios?Promise.resolve(window.Unios.request(be)):Promise.resolve(loadRequest()).then(function(){return window.Unios.request(be)})}catch($e){return Promise.reject($e)}},loadToast=function(){try{return window.BToast?Promise.resolve(window.BToast):Promise.resolve(loadScript("//s1.hdslb.com/bfs/seed/jinkela/short/webui/toast/index.js",{lib:"BToast"}))}catch(be){return Promise.reject(be)}},useToast=function(be,$e,ke){try{return window.BToast?Promise.resolve(window.BToast.show(be,$e,ke)):Promise.resolve(loadToast()).then(function(){return window.BToast.show(be,$e,ke)})}catch(Ee){return Promise.reject(Ee)}};function x$1(){let ge=window.__BILI_EMOJI_PICKER_DATA_TASK__;return ge&&ge instanceof Promise||(ge=new Promise((be,$e)=>{useRequest({url:"//api.bilibili.com/x/emote/user/panel/web",params:{business:"reply"}}).then(ke=>{if(ke.code!==0||!ke.data)return delete window.__BILI_EMOJI_PICKER_DATA_TASK__,$e(new Error(ke.message||"get emoji data error"));be(ke.data)}).catch($e)}),window.__BILI_EMOJI_PICKER_DATA_TASK__=ge),ge}var f$2=Object.defineProperty,w$2=Object.getOwnPropertyDescriptor,n$1=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?w$2(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&f$2(be,$e,Ee),Ee};let r$3=class extends s$4{constructor(){super(...arguments),this.pageCount=5,this.packages=[],this.contentLoading=!1,this.currentIdx=0}get currentPage(){return Math.floor(this.currentIdx/this.pageCount)}get isFirstPage(){return this.currentPage===0}get isLastPage(){const ge=Math.floor(this.packages.length/this.pageCount)+(this.packages.length%this.pageCount?1:0);return this.currentPage===ge-1}get currentPackage(){return this.packages.length&&this.packages[this.currentIdx]||null}connectedCallback(){super.connectedCallback(),this.initData()}async initData(){try{const{packages:ge}=await x$1();this.packages=ge}catch(ge){console.warn(ge)}}setTab(ge){if(ge>this.packages.length-1||ge<0)return;this.contentLoading=!0,this.currentIdx=ge;const be=Math.floor(ge/this.pageCount);this.shadowRoot.querySelector("#tabs-track").style.setProperty("transform",`translateX(${-be*100}%)`),window.setTimeout(()=>{this.contentLoading=!1},200)}handlePrev(){this.isFirstPage||this.setTab(this.currentPage*this.pageCount-1)}handleNext(){this.isLastPage||this.setTab((this.currentPage+1)*this.pageCount)}handleSelect(ge){this.dispatchEvent(new CustomEvent("select",{detail:ge}))}emojiRenderer(ge){const{type:be,meta:$e,text:ke,url:Ee,gif_url:Ce,webp_url:Te}=ge;if(be===4)return x$2`<div
        class="emoji text"
        @click=${()=>{this.handleSelect(ge)}}
      >
        ${ke}
      </div>`;const Se=$e.size===1?24:56,Ke=utils$2.getBmgSrcNext(Te||Ce||Ee,{w:Se,h:Se,dpr:2});return x$2`<div
      class="emoji img"
      style="height:${Se}px"
      @click=${()=>{this.handleSelect(ge)}}
    >
      <img width="${Se}" height="${Se}" src="${Ke}" alt="${ke}" />
    </div>`}contentTemplate(){return x$2`<div id="content">${this.currentPackage.emote.map(ge=>this.emojiRenderer(ge))}</div>`}render(){return x$2`<div id="picker">
      <div id="header">${this.currentPackage?this.currentPackage.text:"\u8868\u60C5"}</div>
      <div id="body">${this.currentPackage&&!this.contentLoading?this.contentTemplate():x$2`<div id="spinner">加载中...</div>`}</div>
      <div id="footer">
        <div id="tabs">
          <div
            id="tabs-track"
            style="${o$3({transform:`translateX(${-this.currentPage*58*this.pageCount}px)`})}"
          >
            ${this.packages.map((ge,be)=>x$2`<div
                class="${this.currentIdx===be?"tab active":"tab"}"
                @click=${()=>{this.setTab(be)}}
              >
                <img
                  width="22"
                  height="22"
                  src="${utils$2.getBmgSrcNext(ge.url,{w:22,h:22})}"
                  alt="${ge.text}"
                />
              </div>`)}
          </div>
        </div>
        <div id="nav">
          <button
            class="${this.isFirstPage?"disabled":""}"
            @click=${()=>{this.handlePrev()}}
          >
            <bili-icon size="16" icon="BDC/arrow_back_left_line/3"></bili-icon>
          </button>
          <button
            class="${this.isLastPage?"disabled":""}"
            @click=${()=>{this.handleNext()}}
          >
            <bili-icon size="16" icon="BDC/arrow_forward_right_line/3"></bili-icon>
          </button>
        </div>
      </div>
    </div>`}};r$3.styles=i$6`
    :host {
      --bili-emoji-picker-tab-count: 5;
      --bili-emoji-picker-tab-width: 58px;
      --bili-emoji-picker-nav-width: 73px;
      --bili-emoji-picker-body-height: 196px;
    }
    #picker {
      width: calc(var(--bili-emoji-picker-tab-width) * var(--bili-emoji-picker-tab-count) + var(--bili-emoji-picker-nav-width));
      font-size: 12px;
      color: var(--text2);
      overflow: hidden;
      background-color: var(--bg1);
      border: 1px solid var(--graph_bg_thick);
      border-radius: 8px;
      box-sizing: border-box;
    }

    #header {
      padding: 13px 15px 6px;
      box-sizing: border-box;
    }
    #body {
      height: var(--bili-emoji-picker-body-height);
    }
    #spinner {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    #content {
      height: 100%;
      padding: 0 11px;
      background-color: var(--bg1);
      overflow: auto;
    }
    #content::-webkit-scrollbar {
      width: 4px;
      border-radius: 4px;
      background-color: transparent;
    }
    #content::-webkit-scrollbar-thumb {
      border-radius: 4px;
      border-radius: 4px;
      background-color: var(--graph_bg_thick);
      transition: 0.3s ease-in-out;
    }
    #content::-webkit-scrollbar-track {
      border-radius: 4px;
      background-color: transparent;
    }
    #content .emoji {
      display: inline-block;
      border-radius: 4px;
      cursor: pointer;
    }
    #content .emoji:hover {
      background-color: var(--graph_bg_thick);
    }
    #content .emoji.img {
      box-sizing: content-box;
      padding: 4px;
    }
    #content .emoji.text {
      padding: 5px 8px;
      line-height: 22px;
    }
    #footer {
      background-color: var(--bg3);
      box-sizing: border-box;
      height: 36px;
      display: flex;
    }
    #tabs {
      height: 100%;
      width: calc(100% - var(--bili-emoji-picker-nav-width));
      overflow: hidden;
    }
    #tabs-track {
      transition: transform 0.3s ease-in-out;
      transform: translateX(0);
      display: flex;
      flex-wrap: no-wrap;
      height: 100%;
    }
    .tab {
      height: 100%;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: var(--bili-emoji-picker-tab-width);
      height: 100%;
      cursor: pointer;
    }
    .tab:hover {
      background-color: var(--graph_bg_thick);
    }
    .tab.active {
      background-color: var(--bg1);
    }
    #nav {
      height: 100%;
      width: var(--bili-emoji-picker-nav-width);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    #nav button {
      width: 36px;
      height: 100%;
      color: var(--text2);
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: color 0.2s;
    }
    #nav button.disabled {
      color: var(--text4);
    }
  `;n$1([t$1()],r$3.prototype,"packages",2);n$1([t$1()],r$3.prototype,"contentLoading",2);n$1([t$1()],r$3.prototype,"currentIdx",2);n$1([t$1()],r$3.prototype,"currentPage",1);n$1([t$1()],r$3.prototype,"isFirstPage",1);n$1([t$1()],r$3.prototype,"isLastPage",1);n$1([t$1()],r$3.prototype,"currentPackage",1);r$3=n$1([e$5("bili-emoji-picker")],r$3);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ot$1=function(ge,be){return(ot$1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function($e,ke){$e.__proto__=ke}||function($e,ke){for(var Ee in ke)Object.prototype.hasOwnProperty.call(ke,Ee)&&($e[Ee]=ke[Ee])})(ge,be)};function at$2(ge,be){if(typeof be!="function"&&be!==null)throw new TypeError("Class extends value "+String(be)+" is not a constructor or null");function $e(){this.constructor=ge}ot$1(ge,be),ge.prototype=be===null?Object.create(be):($e.prototype=be.prototype,new $e)}function lt$1(ge){var be="";Array.isArray(ge)||(ge=[ge]);for(var $e=0;$e<ge.length;$e++){var ke=ge[$e];if(ke.type===m$2.CLOSE_PATH)be+="z";else if(ke.type===m$2.HORIZ_LINE_TO)be+=(ke.relative?"h":"H")+ke.x;else if(ke.type===m$2.VERT_LINE_TO)be+=(ke.relative?"v":"V")+ke.y;else if(ke.type===m$2.MOVE_TO)be+=(ke.relative?"m":"M")+ke.x+" "+ke.y;else if(ke.type===m$2.LINE_TO)be+=(ke.relative?"l":"L")+ke.x+" "+ke.y;else if(ke.type===m$2.CURVE_TO)be+=(ke.relative?"c":"C")+ke.x1+" "+ke.y1+" "+ke.x2+" "+ke.y2+" "+ke.x+" "+ke.y;else if(ke.type===m$2.SMOOTH_CURVE_TO)be+=(ke.relative?"s":"S")+ke.x2+" "+ke.y2+" "+ke.x+" "+ke.y;else if(ke.type===m$2.QUAD_TO)be+=(ke.relative?"q":"Q")+ke.x1+" "+ke.y1+" "+ke.x+" "+ke.y;else if(ke.type===m$2.SMOOTH_QUAD_TO)be+=(ke.relative?"t":"T")+ke.x+" "+ke.y;else{if(ke.type!==m$2.ARC)throw new Error('Unexpected command type "'+ke.type+'" at index '+$e+".");be+=(ke.relative?"a":"A")+ke.rX+" "+ke.rY+" "+ke.xRot+" "+ +ke.lArcFlag+" "+ +ke.sweepFlag+" "+ke.x+" "+ke.y}}return be}function W$2(ge,be){var $e=ge[0],ke=ge[1];return[$e*Math.cos(be)-ke*Math.sin(be),$e*Math.sin(be)+ke*Math.cos(be)]}function b$4(){for(var ge=[],be=0;be<arguments.length;be++)ge[be]=arguments[be];for(var $e=0;$e<ge.length;$e++)if(typeof ge[$e]!="number")throw new Error("assertNumbers arguments["+$e+"] is not a number. "+typeof ge[$e]+" == typeof "+ge[$e]);return!0}var z$2=Math.PI;function $$2(ge,be,$e){ge.lArcFlag=ge.lArcFlag===0?0:1,ge.sweepFlag=ge.sweepFlag===0?0:1;var ke=ge.rX,Ee=ge.rY,Ce=ge.x,Te=ge.y;ke=Math.abs(ge.rX),Ee=Math.abs(ge.rY);var Se=W$2([(be-Ce)/2,($e-Te)/2],-ge.xRot/180*z$2),Ke=Se[0],Je=Se[1],mt=Math.pow(Ke,2)/Math.pow(ke,2)+Math.pow(Je,2)/Math.pow(Ee,2);1<mt&&(ke*=Math.sqrt(mt),Ee*=Math.sqrt(mt)),ge.rX=ke,ge.rY=Ee;var bt=Math.pow(ke,2)*Math.pow(Je,2)+Math.pow(Ee,2)*Math.pow(Ke,2),$t=(ge.lArcFlag!==ge.sweepFlag?1:-1)*Math.sqrt(Math.max(0,(Math.pow(ke,2)*Math.pow(Ee,2)-bt)/bt)),St=ke*Je/Ee*$t,It=-Ee*Ke/ke*$t,Bt=W$2([St,It],ge.xRot/180*z$2);ge.cX=Bt[0]+(be+Ce)/2,ge.cY=Bt[1]+($e+Te)/2,ge.phi1=Math.atan2((Je-It)/Ee,(Ke-St)/ke),ge.phi2=Math.atan2((-Je-It)/Ee,(-Ke-St)/ke),ge.sweepFlag===0&&ge.phi2>ge.phi1&&(ge.phi2-=2*z$2),ge.sweepFlag===1&&ge.phi2<ge.phi1&&(ge.phi2+=2*z$2),ge.phi1*=180/z$2,ge.phi2*=180/z$2}function J$1(ge,be,$e){b$4(ge,be,$e);var ke=ge*ge+be*be-$e*$e;if(0>ke)return[];if(ke===0)return[[ge*$e/(ge*ge+be*be),be*$e/(ge*ge+be*be)]];var Ee=Math.sqrt(ke);return[[(ge*$e+be*Ee)/(ge*ge+be*be),(be*$e-ge*Ee)/(ge*ge+be*be)],[(ge*$e-be*Ee)/(ge*ge+be*be),(be*$e+ge*Ee)/(ge*ge+be*be)]]}var A,P$2=Math.PI/180;function tt$1(ge,be,$e){return(1-$e)*ge+$e*be}function et$1(ge,be,$e,ke){return ge+Math.cos(ke/180*z$2)*be+Math.sin(ke/180*z$2)*$e}function rt$1(ge,be,$e,ke){var Ee=1e-6,Ce=be-ge,Te=$e-be,Se=3*Ce+3*(ke-$e)-6*Te,Ke=6*(Te-Ce),Je=3*Ce;return Math.abs(Se)<Ee?[-Je/Ke]:function(mt,bt,$t){$t===void 0&&($t=1e-6);var St=mt*mt/4-bt;if(St<-$t)return[];if(St<=$t)return[-mt/2];var It=Math.sqrt(St);return[-mt/2-It,-mt/2+It]}(Ke/Se,Je/Se,Ee)}function it$1(ge,be,$e,ke,Ee){var Ce=1-Ee;return ge*(Ce*Ce*Ce)+be*(3*Ce*Ce*Ee)+$e*(3*Ce*Ee*Ee)+ke*(Ee*Ee*Ee)}(function(ge){function be(){return Ee(function(Se,Ke,Je){return Se.relative&&(Se.x1!==void 0&&(Se.x1+=Ke),Se.y1!==void 0&&(Se.y1+=Je),Se.x2!==void 0&&(Se.x2+=Ke),Se.y2!==void 0&&(Se.y2+=Je),Se.x!==void 0&&(Se.x+=Ke),Se.y!==void 0&&(Se.y+=Je),Se.relative=!1),Se})}function $e(){var Se=NaN,Ke=NaN,Je=NaN,mt=NaN;return Ee(function(bt,$t,St){return bt.type&m$2.SMOOTH_CURVE_TO&&(bt.type=m$2.CURVE_TO,Se=isNaN(Se)?$t:Se,Ke=isNaN(Ke)?St:Ke,bt.x1=bt.relative?$t-Se:2*$t-Se,bt.y1=bt.relative?St-Ke:2*St-Ke),bt.type&m$2.CURVE_TO?(Se=bt.relative?$t+bt.x2:bt.x2,Ke=bt.relative?St+bt.y2:bt.y2):(Se=NaN,Ke=NaN),bt.type&m$2.SMOOTH_QUAD_TO&&(bt.type=m$2.QUAD_TO,Je=isNaN(Je)?$t:Je,mt=isNaN(mt)?St:mt,bt.x1=bt.relative?$t-Je:2*$t-Je,bt.y1=bt.relative?St-mt:2*St-mt),bt.type&m$2.QUAD_TO?(Je=bt.relative?$t+bt.x1:bt.x1,mt=bt.relative?St+bt.y1:bt.y1):(Je=NaN,mt=NaN),bt})}function ke(){var Se=NaN,Ke=NaN;return Ee(function(Je,mt,bt){if(Je.type&m$2.SMOOTH_QUAD_TO&&(Je.type=m$2.QUAD_TO,Se=isNaN(Se)?mt:Se,Ke=isNaN(Ke)?bt:Ke,Je.x1=Je.relative?mt-Se:2*mt-Se,Je.y1=Je.relative?bt-Ke:2*bt-Ke),Je.type&m$2.QUAD_TO){Se=Je.relative?mt+Je.x1:Je.x1,Ke=Je.relative?bt+Je.y1:Je.y1;var $t=Je.x1,St=Je.y1;Je.type=m$2.CURVE_TO,Je.x1=((Je.relative?0:mt)+2*$t)/3,Je.y1=((Je.relative?0:bt)+2*St)/3,Je.x2=(Je.x+2*$t)/3,Je.y2=(Je.y+2*St)/3}else Se=NaN,Ke=NaN;return Je})}function Ee(Se){var Ke=0,Je=0,mt=NaN,bt=NaN;return function($t){if(isNaN(mt)&&!($t.type&m$2.MOVE_TO))throw new Error("path must start with moveto");var St=Se($t,Ke,Je,mt,bt);return $t.type&m$2.CLOSE_PATH&&(Ke=mt,Je=bt),$t.x!==void 0&&(Ke=$t.relative?Ke+$t.x:$t.x),$t.y!==void 0&&(Je=$t.relative?Je+$t.y:$t.y),$t.type&m$2.MOVE_TO&&(mt=Ke,bt=Je),St}}function Ce(Se,Ke,Je,mt,bt,$t){return b$4(Se,Ke,Je,mt,bt,$t),Ee(function(St,It,Bt,Dt){var jt=St.x1,zt=St.x2,en=St.relative&&!isNaN(Dt),qt=St.x!==void 0?St.x:en?0:It,vo=St.y!==void 0?St.y:en?0:Bt;function yo(pu){return pu*pu}St.type&m$2.HORIZ_LINE_TO&&Ke!==0&&(St.type=m$2.LINE_TO,St.y=St.relative?0:Bt),St.type&m$2.VERT_LINE_TO&&Je!==0&&(St.type=m$2.LINE_TO,St.x=St.relative?0:It),St.x!==void 0&&(St.x=St.x*Se+vo*Je+(en?0:bt)),St.y!==void 0&&(St.y=qt*Ke+St.y*mt+(en?0:$t)),St.x1!==void 0&&(St.x1=St.x1*Se+St.y1*Je+(en?0:bt)),St.y1!==void 0&&(St.y1=jt*Ke+St.y1*mt+(en?0:$t)),St.x2!==void 0&&(St.x2=St.x2*Se+St.y2*Je+(en?0:bt)),St.y2!==void 0&&(St.y2=zt*Ke+St.y2*mt+(en?0:$t));var fo=Se*mt-Ke*Je;if(St.xRot!==void 0&&(Se!==1||Ke!==0||Je!==0||mt!==1))if(fo===0)delete St.rX,delete St.rY,delete St.xRot,delete St.lArcFlag,delete St.sweepFlag,St.type=m$2.LINE_TO;else{var bo=St.xRot*Math.PI/180,Ar=Math.sin(bo),fs=Math.cos(bo),ms=1/yo(St.rX),go=1/yo(St.rY),wo=yo(fs)*ms+yo(Ar)*go,ir=2*Ar*fs*(ms-go),bs=yo(Ar)*ms+yo(fs)*go,xs=wo*mt*mt-ir*Ke*mt+bs*Ke*Ke,ks=ir*(Se*mt+Ke*Je)-2*(wo*Je*mt+bs*Se*Ke),fu=wo*Je*Je-ir*Se*Je+bs*Se*Se,_s=(Math.atan2(ks,xs-fu)+Math.PI)%Math.PI/2,nu=Math.sin(_s),du=Math.cos(_s);St.rX=Math.abs(fo)/Math.sqrt(xs*yo(du)+ks*nu*du+fu*yo(nu)),St.rY=Math.abs(fo)/Math.sqrt(xs*yo(nu)-ks*nu*du+fu*yo(du)),St.xRot=180*_s/Math.PI}return St.sweepFlag!==void 0&&0>fo&&(St.sweepFlag=+!St.sweepFlag),St})}function Te(){return function(Se){var Ke={};for(var Je in Se)Ke[Je]=Se[Je];return Ke}}ge.ROUND=function(Se){function Ke(Je){return Math.round(Je*Se)/Se}return Se===void 0&&(Se=1e13),b$4(Se),function(Je){return Je.x1!==void 0&&(Je.x1=Ke(Je.x1)),Je.y1!==void 0&&(Je.y1=Ke(Je.y1)),Je.x2!==void 0&&(Je.x2=Ke(Je.x2)),Je.y2!==void 0&&(Je.y2=Ke(Je.y2)),Je.x!==void 0&&(Je.x=Ke(Je.x)),Je.y!==void 0&&(Je.y=Ke(Je.y)),Je.rX!==void 0&&(Je.rX=Ke(Je.rX)),Je.rY!==void 0&&(Je.rY=Ke(Je.rY)),Je}},ge.TO_ABS=be,ge.TO_REL=function(){return Ee(function(Se,Ke,Je){return Se.relative||(Se.x1!==void 0&&(Se.x1-=Ke),Se.y1!==void 0&&(Se.y1-=Je),Se.x2!==void 0&&(Se.x2-=Ke),Se.y2!==void 0&&(Se.y2-=Je),Se.x!==void 0&&(Se.x-=Ke),Se.y!==void 0&&(Se.y-=Je),Se.relative=!0),Se})},ge.NORMALIZE_HVZ=function(Se,Ke,Je){return Se===void 0&&(Se=!0),Ke===void 0&&(Ke=!0),Je===void 0&&(Je=!0),Ee(function(mt,bt,$t,St,It){if(isNaN(St)&&!(mt.type&m$2.MOVE_TO))throw new Error("path must start with moveto");return Ke&&mt.type&m$2.HORIZ_LINE_TO&&(mt.type=m$2.LINE_TO,mt.y=mt.relative?0:$t),Je&&mt.type&m$2.VERT_LINE_TO&&(mt.type=m$2.LINE_TO,mt.x=mt.relative?0:bt),Se&&mt.type&m$2.CLOSE_PATH&&(mt.type=m$2.LINE_TO,mt.x=mt.relative?St-bt:St,mt.y=mt.relative?It-$t:It),mt.type&m$2.ARC&&(mt.rX===0||mt.rY===0)&&(mt.type=m$2.LINE_TO,delete mt.rX,delete mt.rY,delete mt.xRot,delete mt.lArcFlag,delete mt.sweepFlag),mt})},ge.NORMALIZE_ST=$e,ge.QT_TO_C=ke,ge.INFO=Ee,ge.SANITIZE=function(Se){Se===void 0&&(Se=0),b$4(Se);var Ke=NaN,Je=NaN,mt=NaN,bt=NaN;return Ee(function($t,St,It,Bt,Dt){var jt=Math.abs,zt=!1,en=0,qt=0;if($t.type&m$2.SMOOTH_CURVE_TO&&(en=isNaN(Ke)?0:St-Ke,qt=isNaN(Je)?0:It-Je),$t.type&(m$2.CURVE_TO|m$2.SMOOTH_CURVE_TO)?(Ke=$t.relative?St+$t.x2:$t.x2,Je=$t.relative?It+$t.y2:$t.y2):(Ke=NaN,Je=NaN),$t.type&m$2.SMOOTH_QUAD_TO?(mt=isNaN(mt)?St:2*St-mt,bt=isNaN(bt)?It:2*It-bt):$t.type&m$2.QUAD_TO?(mt=$t.relative?St+$t.x1:$t.x1,bt=$t.relative?It+$t.y1:$t.y2):(mt=NaN,bt=NaN),$t.type&m$2.LINE_COMMANDS||$t.type&m$2.ARC&&($t.rX===0||$t.rY===0||!$t.lArcFlag)||$t.type&m$2.CURVE_TO||$t.type&m$2.SMOOTH_CURVE_TO||$t.type&m$2.QUAD_TO||$t.type&m$2.SMOOTH_QUAD_TO){var vo=$t.x===void 0?0:$t.relative?$t.x:$t.x-St,yo=$t.y===void 0?0:$t.relative?$t.y:$t.y-It;en=isNaN(mt)?$t.x1===void 0?en:$t.relative?$t.x:$t.x1-St:mt-St,qt=isNaN(bt)?$t.y1===void 0?qt:$t.relative?$t.y:$t.y1-It:bt-It;var fo=$t.x2===void 0?0:$t.relative?$t.x:$t.x2-St,bo=$t.y2===void 0?0:$t.relative?$t.y:$t.y2-It;jt(vo)<=Se&&jt(yo)<=Se&&jt(en)<=Se&&jt(qt)<=Se&&jt(fo)<=Se&&jt(bo)<=Se&&(zt=!0)}return $t.type&m$2.CLOSE_PATH&&jt(St-Bt)<=Se&&jt(It-Dt)<=Se&&(zt=!0),zt?[]:$t})},ge.MATRIX=Ce,ge.ROTATE=function(Se,Ke,Je){Ke===void 0&&(Ke=0),Je===void 0&&(Je=0),b$4(Se,Ke,Je);var mt=Math.sin(Se),bt=Math.cos(Se);return Ce(bt,mt,-mt,bt,Ke-Ke*bt+Je*mt,Je-Ke*mt-Je*bt)},ge.TRANSLATE=function(Se,Ke){return Ke===void 0&&(Ke=0),b$4(Se,Ke),Ce(1,0,0,1,Se,Ke)},ge.SCALE=function(Se,Ke){return Ke===void 0&&(Ke=Se),b$4(Se,Ke),Ce(Se,0,0,Ke,0,0)},ge.SKEW_X=function(Se){return b$4(Se),Ce(1,0,Math.atan(Se),1,0,0)},ge.SKEW_Y=function(Se){return b$4(Se),Ce(1,Math.atan(Se),0,1,0,0)},ge.X_AXIS_SYMMETRY=function(Se){return Se===void 0&&(Se=0),b$4(Se),Ce(-1,0,0,1,Se,0)},ge.Y_AXIS_SYMMETRY=function(Se){return Se===void 0&&(Se=0),b$4(Se),Ce(1,0,0,-1,0,Se)},ge.A_TO_C=function(){return Ee(function(Se,Ke,Je){return m$2.ARC===Se.type?function(mt,bt,$t){var St,It,Bt,Dt;mt.cX||$$2(mt,bt,$t);for(var jt=Math.min(mt.phi1,mt.phi2),zt=Math.max(mt.phi1,mt.phi2)-jt,en=Math.ceil(zt/90),qt=new Array(en),vo=bt,yo=$t,fo=0;fo<en;fo++){var bo=tt$1(mt.phi1,mt.phi2,fo/en),Ar=tt$1(mt.phi1,mt.phi2,(fo+1)/en),fs=Ar-bo,ms=4/3*Math.tan(fs*P$2/4),go=[Math.cos(bo*P$2)-ms*Math.sin(bo*P$2),Math.sin(bo*P$2)+ms*Math.cos(bo*P$2)],wo=go[0],ir=go[1],bs=[Math.cos(Ar*P$2),Math.sin(Ar*P$2)],xs=bs[0],ks=bs[1],fu=[xs+ms*Math.sin(Ar*P$2),ks-ms*Math.cos(Ar*P$2)],_s=fu[0],nu=fu[1];qt[fo]={relative:mt.relative,type:m$2.CURVE_TO};var du=function(pu,uu){var vs=W$2([pu*mt.rX,uu*mt.rY],mt.xRot),tu=vs[0],ru=vs[1];return[mt.cX+tu,mt.cY+ru]};St=du(wo,ir),qt[fo].x1=St[0],qt[fo].y1=St[1],It=du(_s,nu),qt[fo].x2=It[0],qt[fo].y2=It[1],Bt=du(xs,ks),qt[fo].x=Bt[0],qt[fo].y=Bt[1],mt.relative&&(qt[fo].x1-=vo,qt[fo].y1-=yo,qt[fo].x2-=vo,qt[fo].y2-=yo,qt[fo].x-=vo,qt[fo].y-=yo),vo=(Dt=[qt[fo].x,qt[fo].y])[0],yo=Dt[1]}return qt}(Se,Se.relative?0:Ke,Se.relative?0:Je):Se})},ge.ANNOTATE_ARCS=function(){return Ee(function(Se,Ke,Je){return Se.relative&&(Ke=0,Je=0),m$2.ARC===Se.type&&$$2(Se,Ke,Je),Se})},ge.CLONE=Te,ge.CALCULATE_BOUNDS=function(){var Se=function($t){var St={};for(var It in $t)St[It]=$t[It];return St},Ke=be(),Je=ke(),mt=$e(),bt=Ee(function($t,St,It){var Bt=mt(Je(Ke(Se($t))));function Dt(nu){nu>bt.maxX&&(bt.maxX=nu),nu<bt.minX&&(bt.minX=nu)}function jt(nu){nu>bt.maxY&&(bt.maxY=nu),nu<bt.minY&&(bt.minY=nu)}if(Bt.type&m$2.DRAWING_COMMANDS&&(Dt(St),jt(It)),Bt.type&m$2.HORIZ_LINE_TO&&Dt(Bt.x),Bt.type&m$2.VERT_LINE_TO&&jt(Bt.y),Bt.type&m$2.LINE_TO&&(Dt(Bt.x),jt(Bt.y)),Bt.type&m$2.CURVE_TO){Dt(Bt.x),jt(Bt.y);for(var zt=0,en=rt$1(St,Bt.x1,Bt.x2,Bt.x);zt<en.length;zt++)0<(_s=en[zt])&&1>_s&&Dt(it$1(St,Bt.x1,Bt.x2,Bt.x,_s));for(var qt=0,vo=rt$1(It,Bt.y1,Bt.y2,Bt.y);qt<vo.length;qt++)0<(_s=vo[qt])&&1>_s&&jt(it$1(It,Bt.y1,Bt.y2,Bt.y,_s))}if(Bt.type&m$2.ARC){Dt(Bt.x),jt(Bt.y),$$2(Bt,St,It);for(var yo=Bt.xRot/180*Math.PI,fo=Math.cos(yo)*Bt.rX,bo=Math.sin(yo)*Bt.rX,Ar=-Math.sin(yo)*Bt.rY,fs=Math.cos(yo)*Bt.rY,ms=Bt.phi1<Bt.phi2?[Bt.phi1,Bt.phi2]:-180>Bt.phi2?[Bt.phi2+360,Bt.phi1+360]:[Bt.phi2,Bt.phi1],go=ms[0],wo=ms[1],ir=function(nu){var du=nu[0],pu=nu[1],uu=180*Math.atan2(pu,du)/Math.PI;return uu<go?uu+360:uu},bs=0,xs=J$1(Ar,-fo,0).map(ir);bs<xs.length;bs++)(_s=xs[bs])>go&&_s<wo&&Dt(et$1(Bt.cX,fo,Ar,_s));for(var ks=0,fu=J$1(fs,-bo,0).map(ir);ks<fu.length;ks++){var _s;(_s=fu[ks])>go&&_s<wo&&jt(et$1(Bt.cY,bo,fs,_s))}}return $t});return bt.minX=1/0,bt.maxX=-1/0,bt.minY=1/0,bt.maxY=-1/0,bt}})(A||(A={}));var I$1,ct$1=function(){function ge(){}return ge.prototype.round=function(be){return this.transform(A.ROUND(be))},ge.prototype.toAbs=function(){return this.transform(A.TO_ABS())},ge.prototype.toRel=function(){return this.transform(A.TO_REL())},ge.prototype.normalizeHVZ=function(be,$e,ke){return this.transform(A.NORMALIZE_HVZ(be,$e,ke))},ge.prototype.normalizeST=function(){return this.transform(A.NORMALIZE_ST())},ge.prototype.qtToC=function(){return this.transform(A.QT_TO_C())},ge.prototype.aToC=function(){return this.transform(A.A_TO_C())},ge.prototype.sanitize=function(be){return this.transform(A.SANITIZE(be))},ge.prototype.translate=function(be,$e){return this.transform(A.TRANSLATE(be,$e))},ge.prototype.scale=function(be,$e){return this.transform(A.SCALE(be,$e))},ge.prototype.rotate=function(be,$e,ke){return this.transform(A.ROTATE(be,$e,ke))},ge.prototype.matrix=function(be,$e,ke,Ee,Ce,Te){return this.transform(A.MATRIX(be,$e,ke,Ee,Ce,Te))},ge.prototype.skewX=function(be){return this.transform(A.SKEW_X(be))},ge.prototype.skewY=function(be){return this.transform(A.SKEW_Y(be))},ge.prototype.xSymmetry=function(be){return this.transform(A.X_AXIS_SYMMETRY(be))},ge.prototype.ySymmetry=function(be){return this.transform(A.Y_AXIS_SYMMETRY(be))},ge.prototype.annotateArcs=function(){return this.transform(A.ANNOTATE_ARCS())},ge}(),yt=function(ge){return ge===" "||ge==="	"||ge==="\r"||ge===`
`},nt$1=function(ge){return"0".charCodeAt(0)<=ge.charCodeAt(0)&&ge.charCodeAt(0)<="9".charCodeAt(0)},ft$1=function(ge){function be(){var $e=ge.call(this)||this;return $e.curNumber="",$e.curCommandType=-1,$e.curCommandRelative=!1,$e.canParseCommandOrComma=!0,$e.curNumberHasExp=!1,$e.curNumberHasExpDigits=!1,$e.curNumberHasDecimal=!1,$e.curArgs=[],$e}return at$2(be,ge),be.prototype.finish=function($e){if($e===void 0&&($e=[]),this.parse(" ",$e),this.curArgs.length!==0||!this.canParseCommandOrComma)throw new SyntaxError("Unterminated command at the path end.");return $e},be.prototype.parse=function($e,ke){var Ee=this;ke===void 0&&(ke=[]);for(var Ce=function(bt){ke.push(bt),Ee.curArgs.length=0,Ee.canParseCommandOrComma=!0},Te=0;Te<$e.length;Te++){var Se=$e[Te],Ke=!(this.curCommandType!==m$2.ARC||this.curArgs.length!==3&&this.curArgs.length!==4||this.curNumber.length!==1||this.curNumber!=="0"&&this.curNumber!=="1"),Je=nt$1(Se)&&(this.curNumber==="0"&&Se==="0"||Ke);if(!nt$1(Se)||Je)if(Se!=="e"&&Se!=="E")if(Se!=="-"&&Se!=="+"||!this.curNumberHasExp||this.curNumberHasExpDigits)if(Se!=="."||this.curNumberHasExp||this.curNumberHasDecimal||Ke){if(this.curNumber&&this.curCommandType!==-1){var mt=Number(this.curNumber);if(isNaN(mt))throw new SyntaxError("Invalid number ending at "+Te);if(this.curCommandType===m$2.ARC){if(this.curArgs.length===0||this.curArgs.length===1){if(0>mt)throw new SyntaxError('Expected positive number, got "'+mt+'" at index "'+Te+'"')}else if((this.curArgs.length===3||this.curArgs.length===4)&&this.curNumber!=="0"&&this.curNumber!=="1")throw new SyntaxError('Expected a flag, got "'+this.curNumber+'" at index "'+Te+'"')}this.curArgs.push(mt),this.curArgs.length===_t$1[this.curCommandType]&&(m$2.HORIZ_LINE_TO===this.curCommandType?Ce({type:m$2.HORIZ_LINE_TO,relative:this.curCommandRelative,x:mt}):m$2.VERT_LINE_TO===this.curCommandType?Ce({type:m$2.VERT_LINE_TO,relative:this.curCommandRelative,y:mt}):this.curCommandType===m$2.MOVE_TO||this.curCommandType===m$2.LINE_TO||this.curCommandType===m$2.SMOOTH_QUAD_TO?(Ce({type:this.curCommandType,relative:this.curCommandRelative,x:this.curArgs[0],y:this.curArgs[1]}),m$2.MOVE_TO===this.curCommandType&&(this.curCommandType=m$2.LINE_TO)):this.curCommandType===m$2.CURVE_TO?Ce({type:m$2.CURVE_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x2:this.curArgs[2],y2:this.curArgs[3],x:this.curArgs[4],y:this.curArgs[5]}):this.curCommandType===m$2.SMOOTH_CURVE_TO?Ce({type:m$2.SMOOTH_CURVE_TO,relative:this.curCommandRelative,x2:this.curArgs[0],y2:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===m$2.QUAD_TO?Ce({type:m$2.QUAD_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===m$2.ARC&&Ce({type:m$2.ARC,relative:this.curCommandRelative,rX:this.curArgs[0],rY:this.curArgs[1],xRot:this.curArgs[2],lArcFlag:this.curArgs[3],sweepFlag:this.curArgs[4],x:this.curArgs[5],y:this.curArgs[6]})),this.curNumber="",this.curNumberHasExpDigits=!1,this.curNumberHasExp=!1,this.curNumberHasDecimal=!1,this.canParseCommandOrComma=!0}if(!yt(Se))if(Se===","&&this.canParseCommandOrComma)this.canParseCommandOrComma=!1;else if(Se!=="+"&&Se!=="-"&&Se!==".")if(Je)this.curNumber=Se,this.curNumberHasDecimal=!1;else{if(this.curArgs.length!==0)throw new SyntaxError("Unterminated command at index "+Te+".");if(!this.canParseCommandOrComma)throw new SyntaxError('Unexpected character "'+Se+'" at index '+Te+". Command cannot follow comma");if(this.canParseCommandOrComma=!1,Se!=="z"&&Se!=="Z")if(Se==="h"||Se==="H")this.curCommandType=m$2.HORIZ_LINE_TO,this.curCommandRelative=Se==="h";else if(Se==="v"||Se==="V")this.curCommandType=m$2.VERT_LINE_TO,this.curCommandRelative=Se==="v";else if(Se==="m"||Se==="M")this.curCommandType=m$2.MOVE_TO,this.curCommandRelative=Se==="m";else if(Se==="l"||Se==="L")this.curCommandType=m$2.LINE_TO,this.curCommandRelative=Se==="l";else if(Se==="c"||Se==="C")this.curCommandType=m$2.CURVE_TO,this.curCommandRelative=Se==="c";else if(Se==="s"||Se==="S")this.curCommandType=m$2.SMOOTH_CURVE_TO,this.curCommandRelative=Se==="s";else if(Se==="q"||Se==="Q")this.curCommandType=m$2.QUAD_TO,this.curCommandRelative=Se==="q";else if(Se==="t"||Se==="T")this.curCommandType=m$2.SMOOTH_QUAD_TO,this.curCommandRelative=Se==="t";else{if(Se!=="a"&&Se!=="A")throw new SyntaxError('Unexpected character "'+Se+'" at index '+Te+".");this.curCommandType=m$2.ARC,this.curCommandRelative=Se==="a"}else ke.push({type:m$2.CLOSE_PATH}),this.canParseCommandOrComma=!0,this.curCommandType=-1}else this.curNumber=Se,this.curNumberHasDecimal=Se==="."}else this.curNumber+=Se,this.curNumberHasDecimal=!0;else this.curNumber+=Se;else this.curNumber+=Se,this.curNumberHasExp=!0;else this.curNumber+=Se,this.curNumberHasExpDigits=this.curNumberHasExp}return ke},be.prototype.transform=function($e){return Object.create(this,{parse:{value:function(ke,Ee){Ee===void 0&&(Ee=[]);for(var Ce=0,Te=Object.getPrototypeOf(this).parse.call(this,ke);Ce<Te.length;Ce++){var Se=Te[Ce],Ke=$e(Se);Array.isArray(Ke)?Ee.push.apply(Ee,Ke):Ee.push(Ke)}return Ee}}})},be}(ct$1),m$2=function(ge){function be($e){var ke=ge.call(this)||this;return ke.commands=typeof $e=="string"?be.parse($e):$e,ke}return at$2(be,ge),be.prototype.encode=function(){return be.encode(this.commands)},be.prototype.getBounds=function(){var $e=A.CALCULATE_BOUNDS();return this.transform($e),$e},be.prototype.transform=function($e){for(var ke=[],Ee=0,Ce=this.commands;Ee<Ce.length;Ee++){var Te=$e(Ce[Ee]);Array.isArray(Te)?ke.push.apply(ke,Te):ke.push(Te)}return this.commands=ke,this},be.encode=function($e){return lt$1($e)},be.parse=function($e){var ke=new ft$1,Ee=[];return ke.parse($e,Ee),ke.finish(Ee),Ee},be.CLOSE_PATH=1,be.MOVE_TO=2,be.HORIZ_LINE_TO=4,be.VERT_LINE_TO=8,be.LINE_TO=16,be.CURVE_TO=32,be.SMOOTH_CURVE_TO=64,be.QUAD_TO=128,be.SMOOTH_QUAD_TO=256,be.ARC=512,be.LINE_COMMANDS=be.LINE_TO|be.HORIZ_LINE_TO|be.VERT_LINE_TO,be.DRAWING_COMMANDS=be.HORIZ_LINE_TO|be.VERT_LINE_TO|be.LINE_TO|be.CURVE_TO|be.SMOOTH_CURVE_TO|be.QUAD_TO|be.SMOOTH_QUAD_TO|be.ARC,be}(ct$1),_t$1=((I$1={})[m$2.MOVE_TO]=2,I$1[m$2.LINE_TO]=2,I$1[m$2.HORIZ_LINE_TO]=1,I$1[m$2.VERT_LINE_TO]=1,I$1[m$2.CLOSE_PATH]=0,I$1[m$2.QUAD_TO]=4,I$1[m$2.SMOOTH_QUAD_TO]=2,I$1[m$2.CURVE_TO]=6,I$1[m$2.SMOOTH_CURVE_TO]=4,I$1[m$2.ARC]=7,I$1);const G$2={},dt$1=(ge,be,$e)=>{if(ge.type!==be.type)throw new Error("Cannot diff between different command types");const ke=ge,Ee=be,Ce={};return["x","y","x1","y1","x2","y2"].forEach(Te=>{ke[Te]!==void 0&&Ee[Te]!==void 0&&(Ce[Te]=(Ee[Te]-ke[Te])*$e)}),Ce},Ot=(ge,be,$e)=>{const ke=[];return ge.commands.forEach((Ee,Ce)=>{ke.push(dt$1(Ee,be.commands[Ce],$e))}),ke},Tt$1=(ge,be)=>{const $e=new m$2(ge.encode());for(const ke of be)ke.length!==0&&$e.commands.forEach((Ee,Ce)=>{Object.keys(ke[Ce]).forEach(Te=>{Ee[Te]=Ee[Te]+ke[Ce][Te]})});return $e},st$1=(ge,be,$e)=>{const ke=be.max-be.min,Ee=$e.max-$e.min,Ce=(ge-be.min)/ke;return $e.min+Ce*Ee},K$1=(ge,be,$e)=>{let ke=ge;for(let Ee=0;Ee<be.length;Ee++){const Ce=be[Ee];if(Ee===be.length-1){ke[Ce]=$e;return}else ke[Ce]||(ke[Ce]={});ke=ke[Ce]}},ut$1=async ge=>typeof window.fetch=="function"?fetch(ge).then(be=>be.json()):new Promise((be,$e)=>{const ke=new XMLHttpRequest;ke.addEventListener("load",()=>{try{be(JSON.parse(ke.responseText))}catch(Ee){$e(Ee)}}),ke.onerror=$e,ke.open("GET",ge),ke.send()}),vt=async({category:ge,url:be,json:$e})=>{let ke=null;if($e)if(typeof $e=="string")try{ke=JSON.parse($e)}catch{}else typeof $e=="object"&&(ke=$e);if(!ke&&be)try{ke=await ut$1(be)}catch(Ce){console.error(Ce);return}if(!ke)return;const Ee=(Ce,Te,Se=0)=>{if(Se<=0)return Ce;for(const Ke in Te)Ce[Ke]?Ce[Ke]=Ee(Ce[Ke],Te[Ke],Se-1):Ce[Ke]=Te[Ke];return Ce};ge?Y$1[ge]=Ee(Y$1[ge]||{},ke,2):Object.keys(ke).map(Ce=>{Y$1[Ce]=Ee(Y$1[Ce]||{},ke[Ce],2)})},ht$1=[],Nt$1=async ge=>{const be=Promise.all(ge.map(vt));ht$1.push(be),await be},xt$1=async ge=>{var be,$e,ke,Ee,Ce,Te,Se,Ke,Je,mt,bt,$t;if(typeof window>"u")return Promise.resolve(null);const St=ge.icon.split("/"),[It,Bt,Dt]=St;if(!It||!Bt||!Dt)throw new Error("SVGIconNext: invalid icon option");try{await Promise.all(ht$1)}catch{}if(($e=(be=Y$1[It])==null?void 0:be[Bt])!=null&&$e[Dt])return(Ee=(ke=Y$1[It])==null?void 0:ke[Bt])==null?void 0:Ee[Dt];if((Te=(Ce=G$2[It])==null?void 0:Ce[Bt])!=null&&Te[Dt])return(Ke=(Se=G$2[It])==null?void 0:Se[Bt])==null?void 0:Ke[Dt];try{const jt=ut$1(`//i0.hdslb.com/bfs/svg-next/${It}/${Bt}/v${Dt}.json`);K$1(G$2,St,jt),K$1(Y$1,St,await((mt=(Je=G$2[It])==null?void 0:Je[Bt])==null?void 0:mt[Dt]))}catch{throw K$1(G$2,St,null),new Error("SVGIconNext: fetch icon config failed")}return($t=(bt=Y$1[It])==null?void 0:bt[Bt])==null?void 0:$t[Dt]},At$1=ge=>{const be=[24,24];return Array.isArray(ge.size)?(be[0]=ge.size[0],be[1]=ge.size[1]):typeof ge.size=="number"&&!Number.isNaN(be)&&(be[0]=ge.size,be[1]=ge.size),be},Et$1=(ge,be)=>{var $e;if(!ge.palette)return"currentColor";if(Array.isArray(ge.palette))return ge.palette;const ke=($e=be==null?void 0:be.palettes)==null?void 0:$e.find(Ee=>Ee.name===ge.palette);return ke?ke.value:ge.palette},Ct=(ge,be)=>{var $e,ke;if(!be)return[];const Ee=At$1(ge),Ce=be.default.map(Se=>new m$2(Se).toAbs()),Te=(($e=be.axes)==null?void 0:$e.map(Se=>({min:Se.min.map(Ke=>new m$2(Ke).toAbs()),max:Se.max.map(Ke=>new m$2(Ke).toAbs())})))||[];return(ke=be.axes)!=null&&ke.length?Ce.map((Se,Ke)=>{const Je=be.axes.map((mt,bt)=>{const $t=Te[bt].min[Ke],St=Te[bt].max[Ke];if(!$t||!St||[$t,St].some(Dt=>Dt.commands.length!==Se.commands.length))return[];const It=(()=>{var Dt;const jt=(Dt=ge.axes)==null?void 0:Dt[mt.name];return jt?mt.name==="stroke"?jt/(Ee[0]/24):jt:mt.value.default})();let Bt=0;if(It<mt.value.default){const Dt={min:mt.value.min,max:mt.value.default};Bt=st$1(It,Dt,{min:-1,max:0})}else{const Dt={min:mt.value.default,max:mt.value.max};Bt=st$1(It,Dt,{min:0,max:1})}return Ot(Se,Bt<0?$t:St,Math.abs(Bt))});return Tt$1(Se,Je).scale(Ee[0]/24,Ee[1]/24).encode()}):Ce.map(Se=>new m$2(Se.encode()).scale(Ee[0]/24,Ee[1]/24).encode())};let Y$1={};typeof window<"u"&&(window.__SVG_ICON_NEXT_CACHE__&&(Y$1=window.__SVG_ICON_NEXT_CACHE__),window.__SVG_ICON_NEXT_PRELOAD_PACKS__||(window.__SVG_ICON_NEXT_PRELOAD_PACKS__=Nt$1));class B$1 extends HTMLElement{constructor(){super(),this.axes=null,this.palette="",this.width="",this.height="",this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
        <style>
          :host {
            display: inline-flex;
            align-items: center;
          }
        </style>
        <svg
          id="icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        ></svg>
      `)}static get observedAttributes(){return["icon"]}connectedCallback(){if(this.shadowRoot){const be=this.getAttribute("icon");be&&this.updateSvg(be)}}disconnectedCallback(){this.palette="",this.axes={}}getSVGIconOptions(be){return{icon:be,size:[Number(this.width),Number(this.height)],axes:this.axes||{},palette:this.palette}}initSize(){let be="24",$e="24";const ke=this.getAttribute("size")||"";if(ke){const Te=ke.split(",");Te.length===2?(be=Te[0],$e=Te[1]):be=$e=Te[0],this.width=be,this.height=$e;return}const Ee=this.getAttribute("width"),Ce=this.getAttribute("height");Ee&&Ce&&(be=Ee,$e=Ce),this.width=be,this.height=$e}async updateSvg(be){if(!this.shadowRoot)return;const $e=this.shadowRoot.querySelector("#icon");if(!$e)return;this.initSize(),$e.setAttribute("width",this.width),$e.setAttribute("height",this.height),$e.setAttribute("viewBox",`0 0 ${this.width} ${this.height}`);const ke=this.getSVGIconOptions(be),Ee=await xt$1(ke);if(!Ee)return;const Ce=Ct(ke,Ee);if(Ce!=null&&Ce.length){const Te=Et$1(ke,Ee);Te!=null&&Te.length&&(this.palette=Te);const Se=Ce.map((Ke,Je)=>`
                    <path
                        d="${Ke}"
                        fill="${typeof this.palette=="string"?this.palette:this.palette[Je]||""}"
                    ></path>
                `).join("");$e.innerHTML=Se}}attributeChangedCallback(be,$e,ke){switch(be){case"icon":ke&&ke!==$e&&this.updateSvg(ke);break}}}B$1.elName="bili-icon";customElements.get(B$1.elName)||customElements.define(B$1.elName,B$1);class r$2 extends HTMLElement{constructor(){super(),this.disposables=p$3(),this.deferred=P$3(),this.onConfirm=null,this.onCancel=null,this.final=null;const be=this.attachShadow({mode:"open"}),$e=`
        <style>
            :host {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              top: 0;
            }
            #mask {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              top: 0;
              background-color: rgba(0, 0, 0, 0.5);
            }
            #wrap {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              top: 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            #dialog {
              -webkit-font-smoothing: antialiased;
              background-color: var(--bg1);
              border-radius: 8px;
              box-sizing: border-box;
              font-family: PingFang SC,HarmonyOS_Regular,Helvetica Neue,Microsoft YaHei,sans-serif!important;
              font-weight: 400;
              overflow: hidden;
              padding-bottom: 24px!important;
              padding: 16px;
              position: relative;
              width: 320px;
              transform-origin: center center;
            }
            #close {
                color: var(--text2);
                cursor: pointer;
                height: 22px;
                position: absolute;
                right: 16px;
                top: 16px;
                width: 22px;
            }
            #title {
                color: var(--text1);
                font-size: 16px;
                font-weight: 600;
                margin-top: 16px;
                margin-bottom: 10px;
                text-align: center;
                padding: 0 16px;
            }
            #message {
                color: var(--text2);
                font-size: 14px;
                margin-bottom: 14px;
                text-align: center;
                padding: 0 16px 10px;
                white-space: pre-wrap;
            }
            #action {
                align-items: center;
                display: flex;
                justify-content: center;
                padding-right: 12px;
            }
            #action button {
                -webkit-font-smoothing: antialiased;
                border: 1px solid var(--brand_blue);
                border-radius: 6px;
                box-sizing: border-box;
                cursor: pointer;
                font-family: PingFang SC,HarmonyOS_Regular,Helvetica Neue,Microsoft YaHei,sans-serif!important;
                font-weight: 400;
                height: 32px;
                outline: none;
                transition: all .2s;
                width: 130px;
                margin-left: 12px;
            }
            #action button#cancel {
                background-color: var(--bg1);
                border-color: var(--line_regular);
                color: var(--text1);
            }
            #action button#confirm {
                background-color: var(--brand_blue);
                border-color: var(--brand_blue);
                color: var(--text_white);
            }
        </style>
        <div id="mask"></div>
        <div id="wrap">
          <div 
              role="dialog" 
              id="dialog"
          >
              <div id="close"><bili-icon icon="BDC/xmark_close_line/1" size="22"></bili-icon></div>
              <div id="title"></div>
              <div id="message"></div>
              <div id="action">
                  <button id="cancel"></button>
                  <button id="confirm"></button>
              </div>
          </div>
        </div>
    `,ke=document.createElement("template");ke.innerHTML=$e;const Ee=document.importNode(ke.content,!0);be.appendChild(Ee)}getEl(be){var $e;return($e=this.shadowRoot)==null?void 0:$e.querySelector(`#${be}`)}connectedCallback(){this.disposables.addEventListener(this.getEl("close"),"click",()=>{this.handleActionEvent("cancel")}),this.disposables.addEventListener(this.getEl("cancel"),"click",()=>{this.handleActionEvent("cancel")}),this.disposables.addEventListener(this.getEl("confirm"),"click",()=>{this.handleActionEvent("confirm")})}disconnectedCallback(){this.disposables.dispose()}async handleActionEvent(be){var $e;const ke=be==="cancel"?this.onCancel:this.onConfirm;ke?await ke(this.hide.bind(this)):await this.hide(),($e=this.final)==null||$e.call(this)}handleText(be,$e){this.getEl(be).textContent=$e,$e===""&&this.handleVisible(be,!1)}doTransition(be,$e,ke=200){const Ee=this.getEl(be);Ee.style.transition=`all ${ke}ms linear`,Ee.style.opacity=`var(--bili-modal-opacity, ${$e?"0":"1"})`,be==="dialog"&&(Ee.style.transform="var(--bili-modal-transform, scale(1))"),$e&&(Ee.style.display="block"),setTimeout(()=>{Ee.style.setProperty("--bili-modal-opacity",$e?"1":"0"),be==="dialog"&&Ee.style.setProperty("--bili-modal-transform",$e?"scale(1)":"scale(.8)"),setTimeout(()=>{$e||(Ee.style.display="none",be==="mask"&&this.handleVisible("",!1)),Ee.style.removeProperty("transition"),Ee.style.removeProperty("opacity"),Ee.style.removeProperty("--bili-modal-opacity"),this.deferred.resolve(!0)},ke+20)},0)}handleVisible(be,$e,ke){const Ee=be===""?this:this.getEl(be);if(!ke){Ee.style.display=$e?"block":"none";return}be!=="mask"&&be!=="dialog"||this.doTransition(be,$e)}handleAction(be,$e){if($e===!1||$e===""){this.handleVisible(be,!1);return}this.handleVisible(be,!0);const ke=async()=>{await this.hide()},Ee=be==="cancel"?"\u53D6\u6D88":"\u786E\u5B9A";typeof $e>"u"?$e={text:Ee,click:ke}:typeof $e=="string"?$e={text:$e,click:ke}:typeof $e=="function"&&($e={text:Ee,click:$e});const Ce=$e;this.handleText(be,Ce.text),this[be==="cancel"?"onCancel":"onConfirm"]=Ce.click}async show(be){this.deferred=P$3(),this.final=be.final||null,this.handleVisible("mask",be.mask!==!1,!0),this.handleVisible("dialog",!0),this.handleVisible("",!0),this.style.setProperty("z-index",String(be.zIndex||I$2()),"important"),this.handleText("title",be.title||""),this.handleText("message",be.message||""),this.handleAction("cancel",be.cancel),this.handleAction("confirm",be.confirm),await this.deferred.promise}async hide(){this.deferred=P$3(),this.handleVisible("dialog",!1,!0),this.getEl("mask").style.display==="block"?this.handleVisible("mask",!1,!0):this.handleVisible("",!1),await this.deferred.promise}}customElements.get("bili-modal")||customElements.define("bili-modal",r$2);function throttle(ge,be,$e){var ke=$e||{},Ee=ke.noTrailing,Ce=Ee===void 0?!1:Ee,Te=ke.noLeading,Se=Te===void 0?!1:Te,Ke=ke.debounceMode,Je=Ke===void 0?void 0:Ke,mt,bt=!1,$t=0;function St(){mt&&clearTimeout(mt)}function It(Dt){var jt=Dt||{},zt=jt.upcomingOnly,en=zt===void 0?!1:zt;St(),bt=!en}function Bt(){for(var Dt=arguments.length,jt=new Array(Dt),zt=0;zt<Dt;zt++)jt[zt]=arguments[zt];var en=this,qt=Date.now()-$t;if(bt)return;function vo(){$t=Date.now(),be.apply(en,jt)}function yo(){mt=void 0}!Se&&Je&&!mt&&vo(),St(),Je===void 0&&qt>ge?Se?($t=Date.now(),Ce||(mt=setTimeout(Je?yo:vo,ge))):vo():Ce!==!0&&(mt=setTimeout(Je?yo:vo,Je===void 0?ge-qt:ge))}return Bt.cancel=It,Bt}const h=333,l$4=30,u$1="cubic-bezier(0.4, 0, 0.22, 1)";class b$3 extends HTMLElement{constructor(){super(),this.visible=!1,this.disposables=p$3(),this.imgs=[],this.isOpening=!1,this.isZoomIn=!1,this.isZooming=!1,this.isOpen=!1,this.isClosing=!1,this.currIndex=0,this.removeSelfByClose=!1,this.isZoomInDragging=!1,this.zoomInDragPos=null,this.zoomInOffset={x:0,y:0},this.viewportRect={w:0,h:0,x:0,y:0},this.attachShadow({mode:"open"}),this.render()}shadowRootQuerySelector(be){return this.shadowRoot.querySelector(be)}get container(){return this.shadowRootQuerySelector("#container")}get item(){return this.shadowRootQuerySelector("#container #item")}get zoomWrap(){return this.shadowRootQuerySelector("#container #item #zoom-wrap")}get currImgEl(){return this.shadowRootQuerySelector("#container #item #zoom-wrap img")}get spinner(){return this.shadowRootQuerySelector("#container #spinner")}get thumb(){return this.shadowRootQuerySelector("#wrap #thumb")}get currImg(){return this.imgs[this.currIndex]}async connectedCallback(){T$1(()=>{this.initEvents()})}timeoutPromise(be=0){return new Promise($e=>{this.disposables.setTimeout(()=>{$e(!0)},be)})}initEvents(){if(!this.shadowRoot)return;const be=this.shadowRoot.querySelector("#close"),$e=this.shadowRoot.querySelector("#prev"),ke=this.shadowRoot.querySelector("#next");this.disposables.addEventListener(be,"click",()=>{this.close()}),this.disposables.addEventListener($e,"click",()=>{this.prev()}),this.disposables.addEventListener(ke,"click",()=>{this.next()}),this.disposables.addEventListener(this.thumb,"click",Ce=>{var Te;if(Ce.target instanceof HTMLElement){const Se=(Te=Ce.target.dataset.index)!=null?Te:this.currIndex;Se!==this.currIndex&&this.goTo(Number(Se))}}),this.disposables.addEventListener(this.zoomWrap,"click",Ce=>{if(this.isZoomInDragging)return;if(this.isZoomIn){this.zoomTo();return}const{left:Te,top:Se}=this.zoomWrap.getBoundingClientRect();this.zoomTo({x:Ce.clientX-Te,y:Ce.clientY-Se})});const Ee=Ce=>{this.isOpen&&Ce.preventDefault()};this.disposables.addEventListener(this,"touchmove",Ee,{passive:!1}),this.disposables.addEventListener(this.container,"click",Ce=>{if(Ce.target===this.item){if(this.isZoomIn||this.isZooming)return;this.close()}}),this.disposables.addEventListener(this.zoomWrap,"wheel",Ce=>{Ee(Ce),!(!this.isZoomIn||this.isZooming)&&this.scrollZoomWrap(Ce.deltaX,Ce.deltaY)},{passive:!0}),this.disposables.addEventListener(this.zoomWrap,"mousedown",Ce=>{!this.isZoomIn||this.isZooming||(this.isZoomInDragging=!0,this.zoomInDragPos={x:Ce.clientX,y:Ce.clientY,isOrigin:!0})}),this.disposables.addEventListener(this.zoomWrap,"mousemove",Ce=>{if(!this.isZoomIn||this.isZooming||!this.zoomInDragPos)return;const Te=this.zoomInDragPos.x-Ce.clientX,Se=this.zoomInDragPos.y-Ce.clientY;this.scrollZoomWrap(Te,Se),this.zoomInDragPos={x:Ce.clientX,y:Ce.clientY,isOrigin:!1}}),this.disposables.addEventListener(this.zoomWrap,"mouseup",async()=>{var Ce;if(!(!this.isZoomIn||this.isZooming)){if(!this.zoomInDragPos){this.isZoomInDragging=!1;return}if((Ce=this.zoomInDragPos)!=null&&Ce.isOrigin){this.zoomInDragPos=null,this.isZoomInDragging=!1;return}this.zoomInDragPos=null,await this.timeoutPromise(300),this.isZoomInDragging=!1}}),this.disposables.addEventListener(document,"keydown",Ce=>{const Te=()=>{Ce.stopPropagation(),Ce.preventDefault()};if(this.isOpen)switch(Ce.key){case"Escape":this.close(),Te();break;case"ArrowLeft":this.prev(),Te();break;case"ArrowRight":this.next(),Te();break}}),this.disposables.addEventListener(window,"resize",throttle(10,()=>{this.getViewportRect(),!(this.isZooming||this.isZoomInDragging)&&this.currImg&&(delete this.currImg.zoom,this.calculateImgZoom(),this.animateToOpenState(!1))}))}disconnectedCallback(){this.disposables.dispose(),this.isOpen=!1}getViewportRect(){const be=this.container;if(!be)return;const{width:$e,height:ke,x:Ee,y:Ce}=be.getBoundingClientRect();this.viewportRect.w=$e,this.viewportRect.h=ke,this.viewportRect.x=Ee,this.viewportRect.y=Ce}setTransitionStyle(be,$e,ke,Ee){be.style.setProperty("transition",$e?`${$e} ${ke}ms ${Ee||u$1}`:"none")}removeTransitionStyle(be){be.style.removeProperty("transition")}async animateTo(be,$e,ke){await this.timeoutPromise(),this.setTransitionStyle(be,$e,h),await this.timeoutPromise(l$4),be.style.setProperty($e,ke)}async initialize(be){function $e(){return new Error("bili photoswipe open options error")}const{gallery:ke,children:Ee,dataSource:Ce,index:Te,appendToEl:Se}=be;if(ke&&Ee){const Ke=document.querySelector(ke);if(!Ke)return Promise.reject($e());const Je=Array.from(Ke.querySelectorAll(Ee)||[]);if(!Je.length)return Promise.reject($e());this.imgs=Array.from(Je).map(mt=>{const bt=mt.dataset;return{src:bt.pswpSrc||"",width:Number(bt.pswpWidth)||0,height:Number(bt.pswpHeight)||0,thumbEl:mt,thumbCropped:bt.cropped!==null}})}else if(Ce!=null&&Ce.length)this.imgs=Ce.map(Ke=>({...Ke}));else return Promise.reject($e());typeof Te=="number"&&Te>=0&&Te<this.imgs.length&&(this.currIndex=Te|0),(Se||!this.parentElement)&&(this.removeSelfByClose=!0,(Se||document.body).appendChild(this),await this.timeoutPromise()),this.getViewportRect(),this.setAttribute("visible",""),this.style.setProperty("z-index",String(1e4+I$2())),this.setThumb()}setThumb(){if(this.imgs.length===1){this.thumb.style.display="none";return}const be=($e,ke)=>`
        <div class="thumb-item" data-index="${ke}"><img src="${$e}"></div>
      `;this.thumb.innerHTML=this.imgs.map(($e,ke)=>be(`${$e.src}@96w_96h_1c.webp`,ke)).join(""),this.updateThumbActive()}updateThumbActive(){if(this.imgs.length===1)return;const be=this.thumb.querySelector(".thumb-item.active");be&&be.classList.remove("active");const $e=this.thumb.children[this.currIndex];$e&&$e.classList.add("active")}getCurrImgOpenData(){const{src:be,width:$e,height:ke,zoom:Ee}=this.currImg;return{src:be,width:this.isZoomIn?$e:(Ee==null?void 0:Ee.width)||$e,height:this.isZoomIn?ke:(Ee==null?void 0:Ee.height)||ke}}async animateZoomWrapToOpenState(be,$e){const{width:ke,height:Ee}=this.getCurrImgOpenData(),Ce=(this.viewportRect.w-ke)/2,Te=Ee>=this.viewportRect.h?0:(this.viewportRect.h-Ee)/2;be?this.animateTo(this.zoomWrap,"transform",this.getTransform(Ce,Te,$e)):(this.removeTransitionStyle(this.zoomWrap),this.zoomWrap.style.setProperty("transform",this.getTransform(Ce,Te,$e))),await this.timeoutPromise(l$4+(be?h:0))}async animateToOpenState(be){const{width:$e,height:ke}=this.getCurrImgOpenData();be?(this.animateTo(this.container,"transform",this.getTransform(0,0)),this.animateTo(this.item,"transform","none"),this.animateZoomWrapToOpenState(be,1)):(this.animateZoomWrapToOpenState(be,1),this.currImgEl&&this.setElementSize(this.currImgEl,$e,ke)),await this.timeoutPromise(l$4+(be?h:0))}async animateToClosedState(be){const $e=this.currImg;if(!$e.thumbEl)return;const ke=$e.thumbCropped?this.getCroppedBoundsByElement($e.thumbEl,$e.width,$e.height):this.getBoundsByElement($e.thumbEl);if(!ke.innerRect)return;const Ee=this.getCurrImgOpenData().width,Ce=-this.viewportRect.w+(ke.x-ke.innerRect.x)+ke.innerRect.w,Te=-this.viewportRect.h+(ke.y-ke.innerRect.y)+ke.innerRect.h,Se=this.viewportRect.w-ke.innerRect.w,Ke=this.viewportRect.h-ke.innerRect.h;this.zoomWrap.style.setProperty("transform-origin","0 0"),be?(this.animateTo(this.container,"transform",this.getTransform(Ce,Te)),this.animateTo(this.item,"transform",this.getTransform(Se,Ke)),this.animateTo(this.zoomWrap,"transform",this.getTransform(ke.innerRect.x,ke.innerRect.y,ke.w/Ee))):(this.container.style.setProperty("transform",this.getTransform(Ce,Te)),this.item.style.setProperty("transform",this.getTransform(Se,Ke)),this.zoomWrap.style.setProperty("transform",this.getTransform(ke.innerRect.x,ke.innerRect.y,ke.w/Ee))),await this.timeoutPromise(l$4+(be?h:0)),this.zoomWrap.classList.add("opend")}async open(be){if(this.visible)return;await this.initialize(be),this.triggerEvent("before-open"),this.visible=!0;const{src:$e,thumbEl:ke}=this.calculateImgZoom();if(ke){this.isOpening=!0,this.appendPlaceholderEl();const Ee=this.loadImg($e);await this.animateToClosedState(!1),await this.animateToOpenState(!0),this.appendImgEl(await Ee),this.isOpening=!1}else this.appendImgEl(),await this.animateToOpenState(!1);this.isOpen=!0,this.triggerEvent("after-open")}async close(){if(!this.visible||this.isOpening||this.isClosing)return;this.isClosing=!0,this.visible=!1,this.triggerEvent("before-close"),this.removeAttribute("visible");const{thumbEl:be}=this.currImg;be&&await this.animateToClosedState(!0),this.imgs=[],this.triggerEvent("after-close"),this.removeSelfByClose&&this.parentElement&&this.parentElement.removeChild(this),this.removeSelfByClose=!1,this.isOpen=!1}triggerEvent(be){this.dispatchEvent(new CustomEvent(be))}prev(){this.triggerEvent("prev"),this.goTo(this.currIndex-1)}next(){this.triggerEvent("next"),this.goTo(this.currIndex+1)}clearZoomState(){this.zoomInOffset.x=0,this.zoomInOffset.y=0,this.isZoomIn=!1,this.zoomWrap.classList.remove("zoom-in"),this.zoomWrap.classList.add("zoom-out")}async goTo(be){if(be<0||be>this.imgs.length-1)return;this.currIndex=be,this.updateThumbActive(),this.isZoomIn&&this.clearZoomState();const{src:$e,thumbEl:ke}=this.calculateImgZoom();this.animateToOpenState(!1);try{ke?(this.appendPlaceholderEl(),this.appendImgEl(await this.loadImg($e))):(this.removeImgFromContent(),this.spinner.classList.add("visible"),this.appendImgEl(await this.loadImg($e)),this.spinner.classList.remove("visible"))}catch(Ee){console.log(Ee)}}scrollZoomWrap(be,$e){const{width:ke,height:Ee,zoom:Ce}=this.currImg;Ce&&(ke<this.viewportRect.w&&Ee<this.viewportRect.h||(this.zoomInOffset.x=ke>this.viewportRect.w?-Math.max(0,Math.min(-this.zoomInOffset.x+be,ke-this.viewportRect.w)):(this.viewportRect.w-ke)/2,this.zoomInOffset.y=Ee>this.viewportRect.h?-Math.max(0,Math.min(-this.zoomInOffset.y+$e,Ee-this.viewportRect.h)):(this.viewportRect.h-Ee)/2,this.zoomWrap.style.setProperty("transform",this.getTransform(this.zoomInOffset.x,this.zoomInOffset.y,1))))}async zoomTo(be){const{width:$e,height:ke,zoom:Ee}=this.currImg;if(!Ee||this.isZooming)return;if(this.isZoomIn){this.isZooming=!0,this.clearZoomState(),await this.animateZoomWrapToOpenState(!0,Ee.width/$e),await this.animateToOpenState(!1),this.isZooming=!1;return}this.isZooming=!0,this.isZoomIn=!0,this.zoomWrap.classList.remove("zoom-out"),this.zoomWrap.classList.add("zoom-in");let Ce=(this.viewportRect.w-$e)/2,Te=0;$e>this.viewportRect.w&&(Ce=-(((be==null?void 0:be.x)||0)/Ee.width)*($e-this.viewportRect.w)),ke<this.viewportRect.h?Te=(this.viewportRect.h-ke)/2:be!=null&&be.y&&(Te=-(((be==null?void 0:be.y)||0)/Ee.height)*(ke-this.viewportRect.h)),this.zoomInOffset.x=Ce,this.zoomInOffset.y=Te,await this.animateTo(this.zoomWrap,"transform",this.getTransform(Ce,Te,$e/Ee.width)),await this.timeoutPromise(h+l$4),this.removeTransitionStyle(this.zoomWrap),this.setElementSize(this.currImgEl,$e,ke),this.zoomWrap.style.setProperty("transform",this.getTransform(Ce,Te,1)),this.isZooming=!1}loadImg(be,$e){return new Promise((ke,Ee)=>{const Ce=$e||new Image;Ce.onload=()=>{ke(Ce)},Ce.onerror=()=>{Ee(new Error("load img error"))},Ce.src=be})}calculateImgZoom(be){if(be=be!=null?be:this.currIndex,be>=this.imgs.length||be<0)throw new Error("index out of range");if(this.imgs[be].zoom)return this.imgs[be];let{width:$e,height:ke}=this.imgs[be],Ee=!1;const Ce=$e/ke,Te=this.viewportRect.w/this.viewportRect.h;if(Ce>Te)$e>this.viewportRect.w&&($e=this.viewportRect.w,ke=$e/Ce,Ee=!0);else if(Ce<Te)ke>this.viewportRect.h&&(ke=this.viewportRect.h,$e=ke*Ce,Ee=!0);else{const Se=Math.min(this.viewportRect.w,this.viewportRect.h);Se<$e&&(Ee=!0,$e=ke=Se)}return Ee&&(this.imgs[be].zoom={width:Math.round($e),height:Math.round(ke)}),this.imgs[be]}getBoundsByElement(be){const $e=be.getBoundingClientRect();return{x:$e.left,y:$e.top,w:$e.width}}getCroppedBoundsByElement(be,$e,ke){const Ee=be.getBoundingClientRect(),Ce=Ee.width/$e,Te=Ee.height/ke,Se=Ce>Te?Ce:Te,Ke=(Ee.width-$e*Se)/2,Je=(Ee.height-ke*Se)/2;return{x:Ee.left+Ke,y:Ee.top+Je,w:$e*Se,innerRect:{w:Ee.width,h:Ee.height,x:Ke,y:Je}}}getTransform(be,$e,ke){let Ee=`translate3d(${be}px, ${$e}px, 0px)`;return typeof ke=="number"&&(Ee+=` scale3d(${ke}, ${ke}, 1)`),Ee}appendImgToContent(be){const $e=this.zoomWrap.querySelector("img");$e?this.zoomWrap.replaceChild(be,$e):this.zoomWrap.appendChild(be)}removeImgFromContent(){const be=this.zoomWrap.querySelector("img");be&&this.zoomWrap.removeChild(be)}appendPlaceholderEl(){const{thumbEl:be}=this.currImg;if(!be)return;const $e=be.querySelector("img"),ke=$e==null?void 0:$e.getAttribute("src");if(!ke)return;const Ee=new Image;Ee.alt="",Ee.src=ke,Ee.setAttribute("role","presentation"),Ee.setAttribute("aria-hidden","true"),this.setElementSize(Ee,250),Ee.style.setProperty("width","250px"),Ee.style.setProperty("height","auto"),Ee.style.transformOrigin="0 0",Ee.style.transform=this.getTransform(0,0,this.getCurrImgOpenData().width/250),this.appendImgToContent(Ee)}setElementSize(be,$e,ke){be.style.setProperty("width",`${$e}px`),be.style.setProperty("height",ke?`${ke}px`:"auto")}appendImgEl(be){const{src:$e,width:ke,height:Ee}=this.getCurrImgOpenData();be||(be=new Image,be.src=$e),this.setElementSize(be,ke,Ee),this.appendImgToContent(be),this.currImg.zoom&&this.zoomWrap.classList.add("zoom-out"),this.zoomWrap.classList.contains("opend")||this.zoomWrap.classList.add("opend")}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        #bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
        }
        :host([visible]) .ui-visible {
          opacity: .8;
          pointer-events: auto;
        }
        :host([visible]) #thumb.ui-visible {
          opacity: 1;
          pointer-events: auto;
        }
        .ui-visible {
          opacity: 0.005;
          will-change: opacity;
          transition: opacity ${h}ms ease;
          pointer-events: none;
        }
        #wrap,
        #wrap #container,
        #wrap #container #item,
        #wrap #container #zoom-wrap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        #wrap button {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          z-index: 2;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          color: var(--text_white);
          background: rgba(0,0,0,.58);
          transition-function: ${u$1};
          cursor: pointer;
          outline: none;
          border: none;
        }
        button.top {
          top: 16px;
        }
        button.left {
          left: 16px;
        }
        button.right {
          right: 16px;
        }
        button.middle {
          top: 50%;
        }
        button#prev {
          transform: translateY(-50%);
        }
        button#next {
          transform: translateY(-50%) rotate(180deg);
        }
        #wrap button:hover {
          color: var(--brand_pink);
        }
        #wrap #container,
        #wrap #item {
          overflow: hidden;
        }
        #wrap #container #zoom-wrap.opend {
          width: auto;
          height: auto;
        }
        #zoom-wrap img {
          max-width: none;
          -webkit-user-drag: none;
        }
        #zoom-wrap.zoom-out {
          cursor: zoom-in;
        }
        #zoom-wrap.zoom-in {
          cursor: move;
          cursor: -webkit-grab;
          cursor: -moz-grab;
          cursor: grab;
        }
        #spinner {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          padding: 20px 0;
          width: 100%;
          text-align: center;
          font-size: 14px;
          color: var(--text3);
          pointer-events: none;
          display: none;
        }
        #spinner.visible {
          display: block;
        }
        #spinner img {
          margin-right: 8px;
          vertical-align: bottom;
        }
        #thumb {
          display: flex;
          align-items: center;
          position: absolute;
          left: 50%;
          bottom: 30px;
          z-index: 2;
          padding: 6px 10px;
          border-radius: 8px;
          background: rgba(24,25,28,.8);
          backdrop-filter: blur(20px);
          transform: translate(-50%);
        }
        #thumb .thumb-item {
          width: 54px;
          height: 54px;
          padding: 1px;
          border: 2px solid transparent;
          border-radius: 8px;
          transition: .3s;
          cursor: pointer;
          box-sizing: border-box;
        }
        #thumb .thumb-item img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
          -webkit-user-drag: none;
          pointer-events: none;
        }
        #thumb .thumb-item.active {
          border-color: var(--brand_pink);
        }
      </style>
      <div id="bg" class="ui-visible"></div>
      <section id="wrap" aria-roledescription="carousel">
        <div id="container">
          <div id="item">
            <div id="zoom-wrap"></div>
          </div>
          <div id="spinner">
            <img width="24" height="24" src="//s1.hdslb.com/bfs/static/jinkela/long/gif/loading-blue.gif" />
            <span>\u6B63\u5728\u73A9\u547D\u52A0\u8F7D\u2026</span>
          </div>
        </div>
        <button id="close" class="right top ui-visible"><bili-icon icon="BDC/xmark_close_line/1" size="20"></bili-icon></button>
        <button id="prev" class="left middle ui-visible"><bili-icon icon="BDC/arrow_back_left_line/3" size="20"></bili-icon></button>
        <button id="next" class="right middle ui-visible"><bili-icon icon="BDC/arrow_back_left_line/3" size="20"></bili-icon></button>
        <div id="thumb" class="ui-visible"></div>
      </section>
    `)}}customElements.get("bili-photoswipe")||customElements.define("bili-photoswipe",b$3);class l$3 extends _$1{constructor(be){super(),this.timer=null,typeof be<"u"&&this.reset(be)}reset(be){super.reset(),typeof be<"u"&&(this.timer=window.setTimeout(()=>{this.resolve(!0),this.timer=null},be))}clear(){this.timer&&(window.clearTimeout(this.timer),this.timer=null,this.reject(new Error("User canceled")))}}class c$4 extends HTMLElement{constructor(){super(),this.reference=null,this.transition="",this.disposables=p$3(),this.deferred=null,this.state="hidden",this.showDelay=0,this.hideDelay=0,this.zIndex=0;const be=this.attachShadow({mode:"open"}),$e=`
      <style>
        :host {
        }
      </style>
      <div id="content">
        <slot></slot>
      </div>
    `,ke=document.createElement("template");ke.innerHTML=$e;const Ee=document.importNode(ke.content,!0);be.appendChild(Ee)}setup(be,$e){if(this.reference){console.warn("This popover has been setuped");return}let ke;if(typeof be=="string"&&(this.parentElement&&(ke=this.parentElement.querySelector(be)),ke||(ke=document.querySelector(be))),!ke){console.warn("reference is not found:",be);return}if(this.reference=ke,this.popperInstance=createPopper(ke,this,{placement:($e==null?void 0:$e.placement)||"bottom",modifiers:[{name:"offset",options:{offset:($e==null?void 0:$e.offset)||[0,4]}}]}),$e!=null&&$e.zIndex&&(this.zIndex=$e.zIndex),$e!=null&&$e.to){let Ce=null;typeof $e.to=="string"?Ce=document.querySelector($e.to):Ce=$e.to,Ce?Ce.appendChild(this):console.warn("Popover config.to is not found:",$e.to)}$e!=null&&$e.transition&&(typeof($e==null?void 0:$e.transition)=="string"?this.transition=$e==null?void 0:$e.transition:this.transition="bili-popover-transition");const Ee=($e==null?void 0:$e.trigger)||"hover";$e!=null&&$e.delay?typeof $e.delay=="number"?(this.showDelay=$e.delay,this.hideDelay=$e.delay):Array.isArray($e.delay)&&(this.showDelay=$e.delay[0],this.hideDelay=$e.delay[1]):Ee==="hover"&&(this.showDelay=100,this.hideDelay=200),Ee==="hover"?(this.disposables.addEventListener(ke,"mouseenter",this.show.bind(this)),this.disposables.addEventListener(ke,"mouseleave",this.hide.bind(this))):Ee==="click"&&this.disposables.addEventListener(ke,"click",()=>{if(this.style.display==="block"){this.hide();return}this.show()}),this.disposables.mutationObserve(ke,Ce=>{for(const Te of Ce)if(Te.type==="childList"&&Array.from(Te.removedNodes).includes(ke)){this.parentElement&&this.parentElement.removeChild(this);break}},{childList:!0})}getTransitionTimingClass(be){return`${this.transition}-${be}`}delay(be){return new Promise($e=>setTimeout($e,be))}doTransition(be){this.dispatchEvent(new CustomEvent(be?"before-enter":"before-leave"));const $e=new l$3;return O$1(this,be?{base:[],enter:[],enterFrom:[this.getTransitionTimingClass("enter-from")],enterTo:[this.getTransitionTimingClass("enter-active")],leave:[],leaveFrom:[],leaveTo:[],entered:[]}:{base:[],enter:[],enterFrom:[],enterTo:[],leave:[],leaveFrom:[this.getTransitionTimingClass("leave-from")],leaveTo:[this.getTransitionTimingClass("leave-active")],entered:[]},be,()=>{this.dispatchEvent(new CustomEvent(be?"after-enter":"after-leave")),$e.resolve(!0)}),this.deferred=$e,$e.promise}async showDeferred(){let be=this.deferred;if(be){if(this.state==="showing"||this.state==="visible")return be.clear(),this.deferred=null,Promise.reject("popover is showing or visible");this.state==="hiding"?(await be.promise,await this.delay(0)):be.clear()}be=this.deferred=new l$3(this.showDelay),await be.promise}async hideDeferred(){let be=this.deferred;if(be){if(this.state==="hiding"||this.state==="hidden")return be.clear(),this.deferred=null,Promise.reject("popover is hiding or hidden");this.state==="showing"?await be.promise:be.clear()}return be=this.deferred=new l$3(this.hideDelay),await be.promise}toggle(be){if(!this.popperInstance)return;const $e=be==="show";Array.from(this.children).forEach(ke=>{if(ke instanceof HTMLElement){if(!$e){ke.style.removeProperty("display");return}ke.style.setProperty("display","block","important")}}),$e?(this.popperInstance.update(),this.style.setProperty("display","block","important"),this.style.setProperty("z-index",String(this.zIndex||I$2()),"important")):this.style.removeProperty("display")}async show(){if(this.popperInstance){try{await this.showDeferred()}catch{return}this.state="showing",this.toggle("show"),this.transition&&await this.doTransition(!0),this.state="visible",this.deferred=null}}async hide(){if(this.popperInstance){try{await this.hideDeferred()}catch{return}if(this.state="hiding",this.transition)await this.doTransition(!1);else if(this.style.display!=="block")return;this.toggle("hide"),this.deferred=null}}connectedCallback(){const be=this.getAttribute("reference");if(be){const $e=this.getAttribute("placement"),ke=this.getAttribute("trigger"),Ee=this.getAttribute("z-index"),Ce=this.getAttribute("transition"),Te=this.getAttribute("delay"),Se=this.getAttribute("to"),Ke={};if($e&&(Ke.placement=$e),ke&&["hover","click"].includes(ke)?Ke.trigger=ke:Ke.trigger="hover",Ee&&(Ke.zIndex=Number(Ee)),Ce&&(["1","true"].includes(Ce)?Ke.transition=!0:Ke.transition=Ce),Se&&(Ke.to=Se),Te){const Je=Te.split(",");Je.length===2?Ke.delay=[Number(Je[0]),Number(Je[1])]:Ke.delay=Number(Je[0])}this.setup(be,Ke)}}disconnectedCallback(){this.disposables.dispose(),this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=void 0),this.reference=null}}customElements.get("bili-popover")||customElements.define("bili-popover",c$4);const r$1=class th extends HTMLElement{constructor(){super(),this.disposables=p$3(),this.state={label:"",value:"",name:"",disabled:!1,checked:!1},this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
        <style>
          :host {
            --bili-radio-size: 16px;
            --bili-radio-font-size: 14px;
            --bili-radio-border-width: 1px;
            --bili-radio-checked-color: var(--brand_blue);
            --bili-radio-margin-inline-end: 8px;

            display: inline-flex;
            align-items: baseline;
            padding: 0;
            margin: 0;
            cursor: pointer;
            margin-inline-end: var(--bili-radio-margin-inline-end);
          }
          #input {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            list-style: none;
            position: relative;
            display: inline-block;
            outline: none;
            cursor: pointer;
            align-self: center;
            border-radius: 50%;
            width: var(--bili-radio-size);
            height: var(--bili-radio-size);
          }
          #input input {
            bottom: 0;
            left: 0;
            margin: 0;
            opacity: 0;
            outline: none;
            position: absolute;
            right: 0;
            top: 0;
            z-index: -1;
          }
          #input #inner {
            display: block;
            background-color: var(--bg1_float);
            border: 1px solid var(--text4);
            border-radius: 50%;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
          }
          #input[checked] #inner {
            border-color: var(--bili-radio-checked-color);
          }
          #input[checked] #inner::after {
            transform: translate(-50%,-50%) scale(1);
          }
          #input #inner::after {
            width: 50%;
            height: 50%;
            background-color: var(--bili-radio-checked-color);
            border-radius: 50%;
            content: "";
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%,-50%) scale(0);
            transition: transform .15s ease-in;
          }
          #label {
            margin-left: 8px;
            font-size: var(--bili-radio-font-size);
            color: var(--text2);
          }
        </style>
        <span id="input">
          <input type="radio">
          <span id="inner"></span>
        </span>
        <slot>
          <span id="label"></span>
        </slot>
      `)}static get observedAttributes(){return["name","value","label","disabled","checked"]}connectedCallback(){if(this.shadowRoot){const be=this.getAttribute("label");if(th.observedAttributes.forEach($e=>{const ke=this.getAttribute($e);ke!==null&&($e==="value"&&!be&&this.updateAttribute("label",ke),this.updateAttribute($e,ke))}),this.shadowRoot&&this.disposables.addEventListener(this,"click",()=>{if(!(this.state.disabled||this.state.checked))if(this.updateInput("checked",!0),this.state.name){const $e={name:this.state.name,value:this.state.value},ke=new CustomEvent("bili-radio-change",{detail:$e});document.dispatchEvent(ke)}else{const $e=new CustomEvent("change",{detail:{value:this.state.value}});this.dispatchEvent($e)}}),this.state.name){const $e=ke=>{const Ee=ke.detail;Ee&&Ee.name===this.state.name&&Ee.value!==this.state.value&&this.updateInput("checked",!1)};document.addEventListener("bili-radio-change",$e),this.disposables.add(()=>{document.removeEventListener("bili-radio-change",$e)})}}}disconnectedCallback(){this.disposables.dispose()}updateInput(be,$e){var ke,Ee;const Ce=(ke=this.shadowRoot)==null?void 0:ke.querySelector("#input"),Te=(Ee=this.shadowRoot)==null?void 0:Ee.querySelector("input");if(!(!Ce||!Te))switch(be){case"value":Te.setAttribute(be,$e);break;case"disabled":case"checked":$e?(Ce.setAttribute(be,""),Te.setAttribute(be,"")):(Ce.removeAttribute(be),Te.removeAttribute(be));break}}updateLabel(be){var $e;const ke=($e=this.shadowRoot)==null?void 0:$e.querySelector("#label");ke&&(ke.textContent=be)}updateAttribute(be,$e){switch(be){case"name":this.state.name=$e;break;case"label":this.updateLabel($e),this.state.label=$e;break;case"value":this.updateInput(be,$e),this.state[be]=$e;break;case"disabled":case"checked":this.updateInput(be,$e==="true"),this.state[be]=$e==="true";break}}attributeChangedCallback(be,$e,ke){this.updateAttribute(be,ke)}};r$1.elName="bili-radio";let s$3=r$1;customElements.get(s$3.elName)||customElements.define(s$3.elName,s$3);function b$2(ge){typeof queueMicrotask=="function"?queueMicrotask(ge):Promise.resolve().then(ge).catch(be=>setTimeout(()=>{throw be}))}function m$1(ge,be,$e,ke){ge.removeEventListener(be,$e,ke)}function g(ge,be,$e,ke){return ge.addEventListener(be,$e,ke),()=>{m$1(ge,be,$e,ke)}}class l$2{constructor(){this.disposables=[]}addEventListener(be,$e,ke,Ee){return this.add(g(be,$e,ke,Ee))}mutationObserve(be,$e,ke){let Ee=!1;const Ce=Se=>{Ee||(Ee=!0,Se.disconnect())},Te=new MutationObserver($e);return Te.observe(be,ke),()=>Ce(Te)}requestAnimationFrame(...be){const $e=requestAnimationFrame(...be);return this.add(()=>cancelAnimationFrame($e))}nextFrame(...be){return this.requestAnimationFrame(()=>this.requestAnimationFrame(...be))}setTimeout(...be){const $e=setTimeout(...be);return this.add(()=>clearTimeout($e))}microTask(...be){const $e={current:!0};return b$2(()=>{$e.current&&be[0]()}),this.add(()=>{$e.current=!1})}style(be,$e,ke){const Ee=be.style.getPropertyValue($e);return Object.assign(be.style,{[$e]:ke}),this.add(()=>{Object.assign(be.style,{[$e]:Ee})})}group(be){const $e=new l$2;return be($e),this.add(()=>$e.dispose())}add(be){return this.disposables.push(be),()=>{const $e=this.disposables.indexOf(be);$e>=0&&this.remove($e,1)}}remove(be,$e){const ke=this.disposables.splice(be,$e!=null?$e:this.disposables.length);for(const Ee of ke)Ee()}dispose(){this.remove(0)}}function v$1(){return new l$2}const p$2=typeof window<"u",f$1=1e3;p$2&&(window.__BILI_POPPER_ZINDEX__||(window.__BILI_POPPER_ZINDEX__=f$1));class c$3 extends HTMLElement{constructor(){super(),this.disposables=v$1(),this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
        <style>
          :host {
            --bili-rich-text-display: block;
            --bili-rich-text-white-space: pre-line;
            --bili-rich-text-word-break: break-word;
            --bili-rich-text-icon-vertical-align: sub;
            --bili-rich-text-link-color: var(--text_link, #008AC5);
            --bili-rich-text-link-color-hover: var(--brand_blue, #00AEEC);
            --icon-vertical-align: var(--bili-rich-text-icon-vertical-align);
            color: var(--bili-rich-text-color, var(--text1, #18191C));
            font-size: var(--bili-rich-text-font-size, 15px);
            line-height: var(--bili-rich-text-line-height, 21px);
            font-family: var(--bili-font-family);
          }
          #contents {
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0;
            margin-inline-end: 0;
            display: var(--bili-rich-text-display);
            white-space: var(--bili-rich-text-white-space);
            word-break: var(--bili-rich-text-word-break);
            -webkit-font-smoothing: antialiased;
          }
          #contents a {
            color: var(--bili-rich-text-link-color);
            text-decoration: none;
            background-color: transparent;
            cursor: pointer;
          }

          #contents a:hover {
            color: var(--bili-rich-text-link-color-hover);
          }
          
          #contents a bili-icon {
            vertical-align: var(--bili-rich-text-icon-vertical-align);
          }
          #contents img, #contents a i {
            display: inline-block;
            width: 1.2em;
            height: 1.2em;
            vertical-align: var(--bili-rich-text-icon-vertical-align);
          }
        </style>
        <p id="contents"></p>
      `)}get contentsElement(){return this.shadowRoot.querySelector("#contents")}connectedCallback(){this.disposables.addEventListener(this.contentsElement,"click",be=>{const $e={...be.target.dataset};Object.keys($e).length!==0&&this.dispatchEvent(new CustomEvent("text-click",{detail:$e}))})}disconnectedCallback(){this.disposables.dispose()}get contents(){return this.shadowRoot.querySelector("#contents")}styleMap(be){return be?Object.keys(be).reduce(($e,ke)=>be[ke]?$e+`${ke}:${be[ke]};`:$e,""):""}renderToString(be,$e,ke){let Ee="";return $e&&(Ee=Object.keys($e||{}).reduce((Ce,Te)=>$e[Te]?Ce+` ${Te}="${$e[Te]}"`:Ce,"")),`<${be}${Ee}${be==="img"?"/>":`>${ke||""}</${be}>`}`}setContents(be){const $e=be.map(ke=>{const Ee={style:this.styleMap(ke.style),...ke[ke.tag]||{}},Ce=ke.dataset;if(Ce){const Se={};Object.assign(Ee,Object.keys(Ce).reduce((Ke,Je)=>{const mt=Ce[Je];return mt&&(Ke[`data-${Je}`]=mt),Ke},Se))}let Te="";return ke.html?this.renderToString(ke.tag,Ee,ke.html):(Ee.text&&(Ee.icon&&(/^(https?:)?\/\//.test(Ee.icon)?Te+=this.renderToString("img",{src:Ee.icon,loading:"lazy",style:"width:var(--icon-width);height:var(--icon-height);vertical-align:var(--icon-vertical-align);"}):Te+=this.renderToString("i",{class:"holder "+Ee.icon}),delete Ee.icon),Te+=Ee.text,delete Ee.text),this.renderToString(ke.tag,Ee,Te))}).join("");this.contents.innerHTML=$e,setTimeout(()=>{const ke=Array.from(this.contents.getElementsByTagName("i"));if(ke.length){const Ee=ke[0].getBoundingClientRect().width.toString();ke.forEach(Ce=>{const Te=document.createElement("bili-icon");Te.setAttribute("size",Ee),Te.setAttribute("icon",Ce.classList[1]),Ce.parentElement.replaceChild(Te,Ce)})}},0)}}c$3.elName="bili-rich-text";customElements.get(c$3.elName)||customElements.define(c$3.elName,c$3);var K=function(ge,be){typeof window>"u"||(window.__BILI_X_ENGINE_SCRIPT_CACHE__||(window.__BILI_X_ENGINE_SCRIPT_CACHE__={}),window.__BILI_X_ENGINE_SCRIPT_CACHE__[ge]=be)},G$1=function(ge){return typeof window>"u"||!window.__BILI_X_ENGINE_SCRIPT_CACHE__?null:window.__BILI_X_ENGINE_SCRIPT_CACHE__[ge]||null},_=function(ge){typeof window>"u"||window.__BILI_X_ENGINE_SCRIPT_CACHE__&&typeof window.__BILI_X_ENGINE_SCRIPT_CACHE__[ge]<"u"&&delete window.__BILI_X_ENGINE_SCRIPT_CACHE__[ge]},T=function(ge,be){if(typeof window>"u")return Promise.reject(new Error("window is not defined"));ge=ge.replace(/^https?:\/\//,"//");var $e=ge,ke=G$1($e);if(ke!=null&&ke.promise)return ke.promise;var Ee=new Promise(function(Ce,Te){var Se=document.createElement("script");Se.src=ge,be!=null&&be.behavior&&Se.setAttribute(be.behavior,""),Se.onload=function(){var Ke=window;if(be.lib)return Ke[be.lib]?Ce(Ke[be.lib]):Te(new Error('Failed to access library "'+be.lib+'" from '+ge));Ce(null)},Se.onerror=function(){Te(new Error("Failed to load "+ge)),document.head.removeChild(Se)},document.head.appendChild(Se)});return K($e,{promise:Ee,lib:be==null?void 0:be.lib}),Ee.then(function(){(be==null?void 0:be.cache)===!1&&_($e)}).catch(function(){(be==null?void 0:be.cache)===!1&&_($e)}),Ee},X$1=function(){try{return Promise.resolve(T("//s1.hdslb.com/bfs/seed/jinkela/short/bili-user/index.js",{lib:"__BiliUser__"}))}catch(ge){return Promise.reject(ge)}},z$1=function(){try{var ge=function(){return Promise.resolve(window.__BiliUser__.get())},be=function(){if(!window.__BiliUser__)return Promise.resolve(X$1()).then(function(){})}();return Promise.resolve(be&&be.then?be.then(ge):ge(be))}catch($e){return Promise.reject($e)}},q$1=function(ge){if(window.Unios)return Promise.resolve(window.Unios);var be=window.__LOAD_REQUEST_TYPE__||ge||"web";return T("//s1.hdslb.com/bfs/seed/jinkela/short/unios/"+be+".min.js",{lib:"Unios"})},F=function(ge){try{return window.Unios?Promise.resolve(window.Unios.request(ge)):Promise.resolve(q$1()).then(function(){return window.Unios.request(ge)})}catch(be){return Promise.reject(be)}},J=function(){try{return window.BToast?Promise.resolve(window.BToast):Promise.resolve(T("//s1.hdslb.com/bfs/seed/jinkela/short/webui/toast/index.js",{lib:"BToast"}))}catch(ge){return Promise.reject(ge)}},Z$1=function(ge,be,$e){try{return window.BToast?Promise.resolve(window.BToast.show(ge,be,$e)):Promise.resolve(J()).then(function(){return window.BToast.show(ge,be,$e)})}catch(ke){return Promise.reject(ke)}};function Y(ge){return new Promise((be,$e)=>{F({url:"//api.bilibili.com/x/web-interface/card",params:{mid:ge,photo:"true"}}).then(ke=>{if(ke.code!==0||!ke.data)return $e(new Error(ke.message||"get card data error"));be(ke.data)}).catch($e)})}let b$1="";function V(){var ge;return b$1||(b$1=((ge=document.querySelector("meta[name=spm_prefix]"))==null?void 0:ge.getAttribute("content"))||"",b$1)}function W$1(ge,be){return new Promise(($e,ke)=>{F({url:"//api.bilibili.com/x/relation/modify",method:"POST",data:{act:be?1:2,fid:ge,spmid:V(),re_src:0},headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(Ee=>{if(Ee.code!==0)return ke(new Error(Ee.message||"modify relation error"));$e(Ee)}).catch(ke)})}function C(ge,be,$e){return be in ge?Object.defineProperty(ge,be,{value:$e,enumerable:!0,configurable:!0,writable:!0}):ge[be]=$e,ge}function $$1(ge){var be=Object.keys(ge);if(be.length===0)return"";var $e="";return be.forEach(function(ke){ge[ke]!==void 0&&($e+="".concat(ke,":").concat(ge[ke],";"))}),$e}function L$1(ge){return!(!ge||typeof ge!="object"||typeof ge.render_scheme>"u"||!ge.colors_info||!ge.colors_info.color||!Array.isArray(ge.colors_info.color))}var S$1="to top right";function B(ge,be){return"linear-gradient(".concat(ge,",").concat(be,")")}function ee$1(ge){return ge[0]==="#"?ge:"#".concat(ge)}function te(ge){var be=ge.length,$e=[],ke=[],Ee=function(Ce,Te){return"".concat(ee$1(Ce)," ").concat(Te/(be-1)*100,"%")};return ge.forEach(function(Ce,Te){$e.push(Ee(Ce.color_day,Te)),ke.push(Ee(Ce.color_night,Te))}),{light:B(S$1,$e.join(",")),dark:B(S$1,ke.join(","))}}function ie$1(){return{"background-clip":"text","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}function re$1(ge,be){be=be||{};var $e=be.theme||"",ke=be.stringType||!1,Ee="",Ce="";if(L$1(ge)){var Te=ge.render_scheme,Se=ge.colors_info.color;if(Te!==1&&Te!=="Colorful"||!Se||Se.length===0)return null;var Ke=te(Se);Ee=Ke.light,Ce=Ke.dark}if(Ee&&Ce){var Je={base:ie$1(),theme:{light:{"background-image":Ee},dark:{"background-image":Ce}}};if(["light","dark"].includes($e)){var mt=Object.assign({},Je.base,Je.theme[$e]);return ke?$$1(mt):mt}if(be.variable&&typeof be.variable=="string"&&/^--[a-z]/.test(be.variable)){var bt;Je.variable=(bt={},C(bt,"".concat(be.variable,"-light"),Ee),C(bt,"".concat(be.variable,"-dark"),Ce),bt)}return Je}return null}var ne=function(ge){return ge[ge.DEFAULT=0]="DEFAULT",ge[ge.PAGE=1]="PAGE",ge[ge.IFRAME=2]="IFRAME",ge[ge.SITE=3]="SITE",ge}({}),x=!1;function oe(){return x===!1&&(x=typeof window<"u"),x}function ae$1(ge,be){if(!(ge instanceof be))throw new TypeError("Cannot call a class as a function")}function v(ge){return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(be){return typeof be}:function(be){return be&&typeof Symbol=="function"&&be.constructor===Symbol&&be!==Symbol.prototype?"symbol":typeof be},v(ge)}function se$1(ge,be){if(v(ge)!="object"||!ge)return ge;var $e=ge[Symbol.toPrimitive];if($e!==void 0){var ke=$e.call(ge,be||"default");if(v(ke)!="object")return ke;throw new TypeError("@@toPrimitive must return a primitive value.")}return(be==="string"?String:Number)(ge)}function P$1(ge){var be=se$1(ge,"string");return v(be)=="symbol"?be:be+""}function R$1(ge,be){for(var $e=0;$e<be.length;$e++){var ke=be[$e];ke.enumerable=ke.enumerable||!1,ke.configurable=!0,"value"in ke&&(ke.writable=!0),Object.defineProperty(ge,P$1(ke.key),ke)}}function le(ge,be,$e){return be&&R$1(ge.prototype,be),$e&&R$1(ge,$e),Object.defineProperty(ge,"prototype",{writable:!1}),ge}function k$1(ge,be,$e){return(be=P$1(be))in ge?Object.defineProperty(ge,be,{value:$e,enumerable:!0,configurable:!0,writable:!0}):ge[be]=$e,ge}var de$1=function(){function ge(be){var $e=this;ae$1(this,ge),k$1(this,"all",new Map),k$1(this,"weakMap",new WeakMap),k$1(this,"defaultEventTarget",void 0),be?be instanceof Element||be instanceof Document?this.defaultEventTarget=be:this.defaultEventTarget=document.querySelector(be)||document:this.defaultEventTarget=document,this.all.clear=function(){$e.all.forEach(function(ke,Ee){ke.forEach(function(Ce){$e.off(Ee,Ce)})}),$e.all.clear()}}return le(ge,[{key:"on",value:function(be,$e,ke){this.all.has(be)||this.all.set(be,[]),this.weakMap.has($e)||this.weakMap.set($e,[]);var Ee=ke||this.defaultEventTarget,Ce=Ee.addEventListener,Te=function(Se){$e({sourceType:ne.PAGE,customEvent:Se,event:be,payload:Se.detail,samePage:!0,emitter:Ce})};this.all.get(be).push($e),this.weakMap.get($e).push(Te),Ce(be,Te)}},{key:"off",value:function(be,$e,ke){var Ee=this,Ce=ke||this.defaultEventTarget,Te=Ce.removeEventListener;if(!$e){var Se;(Se=this.all.get(be))===null||Se===void 0||Se.forEach(function(Je){var mt=Ee.weakMap.get(Je);mt.forEach(function(bt){Te(be,bt)})}),this.all.delete(be);return}var Ke=this.weakMap.get($e);Ke.forEach(function(Je){Te(be,Je)})}},{key:"emit",value:function(be,$e,ke){var Ee=new CustomEvent(be,{detail:$e}),Ce=ke||this.defaultEventTarget,Te=Ce.dispatchEvent;Te(Ee);var Se=new CustomEvent("*",{detail:$e});Te(Se)}}]),ge}(),ce$1=function(){var ge=null;return function(){var be=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return oe()?ge||(ge=new de$1(be),ge):(console.error("useEvent must be used in the browser environment"),null)}}(),p$1=(ge=>(ge[ge.DEFAULT=-1]="DEFAULT",ge[ge.NOT_FOLLOW=0]="NOT_FOLLOW",ge[ge.QUIET=1]="QUIET",ge[ge.ONE_WAY=2]="ONE_WAY",ge[ge.TWO_WAY=6]="TWO_WAY",ge[ge.BLOCK=128]="BLOCK",ge))(p$1||{}),w$1=(ge=>(ge.OPEN_BOOKMARK="follow.openBookmark",ge.TRIGGER_SETTING_BOOKMARK="follow.triggerSettingBookmark",ge.TRIGGER_DELETE_BOOKMARK="follow.triggerDeleteBookmark",ge.TRIGGER_REMOVE_FANS="follow.triggerRemoveFans",ge.CREATED_USER_BOOKMARK="follow.createdUserBookmark",ge.SET_USER_BOOKMARK="follow.setUserBookmark",ge.REMOVED_USER_FANS="follow.removedUserFans",ge.CHANGED_USER_RELATION="follow.changedUserRelation",ge))(w$1||{}),ue$1=Object.defineProperty,he$1=Object.getOwnPropertyDescriptor,c$2=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?he$1(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&ue$1(be,$e,Ee),Ee};const fe$1="//i0.hdslb.com/bfs/face/member/noface.jpg",U$1=300,E$1=(ge,be=1)=>(be=Math.max(0,be),typeof ge!="number"&&(ge=Number(ge)),isNaN(ge)?0:ge>1e8?(ge/1e8).toFixed(be)+"\u4EBF":ge>1e4?(ge/1e4).toFixed(be)+"\u4E07":ge),I=366,D$1=85;let s$2=class extends s$4{constructor(){super(...arguments),this.event=ce$1(),this.userData=null,this.uid="",this.data=null,this.showSpinner=!1,this.isFollowing=!1,this.disposables=p$3(),this.cacheData={},this.showTimer=null,this.hideTimer=null,this.lastShowEl=null}get backgroundImage(){var ge;return utils$2.getBmgSrcNext(((ge=this.data)==null?void 0:ge.space.l_img)||"",{w:I,h:D$1,c:!0,dpr:2})}get faceSrc(){var ge;return utils$2.getBmgSrcNext(((ge=this.data)==null?void 0:ge.card.face)||fe$1,{w:48,h:48,dpr:2})}get ovType(){var ke;var ge,be,$e;return(ke=($e=(be=(ge=this.data)==null?void 0:ge.card)==null?void 0:be.Official)==null?void 0:$e.type)!=null?ke:-1}get ovText(){var ge;return this.ovType>-1?`bilibili${this.ovType===1?"\u673A\u6784":"\u4E2A\u4EBA"}\u8BA4\u8BC1\uFF1A${(ge=this.data)==null?void 0:ge.card.Official.title}`:""}get name(){var ge;return this.data?(ge=this.data)==null?void 0:ge.card.name:""}get nameRenderStyle(){var ge,be,$e;if(!((be=(ge=this.data)==null?void 0:ge.card)!=null&&be.name_render))return"";const ke=re$1(($e=this.data)==null?void 0:$e.card.name_render,{variable:"--name-render-bg"});return ke!=null&&ke.variable?ke.variable:null}get nameStyle(){var ge;if(!((ge=this.data)!=null&&ge.card))return null;if(this.nameRenderStyle)return this.nameRenderStyle;let be="";const{vip:$e}=this.data.card;return $e.status===1&&$e.nickname_color&&(be=$e.nickname_color),be?{color:be}:null}get gender(){let ge="";return this.data&&["\u7537","\u5973"].includes(this.data.card.sex)&&(ge=this.data.card.sex==="\u7537"?"male":"female"),ge}get genderImg(){return utils$2.getBmgSrcNext(`//i0.hdslb.com/bfs/seed/jinkela/short/webui/user-profile/img/gender_${this.gender}.png`,{dpr:2})}get level(){const ge={img:"",url:"//www.bilibili.com/html/help.html#k_5"};if(!this.data)return ge;const{is_senior_member:be,level_info:{current_level:$e}}=this.data.card;return ge.img=s$2.getLevelImgSrc($e,!!be),ge}get vipLabel(){var ge,be;const{vip:$e}=((ge=this.data)==null?void 0:ge.card)||{};return!$e||!((be=$e.label)!=null&&be.text)?null:{img:$e.label.img_label_uri_hans_static||"",text:$e.label.text,style:{backgroundColor:$e.label.bg_color,color:$e.label.text_color}}}get stats(){var ge,be,$e,ke,Ee;return[{key:"follow",count:String(E$1(((be=(ge=this.data)==null?void 0:ge.card)==null?void 0:be.attention)||0)),url:this.getSpaceLink("follow"),label:"\u5173\u6CE8"},{key:"fans",count:String(E$1(((ke=($e=this.data)==null?void 0:$e.card)==null?void 0:ke.fans)||0)),url:this.getSpaceLink("fans"),label:"\u7C89\u4E1D"},{key:"like",count:String(E$1(((Ee=this.data)==null?void 0:Ee.like_num)||0)),label:"\u83B7\u8D5E"}]}get signText(){var ge;return(ge=this.data)==null?void 0:ge.card.sign}appendToParent(ge){let be=document.body;if(ge){const $e=document.querySelector(ge);$e&&(be=$e)}be.appendChild(this)}setup(ge){const be=this.disposables.addEventListener(ge,"mouseenter",this.refMouseEnter.bind(this)),$e=this.disposables.addEventListener(ge,"mouseleave",this.refMouseLeave.bind(this));return()=>{be(),$e()}}setPosition(ge){const{innerWidth:be}=window,{width:$e,bottom:ke,left:Ee,top:Ce}=ge.getBoundingClientRect(),Te=I,Se=290;let Ke=Ee+$e/2;be-Ke<Te&&(Ke-=Te),this.style.left=`${Ke}px`,Ce>Se?(this.style.top="",this.style.bottom=`${window.innerHeight-Ce}px`):(this.style.bottom="",this.style.top=`${ke}px`),this.style.zIndex=`${I$2()}`}clearTimer(ge){if(ge==="show"){this.showTimer&&(clearTimeout(this.showTimer),this.showTimer=null);return}this.hideTimer&&(clearTimeout(this.hideTimer),this.hideTimer=null)}refMouseEnter(ge){const be=ge.target;if(this.clearTimer("hide"),this.showTimer){if(this.lastShowEl===be)return;this.clearTimer("show")}this.lastShowEl=be,this.showTimer=window.setTimeout(()=>{this.showTimer=null,this.show(be)},U$1)}hide(){this.hideTimer=window.setTimeout(()=>{this.visible(!1),this.lastShowEl=null,this.hideTimer=null},U$1)}refMouseLeave(ge){ge.target===this.lastShowEl&&(this.clearTimer("show"),this.hide())}visible(ge){this.style.display=ge?"block":""}async show(ge){var be;this.parentElement||this.appendToParent(ge.getAttribute("data-user-profile-parent")||"");const $e=ge.getAttribute("data-user-profile-id");if(!$e){this.uid="";return}this.uid=$e,this.setPosition(ge),this.visible(!0);try{const ke=this.cacheData[$e];if(ke)this.data=ke;else{this.showSpinner=!0;const Ee=await Y($e);this.cacheData[$e]=Ee,this.data=Ee}this.isFollowing=((be=this.data)==null?void 0:be.following)||!1}catch(ke){console.warn(ke.message)}this.showSpinner=!1}connectedCallback(){super.connectedCallback(),z$1().then(ge=>{this.userData=ge.data||null}),this.disposables.addEventListener(this,"mouseenter",()=>{this.clearTimer("hide")}),this.disposables.addEventListener(this,"mouseleave",()=>{this.hide()}),this.event.on(w$1.CHANGED_USER_RELATION,ge=>{var be,$e;if(!ge.payload)return;const{mineId:ke,targetId:Ee,attribute:Ce}=ge.payload;if(ke&&(be=this.userData)!=null&&be.mid&&String(ke)!==String(this.userData.mid))return;const Te=[p$1.ONE_WAY,p$1.TWO_WAY,p$1.QUIET].includes(Ce);this.uid===String(Ee)&&(this.isFollowing=Te),(($e=this.data)==null?void 0:$e.card.mid)===String(Ee)&&(this.data.following=Te),this.cacheData[Ee]&&(this.cacheData[Ee].following=Te)}),this.disposables.add(()=>{this.event.off(w$1.CHANGED_USER_RELATION)})}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose(),this.cacheData={},this.lastShowEl=null,this.userData=null}handleJumpMsg(){window.open(`https://message.bilibili.com/#/whisper/mid${this.uid}`)}getSpaceLink(ge){if(!this.data)return"";const be=`//space.bilibili.com/${this.uid}`;switch(ge){case"follow":return`${be}/fans/follow`;case"fans":return`${be}/fans/fans`;default:return be}}async handleFollow(){var ge;try{await W$1(this.uid,!this.isFollowing),this.isFollowing=!this.isFollowing,this.data&&(this.data.following=this.isFollowing),this.event.emit(w$1.CHANGED_USER_RELATION,{mineId:((ge=this.userData)==null?void 0:ge.mid)||"",targetId:this.uid,attribute:this.isFollowing?p$1.ONE_WAY:p$1.NOT_FOLLOW,preAttribute:this.isFollowing?p$1.NOT_FOLLOW:p$1.ONE_WAY})}catch(be){Z$1(be.message||"\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}}ovIconTemplate(){return x$2`<i id="ov-icon" class="ov-${this.ovType}"></i>`}ovTemplate(){return x$2`<div id="ov">
      ${this.ovIconTemplate()}
      <span>${this.ovText}</span>
    </div>`}vipLabelTemplate(){return this.vipLabel?this.vipLabel.img?x$2`<div id="vip"><img src="${this.vipLabel.img}" /></div>`:x$2`<div id="vip">
      <label style="${o$3(this.vipLabel.style)}"><span>${this.vipLabel.text}</span></label>
    </div>`:""}viewTemplate(){return x$2`
      <div id="view">
        <div
          id="bg"
          style="${o$3({backgroundImage:`url(${this.backgroundImage})`})}"
        ></div>
        <a href="${this.getSpaceLink("")}" target="_blank" id="avatar">
          <img id="face" src="${this.faceSrc}" />
          ${this.ovType>-1?this.ovIconTemplate():""}
        </a>
        <div id="body">
          <div id="title">
            <a id="name" class="${this.nameRenderStyle?"render-style":""}" style="${this.nameStyle?o$3(this.nameStyle):""}"
              >${this.name}</a
            >
            ${this.gender?x$2`<div id="gender"><img width="16" height="16" src="${this.genderImg}" /></div>`:""}
            ${this.level.img?x$2`<a id="level" href="${this.level.url}" target="_blank"><img src="${this.level.img}" /></a>`:""}
            ${this.vipLabelTemplate()}
          </div>
          <div id="content">
            <div id="stats">
              ${this.stats.map(ge=>ge.url?x$2`<a id="${ge.key}" href="${ge.url}" target="_blank"><span>${ge.count}</span>${ge.label}</a>`:x$2`<a id="${ge.key}"><span>${ge.count}</span>${ge.label}</a>`)}
            </div>
            ${this.ovType>-1?this.ovTemplate():""}
            <div id="sign">${this.signText}</div>
          </div>
          <div id="action">
            <button id="follow" class="${this.isFollowing?"active":""}" @click=${this.handleFollow}>
              <bili-icon icon="BDC/plus_add_line/2" size="16"></bili-icon>
              <span>${this.isFollowing?"\u5DF2\u5173\u6CE8":"\u5173\u6CE8"}</span>
            </button>
            <button id="chat" @click=${this.handleJumpMsg}>发消息</button>
          </div>
        </div>
      </div>
    `}spinnerTemplate(){return x$2`<div id="spinner">正在加载中...请稍候</div>`}fallbackTemplate(){return x$2`<div id="fallback">加载出错，请稍后再试</div>`}render(){return x$2`<div id="wrap">
      ${this.showSpinner?this.spinnerTemplate():this.data?this.viewTemplate():this.fallbackTemplate()}
    </div>`}static getLevelImgSrc(ge,be){return`//i0.hdslb.com/bfs/seed/jinkela/short/webui/user-profile/img/level_${be?"h":ge}.svg`}};s$2.styles=i$6`
    :host {
      width: ${I}px;
      display: none;
      position: fixed;
    }

    #wrap {
      background-color: var(--bg1_float);
      border-radius: 8px;
      box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.1);
      color: var(--text3);
      font-size: 12px;
      width: 100%;
      font-family: var(--bili-font-family);
      -webkit-font-smoothing: antialiased;
    }
    #spinner {
      padding: 12px;
    }

    #bg {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 8px 8px 0 0;
      height: ${D$1}px;
      left: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      width: 366px;
    }

    #avatar {
      border-radius: 50%;
      height: 48px;
      left: 10px;
      position: absolute;
      top: 95px;
      width: 48px;
    }

    #avatar #face {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    #avatar #ov-icon {
      background-color: var(--text_white);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 50%;
      height: 14px;
      position: absolute;
      right: 0;
      top: 34px;
      width: 14px;
    }
    #ov-icon.ov-0 {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASZSURBVHgBxVptThNBGJ5Wo4FAgjGBSCSuMZHon5Z4AMoN4ATACVpOwHIC6gkoJ6A3KJygNDH+8Icu0YhUCU0wEAxmfZ/d2XZnZ/ZzpvVJhk1nttPn/ZyZdygxA3Bdd44e69Sq1F7w5xxvARzeetS61E5KpZLD/hdAmtoutY5bHF1qm9QsNimEiF+5ZnEwdkHGRDyK3TycSlle4po5Yr5vq3F9zNhtjz9PGbsfMPZ34I89oFB4TFM8ojZFU8yuUquxBDjU1rLESKoARH6THk0mBqQPkPz5nrGL5ohsVkAYCPFs1xdOBibcJiHaSdMkCsDNaUsDIP5jzyduAk+3kgSxSYi9uK/GChBLvk8a/27n13gaYJFFm4TZVI3GCqEUgMgjpx9JA992zGk9DvMNxpb2VSNbJMRhtFMSgAcsFpqRz8NlPm/4AToJTFOgv+74wT8CTL4SDWyVAF/oYQmdH1f8zDJJIMAhhIhTEmAl3FEOf+B+bwlfgdtMmjwAa3/difZWiaMd7hgKwF1HGGSXLTM+jwzzzo0L0Hj0m37SEFF3/b2Xh7AFbOG1O4eyTWz2yg6QR3YpCjnjgXwj+OAJwLUvquecvvjHYVqIkr/psdwAeVmRQysEFqgJw9D+5SHTQpQ8iBSNpX4z1gqBAHXhC9C+DubrsttcnzAtXEixsIo/Ze4+VWM/hkBdUgS+7hrSl+aswY1ggZr0Q0V9H+StlnpMNxXDhWQlrEMAM9pPIg/cGFhL5CRQhQAVoeu2y3IjC3kTm7/fx9EeCwJYQtfdGcuFNPKAqZVctmKlhDOc0HX6JLu2cLp6m8FimO9+kDx+tp3uZtjcVa/CPYOHysmyAOSXO9nexQ+LO8tikLnNlVkR4PCx3DFDCsii/RhAAFGsLKRw9Ls3EJQAyP9qZXtXwQ0uBCZzwktpboR8/OFl8jsI7LTdZx7yACwvwoEFRNtNV5gRpM2TlzwgH/o9AcS8ObPGtAErTlXjx3FIyksekOfsjccCSeTPNcoxs6vRni4EaIsv1fSzy3SMACCPA0oRBIUwESdlOiQjYo+F7vkG04KsKT3y3py1aA8O+E6wDog7uIU600LUArrkgUWp5uv5YTn0YZQ74UJFrQBTh9OdCfIoPcop1FO6JwB3I/HIA4mLxEJY+ybIeyVHSfutoMAV3krIVljMVar3ESyCJsgDOJrK2h+e8oXKHC8aiaxRXOoXTHu6wNlaPp7ukfbt4IOqtIj9sRiFn9YmVxcNoN6qO0Re2MOodqNUxY1s8F4dxef2cWCmptqqg5O0TZAE4MEhFiURD2+6+utDFsBt1Fv1bdWVk/I8QC+2WChQhkDd3jpQBZU+QPj5vrok4/t9WzWQdsVks2hQAyi7IMPoVu8CBIUwddoWgjaKLJd86/QgtSsu+QJBUIrJW0vyFksivtCIIw6f3+HeEIs816yIKiv2JWQpCIIKBGqrECh8zYqGRIA9zVQl7ZoVO+QN4/+KAJdyx4ur6AWGccAa1FquWXjE3dDFxdjBBdly/X/YKIqOLvFMMZBFGOYXibHa4UhnMTFeBrzBt8/4s803kVr4B9ZWrx2gQRFMAAAAAElFTkSuQmCC);
    }
    #ov-icon.ov-1 {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT3SURBVHgBxVq9bxxFFH/3kVzwWY5FAUYK4iK7oEDyhhIh4VSkTEQaqnMKKpCCK2hQLqJKBUhQUeTcx0rKUBn/A/gsUSBxUS6iiJUmTnSX2Mbn5f3mZk+zs7MfNzN3/KTx6t7e7f7e18ybNy6RB4RhuMiXqzwCHu/J66IcEXpy7PHY5bFTKpV69H8BpHnc4rEd2mOXR5NHg2YFhfjz0C/uTl2RKRHXcWsSTqUiX5KWuU+j2Dai82JI3VdD2ntxQt3BkPpDov5JKO7NV0u0dJbHuTIt1ysULFQpOF/JeKPIlctFciRXASbf5MuPFE9IARDcenpM93hEZItiqVYWSjQv1IRiBhzwuMFKPMh6TqYC0p0tXQ6ym/8cCeI+cOWtM1mKtFiJ22m/TVUgjTws3mbyk1o8D/BI892aUMaAVCWMCjB5zOn3dfkvjw+9WT0N1985S19ePGe6tc5KbOrChAIyYbHQjGMe1v7ur1fUeTmkWWBlrkw/fFAXya8AOXFJT2yTAo/50lBlX3T6PMOc0iwRLFSEEho6rMAlVRDLGhn3DVWGsJk1eQDexrs1BMyxpQrGCsjQid18+OzYS8wjObc/WqBPzQmaintPje+/GY5qLwHVAy31W/tHp2KqdAXIr/MACq2aGjaTMx7Ifx19EApI6zf1H+4fuU2VKnmg2588FKM1R8PYC5EH1tS7sP7DZ/+SC3TyIIJSwwaGlX7shUiBm+pd19D5jOdylTyAWskFhlz4BH/KMnyC+MtOyBZI1K8MC1Hnpf0zga2kAmsII3hgLfYitpRt7IP8tytvGO89Grh5ACFkMOxVKBC3vqWlssgDPtYSwzMCKLCqSmwslUse+wMPxZ/BAw0o0FAl+4eTvSiPPNAd+KmhHg0SHlitkq7AcXFXo+jKIw98/OYZCj6spt7vD0O68/fr3DDD9zQsJp5a1NVRxVgEqCq1ytIKBm6LZbIANh+Gctcad7qvrZMcChyogiKklmolbzsykC+66pu4IYSgwLi6m6/AVZnPEaXu53/0M7/zDefGlZzqcxLyAAynoQcPdFTJSr1CPrBSz47OSckDb9cSzxQKPFElq+er5Aq4OssQ2KjYFIuGZ+4lPTBnlddU9Bku7RhsMzXs4k2xxlHAHnCdXZZTrA/ybctKd9QIS0THTpk3yUji31UpymEXGF7kRB5YTbYiscHvRb7eUe9cd1RADyFX8sD6hZouQrtzvKHBh/F6gBCy9QJcrbYIfZBHvWVoOwqjC6kMo5/Uu9hR2eTCct0veRjEYP121OBS1Up4oZn8YS4GcoX2QR7A3tpg/XGfNGZi2TSKHTD8zHP21pT7oWlAGBu2p7fZ+q3og6m1iL5obJe28edgZn3RCJgIfg3mdXGPyV9UBaYV5xppBd737895WeCKIqUvCk6XdWGClUyODVWGfIA1XNeHIsA7Ukr1G6Yjp6wDjhZp+QCgX+qja6dDTBqcsClrUCzuVeQdMbXIoAQ6d5hhfnPs3kWIGmEp03YqeaDIIR9Oa+6S4ZAvUgQnk5N6JFosYfEU4oj5DSbfznrOJMes26Q1AFSg5YGZCm2Z/cNTbg6EsWNWbJRQDqNcx4QQZJftqJCvef9XBIRUOF081w8wvAPe4NEO/UIQD5WDi6lDKrIejv5hwxbbrsS99EXCUY6s0WgFR6uyQfF8OZADsf1EXh/IItIJ/wGIiiU8ye7cIAAAAABJRU5ErkJggg==);
    }

    #body {
      box-sizing: border-box;
      padding: 97px 20px 16px 70px;
    }

    #title {
      align-items: center;
      display: flex;
      height: 21px;
      padding-bottom: 10px;
    }
    #title #name {
      color: var(--text1);
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
    }
    #title #name.render-style {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: var(--name-render-bg-light);
    }
    #title #name.render-style.dark {
      background-image: var(--name-render-bg-dark);
    }
    #title #gender {
      display: block;
      height: 16px;
      margin-left: 6px;
      width: 16px;
    }
    #title #level {
      margin-left: 6px;
      margin-right: -2px;
      display: flex;
    }
    #level img {
      width: 30px;
    }
    #vip {
      margin-left: 6px;
    }
    #vip img {
      display: flex;
      height: 20px;
    }
    #vip label {
      background-color: var(--brand_pink);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--text_white);
      font-size: 12px;
      font-weight: 400;
      height: 16px;
      line-height: 16px;
      margin-left: 0;
      max-width: 58px;
      overflow: hidden;
      white-space: nowrap;
    }
    #vip label span {
      align-items: center;
      display: inline-flex;
      justify-content: center;
      transform: scale(0.83);
      transform-origin: center;
    }

    #content {
    }
    #content #stats {
      align-items: center;
      display: flex;
      font-size: 12px;
      padding-bottom: 10px;
    }
    #content #stats a {
      color: var(--text3);
      padding-right: 18px;
      text-decoration: none;
    }
    #content #stats a span {
      color: var(--text1);
      display: inline-block;
      margin-right: 3px;
    }
    #content #ov {
      color: var(--text3);
      font-size: 12px;
      line-height: 17px;
      margin-bottom: 10px;
    }
    #content #ov i {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      display: inline-block;
      height: 14px;
      margin-right: 2px;
      vertical-align: sub;
      width: 14px;
    }
    #content sign {
      -webkit-line-clamp: 2;
      color: var(--text3);
      display: -webkit-box;
      line-height: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
    }
    #action {
      align-items: center;
      display: flex;
      margin-top: 16px;
    }
    #action button {
      align-items: center;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      cursor: pointer;
      display: flex;
      font-size: 14px;
      height: 30px;
      justify-content: center;
      transition: all 0.3s;
      width: 100px;
    }
    #action button#follow {
      color: var(--text_white);
      border-color: var(--brand_blue);
      background-color: var(--brand_blue);
    }
    #action button#follow bili-icon {
      margin-right: 3px;
    }
    #action button#follow.active {
      background-color: var(--graph_bg_thick);
      border-color: var(--graph_bg_thick);
      color: var(--text3);
    }
    #action button#follow.active bili-icon {
      display: none;
    }
    #action button#follow.active:hover {
      background-color: var(--graph_bg_regular);
      border-color: var(--graph_bg_regular);
    }
    #action button#follow:hover {
      background-color: #00b8f6;
      border-color: #00b8f6;
    }
    #action button#chat {
      background-color: transparent;
      border-color: var(--text3);
      color: var(--text2);
      margin-left: 8px;
    }
  `;c$2([t$1()],s$2.prototype,"uid",2);c$2([t$1()],s$2.prototype,"data",2);c$2([t$1()],s$2.prototype,"showSpinner",2);c$2([t$1()],s$2.prototype,"isFollowing",2);c$2([t$1()],s$2.prototype,"backgroundImage",1);c$2([t$1()],s$2.prototype,"faceSrc",1);c$2([t$1()],s$2.prototype,"ovType",1);c$2([t$1()],s$2.prototype,"ovText",1);c$2([t$1()],s$2.prototype,"name",1);c$2([t$1()],s$2.prototype,"nameRenderStyle",1);c$2([t$1()],s$2.prototype,"nameStyle",1);c$2([t$1()],s$2.prototype,"gender",1);c$2([t$1()],s$2.prototype,"genderImg",1);c$2([t$1()],s$2.prototype,"level",1);c$2([t$1()],s$2.prototype,"vipLabel",1);c$2([t$1()],s$2.prototype,"stats",1);c$2([t$1()],s$2.prototype,"signText",1);s$2=c$2([e$5("bili-user-profile")],s$2);customElements.get("bili-user-profile")||customElements.define("bili-user-profile",s$2);window.__WEB_UI_VERSION__="1.0.5";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1=e$2(class extends i$2{constructor(ge){var be;if(super(ge),ge.type!==t.ATTRIBUTE||ge.name!=="class"||((be=ge.strings)===null||be===void 0?void 0:be.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(ge){return" "+Object.keys(ge).filter(be=>ge[be]).join(" ")+" "}update(ge,[be]){var $e,ke;if(this.it===void 0){this.it=new Set,ge.strings!==void 0&&(this.nt=new Set(ge.strings.join(" ").split(/\s/).filter(Ce=>Ce!=="")));for(const Ce in be)be[Ce]&&!(!(($e=this.nt)===null||$e===void 0)&&$e.has(Ce))&&this.it.add(Ce);return this.render(be)}const Ee=ge.element.classList;this.it.forEach(Ce=>{Ce in be||(Ee.remove(Ce),this.it.delete(Ce))});for(const Ce in be){const Te=!!be[Ce];Te===this.it.has(Ce)||((ke=this.nt)===null||ke===void 0?void 0:ke.has(Ce))||(Te?(Ee.add(Ce),this.it.add(Ce)):(Ee.remove(Ce),this.it.delete(Ce)))}return T$2}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1=Symbol.for(""),l$1=ge=>{if((ge==null?void 0:ge.r)===e$1)return ge==null?void 0:ge._$litStatic$},i=(ge,...be)=>({_$litStatic$:be.reduce(($e,ke,Ee)=>$e+(Ce=>{if(Ce._$litStatic$!==void 0)return Ce._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${Ce}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(ke)+ge[Ee+1],ge[0]),r:e$1}),s$1=new Map,a$1=ge=>(be,...$e)=>{const ke=$e.length;let Ee,Ce;const Te=[],Se=[];let Ke,Je=0,mt=!1;for(;Je<ke;){for(Ke=be[Je];Je<ke&&(Ce=$e[Je],(Ee=l$1(Ce))!==void 0);)Ke+=Ee+be[++Je],mt=!0;Je!==ke&&Se.push(Ce),Te.push(Ke),Je++}if(Je===ke&&Te.push(be[ke]),mt){const bt=Te.join("$$lit$$");(be=s$1.get(bt))===void 0&&(Te.raw=Te,s$1.set(bt,be=Te)),$e=Se}return ge(be,...$e)},n=a$1(x$2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i$2{constructor(be){if(super(be),this.et=A$1,be.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(be){if(be===A$1||be==null)return this.ft=void 0,this.et=be;if(be===T$2)return be;if(typeof be!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(be===this.et)return this.ft;this.et=be;const $e=[be];return $e.raw=$e,this.ft={_$litType$:this.constructor.resultType,strings:$e,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$2(e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:l}=j,r=()=>document.createComment(""),c$1=(ge,be,$e)=>{var ke;const Ee=ge._$AA.parentNode,Ce=be===void 0?ge._$AB:be._$AA;if($e===void 0){const Te=Ee.insertBefore(r(),Ce),Se=Ee.insertBefore(r(),Ce);$e=new l(Te,Se,ge,ge.options)}else{const Te=$e._$AB.nextSibling,Se=$e._$AM,Ke=Se!==ge;if(Ke){let Je;(ke=$e._$AQ)===null||ke===void 0||ke.call($e,ge),$e._$AM=ge,$e._$AP!==void 0&&(Je=ge._$AU)!==Se._$AU&&$e._$AP(Je)}if(Te!==Ce||Ke){let Je=$e._$AA;for(;Je!==Te;){const mt=Je.nextSibling;Ee.insertBefore(Je,Ce),Je=mt}}}return $e},f=(ge,be,$e=ge)=>(ge._$AI(be,$e),ge),s={},a=(ge,be=s)=>ge._$AH=be,m=ge=>ge._$AH,p=ge=>{var be;(be=ge._$AP)===null||be===void 0||be.call(ge,!1,!0);let $e=ge._$AA;const ke=ge._$AB.nextSibling;for(;$e!==ke;){const Ee=$e.nextSibling;$e.remove(),$e=Ee}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(ge,be,$e)=>{const ke=new Map;for(let Ee=be;Ee<=$e;Ee++)ke.set(ge[Ee],Ee);return ke},c=e$2(class extends i$2{constructor(ge){if(super(ge),ge.type!==t.CHILD)throw Error("repeat() can only be used in text expressions")}ct(ge,be,$e){let ke;$e===void 0?$e=be:be!==void 0&&(ke=be);const Ee=[],Ce=[];let Te=0;for(const Se of ge)Ee[Te]=ke?ke(Se,Te):Te,Ce[Te]=$e(Se,Te),Te++;return{values:Ce,keys:Ee}}render(ge,be,$e){return this.ct(ge,be,$e).values}update(ge,[be,$e,ke]){var Ee;const Ce=m(ge),{values:Te,keys:Se}=this.ct(be,$e,ke);if(!Array.isArray(Ce))return this.ut=Se,Te;const Ke=(Ee=this.ut)!==null&&Ee!==void 0?Ee:this.ut=[],Je=[];let mt,bt,$t=0,St=Ce.length-1,It=0,Bt=Te.length-1;for(;$t<=St&&It<=Bt;)if(Ce[$t]===null)$t++;else if(Ce[St]===null)St--;else if(Ke[$t]===Se[It])Je[It]=f(Ce[$t],Te[It]),$t++,It++;else if(Ke[St]===Se[Bt])Je[Bt]=f(Ce[St],Te[Bt]),St--,Bt--;else if(Ke[$t]===Se[Bt])Je[Bt]=f(Ce[$t],Te[Bt]),c$1(ge,Je[Bt+1],Ce[$t]),$t++,Bt--;else if(Ke[St]===Se[It])Je[It]=f(Ce[St],Te[It]),c$1(ge,Ce[$t],Ce[St]),St--,It++;else if(mt===void 0&&(mt=u(Se,It,Bt),bt=u(Ke,$t,St)),mt.has(Ke[$t]))if(mt.has(Ke[St])){const Dt=bt.get(Se[It]),jt=Dt!==void 0?Ce[Dt]:null;if(jt===null){const zt=c$1(ge,Ce[$t]);f(zt,Te[It]),Je[It]=zt}else Je[It]=f(jt,Te[It]),c$1(ge,Ce[$t],jt),Ce[Dt]=null;It++}else p(Ce[St]),St--;else p(Ce[$t]),$t++;for(;It<=Bt;){const Dt=c$1(ge,Je[Bt+1]);f(Dt,Te[It]),Je[It++]=Dt}for(;$t<=St;){const Dt=Ce[$t++];Dt!==null&&p(Dt)}return this.ut=Se,a(ge,Je),T$2}});var hs=Object.defineProperty,us=(ge,be,$e)=>be in ge?hs(ge,be,{enumerable:!0,configurable:!0,writable:!0,value:$e}):ge[be]=$e,Ie=(ge,be,$e)=>(us(ge,typeof be!="symbol"?be+"":be,$e),$e),Cs=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,he=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?$s(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Cs(be,$e,Ee),Ee};let Ut=class extends s$4{constructor(){super(...arguments),this.disabled=!1,this.trailingIcon=!1,this.hasIcon=!1,this.href="",this.target=""}get name(){var ge;return(ge=this.getAttribute("name"))!=null?ge:""}set name(ge){this.setAttribute("name",ge)}focus(){var ge;(ge=this.buttonElement)==null||ge.focus()}blur(){var ge;(ge=this.buttonElement)==null||ge.blur()}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}render(){const ge=this.disabled&&!this.href,be=this.href?i`a`:i`button`,{ariaLabel:$e,ariaHasPopup:ke,ariaExpanded:Ee}=this;return n`
      <${be}
        class="button ${o$1(this.getRenderClasses())}"
        ?disabled=${ge}
        aria-label="${$e||A$1}"
        aria-haspopup="${ke||A$1}"
        aria-expanded="${Ee||A$1}"
        href=${this.href||A$1}
        target=${this.target||A$1}
      >${this.renderContent()}</${be}>`}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}renderContent(){var ge;const be=x$2`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return x$2`
      ${(ge=this.renderOutline)==null?void 0:ge.call(this)} ${this.trailingIcon?A$1:be}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?be:A$1}
    `}};Ut.styles=i$6``;he([n$4()],Ut.prototype,"disabled",2);he([n$4()],Ut.prototype,"trailingIcon",2);he([n$4()],Ut.prototype,"hasIcon",2);he([n$4()],Ut.prototype,"href",2);he([n$4()],Ut.prototype,"target",2);he([i$3(".button")],Ut.prototype,"buttonElement",2);he([l$6({slot:"icon",flatten:!0})],Ut.prototype,"assignedIcons",2);Ut=he([e$5("bili-button")],Ut);var Es=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,Ss=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Ts(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Es(be,$e,Ee),Ee};let pr=class extends Ut{};pr.styles=i$6`
    :host {
      display: inline-flex;
      height: var(--_container-height);
      outline: none;
      font-family: var(--_label-text-font);
      font-size: var(--_label-text-size);
      line-height: var(--_label-text-line-height);
      font-weight: var(--_label-text-weight);
      -webkit-tap-highlight-color: transparent;
      vertical-align: middle;
    }
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: none;
      outline: none;
      user-select: none;
      appearance: none;
      background: rgba(0, 0, 0, 0);
      text-decoration: none;
      inline-size: 100%;
      position: relative;
      z-index: 0;
      height: 100%;
      font: inherit;
      color: var(--_label-text-color);
      padding-inline-start: var(--_leading-space);
      padding-inline-end: var(--_trailing-space);
      cursor: pointer;
    }
    .button:not([disabled]):hover {
      color: var(--_label-text-color-hover, var(--brand_blue));
    }
    .button::before {
      background-color: var(--_container-color);
      border-radius: inherit;
      content: "";
      inset: 0px;
      position: absolute;
    }
  `;pr=Ss([e$5("bili-text-button")],pr);const b={show:(ge,be,$e)=>{useToast({content:ge,duration:be!=null?be:2e3,...$e})}},Is=ge=>typeof ge!="object"?!1:Object.prototype.toString.call(ge)==="[object Object]",wi=ge=>ge.replace(/[^\d]/g,""),Ei=ge=>new Promise(be=>setTimeout(be,ge)),Ps=ge=>ge.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");class Os{async request(be){return await useRequest(be)}}const ot=new Os,Ds=ge=>JSON.stringify(ge),Ui=async(ge,be,$e)=>{if(ge.request){const{method:ke,data:Ee}=ge.request;if(ke==="POST"&&Is(Ee)){const Ce=Ee;if(!Ce.statistics){const{appId:Te,platform:Se,active:Ke}=($e==null?void 0:$e.payload)||{active:!0,appId:100,platform:5};Ke!==!1&&(Ce.statistics=Ds({appId:Te,platform:Se}))}}}await be()},Ls=ge=>ot.request({url:"/x/v2/reply/report/metadata",params:ge}),As=(ge,be=!1)=>ot.request({method:"POST",url:"/x/v2/reply/action",data:{...ge},headers:{"Content-Type":"application/x-www-form-urlencoded"},chainProxy:$e=>be?$e:$e.with(Ui)}),Rs=(ge,be=!1)=>ot.request({method:"POST",url:"/x/v2/reply/hate",data:{...ge},headers:{"Content-Type":"application/x-www-form-urlencoded"},chainProxy:$e=>be?$e:$e.with(Ui)}),ei=ge=>ot.request({method:"POST",url:"/x/v2/reply/del",data:{...ge},headers:{"Content-Type":"application/x-www-form-urlencoded"}}),Ti=ge=>ot.request({method:"POST",url:"/x/v2/reply/top",data:{...ge},headers:{"Content-Type":"application/x-www-form-urlencoded"}});var Rt=(ge=>(ge[ge.SELECT=1]="SELECT",ge[ge.UNSELECT=2]="UNSELECT",ge[ge.CLOSE=3]="CLOSE",ge[ge.OPEN=4]="OPEN",ge))(Rt||{});const je=ge=>ot.request({method:"POST",url:"/x/v2/reply/subject/modify",data:{...ge},headers:{"Content-Type":"application/x-www-form-urlencoded"}}),Rr=ge=>ot.request({method:"POST",url:"/x/v2/dm/subject/state/update",data:{...ge,type:1},headers:{"Content-Type":"application/x-www-form-urlencoded"}}),Ms=ge=>ot.request({method:"POST",url:"/x/v2/reply/vote/do",data:{...ge},headers:{"Content-Type":"application/x-www-form-urlencoded"}}),js=(ge,be=!1)=>ot.request({url:"/x/v2/reply/report",method:"POST",data:{...ge,gaia_source:"main_web"},headers:{"Content-Type":"application/x-www-form-urlencoded"},chainProxy:$e=>be?$e:$e.with(Ui)}),Mr=(ge,be)=>ot.request({url:"/x/relation/modify",method:"POST",params:be,data:{...ge,gaia_source:"main_web"},headers:{"Content-Type":"application/x-www-form-urlencoded"}}),Bs=ge=>ot.request({method:"POST",baseURL:"//cm.bilibili.com",url:"/commercialorder/api/web_api/v1/main_site/upper/comment/apply_remove",data:{...ge},headers:{"Content-Type":"application/x-www-form-urlencoded"}});function Ns(ge){return{all:ge=ge||new Map,on:function(be,$e){var ke=ge.get(be);ke?ke.push($e):ge.set(be,[$e])},off:function(be,$e){var ke=ge.get(be);ke&&($e?ke.splice(ke.indexOf($e)>>>0,1):ge.set(be,[]))},emit:function(be,$e){var ke=ge.get(be);ke&&ke.slice().map(function(Ee){Ee($e)}),(ke=ge.get("*"))&&ke.slice().map(function(Ee){Ee(be,$e)})}}}var Vs=function(ge){return ge[ge.DEFAULT=0]="DEFAULT",ge[ge.PAGE=1]="PAGE",ge[ge.IFRAME=2]="IFRAME",ge[ge.SITE=3]="SITE",ge}({}),or=!1;function zs(){return or===!1&&(or=typeof window<"u"),or}function Fs(ge,be){if(!(ge instanceof be))throw new TypeError("Cannot call a class as a function")}function ii(ge){return ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(be){return typeof be}:function(be){return be&&typeof Symbol=="function"&&be.constructor===Symbol&&be!==Symbol.prototype?"symbol":typeof be},ii(ge)}function Us(ge,be){if(ii(ge)!="object"||!ge)return ge;var $e=ge[Symbol.toPrimitive];if($e!==void 0){var ke=$e.call(ge,be||"default");if(ii(ke)!="object")return ke;throw new TypeError("@@toPrimitive must return a primitive value.")}return(be==="string"?String:Number)(ge)}function rn(ge){var be=Us(ge,"string");return ii(be)=="symbol"?be:be+""}function _o(ge,be){for(var $e=0;$e<be.length;$e++){var ke=be[$e];ke.enumerable=ke.enumerable||!1,ke.configurable=!0,"value"in ke&&(ke.writable=!0),Object.defineProperty(ge,rn(ke.key),ke)}}function qs(ge,be,$e){return be&&_o(ge.prototype,be),$e&&_o(ge,$e),Object.defineProperty(ge,"prototype",{writable:!1}),ge}function nr(ge,be,$e){return(be=rn(be))in ge?Object.defineProperty(ge,be,{value:$e,enumerable:!0,configurable:!0,writable:!0}):ge[be]=$e,ge}var Hs=function(){function ge(be){var $e=this;Fs(this,ge),nr(this,"all",new Map),nr(this,"weakMap",new WeakMap),nr(this,"defaultEventTarget",void 0),be?be instanceof Element||be instanceof Document?this.defaultEventTarget=be:this.defaultEventTarget=document.querySelector(be)||document:this.defaultEventTarget=document,this.all.clear=function(){$e.all.forEach(function(ke,Ee){ke.forEach(function(Ce){$e.off(Ee,Ce)})}),$e.all.clear()}}return qs(ge,[{key:"on",value:function(be,$e,ke){this.all.has(be)||this.all.set(be,[]),this.weakMap.has($e)||this.weakMap.set($e,[]);var Ee=ke||this.defaultEventTarget,Ce=Ee.addEventListener,Te=function(Se){$e({sourceType:Vs.PAGE,customEvent:Se,event:be,payload:Se.detail,samePage:!0,emitter:Ce})};this.all.get(be).push($e),this.weakMap.get($e).push(Te),Ce(be,Te)}},{key:"off",value:function(be,$e,ke){var Ee=this,Ce=ke||this.defaultEventTarget,Te=Ce.removeEventListener;if(!$e){var Se;(Se=this.all.get(be))===null||Se===void 0||Se.forEach(function(Je){var mt=Ee.weakMap.get(Je);mt.forEach(function(bt){Te(be,bt)})}),this.all.delete(be);return}var Ke=this.weakMap.get($e);Ke.forEach(function(Je){Te(be,Je)})}},{key:"emit",value:function(be,$e,ke){var Ee=new CustomEvent(be,{detail:$e}),Ce=ke||this.defaultEventTarget,Te=Ce.dispatchEvent;Te(Ee);var Se=new CustomEvent("*",{detail:$e});Te(Se)}}]),ge}(),Ws=function(){var ge=null;return function(){var be=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return zs()?ge||(ge=new Hs(be),ge):(console.error("useEvent must be used in the browser environment"),null)}}();const w=Ns();Ws();const W={MAIN:"main",REPLY:"reply"},sr=(ge,be,$e)=>{const ke={...$e,spm_id:`${useSpmPrefix()}.${be}.${ge}`};window.reportObserver&&window.reportObserver.reportCustomData&&window.reportObserver.reportCustomData(ge==="show"?"appear":ge,ke)},hr=(ge,be,$e,ke)=>{if(be=`${(ke==null?void 0:ke.spmPrefix)||useSpmPrefix()}.${be}`,ke!=null&&ke.flush){const Ee=useReportFunc({globalInst:"__biliMirrorPbInstance__"});if(Ee){switch(ge){case"show":Ee("exposure",be,$e,{flush:!0});break;case"click":Ee("click",be,$e,{flush:!0});break;case"tech":Ee("tech",be,$e,{flush:!0});break}return}}switch(ge){case"show":useReport("exposure",be,$e);break;case"click":useReport("click",be,$e);break;case"tech":useReport("tech",be,$e);break}},jr=async()=>{if(window.biliMirror||window.__biliMirrorPbInstance__)return;const ge=(window==null?void 0:window.__MIRROR_CONFIG__)||{};let be={feature:{tech:!0},autoPv:!1,batch:!1};ge!=null&&ge.pbOptions&&(be={...be,...ge.pbOptions,feature:{...be.feature,...ge.pbOptions.feature}}),window.__biliMirrorPbInstance__=await useReporter(be)};function Gs(ge,be){var $e=parseInt(ge,10);return Number.isNaN($e)||$e<0?"":$e>=1e4&&$e<1e8?($e/1e4).toFixed(1)+(be?"\u842C":"\u4E07"):$e>=1e8?($e/1e8).toFixed(1)+(be?"\u5104":"\u4EBF"):/\./.test(ge)?ge:$e}function Js(ge){try{return JSON.parse(localStorage.getItem(ge))}catch{return null}}function Ks(ge,be){try{localStorage.setItem(ge,JSON.stringify(be))}catch{}}function ce(ge,be){if(ge||(ge={}),be||(be={}),!ge.type)throw new Error("Report need type!");var $e="";if(ge.spm_info&&(ge.spm_info.match(/\./g)||[]).length>=3)$e=ge.spm_info;else{var ke=document.getElementsByTagName("meta"),Ee=ge.spm_id||ke&&ke.spm_prefix&&ke.spm_prefix.content||"-2.-2",Ce=ge.c||"0",Te=ge.d||"0",Se=ge.e;$e=Se?"".concat(Ee,".").concat(Ce,".").concat(Te,".").concat(Se):"".concat(Ee,".").concat(Ce,".").concat(Te)}var Ke=Object.assign({},be);Ke.spm_id=$e,window.reportObserver&&window.reportObserver.reportCustomData&&window.reportObserver.reportCustomData(ge.type,Ke)}function Ys(ge,be){if(typeof ge!="object"||!ge)return ge;var $e=ge[Symbol.toPrimitive];if($e!==void 0){var ke=$e.call(ge,be||"default");if(typeof ke!="object")return ke;throw new TypeError("@@toPrimitive must return a primitive value.")}return(be==="string"?String:Number)(ge)}function Zs(ge){var be=Ys(ge,"string");return typeof be=="symbol"?be:be+""}function ko(ge,be,$e){return be=Zs(be),be in ge?Object.defineProperty(ge,be,{value:$e,enumerable:!0,configurable:!0,writable:!0}):ge[be]=$e,ge}function Qs(ge){var be=Object.keys(ge);if(be.length===0)return"";var $e="";return be.forEach(function(ke){ge[ke]!==void 0&&($e+="".concat(ke,":").concat(ge[ke],";"))}),$e}function Xs(ge){return!(!ge||typeof ge!="object"||typeof ge.render_scheme>"u"||!ge.colors_info||!ge.colors_info.color||!Array.isArray(ge.colors_info.color))}var Co="to top right";function $o(ge,be){return"linear-gradient(".concat(ge,",").concat(be,")")}function ta(ge){return ge[0]==="#"?ge:"#".concat(ge)}function ea(ge){var be=ge.length,$e=[],ke=[],Ee=function(Ce,Te){return"".concat(ta(Ce)," ").concat(Te/(be-1)*100,"%")};return ge.forEach(function(Ce,Te){$e.push(Ee(Ce.color_day,Te)),ke.push(Ee(Ce.color_night,Te))}),{light:$o(Co,$e.join(",")),dark:$o(Co,ke.join(","))}}function ia(){return{"background-clip":"text","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}function ra(ge,be){be=be||{};var $e=be.theme||"",ke=be.stringType||!1,Ee="",Ce="";if(Xs(ge)){var Te=ge.render_scheme,Se=ge.colors_info.color;if(Te!==1&&Te!=="Colorful"||!Se||Se.length===0)return null;var Ke=ea(Se);Ee=Ke.light,Ce=Ke.dark}if(Ee&&Ce){var Je={base:ia(),theme:{light:{"background-image":Ee},dark:{"background-image":Ce}}};if(["light","dark"].includes($e)){var mt=Object.assign({},Je.base,Je.theme[$e]);return ke?Qs(mt):mt}return be.variable&&typeof be.variable=="string"&&/^--[a-z]/.test(be.variable)&&(Je.variable=ko(ko({},"".concat(be.variable,"-light"),Ee),"".concat(be.variable,"-dark"),Ce)),Je}return null}const on="bili-comments-config",qi=()=>Js(on)||{},nn=ge=>{Ks(on,ge)},oa=ge=>{const be=qi();be.report=ge,nn(be)},na=()=>qi().report||{blockChecked:!0,deleteChecked:!0},sa=ge=>{const be=qi();be.notice=ge,nn(be)},aa=()=>qi().notice||{expires:-1},la=()=>[{name:"\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4",options:[{label:"\u8FDD\u6CD5\u8FDD\u89C4",value:9},{label:"\u8272\u60C5",value:2},{label:"\u4F4E\u4FD7",value:10},{label:"\u8D4C\u535A\u8BC8\u9A97",value:12},{label:"\u8FDD\u6CD5\u4FE1\u606F\u5916\u94FE",value:23}]},{name:"\u8C23\u8A00\u7C7B\u4E0D\u5B9E\u4FE1\u606F",options:[{label:"\u6D89\u653F\u8C23\u8A00",value:19},{label:"\u865A\u5047\u4E0D\u5B9E\u4FE1\u606F",value:22},{label:"\u6D89\u793E\u4F1A\u4E8B\u4EF6\u8C23\u8A00",value:20}]},{name:"\u4FB5\u72AF\u4E2A\u4EBA\u6743\u76CA",options:[{label:"\u4EBA\u8EAB\u653B\u51FB",value:7},{label:"\u4FB5\u72AF\u9690\u79C1",value:15}]},{name:"\u6709\u5BB3\u793E\u533A\u73AF\u5883",options:[{label:"\u5783\u573E\u5E7F\u544A",value:1},{label:"\u5F15\u6218",value:4},{label:"\u5267\u900F",value:5},{label:"\u5237\u5C4F",value:3},{label:"\u89C6\u9891\u4E0D\u76F8\u5173",value:8},{label:"\u8FDD\u89C4\u62BD\u5956",value:18},{label:"\u9752\u5C11\u5E74\u4E0D\u826F\u4FE1\u606F",value:17}]},{name:"",options:[{label:"\u5176\u4ED6",value:0}]}],ca=ge=>ge.reason_list?ge.reason_list.map(be=>({label:be.tag_name,value:be.tag_id,detailIsRequired:be.content_required?be.content_required:!1})):[];var da=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,dt=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?pa(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&da(be,$e,Ee),Ee};let tt=class extends s$4{constructor(){super(...arguments),this.type="",this.oid="",this.rpid="",this.mid="",this.uname="",this.ordering="heat",this.appId=100,this.platform=5,this.maxInputLength=200,this.optionValue=-1,this.currentDetailIsRequired=!1,this.inputValue="",this.blockValue=!0,this.canDeleteReply=!1,this.deleteValue=!0,this.groups=[],this.options=[]}get isBiliPc(){return this.appId&&this.platform?Number(this.appId)===112:!1}connectedCallback(){super.connectedCallback();const ge={oid:this.oid,type:this.type,rpid:this.rpid,mid:this.mid};this.isBiliPc?this.dispatchEvent(new CustomEvent("trackReport",{detail:{type:"show",event:"main.comment.report.all.show",data:ge},bubbles:!0})):(sr("show","comment-report-reason",ge),hr("show","comments.report.show",ge)),this.initData()}async initData(){var $e;var ge,be;try{const{code:ke,data:Ee}=await Ls({oid:this.oid,type:this.type});if(ke!==0||!Ee){console.error("\u83B7\u53D6\u4E3E\u62A5\u5143\u6570\u636E\u5931\u8D25");return}(ge=Ee.reason_list)!=null&&ge.length?this.options=ca(Ee):(be=Ee.report_groups)!=null&&be.length?this.groups=Ee.report_groups.map(Te=>({name:Te.name,options:Te.report_options})):this.groups=la(),this.canDeleteReply=($e=Ee.can_delete)!=null?$e:!1;const Ce=na();this.blockValue=Ce.blockChecked,this.canDeleteReply?this.deleteValue=Ce.deleteChecked:this.deleteValue=!1,console.log(this.blockValue,this.deleteValue)}catch(ke){console.error("\u83B7\u53D6\u4E3E\u62A5\u5143\u6570\u636E\u5931\u8D25",ke)}}handleOptionClick(ge,be){this.optionValue!==ge&&(this.inputValue=""),this.optionValue=ge,this.currentDetailIsRequired=be}handleOptionChange(ge){this.optionValue=parseInt(ge.detail.value)}handleInputChange(ge){this.inputValue=ge.target.value}onBlockChange(ge){this.blockValue=ge.detail.checked}deleteReply(ge){this.deleteValue=ge.detail.checked}handleHide(){this.dispatchEvent(new CustomEvent("hide"))}handleCancel(){this.handleHide()}async handleConfirm(){var ge;if(this.optionValue===-1){b.show("\u8BF7\u9009\u62E9\u4E3E\u62A5\u7406\u7531");return}let be=-1,$e="";if(this.options.length){if(be=this.optionValue,this.currentDetailIsRequired&&this.inputValue.trim()===""){b.show("\u8BF7\u586B\u5199\u8BE6\u7EC6\u63CF\u8FF0\uFF5E");return}this.inputValue&&($e=this.inputValue)}else{if(this.optionValue===0){if(!this.inputValue){b.show("\u8BF7\u5B8C\u5584\u4E3E\u62A5\u7406\u7531");return}if(this.inputValue&&(this.inputValue.length<2||this.inputValue.length>this.maxInputLength)){b.show("\u81EA\u5B9A\u4E49\u4E3E\u62A5\u5185\u5BB9\u957F\u5EA6\u4E3A2-200\u5B57\u7B26");return}$e=this.inputValue}be=this.optionValue}try{let ke={};this.isBiliPc&&(ke={appId:Number(this.appId),platform:Number(this.platform)});const Ee=await js({type:Number(this.type),oid:this.oid,rpid:this.rpid,reason:be,content:$e,add_blacklist:this.blockValue,delete:this.deleteValue,ordering:this.ordering,statistics:this.isBiliPc?JSON.stringify(ke):""});if(oa({blockChecked:this.blockValue,deleteChecked:this.deleteValue}),Ee.code===0){b.show(((ge=Ee.data)==null?void 0:ge.toast)||"\u4E3E\u62A5\u6210\u529F");const Ce={oid:this.oid,type:this.type,rpid:this.rpid,mid:this.mid,reasonid:be,reasonLevel:1,blacklist:this.blockValue,is_block:this.blockValue?1:0,is_delete:this.deleteValue?1:0,ctime:Date.now()};this.isBiliPc?this.dispatchEvent(new CustomEvent("trackReport",{detail:{type:"click",event:"main.comment.report.submit.click",data:Ce},bubbles:!0})):(sr("click","comment-report-reason-submit-button",Ce),hr("click","comments.report_submit.click",Ce)),this.handleHide();const Te={type:Number(this.type),oid:Number(this.oid),oid_str:this.oid,rpid:Number(this.rpid),rpid_str:this.rpid};if(this.blockValue){w.emit("remove",{namespaces:[W.MAIN,W.REPLY],method:"filter",predicate:Se=>{var Ke;return((Ke=Se.member)==null?void 0:Ke.mid)===this.mid},value:Te});return}w.emit("remove",{namespaces:[W.MAIN,W.REPLY],method:"findIndex",predicate:Se=>Se.rpid_str===this.rpid,value:Te});return}b.show(Ee.message||"\u4E3E\u62A5\u5931\u8D25")}catch{b.show("\u4E3E\u62A5\u5931\u8D25")}}handleJumpJudgement(){this.isBiliPc||sr("click","judgement",{}),window.open("//www.bilibili.com/judgement/apply"),this.isBiliPc&&w.emit("jump",{type:"link",link:"https://www.bilibili.com/judgement/apply"})}textareaTemplate(ge){return ge?x$2`<textarea
      data-key=${ge}
      .value=${this.inputValue}
      placeholder="请填写具体违规内容出现时间点和详细描述，更容易举报成功"
      maxlength="${this.maxInputLength}"
      @input=${this.handleInputChange}
      @keydown=${be=>be.stopPropagation()}
      @keyup=${be=>be.stopPropagation()}
    ></textarea>`:x$2`
        <textarea
          .value=${this.inputValue}
          placeholder="请填写举报理由"
          maxlength="${this.maxInputLength}"
          @input=${this.handleInputChange}
          @keydown=${be=>be.stopPropagation()}
          @keyup=${be=>be.stopPropagation()}
        ></textarea>
      `}groupsTemplate(){return x$2`
      <div id="groups">
        ${this.groups.map(ge=>x$2`<div id="group">
              ${ge.name?x$2`<div id="group-name">${ge.name}</div`:""}
              <div id="group-options">
                ${ge.options.map(be=>x$2`<bili-radio
                      label="${be.label}"
                      value="${be.value}"
                      checked="${be.value===this.optionValue}"
                      @change=${this.handleOptionChange}
                    ></bili-radio>`)}
              </div>
            </div>`)}
        ${this.optionValue===0?this.textareaTemplate():""}
      </div>
    `}optionsTemplate(){return x$2`
      <div id="options">
        ${this.options.map(ge=>x$2` <div id="option">
            <div id="option-name" @click=${()=>this.handleOptionClick(ge.value,ge.detailIsRequired)}>
              ${ge.label}
              <bili-radio label="" value="${ge.value}" checked="${ge.value===this.optionValue}"></bili-radio>
            </div>
            <div id="sub-option" class="${ge.value===this.optionValue?"show":""}">
              <div id="sub-option-name">
                详细描述
                <span>${ge.detailIsRequired?"(\u5FC5\u586B)":"(\u9009\u586B)"}</span>
              </div>
              ${this.textareaTemplate(ge.value)}
            </div>
          </div>`)}
      </div>
    `}render(){return x$2`
      <div id="form">
        ${this.groups?x$2`<div id="main">
              <!-- 风纪委员 -->
              <div id="tips" @click=${this.handleJumpJudgement}>
                <div class="tips-prefix">申请加入风纪委员会，共治更好的社区氛围</div>
                <bili-icon size="16" icon="BDC/arrow_forward_right_line/3"></bili-icon>
              </div>
              ${this.options.length?this.optionsTemplate():this.groupsTemplate()}
            </div>`:""}
      </div>

      <!-- 底部 -->
      <div id="footer">
        ${this.mid&&this.uname?x$2`<div id="optional">
              <bili-checkbox
                value="block"
                label="拉黑 @${this.uname}"
                checked="${this.blockValue}"
                @change=${this.onBlockChange}
              ></bili-checkbox>
              ${this.canDeleteReply?x$2`<bili-checkbox
                    value="block"
                    label="删除该评论"
                    checked="${this.deleteValue}"
                    @change=${this.deleteReply}
                  ></bili-checkbox>`:""}
            </div>`:""}
        <div id="action">
          <button id="cancel" @click=${this.handleCancel}>取消</button>
          <button id="confirm" @click=${this.handleConfirm}>确定</button>
        </div>
      </div>
    `}};tt.styles=i$6`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
    }
    #tips {
      display: flex;
      position: relative;
      padding: 12px;
      font-size: 13px;
      border-radius: 8px;
      color: var(--text2);
      background-color: var(--bg2);
      margin: 4px 0px;
      cursor: pointer;
    }
    #tips .tips-prefix {
      flex: 1;
      line-height: 18px;
    }
    #form {
      padding: 12px;
      min-height: 400px;
      max-height: calc(100vh - 200px);
      overflow-y: auto;
      padding-bottom: 80px; /* 为固定底部预留空间 */
    }
    #form::-webkit-scrollbar {
      width: 8px;
    }
    #form::-webkit-scrollbar-thumb {
      background-color: var(--bg3);
    }
    /* 老版举报选项 */
    #groups {
      padding-top: 12px;
    }
    #group + #group {
      margin-top: 12px;
    }
    #group-name {
      font-size: 12px;
      color: var(--text3);
      margin-bottom: 15px;
    }
    #group-options {
      display: flex;
      flex-wrap: wrap;
    }
    /* 新版举报选项 */
    #option-name {
      height: 62px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      color: var(--text1);
      border-radius: 8px;
      padding: 0 12px;
      transition: background-color 0.2s;
    }
    #option-name bili-radio {
        display: block;
        --bili-radio-margin-inline-end: 0;
        height: 16px;
        width: 16px;
        margin-bottom: 0;
    }
    #option-name:hover {
      background-color: var(--bg3);
    }
    #sub-option {
      padding: 0 12px;
      padding-bottom: 20px;
      display: none;
    }
    /* 分割线 */
    #option::after {
      content: "";
      display: block;
      height: 1px;
      background-color: var(--line_light);
      width: calc(100% - 24px);
      margin: 0px auto;
    }
    #sub-option.show {
      display: block;
    }
    #sub-option-name {
      font-size: 13px;
      color: var(--text3);
      margin-bottom: 8px;
    }
    #sub-option-name .pink-tag {
      color: var(--brand_pink);
    }
    #options {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
    }
    bili-radio {
      --bili-radio-margin-inline-end: 0;
      width: 25%;
      margin-bottom: 16px;
    }
    textarea {
      box-sizing: border-box;
      font-size: 14px;
      color: var(--text1);
      background-color: var(--bg2);
      width: 100%;
      height: 120px;
      padding: 8px;
      border: none;
      border-radius: 6px;
      outline: none;
      resize: none;
    }

    textarea::placeholder {
      color: var(--text4);
    }

    #footer {
      display: flex;
      margin-top: 16px;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: 0px;
      left: 12px;
      right: 12px;
      background-color: var(--bg1);
      padding: 16px 0;
    }
    #footer #action {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #action button {
      -webkit-font-smoothing: antialiased;
      border: 1px solid var(--brand_blue);
      border-radius: 6px;
      box-sizing: border-box;
      cursor: pointer;
      font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
      font-weight: 400;
      height: 32px;
      outline: none;
      transition: all 0.2s;
      width: 130px;
      margin-left: 12px;
    }
    #action button#cancel {
      width: 100px;
      background-color: var(--bg1);
      border-color: var(--line_regular);
      color: var(--text1);
    }
    #action button#confirm {
      width: 100px;
      background-color: var(--brand_blue);
      border-color: var(--brand_blue);
      color: var(--text_white);
    }
    #optional {
      color: var(--text3);
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 8px;
    }

    /* PC客户端 粉色主题样式 */
    /* 新版举报样式 - 只在新版举报中使用 */

    :host([data-app-id="112"]) bili-radio {
      --bili-radio-checked-color: var(--brand_pink);
    }

    :host([data-app-id="112"]) bili-checkbox {
      --bili-checkbox-checked-color: var(--brand_pink);
    }

    :host([data-app-id="112"]) #action button {
      border-color: var(--brand_pink);
    }

    :host([data-app-id="112"]) #action button#confirm {
      background-color: var(--brand_pink);
      border-color: var(--brand_pink);
      color: var(--text_white);
    }
  `;dt([n$4({type:String,attribute:"data-type"})],tt.prototype,"type",2);dt([n$4({type:String,attribute:"data-oid"})],tt.prototype,"oid",2);dt([n$4({type:String,attribute:"data-rpid"})],tt.prototype,"rpid",2);dt([n$4({type:String,attribute:"data-mid"})],tt.prototype,"mid",2);dt([n$4({type:String,attribute:"data-uname"})],tt.prototype,"uname",2);dt([n$4({type:String,attribute:"data-ordering"})],tt.prototype,"ordering",2);dt([n$4({type:Number,attribute:"data-app-id"})],tt.prototype,"appId",2);dt([n$4({type:Number,attribute:"data-platform"})],tt.prototype,"platform",2);dt([t$1()],tt.prototype,"maxInputLength",2);dt([t$1()],tt.prototype,"optionValue",2);dt([t$1()],tt.prototype,"currentDetailIsRequired",2);dt([t$1()],tt.prototype,"inputValue",2);dt([t$1()],tt.prototype,"blockValue",2);dt([t$1()],tt.prototype,"canDeleteReply",2);dt([t$1()],tt.prototype,"deleteValue",2);dt([t$1()],tt.prototype,"groups",2);dt([t$1()],tt.prototype,"options",2);tt=dt([e$5("bili-comment-report-form")],tt);const ha=ge=>ot.request({url:"/x/member/web/uname/update",method:"POST",data:{uname:ge,source:"reply"},headers:{"Content-Type":"application/x-www-form-urlencoded"}});var ua=Object.defineProperty,ma=Object.getOwnPropertyDescriptor,sn=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?ma(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&ua(be,$e,Ee),Ee};let Si=class extends s$4{constructor(){super(...arguments),this.inputValue=""}handleInputChange(ge){this.inputValue=ge.target.value}handleHide(){this.dispatchEvent(new CustomEvent("hide"))}handleCancel(){this.handleHide()}async handleConfirm(){try{if(!this.inputValue){b.show("\u8BF7\u8F93\u5165\u6635\u79F0");return}const{code:ge,message:be}=await ha(this.inputValue);if(ge===0){b.show("\u6210\u529F\u8BBE\u7F6E\u6635\u79F0"),this.handleHide();return}b.show(be||"\u8BBE\u7F6E\u6635\u79F0\u5931\u8D25")}catch{b.show("\u8BBE\u7F6E\u6635\u79F0\u5931\u8D25")}}render(){return x$2`
      <div id="form">
        <div id="tips">拥有昵称后才能评论哦！快来取个适合你的昵称吧！</div>
        <div id="input">
          <input .value=${this.inputValue} placeholder="请输入新的昵称" maxlength="16" @input=${this.handleInputChange} />
        </div>
        <div id="footer">
          <div id="action">
            <button id="cancel" @click=${this.handleCancel}>取消</button>
            <button id="confirm" @click=${this.handleConfirm}>确定</button>
          </div>
        </div>
      </div>
    `}};Si.styles=i$6`
    :host {
      padding: 24px;
      display: flex;
      flex-direction: column;
    }

    #tips {
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: var(--text2);
      margin-bottom: 16px;
    }

    #input {
      width: 100%;
      margin-bottom: 40px;
    }

    #input input {
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      padding: 0 10px;
      border: 1px solid var(--graph_weak);
      border-radius: 4px;
      outline: none;
    }

    #footer {
      margin-top: 16px;
    }
    #footer #action {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    #action button {
      -webkit-font-smoothing: antialiased;
      border: 1px solid var(--brand_blue);
      border-radius: 6px;
      box-sizing: border-box;
      cursor: pointer;
      font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
      font-weight: 400;
      height: 32px;
      outline: none;
      transition: all 0.2s;
      width: 160px;
    }
    #action button#cancel {
      background-color: var(--bg1);
      border-color: var(--line_regular);
      color: var(--text1);
    }
    #action button#confirm {
      background-color: var(--brand_blue);
      border-color: var(--brand_blue);
      color: var(--text_white);
    }
  `;sn([t$1()],Si.prototype,"inputValue",2);Si=sn([e$5("bili-comment-update-uname-form")],Si);const fa=()=>ot.request({baseURL:"//cm.bilibili.com",url:"/commercialorder/api/web_api/v1/main_site/upper/comment/reason_list"});var ga=Object.defineProperty,ba=Object.getOwnPropertyDescriptor,ue=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?ba(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&ga(be,$e,Ee),Ee};let Jt=class extends s$4{constructor(){super(...arguments),this.type="",this.oid="",this.rpid="",this.maxInputLength=100,this.optionValue=-1,this.inputValue="",this.options=[]}connectedCallback(){super.connectedCallback(),this.initData()}async initData(){var ge;try{const be=await fa();if(be.code===0&&(ge=be.result)!=null&&ge.length){const $e=be.result.map(ke=>({label:ke.reason_content,value:ke.reason_index}));this.options=$e.concat({label:"\u5176\u4ED6\u539F\u56E0",value:0})}}catch{b.show("\u83B7\u53D6\u4E3E\u62A5\u7406\u7531\u5931\u8D25")}}handleOptionChange(ge){this.optionValue=parseInt(ge.detail.value)}handleInputChange(ge){this.inputValue=ge.target.value}handleHide(){this.dispatchEvent(new CustomEvent("hide"))}handleCancel(){this.handleHide()}async handleConfirm(){if(this.optionValue===-1){b.show("\u8BF7\u9009\u62E9\u7533\u8BC9\u539F\u56E0");return}if(this.optionValue===0){if(!this.inputValue){b.show("\u8BF7\u9009\u62E9\u6216\u586B\u5199\u7533\u8BC9\u539F\u56E0");return}if(this.inputValue&&(this.inputValue.length<2||this.inputValue.length>this.maxInputLength)){b.show("\u81EA\u5B9A\u4E49\u4E3E\u62A5\u5185\u5BB9\u957F\u5EA6\u4E3A2-100\u5B57\u7B26");return}}try{let ge="";const be=this.options.find(ke=>ke.value===this.optionValue);this.optionValue===0?ge=this.inputValue:be&&(ge=be.label);const $e=await Bs({av_id:this.oid,comment_id:this.rpid,reason:ge});$e.code===0?b.show($e.result||"\u7533\u8BC9\u6210\u529F"):b.show($e.message||"\u7533\u8BC9\u5931\u8D25"),this.handleHide()}catch{b.show("\u7533\u8BC9\u5931\u8D25")}}textareaTemplate(){return x$2`<div id="input">
      <textarea
        .value=${this.inputValue}
        placeholder="请填写具体原因"
        maxlength="${this.maxInputLength}"
        @input=${this.handleInputChange}
      ></textarea>
    </div>`}render(){return x$2`
      <div id="tips">
        <span>因以下理由申请撤销商业推广置顶：</span>
      </div>
      <div id="form">
        ${this.options.map(ge=>x$2`<div class="option">
              <bili-radio
                label="${ge.label}"
                value="${ge.value}"
                checked="${ge.value===this.optionValue}"
                @change=${this.handleOptionChange}
              ></bili-radio>
            </div>`)}
        ${this.optionValue===0?this.textareaTemplate():""}
      </div>
      <div id="footer">
        <div id="action">
          <button id="cancel" @click=${this.handleCancel}>取消</button>
          <button id="confirm" @click=${this.handleConfirm}>确定</button>
        </div>
      </div>
    `}};Jt.styles=i$6`
    :host {
      padding: 16px;
      display: flex;
      flex-direction: column;
    }
    #tips {
      display: flex;
      align-items: center;
      position: relative;
      padding: 12px 0;
      font-size: 14px;
      border-radius: 4px;
      color: var(--text1);
      transition: 0.2s;
      cursor: pointer;
      margin-bottom: 12px;
    }
    #form {
      min-height: 220px;
    }
    bili-radio {
      --bili-radio-margin-inline-end: 0;
      margin-bottom: 16px;
    }
    #input {
    }
    textarea {
      box-sizing: border-box;
      width: 100%;
      height: 70px;
      padding: 8px;
      border: 1px solid var(--graph_weak);
      border-radius: 4px;
      outline: none;
      resize: none;
    }

    #footer {
      margin-top: 16px;
    }
    #footer #action {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #action button {
      -webkit-font-smoothing: antialiased;
      border: 1px solid var(--brand_blue);
      border-radius: 6px;
      box-sizing: border-box;
      cursor: pointer;
      font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
      font-weight: 400;
      height: 32px;
      outline: none;
      transition: all 0.2s;
      width: 130px;
      margin-left: 12px;
    }
    #action button#cancel {
      background-color: var(--bg1);
      border-color: var(--line_regular);
      color: var(--text1);
    }
    #action button#confirm {
      background-color: var(--brand_blue);
      border-color: var(--brand_blue);
      color: var(--text_white);
    }
  `;ue([n$4({type:String,attribute:"data-type"})],Jt.prototype,"type",2);ue([n$4({type:String,attribute:"data-oid"})],Jt.prototype,"oid",2);ue([n$4({type:String,attribute:"data-rpid"})],Jt.prototype,"rpid",2);ue([t$1()],Jt.prototype,"maxInputLength",2);ue([t$1()],Jt.prototype,"optionValue",2);ue([t$1()],Jt.prototype,"inputValue",2);ue([t$1()],Jt.prototype,"options",2);Jt=ue([e$5("bili-comment-commercial-order-appeal-form")],Jt);const va=ge=>{const be=Math.floor(new Date().getTime()/1e3)-ge,$e=new Date;if($e.setHours(0),$e.setMinutes(0),$e.setSeconds(0),Math.floor($e.getTime()/1e3)<ge&&be>=0){if(be<60){const ke=Math.floor(be%60/10)*10;return ke>=10?`${ke}\u79D2\u524D`:"\u521A\u521A"}if(60<=be&&be<3600)return`${Math.floor(be/60)}\u5206\u949F\u524D`;if(be>=3600)return`${Math.floor(be/3600)}\u5C0F\u65F6\u524D`}else{const ke=new Date;ke.setTime(ge*1e3);const Ee=ke.getFullYear(),Ce=ke.getMonth()+1>=10?ke.getMonth()+1:`0${ke.getMonth()+1}`,Te=ke.getDate()>=10?ke.getDate():`0${ke.getDate()}`,Se=ke.getHours()>=10?ke.getHours():`0${ke.getHours()}`,Ke=ke.getMinutes()>=10?ke.getMinutes():`0${ke.getMinutes()}`;return`${Ee}-${Ce}-${Te} ${Se}:${Ke}`}};function Br(ge,be){const $e=[];if(ge.can_modify!==!0)return $e;const{up_reply_selection:ke,up_reply:Ee,up_dm:Ce}=ge;if(ke!=null&&ke.can_modify){const Te=ke.status===1;$e.push({key:"select",text:Te?"\u505C\u6B62\u8BC4\u8BBA\u7CBE\u9009":"\u5F00\u542F\u8BC4\u8BBA\u7CBE\u9009",data:{active:!Te}})}if(Ee!=null&&Ee.can_modify){const Te=Ee.status===1;$e.push({key:"close",text:Te?"\u5173\u95ED\u8BC4\u8BBA":"\u6062\u590D\u8BC4\u8BBA",data:{active:!Te}})}if(Ce!=null&&Ce.can_modify&&!be){const Te=Ce.status===1;$e.push({key:"close-danmaku",text:Te?"\u5173\u95ED\u5F39\u5E55":"\u6062\u590D\u5F39\u5E55",data:{active:!Te}})}return $e}function ya(ge){const{upMid:be,reply:$e,user:ke,top:Ee,assist:Ce,upFilter:Te,isBiliPc:Se,share:Ke}=ge;if(!be)return[];const Je=[],mt=(ke==null?void 0:ke.mid)===be;mt&&ge.ns==="main"&&Je.push({key:"top",text:Ee?"\u53D6\u6D88\u7F6E\u9876":"\u8BBE\u4E3A\u7F6E\u9876",data:{active:!Ee}}),Ke&&Je.push({key:"share",text:"\u590D\u5236\u8BC4\u8BBA\u94FE\u63A5"});const bt=!ke||String(ke.mid)!==$e.member.mid;if(bt){Se||Je.push({key:"block",text:"\u52A0\u5165\u9ED1\u540D\u5355"});const $t={key:"report",text:"\u4E3E\u62A5",data:{reply:$e}};if(ke){const{is_jury:St,is_senior_member:It}=ke;St?($t.text="\u98CE\u7EAA\u59D4\u4E3E\u62A5",$t.data={hiddenJuryTips:!0,reply:$e}):$t.text=It?"\u786C\u6838\u4F1A\u5458\u4E3E\u62A5":"\u4E3E\u62A5"}Je.push($t)}return(mt||!bt||Ce)&&Je.push({key:"delete",text:"\u5220\u9664"}),Te&&Je.push({key:"filter",text:Te.text,data:{link:Te.link}}),Je}async function Mt(ge){try{const be={customTitle:"\u767B\u5F55\u53C2\u4E0E\u793E\u533A\u4E92\u52A8",hideClose:!1,origin:(ge==null?void 0:ge.origin)||"comments",spm_id_from:`${(ge==null?void 0:ge.spmPrefix)||useSpmPrefix()}.${(ge==null?void 0:ge.event)||"replyUnknowAction"}`};return await useAuthLogin(be)}catch(be){console.log(be)}}var an=globalThis&&globalThis.__spreadArray||function(ge,be,$e){if($e||arguments.length===2)for(var ke,Ee=0,Ce=be.length;Ee<Ce;Ee++)!ke&&Ee in be||(ke||(ke=Array.prototype.slice.call(be,0,Ee)),ke[Ee]=be[Ee]);return ge.concat(ke||Array.prototype.slice.call(be))},ar=void 0;function U(){if(ar===void 0){if(typeof window!="object")return!1;var ge=window;if(!ge.biliBridgePc&&window!==window.parent&&window.top)try{ge.biliBridgePc=ge.top.biliBridgePc}catch{}ar=typeof ge.biliBridgePc=="object"}return ar}function Nr(ge){for(var be,$e=[],ke=1;ke<arguments.length;ke++)$e[ke-1]=arguments[ke];return U()?(be=window.biliBridgePc)[ge].apply(be,$e):Promise.reject(new Error("Not in biliPc!"))}function Ft(ge,be){for(var $e=[],ke=2;ke<arguments.length;ke++)$e[ke-2]=arguments[ke];return Nr.apply(void 0,an(["callNative",ge,be],$e,!1))}function Be(ge,be){for(var $e=[],ke=2;ke<arguments.length;ke++)$e[ke-2]=arguments[ke];return Nr.apply(void 0,an(["callNativeSync",ge,be],$e,!1))}function Hi(ge,be){return Nr("addListener",ge,be)}var wa=Object.defineProperty,xa=Object.getOwnPropertyDescriptor,pt=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?xa(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&wa(be,$e,Ee),Ee};let et=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.oid="",this.showCheckText=!1,this.type=0,this.root="",this.assist=!1,this.rootType="list",this.user=null,this.upMid=0,this.likeCount=0,this.isLike=!1,this.isDislike=!1,this.showMoreMenu=!1,this.options=[]}get pubDate(){return va(this.data.ctime)}get likeIcon(){return this.isLike?"BDC/hand_thumbsup_fill/1":"BDC/hand_thumbsup_line/1"}get dislikeIcon(){return this.isDislike?"BDC/hand_thumbsdown_fill/2":"BDC/hand_thumbsdown_line/1"}get commentIcon(){return"BDC/bubble_comment_line/1"}get showText(){return this.data.root_str&&this.data.parent_str&&this.data.root_str!==this.data.parent_str}async handleLikeState(ge){if(ge==="like"){!this.isLike&&this.isDislike&&(this.isDislike=!1),this.isLike=!this.isLike,this.likeCount=this.isLike?this.likeCount+1:this.likeCount-1;return}!this.isDislike&&this.isLike&&(this.isLike=!1,this.likeCount=this.likeCount-1),this.isDislike=!this.isDislike}connectedCallback(){super.connectedCallback(),this.initData()}initData(){this.likeCount=this.data.like,this.isLike=this.data.action===1,this.isDislike=this.data.action===2,this.options=ya({upMid:this.upMid,reply:this.data,user:this.user,top:this.data.reply_control.is_up_top||!1,ns:this.root?"reply":"main",assist:this.assist,isBiliPc:U()}),setTimeout(()=>{this.disposables.addEventListener(this.menu,"mouseleave",()=>{this.showMoreMenu=!1})})}updated(ge){ge.get("data")&&this.initData()}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}async handleLike(){if(!this.user){U()?Ft("auth/requestLogin",{from:"comments"}):Mt({event:"selfDef.replyCardLikeClick"});return}try{this.handleClickTrack(this.isLike?21:5);let ge={};if(U()){const{app_id:$e,platform:ke}=Be("app/getAppInfo");ge={appId:$e||112,platform:ke||4}}const{code:be}=await As({oid:this.oid,type:this.type,rpid:this.data.rpid,action:this.isLike?0:1,statistics:JSON.stringify(ge)});if(be!==0)return;ce({type:"click",spm_info:"main.comment.floor.like"},{msg:JSON.stringify({type:this.rootType==="list"?"root":"sub"})})}catch(ge){console.error(ge)}this.handleLikeState("like")}async handleHate(){if(!this.user){U()?Ft("auth/requestLogin",{from:"comments"}):Mt({event:"selfDef.replyCardDisikeClick"});return}try{let ge={};if(U()){const{app_id:$e,platform:ke}=Be("app/getAppInfo");ge={appId:$e||112,platform:ke||4}}this.handleClickTrack(this.isDislike?22:6);const{code:be}=await Rs({oid:this.oid,type:this.type,rpid:this.data.rpid,action:this.isDislike?0:1,statistics:JSON.stringify(ge)});if(be!==0)return;this.handleLikeState("dislike")}catch(ge){console.error(ge)}}handleClickTrack(ge){this.dispatchEvent(new CustomEvent("track",{detail:{position:ge}}))}handleReply(){this.handleClickTrack(28),this.dispatchEvent(new CustomEvent("reply"))}async handleCheckText(){this.handleClickTrack(26),this.dispatchEvent(new CustomEvent("view-dialog",{detail:{oid:this.oid,root:this.root,dialog:this.data.dialog_str}}))}handleMore(){this.handleClickTrack(8),this.showMoreMenu=!0}handleSelectOption(ge){if(this.showMoreMenu=!1,!this.user){U()?Ft("auth/requestLogin",{from:"comments"}):Mt({event:"selfDef.replyCardOptionClick"});return}this.dispatchEvent(new CustomEvent("action",{detail:ge.detail}))}render(){return x$2`
      <div id="like">
        <button @click=${this.handleLike}>
          <bili-icon
            size="16"
            icon="${this.likeIcon}"
            style="${this.isLike?o$3({color:"var(--brand_pink)"}):""}"
          ></bili-icon>
          <span id="count">${this.likeCount>0?this.likeCount:""}</span>
        </button>
      </div>
      <div id="dislike">
        <button @click=${this.handleHate}>
          <bili-icon
            size="16"
            icon="${this.dislikeIcon}"
            style="${this.isDislike?o$3({color:"var(--brand_pink)"}):""}"
          ></bili-icon>
        </button>
      </div>
      <div id="reply">
        <button @click=${this.handleReply}>
          <bili-icon size="16" icon="${this.commentIcon}"></bili-icon>
        </button>
      </div>
      ${this.showCheckText&&this.showText?x$2` <div id="checkText">
            <button @click=${this.handleCheckText}>查看对话</button>
          </div>`:""}
      <div id="more">
        <button @click=${this.handleMore}>
          <bili-icon size="16" icon="BDC/more_vertical_fill/1"></bili-icon>
        </button>
        <bili-comment-menu
          style="${this.showMoreMenu?o$3({"--bili-comment-menu-display":"block"}):""}"
          .options=${this.options}
          @select=${this.handleSelectOption}
        ></bili-comment-menu>
      </div>
    `}};et.styles=i$6`
    :host {
      width: 100%;
      display: flex;
      height: 17px;
      align-items: center;
      position: relative;
      margin-top: 12px;
      font-size: 13px;
      color: var(--text3);
    }
    :host > *:not(:first-child) {
      margin-left: 20px;
    }

    button {
      padding: 0;
      outline: none;
      border: none;
      background: transparent;
      height: 24px;
      font-size: 13px;
      color: var(--text3);
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }
    button:hover {
      color: var(--brand_pink);
    }
    button span {
      margin-left: 5px;
      display: inline-block;
    }
    button bili-icon {
      vertical-align: middle;
    }

    #more {
      margin-left: auto;
      margin-right: 20px;
      width: 24px;
      height: 24px;
      position: relative;
    }
    #more button {
      width: 24px;
      height: 24px;
      text-align: center;
      display: var(--bili-comment-action-buttons-more-display, none);
    }
  `;pt([n$4()],et.prototype,"data",2);pt([n$4()],et.prototype,"oid",2);pt([n$4()],et.prototype,"showCheckText",2);pt([n$4()],et.prototype,"type",2);pt([n$4()],et.prototype,"root",2);pt([n$4()],et.prototype,"assist",2);pt([n$4()],et.prototype,"rootType",2);pt([n$4()],et.prototype,"user",2);pt([n$4()],et.prototype,"upMid",2);pt([t$1()],et.prototype,"pubDate",1);pt([t$1()],et.prototype,"likeCount",2);pt([t$1()],et.prototype,"isLike",2);pt([t$1()],et.prototype,"isDislike",2);pt([t$1()],et.prototype,"showMoreMenu",2);pt([t$1()],et.prototype,"likeIcon",1);pt([t$1()],et.prototype,"options",2);pt([i$3("bili-comment-menu")],et.prototype,"menu",2);et=pt([e$5("bili-comment-action-buttons-renderer")],et);const ti=class ih{constructor(be){Ie(this,"whitelist",[]),Ie(this,"blacklist",[]),Ie(this,"handler",()=>Promise.resolve("Please set a handler for middleware"));let $e,ke;typeof be=="function"?$e=be:(this.whitelist=(be==null?void 0:be.whitelist)||[],this.blacklist=(be==null?void 0:be.blacklist)||[],$e=be==null?void 0:be.handler,be!=null&&be.payload&&(ke=be.payload)),this.handler=async(Ee,Ce,Te)=>{if((Te==null?void 0:Te.disabled)!==!0){const Se=Ee.config.url;if(this.whitelist.length){if(!this.match(Se,this.whitelist))return await Ce()}else if(this.blacklist.length&&this.match(Se,this.blacklist))return await Ce()}else return await Ce();return await($e||this.handler).bind(this)(Ee,Ce,ih.mergeConfig(Te,ke))}}match(be,$e){let ke=!1;for(let Ee=0;Ee<$e.length;Ee++)if(be.indexOf($e[Ee])>-1){ke=!0;break}return ke}};Ie(ti,"handler"),Ie(ti,"mergeConfig",(ge,be)=>({...ge||{},payload:{...(ge==null?void 0:ge.payload)||{},...be||{}}}));let ur=ti;function mr(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var ge,be,$e=typeof Symbol=="function"?Symbol:{},ke=$e.iterator||"@@iterator",Ee=$e.toStringTag||"@@toStringTag";function Ce(St,It,Bt,Dt){var jt=It&&It.prototype instanceof Se?It:Se,zt=Object.create(jt.prototype);return At(zt,"_invoke",function(en,qt,vo){var yo,fo,bo,Ar=0,fs=vo||[],ms=!1,go={p:0,n:0,v:ge,a:wo,f:wo.bind(ge,4),d:function(ir,bs){return yo=ir,fo=0,bo=ge,go.n=bs,Te}};function wo(ir,bs){for(fo=ir,bo=bs,be=0;!ms&&Ar&&!xs&&be<fs.length;be++){var xs,ks=fs[be],fu=go.p,_s=ks[2];ir>3?(xs=_s===bs)&&(bo=ks[(fo=ks[4])?5:(fo=3,3)],ks[4]=ks[5]=ge):ks[0]<=fu&&((xs=ir<2&&fu<ks[1])?(fo=0,go.v=bs,go.n=ks[1]):fu<_s&&(xs=ir<3||ks[0]>bs||bs>_s)&&(ks[4]=ir,ks[5]=bs,go.n=_s,fo=0))}if(xs||ir>1)return Te;throw ms=!0,bs}return function(ir,bs,xs){if(Ar>1)throw TypeError("Generator is already running");for(ms&&bs===1&&wo(bs,xs),fo=bs,bo=xs;(be=fo<2?ge:bo)||!ms;){yo||(fo?fo<3?(fo>1&&(go.n=-1),wo(fo,bo)):go.n=bo:go.v=bo);try{if(Ar=2,yo){if(fo||(ir="next"),be=yo[ir]){if(!(be=be.call(yo,bo)))throw TypeError("iterator result is not an object");if(!be.done)return be;bo=be.value,fo<2&&(fo=0)}else fo===1&&(be=yo.return)&&be.call(yo),fo<2&&(bo=TypeError("The iterator does not provide a '"+ir+"' method"),fo=1);yo=ge}else if((be=(ms=go.n<0)?bo:en.call(qt,go))!==Te)break}catch(ks){yo=ge,fo=1,bo=ks}finally{Ar=1}}return{value:be,done:ms}}}(St,Bt,Dt),!0),zt}var Te={};function Se(){}function Ke(){}function Je(){}be=Object.getPrototypeOf;var mt=[][ke]?be(be([][ke]())):(At(be={},ke,function(){return this}),be),bt=Je.prototype=Se.prototype=Object.create(mt);function $t(St){return Object.setPrototypeOf?Object.setPrototypeOf(St,Je):(St.__proto__=Je,At(St,Ee,"GeneratorFunction")),St.prototype=Object.create(bt),St}return Ke.prototype=Je,At(bt,"constructor",Je),At(Je,"constructor",Ke),Ke.displayName="GeneratorFunction",At(Je,Ee,"GeneratorFunction"),At(bt),At(bt,Ee,"Generator"),At(bt,ke,function(){return this}),At(bt,"toString",function(){return"[object Generator]"}),(mr=function(){return{w:Ce,m:$t}})()}function At(ge,be,$e,ke){var Ee=Object.defineProperty;try{Ee({},"",{})}catch{Ee=0}At=function(Ce,Te,Se,Ke){function Je(mt,bt){At(Ce,mt,function($t){return this._invoke(mt,bt,$t)})}Te?Ee?Ee(Ce,Te,{value:Se,enumerable:!Ke,configurable:!Ke,writable:!Ke}):Ce[Te]=Se:(Je("next",0),Je("throw",1),Je("return",2))},At(ge,be,$e,ke)}function _a(ge,be,$e,ke){function Ee(Ce){return Ce instanceof $e?Ce:new $e(function(Te){Te(Ce)})}return new($e||($e=Promise))(function(Ce,Te){function Se(mt){try{Je(ke.next(mt))}catch(bt){Te(bt)}}function Ke(mt){try{Je(ke.throw(mt))}catch(bt){Te(bt)}}function Je(mt){mt.done?Ce(mt.value):Ee(mt.value).then(Se,Ke)}Je((ke=ke.apply(ge,be||[])).next())})}var ln=function(ge,be,$e){return _a(void 0,void 0,void 0,mr().m(function ke(){var Ee,Ce,Te,Se,Ke,Je,mt,bt,$t,St,It;return mr().w(function(Bt){for(;;)switch(Bt.p=Bt.n){case 0:if(Se="//s1.hdslb.com/bfs/seed/jinkela/short/minntaki-wasm-sdk/bili-sc-sdk.umd.js",Ke=((Ee=window==null?void 0:window.__PB_CONFIG__)===null||Ee===void 0?void 0:Ee.scSdkUrl)||Se,!(typeof window>"u")){Bt.n=1;break}return Bt.a(2,be());case 1:return Bt.p=1,Bt.n=2,loadScript(Ke,{lib:"SecureCollectSDK"});case 2:if(Je=Bt.v,Je){Bt.n=3;break}return Bt.a(2,be());case 3:if(typeof Je.getEnvToken=="function"){Bt.n=4;break}return console.log("SecureCollectSDK.getEnvToken is not a function"),Bt.a(2,be());case 4:return mt=(Te=(Ce=$e==null?void 0:$e.payload)===null||Ce===void 0?void 0:Ce.raw)!==null&&Te!==void 0?Te:!1,Bt.n=5,Je.getEnvToken(mt);case 5:bt=Bt.v,ge.request&&(bt?($t=mt?"b_ret":"b_wet",ge.request.params?ge.request.params[$t]=bt:ge.request.params=(St={},St[$t]=bt,St)):console.log("SecureCollectSDK.getEnvToken: token is empty")),Bt.n=7;break;case 6:Bt.p=6,It=Bt.v,console.log("RiskEnvToken error:",It);case 7:return Bt.a(2,be())}},ke,null,[[1,6]])}))};class cn extends ur{constructor(be){super({handler:ln,payload:be}),this.name="RISK_ENV_TOKEN"}}cn.handler=ln;const ka=(ge,be=!1)=>{var $e;const ke={...ge};return($e=ge.pictures)!=null&&$e.length&&(ke.pictures=JSON.stringify(ge.pictures)),ge.has_vote_option&&(ke.has_vote_option="true"),ot.request({method:"POST",url:"/x/v2/reply/add",data:{...ke,gaia_source:"main_web"},chainProxy:Ee=>be?Ee:Ee.with("UNIOS_RISK_USER_LOG",{active:!0}).with(Ui).with("UNIOS_WBI_ENCODE",{active:!0}).with(new cn),headers:{"Content-Type":"application/x-www-form-urlencoded"}})};function ri(ge){const be=document.createElement("bili-modal");document.body.appendChild(be),be.show({...ge,final:()=>{var $e;($e=ge.final)==null||$e.call(ge),document.body.removeChild(be)}})}function at$1(ge){return new Promise((be,$e)=>{const ke={...ge},Ee=ge.confirm===!1,Ce=ge.cancel===!1;if(Ee&&Ce)return $e("Not allow confirm and cancel both false");function Te(Se){var mt;const Ke=Se==="confirm",Je=(mt=ge[Se])!=null?mt:Ke?"\u786E\u5B9A":"\u53D6\u6D88";if(typeof Je=="function")ke[Se]=async bt=>{typeof Je=="function"&&await Je(bt),be(Ke)};else if(typeof Je=="string")ke[Se]={text:Je,click:async bt=>{await bt(),be(Ke)}};else{const bt=Je;ke[Se]={text:bt.text||(Se==="confirm"?"\u786E\u5B9A":"\u53D6\u6D88"),click:async $t=>{await bt.click($t),be(Ke)}}}}Ee||Ce?ge.final=()=>be(Ee):(Te("confirm"),Te("cancel")),ri(ke)})}const Vt={API:"//api.bilibili.com",API_CO:"//api.bilibili.co",API_VC:"//api.vc.bilibili.com",API_VC_CO:"//api.vc.bilibili.co",API_LIVE:"//api.live.bilibili.com",WWW:"//www.bilibili.com",SPACE:"//space.bilibili.com",SEARCH:"//search.bilibili.com",PASSPORT:"//passport.bilibili.com",BANGUMI:"//bangumi.bilibili.com",DATA:"//data.bilibili.com",T:"//t.bilibili.com",H:"//h.bilibili.com",VC:"//vc.bilibili.com",APP:"//app.bilibili.com",MESSAGE:"//message.bilibili.com",MEMBER:"//member.bilibili.com",LINK:"//link.bilibili.com",M:"//m.bilibili.com",LIVE:"//live.bilibili.com",CM:"//cm.bilibili.com"},fr=ge=>/https?:/.test(ge)?ge:(ge.startsWith("//")||(ge=`//${ge}`),`${location.protocol}${ge}`),dn=(ge,be)=>{const $e=new URL(fr(ge));return Object.keys(be).forEach(ke=>{$e.searchParams.has(ke)&&$e.searchParams.delete(ke),$e.searchParams.append(ke,encodeURIComponent(be[ke]))}),$e.toJSON()},Ca=ge=>`${Vt.T}/${ge}`,$a=ge=>`${Vt.WWW}/read/cv${ge}/`,Ea=(ge,be="")=>`${Vt.SPACE}/${ge}${be}`,Ta=ge=>`${Vt.BANGUMI}/anime/${ge}`,Sa=ge=>{const{bvid:be,avid:$e,ssid:ke,epid:Ee}=ge;return be?`${Vt.WWW}/video/${be}/`:$e?`${Vt.WWW}/video/av${$e}/`:ke?`${Vt.WWW}/bangumi/play/ss${ke}`:Ee?`${Vt.WWW}/bangumi/play/ep${ke}`:""},Ia=ge=>`${Vt.LIVE}/${ge}`,Pa=ge=>dn(`${Vt.SEARCH}/all`,{keyword:ge}),Oa=(ge,be,$e=!0)=>{let ke=`${Vt.T}/lottery/h5/index/#/result`;return $e&&(ke=`${Vt.WWW}/h5/lottery/result`),dn(ke,{business_type:String(ge),business_id:String(be),isWeb:"1"})},Da=(ge,be)=>(be||(be="comment"),`//t.bilibili.com/h5/dynamic/vote/#/result?vote_id=${ge}&from=${be}&isWeb=1`),Pt={DYN:Ca,SPACE:Ea,VIDEO:Sa,ARTICLE:$a,PGC:Ta,LIVE:Ia,SEARCH:Pa,LOTTERY:Oa,VOTE:Da};function La(ge,be,$e){const ke=[];return be&&Object.keys(be).forEach(Ee=>{be[Ee]!==void 0&&ke.push(`${Ee}="${be[Ee]}"`)}),`<${ge}${ke.length?` ${ke.join(" ")}`:""}>${$e?Array.isArray($e)?$e.join(""):$e:""}</${ge}>`}function Aa(ge){return Object.keys(ge).map(be=>`${be}:${ge[be]}`).join(";")}function Ra(ge,be){return La("iframe",{src:ge,style:be||""})}function Wi(ge){var ke;const be=document.createElement("bili-comments-popup");if(ge.mask&&(be.setAttribute("mask",""),ge.maskClosable!==!1&&be.setAttribute("maskClosable","")),be.style.zIndex=((ke=ge.zIndex)!=null?ke:I$2()+2e3).toString(),ge.title&&be.setAttribute("title",ge.title),ge.width){let Ee="";typeof ge.width=="number"?Ee=`${ge.width}px`:Ee=ge.width,be.setAttribute("width",Ee)}ge.transparent&&be.setAttribute("transparent","true");const $e=ge.render();return typeof $e=="string"?be.innerHTML=$e:be.appendChild($e),document.body.appendChild(be),be}function pn(ge){return Wi({title:"\u6295\u7968\u8BE6\u60C5",width:550,render:()=>Ra(Pt.VOTE(ge),Aa({"min-height":"550px"})),mask:!0})}function Vr(ge){var Ce,Te;var be,$e;const ke=document.createElement("bili-comment-report-form");ke.dataset.type=String(ge.type),ke.dataset.oid=ge.oid,ke.dataset.rpid=ge.rpid,ke.dataset.mid=(Ce=(be=ge.member)==null?void 0:be.mid)!=null?Ce:"",ke.dataset.uname=(Te=($e=ge.member)==null?void 0:$e.uname)!=null?Te:"",ke.dataset.ordering=ge.ordering,ke.dataset.appId=String(ge.appId||112),ke.dataset.platform=String(ge.platform||4);const Ee=Wi({title:"\u4E3E\u62A5",width:520,mask:!0,maskClosable:!0,render:()=>ke});ke.addEventListener("hide",()=>{Ee.parentElement&&Ee.parentElement.removeChild(Ee)})}function Ma(){const ge=document.createElement("bili-comment-update-uname-form"),be=Wi({title:"\u8BBE\u7F6E\u6635\u79F0",width:380,mask:!0,maskClosable:!0,render:()=>ge});ge.addEventListener("hide",()=>{be.parentElement&&be.parentElement.removeChild(be)})}function Ii(ge){const be=document.createElement("bili-comment-commercial-order-appeal-form");be.dataset.type=String(ge.type),be.dataset.oid=String(ge.oid),be.dataset.rpid=ge.rpid;const $e=Wi({title:"\u7533\u8BF7\u64A4\u9500\u63A8\u5E7F\u7F6E\u9876",width:520,mask:!0,maskClosable:!0,render:()=>be});be.addEventListener("hide",()=>{$e.parentElement&&$e.parentElement.removeChild($e)})}var ja=Object.defineProperty,Ba=Object.getOwnPropertyDescriptor,z=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Ba(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&ja(be,$e,Ee),Ee};let L=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.oid="",this.type=0,this.rootType="list",this.isSub=!1,this.mode=3,this.reply=null,this.user=null,this.avatarSize=48,this.keepActive=!1,this.active=!1,this.activeToggleTimer=0,this.inputValue="",this.placeholder="",this.voteOption=null,this.scrollContainer=null,this.pubBtnText="\u53D1\u5E03",this.uploadPicState=1,this.voteOptionHidden=!1,this.syncToDynamic=!1,this.showEmojiPicker=!1,this.mountEmojiPicker=!1,this.pics=[],this.mentionMap={},this.mentionText="",this.trackObserver=null}get hasContent(){return!!this.inputValue||this.pics.length>0||this.syncToDynamic}get uploadImgExts(){return["jpg","jpeg","png"]}get addNamespace(){return this.reply?W.REPLY:W.MAIN}connectedCallback(){super.connectedCallback(),this.disposables.addEventListener(document.documentElement,"click",ge=>{if(this.style.getPropertyValue("--bili-comment-box-display")==="none"||!ge.composedPath)return;const be=ge.composedPath();be.includes(this.shadowRoot)||this.handleDeactive(),be.includes(this.emojiPopover)||(this.showEmojiPicker=!1)},!0),this.disposables.addEventListener(document.documentElement,"mousedown",ge=>{const be=ge.composedPath();(be.includes(this.emojiPopover)||be.includes(this.emojiButton))&&ge.preventDefault()},!0)}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}handleActive(){this.active||this.voteOption&&this.voteOptionHidden&&(this.voteOptionHidden=!1),this.toggleActive(!0,20)}handleBlur(){this.toggleActive(!1,20)}handleDeactive(){var ge;this.keepActive||((ge=this.mentionPopover)==null||ge.refresh(null),this.showEmojiPicker=!1,!this.hasContent&&this.toggleActive(!1,0))}toggleActive(ge,be=200){this.activeToggleTimer&&(window.clearTimeout(this.activeToggleTimer),this.activeToggleTimer=0),this.activeToggleTimer=window.setTimeout(()=>{this.active=ge},be)}handleFocusInput(){window.setTimeout(()=>{this.focus()},20)}handleInputChange(ge){this.inputValue=ge.detail}handleHideVoteOption(ge){ge.stopPropagation(),this.voteOptionHidden=!0}handleReset(){this.inputValue="",this.mentionMap={},this.picturesUpload.reset(),this.syncToDynamic&&(this.syncToDynamic=!1),this.toggleActive(!1),this.addNamespace===W.REPLY&&w.emit("hideReply")}handleTool(ge,be){var $e;if(be.stopPropagation(),ge==="emoji"){if(!this.mountEmojiPicker&&!this.showEmojiPicker&&(this.mountEmojiPicker=!0),this.showEmojiPicker=!0,this.showEmojiPicker){this.emojiPopover.style.zIndex=`${I$2()}`;const{bottom:ke,top:Ee}=this.getBoundingClientRect();if(window.innerHeight-ke>=300)this.emojiPopover.style.removeProperty("top"),this.emojiPopover.style.setProperty("bottom","-10px"),this.emojiPopover.style.setProperty("left","-10px"),this.parentElement&&this.parentElement.id==="reply-container"&&this.emojiPopover.style.setProperty("left","-52px"),this.emojiPopover.style.setProperty("transform","translateY(100%)");else{const Ce=($e=this.scrollContainer)==null?void 0:$e.getBoundingClientRect();(Ce?Ee-Ce.top>300:Ee>300)?(this.emojiPopover.style.removeProperty("bottom"),this.emojiPopover.style.setProperty("top","-10px"),this.emojiPopover.style.setProperty("left","-10px"),this.parentElement&&this.parentElement.id==="reply-container"&&this.emojiPopover.style.setProperty("left","-52px"),this.emojiPopover.style.setProperty("transform","translateY(-100%)")):(this.emojiPopover.style.removeProperty("top"),this.emojiPopover.style.setProperty("bottom","-10px"),this.emojiPopover.style.setProperty("left","-10px"),this.parentElement&&this.parentElement.id==="reply-container"&&this.emojiPopover.style.setProperty("left","-52px"),this.emojiPopover.style.setProperty("transform","translateY(100%)"))}}this.textarea.focus();return}this.showEmojiPicker=!1}handleUploadPic(){this.picturesUpload.trigger()}async handlePicsChange(ge){try{this.pics=[...ge.detail]}catch(be){b.show(be.message)}}handleSelectEmoji(ge){setTimeout(()=>{this.textarea.insertText(ge.detail.text),this.toggleActive(!0,20)})}handleSyncToDynamicChange(ge){this.syncToDynamic=ge.detail.checked}async handlePublish(ge){var be;if(ge.stopPropagation(),this.showEmojiPicker=!1,!this.inputValue){b.show("\u4F60\u8FD8\u6CA1\u6709\u8BC4\u8BBA\uFF01");return}let $e=0;try{const ke={plat:1,oid:this.oid,type:this.type,message:""};let Ee=this.inputValue;if(this.reply&&(this.reply.parent?(ke.root=this.reply.root_str,ke.parent=this.reply.rpid_str,this.placeholder&&(Ee=`${this.placeholder}${Ee}`)):(ke.root=this.reply.rpid_str,ke.parent=this.reply.rpid_str)),ke.message=Ee,this.voteOption&&!this.voteOptionHidden&&(ke.has_vote_option=!0),Object.keys(this.mentionMap)&&(ke.at_name_to_mid=this.mentionMap),this.pics.length&&(ke.pictures=this.pics),this.syncToDynamic&&(ke.sync_to_dynamic=1),U()){const{app_id:Ke,platform:Je}=Be("app/getAppInfo"),mt={appId:Ke||112,platform:Je||4};ke.statistics=JSON.stringify(mt)}const{code:Ce,data:Te,message:Se}=await ka(ke);if(Ce!==0||!Te){switch(Ce){case 12074:$e=1;break;case 61001:$e=2;break;default:break}throw new Error(Se||"\u53D1\u5E03\u5931\u8D25")}if(b.show(Te.success_toast||"\u53D1\u5E03\u6210\u529F"),w.emit("add",{namespaces:[this.addNamespace],root:{type:this.rootType,params:{type:this.type,oid:this.oid}},method:this.addNamespace===W.MAIN?"unshift":"push",value:Te.reply}),this.handleReset(),Te.easter_egg){const{resource:Ke,jump_url:Je}=Te.easter_egg;w.emit("displayAlphaVideo",{src:Ke,jumpUrl:Je})}ce({type:"click",spm_info:"main.comment.reply.send"},{msg:JSON.stringify({type:this.reply?"sub":"root",oid:this.oid,root_rpid:((be=this.reply)==null?void 0:be.rpid_str)||"0"})})}catch(ke){if($e===1){Ma();return}if($e===2){at$1({title:"\u8BF7\u7ED1\u5B9A\u624B\u673A\u53F7",message:"\u6839\u636E\u56FD\u5BB6\u5B9E\u540D\u5236\u8BA4\u8BC1\u7684\u76F8\u5173\u8981\u6C42\uFF0C\u60A8\u9700\u8981\u7ED1\u5B9A\u624B\u673A\u53F7\uFF0C\u624D\u80FD\u7EE7\u7EED\u8FDB\u884C\u64CD\u4F5C\u3002",cancel:!1,confirm:()=>{const Ee="//passport.bilibili.com/account/security#/bindphone/unverify/set";window.open(Ee)}});return}b.show(ke.message)}}focus(){this.textarea.focus()}blur(){this.textarea.blur()}resetState(){this.emojiPopover&&this.emojiPopover.style.display!=="none"&&(this.showEmojiPicker=!1)}voteOptionTemplate(){return x$2`<div
      id="vote-option"
      class="${this.voteOptionHidden?o$1({hidden:!0}):""}"
    >
      <bili-comment-vote-option .data=${this.voteOption}></bili-comment-vote-option>
      <bili-icon @click=${this.handleHideVoteOption} size="12" icon="BDC/xmark_close_circle_fill/1"></bili-icon>
    </div>`}render(){return x$2`
      <div id="comment-area">
        <div
          id="emoji-popover"
          style=${o$3({display:this.showEmojiPicker?"block":"none"})}
        >
          ${this.mountEmojiPicker?x$2`<bili-emoji-picker @select=${this.handleSelectEmoji}></bili-emoji-picker>`:""}
        </div>
        <div id="body">
          <div
            id="editor"
            class=${this.keepActive||this.active?o$1({active:!0}):""}
            @click=${this.handleFocusInput}
          >
            ${this.voteOption?this.voteOptionTemplate():""}
            <bili-comment-textarea
              .value=${this.inputValue}
              .placeholder=${this.placeholder}
              @focus=${this.handleActive}
              @blur=${this.handleBlur}
              @change=${this.handleInputChange}
            ></bili-comment-textarea>
            <bili-comment-pictures-upload .accept=${this.uploadImgExts} @change=${this.handlePicsChange}></bili-comment-pictures-upload>
          </div>
        </div>
        <div
          id="footer"
          class=${o$1({hidden:!this.keepActive&&!this.active})}
        >
          <button id="emoji-button" class="tool-btn emoji" @click=${ge=>this.handleTool("emoji",ge)}>
            <bili-icon icon="BDC/emoji_circle_line/1" size="24"></bili-icon>
          </button>
          <div id="pub">
            <button
              class=${o$1({active:!!this.inputValue})}
              @click=${this.handlePublish}
            >
              ${this.pubBtnText}
            </button>
          </div>
        </div>
      </div>
    `}};L.styles=i$6`
    :host {
      --bili-comment-box-display: flex;
      display: var(--bili-comment-box-display);
    }

    #comment-area {
      position: relative;
      width: 100%;
    }
    #emoji-popover {
      position: absolute;
      left: 0;
    }

    #body {
      width: 100%;
      transition: height 0.2s;
    }
    #editor {
      width: 100%;
      padding: 0 12px;
      border: 1px solid var(--Ga1);
      box-sizing: border-box;
      border-radius: 6px;
      background-color: var(--bg2);
      transition: 0.2s;
      cursor: text;
    }
    #editor:hover,
    #editor.active {
      border: 1px solid var(--brand_pink);
    }
    #editor.active #vote-option {
      display: flex;
    }
    #editor #vote-option {
      display: none;
      padding: 0 8px;
      align-items: center;
      margin-bottom: 4px;
    }
    #editor #vote-option.hidden {
      display: none;
    }
    #editor #vote-option bili-comment-vote-option {
      margin-right: 4px;
    }
    #editor #vote-option bili-icon {
      color: var(--text4);
      cursor: pointer;
    }
    #editor bili-comment-pictures-upload {
      margin-top: 8px;
    }
    bili-comment-mention-popover {
      left: 38px;
      z-index: 2;
    }
    #pub {
      height: 32px;
      width: 70px;
      margin-left: auto;
    }
    #pub button {
      cursor: pointer;
      border-radius: 4px;
      outline: none;
      border: none;
      width: 100%;
      height: 100%;
      font-size: 16px;
      color: var(--text_white);
      background-color: var(--brand_pink);
      opacity: 0.5;
    }
    #pub button:hover,
    #pub button.active {
      background-color: var(--brand_pink);
      opacity: 1;
    }

    #footer {
      position: relative;
      margin-top: 10px;
      display: flex;
      align-items: center;
    }

    /* 设置slot 隐藏 */
    #footer bili-popover > * {
      display: none;
    }

    .tool-btn {
      outline: none;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 32px;
      height: 26px;
      border: none;
      background-color: var(--bg1);
      border-radius: 4px;
      color: var(--text2);
      cursor: pointer;
      margin-right: 6px;
    }
    .tool-btn.disabled {
      color: var(--text4);
      cursor: not-allowed;
    }
  `;z([n$4()],L.prototype,"oid",2);z([n$4()],L.prototype,"type",2);z([n$4()],L.prototype,"rootType",2);z([n$4()],L.prototype,"isSub",2);z([n$4()],L.prototype,"mode",2);z([n$4()],L.prototype,"reply",2);z([n$4()],L.prototype,"user",2);z([n$4({type:Boolean})],L.prototype,"keepActive",2);z([t$1()],L.prototype,"active",2);z([n$4({type:String})],L.prototype,"inputValue",2);z([n$4({type:String})],L.prototype,"placeholder",2);z([n$4({type:Object})],L.prototype,"voteOption",2);z([n$4()],L.prototype,"scrollContainer",2);z([n$4({type:String})],L.prototype,"pubBtnText",2);z([n$4()],L.prototype,"uploadPicState",2);z([t$1()],L.prototype,"voteOptionHidden",2);z([t$1()],L.prototype,"syncToDynamic",2);z([t$1()],L.prototype,"showEmojiPicker",2);z([t$1()],L.prototype,"mountEmojiPicker",2);z([t$1()],L.prototype,"pics",2);z([t$1()],L.prototype,"hasContent",1);z([t$1()],L.prototype,"uploadImgExts",1);z([t$1()],L.prototype,"addNamespace",1);z([i$3("#editor bili-comment-textarea")],L.prototype,"textarea",2);z([i$3("#emoji-popover")],L.prototype,"emojiPopover",2);z([i$3("bili-comment-mention-popover")],L.prototype,"mentionPopover",2);z([i$3("#emoji-button")],L.prototype,"emojiButton",2);z([i$3("#editor bili-comment-pictures-upload")],L.prototype,"picturesUpload",2);L=z([e$5("bili-comment-box")],L);var Na=Object.defineProperty,Va=Object.getOwnPropertyDescriptor,qe=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Va(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Na(be,$e,Ee),Ee};let de=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.oid="",this.type=0,this.rootType="list",this.commentBoxDisabledState=null,this.user=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}handleLogin(){if(!this.user){U()?Ft("auth/requestLogin",{from:"comments"}):Mt({event:"selfDef.relpyInputClick"});return}}render(){var ge,be;return x$2`
      <div id="disabled-commentbox">
        ${((ge=this.commentBoxDisabledState)==null?void 0:ge.source)==="unlogin"?x$2`<div id="edit">
              <div @click=${this.handleLogin}>请先登录后发表评论 (・ω・)</div>
            </div>`:x$2`<div id="edit">
              <div>${((be=this.commentBoxDisabledState)==null?void 0:be.message)||"\u5565\u90FD\u6728\u6709"}</div>
            </div>`}
      </div>
    `}};de.styles=i$6`
    #disabled-commentbox {
      display: flex;
      height: 32px;
      cursor: pointer;
    }
    #disabled-commentbox #user-avatar {
      flex-shrink: 0;
      width: 80px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #disabled-commentbox #user-avatar img {
      border-radius: 50%;
    }
    #disabled-commentbox #edit {
      flex: 1;
      height: 100%;
      border-radius: 6px;
      font-size: 12px;
      color: var(--text3);
      background-color: var(--bg3);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #disabled-commentbox #edit button {
      box-sizing: border-box;
      padding: 4px 9px;
      margin: 0 3px;
      border-radius: 4px;
      color: var(--text_white);
      background-color: var(--brand_blue);
      outline: none;
      border: none;
      cursor: pointer;
      font-size: 12px;
    }
    #disabled-commentbox #edit button:hover {
      background-color: var(--Lb4);
    }
  `;qe([n$4()],de.prototype,"oid",2);qe([n$4()],de.prototype,"type",2);qe([n$4()],de.prototype,"rootType",2);qe([n$4({type:Object})],de.prototype,"commentBoxDisabledState",2);qe([n$4()],de.prototype,"user",2);de=qe([e$5("bili-comment-disabled-box")],de);const za=ge=>ot.request({url:"/x/v2/reply/at",params:{...ge}});var Fa=Object.defineProperty,Ua=Object.getOwnPropertyDescriptor,zr=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Ua(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Fa(be,$e,Ee),Ee};let oi=class extends s$4{constructor(){super(...arguments),this.keyword="",this.groups=[]}handleVisible(ge){this.style[ge?"setProperty":"removeProperty"]("display","flex")}async refresh(ge){if(this.groups=[],ge===null){this.keyword="",this.handleVisible(!1);return}this.keyword=ge;try{const{code:be,data:$e}=await za({keyword:ge});be===0&&$e!=null&&$e.groups&&(this.groups=$e.groups)}catch(be){console.error(be)}this.handleVisible(!0)}handleSelect(ge){const be=ge.target.dataset,$e=Number(be.group),ke=Number(be.item);if(isNaN($e)||isNaN(ke))return;const Ee=this.groups[$e].items[ke];Ee&&this.dispatchEvent(new CustomEvent("select",{detail:{mid:Ee.mid,name:Ee.name}}))}renderKeywordName(ge){if(this.keyword){const be=ge.indexOf(this.keyword);if(be>-1)return x$2`${ge.slice(0,be)}<em>${this.keyword}</em>${ge.slice(be+this.keyword.length)}`}return x$2`${ge}`}renderCountDesc(ge){return`${Gs(ge)}\u7C89\u4E1D`}itemTemplate(ge,be,$e){return x$2`<li class="item" data-group="${$e}" data-item="${be}" @click=${this.handleSelect}>
      <div class="item-avatar">
        <img
          src="${utils$2.getBmgSrcNext(ge.face,{w:36,h:36,dpr:2})}"
        />
      </div>
      <div class="item-info">
        <div class="item-name">${this.renderKeywordName(ge.name)}</div>
        <div class="item-desc">${this.renderCountDesc(ge.fan)}</div>
      </div>
    </li>`}render(){return x$2`<div id="title">选择或输入你想@的人</div>
      ${this.groups.length?x$2`<div id="content">
            ${this.groups.map((ge,be)=>x$2`<div class="group">
                <div class="group-name">${ge.group_name}</div>
                <ul class="group-items">
                  ${ge.items.map(($e,ke)=>this.itemTemplate($e,ke,be))}
                </ul>
              </div>`)}
          </div>`:""}`}};oi.styles=i$6`
    :host {
      --max-content-height: 282px;
      position: absolute;
      display: none;
      flex-direction: column;
      width: 219px;
      border: 1px solid var(--graph_bg_thick);
      border-radius: 6px;
      font-size: 12px;
      background-color: var(--bg1);
      box-shadow: 0 2px 10px #00000014;
    }
    #title {
      width: 100%;
      height: 41px;
      padding: 12px;
      color: var(--text2);
      font-size: 12px;
      box-sizing: border-box;
    }
    #content {
      max-height: var(--max-content-height);
      overflow-x: hidden;
      overflow-y: scroll;
    }
    #content::-webkit-scrollbar {
      width: 4px;
      border-radius: 4px;
      background-color: transparent;
    }
    #content::-webkit-scrollbar-thumb {
      border-radius: 4px;
      border-radius: 4px;
      background-color: var(--graph_bg_thick);
      transition: 0.3s ease-in-out;
    }
    #content::-webkit-scrollbar-track {
      border-radius: 4px;
      background-color: transparent;
    }

    .group {
    }
    .group-name {
      padding: 0 12px;
      color: var(--text2);
    }
    .group-items {
      padding: 0;
      margin: 0;
    }
    .item {
      display: flex;
      align-items: center;
      height: 52px;
      padding: 0 12px;
      margin: 4px 0;
      cursor: pointer;
      box-sizing: border-box;
    }
    .item:hover {
      background-color: var(--bg2_float);
    }
    .item-avatar {
      width: 36px;
      height: 36px;
      margin-right: 8px;
      pointer-events: none;
    }
    .item-avatar img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .item-info {
      font-size: 12px;
      color: var(--text1);
      pointer-events: none;
    }
    .item-name em {
      color: var(--brand_blue);
      font-style: normal;
    }
    .item-desc {
      color: var(--text3);
    }
  `;zr([t$1()],oi.prototype,"keyword",2);zr([t$1()],oi.prototype,"groups",2);oi=zr([e$5("bili-comment-mention-popover")],oi);var qa=Object.defineProperty,Ha=Object.getOwnPropertyDescriptor,hn=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Ha(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&qa(be,$e,Ee),Ee};let Pi=class extends s$4{constructor(){super(...arguments),this.options=[]}handleClick(ge){this.dispatchEvent(new CustomEvent("select",{detail:ge}))}render(){return x$2`
      <ul id="options">
        ${this.options.map(ge=>x$2` <li @click=${()=>this.handleClick(ge)}>${ge.text}</li> `)}
      </ul>
    `}};Pi.styles=i$6`
    :host {
      --bili-comment-menu-display: none;
      --bili-comment-menu-position: absolute;
      --bili-comment-menu-top: 10px;
      --bili-comment-menu-right: 0;
    }
    #options {
      display: var(--bili-comment-menu-display);
      position: var(--bili-comment-menu-position);
      background-color: var(--bg1_float);
      overflow: hidden;
      top: var(--bili-comment-menu-top);
      right: var(--bili-comment-menu-right);
      margin: 0;
      padding: 12px 0;
      z-index: 10;
      width: 120px;
      list-style: none;
      border: 1px solid var(--bg2_float);
      border-radius: 6px;
      font-size: 14px;
      color: var(--text1);
      box-shadow: 0 0 5px #0003;
    }

    #options li {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      align-items: center;
      height: 36px;
      padding: 0 15px;
      cursor: pointer;
      user-select: none;
      color: var(--text3);
    }
    #options li:hover {
      background-color: var(--graph_bg_thick);
    }
  `;hn([n$4()],Pi.prototype,"options",2);Pi=hn([e$5("bili-comment-menu")],Pi);function Wa(ge,be){const $e=[],ke=ge.length===1;for(const Ee of ge){const{img_src:Ce,img_width:Te,img_height:Se}=Ee;let{width:Ke,height:Je}=be.multiple;const mt=Te>Se,bt=Math.floor(mt?Te/Se:Se/Te)>=3,$t={x:0,y:0,w:Ke,h:Je};if(ke){const St=be.single[mt?"horizontal":"vertical"],It=St.width/St.height,Bt=Te/Se;bt||!mt&&Te>St.width&&Se>St.height?(Ke=St.width,Je=St.height,$t.w=Ke,$t.h=Je):Bt>It?(Ke=St.width,Je=Math.floor(Ke/Bt)):(Je=St.height,Ke=Math.floor(Je*Bt))}$e.push({width:Ke,height:Je,src:utils$2.getBmgSrcNext(Ce,{w:bt&&mt?0:Ke,h:bt&&!mt?0:Je,s:!0,...bt?{a:$t}:{c:!ke},dpr:2}),original:Ee})}return $e}var Ga=Object.defineProperty,Ja=Object.getOwnPropertyDescriptor,Fr=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Ja(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Ga(be,$e,Ee),Ee};let ni=class extends s$4{constructor(){super(...arguments),this.list=[]}get items(){return Wa(this.list,{single:{horizontal:{width:240,height:135},vertical:{width:135,height:180}},multiple:{width:88,height:88}}).slice(0,3)}handleView(ge){this.dispatchEvent(new CustomEvent("preview-image",{detail:{imageList:this.list,index:ge}}))}render(){return x$2`
      <div id="content">
        ${this.items.map((ge,be)=>x$2` <img
            src="${ge.src}"
            width="${ge.width}"
            height="${ge.height}"
            loading="lazy"
            @click=${()=>this.handleView(be)}
          />`)}
        ${this.list.length>this.items.length?x$2`<div id="more-tag">+${this.list.length-this.items.length}</div>`:""}
      </div>
    `}};ni.styles=i$6`
    :host {
    }
    #content {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      max-width: 364px;
    }
    #content img {
      display: block;
      border-radius: var(--bili-comment-picutres-border-radius, 6px);
      cursor: zoom-in;
    }
    #more-tag {
      position: absolute;
      left: 244px;
      bottom: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      padding: 2px;
      border-radius: 4px;
      font-size: 13px;
      color: var(--text_white);
      font-weight: 500;
      line-height: 18px;
      background: rgba(0, 0, 0, 0.7);
      pointer-events: none;
    }
  `;Fr([n$4({type:Array})],ni.prototype,"list",2);Fr([t$1()],ni.prototype,"items",1);ni=Fr([e$5("bili-comment-pictures-renderer")],ni);function Ka(ge){return new Promise((be,$e)=>{const ke=new FileReader;ke.onload=Ee=>{be(Ee.target.result)},ke.onerror=()=>{$e(new Error("blobToBase64 error"))},ke.readAsDataURL(ge)})}function Gi(){const ge={};return ge.promise=new Promise((be,$e)=>{ge.resolve=be,ge.reject=$e}),ge}var Ya=(ge,be,$e)=>{if(!be.has(ge))throw TypeError("Cannot "+$e)},Yt=(ge,be,$e)=>{if(be.has(ge))throw TypeError("Cannot add the same private member more than once");be instanceof WeakSet?be.add(ge):be.set(ge,$e)},Gt=(ge,be,$e)=>(Ya(ge,be,"access private method"),$e),gr,un,Ur,mn,qr,fn,Hr,gn,Wr,bn,Gr,vn,Jr,yn,Kr,wn,Oi,br;const Eo=8,Za=20,Qa=10,Xa=10,To=1048576;var xn=(ge=>(ge[ge.PICTURE_UPLOAD_STATUS_INITIAL=0]="PICTURE_UPLOAD_STATUS_INITIAL",ge[ge.PICTURE_UPLOAD_STATUS_SUCCESS=1]="PICTURE_UPLOAD_STATUS_SUCCESS",ge[ge.PICTURE_UPLOAD_STATUS_FAILURE=2]="PICTURE_UPLOAD_STATUS_FAILURE",ge))(xn||{});class Re{constructor(be){Yt(this,gr),Yt(this,Ur),Yt(this,qr),Yt(this,Hr),Yt(this,Wr),Yt(this,Gr),Yt(this,Jr),Yt(this,Kr),Yt(this,Oi),this.defer=null,this.config=Object.assign({},{remoteOptions:{url:"",body:()=>({})},accept:["png","jpeg","jpg","gif"],multiple:!1,maxSize:Za,minWidth:Qa,minHeight:Xa,onComplete:()=>{},onError:()=>{}},be||{}),Gt(this,gr,un).call(this)}trigger(){return this.defer=Gi(),this.el.click(),this.defer.promise}}gr=new WeakSet;un=function(){const ge=document.createElement("input");ge.type="file",this.config.multiple&&ge.setAttribute("multiple","multiple");const be=this.config.accept.filter(Boolean).map($e=>`image/${$e}`).join(", ");ge.accept=be||"image/png, image/jpeg, image/jpg, image/gif",ge.name="upload",ge.addEventListener("change",Gt(this,Kr,wn).bind(this)),this.el=ge,this.defer=null};Ur=new WeakSet;mn=function(ge){const be=ge.type||"";for(let $e=0;$e<this.config.accept.length;$e++)if(be.indexOf(this.config.accept[$e])>-1)return"";return`\u4EC5\u652F\u6301${this.config.accept.map($e=>$e.toLocaleUpperCase()).join(" ")}`};qr=new WeakSet;fn=function(ge){return((ge==null?void 0:ge.type)||"").indexOf("gif")>-1?Math.floor(ge.size/To)>=Eo?`\u8BF7\u4E0A\u4F20\u5C0F\u4E8E${Eo}MB\u7684Gif\u56FE\u7247`:"":Math.floor(ge.size/To)>=this.config.maxSize?`\u8BF7\u4E0A\u4F20\u5C0F\u4E8E${this.config.maxSize}MB\u7684\u56FE\u7247`:""};Hr=new WeakSet;gn=function(ge){return ge<this.config.minWidth?`\u56FE\u7247\u5BBD\u5EA6\u4E0D\u5F97\u5C0F\u4E8E${this.config.minWidth}\u50CF\u7D20`:""};Wr=new WeakSet;bn=function(ge){return ge<this.config.minHeight?`\u56FE\u7247\u9AD8\u5EA6\u4E0D\u5F97\u5C0F\u4E8E${this.config.minHeight}\u50CF\u7D20`:""};Gr=new WeakSet;vn=function(ge,be){return new Promise(($e,ke)=>{const Ee=Ke=>{ge.status=2,ge.msg=Ke},Ce=Gt(this,Ur,mn).call(this,be);if(Ce)return Ee(Ce),ke(ge);const Te=Gt(this,qr,fn).call(this,be);if(Te)return Ee(Te),ke(ge);const Se=new Image;Se.src=URL.createObjectURL(be),Se.onload=async()=>{const Ke=Gt(this,Hr,gn).call(this,Se.width);if(Ke)return Ee(Ke),ke(ge);const Je=Gt(this,Wr,bn).call(this,Se.height);if(Je)return Ee(Je),ke(ge);try{ge.src=await Ka(be)}catch(mt){console.log(mt)}try{const mt=await ot.request({url:this.config.remoteOptions.url,method:"POST",data:this.config.remoteOptions.body(be)});if(mt.code!==0)throw new Error(mt.message);ge.data=this.config.remoteOptions.response(mt),ge.status=1,$e(ge)}catch{Ee("\u4E0A\u4F20\u5931\u8D25"),ke(ge)}}})};Jr=new WeakSet;yn=function(){return{status:0,msg:"",src:"",data:null}};Kr=new WeakSet;wn=function(ge){var be,$e;const ke=[],Ee=ge.target,Ce=Array.from(Ee.files);if(Ee.value="",Ce.length===0)return(be=this.defer)==null?void 0:be.reject("empty");this.config.onBeforeUpload&&this.config.onBeforeUpload(Ce);const Te=[];Ce.forEach(Se=>{const Ke=Gt(this,Jr,yn).call(this);ke.push(Ke),Te.push(Gt(this,Gr,vn).call(this,Ke,Se))}),setTimeout(async()=>{if(Te.length===ke.length)try{await Promise.all(Te),Gt(this,Oi,br).call(this,this.config.onComplete,ke)}catch(Se){Gt(this,Oi,br).call(this,this.config.onError,Se)}}),($e=this.defer)==null||$e.resolve(ke)};Oi=new WeakSet;br=async function(ge,...be){if(typeof ge!="function")throw new Error("cb is not a function");return await ge(...be)};Re.status=xn;var tl=Object.defineProperty,el=Object.getOwnPropertyDescriptor,me=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?el(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&tl(be,$e,Ee),Ee};let Kt=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.items=[],this.showSlideLeft=!1,this.showSlideRight=!1,this.slideOffsetX=0,this.slideToRight=!1}connectedCallback(){super.connectedCallback(),this.uploader=new Re({remoteOptions:{url:"/x/dynamic/feed/draw/upload_bfs",body:ge=>{const be=new FormData;return be.append("file_up",ge),be.append("biz","new_dyn"),be.append("category","daily"),be},response:ge=>({img_src:ge.data.image_url,img_width:ge.data.image_width,img_height:ge.data.image_height,img_size:ge.data.img_size})},accept:this.accept||["png","jpeg","jpg"],multiple:!0,onComplete:()=>{this.requestUpdate(),this.updateState()},onBeforeUpload:ge=>{const be=ge.length+this.items.length-9;be>0&&(ge.splice(ge.length-be),b.show("\u4E0A\u4F20\u56FE\u7247\u4E0D\u5F97\u8D85\u8FC79\u5F20\uFF08\uFFE3\u221E\uFFE3\uFF09"))}}),this.disposables.addEventListener(window,"resize",this.handleSlideBtnVisible.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}reset(){this.items=[],this.updateState()}async trigger(){try{const ge=await this.uploader.trigger();this.items=[...this.items,...ge],this.items.length&&this.updateVisible(!0)}catch(ge){b.show(ge.message)}}updateState(){this.handleSlideBtnVisible(),this.dispatchEvent(new CustomEvent("change",{detail:this.items.filter(ge=>ge.data&&ge.status===Re.status.PICTURE_UPLOAD_STATUS_SUCCESS).map(ge=>ge.data)}))}handleComputeOffset(){const ge=this.contentEl.parentElement.offsetWidth,be=this.contentEl.offsetWidth,$e=8*2;this.slideOffsetX=Math.max(0,be+$e-ge)}handleSlideBtnVisible(){if(this.handleComputeOffset(),this.slideOffsetX<=0){this.showSlideLeft=!1,this.showSlideRight=!1;return}this.showSlideLeft=this.slideToRight,this.showSlideRight=!this.showSlideLeft}handleSlide(ge){this.slideOffsetX!==0&&(this.slideToRight=ge,this.showSlideLeft=ge,this.showSlideRight=!this.showSlideLeft)}updateVisible(ge){this.style.display=ge?"flex":"none"}removeItem(ge){const be=[...this.items];be.splice(ge,1),this.items=be,this.items.length===0&&this.updateVisible(!1),this.updateState()}itemTemplate(ge,be){const $e=()=>{switch(ge.status){case Re.status.PICTURE_UPLOAD_STATUS_INITIAL:return x$2`<div class="mask">
            <img class="loading" width="24" height="24" src="//i0.hdslb.com/bfs/static/jinkela/long/gif/loading-blue.gif" />
          </div>`;case Re.status.PICTURE_UPLOAD_STATUS_FAILURE:return x$2`<div class="mask error"><div class="msg">${ge.msg||"\u4E0A\u4F20\u5931\u8D25"}</div></div>`;case Re.status.PICTURE_UPLOAD_STATUS_SUCCESS:default:return""}};return x$2`<div class="item">
      <div class="close" @click=${()=>this.removeItem(be)}>
        <bili-icon icon="BDC/xmark_close_line/1" size="12"> </bili-icon>
      </div>
      ${ge.src?x$2`<img src=${ge.src} alt="图片" />`:""} ${$e()}
    </div>`}render(){return x$2`
      <div
        id="wrapper"
        class="${o$1({"slide-left":this.showSlideLeft,"slide-right":this.showSlideRight})}"
      >
        <div id="shadow" class="left"></div>
        <div id="slide-btn" class="left" @click=${()=>this.handleSlide(!1)}>
          <bili-icon icon="BDC/arrow_back_left_line/3" size="12"></bili-icon>
        </div>
        <div
          id="content"
          style="${o$3({transform:`translateX(${this.slideToRight?-this.slideOffsetX:0}px)`})}"
        >
          ${this.items.map((ge,be)=>this.itemTemplate(ge,be))}
        </div>
        <div id="slide-btn" class="right" @click=${()=>this.handleSlide(!0)}>
          <bili-icon icon="BDC/arrow_back_left_line/3" size="12"></bili-icon>
        </div>
        <div id="shadow" class="right"></div>
      </div>
    `}};Kt.styles=i$6`
    :host {
      display: none;
    }
    #wrapper {
      position: relative;
      padding: 0 8px;
      width: 100%;
      overflow: hidden;
    }
    #wrapper.slide-left #slide-btn.left,
    #wrapper.slide-left #shadow.left {
      display: flex;
    }
    #wrapper.slide-right #slide-btn.right,
    #wrapper.slide-right #shadow.right {
      display: flex;
    }
    #slide-btn {
      position: absolute;
      top: 50%;
      display: none;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid var(--line_regular);
      background-color: #fff;
      color: var(--text3);
      cursor: pointer;
      z-index: 2;
    }
    #slide-btn.left {
      left: 8px;
      transform: translateY(-50%);
    }
    #slide-btn.right {
      right: 8px;
      transform: translateY(-50%) rotate(180deg);
    }
    #shadow {
      display: none;
      position: absolute;
      top: 0;
      width: 20px;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    #shadow.left {
      left: 0;
      background: linear-gradient(to right, #fff, #fff 28.5%, rgba(255, 255, 255, 0) 100%);
    }
    #shadow.right {
      right: 0;
      background: linear-gradient(to left, #fff 28.5%, rgba(255, 255, 255, 0) 100%);
    }
    #content {
      width: fit-content;
      display: flex;
      flex-wrap: nowrap;
      transition: 0.2s ease-in-out;
    }
    .item {
      position: relative;
      width: 72px;
      height: 72px;
      border-radius: 4px;
      background-color: #f1f2f3;
      overflow: hidden;
      flex-shrink: 0;
    }
    .item .close {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border-radius: 0 4px;
      background-color: #0003;
      color: #fff;
      cursor: pointer;
      z-index: 2;
    }
    .item > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .item .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0005;
      flex-direction: column;
      color: #fff;
      font-size: 20px;
      z-index: 1;
    }
    .item .mask.error {
      color: #f85a54;
    }
    .item .mask .msg {
      height: 14px;
      font-size: 20px;
      transform: scale(0.5);
      transform-origin: center center;
      font-weight: 500;
      white-space: nowrap;
    }

    #content .item:not(:last-child) {
      margin-right: 8px;
    }
  `;me([n$4()],Kt.prototype,"accept",2);me([t$1()],Kt.prototype,"items",2);me([t$1()],Kt.prototype,"showSlideLeft",2);me([t$1()],Kt.prototype,"showSlideRight",2);me([t$1()],Kt.prototype,"slideOffsetX",2);me([t$1()],Kt.prototype,"slideToRight",2);me([i$3("#content")],Kt.prototype,"contentEl",2);Kt=me([e$5("bili-comment-pictures-upload")],Kt);var Qt=(ge=>(ge.PC_BROWSER="pc_browser",ge.MOBILE_BROWSER="mobile_browser",ge.DESKTOP_APP="desktop_app",ge))(Qt||{});const il=(ge,be)=>{if(!ge)return[];const $e=[];let ke=ge.indexOf(be);for(;ke!==-1;){const Ee=ge.slice(0,ke);Ee&&$e.push({type:0,text:Ee}),$e.push({type:1,text:be}),ge=ge.slice(ke+be.length),ke=ge.indexOf(be)}return ge&&$e.push({type:0,text:ge}),$e},se=(ge,be)=>{if(!ge)return[];const $e=ge.match(be);if(!$e)return[{type:0,text:ge}];let ke=0;const Ee=$e.reduce((Ce,Te)=>{const Se=[],Ke=ge.slice(ke).indexOf(Te),Je=ge.slice(ke,ke+Ke);return Je&&Se.push({type:0,text:Je}),Se.push({type:1,text:Te}),ke=ke+Ke+Te.length,Ce.concat(Se)},[]);return ke<ge.length&&Ee.push({type:0,text:ge.slice(ke)}),Ee};function ae(ge,be){return($e,ke)=>{for(let Ee=0;Ee<ke.length;Ee++){const Ce=ke[Ee];Ce.type?$e.push(ge(Ce.text)):be($e,Ce.text)}}}var rl=Object.defineProperty,ol=Object.defineProperties,nl=Object.getOwnPropertyDescriptors,So=Object.getOwnPropertySymbols,sl=Object.prototype.hasOwnProperty,al=Object.prototype.propertyIsEnumerable,vr=(ge,be,$e)=>be in ge?rl(ge,be,{enumerable:!0,configurable:!0,writable:!0,value:$e}):ge[be]=$e,Qe=(ge,be)=>{for(var $e in be||(be={}))sl.call(be,$e)&&vr(ge,$e,be[$e]);if(So)for(var $e of So(be))al.call(be,$e)&&vr(ge,$e,be[$e]);return ge},ll=(ge,be)=>ol(ge,nl(be)),lr=(ge,be,$e)=>(vr(ge,typeof be!="symbol"?be+"":be,$e),$e);const cl=/(https?:\/\/)((?:[a-zA-Z0-9]|[_-](?=[a-zA-Z0-9]))+(?:\.(?:[a-zA-Z0-9]|[_-](?=[a-zA-Z0-9]))*)+)((?:\/(?!\/)(?:[a-zA-Z0-9]|[.~!@$%^&*=+_-](?=[a-zA-Z0-9]))*)*)([?#][a-zA-Z0-9\[{\]}\\\|;:'",<.>/?`~!@#$%^&*()=+_-]{0,256})?/,dl=/(https?:\/\/)((?:[a-zA-Z0-9]|[_-](?=[a-zA-Z0-9]))+(?:\.(?:[a-zA-Z0-9]|[_-](?=[a-zA-Z0-9]))*)+)((?:\/(?!\/)(?:[a-zA-Z0-9]|[.~!@$%^&*=+_-](?=[a-zA-Z0-9]))*)*)/,Me="default",Ci={blacklist:{domain:[],rex:[]},whitelist:{domain:[],rex:[]}},pl=ge=>ll(Qe({},ge!=null?ge:{}),{appKey:"333.1339",nscode:7}),Io=ge=>{const be=[];for(let $e=0;$e<ge.length;$e++)/[^a-zA-Z0-9]/.test(ge[$e])?be.push(`\\${ge[$e]}`):be.push(ge[$e]);return be.join("")},hl=ge=>{const be={domain:[],rex:[]},$e={domain:[],rex:[]};return ge==null||ge.forEach(ke=>{var Ee,Ce,Te,Se,Ke,Je,mt,bt,$t,St,It,Bt;(Te=be.domain)==null||Te.push(...(Ce=(Ee=ke==null?void 0:ke.whitelist)==null?void 0:Ee.domain)!=null?Ce:[]),(Je=be.rex)==null||Je.push(...(Ke=(Se=ke==null?void 0:ke.whitelist)==null?void 0:Se.rex)!=null?Ke:[]),($t=$e.domain)==null||$t.push(...(bt=(mt=ke==null?void 0:ke.blacklist)==null?void 0:mt.domain)!=null?bt:[]),(Bt=$e.rex)==null||Bt.push(...(It=(St=ke==null?void 0:ke.blacklist)==null?void 0:St.rex)!=null?It:[])}),{whitelist:be,blacklist:$e}},ul=(ge,be)=>{var $e,ke,Ee,Ce,Te,Se,Ke,Je;const mt=be!=null?be:Me;let bt=Qe({},Ci);try{const $t=ge;let St=Qe({},Ci),It=Qe({},Ci);St={blacklist:JSON.parse((ke=($e=$t==null?void 0:$t[Me])==null?void 0:$e.blacklist)!=null?ke:"{}"),whitelist:JSON.parse((Ce=(Ee=$t==null?void 0:$t[Me])==null?void 0:Ee.whitelist)!=null?Ce:"{}")},mt!==Me&&(It={blacklist:JSON.parse((Se=(Te=$t==null?void 0:$t[mt])==null?void 0:Te.blacklist)!=null?Se:"{}"),whitelist:JSON.parse((Je=(Ke=$t==null?void 0:$t[mt])==null?void 0:Ke.whitelist)!=null?Je:"{}")}),bt=hl([St,It])}catch($t){console.warn($t)}return bt},_n=(ge,be)=>{var $e,ke,Ee,Ce,Te,Se,Ke,Je,mt,bt;if(typeof ge!="string")return!1;const $t=(ke=($e=dl.exec(ge))==null?void 0:$e[0])!=null?ke:"";if(!$t)return!1;const St=(Ce=(Ee=be==null?void 0:be.blacklist)==null?void 0:Ee.rex)!=null?Ce:[];for(const jt of St)if(new RegExp(jt).test($t))return!1;const It=(Se=(Te=be==null?void 0:be.blacklist)==null?void 0:Te.domain)!=null?Se:[];for(const jt of It)if(new RegExp(`(?:^(?:https?://)?(?:[a-zA-Z0-9_-]+.)?)(${Io(jt)})(?=[\\/?#]|$)`).test($t))return!1;const Bt=(Je=(Ke=be==null?void 0:be.whitelist)==null?void 0:Ke.rex)!=null?Je:[];for(const jt of Bt)if(new RegExp(jt).test($t))return!0;const Dt=(bt=(mt=be==null?void 0:be.whitelist)==null?void 0:mt.domain)!=null?bt:[];for(const jt of Dt)if(new RegExp(`(?:^(?:https?://)?(?:[a-zA-Z0-9_-]+.)?)(${Io(jt)})(?=[\\/?#]|$)`).test($t))return!0;return!1},ml=(ge,be)=>{if(typeof ge!="string")return[];const $e=[],ke=ge.matchAll(new RegExp(cl,"g")),Ee=Array.from(ke);let Ce=0;for(const Te of Ee){const Se=Te[0];if(!_n(Se,be))continue;const Ke=Te.index,Je=Ke+Se.length;Ce<Ke&&$e.push({value:ge.slice(Ce,Ke),type:"text"}),$e.push({value:Se,type:"link"}),Ce=Je}return Ce<ge.length&&$e.push({value:ge.slice(Ce,ge.length),type:"text"}),$e};let Po=class{constructor(ge){lr(this,"rawKvConfig",{}),lr(this,"scene",Me),lr(this,"urlRuleSceneConfig",Qe({},Ci));var be,$e;this.rawKvConfig=(be=ge==null?void 0:ge.rawKvConfig)!=null?be:{},this.scene=($e=ge==null?void 0:ge.scene)!=null?$e:Me,this.urlRuleSceneConfig=ul(this.rawKvConfig,this.scene)}static getKvInitConfig(ge){return pl(ge)}isWhitelistUrl(ge){return _n(ge,this.urlRuleSceneConfig)}getProcessedText(ge){return ml(ge,this.urlRuleSceneConfig)}},yr=null;const Yr=async()=>{if(!yr)try{const ge=await(await useKv(Po.getKvInitConfig())).getAll();yr=new Po({rawKvConfig:ge,scene:"comments"})}catch{hr("tech","comments.urlkv.failed",{})}},fl=()=>yr,gl={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ji=ge=>ge.replace(/[&<>"'``]/g,be=>gl[be]||be),Oo=(ge,be)=>(ge=ge.replace(/^(https?:)?\/\//,"//"),be?ge.indexOf("//")===0?ge:`//${ge}`:ge),bl=ge=>ge.replace(/^(https?:)?\/\//,"https://"),kn="%[a-f0-9]{2}",Do=new RegExp("("+kn+")|([^%]+?)","gi"),Lo=new RegExp("("+kn+")+","gi");function wr(ge,be){try{return[decodeURIComponent(ge.join(""))]}catch{}if(ge.length===1)return ge;be=be||1;const $e=ge.slice(0,be),ke=ge.slice(be);return Array.prototype.concat.call([],wr($e),wr(ke))}function vl(ge){try{return decodeURIComponent(ge)}catch{let be=ge.match(Do)||[];for(let $e=1;$e<be.length;$e++)ge=wr(be,$e).join(""),be=ge.match(Do)||[];return ge}}function yl(ge){const be={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"};let $e=Lo.exec(ge);for(;$e;){try{be[$e[0]]=decodeURIComponent($e[0])}catch{const Ee=vl($e[0]);Ee!==$e[0]&&(be[$e[0]]=Ee)}$e=Lo.exec(ge)}be["%C2"]="\uFFFD";const ke=Object.keys(be);for(const Ee of ke)ge=ge.replace(new RegExp(Ee,"g"),be[Ee]);return ge}function wl(ge){if(typeof ge!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof ge+"`");try{return decodeURIComponent(ge)}catch{return yl(ge)}}function xl(ge,be){const $e={};if(Array.isArray(be))for(const ke of be){const Ee=Object.getOwnPropertyDescriptor(ge,ke);Ee!=null&&Ee.enumerable&&Object.defineProperty($e,ke,Ee)}else for(const ke of Reflect.ownKeys(ge)){const Ee=Object.getOwnPropertyDescriptor(ge,ke);if(Ee.enumerable){const Ce=ge[ke];be(ke,Ce,ge)&&Object.defineProperty($e,ke,Ee)}}return $e}function Cn(ge,be){if(!(typeof ge=="string"&&typeof be=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(ge===""||be==="")return[];const $e=ge.indexOf(be);return $e===-1?[]:[ge.slice(0,$e),ge.slice($e+be.length)]}const _l=ge=>ge==null,kl=ge=>encodeURIComponent(ge).replaceAll(/[!'()*]/g,be=>`%${be.charCodeAt(0).toString(16).toUpperCase()}`),xr=Symbol("encodeFragmentIdentifier");function Cl(ge){switch(ge.arrayFormat){case"index":return be=>($e,ke)=>{const Ee=$e.length;return ke===void 0||ge.skipNull&&ke===null||ge.skipEmptyString&&ke===""?$e:ke===null?[...$e,[Q(be,ge),"[",Ee,"]"].join("")]:[...$e,[Q(be,ge),"[",Q(Ee,ge),"]=",Q(ke,ge)].join("")]};case"bracket":return be=>($e,ke)=>ke===void 0||ge.skipNull&&ke===null||ge.skipEmptyString&&ke===""?$e:ke===null?[...$e,[Q(be,ge),"[]"].join("")]:[...$e,[Q(be,ge),"[]=",Q(ke,ge)].join("")];case"colon-list-separator":return be=>($e,ke)=>ke===void 0||ge.skipNull&&ke===null||ge.skipEmptyString&&ke===""?$e:ke===null?[...$e,[Q(be,ge),":list="].join("")]:[...$e,[Q(be,ge),":list=",Q(ke,ge)].join("")];case"comma":case"separator":case"bracket-separator":{const be=ge.arrayFormat==="bracket-separator"?"[]=":"=";return $e=>(ke,Ee)=>Ee===void 0||ge.skipNull&&Ee===null||ge.skipEmptyString&&Ee===""?ke:(Ee=Ee===null?"":Ee,ke.length===0?[[Q($e,ge),be,Q(Ee,ge)].join("")]:[[ke,Q(Ee,ge)].join(ge.arrayFormatSeparator)])}default:return be=>($e,ke)=>ke===void 0||ge.skipNull&&ke===null||ge.skipEmptyString&&ke===""?$e:ke===null?[...$e,Q(be,ge)]:[...$e,[Q(be,ge),"=",Q(ke,ge)].join("")]}}function $l(ge){let be;switch(ge.arrayFormat){case"index":return($e,ke,Ee)=>{if(be=/\[(\d*)]$/.exec($e),$e=$e.replace(/\[\d*]$/,""),!be){Ee[$e]=ke;return}Ee[$e]===void 0&&(Ee[$e]={}),Ee[$e][be[1]]=ke};case"bracket":return($e,ke,Ee)=>{if(be=/(\[])$/.exec($e),$e=$e.replace(/\[]$/,""),!be){Ee[$e]=ke;return}if(Ee[$e]===void 0){Ee[$e]=[ke];return}Ee[$e]=[...Ee[$e],ke]};case"colon-list-separator":return($e,ke,Ee)=>{if(be=/(:list)$/.exec($e),$e=$e.replace(/:list$/,""),!be){Ee[$e]=ke;return}if(Ee[$e]===void 0){Ee[$e]=[ke];return}Ee[$e]=[...Ee[$e],ke]};case"comma":case"separator":return($e,ke,Ee)=>{const Ce=typeof ke=="string"&&ke.includes(ge.arrayFormatSeparator),Te=typeof ke=="string"&&!Ce&&Zt(ke,ge).includes(ge.arrayFormatSeparator);ke=Te?Zt(ke,ge):ke;const Se=Ce||Te?ke.split(ge.arrayFormatSeparator).map(Ke=>Zt(Ke,ge)):ke===null?ke:Zt(ke,ge);Ee[$e]=Se};case"bracket-separator":return($e,ke,Ee)=>{const Ce=/(\[])$/.test($e);if($e=$e.replace(/\[]$/,""),!Ce){Ee[$e]=ke&&Zt(ke,ge);return}const Te=ke===null?[]:ke.split(ge.arrayFormatSeparator).map(Se=>Zt(Se,ge));if(Ee[$e]===void 0){Ee[$e]=Te;return}Ee[$e]=[...Ee[$e],...Te]};default:return($e,ke,Ee)=>{if(Ee[$e]===void 0){Ee[$e]=ke;return}Ee[$e]=[...[Ee[$e]].flat(),ke]}}}function $n(ge){if(typeof ge!="string"||ge.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function Q(ge,be){return be.encode?be.strict?kl(ge):encodeURIComponent(ge):ge}function Zt(ge,be){return be.decode?wl(ge):ge}function En(ge){return Array.isArray(ge)?ge.sort():typeof ge=="object"?En(Object.keys(ge)).sort((be,$e)=>Number(be)-Number($e)).map(be=>ge[be]):ge}function Tn(ge){const be=ge.indexOf("#");return be!==-1&&(ge=ge.slice(0,be)),ge}function El(ge){let be="";const $e=ge.indexOf("#");return $e!==-1&&(be=ge.slice($e)),be}function Ao(ge,be,$e){return $e==="string"&&typeof ge=="string"?ge:typeof $e=="function"&&typeof ge=="string"?$e(ge):be.parseBooleans&&ge!==null&&(ge.toLowerCase()==="true"||ge.toLowerCase()==="false")?ge.toLowerCase()==="true":$e==="number"&&!Number.isNaN(Number(ge))&&typeof ge=="string"&&ge.trim()!==""||be.parseNumbers&&!Number.isNaN(Number(ge))&&typeof ge=="string"&&ge.trim()!==""?Number(ge):ge}function Zr(ge){ge=Tn(ge);const be=ge.indexOf("?");return be===-1?"":ge.slice(be+1)}function Qr(ge,be){be={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,types:Object.create(null),...be},$n(be.arrayFormatSeparator);const $e=$l(be),ke=Object.create(null);if(typeof ge!="string"||(ge=ge.trim().replace(/^[?#&]/,""),!ge))return ke;for(const Ee of ge.split("&")){if(Ee==="")continue;const Ce=be.decode?Ee.replaceAll("+"," "):Ee;let[Te,Se]=Cn(Ce,"=");Te===void 0&&(Te=Ce),Se=Se===void 0?null:["comma","separator","bracket-separator"].includes(be.arrayFormat)?Se:Zt(Se,be),$e(Zt(Te,be),Se,ke)}for(const[Ee,Ce]of Object.entries(ke))if(typeof Ce=="object"&&Ce!==null&&be.types[Ee]!=="string")for(const[Te,Se]of Object.entries(Ce)){const Ke=be.types[Ee]?be.types[Ee].replace("[]",""):void 0;Ce[Te]=Ao(Se,be,Ke)}else typeof Ce=="object"&&Ce!==null&&be.types[Ee]==="string"?ke[Ee]=Object.values(Ce).join(be.arrayFormatSeparator):ke[Ee]=Ao(Ce,be,be.types[Ee]);return be.sort===!1?ke:(be.sort===!0?Object.keys(ke).sort():Object.keys(ke).sort(be.sort)).reduce((Ee,Ce)=>{const Te=ke[Ce];return Ee[Ce]=Te&&typeof Te=="object"&&!Array.isArray(Te)?En(Te):Te,Ee},Object.create(null))}function Sn(ge,be){if(!ge)return"";be={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...be},$n(be.arrayFormatSeparator);const $e=Te=>be.skipNull&&_l(ge[Te])||be.skipEmptyString&&ge[Te]==="",ke=Cl(be),Ee={};for(const[Te,Se]of Object.entries(ge))$e(Te)||(Ee[Te]=Se);const Ce=Object.keys(Ee);return be.sort!==!1&&Ce.sort(be.sort),Ce.map(Te=>{const Se=ge[Te];return Se===void 0?"":Se===null?Q(Te,be):Array.isArray(Se)?Se.length===0&&be.arrayFormat==="bracket-separator"?Q(Te,be)+"[]":Se.reduce(ke(Te),[]).join("&"):Q(Te,be)+"="+Q(Se,be)}).filter(Te=>Te.length>0).join("&")}function In(ge,be){var Ce;var $e;be={decode:!0,...be};let[ke,Ee]=Cn(ge,"#");return ke===void 0&&(ke=ge),{url:(Ce=($e=ke==null?void 0:ke.split("?"))==null?void 0:$e[0])!=null?Ce:"",query:Qr(Zr(ge),be),...be&&be.parseFragmentIdentifier&&Ee?{fragmentIdentifier:Zt(Ee,be)}:{}}}function Pn(ge,be){be={encode:!0,strict:!0,[xr]:!0,...be};const $e=Tn(ge.url).split("?")[0]||"",ke=Zr(ge.url),Ee={...Qr(ke,{sort:!1}),...ge.query};let Ce=Sn(Ee,be);Ce&&(Ce=`?${Ce}`);let Te=El(ge.url);if(typeof ge.fragmentIdentifier=="string"){const Se=new URL($e);Se.hash=ge.fragmentIdentifier,Te=be[xr]?Se.hash:`#${ge.fragmentIdentifier}`}return`${$e}${Ce}${Te}`}function On(ge,be,$e){$e={parseFragmentIdentifier:!0,[xr]:!1,...$e};const{url:ke,query:Ee,fragmentIdentifier:Ce}=In(ge,$e);return Pn({url:ke,query:xl(Ee,be),fragmentIdentifier:Ce},$e)}function Tl(ge,be,$e){const ke=Array.isArray(be)?Ee=>!be.includes(Ee):(Ee,Ce)=>!be(Ee,Ce);return On(ge,ke,$e)}const Ro=Object.freeze(Object.defineProperty({__proto__:null,exclude:Tl,extract:Zr,parse:Qr,parseUrl:In,pick:On,stringify:Sn,stringifyUrl:Pn},Symbol.toStringTag,{value:"Module"})),Pe=(ge,be)=>{try{const $e=Ro.parseUrl(ge);return $e.query.spm_id_from=be,Ro.stringifyUrl($e)}catch{return ge}},Sl=ge=>`bilibili://space/${ge}`,Il=(ge,be,$e,ke)=>({tag:"img",style:$e,dataset:ke,img:{src:ge,alt:be?Ji(be):"",loading:"lazy"}}),Mo="BDC/chain_link_line/1",Oe="BDC/video_circle_line/1",jo="BDC/column_line/1",Bo="BDC/vote_line/2",wt=(ge,be,$e,ke,Ee)=>({tag:"a",style:ke,dataset:Ee||{type:"link"},a:{text:Ji(be||"\u7F51\u9875\u94FE\u63A5"),href:ge,icon:$e,target:"_blank"}}),Ht=ge=>({tag:"span",span:{text:Ji(ge)}}),xi="(https?://)",_i="([/.$*?~=#!%@&A-Za-z0-9_-]*)";function Pl(ge){if(ge.startsWith("http")){const be=ge.match(/www.bilibili.com\/h5\/note-app\/view\?cvid=(\d+)/);return be!=null&&be[1]?Pt.ARTICLE(be[1]):ge}return""}const Ol=ge=>{const be=[];let $e=null;return ge.forEach(ke=>{if($e)ke.tag==="span"&&$e.tag==="span"?$e.span.text+=ke.span.text:($e=ke,be.push($e));else{$e=ke,be.push(ke);return}}),be};function Xr(ge,be,$e,ke){var Ee;const Ce=[];if(!((Ee=ge.content)!=null&&Ee.message))return Ce.push(Ht("\u6682\u4E0D\u652F\u6301\u5C55\u793A\u7684\u5185\u5BB9")),Ce;const{message:Te,emote:Se,members:Ke,jump_url:Je,vote:mt}=ge.content,bt=fl(),$t=new RegExp("(AV|av|Av|aV)[0-9]+","ug"),St=new RegExp("(BV|bv|Bv|bV)1[1-9A-NP-Za-km-z]{9}","ug"),It=new RegExp("((CV|cv)[0-9]+|(mobile/[0-9]+))","ug"),Bt=new RegExp("(EP|ep|Ep|eP)[0-9]+","ug"),Dt=new RegExp("(SS|ss|Ss|sS)[0-9]+","ug"),jt=/\[[^([*\])]+\]/gu,zt=new RegExp(`${xi}?([a-z0-9A-Z-]{1,15}.)?(bilibili\\.(com|tv|cn)|esheep\\.(com|cn|net)|biligame\\.(com|cn|net)|(bilibiliyoo|im9)\\.com|biliapi\\.net|b23\\.tv|bili22\\.cn|bili33\\.cn|bili23\\.cn|bili2233\\.cn|(sugs\\.suning\\.com)|jueze2021\\.peopleapp\\.com|kaola\\.com|bigfun\\.cn|mcbbs\\.net|mp\\.weixin\\.qq\\.com|static\\.cdsb\\.com|bjnews\\.com\\.cn|720yun\\.com|\\.cctv\\.com)($|/|)${_i}`,"ug"),en=new RegExp(`${xi}?(((uat-)?www\\.bilibili\\.com)|(b23\\.tv|bili22\\.cn|bili33\\.cn|bili23\\.cn|bili2233\\.cn))(/video)?/((av[0-9]+)|((BV)1[1-9A-NP-Za-km-z]{9}))($|/|)${_i}`,"ug"),qt=new RegExp(`${xi}?(((uat-)?www\\.bilibili\\.com/bangumi/(play/|media/)|(b23\\.tv|bili22\\.cn|bili33\\.cn|bili23\\.cn|bili2233.cn)/)(ss|ep)[0-9]+)($|/|)${_i}`,"ug"),vo=new RegExp(`${xi}?(uat-)?www\\.bilibili\\.com/read/((cv[0-9]+)|(native?id=[0-9]+)|(app/[0-9]+)|(native/[0-9]+)|(mobile/[0-9]+))($|/|)${_i}`,"ug"),yo=/(\d+#)?(\d+(:|：)){1,2}\d\d/g,fo=vs=>{vs.lastIndex=0},bo=ae(vs=>{if(Se!=null&&Se[vs]){const{url:tu,meta:ru,webp_url:cu,gif_url:vu,jump_url:Eu,jump_title:Nu,package_id:Du}=Se[vs],xu=cu||vu||tu,Iu={};let mu=20,Pu={width:"1.4em",height:"1.4em","vertical-align":"text-bottom"};return ru.size===2&&(mu=50,Pu={width:"50px",height:"50px"},Eu&&(Iu["emoji-jump-url"]=Eu),Nu&&(Iu["emoji-jump-title"]=Nu),Du&&(Iu["emoji-pkg-id"]=String(Du)),ge.rpid&&(Iu.rpid=String(ge.rpid))),Il(utils$2.getBmgSrcNext(xu,{w:mu,h:mu,dpr:2}),vs,Pu,Iu)}return Ht(vs)},(vs,tu)=>{vs.push(Ht(tu))}),Ar=ae(vs=>{const tu=vs;if((be==null?void 0:be.videoTime)===!1)return Ht(vs);let ru="-1";if(vs.indexOf("#")>-1){const[vu,Eu]=vs.split("#");ru=vu,vs=Eu}vs=vs.replace(/[:：]/g,":");const cu=vs.split(":").map(vu=>parseInt(vu)).reverse().reduce((vu,Eu,Nu)=>vu+Eu*Math.pow(60,Nu),0);return{tag:"a",dataset:{type:"seek","video-time":String(cu),"video-part":ru},a:{text:tu,href:""}}},(vs,tu)=>{bo(vs,se(tu,jt))}),fs=ae(vs=>wt(Pt.ARTICLE(wi(vs)),vs,jo),(vs,tu)=>{Ar(vs,se(tu,yo))}),ms=vs=>{let tu=Pt.VIDEO({avid:vs});return ke&&(tu=Pe(tu,ke)),tu},go=vs=>{let tu=Pt.VIDEO({bvid:vs});return ke&&(tu=Pe(tu,ke)),tu},wo=ae(vs=>wt(go(vs),vs,Oe),(vs,tu)=>{fs(vs,se(tu,It))}),ir=ae(vs=>/^av1$/i.test(vs)?Ht(vs):wt(ms(wi(vs)),vs,Oe),(vs,tu)=>{wo(vs,se(tu,St))}),bs={};Ke.length&&Ke.forEach(vs=>{bs["@"+vs.uname]=vs});const xs=ae(vs=>{const tu=bs[vs],ru=tu==null?void 0:tu.mid;if($e===Qt.MOBILE_BROWSER)return wt(Pt.SPACE(ru),vs,void 0,void 0,{type:"link",link:Sl(ru)});const cu={type:"mention","user-profile-id":ru};return wt(Pt.SPACE(ru),vs,void 0,void 0,cu)},(vs,tu)=>{du(vs,tu,1)}),ks=Object.keys(Je||{}),fu={},_s=(vs,tu)=>{const{pc_url:ru,app_url_schema:cu,title:vu,prefix_icon:Eu,match_once:Nu,icon_position:Du,extra:xu}=tu;if(!Nu||!fu[vs]){fu[vs]=!0;const Iu=Du===1;let mu="";if(ru?mu=Oo(ru):(fo(zt),zt.test(vs)?(mu=Oo(vs,!0),ke&&(fo(en),en.test(mu)&&(mu=Pe(mu,ke)))):(fo(St),fo($t),fo(It),St.test(vs)?(mu=Pt.VIDEO({bvid:vs}),ke&&(mu=Pe(mu,ke))):$t.test(vs)?(mu=Pt.VIDEO({avid:wi(vs)}),ke&&(mu=Pe(mu,ke))):It.test(vs)?(mu=Pt.ARTICLE(wi(vs)),ke&&(mu=Pe(mu,ke))):mu=Pl(vs))),!mu)return Ht(vs);const Pu=vu||vs;let ju="",Vu=!1,Uu="";(xu!=null&&xu.goods_item_id||xu!=null&&xu.goods_prefetched_cache)&&(Vu=!0,xu!=null&&xu.goods_pc_click_urls&&Array.isArray(xu.goods_pc_click_urls)&&(Uu=xu.goods_pc_click_urls.join(",")),fo(zt),zt.test(vs)&&(ju=vs));let Mu=Vu?{type:"goods","goods-url":Uu,"raw-url":ju}:xu!=null&&xu.is_word_search?{type:"search",keyword:Ji(Pu)}:{type:"link"};return $e===Qt.DESKTOP_APP?Mu={...Mu,link:mu}:$e===Qt.MOBILE_BROWSER&&cu&&(Mu={...Mu,link:cu}),wt(mu,Pu,Eu,Iu?{display:"inline-flex","flex-direction":"row-reverse","--icon-width":13/20+"em","--icon-height":12/10+"em"}:{"--icon-width":12/10+"em","--icon-height":12/10+"em"},Mu)}else return Ht(vs)},nu=ae(vs=>Je!=null&&Je[vs]?_s(vs,Je[vs]):wt(Pt.SEARCH(vs),vs),(vs,tu)=>{du(vs,tu,2)}),du=(vs,tu,ru)=>{if(ru<=0&&Ke.length){xs(vs,se(tu,new RegExp(`@(${Ke.map(cu=>cu.uname).join("|")})`,"gu")));return}if(ru<=1&&ks.length){nu(vs,se(tu,new RegExp(`(${ks.map(Ps).join("|")})`,"gu")));return}ir(vs,se(tu,$t))},pu=ae(vs=>{if(Je!=null&&Je[vs])return _s(vs,Je[vs]);let tu=null;const ru=vs;if(tu=ru.match(en),tu!=null&&tu[0]){const cu=tu[0].match(St);if(cu!=null&&cu[0])return wt(ru,cu[0],Oe);const vu=tu[0].match($t);if(vu!=null&&vu[0])return wt(ru,vu[0],Oe)}if(tu=ru.match(qt),tu!=null&&tu[0]){const cu=tu[0].match(Dt);if(cu!=null&&cu[0])return wt(ru,cu[0],Oe);const vu=tu[0].match(Bt);if(vu!=null&&vu[0])return wt(ru,vu[0],Oe)}if(tu=ru.match(vo),tu!=null&&tu[0]){const cu=tu[0].match(It);if(cu!=null&&cu[0])return wt(ru,cu[0],jo)}if($e===Qt.DESKTOP_APP){const cu={type:"link",link:ru};return wt(fr(vs),vs,Mo,void 0,cu)}return wt(fr(vs),vs,Mo)},(vs,tu)=>{du(vs,tu,0)}),uu=[];if(mt){const vs=`{vote:${mt.id}}`;Te.indexOf(vs)>-1?il(Te,vs).forEach(({type:tu,text:ru})=>{if(tu)if($e===Qt.DESKTOP_APP){const cu={type:"link",link:mt.url};uu.push(wt(mt.url,mt.title,Bo,void 0,cu))}else uu.push(wt(mt.url,mt.title,Bo));else uu.push(Ht(ru))}):uu.push(Ht(Te))}else uu.push(Ht(Te));return uu.forEach(vs=>{if(vs.tag!=="span")Ce.push(vs);else{const tu=vs.span.text;bt?pu(Ce,bt.getProcessedText(tu).map(ru=>({type:ru.type==="link"?1:0,text:ru.value}))):pu(Ce,se(tu,zt))}}),Ol(Ce)}function lt(ge){if(ge===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return ge}function _r(ge,be){return _r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function($e,ke){return $e.__proto__=ke,$e},_r(ge,be)}function di(ge,be){if(typeof be!="function"&&be!==null)throw new TypeError("Super expression must either be null or a function");ge.prototype=Object.create(be&&be.prototype,{constructor:{value:ge,writable:!0,configurable:!0}}),Object.defineProperty(ge,"prototype",{writable:!1}),be&&_r(ge,be)}function Di(ge){return Di=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(be){return be.__proto__||Object.getPrototypeOf(be)},Di(ge)}function Dn(){try{var ge=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Dn=function(){return!!ge})()}function Ne(ge){return Ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(be){return typeof be}:function(be){return be&&typeof Symbol=="function"&&be.constructor===Symbol&&be!==Symbol.prototype?"symbol":typeof be},Ne(ge)}function Dl(ge,be){if(be&&(Ne(be)==="object"||typeof be=="function"))return be;if(be!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lt(ge)}function pi(ge){var be=Dn();return function(){var $e=Di(ge),ke;if(be){var Ee=Di(this).constructor;ke=Reflect.construct($e,arguments,Ee)}else ke=$e.apply(this,arguments);return Dl(this,ke)}}function Ll(ge,be){if(Ne(ge)!="object"||!ge)return ge;var $e=ge[Symbol.toPrimitive];if($e!==void 0){var ke=$e.call(ge,be||"default");if(Ne(ke)!="object")return ke;throw new TypeError("@@toPrimitive must return a primitive value.")}return(be==="string"?String:Number)(ge)}function Ln(ge){var be=Ll(ge,"string");return Ne(be)=="symbol"?be:String(be)}function ft(ge,be,$e){return be=Ln(be),be in ge?Object.defineProperty(ge,be,{value:$e,enumerable:!0,configurable:!0,writable:!0}):ge[be]=$e,ge}function No(ge,be){for(var $e=0;$e<be.length;$e++){var ke=be[$e];ke.enumerable=ke.enumerable||!1,ke.configurable=!0,"value"in ke&&(ke.writable=!0),Object.defineProperty(ge,Ln(ke.key),ke)}}function He(ge,be,$e){return be&&No(ge.prototype,be),$e&&No(ge,$e),Object.defineProperty(ge,"prototype",{writable:!1}),ge}function We(ge,be){if(!(ge instanceof be))throw new TypeError("Cannot call a class as a function")}var hi=He(function ge(){We(this,ge)}),Vo="widget-layer-avatar",Al=function(ge){di($e,ge);var be=pi($e);function $e(){var ke;We(this,$e);for(var Ee=arguments.length,Ce=new Array(Ee),Te=0;Te<Ee;Te++)Ce[Te]=arguments[Te];return ke=be.call.apply(be,[this].concat(Ce)),ft(lt(ke),"pos",{axis_x:1,axis_y:1,coordinate_pos:0}),ft(lt(ke),"size",{height:1,width:1}),ft(lt(ke),"render",{opacity:1}),ke}return He($e,[{key:"setPos",value:function(ke,Ee,Ce){return this.pos={axis_x:ke,axis_y:Ee,coordinate_pos:Ce},this}},{key:"setSize",value:function(ke,Ee){return this.size={height:Ee,width:ke},this}},{key:"getValue",value:function(){return{pos_spec:this.pos,size_spec:this.size,render_spec:this.render}}}]),$e}(hi),Rl=function(ge){di($e,ge);var be=pi($e);function $e(){var ke;We(this,$e);for(var Ee=arguments.length,Ce=new Array(Ee),Te=0;Te<Ee;Te++)Ce[Te]=arguments[Te];return ke=be.call.apply(be,[this].concat(Ce)),ft(lt(ke),"tags",{}),ft(lt(ke),"isCritical",!1),ft(lt(ke),"allowOverPaint",!1),ft(lt(ke),"mask",null),ke}return He($e,[{key:"setIsCritical",value:function(){return this.isCritical=!0,this}},{key:"setTag",value:function(ke,Ee){return this.tags[ke]=Ee,this}},{key:"getTag",value:function(ke){return this.tags[ke]}},{key:"setMask",value:function(ke){return this.mask=ke,this}},{key:"getValue",value:function(){return{tags:this.tags,is_critical:this.isCritical,allow_over_paint:this.allowOverPaint,layer_mask:this.mask}}}]),$e}(hi),Ml=function(ge){di($e,ge);var be=pi($e);function $e(){var ke;We(this,$e);for(var Ee=arguments.length,Ce=new Array(Ee),Te=0;Te<Ee;Te++)Ce[Te]=arguments[Te];return ke=be.call.apply(be,[this].concat(Ce)),ft(lt(ke),"type",3),ft(lt(ke),"image",void 0),ft(lt(ke),"animation",void 0),ft(lt(ke),"nativeDraw",void 0),ke}return He($e,[{key:"setImage",value:function(){var ke=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,Ee=arguments.length>1?arguments[1]:void 0;return this.type=3,Ee?this.image={image_src:{src_type:1,remote:{url:Ee,bfs_style:Vo},placeholder:ke}}:this.image={image_src:{src_type:2,local:ke,placeholder:ke}},this}},{key:"setAnimation",value:function(ke,Ee){return this.type=4,this.animation={webp_src:{src_type:1,remote:{url:ke,bfs_style:Vo},placeholder:Ee}},this}},{key:"setNativeDraw",value:function(ke,Ee){var Ce=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"#fff";return this.type=5,this.nativeDraw={draw_src:{src_type:3,placeholder:0,draw:{draw_type:ke,fill_mode:Ee!=null?Ee:0,color_config:{day:{argb:Ce},is_dark_mode_aware:!1,night:{argb:Ce}},edge_weight:0}}},this}},{key:"getValue",value:function(){switch(this.type){case 3:return{res_type:this.type,res_image:this.image};case 4:return{res_type:this.type,res_animation:this.animation};case 5:return{res_type:this.type,res_native_draw:this.nativeDraw};default:return{res_type:this.type}}}}]),$e}(hi),to=function(ge){di($e,ge);var be=pi($e);function $e(){var ke;We(this,$e);for(var Ee=arguments.length,Ce=new Array(Ee),Te=0;Te<Ee;Te++)Ce[Te]=arguments[Te];return ke=be.call.apply(be,[this].concat(Ce)),ft(lt(ke),"spec",new Al),ft(lt(ke),"config",new Rl),ft(lt(ke),"resource",new Ml),ke}return He($e,[{key:"getConfigTag",value:function(ke){return this.config.getTag(ke)}},{key:"getValue",value:function(){return{layer_id:"",visible:!0,general_spec:this.spec.getValue(),layer_config:this.config.getValue(),resource:this.resource.getValue()}}}]),$e}(hi),An=function(ge){di($e,ge);var be=pi($e);function $e(){var ke;We(this,$e);for(var Ee=arguments.length,Ce=new Array(Ee),Te=0;Te<Ee;Te++)Ce[Te]=arguments[Te];return ke=be.call.apply(be,[this].concat(Ce)),ft(lt(ke),"layers",[]),ft(lt(ke),"mask",null),ft(lt(ke),"isCritical",!1),ke}return He($e,[{key:"setMask",value:function(ke){return this.mask=ke,this}},{key:"addLayer",value:function(ke){return this.layers.push(ke),this}},{key:"setIsCritical",value:function(){return this.isCritical=!0,this}},{key:"getValue",value:function(){return{group_id:"",layers:this.layers.map(function(ke){return ke.getValue()}),group_mask:this.mask,is_critical_group:this.isCritical}}}]),$e}(hi),jl="https://i0.hdslb.com/bfs/activity-plat/static/20220506/334553dd7c506a92b88eaf4d59ac8b4d/j8AeXAkEul.gif",Bl="https://i0.hdslb.com/bfs/activity-plat/static/20220506/334553dd7c506a92b88eaf4d59ac8b4d/IOHoVs1ebP.gif",Nl=function(ge){var be=new to;return be.config.setIsCritical().setTag("AVATAR_LAYER",{config_type:0}).setTag("GENERAL_CFG",{config_type:1,general_config:{web_css_style:{borderRadius:"50%"}}}),be.resource.setImage(6,ge),be},Rn=function(ge){return typeof ge=="string"?ge:ge.image||""},Mn=function(){var ge=new to;return ge.config.setIsCritical().setTag("PENDENT_LAYER",{config_type:0}).setTag("GENERAL_CFG",{config_type:1,general_config:{web_css_style:{borderRadius:"50%"}}}),ge},eo=function(){var ge=new to;return ge.config.setTag("ICON_LAYER",{config_type:0}).setTag("GENERAL_CFG",{config_type:1,general_config:{web_css_style:{"background-color":"rgb(255,255,255)",border:"2px solid rgba(255,255,255,1)",borderRadius:"50%",boxSizing:"border-box"}}}),ge},Vl=function(ge){var be=eo();return be.resource.setAnimation(ge===1?jl:Bl,5),be},zl=function(ge){var be=-1;return ge&&(typeof ge=="number"?be=ge:be=ge.type),be},Fl=function(ge){var be=eo();return be.resource.setImage(ge===0?3:4),be},Ul=function(ge){if(!ge)return!1;if(ge===!0)return!0;if(typeof ge=="string")return ge;var be=ge.type,$e=ge.status,ke=ge.avatar_subscript_url;return be>0&&$e===1?ke||!0:!1},ql=function(ge){var be=eo();return be.resource.setImage(1,ge),be},Hl=function(ge,be,$e){switch(ge){case 64:return(16+be*2)/ge;case 80:return(16+be*2)/ge;case 48:default:return(($e===1?16:14)+be*2)/ge}},Wl=function(ge,be){var $e,ke=new An,Ee=ge.face,Ce=ge.pendant,Te=ge.official,Se=ge.vip,Ke=ge.nft,Je=($e=ge.a)!==null&&$e!==void 0?$e:48,mt=Nl(Ee),bt=1,$t=null,St=Ce?Rn(Ce):"";St&&($t=Mn(),$t.resource.setImage(0,St));var It=[];Ke&&[1,2].includes(Ke)?(It.push(Vl(Ke)),$t?($t.spec.setSize(be,be).setPos(be/2,be/2,2),bt=.94,mt.spec.setSize(bt,bt).setPos(be/2,be/2,2)):(bt=Je>48?1.2:1.3,mt.spec.setSize(bt,bt).setPos(be/2,be/2,2))):$t?($t.spec.setPos(.6875,.6875,2).setSize(1.375,1.375),bt=.787,mt.spec.setSize(bt,bt).setPos(.6875,.6875,2)):mt.spec.setSize(1,1).setPos(.675,.675,2);var Bt=zl(Te),Dt=Ul(Se);if(Bt!==-1?It.push(Fl(Bt)):Dt&&It.push(ql(typeof Dt=="string"?Dt:"")),ke.addLayer(mt),$t&&ke.addLayer($t),It.length){var jt=2,zt=Hl(Je,jt,It.length),en=(zt*Je-jt)/Je,qt=be/2+bt/2-en,vo=qt;$t&&(qt+=1/15,vo+=1/20),It.slice(0,2).reverse().forEach(function(yo,fo){yo.spec.setSize(zt,zt).setPos(vo-fo*en,qt,1),ke.addLayer(yo)})}return ke},Gl=function(ge,be){var $e=ge.pendant,ke=null;if($e&&typeof $e!="string"&&$e.image_enhance)ke=Mn(),ke.resource.setAnimation($e.image_enhance,0);else return[];var Ee=[];return be.layers.forEach(function(Ce){var Te=new An;Ce.getConfigTag("PENDENT_LAYER")&&Ce.resource.setAnimation($e.image_enhance,0),Te.addLayer(Ce),Ee.push(Te)}),Ee.map(function(Ce){return Ce.getValue()})},Jl=function(ge){var be,$e=1.35,ke=(be=ge.a)!==null&&be!==void 0?be:48,Ee=ge.pendant?Rn(ge.pendant):"";return ke===80?(ge.nft?Ee?$e=1.8:$e=1.65:$e=1.5,$e):(ge.nft?Ee?$e=1.65:$e=1.5:Ee?$e=1.375:$e=1.35,$e)},Kl=function(ge){var be=Jl(ge),$e=Wl(ge,be),ke={container_size:{width:be,height:be},fallback_layers:$e.getValue(),mid:ge.mid},Ee=Gl(ge,$e);return Ee.length&&(ke.layers=Ee),ke};function Yl(ge){return ge.reply_control?!!ge.reply_control.is_up_top||!!ge.reply_control.is_admin_top:!1}function jn(ge){return ge.reply_control?ge.reply_control.is_note?{type:"note",oid:ge.note_cvid_str}:ge.reply_control.is_note_v2&&ge.reply_control.fold_pictures?{type:"opus",oid:ge.dynamic_id_str}:null:null}var Zl=Object.defineProperty,Ql=Object.getOwnPropertyDescriptor,xe=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Ql(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Zl(be,$e,Ee),Ee};const Xl=ge=>{const be=Math.floor(ge/3600),$e=Math.floor((ge-be*3600)/60),ke=ge-(be*3600+$e*60),Ee=be.toString().padStart(2,"0"),Ce=$e.toString().padStart(2,"0"),Te=ke.toString().padStart(2,"0");return be?`${Ee}:${Ce}:${Te}`:`${Ce}:${Te}`};let ee=class extends s$4{constructor(){super(...arguments),this.data=null,this.userNameColor=""}get expand(){return this.data?!!jn(this.data):!1}get pictures(){var ge,be,$e;return($e=(be=(ge=this.data)==null?void 0:ge.content)==null?void 0:be.pictures)!=null&&$e.length?this.data.content.pictures:null}load(ge){this.data=ge}loadNoteData(ge){let be="";const $e=[];ge.noteContent.forEach(Ee=>{var Ce,Te,Se;const Ke=Ee.insert;if(((Ce=Ke.imageUpload)==null?void 0:Ce.source)==="video"&&$e.length<3&&$e.push({img_src:Ke.imageUpload.url,img_width:Ke.imageUpload.width}),(Se=(Te=Ke.tag)==null?void 0:Te.seconds)!=null&&Se.toString()){const Je=Ke.tag.seconds,mt=Ke.tag.desc;be=be.concat(`${Xl(Je)} ${mt}`)}typeof Ke=="string"&&(be=be.concat(Ke))}),be=this.limitContent(be);const ke={member:{mid:"1",uname:ge.upName,level_info:{current_level:ge.upLevel||0},avatar:ge.upAvatar,face_nft_new:0,is_contractor:!1,official_verify:{type:-1,desc:""},avatar_item:null,is_senior_member:ge.isHardcoreMember?1:0},content:{message:be,members:[],max_line:6,jump_url:{},pictures:$e},ctime:ge.noteTime==="\u521A\u521A"?Date.now()/1e3-1:new Date(ge.noteTime).getTime()/1e3,reply_control:{is_note:!0,max_line:6,time_desc:"",location:""}};ge.upNameColor&&(this.userNameColor=ge.upNameColor),this.data=ke}limitContent(ge){ge=ge.replace(/^\s*/,"").replace(/\s*$/,"");const be=ge.match(/\n/g);return be&&be.length>6?ge.split(`
`).slice(0,6).join(`
`).slice(0,77).concat("..."):ge.length>77?ge.slice(0,77).concat("..."):ge}connectedCallback(){super.connectedCallback(),this.initData()}initData(){setTimeout(()=>{var ge;if(!this.data)return;if((ge=this.data.member)!=null&&ge.avatar){const{avatar:$e,mid:ke,pendant:Ee,vip:Ce,official_verify:Te,face_nft_new:Se}=this.data.member;this.biliAvatar.load(Kl({face:$e,mid:ke,pendant:Ee||"",vip:Ce,official:Te,nft:Se!=null?Se:0}),{baseSize:48,isFloat:!0})}const be=U();this.biliRichText.setContents(Xr(this.data,void 0,be?Qt.DESKTOP_APP:void 0))})}expandTemplate(){return x$2`<span id="expand">展开</span>`}picturesTemplate(){return x$2`<div id="pictures">
      <div id="pic">
        <bili-comment-pictures-renderer .list=${this.pictures}></bili-comment-pictures-renderer>
      </div>
    </div>`}render(){return x$2`<div id="body">
      <div id="user-avatar"><bili-avatar></bili-avatar></div>
      <div id="main">
        <div id="header">
          <bili-comment-user-info
            .data=${this.data}
            style="${this.userNameColor?o$3({"--bili-comment-user-info-name-color":this.userNameColor}):""}"
          ></bili-comment-user-info>
        </div>
        <div id="content">
          <bili-rich-text
            style="${o$3({"--bili-rich-text-font-size":"var(--bili-comments-font-size-content)","--bili-rich-text-line-height":"var(--bili-comments-line-height-content)","--bili-rich-text-link-color":"var(--Lb6)","--bili-rich-text-display":"inline"})}"
          ></bili-rich-text>
          ${this.expand?this.expandTemplate():""} ${this.pictures?this.picturesTemplate():""}
        </div>
        <div id="footer">
          <bili-comment-action-buttons-renderer
            style="${o$3({"--bili-comment-action-buttons-more-display":"var(--bili-comment-hover-more-display)"})}"
            .data=${this.data}
          ></bili-comment-action-buttons-renderer>
        </div>
      </div>
    </div>`}};ee.styles=i$6`
    #body {
      pointer-events: none;
      position: relative;
      padding-left: 80px;
      --bili-comment-hover-more-display: block;
    }
    #user-avatar {
      position: absolute;
      left: 20px;
      top: 0;
      width: 48px;
      height: 48px;
      transform-origin: left top;
      transform: var(--bili-comments-avatar-size);
    }
    #ornament {
      position: absolute;
      right: 0;
      top: 7px;
      user-select: none;
    }
    bili-comment-vote-option {
      margin-top: 2px;
      margin-bottom: 6px;
    }
    #main {
      width: 100%;
    }
    #header {
      margin-bottom: 4px;
    }
    i {
      font-size: 12px;
      font-style: normal;
    }
    #content {
      font-size: var(--bili-comments-font-size-content);
      line-height: var(--bili-comments-line-height-content);
      color: var(--text1);
    }
    #content #expand {
      color: var(--brand_blue);
      cursor: pointer;
    }
    #pictures {
      display: block;
      width: 100%;
      margin-top: 8px;
    }
  `;xe([t$1()],ee.prototype,"data",2);xe([t$1()],ee.prototype,"userNameColor",2);xe([i$3("bili-avatar")],ee.prototype,"biliAvatar",2);xe([i$3("bili-rich-text")],ee.prototype,"biliRichText",2);xe([t$1()],ee.prototype,"expand",1);xe([t$1()],ee.prototype,"pictures",1);ee=xe([e$5("bili-comment-preview-renderer")],ee);function Bn(ge){return ge.type===1}function tc(ge){var be;if((be=ge.card_label)!=null&&be.length){const $e=ge.card_label.filter(ke=>!Bn(ke));if($e.length)return $e}return null}function ec(ge){var be;if((be=ge.card_label)!=null&&be.length){const $e=ge.card_label.find(ke=>Bn(ke));if($e)return $e}return null}function ic(ge){var be,$e;const{reply_control:ke}=ge;if((be=ke==null?void 0:ke.easter_egg_label)!=null&&be.image){const Ce=ke.easter_egg_label.image,Te=82,Se=36;return{type:"easter-egg",width:Te,height:Se,render:()=>o(`<img src="${utils$2.getBmgSrcNext(Ce,{w:Te,h:Se})}" width="${Te}" height="${Se}" style="transform: translateY(6px)" >`)}}const Ee=ec(ge);if(Ee!=null&&Ee.background){const Ce=Ee.background_width,Te=Ee.background_height;return{type:"awesome-comment",width:Ce,height:Te,render:()=>o(`<img src="${utils$2.getBmgSrcNext(Ee.background,{w:Ce,h:Te,dpr:2})}" width="${Ce}" height="${Te}">`)}}return($e=ge.member)!=null&&$e.user_sailing_v2?{type:"user-sailing",width:288,height:48,render:()=>x$2`<bili-comment-user-sailing-card
          .data=${{...ge.member.user_sailing_v2,scene_params:{rpid:ge.rpid}}}
        ></bili-comment-user-sailing-card>`}:null}let Nn=!1,Ye=null;typeof window<"u"&&(Nn="IntersectionObserver"in window);const rc=ge=>ge.__i18r_callback__,oc=(ge,be)=>{ge.__i18r_callback__=be},nc=ge=>{delete ge.__i18r_callback__},sc=ge=>{ge.forEach(be=>{const $e=rc(be.target);typeof $e=="function"&&$e(be)})},De={start:"start_time",end:"end_time",duration:"duration"};class ui{constructor(be){this.isIntersecting=!1,this.showFinished=!1,this.showSupport=Nn,this.showDurational=!1,this.showDurationConfig=De,this.showDurationStart=0,this.type=be.type,this.el=be.el,this.handler=be.handler,this.value=be.value,this.modifiers=be.modifiers||{},be.durational&&(this.showDurational=!0,typeof be.durational=="object"&&(this.showDurationConfig=be.durational)),this.init()}observeShow(be,$e){Ye||(Ye=new IntersectionObserver(sc)),oc(be,$e),Ye.observe(be)}unobserveShow(be){this.showFinished=!0,Ye&&(Ye.unobserve(be),nc(be))}observeClick(be,$e){be.addEventListener("click",$e)}unobserveClick(be,$e){be.removeEventListener("click",$e)}report(be){let $e=this.value.event;const ke={...this.value.data},{raw:Ee}=this.modifiers;let Ce=!1;this.type==="both"&&Ee&&console.warn("show and click event use raw will be same"),this.showDurational&&["tech","show"].includes(be)&&(this.showDurationStart?(Object.assign(ke,{[this.showDurationConfig.end||De.end]:Date.now(),[this.showDurationConfig.duration||De.duration]:Date.now()-this.showDurationStart}),this.showDurationConfig.repeat&&(this.showDurationStart=0),this.showDurationConfig.endEvent?$e=this.showDurationConfig.endEvent:($e=$e.replace(/\.(all|0)/,".end"),this.showDurationStart=0),this.showDurationConfig.beforeunload&&(Ce=!0)):(this.showDurationStart=Date.now(),delete ke[this.showDurationConfig.end||De.end],delete ke[this.showDurationConfig.duration||De.duration],Object.assign(ke,{[this.showDurationConfig.start||De.start]:this.showDurationStart}))),this.handler(be,Ee?$e:`${$e}.${be}`,ke,{flush:Ce})}reportShowDuration(be){if(this.showDurational&&!this.showFinished){if(be){if(!this.isIntersecting||this.showDurationStart!==0)return;this.report("show");return}this.showDurationStart!==0&&(this.report("show"),this.showDurationConfig.repeat||(this.showFinished=!0))}}init(){if(!this.el)return;const be=this.el,$e=[];if(this.type==="click"||this.type==="both"){const ke=()=>{this.report(this.modifiers.tech?"tech":"click")};$e.push(()=>{this.unobserveClick(be,ke)}),this.observeClick(be,ke)}if(this.type==="show"||this.type==="both")if(this.showSupport){$e.push(()=>{this.showFinished||(this.showDurational&&this.showDurationStart&&this.report(this.modifiers.tech?"tech":"show"),this.unobserveShow(be))});let ke=()=>{};if(this.showDurationConfig.beforeunload){let Ce=!1;const Te=()=>{this.showFinished||(this.showDurationStart&&this.report(this.modifiers.tech?"tech":"show"),this.unobserveShow(be))};window.addEventListener("beforeunload",Te),window.addEventListener("pagehide",Te),ke=()=>{Ce||(Ce=!0,window.removeEventListener("beforeunload",Te),window.removeEventListener("pagehide",Te))},$e.push(ke)}const Ee=Ce=>{if(this.isIntersecting=Ce.isIntersecting,this.showDurational)if(Ce.isIntersecting){if(this.showDurationStart)return;this.report(this.modifiers.tech?"tech":"show")}else{if(!this.showDurationStart||(this.report(this.modifiers.tech?"tech":"show"),this.showDurationConfig.repeat))return;this.showDurationConfig.beforeunload&&ke(),this.unobserveShow(be)}else Ce.isIntersecting&&(this.report(this.modifiers.tech?"tech":"show"),this.unobserveShow(be))};this.observeShow(be,Ee)}else console.warn("IntersectionObserver not supported");this.removeListener=()=>{$e.forEach(ke=>{ke()})}}update(be){this.value=be}dispose(){var be;(be=this.removeListener)==null||be.call(this),this.el=null}}const Vn=(ge,be,$e)=>{let ke;$e?ke=$e==null?void 0:$e.scrollTop:ke=document.documentElement.scrollTop;const Ee=ge.getBoundingClientRect().top+ke+(be||0);($e||window).scrollTo({top:Ee,left:0,behavior:"smooth"})},ac=ge=>{ge=ge*1e3;const be=Math.floor(new Date().getTime()),$e=(be-ge)/1e3,ke=new Date(be).getFullYear()-new Date(ge).getFullYear(),Ee=Math.floor($e/60),Ce=Math.floor(Ee/60),Te=new Date(ge).getFullYear(),Se=new Date(ge).getMonth()+1,Ke=new Date(ge).getDate();if(Ee<1)return"\u521A\u521A";if(Ee>=1&&Ce<1)return`${Ee}\u5206\u949F\u524D`;if(Ce>=1&&Ce<24)return`${Ce}\u5C0F\u65F6\u524D`;if(Ce>=24&&Ce<48)return"\u6628\u5929";if(Ce>=48&&ke<1)return`${Se}-${Ke}`;if(ke>=1)return`${Te}-${Se}-${Ke}`};var lc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,E=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?cc(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&lc(be,$e,Ee),Ee};let k=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.richTextDisposables=null,this.avatarIconList=["//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local3.png","//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local4.png"],this.upMid=0,this.rootType="list",this.idx=-1,this.user=null,this.oid="",this.root="",this.showCheckText=!1,this.assist=!1,this.type=0,this.showTextExpand=!1,this.expanded=!1,this.trackObserver=null,this.visible=!0,this.avatarSize=30}get ornament(){return ic(this.data)}get top(){return Yl(this.data)}get expandAction(){return jn(this.data)}get showExpand(){return this.showTextExpand||!!this.expandAction&&!this.data.reply_control.is_note_v2}get voteOption(){var ge;return((ge=this.data.reply_control)==null?void 0:ge.vote_option)||null}get vote(){return this.data.content.vote||null}getRichTextContent(){return this.richTextContent}get richTextContent(){const ge=U();return Xr(this.data,this.contentFeatures,ge?Qt.DESKTOP_APP:void 0)}get pictures(){var ge,be;return!((ge=this.data.content.pictures)!=null&&ge.length)||(be=this.data.reply_control)!=null&&be.fold_pictures?null:this.data.content.pictures}get tags(){return tc(this.data)}get uid(){return this.data.member.mid}get spaceLink(){return Pt.SPACE(this.uid)}get userAvatarSrc(){return utils$2.getBmgSrcNext(this.data.member.avatar,{w:this.avatarSize,h:this.avatarSize,s:!0,dpr:2})}get userAvatarIcon(){if(!this.data.member.official_verify)return null;const{type:ge}=this.data.member.official_verify;return[0,1].includes(ge)?this.avatarIconList[ge]:null}connectedCallback(){super.connectedCallback(),this.initData(),setTimeout(()=>{this.trackObserver=new ui({el:this,type:"show",value:{event:"main.comment.floor.0",data:{type:this.type,oid:this.oid,rpid:this.data.rpid_str,rootType:this.rootType,index:this.idx}},modifiers:{raw:!0},handler:(ge,be,$e)=>{ge==="show"&&ce({type:"show",spm_info:be},{msg:JSON.stringify({floorNo:$e.index,type:$e.rootType==="list"?"root":"sub"})})}})})}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose(),this.clearRichTextDisposables()}clearRichTextDisposables(){this.richTextDisposables&&(this.richTextDisposables.dispose(),this.richTextDisposables=null)}initData(){this.clearRichTextDisposables(),this.disposables.setTimeout(()=>{var ge;this.biliRichText.setContents(this.richTextContent),this.showTextExpand=this.biliRichTextContainer.scrollHeight>this.biliRichTextContainer.clientHeight+2,(ge=this.data.$extra)!=null&&ge.spotlight&&window.setTimeout(()=>{Vn(this,-300),setTimeout(()=>{this.startSpotlight()},100)},200)})}async startSpotlight(){const ge="spotlight";this.disposables.addEventListener(this.bodyElement,"transitionend",()=>{this.bodyElement.classList.remove(ge),this.bodyElement.style.removeProperty("background-color"),this.bodyElement.style.removeProperty("transition")}),this.bodyElement.classList.add(ge),await Ei(10),this.bodyElement.style.setProperty("transition","background-color 2s 3s"),await Ei(10),this.bodyElement.style.setProperty("background-color","transparent")}updated(ge){ge.get("data")&&this.initData(),ge.get("visible")&&(this.visible===!1?this.style.setProperty("display","none"):this.style.removeProperty("display"))}isFilterClick(ge){const be=ge.target;return[this.biliRichText,this.actionButtons,this.biliAvatar,this.expandButton].includes(be)}handleClickTrack(ge){this.dispatchEvent(new CustomEvent("track",{detail:{position:ge}}))}handleAction(ge){const{key:be,data:$e}=ge.detail;switch(be){case"top":this.dispatchEvent(new CustomEvent("top",{detail:$e.active})),this.handleClickTrack($e.active?18:19);break;case"block":this.dispatchEvent(new CustomEvent("block")),this.handleClickTrack(13);break;case"report":this.dispatchEvent(new CustomEvent("report")),this.handleClickTrack(14);break;case"delete":this.dispatchEvent(new CustomEvent("delete")),this.handleClickTrack(23);break}}async handleViewDialog(ge){this.dispatchEvent(new CustomEvent("view-dialog",{detail:ge}))}handleReply(){var ge;w.emit("reply",{target:this.data,root:{type:this.rootType,params:{type:this.type,oid:this.oid,root:this.root}},defaultInput:((ge=this.data.reply_control)==null?void 0:ge.preset_reply_text)||"",mount:be=>{be.parentElement!==this.replyContainer&&this.replyContainer.appendChild(be)}})}handleAvatarNameClick(){this.handleClickTrack(3),this.dispatchEvent(new CustomEvent("jump-space",{detail:{uid:this.uid}}))}handleTextClick(ge){var be,$e;const ke=ge.detail;if(ke){if(ke.type==="seek"){const Ee=Number(ke.videoTime),Ce=Number(ke.videoPart);!isNaN(Ee)&&!isNaN(Ce)&&(this.dispatchEvent(new CustomEvent("jump",{detail:ke,composed:!0})),this.handleClickTrack(29))}if(ke.type==="search"&&(this.dispatchEvent(new CustomEvent("jump",{detail:ke,composed:!0})),this.handleClickTrack(32)),ke.type==="goods"){const Ee=ke.goodsUrl;Ee&&($e=(be=window.BiliCm)==null?void 0:be.Base)!=null&&$e.sendThirdClickUrls&&window.BiliCm.Base.sendThirdClickUrls(Ee),this.dispatchEvent(new CustomEvent("jump",{detail:ke,composed:!0})),this.handleClickTrack(15)}ke.type==="link"&&(this.dispatchEvent(new CustomEvent("jump",{detail:ke,composed:!0})),this.handleClickTrack(15)),ke.type==="mention"&&this.dispatchEvent(new CustomEvent("jump",{detail:ke,composed:!0}))}}handleExpand(ge){this.handleClickTrack(this.expanded?25:24),this.expanded=!this.expanded;const be=ge.target,$e={...this.expandAction,ref:be};this.dispatchEvent(new CustomEvent("expand",{detail:$e}))}mainTags(){var ge;return x$2` <div id="tags">${(ge=this.tags)==null?void 0:ge.map(be=>x$2`<div class="tag">${be.text_content}</div>`)}</div> `}ornamentTemplate(){if(!this.ornament)return"";const{render:ge,width:be,height:$e}=this.ornament;return x$2`<div
      id="ornament"
      style="${o$3({width:`${be}px`,height:`${$e}px`})}"
    >
      ${ge()}
    </div>`}topTemplate(){return x$2`<i id="top">置顶</i>`}expandTemplate(){return x$2`<div id="expand" @click=${this.handleExpand}>${this.expanded?"\u6536\u8D77":"\u5C55\u5F00"}</div>`}voteTemplate(){return x$2`<div id="vote">
      <bili-comment-vote-renderer .data=${this.vote}></bili-comment-vote-renderer>
    </div>`}picturesTemplate(){return x$2`<div
      id="pictures"
      @click=${ge=>{ge.stopPropagation(),this.handleClickTrack(37)}}
    >
      <div id="pic">
        <bili-comment-pictures-renderer
          .list=${this.pictures}
          @preview-image=${ge=>this.dispatchEvent(new CustomEvent("preview-image",{detail:ge.detail}))}
        ></bili-comment-pictures-renderer>
      </div>
    </div>`}render(){var be;var ge;return x$2`
      <div
        id="body"
        class="${o$1({spotlight:(be=(ge=this.data.$extra)==null?void 0:ge.spotlight)!=null?be:!1})}"
        @click=${$e=>{$e.stopPropagation(),!this.isFilterClick($e)&&this.handleClickTrack(1)}}
      >
        <a
          href="${this.spaceLink}"
          @click=${this.handleAvatarNameClick}
          id="user-avatar"
          data-user-profile-id="${this.uid}"
          target="_blank"
        >
          <img id="user-avatar-img" width="${this.avatarSize}" height="${this.avatarSize}" src=${this.userAvatarSrc} />
          ${this.userAvatarIcon?x$2`<div
                id="user-avatar-icon"
                style=${o$3({"background-image":`url(${this.userAvatarIcon})`})}
              ></div>`:""}
        </a>
        <div id="main">
          <div id="header">
            <bili-comment-user-info
              id="user-info"
              .data=${this.data}
              .upMid=${this.upMid}
              .medalVisible=${!0}
              style=${o$3({"--bili-comments-font-size-name":"13px"})}
              @jump-space=${()=>this.handleAvatarNameClick()}
              @track=${$e=>this.handleClickTrack($e.detail.position)}
            ></bili-comment-user-info>
            <div id="reply-time">${ac(this.data.ctime)}</div>
          </div>
          <div id="content">
            <div
              id="rich-text-container"
              class="${o$1({collapsed:!this.expanded})}"
            >
              ${this.top?this.topTemplate():""}
              <bili-rich-text
                @text-click=${this.handleTextClick}
                style="${o$3({"--bili-rich-text-font-size":"var(--bili-comments-font-size-content)","--bili-rich-text-line-height":"20px !important","--bili-rich-text-link-color":"var(--Lb6)","--bili-rich-text-display":"inline","vertical-align":"text-bottom"})}"
              ></bili-rich-text>
            </div>
            ${this.showExpand?this.expandTemplate():""} ${this.pictures?this.picturesTemplate():""}
          </div>
          <div id="footer">
            <bili-comment-action-buttons-renderer
              .user=${this.user}
              .upMid=${this.upMid}
              .oid=${this.oid}
              .showCheckText=${this.showCheckText}
              .type=${this.type}
              .rootType=${this.rootType}
              .root=${this.root}
              .assist=${this.assist}
              style="${o$3({"--bili-comment-action-buttons-more-display":"var(--bili-comment-hover-more-display)"})}"
              .data=${this.data}
              @reply=${this.handleReply}
              @action=${this.handleAction}
              @view-dialog=${$e=>this.handleViewDialog($e.detail)}
              @track=${$e=>this.handleClickTrack($e.detail.position)}
            ></bili-comment-action-buttons-renderer>
          </div>
          <div id="reply-container"></div>
          ${this.tags&&this.mainTags()}
        </div>
      </div>
    `}};k.styles=i$6`
    :host {
      --bili-comment-spotlight-color: var(--brand_blue_thin);
      --bili-comment-padding-left: 42px;
      --bili-comment-padding-top: 10px;
      --bili-comment-padding-bottom: 0;
      --bili-comment-padding-left: 42px;
      --bili-comment-margin-top: 0;
      --bili-comment-margin-bottom: 0;
      --bili-comment-border-bottom: 1px solid var(--line_light);
    }
    #body {
      position: relative;
      margin-top: var(--bili-comment-margin-top);
      nargin-bottom: var(--bili-comment-margin-bottom);
      padding-left: var(--bili-comment-padding-left);
      padding-top: var(--bili-comment-padding-top);
      padding-bottom: var(--bili-comment-padding-bottom);
      --bili-comment-hover-more-display: none;
      border-bottom: var(--bili-comment-border-bottom);
    }
    #body.spotlight {
      background-color: var(--bili-comment-spotlight-color);
      transition: background-color 2s 3s;
    }
    #body:hover {
      --bili-comment-hover-more-display: block;
    }
    #user-avatar {
      position: absolute;
      left: 0;
      top: 15px;
      width: 40px;
      height: 40px;
      transform-origin: left top;
      transform: var(--bili-comments-avatar-size);
    }

    #user-avatar img {
      display: inline-block;
      border-radius: 50%;
    }

    #user-avatar-icon {
      position: absolute;
      right: 8px;
      bottom: 8px;
      width: 14px;
      height: 14px;
      box-sizing: border-box;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(255, 255, 255);
      border-radius: 50%;
    }

    #reply-time {
      font-size: 12px;
      height: 15px;
      line-height: 15px;
      color: var(--text3);
    }
    #ornament {
      position: absolute;
      right: 0;
      top: 7px;
      user-select: none;
    }
    bili-comment-vote-option {
      margin-top: 2px;
      margin-bottom: 6px;
    }
    #main {
      width: 100%;
    }
    #header {
      margin-bottom: 8px;
    }
    i {
      font-size: 12px;
      font-style: normal;
    }
    i#top {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 30px;
      height: 18px;
      border: 1px solid var(--brand_pink);
      border-radius: 3px;
      color: var(--brand_pink);
      vertical-align: text-bottom;
    }

    #rich-text-container {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }

    .collapsed {
      -webkit-line-clamp: 5;
    }
    #content {
      font-size: var(--bili-comments-font-size-content);
      line-height: var(--bili-comments-line-height-content);
      color: var(--text1);
    }
    #content #expand {
      color: var(--brand_blue);
      font-size: 12px;
      cursor: pointer;
    }
    #vote {
      margin: 10px 0;
    }
    #pictures {
      display: block;
      width: 100%;
      margin-top: 8px;
    }
    #tags {
      margin-top: 12px;
      display: flex;
      align-items: center;
    }
    .tag {
      color: var(--bili-comment-tag-color-light, var(--text2));
      background-color: var(--bili-comment-tag-bg-light, var(--bg2_float));
      padding: 5px 6px;
      border-radius: 2px;
      box-sizing: border-box;
      font-size: 12px;
      line-height: 1;
    }
    .tag + .tag {
      margin-left: 10px;
    }
  `;E([n$4()],k.prototype,"data",2);E([n$4()],k.prototype,"upMid",2);E([n$4()],k.prototype,"rootType",2);E([n$4()],k.prototype,"idx",2);E([n$4()],k.prototype,"user",2);E([n$4()],k.prototype,"contentFeatures",2);E([n$4()],k.prototype,"oid",2);E([n$4()],k.prototype,"root",2);E([n$4()],k.prototype,"showCheckText",2);E([n$4()],k.prototype,"assist",2);E([n$4()],k.prototype,"type",2);E([t$1()],k.prototype,"showTextExpand",2);E([n$4()],k.prototype,"expanded",2);E([n$4({type:Boolean})],k.prototype,"visible",2);E([t$1()],k.prototype,"ornament",1);E([t$1()],k.prototype,"top",1);E([t$1()],k.prototype,"expandAction",1);E([t$1()],k.prototype,"showExpand",1);E([t$1()],k.prototype,"voteOption",1);E([t$1()],k.prototype,"vote",1);E([t$1()],k.prototype,"pictures",1);E([t$1()],k.prototype,"tags",1);E([t$1()],k.prototype,"uid",1);E([t$1()],k.prototype,"spaceLink",1);E([t$1()],k.prototype,"userAvatarSrc",1);E([t$1()],k.prototype,"userAvatarIcon",1);E([i$3("#user-avatar-img")],k.prototype,"biliAvatar",2);E([i$3("#expand")],k.prototype,"expandButton",2);E([i$3("bili-user-info")],k.prototype,"biliUserInfo",2);E([i$3("bili-rich-text")],k.prototype,"biliRichText",2);E([i$3("bili-comment-action-buttons-renderer")],k.prototype,"actionButtons",2);E([i$3("#reply-container")],k.prototype,"replyContainer",2);E([i$3("#rich-text-container")],k.prototype,"biliRichTextContainer",2);E([i$3("#body")],k.prototype,"bodyElement",2);k=E([e$5("bili-comment-renderer")],k);function Ki(ge,be,$e){if(!$e.namespaces.includes(ge))return be;const ke=[...be];if($e.method==="findIndex"){const Ee=ke.findIndex($e.predicate);return Ee>-1?ke.splice(Ee,1):[]}return ke.filter($e.predicate)}function Yi(ge,be,$e){if(!$e.namespaces.includes(ge))return be;const ke=[...be];return ke[$e.method]($e.value),ke}var dc=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,ht=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?pc(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&dc(be,$e,Ee),Ee};let it=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.upMid=0,this.oid="",this.type=0,this.root="",this.currentPage=1,this.pageSize=10,this.showSpinner=!1,this.showViewMore=!0,this.showPagination=!1,this.count=0,this.totalPage=0,this.cacheList=[],this.list=[],this.newItems=[],this.invisibleID={},this.user=null}get showExpander(){return this.data.rcount!==0||this.newItems.length!==0}connectedCallback(){super.connectedCallback();const ge=$e=>{$e.value.root_str===this.root&&(console.log("handleReplyListAdd+",$e,this.root),this.newItems=Yi(W.REPLY,this.newItems,$e))},be=$e=>{if(!this.isChildItem($e.value))return;const ke=Ki(W.REPLY,[...this.newItems,...this.list],$e);this.updateInvisibleID(ke.map(Ee=>Ee.rpid_str))};w.on("add",ge),w.on("remove",be),this.disposables.add(()=>w.off("remove",be)),this.disposables.add(()=>w.off("add",ge)),this.root=this.data.rpid_str,this.list=this.data.replies||[],this.count=this.data.rcount,this.totalPage=Math.ceil(this.count/this.pageSize)}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}isChildItem(ge){return`${ge.type},${ge.oid_str}`==`${this.type},${this.oid}`}handleClickTrack(ge,be){this.dispatchEvent(new CustomEvent("track",{detail:{position:ge,rpid:be||this.data.rpid_str}}))}get viewMoreText(){var ge,be;const{rcount:$e,replies:ke}=this.data;if(!this.data.rcount||$e===(ke==null?void 0:ke.length))return"";let Ee=`\u5171${this.data.rcount||0}\u6761\u56DE\u590D`;return(ge=this.data.reply_control)!=null&&ge.sub_reply_entry_text&&(Ee=(be=this.data.reply_control)==null?void 0:be.sub_reply_entry_text),Ee}get paginationItems(){const ge=[],be=this.currentPage-1;if(this.totalPage>7){let $e=be,ke=be;be<=2?($e=0,ke=Math.min($e+5,this.totalPage-1)):be>=this.totalPage-3?(ke=this.totalPage-1,$e=Math.max(ke-5,0)):(ke=Math.min(be+3,this.totalPage-1),$e=Math.max(0,be-2)),new Array(ke-$e).fill(1).forEach((Ee,Ce)=>{ge.push({text:String($e+1+Ce),idx:$e+Ce,clickable:!0})}),$e>0&&($e>1&&ge.unshift({text:"...",idx:-1,clickable:!1}),ge.unshift({text:"1",idx:0,clickable:!0})),ke<=this.totalPage-1&&(ke<=this.totalPage-2&&ge.push({text:"...",idx:-1,clickable:!1}),ge.push({text:String(this.totalPage),idx:this.totalPage-1,clickable:!0}))}else new Array(this.totalPage).fill(1).forEach(($e,ke)=>{ge.push({text:String(1+ke),idx:ke,clickable:!0})});return be>0&&ge.unshift({text:"\u4E0A\u4E00\u9875",idx:be-1,clickable:!0}),this.currentPage<this.totalPage&&ge.push({text:"\u4E0B\u4E00\u9875",idx:be+1,clickable:!0}),ge}handleRevert(){this.list=[...this.cacheList],this.showPagination=!1,this.showViewMore=!0}handleViewMore(){if(this.handleClickTrack(51),!this.user){U()?Ft("auth/requestLogin",{from:"comments"}):Mt({event:"selfDef.replyCardCheckClick"});return}this.cacheList=[...this.list],this.dispatchEvent(new CustomEvent("view-detail",{detail:{oid:this.oid,root:this.root}}))}handleDispatchViewDetail(ge){if(this.handleClickTrack(2,ge),!this.user){U()&&Ft("auth/requestLogin",{from:"comments"});return}this.dispatchEvent(new CustomEvent("view-detail",{detail:{oid:this.oid,root:this.root}}))}async handleItemDelete(ge,be){const $e=[...be==="feed"?this.list:this.newItems][ge];let ke="\u5220\u9664\u5931\u8D25";try{if(!await at$1({title:"\u5220\u9664\u8BC4\u8BBA",message:"\u5220\u9664\u8BC4\u8BBA\u540E\uFF0C\u8BC4\u8BBA\u4E0B\u6240\u6709\u56DE\u590D\u90FD\u4F1A\u88AB\u5220\u9664,\u662F\u5426\u7EE7\u7EED?"}))return;const{code:Ee}=await ei({oid:this.oid,type:this.type,rpid:$e.rpid_str});Ee===0&&(this.updateInvisibleID([$e.rpid_str]),ke="\u5220\u9664\u6210\u529F")}catch(Ee){console.log("\u5220\u9664\u5931\u8D25",Ee)}finally{b.show(ke)}}handleItemReport(ge,be){const $e={member:{mid:this.data.member.mid,uname:this.data.member.uname},oid:this.oid,type:this.type,rpid:ge.rpid_str,hiddenJuryTips:be||!1};this.dispatchEvent(new CustomEvent("report",{detail:$e}))}updateInvisibleID(ge){const be={...this.invisibleID};ge.forEach($e=>{be[$e]=!0}),this.invisibleID=be,this.requestUpdate()}viewMoreTemplate(){return this.viewMoreText?x$2`
          <div id="view-more">
            <span @click="${this.handleViewMore}">${this.viewMoreText}</span>
          </div>
        `:""}isVisibleItem(ge){return!this.invisibleID[ge]}renderItem(ge,be,$e){return x$2`<bili-comment-reply-renderer
      .oid=${this.oid}
      .type=${this.type}
      .root=${this.root}
      .data=${ge}
      .user=${this.user}
      .upMid=${this.upMid}
      .visible=${this.isVisibleItem(ge.rpid_str)}
      .contentFeatures=${this.contentFeatures}
      @reply=${()=>this.dispatchEvent(new CustomEvent("reply",{detail:ge}))}
      @view-detail=${()=>this.handleDispatchViewDetail(ge.rpid_str)}
      @delete=${()=>this.handleItemDelete(be,$e)}
      @block=${()=>this.dispatchEvent(new CustomEvent("block",{detail:{mid:ge.member.mid}}))}
      @jump-space=${ke=>this.dispatchEvent(new CustomEvent("jump-space",{detail:ke.detail}))}
      @report="${ke=>{var Ee;return this.handleItemReport(ge,(Ee=ke.detail)==null?void 0:Ee.hiddenJuryTips)}}"
    ></bili-comment-reply-renderer>`}render(){return x$2`
      <div
        id="expander"
        class=${o$1({"no-expand":!this.showExpander})}
      >
        <div id="expander-contents">
          ${c(this.list,ge=>ge.rpid_str,(ge,be)=>this.renderItem(ge,be,"feed"))}
          ${c(this.newItems,ge=>ge.rpid_str,(ge,be)=>this.renderItem(ge,be,"new"))}
          ${this.showSpinner?x$2`<div id="spinner"><bili-comments-spinner></bili-comments-spinner></div>`:""}
          <div id="expander-footer">${this.showViewMore?this.viewMoreTemplate():""}</div>
        </div>
      </div>
    `}};it.styles=i$6`
    :host {
      display: block;
    }
    #expander {
      margin-left: 42px;
      margin-top: 12px;
      padding: 7px 10px;
      border-radius: 6px;
      background-color: var(--bg2_float);
    }
    .no-expand {
      display: none;
    }
    #expander-contents {
      position: relative;
    }
    #spinner {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(var(--bg1_rgb), 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #view-more {
      font-size: 13px;
      color: var(--text3);
    }
    #view-more span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: none;
      outline: none;
      user-select: none;
      appearance: none;
      background: rgba(0, 0, 0, 0);
      text-decoration: none;
      position: relative;
      z-index: 0;
      height: 100%;
      font: inherit;
      color: var(--brand_blue);
      cursor: pointer;
    }
    #pagination {
      display: flex;
      align-items: center;
      font-size: 13px;
      color: var(--text1);
    }
    #expander-footer bili-text-button {
      vertical-align: unset;
    }
    #pagination-head {
      margin-right: 10px;
    }
    #pagination-body {
      display: flex;
      align-items: center;
    }
    #pagination-body bili-text-button,
    #pagination-foot bili-text-button {
      margin-left: 8px;
    }
    #pagination-body bili-text-button:first-child {
      margin-left: 10px;
    }
  `;ht([n$4()],it.prototype,"contentFeatures",2);ht([n$4()],it.prototype,"data",2);ht([n$4()],it.prototype,"upMid",2);ht([n$4()],it.prototype,"oid",2);ht([n$4()],it.prototype,"type",2);ht([n$4()],it.prototype,"root",2);ht([t$1()],it.prototype,"currentPage",2);ht([t$1()],it.prototype,"showSpinner",2);ht([t$1()],it.prototype,"showViewMore",2);ht([t$1()],it.prototype,"showPagination",2);ht([t$1()],it.prototype,"totalPage",2);ht([n$4({type:Array})],it.prototype,"list",2);ht([t$1()],it.prototype,"newItems",2);ht([t$1()],it.prototype,"showExpander",1);ht([n$4()],it.prototype,"user",2);ht([t$1()],it.prototype,"viewMoreText",1);ht([t$1()],it.prototype,"paginationItems",1);it=ht([e$5("bili-comment-replies-renderer")],it);var hc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,Tt=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?uc(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&hc(be,$e,Ee),Ee};let gt=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.richTextDisposables=null,this.visible=!0,this.upMid=0,this.oid="",this.type=0,this.root="",this.user=null,this.avatarSize=24}get colonVisible(){return this.data.parent_str&&this.data.root_str&&this.data.parent_str!==this.data.root_str}get uid(){return this.data.member.mid}get spaceLink(){return Pt.SPACE(this.uid)}get userAvatarSrc(){return utils$2.getBmgSrcNext(this.data.member.avatar,{w:this.avatarSize,h:this.avatarSize,s:!0,dpr:2})}connectedCallback(){super.connectedCallback(),this.initData()}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}clearRichTextDisposables(){this.richTextDisposables&&(this.richTextDisposables.dispose(),this.richTextDisposables=null)}initData(){this.clearRichTextDisposables(),setTimeout(()=>{var ge;const be=U();this.biliRichText.setContents(Xr(this.data,this.contentFeatures,be?Qt.DESKTOP_APP:void 0)),(ge=this.data.$extra)!=null&&ge.spotlight&&window.setTimeout(()=>{Vn(this,-300),setTimeout(()=>{this.startSpotlight()},100)},100)})}async startSpotlight(){const ge="spotlight";this.disposables.addEventListener(this.bodyElement,"transitionend",()=>{this.bodyElement.classList.remove(ge),this.bodyElement.style.removeProperty("background-color"),this.bodyElement.style.removeProperty("transition")}),this.bodyElement.classList.add(ge),await Ei(10),this.bodyElement.style.setProperty("transition","background-color 2s 3s"),await Ei(10),this.bodyElement.style.setProperty("background-color","transparent")}updated(ge){ge.get("data")&&this.initData(),ge.get("visible")&&(this.visible===!1?this.style.setProperty("display","none"):this.style.removeProperty("display"))}handleReply(){this.dispatchEvent(new CustomEvent("reply"))}handleReplyClick(){this.dispatchEvent(new CustomEvent("view-detail"))}handleAction(ge){const{key:be,data:$e}=ge.detail;this.dispatchEvent(new CustomEvent(be,{detail:$e}))}handleTextClick(ge){const be=ge.detail;be&&this.dispatchEvent(new CustomEvent("jump",{detail:be,composed:!0}))}render(){return x$2`
      <div id="body">
        <div id="main" @click=${this.handleReplyClick}>
          <div id="sub-user-info">
            <bili-comment-user-info
              .data=${this.data}
              .upMid=${this.upMid}
              .levelVisible=${!1}
              .showVipColor=${!1}
              style="${o$3({"--bili-comments-font-size-name":"14px","margin-right":this.colonVisible?"":"5px"})}"
              @jump-space=${()=>this.dispatchEvent(new CustomEvent("jump-space",{detail:{uid:this.uid}}))}
            >
            </bili-comment-user-info>
            ${this.colonVisible?"":x$2`<span>:</span>`}
          </div>
          <bili-rich-text
            @text-click=${this.handleTextClick}
            style="${o$3({"--bili-rich-text-line-height":"20px","--bili-rich-text-link-color":"var(--Lb6)","--bili-rich-text-display":"inline","--bili-rich-text-font-size":"14px","word-break":"break-word"})}"
          ></bili-rich-text>
        </div>
      </div>
    `}};gt.styles=i$6`
    :host {
      --bili-comment-spotlight-color: var(--brand_blue_thin);
    }
    #body {
      position: relative;
      padding: 3px 0;
      border-radius: 4px;
      --bili-comment-hover-more-display: none;
    }

    #main {
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: var(--text1);
      font: 14px;
    }

    #sub-user-info {
      display: inline-flex;
    }

    #body.spotlight {
      background-color: var(--bili-comment-spotlight-color);
    }
    #body:hover {
      --bili-comment-hover-more-display: block;
    }
    #footer {
      padding-right: 20px;
    }
    #user-avatar {
      position: absolute;
      left: 0;
      width: 24px;
      height: 24px;
    }
    #user-avatar img {
      border-radius: 50%;
    }
  `;Tt([n$4({type:Boolean})],gt.prototype,"visible",2);Tt([n$4({type:Object})],gt.prototype,"data",2);Tt([n$4()],gt.prototype,"upMid",2);Tt([n$4()],gt.prototype,"oid",2);Tt([n$4()],gt.prototype,"type",2);Tt([n$4()],gt.prototype,"root",2);Tt([n$4()],gt.prototype,"user",2);Tt([n$4()],gt.prototype,"contentFeatures",2);Tt([t$1()],gt.prototype,"colonVisible",1);Tt([t$1()],gt.prototype,"uid",1);Tt([t$1()],gt.prototype,"spaceLink",1);Tt([t$1()],gt.prototype,"userAvatarSrc",1);Tt([i$3("bili-rich-text")],gt.prototype,"biliRichText",2);Tt([i$3("#body")],gt.prototype,"bodyElement",2);gt=Tt([e$5("bili-comment-reply-renderer")],gt);const mc=ge=>ot.request({url:"/x/v2/reply/wbi/main",params:{...ge,web_location:1315875},chainProxy:be=>be.with("UNIOS_WBI_ENCODE",{active:!0,encWbiKeys:{wbiImgKey:"839c8b697b0d44dc80e9a604592bb432",wbiSubKey:"02cd020b04d64aacad6b3a08d06f8eb0"}})}),io=()=>useAuthData(),ro=ge=>ot.request({url:"/x/v2/reply/subject/interaction-status",params:{...ge}});function fc(ge,be){return window.BiliCm?window.BiliCm.Base.getSyncUrl(ge,be):ge.url}function oo(){const ge=Date.now()+864e5;sa({expires:ge})}function gc(){return aa().expires}function bc(){return gc()<Date.now()}function vc(ge){if(typeof window<"u"&&!bc()||!(ge!=null&&ge.ads))return null;for(const be in ge.ads){const $e=ge.ads[be];if(Array.isArray($e)){const ke=$e[0];return ke?{isEmpty:!(!!ke.name&&!!ke.creative_id&&!!ke.is_ad),locId:Number(be),title:ke.name,data:ke}:null}}return null}function Ve(ge){return ge.disabled?{source:"disabled",message:ge.message||"\u8BC4\u8BBA\u529F\u80FD\u5DF2\u5173\u95ED"}:ge.user?ge.closed?{source:"closed",message:ge.message}:null:{source:"unlogin"}}function Zi(ge){if(!(ge!=null&&ge.options)||!(ge!=null&&ge.my_vote_option))return null;const be=ge.options[ge.my_vote_option-1];if(!be)return null;let $e=be.desc;$e.indexOf("\u5DF2\u6295")===-1&&($e=`\u5DF2\u6295\u201C${$e}\u201D`);let ke=3;return ge.options.length===2&&(ke=be.idx),{...be,label_kind:ke,desc:$e}}function yc(ge,be){let $e="",ke="\u67E5\u770B\u5B8C\u6574\u8BC4\u8BBA";return ge==="unlogin"&&($e="\u767B\u5F55\u540E"),be>=1e4?ke=`\u67E5\u770B ${Math.floor(be/1e3)/10}\u4E07+ \u6761\u8BC4\u8BBA`:be>=1e3?ke=`\u67E5\u770B ${Math.floor(be/1e3)*1e3}+ \u6761\u8BC4\u8BBA`:be>=3&&(ke=`\u67E5\u770B ${be} \u6761\u8BC4\u8BBA`),`${$e}${ke}`}function no(ge){if(!ge.user){if(ge.count<=2)return null;const be="unlogin";return{type:be,count:2,text:yc(be,ge.count)}}return null}function so(ge){return ge===12061||ge===12002}function ao(ge){var be;return((be=ge.control)==null?void 0:be.web_selection)===!0}function lo(ge,be,$e){var ke=$e||{},Ee=ke.noTrailing,Ce=Ee===void 0?!1:Ee,Te=ke.noLeading,Se=Te===void 0?!1:Te,Ke=ke.debounceMode,Je=Ke===void 0?void 0:Ke,mt,bt=!1,$t=0;function St(){mt&&clearTimeout(mt)}function It(Dt){var jt=Dt||{},zt=jt.upcomingOnly,en=zt===void 0?!1:zt;St(),bt=!en}function Bt(){for(var Dt=arguments.length,jt=new Array(Dt),zt=0;zt<Dt;zt++)jt[zt]=arguments[zt];var en=this,qt=Date.now()-$t;if(bt)return;function vo(){$t=Date.now(),be.apply(en,jt)}function yo(){mt=void 0}!Se&&Je&&!mt&&vo(),St(),Je===void 0&&qt>ge?Se?($t=Date.now(),Ce||(mt=setTimeout(Je?yo:vo,ge))):vo():Ce!==!0&&(mt=setTimeout(Je?yo:vo,Je===void 0?ge-qt:ge))}return Bt.cancel=It,Bt}const zo="0,0",Fo="0,0,0",Uo="0,0,0,0",wc="//s1.hdslb.com/bfs/seed/jinkela/short/webui/comments",xc="medalnum",_c="pc-comments-cljzkg6fxb9",co=`
  @font-face {
    font-family: "fans-num";
    src: url("//activity.hdslb.com/blackboard/static/20240516/6fdde5f06d0b876f68573682fa59da66/v6u7v27Ucs.ttf");
  }
  @font-face {
    font-family: "${xc}";
    src: url("${wc}/font/medal-num.ttf");
  }
  @font-face {
    font-family: "${_c}";
    src: url('https://s1.hdslb.com/bfs/svg-next/font/2024-08-12/pc-comments-cljzkg6fxb9.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  :root {
    --bili-comments-font-size-title: 20px;
    --bili-comments-font-size-count: 13px;
    --bili-comments-font-size-sort: 13px;
    --bili-comments-font-size-name: 13px;
    --bili-comments-font-size-content: 15px;
    --bili-comments-line-height-content: 24px;
    --bili-comments-avatar-size: scale(0.83333333);
  }
  @media screen and (min-width: 1681px) {
    :root {
      --bili-comments-font-size-title: 24px;
      --bili-comments-font-size-count: 14px;
      --bili-comments-font-size-sort: 16px;
      --bili-comments-font-size-name: 14px;
      --bili-comments-font-size-content: 16px;
      --bili-comments-line-height-content: 26px;
      --bili-comments-avatar-size: scale(1);
    }
  }
`,po=ge=>{let be=ge.src;be.indexOf("//")===-1&&(be=`//${be}`);const $e=ge.root.getBoundingClientRect(),ke=document.createElement("bili-alpha-video");ke.setAttribute("src",be),ke.setAttribute("width","600"),ke.setAttribute("height","500"),ke.setAttribute("autoplay",""),ke.style.setProperty("position","fixed"),ke.style.setProperty("top","50%"),ke.style.setProperty("left","50%"),ke.style.setProperty("transform","translate(-50%, -50%)"),ke.style.setProperty("position","fixed"),ke.style.setProperty("z-index","9999"),ke.style.setProperty("top","50%"),ke.style.setProperty("left",`${$e.left+$e.width/2}px`),ke.style.setProperty("transform","translate(-50%, -50%)");const Ee=()=>{var Te;(Te=ge==null?void 0:ge.onClick)==null||Te.call(ge)};ke.addEventListener("click",Ee);const Ce=()=>{var Te;(Te=ge==null?void 0:ge.onEnded)==null||Te.call(ge),setTimeout(()=>{ke.removeEventListener("click",Ee),ke.removeEventListener("ended",Ce),ke.parentElement&&ke.parentElement.removeChild(ke)},20)};ke.addEventListener("ended",Ce),document.documentElement.appendChild(ke)};function ho(){{const ge=document.querySelector("bili-user-profile");ge&&ge.parentElement&&ge.parentElement.removeChild(ge);return}}var kc=Object.defineProperty,Cc=Object.getOwnPropertyDescriptor,P=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Cc(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&kc(be,$e,Ee),Ee};let $=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.scrollContainer=null,this.user=null,this.params=zo,this.oid="",this.type=0,this.rootType="list",this.mode=3,this.assist=!1,this.paginationStr=JSON.stringify({offset:""}),this.seekRpid="",this.maxViewLimit=0,this.showViewMore=!1,this.eventBubbles=!1,this.showSpinner=!0,this.showContinuations=!1,this.showContinueTrigger=!!window.IntersectionObserver,this.contentFeatures={videoTime:!0},this.showEnd=!1,this.upMid=0,this.globalOptions=[],this.notice=null,this.vote=null,this.count=0,this.spmInfo={spmid:"",from_spmid:"",from_outer_spmid:""},this.unLoginCount=3,this.rootInputPlaceholder="\u52A0\u8F7D\u4E2D\u2026",this.inputDisabled=!1,this.rootInputUploadPicState=1,this.initUserDP=null,this.invisibleID={},this.loadedID={},this.isClosed=!1,this.isSelected=!1,this.limitMaskState=null,this.cmTopProtection=null,this.list=[],this.newItems=[],this.replyTarget=null,this.replyInputValue="",this.replyKeepActive=!1,this.commentBoxDisabledState=null,this.cmFromTrackId="",this.replyCommentBox=null,this.trackObserver=null}get replyInputPlaceholder(){var ge,be;return`\u56DE\u590D @${(be=(ge=this.replyTarget)==null?void 0:ge.member)==null?void 0:be.uname} : `}get voteOption(){return Zi(this.vote)}isVisibleItem(ge){return!this.invisibleID[ge]}isChildItem(ge){return`${ge.type},${ge.oid_str||ge.oid}`==`${this.type},${this.oid}`}initReplyCommentBox(){if(this.replyCommentBox)return;const ge=this.shadowRoot.querySelector("#reply-commentbox bili-comment-box");ge&&(this.replyCommentBox=ge)}connectedCallback(){super.connectedCallback(),this.initData();const ge=Ke=>{if(!this.isChildItem(Ke.value))return;const Je=Ki(W.MAIN,[...this.newItems,...this.list],Ke);this.updateInvisibleID(Je.map(mt=>mt.rpid_str))},be=Ke=>{Ke.root&&Ke.root.type!=="list"||Ke.root&&(Ke.root.params.type!==this.type||Ke.root.params.oid!==this.oid)||this.isChildItem(Ke.value)&&(this.newItems=Yi(W.MAIN,this.newItems,Ke))},$e=()=>{this.replyCommentBox&&(this.replyKeepActive=!1,this.replyTarget=null,this.replyCommentBoxContainer.appendChild(this.replyCommentBox),this.replyCommentBox.style.setProperty("--bili-comment-box-display","none"))},ke=({target:Ke,root:Je,defaultInput:mt,mount:bt})=>{if(Ke&&!(Je&&Je.type!=="list")&&!(Je&&(Je.params.type!==this.type||Je.params.oid!==this.oid))&&(this.initReplyCommentBox(),!!this.replyCommentBox)){if(this.commentBoxDisabledState){if(this.commentBoxDisabledState.source==="unlogin"){U()?Ft("auth/requestLogin",{from:"comments"}):Mt({event:"selfDef.replyCardReplyClick"});return}b.show(this.commentBoxDisabledState.message||"\u8BC4\u8BBA\u529F\u80FD\u5DF2\u5173\u95ED");return}if(this.replyTarget&&Ke===this.replyTarget){$e();return}this.replyCommentBox.style.removeProperty("--bili-comment-box-display"),mt&&(this.replyInputValue=mt),this.replyTarget=Ke,bt(this.replyCommentBox)}},Ee=({src:Ke,jumpUrl:Je})=>{let mt=!1;po({src:Ke,root:this,onClick:()=>{Je&&(mt=!0,window.open(Je))},onEnded:()=>{Je&&(mt||window.open(Je))}})},Ce=this.handleJumpSpace.bind(this),Te=this.handleJump.bind(this),Se=this.handlePreviewImage.bind(this);w.on("remove",ge),w.on("add",be),w.on("reply",ke),w.on("hideReply",$e),w.on("displayAlphaVideo",Ee),w.on("jumpSpace",Ce),w.on("jump",Te),w.on("previewImage",Se),this.disposables.add(()=>w.off("remove",ge)),this.disposables.add(()=>w.off("add",be)),this.disposables.add(()=>w.off("reply",ke)),this.disposables.add(()=>w.off("displayAlphaVideo",Ee)),this.disposables.add(()=>w.off("jumpSpace",Ce)),this.disposables.add(()=>w.off("jump",Te)),this.disposables.add(()=>w.off("previewImage",Se)),this.disposables.add(ho),setTimeout(()=>{this.addLoadEvent()}),this.initDependencies(),this.disposables.setTimeout(()=>{this.trackObserver=new ui({el:this,type:"show",value:{event:"main.comment.reply-page.all",data:{ordering:this.mode===3?"heat":"time",type:this.type,oid:this.oid,spmid:this.spmInfo.spmid,from_spmid:this.spmInfo.from_spmid,from_outer_spmid:this.spmInfo.from_outer_spmid,page:this.rootType}},modifiers:{raw:!0},durational:{repeat:!0},handler:(Ke,Je,mt)=>{Ke==="show"&&ce({type:"show",spm_info:Je},{msg:JSON.stringify(mt)})}}),this.disposables.add(()=>{setTimeout(()=>{this.trackObserver&&(this.trackObserver.dispose(),this.trackObserver=null)})})}),this.disposables.setTimeout(()=>{if(U()){const Ke=Hi("window/visibleChange",({data:Je})=>{var mt;(mt=this.trackObserver)==null||mt.reportShowDuration(Je)});this.disposables.add(()=>{Ke()})}})}disconnectedCallback(){this.disposables.dispose(),this.replyCommentBox=null,this.maxViewLimit=0,this.eventBubbles=!1,this.unload()}updated(ge){ge.get("params")&&(this.unload(),this.initData())}initDependencies(){jr()}appendGlobalStyle(){const ge="bili-comments-global-style";if(document.querySelector("#"+ge))return;const be=document.createElement("style");be.id=ge,be.innerHTML=co,document.body.appendChild(be)}async initData(){if(!this.shadowRoot||!this.params||typeof this.params!="string"||this.params===zo)return;const[ge,be]=this.params.split(",");if(!be||be==="0"||!ge||ge==="0"||isNaN(Number(ge)))return;const $e=this.getAttribute("mode")||"3",ke=this.getAttribute("seek-id")||"";let Ee=0;const Ce=this.getAttribute("max-view-limit");typeof Ce=="string"&&(Ee=Number(Ce),isNaN(Ee)&&(Ee=0));const Te=this.getAttribute("disable-video-time");typeof Te=="string"&&Te!=="false"&&(this.contentFeatures.videoTime=!1);const Se=this.getAttribute("event-bubbles");let Ke;if(this.parentElement&&!this.scrollContainer&&this.parentElement!==document.body){const mt=getComputedStyle(this.parentElement);["auto","scroll"].includes(mt.overflowY)&&(Ke=this.parentElement)}const Je=this.getAttribute("cm-from-track-id")||"";this.load({oid:be,type:Number(ge),seekRpid:ke,mode:Number($e),maxViewLimit:Ee,cmFromTrackId:Je,eventBubbles:Se!==null,scrollContainer:Ke})}updateList(ge){this.list=ge}clearList(){this.newItems=[],this.list=[],this.invisibleID={},this.loadedID={},this.showEnd=!1,this.showContinuations=!1,this.paginationStr=JSON.stringify({offset:""})}unload(){this.user=null,this.notice=null,this.vote=null,this.assist=!1,this.cmTopProtection=null,this.mode=3,this.showViewMore=!1,this.clearList()}async reload(ge){return this.unload(),await this.load(ge)}async load(ge){try{if(ge){const{oid:be,type:$e,mode:ke,seekRpid:Ee,disableVideoTime:Ce,maxViewLimit:Te,scrollContainer:Se,spmInfo:Ke,cmFromTrackId:Je}=ge;if(this.oid=String(be),this.type=$e,typeof Ce=="string"&&Ce!=="false"&&(this.contentFeatures.videoTime=!1),ke&&[2,3].includes(ke)&&(this.mode=ke),Ee&&(this.seekRpid=Ee),Je?this.cmFromTrackId=Je:this.cmFromTrackId="",Te&&Te>0&&(this.maxViewLimit=Te),Se)if(typeof Se=="string"){const mt=document.querySelector(Se);mt?this.scrollContainer=mt:console.warn("scrollContainer not found")}else this.scrollContainer=Se;Ke&&(this.spmInfo=Ke),this.eventBubbles=ge.eventBubbles||!1}this.showSpinner=!0,this.initUser(),await Promise.all([this.initUpGlobalActions(),this.getList(),Yr()]),await this.requestUpdate(),this.showSpinner=!1,this.handleTriggerEvent("inited"),!this.showEnd&&this.list.length<10&&this.getList()}catch(be){return console.warn("bili comments load error",be),Promise.reject(be)}}async initUser(){try{this.initUserDP=Gi();const{code:ge,data:be}=await io();if(this.initUserDP.resolve(),this.initUserDP=null,ge===0&&be)return this.user=be,be}catch(ge){this.initUserDP&&(this.initUserDP.resolve(),this.initUserDP=null),console.warn("\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25",ge)}return null}async initUpGlobalActions(){try{const{code:ge,data:be}=await ro({oid:this.oid,type:this.type});if(ge!==0||!be)return;this.globalOptions=Br(be,U())}catch(ge){console.log("bili comments up interaction status error",ge)}}async addLoadEvent(){if(this.showContinueTrigger&&this.continueTrigger){const ge=new IntersectionObserver(async be=>{if(be[0].isIntersecting&&!this.showEnd){if(this.showSpinner||this.showContinuations)return;this.getList()}});ge.observe(this.continueTrigger),this.disposables.add(()=>{ge.unobserve(this.continueTrigger),ge.disconnect()})}else this.disposables.addEventListener(this.scrollContainer||window,"scroll",lo(100,()=>{if(!this.showSpinner&&!this.showContinuations)if(this.scrollContainer){const{scrollTop:ge,scrollHeight:be,clientHeight:$e}=this.scrollContainer;Math.ceil(ge)+$e*2>=be&&this.getList()}else{const{scrollTop:ge,scrollHeight:be}=document.documentElement,$e=window.innerHeight;Math.ceil(ge)+$e*2>=be&&this.getList()}}))}updateInvisibleID(ge){const be={...this.invisibleID};ge.forEach($e=>{be[$e]=!0}),this.invisibleID=be,this.requestUpdate()}async handleItemDelete(ge,be){var $e;const ke=[...be==="feed"?this.list:this.newItems][ge];if((($e=this.cmTopProtection)==null?void 0:$e.rpid)===(ke==null?void 0:ke.rpid_str)){ri({title:"\u5220\u9664\u8BC4\u8BBA",message:this.cmTopProtection.message,cancel:{text:"\u6211\u8981\u7533\u8BC9",click:Ce=>{Ce(),Ii({type:this.type,oid:this.oid,rpid:ke.rpid_str})}},confirm:{text:"\u6211\u77E5\u9053\u4E86",click:Ce=>{Ce()}}});return}let Ee="\u5220\u9664\u5931\u8D25";try{if(!await at$1({title:"\u5220\u9664\u8BC4\u8BBA",message:"\u5220\u9664\u8BC4\u8BBA\u540E\uFF0C\u8BC4\u8BBA\u4E0B\u6240\u6709\u56DE\u590D\u90FD\u4F1A\u88AB\u5220\u9664,\u662F\u5426\u7EE7\u7EED?"}))return;const{code:Ce}=await ei({oid:this.oid,type:this.type,rpid:ke.rpid_str});Ce===0&&(this.updateInvisibleID([ke.rpid_str]),Ee="\u5220\u9664\u6210\u529F")}catch(Ce){console.log("\u5220\u9664\u5931\u8D25",Ce)}finally{b.show(Ee)}}async handleItemTop(ge,be,$e){const ke=[...be==="feed"?this.list:this.newItems][ge];let Ee=`${$e?"":"\u53D6\u6D88"}\u7F6E\u9876`;try{const{code:Ce}=await Ti({oid:this.oid,type:this.type,rpid:ke.rpid_str,action:$e?1:0});Ce===0?Ee+="\u6210\u529F":Ee+="\u5931\u8D25"}catch{Ee+="\u5931\u8D25"}finally{b.show(Ee)}}async handleItemReport(ge){const{app_id:be,platform:$e}=Be("app/getAppInfo");Vr({...ge,ordering:this.mode===3?"heat":"time",appId:be,platform:$e})}async handleItemBlock(ge){try{if(!await at$1({title:"\u62C9\u9ED1\u7528\u6237",message:"\u52A0\u5165\u9ED1\u540D\u5355\u540E\uFF0C\u5C06\u81EA\u52A8\u89E3\u9664\u5173\u6CE8\u5173\u7CFB\u548C\u5BF9\u8BE5\u7528\u6237\u7684\u5408\u96C6\u8BA2\u9605\u5173\u7CFB\uFF0C\u7981\u6B62\u8BE5\u7528\u6237\u4E0E\u6211\u4E92\u52A8\u6216\u67E5\u770B\u6211\u7684\u7A7A\u95F4"}))return;const{code:be,message:$e}=await Mr({fid:ge.mid,act:5,re_src:15});if(be!==0){b.show($e||"\u62C9\u9ED1\u5931\u8D25");return}w.emit("remove",{namespaces:[W.MAIN,W.REPLY],method:"filter",predicate:ke=>{var Ee;return((Ee=ke.member)==null?void 0:Ee.mid)===ge.mid},value:{type:this.type,oid:this.oid,oid_str:this.oid}}),b.show("\u62C9\u9ED1\u6210\u529F")}catch{b.show("\u62C9\u9ED1\u5931\u8D25")}}handlePreviewImage(ge){this.dispatchEvent(new CustomEvent("preview-image",{detail:ge}))}handleJumpSpace(ge){this.dispatchEvent(new CustomEvent("jump-space",{detail:ge}))}handleJump(ge){this.dispatchEvent(new CustomEvent("jump",{detail:ge}))}handleViewDetail(ge){this.dispatchEvent(new CustomEvent("view-detail",{detail:ge}))}updatePaginationStr(ge){this.paginationStr=JSON.stringify({offset:ge})}updateReplyItemExtra(ge,be,$e){ge.$extra||(ge.$extra={}),ge.$extra[be]=$e}async getList(){var ge,be;try{if(this.showEnd)return;this.list.length&&(this.showContinuations=!0);const $e=await mc({oid:this.oid,type:this.type,mode:this.mode,pagination_str:this.paginationStr,plat:1,seek_rpid:this.list.length===0?this.seekRpid:void 0,cm_from_track_id:this.cmFromTrackId||void 0});if(this.showSpinner&&this.initUserDP&&await this.initUserDP.promise,$e.code!==0||!$e.data){this.isClosed=so($e.code),this.commentBoxDisabledState=Ve({user:this.user,closed:this.isClosed,message:$e.message||"\u5565\u90FD\u6728\u6709~",disabled:!0}),this.showContinuations=!1,this.showSpinner&&(this.showEnd=!0);return}const{cursor:ke,cm_info:Ee,control:Ce,top_replies:Te,upper:Se,assist:Ke}=$e.data;let Je=$e.data.replies||[];const mt=[];this.list.length||Te!=null&&Te.length&&Te.reverse().forEach($t=>{Je.unshift($t)}),this.showSpinner&&(this.upMid=Se.mid,this.assist=Ke===1,this.notice=vc(Ee),this.vote=$e.data.vote_card||null,this.count=(ke==null?void 0:ke.all_count)||0,Ce&&(this.rootInputPlaceholder=Ce.root_input_text||"",this.rootInputUploadPicState=Ce.upload_picture_icon_state,this.commentBoxDisabledState=Ve({user:this.user,closed:this.isClosed,message:Ce.root_input_text||"",disabled:Ce.input_disable}),Ce.cm_top_reply_protection&&(this.cmTopProtection={rpid:String(Ce.cm_top_reply_protection.protected_top_rpid),message:Ce.cm_top_reply_protection.popup_message})),this.isSelected=ao($e.data),this.limitMaskState=no({user:this.user,count:this.count}),this.limitMaskState&&(this.showEnd=!0,Je=Je.slice(0,this.unLoginCount))),(ge=ke==null?void 0:ke.pagination_reply)!=null&&ge.next_offset&&this.updatePaginationStr((be=ke==null?void 0:ke.pagination_reply)==null?void 0:be.next_offset);let bt=!this.seekRpid;if(Je.forEach($t=>{var St;this.loadedID[$t.rpid_str]||$t.invisible!==!0&&(this.loadedID[$t.rpid_str]=!0,bt===!1&&($t.rpid_str===this.seekRpid?(this.updateReplyItemExtra($t,"spotlight",!0),bt=!0):(St=$t.replies)!=null&&St.length&&$t.replies.forEach(It=>{bt||It.rpid_str===this.seekRpid&&(this.updateReplyItemExtra(It,"spotlight",!0),bt=!0)})),mt.push($t))}),this.showContinuations=!1,this.showSpinner&&this.maxViewLimit>0){mt.length&&(mt.length>this.maxViewLimit&&(this.showViewMore=!0),this.updateList(this.list.concat(mt.slice(0,this.maxViewLimit)))),this.showEnd=!0;return}ke!=null&&ke.is_end&&(this.showEnd=!0),mt.length?this.updateList(this.list.concat(mt)):this.showEnd=!0,this.disposables.setTimeout(()=>{if(this.commentFeed&&this.limitMaskWall){const $t=this.commentFeed.lastElementChild;if($t){const St=$t.clientHeight;St<236&&(this.limitMaskWall.style.height=`${St}px`)}}},500)}catch($e){console.log("getList error",$e),this.showContinuations=!1}}async handleGlobalAction(ge){var be,$e;if(!((be=ge.detail)!=null&&be.key)||!(($e=ge.detail)!=null&&$e.data))return;const ke=ge.detail.key,Ee=ge.detail.data.active,Ce=ge.detail.text;if(ke==="select"){try{if(!await at$1({title:Ce,message:Ee?"\u5F00\u542F\u7CBE\u9009\u8BC4\u8BBA\u540E\uFF0C\u6240\u6709\u8BC4\u8BBA\u90FD\u9700\u7ECF\u8FC7\u6211\u7684\u786E\u8BA4\u540E\u518D\u5411\u6240\u6709\u7528\u6237\u5C55\u793A\u3002\u53EF\u524D\u5F80PC\u7AEF\u521B\u4F5C\u4E2D\u5FC3":"\u505C\u6B62\u7CBE\u9009\u8BC4\u8BBA\u540E\uFF0C\u5982\u6709\u9057\u7559\u672A\u5904\u7406\u8BC4\u8BBA\uFF0C\u53EF\u524D\u5F80PC\u7AEF\u521B\u4F5C\u4E2D\u5FC3"}))return;const{code:Te,message:Se,data:Ke}=await je({oid:this.oid,type:this.type,action:Ee?Rt.SELECT:Rt.UNSELECT});if(Te!==0){b.show((Ke==null?void 0:Ke.action_toast)||Se||"\u64CD\u4F5C\u5931\u8D25");return}b.show((Ke==null?void 0:Ke.action_toast)||Se||Ce+"\u6210\u529F"),setTimeout(()=>{this.reload()},2e3)}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}if(ke==="close"){try{if(!await at$1({title:Ce,message:Ee?"\u6062\u590D\u8BC4\u8BBA\u540E\uFF0C\u7528\u6237\u53EF\u6B63\u5E38\u53D1\u8868\u8BC4\u8BBA\u3001\u53C2\u4E0E\u8BC4\u8BBA\u4E92\u52A8\uFF0C\u5DF2\u6709\u7684\u8BC4\u8BBA\u4E5F\u6062\u590D\u6B63\u5E38\u5C55\u793A":"\u5173\u95ED\u8BC4\u8BBA\u5C06\u4F1A\u7981\u6B62\u4EFB\u4F55\u4EBA\u5728\u6B64\u8BC4\u8BBA\u533A\u53D1\u8868\u5185\u5BB9\uFF0C\u4E14\u5DF2\u6709\u8BC4\u8BBA\u5728\u5173\u95ED\u671F\u95F4\u5C06\u4E0D\u53EF\u89C1"}))return;const{code:Te,message:Se,data:Ke}=await je({oid:this.oid,type:this.type,action:Ee?Rt.OPEN:Rt.CLOSE});if(Te!==0){b.show((Ke==null?void 0:Ke.action_toast)||Se||"\u64CD\u4F5C\u5931\u8D25");return}b.show((Ke==null?void 0:Ke.action_toast)||Se||Ce+"\u6210\u529F"),setTimeout(()=>{this.reload()},2e3)}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}if(ke==="close-danmaku"){try{if(!await at$1({title:Ce,message:Ee?"\u6062\u590D\u5F39\u5E55\u540E\uFF0C\u7528\u6237\u53EF\u6B63\u5E38\u53D1\u8868\u5F39\u5E55\u3001\u53C2\u4E0E\u5F39\u5E55\u4E92\u52A8\uFF0C\u5DF2\u6709\u7684\u5F39\u5E55\u4E5F\u6062\u590D\u6B63\u5E38\u5C55\u793A":"\u5173\u95ED\u8BC4\u8BBA\u5C06\u4F1A\u7981\u6B62\u4EFB\u4F55\u4EBA\u5728\u6B64\u8BC4\u8BBA\u533A\u53D1\u8868\u5185\u5BB9\uFF0C\u4E14\u5DF2\u6709\u8BC4\u8BBA\u5728\u5173\u95ED\u671F\u95F4\u5C06\u4E0D\u53EF\u89C1"}))return;const{code:Te,message:Se,data:Ke}=await Rr({aid:this.oid,state:Ee?0:1});if(Te!==0){b.show((Ke==null?void 0:Ke.action_toast)||Se||"\u64CD\u4F5C\u5931\u8D25");return}let Je=(Ke==null?void 0:Ke.action_toast)||Se;Je==="0"&&(Je="\u64CD\u4F5C\u6210\u529F"),b.show(Je||Ce+"\u6210\u529F")}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}}async handleModeChange(ge){this.mode=ge.detail,this.clearList(),this.showContinuations=!0,await this.getList()}handleNoticeClose(){oo(),this.notice=null}handleTriggerEvent(ge,be){if(this.eventBubbles){this.dispatchEvent(new CustomEvent(`bili-comments-${ge}`,{detail:be,bubbles:!0}));return}this.dispatchEvent(new CustomEvent(ge,{detail:be}))}handleLimitClick(){var ge;((ge=this.limitMaskState)==null?void 0:ge.type)==="unlogin"&&(U()?Ft("auth/requestLogin",{from:"comments"}):Mt({event:"selfDef.replyCardShowMore"}))}handleViewMoreClick(){this.dispatchEvent(new CustomEvent("view-more"))}headerTemplate(){return x$2`
      <div id="header">
        <bili-comments-header-renderer
          .oid=${this.oid}
          .type=${this.type}
          .mode=${this.mode}
          .user=${this.user}
          .upMid=${this.upMid}
          .isClosed=${this.isClosed}
          .isSelected=${this.isSelected}
          .options=${this.globalOptions}
          .notice=${this.notice}
          .vote=${this.vote}
          .count=${this.count}
          .limitMaskState=${this.limitMaskState}
          .inputPlaceholder=${this.rootInputPlaceholder}
          .commentBoxDisabledState=${this.commentBoxDisabledState}
          .commentBoxTeleportDisabled=${this.maxViewLimit>0}
          .uploadPicState=${this.rootInputUploadPicState}
          .scrollContainer=${this.scrollContainer}
          @mode-change=${this.handleModeChange}
          @notice-close=${this.handleNoticeClose}
          @action=${this.handleGlobalAction}
          @jump=${ge=>this.handleJump(ge.detail)}
        ></bili-comments-header-renderer>
      </div>
    `}spinnerTemplate(){return x$2`<div id="spinner-container">
      <bili-comments-spinner></bili-comments-spinner>
    </div> `}renderItem(ge,be,$e){return x$2`<bili-comment-thread-renderer
      .user=${this.user}
      .upMid=${this.upMid}
      .data=${ge}
      .visible=${this.isVisibleItem(ge.rpid_str)}
      .oid=${this.oid}
      .type=${this.type}
      .rootType=${this.rootType}
      .mode=${this.mode}
      .cmFromTrackId=${this.cmFromTrackId}
      .idx=${be}
      .spmInfo=${this.spmInfo}
      .assist=${this.assist}
      .contentFeatures=${this.contentFeatures}
      @delete=${()=>this.handleItemDelete(be,$e)}
      @top=${ke=>this.handleItemTop(be,$e,ke.detail)}
      @report=${ke=>this.handleItemReport(ke.detail)}
      @block=${ke=>this.handleItemBlock(ke.detail)}
      @expand=${ke=>this.handleTriggerEvent("expand",ke.detail)}
      @jump=${ke=>{ke.stopPropagation(),this.handleJump(ke.detail)}}
      @view-detail=${ke=>this.handleViewDetail(ke.detail)}
      @preview-image=${ke=>this.handlePreviewImage(ke.detail)}
      @jump-space=${ke=>this.handleJumpSpace(ke.detail)}
    ></bili-comment-thread-renderer>`}limitMaskTemplate(){return x$2`<div id="limit-mask" @click=${this.handleLimitClick}>
      <div id="limit-mask-wall"></div>
      <div id="limit-mask-tip">登录后查看更多评论 ${x$2`<bili-icon icon="BDC/arrow_forward_right_line/3" size="12" />`}</div>
    </div>`}contentTemplate(){return x$2`
      <div id="contents">
        <div id="new">
          ${c(this.newItems,ge=>ge.rpid_str,(ge,be)=>this.renderItem(ge,be,"new"))}
        </div>
        <div id="feed">
          ${c(this.list,ge=>ge.rpid_str,(ge,be)=>this.renderItem(ge,be,"feed"))}
        </div>
        ${this.limitMaskState?this.limitMaskTemplate():""}
        <div id="reply-commentbox">
          <bili-comment-box
            style="padding: 10px 0 ;--bili-comment-box-display: none;"
            .oid=${this.oid}
            .type=${this.type}
            .rootType=${this.rootType}
            .mode=${this.mode}
            .reply=${this.replyTarget}
            .inputValue=${this.replyInputValue}
            .voteOption=${this.voteOption}
            .keepActive=${this.replyKeepActive}
            .user=${this.user}
            .placeholder=${this.replyInputPlaceholder}
          ></bili-comment-box>
        </div>
      </div>
    `}continuationsTemplate(){return x$2`
      <div id="continuations">
        ${this.showContinuations?x$2`<div class="bottombar">正在加载…</div>`:""}
        ${this.showContinueTrigger?x$2`<div class="trigger"></div>`:""}
      </div>
    `}endTemplate(){return x$2`
      <div id="end">
        ${this.showViewMore?x$2`<div class="bottombar clickable" @click=${this.handleViewMoreClick}>查看更多评论 {</div>`:x$2`<div
              class="bottombar ${this.limitMaskState?o$1({disabled:!0}):""}"
            >
              没有更多评论
            </div>`}
      </div>
    `}render(){return x$2`
      ${x$2`${this.headerTemplate()}${this.showSpinner?this.spinnerTemplate():x$2`${this.contentTemplate()}${this.showEnd?this.endTemplate():this.continuationsTemplate()}`}`}
    `}};$.styles=i$6`
    :host {
      display: block;
      background-color: var(--bg1);
      -webkit-font-smoothing: antialiased;
    }

    #spinner-container #title {
      margin: 0;
      color: var(--text1);
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 20px;
    }

    #contents {
      padding-top: 14px;
      position: relative;
    }

    #reply-commentbox {
      display: none;
      height: 0;
      overflow: hidden;
      opacity: 0;
    }

    #limit-mask {
      width: 100%;
      position: absolute;
      bottom: -36px;
      left: 0;
      z-index: 35;
    }

    #limit-mask-wall {
      width: 100%;
      height: 200px;
      cursor: pointer;
    }
    #limit-mask-wall::before {
      display: block;
      content: "";
      height: 100%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--bg1) 100%);
    }
    #limit-mask-tip {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 36px;
      border-radius: 6px;
      font-size: 12px;
      color: var(--brand_pink);
      background: var(--bg1);
      transition: 0.2s;
      cursor: pointer;
    }

    .bottombar {
      width: 100%;
      margin-top: 20px;
      font-size: 13px;
      color: var(--text3);
      text-align: center;
      user-select: none;
    }
    .bottombar.clickable:hover {
      cursor: pointer;
      color: var(--brand_blue);
    }

    #continuations .trigger {
      width: 100%;
      height: 40px;
    }

    #end .bottombar {
      padding-bottom: 160px;
    }

    #end .bottombar.disabled {
      padding-bottom: 60px;
    }
  `;P([t$1()],$.prototype,"scrollContainer",2);P([t$1()],$.prototype,"user",2);P([n$4({attribute:"data-params"})],$.prototype,"params",2);P([t$1()],$.prototype,"mode",2);P([t$1()],$.prototype,"assist",2);P([t$1()],$.prototype,"showSpinner",2);P([t$1()],$.prototype,"showContinuations",2);P([t$1()],$.prototype,"showContinueTrigger",2);P([t$1()],$.prototype,"contentFeatures",2);P([t$1()],$.prototype,"showEnd",2);P([t$1()],$.prototype,"upMid",2);P([t$1()],$.prototype,"globalOptions",2);P([t$1()],$.prototype,"notice",2);P([t$1()],$.prototype,"vote",2);P([t$1()],$.prototype,"count",2);P([t$1()],$.prototype,"spmInfo",2);P([t$1()],$.prototype,"rootInputPlaceholder",2);P([t$1()],$.prototype,"inputDisabled",2);P([t$1()],$.prototype,"rootInputUploadPicState",2);P([t$1()],$.prototype,"limitMaskState",2);P([t$1()],$.prototype,"list",2);P([t$1()],$.prototype,"newItems",2);P([t$1()],$.prototype,"replyTarget",2);P([t$1()],$.prototype,"replyInputValue",2);P([t$1()],$.prototype,"replyKeepActive",2);P([t$1()],$.prototype,"replyInputPlaceholder",1);P([t$1()],$.prototype,"commentBoxDisabledState",2);P([t$1()],$.prototype,"voteOption",1);P([i$3("#continuations .trigger")],$.prototype,"continueTrigger",2);P([i$3("#reply-commentbox")],$.prototype,"replyCommentBoxContainer",2);P([i$3("#limit-mask-wall")],$.prototype,"limitMaskWall",2);P([i$3("#feed")],$.prototype,"commentFeed",2);$=P([e$5("bili-comments")],$);var $c=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,G=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Ec(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&$c(be,$e,Ee),Ee};const qo="bili-comments-bottom-fixed-wrapper";let q=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.oid="",this.type=0,this.rootType="list",this.rootReply=null,this.user=null,this.isClosed=!1,this.isSelected=!1,this.options=[],this.notice=null,this.vote=null,this.count=0,this.mode=3,this.inputPlaceholder="",this.commentBoxDisabledState=null,this.commentBoxTeleportDisabled=!1,this.uploadPicState=1,this.scrollContainer=null,this.commentboxInited=!1,this.revertTeleportCommentbox=null,this.showMoreMenu=!1,this.moreMenuInited=!1}get voteOption(){return Zi(this.vote)}get containerZIndex(){var ge;return this.scrollContainer?(ge=window.getComputedStyle(this.scrollContainer))==null?void 0:ge.zIndex:"30"}get sortClass(){return this.mode===3?"hot":this.mode===2?"time":""}connectedCallback(){super.connectedCallback(),this.initMoreMenu(),this.initCommentbox()}disconnectedCallback(){super.disconnectedCallback(),this.commentboxInited=!1,this.disposables.dispose(),this.revertTeleportCommentbox&&this.revertTeleportCommentbox()}update(ge){super.update(ge),ge.get("options")&&this.initMoreMenu(),ge.get("user")&&this.initCommentbox()}initMoreMenu(){this.menu&&(this.moreMenuInited||setTimeout(()=>{this.disposables.addEventListener(this.menu,"mouseleave",()=>{this.showMoreMenu=!1})}))}initCommentbox(){this.disposables.setTimeout(()=>{if(this.rootType==="list"&&this.removeBottomWrapper(),this.commentBoxDisabledState||this.commentboxInited||(this.commentboxInited=!0,this.commentBoxTeleportDisabled)||!window.IntersectionObserver)return;const ge=new IntersectionObserver(async be=>{if(!this.commentBoxDisabledState){if(this.scrollContainer){const $e=this.scrollContainer.scrollTop,ke=this.commentboxEl.offsetTop-this.scrollContainer.offsetTop,Ee=this.scrollContainer.clientHeight;if(ke-$e>Ee)return}else{const{top:$e}=this.commentboxEl.getBoundingClientRect(),ke=window.innerHeight;if($e>=ke)return}this.teleportCommentbox(be[0].isIntersecting)}});ge.observe(this.commentboxEl),this.disposables.add(()=>{ge.unobserve(this.commentboxEl),ge.disconnect()})},1e3)}updateBottomFixedWrapperStyle(){var ge;if(!this.commentboxEl||!this.revertTeleportCommentbox)return;const be=(((ge=this.scrollContainer)==null?void 0:ge.parentElement)||this.shadowRoot).querySelector(`.${qo}`);if(!be)return;const{width:$e,left:ke}=this.commentboxEl.getBoundingClientRect();be.style.width=`${$e}px`,be.style.left=`${ke}px`}removeBottomWrapper(){if(this.scrollContainer){const ge=this.scrollContainer.parentElement;ge&&Array.from(ge.children).forEach(be=>{be.className.toLowerCase()==="bili-comments-bottom-fixed-wrapper"&&ge.removeChild(be)})}}teleportCommentbox(ge){var be;if(ge){(be=this.revertTeleportCommentbox)==null||be.call(this),this.revertTeleportCommentbox=null;return}const $e=this.commentboxEl.children[0];$e.resetState();const{width:ke,height:Ee}=this.commentboxEl.getBoundingClientRect();if(ke===0||Ee===0)return;const Ce=this.commentboxEl.offsetLeft;this.commentboxEl.style.setProperty("--bili-comments-commentbox-height",`${Ee}px`);const Te=document.createElement("div");Te.className=qo,Te.style.position=this.scrollContainer?"absolute":"fixed",Te.style.bottom="0",Te.style.left=`${Ce}px`,Te.style.width=`${ke}px`,Te.style.zIndex=`${Number(this.containerZIndex)+1}`;const Se=document.createElement("div");Se.appendChild($e),Se.style.width="100%",Se.style.padding="15px 0",Se.style.position="relative",Se.style.backgroundColor="var(--bg1)",Se.style.borderTop="0.5px solid var(--graph_bg_thick)",Te.appendChild(Se);let Ke=this.shadowRoot,Je=!1;this.scrollContainer&&this.scrollContainer.parentElement&&this.scrollContainer.parentElement!==document.body&&(Ke=this.scrollContainer.parentElement,getComputedStyle(Ke).position==="static"&&(Je=!0,Ke.style.position="relative")),Ke.appendChild(Te),this.revertTeleportCommentbox=()=>{this.commentboxEl.appendChild($e),$e.resetState(),Te&&Ke.contains(Te)&&Ke.removeChild(Te),Je&&Ke instanceof HTMLElement&&(Ke.style.position=""),this.commentboxEl.style.setProperty("--bili-comments-commentbox-height",`${$e.clientHeight}px`),setTimeout(()=>{this.commentboxEl.style.removeProperty("--bili-comments-commentbox-height")},300)}}handleChangeMode(ge){this.mode!==ge&&this.dispatchEvent(new CustomEvent("mode-change",{detail:ge}))}handleMore(){this.showMoreMenu=!0}handleSelectOption(ge){this.showMoreMenu=!1,this.dispatchEvent(new CustomEvent("action",{detail:ge.detail}))}handleNoticeClose(){this.dispatchEvent(new CustomEvent("notice-close"))}handleLogin(){if(!this.user){U()?Ft("auth/requestLogin",{from:"comments"}):Mt({event:"selfDef.relpyInputClick"});return}}noticeTemplate(){return x$2`
      <div id="notice">
        ${x$2`<bili-comments-notice
          .data=${this.notice}
          @jump=${ge=>this.dispatchEvent(new CustomEvent("jump",{detail:ge.detail}))}
          @close=${this.handleNoticeClose}
        ></bili-comments-notice>`}
      </div>
    `}voteTemplate(){return x$2`
      <div id="vote">
        ${x$2`<bili-comments-vote-card
          .data=${this.vote}
          .oid=${this.oid}
          .type=${this.type}
          .user=${this.user}
        ></bili-comments-vote-card>`}
      </div>
    `}sortTemplate(){return this.isSelected?x$2`<div id="sort-title">精选评论</div>`:this.commentBoxDisabledState?x$2`<div
          id="sort-actions"
          class=${this.sortClass?o$1({[this.sortClass]:!0}):""}
        >
          <bili-text-button @click=${()=>this.handleChangeMode(3)}>最热</bili-text-button>
        </div>`:x$2`<div
          id="sort-actions"
          class=${this.sortClass?o$1({[this.sortClass]:!0}):""}
        >
          <bili-text-button @click=${()=>this.handleChangeMode(3)}>最热</bili-text-button>
          <div class="sort-div"></div>
          <bili-text-button @click=${()=>this.handleChangeMode(2)}>最新</bili-text-button>
        </div>`}navbarTemplate(){return this.rootType==="list"?x$2`
          <div id="navbar">
            ${this.isClosed?"":this.sortTemplate()}
            ${this.options.length?x$2` <div id="more">
                  <button @click=${this.handleMore}>
                    <bili-icon size="16" icon="BDC/more_vertical_fill/1"></bili-icon>
                  </button>
                  <bili-comment-menu
                    style="${this.showMoreMenu?o$3({"--bili-comment-menu-display":"block"}):""}"
                    .options=${this.options}
                    @select=${this.handleSelectOption}
                  ></bili-comment-menu>
                </div>`:""}
          </div>
        `:x$2`<div id="navbar-div"></div>`}disabledCommentboxTemplate(){return x$2`
      <bili-comment-disabled-box
        .oid=${this.oid}
        .type=${this.type}
        .rootType=${this.rootType}
        .user=${this.user}
        .scrollContainer=${this.scrollContainer}
        .commentBoxDisabledState=${this.commentBoxDisabledState}
      >
      </bili-comment-disabled-box>
    `}commentboxTemplate(){return x$2`
      <div id="commentbox">
        ${this.commentBoxDisabledState?this.disabledCommentboxTemplate():x$2`<bili-comment-box
              .oid=${this.oid}
              .type=${this.type}
              .rootType=${this.rootType}
              .mode=${this.mode}
              .user=${this.user}
              .reply=${this.rootReply}
              .placeholder=${this.inputPlaceholder}
              .uploadPicState=${this.uploadPicState}
              .voteOption=${this.voteOption}
              .scrollContainer=${this.scrollContainer}
            ></bili-comment-box>`}
      </div>
    `}render(){return x$2` ${this.notice?this.noticeTemplate():""} ${this.navbarTemplate()} ${this.commentboxTemplate()} `}};q.styles=[i$6`
      #notice {
        margin-bottom: 10px;
        width: calc(100% + 40px);
        transform: translateX(-20px);
      }
      #vote {
        margin-bottom: 24px;
      }
    `,i$6`
      #navbar {
        display: flex;
        align-items: center;
        height: 28px;
        margin-bottom: 12px;
      }
      #navbar-div {
        margin-bottom: 12px;
      }
      #title {
        display: flex;
        align-items: center;
      }
      #title h2 {
        margin: 0;
        color: var(--text1);
        font-weight: 500;
        font-size: var(--bili-comments-font-size-title, 20px);
      }
      #title #count {
        margin: 0 30px 0 6px;
        font-size: var(--bili-comments-font-size-count, 13px);
        font-weight: 400;
        color: var(--text3);
      }

      #sort-title {
        font-weight: 500;
        color: var(--text1);
      }

      #sort-actions .sort-div {
        display: inline-block;
        height: 11px;
        margin: 0 3px;
        border-left: solid 1px var(--text3);
        vertical-align: -2px;
      }

      #sort-actions bili-text-button {
        --_container-height: 28px;
        --_leading-space: 6px;
        --_trailing-space: 6px;
        --_label-text-size: var(--bili-comments-font-size-sort, 13px);
        --_label-text-color: var(--text3);
      }

      #sort-actions.hot bili-text-button:first-child {
        --_label-text-color: var(--text1);
      }
      #sort-actions.time bili-text-button:last-child {
        --_label-text-color: var(--text1);
      }
    `,i$6`
      #commentbox {
        flex-shrink: 0;
        transition: height 0.2s;
        height: var(--bili-comments-commentbox-height, auto);
      }
    `,i$6`
      #more {
        margin-left: auto;
        width: 24px;
        height: 24px;
        position: relative;
      }
      #more button {
        width: 24px;
        height: 24px;
        text-align: center;
        padding: 0;
        outline: none;
        border: none;
        background: transparent;
        font-size: 13px;
        color: var(--text3);
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        justify-content: end;
      }
    `];G([n$4()],q.prototype,"oid",2);G([n$4()],q.prototype,"type",2);G([n$4()],q.prototype,"rootType",2);G([n$4()],q.prototype,"rootReply",2);G([n$4()],q.prototype,"user",2);G([n$4()],q.prototype,"isClosed",2);G([n$4()],q.prototype,"isSelected",2);G([n$4()],q.prototype,"options",2);G([n$4()],q.prototype,"notice",2);G([n$4()],q.prototype,"vote",2);G([n$4({type:Number})],q.prototype,"count",2);G([n$4({type:String})],q.prototype,"mode",2);G([n$4({type:String})],q.prototype,"inputPlaceholder",2);G([n$4({type:Object})],q.prototype,"commentBoxDisabledState",2);G([n$4({type:Boolean})],q.prototype,"commentBoxTeleportDisabled",2);G([n$4({type:Number})],q.prototype,"uploadPicState",2);G([t$1()],q.prototype,"voteOption",1);G([n$4()],q.prototype,"scrollContainer",2);G([t$1()],q.prototype,"showMoreMenu",2);G([t$1()],q.prototype,"sortClass",1);G([i$3("#commentbox")],q.prototype,"commentboxEl",2);G([i$3("bili-comment-menu")],q.prototype,"menu",2);q=G([e$5("bili-comments-header-renderer")],q);var Tc=Object.defineProperty,Sc=Object.getOwnPropertyDescriptor,zn=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Sc(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Tc(be,$e,Ee),Ee};let Li=class extends s$4{constructor(){super(...arguments),this.i18r=null,this.isIntersecting=!1,this.isReported=!1}connectedCallback(){super.connectedCallback(),window.IntersectionObserver&&(this.i18r=new IntersectionObserver(ge=>{const be=ge[0];be&&be.target===this&&(this.isIntersecting=be.isIntersecting,!this.isReported&&be.isIntersecting&&this.cmReport())}),this.i18r.observe(this))}disconnectedCallback(){super.disconnectedCallback(),this.clearI18r(),this.isReported=!1}clearI18r(){this.isIntersecting=!1,this.i18r&&(this.i18r.disconnect(),this.i18r=null)}cmReport(){var ge;if(!((ge=window.BiliCm)!=null&&ge.Base))return;this.isReported=!0;const{isEmpty:be,data:$e,locId:ke}=this.data;if(window.BiliCm.Base.sendShowData($e,ke),be){this.clearI18r();return}setTimeout(()=>{var Ee;(Ee=window.BiliCm)!=null&&Ee.Base&&(this.isIntersecting&&window.BiliCm.Base.sendStrictShowData($e,ke),this.clearI18r())},1e3)}handleJump(){const ge=fc(this.data.data,this.data.locId);ge&&window.open(ge,"_blank"),this.dispatchEvent(new CustomEvent("jump",{detail:{type:"link",link:ge}}))}handleClose(ge){ge.stopPropagation(),this.dispatchEvent(new CustomEvent("close"))}render(){return x$2`
      <div
        id="bar"
        style=${o$3({display:this.data.isEmpty?"none":"flex"})}
        @click=${this.handleJump}
      >
        <div id="bg"></div>
        <div id="icon">
          <bili-icon icon="BDC/speaker_notice_fill/1" size="14"></bili-icon>
        </div>
        <div id="title">${this.data.title}</div>
        <div id="close" @click=${this.handleClose}>
          <bili-icon icon="BDC/xmark_close_line/1" size="16"></bili-icon>
        </div>
      </div>
    `}};Li.styles=i$6`
    :host {
      display: block;
    }
    #bar {
      display: flex;
      align-items: center;
      position: relative;
      height: 40px;
      padding: 0 10px;
      font-size: 12px;
      color: var(--Ye5_u);
      cursor: pointer;
    }
    #bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 2px;
      background-color: var(--Or0);
      pointer-events: none;
    }
    #title {
      position: relative;
      z-index: 1;
      margin-right: auto;
      flex: 1;
      padding: 0 5px;
      vertical-align: top;
      word-wrap: break-word;
      word-break: break-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #icon {
      position: relative;
      z-index: 1;
      width: 14px;
      height: 14px;
    }
    #close {
      position: relative;
      z-index: 1;
      display: flex;
    }
  `;zn([n$4()],Li.prototype,"data",2);Li=zn([e$5("bili-comments-notice")],Li);var Ic=Object.defineProperty,Pc=Object.getOwnPropertyDescriptor,mi=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Pc(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Ic(be,$e,Ee),Ee};let we=class extends s$4{constructor(){super(...arguments),this.mask=!1,this.maskClosable=!0,this.titleText="",this.width="600px"}handleClose(){this.maskClosable&&this.hide()}hide(){this.parentElement&&this.parentElement.removeChild(this)}connectedCallback(){super.connectedCallback(),this.initData()}initData(){const ge=this.getAttribute("title"),be=this.getAttribute("width");ge&&(this.titleText=ge||"\u8BE6\u60C5"),be&&(this.width=be)}render(){return x$2`
      ${this.mask?x$2`<div id="mask" @click=${this.handleClose}></div>`:x$2``}
      <div
        id="wrap"
        style="${o$3({width:this.width})}"
      >
        <div id="header">
          <div id="title">${this.titleText}</div>
          <div id="close" @click=${this.hide}><bili-icon icon="BDC/xmark_close_line/1" size="22"></bili-icon></div>
        </div>
        <div id="content">
          <slot></slot>
        </div>
      </div>
    `}};we.styles=i$6`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    #wrap {
      position: relative;
      width: 100%;
      border-radius: 6px;
      box-shadow: 0 0 25px #00000026;
      background-color: var(--bg1);
      overflow: hidden;
      max-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    #header {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      flex-shrink: 0;
      padding: 0 10px;
      border-bottom: 0.5px solid var(--line_light);
      position: relative;
      color: var(--text1);
    }
    #close {
      cursor: pointer;
      position: absolute;
      right: 10px;
      color: var(--text2);
    }
    #content {
      height: calc(100% - 50px);
      overflow-y: auto;
    }
    ::slotted(iframe) {
      width: 100%;
      height: 100%;
      border: none;
    }
  `;mi([n$4({type:Boolean})],we.prototype,"mask",2);mi([n$4({type:Boolean})],we.prototype,"maskClosable",2);mi([n$4()],we.prototype,"titleText",2);mi([t$1()],we.prototype,"width",2);we=mi([e$5("bili-comments-popup")],we);var Oc=Object.defineProperty,Dc=Object.getOwnPropertyDescriptor,Lc=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Dc(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Oc(be,$e,Ee),Ee};let kr=class extends s$4{render(){return x$2`
      <div id="spinner">
        <span>正在加载…</span>
      </div>
    `}};kr.styles=i$6`
    #spinner {
      margin-top: 20px;
      padding: 20px 0 40px;
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: var(--text3);
    }
  `;kr=Lc([e$5("bili-comments-spinner")],kr);var Ac=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,_e=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Rc(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Ac(be,$e,Ee),Ee};let ie=class extends s$4{constructor(){super(...arguments),this.oid="",this.type=0,this.user=null}get isDuel(){return this.data.options.length===2}get optionIdx(){return this.data.my_vote_option||0}handleClick(){pn(this.data.vote_id)}async handleOptionClick(ge){if(!this.user){Mt({event:"selfDef.voteCardClick"});return}if(this.optionIdx>0)return;const be=ge.idx;try{await Ms({option:be,vote_id:this.data.vote_id,oid:this.oid,type:this.type}),this.data.my_vote_option=be,this.data.count?this.data.count+=1:this.data.count=1,this.data.options[be-1].count?this.data.options[be-1].count+=1:this.data.options[be-1].count=1,this.requestUpdate()}catch($e){console.error($e)}}duelOptionTemplate(ge){const be=this.optionIdx,$e=be!==0,ke=`${be?Math.round((ge.count||0)/this.data.count*100):50}%`;return x$2`<div
      class="${o$1({option:!0,[ge.idx===1?"left":"right"]:!0})}"
      style="${$e?o$3({"--option-opacity":".8","--option-width":ke,"--option-color":"var(--text_white)","--option-font-size":"12px","--option-cursor":"default"}):""}"
      @click=${()=>this.handleOptionClick(ge)}
    >
      <div class="option-info">
        <div class="option-desc">${ge.desc}</div>
        ${$e?x$2`<div class="option-ratio">${ke}</div>`:""}
      </div>
      <div class="option-skew">
        <div class="option-skew-fill"></div>
      </div>
      ${ge.idx===be?x$2`<bili-icon icon="BDC/checkmark_circle_fill/1" size="20"></bili-icon>`:""}
    </div>`}duelTemplate(){return x$2`<div id="duel">${this.data.options.map(ge=>this.duelOptionTemplate(ge))}</div>`}render(){return x$2`
      <div id="card">
        <div id="info">
          <div id="title">
            <bili-icon icon="BDC/vote_line/2" size="16"></bili-icon>
            <span>${this.data.title}</span>
          </div>
          ${this.isDuel?x$2`<div id="desc">
                <div id="count">${this.data.count||0}人参与</div>
              </div>`:x$2`<div id="desc">
                <div id="count">${this.data.count||0}人参与</div>
                <div id="split">|</div>
                ${this.optionIdx>0?x$2`<div id="status">已投票 ·&nbsp;</div>
                      <bili-text-button .trailingIcon=${!0} id="action" @click=${this.handleClick}>
                        查看投票结果 <bili-icon slot="icon" icon="BDC/arrow_forward_right_line/3" size="12"></bili-icon
                      ></bili-text-button> `:x$2`<bili-text-button id="action" @click=${this.handleClick}>去投票</bili-text-button>`}
              </div>`}
        </div>
        ${this.isDuel?this.duelTemplate():""}
      </div>
    `}};ie.styles=i$6`
    :host {
      --option-opacity: 0.15;
      --option-width: 50%;
      --option-radius: 6px;
      --option-font-size: 13px;
      --option-color: var(--Pi10_u);
      --option-cursor: pointer;
    }
    #card {
      width: 100%;
      height: 80px;
      display: flex;
      border-radius: 6px;
      background-color: var(--graph_bg_thin);
      padding: 12px 16px 12px 10px;
      box-sizing: border-box;
      align-items: center;
    }

    #info {
      flex: 1;
      color: var(--option-color);
    }

    #duel {
      flex-shrink: 0;
      width: 60%;
      margin-left: 30px;
      height: 40px;
      display: flex;
    }

    #info #title {
      color: var(--text1);
      font-size: 13px;
      display: flex;
      align-items: center;
    }
    #info #title span {
      margin-left: 2px;
    }
    #info #desc {
      margin-top: 4px;
      color: var(--text3);
      display: flex;
      font-size: 12px;
      align-items: center;
    }
    #info #desc #split {
      color: var(--line_regular);
      margin: 0px 6px;
    }

    #duel .option {
      position: relative;
      display: flex;
      min-width: 120px;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      width: var(--option-width);
      color: var(--option-color);
      font-size: var(--option-font-size);
      cursor: var(--option-cursor);
    }
    #duel .option.left {
      margin-right: 30px;
      padding-left: 10px;
      border-radius: var(--option-radius) 0 0 var(--option-radius);
      background-color: rgba(255, 102, 153, var(--option-opacity));
    }
    #duel .option.right {
      flex-direction: row-reverse;
      text-align: right;
      padding-right: 10px;
      border-radius: 0 var(--option-radius) var(--option-radius) 0;
      background-color: rgba(0, 174, 236, var(--option-opacity));
    }
    #duel .option-skew {
      position: absolute;
      top: 0;
      height: 100%;
      width: 20px;
      overflow: hidden;
      opacity: var(--option-opacity);
      pointer-events: none;
    }
    #duel .option-skew-fill {
      pointer-events: all;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }
    #duel .option.left .option-skew {
      right: -20px;
    }
    #duel .option.right .option-skew {
      left: -20px;
    }
    #duel .option.left .option-skew-fill {
      left: -8px;
      background-color: #f69;
      transform: skew(21deg);
      border-top-right-radius: calc(var(--option-radius) - 2px);
      border-bottom-right-radius: var(--option-radius);
    }
    #duel .option.right .option-skew-fill {
      left: 8px;
      background-color: #00aeec;
      transform: skew(21deg);
      border-top-left-radius: var(--option-radius);
      border-bottom-left-radius: calc(var(--option-radius) - 2px);
    }
  `;_e([n$4({type:Object})],ie.prototype,"data",2);_e([n$4()],ie.prototype,"oid",2);_e([n$4()],ie.prototype,"type",2);_e([n$4()],ie.prototype,"user",2);_e([t$1()],ie.prototype,"isDuel",1);_e([t$1()],ie.prototype,"optionIdx",1);ie=_e([e$5("bili-comments-vote-card")],ie);var Mc=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,Ge=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?jc(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Mc(be,$e,Ee),Ee};let pe=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.value="",this.placeholder="\u8BF7\u8F93\u5165\u4F60\u60F3\u8BC4\u8BBA\u7684\u5185\u5BB9",this.rows=1,this.isFocus=!1,this.selection={start:0,end:0}}getSelection(){return{...this.selection}}connectedCallback(){super.connectedCallback()}handleFocus(ge){ge.stopPropagation(),this.isFocus=ge.type==="focus",this.dispatchEvent(new CustomEvent(ge.type))}handleSelectionChange(ge){const be=ge.selectionStart,$e=ge.selectionEnd;be===this.selection.start&&$e===this.selection.end||(this.selection.start=ge.selectionStart,this.selection.end=ge.selectionEnd,this.dispatchEvent(new CustomEvent("selection-change",{detail:{...this.selection}})))}handleClick(ge){ge.stopPropagation(),this.handleSelectionChange(ge.target)}handleInput(ge){const be=ge.target;ge.stopPropagation(),this.value=be.value,this.dispatchInputEvent()}handleKeydown(ge){ge.stopPropagation()}handleKeyup(ge){ge.stopPropagation();const be=ge.target;this.handleSelectionChange(be)}dispatchInputEvent(){this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}focus(){this.input.focus()}blur(){this.input.blur()}insertText(ge,be){const $e=this.input;be||(be={start:$e.selectionStart,end:$e.selectionEnd});const{start:ke,end:Ee}=be,Ce=this.value;this.value=Ce.slice(0,ke)+ge+Ce.slice(Ee),this.dispatchInputEvent(),setTimeout(()=>{$e.selectionStart=$e.selectionEnd=ke+ge.length,this.handleSelectionChange($e),this.focus()})}render(){return x$2`
      <textarea
        id="input"
        .value=${this.value}
        .placeholder=${this.placeholder}
        class="${o$1({active:!!this.value,focus:this.isFocus})}"
        @focus=${this.handleFocus}
        @blur=${this.handleFocus}
        @click=${this.handleClick}
        @keydown=${this.handleKeydown}
        @keyup=${this.handleKeyup}
        @input=${this.handleInput}
      ></textarea>
    `}};pe.styles=i$6`
    :host {
      --bili-comment-textarea-bg: var(--bg2);
      --bili-comment-textarea-color: var(--text1);
      --bili-comment-textarea-placeholder-color: var(--text3);
      --bili-comment-textarea-padding: 12px;
      --bili-comment-textarea-font-size: 14px;
    }
    :host {
      display: flex;
    }
    #input {
      height: 32px;
      min-height: 32px;
      max-height: 60px;
      line-height: 20px;
      width: 100%;
      font-size: var(--bili-comment-textarea-font-size);
      font-family: inherit;
      box-sizing: border-box;
      color: var(--bili-comment-textarea-color);
      background-color: var(--bili-comment-textarea-bg);
      padding: 5px 0;
      border: none;
      resize: none;
      outline: none;
      transition: 0.2s;
    }
    #input.focus {
      height: 60px;
      min-height: 60px;
    }
    #input.active {
      height: 60px;
      min-height: 60px;
    }
    #input::placeholder {
      color: var(--bili-comment-textarea-placeholder-color);
    }
  `;Ge([i$3("#input")],pe.prototype,"input",2);Ge([n$4({type:String})],pe.prototype,"value",2);Ge([n$4({type:String})],pe.prototype,"placeholder",2);Ge([t$1()],pe.prototype,"rows",2);Ge([t$1()],pe.prototype,"isFocus",2);pe=Ge([e$5("bili-comment-textarea")],pe);var Bc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,ut=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Nc(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Bc(be,$e,Ee),Ee};let rt=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.oid="",this.root="",this.type=0,this.rootType="list",this.cmFromTrackId="",this.spmInfo={spmid:"",from_spmid:"",from_outer_spmid:""},this.idx=-1,this.mode=3,this.assist=!1,this.visible=!0,this.upMid=0,this.showCheckText=!1,this.user=null,this.commonTrackData=null,this.trackObserver=null}handleReply(ge){var be;w.emit("reply",{target:ge,root:{type:this.rootType,params:{type:this.type,oid:this.oid}},defaultInput:((be=ge.reply_control)==null?void 0:be.preset_reply_text)||"",mount:$e=>{$e.parentElement!==this.replyContainer&&this.replyContainer.appendChild($e)}})}handleReport(ge){this.dispatchEvent(new CustomEvent("report",{detail:ge}))}handleBlock(ge){this.dispatchEvent(new CustomEvent("block",{detail:ge}))}handleViewDetail(ge){this.dispatchEvent(new CustomEvent("view-detail",{detail:ge}))}async handleViewDialog(ge){this.dispatchEvent(new CustomEvent("view-dialog",{detail:ge}))}getClickTrackData(ge){const be=this.getCommonTrackData(!1);return Object.assign(be,ge,{ext_json:JSON.stringify({likes:this.data.like,rank:this.idx,rp_mid:this.data.member.mid,rpid:this.data.rpid_str})}),be}getCommonTrackData(ge=!0){var It,Bt;var be,$e,ke,Ee,Ce;if(ge&&this.commonTrackData)return this.commonTrackData;let Te="-";(be=this.data.reply_control)!=null&&be.is_note_v2&&(this.data.reply_control.is_note?Te="note":Te="opus_"+this.data.dynamic_id_str);let Se="";if(typeof this.data.track_info=="string")try{const Dt=JSON.parse(this.data.track_info);Dt!=null&&Dt.track_id&&(Se=Dt.track_id)}catch{}const Ke=[];let Je=0;this.commentRenderer?this.commentRenderer.getRichTextContent().forEach(Dt=>{var jt,zt,en;if(Dt.tag==="a"&&Dt.a)if(Dt.a.href){const qt=((jt=Dt.dataset)==null?void 0:jt.type)||"";if(!["search","mention"].includes(qt)){const vo=((zt=Dt.dataset)==null?void 0:zt["raw-url"])||bl(Dt.a.href);Ke.push(vo)}}else((en=Dt.dataset)==null?void 0:en.type)==="seek"&&(Je+=1)}):console.warn("commentRenderer is not ready");const{members:mt}=(It=this.data.content)!=null?It:{},bt=(($e=this.data.replies)==null?void 0:$e.map(Dt=>Dt.rpid_str))||[],$t=[];this.data.card_label&&this.data.card_label.forEach(Dt=>{$t.push(Dt.text_content)});const St={oid:this.oid,type:this.type,page:this.rootType,rpid:this.data.rpid_str,root_rpid:this.getRootRpid(),tag_name:"",ordering:this.mode===3?"heat":"time",from_spmid:this.spmInfo.from_spmid,spmid:this.spmInfo.spmid,from_outer_spmid:this.spmInfo.from_outer_spmid,reply_list:bt.join(","),rank:this.idx,card_type:Te,url:Ke.join(","),ext_json:JSON.stringify({is_contain_at:(mt==null?void 0:mt.length)||0,is_contain_vote:0,is_contain_topic:0,is_contain_url:Ke.length,is_contain_time:Je}),reply_track_id:Se,cm_from_track_id:this.cmFromTrackId,exposure_metadata:"",shown_tags:$t.join(","),has_image:(ke=this.data.content.pictures)!=null&&ke.length?1:0,fold_pictures:((Ee=this.data.reply_control)==null?void 0:Ee.fold_pictures)||"",picture_count:(Bt=(Ce=this.data.content.pictures)==null?void 0:Ce.length)!=null?Bt:0,pic_scale:1,has_fans_medal:0,has_god_label:0,has_oldfans_label:0,has_decoration:0,has_guard:0};return this.commonTrackData=St,St}getRootRpid(){switch(this.rootType){case"list":return this.data.rpid_str;case"detail":return Number(this.data.root_str)===0?this.data.rpid_str:this.data.root_str;case"dialog":return this.data.root_str;default:return this.data.rpid_str}}handleClickTrack(ge){ce({type:"click",spm_info:"main.comment.reply-card.all"},{msg:JSON.stringify(this.getClickTrackData(ge.detail))})}repliesTemplate(){const{replies:ge,rcount:be}=this.data;return ge!=null&&ge.length&&!be?"":x$2`<div id="replies">
      <bili-comment-replies-renderer
        .data=${this.data}
        .oid=${this.oid}
        .type=${this.type}
        .user=${this.user}
        .upMid=${this.upMid}
        .assist=${this.assist}
        .contentFeatures=${this.contentFeatures}
        @reply=${$e=>this.handleReply($e.detail)}
        @block=${$e=>this.handleBlock($e.detail)}
        @report=${$e=>this.handleReport($e.detail)}
        @view-detail=${$e=>this.handleViewDetail($e.detail)}
        @track=${this.handleClickTrack}
        @jump-space=${$e=>this.dispatchEvent(new CustomEvent("jump-space",{detail:$e.detail}))}
      ></bili-comment-replies-renderer>
    </div>`}connectedCallback(){super.connectedCallback(),this.disposables.setTimeout(()=>{this.trackObserver=new ui({el:this,type:"show",value:{event:"main.comment.reply-card.all",data:this.getCommonTrackData(!0)},modifiers:{raw:!0},durational:!0,handler:(ge,be,$e)=>{ge==="show"&&ce({type:"show",spm_info:be},{msg:JSON.stringify($e)})}})}),this.disposables.setTimeout(()=>{if(U()){const ge=Hi("window/visibleChange",({data:be})=>{var $e;($e=this.trackObserver)==null||$e.reportShowDuration(be)});this.disposables.add(()=>{ge()})}})}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose(),this.trackObserver&&(this.trackObserver.dispose(),this.trackObserver=null)}updated(ge){super.updated(ge),ge.get("visible")&&(this.visible===!1?this.style.setProperty("display","none"):this.style.removeProperty("display"))}render(){return x$2`
      <bili-comment-renderer
        id="comment"
        .data=${this.data}
        .user=${this.user}
        .root=${this.root}
        .rootType=${this.rootType}
        .upMid=${this.upMid}
        .oid=${this.oid}
        .type=${this.type}
        .contentFeatures=${this.contentFeatures}
        .showCheckText=${this.showCheckText}
        .idx=${this.idx}
        .assist=${this.assist}
        style=${o$3({"--bili-comment-border-bottom":"none"})}
        @delete=${()=>this.dispatchEvent(new CustomEvent("delete"))}
        @block=${()=>{this.handleBlock({mid:this.data.member.mid})}}
        @report=${ge=>{var be;return this.handleReport({member:{mid:this.data.member.mid,uname:this.data.member.uname},oid:this.oid,type:this.type,rpid:this.data.rpid_str,hiddenJuryTips:((be=ge.detail)==null?void 0:be.hiddenJuryTips)||!1})}}
        @top=${ge=>this.dispatchEvent(new CustomEvent("top",{detail:ge.detail}))}
        @expand=${ge=>this.dispatchEvent(new CustomEvent("expand",{detail:ge.detail}))}
        @view-dialog=${ge=>this.handleViewDialog(ge.detail)}
        @track=${this.handleClickTrack}
        @preview-image=${ge=>this.dispatchEvent(new CustomEvent("preview-image",{detail:ge.detail}))}
        @jump-space=${ge=>this.dispatchEvent(new CustomEvent("jump-space",{detail:ge.detail}))}
      ></bili-comment-renderer>
      ${this.rootType==="list"?this.repliesTemplate():""} ${this.idx!==-1?x$2`<div id="div"></div>`:""}
    `}};rt.styles=i$6`
    :host {
      display: block;
    }
    #div {
      padding-bottom: 14px;
      border-bottom: 1px solid var(--graph_bg_thick);
    }
  `;ut([n$4({type:Object})],rt.prototype,"data",2);ut([n$4()],rt.prototype,"oid",2);ut([n$4()],rt.prototype,"root",2);ut([n$4()],rt.prototype,"type",2);ut([n$4()],rt.prototype,"rootType",2);ut([n$4()],rt.prototype,"cmFromTrackId",2);ut([n$4()],rt.prototype,"spmInfo",2);ut([n$4()],rt.prototype,"idx",2);ut([n$4()],rt.prototype,"mode",2);ut([n$4()],rt.prototype,"assist",2);ut([n$4({type:Boolean})],rt.prototype,"visible",2);ut([n$4()],rt.prototype,"upMid",2);ut([n$4()],rt.prototype,"showCheckText",2);ut([n$4()],rt.prototype,"user",2);ut([n$4()],rt.prototype,"contentFeatures",2);ut([i$3("#comment")],rt.prototype,"commentRenderer",2);ut([i$3("#reply-container")],rt.prototype,"replyContainer",2);rt=ut([e$5("bili-comment-thread-renderer")],rt);const Le=ge=>{typeof ge=="number"&&(ge=ge.toString(16)),ge.length===6&&(ge=`ff${ge}`);const be=parseInt(ge.slice(2,4),16),$e=parseInt(ge.slice(4,6),16),ke=parseInt(ge.slice(6,8),16),Ee=parseInt(ge.slice(0,2),16);return`rgba(${be},${$e},${ke},${Ee/255})`};var Cr=(ge=>(ge[ge.NONE=0]="NONE",ge[ge.CONTRACTOR=1]="CONTRACTOR",ge[ge.FANS=2]="FANS",ge))(Cr||{});function Vc(ge){const{is_contractor:be,contract_desc:$e,fans_detail:ke}=ge.member,Ee={type:0};return be?(Ee.type=1,Ee.contractor={name:{text:$e,style:{color:"var(--brand_pink, #FF6699)"}}},$e==="\u539F\u59CB\u7C89\u4E1D"?Ee.contractor.style={backgroundColor:"transparent",borderColor:"var(--brand_pink, #FF6699)"}:Ee.contractor.style={backgroundColor:"var(--brand_pink_thin, #FFECF1)",borderColor:"transparent"},Ee):ke!=null&&ke.medal_name?(Ee.type=2,Ee.fansDetail=ke,Ee.fans={style:{},name:{text:ke.medal_name,style:{color:ke.medal_color_name?Le(ke.medal_color_name):""}},level:{text:String(ke.level),style:{color:ke.medal_color_level?Le(ke.medal_color_level):"",backgroundColor:ke.medal_level_bg_color?Le(ke.medal_level_bg_color):""}}},ke.medal_color&&ke.medal_color_end&&(Ee.fans.style.backgroundImage=`linear-gradient(90deg, ${Le(ke.medal_color)}, ${Le(ke.medal_color_end)})`),ke.medal_color_border&&(Ee.fans.style.borderColor=Le(ke.medal_color_border)),ke.first_icon&&(Ee.fans.icon={first:ke.first_icon},ke.second_icon&&(Ee.fans.icon.second=ke.second_icon)),Ee):null}var zc=Object.defineProperty,Fc=Object.getOwnPropertyDescriptor,Lt=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Fc(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&zc(be,$e,Ee),Ee};let kt=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.upMid=0,this.medalVisible=!1,this.levelVisible=!0,this.showVipColor=!0}get uid(){return this.data.member.mid}get isUp(){return this.uid===String(this.upMid)}get userName(){return this.data.member.uname}get userNameRenderStyle(){var ge,be;if(!((ge=this.data.member)!=null&&ge.name_render))return null;const $e=ra((be=this.data.member)==null?void 0:be.name_render,{variable:"--name-render-bg"});return $e?$e.variable:null}get userNameStyle(){var ge,be;if(!this.showVipColor||!this.data.member)return null;if(this.userNameRenderStyle)return this.userNameRenderStyle;const $e=(be=(ge=this.data.member)==null?void 0:ge.vip)==null?void 0:be.nickname_color;return $e?{color:$e}:null}get spaceLink(){return Pt.SPACE(this.uid)}get levelImgSrc(){const{is_senior_member:ge,level_info:{current_level:be}}=this.data.member;return`//i0.hdslb.com/bfs/seed/jinkela/short/webui/user-profile/img/level_${ge?"h":be}.svg`}get userMedal(){return!this.medalVisible||this.isUp?null:Vc(this.data)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}handleClickTrack(ge){this.dispatchEvent(new CustomEvent("track",{detail:{position:ge}}))}handleNameClick(ge){this.dispatchEvent(new CustomEvent("jump-space",{detail:{uid:this.uid}})),ge.stopPropagation()}handleLevelClick(){window.open("https://www.bilibili.com/blackboard/help.html#/?qid=59e2cffdaa69465486497bb35a5ac295")}render(){return x$2`<div id="info">
      <slot></slot>
      <div id="user-name" data-user-profile-id="${this.uid}" @click=${this.handleNameClick}>
        <a
          href="${this.spaceLink}"
          class="${this.userNameRenderStyle?"name-render-style":""}"
          style="${this.userNameStyle?o$3(this.userNameStyle):""}"
          target="_blank"
          >${this.userName}</a
        >
      </div>
      ${this.levelVisible?x$2`<div id="user-level" @click=${this.handleLevelClick}>
            <img width="30" height="30" src="${this.levelImgSrc}" />
          </div>`:""}
      ${this.isUp?x$2`<div id="user-up">
            <img width="24" height="24" src="//i0.hdslb.com/bfs/seed/jinkela/short/webui/comments/img/icons/up_pb.svg" />
          </div>`:""}
    </div>`}};kt.styles=i$6`
    :host {
      --bili-comment-user-info-name-color: var(--text2);
      --bili-comment-user-info-height: 22px;
    }
    #info {
      display: inline-flex;
      align-items: center;
      height: var(--bili-comment-user-info-height);
    }
    #user-name {
      color: var(--bili-comment-user-info-name-color);
      font-size: var(--bili-comments-font-size-name, 13px);
      font-weight: 500;
    }
    #user-name a.name-render-style {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .name-render-style {
      background-image: var(--name-render-bg-light);
    }
    :host([dark]) .name-render-style {
      background-image: var(--name-render-bg-dark);
    }
    #user-level {
      margin-left: 5px;
      width: 30px;
      height: 30px;
    }
    #user-up {
      width: 24px;
      height: 24px;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  `;Lt([n$4()],kt.prototype,"data",2);Lt([n$4()],kt.prototype,"upMid",2);Lt([n$4({type:Boolean})],kt.prototype,"medalVisible",2);Lt([n$4({type:Boolean})],kt.prototype,"levelVisible",2);Lt([n$4({type:Boolean})],kt.prototype,"showVipColor",2);Lt([t$1()],kt.prototype,"uid",1);Lt([t$1()],kt.prototype,"isUp",1);Lt([t$1()],kt.prototype,"userName",1);Lt([t$1()],kt.prototype,"userNameRenderStyle",1);Lt([t$1()],kt.prototype,"userNameStyle",1);Lt([t$1()],kt.prototype,"spaceLink",1);Lt([t$1()],kt.prototype,"levelImgSrc",1);Lt([t$1()],kt.prototype,"userMedal",1);kt=Lt([e$5("bili-comment-user-info")],kt);var Uc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,Fn=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?qc(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Uc(be,$e,Ee),Ee};let Ai=class extends s$4{connectedCallback(){super.connectedCallback(),this.init()}init(){setTimeout(()=>{const ge=this.shadowRoot.querySelector("#name #name-text"),be=this.shadowRoot.querySelector("#name"),$e=ge.getBoundingClientRect().width;$e&&(be.style.width=`${$e}px`)})}render(){if(this.data.type===Cr.CONTRACTOR){const{style:ge,name:be}=this.data.contractor;return x$2`<div id="contractor" style=${ge?o$3({...ge}):""}>
        <div id="name" style=${be.style?o$3({...be.style}):""}><div id="name-text">${be.text}</div></div>
      </div>`}if(this.data.type===Cr.FANS){const{style:ge,name:be,level:$e,icon:ke}=this.data.fans;return x$2`<div
        id="fans"
        style=${ge?o$3({...ge}):""}
      >
        ${ke?x$2`<div
              id="icon"
              style=${o$3({width:`${ke!=null&&ke.second?20:13}px`})}
            >
              ${ke.first?x$2`<img
                    id="first-icon"
                    src=${utils$2.getBmgSrcNext(ke.first,{w:20,h:20,dpr:2})}
                  />`:""}
              ${ke.second?x$2`<img
                    id="second-icon"
                    src=${utils$2.getBmgSrcNext(ke.second,{w:20,h:20,dpr:2})}
                  />`:""}
            </div>`:""}
        <div id="name" style=${be.style?o$3({...be.style}):""}><div id="name-text">${be.text}</div></div>
        <div id="level" style=${$e.style?o$3({...$e.style}):""}><div id="level-text">${$e.text}</div></div>
      </div>`}return x$2`<div id="none"></div>`}};Ai.styles=i$6`
    #contractor {
      height: 12px;
      padding: 0 2px;
      border-radius: 2px;
      border-width: 0.5px;
      border-style: solid;
      box-sizing: border-box;
    }
    #contractor #name {
      height: 11px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #contractor #name #name-text {
      position: absolute;
      top: 50%;
      left: 50%;
      white-space: nowrap;
      transform: scale(0.5) translate(-50%, -50%);
      transform-origin: 0 0;
      font-size: 16px;
    }
    #fans {
      display: flex;
      align-items: center;
      height: 14px;
      padding-left: 5px;
      border-width: 0.5px;
      border-style: solid;
      border-radius: 10px;
      margin-left: 5px;
    }
    #fans #icon {
      display: flex;
      align-items: center;
      position: relative;
    }
    #fans #icon #first-icon {
      position: absolute;
      left: -8px;
      width: 20px;
      height: 20px;
    }
    #fans #icon #second-icon {
      position: absolute;
      right: 0;
      width: 8px;
      height: 11px;
    }
    #fans #name {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 100%;
      margin-right: 4px;
    }
    #fans #name #name-text {
      position: absolute;
      top: 50%;
      left: 50%;
      font-weight: 500;
      white-space: nowrap;
      transform: scale(0.5) translate(-50%, -50%);
      transform-origin: 0 0;
      font-size: 18px;
    }
    #fans #level {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 11.5px;
      height: 11.5px;
      border-radius: 50%;
      margin-right: 0.5px;
    }
    #fans #level #level-text {
      position: absolute;
      top: 52%;
      left: 50%;
      font-family: medalnum;
      font-weight: 500;
      white-space: nowrap;
      line-height: 1;
      transform: scale(0.5) translate(-50%, -43%);
      transform-origin: 0 0;
    }
  `;Fn([n$4({type:Object})],Ai.prototype,"data",2);Ai=Fn([e$5("bili-comment-user-medal")],Ai);var Hc=Object.defineProperty,Wc=Object.defineProperties,Gc=Object.getOwnPropertyDescriptors,Ho=Object.getOwnPropertySymbols,Jc=Object.prototype.hasOwnProperty,Kc=Object.prototype.propertyIsEnumerable,Wo=(ge,be,$e)=>be in ge?Hc(ge,be,{enumerable:!0,configurable:!0,writable:!0,value:$e}):ge[be]=$e,ze=(ge,be)=>{for(var $e in be||(be={}))Jc.call(be,$e)&&Wo(ge,$e,be[$e]);if(Ho)for(var $e of Ho(be))Kc.call(be,$e)&&Wo(ge,$e,be[$e]);return ge},si=(ge,be)=>Wc(ge,Gc(be)),Yc=(ge,be,$e)=>new Promise((ke,Ee)=>{var Ce=Ke=>{try{Se($e.next(Ke))}catch(Je){Ee(Je)}},Te=Ke=>{try{Se($e.throw(Ke))}catch(Je){Ee(Je)}},Se=Ke=>Ke.done?ke(Ke.value):Promise.resolve(Ke.value).then(Ce,Te);Se(($e=$e.apply(ge,be)).next())});class Zc{constructor(){this.target=null,this.events={}}addEventListener(be,$e){if(typeof window>"u"){console.warn("EventBridge is not supported in server side");return}this.events[be]?this.events[be].push($e):this.events[be]=[$e],this.target&&this.target.addEventListener(be,$e)}removeEventListener(be,$e){if(typeof window>"u"){console.warn("EventBridge is not supported in server side");return}if(this.target&&this.target.removeEventListener(be,$e),!this.events[be].length)return;const ke=this.events[be];this.events[be]=ke.filter(Ee=>Ee!==$e)}connect(be){this.target||!be||(this.target=be,Object.keys(this.events).forEach($e=>{this.events[$e].forEach(ke=>{this.addEventListener($e,ke)})}))}disconnect(){if(this.target){const be=this.target;Object.keys(this.events).forEach($e=>{this.events[$e].forEach(ke=>{be.removeEventListener($e,ke)})})}this.events={},this.target=null}}const Qc=()=>{};class Xc{constructor(be){this.el={current:null},this.parent=null,this.props={},this.methods={},this.emits=[],this.dispose=null,this.eventBridge=new Zc,be&&(this.props=be)}get engine(){return{core:"custom"}}addEventListener(be,$e){if(this.emits.length&&this.emits.indexOf(be)===-1){console.warn(`Event ${String(be)} is not defined in emits`);return}this.eventBridge.addEventListener(be,$e)}removeEventListener(be,$e){this.eventBridge.removeEventListener(be,$e)}dispatchAction(be){var $e;const{type:ke,args:Ee,callback:Ce}=be,Te=($e=this.methods)==null?void 0:$e[ke];if(typeof Te!="function")return console.warn(`Action ${String(ke)} is undefined or not a function`),Qc();const Se=Te(...Ee||[]);return Ce==null||Ce(Se),Se}update(be){const $e=!!this.el.current,ke=this.parent;return $e&&this.unmount(),this.props=be,$e&&(this.parent=ke,this.render()),this}mount(be,$e){return this.el.current?(console.warn("Component is already mounted"),this):this.parent?be===this.parent?this:(console.warn("Component maybe in mounting, please wait mounted, and then use update or unmount first"),this):(this.parent=be,$e?this.renderAsync():this.render(),this)}unmount(){var be;if((be=this.dispose)==null||be.call(this),this.eventBridge.disconnect(),this.props={},this.methods={},this.el.current){const $e=this.parent||this.el.current.parentElement;$e!==this.el.current&&$e!=null&&$e.contains(this.el.current)&&($e.removeChild(this.el.current),this.parent=null),this.el.current=null}}}const td=ge=>{const{name:be,engine:$e,emits:ke,render:Ee,renderAsync:Ce,renderToString:Te}=ge;return class extends Xc{constructor(Se){super(Se),this.name=be,this.emits=ke||[]}get engine(){return $e||super.engine}render(){try{if(!this.parent)return;this.dispose=Ee({ref:Se=>{this.el.current=Se,Se?this.eventBridge.connect(Se):this.eventBridge.disconnect()},props:this.props,parent:this.parent,expose:Se=>{this.methods=Se}})}catch(Se){console.error(Se)}}renderAsync(){return Yc(this,null,function*(){try{if(!this.parent)return!1;if(Ce){let Se,Ke=!1;const Je=new Promise(mt=>{Se=()=>{Ke||(Ke=!0,mt(!0))}});return this.dispose=yield Ce({parent:this.parent,ref:mt=>{this.el.current=mt,mt?(Se(),this.eventBridge.connect(mt)):this.eventBridge.disconnect()},props:this.props,expose:mt=>{this.methods=mt}}),yield Je}return this.render(),!!this.el.current}catch(Se){return console.error(Se),!1}})}renderToString(){try{return typeof Te!="function"?"":Te(this.props)}catch(Se){return console.error(Se),""}}}},ed=(ge,be)=>ge===be,$r=Symbol("solid-proxy"),Ri={equals:ed};let Un=Gn;const fe=1,Mi=2,qn={owned:null,cleanups:null,context:null,owner:null};var Et=null;let cr=null,X=null,_t=null,Xt=null,Qi=0;function fi(ge,be){const $e=X,ke=Et,Ee=ge.length===0,Ce=be===void 0?ke:be,Te=Ee?qn:{owned:null,cleanups:null,context:Ce?Ce.context:null,owner:Ce},Se=Ee?ge:()=>ge(()=>Fe(()=>Xi(Te)));Et=Te,X=null;try{return bi(Se,!0)}finally{X=$e,Et=ke}}function id$1(ge,be){be=be?Object.assign({},Ri,be):Ri;const $e={value:ge,observers:null,observerSlots:null,comparator:be.equals||void 0},ke=Ee=>(typeof Ee=="function"&&(Ee=Ee($e.value)),Wn($e,Ee));return[Hn.bind($e),ke]}function ct(ge,be,$e){const ke=uo(ge,be,!1,fe);gi(ke)}function rd(ge,be,$e){Un=ad;const ke=uo(ge,be,!1,fe);ke.user=!0,Xt?Xt.push(ke):gi(ke)}function ai(ge,be,$e){$e=$e?Object.assign({},Ri,$e):Ri;const ke=uo(ge,be,!0,0);return ke.observers=null,ke.observerSlots=null,ke.comparator=$e.equals||void 0,gi(ke),Hn.bind(ke)}function Fe(ge){if(X===null)return ge();const be=X;X=null;try{return ge()}finally{X=be}}function od(ge){rd(()=>Fe(ge))}function Hn(){if(this.sources&&this.state)if(this.state===fe)gi(this);else{const ge=_t;_t=null,bi(()=>Bi(this),!1),_t=ge}if(X){const ge=this.observers?this.observers.length:0;X.sources?(X.sources.push(this),X.sourceSlots.push(ge)):(X.sources=[this],X.sourceSlots=[ge]),this.observers?(this.observers.push(X),this.observerSlots.push(X.sources.length-1)):(this.observers=[X],this.observerSlots=[X.sources.length-1])}return this.value}function Wn(ge,be,$e){let ke=ge.value;return(!ge.comparator||!ge.comparator(ke,be))&&(ge.value=be,ge.observers&&ge.observers.length&&bi(()=>{for(let Ee=0;Ee<ge.observers.length;Ee+=1){const Ce=ge.observers[Ee],Te=cr&&cr.running;Te&&cr.disposed.has(Ce),(Te?!Ce.tState:!Ce.state)&&(Ce.pure?_t.push(Ce):Xt.push(Ce),Ce.observers&&Jn(Ce)),Te||(Ce.state=fe)}if(_t.length>1e6)throw _t=[],new Error},!1)),be}function gi(ge){if(!ge.fn)return;Xi(ge);const be=Qi;nd(ge,ge.value,be)}function nd(ge,be,$e){let ke;const Ee=Et,Ce=X;X=Et=ge;try{ke=ge.fn(be)}catch(Te){return ge.pure&&(ge.state=fe,ge.owned&&ge.owned.forEach(Xi),ge.owned=null),ge.updatedAt=$e+1,Kn(Te)}finally{X=Ce,Et=Ee}(!ge.updatedAt||ge.updatedAt<=$e)&&(ge.updatedAt!=null&&"observers"in ge?Wn(ge,ke):ge.value=ke,ge.updatedAt=$e)}function uo(ge,be,$e,ke=fe,Ee){const Ce={fn:ge,state:ke,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:be,owner:Et,context:Et?Et.context:null,pure:$e};return Et===null||Et!==qn&&(Et.owned?Et.owned.push(Ce):Et.owned=[Ce]),Ce}function ji(ge){if(ge.state===0)return;if(ge.state===Mi)return Bi(ge);if(ge.suspense&&Fe(ge.suspense.inFallback))return ge.suspense.effects.push(ge);const be=[ge];for(;(ge=ge.owner)&&(!ge.updatedAt||ge.updatedAt<Qi);)ge.state&&be.push(ge);for(let $e=be.length-1;$e>=0;$e--)if(ge=be[$e],ge.state===fe)gi(ge);else if(ge.state===Mi){const ke=_t;_t=null,bi(()=>Bi(ge,be[0]),!1),_t=ke}}function bi(ge,be){if(_t)return ge();let $e=!1;be||(_t=[]),Xt?$e=!0:Xt=[],Qi++;try{const ke=ge();return sd($e),ke}catch(ke){$e||(Xt=null),_t=null,Kn(ke)}}function sd(ge){if(_t&&(Gn(_t),_t=null),ge)return;const be=Xt;Xt=null,be.length&&bi(()=>Un(be),!1)}function Gn(ge){for(let be=0;be<ge.length;be++)ji(ge[be])}function ad(ge){let be,$e=0;for(be=0;be<ge.length;be++){const ke=ge[be];ke.user?ge[$e++]=ke:ji(ke)}for(be=0;be<$e;be++)ji(ge[be])}function Bi(ge,be){ge.state=0;for(let $e=0;$e<ge.sources.length;$e+=1){const ke=ge.sources[$e];if(ke.sources){const Ee=ke.state;Ee===fe?ke!==be&&(!ke.updatedAt||ke.updatedAt<Qi)&&ji(ke):Ee===Mi&&Bi(ke,be)}}}function Jn(ge){for(let be=0;be<ge.observers.length;be+=1){const $e=ge.observers[be];$e.state||($e.state=Mi,$e.pure?_t.push($e):Xt.push($e),$e.observers&&Jn($e))}}function Xi(ge){let be;if(ge.sources)for(;ge.sources.length;){const $e=ge.sources.pop(),ke=ge.sourceSlots.pop(),Ee=$e.observers;if(Ee&&Ee.length){const Ce=Ee.pop(),Te=$e.observerSlots.pop();ke<Ee.length&&(Ce.sourceSlots[Te]=ke,Ee[ke]=Ce,$e.observerSlots[ke]=Te)}}if(ge.owned){for(be=ge.owned.length-1;be>=0;be--)Xi(ge.owned[be]);ge.owned=null}if(ge.cleanups){for(be=ge.cleanups.length-1;be>=0;be--)ge.cleanups[be]();ge.cleanups=null}ge.state=0}function ld(ge){return ge instanceof Error?ge:new Error(typeof ge=="string"?ge:"Unknown error",{cause:ge})}function Kn(ge,be=Et){throw ld(ge)}function O(ge,be){return Fe(()=>ge(be||{}))}function ki(){return!0}const cd={get(ge,be,$e){return be===$r?$e:ge.get(be)},has(ge,be){return be===$r?!0:ge.has(be)},set:ki,deleteProperty:ki,getOwnPropertyDescriptor(ge,be){return{configurable:!0,enumerable:!0,get(){return ge.get(be)},set:ki,deleteProperty:ki}},ownKeys(ge){return ge.keys()}};function dr(ge){return(ge=typeof ge=="function"?ge():ge)?ge:{}}function dd(){for(let ge=0,be=this.length;ge<be;++ge){const $e=this[ge]();if($e!==void 0)return $e}}function vi(...ge){let be=!1;for(let Te=0;Te<ge.length;Te++){const Se=ge[Te];be=be||!!Se&&$r in Se,ge[Te]=typeof Se=="function"?(be=!0,ai(Se)):Se}if(be)return new Proxy({get(Te){for(let Se=ge.length-1;Se>=0;Se--){const Ke=dr(ge[Se])[Te];if(Ke!==void 0)return Ke}},has(Te){for(let Se=ge.length-1;Se>=0;Se--)if(Te in dr(ge[Se]))return!0;return!1},keys(){const Te=[];for(let Se=0;Se<ge.length;Se++)Te.push(...Object.keys(dr(ge[Se])));return[...new Set(Te)]}},cd);const $e={},ke=Object.create(null);for(let Te=ge.length-1;Te>=0;Te--){const Se=ge[Te];if(!Se)continue;const Ke=Object.getOwnPropertyNames(Se);for(let Je=Ke.length-1;Je>=0;Je--){const mt=Ke[Je];if(mt==="__proto__"||mt==="constructor")continue;const bt=Object.getOwnPropertyDescriptor(Se,mt);if(!ke[mt])ke[mt]=bt.get?{enumerable:!0,configurable:!0,get:dd.bind($e[mt]=[bt.get.bind(Se)])}:bt.value!==void 0?bt:void 0;else{const $t=$e[mt];$t&&(bt.get?$t.push(bt.get.bind(Se)):bt.value!==void 0&&$t.push(()=>bt.value))}}}const Ee={},Ce=Object.keys(ke);for(let Te=Ce.length-1;Te>=0;Te--){const Se=Ce[Te],Ke=ke[Se];Ke&&Ke.get?Object.defineProperty(Ee,Se,Ke):Ee[Se]=Ke?Ke.value:void 0}return Ee}const pd=ge=>`Stale read from <${ge}>.`;function nt(ge){const be=ge.keyed,$e=ai(()=>ge.when,void 0,{equals:(ke,Ee)=>be?ke===Ee:!ke==!Ee});return ai(()=>{const ke=$e();if(ke){const Ee=ge.children;return typeof Ee=="function"&&Ee.length>0?Fe(()=>Ee(be?ke:()=>{if(!Fe($e))throw pd("Show");return ge.when})):Ee}return ge.fallback},void 0,void 0)}function hd(ge,be,$e){let ke=$e.length,Ee=be.length,Ce=ke,Te=0,Se=0,Ke=be[Ee-1].nextSibling,Je=null;for(;Te<Ee||Se<Ce;){if(be[Te]===$e[Se]){Te++,Se++;continue}for(;be[Ee-1]===$e[Ce-1];)Ee--,Ce--;if(Ee===Te){const mt=Ce<ke?Se?$e[Se-1].nextSibling:$e[Ce-Se]:Ke;for(;Se<Ce;)ge.insertBefore($e[Se++],mt)}else if(Ce===Se)for(;Te<Ee;)(!Je||!Je.has(be[Te]))&&be[Te].remove(),Te++;else if(be[Te]===$e[Ce-1]&&$e[Se]===be[Ee-1]){const mt=be[--Ee].nextSibling;ge.insertBefore($e[Se++],be[Te++].nextSibling),ge.insertBefore($e[--Ce],mt),be[Ee]=$e[Ce]}else{if(!Je){Je=new Map;let bt=Se;for(;bt<Ce;)Je.set($e[bt],bt++)}const mt=Je.get(be[Te]);if(mt!=null)if(Se<mt&&mt<Ce){let bt=Te,$t=1,St;for(;++bt<Ee&&bt<Ce&&!((St=Je.get(be[bt]))==null||St!==mt+$t);)$t++;if($t>mt-Se){const It=be[Te];for(;Se<mt;)ge.insertBefore($e[Se++],It)}else ge.replaceChild($e[Se++],be[Te++])}else Te++;else be[Te++].remove()}}}function tr(ge,be,$e,ke={}){let Ee;return fi(Ce=>{Ee=Ce,be===document?ge():Z(be,ge(),be.firstChild?null:void 0,$e)},ke.owner),()=>{Ee(),be.textContent=""}}function re(ge,be,$e){let ke;const Ee=()=>{const Te=document.createElement("template");return Te.innerHTML=ge,Te.content.firstChild},Ce=()=>(ke||(ke=Ee())).cloneNode(!0);return Ce.cloneNode=Ce,Ce}function Er(ge,be,$e){$e==null?ge.removeAttribute(be):ge.setAttribute(be,$e)}function xt(ge,be){be==null?ge.removeAttribute("class"):ge.className=be}function Ue(ge,be,$e){if(!be)return $e?Er(ge,"style"):be;const ke=ge.style;if(typeof be=="string")return ke.cssText=be;typeof $e=="string"&&(ke.cssText=$e=void 0),$e||($e={}),be||(be={});let Ee,Ce;for(Ce in $e)be[Ce]==null&&ke.removeProperty(Ce),delete $e[Ce];for(Ce in be)Ee=be[Ce],Ee!==$e[Ce]&&(ke.setProperty(Ce,Ee),$e[Ce]=Ee);return $e}function Z(ge,be,$e,ke){if($e!==void 0&&!ke&&(ke=[]),typeof be!="function")return Ni(ge,be,ke,$e);ct(Ee=>Ni(ge,be(),Ee,$e),ke)}function Ni(ge,be,$e,ke,Ee){for(;typeof $e=="function";)$e=$e();if(be===$e)return $e;const Ce=typeof be,Te=ke!==void 0;if(ge=Te&&$e[0]&&$e[0].parentNode||ge,Ce==="string"||Ce==="number")if(Ce==="number"&&(be=be.toString()),Te){let Se=$e[0];Se&&Se.nodeType===3?Se.data!==be&&(Se.data=be):Se=document.createTextNode(be),$e=Ae(ge,$e,ke,Se)}else $e!==""&&typeof $e=="string"?$e=ge.firstChild.data=be:$e=ge.textContent=be;else if(be==null||Ce==="boolean")$e=Ae(ge,$e,ke);else{if(Ce==="function")return ct(()=>{let Se=be();for(;typeof Se=="function";)Se=Se();$e=Ni(ge,Se,$e,ke)}),()=>$e;if(Array.isArray(be)){const Se=[],Ke=$e&&Array.isArray($e);if(Tr(Se,be,$e,Ee))return ct(()=>$e=Ni(ge,Se,$e,ke,!0)),()=>$e;if(Se.length===0){if($e=Ae(ge,$e,ke),Te)return $e}else Ke?$e.length===0?Go(ge,Se,ke):hd(ge,$e,Se):($e&&Ae(ge),Go(ge,Se));$e=Se}else if(be.nodeType){if(Array.isArray($e)){if(Te)return $e=Ae(ge,$e,ke,be);Ae(ge,$e,null,be)}else $e==null||$e===""||!ge.firstChild?ge.appendChild(be):ge.replaceChild(be,ge.firstChild);$e=be}}return $e}function Tr(ge,be,$e,ke){let Ee=!1;for(let Ce=0,Te=be.length;Ce<Te;Ce++){let Se=be[Ce],Ke=$e&&$e[ge.length],Je;if(!(Se==null||Se===!0||Se===!1))if((Je=typeof Se)=="object"&&Se.nodeType)ge.push(Se);else if(Array.isArray(Se))Ee=Tr(ge,Se,Ke)||Ee;else if(Je==="function")if(ke){for(;typeof Se=="function";)Se=Se();Ee=Tr(ge,Array.isArray(Se)?Se:[Se],Array.isArray(Ke)?Ke:[Ke])||Ee}else ge.push(Se),Ee=!0;else{const mt=String(Se);Ke&&Ke.nodeType===3&&Ke.data===mt?ge.push(Ke):ge.push(document.createTextNode(mt))}}return Ee}function Go(ge,be,$e=null){for(let ke=0,Ee=be.length;ke<Ee;ke++)ge.insertBefore(be[ke],$e)}function Ae(ge,be,$e,ke){if($e===void 0)return ge.textContent="";const Ee=ke||document.createTextNode("");if(be.length){let Ce=!1;for(let Te=be.length-1;Te>=0;Te--){const Se=be[Te];if(Ee!==Se){const Ke=Se.parentNode===ge;!Ce&&!Te?Ke?ge.replaceChild(Ee,Se):ge.insertBefore(Ee,$e):Ke&&Se.remove()}else Ce=!0}}else ge.insertBefore(Ee,$e);return[Ee]}const ud="//s1.hdslb.com/bfs/seed/water-ui/engine/solid-core.umd.js",md=ge=>new Promise((be,$e)=>{const ke=()=>window.Solid&&window.SolidWeb?(be(window.Solid),!0):!1;if(typeof window>"u")return $e(new Error("not in browser"));if(ke())return;const Ee=document.createElement("script");Ee.onload=()=>{ke()||$e(new Error("load solid fail"))},Ee.onerror=Ce=>{$e(Ce)},Ee.src=ge}),fd=ge=>{if(ge instanceof HTMLElement)for(;ge.firstChild;)ge.removeChild(ge.firstChild)},er=ge=>{const{component:be,engine:$e,renderToString:ke}=ge,Ee=({ref:Te,props:Se,parent:Ke,expose:Je})=>{var mt,bt,$t,St,It,Bt;const Dt=($e==null?void 0:$e.core.createRoot)||((mt=window.Solid)==null?void 0:mt.createRoot)||(($t=(bt=window.SolidCore)==null?void 0:bt.Solid)==null?void 0:$t.createRoot),jt=($e==null?void 0:$e.core.render)||((St=window.SolidWeb)==null?void 0:St.render)||((Bt=(It=window.SolidCore)==null?void 0:It.SolidWeb)==null?void 0:Bt.render);if(!Dt)throw new Error("Solid engine API`createRoot` is not found");if(!jt)throw new Error("Solid engine API`render` is not found");return Dt(zt=>{const en=document.createElement("div");jt(()=>be(si(ze({},Se),{waterExpose:Je})),en);const qt=en.firstChild;return fd(Ke),Ke.appendChild(qt),Te(qt),zt})},Ce=($e==null?void 0:$e.src)||ud;return td({name:ge.name,engine:{core:"solid",version:($e==null?void 0:$e.version)||"",src:Ce},render:Ee,renderAsync:Te=>new Promise((Se,Ke)=>{md(Ce).then(()=>{Se(Ee(Te))}).catch(Ke)}),renderToString:ke})},gd="_star_14qf7_99",bd="_fans_14qf7_13",vd="_specialDynamicMedalPc_14qf7_30",yd="_specialDynamicMedal_14qf7_30",wd="_text_14qf7_40",xd="_background_14qf7_53",_d="_medalImg_14qf7_66",kd="_medalImgAnimation_14qf7_71",Cd="_jiggle_14qf7_1",$d="_textMask_14qf7_88",Ed="_light_14qf7_1",Wt={star:gd,fans:bd,specialDynamicMedalPc:vd,specialDynamicMedal:yd,text:wd,background:xd,medalImg:_d,medalImgAnimation:kd,jiggle:Cd,textMask:$d,light:Ed},Td="_backgroundImg_aob6i_1",Sd="_bfsImg_aob6i_6",Jo={backgroundImg:Td,bfsImg:Sd};function Id(ge){return typeof ge=="string"||ge instanceof String}function st(ge){return!isNaN(parseFloat(ge))&&isFinite(ge)}function Sr(){return typeof window<"u"}function Pd(ge){return Array.from(new Set(ge.map(function(be){return JSON.stringify(be)}))).map(function(be){return JSON.parse(be)})}var Od={webp:Sr(),fuzzyMatch:!0,whiteList:[],webpFallback:Sr()?"png":"",dpr:1,ratio:1},Ir={isSupported:!1};function Dd(){if(!Sr()){ve(!0);return}try{var ge=document.createElement("canvas");if(ge.getContext&&ge.getContext("2d"))try{ge.toDataURL("image/webp").indexOf("data:image/webp")===0?ve(!0):Ld()}catch{ve(!1)}else ve(!1)}catch{ve(!1)}}function Ld(){var ge=new Image;ge.onload=function(){ve(ge.height===2)},ge.onerror=function(){ve(ge.height===2)},ge.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}function ve(ge){Ir.isSupported=ge}Dd();var Ko=function(){function ge(be){this.debounceTime=1e3,this.timer=null,this.debounceTime=be}return ge.prototype.set=function(be){this.clear(),this.timer=setTimeout(be,this.debounceTime)},ge.prototype.clear=function(){this.timer&&clearTimeout(this.timer)},ge}(),Ad=function(){function ge(be){be===void 0&&(be=1e3),this.MIN_TO_COLLAPSE=2,this.warnings=[],this.errors=[],this.warningDebouncer=new Ko(be),this.errorDebouncer=new Ko(be)}return ge.prototype.pushWarning=function(be){var $e=this;console.groupCollapsed?(this.warnings.push(be),this.warningDebouncer.set(function(){return $e.printWarnings()})):console.warn("[BFS Warning]:",be)},ge.prototype.printWarnings=function(){var be=this.warnings.length>=this.MIN_TO_COLLAPSE;for(be&&console.groupCollapsed("[BFS Warning]: \u6709 "+this.warnings.length+" \u4E2A\u8B66\u544A\uFF0C\u70B9\u51FB\u67E5\u770B.");this.warnings.length>0;){var $e=this.warnings.shift();console.warn("[BFS Warning]:",$e)}be&&console.groupEnd()},ge.prototype.pushError=function(be){var $e=this;console.groupCollapsed?(this.errors.push(be),this.errorDebouncer.set(function(){return $e.printError()})):console.error("[BFS Error]:",be)},ge.prototype.printError=function(){var be=this.errors.length>=this.MIN_TO_COLLAPSE;for(be&&console.groupCollapsed("[BFS Error]: \u6709 "+this.errors.length+" \u4E2A\u9519\u8BEF\uFF0C\u70B9\u51FB\u67E5\u770B.");this.errors.length>0;){var $e=this.errors.shift();console.error("[BFS Error]:",$e)}be&&console.groupEnd()},ge}(),Yn=new Ad(1e3);function Xe(ge,be){be===void 0&&(be=!1),be&&Yn.pushWarning(ge)}function Vi(ge,be){be===void 0&&(be=!1),be&&Yn.pushError(ge)}var Yo=function(){function ge(be){be===void 0&&(be=[]),this.whiteList=[],this.whiteListQuickMap={byWidth:[],byHeight:[]},be.length&&this.set(be)}return ge.prototype.set=function(be){this.clear(),be.length>0&&(this.whiteList=be,this.setQuickMap())},ge.prototype.get=function(){return this.whiteList},ge.prototype.clear=function(){this.whiteList=[],this.initQuickMap()},ge.prototype.initQuickMap=function(){this.whiteListQuickMap={byWidth:[],byHeight:[]}},ge.prototype.setQuickMap=function(){var be=this;this.convertWhiteList().forEach(function($e){if(st($e.width)&&$e.width>0&&st($e.height)&&$e.height>0){var ke=$e.width/$e.height;be.whiteListQuickMap[ke]||(be.whiteListQuickMap[ke]=[]),be.whiteListQuickMap[ke].push($e)}else st($e.width)&&$e.width>0?(be.whiteListQuickMap.byWidth||(be.whiteListQuickMap.byWidth=[]),be.whiteListQuickMap.byWidth.push({width:$e.width,height:"auto"})):st($e.height)&&$e.height>0&&(be.whiteListQuickMap.byHeight||(be.whiteListQuickMap.byHeight=[]),be.whiteListQuickMap.byHeight.push({width:"auto",height:$e.height}))}),this.sortQuickMap()},ge.prototype.convertWhiteList=function(){var be=this.whiteList.map(function($e){var ke=$e&&$e.split?$e.split("|"):[],Ee=ke[0]&&st(ke[0].trim())&&parseInt(ke[0].trim())>0?parseInt(ke[0].trim()):"auto",Ce=ke[1]&&st(ke[1].trim())&&parseInt(ke[1].trim())>0?parseInt(ke[1].trim()):"auto";return{width:Ee,height:Ce}});return Pd(be)},ge.prototype.sortQuickMap=function(){var be=this;Object.keys(this.whiteListQuickMap).forEach(function($e){var ke=be.whiteListQuickMap[$e],Ee=ke.sort(function(Ce,Te){if(st(Ce.width)&&st(Te.width))return Ce.width-Te.width;if(st(Ce.height)&&st(Te.height))return Ce.height-Te.height});be.whiteListQuickMap[$e]=Ee})},ge.prototype.getMatchedSize=function(be,$e){var ke=null;if(this.whiteList.length===0)return be;var Ee={width:"auto",height:"auto"};st(be.width)&&be.width>0&&st(be.height)&&be.height>0?ke=be.width/be.height:st(be.width)&&be.width>0?ke="byWidth":st(be.height)&&be.height>0&&(ke="byHeight");var Ce=ke?this.whiteListQuickMap[ke]:[];if(Ce&&Ce.length>0){var Te=$e?this.fuzzyMatch(Ce,be):this.exactMatch(Ce,be);Te.length>0?(Ee=Te[0],(be.width!==Ee.width||be.height!==Ee.height)&&Xe(be.width+" x "+be.height+" \u5728\u767D\u540D\u5355\u4E2D\u4E0D\u5B58\u5728\uFF0C\u5411\u4E0A\u5339\u914D\u5F97\u5230 "+Ee.width+" x "+Ee.height)):Xe("\u627E\u4E0D\u5230\u4E0E "+be.width+" x "+be.height+" \u5339\u914D\u7684\u767D\u540D\u5355\u5C3A\u5BF8. \u5C06\u4F7F\u7528\u539F\u59CB\u5C3A\u5BF8.")}else Xe("\u627E\u4E0D\u5230\u4E0E "+be.width+" x "+be.height+" \u5339\u914D\u7684\u767D\u540D\u5355\u5C3A\u5BF8. \u5C06\u4F7F\u7528\u539F\u59CB\u5C3A\u5BF8.");return Ee},ge.prototype.fuzzyMatch=function(be,$e){return be.filter(function(ke){return st(ke.width)?ke.width>=$e.width:ke.height>=$e.height})},ge.prototype.exactMatch=function(be,$e){return be.filter(function(ke){return st(ke.width)?ke.width===$e.width:ke.height===$e.height})},ge}();function Zn(ge){return ge==="auto"&&typeof window<"u"&&window.devicePixelRatio?Number(window.devicePixelRatio)||1:Number(ge)>0?Number(ge):1}function Pr(ge){if(ge&&ge.split)return ge.split(".").pop().toLowerCase()}function Rd(ge){if(!ge||!Id(ge))return Vi("URL \u5E94\u8BE5\u4E3A string \u7C7B\u578B."),!1;var be=["jpg","jpeg","png","webp","gif"];return be.indexOf(Pr(ge))===-1?(Vi(ge+" \u4E0D\u662F\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F."),!1):(Pr(ge)==="webp"&&Xe(ge+" \u662Fwebp\u683C\u5F0F\u7684\u6587\u4EF6\u3002\u5EFA\u8BAE\u901A\u8FC7\u914D\u7F6E\u53C2\u6570 webp: true \u4F7F\u7528webp\u683C\u5F0F\uFF0C\u4EE5\u4FBF\u5728\u4E0D\u652F\u6301\u7684\u6D4F\u89C8\u5668\u4E0A\u964D\u7EA7."),ge.indexOf("/bfs/")===-1?(Xe(ge+" \u4E0D\u662F bfs \u8DEF\u5F84."),!1):!0)}function Md(ge){var be="";return ge&&ge.split&&(be=ge.split("?")[1]),be}function jd(ge){var be=ge;if(ge&&ge.slice&&ge.indexOf){var $e=ge.indexOf("?");$e>-1&&(be=ge.slice(0,$e))}return be}function Bd(ge,be){return be&&be!==""?ge+"?"+be:ge}function Or(ge){var be=ge;if(ge&&ge.slice&&ge.indexOf){var $e=ge.indexOf("@");$e>-1&&(be=ge.slice(0,$e))}return be}function Dr(ge,be,$e){return ge+=ge.indexOf("@")===-1?"@":"_",ge+=$e+be,ge}function Zo(ge){return ge.indexOf("@")>-1}function Nd(ge,be,$e,ke,Ee){var Ce=ke.getMatchedSize({width:be,height:$e},Ee.fuzzyMatch),Te=Ce.width,Se=Ce.height,Ke=Zn(Ee.dpr),Je=Ee.ratio||1;return st(Te)&&Te>0&&(ge=Dr(ge,"w",Math.floor(Te*Ke*Je))),st(Se)&&Se>0&&(ge=Dr(ge,"h",Math.floor(Se*Ke*Je))),ge}function Vd(ge,be){var $e=["e","p","c","rc","a","bl","q","o","s"];return $e.forEach(function(ke){be[ke]!==void 0&&(ge=Dr(ge,ke,be[ke]))}),ge}function zd(ge,be){return ge}function Fd(ge,be){var $e=Pr(Or(ge)),ke=$e;return be.webp&&($e!=="gif"||be.s)&&Ir.isSupported&&(ke="webp"),!Ir.isSupported&&ke==="webp"&&be.webpFallback&&(ke=be.webpFallback),!Zo(ge)&&$e!==ke?ge+="@."+ke:Zo(ge)&&(ge+="."+ke),ge}function Ud(ge){var be=Zn(ge.dpr),$e=Number(ge.ratio)||1,ke=be*$e;if(ke===1)return ge;if(ge.a)if(!/^\d+-\d+-\d+-\d+$/.test(ge.a))Vi(ge.a+"\u4E0D\u662F\u6709\u6548\u7684\u9AD8\u7EA7\u88C1\u526A\u53C2\u6570. \u8BF7\u53C2\u8003 https://info.bilibili.co/pages/viewpage.action?pageId=4545261 \u6B63\u786E\u8BBE\u7F6E");else{var Ee=ge.a.split("-");ge.a=Ee.map(function(Te){return Math.floor(Number(Te)*ke)}).join("-")}if(ge.rc)if(!/^\d+x\d+-[1-9]$/.test(ge.rc))Vi(ge.rc+"\u4E0D\u662F\u6709\u6548\u7684\u533A\u57DF\u88C1\u526A\u53C2\u6570. \u8BF7\u53C2\u8003 https://info.bilibili.co/pages/viewpage.action?pageId=4545261 \u6B63\u786E\u8BBE\u7F6E");else{var Ee=ge.rc.split("-"),Ce=Ee[0].split("x");ge.rc=Ce.map(function(Se){return Math.floor(Number(Se)*ke)}).join("x")+("-"+Ee[1])}return ge}var qd=function(){function ge(be){be===void 0&&(be={}),this.defaultOpts=Od,this.whiteList=new Yo,Object.assign(this.defaultOpts,be),this.setWhiteList(this.defaultOpts.whiteList)}return ge.prototype.getImageLink=function(be,$e,ke,Ee){$e===void 0&&($e="auto"),ke===void 0&&(ke="auto"),Ee===void 0&&(Ee={});var Ce=Object.assign({},this.defaultOpts,Ee),Te=Ee.whiteList?new Yo(Ee.whiteList):this.whiteList,Se=Md(be);return be=jd(be),Rd(Or(be))&&(Ud(Ce),be=Or(be),be=Nd(be,$e,ke,Te,Ce),be=zd(be,Ce.watermark),be=Vd(be,Ce),be=Fd(be,Ce)),Bd(be,Se)},ge.prototype.getWhiteList=function(){return this.whiteList.get()},ge.prototype.setWhiteList=function(be){be===void 0&&(be=[]),this.whiteList.set(be)},ge.prototype.clearWhiteList=function(){this.whiteList.clear()},ge}(),Hd=re("<div>"),Wd=re("<img>");const Gd=new qd,li=ge=>{const be=vi({fit:"cover"},ge),$e=()=>{if(!be.src)return"";if(/^data:/.test(be.src))return be.src;const Ee=be.src.replace("http://","https://");if(Ee.includes("gif")||Ee.includes(".svg"))return Ee;let Ce=typeof window>"u"?2:window.devicePixelRatio;return Ce=Ce>2?Ce:2,Gd.getImageLink(Ee,be.width?Math.ceil(be.width*Ce):"auto",be.height?Math.ceil(be.height*Ce):"auto",{webp:!0,webpFallback:"png"})},ke=()=>{const Ee=Ce=>typeof ge.pxHandle=="function"?ge.pxHandle(Ce):Ce+"px";return{width:be.width?Ee(be.width):"auto",height:be.height?Ee(be.height):"auto"}};return O(nt,{get when(){return be.src},get children(){return[O(nt,{get when(){return be.background},get children(){var Ee=Hd();return Z(Ee,()=>be.children),ct(Ce=>{var Te=`${Jo.backgroundImg} ${ge.class}`,Se=si(ze({},ke()),{"background-size":be.fit,"background-image":`url(${$e()})`});return Te!==Ce.e&&xt(Ee,Ce.e=Te),Ce.t=Ue(Ee,Se,Ce.t),Ce},{e:void 0,t:void 0}),Ee}}),O(nt,{get when(){return!be.background},get children(){var Ee=Wd();return ct(Ce=>{var Te=$e(),Se=`${Jo.bfsImg} ${ge.class}`,Ke=si(ze({},ke()),{"object-fit":be.fit}),Je=be.alt;return Te!==Ce.e&&Er(Ee,"src",Ce.e=Te),Se!==Ce.t&&xt(Ee,Ce.t=Se),Ce.a=Ue(Ee,Ke,Ce.a),Je!==Ce.o&&Er(Ee,"alt",Ce.o=Je),Ce},{e:void 0,t:void 0,a:void 0,o:void 0}),Ee}})]}})};var ye=(ge=>(ge[ge.NORMAL=1]="NORMAL",ge[ge.FAN=2]="FAN",ge[ge.SPECIAL_DYNAMIC_MEDAL=3]="SPECIAL_DYNAMIC_MEDAL",ge))(ye||{}),Qn=(ge=>(ge.PC="pc",ge.H5="h5",ge))(Qn||{});const Jd=({colors:ge,gradients:be},{width:$e,height:ke}={width:1,height:1})=>{if(!(ge!=null&&ge.length)||!(be!=null&&be.length))return"";const Ee=(Te,Se)=>Math.atan2(Se,Te)*180/Math.PI+90,Ce=ge.map((Te,Se)=>`${Te} ${be[Se]}%`).join(",");return`linear-gradient(${Ee($e,ke)}deg, ${Ce})`};function Qo(ge,be=0){return!ge||!/^#([0-9a-fA-F]{6})$/.test(ge)?"rgba(0,0,0,0)":"rgba("+parseInt("0x"+ge.slice(1,3))+","+parseInt("0x"+ge.slice(3,5))+","+parseInt("0x"+ge.slice(5,7))+","+be+")"}const Kd=(ge,be)=>{const $e=ze({},ge);return Object.keys(ge).forEach(ke=>{$e[ke]=be}),$e},Xn=()=>{const ge={medal:[0,1400],text:[750,1750],star:[1750,3e3]},[be,$e]=id$1(Kd(ge,!1));od(()=>{ke()});const ke=()=>{let Ee=null;Ee&&clearTimeout(Ee),Object.keys(ge).forEach(Ce=>{const[Te,Se]=ge[Ce];setTimeout(()=>{$e(si(ze({},be()),{[Ce]:!0}))},Te),setTimeout(()=>{$e(si(ze({},be()),{[Ce]:!1}))},Se)}),Ee=setTimeout(()=>{ke()},4e3)};return be},ts=ge=>(ge==null?void 0:ge.num_desc)||(ge!=null&&ge.number?`000000${ge==null?void 0:ge.number}`.substring(String(ge==null?void 0:ge.number).length):""),es=ge=>{const be=ge==null?void 0:ge.color_format;if(be){const $e=Jd(be||{});if($e)return{"background-image":$e,"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text","background-clip":"text"}}return{color:ge==null?void 0:ge.color}},is=(ge,be)=>(be==null?void 0:be.type)===1?ye.SPECIAL_DYNAMIC_MEDAL:ge!=null&&ge.is_fan?ye.FAN:ye.NORMAL,rs=ge=>ge==null?void 0:ge.effect_visual;var $i=re("<span>"),Yd=re("<div><div>"),Zd=re("<div>");let os;const Xo=ge=>{const be=Xn();return(()=>{var $e=Yd(),ke=$e.firstChild;return Z($e,O(li,{get src(){var Ee;return(Ee=ge.effect)==null?void 0:Ee.medal_image},width:40,height:40,fit:"contain",get class(){return`${Wt.medalImg} ${be().medal?Wt.medalImgAnimation:""}`},pxHandle:os}),null),Z($e,O(nt,{get when(){return ge.text},get children(){return[(()=>{var Ee=$i();return Z(Ee,()=>ge.text),ct(Ce=>{var Te=ge.textStyle,Se=Wt.text;return Ce.e=Ue(Ee,Te,Ce.e),Se!==Ce.t&&xt(Ee,Ce.t=Se),Ce},{e:void 0,t:void 0}),Ee})(),O(nt,{get when(){return be().text},get children(){var Ee=$i();return Z(Ee,()=>ge.text),ct(()=>xt(Ee,`${Wt.text} ${Wt.textMask}`)),Ee}}),O(nt,{get when(){return be().star},get children(){var Ee=$i();return ct(()=>xt(Ee,Wt.star)),Ee}})]}}),null),ct(Ee=>{var Ce,Te,Se=`${Wt.specialDynamicMedal}`,Ke=Wt.background,Je=`linear-gradient(270deg, ${Qo((Ce=ge.effect)==null?void 0:Ce.color_theme,.3)} 0%, ${Qo((Te=ge.effect)==null?void 0:Te.color_theme,0)} 100%)`;return Se!==Ee.e&&xt($e,Ee.e=Se),Ke!==Ee.t&&xt(ke,Ee.t=Ke),Je!==Ee.a&&((Ee.a=Je)!=null?ke.style.setProperty("background",Je):ke.style.removeProperty("background")),Ee},{e:void 0,t:void 0,a:void 0}),$e})()},Qd=ge=>O(nt,{get when(){return ge.uiType},get children(){return[O(nt,{get when(){return ge.uiType===ye.NORMAL},get children(){return O(li,{get src(){return ge.url},width:60,height:34,fit:"contain"})}}),O(nt,{get when(){return ge.uiType===ye.FAN},get children(){return O(li,{get src(){return ge.url},width:110,height:33,fit:"contain",background:!0,get class(){return Wt.fans},get children(){return O(nt,{get when(){return ge.text},get children(){var be=$i();return Z(be,()=>ge.text),ct($e=>Ue(be,ge.textStyle,$e)),be}})}})}}),O(nt,{get when(){return ge.uiType===ye.SPECIAL_DYNAMIC_MEDAL},get children(){return ai(()=>ge.scene==="pc")()?(()=>{var be=Zd();return Z(be,O(Xo,ge)),ct(()=>xt(be,Wt.specialDynamicMedalPc)),be})():O(Xo,ge)}})]}}),ns=ge=>(os=ge.pxHandle,O(Qd,vi(()=>({uiType:is(ge.fan,ge.image_group),url:ge.card_url,text:ts(ge.fan),textStyle:es(ge.fan),effect:rs(ge.image_group),scene:ge.scene})))),Xd=ge=>O(ns,vi(()=>({fan:ge.fan,card_url:ge.card_url,image_group:ge.image_group,scene:Qn.PC})));var Ze=(ge=>(ge[ge.NORMAL=1]="NORMAL",ge[ge.FAN=2]="FAN",ge[ge.SPECIAL_DYNAMIC_MEDAL=3]="SPECIAL_DYNAMIC_MEDAL",ge))(Ze||{}),ss=(ge=>(ge.PC="pc",ge.H5="h5",ge))(ss||{});const tp="_star_1aw9v_61",ep="_cardBg_1aw9v_13",ip="_fanTextPosition_1aw9v_21",rp="_fanText_1aw9v_21",op="_specialMedal_1aw9v_44",np="_medalImgAnimation_1aw9v_57",sp="_jiggle_1aw9v_1",ap="_fanTextWrap_1aw9v_67",lp="_textMask_1aw9v_71",cp="_light_1aw9v_1",dp="_specialMedalPc_1aw9v_86",pp="_medalImg_1aw9v_57",Nt={star:tp,cardBg:ep,fanTextPosition:ip,fanText:rp,specialMedal:op,medalImgAnimation:np,jiggle:sp,fanTextWrap:ap,textMask:lp,light:cp,specialMedalPc:dp,medalImg:pp};var as=re("<div><span></span><span>"),hp=re("<div><div><span></span><span>"),up=re("<span>"),Lr=re("<div>");let ls;const tn=ge=>{const be=Xn();return(()=>{var $e=Lr();return Z($e,O(li,{get src(){var ke;return(ke=ge.effect)==null?void 0:ke.medal_image},width:40,height:40,fit:"contain",get class(){return`${Nt.medalImg} ${be().medal?Nt.medalImgAnimation:""}`},pxHandle:ls}),null),Z($e,O(nt,{get when(){return ge.text},get children(){var ke=hp(),Ee=ke.firstChild,Ce=Ee.firstChild,Te=Ce.nextSibling;return Z(Ce,()=>ge.textPrefix),Z(Te,()=>ge.text),Z(ke,O(nt,{get when(){return be().text},get children(){var Se=as(),Ke=Se.firstChild,Je=Ke.nextSibling;return Z(Ke,()=>ge.textPrefix),Z(Je,()=>ge.text),ct(()=>xt(Se,`${Nt.fanText} ${Nt.textMask}`)),Se}}),null),ct(Se=>{var Ke=Nt.fanTextWrap,Je=ge.textStyle,mt=Nt.fanText;return Ke!==Se.e&&xt(ke,Se.e=Ke),Se.t=Ue(Ee,Je,Se.t),mt!==Se.a&&xt(Ee,Se.a=mt),Se},{e:void 0,t:void 0,a:void 0}),ke}}),null),Z($e,O(nt,{get when(){return be().star},get children(){var ke=up();return ct(()=>xt(ke,Nt.star)),ke}}),null),ct(()=>xt($e,`${Nt.specialMedal}`)),$e})()},mp=ge=>O(nt,{get when(){return ge.uiType},get children(){return[O(nt,{get when(){return ge.uiType===Ze.NORMAL||ge.uiType===Ze.FAN},get children(){var be=Lr();return Z(be,O(nt,{get when(){return ge.url},get children(){return O(li,{get src(){return ge.url},height:48})}}),null),Z(be,O(nt,{get when(){return ge.uiType===Ze.FAN&&ge.text},get children(){var $e=as(),ke=$e.firstChild,Ee=ke.nextSibling;return Z(ke,()=>ge.textPrefix),Z(Ee,()=>ge.text),ct(Ce=>{var Te=ge.textStyle,Se=`${Nt.fanText} ${Nt.fanTextPosition}`;return Ce.e=Ue($e,Te,Ce.e),Se!==Ce.t&&xt($e,Ce.t=Se),Ce},{e:void 0,t:void 0}),$e}}),null),ct(()=>xt(be,Nt.cardBg)),be}}),O(nt,{get when(){return ge.uiType===Ze.SPECIAL_DYNAMIC_MEDAL},get children(){return ai(()=>ge.scene==="pc")()?(()=>{var be=Lr();return Z(be,O(tn,ge)),ct(()=>xt(be,Nt.specialMedalPc)),be})():O(tn,ge)}})]}}),cs=ge=>(ls=ge.pxHandle,O(mp,vi(()=>{var be;return{uiType:is(ge.fan,ge.image_group),url:ge.image,text:ts(ge.fan),textStyle:es(ge.fan),effect:rs(ge.image_group),textPrefix:((be=ge.fan)==null?void 0:be.num_prefix)||"NO.",scene:ge.scene}}))),fp=ge=>{const be=()=>ge.card_bg||{};return O(cs,vi(()=>({fan:be().fan,image:be().image,image_group:be().image_group,scene:ss.PC})))};er({name:"CardForPC",component:Xd,engine:{core:{createRoot:fi,render:tr}}});const gp=er({name:"CardBgForPC",component:fp,engine:{core:{createRoot:fi,render:tr}}});er({name:"CardCommon",component:ns,engine:{core:{createRoot:fi,render:tr}}});er({name:"CardCommon",component:cs,engine:{core:{createRoot:fi,render:tr}}});var bp=Object.defineProperty,vp=Object.getOwnPropertyDescriptor,ds=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?vp(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&bp(be,$e,Ee),Ee};let zi=class extends s$4{constructor(){super(...arguments),this.card=null}clearData(){this.card&&(this.card.unmount(),this.card=null)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.initData(this.data)})}disconnectedCallback(){super.disconnectedCallback(),this.clearData()}updated(ge){ge.has("data")&&this.initData(this.data)}async initData(ge){this.card&&this.clearData(),this.card=new gp(ge).mount(this.shadowRoot.querySelector("#card"))}render(){return x$2`<div id="card"></div>`}};zi.styles=i$6`
    #card {
      width: 288px;
      height: 48px;
      position: relative;
      overflow: hidden;
      user-select: none;
    }
    #card div {
      height: 100%;
      max-width: 100%;
    }
    // 注意这里是通过copy产物，所以要锁版本
    @keyframes _jiggle_14qf7_1 {
      0% {
        transform: rotate(0);
      }
      14.3% {
        transform: rotate(11deg);
      }
      28.6% {
        transform: rotate(0);
      }
      35.7% {
        transform: rotate(-8deg);
      }
      46.4% {
        transform: rotate(0);
      }
      46.4% {
        transform: rotate(0);
      }
      53.6% {
        transform: rotate(3deg);
      }
      64.3% {
        transform: rotate(0);
      }
      71.4% {
        transform: rotate(-1deg);
      }
      82.1% {
        transform: rotate(0);
      }
      92.8% {
        transform: rotate(0.5deg);
      }
      to {
        transform: rotate(0);
      }
    }
    @keyframes _star_14qf7_99 {
      0% {
        background-position: 0 0;
      }
      to {
        background-position: -340px 0;
      }
    }
    ._star_14qf7_99 {
      display: inline-block;
      background-image: url(https://i0.hdslb.com/bfs/activity-plat/static/20240521/6fdde5f06d0b876f68573682fa59da66/a8DG0BREmj.png);
      background-size: 340px 20px;
      background-repeat: no-repeat;
      width: 20px;
      height: 20px;
      animation: _star_14qf7_99 0.85s steps(17);
    }
    @keyframes _light_14qf7_1 {
      0% {
        background-position: -100% 0;
      }
      to {
        background-position: 60px 0;
      }
    }
    ._fans_14qf7_13 {
      position: relative;
      user-select: none;
    }
    ._fans_14qf7_13 > span {
      color: #fff;
      font-family: fans-num, sans-serif !important;
      font-size: 12px;
      position: absolute;
      top: 11px;
      right: 39px;
      transform: scale(0.88);
      transform-origin: right center;
      line-height: 1;
    }
    ._specialDynamicMedalPc_14qf7_30 {
      display: inline-block;
      height: 33px;
      width: 110px;
      overflow: hidden;
    }
    ._specialDynamicMedalPc_14qf7_30 ._specialDynamicMedal_14qf7_30 {
      transform: scale(0.75);
      transform-origin: left top;
    }
    ._specialDynamicMedalPc_14qf7_30 ._specialDynamicMedal_14qf7_30 ._text_14qf7_40 {
      font-size: 14px;
      transform: scale(1);
    }
    ._specialDynamicMedal_14qf7_30 {
      width: 146px;
      height: 44px;
      position: relative;
      user-select: none;
    }
    ._specialDynamicMedal_14qf7_30 ._background_14qf7_53 {
      width: 108px;
      height: 30px;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      background-color: gray;
      position: absolute;
      top: 7px;
      right: 0;
      background: linear-gradient(270deg, #f8bb5b4d, #f8bb5b00);
    }
    ._specialDynamicMedal_14qf7_30 ._medalImg_14qf7_66 {
      position: absolute;
      right: 0;
      top: 2px;
    }
    ._specialDynamicMedal_14qf7_30 ._medalImg_14qf7_66._medalImgAnimation_14qf7_71 {
      animation: _jiggle_14qf7_1 1.4s linear;
    }
    ._specialDynamicMedal_14qf7_30 ._text_14qf7_40 {
      color: #fff;
      font-family: fans-num, sans-serif !important;
      font-size: 12px;
      line-height: 44px;
      position: absolute;
      top: 0;
      right: 40px;
      transform: scale(0.67);
      transform-origin: right center;
    }
    ._specialDynamicMedal_14qf7_30 ._textMask_14qf7_88 {
      background-image: url(https://i0.hdslb.com/bfs/activity-plat/static/20240522/6fdde5f06d0b876f68573682fa59da66/BalugIvNR2.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: -100% 0;
      animation: _light_14qf7_1 1.1s linear;
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }
    ._specialDynamicMedal_14qf7_30 ._star_14qf7_99 {
      position: absolute;
      top: 5px;
      right: 3px;
    }
    ._backgroundImg_aob6i_1 {
      background-position: center;
      background-repeat: no-repeat;
    }
    ._bfsImg_aob6i_6 {
      display: block;
    }
    @font-face {
      font-family: fans-num;
      src: url(https://activity.hdslb.com/blackboard/static/20240516/6fdde5f06d0b876f68573682fa59da66/v6u7v27Ucs.ttf);
    }
    @keyframes _jiggle_1aw9v_1 {
      0% {
        transform: rotate(0);
      }
      14.3% {
        transform: rotate(11deg);
      }
      28.6% {
        transform: rotate(0);
      }
      35.7% {
        transform: rotate(-8deg);
      }
      46.4% {
        transform: rotate(0);
      }
      46.4% {
        transform: rotate(0);
      }
      53.6% {
        transform: rotate(3deg);
      }
      64.3% {
        transform: rotate(0);
      }
      71.4% {
        transform: rotate(-1deg);
      }
      82.1% {
        transform: rotate(0);
      }
      92.8% {
        transform: rotate(0.5deg);
      }
      to {
        transform: rotate(0);
      }
    }
    @keyframes _star_1aw9v_61 {
      0% {
        background-position: 0 0;
      }
      to {
        background-position: -340px 0;
      }
    }
    ._star_1aw9v_61 {
      display: inline-block;
      background-image: url(https://i0.hdslb.com/bfs/activity-plat/static/20240521/6fdde5f06d0b876f68573682fa59da66/a8DG0BREmj.png);
      background-size: 340px 20px;
      background-repeat: no-repeat;
      width: 20px;
      height: 20px;
      animation: _star_1aw9v_61 0.85s steps(17);
    }
    @keyframes _light_1aw9v_1 {
      0% {
        background-position: -100% 0;
      }
      to {
        background-position: 42px 0;
      }
    }
    ._cardBg_1aw9v_13 {
      display: inline-block;
      position: relative;
      user-select: none;
      height: 48px;
      max-width: 288px;
      overflow: hidden;
    }
    ._cardBg_1aw9v_13 ._fanTextPosition_1aw9v_21 {
      position: absolute;
      right: 0;
      top: 0;
    }
    ._fanText_1aw9v_21 {
      height: 100%;
      font-size: 13px;
      line-height: 16px;
      transform: scale(0.7);
      transform-origin: center center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    ._fanText_1aw9v_21 > span {
      font-family: fans-num, sans-serif !important;
    }
    ._specialMedal_1aw9v_44 {
      user-select: none;
      display: flex;
      align-items: center;
      position: relative;
      height: 40px;
    }
    ._specialMedal_1aw9v_44 ._fanText_1aw9v_21 {
      font-size: 8px;
      line-height: 10px;
      transform: none;
    }
    ._specialMedal_1aw9v_44 ._medalImgAnimation_1aw9v_57 {
      animation: _jiggle_1aw9v_1 1.4s linear;
    }
    ._specialMedal_1aw9v_44 ._star_1aw9v_61 {
      position: absolute;
      top: 3px;
      left: 17px;
    }
    ._specialMedal_1aw9v_44 ._fanTextWrap_1aw9v_67 {
      position: relative;
    }
    ._specialMedal_1aw9v_44 ._textMask_1aw9v_71 {
      position: absolute;
      left: 0;
      top: 0;
      background-image: url(https://i0.hdslb.com/bfs/activity-plat/static/20240522/6fdde5f06d0b876f68573682fa59da66/BalugIvNR2.png);
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: -100% 0;
      animation: _light_1aw9v_1 1.1s linear;
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }
    ._specialMedalPc_1aw9v_86 {
      padding: 7px 12px;
      display: inline-block;
      height: 48px;
      max-width: 288px;
      overflow: hidden;
      box-sizing: border-box;
    }
    ._specialMedalPc_1aw9v_86 ._specialMedal_1aw9v_44 {
      height: 33px;
    }
    ._specialMedalPc_1aw9v_86 ._medalImg_1aw9v_57 {
      width: 33px !important;
      height: 33px !important;
    }
    ._specialMedalPc_1aw9v_86 ._star_1aw9v_61 {
      transform: scale(0.8);
      transform-origin: left top;
      left: 14px;
      top: 2px;
    }
    ._specialMedalPc_1aw9v_86 ._fanText_1aw9v_21 {
      font-size: 9px;
      line-height: 11px;
    }
  `;ds([n$4()],zi.prototype,"data",2);zi=ds([e$5("bili-comment-user-sailing-card")],zi);var yp=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,mo=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?wp(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&yp(be,$e,Ee),Ee};let ci=class extends s$4{get tag(){const ge={class:"",text:"\u6295\u7968"};switch(this.data.label_kind){case 1:ge.class="red",ge.text="\u7EA2\u65B9";break;case 2:ge.class="blue",ge.text="\u84DD\u65B9";break}return ge}render(){return x$2`<div id="option">
      <div id="tag" class="${this.tag.class}">${this.tag.text}</div>
      <div id="desc">${this.data.desc}</div>
    </div>`}};ci.styles=i$6`
    :host {
      display: flex;
    }
    #option {
      display: flex;
      align-items: center;
      font-size: 12px;
    }
    #tag {
      box-sizing: border-box;
      line-height: 16px;
      padding: 2px 6px;
      border-radius: 2px;
      margin-right: 4px;
      background-color: var(--graph_bg_regular);
      color: var(--text3);
    }
    #tag.red {
      background-color: var(--Pi1);
      color: var(--Pi5);
    }
    #tag.blue {
      background-color: var(--brand_blue_thin);
      color: var(--brand_blue);
    }
    #desc {
      color: var(--text2);
    }
  `;mo([n$4()],ci.prototype,"data",2);mo([t$1()],ci.prototype,"tag",1);ci=mo([e$5("bili-comment-vote-option")],ci);var xp=Object.defineProperty,_p=Object.getOwnPropertyDescriptor,ps=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?_p(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&xp(be,$e,Ee),Ee};let Fi=class extends s$4{handleClick(){pn(this.data.id)}render(){return x$2`
      <div id="card">
        <div id="head">
          <bili-icon icon="BDC/vote_line/2" size="40"></bili-icon>
        </div>
        <div id="content">
          <div id="info">
            <div id="title">${this.data.title}</div>
            <div id="desc">${this.data.cnt||0}人参与</div>
          </div>
        </div>
        <div id="action">
          <button @click=${this.handleClick}>投票</button>
        </div>
      </div>
    `}};Fi.styles=i$6`
    #card {
      width: 100%;
      height: 80px;
      display: flex;
      border: 0.5px solid var(--graph_bg_thick);
      border-radius: 4px;
      background-color: var(--bg1);
    }

    #head {
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      background-color: var(--brand_blue_thin);
      color: var(--brand_blue);
    }

    #content {
      flex: 1;
      overflow: hidden;
      display: flex;
      align-items: center;
      padding-left: 15px;
    }
    #info #title {
      font-size: 14px;
      color: var(--text1);
    }
    #info #desc {
      margin-top: 10px;
      font-size: 12px;
      color: var(--text3);
    }

    #action {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      width: 90px;
    }
    #action button {
      width: 54px;
      height: 28px;
      font-size: 13px;
      border-radius: 4px;
      text-align: center;
      line-height: 28px;
      color: var(--text_white);
      background-color: var(--brand_blue);
      cursor: pointer;
      outline: none;
      border: none;
    }
  `;ps([n$4({type:Object})],Fi.prototype,"data",2);Fi=ps([e$5("bili-comment-vote-renderer")],Fi);const kp=ge=>ot.request({url:"/x/v2/reply/detail",params:{...ge}}),Cp=ge=>ot.request({url:"/x/v2/reply/dialog/cursor",params:{...ge}});var $p=Object.defineProperty,Ep=Object.getOwnPropertyDescriptor,R=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Ep(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&$p(be,$e,Ee),Ee};let S=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.scrollContainer=null,this.user=null,this.params=Fo,this.oid="",this.type=0,this.root="",this.rootType="detail",this.spmInfo={spmid:"",from_spmid:"",from_outer_spmid:""},this.mode=3,this.paginationStr=JSON.stringify({offset:""}),this.seekRpid="",this.maxViewLimit=0,this.showViewMore=!1,this.eventBubbles=!1,this.showCheckText=!0,this.showSpinner=!0,this.showContinuations=!1,this.showContinueTrigger=!!window.IntersectionObserver,this.contentFeatures={videoTime:!0},this.rootReply=null,this.showEnd=!1,this.upMid=0,this.globalOptions=[],this.notice=null,this.vote=null,this.count=0,this.rootInputPlaceholder="\u52A0\u8F7D\u4E2D\u2026",this.inputDisabled=!1,this.rootInputUploadPicState=1,this.initUserDP=null,this.invisibleID={},this.loadedID={},this.isClosed=!1,this.isSelected=!1,this.limitMaskState=null,this.cmTopProtection=null,this.list=[],this.newItems=[],this.replyTarget=null,this.replyInputValue="",this.replyKeepActive=!1,this.commentBoxDisabledState=null,this.cmFromTrackId="",this.replyCommentBox=null,this.trackObserver=null}get replyInputPlaceholder(){var ge,be;return`\u56DE\u590D @${(be=(ge=this.replyTarget)==null?void 0:ge.member)==null?void 0:be.uname} : `}get voteOption(){return Zi(this.vote)}isVisibleItem(ge){return!this.invisibleID[ge]}isChildItem(ge){return`${ge.type},${ge.oid_str||ge.oid}`==`${this.type},${this.oid}`}initReplyCommentBox(){if(this.replyCommentBox)return;const ge=this.shadowRoot.querySelector("#reply-commentbox bili-comment-box");ge&&(this.replyCommentBox=ge)}connectedCallback(){super.connectedCallback(),this.initData();const ge=Ce=>{if(!this.isChildItem(Ce.value))return;const Te=Ki(W.REPLY,[...this.newItems,...this.list],Ce);this.updateInvisibleID(Te.map(Se=>Se.rpid_str))},be=Ce=>{Ce.root&&Ce.root.type!=="detail"||Ce.root&&(Ce.root.params.type!==this.type||Ce.root.params.oid!==this.oid)||this.isChildItem(Ce.value)&&(this.newItems=Yi(W.REPLY,this.newItems,Ce))},$e=()=>{this.replyCommentBox&&(this.replyKeepActive=!1,this.replyTarget=null,this.replyCommentBoxContainer.appendChild(this.replyCommentBox),this.replyCommentBox.style.setProperty("--bili-comment-box-display","none"))},ke=({target:Ce,root:Te,defaultInput:Se,mount:Ke})=>{if(Ce&&!(Te&&Te.type!=="detail")&&!(Te&&(Te.params.type!==this.type||Te.params.oid!==this.oid))&&(this.initReplyCommentBox(),!!this.replyCommentBox)){if(this.commentBoxDisabledState){if(this.commentBoxDisabledState.source==="unlogin"){U()?Ft("auth/requestLogin",{from:"comments"}):Mt({event:"selfDef.replyCardReplyClick"});return}b.show(this.commentBoxDisabledState.message||"\u8BC4\u8BBA\u529F\u80FD\u5DF2\u5173\u95ED");return}if(this.replyTarget&&Ce===this.replyTarget){$e();return}this.replyCommentBox.style.removeProperty("--bili-comment-box-display"),Se&&(this.replyInputValue=Se),this.replyTarget=Ce,Ke(this.replyCommentBox)}},Ee=({src:Ce,jumpUrl:Te})=>{let Se=!1;po({src:Ce,root:this,onClick:()=>{Te&&(Se=!0,window.open(Te))},onEnded:()=>{Te&&(Se||window.open(Te))}})};w.on("remove",ge),w.on("add",be),w.on("reply",ke),w.on("hideReply",$e),w.on("displayAlphaVideo",Ee),this.disposables.add(()=>w.off("remove",ge)),this.disposables.add(()=>w.off("add",be)),this.disposables.add(()=>w.off("reply",ke)),this.disposables.add(()=>w.off("displayAlphaVideo",Ee)),this.disposables.add(ho),setTimeout(()=>{this.addLoadEvent()}),this.initDependencies(),this.disposables.setTimeout(()=>{this.trackObserver=new ui({el:this,type:"show",value:{event:"main.comment.reply-page.all",data:{ordering:this.mode===3?"heat":"time",type:this.type,oid:this.oid,spmid:this.spmInfo.spmid,from_spmid:this.spmInfo.from_spmid,from_outer_spmid:this.spmInfo.from_outer_spmid,page:this.rootType}},modifiers:{raw:!0},durational:{repeat:!0},handler:(Ce,Te,Se)=>{Ce==="show"&&ce({type:"show",spm_info:Te},{msg:JSON.stringify(Se)})}}),this.disposables.add(()=>{setTimeout(()=>{this.trackObserver&&(this.trackObserver.dispose(),this.trackObserver=null)})})}),this.disposables.setTimeout(()=>{if(U()){const Ce=Hi("window/visibleChange",({data:Te})=>{var Se;(Se=this.trackObserver)==null||Se.reportShowDuration(Te)});this.disposables.add(()=>{Ce()})}})}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose(),this.replyCommentBox=null,this.maxViewLimit=0,this.eventBubbles=!1,this.unload()}updated(ge){ge.get("params")&&(this.unload(),this.initData())}initDependencies(){jr()}appendGlobalStyle(){const ge="bili-comments-global-style";if(document.querySelector("#"+ge))return;const be=document.createElement("style");be.id=ge,be.innerHTML=co,document.body.appendChild(be)}initData(){if(!this.shadowRoot||!this.params||typeof this.params!="string"||this.params===Fo)return;const[ge,be,$e]=this.params.split(",");if(!be||be==="0"||!$e||$e==="0"||!ge||ge==="0"||isNaN(Number(ge)))return;const ke=this.getAttribute("mode")||"3",Ee=this.getAttribute("seek-id")||"";let Ce=0;const Te=this.getAttribute("max-view-limit");typeof Te=="string"&&(Ce=Number(Te),isNaN(Ce)&&(Ce=0));const Se=this.getAttribute("disable-video-time");typeof Se=="string"&&Se!=="false"&&(this.contentFeatures.videoTime=!1);const Ke=this.getAttribute("event-bubbles");let Je;if(this.parentElement&&!this.scrollContainer&&this.parentElement!==document.body){const bt=getComputedStyle(this.parentElement);["auto","scroll"].includes(bt.overflowY)&&(Je=this.parentElement)}const mt=this.getAttribute("cm-from-track-id")||"";this.load({oid:be,root:$e,type:Number(ge),seekRpid:Ee,mode:Number(ke),maxViewLimit:Ce,cmFromTrackId:mt,eventBubbles:Ke!==null,scrollContainer:Je})}updateList(ge){this.list=ge}clearList(){this.newItems=[],this.list=[],this.invisibleID={},this.loadedID={},this.showEnd=!1,this.showContinuations=!1,this.paginationStr=JSON.stringify({offset:""})}unload(){this.user=null,this.notice=null,this.vote=null,this.cmTopProtection=null,this.mode=3,this.showViewMore=!1,this.clearList()}async reload(ge){return this.unload(),await this.load(ge)}async load(ge){try{if(ge){const{oid:be,root:$e,type:ke,mode:Ee,seekRpid:Ce,disableVideoTime:Te,maxViewLimit:Se,scrollContainer:Ke,spmInfo:Je,cmFromTrackId:mt}=ge;if(this.oid=String(be),this.root=String($e),typeof Te=="string"&&Te!=="false"&&(this.contentFeatures.videoTime=!1),this.type=ke,Ee&&[2,3].includes(Ee)&&(this.mode=Ee),Ce&&(this.seekRpid=Ce),mt?this.cmFromTrackId=mt:this.cmFromTrackId="",Se&&Se>0&&(this.maxViewLimit=Se),Ke)if(typeof Ke=="string"){const bt=document.querySelector(Ke);bt?this.scrollContainer=bt:console.warn("scrollContainer not found")}else this.scrollContainer=Ke;Je&&(this.spmInfo=Je),this.eventBubbles=ge.eventBubbles||!1}this.showSpinner=!0,this.initUser(),await Promise.all([this.initUpGlobalActions(),this.getList(),Yr()]),await this.requestUpdate(),this.showSpinner=!1,this.handleTriggerEvent("inited"),!this.showEnd&&this.list.length<10&&this.getList()}catch(be){return console.warn("bili comments load error",be),Promise.reject(be)}}async initUser(){try{this.initUserDP=Gi();const{code:ge,data:be}=await io();if(this.initUserDP.resolve(),this.initUserDP=null,ge===0&&be)return this.user=be,be}catch(ge){this.initUserDP&&(this.initUserDP.resolve(),this.initUserDP=null),console.warn("\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25",ge)}return null}async initUpGlobalActions(){try{const{code:ge,data:be}=await ro({oid:this.oid,type:this.type});if(ge!==0||!be)return;this.globalOptions=Br(be,U())}catch(ge){console.log("bili comments up interaction status error",ge)}}async addLoadEvent(){if(this.showContinueTrigger&&this.continueTrigger){const ge=new IntersectionObserver(async be=>{if(be[0].isIntersecting&&!this.showEnd){if(this.showSpinner||this.showContinuations)return;this.getList()}});ge.observe(this.continueTrigger),this.disposables.add(()=>{ge.unobserve(this.continueTrigger),ge.disconnect()})}else this.disposables.addEventListener(this.scrollContainer||window,"scroll",lo(100,()=>{if(!this.showSpinner&&!this.showContinuations)if(this.scrollContainer){const{scrollTop:ge,scrollHeight:be,clientHeight:$e}=this.scrollContainer;Math.ceil(ge)+$e*2>=be&&this.getList()}else{const{scrollTop:ge,scrollHeight:be}=document.documentElement,$e=window.innerHeight;Math.ceil(ge)+$e*2>=be&&this.getList()}}))}updateInvisibleID(ge){const be={...this.invisibleID};ge.forEach($e=>{be[$e]=!0}),this.invisibleID=be,this.requestUpdate()}handlePreviewImage(ge){w.emit("previewImage",ge)}handleJumpSpace(ge){w.emit("jumpSpace",ge)}handleJump(ge){w.emit("jump",ge)}async handleItemDelete(ge,be){var $e;const ke=[...be==="feed"?this.list:this.newItems][ge];if((($e=this.cmTopProtection)==null?void 0:$e.rpid)===(ke==null?void 0:ke.rpid_str)){ri({title:"\u5220\u9664\u8BC4\u8BBA",message:this.cmTopProtection.message,cancel:{text:"\u6211\u8981\u7533\u8BC9",click:Ce=>{Ce(),Ii({type:this.type,oid:this.oid,rpid:ke.rpid_str})}},confirm:{text:"\u6211\u77E5\u9053\u4E86",click:Ce=>{Ce()}}});return}let Ee="\u5220\u9664\u5931\u8D25";try{if(!await at$1({title:"\u5220\u9664\u8BC4\u8BBA",message:"\u5220\u9664\u8BC4\u8BBA\u540E\uFF0C\u8BC4\u8BBA\u4E0B\u6240\u6709\u56DE\u590D\u90FD\u4F1A\u88AB\u5220\u9664,\u662F\u5426\u7EE7\u7EED?"}))return;const{code:Ce}=await ei({oid:this.oid,type:this.type,rpid:ke.rpid_str});Ce===0&&(this.updateInvisibleID([ke.rpid_str]),Ee="\u5220\u9664\u6210\u529F")}catch(Ce){console.log("\u5220\u9664\u5931\u8D25",Ce)}finally{b.show(Ee)}}async handleRootReplyDelete(ge){var be;if(((be=this.cmTopProtection)==null?void 0:be.rpid)===(ge==null?void 0:ge.rpid_str)){ri({title:"\u5220\u9664\u8BC4\u8BBA",message:this.cmTopProtection.message,cancel:{text:"\u6211\u8981\u7533\u8BC9",click:ke=>{ke(),Ii({type:this.type,oid:this.oid,rpid:ge.rpid_str})}},confirm:{text:"\u6211\u77E5\u9053\u4E86",click:ke=>{ke()}}});return}let $e="\u5220\u9664\u5931\u8D25";try{if(!await at$1({title:"\u5220\u9664\u8BC4\u8BBA",message:"\u5220\u9664\u8BC4\u8BBA\u540E\uFF0C\u8BC4\u8BBA\u4E0B\u6240\u6709\u56DE\u590D\u90FD\u4F1A\u88AB\u5220\u9664,\u662F\u5426\u7EE7\u7EED?"}))return;const{code:ke}=await ei({oid:this.oid,type:this.type,rpid:ge.rpid_str});if(ke===0){this.updateInvisibleID([ge.rpid_str]),$e="\u5220\u9664\u6210\u529F";const Ee={type:Number(ge.type),oid:Number(ge.oid),oid_str:ge.oid,rpid:Number(ge.rpid),rpid_str:ge.rpid_str};w.emit("remove",{namespaces:[W.MAIN,W.REPLY],method:"findIndex",predicate:Ce=>Ce.rpid_str===ge.rpid_str,value:Ee})}}catch(ke){console.log("\u5220\u9664\u5931\u8D25",ke)}finally{b.show($e)}}async handleItemTop(ge,be,$e){const ke=[...be==="feed"?this.list:this.newItems][ge];let Ee=`${$e?"":"\u53D6\u6D88"}\u7F6E\u9876`;try{const{code:Ce}=await Ti({oid:this.oid,type:this.type,rpid:ke.rpid_str,action:$e?1:0});Ce===0?Ee+="\u6210\u529F":Ee+="\u5931\u8D25"}catch{Ee+="\u5931\u8D25"}finally{b.show(Ee)}}async handleRootReplyTop(ge,be){let $e=`${be?"":"\u53D6\u6D88"}\u7F6E\u9876`;try{const{code:ke}=await Ti({oid:this.oid,type:this.type,rpid:ge.rpid_str,action:be?1:0});ke===0?$e+="\u6210\u529F":$e+="\u5931\u8D25"}catch{$e+="\u5931\u8D25"}finally{b.show($e)}}async handleItemReport(ge){const{app_id:be,platform:$e}=Be("app/getAppInfo");Vr({...ge,ordering:this.mode===3?"heat":"time",appId:be,platform:$e})}async handleItemBlock(ge){try{if(!await at$1({title:"\u62C9\u9ED1\u7528\u6237",message:"\u52A0\u5165\u9ED1\u540D\u5355\u540E\uFF0C\u5C06\u81EA\u52A8\u89E3\u9664\u5173\u6CE8\u5173\u7CFB\u548C\u5BF9\u8BE5\u7528\u6237\u7684\u5408\u96C6\u8BA2\u9605\u5173\u7CFB\uFF0C\u7981\u6B62\u8BE5\u7528\u6237\u4E0E\u6211\u4E92\u52A8\u6216\u67E5\u770B\u6211\u7684\u7A7A\u95F4"}))return;const{code:be,message:$e}=await Mr({fid:ge.mid,act:5,re_src:15});if(be!==0){b.show($e||"\u62C9\u9ED1\u5931\u8D25");return}w.emit("remove",{namespaces:[W.MAIN,W.REPLY],method:"filter",predicate:ke=>{var Ee;return((Ee=ke.member)==null?void 0:Ee.mid)===ge.mid},value:{type:this.type,oid:this.oid,oid_str:this.oid}}),b.show("\u62C9\u9ED1\u6210\u529F")}catch{b.show("\u62C9\u9ED1\u5931\u8D25")}}handleViewDialog(ge){this.dispatchEvent(new CustomEvent("view-dialog",{detail:ge}))}updatePaginationStr(ge){this.paginationStr=JSON.stringify({offset:ge})}updateReplyItemExtra(ge,be,$e){ge.$extra||(ge.$extra={}),ge.$extra[be]=$e}async getList(){var ge,be;try{if(this.showEnd)return;this.list.length&&(this.showContinuations=!0);const $e=await kp({oid:this.oid,type:this.type,root:this.root,pagination_str:this.paginationStr,cm_from_track_id:this.cmFromTrackId||void 0});if(this.showSpinner&&this.initUserDP&&await this.initUserDP.promise,$e.code!==0||!$e.data){this.isClosed=so($e.code),this.commentBoxDisabledState=Ve({user:this.user,closed:this.isClosed,message:$e.message||"\u5565\u90FD\u6728\u6709~",disabled:!0}),this.showContinuations=!1,this.showSpinner&&(this.showEnd=!0);return}const{cursor:ke,control:Ee,upper:Ce}=$e.data;let Te=$e.data.root.replies||[];this.rootReply=$e.data.root;const Se=[];this.showSpinner&&(this.upMid=Ce.mid,this.count=(ke==null?void 0:ke.all_count)||0,Ee&&(this.rootInputPlaceholder=Ee.root_input_text||"",this.rootInputUploadPicState=Ee.upload_picture_icon_state,this.commentBoxDisabledState=Ve({user:this.user,closed:this.isClosed,message:Ee.root_input_text||"",disabled:Ee.input_disable})),this.isSelected=ao($e.data),this.limitMaskState=no({user:this.user,count:this.count}),this.limitMaskState&&(this.showEnd=!0,Te=Te.slice(0,this.limitMaskState.count))),(ge=ke==null?void 0:ke.pagination_reply)!=null&&ge.next_offset&&this.updatePaginationStr((be=ke==null?void 0:ke.pagination_reply)==null?void 0:be.next_offset);let Ke=!this.seekRpid;if(Te.forEach(Je=>{var mt;this.loadedID[Je.rpid_str]||Je.invisible!==!0&&(this.loadedID[Je.rpid_str]=!0,Ke===!1&&(Je.rpid_str===this.seekRpid?(this.updateReplyItemExtra(Je,"spotlight",!0),Ke=!0):(mt=Je.replies)!=null&&mt.length&&Je.replies.forEach(bt=>{Ke||bt.rpid_str===this.seekRpid&&(this.updateReplyItemExtra(bt,"spotlight",!0),Ke=!0)})),Se.push(Je))}),this.showContinuations=!1,this.showSpinner&&this.maxViewLimit>0){Se.length&&(Se.length>this.maxViewLimit&&(this.showViewMore=!0),this.updateList(this.list.concat(Se.slice(0,this.maxViewLimit)))),this.showEnd=!0;return}ke!=null&&ke.is_end&&(this.showEnd=!0),Se.length?this.updateList(this.list.concat(Se)):this.showEnd=!0}catch($e){console.log("getList error",$e),this.showContinuations=!1}}async handleGlobalAction(ge){var be,$e;if(!((be=ge.detail)!=null&&be.key)||!(($e=ge.detail)!=null&&$e.data))return;const ke=ge.detail.key,Ee=ge.detail.data.active,Ce=ge.detail.text;if(ke==="select"){try{if(!await at$1({title:Ce,message:Ee?"\u5F00\u542F\u7CBE\u9009\u8BC4\u8BBA\u540E\uFF0C\u6240\u6709\u8BC4\u8BBA\u90FD\u9700\u7ECF\u8FC7\u6211\u7684\u786E\u8BA4\u540E\u518D\u5411\u6240\u6709\u7528\u6237\u5C55\u793A\u3002\u53EF\u524D\u5F80PC\u7AEF\u521B\u4F5C\u4E2D\u5FC3":"\u505C\u6B62\u7CBE\u9009\u8BC4\u8BBA\u540E\uFF0C\u5982\u6709\u9057\u7559\u672A\u5904\u7406\u8BC4\u8BBA\uFF0C\u53EF\u524D\u5F80PC\u7AEF\u521B\u4F5C\u4E2D\u5FC3"}))return;const{code:Te,message:Se,data:Ke}=await je({oid:this.oid,type:this.type,action:Ee?Rt.SELECT:Rt.UNSELECT});if(Te!==0){b.show((Ke==null?void 0:Ke.action_toast)||Se||"\u64CD\u4F5C\u5931\u8D25");return}b.show((Ke==null?void 0:Ke.action_toast)||Se||Ce+"\u6210\u529F"),setTimeout(()=>{this.reload()},2e3)}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}if(ke==="close"){try{if(!await at$1({title:Ce,message:Ee?"\u6062\u590D\u8BC4\u8BBA\u540E\uFF0C\u7528\u6237\u53EF\u6B63\u5E38\u53D1\u8868\u8BC4\u8BBA\u3001\u53C2\u4E0E\u8BC4\u8BBA\u4E92\u52A8\uFF0C\u5DF2\u6709\u7684\u8BC4\u8BBA\u4E5F\u6062\u590D\u6B63\u5E38\u5C55\u793A":"\u5173\u95ED\u8BC4\u8BBA\u5C06\u4F1A\u7981\u6B62\u4EFB\u4F55\u4EBA\u5728\u6B64\u8BC4\u8BBA\u533A\u53D1\u8868\u5185\u5BB9\uFF0C\u4E14\u5DF2\u6709\u8BC4\u8BBA\u5728\u5173\u95ED\u671F\u95F4\u5C06\u4E0D\u53EF\u89C1"}))return;const{code:Te,message:Se,data:Ke}=await je({oid:this.oid,type:this.type,action:Ee?Rt.OPEN:Rt.CLOSE});if(Te!==0){b.show((Ke==null?void 0:Ke.action_toast)||Se||"\u64CD\u4F5C\u5931\u8D25");return}b.show((Ke==null?void 0:Ke.action_toast)||Se||Ce+"\u6210\u529F"),setTimeout(()=>{this.reload()},2e3)}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}if(ke==="close-danmaku"){try{if(!await at$1({title:Ce,message:Ee?"\u6062\u590D\u5F39\u5E55\u540E\uFF0C\u7528\u6237\u53EF\u6B63\u5E38\u53D1\u8868\u5F39\u5E55\u3001\u53C2\u4E0E\u5F39\u5E55\u4E92\u52A8\uFF0C\u5DF2\u6709\u7684\u5F39\u5E55\u4E5F\u6062\u590D\u6B63\u5E38\u5C55\u793A":"\u5173\u95ED\u8BC4\u8BBA\u5C06\u4F1A\u7981\u6B62\u4EFB\u4F55\u4EBA\u5728\u6B64\u8BC4\u8BBA\u533A\u53D1\u8868\u5185\u5BB9\uFF0C\u4E14\u5DF2\u6709\u8BC4\u8BBA\u5728\u5173\u95ED\u671F\u95F4\u5C06\u4E0D\u53EF\u89C1"}))return;const{code:Te,message:Se,data:Ke}=await Rr({aid:this.oid,state:Ee?0:1});if(Te!==0){b.show((Ke==null?void 0:Ke.action_toast)||Se||"\u64CD\u4F5C\u5931\u8D25");return}let Je=(Ke==null?void 0:Ke.action_toast)||Se;Je==="0"&&(Je="\u64CD\u4F5C\u6210\u529F"),b.show(Je||Ce+"\u6210\u529F")}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}}async handleModeChange(ge){this.mode=ge.detail,this.clearList(),this.showContinuations=!0,await this.getList()}handleNoticeClose(){oo(),this.notice=null}handleTriggerEvent(ge,be){if(this.eventBubbles){this.dispatchEvent(new CustomEvent(`bili-comments-${ge}`,{detail:be,bubbles:!0}));return}this.dispatchEvent(new CustomEvent(ge,{detail:be}))}handleLimitClick(){var ge;((ge=this.limitMaskState)==null?void 0:ge.type)==="unlogin"&&Mt({event:"selfDef.replyCardShowMore"})}handleViewMoreClick(){this.dispatchEvent(new CustomEvent("view-more"))}headerTemplate(){return x$2`
      <div id="header">
        <bili-comments-header-renderer
          .oid=${this.oid}
          .type=${this.type}
          .rootType=${this.rootType}
          .rootReply=${this.rootReply}
          .mode=${this.mode}
          .user=${this.user}
          .upMid=${this.upMid}
          .isClosed=${this.isClosed}
          .isSelected=${this.isSelected}
          .options=${this.globalOptions}
          .notice=${this.notice}
          .vote=${this.vote}
          .count=${this.count}
          .inputPlaceholder=${this.rootInputPlaceholder}
          .commentBoxDisabledState=${this.commentBoxDisabledState}
          .commentBoxTeleportDisabled=${this.maxViewLimit>0}
          .uploadPicState=${this.rootInputUploadPicState}
          .scrollContainer=${this.scrollContainer}
          @mode-change=${this.handleModeChange}
          @notice-close=${this.handleNoticeClose}
          @action=${this.handleGlobalAction}
          @jump=${ge=>this.handleJump(ge.detail)}
        ></bili-comments-header-renderer>
      </div>
    `}spinnerTemplate(){return x$2`<div id="spinner-container">
      <bili-comments-spinner></bili-comments-spinner>
    </div> `}renderItem(ge,be,$e){return x$2`
      <bili-comment-thread-renderer
        .user=${this.user}
        .upMid=${this.upMid}
        .root=${this.root}
        .data=${ge}
        .visible=${this.isVisibleItem(ge.rpid_str)}
        .oid=${this.oid}
        .type=${this.type}
        .rootType=${this.rootType}
        .cmFromTrackId=${this.cmFromTrackId}
        .mode=${this.mode}
        .idx=${be}
        .showCheckText=${this.showCheckText}
        .spmInfo=${this.spmInfo}
        .contentFeatures=${this.contentFeatures}
        @delete=${()=>this.handleItemDelete(be,$e)}
        @top=${ke=>this.handleItemTop(be,$e,ke.detail)}
        @report=${ke=>this.handleItemReport(ke.detail)}
        @block=${ke=>this.handleItemBlock(ke.detail)}
        @jump=${ke=>{ke.stopPropagation(),this.handleJump(ke.detail)}}
        @view-dialog=${ke=>this.handleViewDialog(ke.detail)}
        @preview-image=${ke=>this.handlePreviewImage(ke.detail)}
        @jump-space=${ke=>this.handleJumpSpace(ke.detail)}
        @mode-change=${this.handleModeChange}
        @notice-close=${this.handleNoticeClose}
        @action=${this.handleGlobalAction}
      ></bili-comment-thread-renderer>
    `}limitMaskTemplate(){return x$2`<div id="limit-mask">
      <div id="limit-mask-wall"></div>
    </div>`}contentTemplate(){var ge;return x$2`
      <div id="contents">
        <div class="root-reply">
          <bili-comment-thread-renderer
            .user=${this.user}
            .upMid=${this.upMid}
            .visible=${this.isVisibleItem(this.rootReply.rpid_str)}
            .data=${this.rootReply}
            .oid=${this.oid}
            .cmFromTrackId=${this.cmFromTrackId}
            .type=${this.type}
            .rootType=${this.rootType}
            .mode=${this.mode}
            .spmInfo=${this.spmInfo}
            .contentFeatures=${this.contentFeatures}
            style=${o$3({display:"block","background-color":"var(--bg1)","padding-bottom":"14px"})}
            @delete=${()=>this.handleRootReplyDelete(this.rootReply)}
            @block=${()=>{this.handleItemBlock({mid:this.rootReply.member.mid})}}
            @report=${be=>{var $e;return this.handleItemReport({member:{mid:this.rootReply.member.mid,uname:this.rootReply.member.uname},oid:this.oid,type:this.type,rpid:this.rootReply.rpid_str,hiddenJuryTips:(($e=be.detail)==null?void 0:$e.hiddenJuryTips)||!1})}}
            @top=${be=>this.handleRootReplyTop(this.rootReply,be.detail)}
            @jump=${be=>{be.stopPropagation(),this.handleJump(be.detail)}}
            @view-detail=${be=>this.handleViewDialog(be.detail)}
            @preview-image=${be=>this.handlePreviewImage(be.detail)}
            @jump-space=${be=>this.handleJumpSpace(be.detail)}
            @mode-change=${this.handleModeChange}
            @notice-close=${this.handleNoticeClose}
            @action=${this.handleGlobalAction}
          ></bili-comment-thread-renderer>
        </div>
        <div id="reply-num">相关回复共${((ge=this.rootReply)==null?void 0:ge.rcount)||0}条</div>
        <div id="new">
          ${c(this.newItems,be=>be.rpid_str,(be,$e)=>this.renderItem(be,$e,"new"))}
        </div>
        <div id="feed">
          ${c(this.list,be=>be.rpid_str,(be,$e)=>this.renderItem(be,$e,"feed"))}
        </div>
        ${this.limitMaskState?this.limitMaskTemplate():""}
        <div id="reply-commentbox">
          <bili-comment-box
            style="padding: 10px 0 ;--bili-comment-box-display: none;"
            .oid=${this.oid}
            .type=${this.type}
            .rootType=${this.rootType}
            .mode=${this.mode}
            .reply=${this.replyTarget}
            .inputValue=${this.replyInputValue}
            .voteOption=${this.voteOption}
            .keepActive=${this.replyKeepActive}
            .user=${this.user}
            .placeholder=${this.replyInputPlaceholder}
          ></bili-comment-box>
        </div>
      </div>
    `}continuationsTemplate(){return x$2`
      <div id="continuations">
        ${this.showContinuations?x$2`<div class="bottombar">正在加载…</div>`:""}
        ${this.showContinueTrigger?x$2`<div class="trigger"></div>`:""}
      </div>
    `}endTemplate(){return x$2`
      <div id="end">
        ${this.showViewMore?x$2`<div class="bottombar clickable" @click=${this.handleViewMoreClick}>查看更多评论</div>`:x$2`<div class="bottombar">没有更多评论</div>`}
      </div>
    `}render(){return x$2`
      ${x$2`${this.headerTemplate()}${this.showSpinner?this.spinnerTemplate():x$2`${this.contentTemplate()} ${this.showEnd?this.endTemplate():this.continuationsTemplate()}`}`}
    `}};S.styles=i$6`
    :host {
      display: block;
      background-color: var(--bg1);
      -webkit-font-smoothing: antialiased;
    }

    #spinner-container #title {
      margin: 0;
      color: var(--text1);
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 20px;
    }

    #contents {
      padding-top: 14px;
      position: relative;
    }

    .root-reply {
      padding-bottom: 14px;
      background-color: var(--bg2);
    }

    #reply-num {
      display: flex;
      height: 30px;
      align-items: end;
      font-size: 13px;
      color: var(--text2);
    }

    #reply-commentbox {
      display: none;
      height: 0;
      overflow: hidden;
      opacity: 0;
    }

    #limit-mask {
      width: 100%;
      position: absolute;
      bottom: -36px;
      left: 0;
    }

    #limit-mask-wall {
      width: 100%;
      height: 300px;
    }
    #limit-mask-tip {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 80px;
      width: calc(100% - 80px);
      height: 50px;
      border-radius: 6px;
      font-size: 14px;
      color: var(--brand_blue);
      background-color: var(--brand_blue_thin);
      transition: 0.2s;
      cursor: pointer;
    }

    .bottombar {
      width: 100%;
      margin-top: 20px;
      font-size: 13px;
      color: var(--text3);
      text-align: center;
      user-select: none;
    }
    .bottombar.clickable:hover {
      cursor: pointer;
      color: var(--brand_blue);
    }

    #continuations .trigger {
      width: 100%;
      height: 40px;
    }

    #end .bottombar {
      padding-bottom: 160px;
    }
  `;R([t$1()],S.prototype,"scrollContainer",2);R([t$1()],S.prototype,"user",2);R([n$4({attribute:"data-params"})],S.prototype,"params",2);R([t$1()],S.prototype,"spmInfo",2);R([t$1()],S.prototype,"mode",2);R([t$1()],S.prototype,"showSpinner",2);R([t$1()],S.prototype,"showContinuations",2);R([t$1()],S.prototype,"showContinueTrigger",2);R([t$1()],S.prototype,"contentFeatures",2);R([t$1()],S.prototype,"rootReply",2);R([t$1()],S.prototype,"showEnd",2);R([t$1()],S.prototype,"upMid",2);R([t$1()],S.prototype,"globalOptions",2);R([t$1()],S.prototype,"notice",2);R([t$1()],S.prototype,"vote",2);R([t$1()],S.prototype,"count",2);R([t$1()],S.prototype,"rootInputPlaceholder",2);R([t$1()],S.prototype,"inputDisabled",2);R([t$1()],S.prototype,"rootInputUploadPicState",2);R([t$1()],S.prototype,"limitMaskState",2);R([t$1()],S.prototype,"list",2);R([t$1()],S.prototype,"newItems",2);R([t$1()],S.prototype,"replyTarget",2);R([t$1()],S.prototype,"replyInputValue",2);R([t$1()],S.prototype,"replyKeepActive",2);R([t$1()],S.prototype,"replyInputPlaceholder",1);R([t$1()],S.prototype,"commentBoxDisabledState",2);R([t$1()],S.prototype,"voteOption",1);R([i$3("#continuations .trigger")],S.prototype,"continueTrigger",2);R([i$3("#reply-commentbox")],S.prototype,"replyCommentBoxContainer",2);S=R([e$5("bili-comments-reply-detail")],S);var Tp=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,N=(ge,be,$e,ke)=>{for(var Ee=ke>1?void 0:ke?Sp(be,$e):be,Ce=ge.length-1,Te;Ce>=0;Ce--)(Te=ge[Ce])&&(Ee=(ke?Te(be,$e,Ee):Te(Ee))||Ee);return ke&&Ee&&Tp(be,$e,Ee),Ee};let D=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.scrollContainer=null,this.user=null,this.params=Uo,this.oid="",this.type=0,this.rootType="dialog",this.root="",this.dialog="",this.spmInfo={spmid:"",from_spmid:"",from_outer_spmid:""},this.mode=3,this.paginationStr=JSON.stringify({offset:""}),this.seekRpid="",this.maxViewLimit=0,this.showViewMore=!1,this.eventBubbles=!1,this.showSpinner=!0,this.showContinuations=!1,this.showContinueTrigger=!!window.IntersectionObserver,this.contentFeatures={videoTime:!0},this.showEnd=!1,this.upMid=0,this.globalOptions=[],this.notice=null,this.vote=null,this.count=0,this.rootInputPlaceholder="\u52A0\u8F7D\u4E2D\u2026",this.inputDisabled=!1,this.rootInputUploadPicState=1,this.initUserDP=null,this.invisibleID={},this.loadedID={},this.isClosed=!1,this.isSelected=!1,this.limitMaskState=null,this.cmTopProtection=null,this.list=[],this.newItems=[],this.replyTarget=null,this.replyInputValue="",this.replyKeepActive=!1,this.commentBoxDisabledState=null,this.cmFromTrackId="",this.replyCommentBox=null,this.trackObserver=null}get replyInputPlaceholder(){var ge,be;return`\u56DE\u590D @${(be=(ge=this.replyTarget)==null?void 0:ge.member)==null?void 0:be.uname} : `}get voteOption(){return Zi(this.vote)}isVisibleItem(ge){return!this.invisibleID[ge]}isChildItem(ge){return`${ge.type},${ge.oid_str||ge.oid}`==`${this.type},${this.oid}`}initReplyCommentBox(){if(this.replyCommentBox)return;const ge=this.shadowRoot.querySelector("#reply-commentbox bili-comment-box");ge&&(this.replyCommentBox=ge)}connectedCallback(){super.connectedCallback(),this.initData();const ge=Ce=>{if(!this.isChildItem(Ce.value))return;const Te=Ki(W.REPLY,[...this.newItems,...this.list],Ce);this.updateInvisibleID(Te.map(Se=>Se.rpid_str))},be=Ce=>{Ce.root&&Ce.root.type!=="dialog"||Ce.root&&(Ce.root.params.type!==this.type||Ce.root.params.oid!==this.oid)||this.isChildItem(Ce.value)&&(this.newItems=Yi(W.REPLY,this.newItems,Ce))},$e=()=>{this.replyCommentBox&&(this.replyKeepActive=!1,this.replyTarget=null,this.replyCommentBoxContainer.appendChild(this.replyCommentBox),this.replyCommentBox.style.setProperty("--bili-comment-box-display","none"))},ke=({target:Ce,root:Te,defaultInput:Se,mount:Ke})=>{if(Ce&&!(Te&&Te.type!=="dialog")&&!(Te&&(Te.params.type!==this.type||Te.params.oid!==this.oid))&&(this.initReplyCommentBox(),!!this.replyCommentBox)){if(this.commentBoxDisabledState){if(this.commentBoxDisabledState.source==="unlogin"){U()?Ft("auth/requestLogin",{from:"comments"}):Mt({event:"selfDef.replyCardReplyClick"});return}b.show(this.commentBoxDisabledState.message||"\u8BC4\u8BBA\u529F\u80FD\u5DF2\u5173\u95ED");return}if(this.replyTarget&&Ce===this.replyTarget){$e();return}this.replyCommentBox.style.removeProperty("--bili-comment-box-display"),Se&&(this.replyInputValue=Se),this.replyTarget=Ce,Ke(this.replyCommentBox)}},Ee=({src:Ce,jumpUrl:Te})=>{let Se=!1;po({src:Ce,root:this,onClick:()=>{Te&&(Se=!0,window.open(Te))},onEnded:()=>{Te&&(Se||window.open(Te))}})};w.on("remove",ge),w.on("add",be),w.on("reply",ke),w.on("hideReply",$e),w.on("displayAlphaVideo",Ee),this.disposables.add(()=>w.off("remove",ge)),this.disposables.add(()=>w.off("add",be)),this.disposables.add(()=>w.off("reply",ke)),this.disposables.add(()=>w.off("displayAlphaVideo",Ee)),this.disposables.add(ho),setTimeout(()=>{this.addLoadEvent()}),this.initDependencies(),this.disposables.setTimeout(()=>{this.trackObserver=new ui({el:this,type:"show",value:{event:"main.comment.reply-page.all",data:{ordering:this.mode===3?"heat":"time",type:this.type,oid:this.oid,spmid:this.spmInfo.spmid,from_spmid:this.spmInfo.from_spmid,from_outer_spmid:this.spmInfo.from_outer_spmid,page:this.rootType}},modifiers:{raw:!0},durational:{repeat:!0},handler:(Ce,Te,Se)=>{Ce==="show"&&ce({type:"show",spm_info:Te},{msg:JSON.stringify(Se)})}}),this.disposables.add(()=>{setTimeout(()=>{this.trackObserver&&(this.trackObserver.dispose(),this.trackObserver=null)})})}),this.disposables.setTimeout(()=>{if(U()){const Ce=Hi("window/visibleChange",({data:Te})=>{var Se;(Se=this.trackObserver)==null||Se.reportShowDuration(Te)});this.disposables.add(()=>{Ce()})}})}disconnectedCallback(){this.disposables.dispose(),this.replyCommentBox=null,this.maxViewLimit=0,this.eventBubbles=!1,this.unload()}updated(ge){ge.get("params")&&(this.unload(),this.initData())}initDependencies(){jr()}appendGlobalStyle(){const ge="bili-comments-global-style";if(document.querySelector("#"+ge))return;const be=document.createElement("style");be.id=ge,be.innerHTML=co,document.body.appendChild(be)}initData(){if(!this.shadowRoot||!this.params||typeof this.params!="string"||this.params===Uo)return;const[ge,be,$e,ke]=this.params.split(",");if(!be||be==="0"||!ge||ge==="0"||isNaN(Number(ge))||!$e||$e==="0"||!ke||ke==="0")return;const Ee=this.getAttribute("mode")||"3",Ce=this.getAttribute("seek-id")||"";let Te=0;const Se=this.getAttribute("max-view-limit");typeof Se=="string"&&(Te=Number(Se),isNaN(Te)&&(Te=0));const Ke=this.getAttribute("disable-video-time");typeof Ke=="string"&&Ke!=="false"&&(this.contentFeatures.videoTime=!1);const Je=this.getAttribute("event-bubbles");let mt;if(this.parentElement&&!this.scrollContainer&&this.parentElement!==document.body){const $t=getComputedStyle(this.parentElement);["auto","scroll"].includes($t.overflowY)&&(mt=this.parentElement)}const bt=this.getAttribute("cm-from-track-id")||"";this.load({oid:be,root:$e,dialog:ke,type:Number(ge),seekRpid:Ce,mode:Number(Ee),cmFromTrackId:bt,maxViewLimit:Te,eventBubbles:Je!==null,scrollContainer:mt})}updateList(ge){this.list=ge}clearList(){this.newItems=[],this.list=[],this.invisibleID={},this.loadedID={},this.showEnd=!1,this.showContinuations=!1,this.paginationStr=JSON.stringify({offset:""})}unload(){this.user=null,this.notice=null,this.vote=null,this.cmTopProtection=null,this.mode=3,this.showViewMore=!1,this.clearList()}async reload(ge){return this.unload(),await this.load(ge)}async load(ge){try{if(ge){const{oid:be,root:$e,dialog:ke,type:Ee,mode:Ce,disableVideoTime:Te,seekRpid:Se,maxViewLimit:Ke,scrollContainer:Je,spmInfo:mt,cmFromTrackId:bt}=ge;if(this.oid=String(be),this.root=String($e),this.dialog=String(ke),typeof Te=="string"&&Te!=="false"&&(this.contentFeatures.videoTime=!1),this.type=Ee,Ce&&[2,3].includes(Ce)&&(this.mode=Ce),Se&&(this.seekRpid=Se),bt?this.cmFromTrackId=bt:this.cmFromTrackId="",Ke&&Ke>0&&(this.maxViewLimit=Ke),Je)if(typeof Je=="string"){const $t=document.querySelector(Je);$t?this.scrollContainer=$t:console.warn("scrollContainer not found")}else this.scrollContainer=Je;mt&&(this.spmInfo=mt),this.eventBubbles=ge.eventBubbles||!1}this.showSpinner=!0,this.initUser(),await Promise.all([this.initUpGlobalActions(),this.getList(),Yr()]),await this.requestUpdate(),this.showSpinner=!1,this.handleTriggerEvent("inited"),!this.showEnd&&this.list.length<10&&this.getList()}catch(be){return console.warn("bili comments load error",be),Promise.reject(be)}}async initUser(){try{this.initUserDP=Gi();const{code:ge,data:be}=await io();if(this.initUserDP.resolve(),this.initUserDP=null,ge===0&&be)return this.user=be,be}catch(ge){this.initUserDP&&(this.initUserDP.resolve(),this.initUserDP=null),console.warn("\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25",ge)}return null}async initUpGlobalActions(){try{const{code:ge,data:be}=await ro({oid:this.oid,type:this.type});if(ge!==0||!be)return;this.globalOptions=Br(be,U())}catch(ge){console.log("bili comments up interaction status error",ge)}}async addLoadEvent(){if(this.showContinueTrigger&&this.continueTrigger){const ge=new IntersectionObserver(async be=>{if(be[0].isIntersecting&&!this.showEnd){if(this.showSpinner||this.showContinuations)return;this.getList()}});ge.observe(this.continueTrigger),this.disposables.add(()=>{ge.unobserve(this.continueTrigger),ge.disconnect()})}else this.disposables.addEventListener(this.scrollContainer||window,"scroll",lo(100,()=>{if(!this.showSpinner&&!this.showContinuations)if(this.scrollContainer){const{scrollTop:ge,scrollHeight:be,clientHeight:$e}=this.scrollContainer;Math.ceil(ge)+$e*2>=be&&this.getList()}else{const{scrollTop:ge,scrollHeight:be}=document.documentElement,$e=window.innerHeight;Math.ceil(ge)+$e*2>=be&&this.getList()}}))}updateInvisibleID(ge){const be={...this.invisibleID};ge.forEach($e=>{be[$e]=!0}),this.invisibleID=be,this.requestUpdate()}handlePreviewImage(ge){w.emit("previewImage",ge)}handleJumpSpace(ge){w.emit("jumpSpace",ge)}handleJump(ge){w.emit("jump",ge)}async handleItemDelete(ge,be){var $e;const ke=[...be==="feed"?this.list:this.newItems][ge];if((($e=this.cmTopProtection)==null?void 0:$e.rpid)===(ke==null?void 0:ke.rpid_str)){ri({title:"\u5220\u9664\u8BC4\u8BBA",message:this.cmTopProtection.message,cancel:{text:"\u6211\u8981\u7533\u8BC9",click:Ce=>{Ce(),Ii({type:this.type,oid:this.oid,rpid:ke.rpid_str})}},confirm:{text:"\u6211\u77E5\u9053\u4E86",click:Ce=>{Ce()}}});return}let Ee="\u5220\u9664\u5931\u8D25";try{if(!await at$1({title:"\u5220\u9664\u8BC4\u8BBA",message:"\u5220\u9664\u8BC4\u8BBA\u540E\uFF0C\u8BC4\u8BBA\u4E0B\u6240\u6709\u56DE\u590D\u90FD\u4F1A\u88AB\u5220\u9664,\u662F\u5426\u7EE7\u7EED?"}))return;const{code:Ce}=await ei({oid:this.oid,type:this.type,rpid:ke.rpid_str});Ce===0&&(this.updateInvisibleID([ke.rpid_str]),Ee="\u5220\u9664\u6210\u529F")}catch(Ce){console.log("\u5220\u9664\u5931\u8D25",Ce)}finally{b.show(Ee)}}async handleItemTop(ge,be,$e){const ke=[...be==="feed"?this.list:this.newItems][ge];let Ee=`${$e?"":"\u53D6\u6D88"}\u7F6E\u9876`;try{const{code:Ce}=await Ti({oid:this.oid,type:this.type,rpid:ke.rpid_str,action:$e?1:0});Ce===0?Ee+="\u6210\u529F":Ee+="\u5931\u8D25"}catch{Ee+="\u5931\u8D25"}finally{b.show(Ee)}}async handleItemReport(ge){const{app_id:be,platform:$e}=Be("app/getAppInfo");Vr({...ge,ordering:this.mode===3?"heat":"time",appId:be,platform:$e})}async handleItemBlock(ge){try{if(!await at$1({title:"\u62C9\u9ED1\u7528\u6237",message:"\u52A0\u5165\u9ED1\u540D\u5355\u540E\uFF0C\u5C06\u81EA\u52A8\u89E3\u9664\u5173\u6CE8\u5173\u7CFB\u548C\u5BF9\u8BE5\u7528\u6237\u7684\u5408\u96C6\u8BA2\u9605\u5173\u7CFB\uFF0C\u7981\u6B62\u8BE5\u7528\u6237\u4E0E\u6211\u4E92\u52A8\u6216\u67E5\u770B\u6211\u7684\u7A7A\u95F4"}))return;const{code:be,message:$e}=await Mr({fid:ge.mid,act:5,re_src:15});if(be!==0){b.show($e||"\u62C9\u9ED1\u5931\u8D25");return}w.emit("remove",{namespaces:[W.MAIN,W.REPLY],method:"filter",predicate:ke=>{var Ee;return((Ee=ke.member)==null?void 0:Ee.mid)===ge.mid},value:{type:this.type,oid:this.oid,oid_str:this.oid}}),b.show("\u62C9\u9ED1\u6210\u529F")}catch{b.show("\u62C9\u9ED1\u5931\u8D25")}}updatePaginationStr(ge){this.paginationStr=JSON.stringify({offset:ge})}updateReplyItemExtra(ge,be,$e){ge.$extra||(ge.$extra={}),ge.$extra[be]=$e}async getList(){var ge,be;try{if(this.showEnd)return;this.list.length&&(this.showContinuations=!0);const $e=await Cp({oid:this.oid,type:this.type,root:this.root,dialog:this.dialog,size:20,pagination_str:this.paginationStr,cm_from_track_id:this.cmFromTrackId||void 0});if(this.showSpinner&&this.initUserDP&&await this.initUserDP.promise,$e.code!==0||!$e.data){this.isClosed=so($e.code),this.commentBoxDisabledState=Ve({user:this.user,closed:this.isClosed,message:$e.message||"\u5565\u90FD\u6728\u6709~",disabled:!0}),this.showContinuations=!1,this.showSpinner&&(this.showEnd=!0);return}const{cursor:ke,control:Ee,upper:Ce}=$e.data;let Te=$e.data.replies||[];const Se=[];this.showSpinner&&(this.upMid=Ce.mid,this.count=(ke==null?void 0:ke.all_count)||0,Ee&&(this.rootInputPlaceholder=Ee.root_input_text||"",this.rootInputUploadPicState=Ee.upload_picture_icon_state,this.commentBoxDisabledState=Ve({user:this.user,closed:this.isClosed,message:Ee.root_input_text||"",disabled:Ee.input_disable})),this.isSelected=ao($e.data),this.limitMaskState=no({user:this.user,count:this.count}),this.limitMaskState&&(this.showEnd=!0,Te=Te.slice(0,this.limitMaskState.count))),(ge=ke==null?void 0:ke.pagination_reply)!=null&&ge.next_offset&&this.updatePaginationStr((be=ke==null?void 0:ke.pagination_reply)==null?void 0:be.next_offset);let Ke=!this.seekRpid;if(Te.forEach(Je=>{var mt;this.loadedID[Je.rpid_str]||Je.invisible!==!0&&(this.loadedID[Je.rpid_str]=!0,Ke===!1&&(Je.rpid_str===this.seekRpid?(this.updateReplyItemExtra(Je,"spotlight",!0),Ke=!0):(mt=Je.replies)!=null&&mt.length&&Je.replies.forEach(bt=>{Ke||bt.rpid_str===this.seekRpid&&(this.updateReplyItemExtra(bt,"spotlight",!0),Ke=!0)})),Se.push(Je))}),this.showContinuations=!1,this.showSpinner&&this.maxViewLimit>0){Se.length&&(Se.length>this.maxViewLimit&&(this.showViewMore=!0),this.updateList(this.list.concat(Se.slice(0,this.maxViewLimit)))),this.showEnd=!0;return}ke!=null&&ke.is_end&&(this.showEnd=!0),Se.length?this.updateList(this.list.concat(Se)):this.showEnd=!0}catch($e){console.log("getList error",$e),this.showContinuations=!1}}async handleGlobalAction(ge){var be,$e;if(!((be=ge.detail)!=null&&be.key)||!(($e=ge.detail)!=null&&$e.data))return;const ke=ge.detail.key,Ee=ge.detail.data.active,Ce=ge.detail.text;if(ke==="select"){try{if(!await at$1({title:Ce,message:Ee?"\u5F00\u542F\u7CBE\u9009\u8BC4\u8BBA\u540E\uFF0C\u6240\u6709\u8BC4\u8BBA\u90FD\u9700\u7ECF\u8FC7\u6211\u7684\u786E\u8BA4\u540E\u518D\u5411\u6240\u6709\u7528\u6237\u5C55\u793A\u3002\u53EF\u524D\u5F80PC\u7AEF\u521B\u4F5C\u4E2D\u5FC3":"\u505C\u6B62\u7CBE\u9009\u8BC4\u8BBA\u540E\uFF0C\u5982\u6709\u9057\u7559\u672A\u5904\u7406\u8BC4\u8BBA\uFF0C\u53EF\u524D\u5F80PC\u7AEF\u521B\u4F5C\u4E2D\u5FC3"}))return;const{code:Te,message:Se,data:Ke}=await je({oid:this.oid,type:this.type,action:Ee?Rt.SELECT:Rt.UNSELECT});if(Te!==0){b.show((Ke==null?void 0:Ke.action_toast)||Se||"\u64CD\u4F5C\u5931\u8D25");return}b.show((Ke==null?void 0:Ke.action_toast)||Se||Ce+"\u6210\u529F"),setTimeout(()=>{this.reload()},2e3)}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}if(ke==="close"){try{if(!await at$1({title:Ce,message:Ee?"\u6062\u590D\u8BC4\u8BBA\u540E\uFF0C\u7528\u6237\u53EF\u6B63\u5E38\u53D1\u8868\u8BC4\u8BBA\u3001\u53C2\u4E0E\u8BC4\u8BBA\u4E92\u52A8\uFF0C\u5DF2\u6709\u7684\u8BC4\u8BBA\u4E5F\u6062\u590D\u6B63\u5E38\u5C55\u793A":"\u5173\u95ED\u8BC4\u8BBA\u5C06\u4F1A\u7981\u6B62\u4EFB\u4F55\u4EBA\u5728\u6B64\u8BC4\u8BBA\u533A\u53D1\u8868\u5185\u5BB9\uFF0C\u4E14\u5DF2\u6709\u8BC4\u8BBA\u5728\u5173\u95ED\u671F\u95F4\u5C06\u4E0D\u53EF\u89C1"}))return;const{code:Te,message:Se,data:Ke}=await je({oid:this.oid,type:this.type,action:Ee?Rt.OPEN:Rt.CLOSE});if(Te!==0){b.show((Ke==null?void 0:Ke.action_toast)||Se||"\u64CD\u4F5C\u5931\u8D25");return}b.show((Ke==null?void 0:Ke.action_toast)||Se||Ce+"\u6210\u529F"),setTimeout(()=>{this.reload()},2e3)}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}if(ke==="close-danmaku"){try{if(!await at$1({title:Ce,message:Ee?"\u6062\u590D\u5F39\u5E55\u540E\uFF0C\u7528\u6237\u53EF\u6B63\u5E38\u53D1\u8868\u5F39\u5E55\u3001\u53C2\u4E0E\u5F39\u5E55\u4E92\u52A8\uFF0C\u5DF2\u6709\u7684\u5F39\u5E55\u4E5F\u6062\u590D\u6B63\u5E38\u5C55\u793A":"\u5173\u95ED\u8BC4\u8BBA\u5C06\u4F1A\u7981\u6B62\u4EFB\u4F55\u4EBA\u5728\u6B64\u8BC4\u8BBA\u533A\u53D1\u8868\u5185\u5BB9\uFF0C\u4E14\u5DF2\u6709\u8BC4\u8BBA\u5728\u5173\u95ED\u671F\u95F4\u5C06\u4E0D\u53EF\u89C1"}))return;const{code:Te,message:Se,data:Ke}=await Rr({aid:this.oid,state:Ee?0:1});if(Te!==0){b.show((Ke==null?void 0:Ke.action_toast)||Se||"\u64CD\u4F5C\u5931\u8D25");return}let Je=(Ke==null?void 0:Ke.action_toast)||Se;Je==="0"&&(Je="\u64CD\u4F5C\u6210\u529F"),b.show(Je||Ce+"\u6210\u529F")}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}}async handleModeChange(ge){this.mode=ge.detail,this.clearList(),this.showContinuations=!0,await this.getList()}handleNoticeClose(){oo(),this.notice=null}handleTriggerEvent(ge,be){if(this.eventBubbles){this.dispatchEvent(new CustomEvent(`bili-comments-${ge}`,{detail:be,bubbles:!0}));return}this.dispatchEvent(new CustomEvent(ge,{detail:be}))}handleLimitClick(){var ge;((ge=this.limitMaskState)==null?void 0:ge.type)==="unlogin"&&Mt({event:"selfDef.replyCardShowMore"})}handleViewMoreClick(){this.dispatchEvent(new CustomEvent("view-more"))}spinnerTemplate(){return x$2`<div id="spinner-container">
      <bili-comments-spinner></bili-comments-spinner>
    </div> `}renderItem(ge,be,$e){return x$2`
      <bili-comment-thread-renderer
        .user=${this.user}
        .upMid=${this.upMid}
        .data=${ge}
        .visible=${this.isVisibleItem(ge.rpid_str)}
        .oid=${this.oid}
        .type=${this.type}
        .root=${this.root}
        .rootType=${this.rootType}
        .cmFromTrackId=${this.cmFromTrackId}
        .mode=${this.mode}
        .idx=${be}
        .spmInfo=${this.spmInfo}
        .contentFeatures=${this.contentFeatures}
        @delete=${()=>this.handleItemDelete(be,$e)}
        @top=${ke=>this.handleItemTop(be,$e,ke.detail)}
        @report=${ke=>this.handleItemReport(ke.detail)}
        @block=${ke=>this.handleItemBlock(ke.detail)}
        @jump=${ke=>{ke.stopPropagation(),this.handleJump(ke.detail)}}
        @preview-image=${ke=>this.handlePreviewImage(ke.detail)}
        @jump-space=${ke=>this.handleJumpSpace(ke.detail)}
        @mode-change=${this.handleModeChange}
        @notice-close=${this.handleNoticeClose}
        @action=${this.handleGlobalAction}
      ></bili-comment-thread-renderer>
    `}limitMaskTemplate(){return x$2`<div id="limit-mask">
      <div id="limit-mask-wall"></div>
    </div>`}contentTemplate(){return x$2`
      <div id="contents">
        <div id="new">
          ${c(this.newItems,ge=>ge.rpid_str,(ge,be)=>this.renderItem(ge,be,"new"))}
        </div>
        <div id="feed">
          ${c(this.list,ge=>ge.rpid_str,(ge,be)=>this.renderItem(ge,be,"feed"))}
        </div>
          ${this.limitMaskState?this.limitMaskTemplate():""}
          <div id="reply-commentbox">
            <bili-comment-box
              style="padding: 10px 0 ;--bili-comment-box-display: none;"
              .oid=${this.oid}
              .type=${this.type}
              .rootType=${this.rootType}
              .mode=${this.mode}
              .reply=${this.replyTarget}
              .inputValue=${this.replyInputValue}
              .voteOption=${this.voteOption}
              .keepActive=${this.replyKeepActive}
              .user=${this.user}
              .placeholder=${this.replyInputPlaceholder}
            ></bili-comment-box>
          </div>
        </div>
      </div>
    `}continuationsTemplate(){return x$2`
      <div id="continuations">
        ${this.showContinuations?x$2`<div class="bottombar">正在加载…</div>`:""}
        ${this.showContinueTrigger?x$2`<div class="trigger"></div>`:""}
      </div>
    `}endTemplate(){return x$2`
      <div id="end">
        ${this.showViewMore?x$2`<div class="bottombar clickable" @click=${this.handleViewMoreClick}>查看更多评论</div>`:x$2`<div class="bottombar">没有更多评论</div>`}
      </div>
    `}render(){return x$2`
      ${this.showSpinner?this.spinnerTemplate():x$2`${this.contentTemplate()}${this.showEnd?this.endTemplate():this.continuationsTemplate()}`}
    `}};D.styles=i$6`
    :host {
      display: block;
      background-color: var(--bg1);
      -webkit-font-smoothing: antialiased;
    }

    #spinner-container #title {
      margin: 0;
      color: var(--text1);
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 20px;
    }

    #contents {
      padding-top: 14px;
      position: relative;
    }

    #root-reply {
      padding-bottom: 10px;
      background-color: var(--bg2);
    }

    #reply-num {
      display: flex;
      height: 30px;
      align-items: end;
      font-size: 13px;
      color: var(--text2);
    }

    #reply-commentbox {
      display: none;
      height: 0;
      overflow: hidden;
      opacity: 0;
    }

    #limit-mask {
      width: 100%;
      position: absolute;
      bottom: -36px;
      left: 0;
    }

    #limit-mask-wall {
      width: 100%;
      height: 300px;
    }
    #limit-mask-tip {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 80px;
      width: calc(100% - 80px);
      height: 50px;
      border-radius: 6px;
      font-size: 14px;
      color: var(--brand_blue);
      background-color: var(--brand_blue_thin);
      transition: 0.2s;
      cursor: pointer;
    }

    .bottombar {
      width: 100%;
      margin-top: 20px;
      font-size: 13px;
      color: var(--text3);
      text-align: center;
      user-select: none;
    }
    .bottombar.clickable:hover {
      cursor: pointer;
      color: var(--brand_blue);
    }

    #continuations .trigger {
      width: 100%;
      height: 40px;
    }

    #end .bottombar {
      padding-bottom: 160px;
    }
  `;N([t$1()],D.prototype,"scrollContainer",2);N([t$1()],D.prototype,"user",2);N([n$4({attribute:"data-params"})],D.prototype,"params",2);N([t$1()],D.prototype,"spmInfo",2);N([t$1()],D.prototype,"mode",2);N([t$1()],D.prototype,"showSpinner",2);N([t$1()],D.prototype,"showContinuations",2);N([t$1()],D.prototype,"showContinueTrigger",2);N([t$1()],D.prototype,"contentFeatures",2);N([t$1()],D.prototype,"showEnd",2);N([t$1()],D.prototype,"upMid",2);N([t$1()],D.prototype,"globalOptions",2);N([t$1()],D.prototype,"notice",2);N([t$1()],D.prototype,"vote",2);N([t$1()],D.prototype,"count",2);N([t$1()],D.prototype,"rootInputPlaceholder",2);N([t$1()],D.prototype,"inputDisabled",2);N([t$1()],D.prototype,"rootInputUploadPicState",2);N([t$1()],D.prototype,"limitMaskState",2);N([t$1()],D.prototype,"list",2);N([t$1()],D.prototype,"newItems",2);N([t$1()],D.prototype,"replyTarget",2);N([t$1()],D.prototype,"replyInputValue",2);N([t$1()],D.prototype,"replyKeepActive",2);N([t$1()],D.prototype,"replyInputPlaceholder",1);N([t$1()],D.prototype,"commentBoxDisabledState",2);N([t$1()],D.prototype,"voteOption",1);N([i$3("#continuations .trigger")],D.prototype,"continueTrigger",2);N([i$3("#reply-commentbox")],D.prototype,"replyCommentBoxContainer",2);D=N([e$5("bili-comments-reply-dialog")],D);const _TrackReportManager=class{constructor(){this.isListenerAdded=!1,this.globalHandler=ge=>{const be=ge.detail,$e=be==null?void 0:be.event;allCustomReport({type:be==null?void 0:be.type,spm_info:$e},{msg:JSON.stringify(be==null?void 0:be.data)})}}static getInstance(){return _TrackReportManager.instance||(_TrackReportManager.instance=new _TrackReportManager),_TrackReportManager.instance}addEventListner(){this.isListenerAdded||(document.body.addEventListener("trackReport",this.globalHandler),this.isListenerAdded=!0)}removeEventListner(){this.isListenerAdded&&(document.body.removeEventListener("trackReport",this.globalHandler),this.isListenerAdded=!1)}};let TrackReportManager=_TrackReportManager;TrackReportManager.instance=null;const judgeMainWindowOpen=ge=>{const be=/space\.bilibili\.com\/(\d+)/,$e=/https:\/\/search\.bilibili\.com\/.*[?&]keyword=([^&#]*)/;if(ge.match(be)){const ke=ge.match(be)[1];return{page:"SpacePage",meta:{mid:ke.toString()}}}if(ge.match($e)){const ke=ge.match($e)[1],Ee=decodeURIComponent(ke);return{page:"SearchPage",meta:{keyword:Ee}}}return null},judgePlayerWindowOpen=async ge=>{var Je,mt,bt,$t,St,It,Bt,Dt;const be=new RegExp("av([0-9]+)","i"),$e=new RegExp("bv1[1-9A-NP-Za-km-z]{9}","ugi"),ke="([/.$*?~=#!%@&A-Za-z0-9_-]*)",Ee=new RegExp("ep([0-9]+)","i"),Ce=new RegExp("ss([0-9]+)","i"),Te=new RegExp(`((https?:)?//)?(((uat-)?www\\.bilibili\\.com)|(b23\\.tv|bili22\\.cn|bili33\\.cn|bili23\\.cn|bili2233\\.cn))(/video)?/((av[0-9]+)|((BV)1[1-9A-NP-Za-km-z]{9}))($|/|)${ke}`,"ugi"),Se=new RegExp(`((https?:)?//)?(((uat-)?www\\.bilibili\\.com/bangumi/(play/|media/)|(b23\\.tv|bili22\\.cn|bili33\\.cn|bili23\\.cn|bili2233.cn)/)(ss|ep)[0-9]+)($|/|)${ke}`,"ugi"),Ke=/((https?:)?\/\/)?(b23\.tv|bili22\.cn|bili33\.cn|bili23\.cn|bili2233\.cn)\/\w+/i;if(ge.match(Te)){const jt=ge.match(Te),zt=(Je=jt[0])==null?void 0:Je.match($e);if(zt!=null&&zt[0]){const qt=zt[0];return{type:"ugc",bvid:qt}}const en=(mt=jt[0])==null?void 0:mt.match(be);if(en!=null&&en[0])return{type:"ugc",aid:Number(en[1])}}else if(ge.match(Se)){const jt=ge.match(Se),zt=(bt=jt[0])==null?void 0:bt.match(Ce);if(zt!=null&&zt[0])return{type:"ogv",seasonId:Number(zt[1])};const en=($t=jt[0])==null?void 0:$t.match(Ee);if(en!=null&&en[0])return{type:"ogv",epid:Number(en[1])}}else if(ge.match(Ke))try{const jt=await fetch(ge);if(jt.url){const zt=jt.url;if(zt.match(Te)){const en=zt.match(Te),qt=(St=en[0])==null?void 0:St.match($e);if(qt!=null&&qt[0]){const yo=qt[0];return{type:"ugc",bvid:yo,fromSpmid:"main.comment.0.0.pv"}}const vo=(It=en[0])==null?void 0:It.match(be);if(vo!=null&&vo[0])return{type:"ugc",aid:Number(vo[1]),fromSpmid:"main.comment.0.0.pv"}}if(zt.match(Se)){const en=zt.match(Se),qt=(Bt=en[0])==null?void 0:Bt.match(Ce);if(qt!=null&&qt[0])return{type:"ogv",seasonId:Number(qt[1]),fromSpmid:"main.comment.0.0.pv"};const vo=(Dt=en[0])==null?void 0:Dt.match(Ee);if(vo!=null&&vo[0])return{type:"ogv",epid:Number(vo[1]),fromSpmid:"main.comment.0.0.pv"}}}}catch{}return null},useNewCommentModule=(ge="player")=>{const be=ref(null),$e=ref(null),ke=ref(null),Ee=ref(null),Ce=ref(null),Te=ref(null),Se=ref("list");let Ke=null,Je=null,mt=null,bt=null,$t=null;async function St(jt,zt){const en={oid:jt.oid,type:jt.type,seekRpid:jt.seekRpid},qt=jt.videoOptions,vo=jt.spmInfo,{container:yo}=zt;Bt(zt);const fo=document.createElement("bili-comments"),bo=document.createElement("bili-comments-reply-detail"),Ar=document.createElement("bili-comments-reply-dialog");return fo.id="pc-comments",bo.id="pc-comments-detail",Ar.id="pc-comments-dialog",be.value=fo,yo.appendChild(fo),Ee.value=yo,customElements.whenDefined("bili-comments").then(async()=>{await fo.load({...en,scrollContainer:yo,spmInfo:jt.spmInfo,disableVideoTime:ge==="dynamic"?"true":"false",cmFromTrackId:jt==null?void 0:jt.cmFromTrackId})}),Ke=ms=>{Se.value="detail";const go=ms.detail;nextTick(()=>{const wo=document.querySelector("#pc-comment-detail-container");wo.appendChild(bo),$e.value=bo,Ce.value=wo,customElements.whenDefined("bili-comments-reply-detail").then(async()=>{await bo.reload({oid:go.oid,root:go.root,type:jt.type,scrollContainer:wo,spmInfo:jt.spmInfo,disableVideoTime:ge==="dynamic"?"true":"false",cmFromTrackId:jt==null?void 0:jt.cmFromTrackId}),Ee.value&&(Ee.value.style.display="none")})})},Je=ms=>{Se.value="dialog";const go=ms.detail;nextTick(()=>{const wo=document.querySelector("#pc-comment-dialog-container");wo.appendChild(Ar),ke.value=Ar,Te.value=wo,customElements.whenDefined("bili-comments-reply-dialog").then(async()=>{await Ar.load({oid:go.oid,root:go.root,dialog:go.dialog,type:jt.type,scrollContainer:wo,spmInfo:jt.spmInfo,disableVideoTime:ge==="dynamic"?"true":"false",cmFromTrackId:jt==null?void 0:jt.cmFromTrackId}),Ee.value&&(Ee.value.style.display="none"),Ce.value&&(Ce.value.style.display="none")})})},mt=async ms=>{const go=ms.detail,wo=go.type;if(wo==="link"){let ir=go.link;const bs=judgeMainWindowOpen(ir);if(bs){openMainWindowPage(bs);return}const xs=await judgePlayerWindowOpen(ir);if(xs){openPlayerWindow(xs);return}ir.startsWith("//")&&(ir="https:"+ir);const ks=callNativeSync("config/getCustomConfig");ks!=null&&ks.isDisableAppBrowser?openInBrowser(ir):openInAppBrowser$1(ir,"comment.Link")}if(wo==="goods"){let ir=go.link;ir.startsWith("//")&&(ir="https:"+ir);const bs=callNativeSync("config/getCustomConfig");bs!=null&&bs.isDisableAppBrowser?openInBrowser(ir):openInAppBrowser$1(ir,"comment.Link")}if(wo==="search"){const ir=go.keyword;ir&&openMainWindowPage({page:"SearchPage",meta:{keyword:ir}})}if(wo==="seek"&&qt){const ir=ms.detail,bs={...qt,p:Number(ir.videoPart),t:Number(ir.videoTime)};jt.seekHandler&&jt.seekHandler(bs)}if(wo==="mention"){const ir=go.userProfileId;ir&&openMainWindowPage({page:"SpacePage",meta:{mid:ir,fromOuterSpmId:vo.spmid}})}},bt=ms=>{const wo=ms.detail.uid;wo&&openMainWindowPage({page:"SpacePage",meta:{mid:wo,fromOuterSpmId:vo.spmid}})},$t=ms=>{const go=ms.detail;jt.previewImageHandler&&jt.previewImageHandler(go.imageList,go.index)},fo.addEventListener("view-detail",Ke),fo.addEventListener("jump",mt),fo.addEventListener("jump-space",bt),fo.addEventListener("preview-image",$t),bo.addEventListener("view-dialog",Je),TrackReportManager.getInstance().addEventListner(),{comments:fo,commentsDetail:bo,commentsDialog:Ar}}function It(jt){Se.value=jt,jt==="list"&&Ee.value&&Ee.value.style.removeProperty("display"),jt==="detail"&&Ce.value&&Ce.value.style.removeProperty("display")}async function Bt(jt){const{container:zt,detailContainer:en,dialogContainer:qt}=jt;TrackReportManager.getInstance().removeEventListner(),be.value&&(be.value.removeEventListener("view-detail",Ke),be.value.removeEventListener("jump",mt),be.value.removeEventListener("jump-space",bt),be.value.removeEventListener("preview-image",$t)),$e.value&&$e.value.removeEventListener("view-dialog",Je),be.value=null,$e.value=null,ke.value=null,Ee.value=null,Ce.value=null,Te.value=null,Se.value="list",Dt(zt),zt&&zt.style.removeProperty("display"),en&&en.style.removeProperty("display"),zt&&Array.from(zt.children).forEach(yo=>{yo.tagName.toLowerCase()==="bili-comments"&&zt.removeChild(yo)}),en&&Array.from(en.children).forEach(yo=>{yo.tagName.toLowerCase()==="bili-comments-reply-detail"&&en.removeChild(yo)}),qt&&Array.from(qt.children).forEach(yo=>{yo.tagName.toLowerCase()==="bili-comments-reply-dialog"&&qt.removeChild(yo)})}function Dt(jt){if(jt){const zt=jt.parentElement;zt&&Array.from(zt.children).forEach(en=>{en.className.toLowerCase()==="bili-comments-bottom-fixed-wrapper"&&zt.removeChild(en)})}}return{commentsInstance:be,commentsDetailInstance:$e,commentsDialogInstance:ke,currentCommentType:Se,clearFixedWrapper:Dt,initComment:St,changeComment:It,clearComment:Bt}};var Popup_vue_vue_type_style_index_0_lang="";const popups=reactive([]),_sfc_main$e=defineComponent({name:"VPopup",props:{customClass:{type:String,default:""},mask:{type:Boolean,default:!0},fadeOpacity:{type:Number,default:.7}},emits:["wrap-click"],setup(ge,{expose:be,emit:$e}){const ke=ref(null),Ee=ref(null),{getZIndex:Ce}=usePopupZIndexStore(),Te=ref(!1),Se=ref(!1),Ke=ref(!1),Je=ref(!0);let mt=0;watch$1(popups,Dt=>{Dt.forEach((jt,zt)=>{zt!==Dt.length-1?jt.ts===mt&&jt.fade(!0):jt.fade(!1)})});const bt=()=>{Te.value||!ke.value||($t(),mt=Date.now(),popups.push({ts:mt,fade(Dt){Se.value=Dt}}),popups.length>1&&(Je.value=!1),Te.value=!0)},$t=()=>{ke.value.style.zIndex=`${Ce()}`},St=()=>{Te.value=!1,mt=0,popups.pop()},It=()=>{!ge.mask&&!Ke.value&&(Ke.value=!0,setTimeout(()=>{Ke.value=!1},500)),$e("wrap-click")},Bt=()=>{events.emit("hidePopover")};return be({show:bt,hide:St,el:Ee}),{root:ke,el:Ee,visible:Te,showTs:mt,isFade:Se,isFlashing:Ke,showMask:Je,onWrapClick:It,onClick:Bt}}}),_hoisted_1$A={class:"base_popup--mask"};function _sfc_render(ge,be,$e,ke,Ee,Ce){return openBlock(),createBlock(Transition,{name:"base_popup--transition"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",{class:"base_popup--wrap flex_center",ref:"root",onClick:be[1]||(be[1]=withModifiers((...Te)=>ge.onWrapClick&&ge.onWrapClick(...Te),["stop"]))},[withDirectives(createBaseVNode("div",_hoisted_1$A,null,512),[[vShow,ge.mask&&ge.showMask]]),createBaseVNode("div",{class:normalizeClass(["base_popup",{"is-fade":ge.isFade,"is-flashing":ge.isFlashing,[ge.customClass]:!!ge.customClass}]),ref:"el",style:normalizeStyle({opacity:ge.isFade?ge.fadeOpacity:void 0}),onClick:be[0]||(be[0]=withModifiers((...Te)=>ge.onClick&&ge.onClick(...Te),["stop"]))},[renderSlot(ge.$slots,"default")],6)],512),[[vShow,ge.visible]])]),_:3})}var VPopup=_export_sfc(_sfc_main$e,[["render",_sfc_render]]);const mouseEvent=ge=>{ge.directive("longClick",{mounted(be,$e){be.addEventListener("mousedown",function(ke){be.isPressing=!0;const Ee=$e.value;be.timer=setTimeout(()=>{ke.stopPropagation(),be.isPressing&&Ee()},$e.arg)})}}),ge.directive("longClickLeave",{mounted(be,$e){be.addEventListener("mouseup",function(){be.isPressing&&(clearTimeout(be.timer),be.isPressing=!1,$e.value())}),be.addEventListener("mouseleave",function(){be.isPressing&&(clearTimeout(be.timer),be.isPressing=!1,$e.value())})}}),ge.directive("focus",{inserted:function(be){be.focus()}})};var AtPopup_vue_vue_type_style_index_0_lang="";const _hoisted_1$z=createBaseVNode("div",{class:"at_popup__hint"},"\u9009\u62E9\u6216\u8F93\u5165\u4F60\u60F3@\u7684\u4EBA",-1),_hoisted_2$x={key:0,class:"at_popup__group-name"},_hoisted_3$w={class:"at_popup__group-list"},_hoisted_4$f=["onClick","onMouseover"],_hoisted_5$a={class:"at_popup__user-avatar"},_hoisted_6$5=["src"],_hoisted_7$5={class:"at_popup__user-info"},_hoisted_8$5=["innerHTML"],_hoisted_9$5={class:"at_popup__user-fans"},_sfc_main$d=defineComponent({__name:"AtPopup",props:{mid:{type:Number,default:0,required:!0},onSelect:{type:Function,default:()=>!0},onVisiblaChange:{type:Function,default:null},lineHeight:{type:[String,Number],default:"14"}},emits:["active","inactive"],setup(ge,{expose:be,emit:$e}){const ke=ge,Ee=33,Ce=ref(null),Te=ref(!1),Se=ref(""),Ke=reactive({top:0,left:0}),Je=reactive([0,0]),mt=ref([]),bt=ref(!0);ref(!1);const $t=computed(()=>({left:`${Ke.left}px`,top:`${Ke.top+Number(ke.lineHeight)}px`}));watch$1(Te,go=>{typeof ke.onVisiblaChange=="function"&&ke.onVisiblaChange(go)});function St(go,{visible:wo,position:ir,data:bs}){wo===-1&&It(go),wo===1?(Ke.left=ir.left,Ke.top=ir.top,bo(),ms(bs)):wo===0&&Ar()}function It(go){switch(go.type){case"keydown":Bt(go);break}}function Bt(go){if(!(!Te.value||mt.value.length===0))switch(go.keyCode){case 13:go.preventDefault(),zt(mt.value[Je[0]].items[Je[1]]);break;case 38:go.preventDefault(),en();break;case 40:go.preventDefault(),qt();break}}function Dt(go,wo){!bt.value||(Je[0]=go,Je[1]=wo)}function jt(go,wo){return Je[0]===go&&Je[1]===wo}function zt(go){!go||(ke.onSelect({uname:go.uname,uid:go.uid,keyword:Se.value}),Ar())}function en(){const go=Je[0],wo=Je[1];wo-1>=0?Je[1]=wo-1:(go-1>=0?Je[0]=go-1:Je[0]=mt.value.length-1,Je[1]=mt.value[Je[0]].items.length-1),vo()}function qt(){const go=[...Je];go[1]+1<mt.value[go[0]].items.length?Je[1]=Je[1]+1:(go[0]+1<mt.value.length?Je[0]=go[0]+1:Je[0]=0,Je[1]=0),vo()}function vo(){if(mt.value.length===0)return;const ir=Ce.value.children[Je[0]].querySelector(".at_popup__group-list").children[Je[1]];if(!ir)return;const bs=ir.offsetHeight;Ce.value.offsetHeight+Ce.value.scrollTop<=ir.offsetTop?(Ce.value.scrollTop=ir.offsetTop-Ce.value.offsetHeight+bs,yo()):ir.offsetTop<=Ce.value.scrollTop+Ee-bs&&(Ce.value.scrollTop=ir.offsetTop-(Je[1]===0?Ee:0),yo())}function yo(){bt.value=!1,fo()}const fo=debounce(function(){bt.value=!0},200);function bo(){Te.value=!0,Je[0]=0,Je[1]=0,$e("active")}function Ar(){setTimeout(()=>{Te.value=!1,$e("inactive"),mt.value=[]},150)}const fs=(go,wo,ir="#00A1D6")=>{if(!wo)return go;const bs=new RegExp("("+wo+")","g");return go.replace(bs,`<font style='color: ${ir};'>$1</font>`)},ms=debounce(async function(go){Se.value=go;try{const{groups:wo}=await getUserByKeyword(go,ke.mid);if(wo){const ir=wo.map(bs=>({name:bs.group_name,type:bs.group_type,items:bs.items.map(xs=>{const ks=xs.face?xs.face.replace(/http(s)?:/,""):DEFAULT_FACE;return{uid:xs.uid,uname:xs.name,fans:xs.fans>1e5?`${(xs.fans/1e4).toFixed(1)}\u4E07\u7C89\u4E1D`:`${xs.fans}\u7C89\u4E1D`,type:xs.official_verify_type,name:fs(xs.name,go),avatar:formatImg(ks,{w:80,h:80,webp:!0})}})}));mt.value=ir}else mt.value=[]}catch{mt.value=[]}},500);return be({trigger:St}),(go,wo)=>withDirectives((openBlock(),createElementBlock("div",{class:"at_popup",style:normalizeStyle(unref($t))},[_hoisted_1$z,createBaseVNode("div",{class:"at_popup__list",ref_key:"listRef",ref:Ce},[(openBlock(!0),createElementBlock(Fragment,null,renderList(mt.value,(ir,bs)=>(openBlock(),createElementBlock("div",{key:bs,class:"at_popup__group"},[mt.value.length>1||ir.name!=="\u5176\u4ED6"?(openBlock(),createElementBlock("div",_hoisted_2$x,toDisplayString(ir.name),1)):createCommentVNode("",!0),createBaseVNode("div",_hoisted_3$w,[(openBlock(!0),createElementBlock(Fragment,null,renderList(ir.items,(xs,ks)=>(openBlock(),createElementBlock("div",{key:xs.uid,class:normalizeClass({at_popup__user:!0,"at_popup__user--selected":jt(bs,ks)}),onClick:fu=>zt(xs),onMouseover:fu=>Dt(bs,ks)},[createBaseVNode("div",_hoisted_5$a,[createBaseVNode("img",{src:xs.avatar},null,8,_hoisted_6$5)]),createBaseVNode("div",_hoisted_7$5,[createBaseVNode("div",{class:"at_popup__user-name",innerHTML:xs.name},null,8,_hoisted_8$5),createBaseVNode("div",_hoisted_9$5,toDisplayString(xs.fans),1)])],42,_hoisted_4$f))),128))])]))),128))],512)],4)),[[vShow,Te.value]])}});function createAt(ge){return createApp(_sfc_main$d,ge)}class at{constructor({container:be,onSelect:$e,mid:ke,lineHeight:Ee,onVisiblaChange:Ce}){this.symbol="@",this.maxlength=16,this.app=null,this.instance=null,this.check=Se=>Se.length===2&&Se[1]===`
`?!0:!/\s/.test(Se),this.app=createAt({mid:ke,onSelect:Se=>$e({type:"at",data:Se}),onVisiblaChange:Se=>Ce("at",Se),lineHeight:Ee});const Te=document.createElement("div");this.instance=this.app.mount(Te),be.appendChild(Te.firstElementChild)}destroy(){this.instance=null,this.app.unmount(),this.app=null}}var CTRLS={at};let blurTimer=null;const DEFAULT_PAYLOAD={visible:-1,data:""},ctrlManager={},_setCtrls=(ge,be)=>{ctrlManager[ge]=be},_getCtrls=ge=>ge&&ctrlManager[ge]||null,_getElementCtrls=ge=>{var be;return _getCtrls((be=ge==null?void 0:ge._inputHelper)==null?void 0:be.id)},_match=(ge,be,$e)=>{const ke={ctrl:null,data:"",original:""},Ee=_getElementCtrls(ge);if(!Ee)return ke;for(let Ce=0;Ce<Ee.length;Ce++){const Te=Ee[Ce],Se=be.substring(0,$e),Ke=Se.lastIndexOf(Te.symbol);if(Ke>-1){const Je=Se.substring(Ke);if(Je.length<=Te.maxlength&&Te.check(Je))return ke.ctrl=Te,ke.data=Je.slice(Te.symbol.length).trim(),ke}}return ke},_trigger=(ge,be)=>{const $e=_getElementCtrls(ge.target);!$e||$e.forEach(ke=>{var Ee,Ce;(Ce=(Ee=ke.instance).trigger)==null||Ce.call(Ee,ge,be||DEFAULT_PAYLOAD)})},_scan=ge=>{const be=ge.target,{start:$e,end:ke,position:Ee}=getCursorPosition(be,!0);if($e.index===ke.index&&$e.offset===ke.offset){const Ce=be.childNodes[$e.index];if((Ce==null?void 0:Ce.nodeType)===3){const{ctrl:Te,data:Se}=_match(be,Ce.textContent,ke.offset);Te?(clearTimeout(blurTimer),Te.instance.trigger(ge,{visible:1,position:Ee,data:Se})):_trigger(ge,{visible:0,data:""})}else _trigger(ge,{visible:0,data:""})}},_onblur=ge=>{blurTimer=setTimeout(()=>{_trigger(ge,{visible:0,data:""})},200)},_onkeydown=ge=>{_trigger(ge,{visible:-1,position:{left:0,top:0},data:""})},_onkeyup=ge=>{if([37,39].indexOf(ge.keyCode)>-1){_scan(ge);return}},_eventMap={input:_scan,click:_scan,focus:_scan,blur:_onblur,keydown:_onkeydown,keyup:_onkeyup},_addEventListener=ge=>{Object.keys(_eventMap).forEach(be=>{ge.addEventListener(be,_eventMap[be])})},_removeEventListener=ge=>{Object.keys(_eventMap).forEach(be=>{ge.removeEventListener(be,_eventMap[be])})},watch=(ge,be={mid:0,container:null,ctrls:[],offset:{x:0,y:0},lineHeight:0,onSelect:()=>{},onVisiblaChange:$e=>{}})=>{const $e=ge._inputHelper.id,ke=[];return be.ctrls.forEach(Ee=>{const Ce=CTRLS[Ee];Ce&&ke.push(new Ce({mid:be.mid,container:be.container,onSelect:be.onSelect||(({type:Te,data:Se})=>{console.warn(`on-select: type-${Te}`,Se)}),lineHeight:be.lineHeight,onVisiblaChange:be.onVisiblaChange}))}),_addEventListener(ge),_setCtrls($e,ke),()=>{for(;ke.length;)ke.pop().destroy();delete ctrlManager[$e],_removeEventListener(ge)}};let id=0;const install=(ge,be)=>{var $e;be.container||(be.container=ge.parentElement.parentElement),($e=be.ctrls)!=null&&$e.length&&(ge._inputHelper={id:++id,unwatch:null},ge._inputHelper.unwatch=watch(ge,be))},inputHelper={mounted(ge,be){const $e=be.value;install(ge,{...$e})},beforeUnmount(ge){!ge._inputHelper||ge._inputHelper.unwatch()}},directive=ge=>{mouseEvent(ge)};var style="";const Emoji=defineComponent({name:"DynamicRichTextareaHighlightNode",props:{data:{type:Object,default:()=>({})}},setup({data:ge}){return()=>createVNode("img",{class:"dynamic_rich_textarea_emoji",src:ge.data.src,alt:ge.data.text,"data-length":ge.data.text.length,"data-data":JSON.stringify(ge)},null)}}),Highlight=defineComponent({name:"DynamicRichTextareaHighlightNode",props:{data:{type:Object,default:()=>({})}},setup({data:ge}){return()=>createVNode("span",{class:"dynamic_rich_textarea_highlight","data-length":ge.data.text.length,"data-data":JSON.stringify(ge),contenteditable:!1},[ge.text])}}),deepClone=ge=>JSON.parse(JSON.stringify(ge));var RichTextarea=defineComponent({name:"DynamicRichTextarea",directives:{"input-helper":inputHelper},components:{Emoji,Highlight},props:{placeholder:{type:String,default:"\u8BF7\u8F93\u5165\u5185\u5BB9"},defaultValue:{type:String,default:""},defaultNodes:{type:Array,default:()=>[]},enableAt:{type:Boolean,default:!0},enableHt:{type:Boolean,default:!0},maxlength:{type:[String,Number],default:-1},height:{type:[String,Number],default:100},fontSize:{type:[String,Number],default:14},lineHeight:{type:[String,Number],default:22},beforeInsert:{type:Function,default:null}},emits:["change"],setup(ge,{emit:be,expose:$e}){var Hu;const{userInfo:ke}=storeToRefs(useUserInfoStore()),Ee=reactive({active:!1,syncOn:!1,value:"",nodes:{passive:[],positive:[],real:[]},position:{start:{index:0,offset:0},end:{index:0,offset:0}},history:{steps:[],index:-1},disableState:{inputprev:!1,inputcurr:!1,inputnext:!1,save:!1,linefeed:!1,backspace:!1}}),Ce=xo=>{var ws;return((ws=Ee.nodes.positive[0])==null?void 0:ws.type)==="text"?xo:xo-1},Te=computed(()=>Ee.position.start.index),Se=computed(()=>Ee.nodes.positive[Te.value]||null),Ke=computed(()=>Ee.nodes.real[Ee.position.start.index]||null),Je=computed(()=>{var xo;return Ee.nodes.real.length?Ee.nodes.real.length>1||((xo=Ee.nodes.real[0])==null?void 0:xo.nodeType)!==3?!1:!getNodeText(Ee.nodes.real[0]).length:!!ge.defaultValue||!ge.defaultNodes.length}),mt=computed(()=>Je.value?!0:Ee.position.start.index!==0?!1:Se.value?!(Se.value.type!=="text"||Ee.position.start.offset>0):!0),bt=computed(()=>{var ws;if(Je.value||((ws=Ke.value)==null?void 0:ws.nodeType)!==3)return!0;const xo=getNodeText(Ke.value);return!(Ee.position.end.offset<xo.length-1)}),$t=computed(()=>{const xo=Number(ge.maxlength);return xo<=0?!1:xo===Ee.value.length});watch$1(()=>Ee.nodes.positive,xo=>{Ee.value=degradeRichTextareaNodes2Text(xo),be("change",{value:Ee.value,nodes:xo.reduce((ws,hu)=>{const au=deepClone(hu);return(au.type!=="text"||au.text)&&ws.push(au),ws},[])}),du()},{deep:!0});const St=ref(null),It=ref(null),Bt=ref(null);$e({refresh:ms,focus:fu,insert:ir,clear:go});const Dt=()=>{Ee.active&&yo()};onMounted(async()=>{window.addEventListener("mouseup",Dt),await initEmoji(),ms({value:ge.defaultValue,nodes:ge.defaultNodes})}),onBeforeUnmount(()=>{window.removeEventListener("mouseup",Dt)});const jt=computed(()=>{const xo=["dynamic_rich_textarea--inner"];return Je.value&&xo.push("empty"),xo.join(" ")}),zt={height:`${ge.height}px`},en={fontSize:`${ge.fontSize}px`,lineHeight:`${ge.lineHeight}px`,minHeight:`${ge.lineHeight}px`},qt=[];ge.enableAt&&qt.push("at");const vo={mid:(Hu=ke.value)==null?void 0:Hu.mid,container:null,ctrls:qt,onSelect:cu,lineHeight:ge.lineHeight,onVisiblaChange:Eu};function yo(){fo(),bo()}function fo(){var xo;Ee.nodes.real=Array.from(((xo=It.value)==null?void 0:xo.childNodes)||[]).filter(ws=>ws.nodeType===3?!!ws.textContent:!0)}function bo(){const{start:xo,end:ws,position:hu}=getCursorPosition(It.value,!0);_s(xo,ws),Ar(hu)}function Ar({top:xo}){var au;if(!St.value)return;const{scrollTop:ws,offsetHeight:hu}=St.value;if(((au=Ke.value)==null?void 0:au.nodeType)===3){const yu=getNodeText(Ke.value),Tu=Ee.position.start.offset-1;yu[Tu]===LINE_FEED&&(xo+=ge.lineHeight)}ws+hu<xo+43&&(St.value.scrollTop=xo+43)}const fs=debounce(async function(xo){await xs(),xo==null||xo()},80,!1);async function ms({value:xo,nodes:ws}){var hu;ws!=null&&ws.length?Ee.nodes.positive=mergeTextNodes(deepClone(ws))[0]:Ee.nodes.positive=await upgradeText2RichTextareaNodes(xo),Ee.history.index=-1,Ee.history.steps=[],_s({index:Math.max(Ee.nodes.passive.length-1,0),offset:((hu=Se.value)==null?void 0:hu.text.length)||0}),await xs()}async function go(){Ee.nodes.passive.length!==0&&(Ee.nodes.positive=[],_s({index:0,offset:1}),await xs(),ks())}function wo(xo){return xo.reduce((ws,{type:hu,data:au})=>{const yu=getRichTextareaNode({type:hu,data:au});return yu&&ws.push(yu),ws},[])}async function ir(...xo){$t.value||(await bs(...wo(xo)),fu())}async function bs(...xo){const ws=Ee.position.start.index;if(ge.beforeInsert&&(xo=ge.beforeInsert(xo,{nodes:deepClone(Ee.nodes.positive),index:ws})||xo),!xo.length)return;const{nodes:hu,position:au}=insertNodesIntoNodes({oldNodes:{positive:deepClone(Ee.nodes.positive),real:Ee.nodes.real},position:Ee.position,newPositiveNodesSlice:xo});Ee.nodes.positive=hu,_s(au.start,au.end),await xs(),ks()}async function xs(){Ee.syncOn=!0,Ee.nodes.passive=deepClone(Ee.nodes.positive),await nextTick(),It.value.innerHTML=Bt.value.innerHTML,Ee.syncOn=!1,fo()}function ks(){const xo=window.getSelection();if(!!xo)try{if(!Ke.value){xo.collapse(It.value,Ee.position.start.index);return}if(Ke.value.nodeType!==3){xo.collapse(It.value,Ee.position.start.index);return}const ws=getNodeText(Ke.value).length;xo.collapse(Ke.value,Math.min(Ee.position.start.offset,ws))}catch(ws){console.log(ws)}}function fu(){var xo;(xo=It.value)==null||xo.focus(),ks()}function _s(xo,ws){xo.index=Math.max(0,xo.index),ws=ws!=null?ws:xo,ws.index=Math.max(0,ws.index),Ee.position.start=xo,Ee.position.end={...ws}}function nu(xo){if(Je.value){xo(),ks();return}if(mt.value&&bt.value){setClipboardData(Ee.value),go(),xo();return}Du()}function du(){if(Ee.disableState.save){Ee.disableState.save=!1;return}const{steps:xo,index:ws}=Ee.history;ws===MAX_SAVE_STEPS-1?xo.shift():Ee.history.index=ws+1,Ee.history.steps=[...xo.splice(0,Ee.history.index),deepClone({nodes:Ee.nodes.positive,position:Ee.position})]}async function pu(xo){let{index:ws}=Ee.history;const hu=Ee.history.steps;if(hu.length===1)return;if(xo){if(ws===hu.length-1)return;++ws}else{if(ws===0)return;--ws}Ee.history.index=ws;const{nodes:au,position:yu}=deepClone(hu[Ee.history.index]);Ee.nodes.positive=au,Ee.position=yu,Ee.disableState.save=!0,await xs(),ks()}function uu(xo){xo()}async function vs(){let xo=Te.value;if(xo<0)return;let ws=-1;for(;xo>=0;xo--){const hu=Ee.nodes.positive[xo];if(hu.type==="text"&&(ws=hu.text.lastIndexOf(LINE_FEED),ws>-1))break}ws===-1?(xo=0,ws=1):xo===0&&++ws,Ee.nodes.positive[0].type!=="text"&&xo++,ru({index:xo,offset:ws}),await xs(),ks()}async function tu(){var au;if(Je.value||Ee.disableState.linefeed)return;if(((au=Se.value)==null?void 0:au.type)!=="text"){await ir({type:"text",data:{text:LINE_FEED.repeat(2)}});return}let xo=createTrimTextNode(Ke.value);const ws=0,hu=insertStrIntoStr(xo.text,Ee.position.start.offset-ws,LINE_FEED);Ee.nodes.positive[Te.value].text=hu,_s({index:Ee.position.start.index,offset:Ee.position.start.offset+1}),await xs(),xo=createTrimTextNode(Ke.value),xo.text!==Se.value.text&&setNodeText(Ke.value,xo.revert(Se.value.text)),ks()}function ru({index:xo,offset:ws}){if(Te.value<0||!Ee.nodes.positive[xo])return;const{type:hu,text:au}=Ee.nodes.positive[xo];if(xo===Ee.position.start.index){if(hu!=="text"||ws===Ee.position.start.offset)return;const zu=Ee.position.start.offset-ws,Xu=spliceStr(au,ws,zu);Ee.nodes.positive[xo].text=Xu,_s({index:xo,offset:ws});return}const yu=Ce(xo),Tu=Ee.nodes.positive[yu];if(hu!=="text")if(Tu.type==="text"){const zu=Tu.text.length-ws;Tu.text=spliceStr(Tu.text,ws,zu),Ee.nodes.positive.splice(yu+1,Te.value-yu)}else Ee.nodes.positive.splice(yu,Te.value-yu+1);else if(Se.value.text=spliceStr(au,0,Ee.position.start.offset),Tu.type==="text"){const zu=Tu.text.length-ws;Tu.text=spliceStr(Tu.text,ws,zu),Ee.nodes.positive.splice(yu+1,Te.value-yu)}else Ee.nodes.positive.splice(yu,Te.value-yu+1);_s({index:xo,offset:ws})}function cu({type:xo,data:ws}){switch(xo){case"at":vu(ws);break}}async function vu(xo){ru({index:Ee.position.start.index,offset:Ee.position.start.offset-(xo.keyword.length+1)}),await ir({type:"at",data:{text:`@${xo.uname}`,rid:xo.uid}},{type:"text",data:{text:" "}}),bo()}function Eu(xo,ws){Ee.disableState.linefeed=ws}async function Nu(xo){if(!xo.data){xu();return}const hu=Ee.position.start.index,au=Ee.nodes.positive[hu];if(yo(),!au)Pu(xo.data);else{const yu=au.type==="text",Tu=au.type==="highlight";yu?mu():Tu?Ee.nodes.positive.splice(hu,0,getRichTextareaNode({type:"text",data:{text:xo.data}})):Iu(xo.data)}}function Du(){setTimeout(()=>{if(Je.value){go();return}},100)}function xu(){if(yo(),Je.value){go();return}Ee.nodes.positive=restoreFromRealNodes(Ee.nodes.real),fs(ks)}async function Iu(xo){if(Ee.disableState.inputprev)return;const ws=Ee.position.start.index;Ee.nodes.positive.splice(ws,0,getRichTextareaNode({type:"text",data:{text:xo}})),await xs(),ks()}function mu(){if(Ee.disableState.inputcurr)return;const xo=Ke.value,ws=createTrimTextNode(xo),hu=Ee.position.start.index;Ee.nodes.positive[hu].text=ws.text}async function Pu(xo){Ee.disableState.inputnext||await ir({type:"text",data:{text:xo}})}function ju(xo){const ws=()=>{xo.preventDefault()};setTimeout(yo,20);const hu=xo.ctrlKey||xo.metaKey,au=xo.shiftKey;if($t.value&&!hu&&![8].includes(xo.keyCode))return ws();switch(xo.keyCode){case 8:if(mt.value)return bt.value&&go(),ws();hu?(ws(),vs()):Du();break;case 13:ws(),au||tu();break;case 37:case 38:mt.value&&ws();break;case 39:case 40:break;case 46:uu(ws);break;case 88:hu&&nu(ws);break;case 90:hu&&(ws(),pu(au));break}}function Vu(xo,ws){if(ws==="start"){const hu=Ee.position.start.index,au=Ee.nodes.positive[hu];if(!au){Ee.disableState.inputnext=!0;return}au.type==="text"?Ee.disableState.inputcurr=!0:Ee.disableState.inputprev=!0;return}if(ws==="end"){if(Ee.disableState.inputcurr){Ee.disableState.inputcurr=!1,xo.data&&mu();return}if(Ee.disableState.inputprev){Ee.disableState.inputprev=!1,xo.data&&Iu(xo.data);return}Ee.disableState.inputnext&&(Ee.disableState.inputnext=!1,xo.data&&Pu(xo.data))}}function Uu(xo){xo.target===St.value&&fu()}async function Mu(xo){if(xo.stopPropagation(),xo.preventDefault(),$t.value)return;let hu=xo.clipboardData.getData("Text").trim()+" ";ge.maxlength>0&&Ee.value.length+hu.length>ge.maxlength&&(hu=hu.slice(0,Number(ge.maxlength)-Ee.value.length)),bs(...await upgradeText2RichTextareaNodes(hu))}function Zu(xo){switch(xo.type){case"text":return xo.text;case"highlight":return createVNode(Highlight,{data:xo},null);case"emoji":return createVNode(Emoji,{data:xo},null);default:return xo.text}}return()=>createVNode("div",{class:"dynamic_rich_textarea",ref:xo=>St.value=xo,style:zt,onClick:Uu},[withDirectives(createVNode("div",{ref:xo=>It.value=xo,class:jt.value,style:en,placeholder:ge.placeholder,onInput:Nu,onCompositionstart:xo=>Vu(xo,"start"),onCompositionend:xo=>Vu(xo,"end"),onKeydown:ju,onPaste:Mu,onMouseup:xo=>{xo.stopPropagation(),yo()},onBlur:()=>{Ee.active=!1},onFocus:()=>{Ee.active=!0},contenteditable:!0},null),[[resolveDirective("input-helper"),vo]]),Ee.syncOn?createVNode("div",{ref:xo=>Bt.value=xo,class:"dynamic_rich_textarea--inner-shadow"},[Ee.nodes.passive.map(Zu)]):null])}}),Popover_vue_vue_type_style_index_0_lang="";const _sfc_main$c=defineComponent({__name:"Popover",props:{visible:{type:Boolean,default:!1},relative:{type:Boolean,default:!1},trigger:{type:String,default:"click"},autohide:{type:Boolean,default:!0},beforeAutohide:{type:Function,default:null},width:{type:[String,Number],default:300},borderRadius:{type:[String,Number],default:8},boxShadow:{type:String,default:"0 3px 5px 0 rgb(0 0 0 / 17%)"},placement:{type:String,default:"bottom-start"},offset:{type:Object,default:()=>({x:0,y:0})},noArrow:{type:Boolean,default:!1},mutexId:{type:String,default:""}},emits:["update:visible"],setup(ge,{emit:be}){const $e=ge,ke=mitt(),{getZIndex:Ee}=usePopupZIndexStore(),Ce=reactive({ref:null,mutexTs:0,zIndex:0,position:{left:0,top:0},listeners:[]}),Te=bo=>{be("update:visible",bo)},Se=computed(()=>{var fs,ms;const bo=((fs=$e.offset)==null?void 0:fs.x)||0,Ar=Math.max(Number($e.width),0);switch($e.placement){case"bottom":return Ce.position.left+bo-(Ar-(((ms=Ce.ref)==null?void 0:ms.offsetWidth)||0))/2;case"bottom-start":default:return Ce.position.left+bo}}),Ke=computed(()=>{var fs,ms;const bo=((fs=$e.offset)==null?void 0:fs.y)||0,Ar=((ms=Ce.ref)==null?void 0:ms.offsetHeight)||0;switch($e.placement){case"bottom":return Ce.position.top+(bo||Ar);case"bottom-start":default:return Ce.position.top+bo}}),Je=computed(()=>{const bo=Math.max(Number($e.width),0);return{left:Se.value+"px",top:Ke.value+"px",width:`${bo}px`,zIndex:Ce.zIndex,borderRadius:`${$e.borderRadius}px`,boxShadow:$e.boxShadow}}),mt=computed(()=>{switch($e.placement){case"bottom":return{left:"50%",transform:"translateX(-50%) rotate(45deg)"};case"bottom-end":return{right:"12px"};case"bottom-start":default:return{left:"22px"}}});watch$1(()=>$e.visible,bo=>{if(bo&&(Ce.zIndex=Ee(),$e.mutexId)){const Ar=Date.now();Ce.mutexTs=Ar,ke.emit("visible",{id:$e.mutexId,ts:Ar})}});const bt=ref(null),$t=ref(null),St=ref(null);let It=null;const Bt=async()=>{var go,wo;await nextTick();const bo=bt.value,Ar=(go=$t.value)==null?void 0:go.firstElementChild,fs=(wo=St.value)==null?void 0:wo.firstElementChild;if(!fs||!Ar||!bo)return;const ms=bo.parentElement;if(Ce.ref=fs,ms.replaceChild(fs,bo),bo.replaceChild(Ar,$t.value),bo.removeChild(St.value),It=()=>{bo.replaceChild($t.value,Ar),$t.value.appendChild(Ar),bo.appendChild(St.value);const ir=document.createElement("div");ms.replaceChild(ir,fs),St.value.appendChild(fs),ms.replaceChild(bo,ir)},$e.relative)getComputedStyle(fs).position==="static"&&(fs.style.position="relative",It=composeFunc(()=>{fs.style.position=""},It)),bo.style.cursor="default",fs.appendChild(bo),It=composeFunc(()=>{bo.style.cursor="",fs.removeChild(bo)},It);else{document.body.appendChild(bo);const{x:ir,y:bs}=fs.getBoundingClientRect(),xs=getScrollParent(fs);Ce.position.left=ir+xs.scrollLeft,Ce.position.top=bs+xs.scrollTop}switch($e.trigger){case"click":en(fs,"click",ir=>{$e.relative&&ir.target!==fs||zt(ir)}),$e.autohide&&en(window,"click",ir=>{!$e.visible||typeof $e.beforeAutohide=="function"&&$e.beforeAutohide(ir)||eventPathInclude(ir,bt)||zt(ir)});break;case"hover":en(fs,"mouseenter",()=>{Te(!0)}),en(fs,"mouseleave",()=>{Te(!1)});break}},Dt=()=>{!$e.mutexId||ke.off("visible",jt)},jt=({id:bo,ts:Ar})=>{$e.visible&&bo===$e.mutexId&&Ar!==Ce.mutexTs&&zt(null)},zt=bo=>{var Ar;$e.autohide&&((Ar=bo==null?void 0:bo.stopPropagation)==null||Ar.call(bo)),Te(!$e.visible)},en=(bo,Ar,fs)=>{bo.addEventListener(Ar,fs),Ce.listeners.push({el:bo,eventName:Ar,cb:fs})},qt=()=>{for(;Ce.listeners.length;){const{el:bo,eventName:Ar,cb:fs}=Ce.listeners.pop();bo.removeEventListener(Ar,fs)}},vo=()=>{qt(),Dt(),It()},yo=()=>{!$e.mutexId||ke.on("visible",jt)};return onMounted(()=>{Bt(),yo()}),onBeforeUnmount(vo),(bo,Ar)=>(openBlock(),createBlock(Transition,{name:"base_popover--transition"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",{role:"tooltip",class:"base_popover",style:normalizeStyle(unref(Je)),ref_key:"elRef",ref:bt},[ge.noArrow?createCommentVNode("",!0):(openBlock(),createElementBlock("div",{key:0,class:"base_popover--arrow",style:normalizeStyle(unref(mt))},null,4)),createBaseVNode("div",{class:"base_popover--default",ref_key:"defaultRef",ref:$t},[renderSlot(bo.$slots,"default")],512),createBaseVNode("div",{class:"base_popover--reference",ref_key:"referenceRef",ref:St},[renderSlot(bo.$slots,"reference")],512)],4),[[vShow,ge.visible]])]),_:3}))}});var EmojiPopover_vue_vue_type_style_index_0_lang="";const _hoisted_1$y={class:"v_emoji"},_hoisted_2$w={class:"v_emoji--content"},_hoisted_3$v={class:"v_emoji--title"},_hoisted_4$e={class:"v_emoji--list"},_hoisted_5$9=["onClick"],_hoisted_6$4=["src","alt"],_hoisted_7$4={key:1},_hoisted_8$4={class:"v_emoji--footer"},_hoisted_9$4={class:"v_emoji--footer--left"},_hoisted_10$2=["onClick"],_hoisted_11$1=["src","alt"],_hoisted_12$1={class:"v_emoji--footer--right"},_hoisted_13$1={class:"v_emoji--pagi"},_sfc_main$b=defineComponent({__name:"EmojiPopover",props:{visible:{type:Boolean,default:!1},relative:{type:Boolean,default:!1},placement:{type:String,default:"bottom-start"},offset:{type:Object,default:()=>({x:0,y:0})},beforeAutohide:{type:Function,default:null},mutexId:{type:String,default:""}},emits:["update:visible","select"],setup(ge,{emit:be}){const ke=ref(!1),Ee=ref("EMPTY"),Ce=reactive([]),Te=ref(0),Se=ref(0),Ke=computed(()=>Se.value?{transform:`translateX(${-Se.value*270}px)`}:{}),Je=computed(()=>Ce.length?Ce[Te.value]:{}),mt=computed(()=>Je.value.text||""),bt=computed(()=>(Je.value.emote||[]).map(jt=>{let zt="small",en=jt.url;return jt.meta.size===2?(zt="middle",en=formatImg(jt.url,{w:112,h:112})):jt.type!==4?en=formatImg(jt.url,{w:64,h:64}):zt="large",{src:en,size:zt,text:jt.text,id:jt.id,type:jt.type}}));watch$1(ke,Dt=>{be("update:visible",Dt)}),onMounted(()=>{setTimeout($t,1e3)});async function $t(){if(Ee.value!=="FETCHING"){Ee.value="FETCHING";try{Ce.push(...(await initEmojiPackage()||[]).map((Dt,jt)=>({...Dt,src:formatImg(Dt.url,{w:48,h:48}),active:Te.value===jt}))),Ee.value="FETCHED"}catch(Dt){Ee.value="ERROR",console.log("error",Dt)}}}function St(Dt){Dt!==Te.value&&(Ce[Te.value].active=!1,Te.value=Dt,Ce[Te.value].active=!0)}function It(Dt){be("select",Dt)}function Bt(Dt){Se.value+Dt>=Math.ceil(Ce.length/5)||Se.value+Dt<0||(Se.value+=Dt)}return events.on("hidePopover",()=>{ke.value=!1}),(Dt,jt)=>(openBlock(),createBlock(_sfc_main$c,{visible:ke.value,"onUpdate:visible":jt[2]||(jt[2]=zt=>ke.value=zt),width:"380",relative:ge.relative,"mutex-id":ge.mutexId,placement:ge.placement,"before-autohide":ge.beforeAutohide,offset:ge.offset},{reference:withCtx(()=>[renderSlot(Dt.$slots,"reference")]),default:withCtx(()=>[createBaseVNode("div",_hoisted_1$y,[createBaseVNode("div",_hoisted_2$w,[createBaseVNode("div",_hoisted_3$v,toDisplayString(unref(mt)),1),createBaseVNode("ul",_hoisted_4$e,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(bt),(zt,en)=>(openBlock(),createElementBlock("li",{key:en,class:normalizeClass(["v_emoji--list--item",{"v_emoji--list--item":!0,[zt.size]:!0}]),onClick:withModifiers(qt=>It(zt),["stop"])},[zt.type!==4?(openBlock(),createElementBlock("img",{key:0,src:zt.src,alt:zt.text},null,8,_hoisted_6$4)):(openBlock(),createElementBlock("span",_hoisted_7$4,toDisplayString(zt.src),1))],10,_hoisted_5$9))),128))])]),createBaseVNode("div",_hoisted_8$4,[createBaseVNode("div",_hoisted_9$4,[createBaseVNode("div",{class:"v_emoji--pkgs",style:normalizeStyle(unref(Ke))},[(openBlock(!0),createElementBlock(Fragment,null,renderList(Ce,(zt,en)=>(openBlock(),createElementBlock("div",{key:en,class:normalizeClass({"v_emoji--pkg":!0,active:zt.active}),onClick:withModifiers(qt=>St(en),["stop"])},[createBaseVNode("img",{src:zt.src,alt:zt.text},null,8,_hoisted_11$1)],10,_hoisted_10$2))),128))],4)]),createBaseVNode("div",_hoisted_12$1,[createBaseVNode("div",_hoisted_13$1,[createBaseVNode("div",{class:"v_emoji--pagi--prev",onClick:jt[0]||(jt[0]=withModifiers(zt=>Bt(-1),["stop"]))}),createBaseVNode("div",{class:"v_emoji--pagi--next",onClick:jt[1]||(jt[1]=withModifiers(zt=>Bt(1),["stop"]))})])])])])]),_:3},8,["visible","relative","mutex-id","placement","before-autohide","offset"]))}});var CommonCard_vue_vue_type_style_index_0_lang="";const _hoisted_1$x={class:"dynamic_preview_common_card"},_hoisted_2$v={class:"dynamic_preview_common_card--cover"},_hoisted_3$u={class:"dynamic_preview_common_card--content"},_sfc_main$a=defineComponent({__name:"CommonCard",props:{data:{type:Object,default:()=>({cover:"",nodes:[]})}},setup(ge){return(be,$e)=>(openBlock(),createElementBlock("div",_hoisted_1$x,[createBaseVNode("div",_hoisted_2$v,[createVNode(unref(VImg),{class:"dynamic_card_archive--cover--img",src:ge.data.cover.replace("pre-",""),width:80,height:80,rule:"1c"},null,8,["src"])]),createBaseVNode("div",_hoisted_3$u,[createVNode(unref(RichText),{nodes:ge.data.nodes,lines:"4",unfold:""},null,8,["nodes"])])]))}});var VideoCard_vue_vue_type_style_index_0_lang="";const _hoisted_1$w={class:"dynamic_preview_video_card"},_hoisted_2$u={class:"dynamic_preview_video_card--cover"},_hoisted_3$t={class:"dynamic_preview_video_card--content"},_hoisted_4$d={class:"dynamic_preview_video_card--title"},_hoisted_5$8={class:"dynamic_preview_video_card--desc"},_hoisted_6$3={class:"dynamic_preview_video_card--stat"},_hoisted_7$3={key:0,class:"dynamic_preview_video_card--stat--item"},_hoisted_8$3={key:1,class:"dynamic_preview_video_card--stat--item"},_hoisted_9$3={class:"dynamic_preview_video_card--stat--item"},_sfc_main$9=defineComponent({__name:"VideoCard",props:{data:{type:Object,default:()=>({cover:"",title:"",desc:"",stat:{play:"",danmaku:"",vt:""},enable_vt:0})}},setup(ge){return(be,$e)=>(openBlock(),createElementBlock("div",_hoisted_1$w,[createBaseVNode("div",_hoisted_2$u,[createVNode(unref(VImg),{class:"dynamic_card_archive--cover--img",src:ge.data.cover.replace("pre-",""),width:142,height:80,rule:"1c"},null,8,["src"])]),createBaseVNode("div",_hoisted_3$t,[createBaseVNode("div",_hoisted_4$d,toDisplayString(ge.data.title),1),createBaseVNode("div",_hoisted_5$8,toDisplayString(ge.data.desc),1),createBaseVNode("div",_hoisted_6$3,[ge.data.enable_vt?(openBlock(),createElementBlock("div",_hoisted_7$3,[createVNode(unref(PlayTime)),createTextVNode(" "+toDisplayString(ge.data.stat.play||"0"),1)])):(openBlock(),createElementBlock("div",_hoisted_8$3,[createVNode(unref(IcoPlay)),createTextVNode(" "+toDisplayString(ge.data.stat.play||"0"),1)])),createBaseVNode("div",_hoisted_9$3,[createVNode(unref(IcoDanmaku)),createTextVNode(" "+toDisplayString(ge.data.stat.danmaku||"0"),1)])])])]))}}),_hoisted_1$v={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$t=createBaseVNode("path",{d:"M6.2 13.588v7.645c0 2.413 1.967 4.37 4.39 4.37h10.42c2.42 0 4.39-1.958 4.39-4.37v-7.645c0-2.412-1.967-4.37-4.39-4.37H10.59c-2.42 0-4.39 1.959-4.39 4.37Zm5.22-8.216 1.404 2.653h5.954l1.404-2.622a.702.702 0 0 1 .851-.33l.095.042c.31.163.446.526.332.845l-.042.095-1.054 1.97h.646c3.086 0 5.59 2.493 5.59 5.563v7.645c0 3.07-2.508 5.563-5.59 5.563H10.59c-3.087 0-5.59-2.493-5.59-5.563v-7.645c0-3.069 2.507-5.562 5.59-5.562l.653-.001-1.063-2.006a.693.693 0 0 1 .294-.939.702.702 0 0 1 .946.292Zm6.964 14.075H13.22c-.558 0-.913.521-.756 1.054.414 1.407 1.773 2.421 3.336 2.421 1.568 0 2.9-1.043 3.34-2.435.145-.458-.2-1.04-.756-1.04Zm-9.149-6.445a.593.593 0 0 0 .116.835l2.541 1.913-2.474 1.705a.594.594 0 0 0-.2.745l.048.084c.17.244.49.322.75.199l.085-.049 3.168-2.181.052-.041.073-.08a.593.593 0 0 0-.116-.835l-3.202-2.41a.603.603 0 0 0-.841.115Zm13.13 0a.603.603 0 0 0-.749-.172l-.092.057-3.202 2.41a.593.593 0 0 0-.116.835l.04.047.058.054 3.195 2.201c.272.188.646.12.835-.15a.593.593 0 0 0-.151-.829l-2.476-1.705 2.542-1.913a.593.593 0 0 0 .169-.753l-.053-.082Z",fill:"#9499A0"},null,-1),_hoisted_3$s=[_hoisted_2$t];function render$n(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$v,[..._hoisted_3$s])}var IcoEmoji={render:render$n};const _hoisted_1$u={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$s=createBaseVNode("path",{d:"M16.822 5.263c6.37 0 10.48 5.343 9.486 11.06-.497 2.858-2.138 4.66-4.843 5.303a.673.673 0 0 1-.534-.098c-.453.06-.93.049-1.391-.09-.746-.226-1.164-1.256-1.223-1.711a3.42 3.42 0 0 1-.318.445c-.202.243-.449.47-.74.683a4.358 4.358 0 0 1-.998.536 3.44 3.44 0 0 1-1.252.22c-.62 0-1.178-.122-1.673-.365a3.677 3.677 0 0 1-1.251-.991c-.34-.417-.6-.92-.782-1.509a6.441 6.441 0 0 1-.271-1.912c0-.802.126-1.59.378-2.364a6.894 6.894 0 0 1 1.07-2.065 5.308 5.308 0 0 1 1.7-1.456c.673-.366 1.428-.549 2.261-.549.696 0 1.3.17 1.808.514.436.293.762.644.975 1.05.003.006.01-.008.02-.033l.034-.103.049-.193.009-.053c.038-.27.279-1.023.923-.952.645.071.626.734.573.991l-.62 2.997-.161.76-.122.603-.118.639c-.074.43-.138.859-.175 1.24l-.035.39c-.08 1.012-.042 1.758.62 2.005l.133.046c.136.043.332.092.583.107a.626.626 0 0 1 .216-.096c2.171-.515 3.42-1.886 3.825-4.22.855-4.918-2.653-9.48-8.156-9.48-5.786 0-9.928 4.2-9.928 9.595 0 4.98 4.374 9.18 9.241 9.18 3.901 0 5.982-.814 8.447-2.983a.675.675 0 1 1 .892 1.013c-2.707 2.382-5.103 3.32-9.339 3.32-5.601 0-10.59-4.792-10.59-10.53 0-6.136 4.742-10.944 11.277-10.944Zm-.65 6.537c-.603 0-1.126.157-1.574.47-.459.321-.852.73-1.179 1.229a5.685 5.685 0 0 0-.74 1.69 7.295 7.295 0 0 0-.247 1.857c0 .29.036.623.108 1 .07.369.197.717.379 1.045.178.322.42.587.727.799.3.206.686.31 1.163.31.687 0 1.268-.173 1.747-.517.488-.352.885-.791 1.19-1.319a6.296 6.296 0 0 0 .68-1.71c.146-.61.218-1.177.218-1.7a5.62 5.62 0 0 0-.123-1.173 2.986 2.986 0 0 0-.406-1.008 2.142 2.142 0 0 0-.753-.704c-.313-.179-.709-.269-1.19-.269Z",fill:"#9499A0"},null,-1),_hoisted_3$r=[_hoisted_2$s];function render$m(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$u,[..._hoisted_3$r])}var IcoAt={render:render$m},ForwardPublish_vue_vue_type_style_index_0_lang="";const _hoisted_1$t={class:"dynamic_forward_publish"},_hoisted_2$r={class:"dynamic_forward_publish--input"},_hoisted_3$q={class:"dynamic_forward_publish--preview"},_hoisted_4$c={class:"dynamic_forward_publish--preview--user"},_hoisted_5$7={class:"dynamic_forward_publish--preview--card"},_hoisted_6$2={class:"dynamic_forward_publish--control"},_hoisted_7$2={class:"dynamic_forward_publish--tools"},_hoisted_8$2=createTextVNode(" > "),_hoisted_9$2={class:"dynamic_forward_publish--headquarters"},_hoisted_10$1=["title"],_sfc_main$8=defineComponent({__name:"ForwardPublish",props:{version:{type:String,default:"lite",validator(ge){return["lite","pro"].includes(ge)}},defaultContent:{type:String,default:""},defaultContentNodes:{type:Array,default:()=>[]}},emits:["done","popover-visible-change"],setup(ge,{expose:be,emit:$e}){const{userInfo:Ee}=storeToRefs(useUserInfoStore()),Ce=reactive({init:!1,publish:!1}),Te=ref(""),Se=reactive({id:0,name:"",requestId:"",fromSource:""}),Ke=reactive({value:"",nodes:[]}),Je=reactive({tools:{emoji:{visible:!0,active:!1},at:{visible:!0,active:!1,config:{maxCount:20}}}}),mt=ref(null),bt=computed(()=>!!Ke.value),$t=computed(()=>getStringLength(Ke.value)),St=computed(()=>{const go=$t.value,wo=go>0,ir=go>233;let bs=go;return ir&&(bs=233-go),{visible:wo,text:bs,heedful:ir,title:"\u5168\u89D2\u5B57\u7B26\u8BA1\u6570\u4E3A1\u534A\u89D2\u5B57\u7B26\u8BA1\u6570\u4E3A0.5\uFF0C\u4E0D\u8DB31\u65F6\u8BB0\u4E3A1"}}),It=computed(()=>{var wo;const go=Ce.init||Ce.publish;return{text:"\u8F6C\u53D1",disabled:go||((wo=St.value)==null?void 0:wo.heedful)}}),Bt=reactive({textarea:null});function Dt(go,wo){Bt[go]=wo}function jt(go,{nodes:wo}){let ir=0,bs={at:!1};const xs=Je.tools.at.config.maxCount;wo.forEach(ks=>{if(ks.type==="highlight")switch(ks.data.type){case"at":ir++;break}}),go.forEach((ks,fu)=>{if(ks.type==="highlight")switch(ks.data.type){case"at":ir===xs?(bs.at=!0,go[fu]=getRichTextareaTextNode(ks.text)):ir++;break}}),bs.at&&toastAsync({content:`\u6700\u591A\u652F\u6301@ ${xs}\u4F4D\u7528\u6237`})}function zt(go){const{value:wo,nodes:ir}=go;Ke.value=wo,Ke.nodes=ir,St.value.heedful&&toastAsync({content:"\u5DF2\u8D85\u51FA\u89C4\u5B9A\u5B57\u6570\u4E86\u54E6~"})}function en(go){go.type===4?vo({type:"text",data:{text:go.text}}):vo({type:"emoji",data:go})}async function qt(go){var wo,ir;switch((ir=(wo=Je.tools[go])==null?void 0:wo.config)!=null&&ir.focus&&await ms(),go){case"at":vo({type:"text",data:{text:"@"}});break}}function vo(...go){Bt.textarea.insert(...go)}function yo(){Bt.textarea.refresh({nodes:[]}),mt.value=null}async function fo(){if(It.value.disabled)return;Ce.publish=!0;const go=mt.value.id;try{const wo=await createDynamic({nodes:Ke.nodes,topic:Se,scene:4,uploadId:Te.value,comment:1,repostSrc:{dynId:go}});toastAsync({content:"\u8F6C\u53D1\u6210\u529F"}),Ce.publish=!1,events.emit("syncDynamicState",{id:go,module:"stat",key:"forwardState",state:{offset:1}}),$e("done",{...wo}),yo()}catch(wo){Ce.publish=!1,toastAsync({content:wo.message})}}function bo(){Te.value=`${Ee.value.mid||0}_${Math.floor(Date.now()/1e3)}_${Math.floor(Math.random()*1e4)}`}async function Ar(go){var wo;try{Ce.init=!0;const[{settings:ir},{item:bs}]=await Promise.all([getDynamicPublishConfig(),getDynamicForwardPreview(go.id||go.rid,go.type)]);if(!bs)return Ce.init=!1,Promise.reject(new Error("Miss preview data"));(wo=go.defaultContent)!=null&&wo.length&&Bt.textarea.refresh({nodes:[...go.defaultContent]}),mt.value=bs,Je.tools.at.config.maxCount=ir.max_at_count||20,Te.value||bo()}catch(ir){console.log(ir.message)}Ce.init=!1}async function fs(){if(Ce.init||Ce.publish)return Promise.reject(new Error("loading..."));if(bt.value&&!await alertAsync({content:`\u786E\u8BA4\u8981\u653E\u5F03\u53D1\u5E03\u5417
\u653E\u5F03\u540E\u5C06\u4E0D\u4F1A\u4FDD\u5B58`,cancelText:"\u53D6\u6D88",confirmText:"\u786E\u5B9A"}))return Promise.reject("cancel");yo()}async function ms(){await promiseTimeout(0),Bt.textarea.focus()}return watch$1(Je,go=>{const wo=go.tools.emoji.active;$e("popover-visible-change",wo)},{deep:!0}),be({init:Ar,exit:fs,focus:ms}),(go,wo)=>{const ir=resolveComponent("VButton");return openBlock(),createElementBlock("div",_hoisted_1$t,[createBaseVNode("div",_hoisted_2$r,[createVNode(unref(RichTextarea),{ref:bs=>Dt("textarea",bs),placeholder:"\u5206\u4EAB\u81F3\u52A8\u6001","default-value":ge.defaultContent,"default-nodes":ge.defaultContentNodes,"before-insert":jt,onChange:zt},null,8,["default-value","default-nodes"])]),createBaseVNode("div",_hoisted_3$q,[mt.value?(openBlock(),createElementBlock(Fragment,{key:0},[createBaseVNode("div",_hoisted_4$c,"@"+toDisplayString(mt.value.user.name),1),createBaseVNode("div",_hoisted_5$7,[mt.value.type===1?(openBlock(),createBlock(_sfc_main$a,{key:0,data:mt.value.common_card},null,8,["data"])):createCommentVNode("",!0),mt.value.type===2?(openBlock(),createBlock(_sfc_main$9,{key:1,data:mt.value.video_card},null,8,["data"])):createCommentVNode("",!0)])],64)):createCommentVNode("",!0)]),createBaseVNode("div",_hoisted_6$2,[createBaseVNode("div",_hoisted_7$2,[createVNode(_sfc_main$b,{visible:Je.tools.emoji.active,"onUpdate:visible":wo[0]||(wo[0]=bs=>Je.tools.emoji.active=bs),relative:"","mutex-id":"tool",offset:{x:-11,y:32},onSelect:en},{reference:withCtx(()=>[createBaseVNode("div",{class:normalizeClass({"dynamic_forward_publish--tools--item":!0,active:Je.tools.emoji.active})},[createVNode(unref(IcoEmoji))],2),_hoisted_8$2]),_:1},8,["visible"]),createBaseVNode("div",{class:"dynamic_forward_publish--tools--item",onClick:wo[1]||(wo[1]=bs=>qt("at"))},[createVNode(unref(IcoAt))])]),createBaseVNode("div",_hoisted_9$2,[withDirectives(createBaseVNode("div",{class:normalizeClass({"dynamic_forward_publish--hint":!0,heedful:unref(St).heedful}),title:unref(St).title},toDisplayString(unref(St).text),11,_hoisted_10$1),[[vShow,unref(St).visible]]),createVNode(ir,{class:"dynamic_forward_publish--action bd_radius_sm",disabled:unref(It).disabled,type:"pink",onClick:fo},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(It).text),1)]),_:1},8,["disabled"])])])])}}});var ForwardPopup_vue_vue_type_style_index_0_lang="";const _hoisted_1$s={class:"dynamic_forward_popup--header flex_between"},_hoisted_2$q=["textContent"],_hoisted_3$p=["onClick"],_hoisted_4$b={class:"dynamic_forward_popup--content"},_sfc_main$7=defineComponent({__name:"ForwardPopup",props:{active:{type:Boolean,default:!1}},setup(ge,{expose:be}){const $e=ge,{userInfo:ke}=storeToRefs(useUserInfoStore()),Ee=ref(!1),Ce=ref(!1),Te=ref(null),Se=ref(null),Ke=ref("\u8F6C\u53D1\u52A8\u6001"),Je=async Dt=>{try{if(Ee.value)return;Ee.value=!0,await Se.value.init(Dt),Ce.value=!0,St(Dt.rid&&!Dt.id),Te.value.show(),Se.value.focus(),Ee.value=!1}catch(jt){Ee.value=!1,console.log(jt)}},mt=async()=>{Ce.value=!1;try{await Se.value.exit(),Te.value.hide()}catch(Dt){console.log(Dt)}},bt=Dt=>{Te.value.hide(),Ce.value=!1},$t=Dt=>{Dt?Te.value.el.style.top="calc(50% - 130px)":Te.value.el.style.top=""},St=Dt=>{Ke.value=Dt?"\u5206\u4EAB\u81F3\u52A8\u6001":"\u8F6C\u53D1\u52A8\u6001"},It=Dt=>{if(!!$e.active){if(!ke.value.isLogin){requestLogin("forwardPopup.onForwardDynamic");return}Je(Dt)}};return events.on("forwardDynamic",It),onBeforeUnmount(()=>{events.off("forwardDynamic",It)}),be({show:Je,hide:mt,closeDialog:()=>mt(),isShowDialog:Ce}),(Dt,jt)=>(openBlock(),createBlock(VPopup,{"custom-class":"dynamic_forward_popup",ref_key:"popupRef",ref:Te,onWrapClick:mt},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$s,[createBaseVNode("div",{class:"dynamic_forward_popup--title",textContent:toDisplayString(Ke.value)},null,8,_hoisted_2$q),createBaseVNode("div",{class:"dynamic_forward_popup--close",onClick:withModifiers(mt,["stop"])},[createVNode(unref(IcoClose$1))],8,_hoisted_3$p)]),createBaseVNode("div",_hoisted_4$b,[createVNode(_sfc_main$8,{ref_key:"publishRef",ref:Se,onDone:bt,onPopoverVisibleChange:$t},null,512)])]),_:1},512))}}),_hoisted_1$r={viewBox:"0 0 22 22",fill:"currentColor"},_hoisted_2$p=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.982 9.275c1.296.785 1.296 2.665 0 3.45l-9.946 6.02C6.703 19.552 5 18.592 5 17.034V4.966c0-1.558 1.703-2.518 3.036-1.711l9.946 6.02Z"},null,-1),_hoisted_3$o=[_hoisted_2$p];function render$l(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$r,[..._hoisted_3$o])}var VdPlays={render:render$l};const _hoisted_1$q={viewBox:"0 0 1024 1024"},_hoisted_2$o=createBaseVNode("path",{d:"M213.333 192A85.333 85.333 0 1 1 384 192v640a85.333 85.333 0 1 1-170.667 0V192zM640 192a85.333 85.333 0 1 1 170.667 0v640A85.333 85.333 0 1 1 640 832V192z",fill:"currentColor"},null,-1),_hoisted_3$n=[_hoisted_2$o];function render$k(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$q,[..._hoisted_3$n])}var VdPauseS={render:render$k};const _hoisted_1$p={viewBox:"0 0 21 18",fill:"currentColor"},_hoisted_2$n=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17 0a2 2 0 0 1 2 2v7h-2V2.8a.8.8 0 0 0-.8-.8H2.8a.8.8 0 0 0-.794.7L2 2.8v10.4a.8.8 0 0 0 .7.794l.1.006H10v2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15Z"},null,-1),_hoisted_3$m=createBaseVNode("path",{d:"M19.875 11h-6.75c-.621 0-1.125.522-1.125 1.167v4.666c0 .645.504 1.167 1.125 1.167h6.75c.621 0 1.125-.522 1.125-1.167v-4.666c0-.645-.504-1.167-1.125-1.167Z"},null,-1),_hoisted_4$a=[_hoisted_2$n,_hoisted_3$m];function render$j(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$p,[..._hoisted_4$a])}var IcoMini={render:render$j},Loading_vue_vue_type_style_index_0_lang="";const _hoisted_1$o=createBaseVNode("div",{class:"app_video--loading-bg p_cover"},null,-1),_hoisted_2$m=createBaseVNode("div",{class:"app_video--loading-img"},null,-1),_hoisted_3$l=[_hoisted_1$o,_hoisted_2$m],_sfc_main$6=defineComponent({__name:"Loading",props:{loading:Boolean,dark:Boolean},setup(ge){const be=ge;return($e,ke)=>withDirectives((openBlock(),createElementBlock("div",{class:normalizeClass(["app_video--loading",{"dark-loading":ge.dark}])},_hoisted_3$l,2)),[[vShow,be.loading]])}}),_hoisted_1$n={width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$l=createBaseVNode("path",{stroke:"#A2A7AE","stroke-width":"2","stroke-linecap":"round",d:"M1 1h10M1 6h10M1 11h10"},null,-1),_hoisted_3$k=[_hoisted_2$l];function render$i(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$n,[..._hoisted_3$k])}var VdMenu={render:render$i};const _hoisted_1$m={width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},_hoisted_2$k=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 4.063c-2.142 0-4.01.11-5.323.217a1.813 1.813 0 0 0-1.676 1.652A45.835 45.835 0 0 0 2.813 10c0 1.563.09 2.99.188 4.068.08.891.778 1.579 1.676 1.652a66.19 66.19 0 0 0 5.323.217c2.142 0 4.01-.11 5.323-.217a1.813 1.813 0 0 0 1.676-1.652c.097-1.076.189-2.504.189-4.068 0-1.564-.092-2.992-.19-4.068a1.813 1.813 0 0 0-1.675-1.652A66.19 66.19 0 0 0 10 4.062ZM4.575 3.034A67.443 67.443 0 0 1 10 2.813c2.184 0 4.087.112 5.425.221a3.062 3.062 0 0 1 2.819 2.785c.1 1.104.194 2.57.194 4.181 0 1.61-.095 3.077-.194 4.18a3.062 3.062 0 0 1-2.82 2.786 67.44 67.44 0 0 1-5.424.221c-2.183 0-4.086-.112-5.425-.221a3.063 3.063 0 0 1-2.819-2.786c-.1-1.104-.194-2.57-.194-4.18 0-1.61.095-3.076.194-4.18a3.063 3.063 0 0 1 2.82-2.786ZM5 8.438c0-.346.28-.626.625-.626h.313a.625.625 0 1 1 0 1.25h-.313A.625.625 0 0 1 5 8.438Zm2.5 0c0-.346.28-.626.625-.626h5a.625.625 0 1 1 0 1.25h-5a.625.625 0 0 1-.625-.624Zm-.625 2.5a.625.625 0 1 0 0 1.25h.313a.625.625 0 1 0 0-1.25h-.313Zm2.5 0a.625.625 0 1 0 0 1.25h5a.625.625 0 1 0 0-1.25h-5Z"},null,-1),_hoisted_3$j=[_hoisted_2$k];function render$h(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$m,[..._hoisted_3$j])}var VdDm={render:render$h};const _hoisted_1$l={width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},_hoisted_2$j=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.677 4.28A66.19 66.19 0 0 1 10 4.062c2.142 0 4.01.11 5.323.218.899.073 1.595.76 1.676 1.652.097 1.076.189 2.504.189 4.068 0 1.564-.092 2.992-.19 4.068a1.813 1.813 0 0 1-1.675 1.652c-1.313.107-3.18.217-5.323.217-2.142 0-4.01-.11-5.323-.217a1.813 1.813 0 0 1-1.676-1.652A45.835 45.835 0 0 1 2.813 10c0-1.563.09-2.99.188-4.068A1.813 1.813 0 0 1 4.677 4.28ZM10 2.812c-2.183 0-4.086.113-5.425.222A3.063 3.063 0 0 0 1.756 5.82c-.1 1.104-.194 2.57-.194 4.18 0 1.61.095 3.076.194 4.18a3.063 3.063 0 0 0 2.82 2.786c1.338.11 3.24.221 5.424.221a67.44 67.44 0 0 0 5.425-.221 3.062 3.062 0 0 0 2.819-2.785c.1-1.104.194-2.57.194-4.181 0-1.61-.095-3.077-.194-4.18a3.062 3.062 0 0 0-2.82-2.786A67.442 67.442 0 0 0 10 2.813Zm2.188 7.91a.833.833 0 0 0 0-1.443L9.06 7.474a.833.833 0 0 0-1.25.721v3.61a.833.833 0 0 0 1.25.722l3.127-1.805Z"},null,-1),_hoisted_3$i=[_hoisted_2$j];function render$g(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$l,[..._hoisted_3$i])}var VdPlay={render:render$g},RingProgress_vue_vue_type_style_index_0_lang="";const _hoisted_1$k=["width","height"],_sfc_main$5=defineComponent({__name:"RingProgress",props:{size:Number,left:Number,top:Number,start:{type:Boolean,default:()=>!1}},emits:["scaleAnim","shakeAnim","animFinish"],setup(ge,{emit:be}){const $e=ge,ke=ref(0),Ee=ref(null),Ce=ref(null),Te=ref(.25),Se=ref(null),Ke=computed(()=>$e.size/2),Je=()=>{Ce.value.clearRect(0,0,$e.size,$e.size),Ce.value.beginPath(),Ce.value.strokeStyle="#FF6699",Ce.value.lineWidth=1,Ce.value.arc(Ke.value,Ke.value,Ke.value-1,-Math.PI/2,(ke.value-.5)*Math.PI),Ce.value.stroke()};onMounted(()=>{});const mt=()=>{clearInterval(Ee.value),Te.value=.25,Ee.value=setInterval(()=>{ke.value+=2/15,Je(),ke.value<8/15&&(Te.value*=Math.cbrt(4),be("scaleAnim",Te.value)),ke.value>=8/15&&ke.value<10/15&&be("shakeAnim"),ke.value>=28/15&&ke.value<2&&(Te.value/=Math.cbrt(4),be("scaleAnim",Te.value)),ke.value>=2&&(ke.value=0,Je(),clearInterval(Ee.value),be("animFinish"))},100)},bt=()=>{clearInterval(Ee.value),Ee.value=setInterval(()=>{ke.value-=.1,Je(),ke.value<=0&&(ke.value=0,Je(),clearInterval(Ee.value))},50)};return onMounted(()=>{Ce.value=Se.value.getContext("2d"),Je(),watch$1(()=>$e.start,()=>{$e.start?mt():bt()})}),($t,St)=>(openBlock(),createElementBlock("canvas",{ref_key:"progress",ref:Se,width:ge.size,height:ge.size,style:normalizeStyle({width:`${ge.size}px`,height:`${ge.size}px`,left:`${ge.left}px`,top:`${ge.top}px`}),class:"ring-progress"},null,12,_hoisted_1$k))}});var svga_min={exports:{}};(function(module,exports){(function(ge,be){module.exports=be()})(window,function(){return function(ge){function be(ke){if($e[ke])return $e[ke].exports;var Ee=$e[ke]={i:ke,l:!1,exports:{}};return ge[ke].call(Ee.exports,Ee,Ee.exports,be),Ee.l=!0,Ee.exports}var $e={};return be.m=ge,be.c=$e,be.d=function(ke,Ee,Ce){be.o(ke,Ee)||Object.defineProperty(ke,Ee,{enumerable:!0,get:Ce})},be.r=function(ke){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(ke,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(ke,"__esModule",{value:!0})},be.t=function(ke,Ee){if(1&Ee&&(ke=be(ke)),8&Ee||4&Ee&&typeof ke=="object"&&ke&&ke.__esModule)return ke;var Ce=Object.create(null);if(be.r(Ce),Object.defineProperty(Ce,"default",{enumerable:!0,value:ke}),2&Ee&&typeof ke!="string")for(var Te in ke)be.d(Ce,Te,function(Se){return ke[Se]}.bind(null,Te));return Ce},be.n=function(ke){var Ee=ke&&ke.__esModule?function(){return ke.default}:function(){return ke};return be.d(Ee,"a",Ee),Ee},be.o=function(ke,Ee){return Object.prototype.hasOwnProperty.call(ke,Ee)},be.p="",be(be.s=64)}([function(ge,be,$e){var ke,Ee,Ce=ge.exports=$e(1),Te=$e(20);Ce.codegen=$e(47),Ce.fetch=$e(48),Ce.path=$e(49),Ce.fs=Ce.inquire("fs"),Ce.toArray=function(bt){if(bt){for(var $t=Object.keys(bt),St=new Array($t.length),It=0;It<$t.length;)St[It]=bt[$t[It++]];return St}return[]},Ce.toObject=function(bt){for(var $t={},St=0;St<bt.length;){var It=bt[St++],Bt=bt[St++];Bt!==void 0&&($t[It]=Bt)}return $t};var Se=/\\/g,Ke=/"/g;Ce.isReserved=function(bt){return/^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(bt)},Ce.safeProp=function(bt){return!/^[$\w_]+$/.test(bt)||Ce.isReserved(bt)?'["'+bt.replace(Se,"\\\\").replace(Ke,'\\"')+'"]':"."+bt},Ce.ucFirst=function(bt){return bt.charAt(0).toUpperCase()+bt.substring(1)};var Je=/_([a-z])/g;Ce.camelCase=function(bt){return bt.substring(0,1)+bt.substring(1).replace(Je,function($t,St){return St.toUpperCase()})},Ce.compareFieldsById=function(bt,$t){return bt.id-$t.id},Ce.decorateType=function(bt,$t){if(bt.$type)return $t&&bt.$type.name!==$t&&(Ce.decorateRoot.remove(bt.$type),bt.$type.name=$t,Ce.decorateRoot.add(bt.$type)),bt.$type;ke||(ke=$e(22));var St=new ke($t||bt.name);return Ce.decorateRoot.add(St),St.ctor=bt,Object.defineProperty(bt,"$type",{value:St,enumerable:!1}),Object.defineProperty(bt.prototype,"$type",{value:St,enumerable:!1}),St};var mt=0;Ce.decorateEnum=function(bt){if(bt.$type)return bt.$type;Ee||(Ee=$e(2));var $t=new Ee("Enum"+mt++,bt);return Ce.decorateRoot.add($t),Object.defineProperty(bt,"$type",{value:$t,enumerable:!1}),$t},Ce.setProperty=function(bt,$t,St){if(typeof bt!="object")throw TypeError("dst must be an object");if(!$t)throw TypeError("path must be specified");return function It(Bt,Dt,jt){var zt=Dt.shift();if(Dt.length>0)Bt[zt]=It(Bt[zt]||{},Dt,jt);else{var en=Bt[zt];en&&(jt=[].concat(en).concat(jt)),Bt[zt]=jt}return Bt}(bt,$t=$t.split("."),St)},Object.defineProperty(Ce,"decorateRoot",{get:function(){return Te.decorated||(Te.decorated=new($e(30)))}})},function(ge,be,$e){(function(ke){function Ee(Se,Ke,Je){for(var mt=Object.keys(Ke),bt=0;bt<mt.length;++bt)Se[mt[bt]]!==void 0&&Je||(Se[mt[bt]]=Ke[mt[bt]]);return Se}function Ce(Se){function Ke(Je,mt){if(!(this instanceof Ke))return new Ke(Je,mt);Object.defineProperty(this,"message",{get:function(){return Je}}),Error.captureStackTrace?Error.captureStackTrace(this,Ke):Object.defineProperty(this,"stack",{value:new Error().stack||""}),mt&&Ee(this,mt)}return(Ke.prototype=Object.create(Error.prototype)).constructor=Ke,Object.defineProperty(Ke.prototype,"name",{get:function(){return Se}}),Ke.prototype.toString=function(){return this.name+": "+this.message},Ke}var Te=be;Te.asPromise=$e(17),Te.base64=$e(38),Te.EventEmitter=$e(39),Te.float=$e(40),Te.inquire=$e(18),Te.utf8=$e(41),Te.pool=$e(42),Te.LongBits=$e(43),Te.isNode=Boolean(ke!==void 0&&ke&&ke.process&&ke.process.versions&&ke.process.versions.node),Te.global=Te.isNode&&ke||typeof window!="undefined"&&window||typeof self!="undefined"&&self||this,Te.emptyArray=Object.freeze?Object.freeze([]):[],Te.emptyObject=Object.freeze?Object.freeze({}):{},Te.isInteger=Number.isInteger||function(Se){return typeof Se=="number"&&isFinite(Se)&&Math.floor(Se)===Se},Te.isString=function(Se){return typeof Se=="string"||Se instanceof String},Te.isObject=function(Se){return Se&&typeof Se=="object"},Te.isset=Te.isSet=function(Se,Ke){var Je=Se[Ke];return!(Je==null||!Se.hasOwnProperty(Ke))&&(typeof Je!="object"||(Array.isArray(Je)?Je.length:Object.keys(Je).length)>0)},Te.Buffer=function(){try{var Se=Te.inquire("buffer").Buffer;return Se.prototype.utf8Write?Se:null}catch{return null}}(),Te._Buffer_from=null,Te._Buffer_allocUnsafe=null,Te.newBuffer=function(Se){return typeof Se=="number"?Te.Buffer?Te._Buffer_allocUnsafe(Se):new Te.Array(Se):Te.Buffer?Te._Buffer_from(Se):typeof Uint8Array=="undefined"?Se:new Uint8Array(Se)},Te.Array=typeof Uint8Array!="undefined"?Uint8Array:Array,Te.Long=Te.global.dcodeIO&&Te.global.dcodeIO.Long||Te.global.Long||Te.inquire("long"),Te.key2Re=/^true|false|0|1$/,Te.key32Re=/^-?(?:0|[1-9][0-9]*)$/,Te.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,Te.longToHash=function(Se){return Se?Te.LongBits.from(Se).toHash():Te.LongBits.zeroHash},Te.longFromHash=function(Se,Ke){var Je=Te.LongBits.fromHash(Se);return Te.Long?Te.Long.fromBits(Je.lo,Je.hi,Ke):Je.toNumber(Boolean(Ke))},Te.merge=Ee,Te.lcFirst=function(Se){return Se.charAt(0).toLowerCase()+Se.substring(1)},Te.newError=Ce,Te.ProtocolError=Ce("ProtocolError"),Te.oneOfGetter=function(Se){for(var Ke={},Je=0;Je<Se.length;++Je)Ke[Se[Je]]=1;return function(){for(var mt=Object.keys(this),bt=mt.length-1;bt>-1;--bt)if(Ke[mt[bt]]===1&&this[mt[bt]]!==void 0&&this[mt[bt]]!==null)return mt[bt]}},Te.oneOfSetter=function(Se){return function(Ke){for(var Je=0;Je<Se.length;++Je)Se[Je]!==Ke&&delete this[Se[Je]]}},Te.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},Te._configure=function(){var Se=Te.Buffer;Se?(Te._Buffer_from=Se.from!==Uint8Array.from&&Se.from||function(Ke,Je){return new Se(Ke,Je)},Te._Buffer_allocUnsafe=Se.allocUnsafe||function(Ke){return new Se(Ke)}):Te._Buffer_from=Te._Buffer_allocUnsafe=null}}).call(this,$e(37))},function(ge,be,$e){function ke(Se,Ke,Je,mt,bt){if(Ee.call(this,Se,Je),Ke&&typeof Ke!="object")throw TypeError("values must be an object");if(this.valuesById={},this.values=Object.create(this.valuesById),this.comment=mt,this.comments=bt||{},this.reserved=void 0,Ke)for(var $t=Object.keys(Ke),St=0;St<$t.length;++St)typeof Ke[$t[St]]=="number"&&(this.valuesById[this.values[$t[St]]=Ke[$t[St]]]=$t[St])}ge.exports=ke;var Ee=$e(3);((ke.prototype=Object.create(Ee.prototype)).constructor=ke).className="Enum";var Ce=$e(6),Te=$e(0);ke.fromJSON=function(Se,Ke){var Je=new ke(Se,Ke.values,Ke.options,Ke.comment,Ke.comments);return Je.reserved=Ke.reserved,Je},ke.prototype.toJSON=function(Se){var Ke=!!Se&&Boolean(Se.keepComments);return Te.toObject(["options",this.options,"values",this.values,"reserved",this.reserved&&this.reserved.length?this.reserved:void 0,"comment",Ke?this.comment:void 0,"comments",Ke?this.comments:void 0])},ke.prototype.add=function(Se,Ke,Je){if(!Te.isString(Se))throw TypeError("name must be a string");if(!Te.isInteger(Ke))throw TypeError("id must be an integer");if(this.values[Se]!==void 0)throw Error("duplicate name '"+Se+"' in "+this);if(this.isReservedId(Ke))throw Error("id "+Ke+" is reserved in "+this);if(this.isReservedName(Se))throw Error("name '"+Se+"' is reserved in "+this);if(this.valuesById[Ke]!==void 0){if(!this.options||!this.options.allow_alias)throw Error("duplicate id "+Ke+" in "+this);this.values[Se]=Ke}else this.valuesById[this.values[Se]=Ke]=Se;return this.comments[Se]=Je||null,this},ke.prototype.remove=function(Se){if(!Te.isString(Se))throw TypeError("name must be a string");var Ke=this.values[Se];if(Ke==null)throw Error("name '"+Se+"' does not exist in "+this);return delete this.valuesById[Ke],delete this.values[Se],delete this.comments[Se],this},ke.prototype.isReservedId=function(Se){return Ce.isReservedId(this.reserved,Se)},ke.prototype.isReservedName=function(Se){return Ce.isReservedName(this.reserved,Se)}},function(ge,be,$e){function ke(Te,Se){if(!Ce.isString(Te))throw TypeError("name must be a string");if(Se&&!Ce.isObject(Se))throw TypeError("options must be an object");this.options=Se,this.parsedOptions=null,this.name=Te,this.parent=null,this.resolved=!1,this.comment=null,this.filename=null}ge.exports=ke,ke.className="ReflectionObject";var Ee,Ce=$e(0);Object.defineProperties(ke.prototype,{root:{get:function(){for(var Te=this;Te.parent!==null;)Te=Te.parent;return Te}},fullName:{get:function(){for(var Te=[this.name],Se=this.parent;Se;)Te.unshift(Se.name),Se=Se.parent;return Te.join(".")}}}),ke.prototype.toJSON=function(){throw Error()},ke.prototype.onAdd=function(Te){this.parent&&this.parent!==Te&&this.parent.remove(this),this.parent=Te,this.resolved=!1;var Se=Te.root;Se instanceof Ee&&Se._handleAdd(this)},ke.prototype.onRemove=function(Te){var Se=Te.root;Se instanceof Ee&&Se._handleRemove(this),this.parent=null,this.resolved=!1},ke.prototype.resolve=function(){return this.resolved?this:(this.root instanceof Ee&&(this.resolved=!0),this)},ke.prototype.getOption=function(Te){if(this.options)return this.options[Te]},ke.prototype.setOption=function(Te,Se,Ke){return Ke&&this.options&&this.options[Te]!==void 0||((this.options||(this.options={}))[Te]=Se),this},ke.prototype.setParsedOption=function(Te,Se,Ke){this.parsedOptions||(this.parsedOptions=[]);var Je=this.parsedOptions;if(Ke){var mt=Je.find(function(St){return Object.prototype.hasOwnProperty.call(St,Te)});if(mt){var bt=mt[Te];Ce.setProperty(bt,Ke,Se)}else(mt={})[Te]=Ce.setProperty({},Ke,Se),Je.push(mt)}else{var $t={};$t[Te]=Se,Je.push($t)}return this},ke.prototype.setOptions=function(Te,Se){if(Te)for(var Ke=Object.keys(Te),Je=0;Je<Ke.length;++Je)this.setOption(Ke[Je],Te[Ke[Je]],Se);return this},ke.prototype.toString=function(){var Te=this.constructor.className,Se=this.fullName;return Se.length?Te+" "+Se:Te},ke._configure=function(Te){Ee=Te}},function(ge,be,$e){function ke(mt,bt,$t,St,It,Bt,Dt){if(Ke.isObject(St)?(Dt=It,Bt=St,St=It=void 0):Ke.isObject(It)&&(Dt=Bt,Bt=It,It=void 0),Ee.call(this,mt,Bt),!Ke.isInteger(bt)||bt<0)throw TypeError("id must be a non-negative integer");if(!Ke.isString($t))throw TypeError("type must be a string");if(St!==void 0&&!Je.test(St=St.toString().toLowerCase()))throw TypeError("rule must be a string rule");if(It!==void 0&&!Ke.isString(It))throw TypeError("extend must be a string");this.rule=St&&St!=="optional"?St:void 0,this.type=$t,this.id=bt,this.extend=It||void 0,this.required=St==="required",this.optional=!this.required,this.repeated=St==="repeated",this.map=!1,this.message=null,this.partOf=null,this.typeDefault=null,this.defaultValue=null,this.long=!!Ke.Long&&Se.long[$t]!==void 0,this.bytes=$t==="bytes",this.resolvedType=null,this.extensionField=null,this.declaringField=null,this._packed=null,this.comment=Dt}ge.exports=ke;var Ee=$e(3);((ke.prototype=Object.create(Ee.prototype)).constructor=ke).className="Field";var Ce,Te=$e(2),Se=$e(7),Ke=$e(0),Je=/^required|optional|repeated$/;ke.fromJSON=function(mt,bt){return new ke(mt,bt.id,bt.type,bt.rule,bt.extend,bt.options,bt.comment)},Object.defineProperty(ke.prototype,"packed",{get:function(){return this._packed===null&&(this._packed=this.getOption("packed")!==!1),this._packed}}),ke.prototype.setOption=function(mt,bt,$t){return mt==="packed"&&(this._packed=null),Ee.prototype.setOption.call(this,mt,bt,$t)},ke.prototype.toJSON=function(mt){var bt=!!mt&&Boolean(mt.keepComments);return Ke.toObject(["rule",this.rule!=="optional"&&this.rule||void 0,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",bt?this.comment:void 0])},ke.prototype.resolve=function(){if(this.resolved)return this;if((this.typeDefault=Se.defaults[this.type])===void 0&&(this.resolvedType=(this.declaringField?this.declaringField.parent:this.parent).lookupTypeOrEnum(this.type),this.resolvedType instanceof Ce?this.typeDefault=null:this.typeDefault=this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]),this.options&&this.options.default!=null&&(this.typeDefault=this.options.default,this.resolvedType instanceof Te&&typeof this.typeDefault=="string"&&(this.typeDefault=this.resolvedType.values[this.typeDefault])),this.options&&(this.options.packed!==!0&&(this.options.packed===void 0||!this.resolvedType||this.resolvedType instanceof Te)||delete this.options.packed,Object.keys(this.options).length||(this.options=void 0)),this.long)this.typeDefault=Ke.Long.fromNumber(this.typeDefault,this.type.charAt(0)==="u"),Object.freeze&&Object.freeze(this.typeDefault);else if(this.bytes&&typeof this.typeDefault=="string"){var mt;Ke.base64.test(this.typeDefault)?Ke.base64.decode(this.typeDefault,mt=Ke.newBuffer(Ke.base64.length(this.typeDefault)),0):Ke.utf8.write(this.typeDefault,mt=Ke.newBuffer(Ke.utf8.length(this.typeDefault)),0),this.typeDefault=mt}return this.map?this.defaultValue=Ke.emptyObject:this.repeated?this.defaultValue=Ke.emptyArray:this.defaultValue=this.typeDefault,this.parent instanceof Ce&&(this.parent.ctor.prototype[this.name]=this.defaultValue),Ee.prototype.resolve.call(this)},ke.d=function(mt,bt,$t,St){return typeof bt=="function"?bt=Ke.decorateType(bt).name:bt&&typeof bt=="object"&&(bt=Ke.decorateEnum(bt).name),function(It,Bt){Ke.decorateType(It.constructor).add(new ke(Bt,mt,bt,$t,{default:St}))}},ke._configure=function(mt){Ce=mt}},function(ge,be,$e){Object.defineProperty(be,"__esModule",{value:!0}),be.BezierPath=function ke(Ee,Ce,Te){(function(Se,Ke){if(!(Se instanceof Ke))throw new TypeError("Cannot call a class as a function")})(this,ke),this._d=Ee,this._transform=Ce,this._styles=Te}},function(ge,be,$e){function ke($t,St){if($t&&$t.length){for(var It={},Bt=0;Bt<$t.length;++Bt)It[$t[Bt].name]=$t[Bt].toJSON(St);return It}}function Ee($t,St){Te.call(this,$t,St),this.nested=void 0,this._nestedArray=null}function Ce($t){return $t._nestedArray=null,$t}ge.exports=Ee;var Te=$e(3);((Ee.prototype=Object.create(Te.prototype)).constructor=Ee).className="Namespace";var Se,Ke,Je,mt=$e(4),bt=$e(0);Ee.fromJSON=function($t,St){return new Ee($t,St.options).addJSON(St.nested)},Ee.arrayToJSON=ke,Ee.isReservedId=function($t,St){if($t){for(var It=0;It<$t.length;++It)if(typeof $t[It]!="string"&&$t[It][0]<=St&&$t[It][1]>St)return!0}return!1},Ee.isReservedName=function($t,St){if($t){for(var It=0;It<$t.length;++It)if($t[It]===St)return!0}return!1},Object.defineProperty(Ee.prototype,"nestedArray",{get:function(){return this._nestedArray||(this._nestedArray=bt.toArray(this.nested))}}),Ee.prototype.toJSON=function($t){return bt.toObject(["options",this.options,"nested",ke(this.nestedArray,$t)])},Ee.prototype.addJSON=function($t){if($t)for(var St,It=Object.keys($t),Bt=0;Bt<It.length;++Bt)St=$t[It[Bt]],this.add((St.fields!==void 0?Se.fromJSON:St.values!==void 0?Je.fromJSON:St.methods!==void 0?Ke.fromJSON:St.id!==void 0?mt.fromJSON:Ee.fromJSON)(It[Bt],St));return this},Ee.prototype.get=function($t){return this.nested&&this.nested[$t]||null},Ee.prototype.getEnum=function($t){if(this.nested&&this.nested[$t]instanceof Je)return this.nested[$t].values;throw Error("no such enum: "+$t)},Ee.prototype.add=function($t){if(!($t instanceof mt&&$t.extend!==void 0||$t instanceof Se||$t instanceof Je||$t instanceof Ke||$t instanceof Ee))throw TypeError("object must be a valid nested object");if(this.nested){var St=this.get($t.name);if(St){if(!(St instanceof Ee&&$t instanceof Ee)||St instanceof Se||St instanceof Ke)throw Error("duplicate name '"+$t.name+"' in "+this);for(var It=St.nestedArray,Bt=0;Bt<It.length;++Bt)$t.add(It[Bt]);this.remove(St),this.nested||(this.nested={}),$t.setOptions(St.options,!0)}}else this.nested={};return this.nested[$t.name]=$t,$t.onAdd(this),Ce(this)},Ee.prototype.remove=function($t){if(!($t instanceof Te))throw TypeError("object must be a ReflectionObject");if($t.parent!==this)throw Error($t+" is not a member of "+this);return delete this.nested[$t.name],Object.keys(this.nested).length||(this.nested=void 0),$t.onRemove(this),Ce(this)},Ee.prototype.define=function($t,St){if(bt.isString($t))$t=$t.split(".");else if(!Array.isArray($t))throw TypeError("illegal path");if($t&&$t.length&&$t[0]==="")throw Error("path must be relative");for(var It=this;$t.length>0;){var Bt=$t.shift();if(It.nested&&It.nested[Bt]){if(!((It=It.nested[Bt])instanceof Ee))throw Error("path conflicts with non-namespace objects")}else It.add(It=new Ee(Bt))}return St&&It.addJSON(St),It},Ee.prototype.resolveAll=function(){for(var $t=this.nestedArray,St=0;St<$t.length;)$t[St]instanceof Ee?$t[St++].resolveAll():$t[St++].resolve();return this.resolve()},Ee.prototype.lookup=function($t,St,It){if(typeof St=="boolean"?(It=St,St=void 0):St&&!Array.isArray(St)&&(St=[St]),bt.isString($t)&&$t.length){if($t===".")return this.root;$t=$t.split(".")}else if(!$t.length)return this;if($t[0]==="")return this.root.lookup($t.slice(1),St);var Bt=this.get($t[0]);if(Bt){if($t.length===1){if(!St||St.indexOf(Bt.constructor)>-1)return Bt}else if(Bt instanceof Ee&&(Bt=Bt.lookup($t.slice(1),St,!0)))return Bt}else for(var Dt=0;Dt<this.nestedArray.length;++Dt)if(this._nestedArray[Dt]instanceof Ee&&(Bt=this._nestedArray[Dt].lookup($t,St,!0)))return Bt;return this.parent===null||It?null:this.parent.lookup($t,St)},Ee.prototype.lookupType=function($t){var St=this.lookup($t,[Se]);if(!St)throw Error("no such type: "+$t);return St},Ee.prototype.lookupEnum=function($t){var St=this.lookup($t,[Je]);if(!St)throw Error("no such Enum '"+$t+"' in "+this);return St},Ee.prototype.lookupTypeOrEnum=function($t){var St=this.lookup($t,[Se,Je]);if(!St)throw Error("no such Type or Enum '"+$t+"' in "+this);return St},Ee.prototype.lookupService=function($t){var St=this.lookup($t,[Ke]);if(!St)throw Error("no such Service '"+$t+"' in "+this);return St},Ee._configure=function($t,St,It){Se=$t,Ke=St,Je=It}},function(ge,be,$e){function ke(Se,Ke){var Je=0,mt={};for(Ke|=0;Je<Se.length;)mt[Te[Je+Ke]]=Se[Je++];return mt}var Ee=be,Ce=$e(0),Te=["double","float","int32","uint32","sint32","fixed32","sfixed32","int64","uint64","sint64","fixed64","sfixed64","bool","string","bytes"];Ee.basic=ke([1,5,0,0,0,5,5,0,0,0,1,1,0,2,2]),Ee.defaults=ke([0,0,0,0,0,0,0,0,0,0,0,0,!1,"",Ce.emptyArray,null]),Ee.long=ke([0,0,0,1,1],7),Ee.mapKey=ke([0,0,0,5,5,0,0,0,1,1,0,2],2),Ee.packed=ke([1,5,0,0,0,5,5,0,0,0,1,1,0])},function(ge,be,$e){function ke(Se,Ke){return Object.prototype.hasOwnProperty.call(Se,Ke)}var Ee=typeof Uint8Array!="undefined"&&typeof Uint16Array!="undefined"&&typeof Int32Array!="undefined";be.assign=function(Se){for(var Ke=Array.prototype.slice.call(arguments,1);Ke.length;){var Je=Ke.shift();if(Je){if(typeof Je!="object")throw new TypeError(Je+"must be non-object");for(var mt in Je)ke(Je,mt)&&(Se[mt]=Je[mt])}}return Se},be.shrinkBuf=function(Se,Ke){return Se.length===Ke?Se:Se.subarray?Se.subarray(0,Ke):(Se.length=Ke,Se)};var Ce={arraySet:function(Se,Ke,Je,mt,bt){if(Ke.subarray&&Se.subarray)Se.set(Ke.subarray(Je,Je+mt),bt);else for(var $t=0;$t<mt;$t++)Se[bt+$t]=Ke[Je+$t]},flattenChunks:function(Se){var Ke,Je,mt,bt,$t,St;for(mt=0,Ke=0,Je=Se.length;Ke<Je;Ke++)mt+=Se[Ke].length;for(St=new Uint8Array(mt),bt=0,Ke=0,Je=Se.length;Ke<Je;Ke++)$t=Se[Ke],St.set($t,bt),bt+=$t.length;return St}},Te={arraySet:function(Se,Ke,Je,mt,bt){for(var $t=0;$t<mt;$t++)Se[bt+$t]=Ke[Je+$t]},flattenChunks:function(Se){return[].concat.apply([],Se)}};be.setTyped=function(Se){Se?(be.Buf8=Uint8Array,be.Buf16=Uint16Array,be.Buf32=Int32Array,be.assign(be,Ce)):(be.Buf8=Array,be.Buf16=Array,be.Buf32=Array,be.assign(be,Te))},be.setTyped(Ee)},function(ge,be,$e){function ke(zt,en,qt){this.fn=zt,this.len=en,this.next=void 0,this.val=qt}function Ee(){}function Ce(zt){this.head=zt.head,this.tail=zt.tail,this.len=zt.len,this.next=zt.states}function Te(){this.len=0,this.head=new ke(Ee,0,0),this.tail=this.head,this.states=null}function Se(zt,en,qt){en[qt]=255&zt}function Ke(zt,en){this.len=zt,this.next=void 0,this.val=en}function Je(zt,en,qt){for(;zt.hi;)en[qt++]=127&zt.lo|128,zt.lo=(zt.lo>>>7|zt.hi<<25)>>>0,zt.hi>>>=7;for(;zt.lo>127;)en[qt++]=127&zt.lo|128,zt.lo=zt.lo>>>7;en[qt++]=zt.lo}function mt(zt,en,qt){en[qt]=255&zt,en[qt+1]=zt>>>8&255,en[qt+2]=zt>>>16&255,en[qt+3]=zt>>>24}ge.exports=Te;var bt,$t=$e(1),St=$t.LongBits,It=$t.base64,Bt=$t.utf8,Dt=function(){return $t.Buffer?function(){return(Te.create=function(){return new bt})()}:function(){return new Te}};Te.create=Dt(),Te.alloc=function(zt){return new $t.Array(zt)},$t.Array!==Array&&(Te.alloc=$t.pool(Te.alloc,$t.Array.prototype.subarray)),Te.prototype._push=function(zt,en,qt){return this.tail=this.tail.next=new ke(zt,en,qt),this.len+=en,this},Ke.prototype=Object.create(ke.prototype),Ke.prototype.fn=function(zt,en,qt){for(;zt>127;)en[qt++]=127&zt|128,zt>>>=7;en[qt]=zt},Te.prototype.uint32=function(zt){return this.len+=(this.tail=this.tail.next=new Ke((zt>>>=0)<128?1:zt<16384?2:zt<2097152?3:zt<268435456?4:5,zt)).len,this},Te.prototype.int32=function(zt){return zt<0?this._push(Je,10,St.fromNumber(zt)):this.uint32(zt)},Te.prototype.sint32=function(zt){return this.uint32((zt<<1^zt>>31)>>>0)},Te.prototype.uint64=function(zt){var en=St.from(zt);return this._push(Je,en.length(),en)},Te.prototype.int64=Te.prototype.uint64,Te.prototype.sint64=function(zt){var en=St.from(zt).zzEncode();return this._push(Je,en.length(),en)},Te.prototype.bool=function(zt){return this._push(Se,1,zt?1:0)},Te.prototype.fixed32=function(zt){return this._push(mt,4,zt>>>0)},Te.prototype.sfixed32=Te.prototype.fixed32,Te.prototype.fixed64=function(zt){var en=St.from(zt);return this._push(mt,4,en.lo)._push(mt,4,en.hi)},Te.prototype.sfixed64=Te.prototype.fixed64,Te.prototype.float=function(zt){return this._push($t.float.writeFloatLE,4,zt)},Te.prototype.double=function(zt){return this._push($t.float.writeDoubleLE,8,zt)};var jt=$t.Array.prototype.set?function(zt,en,qt){en.set(zt,qt)}:function(zt,en,qt){for(var vo=0;vo<zt.length;++vo)en[qt+vo]=zt[vo]};Te.prototype.bytes=function(zt){var en=zt.length>>>0;if(!en)return this._push(Se,1,0);if($t.isString(zt)){var qt=Te.alloc(en=It.length(zt));It.decode(zt,qt,0),zt=qt}return this.uint32(en)._push(jt,en,zt)},Te.prototype.string=function(zt){var en=Bt.length(zt);return en?this.uint32(en)._push(Bt.write,en,zt):this._push(Se,1,0)},Te.prototype.fork=function(){return this.states=new Ce(this),this.head=this.tail=new ke(Ee,0,0),this.len=0,this},Te.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new ke(Ee,0,0),this.len=0),this},Te.prototype.ldelim=function(){var zt=this.head,en=this.tail,qt=this.len;return this.reset().uint32(qt),qt&&(this.tail.next=zt.next,this.tail=en,this.len+=qt),this},Te.prototype.finish=function(){for(var zt=this.head.next,en=this.constructor.alloc(this.len),qt=0;zt;)zt.fn(zt.val,en,qt),qt+=zt.len,zt=zt.next;return en},Te._configure=function(zt){bt=zt,Te.create=Dt(),bt._configure()}},function(ge,be,$e){function ke(It,Bt){return RangeError("index out of range: "+It.pos+" + "+(Bt||1)+" > "+It.len)}function Ee(It){this.buf=It,this.pos=0,this.len=It.length}function Ce(){var It=new mt(0,0),Bt=0;if(!(this.len-this.pos>4)){for(;Bt<3;++Bt){if(this.pos>=this.len)throw ke(this);if(It.lo=(It.lo|(127&this.buf[this.pos])<<7*Bt)>>>0,this.buf[this.pos++]<128)return It}return It.lo=(It.lo|(127&this.buf[this.pos++])<<7*Bt)>>>0,It}for(;Bt<4;++Bt)if(It.lo=(It.lo|(127&this.buf[this.pos])<<7*Bt)>>>0,this.buf[this.pos++]<128)return It;if(It.lo=(It.lo|(127&this.buf[this.pos])<<28)>>>0,It.hi=(It.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return It;if(Bt=0,this.len-this.pos>4){for(;Bt<5;++Bt)if(It.hi=(It.hi|(127&this.buf[this.pos])<<7*Bt+3)>>>0,this.buf[this.pos++]<128)return It}else for(;Bt<5;++Bt){if(this.pos>=this.len)throw ke(this);if(It.hi=(It.hi|(127&this.buf[this.pos])<<7*Bt+3)>>>0,this.buf[this.pos++]<128)return It}throw Error("invalid varint encoding")}function Te(It,Bt){return(It[Bt-4]|It[Bt-3]<<8|It[Bt-2]<<16|It[Bt-1]<<24)>>>0}function Se(){if(this.pos+8>this.len)throw ke(this,8);return new mt(Te(this.buf,this.pos+=4),Te(this.buf,this.pos+=4))}ge.exports=Ee;var Ke,Je=$e(1),mt=Je.LongBits,bt=Je.utf8,$t=typeof Uint8Array!="undefined"?function(It){if(It instanceof Uint8Array||Array.isArray(It))return new Ee(It);throw Error("illegal buffer")}:function(It){if(Array.isArray(It))return new Ee(It);throw Error("illegal buffer")},St=function(){return Je.Buffer?function(It){return(Ee.create=function(Bt){return Je.Buffer.isBuffer(Bt)?new Ke(Bt):$t(Bt)})(It)}:$t};Ee.create=St(),Ee.prototype._slice=Je.Array.prototype.subarray||Je.Array.prototype.slice,Ee.prototype.uint32=function(){var It=4294967295;return function(){if(It=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128||(It=(It|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128)||(It=(It|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128)||(It=(It|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128)||(It=(It|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128))return It;if((this.pos+=5)>this.len)throw this.pos=this.len,ke(this,10);return It}}(),Ee.prototype.int32=function(){return 0|this.uint32()},Ee.prototype.sint32=function(){var It=this.uint32();return It>>>1^-(1&It)|0},Ee.prototype.bool=function(){return this.uint32()!==0},Ee.prototype.fixed32=function(){if(this.pos+4>this.len)throw ke(this,4);return Te(this.buf,this.pos+=4)},Ee.prototype.sfixed32=function(){if(this.pos+4>this.len)throw ke(this,4);return 0|Te(this.buf,this.pos+=4)},Ee.prototype.float=function(){if(this.pos+4>this.len)throw ke(this,4);var It=Je.float.readFloatLE(this.buf,this.pos);return this.pos+=4,It},Ee.prototype.double=function(){if(this.pos+8>this.len)throw ke(this,4);var It=Je.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,It},Ee.prototype.bytes=function(){var It=this.uint32(),Bt=this.pos,Dt=this.pos+It;if(Dt>this.len)throw ke(this,It);return this.pos+=It,Array.isArray(this.buf)?this.buf.slice(Bt,Dt):Bt===Dt?new this.buf.constructor(0):this._slice.call(this.buf,Bt,Dt)},Ee.prototype.string=function(){var It=this.bytes();return bt.read(It,0,It.length)},Ee.prototype.skip=function(It){if(typeof It=="number"){if(this.pos+It>this.len)throw ke(this,It);this.pos+=It}else do if(this.pos>=this.len)throw ke(this);while(128&this.buf[this.pos++]);return this},Ee.prototype.skipType=function(It){switch(It){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(It=7&this.uint32())!=4;)this.skipType(It);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+It+" at offset "+this.pos)}return this},Ee._configure=function(It){Ke=It,Ee.create=St(),Ke._configure();var Bt=Je.Long?"toLong":"toNumber";Je.merge(Ee.prototype,{int64:function(){return Ce.call(this)[Bt](!1)},uint64:function(){return Ce.call(this)[Bt](!0)},sint64:function(){return Ce.call(this).zzDecode()[Bt](!1)},fixed64:function(){return Se.call(this)[Bt](!0)},sfixed64:function(){return Se.call(this)[Bt](!1)}})}},function(ge,be,$e){function ke(Ke,Je,mt,bt){if(Array.isArray(Je)||(mt=Je,Je=void 0),Ce.call(this,Ke,mt),Je!==void 0&&!Array.isArray(Je))throw TypeError("fieldNames must be an Array");this.oneof=Je||[],this.fieldsArray=[],this.comment=bt}function Ee(Ke){if(Ke.parent)for(var Je=0;Je<Ke.fieldsArray.length;++Je)Ke.fieldsArray[Je].parent||Ke.parent.add(Ke.fieldsArray[Je])}ge.exports=ke;var Ce=$e(3);((ke.prototype=Object.create(Ce.prototype)).constructor=ke).className="OneOf";var Te=$e(4),Se=$e(0);ke.fromJSON=function(Ke,Je){return new ke(Ke,Je.oneof,Je.options,Je.comment)},ke.prototype.toJSON=function(Ke){var Je=!!Ke&&Boolean(Ke.keepComments);return Se.toObject(["options",this.options,"oneof",this.oneof,"comment",Je?this.comment:void 0])},ke.prototype.add=function(Ke){if(!(Ke instanceof Te))throw TypeError("field must be a Field");return Ke.parent&&Ke.parent!==this.parent&&Ke.parent.remove(Ke),this.oneof.push(Ke.name),this.fieldsArray.push(Ke),Ke.partOf=this,Ee(this),this},ke.prototype.remove=function(Ke){if(!(Ke instanceof Te))throw TypeError("field must be a Field");var Je=this.fieldsArray.indexOf(Ke);if(Je<0)throw Error(Ke+" is not a member of "+this);return this.fieldsArray.splice(Je,1),(Je=this.oneof.indexOf(Ke.name))>-1&&this.oneof.splice(Je,1),Ke.partOf=null,this},ke.prototype.onAdd=function(Ke){Ce.prototype.onAdd.call(this,Ke);for(var Je=0;Je<this.oneof.length;++Je){var mt=Ke.get(this.oneof[Je]);mt&&!mt.partOf&&(mt.partOf=this,this.fieldsArray.push(mt))}Ee(this)},ke.prototype.onRemove=function(Ke){for(var Je,mt=0;mt<this.fieldsArray.length;++mt)(Je=this.fieldsArray[mt]).parent&&Je.parent.remove(Je);Ce.prototype.onRemove.call(this,Ke)},ke.d=function(){for(var Ke=new Array(arguments.length),Je=0;Je<arguments.length;)Ke[Je]=arguments[Je++];return function(mt,bt){Se.decorateType(mt.constructor).add(new ke(bt,Ke)),Object.defineProperty(mt,bt,{get:Se.oneOfGetter(Ke),set:Se.oneOfSetter(Ke)})}}},function(ge,be,$e){function ke(Ce){if(Ce)for(var Te=Object.keys(Ce),Se=0;Se<Te.length;++Se)this[Te[Se]]=Ce[Te[Se]]}ge.exports=ke;var Ee=$e(1);ke.create=function(Ce){return this.$type.create(Ce)},ke.encode=function(Ce,Te){return this.$type.encode(Ce,Te)},ke.encodeDelimited=function(Ce,Te){return this.$type.encodeDelimited(Ce,Te)},ke.decode=function(Ce){return this.$type.decode(Ce)},ke.decodeDelimited=function(Ce){return this.$type.decodeDelimited(Ce)},ke.verify=function(Ce){return this.$type.verify(Ce)},ke.fromObject=function(Ce){return this.$type.fromObject(Ce)},ke.toObject=function(Ce,Te){return this.$type.toObject(Ce,Te)},ke.prototype.toJSON=function(){return this.$type.toObject(this,Ee.toJSONOptions)}},function(ge,be,$e){Object.defineProperty(be,"__esModule",{value:!0}),be.Parser=void 0;var ke=function(){function Te(Se,Ke){for(var Je=0;Je<Ke.length;Je++){var mt=Ke[Je];mt.enumerable=mt.enumerable||!1,mt.configurable=!0,"value"in mt&&(mt.writable=!0),Object.defineProperty(Se,mt.key,mt)}}return function(Se,Ke,Je){return Ke&&Te(Se.prototype,Ke),Je&&Te(Se,Je),Se}}(),Ee=$e(31),Ce=function(Te){return Te&&Te.__esModule?Te:{default:Te}}($e(50));be.Parser=function(){function Te(){(function(Se,Ke){if(!(Se instanceof Ke))throw new TypeError("Cannot call a class as a function")})(this,Te)}return ke(Te,[{key:"load",value:function(Se,Ke,Je){this.loadViaWorker(Se,Ke,Je)}},{key:"loadViaWorker",value:function(Se,Ke,Je){(0,Ce.default)(Se,function(mt){var bt=mt.movie;bt.version=mt.ver;var $t=mt.images,St=new Ee.VideoEntity(bt,$t);Ke(St)},Je)}}]),Te}()},function(ge,be,$e){Object.defineProperty(be,"__esModule",{value:!0}),be.RectPath=void 0;var ke=$e(5);be.RectPath=function(Ee){function Ce(Te,Se,Ke,Je,mt,bt,$t){(function(It,Bt){if(!(It instanceof Bt))throw new TypeError("Cannot call a class as a function")})(this,Ce);var St=function(It,Bt){if(!It)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!Bt||typeof Bt!="object"&&typeof Bt!="function"?It:Bt}(this,(Ce.__proto__||Object.getPrototypeOf(Ce)).call(this));return St._x=Te,St._y=Se,St._width=Ke,St._height=Je,St._cornerRadius=mt,St._transform=bt,St._styles=$t,St}return function(Te,Se){if(typeof Se!="function"&&Se!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof Se);Te.prototype=Object.create(Se&&Se.prototype,{constructor:{value:Te,enumerable:!1,writable:!0,configurable:!0}}),Se&&(Object.setPrototypeOf?Object.setPrototypeOf(Te,Se):Te.__proto__=Se)}(Ce,Ee),Ce}(ke.BezierPath)},function(ge,be,$e){Object.defineProperty(be,"__esModule",{value:!0}),be.EllipsePath=void 0;var ke=$e(5);be.EllipsePath=function(Ee){function Ce(Te,Se,Ke,Je,mt,bt){(function(St,It){if(!(St instanceof It))throw new TypeError("Cannot call a class as a function")})(this,Ce);var $t=function(St,It){if(!St)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!It||typeof It!="object"&&typeof It!="function"?St:It}(this,(Ce.__proto__||Object.getPrototypeOf(Ce)).call(this));return $t._x=Te,$t._y=Se,$t._radiusX=Ke,$t._radiusY=Je,$t._transform=mt,$t._styles=bt,$t}return function(Te,Se){if(typeof Se!="function"&&Se!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof Se);Te.prototype=Object.create(Se&&Se.prototype,{constructor:{value:Te,enumerable:!1,writable:!0,configurable:!0}}),Se&&(Object.setPrototypeOf?Object.setPrototypeOf(Te,Se):Te.__proto__=Se)}(Ce,Ee),Ce}(ke.BezierPath)},function(ge,be,$e){Object.defineProperty(be,"__esModule",{value:!0});var ke=$e(34),Ee=JSON.parse('{"nested":{"com":{"nested":{"opensource":{"nested":{"svga":{"options":{"objc_class_prefix":"SVGAProto","java_package":"com.opensource.svgaplayer.proto"},"nested":{"MovieParams":{"fields":{"viewBoxWidth":{"type":"float","id":1},"viewBoxHeight":{"type":"float","id":2},"fps":{"type":"int32","id":3},"frames":{"type":"int32","id":4}}},"SpriteEntity":{"fields":{"imageKey":{"type":"string","id":1},"frames":{"rule":"repeated","type":"FrameEntity","id":2},"matteKey":{"type":"string","id":3}}},"AudioEntity":{"fields":{"audioKey":{"type":"string","id":1},"startFrame":{"type":"int32","id":2},"endFrame":{"type":"int32","id":3},"startTime":{"type":"int32","id":4},"totalTime":{"type":"int32","id":5}}},"Layout":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"width":{"type":"float","id":3},"height":{"type":"float","id":4}}},"Transform":{"fields":{"a":{"type":"float","id":1},"b":{"type":"float","id":2},"c":{"type":"float","id":3},"d":{"type":"float","id":4},"tx":{"type":"float","id":5},"ty":{"type":"float","id":6}}},"ShapeEntity":{"oneofs":{"args":{"oneof":["shape","rect","ellipse"]}},"fields":{"type":{"type":"ShapeType","id":1},"shape":{"type":"ShapeArgs","id":2},"rect":{"type":"RectArgs","id":3},"ellipse":{"type":"EllipseArgs","id":4},"styles":{"type":"ShapeStyle","id":10},"transform":{"type":"Transform","id":11}},"nested":{"ShapeType":{"values":{"SHAPE":0,"RECT":1,"ELLIPSE":2,"KEEP":3}},"ShapeArgs":{"fields":{"d":{"type":"string","id":1}}},"RectArgs":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"width":{"type":"float","id":3},"height":{"type":"float","id":4},"cornerRadius":{"type":"float","id":5}}},"EllipseArgs":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"radiusX":{"type":"float","id":3},"radiusY":{"type":"float","id":4}}},"ShapeStyle":{"fields":{"fill":{"type":"RGBAColor","id":1},"stroke":{"type":"RGBAColor","id":2},"strokeWidth":{"type":"float","id":3},"lineCap":{"type":"LineCap","id":4},"lineJoin":{"type":"LineJoin","id":5},"miterLimit":{"type":"float","id":6},"lineDashI":{"type":"float","id":7},"lineDashII":{"type":"float","id":8},"lineDashIII":{"type":"float","id":9}},"nested":{"RGBAColor":{"fields":{"r":{"type":"float","id":1},"g":{"type":"float","id":2},"b":{"type":"float","id":3},"a":{"type":"float","id":4}}},"LineCap":{"values":{"LineCap_BUTT":0,"LineCap_ROUND":1,"LineCap_SQUARE":2}},"LineJoin":{"values":{"LineJoin_MITER":0,"LineJoin_ROUND":1,"LineJoin_BEVEL":2}}}}}},"FrameEntity":{"fields":{"alpha":{"type":"float","id":1},"layout":{"type":"Layout","id":2},"transform":{"type":"Transform","id":3},"clipPath":{"type":"string","id":4},"shapes":{"rule":"repeated","type":"ShapeEntity","id":5}}},"MovieEntity":{"fields":{"version":{"type":"string","id":1},"params":{"type":"MovieParams","id":2},"images":{"keyType":"string","type":"bytes","id":3},"sprites":{"rule":"repeated","type":"SpriteEntity","id":4},"audios":{"rule":"repeated","type":"AudioEntity","id":5}}}}}}}}}}}'),Ce=be.proto=ke.Root.fromJSON(Ee);be.ProtoMovieEntity=Ce.lookupType("com.opensource.svga.MovieEntity")},function(ge,be,$e){ge.exports=function(ke,Ee){for(var Ce=new Array(arguments.length-1),Te=0,Se=2,Ke=!0;Se<arguments.length;)Ce[Te++]=arguments[Se++];return new Promise(function(Je,mt){Ce[Te]=function(bt){if(Ke)if(Ke=!1,bt)mt(bt);else{for(var $t=new Array(arguments.length-1),St=0;St<$t.length;)$t[St++]=arguments[St];Je.apply(null,$t)}};try{ke.apply(Ee||null,Ce)}catch(bt){Ke&&(Ke=!1,mt(bt))}})}},function(module,exports,__webpack_require__){function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(ge){}return null}module.exports=inquire},function(ge,be,$e){be.Service=$e(46)},function(ge,be,$e){ge.exports={}},function(ge,be,$e){function ke(Se,Ke,Je,mt){return Ke.resolvedType.group?Se("types[%i].encode(%s,w.uint32(%i)).uint32(%i)",Je,mt,(Ke.id<<3|3)>>>0,(Ke.id<<3|4)>>>0):Se("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()",Je,mt,(Ke.id<<3|2)>>>0)}ge.exports=function(Se){for(var Ke,Je=Te.codegen(["m","w"],Se.name+"$encode")("if(!w)")("w=Writer.create()"),mt=Se.fieldsArray.slice().sort(Te.compareFieldsById),bt=0;bt<mt.length;++bt){var $t=mt[bt].resolve(),St=Se._fieldsArray.indexOf($t),It=$t.resolvedType instanceof Ee?"int32":$t.type,Bt=Ce.basic[It];Ke="m"+Te.safeProp($t.name),$t.map?(Je("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",Ke,$t.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){",Ke)("w.uint32(%i).fork().uint32(%i).%s(ks[i])",($t.id<<3|2)>>>0,8|Ce.mapKey[$t.keyType],$t.keyType),Bt===void 0?Je("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",St,Ke):Je(".uint32(%i).%s(%s[ks[i]]).ldelim()",16|Bt,It,Ke),Je("}")("}")):$t.repeated?(Je("if(%s!=null&&%s.length){",Ke,Ke),$t.packed&&Ce.packed[It]!==void 0?Je("w.uint32(%i).fork()",($t.id<<3|2)>>>0)("for(var i=0;i<%s.length;++i)",Ke)("w.%s(%s[i])",It,Ke)("w.ldelim()"):(Je("for(var i=0;i<%s.length;++i)",Ke),Bt===void 0?ke(Je,$t,St,Ke+"[i]"):Je("w.uint32(%i).%s(%s[i])",($t.id<<3|Bt)>>>0,It,Ke)),Je("}")):($t.optional&&Je("if(%s!=null&&Object.hasOwnProperty.call(m,%j))",Ke,$t.name),Bt===void 0?ke(Je,$t,St,Ke):Je("w.uint32(%i).%s(%s)",($t.id<<3|Bt)>>>0,It,Ke))}return Je("return w")};var Ee=$e(2),Ce=$e(7),Te=$e(0)},function(ge,be,$e){function ke(qt,vo){Ce.call(this,qt,vo),this.fields={},this.oneofs=void 0,this.extensions=void 0,this.reserved=void 0,this.group=void 0,this._fieldsById=null,this._fieldsArray=null,this._oneofsArray=null,this._ctor=null}function Ee(qt){return qt._fieldsById=qt._fieldsArray=qt._oneofsArray=null,delete qt.encode,delete qt.decode,delete qt.verify,qt}ge.exports=ke;var Ce=$e(6);((ke.prototype=Object.create(Ce.prototype)).constructor=ke).className="Type";var Te=$e(2),Se=$e(11),Ke=$e(4),Je=$e(23),mt=$e(24),bt=$e(12),$t=$e(10),St=$e(9),It=$e(0),Bt=$e(21),Dt=$e(26),jt=$e(27),zt=$e(28),en=$e(29);Object.defineProperties(ke.prototype,{fieldsById:{get:function(){if(this._fieldsById)return this._fieldsById;this._fieldsById={};for(var qt=Object.keys(this.fields),vo=0;vo<qt.length;++vo){var yo=this.fields[qt[vo]],fo=yo.id;if(this._fieldsById[fo])throw Error("duplicate id "+fo+" in "+this);this._fieldsById[fo]=yo}return this._fieldsById}},fieldsArray:{get:function(){return this._fieldsArray||(this._fieldsArray=It.toArray(this.fields))}},oneofsArray:{get:function(){return this._oneofsArray||(this._oneofsArray=It.toArray(this.oneofs))}},ctor:{get:function(){return this._ctor||(this.ctor=ke.generateConstructor(this)())},set:function(qt){var vo=qt.prototype;vo instanceof bt||((qt.prototype=new bt).constructor=qt,It.merge(qt.prototype,vo)),qt.$type=qt.prototype.$type=this,It.merge(qt,bt,!0),this._ctor=qt;for(var yo=0;yo<this.fieldsArray.length;++yo)this._fieldsArray[yo].resolve();var fo={};for(yo=0;yo<this.oneofsArray.length;++yo)fo[this._oneofsArray[yo].resolve().name]={get:It.oneOfGetter(this._oneofsArray[yo].oneof),set:It.oneOfSetter(this._oneofsArray[yo].oneof)};yo&&Object.defineProperties(qt.prototype,fo)}}}),ke.generateConstructor=function(qt){for(var vo,yo=It.codegen(["p"],qt.name),fo=0;fo<qt.fieldsArray.length;++fo)(vo=qt._fieldsArray[fo]).map?yo("this%s={}",It.safeProp(vo.name)):vo.repeated&&yo("this%s=[]",It.safeProp(vo.name));return yo("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")},ke.fromJSON=function(qt,vo){var yo=new ke(qt,vo.options);yo.extensions=vo.extensions,yo.reserved=vo.reserved;for(var fo=Object.keys(vo.fields),bo=0;bo<fo.length;++bo)yo.add((vo.fields[fo[bo]].keyType!==void 0?Je.fromJSON:Ke.fromJSON)(fo[bo],vo.fields[fo[bo]]));if(vo.oneofs)for(fo=Object.keys(vo.oneofs),bo=0;bo<fo.length;++bo)yo.add(Se.fromJSON(fo[bo],vo.oneofs[fo[bo]]));if(vo.nested)for(fo=Object.keys(vo.nested),bo=0;bo<fo.length;++bo){var Ar=vo.nested[fo[bo]];yo.add((Ar.id!==void 0?Ke.fromJSON:Ar.fields!==void 0?ke.fromJSON:Ar.values!==void 0?Te.fromJSON:Ar.methods!==void 0?mt.fromJSON:Ce.fromJSON)(fo[bo],Ar))}return vo.extensions&&vo.extensions.length&&(yo.extensions=vo.extensions),vo.reserved&&vo.reserved.length&&(yo.reserved=vo.reserved),vo.group&&(yo.group=!0),vo.comment&&(yo.comment=vo.comment),yo},ke.prototype.toJSON=function(qt){var vo=Ce.prototype.toJSON.call(this,qt),yo=!!qt&&Boolean(qt.keepComments);return It.toObject(["options",vo&&vo.options||void 0,"oneofs",Ce.arrayToJSON(this.oneofsArray,qt),"fields",Ce.arrayToJSON(this.fieldsArray.filter(function(fo){return!fo.declaringField}),qt)||{},"extensions",this.extensions&&this.extensions.length?this.extensions:void 0,"reserved",this.reserved&&this.reserved.length?this.reserved:void 0,"group",this.group||void 0,"nested",vo&&vo.nested||void 0,"comment",yo?this.comment:void 0])},ke.prototype.resolveAll=function(){for(var qt=this.fieldsArray,vo=0;vo<qt.length;)qt[vo++].resolve();var yo=this.oneofsArray;for(vo=0;vo<yo.length;)yo[vo++].resolve();return Ce.prototype.resolveAll.call(this)},ke.prototype.get=function(qt){return this.fields[qt]||this.oneofs&&this.oneofs[qt]||this.nested&&this.nested[qt]||null},ke.prototype.add=function(qt){if(this.get(qt.name))throw Error("duplicate name '"+qt.name+"' in "+this);if(qt instanceof Ke&&qt.extend===void 0){if(this._fieldsById?this._fieldsById[qt.id]:this.fieldsById[qt.id])throw Error("duplicate id "+qt.id+" in "+this);if(this.isReservedId(qt.id))throw Error("id "+qt.id+" is reserved in "+this);if(this.isReservedName(qt.name))throw Error("name '"+qt.name+"' is reserved in "+this);return qt.parent&&qt.parent.remove(qt),this.fields[qt.name]=qt,qt.message=this,qt.onAdd(this),Ee(this)}return qt instanceof Se?(this.oneofs||(this.oneofs={}),this.oneofs[qt.name]=qt,qt.onAdd(this),Ee(this)):Ce.prototype.add.call(this,qt)},ke.prototype.remove=function(qt){if(qt instanceof Ke&&qt.extend===void 0){if(!this.fields||this.fields[qt.name]!==qt)throw Error(qt+" is not a member of "+this);return delete this.fields[qt.name],qt.parent=null,qt.onRemove(this),Ee(this)}if(qt instanceof Se){if(!this.oneofs||this.oneofs[qt.name]!==qt)throw Error(qt+" is not a member of "+this);return delete this.oneofs[qt.name],qt.parent=null,qt.onRemove(this),Ee(this)}return Ce.prototype.remove.call(this,qt)},ke.prototype.isReservedId=function(qt){return Ce.isReservedId(this.reserved,qt)},ke.prototype.isReservedName=function(qt){return Ce.isReservedName(this.reserved,qt)},ke.prototype.create=function(qt){return new this.ctor(qt)},ke.prototype.setup=function(){for(var qt=this.fullName,vo=[],yo=0;yo<this.fieldsArray.length;++yo)vo.push(this._fieldsArray[yo].resolve().resolvedType);this.encode=Bt(this)({Writer:St,types:vo,util:It}),this.decode=Dt(this)({Reader:$t,types:vo,util:It}),this.verify=jt(this)({types:vo,util:It}),this.fromObject=zt.fromObject(this)({types:vo,util:It}),this.toObject=zt.toObject(this)({types:vo,util:It});var fo=en[qt];if(fo){var bo=Object.create(this);bo.fromObject=this.fromObject,this.fromObject=fo.fromObject.bind(bo),bo.toObject=this.toObject,this.toObject=fo.toObject.bind(bo)}return this},ke.prototype.encode=function(qt,vo){return this.setup().encode(qt,vo)},ke.prototype.encodeDelimited=function(qt,vo){return this.encode(qt,vo&&vo.len?vo.fork():vo).ldelim()},ke.prototype.decode=function(qt,vo){return this.setup().decode(qt,vo)},ke.prototype.decodeDelimited=function(qt){return qt instanceof $t||(qt=$t.create(qt)),this.decode(qt,qt.uint32())},ke.prototype.verify=function(qt){return this.setup().verify(qt)},ke.prototype.fromObject=function(qt){return this.setup().fromObject(qt)},ke.prototype.toObject=function(qt,vo){return this.setup().toObject(qt,vo)},ke.d=function(qt){return function(vo){It.decorateType(vo,qt)}}},function(ge,be,$e){function ke(Se,Ke,Je,mt,bt,$t){if(Ee.call(this,Se,Ke,mt,void 0,void 0,bt,$t),!Te.isString(Je))throw TypeError("keyType must be a string");this.keyType=Je,this.resolvedKeyType=null,this.map=!0}ge.exports=ke;var Ee=$e(4);((ke.prototype=Object.create(Ee.prototype)).constructor=ke).className="MapField";var Ce=$e(7),Te=$e(0);ke.fromJSON=function(Se,Ke){return new ke(Se,Ke.id,Ke.keyType,Ke.type,Ke.options,Ke.comment)},ke.prototype.toJSON=function(Se){var Ke=!!Se&&Boolean(Se.keepComments);return Te.toObject(["keyType",this.keyType,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",Ke?this.comment:void 0])},ke.prototype.resolve=function(){if(this.resolved)return this;if(Ce.mapKey[this.keyType]===void 0)throw Error("invalid key type: "+this.keyType);return Ee.prototype.resolve.call(this)},ke.d=function(Se,Ke,Je){return typeof Je=="function"?Je=Te.decorateType(Je).name:Je&&typeof Je=="object"&&(Je=Te.decorateEnum(Je).name),function(mt,bt){Te.decorateType(mt.constructor).add(new ke(bt,Se,Ke,Je))}}},function(ge,be,$e){function ke(Je,mt){Ce.call(this,Je,mt),this.methods={},this._methodsArray=null}function Ee(Je){return Je._methodsArray=null,Je}ge.exports=ke;var Ce=$e(6);((ke.prototype=Object.create(Ce.prototype)).constructor=ke).className="Service";var Te=$e(25),Se=$e(0),Ke=$e(19);ke.fromJSON=function(Je,mt){var bt=new ke(Je,mt.options);if(mt.methods)for(var $t=Object.keys(mt.methods),St=0;St<$t.length;++St)bt.add(Te.fromJSON($t[St],mt.methods[$t[St]]));return mt.nested&&bt.addJSON(mt.nested),bt.comment=mt.comment,bt},ke.prototype.toJSON=function(Je){var mt=Ce.prototype.toJSON.call(this,Je),bt=!!Je&&Boolean(Je.keepComments);return Se.toObject(["options",mt&&mt.options||void 0,"methods",Ce.arrayToJSON(this.methodsArray,Je)||{},"nested",mt&&mt.nested||void 0,"comment",bt?this.comment:void 0])},Object.defineProperty(ke.prototype,"methodsArray",{get:function(){return this._methodsArray||(this._methodsArray=Se.toArray(this.methods))}}),ke.prototype.get=function(Je){return this.methods[Je]||Ce.prototype.get.call(this,Je)},ke.prototype.resolveAll=function(){for(var Je=this.methodsArray,mt=0;mt<Je.length;++mt)Je[mt].resolve();return Ce.prototype.resolve.call(this)},ke.prototype.add=function(Je){if(this.get(Je.name))throw Error("duplicate name '"+Je.name+"' in "+this);return Je instanceof Te?(this.methods[Je.name]=Je,Je.parent=this,Ee(this)):Ce.prototype.add.call(this,Je)},ke.prototype.remove=function(Je){if(Je instanceof Te){if(this.methods[Je.name]!==Je)throw Error(Je+" is not a member of "+this);return delete this.methods[Je.name],Je.parent=null,Ee(this)}return Ce.prototype.remove.call(this,Je)},ke.prototype.create=function(Je,mt,bt){for(var $t,St=new Ke.Service(Je,mt,bt),It=0;It<this.methodsArray.length;++It){var Bt=Se.lcFirst(($t=this._methodsArray[It]).resolve().name).replace(/[^$\w_]/g,"");St[Bt]=Se.codegen(["r","c"],Se.isReserved(Bt)?Bt+"_":Bt)("return this.rpcCall(m,q,s,r,c)")({m:$t,q:$t.resolvedRequestType.ctor,s:$t.resolvedResponseType.ctor})}return St}},function(ge,be,$e){function ke(Te,Se,Ke,Je,mt,bt,$t,St,It){if(Ce.isObject(mt)?($t=mt,mt=bt=void 0):Ce.isObject(bt)&&($t=bt,bt=void 0),Se!==void 0&&!Ce.isString(Se))throw TypeError("type must be a string");if(!Ce.isString(Ke))throw TypeError("requestType must be a string");if(!Ce.isString(Je))throw TypeError("responseType must be a string");Ee.call(this,Te,$t),this.type=Se||"rpc",this.requestType=Ke,this.requestStream=!!mt||void 0,this.responseType=Je,this.responseStream=!!bt||void 0,this.resolvedRequestType=null,this.resolvedResponseType=null,this.comment=St,this.parsedOptions=It}ge.exports=ke;var Ee=$e(3);((ke.prototype=Object.create(Ee.prototype)).constructor=ke).className="Method";var Ce=$e(0);ke.fromJSON=function(Te,Se){return new ke(Te,Se.type,Se.requestType,Se.responseType,Se.requestStream,Se.responseStream,Se.options,Se.comment,Se.parsedOptions)},ke.prototype.toJSON=function(Te){var Se=!!Te&&Boolean(Te.keepComments);return Ce.toObject(["type",this.type!=="rpc"&&this.type||void 0,"requestType",this.requestType,"requestStream",this.requestStream,"responseType",this.responseType,"responseStream",this.responseStream,"options",this.options,"comment",Se?this.comment:void 0,"parsedOptions",this.parsedOptions])},ke.prototype.resolve=function(){return this.resolved?this:(this.resolvedRequestType=this.parent.lookupType(this.requestType),this.resolvedResponseType=this.parent.lookupType(this.responseType),Ee.prototype.resolve.call(this))}},function(ge,be,$e){function ke(Se){return"missing required '"+Se.name+"'"}ge.exports=function(Se){var Ke=Te.codegen(["r","l"],Se.name+"$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor"+(Se.fieldsArray.filter(function(It){return It.map}).length?",k,value":""))("while(r.pos<c){")("var t=r.uint32()");Se.group&&Ke("if((t&7)===4)")("break"),Ke("switch(t>>>3){");for(var Je=0;Je<Se.fieldsArray.length;++Je){var mt=Se._fieldsArray[Je].resolve(),bt=mt.resolvedType instanceof Ee?"int32":mt.type,$t="m"+Te.safeProp(mt.name);Ke("case %i:",mt.id),mt.map?(Ke("if(%s===util.emptyObject)",$t)("%s={}",$t)("var c2 = r.uint32()+r.pos"),Ce.defaults[mt.keyType]!==void 0?Ke("k=%j",Ce.defaults[mt.keyType]):Ke("k=null"),Ce.defaults[bt]!==void 0?Ke("value=%j",Ce.defaults[bt]):Ke("value=null"),Ke("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break",mt.keyType)("case 2:"),Ce.basic[bt]===void 0?Ke("value=types[%i].decode(r,r.uint32())",Je):Ke("value=r.%s()",bt),Ke("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"),Ce.long[mt.keyType]!==void 0?Ke('%s[typeof k==="object"?util.longToHash(k):k]=value',$t):Ke("%s[k]=value",$t)):mt.repeated?(Ke("if(!(%s&&%s.length))",$t,$t)("%s=[]",$t),Ce.packed[bt]!==void 0&&Ke("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())",$t,bt)("}else"),Ce.basic[bt]===void 0?Ke(mt.resolvedType.group?"%s.push(types[%i].decode(r))":"%s.push(types[%i].decode(r,r.uint32()))",$t,Je):Ke("%s.push(r.%s())",$t,bt)):Ce.basic[bt]===void 0?Ke(mt.resolvedType.group?"%s=types[%i].decode(r)":"%s=types[%i].decode(r,r.uint32())",$t,Je):Ke("%s=r.%s()",$t,bt),Ke("break")}for(Ke("default:")("r.skipType(t&7)")("break")("}")("}"),Je=0;Je<Se._fieldsArray.length;++Je){var St=Se._fieldsArray[Je];St.required&&Ke("if(!m.hasOwnProperty(%j))",St.name)("throw util.ProtocolError(%j,{instance:m})",ke(St))}return Ke("return m")};var Ee=$e(2),Ce=$e(7),Te=$e(0)},function(ge,be,$e){function ke(Ke,Je){return Ke.name+": "+Je+(Ke.repeated&&Je!=="array"?"[]":Ke.map&&Je!=="object"?"{k:"+Ke.keyType+"}":"")+" expected"}function Ee(Ke,Je,mt,bt){if(Je.resolvedType)if(Je.resolvedType instanceof Te){Ke("switch(%s){",bt)("default:")("return%j",ke(Je,"enum value"));for(var $t=Object.keys(Je.resolvedType.values),St=0;St<$t.length;++St)Ke("case %i:",Je.resolvedType.values[$t[St]]);Ke("break")("}")}else Ke("{")("var e=types[%i].verify(%s);",mt,bt)("if(e)")("return%j+e",Je.name+".")("}");else switch(Je.type){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":Ke("if(!util.isInteger(%s))",bt)("return%j",ke(Je,"integer"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":Ke("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",bt,bt,bt,bt)("return%j",ke(Je,"integer|Long"));break;case"float":case"double":Ke('if(typeof %s!=="number")',bt)("return%j",ke(Je,"number"));break;case"bool":Ke('if(typeof %s!=="boolean")',bt)("return%j",ke(Je,"boolean"));break;case"string":Ke("if(!util.isString(%s))",bt)("return%j",ke(Je,"string"));break;case"bytes":Ke('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',bt,bt,bt)("return%j",ke(Je,"buffer"))}return Ke}function Ce(Ke,Je,mt){switch(Je.keyType){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":Ke("if(!util.key32Re.test(%s))",mt)("return%j",ke(Je,"integer key"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":Ke("if(!util.key64Re.test(%s))",mt)("return%j",ke(Je,"integer|Long key"));break;case"bool":Ke("if(!util.key2Re.test(%s))",mt)("return%j",ke(Je,"boolean key"))}return Ke}ge.exports=function(Ke){var Je=Se.codegen(["m"],Ke.name+"$verify")('if(typeof m!=="object"||m===null)')("return%j","object expected"),mt={};Ke.oneofsArray.length&&Je("var p={}");for(var bt=0;bt<Ke.fieldsArray.length;++bt){var $t=Ke._fieldsArray[bt].resolve(),St="m"+Se.safeProp($t.name);if($t.optional&&Je("if(%s!=null&&m.hasOwnProperty(%j)){",St,$t.name),$t.map)Je("if(!util.isObject(%s))",St)("return%j",ke($t,"object"))("var k=Object.keys(%s)",St)("for(var i=0;i<k.length;++i){"),Ce(Je,$t,"k[i]"),Ee(Je,$t,bt,St+"[k[i]]")("}");else if($t.repeated)Je("if(!Array.isArray(%s))",St)("return%j",ke($t,"array"))("for(var i=0;i<%s.length;++i){",St),Ee(Je,$t,bt,St+"[i]")("}");else{if($t.partOf){var It=Se.safeProp($t.partOf.name);mt[$t.partOf.name]===1&&Je("if(p%s===1)",It)("return%j",$t.partOf.name+": multiple values"),mt[$t.partOf.name]=1,Je("p%s=1",It)}Ee(Je,$t,bt,St)}$t.optional&&Je("}")}return Je("return null")};var Te=$e(2),Se=$e(0)},function(ge,be,$e){function ke(Ke,Je,mt,bt){if(Je.resolvedType)if(Je.resolvedType instanceof Te){Ke("switch(d%s){",bt);for(var $t=Je.resolvedType.values,St=Object.keys($t),It=0;It<St.length;++It)Je.repeated&&$t[St[It]]===Je.typeDefault&&Ke("default:"),Ke("case%j:",St[It])("case %i:",$t[St[It]])("m%s=%j",bt,$t[St[It]])("break");Ke("}")}else Ke('if(typeof d%s!=="object")',bt)("throw TypeError(%j)",Je.fullName+": object expected")("m%s=types[%i].fromObject(d%s)",bt,mt,bt);else{var Bt=!1;switch(Je.type){case"double":case"float":Ke("m%s=Number(d%s)",bt,bt);break;case"uint32":case"fixed32":Ke("m%s=d%s>>>0",bt,bt);break;case"int32":case"sint32":case"sfixed32":Ke("m%s=d%s|0",bt,bt);break;case"uint64":Bt=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":Ke("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j",bt,bt,Bt)('else if(typeof d%s==="string")',bt)("m%s=parseInt(d%s,10)",bt,bt)('else if(typeof d%s==="number")',bt)("m%s=d%s",bt,bt)('else if(typeof d%s==="object")',bt)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",bt,bt,bt,Bt?"true":"");break;case"bytes":Ke('if(typeof d%s==="string")',bt)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",bt,bt,bt)("else if(d%s.length)",bt)("m%s=d%s",bt,bt);break;case"string":Ke("m%s=String(d%s)",bt,bt);break;case"bool":Ke("m%s=Boolean(d%s)",bt,bt)}}return Ke}function Ee(Ke,Je,mt,bt){if(Je.resolvedType)Je.resolvedType instanceof Te?Ke("d%s=o.enums===String?types[%i].values[m%s]:m%s",bt,mt,bt,bt):Ke("d%s=types[%i].toObject(m%s,o)",bt,mt,bt);else{var $t=!1;switch(Je.type){case"double":case"float":Ke("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s",bt,bt,bt,bt);break;case"uint64":$t=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":Ke('if(typeof m%s==="number")',bt)("d%s=o.longs===String?String(m%s):m%s",bt,bt,bt)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",bt,bt,bt,bt,$t?"true":"",bt);break;case"bytes":Ke("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",bt,bt,bt,bt,bt);break;default:Ke("d%s=m%s",bt,bt)}}return Ke}var Ce=be,Te=$e(2),Se=$e(0);Ce.fromObject=function(Ke){var Je=Ke.fieldsArray,mt=Se.codegen(["d"],Ke.name+"$fromObject")("if(d instanceof this.ctor)")("return d");if(!Je.length)return mt("return new this.ctor");mt("var m=new this.ctor");for(var bt=0;bt<Je.length;++bt){var $t=Je[bt].resolve(),St=Se.safeProp($t.name);$t.map?(mt("if(d%s){",St)('if(typeof d%s!=="object")',St)("throw TypeError(%j)",$t.fullName+": object expected")("m%s={}",St)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",St),ke(mt,$t,bt,St+"[ks[i]]")("}")("}")):$t.repeated?(mt("if(d%s){",St)("if(!Array.isArray(d%s))",St)("throw TypeError(%j)",$t.fullName+": array expected")("m%s=[]",St)("for(var i=0;i<d%s.length;++i){",St),ke(mt,$t,bt,St+"[i]")("}")("}")):($t.resolvedType instanceof Te||mt("if(d%s!=null){",St),ke(mt,$t,bt,St),$t.resolvedType instanceof Te||mt("}"))}return mt("return m")},Ce.toObject=function(Ke){var Je=Ke.fieldsArray.slice().sort(Se.compareFieldsById);if(!Je.length)return Se.codegen()("return {}");for(var mt=Se.codegen(["m","o"],Ke.name+"$toObject")("if(!o)")("o={}")("var d={}"),bt=[],$t=[],St=[],It=0;It<Je.length;++It)Je[It].partOf||(Je[It].resolve().repeated?bt:Je[It].map?$t:St).push(Je[It]);if(bt.length){for(mt("if(o.arrays||o.defaults){"),It=0;It<bt.length;++It)mt("d%s=[]",Se.safeProp(bt[It].name));mt("}")}if($t.length){for(mt("if(o.objects||o.defaults){"),It=0;It<$t.length;++It)mt("d%s={}",Se.safeProp($t[It].name));mt("}")}if(St.length){for(mt("if(o.defaults){"),It=0;It<St.length;++It){var Bt=St[It],Dt=Se.safeProp(Bt.name);if(Bt.resolvedType instanceof Te)mt("d%s=o.enums===String?%j:%j",Dt,Bt.resolvedType.valuesById[Bt.typeDefault],Bt.typeDefault);else if(Bt.long)mt("if(util.Long){")("var n=new util.Long(%i,%i,%j)",Bt.typeDefault.low,Bt.typeDefault.high,Bt.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",Dt)("}else")("d%s=o.longs===String?%j:%i",Dt,Bt.typeDefault.toString(),Bt.typeDefault.toNumber());else if(Bt.bytes){var jt="["+Array.prototype.slice.call(Bt.typeDefault).join(",")+"]";mt("if(o.bytes===String)d%s=%j",Dt,String.fromCharCode.apply(String,Bt.typeDefault))("else{")("d%s=%s",Dt,jt)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)",Dt,Dt)("}")}else mt("d%s=%j",Dt,Bt.typeDefault)}mt("}")}var zt=!1;for(It=0;It<Je.length;++It){Bt=Je[It];var en=Ke._fieldsArray.indexOf(Bt);Dt=Se.safeProp(Bt.name),Bt.map?(zt||(zt=!0,mt("var ks2")),mt("if(m%s&&(ks2=Object.keys(m%s)).length){",Dt,Dt)("d%s={}",Dt)("for(var j=0;j<ks2.length;++j){"),Ee(mt,Bt,en,Dt+"[ks2[j]]")("}")):Bt.repeated?(mt("if(m%s&&m%s.length){",Dt,Dt)("d%s=[]",Dt)("for(var j=0;j<m%s.length;++j){",Dt),Ee(mt,Bt,en,Dt+"[j]")("}")):(mt("if(m%s!=null&&m.hasOwnProperty(%j)){",Dt,Bt.name),Ee(mt,Bt,en,Dt),Bt.partOf&&mt("if(o.oneofs)")("d%s=%j",Se.safeProp(Bt.partOf.name),Bt.name)),mt("}")}return mt("return d")}},function(ge,be,$e){var ke=be,Ee=$e(12);ke[".google.protobuf.Any"]={fromObject:function(Ce){if(Ce&&Ce["@type"]){var Te=Ce["@type"].substring(Ce["@type"].lastIndexOf("/")+1),Se=this.lookup(Te);if(Se){var Ke=Ce["@type"].charAt(0)==="."?Ce["@type"].substr(1):Ce["@type"];return Ke.indexOf("/")===-1&&(Ke="/"+Ke),this.create({type_url:Ke,value:Se.encode(Se.fromObject(Ce)).finish()})}}return this.fromObject(Ce)},toObject:function(Ce,Te){var Se="",Ke="";if(Te&&Te.json&&Ce.type_url&&Ce.value){Ke=Ce.type_url.substring(Ce.type_url.lastIndexOf("/")+1),Se=Ce.type_url.substring(0,Ce.type_url.lastIndexOf("/")+1);var Je=this.lookup(Ke);Je&&(Ce=Je.decode(Ce.value))}if(!(Ce instanceof this.ctor)&&Ce instanceof Ee){var mt=Ce.$type.toObject(Ce,Te);return Se===""&&(Se="type.googleapis.com/"),Ke=Se+(Ce.$type.fullName[0]==="."?Ce.$type.fullName.substr(1):Ce.$type.fullName),mt["@type"]=Ke,mt}return this.toObject(Ce,Te)}}},function(ge,be,$e){function ke(Bt){Te.call(this,"",Bt),this.deferred=[],this.files=[]}function Ee(){}function Ce(Bt,Dt){var jt=Dt.parent.lookup(Dt.extend);if(jt){var zt=new mt(Dt.fullName,Dt.id,Dt.type,Dt.rule,void 0,Dt.options);return zt.declaringField=Dt,Dt.extensionField=zt,jt.add(zt),!0}return!1}ge.exports=ke;var Te=$e(6);((ke.prototype=Object.create(Te.prototype)).constructor=ke).className="Root";var Se,Ke,Je,mt=$e(4),bt=$e(2),$t=$e(11),St=$e(0);ke.fromJSON=function(Bt,Dt){return Dt||(Dt=new ke),Bt.options&&Dt.setOptions(Bt.options),Dt.addJSON(Bt.nested)},ke.prototype.resolvePath=St.path.resolve,ke.prototype.fetch=St.fetch,ke.prototype.load=function Bt(Dt,jt,zt){function en(go,wo){if(zt){var ir=zt;if(zt=null,bo)throw go;ir(go,wo)}}function qt(go){var wo=go.lastIndexOf("google/protobuf/");if(wo>-1){var ir=go.substring(wo);if(ir in Je)return ir}return null}function vo(go,wo){try{if(St.isString(wo)&&wo.charAt(0)==="{"&&(wo=JSON.parse(wo)),St.isString(wo)){Ke.filename=go;var ir,bs=Ke(wo,fo,jt),xs=0;if(bs.imports)for(;xs<bs.imports.length;++xs)(ir=qt(bs.imports[xs])||fo.resolvePath(go,bs.imports[xs]))&&yo(ir);if(bs.weakImports)for(xs=0;xs<bs.weakImports.length;++xs)(ir=qt(bs.weakImports[xs])||fo.resolvePath(go,bs.weakImports[xs]))&&yo(ir,!0)}else fo.setOptions(wo.options).addJSON(wo.nested)}catch(ks){en(ks)}bo||Ar||en(null,fo)}function yo(go,wo){if(!(fo.files.indexOf(go)>-1)){if(fo.files.push(go),go in Je)return void(bo?vo(go,Je[go]):(++Ar,setTimeout(function(){--Ar,vo(go,Je[go])})));if(bo){var ir;try{ir=St.fs.readFileSync(go).toString("utf8")}catch(bs){return void(wo||en(bs))}vo(go,ir)}else++Ar,fo.fetch(go,function(bs,xs){if(--Ar,zt)return bs?void(wo?Ar||en(null,fo):en(bs)):void vo(go,xs)})}}typeof jt=="function"&&(zt=jt,jt=void 0);var fo=this;if(!zt)return St.asPromise(Bt,fo,Dt,jt);var bo=zt===Ee,Ar=0;St.isString(Dt)&&(Dt=[Dt]);for(var fs,ms=0;ms<Dt.length;++ms)(fs=fo.resolvePath("",Dt[ms]))&&yo(fs);if(bo)return fo;Ar||en(null,fo)},ke.prototype.loadSync=function(Bt,Dt){if(!St.isNode)throw Error("not supported");return this.load(Bt,Dt,Ee)},ke.prototype.resolveAll=function(){if(this.deferred.length)throw Error("unresolvable extensions: "+this.deferred.map(function(Bt){return"'extend "+Bt.extend+"' in "+Bt.parent.fullName}).join(", "));return Te.prototype.resolveAll.call(this)};var It=/^[A-Z]/;ke.prototype._handleAdd=function(Bt){if(Bt instanceof mt)Bt.extend===void 0||Bt.extensionField||Ce(0,Bt)||this.deferred.push(Bt);else if(Bt instanceof bt)It.test(Bt.name)&&(Bt.parent[Bt.name]=Bt.values);else if(!(Bt instanceof $t)){if(Bt instanceof Se)for(var Dt=0;Dt<this.deferred.length;)Ce(0,this.deferred[Dt])?this.deferred.splice(Dt,1):++Dt;for(var jt=0;jt<Bt.nestedArray.length;++jt)this._handleAdd(Bt._nestedArray[jt]);It.test(Bt.name)&&(Bt.parent[Bt.name]=Bt)}},ke.prototype._handleRemove=function(Bt){if(Bt instanceof mt){if(Bt.extend!==void 0)if(Bt.extensionField)Bt.extensionField.parent.remove(Bt.extensionField),Bt.extensionField=null;else{var Dt=this.deferred.indexOf(Bt);Dt>-1&&this.deferred.splice(Dt,1)}}else if(Bt instanceof bt)It.test(Bt.name)&&delete Bt.parent[Bt.name];else if(Bt instanceof Te){for(var jt=0;jt<Bt.nestedArray.length;++jt)this._handleRemove(Bt._nestedArray[jt]);It.test(Bt.name)&&delete Bt.parent[Bt.name]}},ke._configure=function(Bt,Dt,jt){Se=Bt,Ke=Dt,Je=jt}},function(ge,be,$e){Object.defineProperty(be,"__esModule",{value:!0}),be.VideoEntity=void 0;var ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Se){return typeof Se}:function(Se){return Se&&typeof Symbol=="function"&&Se.constructor===Symbol&&Se!==Symbol.prototype?"symbol":typeof Se},Ee=function(){function Se(Ke,Je){for(var mt=0;mt<Je.length;mt++){var bt=Je[mt];bt.enumerable=bt.enumerable||!1,bt.configurable=!0,"value"in bt&&(bt.writable=!0),Object.defineProperty(Ke,bt.key,bt)}}return function(Ke,Je,mt){return Je&&Se(Ke.prototype,Je),mt&&Se(Ke,mt),Ke}}(),Ce=$e(32),Te=$e(16).ProtoMovieEntity;be.VideoEntity=function(){function Se(Ke,Je){(function(mt,bt){if(!(mt instanceof bt))throw new TypeError("Cannot call a class as a function")})(this,Se),this.version="",this.videoSize={width:0,height:0},this.FPS=20,this.frames=0,this.images={},this.sprites=[],this.audios=[],(Ke===void 0?"undefined":ke(Ke))==="object"&&Ke.$type==Te?(ke(Ke.params)==="object"&&(this.version=Ke.ver,this.videoSize.width=Ke.params.viewBoxWidth||0,this.videoSize.height=Ke.params.viewBoxHeight||0,this.FPS=Ke.params.fps||20,this.frames=Ke.params.frames||0),this.resetSprites(Ke),this.audios=Ke.audios):Ke&&(Ke.movie&&(Ke.movie.viewBox&&(this.videoSize.width=parseFloat(Ke.movie.viewBox.width)||0,this.videoSize.height=parseFloat(Ke.movie.viewBox.height)||0),this.version=Ke.ver,this.FPS=parseInt(Ke.movie.fps)||20,this.frames=parseInt(Ke.movie.frames)||0),this.resetSprites(Ke)),Je&&(this.images=Je)}return Ee(Se,[{key:"resetSprites",value:function(Ke){Ke.sprites instanceof Array&&(this.sprites=Ke.sprites.map(function(Je){return new Ce.SpriteEntity(Je)}))}}]),Se}()},function(ge,be,$e){Object.defineProperty(be,"__esModule",{value:!0}),be.SpriteEntity=void 0;var ke=$e(33);$e(5),$e(14),$e(15),be.SpriteEntity=function Ee(Ce){(function(Te,Se){if(!(Te instanceof Se))throw new TypeError("Cannot call a class as a function")})(this,Ee),this.matteKey=null,this.imageKey=null,this.frames=[],this.matteKey=Ce.matteKey,this.imageKey=Ce.imageKey,Ce.frames&&(this.frames=Ce.frames.map(function(Te){return new ke.FrameEntity(Te)}))}},function(ge,be,$e){Object.defineProperty(be,"__esModule",{value:!0}),be.FrameEntity=void 0;var ke=$e(5);be.FrameEntity=function Ee(Ce){(function(It,Bt){if(!(It instanceof Bt))throw new TypeError("Cannot call a class as a function")})(this,Ee),this.alpha=0,this.transform={a:1,b:0,c:0,d:1,tx:0,ty:0},this.layout={x:0,y:0,width:0,height:0},this.nx=0,this.ny=0,this.maskPath=null,this.shapes=[],this.alpha=parseFloat(Ce.alpha)||0,Ce.layout&&(this.layout.x=parseFloat(Ce.layout.x)||0,this.layout.y=parseFloat(Ce.layout.y)||0,this.layout.width=parseFloat(Ce.layout.width)||0,this.layout.height=parseFloat(Ce.layout.height)||0),Ce.transform&&(this.transform.a=parseFloat(Ce.transform.a)||1,this.transform.b=parseFloat(Ce.transform.b)||0,this.transform.c=parseFloat(Ce.transform.c)||0,this.transform.d=parseFloat(Ce.transform.d)||1,this.transform.tx=parseFloat(Ce.transform.tx)||0,this.transform.ty=parseFloat(Ce.transform.ty)||0),Ce.clipPath&&Ce.clipPath.length>0&&(this.maskPath=new ke.BezierPath(Ce.clipPath,void 0,{fill:"#000000"})),Ce.shapes&&(Ce.shapes instanceof Array&&Ce.shapes.forEach(function(It){switch(It.pathArgs=It.args,It.type){case 0:It.type="shape",It.pathArgs=It.shape;break;case 1:It.type="rect",It.pathArgs=It.rect;break;case 2:It.type="ellipse",It.pathArgs=It.ellipse;break;case 3:It.type="keep"}if(It.styles){It.styles.fill&&(typeof It.styles.fill.r=="number"&&(It.styles.fill[0]=It.styles.fill.r),typeof It.styles.fill.g=="number"&&(It.styles.fill[1]=It.styles.fill.g),typeof It.styles.fill.b=="number"&&(It.styles.fill[2]=It.styles.fill.b),typeof It.styles.fill.a=="number"&&(It.styles.fill[3]=It.styles.fill.a)),It.styles.stroke&&(typeof It.styles.stroke.r=="number"&&(It.styles.stroke[0]=It.styles.stroke.r),typeof It.styles.stroke.g=="number"&&(It.styles.stroke[1]=It.styles.stroke.g),typeof It.styles.stroke.b=="number"&&(It.styles.stroke[2]=It.styles.stroke.b),typeof It.styles.stroke.a=="number"&&(It.styles.stroke[3]=It.styles.stroke.a));var Bt=It.styles.lineDash||[];switch(It.styles.lineDashI>0&&Bt.push(It.styles.lineDashI),It.styles.lineDashII>0&&(Bt.length<1&&Bt.push(0),Bt.push(It.styles.lineDashII),Bt.push(0)),It.styles.lineDashIII>0&&(Bt.length<2&&(Bt.push(0),Bt.push(0)),Bt[2]=It.styles.lineDashIII),It.styles.lineDash=Bt,It.styles.lineJoin){case 0:It.styles.lineJoin="miter";break;case 1:It.styles.lineJoin="round";break;case 2:It.styles.lineJoin="bevel"}switch(It.styles.lineCap){case 0:It.styles.lineCap="butt";break;case 1:It.styles.lineCap="round";break;case 2:It.styles.lineCap="square"}}}),Ce.shapes[0]&&Ce.shapes[0].type==="keep"?this.shapes=Ee.lastShapes:(this.shapes=Ce.shapes,Ee.lastShapes=Ce.shapes));var Te=this.transform.a*this.layout.x+this.transform.c*this.layout.y+this.transform.tx,Se=this.transform.a*(this.layout.x+this.layout.width)+this.transform.c*this.layout.y+this.transform.tx,Ke=this.transform.a*this.layout.x+this.transform.c*(this.layout.y+this.layout.height)+this.transform.tx,Je=this.transform.a*(this.layout.x+this.layout.width)+this.transform.c*(this.layout.y+this.layout.height)+this.transform.tx,mt=this.transform.b*this.layout.x+this.transform.d*this.layout.y+this.transform.ty,bt=this.transform.b*(this.layout.x+this.layout.width)+this.transform.d*this.layout.y+this.transform.ty,$t=this.transform.b*this.layout.x+this.transform.d*(this.layout.y+this.layout.height)+this.transform.ty,St=this.transform.b*(this.layout.x+this.layout.width)+this.transform.d*(this.layout.y+this.layout.height)+this.transform.ty;this.nx=Math.min(Math.min(Ke,Je),Math.min(Te,Se)),this.ny=Math.min(Math.min($t,St),Math.min(mt,bt))}},function(ge,be,$e){ge.exports=$e(35)},function(ge,be,$e){var ke=ge.exports=$e(36);ke.build="light",ke.load=function(Ee,Ce,Te){return typeof Ce=="function"?(Te=Ce,Ce=new ke.Root):Ce||(Ce=new ke.Root),Ce.load(Ee,Te)},ke.loadSync=function(Ee,Ce){return Ce||(Ce=new ke.Root),Ce.loadSync(Ee)},ke.encoder=$e(21),ke.decoder=$e(26),ke.verifier=$e(27),ke.converter=$e(28),ke.ReflectionObject=$e(3),ke.Namespace=$e(6),ke.Root=$e(30),ke.Enum=$e(2),ke.Type=$e(22),ke.Field=$e(4),ke.OneOf=$e(11),ke.MapField=$e(23),ke.Service=$e(24),ke.Method=$e(25),ke.Message=$e(12),ke.wrappers=$e(29),ke.types=$e(7),ke.util=$e(0),ke.ReflectionObject._configure(ke.Root),ke.Namespace._configure(ke.Type,ke.Service,ke.Enum),ke.Root._configure(ke.Type),ke.Field._configure(ke.Type)},function(ge,be,$e){function ke(){Ee.util._configure(),Ee.Writer._configure(Ee.BufferWriter),Ee.Reader._configure(Ee.BufferReader)}var Ee=be;Ee.build="minimal",Ee.Writer=$e(9),Ee.BufferWriter=$e(44),Ee.Reader=$e(10),Ee.BufferReader=$e(45),Ee.util=$e(1),Ee.rpc=$e(19),Ee.roots=$e(20),Ee.configure=ke,ke()},function(ge,be){var $e;$e=function(){return this}();try{$e=$e||new Function("return this")()}catch{typeof window=="object"&&($e=window)}ge.exports=$e},function(ge,be,$e){var ke=be;ke.length=function(Se){var Ke=Se.length;if(!Ke)return 0;for(var Je=0;--Ke%4>1&&Se.charAt(Ke)==="=";)++Je;return Math.ceil(3*Se.length)/4-Je};for(var Ee=new Array(64),Ce=new Array(123),Te=0;Te<64;)Ce[Ee[Te]=Te<26?Te+65:Te<52?Te+71:Te<62?Te-4:Te-59|43]=Te++;ke.encode=function(Se,Ke,Je){for(var mt,bt=null,$t=[],St=0,It=0;Ke<Je;){var Bt=Se[Ke++];switch(It){case 0:$t[St++]=Ee[Bt>>2],mt=(3&Bt)<<4,It=1;break;case 1:$t[St++]=Ee[mt|Bt>>4],mt=(15&Bt)<<2,It=2;break;case 2:$t[St++]=Ee[mt|Bt>>6],$t[St++]=Ee[63&Bt],It=0}St>8191&&((bt||(bt=[])).push(String.fromCharCode.apply(String,$t)),St=0)}return It&&($t[St++]=Ee[mt],$t[St++]=61,It===1&&($t[St++]=61)),bt?(St&&bt.push(String.fromCharCode.apply(String,$t.slice(0,St))),bt.join("")):String.fromCharCode.apply(String,$t.slice(0,St))},ke.decode=function(Se,Ke,Je){for(var mt,bt=Je,$t=0,St=0;St<Se.length;){var It=Se.charCodeAt(St++);if(It===61&&$t>1)break;if((It=Ce[It])===void 0)throw Error("invalid encoding");switch($t){case 0:mt=It,$t=1;break;case 1:Ke[Je++]=mt<<2|(48&It)>>4,mt=It,$t=2;break;case 2:Ke[Je++]=(15&mt)<<4|(60&It)>>2,mt=It,$t=3;break;case 3:Ke[Je++]=(3&mt)<<6|It,$t=0}}if($t===1)throw Error("invalid encoding");return Je-bt},ke.test=function(Se){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(Se)}},function(ge,be,$e){function ke(){this._listeners={}}ge.exports=ke,ke.prototype.on=function(Ee,Ce,Te){return(this._listeners[Ee]||(this._listeners[Ee]=[])).push({fn:Ce,ctx:Te||this}),this},ke.prototype.off=function(Ee,Ce){if(Ee===void 0)this._listeners={};else if(Ce===void 0)this._listeners[Ee]=[];else for(var Te=this._listeners[Ee],Se=0;Se<Te.length;)Te[Se].fn===Ce?Te.splice(Se,1):++Se;return this},ke.prototype.emit=function(Ee){var Ce=this._listeners[Ee];if(Ce){for(var Te=[],Se=1;Se<arguments.length;)Te.push(arguments[Se++]);for(Se=0;Se<Ce.length;)Ce[Se].fn.apply(Ce[Se++].ctx,Te)}return this}},function(ge,be,$e){function ke(Ke){return typeof Float32Array!="undefined"?function(){function Je(Dt,jt,zt){St[0]=Dt,jt[zt]=It[0],jt[zt+1]=It[1],jt[zt+2]=It[2],jt[zt+3]=It[3]}function mt(Dt,jt,zt){St[0]=Dt,jt[zt]=It[3],jt[zt+1]=It[2],jt[zt+2]=It[1],jt[zt+3]=It[0]}function bt(Dt,jt){return It[0]=Dt[jt],It[1]=Dt[jt+1],It[2]=Dt[jt+2],It[3]=Dt[jt+3],St[0]}function $t(Dt,jt){return It[3]=Dt[jt],It[2]=Dt[jt+1],It[1]=Dt[jt+2],It[0]=Dt[jt+3],St[0]}var St=new Float32Array([-0]),It=new Uint8Array(St.buffer),Bt=It[3]===128;Ke.writeFloatLE=Bt?Je:mt,Ke.writeFloatBE=Bt?mt:Je,Ke.readFloatLE=Bt?bt:$t,Ke.readFloatBE=Bt?$t:bt}():function(){function Je(bt,$t,St,It){var Bt=$t<0?1:0;if(Bt&&($t=-$t),$t===0)bt(1/$t>0?0:2147483648,St,It);else if(isNaN($t))bt(2143289344,St,It);else if($t>34028234663852886e22)bt((Bt<<31|2139095040)>>>0,St,It);else if($t<11754943508222875e-54)bt((Bt<<31|Math.round($t/1401298464324817e-60))>>>0,St,It);else{var Dt=Math.floor(Math.log($t)/Math.LN2);bt((Bt<<31|Dt+127<<23|8388607&Math.round($t*Math.pow(2,-Dt)*8388608))>>>0,St,It)}}function mt(bt,$t,St){var It=bt($t,St),Bt=2*(It>>31)+1,Dt=It>>>23&255,jt=8388607&It;return Dt===255?jt?NaN:Bt*(1/0):Dt===0?1401298464324817e-60*Bt*jt:Bt*Math.pow(2,Dt-150)*(jt+8388608)}Ke.writeFloatLE=Je.bind(null,Ee),Ke.writeFloatBE=Je.bind(null,Ce),Ke.readFloatLE=mt.bind(null,Te),Ke.readFloatBE=mt.bind(null,Se)}(),typeof Float64Array!="undefined"?function(){function Je(Dt,jt,zt){St[0]=Dt,jt[zt]=It[0],jt[zt+1]=It[1],jt[zt+2]=It[2],jt[zt+3]=It[3],jt[zt+4]=It[4],jt[zt+5]=It[5],jt[zt+6]=It[6],jt[zt+7]=It[7]}function mt(Dt,jt,zt){St[0]=Dt,jt[zt]=It[7],jt[zt+1]=It[6],jt[zt+2]=It[5],jt[zt+3]=It[4],jt[zt+4]=It[3],jt[zt+5]=It[2],jt[zt+6]=It[1],jt[zt+7]=It[0]}function bt(Dt,jt){return It[0]=Dt[jt],It[1]=Dt[jt+1],It[2]=Dt[jt+2],It[3]=Dt[jt+3],It[4]=Dt[jt+4],It[5]=Dt[jt+5],It[6]=Dt[jt+6],It[7]=Dt[jt+7],St[0]}function $t(Dt,jt){return It[7]=Dt[jt],It[6]=Dt[jt+1],It[5]=Dt[jt+2],It[4]=Dt[jt+3],It[3]=Dt[jt+4],It[2]=Dt[jt+5],It[1]=Dt[jt+6],It[0]=Dt[jt+7],St[0]}var St=new Float64Array([-0]),It=new Uint8Array(St.buffer),Bt=It[7]===128;Ke.writeDoubleLE=Bt?Je:mt,Ke.writeDoubleBE=Bt?mt:Je,Ke.readDoubleLE=Bt?bt:$t,Ke.readDoubleBE=Bt?$t:bt}():function(){function Je(bt,$t,St,It,Bt,Dt){var jt=It<0?1:0;if(jt&&(It=-It),It===0)bt(0,Bt,Dt+$t),bt(1/It>0?0:2147483648,Bt,Dt+St);else if(isNaN(It))bt(0,Bt,Dt+$t),bt(2146959360,Bt,Dt+St);else if(It>17976931348623157e292)bt(0,Bt,Dt+$t),bt((jt<<31|2146435072)>>>0,Bt,Dt+St);else{var zt;if(It<22250738585072014e-324)bt((zt=It/5e-324)>>>0,Bt,Dt+$t),bt((jt<<31|zt/4294967296)>>>0,Bt,Dt+St);else{var en=Math.floor(Math.log(It)/Math.LN2);en===1024&&(en=1023),bt(4503599627370496*(zt=It*Math.pow(2,-en))>>>0,Bt,Dt+$t),bt((jt<<31|en+1023<<20|1048576*zt&1048575)>>>0,Bt,Dt+St)}}}function mt(bt,$t,St,It,Bt){var Dt=bt(It,Bt+$t),jt=bt(It,Bt+St),zt=2*(jt>>31)+1,en=jt>>>20&2047,qt=4294967296*(1048575&jt)+Dt;return en===2047?qt?NaN:zt*(1/0):en===0?5e-324*zt*qt:zt*Math.pow(2,en-1075)*(qt+4503599627370496)}Ke.writeDoubleLE=Je.bind(null,Ee,0,4),Ke.writeDoubleBE=Je.bind(null,Ce,4,0),Ke.readDoubleLE=mt.bind(null,Te,0,4),Ke.readDoubleBE=mt.bind(null,Se,4,0)}(),Ke}function Ee(Ke,Je,mt){Je[mt]=255&Ke,Je[mt+1]=Ke>>>8&255,Je[mt+2]=Ke>>>16&255,Je[mt+3]=Ke>>>24}function Ce(Ke,Je,mt){Je[mt]=Ke>>>24,Je[mt+1]=Ke>>>16&255,Je[mt+2]=Ke>>>8&255,Je[mt+3]=255&Ke}function Te(Ke,Je){return(Ke[Je]|Ke[Je+1]<<8|Ke[Je+2]<<16|Ke[Je+3]<<24)>>>0}function Se(Ke,Je){return(Ke[Je]<<24|Ke[Je+1]<<16|Ke[Je+2]<<8|Ke[Je+3])>>>0}ge.exports=ke(ke)},function(ge,be,$e){var ke=be;ke.length=function(Ee){for(var Ce=0,Te=0,Se=0;Se<Ee.length;++Se)(Te=Ee.charCodeAt(Se))<128?Ce+=1:Te<2048?Ce+=2:(64512&Te)==55296&&(64512&Ee.charCodeAt(Se+1))==56320?(++Se,Ce+=4):Ce+=3;return Ce},ke.read=function(Ee,Ce,Te){if(Te-Ce<1)return"";for(var Se,Ke=null,Je=[],mt=0;Ce<Te;)(Se=Ee[Ce++])<128?Je[mt++]=Se:Se>191&&Se<224?Je[mt++]=(31&Se)<<6|63&Ee[Ce++]:Se>239&&Se<365?(Se=((7&Se)<<18|(63&Ee[Ce++])<<12|(63&Ee[Ce++])<<6|63&Ee[Ce++])-65536,Je[mt++]=55296+(Se>>10),Je[mt++]=56320+(1023&Se)):Je[mt++]=(15&Se)<<12|(63&Ee[Ce++])<<6|63&Ee[Ce++],mt>8191&&((Ke||(Ke=[])).push(String.fromCharCode.apply(String,Je)),mt=0);return Ke?(mt&&Ke.push(String.fromCharCode.apply(String,Je.slice(0,mt))),Ke.join("")):String.fromCharCode.apply(String,Je.slice(0,mt))},ke.write=function(Ee,Ce,Te){for(var Se,Ke,Je=Te,mt=0;mt<Ee.length;++mt)(Se=Ee.charCodeAt(mt))<128?Ce[Te++]=Se:Se<2048?(Ce[Te++]=Se>>6|192,Ce[Te++]=63&Se|128):(64512&Se)==55296&&(64512&(Ke=Ee.charCodeAt(mt+1)))==56320?(Se=65536+((1023&Se)<<10)+(1023&Ke),++mt,Ce[Te++]=Se>>18|240,Ce[Te++]=Se>>12&63|128,Ce[Te++]=Se>>6&63|128,Ce[Te++]=63&Se|128):(Ce[Te++]=Se>>12|224,Ce[Te++]=Se>>6&63|128,Ce[Te++]=63&Se|128);return Te-Je}},function(ge,be,$e){ge.exports=function(ke,Ee,Ce){var Te=Ce||8192,Se=Te>>>1,Ke=null,Je=Te;return function(mt){if(mt<1||mt>Se)return ke(mt);Je+mt>Te&&(Ke=ke(Te),Je=0);var bt=Ee.call(Ke,Je,Je+=mt);return 7&Je&&(Je=1+(7|Je)),bt}}},function(ge,be,$e){function ke(Ke,Je){this.lo=Ke>>>0,this.hi=Je>>>0}ge.exports=ke;var Ee=$e(1),Ce=ke.zero=new ke(0,0);Ce.toNumber=function(){return 0},Ce.zzEncode=Ce.zzDecode=function(){return this},Ce.length=function(){return 1};var Te=ke.zeroHash="\0\0\0\0\0\0\0\0";ke.fromNumber=function(Ke){if(Ke===0)return Ce;var Je=Ke<0;Je&&(Ke=-Ke);var mt=Ke>>>0,bt=(Ke-mt)/4294967296>>>0;return Je&&(bt=~bt>>>0,mt=~mt>>>0,++mt>4294967295&&(mt=0,++bt>4294967295&&(bt=0))),new ke(mt,bt)},ke.from=function(Ke){if(typeof Ke=="number")return ke.fromNumber(Ke);if(Ee.isString(Ke)){if(!Ee.Long)return ke.fromNumber(parseInt(Ke,10));Ke=Ee.Long.fromString(Ke)}return Ke.low||Ke.high?new ke(Ke.low>>>0,Ke.high>>>0):Ce},ke.prototype.toNumber=function(Ke){if(!Ke&&this.hi>>>31){var Je=1+~this.lo>>>0,mt=~this.hi>>>0;return Je||(mt=mt+1>>>0),-(Je+4294967296*mt)}return this.lo+4294967296*this.hi},ke.prototype.toLong=function(Ke){return Ee.Long?new Ee.Long(0|this.lo,0|this.hi,Boolean(Ke)):{low:0|this.lo,high:0|this.hi,unsigned:Boolean(Ke)}};var Se=String.prototype.charCodeAt;ke.fromHash=function(Ke){return Ke===Te?Ce:new ke((Se.call(Ke,0)|Se.call(Ke,1)<<8|Se.call(Ke,2)<<16|Se.call(Ke,3)<<24)>>>0,(Se.call(Ke,4)|Se.call(Ke,5)<<8|Se.call(Ke,6)<<16|Se.call(Ke,7)<<24)>>>0)},ke.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},ke.prototype.zzEncode=function(){var Ke=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^Ke)>>>0,this.lo=(this.lo<<1^Ke)>>>0,this},ke.prototype.zzDecode=function(){var Ke=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^Ke)>>>0,this.hi=(this.hi>>>1^Ke)>>>0,this},ke.prototype.length=function(){var Ke=this.lo,Je=(this.lo>>>28|this.hi<<4)>>>0,mt=this.hi>>>24;return mt===0?Je===0?Ke<16384?Ke<128?1:2:Ke<2097152?3:4:Je<16384?Je<128?5:6:Je<2097152?7:8:mt<128?9:10}},function(ge,be,$e){function ke(){Ce.call(this)}function Ee(Se,Ke,Je){Se.length<40?Te.utf8.write(Se,Ke,Je):Ke.utf8Write?Ke.utf8Write(Se,Je):Ke.write(Se,Je)}ge.exports=ke;var Ce=$e(9);(ke.prototype=Object.create(Ce.prototype)).constructor=ke;var Te=$e(1);ke._configure=function(){ke.alloc=Te._Buffer_allocUnsafe,ke.writeBytesBuffer=Te.Buffer&&Te.Buffer.prototype instanceof Uint8Array&&Te.Buffer.prototype.set.name==="set"?function(Se,Ke,Je){Ke.set(Se,Je)}:function(Se,Ke,Je){if(Se.copy)Se.copy(Ke,Je,0,Se.length);else for(var mt=0;mt<Se.length;)Ke[Je++]=Se[mt++]}},ke.prototype.bytes=function(Se){Te.isString(Se)&&(Se=Te._Buffer_from(Se,"base64"));var Ke=Se.length>>>0;return this.uint32(Ke),Ke&&this._push(ke.writeBytesBuffer,Ke,Se),this},ke.prototype.string=function(Se){var Ke=Te.Buffer.byteLength(Se);return this.uint32(Ke),Ke&&this._push(Ee,Ke,Se),this},ke._configure()},function(ge,be,$e){function ke(Te){Ee.call(this,Te)}ge.exports=ke;var Ee=$e(10);(ke.prototype=Object.create(Ee.prototype)).constructor=ke;var Ce=$e(1);ke._configure=function(){Ce.Buffer&&(ke.prototype._slice=Ce.Buffer.prototype.slice)},ke.prototype.string=function(){var Te=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+Te,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+Te,this.len))},ke._configure()},function(ge,be,$e){function ke(Ce,Te,Se){if(typeof Ce!="function")throw TypeError("rpcImpl must be a function");Ee.EventEmitter.call(this),this.rpcImpl=Ce,this.requestDelimited=Boolean(Te),this.responseDelimited=Boolean(Se)}ge.exports=ke;var Ee=$e(1);(ke.prototype=Object.create(Ee.EventEmitter.prototype)).constructor=ke,ke.prototype.rpcCall=function Ce(Te,Se,Ke,Je,mt){if(!Je)throw TypeError("request must be specified");var bt=this;if(!mt)return Ee.asPromise(Ce,bt,Te,Se,Ke,Je);if(bt.rpcImpl)try{return bt.rpcImpl(Te,Se[bt.requestDelimited?"encodeDelimited":"encode"](Je).finish(),function($t,St){if($t)return bt.emit("error",$t,Te),mt($t);if(St!==null){if(!(St instanceof Ke))try{St=Ke[bt.responseDelimited?"decodeDelimited":"decode"](St)}catch(It){return bt.emit("error",It,Te),mt(It)}return bt.emit("data",St,Te),mt(null,St)}bt.end(!0)})}catch($t){return bt.emit("error",$t,Te),void setTimeout(function(){mt($t)},0)}else setTimeout(function(){mt(Error("already ended"))},0)},ke.prototype.end=function(Ce){return this.rpcImpl&&(Ce||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}},function(ge,be,$e){function ke(Ee,Ce){function Te(Je){if(typeof Je!="string"){var mt=Se();if(ke.verbose&&console.log("codegen: "+mt),mt="return "+mt,Je){for(var bt=Object.keys(Je),$t=new Array(bt.length+1),St=new Array(bt.length),It=0;It<bt.length;)$t[It]=bt[It],St[It]=Je[bt[It++]];return $t[It]=mt,Function.apply(null,$t).apply(null,St)}return Function(mt)()}for(var Bt=new Array(arguments.length-1),Dt=0;Dt<Bt.length;)Bt[Dt]=arguments[++Dt];if(Dt=0,Je=Je.replace(/%([%dfijs])/g,function(jt,zt){var en=Bt[Dt++];switch(zt){case"d":case"f":return String(Number(en));case"i":return String(Math.floor(en));case"j":return JSON.stringify(en);case"s":return String(en)}return"%"}),Dt!==Bt.length)throw Error("parameter count mismatch");return Ke.push(Je),Te}function Se(Je){return"function "+(Je||Ce||"")+"("+(Ee&&Ee.join(",")||"")+`){
  `+Ke.join(`
  `)+`
}`}typeof Ee=="string"&&(Ce=Ee,Ee=void 0);var Ke=[];return Te.toString=Se,Te}ge.exports=ke,ke.verbose=!1},function(ge,be,$e){function ke(Te,Se,Ke){return typeof Se=="function"?(Ke=Se,Se={}):Se||(Se={}),Ke?!Se.xhr&&Ce&&Ce.readFile?Ce.readFile(Te,function(Je,mt){return Je&&typeof XMLHttpRequest!="undefined"?ke.xhr(Te,Se,Ke):Je?Ke(Je):Ke(null,Se.binary?mt:mt.toString("utf8"))}):ke.xhr(Te,Se,Ke):Ee(ke,this,Te,Se)}ge.exports=ke;var Ee=$e(17),Ce=$e(18)("fs");ke.xhr=function(Te,Se,Ke){var Je=new XMLHttpRequest;Je.onreadystatechange=function(){if(Je.readyState===4){if(Je.status!==0&&Je.status!==200)return Ke(Error("status "+Je.status));if(Se.binary){var mt=Je.response;if(!mt){mt=[];for(var bt=0;bt<Je.responseText.length;++bt)mt.push(255&Je.responseText.charCodeAt(bt))}return Ke(null,typeof Uint8Array!="undefined"?new Uint8Array(mt):mt)}return Ke(null,Je.responseText)}},Se.binary&&("overrideMimeType"in Je&&Je.overrideMimeType("text/plain; charset=x-user-defined"),Je.responseType="arraybuffer"),Je.open("GET",Te),Je.send()}},function(ge,be,$e){var ke=be,Ee=ke.isAbsolute=function(Te){return/^(?:\/|\w+:)/.test(Te)},Ce=ke.normalize=function(Te){var Se=(Te=Te.replace(/\\/g,"/").replace(/\/{2,}/g,"/")).split("/"),Ke=Ee(Te),Je="";Ke&&(Je=Se.shift()+"/");for(var mt=0;mt<Se.length;)Se[mt]===".."?mt>0&&Se[mt-1]!==".."?Se.splice(--mt,2):Ke?Se.splice(mt,1):++mt:Se[mt]==="."?Se.splice(mt,1):++mt;return Je+Se.join("/")};ke.resolve=function(Te,Se,Ke){return Ke||(Se=Ce(Se)),Ee(Se)?Se:(Ke||(Te=Ce(Te)),(Te=Te.replace(/(?:\/|^)[^/]+$/,"")).length?Ce(Te+"/"+Se):Se)}},function(ge,be,$e){var ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(mt){return typeof mt}:function(mt){return mt&&typeof Symbol=="function"&&mt.constructor===Symbol&&mt!==Symbol.prototype?"symbol":typeof mt},Ee=$e(16).ProtoMovieEntity,Ce=$e(8).assign,Te=$e(51),Se={};Ce(Se,Te);var Ke=function(mt){for(var bt=[],$t=0;$t<mt.length;$t+=32768)bt.push(String.fromCharCode.apply(null,mt.subarray($t,$t+32768)));return bt.join("")},Je={loadAssets:function(mt,bt,$t){if((typeof JSZipUtils=="undefined"?"undefined":ke(JSZipUtils))==="object"&&typeof JSZip=="function")if(mt.toString()=="[object File]")Je._readBlobAsArrayBuffer(mt,function(Bt){var Dt=new Uint8Array(Bt,0,4);Dt[0]==80&&Dt[1]==75&&Dt[2]==3&&Dt[3]==4?JSZip.loadAsync(Bt).then(function(jt){Je._decodeAssets(jt,bt)}):Je.load_viaProto(Bt,bt,$t)});else if(mt.indexOf("data:svga/1.0;base64,")>=0){var St=Je._base64ToArrayBuffer(mt.substring(21));JSZip.loadAsync(St).then(function(Bt){Je._decodeAssets(Bt,bt)})}else mt.indexOf("data:svga/2.0;base64,")>=0?(St=Je._base64ToArrayBuffer(mt.substring(21)),Je.load_viaProto(St,bt,$t)):JSZipUtils.getBinaryContent(mt,function(Bt,Dt){if(Bt)throw $t&&$t(Bt),console.error(Bt),Bt;var jt=new Uint8Array(Dt,0,4);jt[0]==80&&jt[1]==75&&jt[2]==3&&jt[3]==4?JSZip.loadAsync(Dt).then(function(zt){Je._decodeAssets(zt,bt)}):Je.load_viaProto(Dt,bt,$t)});else{var It=new XMLHttpRequest;It.open("GET",mt,!0),It.responseType="arraybuffer",It.onload=function(){Je.load_viaProto(It.response,bt,$t)},It.onerror=function(Bt){if(!$t)throw console.error(Bt),Bt;$t(Bt)},It.send()}},load_viaProto:function(mt,bt,$t){try{var St=Se.inflate(mt),It=Ee.decode(St),Bt={};Je._loadImages(Bt,void 0,It,function(){It.ver="2.0",bt({movie:It,images:Bt})})}catch(Dt){if($t)return void $t(Dt);throw console.error(Dt),Dt}},_decodeAssets:function(mt,bt){var $t="1.0";mt.file("movie.binary")&&($t="1.5"),mt.file("movie.spec").async("string").then(function(St){var It=JSON.parse(St),Bt={};It.ver=$t,Je._loadImages(Bt,mt,It,function(){bt({movie:It,images:Bt})})})},_loadImages:function(mt,bt,$t,St){var It=this;if(($t===void 0?"undefined":ke($t))==="object"&&$t.$type==Ee){var Bt=!0;if(bt)e:for(var Dt in $t.images)switch(function(yo){if($t.images.hasOwnProperty(yo)){var fo=$t.images[yo],bo=Ke(fo);return mt.hasOwnProperty(yo)?"continue":(Bt=!1,bt.file(bo+".png").async("base64").then(function(Ar){mt[yo]=Ar,Je._loadImages(mt,bt,$t,St)}.bind(It)),"break")}}(Dt)){case"continue":continue;case"break":break e}else for(var jt in $t.images)if($t.images.hasOwnProperty(jt)){var zt=$t.images[jt],en=void 0;try{en=Ke(zt)}catch{en=Ke(zt)}mt[jt]=btoa(en)}Bt&&St.call(this)}else{Bt=!0;for(var qt in $t.images)if($t.images.hasOwnProperty(qt)){var vo=$t.images[qt];if(mt.hasOwnProperty(qt))continue;Bt=!1,bt.file(vo+".png").async("base64").then(function(yo){mt[qt]=yo,Je._loadImages(mt,bt,$t,St)}.bind(this));break}Bt&&St.call(this)}},_base64ToArrayBuffer:function(mt){for(var bt=window.atob(mt),$t=bt.length,St=new Uint8Array($t),It=0;It<$t;It++)St[It]=bt.charCodeAt(It);return St.buffer},_readBlobAsArrayBuffer:function(mt,bt){var $t=new FileReader;$t.onload=function(St){bt(St.target.result)},$t.readAsArrayBuffer(mt)}};ge.exports=function(mt,bt,$t){Je.loadAssets(mt,bt,$t)}},function(ge,be,$e){function ke(St){if(!(this instanceof ke))return new ke(St);this.options=Te.assign({chunkSize:16384,windowBits:0,to:""},St||{});var It=this.options;It.raw&&It.windowBits>=0&&It.windowBits<16&&(It.windowBits=-It.windowBits,It.windowBits===0&&(It.windowBits=-15)),!(It.windowBits>=0&&It.windowBits<16)||St&&St.windowBits||(It.windowBits+=32),It.windowBits>15&&It.windowBits<48&&(15&It.windowBits)==0&&(It.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new mt,this.strm.avail_out=0;var Bt=Ce.inflateInit2(this.strm,It.windowBits);if(Bt!==Ke.Z_OK)throw new Error(Je[Bt]);if(this.header=new bt,Ce.inflateGetHeader(this.strm,this.header),It.dictionary&&(typeof It.dictionary=="string"?It.dictionary=Se.string2buf(It.dictionary):$t.call(It.dictionary)==="[object ArrayBuffer]"&&(It.dictionary=new Uint8Array(It.dictionary)),It.raw&&(Bt=Ce.inflateSetDictionary(this.strm,It.dictionary))!==Ke.Z_OK))throw new Error(Je[Bt])}function Ee(St,It){var Bt=new ke(It);if(Bt.push(St,!0),Bt.err)throw Bt.msg||Je[Bt.err];return Bt.result}var Ce=$e(52),Te=$e(8),Se=$e(57),Ke=$e(58),Je=$e(59),mt=$e(60),bt=$e(61),$t=Object.prototype.toString;ke.prototype.push=function(St,It){var Bt,Dt,jt,zt,en,qt=this.strm,vo=this.options.chunkSize,yo=this.options.dictionary,fo=!1;if(this.ended)return!1;Dt=It===~~It?It:It===!0?Ke.Z_FINISH:Ke.Z_NO_FLUSH,typeof St=="string"?qt.input=Se.binstring2buf(St):$t.call(St)==="[object ArrayBuffer]"?qt.input=new Uint8Array(St):qt.input=St,qt.next_in=0,qt.avail_in=qt.input.length;do{if(qt.avail_out===0&&(qt.output=new Te.Buf8(vo),qt.next_out=0,qt.avail_out=vo),(Bt=Ce.inflate(qt,Ke.Z_NO_FLUSH))===Ke.Z_NEED_DICT&&yo&&(Bt=Ce.inflateSetDictionary(this.strm,yo)),Bt===Ke.Z_BUF_ERROR&&fo===!0&&(Bt=Ke.Z_OK,fo=!1),Bt!==Ke.Z_STREAM_END&&Bt!==Ke.Z_OK)return this.onEnd(Bt),this.ended=!0,!1;qt.next_out&&(qt.avail_out!==0&&Bt!==Ke.Z_STREAM_END&&(qt.avail_in!==0||Dt!==Ke.Z_FINISH&&Dt!==Ke.Z_SYNC_FLUSH)||(this.options.to==="string"?(jt=Se.utf8border(qt.output,qt.next_out),zt=qt.next_out-jt,en=Se.buf2string(qt.output,jt),qt.next_out=zt,qt.avail_out=vo-zt,zt&&Te.arraySet(qt.output,qt.output,jt,zt,0),this.onData(en)):this.onData(Te.shrinkBuf(qt.output,qt.next_out)))),qt.avail_in===0&&qt.avail_out===0&&(fo=!0)}while((qt.avail_in>0||qt.avail_out===0)&&Bt!==Ke.Z_STREAM_END);return Bt===Ke.Z_STREAM_END&&(Dt=Ke.Z_FINISH),Dt===Ke.Z_FINISH?(Bt=Ce.inflateEnd(this.strm),this.onEnd(Bt),this.ended=!0,Bt===Ke.Z_OK):Dt!==Ke.Z_SYNC_FLUSH||(this.onEnd(Ke.Z_OK),qt.avail_out=0,!0)},ke.prototype.onData=function(St){this.chunks.push(St)},ke.prototype.onEnd=function(St){St===Ke.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Te.flattenChunks(this.chunks)),this.chunks=[],this.err=St,this.msg=this.strm.msg},be.Inflate=ke,be.inflate=Ee,be.inflateRaw=function(St,It){return(It=It||{}).raw=!0,Ee(St,It)},be.ungzip=Ee},function(ge,be,$e){function ke(rr){return(rr>>>24&255)+(rr>>>8&65280)+((65280&rr)<<8)+((255&rr)<<24)}function Ee(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new St.Buf16(320),this.work=new St.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function Ce(rr){var eu;return rr&&rr.state?(eu=rr.state,rr.total_in=rr.total_out=eu.total=0,rr.msg="",eu.wrap&&(rr.adler=1&eu.wrap),eu.mode=xs,eu.last=0,eu.havedict=0,eu.dmax=32768,eu.head=null,eu.hold=0,eu.bits=0,eu.lencode=eu.lendyn=new St.Buf32(zu),eu.distcode=eu.distdyn=new St.Buf32(Xu),eu.sane=1,eu.back=-1,bo):ms}function Te(rr){var eu;return rr&&rr.state?((eu=rr.state).wsize=0,eu.whave=0,eu.wnext=0,Ce(rr)):ms}function Se(rr,eu){var yi,su;return rr&&rr.state?(su=rr.state,eu<0?(yi=0,eu=-eu):(yi=1+(eu>>4),eu<48&&(eu&=15)),eu&&(eu<8||eu>15)?ms:(su.window!==null&&su.wbits!==eu&&(su.window=null),su.wrap=yi,su.wbits=eu,Te(rr))):ms}function Ke(rr,eu){var yi,su;return rr?(su=new Ee,rr.state=su,su.window=null,(yi=Se(rr,eu))!==bo&&(rr.state=null),yi):ms}function Je(rr){if(Ju){var eu;for(bt=new St.Buf32(512),$t=new St.Buf32(32),eu=0;eu<144;)rr.lens[eu++]=8;for(;eu<256;)rr.lens[eu++]=9;for(;eu<280;)rr.lens[eu++]=7;for(;eu<288;)rr.lens[eu++]=8;for(jt(en,rr.lens,0,288,bt,0,rr.work,{bits:9}),eu=0;eu<32;)rr.lens[eu++]=5;jt(qt,rr.lens,0,32,$t,0,rr.work,{bits:5}),Ju=!1}rr.lencode=bt,rr.lenbits=9,rr.distcode=$t,rr.distbits=5}function mt(rr,eu,yi,su){var $u,iu=rr.state;return iu.window===null&&(iu.wsize=1<<iu.wbits,iu.wnext=0,iu.whave=0,iu.window=new St.Buf8(iu.wsize)),su>=iu.wsize?(St.arraySet(iu.window,eu,yi-iu.wsize,iu.wsize,0),iu.wnext=0,iu.whave=iu.wsize):(($u=iu.wsize-iu.wnext)>su&&($u=su),St.arraySet(iu.window,eu,yi-su,$u,iu.wnext),(su-=$u)?(St.arraySet(iu.window,eu,yi-su,su,0),iu.wnext=su,iu.whave=iu.wsize):(iu.wnext+=$u,iu.wnext===iu.wsize&&(iu.wnext=0),iu.whave<iu.wsize&&(iu.whave+=$u))),0}var bt,$t,St=$e(8),It=$e(53),Bt=$e(54),Dt=$e(55),jt=$e(56),zt=0,en=1,qt=2,vo=4,yo=5,fo=6,bo=0,Ar=1,fs=2,ms=-2,go=-3,wo=-4,ir=-5,bs=8,xs=1,ks=2,fu=3,_s=4,nu=5,du=6,pu=7,uu=8,vs=9,tu=10,ru=11,cu=12,vu=13,Eu=14,Nu=15,Du=16,xu=17,Iu=18,mu=19,Pu=20,ju=21,Vu=22,Uu=23,Mu=24,Zu=25,Hu=26,xo=27,ws=28,hu=29,au=30,yu=31,Tu=32,zu=852,Xu=592,nh=15,Ju=!0;be.inflateReset=Te,be.inflateReset2=Se,be.inflateResetKeep=Ce,be.inflateInit=function(rr){return Ke(rr,nh)},be.inflateInit2=Ke,be.inflate=function(rr,eu){var yi,su,$u,iu,Bu,ou,wu,ys,gs,Wu,bu,lu,qu,Ku,gu,Au,Ou,Su,Gu,Yu,_u,Ru,Fu,Lu,Cu=0,ku=new St.Buf8(4),Qu=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!rr||!rr.state||!rr.output||!rr.input&&rr.avail_in!==0)return ms;(yi=rr.state).mode===cu&&(yi.mode=vu),Bu=rr.next_out,$u=rr.output,wu=rr.avail_out,iu=rr.next_in,su=rr.input,ou=rr.avail_in,ys=yi.hold,gs=yi.bits,Wu=ou,bu=wu,Ru=bo;e:for(;;)switch(yi.mode){case xs:if(yi.wrap===0){yi.mode=vu;break}for(;gs<16;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}if(2&yi.wrap&&ys===35615){yi.check=0,ku[0]=255&ys,ku[1]=ys>>>8&255,yi.check=Bt(yi.check,ku,2,0),ys=0,gs=0,yi.mode=ks;break}if(yi.flags=0,yi.head&&(yi.head.done=!1),!(1&yi.wrap)||(((255&ys)<<8)+(ys>>8))%31){rr.msg="incorrect header check",yi.mode=au;break}if((15&ys)!==bs){rr.msg="unknown compression method",yi.mode=au;break}if(gs-=4,_u=8+(15&(ys>>>=4)),yi.wbits===0)yi.wbits=_u;else if(_u>yi.wbits){rr.msg="invalid window size",yi.mode=au;break}yi.dmax=1<<_u,rr.adler=yi.check=1,yi.mode=512&ys?tu:cu,ys=0,gs=0;break;case ks:for(;gs<16;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}if(yi.flags=ys,(255&yi.flags)!==bs){rr.msg="unknown compression method",yi.mode=au;break}if(57344&yi.flags){rr.msg="unknown header flags set",yi.mode=au;break}yi.head&&(yi.head.text=ys>>8&1),512&yi.flags&&(ku[0]=255&ys,ku[1]=ys>>>8&255,yi.check=Bt(yi.check,ku,2,0)),ys=0,gs=0,yi.mode=fu;case fu:for(;gs<32;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}yi.head&&(yi.head.time=ys),512&yi.flags&&(ku[0]=255&ys,ku[1]=ys>>>8&255,ku[2]=ys>>>16&255,ku[3]=ys>>>24&255,yi.check=Bt(yi.check,ku,4,0)),ys=0,gs=0,yi.mode=_s;case _s:for(;gs<16;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}yi.head&&(yi.head.xflags=255&ys,yi.head.os=ys>>8),512&yi.flags&&(ku[0]=255&ys,ku[1]=ys>>>8&255,yi.check=Bt(yi.check,ku,2,0)),ys=0,gs=0,yi.mode=nu;case nu:if(1024&yi.flags){for(;gs<16;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}yi.length=ys,yi.head&&(yi.head.extra_len=ys),512&yi.flags&&(ku[0]=255&ys,ku[1]=ys>>>8&255,yi.check=Bt(yi.check,ku,2,0)),ys=0,gs=0}else yi.head&&(yi.head.extra=null);yi.mode=du;case du:if(1024&yi.flags&&((lu=yi.length)>ou&&(lu=ou),lu&&(yi.head&&(_u=yi.head.extra_len-yi.length,yi.head.extra||(yi.head.extra=new Array(yi.head.extra_len)),St.arraySet(yi.head.extra,su,iu,lu,_u)),512&yi.flags&&(yi.check=Bt(yi.check,su,lu,iu)),ou-=lu,iu+=lu,yi.length-=lu),yi.length))break e;yi.length=0,yi.mode=pu;case pu:if(2048&yi.flags){if(ou===0)break e;lu=0;do _u=su[iu+lu++],yi.head&&_u&&yi.length<65536&&(yi.head.name+=String.fromCharCode(_u));while(_u&&lu<ou);if(512&yi.flags&&(yi.check=Bt(yi.check,su,lu,iu)),ou-=lu,iu+=lu,_u)break e}else yi.head&&(yi.head.name=null);yi.length=0,yi.mode=uu;case uu:if(4096&yi.flags){if(ou===0)break e;lu=0;do _u=su[iu+lu++],yi.head&&_u&&yi.length<65536&&(yi.head.comment+=String.fromCharCode(_u));while(_u&&lu<ou);if(512&yi.flags&&(yi.check=Bt(yi.check,su,lu,iu)),ou-=lu,iu+=lu,_u)break e}else yi.head&&(yi.head.comment=null);yi.mode=vs;case vs:if(512&yi.flags){for(;gs<16;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}if(ys!==(65535&yi.check)){rr.msg="header crc mismatch",yi.mode=au;break}ys=0,gs=0}yi.head&&(yi.head.hcrc=yi.flags>>9&1,yi.head.done=!0),rr.adler=yi.check=0,yi.mode=cu;break;case tu:for(;gs<32;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}rr.adler=yi.check=ke(ys),ys=0,gs=0,yi.mode=ru;case ru:if(yi.havedict===0)return rr.next_out=Bu,rr.avail_out=wu,rr.next_in=iu,rr.avail_in=ou,yi.hold=ys,yi.bits=gs,fs;rr.adler=yi.check=1,yi.mode=cu;case cu:if(eu===yo||eu===fo)break e;case vu:if(yi.last){ys>>>=7&gs,gs-=7&gs,yi.mode=xo;break}for(;gs<3;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}switch(yi.last=1&ys,gs-=1,3&(ys>>>=1)){case 0:yi.mode=Eu;break;case 1:if(Je(yi),yi.mode=Pu,eu===fo){ys>>>=2,gs-=2;break e}break;case 2:yi.mode=xu;break;case 3:rr.msg="invalid block type",yi.mode=au}ys>>>=2,gs-=2;break;case Eu:for(ys>>>=7&gs,gs-=7&gs;gs<32;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}if((65535&ys)!=(ys>>>16^65535)){rr.msg="invalid stored block lengths",yi.mode=au;break}if(yi.length=65535&ys,ys=0,gs=0,yi.mode=Nu,eu===fo)break e;case Nu:yi.mode=Du;case Du:if(lu=yi.length){if(lu>ou&&(lu=ou),lu>wu&&(lu=wu),lu===0)break e;St.arraySet($u,su,iu,lu,Bu),ou-=lu,iu+=lu,wu-=lu,Bu+=lu,yi.length-=lu;break}yi.mode=cu;break;case xu:for(;gs<14;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}if(yi.nlen=257+(31&ys),ys>>>=5,gs-=5,yi.ndist=1+(31&ys),ys>>>=5,gs-=5,yi.ncode=4+(15&ys),ys>>>=4,gs-=4,yi.nlen>286||yi.ndist>30){rr.msg="too many length or distance symbols",yi.mode=au;break}yi.have=0,yi.mode=Iu;case Iu:for(;yi.have<yi.ncode;){for(;gs<3;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}yi.lens[Qu[yi.have++]]=7&ys,ys>>>=3,gs-=3}for(;yi.have<19;)yi.lens[Qu[yi.have++]]=0;if(yi.lencode=yi.lendyn,yi.lenbits=7,Fu={bits:yi.lenbits},Ru=jt(zt,yi.lens,0,19,yi.lencode,0,yi.work,Fu),yi.lenbits=Fu.bits,Ru){rr.msg="invalid code lengths set",yi.mode=au;break}yi.have=0,yi.mode=mu;case mu:for(;yi.have<yi.nlen+yi.ndist;){for(;Au=(Cu=yi.lencode[ys&(1<<yi.lenbits)-1])>>>16&255,Ou=65535&Cu,!((gu=Cu>>>24)<=gs);){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}if(Ou<16)ys>>>=gu,gs-=gu,yi.lens[yi.have++]=Ou;else{if(Ou===16){for(Lu=gu+2;gs<Lu;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}if(ys>>>=gu,gs-=gu,yi.have===0){rr.msg="invalid bit length repeat",yi.mode=au;break}_u=yi.lens[yi.have-1],lu=3+(3&ys),ys>>>=2,gs-=2}else if(Ou===17){for(Lu=gu+3;gs<Lu;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}gs-=gu,_u=0,lu=3+(7&(ys>>>=gu)),ys>>>=3,gs-=3}else{for(Lu=gu+7;gs<Lu;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}gs-=gu,_u=0,lu=11+(127&(ys>>>=gu)),ys>>>=7,gs-=7}if(yi.have+lu>yi.nlen+yi.ndist){rr.msg="invalid bit length repeat",yi.mode=au;break}for(;lu--;)yi.lens[yi.have++]=_u}}if(yi.mode===au)break;if(yi.lens[256]===0){rr.msg="invalid code -- missing end-of-block",yi.mode=au;break}if(yi.lenbits=9,Fu={bits:yi.lenbits},Ru=jt(en,yi.lens,0,yi.nlen,yi.lencode,0,yi.work,Fu),yi.lenbits=Fu.bits,Ru){rr.msg="invalid literal/lengths set",yi.mode=au;break}if(yi.distbits=6,yi.distcode=yi.distdyn,Fu={bits:yi.distbits},Ru=jt(qt,yi.lens,yi.nlen,yi.ndist,yi.distcode,0,yi.work,Fu),yi.distbits=Fu.bits,Ru){rr.msg="invalid distances set",yi.mode=au;break}if(yi.mode=Pu,eu===fo)break e;case Pu:yi.mode=ju;case ju:if(ou>=6&&wu>=258){rr.next_out=Bu,rr.avail_out=wu,rr.next_in=iu,rr.avail_in=ou,yi.hold=ys,yi.bits=gs,Dt(rr,bu),Bu=rr.next_out,$u=rr.output,wu=rr.avail_out,iu=rr.next_in,su=rr.input,ou=rr.avail_in,ys=yi.hold,gs=yi.bits,yi.mode===cu&&(yi.back=-1);break}for(yi.back=0;Au=(Cu=yi.lencode[ys&(1<<yi.lenbits)-1])>>>16&255,Ou=65535&Cu,!((gu=Cu>>>24)<=gs);){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}if(Au&&(240&Au)==0){for(Su=gu,Gu=Au,Yu=Ou;Au=(Cu=yi.lencode[Yu+((ys&(1<<Su+Gu)-1)>>Su)])>>>16&255,Ou=65535&Cu,!(Su+(gu=Cu>>>24)<=gs);){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}ys>>>=Su,gs-=Su,yi.back+=Su}if(ys>>>=gu,gs-=gu,yi.back+=gu,yi.length=Ou,Au===0){yi.mode=Hu;break}if(32&Au){yi.back=-1,yi.mode=cu;break}if(64&Au){rr.msg="invalid literal/length code",yi.mode=au;break}yi.extra=15&Au,yi.mode=Vu;case Vu:if(yi.extra){for(Lu=yi.extra;gs<Lu;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}yi.length+=ys&(1<<yi.extra)-1,ys>>>=yi.extra,gs-=yi.extra,yi.back+=yi.extra}yi.was=yi.length,yi.mode=Uu;case Uu:for(;Au=(Cu=yi.distcode[ys&(1<<yi.distbits)-1])>>>16&255,Ou=65535&Cu,!((gu=Cu>>>24)<=gs);){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}if((240&Au)==0){for(Su=gu,Gu=Au,Yu=Ou;Au=(Cu=yi.distcode[Yu+((ys&(1<<Su+Gu)-1)>>Su)])>>>16&255,Ou=65535&Cu,!(Su+(gu=Cu>>>24)<=gs);){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}ys>>>=Su,gs-=Su,yi.back+=Su}if(ys>>>=gu,gs-=gu,yi.back+=gu,64&Au){rr.msg="invalid distance code",yi.mode=au;break}yi.offset=Ou,yi.extra=15&Au,yi.mode=Mu;case Mu:if(yi.extra){for(Lu=yi.extra;gs<Lu;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}yi.offset+=ys&(1<<yi.extra)-1,ys>>>=yi.extra,gs-=yi.extra,yi.back+=yi.extra}if(yi.offset>yi.dmax){rr.msg="invalid distance too far back",yi.mode=au;break}yi.mode=Zu;case Zu:if(wu===0)break e;if(lu=bu-wu,yi.offset>lu){if((lu=yi.offset-lu)>yi.whave&&yi.sane){rr.msg="invalid distance too far back",yi.mode=au;break}lu>yi.wnext?(lu-=yi.wnext,qu=yi.wsize-lu):qu=yi.wnext-lu,lu>yi.length&&(lu=yi.length),Ku=yi.window}else Ku=$u,qu=Bu-yi.offset,lu=yi.length;lu>wu&&(lu=wu),wu-=lu,yi.length-=lu;do $u[Bu++]=Ku[qu++];while(--lu);yi.length===0&&(yi.mode=ju);break;case Hu:if(wu===0)break e;$u[Bu++]=yi.length,wu--,yi.mode=ju;break;case xo:if(yi.wrap){for(;gs<32;){if(ou===0)break e;ou--,ys|=su[iu++]<<gs,gs+=8}if(bu-=wu,rr.total_out+=bu,yi.total+=bu,bu&&(rr.adler=yi.check=yi.flags?Bt(yi.check,$u,bu,Bu-bu):It(yi.check,$u,bu,Bu-bu)),bu=wu,(yi.flags?ys:ke(ys))!==yi.check){rr.msg="incorrect data check",yi.mode=au;break}ys=0,gs=0}yi.mode=ws;case ws:if(yi.wrap&&yi.flags){for(;gs<32;){if(ou===0)break e;ou--,ys+=su[iu++]<<gs,gs+=8}if(ys!==(4294967295&yi.total)){rr.msg="incorrect length check",yi.mode=au;break}ys=0,gs=0}yi.mode=hu;case hu:Ru=Ar;break e;case au:Ru=go;break e;case yu:return wo;case Tu:default:return ms}return rr.next_out=Bu,rr.avail_out=wu,rr.next_in=iu,rr.avail_in=ou,yi.hold=ys,yi.bits=gs,(yi.wsize||bu!==rr.avail_out&&yi.mode<au&&(yi.mode<xo||eu!==vo))&&mt(rr,rr.output,rr.next_out,bu-rr.avail_out)?(yi.mode=yu,wo):(Wu-=rr.avail_in,bu-=rr.avail_out,rr.total_in+=Wu,rr.total_out+=bu,yi.total+=bu,yi.wrap&&bu&&(rr.adler=yi.check=yi.flags?Bt(yi.check,$u,bu,rr.next_out-bu):It(yi.check,$u,bu,rr.next_out-bu)),rr.data_type=yi.bits+(yi.last?64:0)+(yi.mode===cu?128:0)+(yi.mode===Pu||yi.mode===Nu?256:0),(Wu===0&&bu===0||eu===vo)&&Ru===bo&&(Ru=ir),Ru)},be.inflateEnd=function(rr){if(!rr||!rr.state)return ms;var eu=rr.state;return eu.window&&(eu.window=null),rr.state=null,bo},be.inflateGetHeader=function(rr,eu){var yi;return rr&&rr.state?(2&(yi=rr.state).wrap)==0?ms:(yi.head=eu,eu.done=!1,bo):ms},be.inflateSetDictionary=function(rr,eu){var yi,su=eu.length;return rr&&rr.state?(yi=rr.state).wrap!==0&&yi.mode!==ru?ms:yi.mode===ru&&It(1,eu,su,0)!==yi.check?go:mt(rr,eu,su,su)?(yi.mode=yu,wo):(yi.havedict=1,bo):ms},be.inflateInfo="pako inflate (from Nodeca project)"},function(ge,be,$e){ge.exports=function(ke,Ee,Ce,Te){for(var Se=65535&ke|0,Ke=ke>>>16&65535|0,Je=0;Ce!==0;){Ce-=Je=Ce>2e3?2e3:Ce;do Ke=Ke+(Se=Se+Ee[Te++]|0)|0;while(--Je);Se%=65521,Ke%=65521}return Se|Ke<<16|0}},function(ge,be,$e){var ke=function(){for(var Ee,Ce=[],Te=0;Te<256;Te++){Ee=Te;for(var Se=0;Se<8;Se++)Ee=1&Ee?3988292384^Ee>>>1:Ee>>>1;Ce[Te]=Ee}return Ce}();ge.exports=function(Ee,Ce,Te,Se){var Ke=ke,Je=Se+Te;Ee^=-1;for(var mt=Se;mt<Je;mt++)Ee=Ee>>>8^Ke[255&(Ee^Ce[mt])];return-1^Ee}},function(ge,be,$e){ge.exports=function(ke,Ee){var Ce,Te,Se,Ke,Je,mt,bt,$t,St,It,Bt,Dt,jt,zt,en,qt,vo,yo,fo,bo,Ar,fs,ms,go,wo;Ce=ke.state,Te=ke.next_in,go=ke.input,Se=Te+(ke.avail_in-5),Ke=ke.next_out,wo=ke.output,Je=Ke-(Ee-ke.avail_out),mt=Ke+(ke.avail_out-257),bt=Ce.dmax,$t=Ce.wsize,St=Ce.whave,It=Ce.wnext,Bt=Ce.window,Dt=Ce.hold,jt=Ce.bits,zt=Ce.lencode,en=Ce.distcode,qt=(1<<Ce.lenbits)-1,vo=(1<<Ce.distbits)-1;e:do{jt<15&&(Dt+=go[Te++]<<jt,jt+=8,Dt+=go[Te++]<<jt,jt+=8),yo=zt[Dt&qt];t:for(;;){if(Dt>>>=fo=yo>>>24,jt-=fo,(fo=yo>>>16&255)==0)wo[Ke++]=65535&yo;else{if(!(16&fo)){if((64&fo)==0){yo=zt[(65535&yo)+(Dt&(1<<fo)-1)];continue t}if(32&fo){Ce.mode=12;break e}ke.msg="invalid literal/length code",Ce.mode=30;break e}bo=65535&yo,(fo&=15)&&(jt<fo&&(Dt+=go[Te++]<<jt,jt+=8),bo+=Dt&(1<<fo)-1,Dt>>>=fo,jt-=fo),jt<15&&(Dt+=go[Te++]<<jt,jt+=8,Dt+=go[Te++]<<jt,jt+=8),yo=en[Dt&vo];i:for(;;){if(Dt>>>=fo=yo>>>24,jt-=fo,!(16&(fo=yo>>>16&255))){if((64&fo)==0){yo=en[(65535&yo)+(Dt&(1<<fo)-1)];continue i}ke.msg="invalid distance code",Ce.mode=30;break e}if(Ar=65535&yo,jt<(fo&=15)&&(Dt+=go[Te++]<<jt,(jt+=8)<fo&&(Dt+=go[Te++]<<jt,jt+=8)),(Ar+=Dt&(1<<fo)-1)>bt){ke.msg="invalid distance too far back",Ce.mode=30;break e}if(Dt>>>=fo,jt-=fo,Ar>(fo=Ke-Je)){if((fo=Ar-fo)>St&&Ce.sane){ke.msg="invalid distance too far back",Ce.mode=30;break e}if(fs=0,ms=Bt,It===0){if(fs+=$t-fo,fo<bo){bo-=fo;do wo[Ke++]=Bt[fs++];while(--fo);fs=Ke-Ar,ms=wo}}else if(It<fo){if(fs+=$t+It-fo,(fo-=It)<bo){bo-=fo;do wo[Ke++]=Bt[fs++];while(--fo);if(fs=0,It<bo){bo-=fo=It;do wo[Ke++]=Bt[fs++];while(--fo);fs=Ke-Ar,ms=wo}}}else if(fs+=It-fo,fo<bo){bo-=fo;do wo[Ke++]=Bt[fs++];while(--fo);fs=Ke-Ar,ms=wo}for(;bo>2;)wo[Ke++]=ms[fs++],wo[Ke++]=ms[fs++],wo[Ke++]=ms[fs++],bo-=3;bo&&(wo[Ke++]=ms[fs++],bo>1&&(wo[Ke++]=ms[fs++]))}else{fs=Ke-Ar;do wo[Ke++]=wo[fs++],wo[Ke++]=wo[fs++],wo[Ke++]=wo[fs++],bo-=3;while(bo>2);bo&&(wo[Ke++]=wo[fs++],bo>1&&(wo[Ke++]=wo[fs++]))}break}}break}}while(Te<Se&&Ke<mt);Te-=bo=jt>>3,Dt&=(1<<(jt-=bo<<3))-1,ke.next_in=Te,ke.next_out=Ke,ke.avail_in=Te<Se?Se-Te+5:5-(Te-Se),ke.avail_out=Ke<mt?mt-Ke+257:257-(Ke-mt),Ce.hold=Dt,Ce.bits=jt}},function(ge,be,$e){var ke=$e(8),Ee=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],Ce=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],Te=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],Se=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];ge.exports=function(Ke,Je,mt,bt,$t,St,It,Bt){var Dt,jt,zt,en,qt,vo,yo,fo,bo,Ar=Bt.bits,fs=0,ms=0,go=0,wo=0,ir=0,bs=0,xs=0,ks=0,fu=0,_s=0,nu=null,du=0,pu=new ke.Buf16(16),uu=new ke.Buf16(16),vs=null,tu=0;for(fs=0;fs<=15;fs++)pu[fs]=0;for(ms=0;ms<bt;ms++)pu[Je[mt+ms]]++;for(ir=Ar,wo=15;wo>=1&&pu[wo]===0;wo--);if(ir>wo&&(ir=wo),wo===0)return $t[St++]=20971520,$t[St++]=20971520,Bt.bits=1,0;for(go=1;go<wo&&pu[go]===0;go++);for(ir<go&&(ir=go),ks=1,fs=1;fs<=15;fs++)if(ks<<=1,(ks-=pu[fs])<0)return-1;if(ks>0&&(Ke===0||wo!==1))return-1;for(uu[1]=0,fs=1;fs<15;fs++)uu[fs+1]=uu[fs]+pu[fs];for(ms=0;ms<bt;ms++)Je[mt+ms]!==0&&(It[uu[Je[mt+ms]]++]=ms);if(Ke===0?(nu=vs=It,vo=19):Ke===1?(nu=Ee,du-=257,vs=Ce,tu-=257,vo=256):(nu=Te,vs=Se,vo=-1),_s=0,ms=0,fs=go,qt=St,bs=ir,xs=0,zt=-1,en=(fu=1<<ir)-1,Ke===1&&fu>852||Ke===2&&fu>592)return 1;for(;;){yo=fs-xs,It[ms]<vo?(fo=0,bo=It[ms]):It[ms]>vo?(fo=vs[tu+It[ms]],bo=nu[du+It[ms]]):(fo=96,bo=0),Dt=1<<fs-xs,go=jt=1<<bs;do $t[qt+(_s>>xs)+(jt-=Dt)]=yo<<24|fo<<16|bo|0;while(jt!==0);for(Dt=1<<fs-1;_s&Dt;)Dt>>=1;if(Dt!==0?(_s&=Dt-1,_s+=Dt):_s=0,ms++,--pu[fs]==0){if(fs===wo)break;fs=Je[mt+It[ms]]}if(fs>ir&&(_s&en)!==zt){for(xs===0&&(xs=ir),qt+=go,ks=1<<(bs=fs-xs);bs+xs<wo&&!((ks-=pu[bs+xs])<=0);)bs++,ks<<=1;if(fu+=1<<bs,Ke===1&&fu>852||Ke===2&&fu>592)return 1;$t[zt=_s&en]=ir<<24|bs<<16|qt-St|0}}return _s!==0&&($t[qt+_s]=fs-xs<<24|64<<16|0),Bt.bits=ir,0}},function(ge,be,$e){function ke(Je,mt){if(mt<65534&&(Je.subarray&&Te||!Je.subarray&&Ce))return String.fromCharCode.apply(null,Ee.shrinkBuf(Je,mt));for(var bt="",$t=0;$t<mt;$t++)bt+=String.fromCharCode(Je[$t]);return bt}var Ee=$e(8),Ce=!0,Te=!0;try{String.fromCharCode.apply(null,[0])}catch{Ce=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Te=!1}for(var Se=new Ee.Buf8(256),Ke=0;Ke<256;Ke++)Se[Ke]=Ke>=252?6:Ke>=248?5:Ke>=240?4:Ke>=224?3:Ke>=192?2:1;Se[254]=Se[254]=1,be.string2buf=function(Je){var mt,bt,$t,St,It,Bt=Je.length,Dt=0;for(St=0;St<Bt;St++)(64512&(bt=Je.charCodeAt(St)))==55296&&St+1<Bt&&(64512&($t=Je.charCodeAt(St+1)))==56320&&(bt=65536+(bt-55296<<10)+($t-56320),St++),Dt+=bt<128?1:bt<2048?2:bt<65536?3:4;for(mt=new Ee.Buf8(Dt),It=0,St=0;It<Dt;St++)(64512&(bt=Je.charCodeAt(St)))==55296&&St+1<Bt&&(64512&($t=Je.charCodeAt(St+1)))==56320&&(bt=65536+(bt-55296<<10)+($t-56320),St++),bt<128?mt[It++]=bt:bt<2048?(mt[It++]=192|bt>>>6,mt[It++]=128|63&bt):bt<65536?(mt[It++]=224|bt>>>12,mt[It++]=128|bt>>>6&63,mt[It++]=128|63&bt):(mt[It++]=240|bt>>>18,mt[It++]=128|bt>>>12&63,mt[It++]=128|bt>>>6&63,mt[It++]=128|63&bt);return mt},be.buf2binstring=function(Je){return ke(Je,Je.length)},be.binstring2buf=function(Je){for(var mt=new Ee.Buf8(Je.length),bt=0,$t=mt.length;bt<$t;bt++)mt[bt]=Je.charCodeAt(bt);return mt},be.buf2string=function(Je,mt){var bt,$t,St,It,Bt=mt||Je.length,Dt=new Array(2*Bt);for($t=0,bt=0;bt<Bt;)if((St=Je[bt++])<128)Dt[$t++]=St;else if((It=Se[St])>4)Dt[$t++]=65533,bt+=It-1;else{for(St&=It===2?31:It===3?15:7;It>1&&bt<Bt;)St=St<<6|63&Je[bt++],It--;It>1?Dt[$t++]=65533:St<65536?Dt[$t++]=St:(St-=65536,Dt[$t++]=55296|St>>10&1023,Dt[$t++]=56320|1023&St)}return ke(Dt,$t)},be.utf8border=function(Je,mt){var bt;for((mt=mt||Je.length)>Je.length&&(mt=Je.length),bt=mt-1;bt>=0&&(192&Je[bt])==128;)bt--;return bt<0||bt===0?mt:bt+Se[Je[bt]]>mt?bt:mt}},function(ge,be,$e){ge.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},function(ge,be,$e){ge.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},function(ge,be,$e){ge.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},function(ge,be,$e){ge.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},function(ge,be,$e){ge.exports=function(ke){function Ee(Te){if(Ce[Te])return Ce[Te].exports;var Se=Ce[Te]={i:Te,l:!1,exports:{}};return ke[Te].call(Se.exports,Se,Se.exports,Ee),Se.l=!0,Se.exports}var Ce={};return Ee.m=ke,Ee.c=Ce,Ee.d=function(Te,Se,Ke){Ee.o(Te,Se)||Object.defineProperty(Te,Se,{configurable:!1,enumerable:!0,get:Ke})},Ee.n=function(Te){var Se=Te&&Te.__esModule?function(){return Te.default}:function(){return Te};return Ee.d(Se,"a",Se),Se},Ee.o=function(Te,Se){return Object.prototype.hasOwnProperty.call(Te,Se)},Ee.p="",Ee(Ee.s=0)}([function(ke,Ee,Ce){Object.defineProperty(Ee,"__esModule",{value:!0});var Te=Ce(1);ke.exports=Te.ValueAnimator},function(ke,Ee,Ce){Object.defineProperty(Ee,"__esModule",{value:!0});var Te=function(){function Se(){this.startValue=0,this.endValue=0,this.duration=0,this.loops=1,this.fillRule=0,this.onStart=function(){},this.onUpdate=function(){},this.onEnd=function(){},this.mRunning=!1,this.mStartTime=0,this.mCurrentFrication=0,this.mReverse=!1}return Se.prototype.start=function(Ke){Ke===void 0&&(Ke=void 0),this.doStart(!1,Ke)},Se.prototype.reverse=function(Ke){Ke===void 0&&(Ke=void 0),this.doStart(!0,Ke)},Se.prototype.stop=function(){this.doStop()},Object.defineProperty(Se.prototype,"animatedValue",{get:function(){return(this.endValue-this.startValue)*this.mCurrentFrication+this.startValue},enumerable:!0,configurable:!0}),Se.prototype.doStart=function(Ke,Je){Ke===void 0&&(Ke=!1),Je===void 0&&(Je=void 0),this.mReverse=Ke,this.mRunning=!0,this.mStartTime=Se.currentTimeMillsecond(),Je&&(this.mStartTime-=Ke?(1-Je/(this.endValue-this.startValue))*this.duration:Je/(this.endValue-this.startValue)*this.duration),this.mCurrentFrication=0,this.onStart(),this.doFrame()},Se.prototype.doStop=function(){this.mRunning=!1},Se.prototype.doFrame=function(){this.mRunning&&(this.doDeltaTime(Se.currentTimeMillsecond()-this.mStartTime),this.mRunning&&Se.requestAnimationFrame(this.doFrame.bind(this)))},Se.prototype.doDeltaTime=function(Ke){Ke>=this.duration*this.loops?(this.mCurrentFrication=this.fillRule===1?0:1,this.mRunning=!1):(this.mCurrentFrication=Ke%this.duration/this.duration,this.mReverse&&(this.mCurrentFrication=1-this.mCurrentFrication)),this.onUpdate(this.animatedValue),this.mRunning===!1&&this.onEnd()},Se.currentTimeMillsecond=function(){return typeof performance=="undefined"?new Date().getTime():performance.now()},Se.requestAnimationFrame=function(Ke){return typeof requestAnimationFrame=="undefined"?setTimeout(Ke,16):window.requestAnimationFrame(Ke)},Se}();Ee.ValueAnimator=Te}])},function(ge,be,$e){Object.defineProperty(be,"__esModule",{value:!0}),be.Player=void 0;var ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Se){return typeof Se}:function(Se){return Se&&typeof Symbol=="function"&&Se.constructor===Symbol&&Se!==Symbol.prototype?"symbol":typeof Se},Ee=function(){function Se(Ke,Je){for(var mt=0;mt<Je.length;mt++){var bt=Je[mt];bt.enumerable=bt.enumerable||!1,bt.configurable=!0,"value"in bt&&(bt.writable=!0),Object.defineProperty(Ke,bt.key,bt)}}return function(Ke,Je,mt){return Je&&Se(Ke.prototype,Je),mt&&Se(Ke,mt),Ke}}(),Ce=$e(65),Te=$e(62);be.Player=function(){function Se(Ke){(function(Je,mt){if(!(Je instanceof mt))throw new TypeError("Cannot call a class as a function")})(this,Se),this.loops=0,this.clearsAfterStop=!0,this.fillMode="Forward",this._asChild=!1,this._container=void 0,this._renderer=void 0,this._animator=void 0,this._drawingCanvas=void 0,this._contentMode="AspectFit",this._videoItem=void 0,this._forwardAnimating=!1,this._currentFrame=0,this._dynamicImage={},this._dynamicImageTransform={},this._dynamicText={},this._onFinished=void 0,this._onFrame=void 0,this._onPercentage=void 0,this._container=typeof Ke=="string"?document.querySelector(Ke):Ke,this._asChild=Ke===void 0,this._init()}return Ee(Se,[{key:"setVideoItem",value:function(Ke){this._currentFrame=0,this._videoItem=Ke,this._renderer.prepare(),this.clear(),this._update()}},{key:"setContentMode",value:function(Ke){this._contentMode=Ke,this._update()}},{key:"setClipsToBounds",value:function(Ke){this._container instanceof HTMLDivElement&&(this._container.style.overflowX=this._container.style.overflowY=Ke?"hidden":void 0)}},{key:"startAnimation",value:function(Ke){this.stopAnimation(!1),this._doStart(void 0,Ke,void 0)}},{key:"startAnimationWithRange",value:function(Ke,Je){this.stopAnimation(!1),this._doStart(Ke,Je,void 0)}},{key:"pauseAnimation",value:function(){this.stopAnimation(!1)}},{key:"stopAnimation",value:function(Ke){this._forwardAnimating=!1,this._animator!==void 0&&this._animator.stop(),Ke===void 0&&(Ke=this.clearsAfterStop),Ke&&this.clear()}},{key:"clear",value:function(){this._renderer.clear(),this._renderer.clearAudios()}},{key:"stepToFrame",value:function(Ke,Je){Ke>=this._videoItem.frames||Ke<0||(this.pauseAnimation(),this._currentFrame=Ke,this._update(),Je&&this._doStart(void 0,!1,this._currentFrame))}},{key:"stepToPercentage",value:function(Ke,Je){var mt=parseInt(Ke*this._videoItem.frames);mt>=this._videoItem.frames&&mt>0&&(mt=this._videoItem.frames-1),this.stepToFrame(mt,Je)}},{key:"setImage",value:function(Ke,Je,mt){this._dynamicImage[Je]=Ke,mt!==void 0&&mt instanceof Array&&mt.length==6&&(this._dynamicImageTransform[Je]=mt)}},{key:"setText",value:function(Ke,Je){var mt=typeof Ke=="string"?Ke:Ke.text,bt=((Ke===void 0?"undefined":ke(Ke))==="object"?Ke.size:"14px")||"14px",$t=((Ke===void 0?"undefined":ke(Ke))==="object"?Ke.family:"Arial")||"Arial",St=((Ke===void 0?"undefined":ke(Ke))==="object"?Ke.color:"#000000")||"#000000",It=((Ke===void 0?"undefined":ke(Ke))==="object"?Ke.offset:{x:0,y:0})||{x:0,y:0};this._dynamicText[Je]={text:mt,style:bt+" "+$t,color:St,offset:It}}},{key:"clearDynamicObjects",value:function(){this._dynamicImage={},this._dynamicImageTransform={},this._dynamicText={}}},{key:"onFinished",value:function(Ke){this._onFinished=Ke}},{key:"onFrame",value:function(Ke){this._onFrame=Ke}},{key:"onPercentage",value:function(Ke){this._onPercentage=Ke}},{key:"drawOnContext",value:function(Ke,Je,mt,bt,$t){this._drawingCanvas&&this._videoItem&&Ke.drawImage(this._drawingCanvas,Je,mt,bt||this._videoItem.videoSize.width,$t||this._videoItem.videoSize.height)}},{key:"_init",value:function(){if(this._container instanceof HTMLDivElement||this._asChild){if(this._container)for(var Ke=this._container.querySelectorAll("canvas"),Je=0;Je<Ke.length;Je++){var mt=Ke[Je];mt!==void 0&&mt.__isPlayer&&this._container.removeChild(mt)}this._drawingCanvas=document.createElement("canvas"),this._drawingCanvas.__isPlayer=!0,this._drawingCanvas.style.backgroundColor="transparent",this._container&&(this._container.appendChild(this._drawingCanvas),this._container.style.textAlign="left")}this._renderer=new Ce.Renderer(this)}},{key:"_doStart",value:function(Ke,Je,mt){var bt=this;this._animator=new Te,Ke!==void 0?(this._animator.startValue=Math.max(0,Ke.location),this._animator.endValue=Math.min(this._videoItem.frames-1,Ke.location+Ke.length),this._animator.duration=(this._animator.endValue-this._animator.startValue+1)*(1/this._videoItem.FPS)*1e3):(this._animator.startValue=0,this._animator.endValue=this._videoItem.frames-1,this._animator.duration=this._videoItem.frames*(1/this._videoItem.FPS)*1e3),this._animator.loops=this.loops<=0?1/0:this.loops,this._animator.fillRule=this.fillMode==="Backward"?1:0,this._animator.onUpdate=function($t){bt._currentFrame!==Math.floor($t)&&(bt._forwardAnimating&&bt._currentFrame>Math.floor($t)&&bt._renderer.clearAudios(),bt._currentFrame=Math.floor($t),bt._update(),typeof bt._onFrame=="function"&&bt._onFrame(bt._currentFrame),typeof bt._onPercentage=="function"&&bt._onPercentage(parseFloat(bt._currentFrame+1)/parseFloat(bt._videoItem.frames)))},this._animator.onEnd=function(){bt._forwardAnimating=!1,bt.clearsAfterStop===!0&&bt.clear(),typeof bt._onFinished=="function"&&bt._onFinished()},Je===!0?(this._animator.reverse(mt),this._forwardAnimating=!1):(this._animator.start(mt),this._forwardAnimating=!0),this._currentFrame=this._animator.startValue,this._update()}},{key:"_resize",value:function(){var Ke=!1;if(this._drawingCanvas){var Je;Je=this._drawingCanvas.parentNode?{width:this._drawingCanvas.parentNode.clientWidth,height:this._drawingCanvas.parentNode.clientHeight}:this._videoItem.videoSize;var mt=this._videoItem.videoSize;if(Je.width>=mt.width&&Je.height>=mt.height)this._drawingCanvas.width=Je.width,this._drawingCanvas.height=Je.height,this._drawingCanvas.style.webkitTransform=this._drawingCanvas.style.transform="",Ke=!0;else{if(this._drawingCanvas.width=mt.width,this._drawingCanvas.height=mt.height,this._contentMode==="Fill"){var bt=Je.width/mt.width,$t=Je.height/mt.height,St=(mt.width*bt-mt.width)/2,It=(mt.height*$t-mt.height)/2;this._drawingCanvas.style.webkitTransform=this._drawingCanvas.style.transform="matrix("+bt+", 0.0, 0.0, "+$t+", "+St+", "+It+")"}else if(this._contentMode==="AspectFit"||this._contentMode==="AspectFill"){var Bt=mt.width/mt.height,Dt=Je.width/Je.height;if(Bt>=Dt&&this._contentMode==="AspectFit"||Bt<=Dt&&this._contentMode==="AspectFill"){var jt=Je.width/mt.width,zt=(mt.width*jt-mt.width)/2,en=(mt.height*jt-mt.height)/2+(Je.height-mt.height*jt)/2;this._drawingCanvas.style.webkitTransform=this._drawingCanvas.style.transform="matrix("+jt+", 0.0, 0.0, "+jt+", "+zt+", "+en+")"}else if(Bt<Dt&&this._contentMode==="AspectFit"||Bt>Dt&&this._contentMode==="AspectFill"){var qt=Je.height/mt.height,vo=(mt.width*qt-mt.width)/2+(Je.width-mt.width*qt)/2,yo=(mt.height*qt-mt.height)/2;this._drawingCanvas.style.webkitTransform=this._drawingCanvas.style.transform="matrix("+qt+", 0.0, 0.0, "+qt+", "+vo+", "+yo+")"}}this._globalTransform=void 0}}if(this._drawingCanvas===void 0||Ke===!0){var fo=1,bo=1,Ar=0,fs=0,ms={width:this._container!==void 0?this._container.clientWidth:0,height:this._container!==void 0?this._container.clientHeight:0},go=this._videoItem.videoSize;if(this._contentMode==="Fill")fo=ms.width/go.width,bo=ms.height/go.height;else if(this._contentMode==="AspectFit"||this._contentMode==="AspectFill"){var wo=go.width/go.height,ir=ms.width/ms.height;wo>=ir&&this._contentMode==="AspectFit"||wo<=ir&&this._contentMode==="AspectFill"?(fo=bo=ms.width/go.width,fs=(ms.height-go.height*bo)/2):(wo<ir&&this._contentMode==="AspectFit"||wo>ir&&this._contentMode==="AspectFill")&&(fo=bo=ms.height/go.height,Ar=(ms.width-go.width*fo)/2)}this._globalTransform={a:fo,b:0,c:0,d:bo,tx:Ar,ty:fs}}}},{key:"_update",value:function(){this._videoItem!==void 0&&(this._resize(),this._renderer.drawFrame(this._currentFrame),this._renderer.playAudio(this._currentFrame))}}]),Se}()},function(ge,be,$e){var ke=$e(13),Ee=$e(63),Ce=$e(66);ge.exports={Parser:ke.Parser,Player:Ee.Player,autoload:Ce.AutoLoader.autoload},Ce.AutoLoader.autoload()},function(ge,be,$e){Object.defineProperty(be,"__esModule",{value:!0}),be.Renderer=void 0;var ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Ke){return typeof Ke}:function(Ke){return Ke&&typeof Symbol=="function"&&Ke.constructor===Symbol&&Ke!==Symbol.prototype?"symbol":typeof Ke},Ee=function(){function Ke(Je,mt){for(var bt=0;bt<mt.length;bt++){var $t=mt[bt];$t.enumerable=$t.enumerable||!1,$t.configurable=!0,"value"in $t&&($t.writable=!0),Object.defineProperty(Je,$t.key,$t)}}return function(Je,mt,bt){return mt&&Ke(Je.prototype,mt),bt&&Ke(Je,bt),Je}}(),Ce=$e(5),Te=$e(15),Se=$e(14);be.Renderer=function(){function Ke(Je){(function(mt,bt){if(!(mt instanceof bt))throw new TypeError("Cannot call a class as a function")})(this,Ke),this._owner=void 0,this._prepared=!1,this._undrawFrame=void 0,this._bitmapCache=void 0,this._soundsQueue=[],this._owner=Je}return Ee(Ke,[{key:"dataURLtoBlob",value:function(Je){for(var mt=Je.split(","),bt=mt[0].match(/:(.*?);/)[1],$t=atob(mt[1]),St=$t.length,It=new Uint8Array(St);St--;)It[St]=$t.charCodeAt(St);return new Blob([It],{type:bt})}},{key:"prepare",value:function(){var Je,mt,bt=this;if(this._prepared=!1,this._bitmapCache=void 0,this._owner._videoItem.images===void 0||Object.keys(this._owner._videoItem.images).length==0)return this._bitmapCache={},void(this._prepared=!0);this._bitmapCache===void 0&&function(){bt._bitmapCache={};var $t=0,St=0;for(Je in bt._owner._videoItem.images){var It=bt._owner._videoItem.images[Je];if(It.indexOf("iVBO")===0||It.indexOf("/9j/2w")===0){$t++;var Bt=document.createElement("img");Bt.onload=function(){++St==$t&&(this._prepared=!0,typeof this._undrawFrame=="number"&&(this.drawFrame(this._undrawFrame),this._undrawFrame=void 0))}.bind(bt),Bt.src="data:image/png;base64,"+It;var Dt=Je.replace(".matte","");bt._bitmapCache[Dt]=Bt}else It.indexOf("SUQz")===0&&window.Howl!==void 0&&($t++,(mt=new Howl({src:[navigator.vendor==="Google Inc."?URL.createObjectURL(bt.dataURLtoBlob("data:audio/x-mpeg;base64,"+It)):"data:audio/x-mpeg;base64,"+It],html5:navigator.vendor==="Google Inc."||void 0,preload:navigator.vendor==="Google Inc."||void 0,format:navigator.vendor==="Google Inc."?["mp3"]:void 0})).once("load",function(){++St==$t&&(this._prepared=!0,typeof this._undrawFrame=="number"&&(this.drawFrame(this._undrawFrame),this._undrawFrame=void 0))}.bind(bt)),mt.on("loaderror",function(jt){console.error(jt)}),bt._bitmapCache[Je]=mt)}}()}},{key:"clear",value:function(){var Je=(this._owner._drawingCanvas||this._owner._container).getContext("2d"),mt={x:0,y:0,width:(this._owner._drawingCanvas||this._owner._container).width,height:(this._owner._drawingCanvas||this._owner._container).height};Je.clearRect(mt.x,mt.y,mt.width,mt.height)}},{key:"clearAudios",value:function(){this._soundsQueue.forEach(function(Je){Je.player.stop(Je.playID)}),this._soundsQueue=[]}},{key:"drawFrame",value:function(Je){var mt=this;if(this._prepared){var bt=(this._owner._drawingCanvas||this._owner._container).getContext("2d"),$t={x:0,y:0,width:(this._owner._drawingCanvas||this._owner._container).width,height:(this._owner._drawingCanvas||this._owner._container).height};bt.clearRect($t.x,$t.y,$t.width,$t.height);var St=new Map,It=!1,Bt=this._owner._videoItem.sprites;Bt.forEach(function(Dt,jt){if(Bt[0].imageKey.indexOf(".matte")!=-1)if(Dt.imageKey.indexOf(".matte")==-1){var zt=Bt[jt-1];if(It&&(Dt.matteKey==null||Dt.matteKey.length==0||Dt.matteKey!=zt.matteKey)){It=!1;var en=St.get(Dt.matteKey);bt.globalCompositeOperation="destination-in",mt.drawSprite(en,bt,Je),bt.globalCompositeOperation="source-over",bt.restore()}Dt.matteKey==null||zt.matteKey!=null&&zt.matteKey.length!=0&&zt.matteKey==Dt.matteKey||(It=!0,bt.save()),mt.drawSprite(Dt,bt,Je),It&&jt==Bt.length-1&&(en=St.get(Dt.matteKey),bt.globalCompositeOperation="destination-in",mt.drawSprite(en,bt,Je),bt.globalCompositeOperation="source-over",bt.restore())}else St.set(Dt.imageKey,Dt);else mt.drawSprite(Dt,bt,Je)})}else this._undrawFrame=Je}},{key:"drawSprite",value:function(Je,mt,bt){var $t=this,St=Je.frames[this._owner._currentFrame];if(!(St.alpha<.05)){mt.save(),this._owner._globalTransform&&mt.transform(this._owner._globalTransform.a,this._owner._globalTransform.b,this._owner._globalTransform.c,this._owner._globalTransform.d,this._owner._globalTransform.tx,this._owner._globalTransform.ty),mt.globalAlpha=St.alpha,mt.transform(St.transform.a,St.transform.b,St.transform.c,St.transform.d,St.transform.tx,St.transform.ty);var It=Je.imageKey.replace(".matte",""),Bt=this._owner._dynamicImage[It]||this._bitmapCache[It]||this._owner._videoItem.images[It];if(typeof Bt=="string"){var Dt=this._bitmapCache[Je.imageKey]||document.createElement("img"),jt=void 0,zt=void 0;if(Bt.indexOf("iVBO")===0||Bt.indexOf("/9j/2w")===0?Dt.src="data:image/png;base64,"+Bt:(Dt._svgaSrc!==Bt&&(Dt._svgaSrc=Bt,Dt.src=Bt),jt=St.layout.width,zt=St.layout.height),this._bitmapCache[Je.imageKey]=Dt,St.maskPath!==void 0&&St.maskPath!==null&&(this.drawBezier(mt,St.maskPath),mt.clip()),this._owner._dynamicImageTransform[Je.imageKey]!==void 0){mt.save();var en=this._owner._dynamicImageTransform[Je.imageKey];mt.transform(en[0],en[1],en[2],en[3],en[4],en[5])}jt&&zt?mt.drawImage(Dt,0,0,jt,zt):mt.drawImage(Dt,0,0),this._owner._dynamicImageTransform[Je.imageKey]!==void 0&&mt.restore()}else if((Bt===void 0?"undefined":ke(Bt))==="object"){if(St.maskPath!==void 0&&St.maskPath!==null&&(St.maskPath._styles=void 0,this.drawBezier(mt,St.maskPath),mt.clip()),this._owner._dynamicImageTransform[Je.imageKey]!==void 0){mt.save();var qt=this._owner._dynamicImageTransform[Je.imageKey];mt.transform(qt[0],qt[1],qt[2],qt[3],qt[4],qt[5])}mt.drawImage(Bt,0,0),this._owner._dynamicImageTransform[Je.imageKey]!==void 0&&mt.restore()}St.shapes&&St.shapes.forEach(function(Ar){Ar.type==="shape"&&Ar.pathArgs&&Ar.pathArgs.d&&$t.drawBezier(mt,new Ce.BezierPath(Ar.pathArgs.d,Ar.transform,Ar.styles)),Ar.type==="ellipse"&&Ar.pathArgs&&$t.drawEllipse(mt,new Te.EllipsePath(parseFloat(Ar.pathArgs.x)||0,parseFloat(Ar.pathArgs.y)||0,parseFloat(Ar.pathArgs.radiusX)||0,parseFloat(Ar.pathArgs.radiusY)||0,Ar.transform,Ar.styles)),Ar.type==="rect"&&Ar.pathArgs&&$t.drawRect(mt,new Se.RectPath(parseFloat(Ar.pathArgs.x)||0,parseFloat(Ar.pathArgs.y)||0,parseFloat(Ar.pathArgs.width)||0,parseFloat(Ar.pathArgs.height)||0,parseFloat(Ar.pathArgs.cornerRadius)||0,Ar.transform,Ar.styles))});var vo=this._owner._dynamicText[Je.imageKey];if(vo!==void 0){mt.textBaseline="middle",mt.font=vo.style;var yo=mt.measureText(vo.text).width;mt.fillStyle=vo.color;var fo=vo.offset!==void 0&&vo.offset.x!==void 0?isNaN(parseFloat(vo.offset.x))?0:parseFloat(vo.offset.x):0,bo=vo.offset!==void 0&&vo.offset.y!==void 0?isNaN(parseFloat(vo.offset.y))?0:parseFloat(vo.offset.y):0;mt.fillText(vo.text,(St.layout.width-yo)/2+fo,St.layout.height/2+bo)}mt.restore()}}},{key:"playAudio",value:function(Je){var mt=this;if(this._owner._forwardAnimating&&this._owner._videoItem.audios instanceof Array){this._owner._videoItem.audios.forEach(function($t){if($t.startFrame===Je&&mt._bitmapCache[$t.audioKey]!==void 0&&typeof mt._bitmapCache[$t.audioKey].play=="function"){var St={playID:mt._bitmapCache[$t.audioKey].play(),player:mt._bitmapCache[$t.audioKey],endFrame:$t.endFrame};St.player.seek($t.startTime/1e3,St.playID),mt._soundsQueue.push(St)}});var bt=!1;this._soundsQueue.forEach(function($t){Je>=$t.endFrame&&(bt=!0,$t.player.stop($t.playID))}),bt&&(this._soundsQueue=this._soundsQueue.filter(function($t){return Je<$t.endFrame}))}}},{key:"resetShapeStyles",value:function(Je,mt){var bt=mt._styles;bt!==void 0&&(bt&&bt.stroke?Je.strokeStyle="rgba("+parseInt(255*bt.stroke[0])+", "+parseInt(255*bt.stroke[1])+", "+parseInt(255*bt.stroke[2])+", "+bt.stroke[3]+")":Je.strokeStyle="transparent",bt&&(Je.lineWidth=bt.strokeWidth||void 0,Je.lineCap=bt.lineCap||void 0,Je.lineJoin=bt.lineJoin||void 0,Je.miterLimit=bt.miterLimit||void 0),bt&&bt.fill?Je.fillStyle="rgba("+parseInt(255*bt.fill[0])+", "+parseInt(255*bt.fill[1])+", "+parseInt(255*bt.fill[2])+", "+bt.fill[3]+")":Je.fillStyle="transparent",bt&&bt.lineDash&&Je.setLineDash(bt.lineDash))}},{key:"drawBezier",value:function(Je,mt){var bt=this;Je.save(),this.resetShapeStyles(Je,mt),mt._transform!==void 0&&mt._transform!==null&&Je.transform(mt._transform.a,mt._transform.b,mt._transform.c,mt._transform.d,mt._transform.tx,mt._transform.ty);var $t={x:0,y:0,x1:0,y1:0,x2:0,y2:0};Je.beginPath(),mt._d.replace(/([a-zA-Z])/g,"|||$1 ").replace(/,/g," ").split("|||").forEach(function(St){if(St.length!=0){var It=St.substr(0,1);if("MLHVCSQRZmlhvcsqrz".indexOf(It)>=0){var Bt=St.substr(1).trim().split(" ");bt.drawBezierElement(Je,$t,It,Bt)}}}),mt._styles&&mt._styles.fill&&Je.fill(),mt._styles&&mt._styles.stroke&&Je.stroke(),Je.restore()}},{key:"drawBezierElement",value:function(Je,mt,bt,$t){switch(bt){case"M":mt.x=Number($t[0]),mt.y=Number($t[1]),Je.moveTo(mt.x,mt.y);break;case"m":mt.x+=Number($t[0]),mt.y+=Number($t[1]),Je.moveTo(mt.x,mt.y);break;case"L":mt.x=Number($t[0]),mt.y=Number($t[1]),Je.lineTo(mt.x,mt.y);break;case"l":mt.x+=Number($t[0]),mt.y+=Number($t[1]),Je.lineTo(mt.x,mt.y);break;case"H":mt.x=Number($t[0]),Je.lineTo(mt.x,mt.y);break;case"h":mt.x+=Number($t[0]),Je.lineTo(mt.x,mt.y);break;case"V":mt.y=Number($t[0]),Je.lineTo(mt.x,mt.y);break;case"v":mt.y+=Number($t[0]),Je.lineTo(mt.x,mt.y);break;case"C":mt.x1=Number($t[0]),mt.y1=Number($t[1]),mt.x2=Number($t[2]),mt.y2=Number($t[3]),mt.x=Number($t[4]),mt.y=Number($t[5]),Je.bezierCurveTo(mt.x1,mt.y1,mt.x2,mt.y2,mt.x,mt.y);break;case"c":mt.x1=mt.x+Number($t[0]),mt.y1=mt.y+Number($t[1]),mt.x2=mt.x+Number($t[2]),mt.y2=mt.y+Number($t[3]),mt.x+=Number($t[4]),mt.y+=Number($t[5]),Je.bezierCurveTo(mt.x1,mt.y1,mt.x2,mt.y2,mt.x,mt.y);break;case"S":mt.x1&&mt.y1&&mt.x2&&mt.y2?(mt.x1=mt.x-mt.x2+mt.x,mt.y1=mt.y-mt.y2+mt.y,mt.x2=Number($t[0]),mt.y2=Number($t[1]),mt.x=Number($t[2]),mt.y=Number($t[3]),Je.bezierCurveTo(mt.x1,mt.y1,mt.x2,mt.y2,mt.x,mt.y)):(mt.x1=Number($t[0]),mt.y1=Number($t[1]),mt.x=Number($t[2]),mt.y=Number($t[3]),Je.quadraticCurveTo(mt.x1,mt.y1,mt.x,mt.y));break;case"s":mt.x1&&mt.y1&&mt.x2&&mt.y2?(mt.x1=mt.x-mt.x2+mt.x,mt.y1=mt.y-mt.y2+mt.y,mt.x2=mt.x+Number($t[0]),mt.y2=mt.y+Number($t[1]),mt.x+=Number($t[2]),mt.y+=Number($t[3]),Je.bezierCurveTo(mt.x1,mt.y1,mt.x2,mt.y2,mt.x,mt.y)):(mt.x1=mt.x+Number($t[0]),mt.y1=mt.y+Number($t[1]),mt.x+=Number($t[2]),mt.y+=Number($t[3]),Je.quadraticCurveTo(mt.x1,mt.y1,mt.x,mt.y));break;case"Q":mt.x1=Number($t[0]),mt.y1=Number($t[1]),mt.x=Number($t[2]),mt.y=Number($t[3]),Je.quadraticCurveTo(mt.x1,mt.y1,mt.x,mt.y);break;case"q":mt.x1=mt.x+Number($t[0]),mt.y1=mt.y+Number($t[1]),mt.x+=Number($t[2]),mt.y+=Number($t[3]),Je.quadraticCurveTo(mt.x1,mt.y1,mt.x,mt.y);break;case"A":case"a":break;case"Z":case"z":Je.closePath()}}},{key:"drawEllipse",value:function(Je,mt){Je.save(),this.resetShapeStyles(Je,mt),mt._transform!==void 0&&mt._transform!==null&&Je.transform(mt._transform.a,mt._transform.b,mt._transform.c,mt._transform.d,mt._transform.tx,mt._transform.ty);var bt=mt._x-mt._radiusX,$t=mt._y-mt._radiusY,St=2*mt._radiusX,It=2*mt._radiusY,Bt=St/2*.5522848,Dt=It/2*.5522848,jt=bt+St,zt=$t+It,en=bt+St/2,qt=$t+It/2;Je.beginPath(),Je.moveTo(bt,qt),Je.bezierCurveTo(bt,qt-Dt,en-Bt,$t,en,$t),Je.bezierCurveTo(en+Bt,$t,jt,qt-Dt,jt,qt),Je.bezierCurveTo(jt,qt+Dt,en+Bt,zt,en,zt),Je.bezierCurveTo(en-Bt,zt,bt,qt+Dt,bt,qt),mt._styles&&mt._styles.fill&&Je.fill(),mt._styles&&mt._styles.stroke&&Je.stroke(),Je.restore()}},{key:"drawRect",value:function(Je,mt){Je.save(),this.resetShapeStyles(Je,mt),mt._transform!==void 0&&mt._transform!==null&&Je.transform(mt._transform.a,mt._transform.b,mt._transform.c,mt._transform.d,mt._transform.tx,mt._transform.ty);var bt=mt._x,$t=mt._y,St=mt._width,It=mt._height,Bt=mt._cornerRadius;St<2*Bt&&(Bt=St/2),It<2*Bt&&(Bt=It/2),Je.beginPath(),Je.moveTo(bt+Bt,$t),Je.arcTo(bt+St,$t,bt+St,$t+It,Bt),Je.arcTo(bt+St,$t+It,bt,$t+It,Bt),Je.arcTo(bt,$t+It,bt,$t,Bt),Je.arcTo(bt,$t,bt+St,$t,Bt),Je.closePath(),mt._styles&&mt._styles.fill&&Je.fill(),mt._styles&&mt._styles.stroke&&Je.stroke(),Je.restore()}}]),Ke}()},function(ge,be,$e){Object.defineProperty(be,"__esModule",{value:!0}),be.AutoLoader=void 0;var ke=$e(13),Ee=$e(63),Ce=be.AutoLoader=function Te(){(function(Se,Ke){if(!(Se instanceof Ke))throw new TypeError("Cannot call a class as a function")})(this,Te)};Ce.sharedParser=new ke.Parser,Ce.autoload=function(Te,Se){if(typeof window!="undefined"&&typeof document!="undefined"){var Ke=Se||Ce.sharedParser;if(Te){if((Te.tagName==="CANVAS"||Te.tagName==="DIV")&&Te.attributes.src&&Te.attributes.src.value.indexOf(".svga")===Te.attributes.src.value.length-5){var Je=Te.attributes.src.value,mt=new Ee.Player(Te);Ke.load(Je,function(St){if(Te.attributes.loops){var It=parseFloat(Te.attributes.loops.value)||0;mt.loops=It}if(Te.attributes.clearsAfterStop){var Bt=Te.attributes.clearsAfterStop.value!=="false";mt.clearsAfterStop=Bt}mt.setVideoItem(St),mt.startAnimation()}),Te.player=mt}}else for(var bt=document.querySelectorAll('[src$=".svga"]'),$t=0;$t<bt.length;$t++)Te=bt[$t],Ce.autoload(Te)}}}])})})(svga_min);var SVGAPlayer=getDefaultExportFromCjs(svga_min.exports),SVGA_vue_vue_type_style_index_0_lang="";const _sfc_main$4=defineComponent({__name:"SVGA",props:{file:String,loop:{type:Boolean,default:!1}},emits:["finish","start"],setup(ge,{emit:be}){const $e=ge,ke=ref(null);return onMounted(()=>{nextTick(()=>{const Ee=new SVGAPlayer.Player(ke.value);$e.loop||(Ee.loops=1),Ee.onFinished(()=>{be("finish")}),new SVGAPlayer.Parser().load($e.file,Te=>{be("start"),Ee.setVideoItem(Te),Ee.startAnimation()})})}),(Ee,Ce)=>(openBlock(),createElementBlock("div",{ref_key:"demoCanvas",ref:ke,class:"app_svga"},null,512))}}),_hoisted_1$j={width:"28",height:"28",viewBox:"0 0 36 36"},_hoisted_2$i=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.772 30.857v-19.11H7.546a3.683 3.683 0 0 0-3.689 3.678v11.754a3.683 3.683 0 0 0 3.689 3.678h2.226Zm2.218 0V11.705c3-1.078 4.704-3.82 5.115-8.37.162-1.78 1.858-2.52 3.475-1.74 1.605.775 2.663 2.73 2.663 5.344 0 1.564-.195 3.166-.585 4.808h7.074a3.696 3.696 0 0 1 3.59 4.581l-2.334 9.468a6.654 6.654 0 0 1-6.46 5.061H11.991Z"},null,-1),_hoisted_3$h=[_hoisted_2$i];function render$f(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$j,[..._hoisted_3$h])}var BarLike={render:render$f};const _hoisted_1$i={width:"28",height:"28",viewBox:"0 0 28 28"},_hoisted_2$h=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.045 25.545c-6.351 0-11.5-5.148-11.5-11.5 0-6.35 5.149-11.5 11.5-11.5s11.5 5.15 11.5 11.5a11.5 11.5 0 0 1-11.5 11.5ZM9.662 6.816h8.614c.549 0 .994.406.994.906s-.445.906-.994.906H14.95v1.662a5.725 5.725 0 0 1 5.436 5.702v1.207a.906.906 0 0 1-1.812 0v-1.207a3.913 3.913 0 0 0-3.624-3.89v8.455a.906.906 0 0 1-1.812 0v-8.455a3.914 3.914 0 0 0-3.624 3.89v1.207a.906.906 0 0 1-1.811 0v-1.207a5.725 5.725 0 0 1 5.435-5.702V8.628H9.662c-.549 0-.994-.406-.994-.906s.445-.906.994-.906Z"},null,-1),_hoisted_3$g=[_hoisted_2$h];function render$e(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$i,[..._hoisted_3$g])}var BarCoin={render:render$e};const _hoisted_1$h={width:"28",height:"28",viewBox:"0 0 28 28"},_hoisted_2$g=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.807 9.262c-1.063-.163-2.045-.894-2.454-1.868l-1.88-3.897c-.573-1.299-2.373-1.299-3.027 0l-1.8 3.897c-.49.974-1.39 1.705-2.453 1.868L3.94 9.91c-1.308.162-1.881 1.786-.9 2.76l3.19 3.248c.736.73 1.063 1.786.9 2.841l-.736 4.547c-.246 1.38 1.227 2.354 2.453 1.705l3.6-1.949a3.197 3.197 0 0 1 3.189 0l3.599 1.949c1.226.65 2.617-.325 2.453-1.705l-.818-4.546c-.165-1.056.164-2.111.9-2.842l3.19-3.248c.981-.974.409-2.598-.9-2.76l-4.253-.65Z"},null,-1),_hoisted_3$f=[_hoisted_2$g];function render$d(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$h,[..._hoisted_3$f])}var BarFav={render:render$d};const _hoisted_1$g={class:"icon",width:"28",height:"28",viewBox:"0 0 28 28"},_hoisted_2$f=createBaseVNode("path",{d:"M12.606 10.333v-4.89c0-.797.666-1.443 1.487-1.443.35 0 .687.119.955.336l10.337 8.386a1.632 1.632 0 0 1 0 2.556l-10.337 8.386c-.63.511-1.569.43-2.096-.182a1.418 1.418 0 0 1-.346-.926v-4.503c-5.011 0-7.235 1.859-10.034 5.472-.096.124-.572.252-.572-.313 0-6.995 1.901-12.88 10.606-12.88Z"},null,-1),_hoisted_3$e=[_hoisted_2$f];function render$c(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$g,[..._hoisted_3$e])}var BarShare={render:render$c},BiliDialog_vue_vue_type_style_index_0_lang="";const _hoisted_1$f={key:0,class:"gamepad-cursor-modal cursor-modal-close r_sm"},_sfc_main$3=defineComponent({__name:"BiliDialog",props:{show:{type:Boolean,default:!1},zIndex:{type:Number,default:1e3},isShowGpCursor:{type:Boolean,default:!1}},emits:["close"],setup(ge,{emit:be}){const $e=ge;return(ke,Ee)=>$e.show?(openBlock(),createElementBlock("div",{key:0,class:"bili-dialog-m",style:normalizeStyle({zIndex:$e.zIndex}),onClick:Ee[1]||(Ee[1]=Ce=>be("close")),onWheel:Ee[2]||(Ee[2]=withModifiers(()=>{},["stop"]))},[createBaseVNode("div",{class:"bili-dialog-bomb",onClick:Ee[0]||(Ee[0]=withModifiers(()=>{},["stop"]))},[renderSlot(ke.$slots,"default"),ge.isShowGpCursor?(openBlock(),createElementBlock("span",_hoisted_1$f)):createCommentVNode("",!0)])],36)):createCommentVNode("",!0)}}),_hoisted_1$e={viewBox:"0 0 24 24",fill:"currentColor"},_hoisted_2$e=createBaseVNode("rect",{width:"24",height:"24",rx:"12"},null,-1),_hoisted_3$d=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 8c.194 0 .352.158.352.353v3.294h3.295a.353.353 0 0 1 0 .706h-3.295v3.294a.353.353 0 0 1-.706 0v-3.294H8.353a.353.353 0 1 1 0-.706h3.293V8.353c0-.195.158-.353.353-.353Z",fill:"#fff"},null,-1),_hoisted_4$9=createBaseVNode("path",{d:"M12.352 11.647h-.5v.5h.5v-.5Zm0 .706v-.5h-.5v.5h.5Zm-.706 0h.5v-.5h-.5v.5Zm0-.706v.5h.5v-.5h-.5Zm1.206-3.294a.853.853 0 0 0-.853-.853v1a.147.147 0 0 1-.147-.147h1Zm0 3.294V8.353h-1v3.294h1Zm2.795-.5h-3.295v1h3.295v-1ZM16.5 12a.853.853 0 0 0-.853-.853v1A.147.147 0 0 1 15.5 12h1Zm-.853.853A.853.853 0 0 0 16.5 12h-1c0-.081.066-.147.147-.147v1Zm-3.295 0h3.295v-1h-3.295v1Zm.5 2.794v-3.294h-1v3.294h1Zm-.853.853a.853.853 0 0 0 .853-.853h-1c0-.081.066-.147.147-.147v1Zm-.853-.853c0 .471.382.853.853.853v-1c.081 0 .147.066.147.147h-1Zm0-3.294v3.294h1v-3.294h-1Zm-2.793.5h3.293v-1H8.353v1ZM7.5 12c0 .471.382.853.853.853v-1c.081 0 .147.066.147.147h-1Zm.853-.853A.853.853 0 0 0 7.5 12h1a.147.147 0 0 1-.147.147v-1Zm3.293 0H8.353v1h3.293v-1Zm-.5-2.794v3.294h1V8.353h-1ZM12 7.5a.853.853 0 0 0-.853.853h1A.147.147 0 0 1 12 8.5v-1Z",fill:"#fff"},null,-1),_hoisted_5$6=[_hoisted_2$e,_hoisted_3$d,_hoisted_4$9];function render$b(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$e,[..._hoisted_5$6])}var IcoAdd={render:render$b};const _hoisted_1$d={viewBox:"0 0 16 16",fill:"none",stroke:"currentColor"},_hoisted_2$d=createBaseVNode("path",{class:"st0",d:"M2.5.5h11c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2v-11c0-1.1.9-2 2-2z"},null,-1),_hoisted_3$c=[_hoisted_2$d];function render$a(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$d,[..._hoisted_3$c])}var CheckboxDefault={render:render$a};const _hoisted_1$c={viewBox:"0 0 16 16",fill:"currentColor"},_hoisted_2$c=createBaseVNode("rect",{width:"16",height:"16",rx:"2"},null,-1),_hoisted_3$b=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.225 4.671a.469.469 0 0 0-.662.035L6.31 10.54 4.445 8.468a.469.469 0 1 0-.697.627l2.208 2.452c.13.144.329.19.501.13a.466.466 0 0 0 .213-.135l5.59-6.209a.469.469 0 0 0-.035-.662Z",fill:"#fff"},null,-1),_hoisted_4$8=createBaseVNode("path",{d:"m11.563 4.706-.371-.335.371.335Zm.662-.035.335-.371-.335.371ZM6.31 10.54l-.371.334.371.413.372-.413-.372-.334ZM4.445 8.468l-.372.334.372-.334Zm-.662-.035-.335-.372.335.372Zm-.035.662-.372.334.372-.334Zm2.208 2.452-.372.335.372-.335Zm.501.13-.144-.479-.01.003-.009.003.163.473Zm.213-.135-.372-.335.372.335Zm5.59-6.209L11.889 5l.371.334Zm-.325-.293a.031.031 0 0 1-.044.003l.669-.743a.969.969 0 0 0-1.368.071l.743.67Zm-5.253 5.834 5.253-5.834-.743-.669-5.253 5.834.743.67Zm0-.669L4.816 8.133l-.743.67 1.866 2.071.743-.669ZM4.816 8.133a.969.969 0 0 0-1.368-.072l.67.743a.031.031 0 0 1-.045-.002l.743-.669Zm-1.368-.072a.969.969 0 0 0-.072 1.368l.743-.669a.031.031 0 0 1-.002.044l-.669-.743ZM3.376 9.43l2.208 2.453.744-.67L4.119 8.76l-.743.67Zm2.208 2.453c.27.298.68.39 1.036.268l-.326-.946a.03.03 0 0 1 .018 0 .034.034 0 0 1 .016.009l-.744.669Zm.714-.675a.032.032 0 0 1 .006-.005.04.04 0 0 1 .009-.004l.288.958a.966.966 0 0 0 .44-.28l-.743-.669ZM11.888 5l-5.59 6.208.743.67 5.59-6.21L11.89 5Zm.003.044a.031.031 0 0 1-.002-.044l.743.669A.969.969 0 0 0 12.56 4.3l-.67.743Z",fill:"#fff"},null,-1),_hoisted_5$5=[_hoisted_2$c,_hoisted_3$b,_hoisted_4$8];function render$9(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$c,[..._hoisted_5$5])}var CheckboxSelected={render:render$9},FollowedDialog_vue_vue_type_style_index_0_lang="";const _hoisted_1$b={class:"app-follow--title"},_hoisted_2$b=createTextVNode("\u8BBE\u7F6E\u5206\u7EC4"),_hoisted_3$a={class:"app-follow--info"},_hoisted_4$7=createTextVNode("\u8BF7\u4E3A "),_hoisted_5$4=["textContent"],_hoisted_6$1=createTextVNode(" \u9009\u62E9\u5206\u7EC4"),_hoisted_7$1=["onClick"],_hoisted_8$1={class:"app-follow--list-item-name"},_hoisted_9$1=["textContent"],_hoisted_10=["textContent"],_hoisted_11=["onClick"],_hoisted_12=["value"],_hoisted_13={type:"submit",class:"submit"},_hoisted_14={class:"bottom"},_hoisted_15=["disabled","textContent"],_sfc_main$2=defineComponent({__name:"FollowedDialog",props:{upid:{type:Number,default:0},upName:{type:String,default:""}},emits:["close","save"],setup(ge,{emit:be}){const $e=ge,ke=ref([]),Ee=ref({}),Ce=ref(""),Te=ref(null),Se=ref(null),Ke=ref(!1),Je=ref(""),mt=computed(()=>{for(let jt of ke.value)if(jt.checked&&jt.tagid!==0)return"\u4FDD\u5B58";return"\u4FDD\u5B58\u81F3\u9ED8\u8BA4\u5206\u7EC4"});watch$1(Ke,()=>{Ke.value&&nextTick(()=>{Te.value.focus()})});const bt=async()=>{const[jt,zt]=await Promise.all([Upinfo.getUserTags($e.upid||0),Upinfo.getRelationTags()]);if(jt.code===0?Ee.value=jt.data:jt&&jt.message&&(Ce.value=jt.message),zt.code===0){let en=zt.data;for(let qt of en)Ee.value[qt.tagid]?qt.checked=!0:qt.checked=!1;ke.value=en}else zt&&zt.message&&(Ce.value=zt.message)};onMounted(()=>{bt()});const $t=jt=>{(!Se.value||!Se.value.contains(jt.target))&&St()},St=()=>{Je.value="",Ke.value=!1},It=()=>{Ce.value="",Ke.value=!0},Bt=()=>{if(!Je.value){toastAsync({content:"\u8BF7\u586B\u5199\u5206\u7EC4\u540D\u79F0"});return}Upinfo.addGroup(Je.value).then(jt=>{jt.code===0?ke.value.push({name:Je.value,tagid:jt.data.tagid,checked:!1}):Ce.value=jt.message,Je.value="",Ke.value=!1}).catch(jt=>{toastAsync({content:jt.message||"\u7F51\u7EDC\u9519\u8BEF"})})},Dt=jt=>{let zt=[];for(let en of ke.value)en.checked&&zt.push(en.tagid);zt.length===0&&zt.push(0),Upinfo.addUsers({fids:$e.upid||0,tagids:zt.join(",")}).then(en=>{let qt=en==null?void 0:en.message,vo=jt.target;(en==null?void 0:en.code)===0&&(qt="\u52A0\u5165\u5206\u7EC4\u6210\u529F",vo=null,be("save",zt)),biliMsg({el:vo,msg:qt,cd:1e3})}).catch(()=>{biliMsg({el:jt.target,msg:"\u52A0\u5165\u5206\u7EC4\u5931\u8D25",cd:1e3,type:"error"})})};return(jt,zt)=>(openBlock(),createElementBlock("div",{class:"app-follow",onClick:zt[5]||(zt[5]=en=>$t(en))},[createBaseVNode("div",_hoisted_1$b,[_hoisted_2$b,createVNode(unref(IcoClose$1),{class:"app-follow--close",onClick:zt[0]||(zt[0]=en=>be("close"))})]),createBaseVNode("div",{class:normalizeClass(["app-follow--list",{adding:Ke.value}])},[createBaseVNode("div",_hoisted_3$a,[_hoisted_4$7,createBaseVNode("span",{class:"uname",textContent:toDisplayString($e.upName)},null,8,_hoisted_5$4),_hoisted_6$1]),(openBlock(!0),createElementBlock(Fragment,null,renderList(ke.value,(en,qt)=>(openBlock(),createElementBlock(Fragment,null,[en.tagid!==0?(openBlock(),createElementBlock("div",{class:normalizeClass(["app-follow--list-item",en.tip?"special-group":""]),key:qt,onClick:vo=>en.checked=!en.checked},[createBaseVNode("div",_hoisted_8$1,[withDirectives(createVNode(unref(CheckboxDefault),null,null,512),[[vShow,!en.checked]]),withDirectives(createVNode(unref(CheckboxSelected),{class:"app-follow--selected"},null,512),[[vShow,en.checked]]),createBaseVNode("span",{class:"app-follow--list-item-title",textContent:toDisplayString(en.name)},null,8,_hoisted_9$1)]),en.tip?(openBlock(),createElementBlock("div",{key:0,class:"app-follow--list-item-right",textContent:toDisplayString(en.tip)},null,8,_hoisted_10)):createCommentVNode("",!0)],10,_hoisted_7$1)):createCommentVNode("",!0)],64))),256))],2),createBaseVNode("div",{class:"add-group",ref_key:"addGroup",ref:Se},[withDirectives(createBaseVNode("div",{class:"add-btn",onClick:withModifiers(It,["stop"])},"\u65B0\u5EFA\u5206\u7EC4",8,_hoisted_11),[[vShow,!Ke.value]]),withDirectives(createBaseVNode("form",{class:"input-group",onSubmit:zt[3]||(zt[3]=en=>Bt())},[createBaseVNode("input",{ref_key:"groupInput",ref:Te,type:"text",maxLength:"16",placeholder:"\u6700\u591A\u8F93\u516516\u4E2A\u5B57",value:Je.value,onInput:zt[1]||(zt[1]=en=>Je.value=en.target.value),onKeydown:zt[2]||(zt[2]=withKeys(en=>St(),["esc"]))},null,40,_hoisted_12),createBaseVNode("button",_hoisted_13,[createVNode(unref(IcoAdd),{class:"submit-icon"})])],544),[[vShow,Ke.value]])],512),createBaseVNode("div",_hoisted_14,[createBaseVNode("button",{class:"btn submit-move",disabled:Ke.value,textContent:toDisplayString(unref(mt)),onClick:zt[4]||(zt[4]=en=>Dt(en))},null,8,_hoisted_15)])]))}}),_hoisted_1$a={width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},_hoisted_2$a=createBaseVNode("circle",{cx:"20",cy:"20",r:"20",fill:"#57BB40"},null,-1),_hoisted_3$9=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.717 13.712c-.707 0-1.273.55-1.273 1.237 0 .688.566 1.237 1.273 1.237s1.273-.55 1.273-1.237-.566-1.237-1.273-1.237Zm-6.081 0c-.707 0-1.273.55-1.273 1.237 0 .688.566 1.237 1.273 1.237s1.273-.55 1.273-1.237-.566-1.237-1.274-1.237Zm3.536 9.21c0 .688.142 1.375.424 1.925h-.848c-.99 0-2.121-.137-3.111-.412l-3.535 1.65.848-2.75c-2.263-1.375-3.677-3.437-3.677-5.911C7.273 13.3 11.516 10 16.607 10c4.666 0 8.485 2.75 9.192 6.186h-.707c-4.385 0-7.92 3.025-7.92 6.736Zm10.748-3.024c-.566 0-.99.413-.99.962 0 .55.424.963.99.963.565 0 .99-.412.99-.963 0-.55-.425-.962-.99-.962Zm-5.092 0c-.565 0-.989.413-.989.962 0 .55.424.963.99.963.565 0 .99-.412.99-.963 0-.55-.425-.962-.99-.962Zm6.93 8.111.707 2.2-2.546-1.375a8.46 8.46 0 0 1-2.686.412c-4.102 0-7.496-2.75-7.496-6.186s3.394-6.186 7.496-6.186c4.1 0 7.494 2.75 7.494 6.186 0 1.925-1.13 3.712-2.97 4.95Z",fill:"#fff"},null,-1),_hoisted_4$6=[_hoisted_2$a,_hoisted_3$9];function render$8(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$a,[..._hoisted_4$6])}var ShareWeixin={render:render$8};const _hoisted_1$9={width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},_hoisted_2$9=createBaseVNode("circle",{cx:"20",cy:"20",r:"20",fill:"#4CA2E5"},null,-1),_hoisted_3$8=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M29.037 24.266c-.131-1.563-.993-3.302-1.345-4.177l-.912-2.25c-.029-.936.261-3.087-1.258-5.78-1.525-2.692-4.578-2.935-5.143-2.963-.565-.028-4.097-.055-5.834 2.876-1.737 2.93-1.268 5.868-1.268 5.868l-.972 2.265s-.451 1.034-.842 2.292c-.391 1.257-.783 3.235-.391 3.636.39.402 1.808-1.839 1.939-2.046 0 0 .101 1.07.37 1.63.214.449.73 1.567 1.77 2.445-.5.154-1.7.567-1.877.996-.222.545.174.609.85.646.677.037 3.919.12 5.472-.087a.99.99 0 0 1 .048-.008 15 15 0 0 0 .432.008c.088 0 .19-.003.298-.005.01.002.022.002.032.005 1.553.207 4.797.124 5.471.087.677-.037 1.07-.101.85-.646-.179-.437-1.413-.854-1.898-1.002.151-.129.3-.268.444-.417 1.751-1.839 1.607-3 1.68-3.664 0 0 1.475 2.032 1.794 2.102.319.07.418-.25.29-1.811Z",fill:"#fff"},null,-1),_hoisted_4$5=[_hoisted_2$9,_hoisted_3$8];function render$7(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$9,[..._hoisted_4$5])}var ShareQQ={render:render$7};const _hoisted_1$8={width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},_hoisted_2$8=createBaseVNode("circle",{cx:"20",cy:"20",r:"20",fill:"#FB7299"},null,-1),_hoisted_3$7=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.546 14.546A4.545 4.545 0 0 1 19.09 10v9.09a4.545 4.545 0 0 1-4.546-4.544Zm10.909 10.909a4.545 4.545 0 0 0-4.546-4.546V30a4.545 4.545 0 0 0 4.546-4.546Zm-4.546-6.364a4.545 4.545 0 0 1 9.091 0h-9.09Zm-6.363 6.363A4.545 4.545 0 0 1 10 20.91h9.09a4.545 4.545 0 0 1-4.544 4.546Z",fill:"#fff"},null,-1),_hoisted_4$4=createBaseVNode("path",{d:"M19.09 10h.456a.455.455 0 0 0-.455-.455V10Zm0 9.09v.456a.455.455 0 0 0 .456-.455h-.455Zm1.82 1.82v-.456a.455.455 0 0 0-.456.455h.455Zm0 9.09h-.456c0 .251.204.454.455.454V30Zm0-10.91h-.456c0 .252.204.456.455.456v-.455Zm9.09 0v.456a.455.455 0 0 0 .454-.455H30Zm-20 1.82v-.456a.455.455 0 0 0-.455.455H10Zm9.09 0h.456a.455.455 0 0 0-.455-.456v.455Zm0-11.365a5 5 0 0 0-5 5H15a4.091 4.091 0 0 1 4.09-4.09v-.91Zm.456 9.546V10h-.91v9.09h.91Zm-5.455-4.546a5 5 0 0 0 5 5v-.909A4.091 4.091 0 0 1 15 14.546h-.91Zm6.818 6.819c2.26 0 4.091 1.831 4.091 4.09h.91a5 5 0 0 0-5-5v.91ZM21.364 30v-9.09h-.91V30h.91ZM25 25.454a4.091 4.091 0 0 1-4.09 4.091v.91a5 5 0 0 0 5-5H25Zm.454-11.363a5 5 0 0 0-5 5h.91c0-2.26 1.831-4.091 4.09-4.091v-.91Zm5 5a5 5 0 0 0-5-5V15a4.091 4.091 0 0 1 4.091 4.09h.91Zm-9.545.454H30v-.909h-9.09v.91ZM9.545 20.91a5 5 0 0 0 5 5V25a4.091 4.091 0 0 1-4.09-4.09h-.91Zm9.546-.454H10v.909h9.09v-.91Zm-4.546 5.454a5 5 0 0 0 5-5h-.909c0 2.26-1.831 4.091-4.09 4.091v.91Z",fill:"#fff"},null,-1),_hoisted_5$3=[_hoisted_2$8,_hoisted_3$7,_hoisted_4$4];function render$6(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$8,[..._hoisted_5$3])}var ShareDynmic={render:render$6};const _hoisted_1$7={width:"45",height:"44",viewBox:"0 0 45 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$7=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22.5 0C10.35 0 .5 9.85.5 22s9.85 22 22 22 22-9.85 22-22-9.85-22-22-22Z",fill:"#5A62C7"},null,-1),_hoisted_3$6=createBaseVNode("path",{d:"M25.623 19.425a5.242 5.242 0 0 0-.535-.462 1.063 1.063 0 0 0-1.551 1.448c.075.089.163.165.262.226.1.082.199.164.29.256l.088.087c1.102 1.1.773 2.995-.328 4.097l-4.7 4.698a2.829 2.829 0 0 1-3.994 0l-.088-.088a2.824 2.824 0 0 1 0-3.992l2.076-2.076a1.154 1.154 0 0 0-1.365-1.859l-.002-.003-.022.02a1.164 1.164 0 0 0-.22.206l-2.157 2.019c-2.029 2.03-2.029 5.35 0 7.376l.087.088c2.029 2.027 5.347 2.027 7.375 0l4.699-4.7c2.025-2.028 2.197-5.228.171-7.255l-.086-.086Z",fill:"#fff"},null,-1),_hoisted_4$3=createBaseVNode("path",{d:"m32.396 12.535-.088-.088c-2.028-2.028-5.346-2.028-7.375 0l-4.698 4.7c-2.028 2.028-2.14 4.957-.112 6.987l.086.085c.093.092.188.179.286.262.07.079.153.146.246.2l.002.002a1.003 1.003 0 0 0 1.403-1.306c-.133-.299-.381-.48-.553-.652l-.086-.085c-1.101-1.101-.683-2.701.418-3.803l4.701-4.698a2.824 2.824 0 0 1 3.992 0l.088.086a2.827 2.827 0 0 1 0 3.994l-2.07 2.071a1.143 1.143 0 0 0 .68 2.065c.22 0 .426-.062.6-.17l.005.007.032-.03a1.15 1.15 0 0 0 .26-.24l2.181-2.013c2.03-2.028 2.03-5.346.002-7.374Z",fill:"#fff"},null,-1),_hoisted_5$2=[_hoisted_2$7,_hoisted_3$6,_hoisted_4$3];function render$5(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$7,[..._hoisted_5$2])}var ShareVideo={render:render$5};const _hoisted_1$6={width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},_hoisted_2$6=createBaseVNode("circle",{cx:"20",cy:"20",r:"20",fill:"#F4BF41"},null,-1),_hoisted_3$5=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"m25.76 17.822-7.047 5.056s2.829.42 7.094.371l-.194-.836 6.079-5.266a.368.368 0 0 0-.211-.644l-8.013-.689-3.13-7.408a.368.368 0 0 0-.677 0l-3.13 7.408-8.013.689a.367.367 0 0 0-.21.644l6.079 5.266-1.822 7.834a.367.367 0 0 0 .548.397L20 26.491l6.887 4.153a.354.354 0 0 0 .19.053.368.368 0 0 0 .358-.45l-1.44-6.195c.617-.31 1.298-.837 1.298-.837s-2.697 1.317-12.38.674l7.017-5.086s-.276-.43-9.07-.736c-.588-.02 7.17-1.47 12.9-.245Z",fill:"#fff"},null,-1),_hoisted_4$2=[_hoisted_2$6,_hoisted_3$5];function render$4(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$6,[..._hoisted_4$2])}var ShareQzone={render:render$4};const _hoisted_1$5={width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},_hoisted_2$5=createBaseVNode("circle",{cx:"20",cy:"20",r:"20",fill:"#DB4437"},null,-1),_hoisted_3$4=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M27.618 16.703c-.394 0-.787-.394-.787-.787.13-.92-.394-1.838-1.444-2.1h-.394c-.394 0-.787-.394-.787-.788s.393-.787.787-.787a3.25 3.25 0 0 1 3.282 3.28v.263c0 .656-.263.919-.657.919Zm-9.974 6.43c-.263 0-.394.264-.394.526s.262.394.394.394c.13 0 .393-.263.393-.394.132-.262-.131-.525-.393-.525Zm-2.231.395c-.657 0-1.182.525-1.182 1.18 0 .657.525 1.182 1.181 1.182.657 0 1.182-.525 1.182-1.181s-.525-1.181-1.182-1.181Zm2.1 3.675c-2.1.524-4.2-.394-4.594-2.231-.394-1.838.919-3.544 3.018-4.069 2.1-.525 4.2.394 4.594 2.23.393 1.839-.919 3.545-3.019 4.07Zm-.526-8.269c-3.937.263-7.087 2.494-6.955 5.119.13 2.625 3.543 4.462 7.48 4.2 3.938-.263 7.087-2.494 6.956-5.12-.13-2.624-3.544-4.33-7.48-4.199Zm7.481-3.543c1.706.787.657 3.937.657 3.937a4.072 4.072 0 0 1 2.362 1.181c1.838 2.1.263 6.563-6.037 8.663-5.644 1.837-11.288 0-12.862-3.544-1.575-3.806 1.574-9.581 6.956-12.6.656-.394 2.756-1.05 3.937.263.656.787 0 3.018 0 3.018s2.494-2.1 4.987-.918Zm7.22 1.312c0 .525-.526 1.05-1.051 1.05-.525 0-1.05-.525-1.05-1.05v-.131c.393-2.625-1.444-4.987-4.069-5.381h-.787c-.525 0-1.05-.525-1.05-1.05s.525-1.05 1.05-1.05h.131c3.806 0 6.956 3.15 6.956 6.956v.525c-.13 0-.13.131-.13.131Z",fill:"#fff"},null,-1),_hoisted_4$1=[_hoisted_2$5,_hoisted_3$4];function render$3(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$5,[..._hoisted_4$1])}var ShareWeibo={render:render$3},browser={},canPromise$1=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},qrcode={},utils$1={};let toSJISFunction;const CODEWORDS_COUNT=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];utils$1.getSymbolSize=function ge(be){if(!be)throw new Error('"version" cannot be null or undefined');if(be<1||be>40)throw new Error('"version" should be in range from 1 to 40');return be*4+17};utils$1.getSymbolTotalCodewords=function ge(be){return CODEWORDS_COUNT[be]};utils$1.getBCHDigit=function(ge){let be=0;for(;ge!==0;)be++,ge>>>=1;return be};utils$1.setToSJISFunction=function ge(be){if(typeof be!="function")throw new Error('"toSJISFunc" is not a valid function.');toSJISFunction=be};utils$1.isKanjiModeEnabled=function(){return typeof toSJISFunction!="undefined"};utils$1.toSJIS=function ge(be){return toSJISFunction(be)};var errorCorrectionLevel={};(function(ge){ge.L={bit:1},ge.M={bit:0},ge.Q={bit:3},ge.H={bit:2};function be($e){if(typeof $e!="string")throw new Error("Param is not a string");switch($e.toLowerCase()){case"l":case"low":return ge.L;case"m":case"medium":return ge.M;case"q":case"quartile":return ge.Q;case"h":case"high":return ge.H;default:throw new Error("Unknown EC Level: "+$e)}}ge.isValid=function(ke){return ke&&typeof ke.bit!="undefined"&&ke.bit>=0&&ke.bit<4},ge.from=function(ke,Ee){if(ge.isValid(ke))return ke;try{return be(ke)}catch{return Ee}}})(errorCorrectionLevel);function BitBuffer$1(){this.buffer=[],this.length=0}BitBuffer$1.prototype={get:function(ge){const be=Math.floor(ge/8);return(this.buffer[be]>>>7-ge%8&1)===1},put:function(ge,be){for(let $e=0;$e<be;$e++)this.putBit((ge>>>be-$e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(ge){const be=Math.floor(this.length/8);this.buffer.length<=be&&this.buffer.push(0),ge&&(this.buffer[be]|=128>>>this.length%8),this.length++}};var bitBuffer=BitBuffer$1;function BitMatrix$1(ge){if(!ge||ge<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=ge,this.data=new Uint8Array(ge*ge),this.reservedBit=new Uint8Array(ge*ge)}BitMatrix$1.prototype.set=function(ge,be,$e,ke){const Ee=ge*this.size+be;this.data[Ee]=$e,ke&&(this.reservedBit[Ee]=!0)};BitMatrix$1.prototype.get=function(ge,be){return this.data[ge*this.size+be]};BitMatrix$1.prototype.xor=function(ge,be,$e){this.data[ge*this.size+be]^=$e};BitMatrix$1.prototype.isReserved=function(ge,be){return this.reservedBit[ge*this.size+be]};var bitMatrix=BitMatrix$1,alignmentPattern={};(function(ge){const be=utils$1.getSymbolSize;ge.getRowColCoords=function(ke){if(ke===1)return[];const Ee=Math.floor(ke/7)+2,Ce=be(ke),Te=Ce===145?26:Math.ceil((Ce-13)/(2*Ee-2))*2,Se=[Ce-7];for(let Ke=1;Ke<Ee-1;Ke++)Se[Ke]=Se[Ke-1]-Te;return Se.push(6),Se.reverse()},ge.getPositions=function(ke){const Ee=[],Ce=ge.getRowColCoords(ke),Te=Ce.length;for(let Se=0;Se<Te;Se++)for(let Ke=0;Ke<Te;Ke++)Se===0&&Ke===0||Se===0&&Ke===Te-1||Se===Te-1&&Ke===0||Ee.push([Ce[Se],Ce[Ke]]);return Ee}})(alignmentPattern);var finderPattern={};const getSymbolSize=utils$1.getSymbolSize,FINDER_PATTERN_SIZE=7;finderPattern.getPositions=function ge(be){const $e=getSymbolSize(be);return[[0,0],[$e-FINDER_PATTERN_SIZE,0],[0,$e-FINDER_PATTERN_SIZE]]};var maskPattern={};(function(ge){ge.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const be={N1:3,N2:3,N3:40,N4:10};ge.isValid=function(Ee){return Ee!=null&&Ee!==""&&!isNaN(Ee)&&Ee>=0&&Ee<=7},ge.from=function(Ee){return ge.isValid(Ee)?parseInt(Ee,10):void 0},ge.getPenaltyN1=function(Ee){const Ce=Ee.size;let Te=0,Se=0,Ke=0,Je=null,mt=null;for(let bt=0;bt<Ce;bt++){Se=Ke=0,Je=mt=null;for(let $t=0;$t<Ce;$t++){let St=Ee.get(bt,$t);St===Je?Se++:(Se>=5&&(Te+=be.N1+(Se-5)),Je=St,Se=1),St=Ee.get($t,bt),St===mt?Ke++:(Ke>=5&&(Te+=be.N1+(Ke-5)),mt=St,Ke=1)}Se>=5&&(Te+=be.N1+(Se-5)),Ke>=5&&(Te+=be.N1+(Ke-5))}return Te},ge.getPenaltyN2=function(Ee){const Ce=Ee.size;let Te=0;for(let Se=0;Se<Ce-1;Se++)for(let Ke=0;Ke<Ce-1;Ke++){const Je=Ee.get(Se,Ke)+Ee.get(Se,Ke+1)+Ee.get(Se+1,Ke)+Ee.get(Se+1,Ke+1);(Je===4||Je===0)&&Te++}return Te*be.N2},ge.getPenaltyN3=function(Ee){const Ce=Ee.size;let Te=0,Se=0,Ke=0;for(let Je=0;Je<Ce;Je++){Se=Ke=0;for(let mt=0;mt<Ce;mt++)Se=Se<<1&2047|Ee.get(Je,mt),mt>=10&&(Se===1488||Se===93)&&Te++,Ke=Ke<<1&2047|Ee.get(mt,Je),mt>=10&&(Ke===1488||Ke===93)&&Te++}return Te*be.N3},ge.getPenaltyN4=function(Ee){let Ce=0;const Te=Ee.data.length;for(let Ke=0;Ke<Te;Ke++)Ce+=Ee.data[Ke];return Math.abs(Math.ceil(Ce*100/Te/5)-10)*be.N4};function $e(ke,Ee,Ce){switch(ke){case ge.Patterns.PATTERN000:return(Ee+Ce)%2===0;case ge.Patterns.PATTERN001:return Ee%2===0;case ge.Patterns.PATTERN010:return Ce%3===0;case ge.Patterns.PATTERN011:return(Ee+Ce)%3===0;case ge.Patterns.PATTERN100:return(Math.floor(Ee/2)+Math.floor(Ce/3))%2===0;case ge.Patterns.PATTERN101:return Ee*Ce%2+Ee*Ce%3===0;case ge.Patterns.PATTERN110:return(Ee*Ce%2+Ee*Ce%3)%2===0;case ge.Patterns.PATTERN111:return(Ee*Ce%3+(Ee+Ce)%2)%2===0;default:throw new Error("bad maskPattern:"+ke)}}ge.applyMask=function(Ee,Ce){const Te=Ce.size;for(let Se=0;Se<Te;Se++)for(let Ke=0;Ke<Te;Ke++)Ce.isReserved(Ke,Se)||Ce.xor(Ke,Se,$e(Ee,Ke,Se))},ge.getBestMask=function(Ee,Ce){const Te=Object.keys(ge.Patterns).length;let Se=0,Ke=1/0;for(let Je=0;Je<Te;Je++){Ce(Je),ge.applyMask(Je,Ee);const mt=ge.getPenaltyN1(Ee)+ge.getPenaltyN2(Ee)+ge.getPenaltyN3(Ee)+ge.getPenaltyN4(Ee);ge.applyMask(Je,Ee),mt<Ke&&(Ke=mt,Se=Je)}return Se}})(maskPattern);var errorCorrectionCode={};const ECLevel$1=errorCorrectionLevel,EC_BLOCKS_TABLE=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],EC_CODEWORDS_TABLE=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];errorCorrectionCode.getBlocksCount=function ge(be,$e){switch($e){case ECLevel$1.L:return EC_BLOCKS_TABLE[(be-1)*4+0];case ECLevel$1.M:return EC_BLOCKS_TABLE[(be-1)*4+1];case ECLevel$1.Q:return EC_BLOCKS_TABLE[(be-1)*4+2];case ECLevel$1.H:return EC_BLOCKS_TABLE[(be-1)*4+3];default:return}};errorCorrectionCode.getTotalCodewordsCount=function ge(be,$e){switch($e){case ECLevel$1.L:return EC_CODEWORDS_TABLE[(be-1)*4+0];case ECLevel$1.M:return EC_CODEWORDS_TABLE[(be-1)*4+1];case ECLevel$1.Q:return EC_CODEWORDS_TABLE[(be-1)*4+2];case ECLevel$1.H:return EC_CODEWORDS_TABLE[(be-1)*4+3];default:return}};var polynomial={},galoisField={};const EXP_TABLE=new Uint8Array(512),LOG_TABLE=new Uint8Array(256);(function ge(){let be=1;for(let $e=0;$e<255;$e++)EXP_TABLE[$e]=be,LOG_TABLE[be]=$e,be<<=1,be&256&&(be^=285);for(let $e=255;$e<512;$e++)EXP_TABLE[$e]=EXP_TABLE[$e-255]})();galoisField.log=function ge(be){if(be<1)throw new Error("log("+be+")");return LOG_TABLE[be]};galoisField.exp=function ge(be){return EXP_TABLE[be]};galoisField.mul=function ge(be,$e){return be===0||$e===0?0:EXP_TABLE[LOG_TABLE[be]+LOG_TABLE[$e]]};(function(ge){const be=galoisField;ge.mul=function(ke,Ee){const Ce=new Uint8Array(ke.length+Ee.length-1);for(let Te=0;Te<ke.length;Te++)for(let Se=0;Se<Ee.length;Se++)Ce[Te+Se]^=be.mul(ke[Te],Ee[Se]);return Ce},ge.mod=function(ke,Ee){let Ce=new Uint8Array(ke);for(;Ce.length-Ee.length>=0;){const Te=Ce[0];for(let Ke=0;Ke<Ee.length;Ke++)Ce[Ke]^=be.mul(Ee[Ke],Te);let Se=0;for(;Se<Ce.length&&Ce[Se]===0;)Se++;Ce=Ce.slice(Se)}return Ce},ge.generateECPolynomial=function(ke){let Ee=new Uint8Array([1]);for(let Ce=0;Ce<ke;Ce++)Ee=ge.mul(Ee,new Uint8Array([1,be.exp(Ce)]));return Ee}})(polynomial);const Polynomial=polynomial;function ReedSolomonEncoder$1(ge){this.genPoly=void 0,this.degree=ge,this.degree&&this.initialize(this.degree)}ReedSolomonEncoder$1.prototype.initialize=function ge(be){this.degree=be,this.genPoly=Polynomial.generateECPolynomial(this.degree)};ReedSolomonEncoder$1.prototype.encode=function ge(be){if(!this.genPoly)throw new Error("Encoder not initialized");const $e=new Uint8Array(be.length+this.degree);$e.set(be);const ke=Polynomial.mod($e,this.genPoly),Ee=this.degree-ke.length;if(Ee>0){const Ce=new Uint8Array(this.degree);return Ce.set(ke,Ee),Ce}return ke};var reedSolomonEncoder=ReedSolomonEncoder$1,version={},mode={},versionCheck={};versionCheck.isValid=function ge(be){return!isNaN(be)&&be>=1&&be<=40};var regex={};const numeric="[0-9]+",alphanumeric="[A-Z $%*+\\-./:]+";let kanji="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";kanji=kanji.replace(/u/g,"\\u");const byte="(?:(?![A-Z0-9 $%*+\\-./:]|"+kanji+`)(?:.|[\r
]))+`;regex.KANJI=new RegExp(kanji,"g");regex.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");regex.BYTE=new RegExp(byte,"g");regex.NUMERIC=new RegExp(numeric,"g");regex.ALPHANUMERIC=new RegExp(alphanumeric,"g");const TEST_KANJI=new RegExp("^"+kanji+"$"),TEST_NUMERIC=new RegExp("^"+numeric+"$"),TEST_ALPHANUMERIC=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");regex.testKanji=function ge(be){return TEST_KANJI.test(be)};regex.testNumeric=function ge(be){return TEST_NUMERIC.test(be)};regex.testAlphanumeric=function ge(be){return TEST_ALPHANUMERIC.test(be)};(function(ge){const be=versionCheck,$e=regex;ge.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},ge.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},ge.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},ge.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},ge.MIXED={bit:-1},ge.getCharCountIndicator=function(Ce,Te){if(!Ce.ccBits)throw new Error("Invalid mode: "+Ce);if(!be.isValid(Te))throw new Error("Invalid version: "+Te);return Te>=1&&Te<10?Ce.ccBits[0]:Te<27?Ce.ccBits[1]:Ce.ccBits[2]},ge.getBestModeForData=function(Ce){return $e.testNumeric(Ce)?ge.NUMERIC:$e.testAlphanumeric(Ce)?ge.ALPHANUMERIC:$e.testKanji(Ce)?ge.KANJI:ge.BYTE},ge.toString=function(Ce){if(Ce&&Ce.id)return Ce.id;throw new Error("Invalid mode")},ge.isValid=function(Ce){return Ce&&Ce.bit&&Ce.ccBits};function ke(Ee){if(typeof Ee!="string")throw new Error("Param is not a string");switch(Ee.toLowerCase()){case"numeric":return ge.NUMERIC;case"alphanumeric":return ge.ALPHANUMERIC;case"kanji":return ge.KANJI;case"byte":return ge.BYTE;default:throw new Error("Unknown mode: "+Ee)}}ge.from=function(Ce,Te){if(ge.isValid(Ce))return Ce;try{return ke(Ce)}catch{return Te}}})(mode);(function(ge){const be=utils$1,$e=errorCorrectionCode,ke=errorCorrectionLevel,Ee=mode,Ce=versionCheck,Te=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,Se=be.getBCHDigit(Te);function Ke($t,St,It){for(let Bt=1;Bt<=40;Bt++)if(St<=ge.getCapacity(Bt,It,$t))return Bt}function Je($t,St){return Ee.getCharCountIndicator($t,St)+4}function mt($t,St){let It=0;return $t.forEach(function(Bt){It+=Je(Bt.mode,St)+Bt.getBitsLength()}),It}function bt($t,St){for(let It=1;It<=40;It++)if(mt($t,It)<=ge.getCapacity(It,St,Ee.MIXED))return It}ge.from=function(St,It){return Ce.isValid(St)?parseInt(St,10):It},ge.getCapacity=function(St,It,Bt){if(!Ce.isValid(St))throw new Error("Invalid QR Code version");typeof Bt=="undefined"&&(Bt=Ee.BYTE);const Dt=be.getSymbolTotalCodewords(St),jt=$e.getTotalCodewordsCount(St,It),zt=(Dt-jt)*8;if(Bt===Ee.MIXED)return zt;const en=zt-Je(Bt,St);switch(Bt){case Ee.NUMERIC:return Math.floor(en/10*3);case Ee.ALPHANUMERIC:return Math.floor(en/11*2);case Ee.KANJI:return Math.floor(en/13);case Ee.BYTE:default:return Math.floor(en/8)}},ge.getBestVersionForData=function(St,It){let Bt;const Dt=ke.from(It,ke.M);if(Array.isArray(St)){if(St.length>1)return bt(St,Dt);if(St.length===0)return 1;Bt=St[0]}else Bt=St;return Ke(Bt.mode,Bt.getLength(),Dt)},ge.getEncodedBits=function(St){if(!Ce.isValid(St)||St<7)throw new Error("Invalid QR Code version");let It=St<<12;for(;be.getBCHDigit(It)-Se>=0;)It^=Te<<be.getBCHDigit(It)-Se;return St<<12|It}})(version);var formatInfo={};const Utils$3=utils$1,G15=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G15_MASK=1<<14|1<<12|1<<10|1<<4|1<<1,G15_BCH=Utils$3.getBCHDigit(G15);formatInfo.getEncodedBits=function ge(be,$e){const ke=be.bit<<3|$e;let Ee=ke<<10;for(;Utils$3.getBCHDigit(Ee)-G15_BCH>=0;)Ee^=G15<<Utils$3.getBCHDigit(Ee)-G15_BCH;return(ke<<10|Ee)^G15_MASK};var segments={};const Mode$4=mode;function NumericData(ge){this.mode=Mode$4.NUMERIC,this.data=ge.toString()}NumericData.getBitsLength=function ge(be){return 10*Math.floor(be/3)+(be%3?be%3*3+1:0)};NumericData.prototype.getLength=function ge(){return this.data.length};NumericData.prototype.getBitsLength=function ge(){return NumericData.getBitsLength(this.data.length)};NumericData.prototype.write=function ge(be){let $e,ke,Ee;for($e=0;$e+3<=this.data.length;$e+=3)ke=this.data.substr($e,3),Ee=parseInt(ke,10),be.put(Ee,10);const Ce=this.data.length-$e;Ce>0&&(ke=this.data.substr($e),Ee=parseInt(ke,10),be.put(Ee,Ce*3+1))};var numericData=NumericData;const Mode$3=mode,ALPHA_NUM_CHARS=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function AlphanumericData(ge){this.mode=Mode$3.ALPHANUMERIC,this.data=ge}AlphanumericData.getBitsLength=function ge(be){return 11*Math.floor(be/2)+6*(be%2)};AlphanumericData.prototype.getLength=function ge(){return this.data.length};AlphanumericData.prototype.getBitsLength=function ge(){return AlphanumericData.getBitsLength(this.data.length)};AlphanumericData.prototype.write=function ge(be){let $e;for($e=0;$e+2<=this.data.length;$e+=2){let ke=ALPHA_NUM_CHARS.indexOf(this.data[$e])*45;ke+=ALPHA_NUM_CHARS.indexOf(this.data[$e+1]),be.put(ke,11)}this.data.length%2&&be.put(ALPHA_NUM_CHARS.indexOf(this.data[$e]),6)};var alphanumericData=AlphanumericData,encodeUtf8$1=function ge(be){for(var $e=[],ke=be.length,Ee=0;Ee<ke;Ee++){var Ce=be.charCodeAt(Ee);if(Ce>=55296&&Ce<=56319&&ke>Ee+1){var Te=be.charCodeAt(Ee+1);Te>=56320&&Te<=57343&&(Ce=(Ce-55296)*1024+Te-56320+65536,Ee+=1)}if(Ce<128){$e.push(Ce);continue}if(Ce<2048){$e.push(Ce>>6|192),$e.push(Ce&63|128);continue}if(Ce<55296||Ce>=57344&&Ce<65536){$e.push(Ce>>12|224),$e.push(Ce>>6&63|128),$e.push(Ce&63|128);continue}if(Ce>=65536&&Ce<=1114111){$e.push(Ce>>18|240),$e.push(Ce>>12&63|128),$e.push(Ce>>6&63|128),$e.push(Ce&63|128);continue}$e.push(239,191,189)}return new Uint8Array($e).buffer};const encodeUtf8=encodeUtf8$1,Mode$2=mode;function ByteData(ge){this.mode=Mode$2.BYTE,typeof ge=="string"&&(ge=encodeUtf8(ge)),this.data=new Uint8Array(ge)}ByteData.getBitsLength=function ge(be){return be*8};ByteData.prototype.getLength=function ge(){return this.data.length};ByteData.prototype.getBitsLength=function ge(){return ByteData.getBitsLength(this.data.length)};ByteData.prototype.write=function(ge){for(let be=0,$e=this.data.length;be<$e;be++)ge.put(this.data[be],8)};var byteData=ByteData;const Mode$1=mode,Utils$2=utils$1;function KanjiData(ge){this.mode=Mode$1.KANJI,this.data=ge}KanjiData.getBitsLength=function ge(be){return be*13};KanjiData.prototype.getLength=function ge(){return this.data.length};KanjiData.prototype.getBitsLength=function ge(){return KanjiData.getBitsLength(this.data.length)};KanjiData.prototype.write=function(ge){let be;for(be=0;be<this.data.length;be++){let $e=Utils$2.toSJIS(this.data[be]);if($e>=33088&&$e<=40956)$e-=33088;else if($e>=57408&&$e<=60351)$e-=49472;else throw new Error("Invalid SJIS character: "+this.data[be]+`
Make sure your charset is UTF-8`);$e=($e>>>8&255)*192+($e&255),ge.put($e,13)}};var kanjiData=KanjiData,dijkstra={exports:{}};(function(ge){var be={single_source_shortest_paths:function($e,ke,Ee){var Ce={},Te={};Te[ke]=0;var Se=be.PriorityQueue.make();Se.push(ke,0);for(var Ke,Je,mt,bt,$t,St,It,Bt,Dt;!Se.empty();){Ke=Se.pop(),Je=Ke.value,bt=Ke.cost,$t=$e[Je]||{};for(mt in $t)$t.hasOwnProperty(mt)&&(St=$t[mt],It=bt+St,Bt=Te[mt],Dt=typeof Te[mt]=="undefined",(Dt||Bt>It)&&(Te[mt]=It,Se.push(mt,It),Ce[mt]=Je))}if(typeof Ee!="undefined"&&typeof Te[Ee]=="undefined"){var jt=["Could not find a path from ",ke," to ",Ee,"."].join("");throw new Error(jt)}return Ce},extract_shortest_path_from_predecessor_list:function($e,ke){for(var Ee=[],Ce=ke;Ce;)Ee.push(Ce),$e[Ce],Ce=$e[Ce];return Ee.reverse(),Ee},find_path:function($e,ke,Ee){var Ce=be.single_source_shortest_paths($e,ke,Ee);return be.extract_shortest_path_from_predecessor_list(Ce,Ee)},PriorityQueue:{make:function($e){var ke=be.PriorityQueue,Ee={},Ce;$e=$e||{};for(Ce in ke)ke.hasOwnProperty(Ce)&&(Ee[Ce]=ke[Ce]);return Ee.queue=[],Ee.sorter=$e.sorter||ke.default_sorter,Ee},default_sorter:function($e,ke){return $e.cost-ke.cost},push:function($e,ke){var Ee={value:$e,cost:ke};this.queue.push(Ee),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};ge.exports=be})(dijkstra);(function(ge){const be=mode,$e=numericData,ke=alphanumericData,Ee=byteData,Ce=kanjiData,Te=regex,Se=utils$1,Ke=dijkstra.exports;function Je(jt){return unescape(encodeURIComponent(jt)).length}function mt(jt,zt,en){const qt=[];let vo;for(;(vo=jt.exec(en))!==null;)qt.push({data:vo[0],index:vo.index,mode:zt,length:vo[0].length});return qt}function bt(jt){const zt=mt(Te.NUMERIC,be.NUMERIC,jt),en=mt(Te.ALPHANUMERIC,be.ALPHANUMERIC,jt);let qt,vo;return Se.isKanjiModeEnabled()?(qt=mt(Te.BYTE,be.BYTE,jt),vo=mt(Te.KANJI,be.KANJI,jt)):(qt=mt(Te.BYTE_KANJI,be.BYTE,jt),vo=[]),zt.concat(en,qt,vo).sort(function(fo,bo){return fo.index-bo.index}).map(function(fo){return{data:fo.data,mode:fo.mode,length:fo.length}})}function $t(jt,zt){switch(zt){case be.NUMERIC:return $e.getBitsLength(jt);case be.ALPHANUMERIC:return ke.getBitsLength(jt);case be.KANJI:return Ce.getBitsLength(jt);case be.BYTE:return Ee.getBitsLength(jt)}}function St(jt){return jt.reduce(function(zt,en){const qt=zt.length-1>=0?zt[zt.length-1]:null;return qt&&qt.mode===en.mode?(zt[zt.length-1].data+=en.data,zt):(zt.push(en),zt)},[])}function It(jt){const zt=[];for(let en=0;en<jt.length;en++){const qt=jt[en];switch(qt.mode){case be.NUMERIC:zt.push([qt,{data:qt.data,mode:be.ALPHANUMERIC,length:qt.length},{data:qt.data,mode:be.BYTE,length:qt.length}]);break;case be.ALPHANUMERIC:zt.push([qt,{data:qt.data,mode:be.BYTE,length:qt.length}]);break;case be.KANJI:zt.push([qt,{data:qt.data,mode:be.BYTE,length:Je(qt.data)}]);break;case be.BYTE:zt.push([{data:qt.data,mode:be.BYTE,length:Je(qt.data)}])}}return zt}function Bt(jt,zt){const en={},qt={start:{}};let vo=["start"];for(let yo=0;yo<jt.length;yo++){const fo=jt[yo],bo=[];for(let Ar=0;Ar<fo.length;Ar++){const fs=fo[Ar],ms=""+yo+Ar;bo.push(ms),en[ms]={node:fs,lastCount:0},qt[ms]={};for(let go=0;go<vo.length;go++){const wo=vo[go];en[wo]&&en[wo].node.mode===fs.mode?(qt[wo][ms]=$t(en[wo].lastCount+fs.length,fs.mode)-$t(en[wo].lastCount,fs.mode),en[wo].lastCount+=fs.length):(en[wo]&&(en[wo].lastCount=fs.length),qt[wo][ms]=$t(fs.length,fs.mode)+4+be.getCharCountIndicator(fs.mode,zt))}}vo=bo}for(let yo=0;yo<vo.length;yo++)qt[vo[yo]].end=0;return{map:qt,table:en}}function Dt(jt,zt){let en;const qt=be.getBestModeForData(jt);if(en=be.from(zt,qt),en!==be.BYTE&&en.bit<qt.bit)throw new Error('"'+jt+'" cannot be encoded with mode '+be.toString(en)+`.
 Suggested mode is: `+be.toString(qt));switch(en===be.KANJI&&!Se.isKanjiModeEnabled()&&(en=be.BYTE),en){case be.NUMERIC:return new $e(jt);case be.ALPHANUMERIC:return new ke(jt);case be.KANJI:return new Ce(jt);case be.BYTE:return new Ee(jt)}}ge.fromArray=function(zt){return zt.reduce(function(en,qt){return typeof qt=="string"?en.push(Dt(qt,null)):qt.data&&en.push(Dt(qt.data,qt.mode)),en},[])},ge.fromString=function(zt,en){const qt=bt(zt,Se.isKanjiModeEnabled()),vo=It(qt),yo=Bt(vo,en),fo=Ke.find_path(yo.map,"start","end"),bo=[];for(let Ar=1;Ar<fo.length-1;Ar++)bo.push(yo.table[fo[Ar]].node);return ge.fromArray(St(bo))},ge.rawSplit=function(zt){return ge.fromArray(bt(zt,Se.isKanjiModeEnabled()))}})(segments);const Utils$1=utils$1,ECLevel=errorCorrectionLevel,BitBuffer=bitBuffer,BitMatrix=bitMatrix,AlignmentPattern=alignmentPattern,FinderPattern=finderPattern,MaskPattern=maskPattern,ECCode=errorCorrectionCode,ReedSolomonEncoder=reedSolomonEncoder,Version=version,FormatInfo=formatInfo,Mode=mode,Segments=segments;function setupFinderPattern(ge,be){const $e=ge.size,ke=FinderPattern.getPositions(be);for(let Ee=0;Ee<ke.length;Ee++){const Ce=ke[Ee][0],Te=ke[Ee][1];for(let Se=-1;Se<=7;Se++)if(!(Ce+Se<=-1||$e<=Ce+Se))for(let Ke=-1;Ke<=7;Ke++)Te+Ke<=-1||$e<=Te+Ke||(Se>=0&&Se<=6&&(Ke===0||Ke===6)||Ke>=0&&Ke<=6&&(Se===0||Se===6)||Se>=2&&Se<=4&&Ke>=2&&Ke<=4?ge.set(Ce+Se,Te+Ke,!0,!0):ge.set(Ce+Se,Te+Ke,!1,!0))}}function setupTimingPattern(ge){const be=ge.size;for(let $e=8;$e<be-8;$e++){const ke=$e%2===0;ge.set($e,6,ke,!0),ge.set(6,$e,ke,!0)}}function setupAlignmentPattern(ge,be){const $e=AlignmentPattern.getPositions(be);for(let ke=0;ke<$e.length;ke++){const Ee=$e[ke][0],Ce=$e[ke][1];for(let Te=-2;Te<=2;Te++)for(let Se=-2;Se<=2;Se++)Te===-2||Te===2||Se===-2||Se===2||Te===0&&Se===0?ge.set(Ee+Te,Ce+Se,!0,!0):ge.set(Ee+Te,Ce+Se,!1,!0)}}function setupVersionInfo(ge,be){const $e=ge.size,ke=Version.getEncodedBits(be);let Ee,Ce,Te;for(let Se=0;Se<18;Se++)Ee=Math.floor(Se/3),Ce=Se%3+$e-8-3,Te=(ke>>Se&1)===1,ge.set(Ee,Ce,Te,!0),ge.set(Ce,Ee,Te,!0)}function setupFormatInfo(ge,be,$e){const ke=ge.size,Ee=FormatInfo.getEncodedBits(be,$e);let Ce,Te;for(Ce=0;Ce<15;Ce++)Te=(Ee>>Ce&1)===1,Ce<6?ge.set(Ce,8,Te,!0):Ce<8?ge.set(Ce+1,8,Te,!0):ge.set(ke-15+Ce,8,Te,!0),Ce<8?ge.set(8,ke-Ce-1,Te,!0):Ce<9?ge.set(8,15-Ce-1+1,Te,!0):ge.set(8,15-Ce-1,Te,!0);ge.set(ke-8,8,1,!0)}function setupData(ge,be){const $e=ge.size;let ke=-1,Ee=$e-1,Ce=7,Te=0;for(let Se=$e-1;Se>0;Se-=2)for(Se===6&&Se--;;){for(let Ke=0;Ke<2;Ke++)if(!ge.isReserved(Ee,Se-Ke)){let Je=!1;Te<be.length&&(Je=(be[Te]>>>Ce&1)===1),ge.set(Ee,Se-Ke,Je),Ce--,Ce===-1&&(Te++,Ce=7)}if(Ee+=ke,Ee<0||$e<=Ee){Ee-=ke,ke=-ke;break}}}function createData(ge,be,$e){const ke=new BitBuffer;$e.forEach(function(Ke){ke.put(Ke.mode.bit,4),ke.put(Ke.getLength(),Mode.getCharCountIndicator(Ke.mode,ge)),Ke.write(ke)});const Ee=Utils$1.getSymbolTotalCodewords(ge),Ce=ECCode.getTotalCodewordsCount(ge,be),Te=(Ee-Ce)*8;for(ke.getLengthInBits()+4<=Te&&ke.put(0,4);ke.getLengthInBits()%8!==0;)ke.putBit(0);const Se=(Te-ke.getLengthInBits())/8;for(let Ke=0;Ke<Se;Ke++)ke.put(Ke%2?17:236,8);return createCodewords(ke,ge,be)}function createCodewords(ge,be,$e){const ke=Utils$1.getSymbolTotalCodewords(be),Ee=ECCode.getTotalCodewordsCount(be,$e),Ce=ke-Ee,Te=ECCode.getBlocksCount(be,$e),Se=ke%Te,Ke=Te-Se,Je=Math.floor(ke/Te),mt=Math.floor(Ce/Te),bt=mt+1,$t=Je-mt,St=new ReedSolomonEncoder($t);let It=0;const Bt=new Array(Te),Dt=new Array(Te);let jt=0;const zt=new Uint8Array(ge.buffer);for(let fo=0;fo<Te;fo++){const bo=fo<Ke?mt:bt;Bt[fo]=zt.slice(It,It+bo),Dt[fo]=St.encode(Bt[fo]),It+=bo,jt=Math.max(jt,bo)}const en=new Uint8Array(ke);let qt=0,vo,yo;for(vo=0;vo<jt;vo++)for(yo=0;yo<Te;yo++)vo<Bt[yo].length&&(en[qt++]=Bt[yo][vo]);for(vo=0;vo<$t;vo++)for(yo=0;yo<Te;yo++)en[qt++]=Dt[yo][vo];return en}function createSymbol(ge,be,$e,ke){let Ee;if(Array.isArray(ge))Ee=Segments.fromArray(ge);else if(typeof ge=="string"){let Je=be;if(!Je){const mt=Segments.rawSplit(ge);Je=Version.getBestVersionForData(mt,$e)}Ee=Segments.fromString(ge,Je||40)}else throw new Error("Invalid data");const Ce=Version.getBestVersionForData(Ee,$e);if(!Ce)throw new Error("The amount of data is too big to be stored in a QR Code");if(!be)be=Ce;else if(be<Ce)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+Ce+`.
`);const Te=createData(be,$e,Ee),Se=Utils$1.getSymbolSize(be),Ke=new BitMatrix(Se);return setupFinderPattern(Ke,be),setupTimingPattern(Ke),setupAlignmentPattern(Ke,be),setupFormatInfo(Ke,$e,0),be>=7&&setupVersionInfo(Ke,be),setupData(Ke,Te),isNaN(ke)&&(ke=MaskPattern.getBestMask(Ke,setupFormatInfo.bind(null,Ke,$e))),MaskPattern.applyMask(ke,Ke),setupFormatInfo(Ke,$e,ke),{modules:Ke,version:be,errorCorrectionLevel:$e,maskPattern:ke,segments:Ee}}qrcode.create=function ge(be,$e){if(typeof be=="undefined"||be==="")throw new Error("No input text");let ke=ECLevel.M,Ee,Ce;return typeof $e!="undefined"&&(ke=ECLevel.from($e.errorCorrectionLevel,ECLevel.M),Ee=Version.from($e.version),Ce=MaskPattern.from($e.maskPattern),$e.toSJISFunc&&Utils$1.setToSJISFunction($e.toSJISFunc)),createSymbol(be,Ee,ke,Ce)};var canvas={},utils={};(function(ge){function be($e){if(typeof $e=="number"&&($e=$e.toString()),typeof $e!="string")throw new Error("Color should be defined as hex string");let ke=$e.slice().replace("#","").split("");if(ke.length<3||ke.length===5||ke.length>8)throw new Error("Invalid hex color: "+$e);(ke.length===3||ke.length===4)&&(ke=Array.prototype.concat.apply([],ke.map(function(Ce){return[Ce,Ce]}))),ke.length===6&&ke.push("F","F");const Ee=parseInt(ke.join(""),16);return{r:Ee>>24&255,g:Ee>>16&255,b:Ee>>8&255,a:Ee&255,hex:"#"+ke.slice(0,6).join("")}}ge.getOptions=function(ke){ke||(ke={}),ke.color||(ke.color={});const Ee=typeof ke.margin=="undefined"||ke.margin===null||ke.margin<0?4:ke.margin,Ce=ke.width&&ke.width>=21?ke.width:void 0,Te=ke.scale||4;return{width:Ce,scale:Ce?4:Te,margin:Ee,color:{dark:be(ke.color.dark||"#000000ff"),light:be(ke.color.light||"#ffffffff")},type:ke.type,rendererOpts:ke.rendererOpts||{}}},ge.getScale=function(ke,Ee){return Ee.width&&Ee.width>=ke+Ee.margin*2?Ee.width/(ke+Ee.margin*2):Ee.scale},ge.getImageWidth=function(ke,Ee){const Ce=ge.getScale(ke,Ee);return Math.floor((ke+Ee.margin*2)*Ce)},ge.qrToImageData=function(ke,Ee,Ce){const Te=Ee.modules.size,Se=Ee.modules.data,Ke=ge.getScale(Te,Ce),Je=Math.floor((Te+Ce.margin*2)*Ke),mt=Ce.margin*Ke,bt=[Ce.color.light,Ce.color.dark];for(let $t=0;$t<Je;$t++)for(let St=0;St<Je;St++){let It=($t*Je+St)*4,Bt=Ce.color.light;if($t>=mt&&St>=mt&&$t<Je-mt&&St<Je-mt){const Dt=Math.floor(($t-mt)/Ke),jt=Math.floor((St-mt)/Ke);Bt=bt[Se[Dt*Te+jt]?1:0]}ke[It++]=Bt.r,ke[It++]=Bt.g,ke[It++]=Bt.b,ke[It]=Bt.a}}})(utils);(function(ge){const be=utils;function $e(Ee,Ce,Te){Ee.clearRect(0,0,Ce.width,Ce.height),Ce.style||(Ce.style={}),Ce.height=Te,Ce.width=Te,Ce.style.height=Te+"px",Ce.style.width=Te+"px"}function ke(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}ge.render=function(Ce,Te,Se){let Ke=Se,Je=Te;typeof Ke=="undefined"&&(!Te||!Te.getContext)&&(Ke=Te,Te=void 0),Te||(Je=ke()),Ke=be.getOptions(Ke);const mt=be.getImageWidth(Ce.modules.size,Ke),bt=Je.getContext("2d"),$t=bt.createImageData(mt,mt);return be.qrToImageData($t.data,Ce,Ke),$e(bt,Je,mt),bt.putImageData($t,0,0),Je},ge.renderToDataURL=function(Ce,Te,Se){let Ke=Se;typeof Ke=="undefined"&&(!Te||!Te.getContext)&&(Ke=Te,Te=void 0),Ke||(Ke={});const Je=ge.render(Ce,Te,Ke),mt=Ke.type||"image/png",bt=Ke.rendererOpts||{};return Je.toDataURL(mt,bt.quality)}})(canvas);var svgTag={};const Utils=utils;function getColorAttrib(ge,be){const $e=ge.a/255,ke=be+'="'+ge.hex+'"';return $e<1?ke+" "+be+'-opacity="'+$e.toFixed(2).slice(1)+'"':ke}function svgCmd(ge,be,$e){let ke=ge+be;return typeof $e!="undefined"&&(ke+=" "+$e),ke}function qrToPath(ge,be,$e){let ke="",Ee=0,Ce=!1,Te=0;for(let Se=0;Se<ge.length;Se++){const Ke=Math.floor(Se%be),Je=Math.floor(Se/be);!Ke&&!Ce&&(Ce=!0),ge[Se]?(Te++,Se>0&&Ke>0&&ge[Se-1]||(ke+=Ce?svgCmd("M",Ke+$e,.5+Je+$e):svgCmd("m",Ee,0),Ee=0,Ce=!1),Ke+1<be&&ge[Se+1]||(ke+=svgCmd("h",Te),Te=0)):Ee++}return ke}svgTag.render=function ge(be,$e,ke){const Ee=Utils.getOptions($e),Ce=be.modules.size,Te=be.modules.data,Se=Ce+Ee.margin*2,Ke=Ee.color.light.a?"<path "+getColorAttrib(Ee.color.light,"fill")+' d="M0 0h'+Se+"v"+Se+'H0z"/>':"",Je="<path "+getColorAttrib(Ee.color.dark,"stroke")+' d="'+qrToPath(Te,Ce,Ee.margin)+'"/>',mt='viewBox="0 0 '+Se+" "+Se+'"',bt=Ee.width?'width="'+Ee.width+'" height="'+Ee.width+'" ':"",$t='<svg xmlns="http://www.w3.org/2000/svg" '+bt+mt+' shape-rendering="crispEdges">'+Ke+Je+`</svg>
`;return typeof ke=="function"&&ke(null,$t),$t};const canPromise=canPromise$1,QRCode=qrcode,CanvasRenderer=canvas,SvgRenderer=svgTag;function renderCanvas(ge,be,$e,ke,Ee){const Ce=[].slice.call(arguments,1),Te=Ce.length,Se=typeof Ce[Te-1]=="function";if(!Se&&!canPromise())throw new Error("Callback required as last argument");if(Se){if(Te<2)throw new Error("Too few arguments provided");Te===2?(Ee=$e,$e=be,be=ke=void 0):Te===3&&(be.getContext&&typeof Ee=="undefined"?(Ee=ke,ke=void 0):(Ee=ke,ke=$e,$e=be,be=void 0))}else{if(Te<1)throw new Error("Too few arguments provided");return Te===1?($e=be,be=ke=void 0):Te===2&&!be.getContext&&(ke=$e,$e=be,be=void 0),new Promise(function(Ke,Je){try{const mt=QRCode.create($e,ke);Ke(ge(mt,be,ke))}catch(mt){Je(mt)}})}try{const Ke=QRCode.create($e,ke);Ee(null,ge(Ke,be,ke))}catch(Ke){Ee(Ke)}}browser.create=QRCode.create;browser.toCanvas=renderCanvas.bind(null,CanvasRenderer.render);browser.toDataURL=renderCanvas.bind(null,CanvasRenderer.renderToDataURL);browser.toString=renderCanvas.bind(null,function(ge,be,$e){return SvgRenderer.render(ge,$e)});var md5$1={exports:{}},crypt={exports:{}};(function(){var ge="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",be={rotl:function($e,ke){return $e<<ke|$e>>>32-ke},rotr:function($e,ke){return $e<<32-ke|$e>>>ke},endian:function($e){if($e.constructor==Number)return be.rotl($e,8)&16711935|be.rotl($e,24)&4278255360;for(var ke=0;ke<$e.length;ke++)$e[ke]=be.endian($e[ke]);return $e},randomBytes:function($e){for(var ke=[];$e>0;$e--)ke.push(Math.floor(Math.random()*256));return ke},bytesToWords:function($e){for(var ke=[],Ee=0,Ce=0;Ee<$e.length;Ee++,Ce+=8)ke[Ce>>>5]|=$e[Ee]<<24-Ce%32;return ke},wordsToBytes:function($e){for(var ke=[],Ee=0;Ee<$e.length*32;Ee+=8)ke.push($e[Ee>>>5]>>>24-Ee%32&255);return ke},bytesToHex:function($e){for(var ke=[],Ee=0;Ee<$e.length;Ee++)ke.push(($e[Ee]>>>4).toString(16)),ke.push(($e[Ee]&15).toString(16));return ke.join("")},hexToBytes:function($e){for(var ke=[],Ee=0;Ee<$e.length;Ee+=2)ke.push(parseInt($e.substr(Ee,2),16));return ke},bytesToBase64:function($e){for(var ke=[],Ee=0;Ee<$e.length;Ee+=3)for(var Ce=$e[Ee]<<16|$e[Ee+1]<<8|$e[Ee+2],Te=0;Te<4;Te++)Ee*8+Te*6<=$e.length*8?ke.push(ge.charAt(Ce>>>6*(3-Te)&63)):ke.push("=");return ke.join("")},base64ToBytes:function($e){$e=$e.replace(/[^A-Z0-9+\/]/ig,"");for(var ke=[],Ee=0,Ce=0;Ee<$e.length;Ce=++Ee%4)Ce!=0&&ke.push((ge.indexOf($e.charAt(Ee-1))&Math.pow(2,-2*Ce+8)-1)<<Ce*2|ge.indexOf($e.charAt(Ee))>>>6-Ce*2);return ke}};crypt.exports=be})();var charenc={utf8:{stringToBytes:function(ge){return charenc.bin.stringToBytes(unescape(encodeURIComponent(ge)))},bytesToString:function(ge){return decodeURIComponent(escape(charenc.bin.bytesToString(ge)))}},bin:{stringToBytes:function(ge){for(var be=[],$e=0;$e<ge.length;$e++)be.push(ge.charCodeAt($e)&255);return be},bytesToString:function(ge){for(var be=[],$e=0;$e<ge.length;$e++)be.push(String.fromCharCode(ge[$e]));return be.join("")}}},charenc_1=charenc;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var isBuffer_1=function(ge){return ge!=null&&(isBuffer(ge)||isSlowBuffer(ge)||!!ge._isBuffer)};function isBuffer(ge){return!!ge.constructor&&typeof ge.constructor.isBuffer=="function"&&ge.constructor.isBuffer(ge)}function isSlowBuffer(ge){return typeof ge.readFloatLE=="function"&&typeof ge.slice=="function"&&isBuffer(ge.slice(0,0))}(function(){var ge=crypt.exports,be=charenc_1.utf8,$e=isBuffer_1,ke=charenc_1.bin,Ee=function(Ce,Te){Ce.constructor==String?Te&&Te.encoding==="binary"?Ce=ke.stringToBytes(Ce):Ce=be.stringToBytes(Ce):$e(Ce)?Ce=Array.prototype.slice.call(Ce,0):!Array.isArray(Ce)&&Ce.constructor!==Uint8Array&&(Ce=Ce.toString());for(var Se=ge.bytesToWords(Ce),Ke=Ce.length*8,Je=1732584193,mt=-271733879,bt=-1732584194,$t=271733878,St=0;St<Se.length;St++)Se[St]=(Se[St]<<8|Se[St]>>>24)&16711935|(Se[St]<<24|Se[St]>>>8)&4278255360;Se[Ke>>>5]|=128<<Ke%32,Se[(Ke+64>>>9<<4)+14]=Ke;for(var It=Ee._ff,Bt=Ee._gg,Dt=Ee._hh,jt=Ee._ii,St=0;St<Se.length;St+=16){var zt=Je,en=mt,qt=bt,vo=$t;Je=It(Je,mt,bt,$t,Se[St+0],7,-680876936),$t=It($t,Je,mt,bt,Se[St+1],12,-389564586),bt=It(bt,$t,Je,mt,Se[St+2],17,606105819),mt=It(mt,bt,$t,Je,Se[St+3],22,-1044525330),Je=It(Je,mt,bt,$t,Se[St+4],7,-176418897),$t=It($t,Je,mt,bt,Se[St+5],12,1200080426),bt=It(bt,$t,Je,mt,Se[St+6],17,-1473231341),mt=It(mt,bt,$t,Je,Se[St+7],22,-45705983),Je=It(Je,mt,bt,$t,Se[St+8],7,1770035416),$t=It($t,Je,mt,bt,Se[St+9],12,-1958414417),bt=It(bt,$t,Je,mt,Se[St+10],17,-42063),mt=It(mt,bt,$t,Je,Se[St+11],22,-1990404162),Je=It(Je,mt,bt,$t,Se[St+12],7,1804603682),$t=It($t,Je,mt,bt,Se[St+13],12,-40341101),bt=It(bt,$t,Je,mt,Se[St+14],17,-1502002290),mt=It(mt,bt,$t,Je,Se[St+15],22,1236535329),Je=Bt(Je,mt,bt,$t,Se[St+1],5,-165796510),$t=Bt($t,Je,mt,bt,Se[St+6],9,-1069501632),bt=Bt(bt,$t,Je,mt,Se[St+11],14,643717713),mt=Bt(mt,bt,$t,Je,Se[St+0],20,-373897302),Je=Bt(Je,mt,bt,$t,Se[St+5],5,-701558691),$t=Bt($t,Je,mt,bt,Se[St+10],9,38016083),bt=Bt(bt,$t,Je,mt,Se[St+15],14,-660478335),mt=Bt(mt,bt,$t,Je,Se[St+4],20,-405537848),Je=Bt(Je,mt,bt,$t,Se[St+9],5,568446438),$t=Bt($t,Je,mt,bt,Se[St+14],9,-1019803690),bt=Bt(bt,$t,Je,mt,Se[St+3],14,-187363961),mt=Bt(mt,bt,$t,Je,Se[St+8],20,1163531501),Je=Bt(Je,mt,bt,$t,Se[St+13],5,-1444681467),$t=Bt($t,Je,mt,bt,Se[St+2],9,-51403784),bt=Bt(bt,$t,Je,mt,Se[St+7],14,1735328473),mt=Bt(mt,bt,$t,Je,Se[St+12],20,-1926607734),Je=Dt(Je,mt,bt,$t,Se[St+5],4,-378558),$t=Dt($t,Je,mt,bt,Se[St+8],11,-2022574463),bt=Dt(bt,$t,Je,mt,Se[St+11],16,1839030562),mt=Dt(mt,bt,$t,Je,Se[St+14],23,-35309556),Je=Dt(Je,mt,bt,$t,Se[St+1],4,-1530992060),$t=Dt($t,Je,mt,bt,Se[St+4],11,1272893353),bt=Dt(bt,$t,Je,mt,Se[St+7],16,-155497632),mt=Dt(mt,bt,$t,Je,Se[St+10],23,-1094730640),Je=Dt(Je,mt,bt,$t,Se[St+13],4,681279174),$t=Dt($t,Je,mt,bt,Se[St+0],11,-358537222),bt=Dt(bt,$t,Je,mt,Se[St+3],16,-722521979),mt=Dt(mt,bt,$t,Je,Se[St+6],23,76029189),Je=Dt(Je,mt,bt,$t,Se[St+9],4,-640364487),$t=Dt($t,Je,mt,bt,Se[St+12],11,-421815835),bt=Dt(bt,$t,Je,mt,Se[St+15],16,530742520),mt=Dt(mt,bt,$t,Je,Se[St+2],23,-995338651),Je=jt(Je,mt,bt,$t,Se[St+0],6,-198630844),$t=jt($t,Je,mt,bt,Se[St+7],10,1126891415),bt=jt(bt,$t,Je,mt,Se[St+14],15,-1416354905),mt=jt(mt,bt,$t,Je,Se[St+5],21,-57434055),Je=jt(Je,mt,bt,$t,Se[St+12],6,1700485571),$t=jt($t,Je,mt,bt,Se[St+3],10,-1894986606),bt=jt(bt,$t,Je,mt,Se[St+10],15,-1051523),mt=jt(mt,bt,$t,Je,Se[St+1],21,-2054922799),Je=jt(Je,mt,bt,$t,Se[St+8],6,1873313359),$t=jt($t,Je,mt,bt,Se[St+15],10,-30611744),bt=jt(bt,$t,Je,mt,Se[St+6],15,-1560198380),mt=jt(mt,bt,$t,Je,Se[St+13],21,1309151649),Je=jt(Je,mt,bt,$t,Se[St+4],6,-145523070),$t=jt($t,Je,mt,bt,Se[St+11],10,-1120210379),bt=jt(bt,$t,Je,mt,Se[St+2],15,718787259),mt=jt(mt,bt,$t,Je,Se[St+9],21,-343485551),Je=Je+zt>>>0,mt=mt+en>>>0,bt=bt+qt>>>0,$t=$t+vo>>>0}return ge.endian([Je,mt,bt,$t])};Ee._ff=function(Ce,Te,Se,Ke,Je,mt,bt){var $t=Ce+(Te&Se|~Te&Ke)+(Je>>>0)+bt;return($t<<mt|$t>>>32-mt)+Te},Ee._gg=function(Ce,Te,Se,Ke,Je,mt,bt){var $t=Ce+(Te&Ke|Se&~Ke)+(Je>>>0)+bt;return($t<<mt|$t>>>32-mt)+Te},Ee._hh=function(Ce,Te,Se,Ke,Je,mt,bt){var $t=Ce+(Te^Se^Ke)+(Je>>>0)+bt;return($t<<mt|$t>>>32-mt)+Te},Ee._ii=function(Ce,Te,Se,Ke,Je,mt,bt){var $t=Ce+(Se^(Te|~Ke))+(Je>>>0)+bt;return($t<<mt|$t>>>32-mt)+Te},Ee._blocksize=16,Ee._digestsize=16,md5$1.exports=function(Ce,Te){if(Ce==null)throw new Error("Illegal argument "+Ce);var Se=ge.wordsToBytes(Ee(Ce,Te));return Te&&Te.asBytes?Se:Te&&Te.asString?ke.bytesToString(Se):ge.bytesToHex(Se)}})();var md5=md5$1.exports;const _hoisted_1$4={fill:"none",height:"32",viewBox:"0 0 32 32",width:"32",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$4=createStaticVNode('<path clip-rule="evenodd" d="M23 7a2 2 0 0 1 2 2v7h-2V9.8a.8.8 0 0 0-.8-.8H8.8a.8.8 0 0 0-.794.7L8 9.8v10.4a.8.8 0 0 0 .7.794l.1.006H16v2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" fill="currentColor" fill-rule="evenodd"></path><path d="M25.875 18h-6.75c-.621 0-1.125.522-1.125 1.167v4.666c0 .645.504 1.167 1.125 1.167h6.75c.621 0 1.125-.522 1.125-1.167v-4.666c0-.645-.504-1.167-1.125-1.167z" fill="currentColor"></path><g stroke="currentColor" stroke-width="2"><path d="m11.935 12.566 4.454 4.455"></path><path d="M15.714 12.566h-3.962a.01.01 0 0 0-.01.01v3.963" stroke-linecap="round"></path></g>',3),_hoisted_5$1=[_hoisted_2$4];function render$2(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$4,[..._hoisted_5$1])}var IcoMiniEx={render:render$2},Alert_vue_vue_type_style_index_0_lang="";const _hoisted_1$3=["innerHTML"],_hoisted_2$3=["innerHTML"],_hoisted_3$3={class:"base_alert--footer flex_between"},_sfc_main$1=defineComponent({__name:"Alert",setup(ge){const be="\u53D6\u6D88",$e="\u786E\u8BA4",ke=ref("\u662F\u5426\u786E\u8BA4\uFF1F"),Ee=ref(""),Ce=ref(be),Te=ref($e),Se=ref(null),Ke=ref(null),Je=ref(null),mt=()=>{Je.value.show()},bt=()=>{Je.value.hide()};events.on("alert",It=>{ke.value=It.content,Ee.value=It.message||"",Ce.value=It.cancelText||be,Te.value=It.confirmText||$e,Se.value=It.onCancel,Ke.value=It.onConfirm,mt()});async function $t(){Se.value&&await Se.value(),bt()}async function St(){await Ke.value(),bt()}return(It,Bt)=>{const Dt=resolveComponent("VButton");return openBlock(),createBlock(VPopup,{"custom-class":"base_alert",ref_key:"popupRef",ref:Je},{default:withCtx(()=>[createVNode(unref(IcoClose$1),{class:"base_alert--close",onClick:withModifiers(bt,["stop"])},null,8,["onClick"]),createBaseVNode("div",{class:"base_alert--content text_center",innerHTML:ke.value},null,8,_hoisted_1$3),Ee.value?(openBlock(),createElementBlock("div",{key:0,class:"base_alert--message text_center",innerHTML:Ee.value},null,8,_hoisted_2$3)):createCommentVNode("",!0),createBaseVNode("div",_hoisted_3$3,[createVNode(Dt,{class:"base_alert--btn",onClick:withModifiers($t,["stop"])},{default:withCtx(()=>[createTextVNode(toDisplayString(Ce.value),1)]),_:1},8,["onClick"]),createVNode(Dt,{class:"base_alert--btn",onClick:withModifiers(St,["stop"]),type:"pink"},{default:withCtx(()=>[createTextVNode(toDisplayString(Te.value),1)]),_:1},8,["onClick"])])]),_:1},512)}}}),_hoisted_1$2={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$2=createBaseVNode("path",{d:"M21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 1 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Zm-9.71 1.71a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l4-4a1.004 1.004 0 1 0-1.42-1.42L13 12.59V3a1 1 0 0 0-2 0v9.59l-2.29-2.3a1.005 1.005 0 0 0-1.714.71 1.004 1.004 0 0 0 .294.71l4 4Z",fill:"currentcolor"},null,-1),_hoisted_3$2=[_hoisted_2$2];function render$1(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$2,[..._hoisted_3$2])}var IcoSave={render:render$1};const _hoisted_1$1={width:"12",height:"18",viewBox:"0 0 12 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$1=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.4 8.995c0-.438-.17-.874-.506-1.208L3.551.497a1.743 1.743 0 0 0-2.442.004 1.701 1.701 0 0 0-.004 2.424l6.117 6.073-6.117 6.072a1.713 1.713 0 0 0 .004 2.424c.68.675 1.768.672 2.442.004l7.343-7.29a1.7 1.7 0 0 0 .5-1.206l.006-.007Z",fill:"#fff"},null,-1),_hoisted_3$1=[_hoisted_2$1];function render(ge,be){return openBlock(),createElementBlock("svg",_hoisted_1$1,[..._hoisted_3$1])}var IcoNext={render},Gallery_vue_vue_type_style_index_0_lang="";const _hoisted_1=["onClick"],_hoisted_2={class:"v_gallery--screen--loading"},_hoisted_3={class:"v_gallery--actions p_sticky"},_hoisted_4=["onClick"],_hoisted_5=["onClick"],_hoisted_6={class:"v_gallery--nav p_sticky w_100 flex_between"},_hoisted_7=["onClick"],_hoisted_8={class:"v_gallery--console--preview"},_hoisted_9=["onClick"],_sfc_main=defineComponent({__name:"Gallery",setup(ge){const $e=ref(!1),ke=ref(""),Ee=ref(0),Ce=ref(!0),Te=ref(0),Se=reactive([]),Ke=ref(null),Je=ref(null),mt=ref(!1),bt=reactive({loading:!0,el:null,size:{width:0,height:0},pic:{src:"",zoom:!1,zoomIn:!0,style:{width:"",height:"",backgroundImage:"",top:""}}}),$t=computed(()=>Se.length===1),St=_s=>{bt.el=_s},It=async()=>{await nextTick(),bt.size.width=bt.el.offsetWidth,bt.size.height=bt.el.offsetHeight},Bt=()=>{var vs,tu;if(!bt.pic.zoom){bt.pic.style.top="";return}const _s=(vs=Ke.value)==null?void 0:vs.offsetWidth,nu=(tu=Ke.value)==null?void 0:tu.offsetHeight,du=bt.size.width,pu=bt.size.height,uu=Se[Ee.value];if(uu.width<uu.height)if(bt.pic.zoomIn){const ru=Math.min(Math.min(uu.width,600),_s),cu=uu.height/uu.width*ru;bt.pic.style.width=`${ru}px`,bt.pic.style.height=`${cu}px`,cu>nu?bt.pic.style.top=`${cu/2}px`:bt.pic.style.top=`${nu/2}px`}else bt.pic.style.height=`${pu}px`,bt.pic.style.width=`${(pu/uu.height*uu.width).toFixed(3)}px`;if(uu.width>=uu.height){let ru=du,cu=pu;if(bt.pic.zoomIn)ru=Math.min(uu.width,_s),cu=uu.height/uu.width*ru,cu>nu&&(cu=nu,ru=uu.width/uu.height*cu);else{const vu=uu.width/uu.height*cu,Eu=uu.height/uu.width*ru;cu>=Eu?cu=Eu:ru=vu}bt.pic.style.width=`${ru}px`,bt.pic.style.height=`${cu}px`,bt.pic.zoomIn?bt.pic.style.top=`calc(50% + ${Math.max(cu-nu,0)/2}px)`:bt.pic.style.top=""}if(uu.width===uu.height){let ru=Math.min(du,pu);bt.pic.zoomIn&&(ru=Math.min(uu.width,_s),ru>nu?bt.pic.style.top=`${ru/2}px`:bt.pic.style.top=`${nu/2}px`),bt.pic.style.width=`${ru}px`,bt.pic.style.height=`${ru}px`}},Dt=()=>{if(!bt.pic.zoom){yo();return}Bt()},jt=async _s=>{bt.pic.zoom=!1,await It();const nu=bt.size.width,du=bt.size.height,pu=Se[Ee.value];pu.width&&pu.height?pu.width>nu||pu.height>du?bt.pic.zoom=!0:(bt.pic.style.width=`${pu.width}px`,bt.pic.style.height=`${pu.height}px`):pu.width&&(bt.pic.style.width=`${nu}px`),bt.pic.style.backgroundImage=`url(${_s})`,Bt()},zt=async()=>{const _s=Se[Ee.value];if(!_s)return;const nu=_s.src.replace("pre-","")+"@.webp";bt.loading=!0;const du=new Image;du.onload=()=>{bt.loading=!1},du.src=nu,await jt(nu)},en=_s=>{if(_s!==Ee.value){if(ir(),_s<0)if(_s===-1)_s=Se.length-1;else return;if(_s>Se.length-1)if(_s===Se.length)_s=0;else return;Ee.value=_s,qt(),zt()}},qt=()=>{Se.length<=9||(Te.value/62>Ee.value&&(Te.value=Ee.value*62),Te.value/62+8<Ee.value&&(Te.value=(Ee.value-8)*62))},vo=()=>{const nu=Se[Ee.value].src.replace("pre-","");callNative("download/downloadURL",nu)},yo=()=>{!mt.value||(bt.pic.zoom&&bt.pic.zoomIn&&Dt(),mt.value=!1,Ce.value=!0,Te.value=0)},fo=_s=>{if(!_s.items.length)return;const nu=document.querySelector(_s.container);!nu||(Je.value=nu,nu.appendChild(Ke.value),$e.value=_s.fixed,_s.downloadable===!1&&(Ce.value=!1),(!_s.key||_s.key!==ke.value||_s.items.length!==Se.length)&&(ke.value=_s.key,Se.splice(0,Se.length,..._s.items.map(du=>({...du,width:du.width/window.devicePixelRatio,height:du.height/window.devicePixelRatio})))),Ee.value=_s.index||0,mt.value=!0,zt())},bo=ref(!0),Ar=ref(!0);let fs=null,ms=!1;const go=_s=>{bo.value=_s,_s&&ir()},wo=3e3,ir=throttle$1(()=>{ms||(fs&&clearTimeout(fs),Ar.value=!0,fs=setTimeout(()=>{bs()},wo))},200),bs=()=>{fs=null,Ar.value=!1},xs=_s=>{if(!!bo.value)switch(_s.type){case"click":case"mouseenter":ms=!1,ir();break;case"mousemove":ir();break;case"mouseleave":ms=!0,fs&&clearTimeout(fs),bs();break}};events.on("visitGallery",fo),events.on("leaveGallery",yo),events.on("windowFocusChange",go);const ks=_s=>{if(!!mt.value)switch(_s.keyCode){case 37:case 38:case 39:case 40:_s.preventDefault(),_s.stopPropagation();break}},fu=_s=>{if(!!mt.value)switch(_s.keyCode){case 27:yo(),_s.preventDefault(),_s.stopPropagation();break;case 37:case 38:en(Ee.value-1),_s.preventDefault(),_s.stopPropagation();break;case 39:case 40:en(Ee.value+1),_s.preventDefault(),_s.stopPropagation();break}};return onMounted(()=>{Je.value=Ke.value.parentElement,document.addEventListener("keyup",fu),document.addEventListener("keydown",ks),document.addEventListener("keypress",ks)}),onBeforeUnmount(()=>{events.off("visitGallery",fo),events.off("windowFocusChange",go),document.removeEventListener("keyup",fu),document.removeEventListener("keydown",ks),document.removeEventListener("keypress",ks)}),(_s,nu)=>withDirectives((openBlock(),createElementBlock("div",{ref_key:"el",ref:Ke,class:normalizeClass(["v_gallery i_frame flex_col_center",{"is-fixed":$e.value}]),onClickCapture:nu[3]||(nu[3]=du=>xs(du)),onMouseenter:nu[4]||(nu[4]=du=>xs(du)),onMousemove:nu[5]||(nu[5]=du=>xs(du)),onMouseleave:nu[6]||(nu[6]=du=>xs(du))},[createBaseVNode("div",{ref:St,class:"v_gallery--screen p_relative",onClick:yo,onScrollPassive:nu[2]||(nu[2]=()=>unref(ir)())},[bt.loading?createCommentVNode("",!0):(openBlock(),createElementBlock("div",{key:0,class:"v_gallery--screen--pic",style:normalizeStyle(bt.pic.style),onClick:withModifiers(du=>{},["stop"])},null,12,_hoisted_1)),withDirectives(createBaseVNode("div",_hoisted_2,null,512),[[vShow,bt.loading]]),createVNode(Transition,{name:"ctrl-fade"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",_hoisted_3,[Ce.value?(openBlock(),createElementBlock("div",{key:0,class:"v_gallery--actions--btn bd_radius_50 flex_center cs_pointer",onClick:withModifiers(vo,["stop"])},[createVNode(unref(IcoSave),{class:"v_gallery--actions--btn--save"})],8,_hoisted_4)):createCommentVNode("",!0),createBaseVNode("div",{class:"v_gallery--actions--btn bd_radius_50 flex_center cs_pointer",onClick:withModifiers(yo,["stop"])},[createVNode(unref(IcoClose),{class:"v_gallery--actions--btn--close"})],8,_hoisted_5)],512),[[vShow,Ar.value]])]),_:1}),unref($t)?createCommentVNode("",!0):(openBlock(),createBlock(Transition,{key:1,name:"ctrl-fade"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",_hoisted_6,[createBaseVNode("div",{class:"v_gallery--nav--btn bd_radius_50 flex_center cs_pointer prev",onClick:nu[0]||(nu[0]=withModifiers(du=>en(Ee.value-1),["stop"]))},[createVNode(unref(IcoNext))]),createBaseVNode("div",{class:"v_gallery--nav--btn bd_radius_50 flex_center cs_pointer next",onClick:nu[1]||(nu[1]=withModifiers(du=>en(Ee.value+1),["stop"]))},[createVNode(unref(IcoNext))])],512),[[vShow,Ar.value]])]),_:1}))],32),unref($t)?createCommentVNode("",!0):(openBlock(),createBlock(Transition,{key:0,name:"ctrl-fade"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",{class:"v_gallery--console flex_center",onClick:withModifiers(du=>{},["stop"])},[createBaseVNode("div",_hoisted_8,[createBaseVNode("div",{class:"v_gallery--console--preview--track",style:normalizeStyle({"margin-left":`${-Te.value}px`})},[(openBlock(!0),createElementBlock(Fragment,null,renderList(Se,(du,pu)=>(openBlock(),createElementBlock("div",{key:pu,class:normalizeClass(["v_gallery--console--preview--item flex_center",{"is-active":Ee.value===pu}]),onClick:uu=>en(pu)},[createVNode(unref(VImg),{class:"v_gallery--console--preview--item--pic",src:du.src.replace("pre-",""),width:104,height:104,rule:"1c"},null,8,["src"])],10,_hoisted_9))),128))],4)])],8,_hoisted_7),[[vShow,Ar.value]])]),_:1}))],34)),[[vShow,mt.value]])}});var component="tab-item",cssPrefix=vuiCssPrefix+"_"+component,tabItemProps={key:String,tab:String,num:Number,showZerro:Boolean,disabled:Boolean},TabItem=defineComponent({name:"VTabItem",inheritAttrs:!1,props:tabItemProps,setup:function(ge,be){var $e=be.slots;return be.attrs,be.emit,function(){var ke;return h$6("div",{class:cssPrefix},(ke=$e.default)===null||ke===void 0?void 0:ke.call($e))}}});Tabs.TabItem=TabItem;Tabs.install=function(ge){return ge.component(Tabs.name,Tabs),ge.component(TabItem.name,TabItem),ge};export{ShareWeixin as $,VdPlay as A,VdDm as B,_sfc_main$4 as C,DEFAULT_IMG as D,BarLike as E,_sfc_main$5 as F,BarCoin as G,BarFav as H,IcoPlay as I,BarShare as J,VdMenu as K,Loading as L,ModuleType as M,_sfc_main$6 as N,_sfc_main$2 as O,_sfc_main$3 as P,CheckboxDefault as Q,RichTextNodeType as R,CheckboxSelected as S,ThreePoint as T,IcoAdd as U,VPopup as V,md5 as W,ShareQzone as X,ShareWeibo as Y,ShareDynmic as Z,_sfc_main$f as _,getRichTextareaHighlightNode as a,ShareQQ as a0,ShareVideo as a1,shareAdd as a2,copyText as a3,browser as a4,IcoMiniEx as a5,isFullscreen as a6,_sfc_main$1 as a7,_sfc_main as a8,directive as a9,SVGAPlayer as aa,watchDel as ab,IcoDelete as ac,_sfc_main$c as ad,getStringLength as ae,RichTextarea as af,IcoEmoji as ag,_sfc_main$b as ah,IcoAt as ai,createDynamic as aj,getDynamicPublishConfig as ak,getSelectorByClassNames as al,getDynamicVideos as am,getDynamicUpdate as an,getScrollParent as ao,getDynamicList as ap,getRichTextareaEmojiNode as b,clearArray as c,RichText as d,dmThumbupAdd as e,replyAction as f,getRichTextareaTextNode as g,removeDynamic as h,postSetDynamicSpaceTop as i,IcoDanmaku as j,MdlDynType as k,IcoClose as l,getDynamicDetailForward as m,getDynamicDetail as n,postDynamicReport as o,postDynamicLike as p,_sfc_main$7 as q,replyAdd as r,splitStringWithRegExp as s,VdPlays as t,useNewCommentModule as u,VdPauseS as v,watchAdd as w,IcoDark as x,IcoLight as y,IcoMini as z};
