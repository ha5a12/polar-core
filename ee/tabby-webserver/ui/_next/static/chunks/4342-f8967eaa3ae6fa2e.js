(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4342],{61200:function(e,t,r){"use strict";var n=r(90275),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,u,a,c,i,l,f,s,d=!1;t||(t={}),a=t.debug||!1;try{if(i=n(),l=document.createRange(),f=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=o[t.format]||o.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(s),l.selectNodeContents(s),f.addRange(l),!document.execCommand("copy"))throw Error("copy command was unsuccessful");d=!0}catch(n){a&&console.error("unable to copy using execCommand: ",n),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(n){a&&console.error("unable to copy using clipboardData: ",n),a&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",u=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",c=r.replace(/#{\s*key\s*}/g,u),window.prompt(c,e)}}finally{f&&("function"==typeof f.removeRange?f.removeRange(l):f.removeAllRanges()),s&&document.body.removeChild(s),i()}return d}},90275:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},85656:function(e,t,r){"use strict";r.d(t,{B:function(){return c}});var n=r(3546),o=r(47091),u=r(79869),a=r(74047);function c(e){let t=e+"CollectionProvider",[r,c]=(0,o.b)(t),[i,l]=r(t,{collectionRef:{current:null},itemMap:new Map}),f=e+"CollectionSlot",s=n.forwardRef((e,t)=>{let{scope:r,children:o}=e,c=l(f,r),i=(0,u.e)(t,c.collectionRef);return n.createElement(a.g7,{ref:i},o)}),d=e+"CollectionItemSlot",p="data-radix-collection-item",v=n.forwardRef((e,t)=>{let{scope:r,children:o,...c}=e,i=n.useRef(null),f=(0,u.e)(t,i),s=l(d,r);return n.useEffect(()=>(s.itemMap.set(i,{ref:i,...c}),()=>void s.itemMap.delete(i))),n.createElement(a.g7,{[p]:"",ref:f},o)});return[{Provider:e=>{let{scope:t,children:r}=e,o=n.useRef(null),u=n.useRef(new Map).current;return n.createElement(i,{scope:t,itemMap:u,collectionRef:o},r)},Slot:s,ItemSlot:v},function(t){let r=l(e+"CollectionConsumer",t),o=n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`)),n=Array.from(r.itemMap.values()),o=n.sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current));return o},[r.collectionRef,r.itemMap]);return o},c]}},57541:function(e,t,r){"use strict";r.d(t,{gm:function(){return u}});var n=r(3546);let o=(0,n.createContext)(void 0);function u(e){let t=(0,n.useContext)(o);return e||t||"ltr"}},70772:function(e,t,r){"use strict";r.d(t,{ck:function(){return L},fC:function(){return P},z$:function(){return G}});var n=r(65122),o=r(3546),u=r(65727),a=r(79869),c=r(47091),i=r(72205),l=r(1333),f=r(27250),s=r(57541),d=r(96593),p=r(81544),v=r(96497);let m="Radio",[b,g]=(0,c.b)(m),[w,y]=b(m),h=(0,o.forwardRef)((e,t)=>{let{__scopeRadio:r,name:c,checked:l=!1,required:f,disabled:s,value:d="on",onCheck:p,...v}=e,[m,b]=(0,o.useState)(null),g=(0,a.e)(t,e=>b(e)),y=(0,o.useRef)(!1),h=!m||!!m.closest("form");return(0,o.createElement)(w,{scope:r,checked:l,disabled:s},(0,o.createElement)(i.WV.button,(0,n.Z)({type:"button",role:"radio","aria-checked":l,"data-state":C(l),"data-disabled":s?"":void 0,disabled:s,value:d},v,{ref:g,onClick:(0,u.M)(e.onClick,e=>{l||null==p||p(),h&&(y.current=e.isPropagationStopped(),y.current||e.stopPropagation())})})),h&&(0,o.createElement)(R,{control:m,bubbles:!y.current,name:c,value:d,checked:l,required:f,disabled:s,style:{transform:"translateX(-100%)"}}))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeRadio:r,forceMount:u,...a}=e,c=y("RadioIndicator",r);return(0,o.createElement)(v.z,{present:u||c.checked},(0,o.createElement)(i.WV.span,(0,n.Z)({"data-state":C(c.checked),"data-disabled":c.disabled?"":void 0},a,{ref:t})))}),R=e=>{let{control:t,checked:r,bubbles:u=!0,...a}=e,c=(0,o.useRef)(null),i=(0,p.D)(r),l=(0,d.t)(t);return(0,o.useEffect)(()=>{let e=c.current,t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,"checked"),o=n.set;if(i!==r&&o){let t=new Event("click",{bubbles:u});o.call(e,r),e.dispatchEvent(t)}},[i,r,u]),(0,o.createElement)("input",(0,n.Z)({type:"radio","aria-hidden":!0,defaultChecked:r},a,{tabIndex:-1,ref:c,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function C(e){return e?"checked":"unchecked"}let k=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Z="RadioGroup",[D,x]=(0,c.b)(Z,[l.Pc,g]),A=(0,l.Pc)(),I=g(),[M,S]=D(Z),F=(0,o.forwardRef)((e,t)=>{let{__scopeRadioGroup:r,name:u,defaultValue:a,value:c,required:d=!1,disabled:p=!1,orientation:v,dir:m,loop:b=!0,onValueChange:g,...w}=e,y=A(r),h=(0,s.gm)(m),[E,R]=(0,f.T)({prop:c,defaultProp:a,onChange:g});return(0,o.createElement)(M,{scope:r,name:u,required:d,disabled:p,value:E,onValueChange:R},(0,o.createElement)(l.fC,(0,n.Z)({asChild:!0},y,{orientation:v,dir:h,loop:b}),(0,o.createElement)(i.WV.div,(0,n.Z)({role:"radiogroup","aria-required":d,"aria-orientation":v,"data-disabled":p?"":void 0,dir:h},w,{ref:t}))))}),_=(0,o.forwardRef)((e,t)=>{let{__scopeRadioGroup:r,disabled:c,...i}=e,f=S("RadioGroupItem",r),s=f.disabled||c,d=A(r),p=I(r),v=(0,o.useRef)(null),m=(0,a.e)(t,v),b=f.value===i.value,g=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=e=>{k.includes(e.key)&&(g.current=!0)},t=()=>g.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}},[]),(0,o.createElement)(l.ck,(0,n.Z)({asChild:!0},d,{focusable:!s,active:b}),(0,o.createElement)(h,(0,n.Z)({disabled:s,required:f.required,checked:b},p,i,{name:f.name,ref:m,onCheck:()=>f.onValueChange(i.value),onKeyDown:(0,u.M)(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:(0,u.M)(i.onFocus,()=>{var e;g.current&&(null===(e=v.current)||void 0===e||e.click())})})))}),T=(0,o.forwardRef)((e,t)=>{let{__scopeRadioGroup:r,...u}=e,a=I(r);return(0,o.createElement)(E,(0,n.Z)({},a,u,{ref:t}))}),P=F,L=_,G=T},1333:function(e,t,r){"use strict";r.d(t,{Pc:function(){return E},ck:function(){return M},fC:function(){return I}});var n=r(65122),o=r(3546),u=r(65727),a=r(85656),c=r(79869),i=r(47091),l=r(29434),f=r(72205),s=r(17957),d=r(27250),p=r(57541);let v="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[g,w,y]=(0,a.B)(b),[h,E]=(0,i.b)(b,[y]),[R,C]=h(b),k=(0,o.forwardRef)((e,t)=>(0,o.createElement)(g.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(g.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(Z,(0,n.Z)({},e,{ref:t}))))),Z=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:a,loop:i=!1,dir:l,currentTabStopId:b,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:y,onEntryFocus:h,...E}=e,C=(0,o.useRef)(null),k=(0,c.e)(t,C),Z=(0,p.gm)(l),[D=null,x]=(0,d.T)({prop:b,defaultProp:g,onChange:y}),[I,M]=(0,o.useState)(!1),S=(0,s.W)(h),F=w(r),_=(0,o.useRef)(!1),[T,P]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=C.current;if(e)return e.addEventListener(v,S),()=>e.removeEventListener(v,S)},[S]),(0,o.createElement)(R,{scope:r,orientation:a,dir:Z,loop:i,currentTabStopId:D,onItemFocus:(0,o.useCallback)(e=>x(e),[x]),onItemShiftTab:(0,o.useCallback)(()=>M(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>P(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>P(e=>e-1),[])},(0,o.createElement)(f.WV.div,(0,n.Z)({tabIndex:I||0===T?-1:0,"data-orientation":a},E,{ref:k,style:{outline:"none",...e.style},onMouseDown:(0,u.M)(e.onMouseDown,()=>{_.current=!0}),onFocus:(0,u.M)(e.onFocus,e=>{let t=!_.current;if(e.target===e.currentTarget&&t&&!I){let t=new CustomEvent(v,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=F().filter(e=>e.focusable),t=e.find(e=>e.active),r=e.find(e=>e.id===D),n=[t,r,...e].filter(Boolean),o=n.map(e=>e.ref.current);A(o)}}_.current=!1}),onBlur:(0,u.M)(e.onBlur,()=>M(!1))})))}),D=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:a=!0,active:c=!1,tabStopId:i,...s}=e,d=(0,l.M)(),p=i||d,v=C("RovingFocusGroupItem",r),m=v.currentTabStopId===p,b=w(r),{onFocusableItemAdd:y,onFocusableItemRemove:h}=v;return(0,o.useEffect)(()=>{if(a)return y(),()=>h()},[a,y,h]),(0,o.createElement)(g.ItemSlot,{scope:r,id:p,focusable:a,active:c},(0,o.createElement)(f.WV.span,(0,n.Z)({tabIndex:m?0:-1,"data-orientation":v.orientation},s,{ref:t,onMouseDown:(0,u.M)(e.onMouseDown,e=>{a?v.onItemFocus(p):e.preventDefault()}),onFocus:(0,u.M)(e.onFocus,()=>v.onItemFocus(p)),onKeyDown:(0,u.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return x[o]}(e,v.orientation,v.dir);if(void 0!==t){e.preventDefault();let o=b().filter(e=>e.focusable),u=o.map(e=>e.ref.current);if("last"===t)u.reverse();else if("prev"===t||"next"===t){var r,n;"prev"===t&&u.reverse();let o=u.indexOf(e.currentTarget);u=v.loop?(r=u,n=o+1,r.map((e,t)=>r[(n+t)%r.length])):u.slice(o+1)}setTimeout(()=>A(u))}})})))}),x={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function A(e){let t=document.activeElement;for(let r of e)if(r===t||(r.focus(),document.activeElement!==t))return}let I=k,M=D},81544:function(e,t,r){"use strict";r.d(t,{D:function(){return o}});var n=r(3546);function o(e){let t=(0,n.useRef)({value:e,previous:e});return(0,n.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},96703:function(e,t){"use strict";t.Z=function(e,t,r,n){for(var o=e.length,u=r+(n?1:-1);n?u--:++u<o;)if(t(e[u],u,e))return u;return -1}},1282:function(e,t){"use strict";t.Z=function(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var u=Array(o);++n<o;)u[n]=e[n+t];return u}},77934:function(e,t,r){"use strict";var n=r(1282);t.Z=function(e,t,r){var o=e.length;return r=void 0===r?o:r,!t&&r>=o?e:(0,n.Z)(e,t,r)}},59883:function(e,t){"use strict";var r=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.Z=function(e){return r.test(e)}},14955:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(59883),o="\ud800-\udfff",u="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",a="\ud83c[\udffb-\udfff]",c="[^"+o+"]",i="(?:\ud83c[\udde6-\uddff]){2}",l="[\ud800-\udbff][\udc00-\udfff]",f="(?:"+u+"|"+a+")?",s="[\\ufe0e\\ufe0f]?",d="(?:\\u200d(?:"+[c,i,l].join("|")+")"+s+f+")*",p=RegExp(a+"(?="+a+")|(?:"+[c+u+"?",u,i,l,"["+o+"]"].join("|")+")"+(s+f+d),"g"),v=function(e){return(0,n.Z)(e)?e.match(p)||[]:e.split("")}},88542:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(53294),o=r(77934),u=r(59883),a=r(14955),c=function(e){e=(0,n.Z)(e);var t=(0,u.Z)(e)?(0,a.Z)(e):void 0,r=t?t[0]:e.charAt(0),c=t?(0,o.Z)(t,1).join(""):e.slice(1);return r.toUpperCase()+c},i=function(e){return c((0,n.Z)(e).toLowerCase())}},826:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n,o=r(51722),u=r(20568),a=r(70014),c=(n=r(78613).Z,function(e,t,r){var c=Object(e);if(!(0,u.Z)(e)){var i=(0,o.Z)(t,3);e=(0,a.Z)(e),t=function(e){return i(c[e],e,c)}}var l=n(e,t,r);return l>-1?c[i?e[l]:l]:void 0})},78613:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(96703),o=r(51722),u=r(26165),a=1/0,c=function(e){var t,r=(t=e)?(t=(0,u.Z)(t))===a||t===-a?(t<0?-1:1)*17976931348623157e292:t==t?t:0:0===t?t:0,n=r%1;return r==r?n?r-n:r:0},i=Math.max,l=function(e,t,r){var u=null==e?0:e.length;if(!u)return -1;var a=null==r?0:c(r);return a<0&&(a=i(u+a,0)),(0,n.Z)(e,(0,o.Z)(t,3),a)}},94909:function(e,t,r){"use strict";var n=r(63563),o=r(43108),u=r(97589),a=r(38813),c=r(20568),i=r(90328),l=r(36586),f=r(33321),s=Object.prototype.hasOwnProperty;t.Z=function(e){if(null==e)return!0;if((0,c.Z)(e)&&((0,a.Z)(e)||"string"==typeof e||"function"==typeof e.splice||(0,i.Z)(e)||(0,f.Z)(e)||(0,u.Z)(e)))return!e.length;var t=(0,o.Z)(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if((0,l.Z)(e))return!(0,n.Z)(e).length;for(var r in e)if(s.call(e,r))return!1;return!0}}}]);