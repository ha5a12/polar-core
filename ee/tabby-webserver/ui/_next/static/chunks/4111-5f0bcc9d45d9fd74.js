(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4111],{96964:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(21024),o=r(68533),l=o._(r(2265)),i=n._(r(54887)),a=n._(r(29232)),u=r(33655),s=r(6921),c=r(98143);r(7707);let d=r(67650),f=n._(r(85324)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,n,o,l){let i=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===i)return;e["data-loaded-src"]=i;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function h(e){let[t,r]=l.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:i,width:a,decoding:u,className:s,style:c,fetchPriority:d,placeholder:f,loading:p,unoptimized:g,fill:v,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:y,setShowAltText:S,onLoad:E,onError:_,...C}=e;return l.default.createElement("img",{...C,...h(d),loading:p,width:a,height:i,decoding:u,"data-nimg":v?"fill":"1",className:s,style:c,sizes:o,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&m(e,f,b,w,y,g))},[r,f,b,w,y,_,g,t]),onLoad:e=>{let t=e.currentTarget;m(t,f,b,w,y,g)},onError:e=>{S(!0),"empty"!==f&&y(!0),_&&_(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&i.default.preload?(i.default.preload(r.src,n),null):l.default.createElement(a.default,null,l.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let b=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(d.RouterContext),n=(0,l.useContext)(c.ImageConfigContext),o=(0,l.useMemo)(()=>{let e=p||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:i,onLoadingComplete:a}=e,m=(0,l.useRef)(i);(0,l.useEffect)(()=>{m.current=i},[i]);let h=(0,l.useRef)(a);(0,l.useEffect)(()=>{h.current=a},[a]);let[b,w]=(0,l.useState)(!1),[y,S]=(0,l.useState)(!1),{props:E,meta:_}=(0,u.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:b,showAltText:y});return l.default.createElement(l.default.Fragment,null,l.default.createElement(g,{...E,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:S,ref:t}),_.priority?l.default.createElement(v,{isAppRouter:!r,imgAttributes:E}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},56948:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return l}});let n=r(21024),o=n._(r(2265)),l=o.default.createContext({})},28827:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},33655:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(7707);let n=r(48932),o=r(6921);function l(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,u,s,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:h,quality:g,width:v,height:b,fill:w=!1,style:y,onLoad:S,onLoadingComplete:E,placeholder:_="empty",blurDataURL:C,fetchPriority:P,layout:x,objectFit:R,objectPosition:T,lazyBoundary:O,lazyRoot:z,...M}=e,{imgConf:A,showAltText:j,blurComplete:L,defaultLoader:D}=t,I=A||o.imageConfigDefault;if("allSizes"in I)a=I;else{let e=[...I.deviceSizes,...I.imageSizes].sort((e,t)=>e-t),t=I.deviceSizes.sort((e,t)=>e-t);a={...I,allSizes:e,deviceSizes:t}}let W=M.loader||D;delete M.loader,delete M.srcSet;let k="__next_img_default"in W;if(k){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=W;W=t=>{let{config:r,...n}=t;return e(n)}}if(x){"fill"===x&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[x];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[x];t&&!d&&(d=t)}let U="",N=i(v),H=i(b);if("object"==typeof(r=c)&&(l(r)||void 0!==r.src)){let e=l(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,s=e.blurHeight,C=C||e.blurDataURL,U=e.src,!w){if(N||H){if(N&&!H){let t=N/e.width;H=Math.round(e.height*t)}else if(!N&&H){let t=H/e.height;N=Math.round(e.width*t)}}else N=e.width,H=e.height}}let Z=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:U)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,Z=!1),a.unoptimized&&(f=!0),k&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(P="high");let Y=i(g),V=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:T}:{},j?{}:{color:"transparent"},y),F=L||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:N,heightInt:H,blurWidth:u,blurHeight:s,blurDataURL:C||"",objectFit:V.objectFit})+'")':'url("'+_+'")',B=F?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:F}:{},X=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:l,sizes:i,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let l=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:l,kind:"x"}}(t,o,i),c=u.length-1;return{sizes:i||"w"!==s?i:"100vw",srcSet:u.map((e,n)=>a({config:t,src:r,quality:l,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:a({config:t,src:r,quality:l,width:u[c]})}}({config:a,src:c,unoptimized:f,width:N,quality:Y,sizes:d,loader:W}),G={...M,loading:Z?"lazy":m,fetchPriority:P,width:N,height:H,decoding:"async",className:h,style:{...V,...B},sizes:X.sizes,srcSet:X.srcSet,src:X.src},q={unoptimized:f,priority:p,placeholder:_,fill:w};return{props:G,meta:q}}},29232:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return m}});let n=r(21024),o=r(68533),l=o._(r(2265)),i=n._(r(65184)),a=r(56948),u=r(43305),s=r(28827);function c(e){void 0===e&&(e=!1);let t=[l.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(l.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(7707);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let l=!0,i=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){i=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?l=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?l=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!i)&&r.has(e)?l=!1:(r.add(e),n[t]=r)}}}}return l}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,l.useContext)(a.AmpStateContext),n=(0,l.useContext)(u.HeadManagerContext);return l.default.createElement(i.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48932:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:l,objectFit:i}=e,a=n?40*n:t,u=o?40*o:r,s=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},98143:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let n=r(21024),o=n._(r(2265)),l=r(6921),i=o.default.createContext(l.imageConfigDefault)},6921:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},62597:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},unstable_getImgProps:function(){return u}});let n=r(21024),o=r(33655),l=r(7707),i=r(96964),a=n._(r(85324)),u=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=i.Image},85324:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},67650:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return l}});let n=r(21024),o=n._(r(2265)),l=o.default.createContext(null)},65184:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(68533),o=n._(r(2265)),l=o.useLayoutEffect,i=o.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function n(){if(t&&t.mountedInstances){let n=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}return l(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),l(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7707:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},16691:function(e,t,r){e.exports=r(62597)},33018:function(e,t,r){"use strict";var n=r(61289);function o(){}function l(){}l.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,l,i){if(i!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:o};return r.PropTypes=r,r}},74275:function(e,t,r){e.exports=r(33018)()},61289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},65400:function(e,t,r){"use strict";r.d(t,{gm:function(){return l}});var n=r(2265);let o=(0,n.createContext)(void 0);function l(e){let t=(0,n.useContext)(o);return e||t||"ltr"}},17283:function(e,t,r){"use strict";r.d(t,{Ns:function(){return X},fC:function(){return F},gb:function(){return S},q4:function(){return A},l_:function(){return B}});var n=r(13428),o=r(2265),l=r(9381),i=r(85606),a=r(56989),u=r(42210),s=r(16459),c=r(65400),d=r(51030),f=r(85744);let p="ScrollArea",[m,h]=(0,a.b)(p),[g,v]=m(p),b=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,type:i="hover",dir:a,scrollHideDelay:s=600,...d}=e,[f,p]=(0,o.useState)(null),[m,h]=(0,o.useState)(null),[v,b]=(0,o.useState)(null),[w,y]=(0,o.useState)(null),[S,E]=(0,o.useState)(null),[_,C]=(0,o.useState)(0),[P,x]=(0,o.useState)(0),[R,T]=(0,o.useState)(!1),[O,z]=(0,o.useState)(!1),M=(0,u.e)(t,e=>p(e)),A=(0,c.gm)(a);return(0,o.createElement)(g,{scope:r,type:i,dir:A,scrollHideDelay:s,scrollArea:f,viewport:m,onViewportChange:h,content:v,onContentChange:b,scrollbarX:w,onScrollbarXChange:y,scrollbarXEnabled:R,onScrollbarXEnabledChange:T,scrollbarY:S,onScrollbarYChange:E,scrollbarYEnabled:O,onScrollbarYEnabledChange:z,onCornerWidthChange:C,onCornerHeightChange:x},(0,o.createElement)(l.WV.div,(0,n.Z)({dir:A},d,{ref:M,style:{position:"relative","--radix-scroll-area-corner-width":_+"px","--radix-scroll-area-corner-height":P+"px",...e.style}})))}),w=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,children:i,...a}=e,s=v("ScrollAreaViewport",r),c=(0,o.useRef)(null),d=(0,u.e)(t,c,s.onViewportChange);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(l.WV.div,(0,n.Z)({"data-radix-scroll-area-viewport":""},a,{ref:d,style:{overflowX:s.scrollbarXEnabled?"scroll":"hidden",overflowY:s.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,o.createElement)("div",{ref:s.onContentChange,style:{minWidth:"100%",display:"table"}},i)))}),y="ScrollAreaScrollbar",S=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,i=v(y,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:u}=i,s="horizontal"===e.orientation;return(0,o.useEffect)(()=>(s?a(!0):u(!0),()=>{s?a(!1):u(!1)}),[s,a,u]),"hover"===i.type?(0,o.createElement)(E,(0,n.Z)({},l,{ref:t,forceMount:r})):"scroll"===i.type?(0,o.createElement)(_,(0,n.Z)({},l,{ref:t,forceMount:r})):"auto"===i.type?(0,o.createElement)(C,(0,n.Z)({},l,{ref:t,forceMount:r})):"always"===i.type?(0,o.createElement)(P,(0,n.Z)({},l,{ref:t})):null}),E=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=v(y,e.__scopeScrollArea),[u,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=a.scrollArea,t=0;if(e){let r=()=>{window.clearTimeout(t),s(!0)},n=()=>{t=window.setTimeout(()=>s(!1),a.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}},[a.scrollArea,a.scrollHideDelay]),(0,o.createElement)(i.z,{present:r||u},(0,o.createElement)(C,(0,n.Z)({"data-state":u?"visible":"hidden"},l,{ref:t})))}),_=(0,o.forwardRef)((e,t)=>{var r;let{forceMount:l,...a}=e,u=v(y,e.__scopeScrollArea),s="horizontal"===e.orientation,c=Y(()=>p("SCROLL_END"),100),[d,p]=(r={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,o.useReducer)((e,t)=>{let n=r[e][t];return null!=n?n:e},"hidden"));return(0,o.useEffect)(()=>{if("idle"===d){let e=window.setTimeout(()=>p("HIDE"),u.scrollHideDelay);return()=>window.clearTimeout(e)}},[d,u.scrollHideDelay,p]),(0,o.useEffect)(()=>{let e=u.viewport,t=s?"scrollLeft":"scrollTop";if(e){let r=e[t],n=()=>{let n=e[t],o=r!==n;o&&(p("SCROLL"),c()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[u.viewport,s,p,c]),(0,o.createElement)(i.z,{present:l||"hidden"!==d},(0,o.createElement)(P,(0,n.Z)({"data-state":"hidden"===d?"hidden":"visible"},a,{ref:t,onPointerEnter:(0,f.M)(e.onPointerEnter,()=>p("POINTER_ENTER")),onPointerLeave:(0,f.M)(e.onPointerLeave,()=>p("POINTER_LEAVE"))})))}),C=(0,o.forwardRef)((e,t)=>{let r=v(y,e.__scopeScrollArea),{forceMount:l,...a}=e,[u,s]=(0,o.useState)(!1),c="horizontal"===e.orientation,d=Y(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;s(c?e:t)}},10);return V(r.viewport,d),V(r.content,d),(0,o.createElement)(i.z,{present:l||u},(0,o.createElement)(P,(0,n.Z)({"data-state":u?"visible":"hidden"},a,{ref:t})))}),P=(0,o.forwardRef)((e,t)=>{let{orientation:r="vertical",...l}=e,i=v(y,e.__scopeScrollArea),a=(0,o.useRef)(null),u=(0,o.useRef)(0),[s,c]=(0,o.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=k(s.viewport,s.content),f={...l,sizes:s,onSizesChange:c,hasThumb:!!(d>0&&d<1),onThumbChange:e=>a.current=e,onThumbPointerUp:()=>u.current=0,onThumbPointerDown:e=>u.current=e};function p(e,t){return function(e,t,r,n="ltr"){let o=U(r),l=t||o/2,i=r.scrollbar.paddingStart+l,a=r.scrollbar.size-r.scrollbar.paddingEnd-(o-l),u=r.content-r.viewport,s=H([i,a],"ltr"===n?[0,u]:[-1*u,0]);return s(e)}(e,u.current,s,t)}return"horizontal"===r?(0,o.createElement)(x,(0,n.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=i.viewport.scrollLeft,t=N(e,s,i.dir);a.current.style.transform=`translate3d(${t}px, 0, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollLeft=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollLeft=p(e,i.dir))}})):"vertical"===r?(0,o.createElement)(R,(0,n.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=i.viewport.scrollTop,t=N(e,s);a.current.style.transform=`translate3d(0, ${t}px, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollTop=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollTop=p(e))}})):null}),x=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:l,...i}=e,a=v(y,e.__scopeScrollArea),[s,c]=(0,o.useState)(),d=(0,o.useRef)(null),f=(0,u.e)(t,d,a.onScrollbarXChange);return(0,o.useEffect)(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,o.createElement)(z,(0,n.Z)({"data-orientation":"horizontal"},i,{ref:f,sizes:r,style:{bottom:0,left:"rtl"===a.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===a.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":U(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(a.viewport){let n=a.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{d.current&&a.viewport&&s&&l({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:W(s.paddingLeft),paddingEnd:W(s.paddingRight)}})}}))}),R=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:l,...i}=e,a=v(y,e.__scopeScrollArea),[s,c]=(0,o.useState)(),d=(0,o.useRef)(null),f=(0,u.e)(t,d,a.onScrollbarYChange);return(0,o.useEffect)(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,o.createElement)(z,(0,n.Z)({"data-orientation":"vertical"},i,{ref:f,sizes:r,style:{top:0,right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":U(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(a.viewport){let n=a.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{d.current&&a.viewport&&s&&l({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:W(s.paddingTop),paddingEnd:W(s.paddingBottom)}})}}))}),[T,O]=m(y),z=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,sizes:i,hasThumb:a,onThumbChange:c,onThumbPointerUp:d,onThumbPointerDown:p,onThumbPositionChange:m,onDragScroll:h,onWheelScroll:g,onResize:b,...w}=e,S=v(y,r),[E,_]=(0,o.useState)(null),C=(0,u.e)(t,e=>_(e)),P=(0,o.useRef)(null),x=(0,o.useRef)(""),R=S.viewport,O=i.content-i.viewport,z=(0,s.W)(g),M=(0,s.W)(m),A=Y(b,10);function j(e){if(P.current){let t=e.clientX-P.current.left,r=e.clientY-P.current.top;h({x:t,y:r})}}return(0,o.useEffect)(()=>{let e=e=>{let t=e.target,r=null==E?void 0:E.contains(t);r&&z(e,O)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[R,E,O,z]),(0,o.useEffect)(M,[i,M]),V(E,A),V(S.content,A),(0,o.createElement)(T,{scope:r,scrollbar:E,hasThumb:a,onThumbChange:(0,s.W)(c),onThumbPointerUp:(0,s.W)(d),onThumbPositionChange:M,onThumbPointerDown:(0,s.W)(p)},(0,o.createElement)(l.WV.div,(0,n.Z)({},w,{ref:C,style:{position:"absolute",...w.style},onPointerDown:(0,f.M)(e.onPointerDown,e=>{if(0===e.button){let t=e.target;t.setPointerCapture(e.pointerId),P.current=E.getBoundingClientRect(),x.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",S.viewport&&(S.viewport.style.scrollBehavior="auto"),j(e)}}),onPointerMove:(0,f.M)(e.onPointerMove,j),onPointerUp:(0,f.M)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=x.current,S.viewport&&(S.viewport.style.scrollBehavior=""),P.current=null})})))}),M="ScrollAreaThumb",A=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=O(M,e.__scopeScrollArea);return(0,o.createElement)(i.z,{present:r||a.hasThumb},(0,o.createElement)(j,(0,n.Z)({ref:t},l)))}),j=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,style:i,...a}=e,s=v(M,r),c=O(M,r),{onThumbPositionChange:d}=c,p=(0,u.e)(t,e=>c.onThumbChange(e)),m=(0,o.useRef)(),h=Y(()=>{m.current&&(m.current(),m.current=void 0)},100);return(0,o.useEffect)(()=>{let e=s.viewport;if(e){let t=()=>{if(h(),!m.current){let t=Z(e,d);m.current=t,d()}};return d(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[s.viewport,h,d]),(0,o.createElement)(l.WV.div,(0,n.Z)({"data-state":c.hasThumb?"visible":"hidden"},a,{ref:p,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...i},onPointerDownCapture:(0,f.M)(e.onPointerDownCapture,e=>{let t=e.target,r=t.getBoundingClientRect(),n=e.clientX-r.left,o=e.clientY-r.top;c.onThumbPointerDown({x:n,y:o})}),onPointerUp:(0,f.M)(e.onPointerUp,c.onThumbPointerUp)}))}),L="ScrollAreaCorner",D=(0,o.forwardRef)((e,t)=>{let r=v(L,e.__scopeScrollArea),l=!!(r.scrollbarX&&r.scrollbarY),i="scroll"!==r.type&&l;return i?(0,o.createElement)(I,(0,n.Z)({},e,{ref:t})):null}),I=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,...i}=e,a=v(L,r),[u,s]=(0,o.useState)(0),[c,d]=(0,o.useState)(0);return V(a.scrollbarX,()=>{var e;let t=(null===(e=a.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;a.onCornerHeightChange(t),d(t)}),V(a.scrollbarY,()=>{var e;let t=(null===(e=a.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;a.onCornerWidthChange(t),s(t)}),u&&c?(0,o.createElement)(l.WV.div,(0,n.Z)({},i,{ref:t,style:{width:u,height:c,position:"absolute",right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:0,...e.style}})):null});function W(e){return e?parseInt(e,10):0}function k(e,t){let r=e/t;return isNaN(r)?0:r}function U(e){let t=k(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-r)*t;return Math.max(n,18)}function N(e,t,r="ltr"){let n=U(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-o,i=t.content-t.viewport,a="ltr"===r?[0,i]:[-1*i,0],u=function(e,[t,r]){return Math.min(r,Math.max(t,e))}(e,a),s=H([0,i],[0,l-n]);return s(u)}function H(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}let Z=(e,t=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=r.left!==l.left,a=r.top!==l.top;(i||a)&&t(),r=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function Y(e,t){let r=(0,s.W)(e),n=(0,o.useRef)(0);return(0,o.useEffect)(()=>()=>window.clearTimeout(n.current),[]),(0,o.useCallback)(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,t)},[r,t])}function V(e,t){let r=(0,s.W)(t);(0,d.b)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}let F=b,B=w,X=D},89088:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(12805),o=function(){try{var e=(0,n.Z)(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),l=function(e,t,r){"__proto__"==t&&o?o(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},91067:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=Object.prototype.hasOwnProperty,o=function(e,t){return null!=e&&n.call(e,t)},l=r(12494),i=function(e,t){return null!=e&&(0,l.Z)(e,t,o)}}}]);