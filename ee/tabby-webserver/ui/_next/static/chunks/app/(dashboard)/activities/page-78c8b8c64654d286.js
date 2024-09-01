(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4986],{13435:function(e,s,t){Promise.resolve().then(t.bind(t,13211))},13211:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Y},listUserEvents:function(){return D}});var n=t(36164),a=t(3546),r=t(27952),l=t.n(r),d=t(88542),i=t(99092),o=t.n(i),c=t(90665),m=t.n(c),u=t(2578),f=t(40055),x=t(21808),h=t(43240),p=t(18500),v=t(36758),j=t(9010),b=t(31458),g=t(79972),N=t(81565),w=t(54594),y=t(99047),C=t(29),k=t(22119),S=t(6230);let E=l()(()=>t.e(726).then(t.t.bind(t,80726,23)),{loadableGenerated:{webpack:()=>[80726]},ssr:!1}),I="-24h",D=(0,h.BX)("\n  query ListUserEvents(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n  ) {\n    userEvents(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n      start: $start\n      end: $end\n      users: $users\n    ) {\n      edges {\n        node {\n          id\n          userId\n          createdAt\n          kind\n          payload\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n");function Y(){var e,s,t,r;let l=o()().add(parseInt(I,10),"hour"),d=o()(),[i]=(0,v.d)(),[c,m]=a.useState({from:l.toDate(),to:d.toDate()}),[h,p]=a.useState(1),[j,C]=a.useState(),[E,Y]=a.useState("all"),[A,$]=a.useState({last:x.L8}),[{data:P,error:R,fetching:_}]=(0,f.aM)({query:D,variables:{start:o()(c.from).utc().format(),end:c.to?o()(c.to).utc().format():o()(c.from).utc().format(),users:"all"===E?void 0:[E],...A}});return a.useEffect(()=>{(null==P?void 0:P.userEvents.edges.length)&&C(P.userEvents)},[P]),a.useEffect(()=>{(null==R?void 0:R.message)&&u.A.error(R.message)},[R]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"flex w-full flex-col",children:(0,n.jsx)("div",{className:"flex flex-col sm:gap-4 sm:py-4",children:(0,n.jsxs)("main",{className:"grid flex-1 items-start gap-4 py-4 sm:py-0",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-y-2 xl:flex-row xl:items-center xl:justify-between",children:[(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"View raw events generated by team members' activities while interacting with Tabby."}),i.length>0&&(0,n.jsxs)("div",{className:"flex flex-col items-center gap-2 md:flex-row xl:ml-auto",children:[(0,n.jsxs)(w.Ph,{defaultValue:"all",onValueChange:Y,children:[(0,n.jsx)(w.i4,{className:"w-[calc(100vw-2rem)] py-0 md:w-auto",children:(0,n.jsx)("div",{className:"flex h-6 items-center",children:(0,n.jsx)("div",{className:"overflow-hidden text-ellipsis text-left md:w-[190px]",children:(0,n.jsx)(w.ki,{})})})}),(0,n.jsx)(w.Bw,{align:"end",children:(0,n.jsxs)(w.DI,{children:[(0,n.jsx)(w.Ql,{value:"all",children:"All members"}),i.map(e=>(0,n.jsx)(w.Ql,{value:e.id,children:e.name||e.email},e.id))]})})]}),(0,n.jsx)(k.Z,{className:"w-[calc(100vw-2rem)] md:w-[240px]",options:[{label:"Last 24 hours",value:"-24h"},{label:"Last 7 days",value:"-7d"},{label:"Last 14 days",value:"-14d"}],defaultValue:I,onSelect:e=>{m(e),p(1),$({last:x.L8})},hasToday:!0,hasYesterday:!0})]})]}),(0,n.jsx)(S.Z,{loading:_,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(g.Zb,{"x-chunk":"dashboard-06-chunk-0",className:"bg-transparent",children:[(!(null==P?void 0:P.userEvents.edges)||(null==P?void 0:P.userEvents.edges.length)===0)&&(0,n.jsxs)(g.aY,{className:"flex flex-col items-center py-40 text-sm",children:[(0,n.jsx)(N.IconFileSearch,{className:"mb-2 h-10 w-10"}),(0,n.jsx)("p",{className:"font-semibold",children:"No data available for the chosen dates"}),(0,n.jsx)("p",{className:"text-muted-foreground",children:"Please try a different date range"})]}),(null==P?void 0:P.userEvents.edges)&&(null==P?void 0:P.userEvents.edges.length)>0&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(g.aY,{className:"w-[calc(100vw-2rem)] overflow-x-auto px-0 pb-0 md:w-auto",children:(0,n.jsxs)(y.iA,{children:[(0,n.jsx)(y.xD,{children:(0,n.jsxs)(y.SC,{children:[(0,n.jsx)(y.ss,{}),(0,n.jsx)(y.ss,{className:"md:w-[30%]",children:"Event"}),(0,n.jsx)(y.ss,{className:"md:w-[40%]",children:"User"}),(0,n.jsx)(y.ss,{className:"md:w-[30%] md:pr-8",children:"Time"})]})}),(0,n.jsx)(y.RM,{children:null==j?void 0:j.edges.sort((e,s)=>new Date(s.node.createdAt).getTime()-new Date(e.node.createdAt).getTime()).map(e=>(0,n.jsx)(T,{activity:e.node,members:i},e.cursor))})]})})})]}),((null==P?void 0:null===(e=P.userEvents.pageInfo)||void 0===e?void 0:e.hasNextPage)||(null==P?void 0:null===(s=P.userEvents.pageInfo)||void 0===s?void 0:s.hasPreviousPage))&&(0,n.jsxs)("div",{className:"flex justify-end",children:[(0,n.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:[" ","Page ",h]}),(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(b.z,{variant:"outline",className:"h-8 w-8 p-0",disabled:!(null==P?void 0:null===(t=P.userEvents.pageInfo)||void 0===t?void 0:t.hasNextPage),onClick:e=>{var s;$({first:x.L8,after:null==P?void 0:null===(s=P.userEvents.pageInfo)||void 0===s?void 0:s.endCursor}),p(h-1)},children:(0,n.jsx)(N.IconChevronLeft,{className:"h-4 w-4"})}),(0,n.jsx)(b.z,{variant:"outline",className:"h-8 w-8 p-0",disabled:!(null==P?void 0:null===(r=P.userEvents.pageInfo)||void 0===r?void 0:r.hasPreviousPage),onClick:e=>{var s;$({last:x.L8,before:null==P?void 0:null===(s=P.userEvents.pageInfo)||void 0===s?void 0:s.startCursor}),p(h+1)},children:(0,n.jsx)(N.IconChevronRight,{className:"h-4 w-4"})})]})]})]})})]})})})})}function T(e){let s,{activity:t,members:r}=e,{theme:l}=(0,j.X)(),[i,c]=a.useState(!1);try{s=JSON.parse(t.payload)}catch(e){(null==e?void 0:e.message)&&u.A.error(e.message)}if(!s)return null;let f="";switch(t.kind){case p.nS.Completion:f="Code completion supplied";break;case p.nS.Dismiss:f="Code completion viewed but not used";break;case p.nS.Select:f="Code completion accepted and inserted";break;case p.nS.View:f="Code completion shown in editor"}let x=t.userId,h=r.find(e=>e.id===t.userId);return h&&(x=h.name||h.email),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(y.SC,{className:"cursor-pointer text-sm",onClick:()=>c(!i),children:[(0,n.jsx)(y.pj,{className:"pl-4 pr-0",children:(0,n.jsxs)("div",{className:"flex h-8 w-8 items-center justify-center rounded hover:bg-muted",children:[i&&(0,n.jsx)(N.IconChevronsDownUp,{}),!i&&(0,n.jsx)(N.IconChevronUpDown,{})]})}),(0,n.jsx)(y.pj,{className:"font-medium",children:(0,n.jsxs)(C.u,{children:[(0,n.jsx)(C.aJ,{children:(0,d.Z)(t.kind)}),(0,n.jsx)(C._v,{children:(0,n.jsx)("p",{children:f})})]})}),(0,n.jsx)(y.pj,{children:x}),(0,n.jsx)(y.pj,{className:"pr-4 md:pr-8",children:(0,n.jsxs)(C.u,{children:[(0,n.jsx)(C.aJ,{children:o()(t.createdAt).isBefore(o()().subtract(1,"days"))?o()(t.createdAt).format("YYYY-MM-DD HH:mm"):o()(t.createdAt).fromNow()}),(0,n.jsxs)(C._v,{children:[(0,n.jsxs)("p",{className:"py-0.5",children:[(0,n.jsx)("b",{className:"mr-1 inline-block w-7",children:"UTC:"}),o().utc(t.createdAt).format("YYYY-MM-DD HH:mm:ss")]}),(0,n.jsxs)("p",{className:"py-0.5",children:[(0,n.jsxs)("b",{className:"mr-1 inline-block w-7",children:[m().tz(m().tz.guess()).format("z"),":"]}),o()(t.createdAt).format("YYYY-MM-DD HH:mm:ss")]})]})]})})]},"".concat(t.id,"}-1")),i&&(0,n.jsx)(y.SC,{className:"w-full bg-muted/30",children:(0,n.jsx)(y.pj,{className:"px-6 font-medium",colSpan:4,children:(0,n.jsx)(E,{src:s,name:!1,collapseStringsAfterLength:50,theme:"dark"===l?"tomorrow":"rjv-default",style:"dark"===l?{background:"transparent"}:{}})})},"".concat(t.id,"-2"))]})}},99047:function(e,s,t){"use strict";t.d(s,{RM:function(){return i},SC:function(){return c},iA:function(){return l},pj:function(){return u},ss:function(){return m},xD:function(){return d}});var n=t(36164),a=t(3546),r=t(74248);let l=a.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,n.jsx)("table",{ref:s,className:(0,r.cn)("w-full caption-bottom text-sm",t),...a})});l.displayName="Table";let d=a.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,n.jsx)("thead",{ref:s,className:(0,r.cn)("[&_tr]:border-b",t),...a})});d.displayName="TableHeader";let i=a.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,n.jsx)("tbody",{ref:s,className:(0,r.cn)("[&_tr:last-child]:border-0",t),...a})});i.displayName="TableBody";let o=a.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,n.jsx)("tfoot",{ref:s,className:(0,r.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...a})});o.displayName="TableFooter";let c=a.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,n.jsx)("tr",{ref:s,className:(0,r.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...a})});c.displayName="TableRow";let m=a.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,n.jsx)("th",{ref:s,className:(0,r.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...a})});m.displayName="TableHead";let u=a.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,n.jsx)("td",{ref:s,className:(0,r.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...a})});u.displayName="TableCell";let f=a.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,n.jsx)("caption",{ref:s,className:(0,r.cn)("mt-4 text-sm text-muted-foreground",t),...a})});f.displayName="TableCaption"},29:function(e,s,t){"use strict";t.d(s,{_v:function(){return c},aJ:function(){return o},pn:function(){return d},u:function(){return i}});var n=t(36164),a=t(3546),r=t(44421),l=t(74248);let d=r.zt,i=r.fC,o=r.xz,c=a.forwardRef((e,s)=>{let{className:t,sideOffset:a=4,...d}=e;return(0,n.jsx)(r.VY,{ref:s,sideOffset:a,className:(0,l.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",t),...d})});c.displayName=r.VY.displayName}},function(e){e.O(0,[7565,2897,7998,5498,530,7980,259,2578,5135,4421,3882,1889,8413,4239,9736,1565,4017,3375,5289,1744],function(){return e(e.s=13435)}),_N_E=e.O()}]);