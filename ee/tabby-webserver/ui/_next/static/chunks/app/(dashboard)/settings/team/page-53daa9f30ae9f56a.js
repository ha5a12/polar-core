(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3816],{7404:function(e,t,r){"use strict";r.d(t,{j:function(){return s}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.flat(1/0).filter(Boolean).join(" ")},s=(e,t)=>r=>{var s;if((null==t?void 0:t.variants)==null)return a(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:l,defaultVariants:i}=t,o=Object.keys(l).map(e=>{let t=null==r?void 0:r[e],a=null==i?void 0:i[e];if(null===t)return null;let s=n(t)||n(a);return l[e][s]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{}),c=null==t?void 0:null===(s=t.compoundVariants)||void 0===s?void 0:s.reduce((e,t)=>{let{class:r,className:n,...a}=t;return Object.entries(a).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...i,...d}[t]):({...i,...d})[t]===r})?[...e,r,n]:e},[]);return a(e,o,c,null==r?void 0:r.class,null==r?void 0:r.className)}},2390:function(e,t,r){"use strict";var n=r(25809),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,s,l,i,o,d,c,u,f=!1;t||(t={}),l=t.debug||!1;try{if(o=n(),d=document.createRange(),c=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=a[t.format]||a.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(u),d.selectNodeContents(u),c.addRange(d),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(n){l&&console.error("unable to copy using execCommand: ",n),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(n){l&&console.error("unable to copy using clipboardData: ",n),l&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",s=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",i=r.replace(/#{\s*key\s*}/g,s),window.prompt(i,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(d):c.removeAllRanges()),u&&document.body.removeChild(u),o()}return f}},83850:function(e,t,r){Promise.resolve().then(r.bind(r,15120))},15120:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return U}});var n=r(57437),a=r(86110),s=r(2265),l=r(62067),i=r.n(l),o=r(71424),d=r(99109),c=r(61985),u=r(58835),f=r(7820),m=r(57166),v=r(93023),x=r(84168),p=r(91320),h=r(32553),g=r(33555),j=r(38110),N=r(61865),b=r(74578),y=r(41315),w=r(51908);let C=(0,u.BX)("\n  mutation CreateInvitation($email: String!) {\n    createInvitation(email: $email)\n  }\n"),R=b.Ry({email:b.Z_().email("Invalid email address")});function I(e){let{onCreated:t}=e,r=(0,N.cI)({resolver:(0,j.F)(R)}),{isSubmitting:a}=r.formState,s=(0,f.Db)(C,{onCompleted(){r.reset({email:""}),t()},form:r});return(0,n.jsx)(y.l0,{...r,children:(0,n.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,n.jsxs)("form",{className:"flex w-full items-center gap-2",onSubmit:r.handleSubmit(s),children:[(0,n.jsx)(y.Wi,{control:r.control,name:"email",render:e=>{let{field:t}=e;return(0,n.jsx)(y.xJ,{children:(0,n.jsx)(y.NI,{children:(0,n.jsx)(w.I,{className:"w-60",placeholder:c.o,type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",...t})})})}}),(0,n.jsx)(v.z,{type:"submit",disabled:a,children:"Invite"})]}),(0,n.jsx)(y.zG,{className:"text-center"})]})})}let A=(0,u.BX)("\n  mutation DeleteInvitation($id: ID!) {\n    deleteInvitation(id: $id)\n  }\n"),D=c.L;function S(){var e,t;let r=(0,d.m8)(),[{data:a,fetching:l}]=(0,d.aM)({query:m.l,variables:{first:D}}),[c,u]=s.useState(!1),[j,N]=s.useState(1),b=null==a?void 0:null===(e=a.invitations)||void 0===e?void 0:e.edges,y=null==a?void 0:null===(t=a.invitations)||void 0===t?void 0:t.pageInfo,w=Math.ceil(((null==b?void 0:b.length)||0)/D),C=s.useMemo(()=>{var e;return null==b?void 0:null===(e=b.slice)||void 0===e?void 0:e.call(b,(j-1)*D,j*D)},[j,b]),R=(null==y?void 0:y.hasNextPage)||j<w,S=j>1,P=e=>r.query(m.l,e).toPromise(),k=async e=>{var t,r,n,a,s;let l=await P({first:D,after:e}),i=(null==l?void 0:null===(n=l.data)||void 0===n?void 0:null===(r=n.invitations)||void 0===r?void 0:null===(t=r.edges)||void 0===t?void 0:t.length)||0,o=null==l?void 0:null===(s=l.data)||void 0===s?void 0:null===(a=s.invitations)||void 0===a?void 0:a.pageInfo;return(null==o?void 0:o.hasNextPage)&&(null==o?void 0:o.endCursor)&&(i=await k(o.endCursor)),i},E=async()=>{try{var e;u(!0);let t=k(null!==(e=null==y?void 0:y.endCursor)&&void 0!==e?e:void 0);return t}catch(e){return 0}finally{u(!1)}},[$,T]=(0,s.useState)("");(0,s.useEffect)(()=>{T(new URL(window.location.href).origin)},[]);let _=(0,f.Db)(A),z=async()=>{o.A.success("Invitation created"),E().then(e=>{N(Math.ceil((e||0)/D))})},F=e=>{_({id:e.id}).then(t=>{var r;if(null==t?void 0:t.error){o.A.error(t.error.message);return}(null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.deleteInvitation)&&o.A.success("".concat(e.email," deleted"))})};return s.useEffect(()=>{w<j&&j>1&&N(w)},[w,j]),(0,n.jsxs)("div",{children:[(0,n.jsx)(I,{onCreated:z}),(0,n.jsxs)(h.iA,{className:"mt-4 border-b",children:[!!(null==C?void 0:C.length)&&(0,n.jsx)(h.xD,{children:(0,n.jsxs)(h.SC,{children:[(0,n.jsx)(h.ss,{className:"w-[25%]",children:"Invitee"}),(0,n.jsx)(h.ss,{className:"w-[45%]",children:"Created"}),(0,n.jsx)(h.ss,{})]})}),(0,n.jsx)(h.RM,{children:null==C?void 0:C.map(e=>{let t="".concat($,"/auth/signup?invitationCode=").concat(e.node.code);return(0,n.jsxs)(h.SC,{children:[(0,n.jsx)(h.pj,{children:e.node.email}),(0,n.jsx)(h.pj,{children:i().utc(e.node.createdAt).fromNow()}),(0,n.jsx)(h.pj,{className:"flex justify-end",children:(0,n.jsxs)("div",{className:"flex gap-1",children:[(0,n.jsx)(g.q,{value:t}),(0,n.jsx)(v.z,{size:"icon",variant:"hover-destructive",onClick:()=>F(e.node),children:(0,n.jsx)(x.IconTrash,{})})]})})]},e.node.id)})})]}),(R||S)&&(0,n.jsx)(p.tl,{className:"my-4",children:(0,n.jsxs)(p.ng,{children:[(0,n.jsx)(p.nt,{children:(0,n.jsx)(p.dN,{disabled:!S,onClick:()=>{!(j<=1)&&(c||l||N(e=>e-1))}})}),(0,n.jsx)(p.nt,{children:(0,n.jsx)(p.$0,{disabled:!R,onClick:()=>{R&&(c||l||P({first:D,after:null==y?void 0:y.endCursor}).then(e=>{var t,r,n;(null==e?void 0:null===(n=e.data)||void 0===n?void 0:null===(r=n.invitations)||void 0===r?void 0:null===(t=r.edges)||void 0===t?void 0:t.length)&&N(e=>e+1)}))}})})]})})]})}var P=r(7404),k=r(39311);let E=(0,P.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",successful:"border-transparent bg-successful text-successful-foreground hover:bg-successful/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function $(e){let{className:t,variant:r,...a}=e;return(0,n.jsx)("div",{className:(0,k.cn)(E({variant:r}),t),...a})}var T=r(56434);let _=(0,u.BX)("\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          createdAt\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),z=(0,u.BX)("\n  mutation UpdateUserActive($id: ID!, $active: Boolean!) {\n    updateUserActive(id: $id, active: $active)\n  }\n"),F=c.L;function M(){var e;let[t,r]=s.useState({first:F}),[{data:a,error:l},c]=(0,d.aM)({query:_,variables:t}),[u,m]=s.useState();s.useEffect(()=>{var e;let t=null==a?void 0:a.users;(null==t?void 0:null===(e=t.edges)||void 0===e?void 0:e.length)&&m(t)},[a]),s.useEffect(()=>{(null==l?void 0:l.message)&&o.A.error(l.message)},[l]);let g=(0,f.Db)(z),j=(e,t)=>{g({id:e.id,active:t}).then(r=>{var n,a;if((null==r?void 0:r.error)||!(null==r?void 0:null===(n=r.data)||void 0===n?void 0:n.updateUserActive)){o.A.error((null==r?void 0:null===(a=r.error)||void 0===a?void 0:a.message)||"".concat(t?"activate":"deactivate"," failed"));return}c(),o.A.success("".concat(e.email," is ").concat(t?"activated":"deactivated"))})},N=null==u?void 0:u.pageInfo;return!!(null==u?void 0:null===(e=u.edges)||void 0===e?void 0:e.length)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.iA,{className:"border-b",children:[(0,n.jsx)(h.xD,{children:(0,n.jsxs)(h.SC,{children:[(0,n.jsx)(h.ss,{className:"w-[25%]",children:"Email"}),(0,n.jsx)(h.ss,{className:"w-[35%]",children:"Joined"}),(0,n.jsx)(h.ss,{className:"w-[15%] text-center",children:"Status"}),(0,n.jsx)(h.ss,{className:"w-[15%] text-center",children:"Level"}),(0,n.jsx)(h.ss,{className:"w-[100px]"})]})}),(0,n.jsx)(h.RM,{children:u.edges.map(e=>(0,n.jsxs)(h.SC,{children:[(0,n.jsx)(h.pj,{children:e.node.email}),(0,n.jsx)(h.pj,{children:i().utc(e.node.createdAt).fromNow()}),(0,n.jsx)(h.pj,{className:"text-center",children:e.node.active?(0,n.jsx)($,{variant:"successful",children:"Active"}):(0,n.jsx)($,{variant:"secondary",children:"Inactive"})}),(0,n.jsx)(h.pj,{className:"text-center",children:e.node.isAdmin?(0,n.jsx)($,{children:"ADMIN"}):(0,n.jsx)($,{variant:"secondary",children:"MEMBER"})}),(0,n.jsx)(h.pj,{className:"text-end",children:(0,n.jsxs)(T.h_,{children:[(0,n.jsx)(T.$F,{asChild:!0,children:(0,n.jsx)("div",{className:"h-8",children:e.node.isAdmin?null:(0,n.jsx)(v.z,{size:"icon",variant:"ghost",children:(0,n.jsx)(x.IconMore,{})})})}),(0,n.jsxs)(T.AW,{collisionPadding:{right:16},children:[e.node.active&&(0,n.jsx)(T.Xi,{onSelect:()=>j(e.node,!1),className:"cursor-pointer",children:(0,n.jsx)("span",{className:"ml-2",children:"Deactivate"})}),!e.node.active&&(0,n.jsx)(T.Xi,{onSelect:()=>j(e.node,!0),className:"cursor-pointer",children:(0,n.jsx)("span",{className:"ml-2",children:"Activate"})})]})]})})]},e.node.id))})]}),((null==N?void 0:N.hasNextPage)||(null==N?void 0:N.hasPreviousPage))&&(0,n.jsx)(p.tl,{className:"my-4",children:(0,n.jsxs)(p.ng,{children:[(0,n.jsx)(p.nt,{children:(0,n.jsx)(p.dN,{disabled:!(null==N?void 0:N.hasPreviousPage),onClick:e=>r({last:F,before:null==N?void 0:N.startCursor})})}),(0,n.jsx)(p.nt,{children:(0,n.jsx)(p.$0,{disabled:!(null==N?void 0:N.hasNextPage),onClick:e=>r({first:F,after:null==N?void 0:N.endCursor})})})]})})]})}function U(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(a.Ol,{children:(0,n.jsx)(a.ll,{children:"Pending Invites"})}),(0,n.jsx)(a.aY,{className:"p-4",children:(0,n.jsx)(S,{})})]}),(0,n.jsx)("div",{className:"h-16"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(a.Ol,{children:(0,n.jsx)(a.ll,{children:"Members"})}),(0,n.jsx)(a.aY,{className:"p-4",children:(0,n.jsx)(M,{})})]})]})}},33555:function(e,t,r){"use strict";r.d(t,{q:function(){return i}});var n=r(57437);r(2265);var a=r(77723),s=r(93023),l=r(84168);function i(e){let{className:t,value:r,...i}=e,{isCopied:o,copyToClipboard:d}=(0,a.m)({timeout:2e3});return r?(0,n.jsxs)(s.z,{variant:"ghost",size:"icon",className:t,onClick:()=>{o||d(r)},...i,children:[o?(0,n.jsx)(l.IconCheck,{className:"text-green-600"}):(0,n.jsx)(l.IconCopy,{}),(0,n.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},86110:function(e,t,r){"use strict";r.d(t,{Ol:function(){return i},Zb:function(){return l},aY:function(){return c},eW:function(){return u},ll:function(){return o}});var n=r(57437),a=r(2265),s=r(39311);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});l.displayName="Card";let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...a})});i.displayName="CardHeader";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});o.displayName="CardTitle";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...a})});d.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...a})});c.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...a})});u.displayName="CardFooter"},56434:function(e,t,r){"use strict";r.d(t,{$F:function(){return o},AW:function(){return c},Ju:function(){return f},VD:function(){return m},Xi:function(){return u},h_:function(){return i}});var n=r(57437),a=r(2265),s=r(5782),l=r(39311);let i=s.fC,o=s.xz;s.ZA,s.Uv,s.Tr,s.Ee;let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.tu,{ref:t,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",r),...a})});d.displayName=s.tu.displayName;let c=a.forwardRef((e,t)=>{let{className:r,sideOffset:a=4,...i}=e;return(0,n.jsx)(s.Uv,{children:(0,n.jsx)(s.VY,{ref:t,sideOffset:a,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...i})})});c.displayName=s.VY.displayName;let u=a.forwardRef((e,t)=>{let{className:r,inset:a,...i}=e;return(0,n.jsx)(s.ck,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a&&"pl-8",r),...i})});u.displayName=s.ck.displayName;let f=a.forwardRef((e,t)=>{let{className:r,inset:a,...i}=e;return(0,n.jsx)(s.__,{ref:t,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",a&&"pl-8",r),...i})});f.displayName=s.__.displayName;let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",r),...a})});m.displayName=s.Z0.displayName},41315:function(e,t,r){"use strict";r.d(t,{NI:function(){return p},Wi:function(){return u},l0:function(){return d},lX:function(){return x},pf:function(){return h},xJ:function(){return v},zG:function(){return g}});var n=r(57437),a=r(2265),s=r(67256),l=r(61865),i=r(39311),o=r(66672);let d=l.RV,c=a.createContext({}),u=e=>{let{...t}=e;return(0,n.jsx)(c.Provider,{value:{name:t.name},children:(0,n.jsx)(l.Qr,{...t})})},f=()=>{let e=a.useContext(c),t=a.useContext(m),{getFieldState:r,formState:n}=(0,l.Gc)(),s=e.name||"root",i=r(s,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:o}=t;return{id:o,name:s,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...i}},m=a.createContext({}),v=a.forwardRef((e,t)=>{let{className:r,...s}=e,l=a.useId();return(0,n.jsx)(m.Provider,{value:{id:l},children:(0,n.jsx)("div",{ref:t,className:(0,i.cn)("space-y-2",r),...s})})});v.displayName="FormItem";let x=a.forwardRef((e,t)=>{let{className:r,required:a,...s}=e,{error:l,formItemId:d}=f();return(0,n.jsx)(o._,{ref:t,className:(0,i.cn)(l&&"text-destructive",a&&'after:ml-0.5 after:text-destructive after:content-["*"]',r),htmlFor:d,...s})});x.displayName="FormLabel";let p=a.forwardRef((e,t)=>{let{...r}=e,{error:a,formItemId:l,formDescriptionId:i,formMessageId:o}=f();return(0,n.jsx)(s.g7,{ref:t,id:l,"aria-describedby":a?"".concat(i," ").concat(o):"".concat(i),"aria-invalid":!!a,...r})});p.displayName="FormControl";let h=a.forwardRef((e,t)=>{let{className:r,...a}=e,{formDescriptionId:s}=f();return(0,n.jsx)("p",{ref:t,id:s,className:(0,i.cn)("text-sm text-muted-foreground",r),...a})});h.displayName="FormDescription";let g=a.forwardRef((e,t)=>{let{className:r,children:a,...s}=e,{error:l,formMessageId:o}=f(),d=l?String(null==l?void 0:l.message):a;return d?(0,n.jsx)("p",{ref:t,id:o,className:(0,i.cn)("text-sm font-medium text-destructive",r),...s,children:d}):null});g.displayName="FormMessage"},66672:function(e,t,r){"use strict";r.d(t,{_:function(){return d}});var n=r(57437),a=r(2265),s=r(36743),l=r(7404),i=r(39311);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.f,{ref:t,className:(0,i.cn)(o(),r),...a})});d.displayName=s.f.displayName},91320:function(e,t,r){"use strict";r.d(t,{$0:function(){return m},dN:function(){return f},ng:function(){return d},nt:function(){return c},tl:function(){return o}});var n=r(57437),a=r(2265),s=r(39311),l=r(93023),i=r(84168);let o=e=>{let{className:t,...r}=e;return(0,n.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,s.cn)("mx-auto flex w-full justify-center",t),...r})};o.displayName="Pagination";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("ul",{ref:t,className:(0,s.cn)("flex flex-row items-center gap-1",r),...a})});d.displayName="PaginationContent";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("li",{ref:t,className:(0,s.cn)("",r),...a})});c.displayName="PaginationItem";let u=e=>{let{className:t,isActive:r,size:a="icon",...i}=e;return(0,n.jsx)("a",{"aria-current":r?"page":void 0,className:(0,s.cn)((0,l.d)({variant:r?"outline":"ghost",size:a}),t),...i})};u.displayName="PaginationLink";let f=e=>{let{className:t,disabled:r,...a}=e;return(0,n.jsxs)(u,{"aria-label":"Go to previous page",size:"default",className:(0,s.cn)("cursor-pointer gap-1 pl-2.5",r&&"cursor-not-allowed text-muted-foreground",t),...a,children:[(0,n.jsx)(i.IconChevronLeft,{className:"h-4 w-4"}),(0,n.jsx)("span",{children:"Previous"})]})};f.displayName="PaginationPrevious";let m=e=>{let{className:t,disabled:r,...a}=e;return(0,n.jsxs)(u,{"aria-label":"Go to next page",size:"default",className:(0,s.cn)("cursor-pointer gap-1 pr-2.5",r&&"cursor-not-allowed text-muted-foreground",t),...a,children:[(0,n.jsx)("span",{children:"Next"}),(0,n.jsx)(i.IconChevronRight,{className:"h-4 w-4"})]})};m.displayName="PaginationNext"},32553:function(e,t,r){"use strict";r.d(t,{RM:function(){return o},SC:function(){return c},iA:function(){return l},pj:function(){return f},ss:function(){return u},xD:function(){return i}});var n=r(57437),a=r(2265),s=r(39311);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:t,className:(0,s.cn)("w-full caption-bottom text-sm",r),...a})})});l.displayName="Table";let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("thead",{ref:t,className:(0,s.cn)("[&_tr]:border-b",r),...a})});i.displayName="TableHeader";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tbody",{ref:t,className:(0,s.cn)("[&_tr:last-child]:border-0",r),...a})});o.displayName="TableBody";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tfoot",{ref:t,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...a})});d.displayName="TableFooter";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tr",{ref:t,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...a})});c.displayName="TableRow";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("th",{ref:t,className:(0,s.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...a})});u.displayName="TableHead";let f=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("td",{ref:t,className:(0,s.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...a})});f.displayName="TableCell";let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("caption",{ref:t,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",r),...a})});m.displayName="TableCaption"},61985:function(e,t,r){"use strict";r.d(t,{L:function(){return a},o:function(){return n}});let n="name@yourcompany.com",a=20},77723:function(e,t,r){"use strict";r.d(t,{m:function(){return i}});var n=r(2265),a=r(2390),s=r.n(a),l=r(71424);function i(e){let{timeout:t=2e3,onError:r}=e,[a,i]=n.useState(!1),o=()=>{i(!0),setTimeout(()=>{i(!1)},t)},d=e=>{if("function"==typeof r){null==r||r(e);return}l.A.error("Failed to copy.")};return{isCopied:a,copyToClipboard:e=>{var t;if(e){if(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText)navigator.clipboard.writeText(e).then(o).catch(d);else{let t=s()(e);t?o():d()}}}}}},25809:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},function(e){e.O(0,[6990,1091,2195,1424,3072,9233,8208,9518,7070,5782,4402,1894,2032,2971,7864,1744],function(){return e(e.s=83850)}),_N_E=e.O()}]);