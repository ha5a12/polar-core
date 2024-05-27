"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{41827:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(95380);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},83126:function(e,t,r){r.d(t,{mY:function(){return ed}});var n=/[\\\/_+.#"@\[\(\{&]/,l=/[\\\/_+.#"@\[\(\{&]/g,o=/[\s-]/,a=/[\s-]/g;function u(e){return e.toLowerCase().replace(a," ")}var i=r(13428),c=r(2265),d=r(85744),s=r(42210),f=r(56989),v=r(20966),p=r(73763),m=r(74278),g=r(52759),h=r(52730),b=r(85606),E=r(9381),w=r(31244),y=r(17552),k=r(85859),R=r(67256);let C="Dialog",[S,M]=(0,f.b)(C),[A,D]=S(C),I="DialogPortal",[x,_]=S(I,{forceMount:void 0}),F="DialogOverlay",O=(0,c.forwardRef)((e,t)=>{let r=_(F,e.__scopeDialog),{forceMount:n=r.forceMount,...l}=e,o=D(F,e.__scopeDialog);return o.modal?(0,c.createElement)(b.z,{present:n||o.open},(0,c.createElement)(P,(0,i.Z)({},l,{ref:t}))):null}),P=(0,c.forwardRef)((e,t)=>{let{__scopeDialog:r,...n}=e,l=D(F,r);return(0,c.createElement)(y.Z,{as:R.g7,allowPinchZoom:!0,shards:[l.contentRef]},(0,c.createElement)(E.WV.div,(0,i.Z)({"data-state":q(l.open)},n,{ref:t,style:{pointerEvents:"auto",...n.style}})))}),V="DialogContent",Z=(0,c.forwardRef)((e,t)=>{let r=_(V,e.__scopeDialog),{forceMount:n=r.forceMount,...l}=e,o=D(V,e.__scopeDialog);return(0,c.createElement)(b.z,{present:n||o.open},o.modal?(0,c.createElement)(W,(0,i.Z)({},l,{ref:t})):(0,c.createElement)($,(0,i.Z)({},l,{ref:t})))}),W=(0,c.forwardRef)((e,t)=>{let r=D(V,e.__scopeDialog),n=(0,c.useRef)(null),l=(0,s.e)(t,r.contentRef,n);return(0,c.useEffect)(()=>{let e=n.current;if(e)return(0,k.Ry)(e)},[]),(0,c.createElement)(T,(0,i.Z)({},e,{ref:l,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,d.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=r.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,d.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,r=0===t.button&&!0===t.ctrlKey,n=2===t.button||r;n&&e.preventDefault()}),onFocusOutside:(0,d.M)(e.onFocusOutside,e=>e.preventDefault())}))}),$=(0,c.forwardRef)((e,t)=>{let r=D(V,e.__scopeDialog),n=(0,c.useRef)(!1),l=(0,c.useRef)(!1);return(0,c.createElement)(T,(0,i.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,a;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(n.current||null===(a=r.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),n.current=!1,l.current=!1},onInteractOutside:t=>{var o,a;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(n.current=!0,"pointerdown"!==t.detail.originalEvent.type||(l.current=!0));let u=t.target,i=null===(a=r.triggerRef.current)||void 0===a?void 0:a.contains(u);i&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&l.current&&t.preventDefault()}}))}),T=(0,c.forwardRef)((e,t)=>{let{__scopeDialog:r,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:o,...a}=e,u=D(V,r),d=(0,c.useRef)(null),f=(0,s.e)(t,d);return(0,w.EW)(),(0,c.createElement)(c.Fragment,null,(0,c.createElement)(g.M,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:l,onUnmountAutoFocus:o},(0,c.createElement)(m.XB,(0,i.Z)({role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":q(u.open)},a,{ref:f,onDismiss:()=>u.onOpenChange(!1)}))),!1)});function q(e){return e?"open":"closed"}let[K,N]=(0,f.k)("DialogTitleWarning",{contentName:V,titleName:"DialogTitle",docsSlug:"dialog"}),L=e=>{let{__scopeDialog:t,children:r,open:n,defaultOpen:l,onOpenChange:o,modal:a=!0}=e,u=(0,c.useRef)(null),i=(0,c.useRef)(null),[d=!1,s]=(0,p.T)({prop:n,defaultProp:l,onChange:o});return(0,c.createElement)(A,{scope:t,triggerRef:u,contentRef:i,contentId:(0,v.M)(),titleId:(0,v.M)(),descriptionId:(0,v.M)(),open:d,onOpenChange:s,onOpenToggle:(0,c.useCallback)(()=>s(e=>!e),[s]),modal:a},r)},j=e=>{let{__scopeDialog:t,forceMount:r,children:n,container:l}=e,o=D(I,t);return(0,c.createElement)(x,{scope:t,forceMount:r},c.Children.map(n,e=>(0,c.createElement)(b.z,{present:r||o.open},(0,c.createElement)(h.h,{asChild:!0,container:l},e))))};var z='[cmdk-group=""]',U='[cmdk-group-items=""]',B='[cmdk-item=""]',H=`${B}:not([aria-disabled="true"])`,G="cmdk-item-select",X="data-value",Y=(e,t,r)=>{var i;return i=e,function e(t,r,u,i,c,d,s){if(d===r.length)return c===t.length?1:.99;var f=`${c},${d}`;if(void 0!==s[f])return s[f];for(var v,p,m,g,h=i.charAt(d),b=u.indexOf(h,c),E=0;b>=0;)(v=e(t,r,u,i,b+1,d+1,s))>E&&(b===c?v*=1:n.test(t.charAt(b-1))?(v*=.8,(m=t.slice(c,b-1).match(l))&&c>0&&(v*=Math.pow(.999,m.length))):o.test(t.charAt(b-1))?(v*=.9,(g=t.slice(c,b-1).match(a))&&c>0&&(v*=Math.pow(.999,g.length))):(v*=.17,c>0&&(v*=Math.pow(.999,b-c))),t.charAt(b)!==r.charAt(d)&&(v*=.9999)),(v<.1&&u.charAt(b-1)===i.charAt(d+1)||i.charAt(d+1)===i.charAt(d)&&u.charAt(b-1)!==i.charAt(d))&&.1*(p=e(t,r,u,i,b+1,d+2,s))>v&&(v=.1*p),v>E&&(E=v),b=u.indexOf(h,b+1);return s[f]=E,E}(i=r&&r.length>0?`${i+" "+r.join(" ")}`:i,t,u(i),u(t),0,0,{})},J=c.createContext(void 0),Q=()=>c.useContext(J),ee=c.createContext(void 0),et=()=>c.useContext(ee),er=c.createContext(void 0),en=c.forwardRef((e,t)=>{let r=ev(()=>{var t,r;return{search:"",value:null!=(r=null!=(t=e.value)?t:e.defaultValue)?r:"",filtered:{count:0,items:new Map,groups:new Set}}}),n=ev(()=>new Set),l=ev(()=>new Map),o=ev(()=>new Map),a=ev(()=>new Set),u=es(e),{label:i,children:d,value:s,onValueChange:f,filter:v,shouldFilter:p,loop:m,disablePointerSelection:g=!1,vimBindings:h=!0,...b}=e,w=c.useId(),y=c.useId(),k=c.useId(),R=c.useRef(null),C=eh();ef(()=>{if(void 0!==s){let e=s.trim();r.current.value=e,S.emit()}},[s]),ef(()=>{C(6,_)},[]);let S=c.useMemo(()=>({subscribe:e=>(a.current.add(e),()=>a.current.delete(e)),snapshot:()=>r.current,setState:(e,t,n)=>{var l,o,a;if(!Object.is(r.current[e],t)){if(r.current[e]=t,"search"===e)x(),D(),C(1,I);else if("value"===e&&(n||C(5,_),(null==(l=u.current)?void 0:l.value)!==void 0)){let e=null!=t?t:"";null==(a=(o=u.current).onValueChange)||a.call(o,e);return}S.emit()}},emit:()=>{a.current.forEach(e=>e())}}),[]),M=c.useMemo(()=>({value:(e,t,n)=>{var l;t!==(null==(l=o.current.get(e))?void 0:l.value)&&(o.current.set(e,{value:t,keywords:n}),r.current.filtered.items.set(e,A(t,n)),C(2,()=>{D(),S.emit()}))},item:(e,t)=>(n.current.add(e),t&&(l.current.has(t)?l.current.get(t).add(e):l.current.set(t,new Set([e]))),C(3,()=>{x(),D(),r.current.value||I(),S.emit()}),()=>{o.current.delete(e),n.current.delete(e),r.current.filtered.items.delete(e);let t=F();C(4,()=>{x(),(null==t?void 0:t.getAttribute("id"))===e&&I(),S.emit()})}),group:e=>(l.current.has(e)||l.current.set(e,new Set),()=>{o.current.delete(e),l.current.delete(e)}),filter:()=>u.current.shouldFilter,label:i||e["aria-label"],disablePointerSelection:g,listId:w,inputId:k,labelId:y,listInnerRef:R}),[]);function A(e,t){var n,l;let o=null!=(l=null==(n=u.current)?void 0:n.filter)?l:Y;return e?o(e,r.current.search,t):0}function D(){if(!r.current.search||!1===u.current.shouldFilter)return;let e=r.current.filtered.items,t=[];r.current.filtered.groups.forEach(r=>{let n=l.current.get(r),o=0;n.forEach(t=>{o=Math.max(e.get(t),o)}),t.push([r,o])});let n=R.current;O().sort((t,r)=>{var n,l;let o=t.getAttribute("id"),a=r.getAttribute("id");return(null!=(n=e.get(a))?n:0)-(null!=(l=e.get(o))?l:0)}).forEach(e=>{let t=e.closest(U);t?t.appendChild(e.parentElement===t?e:e.closest(`${U} > *`)):n.appendChild(e.parentElement===n?e:e.closest(`${U} > *`))}),t.sort((e,t)=>t[1]-e[1]).forEach(e=>{let t=R.current.querySelector(`${z}[${X}="${encodeURIComponent(e[0])}"]`);null==t||t.parentElement.appendChild(t)})}function I(){let e=O().find(e=>"true"!==e.getAttribute("aria-disabled")),t=null==e?void 0:e.getAttribute(X);S.setState("value",t||void 0)}function x(){var e,t,a,i;if(!r.current.search||!1===u.current.shouldFilter){r.current.filtered.count=n.current.size;return}r.current.filtered.groups=new Set;let c=0;for(let l of n.current){let n=A(null!=(t=null==(e=o.current.get(l))?void 0:e.value)?t:"",null!=(i=null==(a=o.current.get(l))?void 0:a.keywords)?i:[]);r.current.filtered.items.set(l,n),n>0&&c++}for(let[e,t]of l.current)for(let n of t)if(r.current.filtered.items.get(n)>0){r.current.filtered.groups.add(e);break}r.current.filtered.count=c}function _(){var e,t,r;let n=F();n&&((null==(e=n.parentElement)?void 0:e.firstChild)===n&&(null==(r=null==(t=n.closest(z))?void 0:t.querySelector('[cmdk-group-heading=""]'))||r.scrollIntoView({block:"nearest"})),n.scrollIntoView({block:"nearest"}))}function F(){var e;return null==(e=R.current)?void 0:e.querySelector(`${B}[aria-selected="true"]`)}function O(){var e;return Array.from(null==(e=R.current)?void 0:e.querySelectorAll(H))}function P(e){let t=O()[e];t&&S.setState("value",t.getAttribute(X))}function V(e){var t;let r=F(),n=O(),l=n.findIndex(e=>e===r),o=n[l+e];null!=(t=u.current)&&t.loop&&(o=l+e<0?n[n.length-1]:l+e===n.length?n[0]:n[l+e]),o&&S.setState("value",o.getAttribute(X))}function Z(e){let t=F(),r=null==t?void 0:t.closest(z),n;for(;r&&!n;)n=null==(r=e>0?function(e,t){let r=e.nextElementSibling;for(;r;){if(r.matches(t))return r;r=r.nextElementSibling}}(r,z):function(e,t){let r=e.previousElementSibling;for(;r;){if(r.matches(t))return r;r=r.previousElementSibling}}(r,z))?void 0:r.querySelector(H);n?S.setState("value",n.getAttribute(X)):V(e)}let W=()=>P(O().length-1),$=e=>{e.preventDefault(),e.metaKey?W():e.altKey?Z(1):V(1)},T=e=>{e.preventDefault(),e.metaKey?P(0):e.altKey?Z(-1):V(-1)};return c.createElement(E.WV.div,{ref:t,tabIndex:-1,...b,"cmdk-root":"",onKeyDown:e=>{var t;if(null==(t=b.onKeyDown)||t.call(b,e),!e.defaultPrevented)switch(e.key){case"n":case"j":h&&e.ctrlKey&&$(e);break;case"ArrowDown":$(e);break;case"p":case"k":h&&e.ctrlKey&&T(e);break;case"ArrowUp":T(e);break;case"Home":e.preventDefault(),P(0);break;case"End":e.preventDefault(),W();break;case"Enter":if(!e.nativeEvent.isComposing&&229!==e.keyCode){e.preventDefault();let t=F();if(t){let e=new Event(G);t.dispatchEvent(e)}}}}},c.createElement("label",{"cmdk-label":"",htmlFor:M.inputId,id:M.labelId,style:eE},i),eb(e,e=>c.createElement(ee.Provider,{value:S},c.createElement(J.Provider,{value:M},e))))}),el=c.forwardRef((e,t)=>{var r,n;let l=c.useId(),o=c.useRef(null),a=c.useContext(er),u=Q(),i=es(e),d=null!=(n=null==(r=i.current)?void 0:r.forceMount)?n:null==a?void 0:a.forceMount;ef(()=>{if(!d)return u.item(l,null==a?void 0:a.id)},[d]);let s=eg(l,o,[e.value,e.children,o],e.keywords),f=et(),v=em(e=>e.value&&e.value===s.current),p=em(e=>!!d||!1===u.filter()||!e.search||e.filtered.items.get(l)>0);function m(){var e,t;g(),null==(t=(e=i.current).onSelect)||t.call(e,s.current)}function g(){f.setState("value",s.current,!0)}if(c.useEffect(()=>{let t=o.current;if(!(!t||e.disabled))return t.addEventListener(G,m),()=>t.removeEventListener(G,m)},[p,e.onSelect,e.disabled]),!p)return null;let{disabled:h,value:b,onSelect:w,forceMount:y,keywords:k,...R}=e;return c.createElement(E.WV.div,{ref:ep([o,t]),...R,id:l,"cmdk-item":"",role:"option","aria-disabled":!!h,"aria-selected":!!v,"data-disabled":!!h,"data-selected":!!v,onPointerMove:h||u.disablePointerSelection?void 0:g,onClick:h?void 0:m},e.children)}),eo=c.forwardRef((e,t)=>{let{heading:r,children:n,forceMount:l,...o}=e,a=c.useId(),u=c.useRef(null),i=c.useRef(null),d=c.useId(),s=Q(),f=em(e=>!!l||!1===s.filter()||!e.search||e.filtered.groups.has(a));ef(()=>s.group(a),[]),eg(a,u,[e.value,e.heading,i]);let v=c.useMemo(()=>({id:a,forceMount:l}),[l]);return c.createElement(E.WV.div,{ref:ep([u,t]),...o,"cmdk-group":"",role:"presentation",hidden:!f||void 0},r&&c.createElement("div",{ref:i,"cmdk-group-heading":"","aria-hidden":!0,id:d},r),eb(e,e=>c.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?d:void 0},c.createElement(er.Provider,{value:v},e))))}),ea=c.forwardRef((e,t)=>{let{alwaysRender:r,...n}=e,l=c.useRef(null),o=em(e=>!e.search);return r||o?c.createElement(E.WV.div,{ref:ep([l,t]),...n,"cmdk-separator":"",role:"separator"}):null}),eu=c.forwardRef((e,t)=>{let{onValueChange:r,...n}=e,l=null!=e.value,o=et(),a=em(e=>e.search),u=em(e=>e.value),i=Q(),d=c.useMemo(()=>{var e;let t=null==(e=i.listInnerRef.current)?void 0:e.querySelector(`${B}[${X}="${encodeURIComponent(u)}"]`);return null==t?void 0:t.getAttribute("id")},[]);return c.useEffect(()=>{null!=e.value&&o.setState("search",e.value)},[e.value]),c.createElement(E.WV.input,{ref:t,...n,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":i.listId,"aria-labelledby":i.labelId,"aria-activedescendant":d,id:i.inputId,type:"text",value:l?e.value:a,onChange:e=>{l||o.setState("search",e.target.value),null==r||r(e.target.value)}})}),ei=c.forwardRef((e,t)=>{let{children:r,label:n="Suggestions",...l}=e,o=c.useRef(null),a=c.useRef(null),u=Q();return c.useEffect(()=>{if(a.current&&o.current){let e=a.current,t=o.current,r,n=new ResizeObserver(()=>{r=requestAnimationFrame(()=>{let r=e.offsetHeight;t.style.setProperty("--cmdk-list-height",r.toFixed(1)+"px")})});return n.observe(e),()=>{cancelAnimationFrame(r),n.unobserve(e)}}},[]),c.createElement(E.WV.div,{ref:ep([o,t]),...l,"cmdk-list":"",role:"listbox","aria-label":n,id:u.listId},eb(e,e=>c.createElement("div",{ref:ep([a,u.listInnerRef]),"cmdk-list-sizer":""},e)))}),ec=c.forwardRef((e,t)=>{let{open:r,onOpenChange:n,overlayClassName:l,contentClassName:o,container:a,...u}=e;return c.createElement(L,{open:r,onOpenChange:n},c.createElement(j,{container:a},c.createElement(O,{"cmdk-overlay":"",className:l}),c.createElement(Z,{"aria-label":e.label,"cmdk-dialog":"",className:o},c.createElement(en,{ref:t,...u}))))}),ed=Object.assign(en,{List:ei,Item:el,Input:eu,Group:eo,Separator:ea,Dialog:ec,Empty:c.forwardRef((e,t)=>em(e=>0===e.filtered.count)?c.createElement(E.WV.div,{ref:t,...e,"cmdk-empty":"",role:"presentation"}):null),Loading:c.forwardRef((e,t)=>{let{progress:r,children:n,label:l="Loading...",...o}=e;return c.createElement(E.WV.div,{ref:t,...o,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":l},eb(e,e=>c.createElement("div",{"aria-hidden":!0},e)))})});function es(e){let t=c.useRef(e);return ef(()=>{t.current=e}),t}var ef="undefined"==typeof window?c.useEffect:c.useLayoutEffect;function ev(e){let t=c.useRef();return void 0===t.current&&(t.current=e()),t}function ep(e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}function em(e){let t=et(),r=()=>e(t.snapshot());return c.useSyncExternalStore(t.subscribe,r,r)}function eg(e,t,r,n=[]){let l=c.useRef(),o=Q();return ef(()=>{var a;let u=(()=>{var e;for(let t of r){if("string"==typeof t)return t.trim();if("object"==typeof t&&"current"in t)return t.current?null==(e=t.current.textContent)?void 0:e.trim():l.current}})(),i=n.map(e=>e.trim());o.value(e,u,i),null==(a=t.current)||a.setAttribute(X,u),l.current=u}),l}var eh=()=>{let[e,t]=c.useState(),r=ev(()=>new Map);return ef(()=>{r.current.forEach(e=>e()),r.current=new Map},[e]),(e,n)=>{r.current.set(e,n),t({})}};function eb({asChild:e,children:t},r){let n;return e&&c.isValidElement(t)?c.cloneElement("function"==typeof(n=t.type)?n(t.props):"render"in n?n.render(t.props):t,{ref:t.ref},r(t.props.children)):r(t)}var eE={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"}},50976:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(64164),l=r(90440),o=function(){return l.Z.Date.now()},a=r(4091),u=Math.max,i=Math.min,c=function(e,t,r){var l,c,d,s,f,v,p=0,m=!1,g=!1,h=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var r=l,n=c;return l=c=void 0,p=t,s=e.apply(n,r)}function E(e){var r=e-v,n=e-p;return void 0===v||r>=t||r<0||g&&n>=d}function w(){var e,r,n,l=o();if(E(l))return y(l);f=setTimeout(w,(e=l-v,r=l-p,n=t-e,g?i(n,d-r):n))}function y(e){return(f=void 0,h&&l)?b(e):(l=c=void 0,s)}function k(){var e,r=o(),n=E(r);if(l=arguments,c=this,v=r,n){if(void 0===f)return p=e=v,f=setTimeout(w,t),m?b(e):s;if(g)return clearTimeout(f),f=setTimeout(w,t),b(v)}return void 0===f&&(f=setTimeout(w,t)),s}return t=(0,a.Z)(t)||0,(0,n.Z)(r)&&(m=!!r.leading,d=(g="maxWait"in r)?u((0,a.Z)(r.maxWait)||0,t):d,h="trailing"in r?!!r.trailing:h),k.cancel=function(){void 0!==f&&clearTimeout(f),p=0,l=v=c=f=void 0},k.flush=function(){return void 0===f?s:y(o())},k}}}]);