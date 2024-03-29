(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4303],{86552:function(e,t,n){Promise.resolve().then(n.bind(n,78166))},78166:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var r=n(57437),s=n(86634),a=n(62067),i=n.n(a),l=n(70349),o=n(99238),c=n(25645),d=n(70825),u=n(52373),m=n(2265),f=n(38110),x=n(61865),p=n(71424),h=n(74578),j=n(60106),b=n(12897),v=n(7820),N=n(39311),g=n(87516),y=n(93023),w=n(41315),R=n(84168);let C=m.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("textarea",{className:(0,N.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...s})});C.displayName="Textarea";let k=h.Ry({license:h.Z_()}),S=(0,j.BX)("\n  mutation UploadLicense($license: String!) {\n    uploadLicense(license: $license)\n  }\n"),T=(0,j.BX)("\n  mutation ResetLicense {\n    resetLicense\n  }\n");function O(e){let{className:t,onSuccess:n,canReset:s,...a}=e,i=(0,x.cI)({resolver:(0,f.F)(k)}),l=i.watch("license"),[o,c]=m.useState(!1),[d,u]=m.useState(!1),[h,j]=m.useState(!1),O=(0,b.S)((e,t)=>{c(e),t&&(i.reset({license:""}),p.A.success("License is uploaded"),null==n||n())},500,{leading:!0}),L=(0,b.S)((e,t)=>{j(e),t&&(u(!1),null==n||n())},500,{leading:!0}),z=(0,v.D)(S,{form:i}),D=(0,v.D)(T);return(0,r.jsx)("div",{className:(0,N.cn)(t),...a,children:(0,r.jsx)(w.l0,{...i,children:(0,r.jsxs)("form",{className:"grid gap-6",onSubmit:i.handleSubmit(e=>(O.run(!0),z(e).then(e=>{var t;O.run(!1,null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.uploadLicense)}))),children:[(0,r.jsx)(w.Wi,{control:i.control,name:"license",render:e=>{let{field:t}=e;return(0,r.jsxs)(w.xJ,{children:[(0,r.jsx)(w.NI,{children:(0,r.jsx)(C,{className:"min-h-[200px]",placeholder:"Paste your license here - write only",...t})}),(0,r.jsx)(w.zG,{})]})}}),(0,r.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,r.jsx)("div",{children:(0,r.jsx)(w.zG,{})}),(0,r.jsxs)("div",{className:"flex shrink-0 items-center gap-4",children:[(0,r.jsxs)(g.aR,{open:d,onOpenChange:e=>{h||u(e)},children:[s&&(0,r.jsx)(g.vW,{asChild:!0,children:(0,r.jsx)(y.z,{type:"button",variant:"hover-destructive",children:"Reset"})}),(0,r.jsxs)(g._T,{children:[(0,r.jsxs)(g.fY,{children:[(0,r.jsx)(g.f$,{children:"Are you absolutely sure?"}),(0,r.jsx)(g.yT,{children:"This action cannot be undone. It will reset the current license."})]}),(0,r.jsxs)(g.xo,{children:[(0,r.jsx)(g.le,{children:"Cancel"}),(0,r.jsxs)(g.OL,{className:(0,y.d)({variant:"destructive"}),onClick:e=>{e.preventDefault(),L.run(!0),D().then(e=>{var t,n;let r=null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.resetLicense;L.run(!1,r),(null==e?void 0:e.error)&&p.A.error(null!==(n=e.error.message)&&void 0!==n?n:"reset failed")})},disabled:h,children:[h&&(0,r.jsx)(R.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Yes, reset it"]})]})]})]}),(0,r.jsxs)(y.z,{type:"submit",disabled:o||!l,children:[o&&(0,r.jsx)(R.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Upload License"]})]})]})]})})})}var L=n(32553),z=n(95482);let D=()=>(0,r.jsxs)(L.iA,{className:"border text-center",children:[(0,r.jsx)(L.xD,{children:(0,r.jsxs)(L.SC,{children:[(0,r.jsx)(L.ss,{className:"w-[40%]"}),_.map((e,t)=>{let{name:n,pricing:s,limit:a}=e;return(0,r.jsxs)(L.ss,{className:"w-[20%] text-center",children:[(0,r.jsx)("h1",{className:"py-4 text-2xl font-bold",children:n}),(0,r.jsx)("p",{className:"text-center font-semibold",children:s}),(0,r.jsx)("p",{className:"pb-2 pt-1",children:a})]},t)})]})}),(0,r.jsx)(L.RM,{children:E.map((e,t)=>{let{name:n,features:s}=e;return(0,r.jsx)(I,{name:n,features:s},t)})})]}),I=e=>{let{name:t,features:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(L.SC,{children:(0,r.jsx)(L.pj,{colSpan:4,className:"bg-accent text-left text-accent-foreground",children:t})}),n.map((e,t)=>{let{name:n,community:s,team:a,enterprise:i}=e;return(0,r.jsxs)(L.SC,{children:[(0,r.jsx)(L.pj,{className:"text-left",children:n}),(0,r.jsx)(L.pj,{className:"font-semibold",children:s}),(0,r.jsx)(L.pj,{className:"font-semibold",children:a}),(0,r.jsx)(L.pj,{className:"font-semibold text-primary",children:i})]},t)})]})},_=[{name:"Community",pricing:"$0 per user/month",limit:"Up to 5 users, single node"},{name:"Team",pricing:"$19 per user/month",limit:"Up to 30 users, up to 2 nodes"},{name:"Enterprise",pricing:"Contact Us",limit:"Customized, billed annually"}],A=e=>{let{children:t}=e;return(0,r.jsx)(z.pn,{children:(0,r.jsxs)(z.u,{children:[(0,r.jsx)(z.aJ,{children:(0,r.jsx)(R.IconInfoCircled,{})}),(0,r.jsx)(z._v,{children:(0,r.jsx)("p",{className:"max-w-[320px]",children:t})})]})})},F=e=>{let{name:t,children:n}=e;return(0,r.jsxs)("span",{className:"flex gap-1",children:[t,(0,r.jsx)(A,{children:n})]})},U=(0,r.jsx)(R.IconCheck,{className:"mx-auto"}),E=[{name:"Features",features:[{name:"User count",community:"Up to 5",team:"Up to 30",enterprise:"Unlimited"},{name:"Node count",community:"–",team:"Up to 2",enterprise:"Unlimited"},{name:"Secure Access",community:U,team:U,enterprise:U},{name:(0,r.jsx)(F,{name:"Bring your own LLM",children:"Tabby builds on top of open technologies, allowing customers to bring their own LLM models."}),community:U,team:U,enterprise:U},{name:(0,r.jsx)(F,{name:"Git Providers",children:"Tabby can retrieve the codebase context to enhance responses. Underlying Tabby pulls context from git providers with a code search index. This method enables Tabby to utilize the team's past practices at scale."}),community:U,team:U,enterprise:U},{name:"Admin Controls",community:"–",team:U,enterprise:U},{name:"Toggle IDE / Extensions telemetry",community:"–",team:"–",enterprise:U},{name:"Authentication Domain",community:"–",team:"–",enterprise:U},{name:"Single Sign-On (SSO)",community:"–",team:"–",enterprise:U}]},{name:"Bespoke",features:[{name:"Support",community:"Community",team:"Email",enterprise:"Dedicated Slack channel"},{name:"Roadmap prioritization",community:"–",team:"–",enterprise:U}]}];function Y(){let[{data:e,fetching:t},n]=(0,o.jp)(),s=null==e?void 0:e.license,a=!!(null==s?void 0:s.type)&&s.type!==l.oj.Community;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.b,{className:"mb-8",externalLink:"https://links.tabbyml.com/schedule-a-demo",externalLinkText:"\uD83D\uDCC6 Book a 30-minute product demo",children:"You can upload your Tabby license to unlock team/enterprise features."}),(0,r.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,r.jsx)(d.Z,{loading:t,fallback:(0,r.jsxs)("div",{className:"grid grid-cols-3",children:[(0,r.jsx)(c.O,{className:"h-16 w-[80%]"}),(0,r.jsx)(c.O,{className:"h-16 w-[80%]"}),(0,r.jsx)(c.O,{className:"h-16 w-[80%]"})]}),children:s&&(0,r.jsx)(M,{license:s})}),(0,r.jsx)(O,{onSuccess:()=>{n()},canReset:a}),(0,r.jsx)(D,{})]})]})}function M(e){var t;let{license:n}=e,a=n.expiresAt?i()(n.expiresAt).format("MM/DD/YYYY"):"–",l="".concat(n.seatsUsed," / ").concat(n.seats);return(0,r.jsxs)("div",{className:"grid font-bold lg:grid-cols-3",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-1 text-muted-foreground",children:"Expires at"}),(0,r.jsx)("div",{className:"text-3xl",children:a})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-1 text-muted-foreground",children:"Assigned / Total Seats"}),(0,r.jsx)("div",{className:"text-3xl",children:l})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-1 text-muted-foreground",children:"Current plan"}),(0,r.jsx)("div",{className:"text-3xl text-primary",children:(0,s.Z)(null!==(t=null==n?void 0:n.type)&&void 0!==t?t:"Community")})]})]})}},70825:function(e,t,n){"use strict";var r=n(57437),s=n(2265),a=n(12897),i=n(93111);t.Z=e=>{let{loading:t,fallback:n,delay:l,children:o}=e,[c,d]=s.useState(!t),[u]=(0,a.n)(c,null!=l?l:200);return(s.useEffect(()=>{t||c||d(!0)},[t]),u)?o:n||(0,r.jsx)(i.cg,{})}},93111:function(e,t,n){"use strict";n.d(t,{PF:function(){return o},cg:function(){return i},tB:function(){return l}});var r=n(57437),s=n(39311),a=n(25645);let i=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("space-y-3",t),...n,children:[(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"})]})},l=e=>{let{className:t,...n}=e;return(0,r.jsx)(a.O,{className:(0,s.cn)("h-4 w-full",t),...n})},o=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",t),...n,children:[(0,r.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(a.O,{className:"h-4 w-full"})]})}},52373:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var r=n(57437);n(2265);var s=n(61396),a=n.n(s),i=n(39311),l=n(84168);let o=e=>{let{className:t,externalLink:n,externalLinkText:s="Learn more",children:o}=e;return(0,r.jsx)("div",{className:(0,i.cn)("mb-4 flex items-center gap-4",t),children:(0,r.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[o,!!n&&(0,r.jsxs)(a(),{className:"ml-2 inline-flex cursor-pointer flex-row items-center text-primary hover:underline",href:n,target:"_blank",children:[s,(0,r.jsx)(l.IconExternalLink,{className:"ml-1"})]})]})})}},87516:function(e,t,n){"use strict";n.d(t,{OL:function(){return j},_T:function(){return m},aR:function(){return o},f$:function(){return p},fY:function(){return f},le:function(){return b},vW:function(){return c},xo:function(){return x},yT:function(){return h}});var r=n(57437),s=n(2265),a=n(52506),i=n(39311),l=n(93023);let o=a.fC,c=a.xz,d=e=>{let{className:t,children:n,...s}=e;return(0,r.jsx)(a.h_,{className:(0,i.cn)(t),...s,children:(0,r.jsx)("div",{className:"fixed inset-0 z-50 flex items-end justify-center sm:items-center",children:n})})};d.displayName=a.h_.displayName;let u=s.forwardRef((e,t)=>{let{className:n,children:s,...l}=e;return(0,r.jsx)(a.aV,{className:(0,i.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in",n),...l,ref:t})});u.displayName=a.aV.displayName;let m=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsxs)(d,{children:[(0,r.jsx)(u,{}),(0,r.jsx)(a.VY,{ref:t,className:(0,i.cn)("fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",n),...s})]})});m.displayName=a.VY.displayName;let f=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...n})};f.displayName="AlertDialogHeader";let x=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n})};x.displayName="AlertDialogFooter";let p=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold",n),...s})});p.displayName=a.Dx.displayName;let h=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.dk,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",n),...s})});h.displayName=a.dk.displayName;let j=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.aU,{ref:t,className:(0,i.cn)((0,l.d)(),n),...s})});j.displayName=a.aU.displayName;let b=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.$j,{ref:t,className:(0,i.cn)((0,l.d)({variant:"outline"}),"mt-2 sm:mt-0",n),...s})});b.displayName=a.$j.displayName},93023:function(e,t,n){"use strict";n.d(t,{d:function(){return o},z:function(){return c}});var r=n(57437),s=n(2265),a=n(67256),i=n(7404),l=n(39311);let o=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:n,variant:s,size:i,asChild:c=!1,...d}=e,u=c?a.g7:"button";return(0,r.jsx)(u,{className:(0,l.cn)(o({variant:s,size:i,className:n})),ref:t,...d})});c.displayName="Button"},41315:function(e,t,n){"use strict";n.d(t,{NI:function(){return h},Wi:function(){return u},l0:function(){return c},lX:function(){return p},pf:function(){return j},xJ:function(){return x},zG:function(){return b}});var r=n(57437),s=n(2265),a=n(67256),i=n(61865),l=n(39311),o=n(66672);let c=i.RV,d=s.createContext({}),u=e=>{let{...t}=e;return(0,r.jsx)(d.Provider,{value:{name:t.name},children:(0,r.jsx)(i.Qr,{...t})})},m=()=>{let e=s.useContext(d),t=s.useContext(f),{getFieldState:n,formState:r}=(0,i.Gc)(),a=e.name||"root",l=n(a,r);if(!r)throw Error("useFormField should be used within <Form>");let{id:o}=t;return{id:o,name:a,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...l}},f=s.createContext({}),x=s.forwardRef((e,t)=>{let{className:n,...a}=e,i=s.useId();return(0,r.jsx)(f.Provider,{value:{id:i},children:(0,r.jsx)("div",{ref:t,className:(0,l.cn)("space-y-2",n),...a})})});x.displayName="FormItem";let p=s.forwardRef((e,t)=>{let{className:n,required:s,...a}=e,{error:i,formItemId:c}=m();return(0,r.jsx)(o._,{ref:t,className:(0,l.cn)(i&&"text-destructive",s&&'after:ml-0.5 after:text-destructive after:content-["*"]',n),htmlFor:c,...a})});p.displayName="FormLabel";let h=s.forwardRef((e,t)=>{let{...n}=e,{error:s,formItemId:i,formDescriptionId:l,formMessageId:o}=m();return(0,r.jsx)(a.g7,{ref:t,id:i,"aria-describedby":s?"".concat(l," ").concat(o):"".concat(l),"aria-invalid":!!s,...n})});h.displayName="FormControl";let j=s.forwardRef((e,t)=>{let{className:n,...s}=e,{formDescriptionId:a}=m();return(0,r.jsx)("p",{ref:t,id:a,className:(0,l.cn)("text-sm text-muted-foreground",n),...s})});j.displayName="FormDescription";let b=s.forwardRef((e,t)=>{let{className:n,children:s,...a}=e,{error:i,formMessageId:o}=m(),c=i?String(null==i?void 0:i.message):s;return c?(0,r.jsx)("p",{ref:t,id:o,className:(0,l.cn)("text-sm font-medium text-destructive",n),...a,children:c}):null});b.displayName="FormMessage"},66672:function(e,t,n){"use strict";n.d(t,{_:function(){return c}});var r=n(57437),s=n(2265),a=n(36743),i=n(7404),l=n(39311);let o=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.f,{ref:t,className:(0,l.cn)(o(),n),...s})});c.displayName=a.f.displayName},25645:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var r=n(57437),s=n(39311);function a(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...n})}},32553:function(e,t,n){"use strict";n.d(t,{RM:function(){return o},SC:function(){return d},iA:function(){return i},pj:function(){return m},ss:function(){return u},xD:function(){return l}});var r=n(57437),s=n(2265),a=n(39311);let i=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("table",{ref:t,className:(0,a.cn)("w-full caption-bottom text-sm",n),...s})});i.displayName="Table";let l=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("thead",{ref:t,className:(0,a.cn)("[&_tr]:border-b",n),...s})});l.displayName="TableHeader";let o=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,a.cn)("[&_tr:last-child]:border-0",n),...s})});o.displayName="TableBody";let c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,a.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",n),...s})});c.displayName="TableFooter";let d=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("tr",{ref:t,className:(0,a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",n),...s})});d.displayName="TableRow";let u=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("th",{ref:t,className:(0,a.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",n),...s})});u.displayName="TableHead";let m=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("td",{ref:t,className:(0,a.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",n),...s})});m.displayName="TableCell";let f=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("caption",{ref:t,className:(0,a.cn)("mt-4 text-sm text-muted-foreground",n),...s})});f.displayName="TableCaption"},95482:function(e,t,n){"use strict";n.d(t,{_v:function(){return d},aJ:function(){return c},pn:function(){return l},u:function(){return o}});var r=n(57437),s=n(2265),a=n(98567),i=n(39311);let l=a.zt,o=a.fC,c=a.xz,d=s.forwardRef((e,t)=>{let{className:n,sideOffset:s=4,...l}=e;return(0,r.jsx)(a.VY,{ref:t,sideOffset:s,className:(0,i.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...l})});d.displayName=a.VY.displayName},12897:function(e,t,n){"use strict";n.d(t,{S:function(){return l},n:function(){return o}});var r=n(2265),s=n(50976);function a(e){let t=r.useRef(e);return t.current=e,t}let i=e=>{let t=a(e);r.useEffect(()=>()=>{t.current()},[])};function l(e,t,n){let l=a(e),o=r.useMemo(()=>(0,s.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.current(...t)},t,n),[]);return i(()=>o.cancel()),{run:o,cancel:o.cancel,flush:o.flush}}function o(e,t,n){let[s,a]=r.useState(e),{run:i}=l(()=>{a(e)},t,n);return r.useEffect(()=>{i()},[e]),[s,a]}},99238:function(e,t,n){"use strict";n.d(t,{Gm:function(){return l},jp:function(){return i}});var r=n(99109),s=n(60106);let a=(0,s.BX)("\n  query GetLicenseInfo {\n    license {\n      type\n      status\n      seats\n      seatsUsed\n      issuedAt\n      expiresAt\n    }\n  }\n"),i=()=>(0,r.aM)({query:a}),l=()=>{let[{data:e}]=i();return null==e?void 0:e.license}}},function(e){e.O(0,[6990,768,9109,584,3072,1396,1424,2699,5414,7070,3714,1713,8567,5445,7753,4168,2445,2971,7864,1744],function(){return e(e.s=86552)}),_N_E=e.O()}]);