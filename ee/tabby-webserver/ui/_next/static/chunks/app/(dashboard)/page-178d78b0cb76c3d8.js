(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[130],{7404:function(e,t,n){"use strict";n.d(t,{j:function(){return a}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.flat(1/0).filter(Boolean).join(" ")},a=(e,t)=>n=>{var a;if((null==t?void 0:t.variants)==null)return s(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:l,defaultVariants:i}=t,o=Object.keys(l).map(e=>{let t=null==n?void 0:n[e],s=null==i?void 0:i[e];if(null===t)return null;let a=r(t)||r(s);return l[e][a]}),c=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),d=null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:n,className:r,...s}=t;return Object.entries(s).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...c}[t]):({...i,...c})[t]===n})?[...e,n,r]:e},[]);return s(e,o,d,null==n?void 0:n.class,null==n?void 0:n.className)}},89853:function(e,t,n){Promise.resolve().then(n.bind(n,37333))},37333:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(57437),s=n(2265),a=n(58835),l=n(13287),i=n(7820),o=n(93023),c=n(86110),d=n(84168),u=n(51908),f=n(66672),m=n(33555),x=n(88809),p=n(12609);let h="community-dialog-shown";function g(){let{status:e}=(0,x.kP)(),[t,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{"authenticated"!==e||localStorage.getItem(h)||(n(!0),localStorage.setItem(h,"true"))},[e]),(0,r.jsx)(p.Vq,{open:t,onOpenChange:n,children:(0,r.jsxs)(p.cZ,{children:[(0,r.jsxs)(p.fK,{className:"gap-3",children:[(0,r.jsx)(p.$N,{children:"Join the Tabby community"}),(0,r.jsx)(p.Be,{children:"Connect with other contributors building Tabby. Share knowledge, get help, and contribute to the open-source project."})]}),(0,r.jsx)(p.cN,{className:"sm:justify-start",children:(0,r.jsxs)("a",{target:"_blank",href:"https://join.slack.com/t/tabbycommunity/shared_invite/zt-1xeiddizp-bciR2RtFTaJ37RBxr8VxpA",className:(0,o.d)(),children:[(0,r.jsx)(d.gx,{className:"-ml-2 h-8 w-8"}),"Join us on Slack"]})})]})})}function b(){return(0,r.jsxs)("div",{className:"p-4 lg:p-16",children:[(0,r.jsx)(N,{}),(0,r.jsx)(g,{})]})}let j=(0,a.BX)("\n  query MeQuery {\n    me {\n      authToken\n    }\n  }\n"),v=(0,a.BX)("\n  mutation ResetUserAuthToken {\n    resetUserAuthToken\n  }\n");function N(){let{data:e}=(0,l.Q)(),{data:t,mutate:n}=(0,i.J9)(j),[a,x]=(0,s.useState)("");(0,s.useEffect)(()=>{x(new URL(window.location.href).origin)},[]);let{onSubmit:p}=(0,i.bi)(v,{onSuccess:()=>n()});if(e&&t)return(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Ol,{children:(0,r.jsx)(c.ll,{children:"Getting Started"})}),(0,r.jsxs)(c.aY,{className:"flex flex-col gap-4",children:[(0,r.jsx)(f._,{children:"Endpoint URL"}),(0,r.jsxs)("span",{className:"flex items-center gap-1",children:[(0,r.jsx)(u.I,{value:a,className:"max-w-[320px]"}),(0,r.jsx)(m.q,{value:a})]}),(0,r.jsx)(f._,{children:"Token"}),(0,r.jsxs)("span",{className:"flex items-center gap-1",children:[(0,r.jsx)(u.I,{className:"max-w-[320px] font-mono text-red-600",value:t.me.authToken}),(0,r.jsx)(o.z,{title:"Rotate",size:"icon",variant:"hover-destructive",onClick:()=>p(),children:(0,r.jsx)(d.TE,{})}),(0,r.jsx)(m.q,{value:t.me.authToken})]})]}),(0,r.jsx)(c.eW,{children:(0,r.jsxs)("span",{children:["Use informations above for IDE extensions / plugins configuration, see"," ",(0,r.jsx)("a",{className:"underline",target:"_blank",href:"https://tabby.tabbyml.com/docs/extensions/configurations#server",children:"documentation website"})," ","for details"]})})]})}},33555:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var r=n(57437);n(2265);var s=n(77723),a=n(93023),l=n(84168);function i(e){let{className:t,value:n,...i}=e,{isCopied:o,copyToClipboard:c}=(0,s.m)({timeout:2e3});return n?(0,r.jsxs)(a.z,{variant:"ghost",size:"icon",className:t,onClick:()=>{o||c(n)},...i,children:[o?(0,r.jsx)(l.NO,{className:"text-green-600"}):(0,r.jsx)(l.vU,{}),(0,r.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},86110:function(e,t,n){"use strict";n.d(t,{Ol:function(){return i},Zb:function(){return l},aY:function(){return d},eW:function(){return u},ll:function(){return o}});var r=n(57437),s=n(2265),a=n(39311);let l=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...s})});l.displayName="Card";let i=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",n),...s})});i.displayName="CardHeader";let o=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("h3",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",n),...s})});o.displayName="CardTitle";let c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("p",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",n),...s})});c.displayName="CardDescription";let d=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,a.cn)("p-6 pt-0",n),...s})});d.displayName="CardContent";let u=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,a.cn)("flex items-center p-6 pt-0",n),...s})});u.displayName="CardFooter"},12609:function(e,t,n){"use strict";n.d(t,{$N:function(){return x},Be:function(){return p},Vq:function(){return o},cN:function(){return m},cZ:function(){return u},fK:function(){return f}});var r=n(57437),s=n(2265),a=n(25555),l=n(39311),i=n(84168);let o=a.fC;a.xz;let c=e=>{let{className:t,children:n,...s}=e;return(0,r.jsx)(a.h_,{className:(0,l.cn)(t),...s,children:(0,r.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center sm:items-center",children:n})})};c.displayName=a.h_.displayName;let d=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.aV,{ref:t,className:(0,l.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",n),...s})});d.displayName=a.aV.displayName;let u=s.forwardRef((e,t)=>{let{className:n,children:s,...o}=e;return(0,r.jsxs)(c,{children:[(0,r.jsx)(d,{}),(0,r.jsxs)(a.VY,{ref:t,className:(0,l.cn)("fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-sm animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",n),...o,children:[s,(0,r.jsxs)(a.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(i.bM,{}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=a.VY.displayName;let f=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};f.displayName="DialogHeader";let m=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n})};m.displayName="DialogFooter";let x=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",n),...s})});x.displayName=a.Dx.displayName;let p=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.dk,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",n),...s})});p.displayName=a.dk.displayName},51908:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var r=n(57437),s=n(2265),a=n(39311);let l=s.forwardRef((e,t)=>{let{className:n,type:s,...l}=e;return(0,r.jsx)("input",{type:s,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...l})});l.displayName="Input"},66672:function(e,t,n){"use strict";n.d(t,{_:function(){return c}});var r=n(57437),s=n(2265),a=n(36743),l=n(7404),i=n(39311);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.f,{ref:t,className:(0,i.cn)(o(),n),...s})});c.displayName=a.f.displayName},77723:function(e,t,n){"use strict";n.d(t,{m:function(){return s}});var r=n(2265);function s(e){let{timeout:t=2e3}=e,[n,s]=r.useState(!1);return{isCopied:n,copyToClipboard:e=>{var n;(null===(n=navigator.clipboard)||void 0===n?void 0:n.writeText)&&e&&navigator.clipboard.writeText(e).then(()=>{s(!0),setTimeout(()=>{s(!1)},t)})}}}},13287:function(e,t,n){"use strict";n.d(t,{Q:function(){return l}});var r=n(30713),s=n(1592),a=n(88809);function l(){return(0,r.ZP)((0,a.X0)("/v1/health"),s.Z)}},1592:function(e,t,n){"use strict";function r(e){let[t,n]=e,r=new Headers;return r.append("authorization","Bearer ".concat(n)),fetch(t,{headers:r}).then(e=>e.json())}n.d(t,{Z:function(){return r}})},36743:function(e,t,n){"use strict";n.d(t,{f:function(){return i}});var r=n(13428),s=n(2265),a=n(9381);let l=(0,s.forwardRef)((e,t)=>(0,s.createElement)(a.WV.label,(0,r.Z)({},e,{ref:t,onMouseDown:t=>{var n;null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),i=l}},function(e){e.O(0,[320,629,555,787,894,971,864,744],function(){return e(e.s=89853)}),_N_E=e.O()}]);