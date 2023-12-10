(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{99742:function(e,r,t){Promise.resolve().then(t.bind(t,45908))},45908:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return M}});var n=t(57437),s=t(86110),a=t(2265),i=t(62067),l=t.n(i),o=t(58835),d=t(7820),c=t(93023),u=t(84168),f=t(39311);let m=a.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:r,className:(0,f.cn)("w-full caption-bottom text-sm",t),...s})})});m.displayName="Table";let x=a.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("thead",{ref:r,className:(0,f.cn)("[&_tr]:border-b",t),...s})});x.displayName="TableHeader";let p=a.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tbody",{ref:r,className:(0,f.cn)("[&_tr:last-child]:border-0",t),...s})});p.displayName="TableBody";let h=a.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tfoot",{ref:r,className:(0,f.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...s})});h.displayName="TableFooter";let j=a.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tr",{ref:r,className:(0,f.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s})});j.displayName="TableRow";let v=a.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("th",{ref:r,className:(0,f.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...s})});v.displayName="TableHead";let b=a.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("td",{ref:r,className:(0,f.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...s})});b.displayName="TableCell";let N=a.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("caption",{ref:r,className:(0,f.cn)("mt-4 text-sm text-muted-foreground",t),...s})});N.displayName="TableCaption";var g=t(33555),y=t(38110),w=t(61865),R=t(74578),C=t(41315),I=t(51908);let T=(0,o.BX)("\n  mutation CreateInvitation($email: String!) {\n    createInvitation(email: $email)\n  }\n"),E=R.Ry({email:R.Z_().email("Invalid email address")});function F(e){let{onCreated:r}=e,t=(0,w.cI)({resolver:(0,y.F)(E)}),{isSubmitting:s}=t.formState,{onSubmit:a}=(0,d.bi)(T,{onSuccess:()=>{t.reset({email:""}),r()},onError:(e,r)=>t.setError(e,{message:r})});return(0,n.jsx)(C.l0,{...t,children:(0,n.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,n.jsxs)("form",{className:"flex w-full items-center gap-2",onSubmit:t.handleSubmit(a),children:[(0,n.jsx)(C.Wi,{control:t.control,name:"email",render:e=>{let{field:r}=e;return(0,n.jsx)(C.xJ,{children:(0,n.jsx)(C.NI,{children:(0,n.jsx)(I.I,{placeholder:"Email",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",...r})})})}}),(0,n.jsx)(c.z,{type:"submit",disabled:s,children:"Invite"})]}),(0,n.jsx)(C.zG,{className:"text-center"})]})})}let _=(0,o.BX)("\n  query ListInvitations {\n    invitations {\n      id\n      email\n      code\n      createdAt\n    }\n  }\n"),k=(0,o.BX)("\n  mutation DeleteInvitation($id: Int!) {\n    deleteInvitation(id: $id)\n  }\n");function S(){let{data:e,mutate:r}=(0,d.J9)(_),t=null==e?void 0:e.invitations,[s,i]=(0,a.useState)("");(0,a.useEffect)(()=>{i(new URL(window.location.href).origin)},[]);let{onSubmit:o}=(0,d.bi)(k,{onSuccess:()=>r()});return t&&(0,n.jsxs)(m,{children:[t.length>0&&(0,n.jsx)(x,{children:(0,n.jsxs)(j,{children:[(0,n.jsx)(v,{className:"w-[25%]",children:"Invitee"}),(0,n.jsx)(v,{className:"w-[45%]",children:"Created"}),(0,n.jsx)(v,{children:"Actions"})]})}),(0,n.jsxs)(p,{children:[t.map((e,r)=>{let t="".concat(s,"/auth/signup?invitationCode=").concat(e.code);return(0,n.jsxs)(j,{children:[(0,n.jsx)(b,{children:e.email}),(0,n.jsx)(b,{children:l().utc(e.createdAt).fromNow()}),(0,n.jsxs)(b,{children:[(0,n.jsx)(g.q,{value:t}),(0,n.jsx)(c.z,{size:"icon",variant:"hover-destructive",onClick:()=>o({id:e.id}),children:(0,n.jsx)(u.IT,{})})]})]},r)}),(0,n.jsx)(j,{children:(0,n.jsx)(b,{className:"p-2",children:(0,n.jsx)(F,{onCreated:()=>r()})})})]})]})}var z=t(7404);let A=(0,z.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function O(e){let{className:r,variant:t,...s}=e;return(0,n.jsx)("div",{className:(0,f.cn)(A({variant:t}),r),...s})}let B=(0,o.BX)("\n  query ListUsers {\n    users {\n      email\n      isAdmin\n      createdAt\n    }\n  }\n");function J(){let{data:e}=(0,d.J9)(B),r=null==e?void 0:e.users;return r&&(0,n.jsxs)(m,{children:[(0,n.jsx)(x,{children:(0,n.jsxs)(j,{children:[(0,n.jsx)(v,{className:"w-[25%]",children:"Email"}),(0,n.jsx)(v,{className:"w-[45%]",children:"Joined"}),(0,n.jsx)(v,{children:"Role"})]})}),(0,n.jsx)(p,{children:r.map((e,r)=>(0,n.jsxs)(j,{children:[(0,n.jsx)(b,{children:e.email}),(0,n.jsx)(b,{children:l().utc(e.createdAt).fromNow()}),(0,n.jsx)(b,{children:e.isAdmin?(0,n.jsx)(O,{children:"OWNER"}):(0,n.jsx)(O,{variant:"secondary",children:"MEMBER"})})]},r))})]})}function M(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(s.Ol,{children:(0,n.jsx)(s.ll,{children:"Pending Invites"})}),(0,n.jsx)(s.aY,{className:"p-4",children:(0,n.jsx)(S,{})})]}),(0,n.jsx)("div",{className:"h-16"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.Ol,{children:(0,n.jsx)(s.ll,{children:"Members"})}),(0,n.jsx)(s.aY,{className:"p-4",children:(0,n.jsx)(J,{})})]})]})}},33555:function(e,r,t){"use strict";t.d(r,{q:function(){return l}});var n=t(57437);t(2265);var s=t(77723),a=t(93023),i=t(84168);function l(e){let{className:r,value:t,...l}=e,{isCopied:o,copyToClipboard:d}=(0,s.m)({timeout:2e3});return t?(0,n.jsxs)(a.z,{variant:"ghost",size:"icon",className:r,onClick:()=>{o||d(t)},...l,children:[o?(0,n.jsx)(i.NO,{className:"text-green-600"}):(0,n.jsx)(i.vU,{}),(0,n.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},86110:function(e,r,t){"use strict";t.d(r,{Ol:function(){return l},Zb:function(){return i},aY:function(){return c},eW:function(){return u},ll:function(){return o}});var n=t(57437),s=t(2265),a=t(39311);let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s})});i.displayName="Card";let l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",t),...s})});l.displayName="CardHeader";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("h3",{ref:r,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",t),...s})});o.displayName="CardTitle";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("p",{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})});d.displayName="CardDescription";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("p-6 pt-0",t),...s})});c.displayName="CardContent";let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex items-center p-6 pt-0",t),...s})});u.displayName="CardFooter"},41315:function(e,r,t){"use strict";t.d(r,{NI:function(){return h},Wi:function(){return u},l0:function(){return d},lX:function(){return p},xJ:function(){return x},zG:function(){return v}});var n=t(57437),s=t(2265),a=t(67256),i=t(61865),l=t(39311),o=t(66672);let d=i.RV,c=s.createContext({}),u=e=>{let{...r}=e;return(0,n.jsx)(c.Provider,{value:{name:r.name},children:(0,n.jsx)(i.Qr,{...r})})},f=()=>{let e=s.useContext(c),r=s.useContext(m),{getFieldState:t,formState:n}=(0,i.Gc)(),a=e.name||"root",l=t(a,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:o}=r;return{id:o,name:a,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...l}},m=s.createContext({}),x=s.forwardRef((e,r)=>{let{className:t,...a}=e,i=s.useId();return(0,n.jsx)(m.Provider,{value:{id:i},children:(0,n.jsx)("div",{ref:r,className:(0,l.cn)("space-y-2",t),...a})})});x.displayName="FormItem";let p=s.forwardRef((e,r)=>{let{className:t,...s}=e,{error:a,formItemId:i}=f();return(0,n.jsx)(o._,{ref:r,className:(0,l.cn)(a&&"text-destructive",t),htmlFor:i,...s})});p.displayName="FormLabel";let h=s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:i,formDescriptionId:l,formMessageId:o}=f();return(0,n.jsx)(a.g7,{ref:r,id:i,"aria-describedby":s?"".concat(l," ").concat(o):"".concat(l),"aria-invalid":!!s,...t})});h.displayName="FormControl";let j=s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:a}=f();return(0,n.jsx)("p",{ref:r,id:a,className:(0,l.cn)("text-sm text-muted-foreground",t),...s})});j.displayName="FormDescription";let v=s.forwardRef((e,r)=>{let{className:t,children:s,...a}=e,{error:i,formMessageId:o}=f(),d=i?String(null==i?void 0:i.message):s;return d?(0,n.jsx)("p",{ref:r,id:o,className:(0,l.cn)("text-sm font-medium text-destructive",t),...a,children:d}):null});v.displayName="FormMessage"},51908:function(e,r,t){"use strict";t.d(r,{I:function(){return i}});var n=t(57437),s=t(2265),a=t(39311);let i=s.forwardRef((e,r)=>{let{className:t,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...i})});i.displayName="Input"},66672:function(e,r,t){"use strict";t.d(r,{_:function(){return d}});var n=t(57437),s=t(2265),a=t(36743),i=t(7404),l=t(39311);let o=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.f,{ref:r,className:(0,l.cn)(o(),t),...s})});d.displayName=a.f.displayName},77723:function(e,r,t){"use strict";t.d(r,{m:function(){return s}});var n=t(2265);function s(e){let{timeout:r=2e3}=e,[t,s]=n.useState(!1);return{isCopied:t,copyToClipboard:e=>{var t;(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText)&&e&&navigator.clipboard.writeText(e).then(()=>{s(!0),setTimeout(()=>{s(!1)},r)})}}}}},function(e){e.O(0,[990,320,414,787,894,971,864,744],function(){return e(e.s=99742)}),_N_E=e.O()}]);