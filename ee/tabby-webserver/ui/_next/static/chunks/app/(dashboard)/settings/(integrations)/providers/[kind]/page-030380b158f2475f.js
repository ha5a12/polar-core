(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9667],{96800:function(e,n,t){Promise.resolve().then(t.bind(t,19847))},19847:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(36164),s=t(3546),a=t(70652),l=t.n(a),i=t(11978),c=t(40055),u=t(21808),d=t(18500),o=t(70410),f=t(31458),m=t(79972),x=t(3448),h=t(76297),v=t(1544);let g=e=>{let{onLoad:n,isFetching:t,children:a,className:l}=e,{ref:i,inView:c}=(0,h.YD)();return s.useEffect(()=>{c&&!t&&(null==n||n())},[c]),(0,r.jsx)("div",{className:(0,v.cn)("w-full",l),ref:i,children:null!=a?a:(0,r.jsx)("div",{children:"loading..."})})},j=e=>(0,r.jsx)(g,{...e});var b=t(6230),N=t(39231);let p=u.L8;function y(){var e,n;let t=(0,N.A)(),a=(0,i.useParams)(),[u,x]=s.useState(void 0),[{data:h,fetching:v}]=(0,c.aM)({query:o.kb,variables:{kind:t,last:p,before:u}}),g=s.useMemo(()=>{var e,n;return null==h?void 0:null===(n=h.integrations)||void 0===n?void 0:null===(e=n.edges)||void 0===e?void 0:e.slice().reverse()},[null==h?void 0:null===(e=h.integrations)||void 0===e?void 0:e.edges]),y=null==h?void 0:null===(n=h.integrations)||void 0===n?void 0:n.pageInfo;return(0,r.jsx)(b.Z,{loading:v,fallback:(0,r.jsx)(k,{}),children:(null==g?void 0:g.length)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{}),(0,r.jsxs)("div",{className:"space-y-8",children:[null==g?void 0:g.map(e=>(0,r.jsxs)(m.Zb,{children:[(0,r.jsx)(m.Ol,{className:"border-b px-6 py-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(m.ll,{className:"text-xl",children:(0,r.jsx)("div",{className:"flex items-center gap-2",children:e.node.displayName})}),(0,r.jsx)(l(),{href:"".concat(a.kind,"/detail?id=").concat(e.node.id),className:(0,f.d)({variant:"secondary"}),children:"View"})]})}),(0,r.jsx)(m.aY,{className:"p-0 text-sm",children:(0,r.jsxs)("div",{className:"flex px-6 py-4",children:[(0,r.jsx)("span",{className:"w-[30%] shrink-0 text-muted-foreground",children:"Status"}),(0,r.jsx)("span",{children:function(e){switch(e){case d.Ij.Ready:return"Ready";case d.Ij.Failed:return"Processing error. Please check if the access token is still valid";case d.Ij.Pending:return"Awaiting the next data synchronization"}}(e.node.status)})]})})]},e.node.id)),!!(null==y?void 0:y.hasPreviousPage)&&(0,r.jsx)(j,{onLoad:()=>{(null==y?void 0:y.startCursor)&&x(y.startCursor)},isFetching:v,children:(0,r.jsx)(k,{})})]})]}):(0,r.jsx)(_,{})})}function w(){let e=(0,i.useParams)();return(0,r.jsx)("div",{className:"my-4 flex justify-end",children:(0,r.jsx)(l(),{href:"./".concat(e.kind,"/new"),className:(0,f.d)(),children:"Create"})})}function _(){let e=(0,i.useParams)();return(0,r.jsxs)("div",{className:"flex flex-col items-center gap-4 rounded-lg border-4 border-dashed py-8",children:[(0,r.jsx)("div",{children:"No Data"}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(l(),{href:"./".concat(e.kind,"/new"),className:(0,f.d)({variant:"default"}),children:"Create"})})]})}function O(){return(0,r.jsxs)(m.Zb,{className:"w-full bg-transparent",children:[(0,r.jsx)(m.Ol,{className:"border-b px-6 py-4",children:(0,r.jsx)(m.ll,{children:(0,r.jsx)(x.O,{className:"w-[20%]"})})}),(0,r.jsx)(m.aY,{className:"px-6 py-4",children:(0,r.jsx)(x.O,{className:"w-[80%]"})})]})}function k(){return(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsx)(O,{}),(0,r.jsx)(O,{})]})}},39231:function(e,n,t){"use strict";t.d(n,{A:function(){return l}});var r=t(11978),s=t(78613),a=t(11529);function l(){let e=(0,r.useParams)(),n=(0,s.Z)(a.K,n=>{var t;return n.name===(null===(t=e.kind)||void 0===t?void 0:t.toLowerCase())}),t=n>-1?a.K[n].enum:a.K[0].enum;return t}},11529:function(e,n,t){"use strict";t.d(n,{K:function(){return s}});var r=t(18500);let s=[{name:"github",enum:r.q6.Github,meta:{displayName:"GitHub"}},{name:"github-self-hosted",enum:r.q6.GithubSelfHosted,meta:{displayName:"GitHub Self-Hosted"}},{name:"gitlab",enum:r.q6.Gitlab,meta:{displayName:"GitLab"}},{name:"gitlab-self-hosted",enum:r.q6.GitlabSelfHosted,meta:{displayName:"GitLab Self-Hosted"}}]},6230:function(e,n,t){"use strict";var r=t(36164),s=t(3546),a=t(24449),l=t(90379);n.Z=e=>{let{loading:n,fallback:t,delay:i,children:c}=e,[u,d]=s.useState(!n),[o]=(0,a.n)(u,null!=i?i:200);return(s.useEffect(()=>{n||u||d(!0)},[n]),o)?c:t||(0,r.jsx)(l.cg,{})}},90379:function(e,n,t){"use strict";t.d(n,{PF:function(){return c},cg:function(){return l},tB:function(){return i}});var r=t(36164),s=t(1544),a=t(3448);let l=e=>{let{className:n,...t}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("space-y-3",n),...t,children:[(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"})]})},i=e=>{let{className:n,...t}=e;return(0,r.jsx)(a.O,{className:(0,s.cn)("h-4 w-full",n),...t})},c=e=>{let{className:n,...t}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",n),...t,children:[(0,r.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(a.O,{className:"h-4 w-full"})]})}},31458:function(e,n,t){"use strict";t.d(n,{d:function(){return c},z:function(){return u}});var r=t(36164),s=t(3546),a=t(74047),l=t(14375),i=t(1544);let c=(0,l.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),u=s.forwardRef((e,n)=>{let{className:t,variant:s,size:l,asChild:u=!1,...d}=e,o=u?a.g7:"button";return(0,r.jsx)(o,{className:(0,i.cn)(c({variant:s,size:l,className:t})),ref:n,...d})});u.displayName="Button"},79972:function(e,n,t){"use strict";t.d(n,{Ol:function(){return i},Zb:function(){return l},aY:function(){return d},eW:function(){return o},ll:function(){return c}});var r=t(36164),s=t(3546),a=t(1544);let l=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:n,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s})});l.displayName="Card";let i=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:n,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",t),...s})});i.displayName="CardHeader";let c=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("h3",{ref:n,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",t),...s})});c.displayName="CardTitle";let u=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("p",{ref:n,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})});u.displayName="CardDescription";let d=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:n,className:(0,a.cn)("p-6 pt-0",t),...s})});d.displayName="CardContent";let o=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:n,className:(0,a.cn)("flex items-center p-6 pt-0",t),...s})});o.displayName="CardFooter"},3448:function(e,n,t){"use strict";t.d(n,{O:function(){return a}});var r=t(36164),s=t(1544);function a(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",n),...t})}},21808:function(e,n,t){"use strict";t.d(n,{$6:function(){return a},L8:function(){return s},o0:function(){return r}});let r="name@yourcompany.com",s=20,a={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_INITIAL_CONTEXTS:"_tabby_search_initial_contexts"}},24449:function(e,n,t){"use strict";t.d(n,{S:function(){return i},n:function(){return c}});var r=t(3546),s=t(45391),a=t(16784);let l=e=>{let n=(0,a.d)(e);r.useEffect(()=>()=>{n.current()},[])};function i(e,n,t){let i=(0,a.d)(e),c=r.useMemo(()=>(0,s.Z)(function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return i.current(...n)},n,t),[]);return l(()=>{var e;null==t||null===(e=t.onUnmount)||void 0===e||e.call(t,c),c.cancel()}),{run:c,cancel:c.cancel,flush:c.flush}}function c(e,n,t){let[s,a]=r.useState(e),{run:l}=i(()=>{a(e)},n,t);return r.useEffect(()=>{l()},[e]),[s,a]}},16784:function(e,n,t){"use strict";t.d(n,{d:function(){return s}});var r=t(3546);function s(e){let n=r.useRef(e);return n.current=e,n}}},function(e){e.O(0,[1386,5498,4007,7070,1132,1544,410,3375,5289,1744],function(){return e(e.s=96800)}),_N_E=e.O()}]);