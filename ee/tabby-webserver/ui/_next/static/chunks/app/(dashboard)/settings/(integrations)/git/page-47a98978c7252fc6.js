(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8043],{32659:function(e,t,n){Promise.resolve().then(n.bind(n,4791))},99268:function(e,t,n){"use strict";n.d(t,{I:function(){return s}});var r=n(57437),i=n(52373);let s=e=>{let{className:t}=e;return(0,r.jsx)(i.b,{className:t,externalLink:"https://tabby.tabbyml.com/blog/2023/10/16/repository-context-for-code-completion",children:"Connect to Git repositories and uses these repositories as a context to enhance performance of large language model."})}},4791:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(57437),i=n(61396),s=n.n(i),o=n(93023),a=n(99268),l=n(2265),c=n(71424),u=n(99109),d=n(61985),f=n(60106),m=n(7820),x=n(57166),v=n(84168),h=n(91320),p=n(32553),g=n(70825);let b=(0,f.BX)("\n  mutation deleteRepository($id: ID!) {\n    deleteRepository(id: $id)\n  }\n"),j=d.L;function N(){var e,t;let n=(0,u.m8)(),[{data:i,fetching:s}]=(0,u.aM)({query:x.S1,variables:{first:j}}),[a,d]=l.useState(1),f=null==i?void 0:null===(e=i.repositories)||void 0===e?void 0:e.edges,N=null==i?void 0:null===(t=i.repositories)||void 0===t?void 0:t.pageInfo,y=Math.ceil(((null==f?void 0:f.length)||0)/j),w=l.useMemo(()=>{var e;return null==f?void 0:null===(e=f.slice)||void 0===e?void 0:e.call(f,(a-1)*j,a*j)},[a,f]),Z=(null==N?void 0:N.hasNextPage)||a<y,O=a>1,R=!!(null==w?void 0:w.length)&&(Z||O),T=e=>n.query(x.S1,e).toPromise(),C=(0,m.Db)(b),S=e=>{C({id:e.id}).then(e=>{if(null==e?void 0:e.error){c.A.error(e.error.message);return}})};return l.useEffect(()=>{y<a&&a>1&&d(y)},[y,a]),(0,r.jsxs)(g.Z,{loading:s,children:[(0,r.jsxs)(p.iA,{className:"table-fixed border-b",children:[(0,r.jsx)(p.xD,{children:(0,r.jsxs)(p.SC,{children:[(0,r.jsx)(p.ss,{className:"w-[25%]",children:"Name"}),(0,r.jsx)(p.ss,{children:"Git URL"}),(0,r.jsx)(p.ss,{className:"w-[100px]"})]})}),(0,r.jsx)(p.RM,{children:(null==w?void 0:w.length)||1!==a?(0,r.jsx)(r.Fragment,{children:null==w?void 0:w.map(e=>(0,r.jsxs)(p.SC,{children:[(0,r.jsx)(p.pj,{className:"truncate",children:e.node.name}),(0,r.jsx)(p.pj,{className:"truncate",children:e.node.gitUrl}),(0,r.jsx)(p.pj,{className:"flex justify-end",children:(0,r.jsx)("div",{className:"flex gap-1",children:(0,r.jsx)(o.z,{size:"icon",variant:"hover-destructive",onClick:()=>S(e.node),children:(0,r.jsx)(v.IconTrash,{})})})})]},e.node.id))}):(0,r.jsx)(p.SC,{children:(0,r.jsx)(p.pj,{colSpan:3,className:"h-[100px] text-center",children:"No Data"})})})]}),R&&(0,r.jsx)(h.tl,{className:"my-4",children:(0,r.jsxs)(h.ng,{children:[(0,r.jsx)(h.nt,{children:(0,r.jsx)(h.dN,{disabled:!O,onClick:()=>{!(a<=1)&&(s||d(e=>e-1))}})}),(0,r.jsx)(h.nt,{children:(0,r.jsx)(h.$0,{disabled:!Z,onClick:()=>{Z&&(s||T({first:j,after:null==N?void 0:N.endCursor}).then(e=>{var t,n,r;(null==e?void 0:null===(r=e.data)||void 0===r?void 0:null===(n=r.repositories)||void 0===n?void 0:null===(t=n.edges)||void 0===t?void 0:t.length)&&d(e=>e+1)}))}})})]})})]})}function y(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.I,{}),(0,r.jsx)(N,{}),(0,r.jsx)("div",{className:"mt-4 flex justify-end",children:(0,r.jsx)(s(),{href:"/settings/git/new",className:(0,o.d)(),children:"Create"})})]})}},70825:function(e,t,n){"use strict";var r=n(57437),i=n(2265),s=n(12897),o=n(93111);t.Z=e=>{let{loading:t,fallback:n,delay:a,children:l}=e,[c,u]=i.useState(!t),[d]=(0,s.n)(c,null!=a?a:200);return(i.useEffect(()=>{t||c||u(!0)},[t]),d)?l:n||(0,r.jsx)(o.c,{})}},93111:function(e,t,n){"use strict";n.d(t,{P:function(){return a},c:function(){return o}});var r=n(57437),i=n(39311),s=n(25645);let o=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,i.cn)("space-y-3",t),...n,children:[(0,r.jsx)(s.O,{className:"h-4 w-full"}),(0,r.jsx)(s.O,{className:"h-4 w-full"}),(0,r.jsx)(s.O,{className:"h-4 w-full"}),(0,r.jsx)(s.O,{className:"h-4 w-full"})]})},a=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,i.cn)("flex flex-col gap-3",t),...n,children:[(0,r.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(s.O,{className:"h-4 w-full"}),(0,r.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(s.O,{className:"h-4 w-full"})]})}},52373:function(e,t,n){"use strict";n.d(t,{b:function(){return l}});var r=n(57437);n(2265);var i=n(61396),s=n.n(i),o=n(39311),a=n(84168);let l=e=>{let{className:t,externalLink:n,externalLinkText:i="Learn more",children:l}=e;return(0,r.jsx)("div",{className:(0,o.cn)("mb-4 flex items-center gap-4",t),children:(0,r.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[l,!!n&&(0,r.jsxs)(s(),{className:"ml-2 inline-flex cursor-pointer flex-row items-center text-primary hover:underline",href:n,target:"_blank",children:[i,(0,r.jsx)(a.IconExternalLink,{className:"ml-1"})]})]})})}},93023:function(e,t,n){"use strict";n.d(t,{d:function(){return l},z:function(){return c}});var r=n(57437),i=n(2265),s=n(67256),o=n(7404),a=n(39311);let l=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),c=i.forwardRef((e,t)=>{let{className:n,variant:i,size:o,asChild:c=!1,...u}=e,d=c?s.g7:"button";return(0,r.jsx)(d,{className:(0,a.cn)(l({variant:i,size:o,className:n})),ref:t,...u})});c.displayName="Button"},91320:function(e,t,n){"use strict";n.d(t,{$0:function(){return m},dN:function(){return f},ng:function(){return c},nt:function(){return u},tl:function(){return l}});var r=n(57437),i=n(2265),s=n(39311),o=n(93023),a=n(84168);let l=e=>{let{className:t,...n}=e;return(0,r.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,s.cn)("mx-auto flex w-full justify-center",t),...n})};l.displayName="Pagination";let c=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("ul",{ref:t,className:(0,s.cn)("flex flex-row items-center gap-1",n),...i})});c.displayName="PaginationContent";let u=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("li",{ref:t,className:(0,s.cn)("",n),...i})});u.displayName="PaginationItem";let d=e=>{let{className:t,isActive:n,size:i="icon",...a}=e;return(0,r.jsx)("a",{"aria-current":n?"page":void 0,className:(0,s.cn)((0,o.d)({variant:n?"outline":"ghost",size:i}),t),...a})};d.displayName="PaginationLink";let f=e=>{let{className:t,disabled:n,...i}=e;return(0,r.jsxs)(d,{"aria-label":"Go to previous page",size:"default",className:(0,s.cn)("cursor-pointer gap-1 pl-2.5",n&&"cursor-not-allowed text-muted-foreground",t),...i,children:[(0,r.jsx)(a.IconChevronLeft,{className:"h-4 w-4"}),(0,r.jsx)("span",{children:"Previous"})]})};f.displayName="PaginationPrevious";let m=e=>{let{className:t,disabled:n,...i}=e;return(0,r.jsxs)(d,{"aria-label":"Go to next page",size:"default",className:(0,s.cn)("cursor-pointer gap-1 pr-2.5",n&&"cursor-not-allowed text-muted-foreground",t),...i,children:[(0,r.jsx)("span",{children:"Next"}),(0,r.jsx)(a.IconChevronRight,{className:"h-4 w-4"})]})};m.displayName="PaginationNext"},25645:function(e,t,n){"use strict";n.d(t,{O:function(){return s}});var r=n(57437),i=n(39311);function s(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...n})}},32553:function(e,t,n){"use strict";n.d(t,{RM:function(){return l},SC:function(){return u},iA:function(){return o},pj:function(){return f},ss:function(){return d},xD:function(){return a}});var r=n(57437),i=n(2265),s=n(39311);let o=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("table",{ref:t,className:(0,s.cn)("w-full caption-bottom text-sm",n),...i})});o.displayName="Table";let a=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("thead",{ref:t,className:(0,s.cn)("[&_tr]:border-b",n),...i})});a.displayName="TableHeader";let l=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,s.cn)("[&_tr:last-child]:border-0",n),...i})});l.displayName="TableBody";let c=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",n),...i})});c.displayName="TableFooter";let u=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("tr",{ref:t,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",n),...i})});u.displayName="TableRow";let d=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("th",{ref:t,className:(0,s.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",n),...i})});d.displayName="TableHead";let f=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("td",{ref:t,className:(0,s.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",n),...i})});f.displayName="TableCell";let m=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("caption",{ref:t,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",n),...i})});m.displayName="TableCaption"},61985:function(e,t,n){"use strict";n.d(t,{L:function(){return i},o:function(){return r}});let r="name@yourcompany.com",i=20},12897:function(e,t,n){"use strict";n.d(t,{S:function(){return a},n:function(){return l}});var r=n(2265),i=n(50976);function s(e){let t=r.useRef(e);return t.current=e,t}let o=e=>{let t=s(e);r.useEffect(()=>()=>{t.current()},[])};function a(e,t,n){let a=s(e),l=r.useMemo(()=>(0,i.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a.current(...t)},t,n),[]);return o(()=>l.cancel()),{run:l,cancel:l.cancel,flush:l.flush}}function l(e,t,n){let[i,s]=r.useState(e),{run:o}=a(()=>{s(e)},t,n);return r.useEffect(()=>{o()},[e]),[i,s]}},34463:function(e,t,n){"use strict";var r=n(90440).Z.Symbol;t.Z=r},87916:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(34463),i=Object.prototype,s=i.hasOwnProperty,o=i.toString,a=r.Z?r.Z.toStringTag:void 0,l=function(e){var t=s.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var i=o.call(e);return r&&(t?e[a]=n:delete e[a]),i},c=Object.prototype.toString,u=r.Z?r.Z.toStringTag:void 0,d=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":u&&u in Object(e)?l(e):c.call(e)}},18838:function(e,t){"use strict";var n="object"==typeof global&&global&&global.Object===Object&&global;t.Z=n},90440:function(e,t,n){"use strict";var r=n(18838),i="object"==typeof self&&self&&self.Object===Object&&self,s=r.Z||i||Function("return this")();t.Z=s},50976:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(64164),i=n(90440),s=function(){return i.Z.Date.now()},o=n(4091),a=Math.max,l=Math.min,c=function(e,t,n){var i,c,u,d,f,m,x=0,v=!1,h=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=i,r=c;return i=c=void 0,x=t,d=e.apply(r,n)}function b(e){var n=e-m,r=e-x;return void 0===m||n>=t||n<0||h&&r>=u}function j(){var e,n,r,i=s();if(b(i))return N(i);f=setTimeout(j,(e=i-m,n=i-x,r=t-e,h?l(r,u-n):r))}function N(e){return(f=void 0,p&&i)?g(e):(i=c=void 0,d)}function y(){var e,n=s(),r=b(n);if(i=arguments,c=this,m=n,r){if(void 0===f)return x=e=m,f=setTimeout(j,t),v?g(e):d;if(h)return clearTimeout(f),f=setTimeout(j,t),g(m)}return void 0===f&&(f=setTimeout(j,t)),d}return t=(0,o.Z)(t)||0,(0,r.Z)(n)&&(v=!!n.leading,u=(h="maxWait"in n)?a((0,o.Z)(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),y.cancel=function(){void 0!==f&&clearTimeout(f),x=0,i=m=c=f=void 0},y.flush=function(){return void 0===f?d:N(s())},y}},64164:function(e,t){"use strict";t.Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},92403:function(e,t){"use strict";t.Z=function(e){return null!=e&&"object"==typeof e}},45856:function(e,t,n){"use strict";var r=n(87916),i=n(92403);t.Z=function(e){return"symbol"==typeof e||(0,i.Z)(e)&&"[object Symbol]"==(0,r.Z)(e)}},4091:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=/\s/,i=function(e){for(var t=e.length;t--&&r.test(e.charAt(t)););return t},s=/^\s+/,o=n(64164),a=n(45856),l=0/0,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,m=function(e){if("number"==typeof e)return e;if((0,a.Z)(e))return l;if((0,o.Z)(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=(0,o.Z)(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=(t=e)?t.slice(0,i(t)+1).replace(s,""):t;var r=u.test(e);return r||d.test(e)?f(e.slice(2),r?2:8):c.test(e)?l:+e}}},function(e){e.O(0,[3529,4762,1424,2363,7753,4168,2445,2971,7864,1744],function(){return e(e.s=32659)}),_N_E=e.O()}]);