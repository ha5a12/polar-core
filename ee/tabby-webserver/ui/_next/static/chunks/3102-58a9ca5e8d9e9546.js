(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3102],{61200:function(e,t,n){"use strict";var r=n(90275),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,u,c,a,i,l,f,s,d=!1;t||(t={}),c=t.debug||!1;try{if(i=r(),l=document.createRange(),f=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){c&&console.warn("unable to use e.clipboardData"),c&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(s),l.selectNodeContents(s),f.addRange(l),!document.execCommand("copy"))throw Error("copy command was unsuccessful");d=!0}catch(r){c&&console.error("unable to copy using execCommand: ",r),c&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(r){c&&console.error("unable to copy using clipboardData: ",r),c&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",u=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",a=n.replace(/#{\s*key\s*}/g,u),window.prompt(a,e)}}finally{f&&("function"==typeof f.removeRange?f.removeRange(l):f.removeAllRanges()),s&&document.body.removeChild(s),i()}return d}},90275:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},85656:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var r=n(3546),o=n(47091),u=n(79869),c=n(74047);function a(e){let t=e+"CollectionProvider",[n,a]=(0,o.b)(t),[i,l]=n(t,{collectionRef:{current:null},itemMap:new Map}),f=e+"CollectionSlot",s=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,a=l(f,n),i=(0,u.e)(t,a.collectionRef);return r.createElement(c.g7,{ref:i},o)}),d=e+"CollectionItemSlot",p="data-radix-collection-item",m=r.forwardRef((e,t)=>{let{scope:n,children:o,...a}=e,i=r.useRef(null),f=(0,u.e)(t,i),s=l(d,n);return r.useEffect(()=>(s.itemMap.set(i,{ref:i,...a}),()=>void s.itemMap.delete(i))),r.createElement(c.g7,{[p]:"",ref:f},o)});return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),u=r.useRef(new Map).current;return r.createElement(i,{scope:t,itemMap:u,collectionRef:o},n)},Slot:s,ItemSlot:m},function(t){let n=l(e+"CollectionConsumer",t),o=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return o},a]}},57541:function(e,t,n){"use strict";n.d(t,{gm:function(){return u}});var r=n(3546);let o=(0,r.createContext)(void 0);function u(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},8914:function(e,t,n){"use strict";let r;n.d(t,{M:function(){return d}});var o=n(65122),u=n(3546),c=n(79869),a=n(72205),i=n(17957);let l="focusScope.autoFocusOnMount",f="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},d=(0,u.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:d,onUnmountAutoFocus:g,...E}=e,[y,w]=(0,u.useState)(null),h=(0,i.W)(d),C=(0,i.W)(g),R=(0,u.useRef)(null),x=(0,c.e)(t,e=>w(e)),I=(0,u.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,u.useEffect)(()=>{if(r){function e(e){if(I.paused||!y)return;let t=e.target;y.contains(t)?R.current=t:v(R.current,{select:!0})}function t(e){if(I.paused||!y)return;let t=e.relatedTarget;null===t||y.contains(t)||v(R.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;if(t===document.body)for(let t of e)t.removedNodes.length>0&&v(y)});return y&&n.observe(y,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,y,I.paused]),(0,u.useEffect)(()=>{if(y){b.add(I);let e=document.activeElement,t=y.contains(e);if(!t){let t=new CustomEvent(l,s);y.addEventListener(l,h),y.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(v(r,{select:t}),document.activeElement!==n)return}(p(y).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&v(y))}return()=>{y.removeEventListener(l,h),setTimeout(()=>{let t=new CustomEvent(f,s);y.addEventListener(f,C),y.dispatchEvent(t),t.defaultPrevented||v(null!=e?e:document.body,{select:!0}),y.removeEventListener(f,C),b.remove(I)},0)}}},[y,h,C,I]);let S=(0,u.useCallback)(e=>{if(!n&&!r||I.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,u]=function(e){let t=p(e),n=m(t,e),r=m(t.reverse(),e);return[n,r]}(t),c=r&&u;c?e.shiftKey||o!==u?e.shiftKey&&o===r&&(e.preventDefault(),n&&v(u,{select:!0})):(e.preventDefault(),n&&v(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,I.paused]);return(0,u.createElement)(a.WV.div,(0,o.Z)({tabIndex:-1},E,{ref:x,onKeyDown:S}))});function p(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function m(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function v(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let b=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},1333:function(e,t,n){"use strict";n.d(t,{Pc:function(){return h},ck:function(){return D},fC:function(){return A}});var r=n(65122),o=n(3546),u=n(65727),c=n(85656),a=n(79869),i=n(47091),l=n(29434),f=n(72205),s=n(17957),d=n(27250),p=n(57541);let m="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[g,E,y]=(0,c.B)(b),[w,h]=(0,i.b)(b,[y]),[C,R]=w(b),x=(0,o.forwardRef)((e,t)=>(0,o.createElement)(g.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(g.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(I,(0,r.Z)({},e,{ref:t}))))),I=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:c,loop:i=!1,dir:l,currentTabStopId:b,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:y,onEntryFocus:w,...h}=e,R=(0,o.useRef)(null),x=(0,a.e)(t,R),I=(0,p.gm)(l),[S=null,Z]=(0,d.T)({prop:b,defaultProp:g,onChange:y}),[A,D]=(0,o.useState)(!1),F=(0,s.W)(w),M=E(n),L=(0,o.useRef)(!1),[k,N]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=R.current;if(e)return e.addEventListener(m,F),()=>e.removeEventListener(m,F)},[F]),(0,o.createElement)(C,{scope:n,orientation:c,dir:I,loop:i,currentTabStopId:S,onItemFocus:(0,o.useCallback)(e=>Z(e),[Z]),onItemShiftTab:(0,o.useCallback)(()=>D(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>N(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>N(e=>e-1),[])},(0,o.createElement)(f.WV.div,(0,r.Z)({tabIndex:A||0===k?-1:0,"data-orientation":c},h,{ref:x,style:{outline:"none",...e.style},onMouseDown:(0,u.M)(e.onMouseDown,()=>{L.current=!0}),onFocus:(0,u.M)(e.onFocus,e=>{let t=!L.current;if(e.target===e.currentTarget&&t&&!A){let t=new CustomEvent(m,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=M().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===S),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);T(o)}}L.current=!1}),onBlur:(0,u.M)(e.onBlur,()=>D(!1))})))}),S=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:c=!0,active:a=!1,tabStopId:i,...s}=e,d=(0,l.M)(),p=i||d,m=R("RovingFocusGroupItem",n),v=m.currentTabStopId===p,b=E(n),{onFocusableItemAdd:y,onFocusableItemRemove:w}=m;return(0,o.useEffect)(()=>{if(c)return y(),()=>w()},[c,y,w]),(0,o.createElement)(g.ItemSlot,{scope:n,id:p,focusable:c,active:a},(0,o.createElement)(f.WV.span,(0,r.Z)({tabIndex:v?0:-1,"data-orientation":m.orientation},s,{ref:t,onMouseDown:(0,u.M)(e.onMouseDown,e=>{c?m.onItemFocus(p):e.preventDefault()}),onFocus:(0,u.M)(e.onFocus,()=>m.onItemFocus(p)),onKeyDown:(0,u.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){m.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return Z[o]}(e,m.orientation,m.dir);if(void 0!==t){e.preventDefault();let o=b().filter(e=>e.focusable),u=o.map(e=>e.ref.current);if("last"===t)u.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&u.reverse();let o=u.indexOf(e.currentTarget);u=m.loop?(n=u,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):u.slice(o+1)}setTimeout(()=>T(u))}})})))}),Z={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function T(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let A=x,D=S},64143:function(e,t){"use strict";t.Z=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},1282:function(e,t){"use strict";t.Z=function(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var u=Array(o);++r<o;)u[r]=e[r+t];return u}},4109:function(e,t,n){"use strict";var r=n(7600),o=n(64143),u=n(38813),c=n(55357),a=1/0,i=r.Z?r.Z.prototype:void 0,l=i?i.toString:void 0;t.Z=function e(t){if("string"==typeof t)return t;if((0,u.Z)(t))return(0,o.Z)(t,e)+"";if((0,c.Z)(t))return l?l.call(t):"";var n=t+"";return"0"==n&&1/t==-a?"-0":n}},18216:function(e,t,n){"use strict";var r=n(6670),o=/^\s+/;t.Z=function(e){return e?e.slice(0,(0,r.Z)(e)+1).replace(o,""):e}},77934:function(e,t,n){"use strict";var r=n(1282);t.Z=function(e,t,n){var o=e.length;return n=void 0===n?o:n,!t&&n>=o?e:(0,r.Z)(e,t,n)}},59883:function(e,t){"use strict";var n=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.Z=function(e){return n.test(e)}},14955:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(59883),o="\ud800-\udfff",u="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",c="\ud83c[\udffb-\udfff]",a="[^"+o+"]",i="(?:\ud83c[\udde6-\uddff]){2}",l="[\ud800-\udbff][\udc00-\udfff]",f="(?:"+u+"|"+c+")?",s="[\\ufe0e\\ufe0f]?",d="(?:\\u200d(?:"+[a,i,l].join("|")+")"+s+f+")*",p=RegExp(c+"(?="+c+")|(?:"+[a+u+"?",u,i,l,"["+o+"]"].join("|")+")"+(s+f+d),"g"),m=function(e){return(0,r.Z)(e)?e.match(p)||[]:e.split("")}},6670:function(e,t){"use strict";var n=/\s/;t.Z=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},88542:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(53294),o=n(77934),u=n(59883),c=n(14955),a=function(e){e=(0,r.Z)(e);var t=(0,u.Z)(e)?(0,c.Z)(e):void 0,n=t?t[0]:e.charAt(0),a=t?(0,o.Z)(t,1).join(""):e.slice(1);return n.toUpperCase()+a},i=function(e){return a((0,r.Z)(e).toLowerCase())}},84639:function(e,t){"use strict";t.Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},26165:function(e,t,n){"use strict";var r=n(18216),o=n(84639),u=n(55357),c=0/0,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;t.Z=function(e){if("number"==typeof e)return e;if((0,u.Z)(e))return c;if((0,o.Z)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,o.Z)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=(0,r.Z)(e);var n=i.test(e);return n||l.test(e)?f(e.slice(2),n?2:8):a.test(e)?c:+e}},53294:function(e,t,n){"use strict";var r=n(4109);t.Z=function(e){return null==e?"":(0,r.Z)(e)}}}]);