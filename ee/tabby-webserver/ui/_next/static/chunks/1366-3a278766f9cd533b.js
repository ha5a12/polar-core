"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1366],{85744:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}},66062:function(e,t,n){n.d(t,{fC:function(){return C},z$:function(){return M}});var r=n(13428),u=n(2265),o=n(42210),i=n(56989),l=n(85744),a=n(73763),c=n(85184),s=n(94977),d=n(85606),f=n(9381);let p="Checkbox",[v,m]=(0,i.b)(p),[h,b]=v(p),E=(0,u.forwardRef)((e,t)=>{let{__scopeCheckbox:n,name:i,checked:c,defaultChecked:s,required:d,disabled:p,value:v="on",onCheckedChange:m,...b}=e,[E,N]=(0,u.useState)(null),C=(0,o.e)(t,e=>N(e)),M=(0,u.useRef)(!1),O=!E||!!E.closest("form"),[w=!1,T]=(0,a.T)({prop:c,defaultProp:s,onChange:m}),_=(0,u.useRef)(w);return(0,u.useEffect)(()=>{let e=null==E?void 0:E.form;if(e){let t=()=>T(_.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[E,T]),(0,u.createElement)(h,{scope:n,state:w,disabled:p},(0,u.createElement)(f.WV.button,(0,r.Z)({type:"button",role:"checkbox","aria-checked":k(w)?"mixed":w,"aria-required":d,"data-state":g(w),"data-disabled":p?"":void 0,disabled:p,value:v},b,{ref:C,onKeyDown:(0,l.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,l.M)(e.onClick,e=>{T(e=>!!k(e)||!e),O&&(M.current=e.isPropagationStopped(),M.current||e.stopPropagation())})})),O&&(0,u.createElement)(y,{control:E,bubbles:!M.current,name:i,value:v,checked:w,required:d,disabled:p,style:{transform:"translateX(-100%)"}}))}),N=(0,u.forwardRef)((e,t)=>{let{__scopeCheckbox:n,forceMount:o,...i}=e,l=b("CheckboxIndicator",n);return(0,u.createElement)(d.z,{present:o||k(l.state)||!0===l.state},(0,u.createElement)(f.WV.span,(0,r.Z)({"data-state":g(l.state),"data-disabled":l.disabled?"":void 0},i,{ref:t,style:{pointerEvents:"none",...e.style}})))}),y=e=>{let{control:t,checked:n,bubbles:o=!0,...i}=e,l=(0,u.useRef)(null),a=(0,c.D)(n),d=(0,s.t)(t);return(0,u.useEffect)(()=>{let e=l.current,t=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(t,"checked"),u=r.set;if(a!==n&&u){let t=new Event("click",{bubbles:o});e.indeterminate=k(n),u.call(e,!k(n)&&n),e.dispatchEvent(t)}},[a,n,o]),(0,u.createElement)("input",(0,r.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!k(n)&&n},i,{tabIndex:-1,ref:l,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function k(e){return"indeterminate"===e}function g(e){return k(e)?"indeterminate":e?"checked":"unchecked"}let C=E,M=N},56989:function(e,t,n){n.d(t,{b:function(){return o},k:function(){return u}});var r=n(2265);function u(e,t){let n=(0,r.createContext)(t);function u(e){let{children:t,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(n.Provider,{value:o},t)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,t=[]){let n=[],u=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let u=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return u.scopeName=e,[function(t,u){let o=(0,r.createContext)(u),i=n.length;function l(t){let{scope:n,children:u,...l}=t,a=(null==n?void 0:n[e][i])||o,c=(0,r.useMemo)(()=>l,Object.values(l));return(0,r.createElement)(a.Provider,{value:c},u)}return n=[...n,u],l.displayName=t+"Provider",[l,function(n,l){let a=(null==l?void 0:l[e][i])||o,c=(0,r.useContext)(a);if(c)return c;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e),o=u[`__scope${r}`];return{...t,...o}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(u,...t)]}},85606:function(e,t,n){n.d(t,{z:function(){return l}});var r=n(2265),u=n(54887),o=n(42210),i=n(51030);let l=e=>{let{present:t,children:n}=e,l=function(e){var t;let[n,o]=(0,r.useState)(),l=(0,r.useRef)({}),c=(0,r.useRef)(e),s=(0,r.useRef)("none"),d=e?"mounted":"unmounted",[f,p]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},d));return(0,r.useEffect)(()=>{let e=a(l.current);s.current="mounted"===f?e:"none"},[f]),(0,i.b)(()=>{let t=l.current,n=c.current,r=n!==e;if(r){let r=s.current,u=a(t);e?p("MOUNT"):"none"===u||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):n&&r!==u?p("ANIMATION_OUT"):p("UNMOUNT"),c.current=e}},[e,p]),(0,i.b)(()=>{if(n){let e=e=>{let t=a(l.current),r=t.includes(e.animationName);e.target===n&&r&&(0,u.flushSync)(()=>p("ANIMATION_END"))},t=e=>{e.target===n&&(s.current=a(l.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}p("ANIMATION_END")},[n,p]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(l.current=getComputedStyle(e)),o(e)},[])}}(t),c="function"==typeof n?n({present:l.isPresent}):r.Children.only(n),s=(0,o.e)(l.ref,c.ref),d="function"==typeof n;return d||l.isPresent?(0,r.cloneElement)(c,{ref:s}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},26823:function(e,t,n){n.d(t,{f:function(){return s}});var r=n(13428),u=n(2265),o=n(9381);let i="horizontal",l=["horizontal","vertical"],a=(0,u.forwardRef)((e,t)=>{let{decorative:n,orientation:l=i,...a}=e,s=c(l)?l:i;return(0,u.createElement)(o.WV.div,(0,r.Z)({"data-orientation":s},n?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},a,{ref:t}))});function c(e){return l.includes(e)}a.propTypes={orientation(e,t,n){let r=e[t],u=String(r);return r&&!c(r)?Error(`Invalid prop \`orientation\` of value \`${u}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${i}\`.`):null}};let s=a},16459:function(e,t,n){n.d(t,{W:function(){return u}});var r=n(2265);function u(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},73763:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(2265),u=n(16459);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,i]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[o]=n,i=(0,r.useRef)(o),l=(0,u.W)(t);return(0,r.useEffect)(()=>{i.current!==o&&(l(o),i.current=o)},[o,i,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,a=l?e:o,c=(0,u.W)(n),s=(0,r.useCallback)(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else i(t)},[l,e,i,c]);return[a,s]}},51030:function(e,t,n){n.d(t,{b:function(){return u}});var r=n(2265);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},85184:function(e,t,n){n.d(t,{D:function(){return u}});var r=n(2265);function u(e){let t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},94977:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(2265),u=n(51030);function o(e){let[t,n]=(0,r.useState)(void 0);return(0,u.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,u;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,u=t.blockSize}else r=e.offsetWidth,u=e.offsetHeight;n({width:r,height:u})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}},72999:function(e,t){t.Z=function(e){for(var t=-1,n=null==e?0:e.length,r=0,u=[];++t<n;){var o=e[t];o&&(u[r++]=o)}return u}},42910:function(e,t,n){var r=n(42123),u=n(97113),o=n(98220),i=n(5541),l=n(85222),a=n(55250),c=n(26343),s=n(2856),d=Object.prototype.hasOwnProperty;t.Z=function(e){if(null==e)return!0;if((0,l.Z)(e)&&((0,i.Z)(e)||"string"==typeof e||"function"==typeof e.splice||(0,a.Z)(e)||(0,s.Z)(e)||(0,o.Z)(e)))return!e.length;var t=(0,u.Z)(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if((0,c.Z)(e))return!(0,r.Z)(e).length;for(var n in e)if(d.call(e,n))return!1;return!0}}}]);