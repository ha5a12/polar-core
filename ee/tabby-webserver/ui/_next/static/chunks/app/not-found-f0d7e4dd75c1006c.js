(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9160],{91459:function(e,t,n){Promise.resolve().then(n.bind(n,69579))},68172:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var r=n(36164),s=n(38785);function a(e){let{children:t,fallback:n=null}=e;return(0,s.U)()?(0,r.jsx)(r.Fragment,{children:t}):(0,r.jsx)(r.Fragment,{children:n})}},48537:function(e,t,n){"use strict";n.d(t,{q:function(){return l}});var r=n(36164);n(3546);var s=n(28312),a=n(31458),i=n(81565);function l(e){let{className:t,value:n,onCopyContent:l,text:o,...c}=e,{isCopied:d,copyToClipboard:u}=(0,s.m)({timeout:2e3,onCopyContent:l});return n?(0,r.jsxs)(a.z,{variant:"ghost",size:o?"default":"icon",className:t,onClick:()=>{d||u(n)},...c,children:[d?(0,r.jsx)(i.IconCheck,{className:"text-green-600"}):(0,r.jsx)(i.IconCopy,{}),o&&(0,r.jsx)("span",{children:o}),!o&&(0,r.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},30601:function(e,t,n){"use strict";n.d(t,{Hb:function(){return m},wt:function(){return d},xc:function(){return x},yo:function(){return f}});var r=n(36164),s=n(3546),a=n(74630),i=n(36327),l=n(80605),o=n(57288),c=n(81565);let d="3.5rem",u=s.createContext({}),f=e=>{let{children:t}=e,n=(0,l.UA)(),[i,o]=s.useState(!1);return s.useEffect(()=>{let e=window.self!==window.top;e||(0,a.Z)(n)||o(n)},[n]),(0,r.jsx)(u.Provider,{value:{isShowDemoBanner:i,setIsShowDemoBanner:o},children:t})};function m(){let{isShowDemoBanner:e,setIsShowDemoBanner:t}=s.useContext(u);return[e,t]}function x(){let[e,t]=m(),{data:n}=(0,i.Z)("https://api.github.com/repos/TabbyML/tabby",e=>fetch(e).then(e=>e.json()));return(0,r.jsxs)("div",{className:(0,o.cn)("flex items-center justify-between bg-primary px-4 text-primary-foreground transition-[opacity,height] md:px-5",{"opacity-100 pointer-events-auto":e,"opacity-0 pointer-events-none":!e}),style:e?{height:d}:{height:0},children:[(0,r.jsxs)("a",{href:"https://links.tabbyml.com/schedule-a-demo",target:"_blank",className:"flex items-center gap-x-2 text-xs font-semibold underline md:text-sm",children:[(0,r.jsx)("span",{children:"\uD83D\uDCC6"}),(0,r.jsx)("span",{children:"Book a 30-minute product demo."})]}),e&&(0,r.jsx)("img",{referrerPolicy:"no-referrer-when-downgrade",src:"https://static.scarf.sh/a.png?x-pxid=b1d0308a-b3c5-425a-972a-378d883a2bca"}),(0,r.jsxs)("div",{className:"flex items-center gap-x-4 md:gap-x-8",children:[(0,r.jsxs)("a",{href:"https://github.com/TabbyML/tabby",target:"_blank",className:"flex items-center transition-all hover:opacity-70",children:[(0,r.jsx)(c.IconGithub,{}),(0,r.jsxs)("div",{className:"ml-2 hidden md:block",children:[(0,r.jsx)("p",{className:"text-xs font-semibold",children:"TabbyML/tabby"}),(0,r.jsxs)("div",{className:(0,o.cn)("flex items-center text-xs transition-all",{"h-4 opacity-70":n,"h-0 opacity-0":!n}),children:[(0,r.jsx)(c.IconStar,{className:"mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==n?void 0:n.stargazers_count}),(0,r.jsx)(c.IconGitFork,{className:"ml-2 mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==n?void 0:n.forks_count})]})]})]}),(0,r.jsx)(c.IconClose,{className:"cursor-pointer transition-all hover:opacity-70",onClick:()=>t(!1)})]})]})}},69579:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(36164),s=n(42891),a=n.n(s),i=n(70652),l=n.n(i),o=n(83332),c=n(76531),d=n(57288),u=n(68172),f=n(30601),m=n(63743),x=n(31458),h=n(52569),p=n(7449);function g(){let[e]=(0,f.Hb)(),t=e?{height:"calc(100vh - ".concat(f.wt,")")}:{height:"100vh"};return(0,r.jsxs)("div",{style:t,className:"flex flex-col",children:[(0,r.jsx)(v,{}),(0,r.jsxs)("div",{className:"flex flex-1 flex-col items-center justify-center",children:[(0,r.jsx)("h2",{className:"mt-4 text-6xl font-bold tracking-tight text-foreground sm:text-7xl",children:"404"}),(0,r.jsx)("p",{className:"mt-4 text-lg text-muted-foreground",children:"Oops, it looks like the page you're looking for doesn't exist."}),(0,r.jsx)(l(),{className:(0,d.cn)("mt-6",(0,x.d)()),href:"/",children:"Home"})]})]})}function v(){return(0,r.jsxs)("header",{className:"flex h-16 items-center justify-between border-b px-4 lg:px-10",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsxs)(l(),{href:"/",children:[(0,r.jsx)(a(),{src:c.Z,alt:"logo",width:128,className:"dark:hidden"}),(0,r.jsx)(a(),{src:o.Z,alt:"logo",width:96,className:"hidden dark:block"})]})}),(0,r.jsxs)("div",{className:"flex items-center gap-6",children:[(0,r.jsx)(u.q,{children:(0,r.jsx)(m.T,{})}),(0,r.jsx)(p.Z,{showSetting:!0,children:(0,r.jsx)(h.SQ,{className:"h-10 w-10 border"})})]})]})}},63743:function(e,t,n){"use strict";n.d(t,{T:function(){return o}});var r=n(36164),s=n(3546),a=n(9010),i=n(31458),l=n(81565);function o(e){let{className:t}=e,{setTheme:n,theme:o}=(0,a.X)(),[c,d]=s.useTransition();return(0,r.jsxs)(i.z,{variant:"ghost",size:"icon",onClick:()=>{d(()=>{n("light"===o?"dark":"light")})},className:t,children:["dark"===o?(0,r.jsx)(l.IconMoon,{className:"transition-all"}):(0,r.jsx)(l.IconSun,{className:"transition-all"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},79972:function(e,t,n){"use strict";n.d(t,{Ol:function(){return l},Zb:function(){return i},aY:function(){return d},eW:function(){return u},ll:function(){return o}});var r=n(36164),s=n(3546),a=n(57288);let i=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...s})});i.displayName="Card";let l=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",n),...s})});l.displayName="CardHeader";let o=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("h3",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",n),...s})});o.displayName="CardTitle";let c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("p",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",n),...s})});c.displayName="CardDescription";let d=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,a.cn)("p-6 pt-0",n),...s})});d.displayName="CardContent";let u=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,a.cn)("flex items-center p-6 pt-0",n),...s})});u.displayName="CardFooter"},62202:function(e,t,n){"use strict";n.d(t,{$F:function(){return o},AW:function(){return u},Ju:function(){return x},VD:function(){return h},Xi:function(){return f},_x:function(){return c},h_:function(){return l},qB:function(){return m}});var r=n(36164),s=n(3546),a=n(19148),i=n(57288);let l=a.fC,o=a.xz;a.ZA,a.Uv,a.Tr;let c=a.Ee;a.wU;let d=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.tu,{ref:t,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...s})});d.displayName=a.tu.displayName;let u=s.forwardRef((e,t)=>{let{className:n,sideOffset:s=4,...l}=e;return(0,r.jsx)(a.Uv,{children:(0,r.jsx)(a.VY,{ref:t,sideOffset:s,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...l})})});u.displayName=a.VY.displayName;let f=s.forwardRef((e,t)=>{let{className:n,inset:s,...l}=e;return(0,r.jsx)(a.ck,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",n),...l})});f.displayName=a.ck.displayName;let m=s.forwardRef((e,t)=>{let{className:n,inset:s,...l}=e;return(0,r.jsx)(a.Rk,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",n),...l})});m.displayName=a.Rk.displayName;let x=s.forwardRef((e,t)=>{let{className:n,inset:s,...l}=e;return(0,r.jsx)(a.__,{ref:t,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",n),...l})});x.displayName=a.__.displayName;let h=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.Z0,{ref:t,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",n),...s})});h.displayName=a.Z0.displayName},82394:function(e,t,n){"use strict";n.d(t,{I:function(){return i}});var r=n(36164),s=n(3546),a=n(57288);let i=s.forwardRef((e,t)=>{let{className:n,type:s,...i}=e;return(0,r.jsx)("input",{type:s,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...i})});i.displayName="Input"},5266:function(e,t,n){"use strict";n.d(t,{_:function(){return c}});var r=n(36164),s=n(3546),a=n(90893),i=n(14375),l=n(57288);let o=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.f,{ref:t,className:(0,l.cn)(o(),n),...s})});c.displayName=a.f.displayName},3448:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var r=n(36164),s=n(57288);function a(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-border",t),...n})}},29:function(e,t,n){"use strict";n.d(t,{_v:function(){return d},aJ:function(){return c},pn:function(){return l},u:function(){return o}});var r=n(36164),s=n(3546),a=n(44421),i=n(57288);let l=a.zt,o=a.fC,c=a.xz;a.h_;let d=s.forwardRef((e,t)=>{let{className:n,sideOffset:s=4,...l}=e;return(0,r.jsx)(a.VY,{ref:t,sideOffset:s,className:(0,i.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...l})});d.displayName=a.VY.displayName},52569:function(e,t,n){"use strict";n.d(t,{SQ:function(){return N},Yt:function(){return j},nY:function(){return b}});var r=n(36164),s=n(3546),a=n(87782),i=n(21454),l=n(36327),o=n(98454),c=n(3765),d=n(57288),u=n(66612);let f=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(u.fC,{ref:t,className:(0,d.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",n),...s})});f.displayName=u.fC.displayName;let m=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(u.Ee,{ref:t,className:(0,d.cn)("aspect-square h-full w-full",n),...s})});m.displayName=u.Ee.displayName;let x=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(u.NY,{ref:t,className:(0,d.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",n),...s})});x.displayName=u.NY.displayName;var h=n(3448),p=n(30410).lW;let g="not_found",v=new Set,b=e=>{v.delete(e),(0,i.JG)("/avatar/".concat(e))};function j(e){var t;let{user:n,className:i,fallback:o}=e,u=null==n?void 0:n.id,b=u?"/avatar/".concat(u):null,{data:j,isLoading:N,error:w}=(0,l.Z)(b,e=>{if(!(!u||v.has(u)))return(0,c.Z)(e,{responseFormatter:async e=>{let t=await e.blob(),n=p.from(await t.arrayBuffer());return"data:image/png;base64,".concat(n.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(g)}})}),y=s.useMemo(()=>{if(null==n?void 0:n.email)return(0,a.B)(n.email)},[null==n?void 0:n.email]);return N?(0,r.jsx)(h.O,{className:(0,d.cn)("h-16 w-16 rounded-full",i)}):((null==w?void 0:w.message)===g&&u&&v.add(u),j||y||!o)?!j&&y?(0,r.jsx)(a.Z,{className:(0,d.cn)("h-16 w-16",i),...y}):(0,r.jsxs)(f,{className:(0,d.cn)("h-16 w-16",i),children:[(0,r.jsx)(m,{src:j,alt:null==n?void 0:n.email,className:"object-cover"}),(0,r.jsx)(x,{children:null==n?void 0:null===(t=n.email)||void 0===t?void 0:t.substring(0,2)})]}):o}function N(e){let[{data:t}]=(0,o.P)();return(0,r.jsx)(j,{user:null==t?void 0:t.me,...e})}},7449:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(36164),s=n(3546),a=n(70652),i=n.n(a),l=n(11978),o=n(71480),c=n(43240),d=n(98454),u=n(70526),f=n(91302),m=n(11634),x=n(57288),h=n(31458),p=n(79972),g=n(62202),v=n(81565),b=n(82394),j=n(5266),N=n(29),w=n(48537),y=n(52569);let k=(0,c.BX)("\n  mutation ResetUserAuthToken {\n    resetUserAuthToken\n  }\n");function A(e){let{children:t,showHome:n=!0,showSetting:a=!1,beforeRouteChange:i}=e,o=(0,l.useRouter)(),c=(0,f.QJ)(),[{data:u},m]=(0,d.P)(),x=null==u?void 0:u.me,[h,p]=s.useState(!1),b=async e=>{e.preventDefault(),p(!0),await c(),p(!1)},j=(e,t)=>{null==i||i(e),t?o.replace(e):o.push(e)};if(x)return(0,r.jsxs)(g.h_,{modal:!1,children:[(0,r.jsx)(g.$F,{children:t}),(0,r.jsxs)(g.AW,{side:"bottom",align:"end",className:"relative overflow-y-auto p-0",style:{maxHeight:"calc(100vh - 6rem)"},children:[(0,r.jsxs)("div",{className:"p-4 pt-0",children:[(0,r.jsxs)("div",{className:"sticky top-0 z-10 flex items-center gap-2 bg-popover pb-2 pt-4",children:[(0,r.jsx)(y.Yt,{user:x,className:"h-12 w-12 shrink-0 border-[2px] border-white"}),(0,r.jsxs)("div",{className:"space-y-1",children:[x.name&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Ju,{className:"p-0",children:x.name}),(0,r.jsx)(g.Ju,{className:"p-0 text-sm font-normal text-muted-foreground",children:x.email})]}),!x.name&&(0,r.jsx)(g.Ju,{children:x.email})]})]}),(0,r.jsx)(C,{className:"mt-2",user:x,reexecuteQuery:m})]}),(0,r.jsx)(g.VD,{className:"mb-1 mt-0"}),(0,r.jsxs)("div",{className:"px-1.5",children:[n&&(0,r.jsxs)(g.Xi,{onClick:()=>j("/"),className:"cursor-pointer py-2 pl-3",children:[(0,r.jsx)(v.IconHome,{}),(0,r.jsx)("span",{className:"ml-2",children:"Home"})]}),a&&(0,r.jsxs)(g.Xi,{onClick:()=>j("/profile"),className:"cursor-pointer py-2 pl-3",children:[(0,r.jsx)(v.IconGear,{}),(0,r.jsx)("span",{className:"ml-2",children:"Settings"})]}),(0,r.jsxs)(g.Xi,{onClick:()=>window.open("/files"),className:"cursor-pointer py-2 pl-3",children:[(0,r.jsx)(v.IconCode,{}),(0,r.jsx)("span",{className:"ml-2",children:"Code Browser"})]}),(0,r.jsxs)(g.Xi,{onClick:()=>window.open("/api"),className:"cursor-pointer py-2 pl-3",children:[(0,r.jsx)(v.IconBackpack,{}),(0,r.jsx)("span",{className:"ml-2",children:"API Docs"})]})]}),(0,r.jsx)(g.VD,{}),(0,r.jsxs)(g.Xi,{disabled:h,onClick:b,className:"mx-1.5 mb-1.5 cursor-pointer py-2 pl-3",children:[(0,r.jsx)(v.IconLogout,{}),(0,r.jsx)("span",{className:"ml-2",children:"Sign out"}),h&&(0,r.jsx)(v.IconSpinner,{className:"ml-1"})]})]})]})}function C(e){let{className:t,user:n,reexecuteQuery:s}=e,a=(0,u.j)(),i=(0,m.Db)(k,{onCompleted:()=>s()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:(0,x.cn)("w-[268px] rounded-xl bg-[#FBF5ED] p-4 dark:bg-[#3D382F]",t),children:[(0,r.jsxs)(p.aY,{className:"p-0",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)(j._,{className:"text-xs text-muted-foreground",children:"Endpoint URL"}),(0,r.jsxs)("span",{className:"group relative",children:[(0,r.jsx)(b.I,{value:a,onChange:o.Z,className:"border-none bg-[#FEFCF8] group-focus-within:pr-12 group-hover:pr-12 dark:bg-[#4F483B]"}),(0,r.jsx)(w.q,{value:a,className:(0,x.cn)("absolute right-1 top-0.5 hidden group-focus-within:flex group-hover:flex")})]})]}),(0,r.jsxs)("div",{className:"mt-4 flex flex-col gap-2",children:[(0,r.jsx)(j._,{className:"text-xs text-muted-foreground",children:"Token"}),(0,r.jsxs)("span",{className:"group relative",children:[(0,r.jsx)(b.I,{value:n.authToken,onChange:o.Z,className:"border-none bg-[#FEFCF8] group-focus-within:pr-20 group-hover:pr-20 dark:bg-[#4F483B]"}),(0,r.jsxs)("div",{className:"absolute right-1 top-0.5 hidden items-center gap-1 group-focus-within:flex group-hover:flex",children:[(0,r.jsx)(w.q,{value:n.authToken}),(0,r.jsx)(h.z,{title:"Rotate",size:"icon",variant:"hover-destructive",onClick:()=>i(),children:(0,r.jsx)(v.IconRotate,{})})]})]})]})]}),(0,r.jsx)(p.eW,{className:"mt-3 p-0 text-xs text-muted-foreground",children:(0,r.jsxs)("span",{children:["Use information above for IDE extensions / plugins configuration, see"," ",(0,r.jsx)("a",{className:"text-link underline",target:"_blank",href:"https://tabby.tabbyml.com/docs/extensions/configurations#server",children:"documentation website"})," ","for details"]})})]}),(0,r.jsxs)("div",{className:"mb-6 mt-3 flex gap-x-4 lg:mb-0",children:[(0,r.jsx)(R,{href:"https://marketplace.visualstudio.com/items?itemName=TabbyML.vscode-tabby",name:"Visual Studio Code",icon:(0,r.jsx)(v.IconVSCode,{className:"h-6 w-6"})}),(0,r.jsx)(R,{href:"https://plugins.jetbrains.com/plugin/22379-tabby",name:"JetBrains",icon:(0,r.jsx)(v.IconJetBrains,{className:"h-6 w-6"})})]})]})}function R(e){let{href:t,name:n,icon:s}=e;return(0,r.jsxs)(N.u,{children:[(0,r.jsx)(N.aJ,{children:(0,r.jsx)(i(),{href:t,className:"flex h-8 w-8 items-center justify-center rounded-lg text-[#030302]",target:"_blank",children:s})}),(0,r.jsx)(N._v,{children:(0,r.jsx)("p",{children:n})})]})}},28312:function(e,t,n){"use strict";n.d(t,{m:function(){return l}});var r=n(3546),s=n(61200),a=n.n(s),i=n(2578);function l(e){let{timeout:t=2e3,onError:n,onCopyContent:s}=e,[l,o]=r.useState(!1),c=()=>{o(!0),setTimeout(()=>{o(!1)},t)},d=e=>{if("function"==typeof n){null==n||n(e);return}i.A.error("Failed to copy.")};return{isCopied:l,copyToClipboard:e=>{var t;if(e){if(s){s(e),c();return}if(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText)navigator.clipboard.writeText(e).then(c).catch(d);else{let t=a()(e);t?c():d()}}}}}},9010:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(28242);function s(){let{theme:e,systemTheme:t,setTheme:n}=(0,r.F)();return{theme:e&&"system"!==e?e:t||"light",setTheme:n,systemTheme:t}}},38785:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(3546);let s=!0;function a(){let[e,t]=r.useState(()=>!s);return r.useEffect(function(){s=!1,t(!0)},[]),e}},98454:function(e,t,n){"use strict";n.d(t,{P:function(){return i}});var r=n(40055),s=n(43240);let a=(0,s.BX)("\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isOwner\n      isPasswordSet\n      name\n    }\n  }\n"),i=()=>(0,r.aM)({query:a})},70526:function(e,t,n){"use strict";n.d(t,{e:function(){return o},j:function(){return c}});var r=n(3546),s=n(40055),a=n(43240),i=n(57288);let l=(0,a.BX)("\n  query NetworkSetting {\n    networkSetting {\n      externalUrl\n    }\n  }\n"),o=e=>(0,s.aM)({query:l,...e}),c=()=>{let[{data:e}]=o(),t=null==e?void 0:e.networkSetting,n=r.useMemo(()=>(null==t?void 0:t.externalUrl)||((0,i.S_)()?new URL(window.location.href).origin:""),[t]);return n}},3765:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(44745),s=n(57778),a=n(79716),i=n(91302),l=n(66794);async function o(e,t){var n;let r=null!==(n=null==t?void 0:t.customFetch)&&void 0!==n?n:window.fetch;if(function(e){var t;if(e.startsWith("/oauth/providers"))return!1;let n=null===(t=(0,l.bW)())||void 0===t?void 0:t.accessToken;if(!n)return!0;try{let{exp:e}=(0,a.o)(n);return(0,l.pw)(e)}catch(e){return!0}}(e))return l.gN.refreshToken(c).then(n=>f(e,t));let s=await r(e,d(t));return 401===s.status?(l.gN.clearAccessToken(),l.gN.refreshToken(c).then(n=>f(e,t))):m(s,t)}async function c(){var e,t;let n=null===(e=(0,l.bW)())||void 0===e?void 0:e.refreshToken;if(!n)return;let r=await u(n);return null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.refreshToken}function d(e){var t;let n=new Headers(null==e?void 0:e.headers);return n.append("authorization","Bearer ".concat(null===(t=(0,l.bW)())||void 0===t?void 0:t.accessToken)),{...e||{},headers:n}}async function u(e){let t=new r.KU({url:"/graphql",requestPolicy:"network-only",exchanges:[r.Ek]}),n=t.createRequestOperation("mutation",(0,s.h)(i.Dp,{refreshToken:e}));return t.executeMutation(n)}function f(e,t){var n;let r=null!==(n=null==t?void 0:t.customFetch)&&void 0!==n?n:window.fetch;return r(e,d(t)).then(e=>m(e,t))}function m(e,t){return(null==e?void 0:e.ok)?(null==t?void 0:t.responseFormatter)?t.responseFormatter(e):(null==t?void 0:t.responseFormat)==="blob"?e.blob():e.json():(null==t?void 0:t.errorHandler)?t.errorHandler(e):void 0}},83332:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo-dark.362a169d.png",height:149,width:395,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAOklEQVR42gXAIQqAMBQA0A+K3eIVHNhEk21Wk5iN4g6w6z9GyBaDZDLr9OH0qD6/4nWHUZLtNqvL0QDmsR1AxwcSfQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},76531:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.526f7cf9.png",height:184,width:607,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASklEQVR4nGPsKQh1f/HshV/PqtNtagrC8p++//rDAgQM//9/ZWJifMZYnRqg9+bVq6iZ51+1SP/5ovH//z8eRgbGbwyMjPxA9n0AMi8g2L1xUkUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}}},function(e){e.O(0,[8415,7430,55,7812,4007,9643,4752,3449,2578,8511,4421,1454,4546,9275,9148,4405,6624,7288,1565,3240,4656,3375,5289,1744],function(){return e(e.s=91459)}),_N_E=e.O()}]);