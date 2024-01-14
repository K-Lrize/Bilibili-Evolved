!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/extend-live"]=t():e["feeds/extend-live"]=t()}(globalThis,(()=>(()=>{var e,t,n={424:(e,t,n)=>{var i=n(218)((function(e){return e[1]}));i.push([e.id,".be-live-list {\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #000;\n  background-color: #fff;\n}\nbody.dark .be-live-list {\n  background-color: #444;\n  color: #eee;\n}\n.be-live-list-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.be-live-list-title {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 14px;\n}\n.be-live-list-count {\n  opacity: 0.5;\n  font-size: 12px;\n}\n.be-live-list-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.be-live-list-refresh {\n  cursor: pointer;\n  padding: 2px;\n}\n.be-live-list-refresh .be-icon {\n  opacity: 0.5;\n  transition: 0.35s ease-out;\n}\n.be-live-list-refresh:hover .be-icon {\n  transform: rotate(360deg);\n  opacity: 1;\n  color: var(--theme-color);\n}\n.be-live-list-more {\n  opacity: 0.5;\n  padding: 2px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.be-live-list-more:hover {\n  opacity: 1;\n  color: var(--theme-color);\n}\n.be-live-list-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.be-live-list-search .be-icon {\n  opacity: 0.6;\n}\n.be-live-list-search .be-textbox {\n  flex-grow: 1;\n}\n.be-live-list-content {\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 8px;\n  max-height: calc(100vh - 358px);\n}\n.be-live-list-content::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\nbody.enable-feeds-filter .be-live-list-content {\n  max-height: calc(100vh - 414px);\n}\nbody.feeds-filter-side-block-profile .be-live-list-content {\n  max-height: calc(100vh - 218px);\n}\n.be-live-list-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.be-live-list-item-avatar {\n  overflow: hidden;\n  border-radius: 50%;\n  display: flex;\n  border: 1px solid rgba(136, 136, 136, 0.2666666667);\n}\n.be-live-list-item-info {\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 2px;\n  flex-grow: 1;\n  width: 0;\n}\n.be-live-list-item-title, .be-live-list-item-user {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.be-live-list-item-title {\n  font-size: 14px;\n  transition: 0.2s ease-out;\n}\n.be-live-list-item-user {\n  opacity: 0.6;\n}\n.be-live-list-item:hover .be-live-list-item-title {\n  color: var(--theme-color);\n}",""]),e.exports=i},735:(e,t,n)=>{var i=n(218)((function(e){return e[1]}));i.push([e.id,".live-up-list,\n.bili-dyn-home--member .bili-dyn-live-users {\n  display: none !important;\n}",""]),e.exports=i},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var s=this[r][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var a=[].concat(e[l]);i&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},97:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"be-live-list"},[t("div",{staticClass:"be-live-list-header"},[t("div",{staticClass:"be-live-list-title"},[e._v("\n      正在直播\n      "),t("div",{staticClass:"be-live-list-count"},[e._v("("+e._s(e.items.length)+")")])]),e._v(" "),t("div",{staticClass:"be-live-list-actions"},[e.loaded?t("div",{staticClass:"be-live-list-refresh",attrs:{title:"刷新"},on:{click:e.refresh}},[t("VIcon",{attrs:{icon:"mdi-refresh",size:16}})],1):e._e(),e._v(" "),t("a",{staticClass:"be-live-list-more",attrs:{target:"_blank",href:"https://link.bilibili.com/p/center/index#/user-center/follow/1"}},[e._v("\n        更多\n        "),t("VIcon",{attrs:{icon:"right-arrow",size:14}})],1)])]),e._v(" "),t("div",{staticClass:"be-live-list-search"},[t("VIcon",{attrs:{icon:"search",size:18}}),e._v(" "),t("TextBox",{attrs:{placeholder:"搜索"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e._v(" "),t("div",{staticClass:"be-live-list-content"},[e.loaded?e._e():t("VLoading"),e._v(" "),e.loaded&&0===e.filteredItems.length?t("VEmpty"):e._e(),e._v(" "),e._l(e.filteredItems,(function(n){return t("a",{key:n.roomid,staticClass:"be-live-list-item",attrs:{target:"_blank",href:n.link}},[t("div",{staticClass:"be-live-list-item-avatar"},[t("DpiImage",{attrs:{src:n.face,alt:n.title,size:36}})],1),e._v(" "),t("div",{staticClass:"be-live-list-item-info"},[t("div",{staticClass:"be-live-list-item-title",attrs:{title:n.title}},[e._v("\n          "+e._s(e.decodeTitle(n.title))+"\n        ")]),e._v(" "),t("div",{staticClass:"be-live-list-item-user",attrs:{title:n.uname}},[e._v("\n          "+e._s(n.uname)+"\n        ")])])])}))],2)])};i._withStripped=!0;const o=coreApis.ui,r=coreApis.ajax,s=Vue.extend({components:{VIcon:o.VIcon,TextBox:o.TextBox,DpiImage:o.DpiImage,VEmpty:o.VEmpty,VLoading:o.VLoading},data:()=>({items:[],loaded:!1,keyword:""}),computed:{filteredItems(){return this.keyword?this.items.filter((e=>{const t=t=>e[t].toString().toLowerCase().includes(this.keyword.toLowerCase());return t("title")||t("uname")||t("roomid")||t("uid")})):this.items}},created(){this.refresh()},methods:{decodeTitle:e=>{const t=document.createElement("textarea");return t.innerHTML=e,t.value},async refresh(){try{this.items=[],this.loaded=!1;const e=24,[t]=(0,r.responsiveGetPages)({api:t=>(0,r.getJsonWithCredentials)(`https://api.live.bilibili.com/relation/v1/feed/feed_list?page=${t}&pagesize=${e}`),getList:e=>lodash.get(e,"data.list",[]),getTotal:e=>lodash.get(e,"data.results",0)});this.items=await t}finally{this.loaded=!0}}}});var l=n(332),a=n.n(l),c=n(424),d=n.n(c),p={insert:"head",singleton:!1};a()(d(),p);d().locals;var f=function(e,t,n,i,o,r,s,l){var a,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=a):o&&(a=l?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(c.functional){c._injectStyles=a;var d=c.render;c.render=function(e,t){return a.call(t),d(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,a):[a]}return{exports:e,options:c}}(s,i,[],!1,null,null,null);const u=f.exports},332:(e,t,n)=>{"use strict";var i,o=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function l(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],a=t.base?r[0]+t.base:r[0],c=n[a]||0,d="".concat(a," ").concat(c);n[a]=c+1;var p=l(d),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(s[p].references++,s[p].updater(f)):s.push({identifier:d,updater:h(f,t),references:1}),i.push(d)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,p=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function u(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var v=null,m=0;function h(e,t){var n,i,o;if(t.singleton){var r=m++;n=v||(v=c(t)),i=f.bind(null,n,r,!1),o=f.bind(null,n,r,!0)}else n=c(t),i=u.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=l(n[i]);s[o].references--}for(var r=a(e,t),c=0;c<n.length;c++){var d=l(n[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=r}}}},399:(e,t,n)=>{var i=n(735);i&&i.__esModule&&(i=i.default),e.exports="string"==typeof i?i:i.toString()},405:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=405,e.exports=t},478:e=>{"use strict";e.exports="替换动态的 `正在直播` 面板, 能够显示超过 10 个的直播间.\n"}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,exports:{}};return n[e](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var r=Object.create(null);o.r(r);var s={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>s[e]=()=>n[e]));return s.default=()=>n,o.d(r,s),r},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";o.d(r,{component:()=>l});const e=coreApis.componentApis.define,t=coreApis.componentApis.styledComponent,n=coreApis.spinQuery,i=coreApis.utils,s=coreApis.utils.log,l=(0,e.defineComponentMetadata)({name:"extendFeedsLive",displayName:"直播信息扩充",entry:(0,t.styledComponentEntry)((()=>Promise.resolve().then(o.t.bind(o,399,23))),(async()=>{const e=(0,s.useScopedConsole)("extendFeedsLive"),t=await(0,n.select)(".bili-dyn-home--member aside.left");let r;t||e.error("aside not found");if((l=t.childNodes[t.childNodes.length-1]).nodeType!==Node.COMMENT_NODE&&l instanceof HTMLElement&&"section"===l.tagName.toLowerCase()&&l.classList.contains("sticky"))r=await(0,n.select)((()=>dq(t,"section.sticky")));else{const e=document.createElement("section");e.classList.add("sticky"),t.appendChild(e),r=e}var l;r||e.error("container not found");const a=await Promise.resolve().then(o.bind(o,97)).then((e=>e.default)),c=(0,i.mountVueComponent)(a);r.appendChild(c.$el)})),tags:[componentsTags.feeds,componentsTags.live],urlInclude:[/^https:\/\/t\.bilibili\.com\/$/],commitHash:"47832830d0525f24b377b77ad4e28b9e306c6c3a",coreVersion:"2.8.7",description:(()=>{const e=o(405);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(o.t.bind(o,478,17)).then((e=>e.default))}})()})})(),r=r.component})()));