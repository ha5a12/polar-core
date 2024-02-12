"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1713],{71713:function(e,t,n){let r;n.d(t,{x8:function(){return eo},VY:function(){return et},dk:function(){return er},aV:function(){return ee},h_:function(){return $},fC:function(){return Q},Dx:function(){return en},xz:function(){return X},jm:function(){return G},p8:function(){return F}});var o=n(13428),l=n(2265),u=n(85744),i=n(42210),a=n(56989),s=n(20966),c=n(73763),d=n(9381),f=n(16459),p=n(12488);let v="dismissableLayer.update",m=(0,l.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),E=(0,l.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:E,onInteractOutside:D,onDismiss:h,...y}=e,C=(0,l.useContext)(m),[w,O]=(0,l.useState)(null),_=null!==(n=null==w?void 0:w.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,R]=(0,l.useState)({}),P=(0,i.e)(t,e=>O(e)),T=Array.from(C.layers),[F]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),L=T.indexOf(F),M=w?T.indexOf(w):-1,W=C.layersWithOutsidePointerEventsDisabled.size>0,I=M>=L,k=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,f.W)(e),r=(0,l.useRef)(!1),o=(0,l.useRef)(()=>{});return(0,l.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function l(){b("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!I||n||(null==c||c(e),null==D||D(e),e.defaultPrevented||null==h||h())},_),N=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,f.W)(e),r=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{let e=e=>{e.target&&!r.current&&b("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));n||(null==E||E(e),null==D||D(e),e.defaultPrevented||null==h||h())},_);return(0,p.e)(e=>{let t=M===C.layers.size-1;t&&(null==s||s(e),!e.defaultPrevented&&h&&(e.preventDefault(),h()))},_),(0,l.useEffect)(()=>{if(w)return a&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(r=_.body.style.pointerEvents,_.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(w)),C.layers.add(w),g(),()=>{a&&1===C.layersWithOutsidePointerEventsDisabled.size&&(_.body.style.pointerEvents=r)}},[w,_,a,C]),(0,l.useEffect)(()=>()=>{w&&(C.layers.delete(w),C.layersWithOutsidePointerEventsDisabled.delete(w),g())},[w,C]),(0,l.useEffect)(()=>{let e=()=>R({});return document.addEventListener(v,e),()=>document.removeEventListener(v,e)},[]),(0,l.createElement)(d.WV.div,(0,o.Z)({},y,{ref:P,style:{pointerEvents:W?I?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.M)(e.onFocusCapture,N.onFocusCapture),onBlurCapture:(0,u.M)(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:(0,u.M)(e.onPointerDownCapture,k.onPointerDownCapture)}))});function g(){let e=new CustomEvent(v);document.dispatchEvent(e)}function b(e,t,n,{discrete:r}){let o=n.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,d.jH)(o,l):o.dispatchEvent(l)}var D=n(52759),h=n(54887);let y=(0,l.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...u}=e;return r?h.createPortal((0,l.createElement)(d.WV.div,(0,o.Z)({},u,{ref:t})),r):null});var C=n(85606),w=n(31244),O=n(17552),_=n(85859),R=n(67256);let P="Dialog",[T,F]=(0,a.b)(P),[L,M]=T(P),W=(0,l.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,a=M("DialogTrigger",n),s=(0,i.e)(t,a.triggerRef);return(0,l.createElement)(d.WV.button,(0,o.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":q(a.open)},r,{ref:s,onClick:(0,u.M)(e.onClick,a.onOpenToggle)}))}),I="DialogPortal",[k,N]=T(I,{forceMount:void 0}),Z="DialogOverlay",S=(0,l.forwardRef)((e,t)=>{let n=N(Z,e.__scopeDialog),{forceMount:r=n.forceMount,...u}=e,i=M(Z,e.__scopeDialog);return i.modal?(0,l.createElement)(C.z,{present:r||i.open},(0,l.createElement)(A,(0,o.Z)({},u,{ref:t}))):null}),A=(0,l.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,u=M(Z,n);return(0,l.createElement)(O.Z,{as:R.g7,allowPinchZoom:!0,shards:[u.contentRef]},(0,l.createElement)(d.WV.div,(0,o.Z)({"data-state":q(u.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),x="DialogContent",K=(0,l.forwardRef)((e,t)=>{let n=N(x,e.__scopeDialog),{forceMount:r=n.forceMount,...u}=e,i=M(x,e.__scopeDialog);return(0,l.createElement)(C.z,{present:r||i.open},i.modal?(0,l.createElement)(V,(0,o.Z)({},u,{ref:t})):(0,l.createElement)(z,(0,o.Z)({},u,{ref:t})))}),V=(0,l.forwardRef)((e,t)=>{let n=M(x,e.__scopeDialog),r=(0,l.useRef)(null),a=(0,i.e)(t,n.contentRef,r);return(0,l.useEffect)(()=>{let e=r.current;if(e)return(0,_.Ry)(e)},[]),(0,l.createElement)(B,(0,o.Z)({},e,{ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,u.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,u.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;r&&e.preventDefault()}),onFocusOutside:(0,u.M)(e.onFocusOutside,e=>e.preventDefault())}))}),z=(0,l.forwardRef)((e,t)=>{let n=M(x,e.__scopeDialog),r=(0,l.useRef)(!1),u=(0,l.useRef)(!1);return(0,l.createElement)(B,(0,o.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,l;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current||null===(l=n.triggerRef.current)||void 0===l||l.focus(),t.preventDefault()),r.current=!1,u.current=!1},onInteractOutside:t=>{var o,l;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(u.current=!0));let i=t.target,a=null===(l=n.triggerRef.current)||void 0===l?void 0:l.contains(i);a&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&u.current&&t.preventDefault()}}))}),B=(0,l.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:u,onCloseAutoFocus:a,...s}=e,c=M(x,n),d=(0,l.useRef)(null),f=(0,i.e)(t,d);return(0,w.EW)(),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(D.M,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:u,onUnmountAutoFocus:a},(0,l.createElement)(E,(0,o.Z)({role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":q(c.open)},s,{ref:f,onDismiss:()=>c.onOpenChange(!1)}))),!1)}),U="DialogTitle",H=(0,l.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,u=M(U,n);return(0,l.createElement)(d.WV.h2,(0,o.Z)({id:u.titleId},r,{ref:t}))}),j=(0,l.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,u=M("DialogDescription",n);return(0,l.createElement)(d.WV.p,(0,o.Z)({id:u.descriptionId},r,{ref:t}))}),Y=(0,l.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,i=M("DialogClose",n);return(0,l.createElement)(d.WV.button,(0,o.Z)({type:"button"},r,{ref:t,onClick:(0,u.M)(e.onClick,()=>i.onOpenChange(!1))}))});function q(e){return e?"open":"closed"}let[G,J]=(0,a.k)("DialogTitleWarning",{contentName:x,titleName:U,docsSlug:"dialog"}),Q=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:u,modal:i=!0}=e,a=(0,l.useRef)(null),d=(0,l.useRef)(null),[f=!1,p]=(0,c.T)({prop:r,defaultProp:o,onChange:u});return(0,l.createElement)(L,{scope:t,triggerRef:a,contentRef:d,contentId:(0,s.M)(),titleId:(0,s.M)(),descriptionId:(0,s.M)(),open:f,onOpenChange:p,onOpenToggle:(0,l.useCallback)(()=>p(e=>!e),[p]),modal:i},n)},X=W,$=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,u=M(I,t);return(0,l.createElement)(k,{scope:t,forceMount:n},l.Children.map(r,e=>(0,l.createElement)(C.z,{present:n||u.open},(0,l.createElement)(y,{asChild:!0,container:o},e))))},ee=S,et=K,en=H,er=j,eo=Y},52759:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(13428),l=n(2265),u=n(42210),i=n(9381),a=n(16459);let s="focusScope.autoFocusOnMount",c="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=(0,l.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...b}=e,[D,h]=(0,l.useState)(null),y=(0,a.W)(f),C=(0,a.W)(g),w=(0,l.useRef)(null),O=(0,u.e)(t,e=>h(e)),_=(0,l.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,l.useEffect)(()=>{if(r){function e(e){if(_.paused||!D)return;let t=e.target;D.contains(t)?w.current=t:m(w.current,{select:!0})}function t(e){if(_.paused||!D)return;let t=e.relatedTarget;null===t||D.contains(t)||m(w.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;for(let n of e)n.removedNodes.length>0&&!(null!=D&&D.contains(t))&&m(D)});return D&&n.observe(D,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,D,_.paused]),(0,l.useEffect)(()=>{if(D){E.add(_);let e=document.activeElement,t=D.contains(e);if(!t){let t=new CustomEvent(s,d);D.addEventListener(s,y),D.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(p(D).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(D))}return()=>{D.removeEventListener(s,y),setTimeout(()=>{let t=new CustomEvent(c,d);D.addEventListener(c,C),D.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),D.removeEventListener(c,C),E.remove(_)},0)}}},[D,y,C,_]);let R=(0,l.useCallback)(e=>{if(!n&&!r||_.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,l]=function(e){let t=p(e),n=v(t,e),r=v(t.reverse(),e);return[n,r]}(t),u=r&&l;u?e.shiftKey||o!==l?e.shiftKey&&o===r&&(e.preventDefault(),n&&m(l,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,_.paused]);return(0,l.createElement)(i.WV.div,(0,o.Z)({tabIndex:-1},b,{ref:O,onKeyDown:R}))});function p(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function v(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let E=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}}}]);