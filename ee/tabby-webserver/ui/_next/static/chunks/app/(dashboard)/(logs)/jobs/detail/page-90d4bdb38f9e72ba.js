(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1908],{50613:function(e,s,t){Promise.resolve().then(t.bind(t,72725))},72725:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return g}});var n=t(36164),r=t(3546),l=t(11978),a=t(70787),i=t(97651),c=t.n(i),d=t(99092),o=t.n(d),u=t(40055),f=t(70410),x=t(74248),m=t(81565),h=t(50538),v=t(90379),j=t(74630);function g(){var e,s,t,a;let i=(0,l.useRouter)(),d=(0,l.useSearchParams)(),x=d.get("id"),[{data:g,error:p,fetching:b},w]=(0,u.aM)({query:f.GG,variables:{ids:[x]},pause:!x}),y=null==g?void 0:null===(t=g.jobRuns)||void 0===t?void 0:null===(s=t.edges)||void 0===s?void 0:null===(e=s[0])||void 0===e?void 0:e.node;return r.useEffect(()=>{let e;return(null==y?void 0:y.createdAt)&&!(null==y?void 0:y.finishedAt)&&(e=window.setTimeout(()=>{w()},5e3)),()=>{e&&clearInterval(e)}},[y]),(0,n.jsx)(n.Fragment,{children:b?(0,n.jsx)(v.cg,{}):(0,n.jsx)("div",{className:"flex flex-1 flex-col items-stretch gap-2",children:y&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{onClick:()=>i.back(),className:"-ml-1 flex cursor-pointer items-center transition-opacity hover:opacity-60",children:[(0,n.jsx)(m.IconChevronLeft,{className:"mr-1 h-6 w-6"}),(0,n.jsx)("h2",{className:"scroll-m-20 text-3xl font-bold tracking-tight first:mt-0",children:y.job})]}),(0,n.jsxs)("div",{className:"mb-8 flex gap-x-5 text-sm text-muted-foreground lg:gap-x-10",children:[(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(m.IconStopWatch,{}),(0,n.jsxs)("p",{children:["State: ",(a=y.exitCode,(0,j.Z)(a)?"Pending":0===a?"Success":"Failed")]})]}),y.createdAt&&(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(m.IconClock,{}),(0,n.jsxs)("p",{children:["Started:"," ",o()(y.createdAt).format("YYYY-MM-DD HH:mm")]})]}),y.createdAt&&y.finishedAt&&(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(m.IconHistory,{}),(0,n.jsxs)("p",{children:["Duration:"," ",c()(o().duration(o()(y.finishedAt).diff(y.createdAt)).asMilliseconds())]})]})]}),(0,n.jsxs)(h.mQ,{defaultValue:"stdout",className:"flex flex-1 flex-col",children:[(0,n.jsxs)(h.dr,{className:"grid w-[400px] grid-cols-2",children:[(0,n.jsxs)(h.SP,{value:"stdout",children:[(0,n.jsx)(m.IconTerminalSquare,{className:"mr-1"}),"stdout"]}),(0,n.jsxs)(h.SP,{value:"stderr",children:[(0,n.jsx)(m.IconAlertTriangle,{className:"mr-1"}),"stderr"]})]}),(0,n.jsxs)("div",{className:"flex flex-1 flex-col",children:[(0,n.jsx)(h.nU,{value:"stdout",children:(0,n.jsx)(N,{value:null==y?void 0:y.stdout})}),(0,n.jsx)(h.nU,{value:"stderr",children:(0,n.jsx)(N,{value:null==y?void 0:y.stderr})})]})]})]})})})}function N(e){let{children:s,className:t,value:r,...l}=e;return(0,n.jsx)("div",{className:(0,x.cn)("mt-2 h-[66vh] w-full overflow-y-auto overflow-x-hidden rounded-lg border bg-gray-50 font-mono text-[0.9rem] dark:bg-gray-800",t),...l,children:r?(0,n.jsx)("pre",{className:"whitespace-pre-wrap p-4",children:(0,n.jsx)(a.Z,{children:r})}):(0,n.jsx)("div",{className:"p-4",children:"No Data"})})}},90379:function(e,s,t){"use strict";t.d(s,{PF:function(){return c},cg:function(){return a},tB:function(){return i}});var n=t(36164),r=t(74248),l=t(3448);let a=e=>{let{className:s,...t}=e;return(0,n.jsxs)("div",{className:(0,r.cn)("space-y-3",s),...t,children:[(0,n.jsx)(l.O,{className:"h-4 w-full"}),(0,n.jsx)(l.O,{className:"h-4 w-full"}),(0,n.jsx)(l.O,{className:"h-4 w-full"}),(0,n.jsx)(l.O,{className:"h-4 w-full"})]})},i=e=>{let{className:s,...t}=e;return(0,n.jsx)(l.O,{className:(0,r.cn)("h-4 w-full",s),...t})},c=e=>{let{className:s,...t}=e;return(0,n.jsxs)("div",{className:(0,r.cn)("flex flex-col gap-3",s),...t,children:[(0,n.jsx)(l.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(l.O,{className:"h-4 w-full"}),(0,n.jsx)(l.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(l.O,{className:"h-4 w-full"})]})}},3448:function(e,s,t){"use strict";t.d(s,{O:function(){return l}});var n=t(36164),r=t(74248);function l(e){let{className:s,...t}=e;return(0,n.jsx)("div",{className:(0,r.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",s),...t})}},50538:function(e,s,t){"use strict";t.d(s,{SP:function(){return d},dr:function(){return c},mQ:function(){return i},nU:function(){return o}});var n=t(36164),r=t(3546),l=t(6044),a=t(74248);let i=l.fC,c=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)(l.aV,{ref:s,className:(0,a.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...r})});c.displayName=l.aV.displayName;let d=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)(l.xz,{ref:s,className:(0,a.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...r})});d.displayName=l.xz.displayName;let o=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)(l.VY,{ref:s,className:(0,a.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...r})});o.displayName=l.VY.displayName}},function(e){e.O(0,[7565,872,55,2178,6044,9735,3181,7444,1565,410,3375,5289,1744],function(){return e(e.s=50613)}),_N_E=e.O()}]);