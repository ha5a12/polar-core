(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{37738:function(e,r,t){Promise.resolve().then(t.bind(t,5595))},5595:function(e,r,t){"use strict";t.r(r),t.d(r,{Mail:function(){return V}});var n=t(57437),s=t(2265),l=t(58835),a=t(7820),i=t(93111),o=t(52373);let d=e=>{let{className:r}=e;return(0,n.jsx)(o.b,{className:r,children:"Configuring SMTP information will enable users to receive database reports via email, such as slow query weekly reports."})};var c=t(38110),m=t(42910),u=t(61865),x=t(71424),f=t(74578),p=t(70349),h=t(87516),j=t(93023),N=t(41315),v=t(51908),y=t(98608),g=t(39311),w=t(84168);let b=y.fC;y.ZA;let S=y.B4,C=s.forwardRef((e,r)=>{let{className:t,children:s,...l}=e;return(0,n.jsxs)(y.xz,{ref:r,className:(0,g.cn)("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),...l,children:[s,(0,n.jsx)(y.JO,{asChild:!0,children:(0,n.jsx)(w.IconChevronUpDown,{className:"opacity-50"})})]})});C.displayName=y.xz.displayName;let I=s.forwardRef((e,r)=>{let{className:t,children:s,position:l="popper",...a}=e;return(0,n.jsx)(y.h_,{children:(0,n.jsx)(y.VY,{ref:r,className:(0,g.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80","popper"===l&&"translate-y-1",t),position:l,...a,children:(0,n.jsx)(y.l_,{className:(0,g.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s})})})});I.displayName=y.VY.displayName;let z=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(y.__,{ref:r,className:(0,g.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...s})});z.displayName=y.__.displayName;let R=s.forwardRef((e,r)=>{let{className:t,children:s,...l}=e;return(0,n.jsxs)(y.ck,{ref:r,className:(0,g.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...l,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(y.wU,{children:(0,n.jsx)(w.IconCheck,{className:"h-4 w-4"})})}),(0,n.jsx)(y.eT,{children:s})]})});R.displayName=y.ck.displayName;let _=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(y.Z0,{ref:r,className:(0,g.cn)("-mx-1 my-1 h-px bg-muted",t),...s})});_.displayName=y.Z0.displayName;let P=(0,l.BX)("\n  mutation updateEmailSetting($input: EmailSettingInput!) {\n    updateEmailSetting(input: $input)\n  }\n"),T=(0,l.BX)("\n  mutation deleteEmailSetting {\n    deleteEmailSetting\n  }\n"),E=f.Ry({smtpUsername:f.Z_(),smtpPassword:f.Z_(),smtpServer:f.Z_(),smtpPort:f.oQ.number(),fromAddress:f.Z_(),encryption:f.jb(p.dW),authMethod:f.jb(p.Hi)}),k=s.forwardRef((e,r)=>{let{isNew:t,onSuccess:l,onDelete:i,defaultValues:o}=e,d=s.useMemo(()=>({encryption:p.dW.None,authMethod:p.Hi.None,...o||{}}),[o]),f=(0,u.cI)({resolver:(0,c.F)(E),defaultValues:d}),y=!(0,m.Z)(f.formState.dirtyFields),[g,w]=s.useState(!1),z=(0,a.Db)(P,{onCompleted(e){(null==e?void 0:e.updateEmailSetting)&&(null==l||l(),x.A.success("Email configuration is updated"))}}),_=(0,a.Db)(T,{onCompleted(e){(null==e?void 0:e.deleteEmailSetting)&&(null==i||i())},onError(e){x.A.error(e.message)}}),k=async e=>{e.preventDefault(),await _()},F=async e=>{await z({input:{...e,smtpPassword:e.smtpPassword!==(null==o?void 0:o.smtpPassword)?e.smtpPassword:void 0}})};return s.useImperativeHandle(r,()=>({form:f}),[f]),(0,n.jsx)(N.l0,{...f,children:(0,n.jsxs)("div",{className:"flex flex-col items-start gap-4",children:[(0,n.jsxs)("form",{className:"flex flex-col items-start gap-4",onSubmit:f.handleSubmit(F),children:[(0,n.jsxs)("div",{className:"flex gap-8",children:[(0,n.jsx)(N.Wi,{control:f.control,name:"smtpServer",render:e=>{let{field:r}=e;return(0,n.jsxs)(N.xJ,{children:[(0,n.jsx)(N.lX,{required:!0,children:"SMTP Server Host"}),(0,n.jsx)(N.NI,{children:(0,n.jsx)(v.I,{placeholder:"smtp.gmail.com",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",className:"w-80 min-w-max",...r})}),(0,n.jsx)(N.zG,{})]})}}),(0,n.jsx)(N.Wi,{control:f.control,name:"smtpPort",render:e=>{let{field:r}=e;return(0,n.jsxs)(N.xJ,{children:[(0,n.jsx)(N.lX,{required:!0,children:"SMTP Server Port"}),(0,n.jsx)(N.NI,{children:(0,n.jsx)(v.I,{type:"number",placeholder:"25",className:"w-80 min-w-max",...r})}),(0,n.jsx)(N.zG,{})]})}})]}),(0,n.jsx)(N.Wi,{control:f.control,name:"fromAddress",render:e=>{let{field:r}=e;return(0,n.jsxs)(N.xJ,{children:[(0,n.jsx)(N.lX,{required:!0,children:"From"}),(0,n.jsx)(N.NI,{children:(0,n.jsx)(v.I,{placeholder:"from@gmail.com",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",className:"w-80 min-w-max",...r})}),(0,n.jsx)(N.zG,{})]})}}),(0,n.jsx)(N.Wi,{control:f.control,name:"authMethod",render:e=>{let{field:r}=e;return(0,n.jsxs)(N.xJ,{children:[(0,n.jsx)(N.lX,{required:!0,children:"Authentication Method"}),(0,n.jsx)(N.NI,{children:(0,n.jsxs)(b,{onValueChange:r.onChange,defaultValue:r.value,children:[(0,n.jsx)(C,{className:"w-80 min-w-max",children:(0,n.jsx)(S,{placeholder:"Select a method"})}),(0,n.jsxs)(I,{children:[(0,n.jsx)(R,{value:p.Hi.None,children:"NONE"}),(0,n.jsx)(R,{value:p.Hi.Plain,children:"PLAIN"}),(0,n.jsx)(R,{value:p.Hi.Login,children:"LOGIN"})]})]})}),(0,n.jsx)(N.zG,{})]})}}),(0,n.jsxs)("div",{className:"flex gap-8",children:[(0,n.jsx)(N.Wi,{control:f.control,name:"smtpUsername",render:e=>{let{field:r}=e;return(0,n.jsxs)(N.xJ,{children:[(0,n.jsx)(N.lX,{required:!0,children:"SMTP Username"}),(0,n.jsx)(N.NI,{children:(0,n.jsx)(v.I,{type:"string",placeholder:"support@yourcompany.com",autoCapitalize:"none",autoCorrect:"off",className:"w-80 min-w-max",...r})}),(0,n.jsx)(N.zG,{})]})}}),(0,n.jsx)(N.Wi,{control:f.control,name:"smtpPassword",render:e=>{let{field:r}=e;return(0,n.jsxs)(N.xJ,{children:[(0,n.jsx)(N.lX,{required:!0,children:"SMTP Password"}),(0,n.jsx)(N.NI,{children:(0,n.jsx)(v.I,{type:"password",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",className:"w-80 min-w-max",...r})}),(0,n.jsx)(N.zG,{})]})}})]}),(0,n.jsx)(N.Wi,{control:f.control,name:"encryption",render:e=>{let{field:r}=e;return(0,n.jsxs)(N.xJ,{children:[(0,n.jsx)(N.lX,{required:!0,children:"Encryption"}),(0,n.jsx)(N.NI,{children:(0,n.jsxs)(b,{onValueChange:r.onChange,defaultValue:r.value,children:[(0,n.jsx)(C,{className:"w-80 min-w-max",children:(0,n.jsx)(S,{placeholder:"Select an encryption"})}),(0,n.jsxs)(I,{children:[(0,n.jsx)(R,{value:p.dW.None,children:"NONE"}),(0,n.jsx)(R,{value:p.dW.SslTls,children:"SSL/TLS"}),(0,n.jsx)(R,{value:p.dW.StartTls,children:"STARTTLS"})]})]})}),(0,n.jsx)(N.zG,{})]})}}),(0,n.jsxs)("div",{className:"mt-4 flex items-center gap-4",children:[!t&&(0,n.jsxs)(h.aR,{open:g,onOpenChange:w,children:[(0,n.jsx)(h.vW,{asChild:!0,children:(0,n.jsx)(j.z,{variant:"hover-destructive",children:"Delete"})}),(0,n.jsxs)(h._T,{children:[(0,n.jsxs)(h.fY,{children:[(0,n.jsx)(h.f$,{children:"Are you absolutely sure?"}),(0,n.jsx)(h.yT,{children:"This action cannot be undone. It will permanently delete the current setting."})]}),(0,n.jsxs)(h.xo,{children:[(0,n.jsx)(h.le,{children:"Cancel"}),(0,n.jsx)(h.OL,{className:(0,j.d)({variant:"destructive"}),onClick:k,children:"Yes, delete it"})]})]})]}),(0,n.jsx)(j.z,{type:"submit",disabled:!t&&!y,children:t?"Create":"Update"})]})]}),(0,n.jsx)(N.zG,{className:"text-center"})]})})});k.displayName="MailForm";var F=t(61985),W=t(66672);let M=f.Ry({email:f.Z_().email("Invalid email address")});function O(e){let{onSendTest:r}=e,t=(0,u.cI)({resolver:(0,c.F)(M)}),{isSubmitting:s}=t.formState;return(0,n.jsx)(N.l0,{...t,children:(0,n.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,n.jsxs)("form",{className:"flex flex-col gap-2",onSubmit:t.handleSubmit(()=>{r()}),children:[(0,n.jsx)(W._,{children:"Send Test Email To"}),(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsx)(N.Wi,{control:t.control,name:"email",render:e=>{let{field:r}=e;return(0,n.jsxs)(N.xJ,{children:[(0,n.jsx)(N.NI,{children:(0,n.jsx)(v.I,{placeholder:F.o,type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",className:"w-80",...r})}),(0,n.jsx)(N.zG,{})]})}}),(0,n.jsx)(j.z,{className:"self-start",type:"submit",disabled:s,children:"Send"})]})]}),(0,n.jsx)(N.zG,{className:"text-center"})]})})}let G=(0,l.BX)("\n  query emailSetting {\n    emailSetting {\n      smtpUsername\n      smtpServer\n      fromAddress\n      encryption\n      authMethod\n      smtpPort\n    }\n  }\n"),L="********************************",V=()=>{var e,r;let[t,l]=s.useState(),[o,c]=s.useState(!1),m=s.useRef(null),u=()=>a.Lp.query(G,{}).toPromise().then(e=>(l(e),c(!0),e)),x=!(null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.emailSetting),f=async()=>{},p=x?{}:{...null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.emailSetting,smtpPassword:L};return s.useEffect(()=>{u()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{}),o?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"mb-8 border-b pb-4",children:(0,n.jsx)(k,{defaultValues:p,isNew:x,onSuccess:()=>{u().then(e=>{var r,t,n;let s=null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.emailSetting;s&&(null===(n=m.current)||void 0===n||null===(t=n.form)||void 0===t||t.reset({...s,smtpPassword:L}))})},onDelete:()=>{c(!1),u()},ref:m})}),(0,n.jsx)(O,{onSendTest:f})]}):(0,n.jsx)(i.c,{})]})}},93111:function(e,r,t){"use strict";t.d(r,{c:function(){return l}});var n=t(57437),s=t(25645);let l=()=>(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"})]})},52373:function(e,r,t){"use strict";t.d(r,{b:function(){return o}});var n=t(57437);t(2265);var s=t(61396),l=t.n(s),a=t(39311),i=t(84168);let o=e=>{let{className:r,externalLink:t,children:s}=e;return(0,n.jsx)("div",{className:(0,a.cn)("mb-4 flex items-center gap-4",r),children:(0,n.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[s,!!t&&(0,n.jsxs)(l(),{className:"ml-2 inline-flex cursor-pointer flex-row items-center text-primary hover:underline",href:t,target:"_blank",children:["Learn more",(0,n.jsx)(i.IconExternalLink,{})]})]})})}},87516:function(e,r,t){"use strict";t.d(r,{OL:function(){return j},_T:function(){return u},aR:function(){return o},f$:function(){return p},fY:function(){return x},le:function(){return N},vW:function(){return d},xo:function(){return f},yT:function(){return h}});var n=t(57437),s=t(2265),l=t(52506),a=t(39311),i=t(93023);let o=l.fC,d=l.xz,c=e=>{let{className:r,children:t,...s}=e;return(0,n.jsx)(l.h_,{className:(0,a.cn)(r),...s,children:(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-end justify-center sm:items-center",children:t})})};c.displayName=l.h_.displayName;let m=s.forwardRef((e,r)=>{let{className:t,children:s,...i}=e;return(0,n.jsx)(l.aV,{className:(0,a.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in",t),...i,ref:r})});m.displayName=l.aV.displayName;let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsxs)(c,{children:[(0,n.jsx)(m,{}),(0,n.jsx)(l.VY,{ref:r,className:(0,a.cn)("fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",t),...s})]})});u.displayName=l.VY.displayName;let x=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,a.cn)("flex flex-col space-y-2 text-center sm:text-left",r),...t})};x.displayName="AlertDialogHeader";let f=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,a.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",r),...t})};f.displayName="AlertDialogFooter";let p=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(l.Dx,{ref:r,className:(0,a.cn)("text-lg font-semibold",t),...s})});p.displayName=l.Dx.displayName;let h=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(l.dk,{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})});h.displayName=l.dk.displayName;let j=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(l.aU,{ref:r,className:(0,a.cn)((0,i.d)(),t),...s})});j.displayName=l.aU.displayName;let N=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(l.$j,{ref:r,className:(0,a.cn)((0,i.d)({variant:"outline"}),"mt-2 sm:mt-0",t),...s})});N.displayName=l.$j.displayName},41315:function(e,r,t){"use strict";t.d(r,{NI:function(){return h},Wi:function(){return m},l0:function(){return d},lX:function(){return p},pf:function(){return j},xJ:function(){return f},zG:function(){return N}});var n=t(57437),s=t(2265),l=t(67256),a=t(61865),i=t(39311),o=t(66672);let d=a.RV,c=s.createContext({}),m=e=>{let{...r}=e;return(0,n.jsx)(c.Provider,{value:{name:r.name},children:(0,n.jsx)(a.Qr,{...r})})},u=()=>{let e=s.useContext(c),r=s.useContext(x),{getFieldState:t,formState:n}=(0,a.Gc)(),l=e.name||"root",i=t(l,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:o}=r;return{id:o,name:l,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...i}},x=s.createContext({}),f=s.forwardRef((e,r)=>{let{className:t,...l}=e,a=s.useId();return(0,n.jsx)(x.Provider,{value:{id:a},children:(0,n.jsx)("div",{ref:r,className:(0,i.cn)("space-y-2",t),...l})})});f.displayName="FormItem";let p=s.forwardRef((e,r)=>{let{className:t,required:s,...l}=e,{error:a,formItemId:d}=u();return(0,n.jsx)(o._,{ref:r,className:(0,i.cn)(a&&"text-destructive",s&&'after:ml-0.5 after:text-destructive after:content-["*"]',t),htmlFor:d,...l})});p.displayName="FormLabel";let h=s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:a,formDescriptionId:i,formMessageId:o}=u();return(0,n.jsx)(l.g7,{ref:r,id:a,"aria-describedby":s?"".concat(i," ").concat(o):"".concat(i),"aria-invalid":!!s,...t})});h.displayName="FormControl";let j=s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:l}=u();return(0,n.jsx)("p",{ref:r,id:l,className:(0,i.cn)("text-sm text-muted-foreground",t),...s})});j.displayName="FormDescription";let N=s.forwardRef((e,r)=>{let{className:t,children:s,...l}=e,{error:a,formMessageId:o}=u(),d=a?String(null==a?void 0:a.message):s;return d?(0,n.jsx)("p",{ref:r,id:o,className:(0,i.cn)("text-sm font-medium text-destructive",t),...l,children:d}):null});N.displayName="FormMessage"},66672:function(e,r,t){"use strict";t.d(r,{_:function(){return d}});var n=t(57437),s=t(2265),l=t(36743),a=t(7404),i=t(39311);let o=(0,a.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(l.f,{ref:r,className:(0,i.cn)(o(),t),...s})});d.displayName=l.f.displayName},25645:function(e,r,t){"use strict";t.d(r,{O:function(){return l}});var n=t(57437),s=t(39311);function l(e){let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",r),...t})}},61985:function(e,r,t){"use strict";t.d(r,{L:function(){return s},o:function(){return n}});let n="name@yourcompany.com",s=20}},function(e){e.O(0,[1091,2195,1424,5489,3072,9233,1396,8208,9518,1713,2675,8608,4402,1894,2032,2971,7864,1744],function(){return e(e.s=37738)}),_N_E=e.O()}]);