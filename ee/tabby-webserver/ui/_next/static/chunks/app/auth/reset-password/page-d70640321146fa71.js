(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2048],{15838:function(e,r,t){Promise.resolve().then(t.bind(t,65193))},65193:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return w}});var n=t(57437),s=t(2265),o=t(61396),i=t.n(o),a=t(24033),d=t(93023),l=t(84168),c=t(38110),u=t(61865),f=t(74578),m=t(60106),x=t(7820),p=t(41315),h=t(51908);let v=(0,m.BX)("\n  mutation passwordReset($input: PasswordResetInput!) {\n    passwordReset(input: $input)\n  }\n"),g=f.Ry({password1:f.Z_(),password2:f.Z_(),code:f.Z_().optional()});function b(e){let{className:r,code:t,onSuccess:s,...o}=e,i=(0,u.cI)({resolver:(0,c.F)(g),defaultValues:{code:t}});(0,a.useRouter)();let{isSubmitting:f}=i.formState,m=(0,x.Db)(v,{form:i});return(0,n.jsx)(p.l0,{...i,children:(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsxs)("form",{className:"grid gap-4",onSubmit:i.handleSubmit(e=>{var r;return m({input:{...e,code:null!==(r=e.code)&&void 0!==r?r:""}}).then(e=>{var r;(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.passwordReset)&&(null==s||s())})}),children:[(0,n.jsx)(p.Wi,{control:i.control,name:"password1",render:e=>{let{field:r}=e;return(0,n.jsxs)(p.xJ,{children:[(0,n.jsx)(p.lX,{children:"New Password"}),(0,n.jsx)(p.NI,{children:(0,n.jsx)(h.I,{type:"password",...r})}),(0,n.jsx)(p.zG,{})]})}}),(0,n.jsx)(p.Wi,{control:i.control,name:"password2",render:e=>{let{field:r}=e;return(0,n.jsxs)(p.xJ,{children:[(0,n.jsx)(p.lX,{children:"Confirm New Password"}),(0,n.jsx)(p.NI,{children:(0,n.jsx)(h.I,{type:"password",...r})}),(0,n.jsx)(p.zG,{})]})}}),(0,n.jsx)(p.Wi,{control:i.control,name:"code",render:e=>{let{field:r}=e;return(0,n.jsx)(p.xJ,{className:"hidden",children:(0,n.jsx)(p.NI,{children:(0,n.jsx)(h.I,{type:"hidden",...r})})})}}),(0,n.jsxs)(d.z,{type:"submit",className:"mt-2",disabled:f,children:[f&&(0,n.jsx)(l.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Reset password"]})]}),(0,n.jsx)(p.zG,{className:"text-center"})]})})}function w(){let[e,r]=s.useState(!1),t=(0,a.useSearchParams)(),o=t.get("code")||void 0;return e?(0,n.jsx)("div",{className:"w-[350px] space-y-6",children:(0,n.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(l.IconCheckCircled,{className:"h-12 w-12 text-successful-foreground"})}),(0,n.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Set a new password"}),(0,n.jsx)("p",{className:"pb-4 text-sm text-muted-foreground",children:"Your password has been changed."}),(0,n.jsx)(i(),{replace:!0,href:"/auth/signin",className:(0,d.d)(),children:"Go to Sign In"})]})}):(0,n.jsxs)("div",{className:"w-[350px] space-y-6",children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,n.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Set a new password"}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"Please enter a new password for your account."})]}),(0,n.jsx)(b,{code:o,onSuccess:()=>r(!0)})]})}},93023:function(e,r,t){"use strict";t.d(r,{d:function(){return d},z:function(){return l}});var n=t(57437),s=t(2265),o=t(67256),i=t(7404),a=t(39311);let d=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),l=s.forwardRef((e,r)=>{let{className:t,variant:s,size:i,asChild:l=!1,...c}=e,u=l?o.g7:"button";return(0,n.jsx)(u,{className:(0,a.cn)(d({variant:s,size:i,className:t})),ref:r,...c})});l.displayName="Button"},41315:function(e,r,t){"use strict";t.d(r,{NI:function(){return h},Wi:function(){return u},l0:function(){return l},lX:function(){return p},pf:function(){return v},xJ:function(){return x},zG:function(){return g}});var n=t(57437),s=t(2265),o=t(67256),i=t(61865),a=t(39311),d=t(66672);let l=i.RV,c=s.createContext({}),u=e=>{let{...r}=e;return(0,n.jsx)(c.Provider,{value:{name:r.name},children:(0,n.jsx)(i.Qr,{...r})})},f=()=>{let e=s.useContext(c),r=s.useContext(m),{getFieldState:t,formState:n}=(0,i.Gc)(),o=e.name||"root",a=t(o,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:d}=r;return{id:d,name:o,formItemId:"".concat(d,"-form-item"),formDescriptionId:"".concat(d,"-form-item-description"),formMessageId:"".concat(d,"-form-item-message"),...a}},m=s.createContext({}),x=s.forwardRef((e,r)=>{let{className:t,...o}=e,i=s.useId();return(0,n.jsx)(m.Provider,{value:{id:i},children:(0,n.jsx)("div",{ref:r,className:(0,a.cn)("space-y-2",t),...o})})});x.displayName="FormItem";let p=s.forwardRef((e,r)=>{let{className:t,required:s,...o}=e,{error:i,formItemId:l}=f();return(0,n.jsx)(d._,{ref:r,className:(0,a.cn)(i&&"text-destructive",s&&'after:ml-0.5 after:text-destructive after:content-["*"]',t),htmlFor:l,...o})});p.displayName="FormLabel";let h=s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:i,formDescriptionId:a,formMessageId:d}=f();return(0,n.jsx)(o.g7,{ref:r,id:i,"aria-describedby":s?"".concat(a," ").concat(d):"".concat(a),"aria-invalid":!!s,...t})});h.displayName="FormControl";let v=s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:o}=f();return(0,n.jsx)("p",{ref:r,id:o,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})});v.displayName="FormDescription";let g=s.forwardRef((e,r)=>{let{className:t,children:s,...o}=e,{error:i,formMessageId:d}=f(),l=i?String(null==i?void 0:i.message):s;return l?(0,n.jsx)("p",{ref:r,id:d,className:(0,a.cn)("text-sm font-medium text-destructive",t),...o,children:l}):null});g.displayName="FormMessage"},51908:function(e,r,t){"use strict";t.d(r,{I:function(){return i}});var n=t(57437),s=t(2265),o=t(39311);let i=s.forwardRef((e,r)=>{let{className:t,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,o.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...i})});i.displayName="Input"},66672:function(e,r,t){"use strict";t.d(r,{_:function(){return l}});var n=t(57437),s=t(2265),o=t(36743),i=t(7404),a=t(39311);let d=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(o.f,{ref:r,className:(0,a.cn)(d(),t),...s})});l.displayName=o.f.displayName},9381:function(e,r,t){"use strict";t.d(r,{WV:function(){return a},jH:function(){return d}});var n=t(13428),s=t(2265),o=t(54887),i=t(67256);let a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,s.forwardRef)((e,t)=>{let{asChild:o,...a}=e,d=o?i.g7:r;return(0,s.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,s.createElement)(d,(0,n.Z)({},a,{ref:t}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function d(e,r){e&&(0,o.flushSync)(()=>e.dispatchEvent(r))}}},function(e){e.O(0,[3529,4762,2363,9233,7753,4168,2445,2971,7864,1744],function(){return e(e.s=15838)}),_N_E=e.O()}]);