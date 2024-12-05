"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6887],{65122:function(e,t,n){n.d(t,{Z:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},65727:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}},79869:function(e,t,n){n.d(t,{F:function(){return u},e:function(){return o}});var r=n(3546);function u(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function o(...e){return(0,r.useCallback)(u(...e),e)}},47091:function(e,t,n){n.d(t,{b:function(){return o},k:function(){return u}});var r=n(3546);function u(e,t){let n=(0,r.createContext)(t);function u(e){let{children:t,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(n.Provider,{value:o},t)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,t=[]){let n=[],u=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let u=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return u.scopeName=e,[function(t,u){let o=(0,r.createContext)(u),l=n.length;function i(t){let{scope:n,children:u,...i}=t,c=(null==n?void 0:n[e][l])||o,a=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(c.Provider,{value:a},u)}return n=[...n,u],i.displayName=t+"Provider",[i,function(n,i){let c=(null==i?void 0:i[e][l])||o,a=(0,r.useContext)(c);if(a)return a;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e),o=u[`__scope${r}`];return{...t,...o}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(u,...t)]}},72205:function(e,t,n){n.d(t,{WV:function(){return i},jH:function(){return c}});var r=n(65122),u=n(3546),o=n(30171),l=n(74047);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,u.forwardRef)((e,n)=>{let{asChild:o,...i}=e,c=o?l.g7:t;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(c,(0,r.Z)({},i,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function c(e,t){e&&(0,o.flushSync)(()=>e.dispatchEvent(t))}},74047:function(e,t,n){n.d(t,{A4:function(){return c},g7:function(){return l}});var r=n(65122),u=n(3546),o=n(79869);let l=(0,u.forwardRef)((e,t)=>{let{children:n,...o}=e,l=u.Children.toArray(n),c=l.find(a);if(c){let e=c.props.children,n=l.map(t=>t!==c?t:u.Children.count(e)>1?u.Children.only(null):(0,u.isValidElement)(e)?e.props.children:null);return(0,u.createElement)(i,(0,r.Z)({},o,{ref:t}),(0,u.isValidElement)(e)?(0,u.cloneElement)(e,void 0,n):null)}return(0,u.createElement)(i,(0,r.Z)({},o,{ref:t}),n)});l.displayName="Slot";let i=(0,u.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,u.isValidElement)(n)?(0,u.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let u=e[r],o=t[r],l=/^on[A-Z]/.test(r);l?u&&o?n[r]=(...e)=>{o(...e),u(...e)}:u&&(n[r]=u):"style"===r?n[r]={...u,...o}:"className"===r&&(n[r]=[u,o].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?(0,o.F)(t,n.ref):n.ref}):u.Children.count(n)>1?u.Children.only(null):null});i.displayName="SlotClone";let c=({children:e})=>(0,u.createElement)(u.Fragment,null,e);function a(e){return(0,u.isValidElement)(e)&&e.type===c}},96887:function(e,t,n){n.d(t,{bU:function(){return w},fC:function(){return g}});var r=n(65122),u=n(3546),o=n(65727),l=n(79869),i=n(47091),c=n(27250),a=n(81544),f=n(96593),d=n(72205);let s="Switch",[p,h]=(0,i.b)(s),[v,b]=p(s),m=(0,u.forwardRef)((e,t)=>{let{__scopeSwitch:n,name:i,checked:a,defaultChecked:f,required:s,disabled:p,value:h="on",onCheckedChange:b,...m}=e,[E,g]=(0,u.useState)(null),w=(0,l.e)(t,e=>g(e)),k=(0,u.useRef)(!1),S=!E||!!E.closest("form"),[N=!1,P]=(0,c.T)({prop:a,defaultProp:f,onChange:b});return(0,u.createElement)(v,{scope:n,checked:N,disabled:p},(0,u.createElement)(d.WV.button,(0,r.Z)({type:"button",role:"switch","aria-checked":N,"aria-required":s,"data-state":C(N),"data-disabled":p?"":void 0,disabled:p,value:h},m,{ref:w,onClick:(0,o.M)(e.onClick,e=>{P(e=>!e),S&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})})),S&&(0,u.createElement)(y,{control:E,bubbles:!k.current,name:i,value:h,checked:N,required:s,disabled:p,style:{transform:"translateX(-100%)"}}))}),E=(0,u.forwardRef)((e,t)=>{let{__scopeSwitch:n,...o}=e,l=b("SwitchThumb",n);return(0,u.createElement)(d.WV.span,(0,r.Z)({"data-state":C(l.checked),"data-disabled":l.disabled?"":void 0},o,{ref:t}))}),y=e=>{let{control:t,checked:n,bubbles:o=!0,...l}=e,i=(0,u.useRef)(null),c=(0,a.D)(n),d=(0,f.t)(t);return(0,u.useEffect)(()=>{let e=i.current,t=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(t,"checked"),u=r.set;if(c!==n&&u){let t=new Event("click",{bubbles:o});u.call(e,n),e.dispatchEvent(t)}},[c,n,o]),(0,u.createElement)("input",(0,r.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:n},l,{tabIndex:-1,ref:i,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function C(e){return e?"checked":"unchecked"}let g=m,w=E},17957:function(e,t,n){n.d(t,{W:function(){return u}});var r=n(3546);function u(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},27250:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(3546),u=n(17957);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,l]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[o]=n,l=(0,r.useRef)(o),i=(0,u.W)(t);return(0,r.useEffect)(()=>{l.current!==o&&(i(o),l.current=o)},[o,l,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,c=i?e:o,a=(0,u.W)(n),f=(0,r.useCallback)(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else l(t)},[i,e,l,a]);return[c,f]}},65292:function(e,t,n){n.d(t,{b:function(){return u}});var r=n(3546);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},81544:function(e,t,n){n.d(t,{D:function(){return u}});var r=n(3546);function u(e){let t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},96593:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(3546),u=n(65292);function o(e){let[t,n]=(0,r.useState)(void 0);return(0,u.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,u;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,u=t.blockSize}else r=e.offsetWidth,u=e.offsetHeight;n({width:r,height:u})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}}}]);