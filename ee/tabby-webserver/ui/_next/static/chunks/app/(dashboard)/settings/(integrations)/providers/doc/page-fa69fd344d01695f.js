(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9631],{2545:function(e,n,t){Promise.resolve().then(t.bind(t,81487)),Promise.resolve().then(t.bind(t,10059)),Promise.resolve().then(t.bind(t,81565)),Promise.resolve().then(t.t.bind(t,54007,23))},55137:function(e,n,t){"use strict";t.d(n,{_:function(){return v}});var r=t(36164),s=t(3546),i=t(70652),o=t.n(i),l=t(11978),a=t(99092),d=t.n(a),u=t(1544),c=t(31458),f=t(81565),m=t(29);function h(e){let{onTrigger:n,isPending:t,jobLink:i}=e,o=(0,l.useRouter)(),[a,d]=s.useState(!1);return(0,r.jsxs)(m.u,{children:[(0,r.jsx)(m.aJ,{asChild:!0,children:(0,r.jsx)(c.z,{size:"icon",variant:"ghost",onClick:()=>{if(t){i&&o.push(i);return}let e=n();return e&&e instanceof Promise&&(d(!0),e.finally(()=>d(!1))),e},disabled:a,children:a||t?(0,r.jsx)(f.IconSpinner,{}):(0,r.jsx)(f.IconCirclePlay,{strokeWidth:1,className:"h-5 w-5"})})}),(0,r.jsx)(m._v,{children:(0,r.jsx)("p",{children:"Run"})})]})}function x(e){let{jobInfo:n,className:t}=e;return(null==n?void 0:n.lastJobRun)?(0,r.jsx)(o(),{href:"/jobs/detail?id=".concat(n.lastJobRun.id),className:(0,u.cn)("flex items-center gap-1 underline hover:text-foreground/50",t),children:d()(n.lastJobRun.createdAt).format("YYYY-MM-DD HH:mm")}):null}function v(e){var n;let{jobInfo:t,onTrigger:s,className:i}=e,o=!!(null==t?void 0:t.lastJobRun)&&null===t.lastJobRun.exitCode,l=(null==t?void 0:null===(n=t.lastJobRun)||void 0===n?void 0:n.id)?"/jobs/detail?id=".concat(t.lastJobRun.id):void 0;return(0,r.jsxs)("div",{className:(0,u.cn)("flex items-center gap-1",i),children:[(0,r.jsx)(x,{jobInfo:t,className:"hidden lg:block"}),(0,r.jsx)(h,{onTrigger:s,isPending:o,jobLink:l})]})}},81487:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(36164),s=t(3546),i=t(70652),o=t.n(i),l=t(2578),a=t(40055),d=t(43240),u=t(24449),c=t(11634),f=t(31458),m=t(81565),h=t(82394),x=t(84942),v=t(99047),p=t(6230),g=t(7121),j=t(55137),b=t(14522);let N=(0,d.BX)("\n  query CustomWebDocuments(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    customWebDocuments(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          url\n          name\n          id\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),w=(0,d.BX)("\n  mutation DeleteCustomDocument($id: ID!) {\n    deleteCustomDocument(id: $id)\n  }\n");function y(){var e;let[n,t]=(0,s.useState)(1),[i,d]=(0,s.useState)(8),[y,C]=(0,s.useState)(),[k]=(0,u.n)(y,200),[S,I]=(0,s.useState)(),R=(0,s.useRef)(null),[D,P]=(0,s.useState)(!1),[{fetching:z,data:A,stale:$}]=(0,a.aM)({query:N}),J=(0,c.D)(w),_=e=>{J({id:e}).then(n=>{var t,r;if(null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.deleteCustomDocument)I(n=>null==n?void 0:n.filter(n=>n.node.id!==e));else{let e=(null==n?void 0:null===(r=n.error)||void 0===r?void 0:r.message)||"Failed to delete";l.A.error(e)}}).catch(e=>{let n=(null==e?void 0:e.message)||"Failed to delete";l.A.error(n)})},E=async e=>{if(e)try{var n,t,r;let s=await c.L.query(N,{ids:[e]}).toPromise(),i=null==s?void 0:null===(r=s.data)||void 0===r?void 0:null===(t=r.customWebDocuments)||void 0===t?void 0:null===(n=t.edges)||void 0===n?void 0:n[0];return i}catch(e){return}},O=async e=>{try{var n;let t=await E(e);if(!(null==t?void 0:null===(n=t.node)||void 0===n?void 0:n.id)||!(null==S?void 0:S.length))return;let r=S.findIndex(e=>{var n;return(null===(n=e.node)||void 0===n?void 0:n.id)===t.node.id});r>-1&&I(e=>null==e?void 0:e.map(e=>e.node.id===t.node.id?t:e))}catch(e){}},M=(0,c.D)(b.C),T=(e,n)=>M({command:n}).then(n=>{var t,r;(null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.triggerJobRun)?(l.A.success("The job has been triggered successfully, it may take a few minutes to process."),O(e)):l.A.error((null==n?void 0:null===(r=n.error)||void 0===r?void 0:r.message)||"Failed to trigger job")});(0,s.useEffect)(()=>{var e;I(null==A?void 0:null===(e=A.customWebDocuments)||void 0===e?void 0:e.edges)},[A]);let F=(0,s.useMemo)(()=>{var e;return k?null!==(e=null==S?void 0:S.filter(e=>e.node.name.toLowerCase().includes(k)))&&void 0!==e?e:[]:S},[k,S]),B=(0,s.useMemo)(()=>null==F?void 0:F.slice((n-1)*i,n*i),[F,n,i]);return(0,s.useEffect)(()=>{t(1)},[k]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(p.Z,{loading:z||$,children:[(0,r.jsxs)(v.iA,{className:"min-w-[300px] table-fixed border-b",children:[(0,r.jsx)(v.xD,{children:(0,r.jsxs)(v.SC,{children:[(0,r.jsxs)(v.ss,{className:"flex items-center gap-1.5",children:["Name",(0,r.jsxs)(x.J2,{open:D,onOpenChange:P,children:[(0,r.jsx)(x.xo,{asChild:!0,children:(0,r.jsxs)(f.z,{size:"icon",variant:"ghost",className:"relative shrink-0",children:[(0,r.jsx)(m.IconListFilter,{}),!!k&&(0,r.jsx)("div",{className:"absolute right-0 top-1 h-1.5 w-1.5 rounded-full bg-red-400"})]})}),(0,r.jsx)(x.yk,{align:"end",side:"right",className:"p-1",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(m.IconSearch,{className:"absolute left-3 top-2.5 cursor-text text-muted-foreground",onClick:()=>{var e;return null===(e=R.current)||void 0===e?void 0:e.focus()}}),(0,r.jsx)(h.I,{size:30,className:"w-48 px-8",value:y,onChange:e=>C(e.target.value),ref:R,placeholder:"Search...",onKeyDown:e=>{"Enter"!==e.key||e.nativeEvent.isComposing||P(!1)}}),y?(0,r.jsx)(f.z,{variant:"ghost",size:"icon",className:"absolute right-3 top-1.5 h-6 w-6 cursor-pointer",onClick:()=>{var e;C(""),null===(e=R.current)||void 0===e||e.focus()},children:(0,r.jsx)(m.IconClose,{})}):null]})})]}),(0,r.jsx)("div",{children:(0,r.jsx)(o(),{href:"./doc/new",className:(0,f.d)({size:"icon",variant:"ghost"}),children:(0,r.jsx)(m.IconPlus,{})})})]}),(0,r.jsx)(v.ss,{className:"w-[100px] lg:w-[200px]",children:"Job"}),(0,r.jsx)(v.ss,{className:"w-[100px] text-right"})]})}),(0,r.jsx)(v.RM,{children:(null==B?void 0:B.length)||z?(0,r.jsx)(r.Fragment,{children:null==B?void 0:B.map(e=>(0,r.jsxs)(v.SC,{children:[(0,r.jsxs)(v.pj,{className:"break-all lg:break-words",children:[(0,r.jsx)("p",{children:e.node.name}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:e.node.url})]}),(0,r.jsx)(v.pj,{children:(0,r.jsx)(j._,{jobInfo:e.node.jobInfo,onTrigger:async()=>{var n,t,r;(null===(t=e.node)||void 0===t?void 0:null===(n=t.jobInfo)||void 0===n?void 0:n.command)&&T(e.node.id,null===(r=e.node)||void 0===r?void 0:r.jobInfo.command)}})}),(0,r.jsx)(v.pj,{className:"text-right",children:(0,r.jsx)(f.z,{size:"icon",variant:"hover-destructive",onClick:()=>_(e.node.id),children:(0,r.jsx)(m.IconTrash,{})})})]},e.node.id))}):(0,r.jsx)(v.SC,{children:(0,r.jsx)(v.pj,{colSpan:3,className:"h-[100px] text-center",children:(null==S?void 0:S.length)?"No matches data":"No data"})})})]}),(0,r.jsx)(g.x,{className:"mt-2 flex justify-end",page:n,pageSize:i,showQuickJumper:!0,totalCount:null!==(e=null==F?void 0:F.length)&&void 0!==e?e:0,onChange:(e,n)=>{t(e),d(n)}})]})})}},10059:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(36164),s=t(3546),i=t(45238),o=t(2578),l=t(40055),a=t(43240),d=t(24449),u=t(11634),c=t(31458),f=t(81565),m=t(82394),h=t(84942),x=t(98815),v=t(99047),p=t(6230),g=t(7121),j=t(55137),b=t(14522);let N=(0,a.BX)("\n  query PresetWebDocuments(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n    $isActive: Boolean\n  ) {\n    presetWebDocuments(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n      isActive: $isActive\n    ) {\n      edges {\n        node {\n          id\n          name\n          isActive\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),w=(0,a.BX)("\n  mutation SetPresetDocumentActive($input: SetPresetDocumentActiveInput!) {\n    setPresetDocumentActive(input: $input)\n  }\n");function y(){var e;let[n,t]=(0,s.useState)(1),[a,y]=(0,s.useState)(8),[C,k]=(0,s.useState)(),[S]=(0,d.n)(C,200),[I,R]=(0,s.useState)(),[D,P]=(0,s.useState)(new Set),z=(0,s.useRef)(null),[A,$]=(0,s.useState)(!1),[{data:J,stale:_}]=(0,l.aM)({query:N}),E=(0,u.D)(w),O=async e=>{if(e)try{var n,t,r;let s=await u.L.query(N,{ids:[e]}).toPromise(),i=null==s?void 0:null===(r=s.data)||void 0===r?void 0:null===(t=r.presetWebDocuments)||void 0===t?void 0:null===(n=t.edges)||void 0===n?void 0:n[0];return i}catch(e){return}},M=async e=>{try{var n;let t=await O(e);if(!(null==t?void 0:null===(n=t.node)||void 0===n?void 0:n.id)||!(null==I?void 0:I.length))return;let r=I.findIndex(e=>{var n;return(null===(n=e.node)||void 0===n?void 0:n.id)===t.node.id});r>-1&&R(e=>null==e?void 0:e.map(e=>e.node.id===t.node.id?t:e))}catch(e){}},T=(0,u.D)(b.C),F=(e,n)=>T({command:n}).then(n=>{var t,r;(null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.triggerJobRun)?(o.A.success("The job has been triggered successfully, it may take a few minutes to process."),M(e)):o.A.error((null==n?void 0:null===(r=n.error)||void 0===r?void 0:r.message)||"Failed to trigger job")}),B=(e,n)=>{D.has(e)||(P(n=>{let t=new Set(n);return t.add(e),t}),R(t=>null==t?void 0:t.map(t=>t.node.id===e?{...t,node:{...t.node,isActive:n}}:t)),E({input:{id:e,active:n}}).then(t=>{var r,s,i;if(!(null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.setPresetDocumentActive)){let r=null!==(i=null==t?void 0:null===(s=t.error)||void 0===s?void 0:s.message)&&void 0!==i?i:"Failed to update";o.A.error(r),R(t=>null==t?void 0:t.map(t=>t.node.id!==e?t:{...t,node:{...t.node,isActive:!n}}))}}).finally(()=>{P(n=>{let t=new Set(n);return t.delete(e),t}),M(e)}))};(0,s.useEffect)(()=>{var e;R(null==J?void 0:null===(e=J.presetWebDocuments)||void 0===e?void 0:e.edges)},[J]);let W=(0,s.useMemo)(()=>{if(!S||!(null==I?void 0:I.length))return null!=I?I:[];let e=(0,i.go)(S,I,{key:e=>e.node.name});return e.map(e=>e.obj)},[S,I]),Y=(0,s.useMemo)(()=>null==W?void 0:W.slice((n-1)*a,n*a),[W,n,a]);return(0,s.useEffect)(()=>{t(1)},[S]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(p.Z,{loading:!J||_,children:[(0,r.jsxs)(v.iA,{className:"min-w-[300px] table-fixed border-b",children:[(0,r.jsx)(v.xD,{children:(0,r.jsxs)(v.SC,{children:[(0,r.jsxs)(v.ss,{className:"flex items-center gap-1.5",children:["Name",(0,r.jsxs)(h.J2,{open:A,onOpenChange:$,children:[(0,r.jsx)(h.xo,{asChild:!0,children:(0,r.jsxs)(c.z,{size:"icon",variant:"ghost",className:"relative shrink-0",children:[(0,r.jsx)(f.IconListFilter,{}),!!S&&(0,r.jsx)("div",{className:"absolute right-0 top-1 h-1.5 w-1.5 rounded-full bg-red-400"})]})}),(0,r.jsx)(h.yk,{align:"end",side:"right",className:"p-1",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(f.IconSearch,{className:"absolute left-3 top-2.5 cursor-text text-muted-foreground",onClick:()=>{var e;return null===(e=z.current)||void 0===e?void 0:e.focus()}}),(0,r.jsx)(m.I,{size:30,className:"w-48 px-8",value:C,onChange:e=>k(e.target.value),ref:z,placeholder:"Search...",onKeyDown:e=>{"Enter"!==e.key||e.nativeEvent.isComposing||$(!1)}}),C?(0,r.jsx)(c.z,{variant:"ghost",size:"icon",className:"absolute right-3 top-1.5 h-6 w-6 cursor-pointer",onClick:()=>{var e;k(""),null===(e=z.current)||void 0===e||e.focus()},children:(0,r.jsx)(f.IconClose,{})}):null]})})]})]}),(0,r.jsx)(v.ss,{className:"w-[100px] lg:w-[200px]",children:"Job"}),(0,r.jsx)(v.ss,{className:"w-[100px] text-right"})]})}),(0,r.jsx)(v.RM,{children:(null==Y?void 0:Y.length)?(0,r.jsx)(r.Fragment,{children:null==Y?void 0:Y.map(e=>(0,r.jsxs)(v.SC,{children:[(0,r.jsx)(v.pj,{className:"break-all lg:break-words",children:e.node.name}),(0,r.jsx)(v.pj,{children:e.node.isActive?(0,r.jsx)(j._,{jobInfo:e.node.jobInfo,onTrigger:async()=>{var n,t,r;(null===(t=e.node)||void 0===t?void 0:null===(n=t.jobInfo)||void 0===n?void 0:n.command)&&F(e.node.id,null===(r=e.node)||void 0===r?void 0:r.jobInfo.command)}}):null}),(0,r.jsx)(v.pj,{className:"text-right",children:(0,r.jsx)(x.r,{checked:e.node.isActive,onCheckedChange:n=>B(e.node.id,n),className:"my-1"})})]},e.node.id))}):(0,r.jsx)(v.SC,{children:(0,r.jsx)(v.pj,{colSpan:3,className:"h-[100px] text-center",children:(null==I?void 0:I.length)?"No matches data":"No data"})})})]}),(0,r.jsx)(g.x,{className:"mt-2 flex justify-end",page:n,pageSize:a,showQuickJumper:!0,totalCount:null!==(e=null==W?void 0:W.length)&&void 0!==e?e:0,onChange:(e,n)=>{t(e),y(n)}})]})})}},14522:function(e,n,t){"use strict";t.d(n,{C:function(){return s}});var r=t(43240);let s=(0,r.BX)("\n  mutation triggerJobRun($command: String!) {\n    triggerJobRun(command: $command)\n  }\n")},6230:function(e,n,t){"use strict";var r=t(36164),s=t(3546),i=t(24449),o=t(90379);n.Z=e=>{let{loading:n,fallback:t,delay:l,children:a}=e,[d,u]=s.useState(!n),[c]=(0,i.n)(d,null!=l?l:200);return(s.useEffect(()=>{n||d||u(!0)},[n]),c)?a:t||(0,r.jsx)(o.cg,{})}},7121:function(e,n,t){"use strict";t.d(n,{x:function(){return u}});var r=t(36164),s=t(3546),i=t(49506),o=t(54594);let l=["5","10","20","30","50"],a=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Array.from({length:e},(e,t)=>t+n)},d=(e,n,t)=>{let r=Math.ceil(e/t);return r<=5?a(r):n<=3?[1,2,3,4,"...",r]:n<r-2?[1,"...",n-1,n,n+1,"...",r]:[1,"...",...a(4,r-3)]},u=e=>{let{className:n,page:t,totalCount:a,pageSize:u=10,showQuickJumper:c=!1,showSizeChanger:f=!1,onChange:m}=e,[h,x]=(0,s.useState)(t),[v,p]=(0,s.useState)(u),g=Math.ceil(a/v),j=d(a,h,v);return((0,s.useEffect)(()=>{t&&t!==h&&x(t)},[t]),(0,s.useEffect)(()=>{u&&u!==v&&p(u)},[u]),j.length<=1)?null:(0,r.jsx)(i.tl,{className:n,children:(0,r.jsxs)(i.ng,{children:[f&&(0,r.jsxs)("div",{className:"mr-2 flex items-center space-x-2",children:[(0,r.jsx)("span",{className:"text-sm font-medium",children:"Rows per page"}),(0,r.jsxs)(o.Ph,{value:String(v),onValueChange:e=>{null==m||m(h,+e)},children:[(0,r.jsx)(o.i4,{className:"h-8 w-[70px]",children:(0,r.jsx)(o.ki,{})}),(0,r.jsx)(o.Bw,{align:"end",children:l.map(e=>(0,r.jsx)(o.Ql,{value:e,children:e},e))})]})]}),(0,r.jsx)(i.nt,{children:(0,r.jsx)(i.dN,{disabled:1===h,onClick:()=>{if(1===h)return;let e=h-1;x(e),null==m||m(e,v)}})}),c&&(0,r.jsx)(r.Fragment,{children:j.map((e,n)=>(0,r.jsx)(i.nt,{onClick:()=>{"number"==typeof e&&(x(e),null==m||m(e,v))},children:"number"==typeof e?(0,r.jsx)(i.kN,{className:"cursor-pointer",isActive:e===h,children:e}):(0,r.jsx)(i.Dj,{})},"".concat(e,"-").concat(n)))}),(0,r.jsx)(i.nt,{children:(0,r.jsx)(i.$0,{disabled:h===g,onClick:()=>{if(h===g)return;let e=h+1;x(e),null==m||m(e,v)}})})]})})}},90379:function(e,n,t){"use strict";t.d(n,{PF:function(){return a},cg:function(){return o},tB:function(){return l}});var r=t(36164),s=t(1544),i=t(3448);let o=e=>{let{className:n,...t}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("space-y-3",n),...t,children:[(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"})]})},l=e=>{let{className:n,...t}=e;return(0,r.jsx)(i.O,{className:(0,s.cn)("h-4 w-full",n),...t})},a=e=>{let{className:n,...t}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",n),...t,children:[(0,r.jsx)(i.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(i.O,{className:"h-4 w-full"})]})}},31458:function(e,n,t){"use strict";t.d(n,{d:function(){return a},z:function(){return d}});var r=t(36164),s=t(3546),i=t(74047),o=t(14375),l=t(1544);let a=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,n)=>{let{className:t,variant:s,size:o,asChild:d=!1,...u}=e,c=d?i.g7:"button";return(0,r.jsx)(c,{className:(0,l.cn)(a({variant:s,size:o,className:t})),ref:n,...u})});d.displayName="Button"},82394:function(e,n,t){"use strict";t.d(n,{I:function(){return o}});var r=t(36164),s=t(3546),i=t(1544);let o=s.forwardRef((e,n)=>{let{className:t,type:s,...o}=e;return(0,r.jsx)("input",{type:s,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...o})});o.displayName="Input"},49506:function(e,n,t){"use strict";t.d(n,{$0:function(){return m},Dj:function(){return h},dN:function(){return f},kN:function(){return c},ng:function(){return d},nt:function(){return u},tl:function(){return a}});var r=t(36164),s=t(3546),i=t(1544),o=t(31458),l=t(81565);let a=e=>{let{className:n,...t}=e;return(0,r.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,i.cn)("mx-auto flex w-full justify-center",n),...t})};a.displayName="Pagination";let d=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("ul",{ref:n,className:(0,i.cn)("flex flex-row items-center gap-1",t),...s})});d.displayName="PaginationContent";let u=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("li",{ref:n,className:(0,i.cn)("",t),...s})});u.displayName="PaginationItem";let c=e=>{let{className:n,isActive:t,size:s="icon",...l}=e;return(0,r.jsx)("a",{"aria-current":t?"page":void 0,className:(0,i.cn)("select-none",(0,o.d)({variant:t?"outline":"ghost",size:s}),n),...l})};c.displayName="PaginationLink";let f=e=>{let{className:n,disabled:t,...s}=e;return(0,r.jsxs)(c,{"aria-label":"Go to previous page",size:"default",className:(0,i.cn)("cursor-pointer select-none gap-1 pl-2.5",t&&"cursor-not-allowed text-muted-foreground",n),...s,children:[(0,r.jsx)(l.IconChevronLeft,{className:"h-4 w-4"}),(0,r.jsx)("span",{children:"Previous"})]})};f.displayName="PaginationPrevious";let m=e=>{let{className:n,disabled:t,...s}=e;return(0,r.jsxs)(c,{"aria-label":"Go to next page",size:"default",className:(0,i.cn)("cursor-pointer select-none gap-1 pr-2.5",t&&"cursor-not-allowed text-muted-foreground",n),...s,children:[(0,r.jsx)("span",{children:"Next"}),(0,r.jsx)(l.IconChevronRight,{className:"h-4 w-4"})]})};m.displayName="PaginationNext";let h=e=>{let{className:n,...t}=e;return(0,r.jsxs)("span",{"aria-hidden":!0,className:(0,i.cn)("flex h-9 w-9 items-center justify-center",n),...t,children:[(0,r.jsx)(l.IconMore,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"More pages"})]})};h.displayName="PaginationEllipsis"},84942:function(e,n,t){"use strict";t.d(n,{J2:function(){return l},i9:function(){return u},tW:function(){return c},xo:function(){return a},xp:function(){return d},yk:function(){return f}});var r=t(36164),s=t(3546),i=t(83299),o=t(1544);let l=i.fC,a=i.xz,d=i.x8,u=i.h_,c=i.ee,f=s.forwardRef((e,n)=>{let{className:t,sideOffset:s=4,...l}=e;return(0,r.jsx)(i.VY,{ref:n,sideOffset:s,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...l})});f.displayName=i.VY.displayName},54594:function(e,n,t){"use strict";t.d(n,{Bw:function(){return f},DI:function(){return d},Ph:function(){return a},Ql:function(){return h},U$:function(){return x},i4:function(){return c},ki:function(){return u}});var r=t(36164),s=t(3546),i=t(31889),o=t(1544),l=t(81565);let a=i.fC,d=i.ZA,u=i.B4,c=s.forwardRef((e,n)=>{let{className:t,children:s,...a}=e;return(0,r.jsxs)(i.xz,{ref:n,className:(0,o.cn)("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),...a,children:[s,(0,r.jsx)(i.JO,{asChild:!0,children:(0,r.jsx)(l.IconChevronUpDown,{className:"opacity-50"})})]})});c.displayName=i.xz.displayName;let f=s.forwardRef((e,n)=>{let{className:t,children:s,position:l="popper",...a}=e;return(0,r.jsx)(i.h_,{children:(0,r.jsx)(i.VY,{ref:n,className:(0,o.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80","popper"===l&&"translate-y-1",t),position:l,...a,children:(0,r.jsx)(i.l_,{className:(0,o.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s})})})});f.displayName=i.VY.displayName;let m=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(i.__,{ref:n,className:(0,o.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...s})});m.displayName=i.__.displayName;let h=s.forwardRef((e,n)=>{let{className:t,children:s,isPlaceHolder:a,...d}=e;return(0,r.jsxs)(i.ck,{ref:n,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...d,children:[!a&&(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(i.wU,{children:(0,r.jsx)(l.IconCheck,{className:"h-4 w-4"})})}),(0,r.jsx)(i.eT,{children:s})]})});h.displayName=i.ck.displayName;let x=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(i.Z0,{ref:n,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",t),...s})});x.displayName=i.Z0.displayName},3448:function(e,n,t){"use strict";t.d(n,{O:function(){return i}});var r=t(36164),s=t(1544);function i(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",n),...t})}},98815:function(e,n,t){"use strict";t.d(n,{r:function(){return l}});var r=t(36164),s=t(3546),i=t(96887),o=t(1544);let l=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(i.fC,{className:(0,o.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...s,ref:n,children:(0,r.jsx)(i.bU,{className:(0,o.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});l.displayName=i.fC.displayName},99047:function(e,n,t){"use strict";t.d(n,{RM:function(){return a},SC:function(){return u},iA:function(){return o},pj:function(){return f},ss:function(){return c},xD:function(){return l}});var r=t(36164),s=t(3546),i=t(1544);let o=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("table",{ref:n,className:(0,i.cn)("w-full caption-bottom text-sm",t),...s})});o.displayName="Table";let l=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("thead",{ref:n,className:(0,i.cn)("[&_tr]:border-b",t),...s})});l.displayName="TableHeader";let a=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("tbody",{ref:n,className:(0,i.cn)("[&_tr:last-child]:border-0",t),...s})});a.displayName="TableBody";let d=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("tfoot",{ref:n,className:(0,i.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...s})});d.displayName="TableFooter";let u=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("tr",{ref:n,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s})});u.displayName="TableRow";let c=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("th",{ref:n,className:(0,i.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...s})});c.displayName="TableHead";let f=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("td",{ref:n,className:(0,i.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...s})});f.displayName="TableCell";let m=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("caption",{ref:n,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",t),...s})});m.displayName="TableCaption"},29:function(e,n,t){"use strict";t.d(n,{_v:function(){return u},aJ:function(){return d},pn:function(){return l},u:function(){return a}});var r=t(36164),s=t(3546),i=t(44421),o=t(1544);let l=i.zt,a=i.fC,d=i.xz,u=s.forwardRef((e,n)=>{let{className:t,sideOffset:s=4,...l}=e;return(0,r.jsx)(i.VY,{ref:n,sideOffset:s,className:(0,o.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",t),...l})});u.displayName=i.VY.displayName},24449:function(e,n,t){"use strict";t.d(n,{S:function(){return l},n:function(){return a}});var r=t(3546),s=t(45391),i=t(16784);let o=e=>{let n=(0,i.d)(e);r.useEffect(()=>()=>{n.current()},[])};function l(e,n,t){let l=(0,i.d)(e),a=r.useMemo(()=>(0,s.Z)(function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return l.current(...n)},n,t),[]);return o(()=>{var e;null==t||null===(e=t.onUnmount)||void 0===e||e.call(t,a),a.cancel()}),{run:a,cancel:a.cancel,flush:a.flush}}function a(e,n,t){let[s,i]=r.useState(e),{run:o}=l(()=>{i(e)},n,t);return r.useEffect(()=>{o()},[e]),[s,i]}},16784:function(e,n,t){"use strict";t.d(n,{d:function(){return s}});var r=t(3546);function s(e){let n=r.useRef(e);return n.current=e,n}}},function(e){e.O(0,[7565,1386,5498,1058,4007,8439,1283,3449,2578,9421,2287,4421,1889,3299,5238,2252,1544,1565,410,3396,3375,5289,1744],function(){return e(e.s=2545)}),_N_E=e.O()}]);