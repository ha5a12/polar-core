"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8567],{98567:function(e,t,n){n.d(t,{VY:function(){return S},fC:function(){return B},xz:function(){return A},zt:function(){return H}});var r=n(13428),o=n(2265),i=n(85744),l=n(42210),a=n(56989),u=n(74278),c=n(20966),s=n(13412),p=(n(52730),n(85606)),d=n(9381),f=n(67256),g=n(73763),h=n(8281);let[y,v]=(0,a.b)("Tooltip",[s.D7]),b=(0,s.D7)(),m="tooltip.open",[x,w]=y("TooltipProvider"),E="Tooltip",[C,T]=y(E),k="TooltipTrigger",_=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,...a}=e,u=T(k,n),c=w(k,n),p=b(n),f=(0,o.useRef)(null),g=(0,l.e)(t,f,u.onTriggerChange),h=(0,o.useRef)(!1),y=(0,o.useRef)(!1),v=(0,o.useCallback)(()=>h.current=!1,[]);return(0,o.useEffect)(()=>()=>document.removeEventListener("pointerup",v),[v]),(0,o.createElement)(s.ee,(0,r.Z)({asChild:!0},p),(0,o.createElement)(d.WV.button,(0,r.Z)({"aria-describedby":u.open?u.contentId:void 0,"data-state":u.stateAttribute},a,{ref:g,onPointerMove:(0,i.M)(e.onPointerMove,e=>{"touch"===e.pointerType||y.current||c.isPointerInTransitRef.current||(u.onTriggerEnter(),y.current=!0)}),onPointerLeave:(0,i.M)(e.onPointerLeave,()=>{u.onTriggerLeave(),y.current=!1}),onPointerDown:(0,i.M)(e.onPointerDown,()=>{h.current=!0,document.addEventListener("pointerup",v,{once:!0})}),onFocus:(0,i.M)(e.onFocus,()=>{h.current||u.onOpen()}),onBlur:(0,i.M)(e.onBlur,u.onClose),onClick:(0,i.M)(e.onClick,u.onClose)})))}),[D,M]=y("TooltipPortal",{forceMount:void 0}),R="TooltipContent",L=(0,o.forwardRef)((e,t)=>{let n=M(R,e.__scopeTooltip),{forceMount:i=n.forceMount,side:l="top",...a}=e,u=T(R,e.__scopeTooltip);return(0,o.createElement)(p.z,{present:i||u.open},u.disableHoverableContent?(0,o.createElement)(Z,(0,r.Z)({side:l},a,{ref:t})):(0,o.createElement)(P,(0,r.Z)({side:l},a,{ref:t})))}),P=(0,o.forwardRef)((e,t)=>{let n=T(R,e.__scopeTooltip),i=w(R,e.__scopeTooltip),a=(0,o.useRef)(null),u=(0,l.e)(t,a),[c,s]=(0,o.useState)(null),{trigger:p,onClose:d}=n,f=a.current,{onPointerInTransitChange:g}=i,h=(0,o.useCallback)(()=>{s(null),g(!1)},[g]),y=(0,o.useCallback)((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect()),i=function(e,t,n=5){let r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),l=function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect()),a=function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...i,...l]);s(a),g(!0)},[g]);return(0,o.useEffect)(()=>()=>h(),[h]),(0,o.useEffect)(()=>{if(p&&f){let e=e=>y(e,f),t=e=>y(e,p);return p.addEventListener("pointerleave",e),f.addEventListener("pointerleave",t),()=>{p.removeEventListener("pointerleave",e),f.removeEventListener("pointerleave",t)}}},[p,f,y,h]),(0,o.useEffect)(()=>{if(c){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==p?void 0:p.contains(t))||(null==f?void 0:f.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let l=t[e].x,a=t[e].y,u=t[i].x,c=t[i].y,s=a>r!=c>r&&n<(u-l)*(r-a)/(c-a)+l;s&&(o=!o)}return o}(n,c);r?h():o&&(h(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[p,f,c,d,h]),(0,o.createElement)(Z,(0,r.Z)({},e,{ref:u}))}),[O,I]=y(E,{isInside:!1}),Z=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,children:i,"aria-label":l,onEscapeKeyDown:a,onPointerDownOutside:c,...p}=e,d=T(R,n),g=b(n),{onClose:y}=d;return(0,o.useEffect)(()=>(document.addEventListener(m,y),()=>document.removeEventListener(m,y)),[y]),(0,o.useEffect)(()=>{if(d.trigger){let e=e=>{let t=e.target;null!=t&&t.contains(d.trigger)&&y()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,y]),(0,o.createElement)(u.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:e=>e.preventDefault(),onDismiss:y},(0,o.createElement)(s.VY,(0,r.Z)({"data-state":d.stateAttribute},g,p,{ref:t,style:{...p.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),(0,o.createElement)(f.A4,null,i),(0,o.createElement)(O,{scope:n,isInside:!0},(0,o.createElement)(h.f,{id:d.contentId,role:"tooltip"},l||i))))}),H=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:l}=e,[a,u]=(0,o.useState)(!0),c=(0,o.useRef)(!1),s=(0,o.useRef)(0);return(0,o.useEffect)(()=>{let e=s.current;return()=>window.clearTimeout(e)},[]),(0,o.createElement)(x,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:(0,o.useCallback)(()=>{window.clearTimeout(s.current),u(!1)},[]),onClose:(0,o.useCallback)(()=>{window.clearTimeout(s.current),s.current=window.setTimeout(()=>u(!0),r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:(0,o.useCallback)(e=>{c.current=e},[]),disableHoverableContent:i},l)},B=e=>{let{__scopeTooltip:t,children:n,open:r,defaultOpen:i=!1,onOpenChange:l,disableHoverableContent:a,delayDuration:u}=e,p=w(E,e.__scopeTooltip),d=b(t),[f,h]=(0,o.useState)(null),y=(0,c.M)(),v=(0,o.useRef)(0),x=null!=a?a:p.disableHoverableContent,T=null!=u?u:p.delayDuration,k=(0,o.useRef)(!1),[_=!1,D]=(0,g.T)({prop:r,defaultProp:i,onChange:e=>{e?(p.onOpen(),document.dispatchEvent(new CustomEvent(m))):p.onClose(),null==l||l(e)}}),M=(0,o.useMemo)(()=>_?k.current?"delayed-open":"instant-open":"closed",[_]),R=(0,o.useCallback)(()=>{window.clearTimeout(v.current),k.current=!1,D(!0)},[D]),L=(0,o.useCallback)(()=>{window.clearTimeout(v.current),D(!1)},[D]),P=(0,o.useCallback)(()=>{window.clearTimeout(v.current),v.current=window.setTimeout(()=>{k.current=!0,D(!0)},T)},[T,D]);return(0,o.useEffect)(()=>()=>window.clearTimeout(v.current),[]),(0,o.createElement)(s.fC,d,(0,o.createElement)(C,{scope:t,contentId:y,open:_,stateAttribute:M,trigger:f,onTriggerChange:h,onTriggerEnter:(0,o.useCallback)(()=>{p.isOpenDelayed?P():R()},[p.isOpenDelayed,P,R]),onTriggerLeave:(0,o.useCallback)(()=>{x?L():window.clearTimeout(v.current)},[L,x]),onOpen:R,onClose:L,disableHoverableContent:x},n))},A=_,S=L},8281:function(e,t,n){n.d(t,{T:function(){return l},f:function(){return a}});var r=n(13428),o=n(2265),i=n(9381);let l=(0,o.forwardRef)((e,t)=>(0,o.createElement)(i.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),a=l}}]);