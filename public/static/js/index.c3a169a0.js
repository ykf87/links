(function(e){function n(n){for(var t,r,a=n[0],f=n[1],u=n[2],l=0,b=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&b.push(i[r][0]),i[r]=0;for(t in f)Object.prototype.hasOwnProperty.call(f,t)&&(e[t]=f[t]);s&&s(n);while(b.length)b.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,n=0;n<c.length;n++){for(var o=c[n],t=!0,r=1;r<o.length;r++){var f=o[r];0!==i[f]&&(t=!1)}t&&(c.splice(n--,1),e=a(a.s=o[0]))}return e}var t={},i={index:0},c=[];function r(e){return a.p+"static/js/"+({"pages-index-index":"pages-index-index"}[e]||e)+"."+{"pages-index-index":"92cb9f85"}[e]+".js"}function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var n=[],o=i[e];if(0!==o)if(o)n.push(o[2]);else{var t=new Promise((function(n,t){o=i[e]=[n,t]}));n.push(o[2]=t);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.src=r(e);var u=new Error;c=function(n){f.onerror=f.onload=null,clearTimeout(l);var o=i[e];if(0!==o){if(o){var t=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+t+": "+c+")",u.name="ChunkLoadError",u.type=t,u.request=c,o[1](u)}i[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(n)},a.m=e,a.c=t,a.d=function(e,n,o){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(o,t,function(n){return e[n]}.bind(null,t));return o},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/",a.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],u=f.push.bind(f);f.push=n,f=f.slice();for(var l=0;l<f.length;l++)n(f[l]);var s=u;c.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("bbad")},"1bd3":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=t},3296:function(e,n,o){"use strict";(function(e){var n=o("4ea4");o("13d5"),o("d3b7"),o("ac1f"),o("5319"),o("ddb0");var t=n(o("e143")),i={keys:function(){return[]}};e["____DDC1203____"]=!0,delete e["____DDC1203____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},uniIdRouter:{}},e.__uniConfig.compilerVersion="3.5.3",e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__DDC1203",e.__uniConfig.appName="uniapp",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=i.keys().reduce((function(e,n){var o=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=i(n);return Object.assign(e[o]||(e[o]={}),t.common||t),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=o.e,t.default.component("pages-index-index",(function(e){var n={component:o.e("pages-index-index").then(function(){return e(o("e1f7"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"商品列表"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,o("c8ba"))},"3cfd":function(e,n,o){"use strict";var t=o("58c0"),i=o.n(t);i.a},"58c0":function(e,n,o){var t=o("ceae");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=o("4f06").default;i("09e4c2e2",t,!0,{sourceMap:!1,shadowMode:!1})},8038:function(e,n,o){"use strict";var t;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return c})),o.d(n,"a",(function(){return t}));var i=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},c=[]},aa2c:function(e,n,o){"use strict";var t=o("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(o("3835"));o("96cf");var c=t(o("1da1")),r={domain:"http://192.168.31.172:4444/api"};r.post=function(){var e=(0,c.default)(regeneratorRuntime.mark((function e(n,o,t){var c,r,a,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(n,"=====~~~~"),e.next=3,uni.request({url:this.domain+n,method:"POST",data:o});case 3:if(c=e.sent,r=(0,i.default)(c,2),a=r[0],f=r[1],console.log("==================",a,f,"-----"),!a){e.next=11;break}return this.show(a,"error"),e.abrupt("return",!1);case 11:if(200==f.statusCode){e.next=14;break}return this.show("服务器错误","error"),e.abrupt("return",!1);case 14:return e.abrupt("return",f.data);case 15:case"end":return e.stop()}}),e,this)})));return function(n,o,t){return e.apply(this,arguments)}}(),r.show=function(e,n){uni.showToast({title:e,icon:n})};var a=r;n.default=a},aded:function(e,n,o){"use strict";o.r(n);var t=o("1bd3"),i=o.n(t);for(var c in t)"default"!==c&&function(e){o.d(n,e,(function(){return t[e]}))}(c);n["default"]=i.a},bbad:function(e,n,o){"use strict";var t=o("4ea4"),i=t(o("5530"));o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("3296"),o("1c31");var c=t(o("e1b9")),r=t(o("aa2c")),a=t(o("e143"));a.default.prototype.comm=r.default,a.default.config.productionTip=!1,c.default.mpType="app";var f=new a.default((0,i.default)({},c.default));f.$mount()},c324:function(e,n,o){e.exports=o.p+"static/fonts/iconfont.d5910bf1.woff2"},ceae:function(e,n,o){var t=o("24fb"),i=o("1de5"),c=o("c324");n=t(!1);var r=i(c);n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */.flex{display:flex}.flex.vd{flex-direction:column}.flex.v{align-items:center}.flex.c{justify-content:center}.flex.r{justify-content:right}.flex.b{flex-wrap:wrap}.flex1{flex:1}.buttons::after{border:none}uni-image{max-width:100%;max-height:100%}@font-face{font-family:iconfont; /* Project id 3197537 */src:url("+r+') format("woff2")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-yuyin:before{content:"\\eae6"}.icon-shipin:before{content:"\\e665"}.icon-zaixiankoutu:before{content:"\\e60b"}.icon-tupian:before{content:"\\e8d3"}.icon-wenzi:before{content:"\\e883"}.icon-jiaru:before{content:"\\e7c4"}.icon-liaotian:before{content:"\\e637"}.icon-34_kaisuo:before{content:"\\e635"}.icon-piclight:before{content:"\\e7b7"}.icon-keaide:before{content:"\\e600"}.icon-quanbu:before{content:"\\e601"}.icon-kouhong:before{content:"\\e602"}.icon-zhuangxiu:before{content:"\\e627"}.icon-zongcai:before{content:"\\e633"}.icon-fangchan:before{content:"\\e69d"}.icon-weibiaoti2fuzhi13:before{content:"\\e61b"}.icon-lvshijindiao:before{content:"\\e6ed"}.icon-Yoga:before{content:"\\e620"}.icon-xiedaichongwu:before{content:"\\e90d"}.icon-jinrongguanli_o:before{content:"\\eba0"}.icon-chushimao:before{content:"\\e608"}.icon-chayiguan:before{content:"\\e692"}.icon-xuexiao_jiaoshi:before{content:"\\e65f"}.icon-buzhihuayi:before{content:"\\e610"}.icon-xiezuo:before{content:"\\e60f"}.icon--yiliao-yisheng:before{content:"\\e62c"}.icon-yingpingmoban:before{content:"\\e8bf"}.icon-feiji:before{content:"\\e646"}.icon-yishutisheng:before{content:"\\e630"}.icon-tubiaozhizuomoban-48:before{content:"\\e61c"}.icon-program:before{content:"\\e991"}.icon-biancheng-01:before{content:"\\e678"}.icon-mianduimianguanliicon:before{content:"\\e604"}.icon-unorderedlist:before{content:"\\e7f4"}.icon-download1:before{content:"\\e7ef"}.icon-video:before{content:"\\e634"}.icon-douyin:before{content:"\\e8db"}.icon-kuaishou:before{content:"\\e8dc"}.icon-back:before{content:"\\e679"}.icon-email1:before{content:"\\e638"}.icon-email2:before{content:"\\e668"}.icon-mima:before{content:"\\e62d"}.icon-unlock-fill:before{content:"\\e78f"}.icon-nv:before{content:"\\e798"}.icon-nan:before{content:"\\e799"}.icon-nan1:before{content:"\\e657"}.icon-nv1:before{content:"\\e658"}.icon-bussiness-man-fill:before{content:"\\e785"}.icon-all:before{content:"\\e6ef"}.icon-code:before{content:"\\e6f2"}.icon-dollar:before{content:"\\e6f4"}.icon-gift:before{content:"\\e6f9"}.icon-pic:before{content:"\\e6ff"}.icon-Notvisible:before{content:"\\e6fe"}.icon-play:before{content:"\\e701"}.icon-rising:before{content:"\\e703"}.icon-QRcode:before{content:"\\e704"}.icon-rmb:before{content:"\\e705"}.icon-all-fill:before{content:"\\e718"}.icon-favorites-fill:before{content:"\\e721"}.icon-play-fill:before{content:"\\e72f"}.icon-prompt-fill:before{content:"\\e730"}.icon-stop-fill:before{content:"\\e738"}.icon-add:before{content:"\\e742"}.icon-arrow-right:before{content:"\\e743"}.icon-arrow-left:before{content:"\\e744"}.icon-arrow-up:before{content:"\\e745"}.icon-bad:before{content:"\\e746"}.icon-browse:before{content:"\\e747"}.icon-cart-full:before{content:"\\e748"}.icon-cecurity-protection:before{content:"\\e749"}.icon-category:before{content:"\\e74a"}.icon-close:before{content:"\\e74b"}.icon-certified-supplier:before{content:"\\e74c"}.icon-cart-Empty:before{content:"\\e74d"}.icon-code1:before{content:"\\e74e"}.icon-conditions:before{content:"\\e74f"}.icon-confirm:before{content:"\\e750"}.icon-copy:before{content:"\\e751"}.icon-CurrencyConverter:before{content:"\\e752"}.icon-cut:before{content:"\\e753"}.icon-double-arro-right:before{content:"\\e754"}.icon-double-arrow-left:before{content:"\\e755"}.icon-discount:before{content:"\\e756"}.icon-download:before{content:"\\e757"}.icon-dollar1:before{content:"\\e758"}.icon-editor:before{content:"\\e759"}.icon-ellipsis:before{content:"\\e75a"}.icon-email:before{content:"\\e75b"}.icon-falling:before{content:"\\e75c"}.icon-help:before{content:"\\e75d"}.icon-good:before{content:"\\e75e"}.icon-gift1:before{content:"\\e75f"}.icon-hot:before{content:"\\e760"}.icon-jewelry:before{content:"\\e761"}.icon-leftarrow:before{content:"\\e762"}.icon-link:before{content:"\\e763"}.icon-loading:before{content:"\\e764"}.icon-move:before{content:"\\e765"}.icon-map:before{content:"\\e766"}.icon-Notvisible1:before{content:"\\e767"}.icon-operation:before{content:"\\e768"}.icon-pic1:before{content:"\\e769"}.icon-pin:before{content:"\\e76a"}.icon-play1:before{content:"\\e76b"}.icon-QRcode1:before{content:"\\e76c"}.icon-reeor:before{content:"\\e76d"}.icon-reduce:before{content:"\\e76e"}.icon-resonserate:before{content:"\\e76f"}.icon-remind:before{content:"\\e770"}.icon-return:before{content:"\\e771"}.icon-rising1:before{content:"\\e772"}.icon-Rightarrow:before{content:"\\e773"}.icon-scanning:before{content:"\\e774"}.icon-seleted:before{content:"\\e775"}.icon-service:before{content:"\\e776"}.icon-share:before{content:"\\e777"}.icon-Rightbutton:before{content:"\\e778"}.icon-sorting:before{content:"\\e779"}.icon-sound-Mute:before{content:"\\e77a"}.icon-sound-filling:before{content:"\\e77b"}.icon-switch:before{content:"\\e77c"}.icon-suspended:before{content:"\\e77d"}.icon-topsales:before{content:"\\e77e"}.icon-tradingvolume:before{content:"\\e77f"}.icon-upload:before{content:"\\e780"}.icon-viewlarger:before{content:"\\e781"}.icon-warning:before{content:"\\e782"}.icon-set:before{content:"\\e783"}.icon-exchangerate:before{content:"\\e784"}.icon-favorites:before{content:"\\e7b3"}.icon-order:before{content:"\\e7b4"}.icon-search:before{content:"\\e7b5"}',""]),e.exports=n},e1b9:function(e,n,o){"use strict";o.r(n);var t=o("8038"),i=o("aded");for(var c in i)"default"!==c&&function(e){o.d(n,e,(function(){return i[e]}))}(c);o("3cfd");var r,a=o("f0c5"),f=Object(a["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],r);n["default"]=f.exports}});