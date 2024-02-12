"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6534],{96534:function(e,r,t){t.d(r,{ZP:function(){return A}});var n=t(57437),a=t(2265),l=t(24033),s=t(38110),i=t(42910),d=t(61865),o=t(71424),c=t(99109),u=t(74578),m=t(58835),f=t(70349),x=t(7820),p=t(39311),h=t(87516),v=t(93023),j=t(41315),N=t(84168),g=t(51908),y=t(66672),b=t(35490);let C=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(b.fC,{className:(0,p.cn)("grid gap-2",t),...a,ref:r})});C.displayName=b.fC.displayName;let w=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(b.ck,{ref:r,className:(0,p.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),...a,children:(0,n.jsx)(b.z$,{className:"flex items-center justify-center",children:(0,n.jsx)(N.IconCircle,{className:"h-2.5 w-2.5 fill-current text-current"})})})});w.displayName=b.ck.displayName;var O=t(33555),R=t(34550);let k=(0,m.BX)("\n  mutation updateOauthCredential($input: UpdateOAuthCredentialInput!) {\n    updateOauthCredential(input: $input)\n  }\n"),I=(0,m.BX)("\n  mutation deleteOauthCredential($provider: OAuthProvider!) {\n    deleteOauthCredential(provider: $provider)\n  }\n"),_=(0,m.BX)("\n  query OAuthCallbackUrl($provider: OAuthProvider!) {\n    oauthCallbackUrl(provider: $provider)\n  }\n"),z=u.Ry({clientId:u.Z_(),clientSecret:u.Z_(),provider:u.jb(f.O4)});function A(e){let{className:r,isNew:t,provider:u,defaultValues:m,onSuccess:b,...A}=e,F=(0,l.useRouter)(),G=(0,c.m8)(),D=a.useMemo(()=>({...m||{},provider:u}),[]),[T,$]=a.useState(!1),[q,V]=a.useState(!1),J=(0,d.cI)({resolver:(0,s.F)(z),defaultValues:D}),P=J.watch("provider"),U=!(0,i.Z)(J.formState.dirtyFields),{isSubmitting:X}=J.formState;a.useEffect(()=>{P&&window.location.origin},[P]);let M=()=>{F.replace("/settings/sso")},Z=(0,x.Db)(k,{onCompleted(e){(null==e?void 0:e.updateOauthCredential)&&(null==b||b(J.getValues()))},form:J}),W=(0,x.Db)(I),Y=async e=>{if(t){let r=await G.query(R.oauthCredential,{provider:e.provider}).then(e=>{var r;return!!(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.oauthCredential)});if(r){J.setError("provider",{message:"Provider already exists. Please choose another one"});return}}Z({input:e})},[{data:L}]=(0,c.aM)({query:_,variables:{provider:P}});return(0,n.jsx)("div",{className:(0,p.cn)("grid gap-6",r),...A,children:(0,n.jsxs)(j.l0,{...J,children:[(0,n.jsxs)("form",{className:"grid gap-4",onSubmit:J.handleSubmit(Y),children:[(0,n.jsx)(S,{className:"mt-2",children:"Basic information"}),(0,n.jsxs)(j.xJ,{children:[(0,n.jsx)(j.lX,{children:"Type"}),(0,n.jsx)(C,{defaultValue:"oauth",children:(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(w,{value:"oauth",id:"type_oauth"}),(0,n.jsx)(y._,{className:"cursor-pointer",htmlFor:"type_oauth",children:"OAuth 2.0"})]})})]}),(0,n.jsx)(j.Wi,{control:J.control,name:"provider",render:e=>{let{field:{onChange:r,...a}}=e;return(0,n.jsxs)(j.xJ,{children:[(0,n.jsx)(j.lX,{children:"Provider"}),(0,n.jsx)(j.NI,{children:(0,n.jsxs)(C,{className:"flex gap-6",orientation:"horizontal",onValueChange:r,...a,children:[(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(w,{value:f.O4.Github,id:"r_github",disabled:!t}),(0,n.jsx)(y._,{className:"cursor-pointer",htmlFor:"r_github",children:"GitHub"})]}),(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(w,{value:f.O4.Google,id:"r_google",disabled:!t}),(0,n.jsx)(y._,{className:"cursor-pointer",htmlFor:"r_google",children:"Google"})]})]})}),(0,n.jsx)(j.zG,{})]})}}),L&&(0,n.jsx)(j.xJ,{className:"mt-4",children:(0,n.jsxs)("div",{className:"flex flex-col gap-2 rounded-lg border px-3 py-2",children:[(0,n.jsx)("div",{className:"text-sm text-muted-foreground",children:"Create your OAuth2 application with the following information"}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("div",{className:"text-sm font-medium",children:"Authorization callback URL"}),(0,n.jsxs)("span",{className:"flex items-center text-sm",children:[L.oauthCallbackUrl,(0,n.jsx)(O.q,{type:"button",value:L.oauthCallbackUrl})]})]})]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(S,{children:"OAuth provider information"}),(0,n.jsx)(j.pf,{children:"The information is provided by your identity provider."})]}),(0,n.jsx)(j.Wi,{control:J.control,name:"clientId",render:e=>{let{field:r}=e;return(0,n.jsxs)(j.xJ,{children:[(0,n.jsx)(j.lX,{required:!0,children:"Client ID"}),(0,n.jsx)(j.NI,{children:(0,n.jsx)(g.I,{placeholder:"e.g. ae1542c44b154c10c859",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",...r})}),(0,n.jsx)(j.zG,{})]})}}),(0,n.jsx)(j.Wi,{control:J.control,name:"clientSecret",render:e=>{let{field:r}=e;return(0,n.jsxs)(j.xJ,{children:[(0,n.jsx)(j.lX,{required:!0,children:"Client Secret"}),(0,n.jsx)(j.NI,{children:(0,n.jsx)(g.I,{...r,placeholder:t?"e.g. e363c08d7e9ca4e66e723a53f38a21f6a54c1b83":"*****",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password"})}),(0,n.jsx)(j.zG,{})]})}}),(0,n.jsxs)("div",{className:"mt-1 flex justify-end gap-4",children:[(0,n.jsx)(v.z,{type:"button",variant:"ghost",onClick:M,children:"Cancel"}),!t&&(0,n.jsxs)(h.aR,{open:T,onOpenChange:$,children:[(0,n.jsx)(h.vW,{asChild:!0,children:(0,n.jsx)(v.z,{variant:"hover-destructive",children:"Delete"})}),(0,n.jsxs)(h._T,{children:[(0,n.jsxs)(h.fY,{children:[(0,n.jsx)(h.f$,{children:"Are you absolutely sure?"}),(0,n.jsx)(h.yT,{children:"This action cannot be undone. It will permanently delete the current credential."})]}),(0,n.jsxs)(h.xo,{children:[(0,n.jsx)(h.le,{children:"Cancel"}),(0,n.jsxs)(h.OL,{className:(0,v.d)({variant:"destructive"}),onClick:e=>{e.preventDefault(),V(!0),W({provider:P}).then(e=>{var r,t;(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.deleteOauthCredential)?M():(V(!1),(null==e?void 0:e.error)&&o.A.error(null==e?void 0:null===(t=e.error)||void 0===t?void 0:t.message))})},children:[q&&(0,n.jsx)(N.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Yes, delete it"]})]})]})]}),(0,n.jsxs)(v.z,{type:"submit",disabled:X||!t&&!U,children:[X&&(0,n.jsx)(N.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),t?"Create":"Update"]})]})]}),(0,n.jsx)(j.zG,{className:"text-center"})]})})}function S(e){let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,p.cn)("mt-4 text-xl font-semibold",r),...t})}},34550:function(e,r,t){t.r(r),t.d(r,{OauthCredentialList:function(){return j},oauthCredential:function(){return v}});var n=t(57437),a=t(2265),l=t(61396),s=t.n(l),i=t(72999),d=t(83390),o=t(99109),c=t(58835),u=t(70349),m=t(93023),f=t(86110),x=t(25645);let p=[{name:"github",enum:u.O4.Github,meta:{domain:"github.com",displayName:"GitHub"}},{name:"google",enum:u.O4.Google,meta:{domain:"google.com",displayName:"Google"}}];var h=t(41696);let v=(0,c.BX)("\n  query OAuthCredential($provider: OAuthProvider!) {\n    oauthCredential(provider: $provider) {\n      provider\n      clientId\n      clientSecret\n      createdAt\n      updatedAt\n    }\n  }\n"),j=()=>{let[{data:e,fetching:r}]=(0,o.aM)({query:v,variables:{provider:u.O4.Github}}),[{data:t,fetching:l}]=(0,o.aM)({query:v,variables:{provider:u.O4.Google}}),d=a.useMemo(()=>(0,i.Z)([null==e?void 0:e.oauthCredential,null==t?void 0:t.oauthCredential]),[e,t]);return(null==d?void 0:d.length)?(0,n.jsxs)("div",{children:[(0,n.jsx)(h.J,{}),(0,n.jsx)("div",{className:"flex flex-col gap-8",children:d.map(e=>(0,n.jsx)(N,{data:e},e.provider))}),d.length<2&&(0,n.jsx)("div",{className:"mt-4 flex justify-end",children:(0,n.jsx)(s(),{href:"/settings/sso/new",className:(0,m.d)({variant:"default"}),children:"Create"})})]}):(0,n.jsxs)("div",{children:[(0,n.jsx)(h.J,{}),r||l?(0,n.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,n.jsx)(x.O,{className:"h-[180px] w-full rounded-xl"}),(0,n.jsx)(x.O,{className:"h-[180px] w-full rounded-xl"})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center gap-4 rounded-lg border-4 border-dashed py-8",children:[(0,n.jsx)("div",{children:"No Data"}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(s(),{href:"/settings/sso/new",className:(0,m.d)({variant:"default"}),children:"Create"})})]})]})},N=e=>{let{data:r}=e,t=a.useMemo(()=>{var e;return null===(e=(0,d.Z)(p,{enum:null==r?void 0:r.provider}))||void 0===e?void 0:e.meta},[r]);return(0,n.jsxs)(f.Zb,{children:[(0,n.jsx)(f.Ol,{className:"border-b p-4",children:(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)(f.ll,{className:"text-xl",children:(null==t?void 0:t.displayName)||(null==r?void 0:r.provider)}),(0,n.jsx)(s(),{href:"/settings/sso/detail/".concat(null==r?void 0:r.provider.toLowerCase()),className:(0,m.d)({variant:"secondary"}),children:"View"})]})}),(0,n.jsxs)(f.aY,{className:"p-4 text-sm",children:[(0,n.jsxs)("div",{className:"flex border-b py-2",children:[(0,n.jsx)("span",{className:"w-[100px]",children:"Type"}),(0,n.jsx)("span",{children:"OAuth 2.0"})]}),(0,n.jsxs)("div",{className:"flex py-3",children:[(0,n.jsx)("span",{className:"w-[100px] shrink-0",children:"Domain"}),(0,n.jsx)("span",{className:"truncate",children:null==t?void 0:t.domain})]})]})]})}},41696:function(e,r,t){t.d(r,{J:function(){return l}});var n=t(57437),a=t(39311);t(84168);let l=e=>{let{className:r}=e;return(0,n.jsx)("div",{className:(0,a.cn)("min-h-8 mb-4 flex items-center gap-4",r),children:(0,n.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:["Single Sign-On (SSO) is an authentication method that enables users to authenticate with multiple applications and websites via a single set of credentials.",!1]})})}},33555:function(e,r,t){t.d(r,{q:function(){return i}});var n=t(57437);t(2265);var a=t(77723),l=t(93023),s=t(84168);function i(e){let{className:r,value:t,...i}=e,{isCopied:d,copyToClipboard:o}=(0,a.m)({timeout:2e3});return t?(0,n.jsxs)(l.z,{variant:"ghost",size:"icon",className:r,onClick:()=>{d||o(t)},...i,children:[d?(0,n.jsx)(s.IconCheck,{className:"text-green-600"}):(0,n.jsx)(s.IconCopy,{}),(0,n.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},87516:function(e,r,t){t.d(r,{OL:function(){return v},_T:function(){return m},aR:function(){return d},f$:function(){return p},fY:function(){return f},le:function(){return j},vW:function(){return o},xo:function(){return x},yT:function(){return h}});var n=t(57437),a=t(2265),l=t(52506),s=t(39311),i=t(93023);let d=l.fC,o=l.xz,c=e=>{let{className:r,children:t,...a}=e;return(0,n.jsx)(l.h_,{className:(0,s.cn)(r),...a,children:(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-end justify-center sm:items-center",children:t})})};c.displayName=l.h_.displayName;let u=a.forwardRef((e,r)=>{let{className:t,children:a,...i}=e;return(0,n.jsx)(l.aV,{className:(0,s.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in",t),...i,ref:r})});u.displayName=l.aV.displayName;let m=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsxs)(c,{children:[(0,n.jsx)(u,{}),(0,n.jsx)(l.VY,{ref:r,className:(0,s.cn)("fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",t),...a})]})});m.displayName=l.VY.displayName;let f=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,s.cn)("flex flex-col space-y-2 text-center sm:text-left",r),...t})};f.displayName="AlertDialogHeader";let x=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,s.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",r),...t})};x.displayName="AlertDialogFooter";let p=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(l.Dx,{ref:r,className:(0,s.cn)("text-lg font-semibold",t),...a})});p.displayName=l.Dx.displayName;let h=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(l.dk,{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...a})});h.displayName=l.dk.displayName;let v=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(l.aU,{ref:r,className:(0,s.cn)((0,i.d)(),t),...a})});v.displayName=l.aU.displayName;let j=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(l.$j,{ref:r,className:(0,s.cn)((0,i.d)({variant:"outline"}),"mt-2 sm:mt-0",t),...a})});j.displayName=l.$j.displayName},86110:function(e,r,t){t.d(r,{Ol:function(){return i},Zb:function(){return s},aY:function(){return c},eW:function(){return u},ll:function(){return d}});var n=t(57437),a=t(2265),l=t(39311);let s=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});s.displayName="Card";let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",t),...a})});i.displayName="CardHeader";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("h3",{ref:r,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})});d.displayName="CardTitle";let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("p",{ref:r,className:(0,l.cn)("text-sm text-muted-foreground",t),...a})});o.displayName="CardDescription";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("p-6 pt-0",t),...a})});c.displayName="CardContent";let u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("flex items-center p-6 pt-0",t),...a})});u.displayName="CardFooter"},41315:function(e,r,t){t.d(r,{NI:function(){return h},Wi:function(){return u},l0:function(){return o},lX:function(){return p},pf:function(){return v},xJ:function(){return x},zG:function(){return j}});var n=t(57437),a=t(2265),l=t(67256),s=t(61865),i=t(39311),d=t(66672);let o=s.RV,c=a.createContext({}),u=e=>{let{...r}=e;return(0,n.jsx)(c.Provider,{value:{name:r.name},children:(0,n.jsx)(s.Qr,{...r})})},m=()=>{let e=a.useContext(c),r=a.useContext(f),{getFieldState:t,formState:n}=(0,s.Gc)(),l=e.name||"root",i=t(l,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:d}=r;return{id:d,name:l,formItemId:"".concat(d,"-form-item"),formDescriptionId:"".concat(d,"-form-item-description"),formMessageId:"".concat(d,"-form-item-message"),...i}},f=a.createContext({}),x=a.forwardRef((e,r)=>{let{className:t,...l}=e,s=a.useId();return(0,n.jsx)(f.Provider,{value:{id:s},children:(0,n.jsx)("div",{ref:r,className:(0,i.cn)("space-y-2",t),...l})})});x.displayName="FormItem";let p=a.forwardRef((e,r)=>{let{className:t,required:a,...l}=e,{error:s,formItemId:o}=m();return(0,n.jsx)(d._,{ref:r,className:(0,i.cn)(s&&"text-destructive",a&&'after:ml-0.5 after:text-destructive after:content-["*"]',t),htmlFor:o,...l})});p.displayName="FormLabel";let h=a.forwardRef((e,r)=>{let{...t}=e,{error:a,formItemId:s,formDescriptionId:i,formMessageId:d}=m();return(0,n.jsx)(l.g7,{ref:r,id:s,"aria-describedby":a?"".concat(i," ").concat(d):"".concat(i),"aria-invalid":!!a,...t})});h.displayName="FormControl";let v=a.forwardRef((e,r)=>{let{className:t,...a}=e,{formDescriptionId:l}=m();return(0,n.jsx)("p",{ref:r,id:l,className:(0,i.cn)("text-sm text-muted-foreground",t),...a})});v.displayName="FormDescription";let j=a.forwardRef((e,r)=>{let{className:t,children:a,...l}=e,{error:s,formMessageId:d}=m(),o=s?String(null==s?void 0:s.message):a;return o?(0,n.jsx)("p",{ref:r,id:d,className:(0,i.cn)("text-sm font-medium text-destructive",t),...l,children:o}):null});j.displayName="FormMessage"},66672:function(e,r,t){t.d(r,{_:function(){return o}});var n=t(57437),a=t(2265),l=t(36743),s=t(7404),i=t(39311);let d=(0,s.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(l.f,{ref:r,className:(0,i.cn)(d(),t),...a})});o.displayName=l.f.displayName},25645:function(e,r,t){t.d(r,{O:function(){return l}});var n=t(57437),a=t(39311);function l(e){let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,a.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",r),...t})}},77723:function(e,r,t){t.d(r,{m:function(){return i}});var n=t(2265),a=t(2390),l=t.n(a),s=t(71424);function i(e){let{timeout:r=2e3,onError:t}=e,[a,i]=n.useState(!1),d=()=>{i(!0),setTimeout(()=>{i(!1)},r)},o=e=>{if("function"==typeof t){null==t||t(e);return}s.A.error("Failed to copy.")};return{isCopied:a,copyToClipboard:e=>{var r;if(e){if(null===(r=navigator.clipboard)||void 0===r?void 0:r.writeText)navigator.clipboard.writeText(e).then(d).catch(o);else{let r=l()(e);r?d():o()}}}}}}}]);