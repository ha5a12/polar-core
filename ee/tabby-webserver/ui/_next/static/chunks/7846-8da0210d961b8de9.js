"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7846],{7846:function(e,r,t){t.d(r,{ZP:function(){return E}});var l=t(36164),n=t(3546),i=t(11978),s=t(84381),a=t(94909),o=t(5493),d=t(2578),c=t(40055),u=t(23782),h=t(43240),x=t(18500),p=t(11634),m=t(70410),v=t(57288),j=t(73460),f=t(31458),b=t(98150),g=t(81565),C=t(82394),N=t(5266),y=t(80363),O=t(48537),I=t(94770),w=t(10221);let _=(0,h.BX)("\n  mutation updateOauthCredential($input: UpdateOAuthCredentialInput!) {\n    updateOauthCredential(input: $input)\n  }\n"),k=(0,h.BX)("\n  mutation deleteOauthCredential($provider: OAuthProvider!) {\n    deleteOauthCredential(provider: $provider)\n  }\n"),G=(0,h.BX)("\n  query OAuthCallbackUrl($provider: OAuthProvider!) {\n    oauthCallbackUrl(provider: $provider)\n  }\n"),z=u.Ry({clientId:u.Z_(),clientSecret:u.Z_(),provider:u.jb(x.O4)}),S=z.extend({clientSecret:u.Z_().optional()}),A="Provider already exists. Please choose another one";function E(e){let{className:r,isNew:t,defaultProvider:h,defaultValues:E,onSuccess:T,existedProviders:q,...D}=e,U=(0,i.useRouter)(),$=(0,c.m8)(),F=n.useMemo(()=>({...E||{},provider:h||x.O4.Github}),[]),[P,X]=n.useState(!1),[B,M]=n.useState(!1),R=n.useMemo(()=>t?z.extend({provider:u.jb(x.O4).refine(e=>!(null==q?void 0:q.includes(e)),{message:A})}):S,[t,q]),Z=(0,o.cI)({resolver:(0,s.F)(R),defaultValues:F}),J=Z.watch("provider"),L=!(0,a.Z)(Z.formState.dirtyFields),{isSubmitting:W}=Z.formState,V=()=>{U.replace("/settings/sso")},H=(0,p.Db)(_,{onCompleted(e){(null==e?void 0:e.updateOauthCredential)&&(null==T||T(Z.getValues()))},form:Z}),Y=Z.watch("provider");n.useEffect(()=>{t&&(Y&&(null==q?void 0:q.includes(Y))?Z.setError("provider",{message:A}):Z.clearErrors("provider"))},[Y,t,q]);let K=(0,p.Db)(k),Q=async e=>{if(t){let r=await $.query(m.Ry,{provider:e.provider}).then(e=>{var r;return!!(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.oauthCredential)});if(r){Z.setError("provider",{message:A});return}}H({input:e})},[{data:ee}]=(0,c.aM)({query:G,variables:{provider:J}}),er=n.useMemo(()=>t?"e.g. e363c08d7e9ca4e66e723a53f38a21f6a54c1b83":Array(36).fill("*").join(""),[t]);return(0,l.jsx)(b.l0,{...Z,children:(0,l.jsxs)("div",{className:(0,v.cn)("grid gap-2",r),...D,children:[(0,l.jsxs)("form",{className:"grid gap-4",onSubmit:Z.handleSubmit(Q),children:[(0,l.jsx)(w.D,{children:"Basic information"}),(0,l.jsx)(b.Wi,{control:Z.control,name:"provider",render:e=>{let{field:{onChange:r,...n}}=e;return(0,l.jsxs)(b.xJ,{children:[(0,l.jsx)(b.lX,{children:"Provider"}),(0,l.jsx)(b.NI,{children:(0,l.jsxs)(y.E,{className:"flex gap-8",orientation:"horizontal",onValueChange:r,...n,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(y.m,{value:x.O4.Github,id:"r_github",disabled:!t}),(0,l.jsxs)(N._,{className:"flex cursor-pointer items-center gap-2 pl-2",htmlFor:"r_github",children:[(0,l.jsx)(g.IconGitHub,{className:"h-5 w-5"}),"GitHub"]})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(y.m,{value:x.O4.Google,id:"r_google",disabled:!t}),(0,l.jsxs)(N._,{className:"flex cursor-pointer items-center gap-2 pl-2",htmlFor:"r_google",children:[(0,l.jsx)(g.IconGoogle,{className:"h-5 w-5"}),"Google"]})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(y.m,{value:x.O4.Gitlab,id:"r_gitlab",disabled:!t}),(0,l.jsxs)(N._,{className:"flex cursor-pointer items-center gap-2 pl-2",htmlFor:"r_gitlab",children:[(0,l.jsx)(g.IconGitLab,{className:"h-5 w-5"}),"GitLab"]})]})]})}),(0,l.jsx)(b.zG,{})]})}}),ee&&(0,l.jsx)(b.xJ,{className:"mt-4",children:(0,l.jsxs)("div",{className:"flex flex-col gap-2 rounded-lg border px-3 py-2",children:[(0,l.jsx)("div",{className:"text-sm text-muted-foreground",children:"Create your OAuth2 application with the following information"}),(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsx)("div",{className:"text-sm font-medium",children:"Authorization callback URL"}),(0,l.jsxs)("span",{className:"flex items-center text-sm",children:[ee.oauthCallbackUrl,(0,l.jsx)(O.q,{type:"button",value:ee.oauthCallbackUrl})]})]})]})}),(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)(w.D,{children:"OAuth provider information"}),(0,l.jsx)(b.pf,{children:"The information is provided by your identity provider."})]}),(0,l.jsx)(b.Wi,{control:Z.control,name:"clientId",render:e=>{let{field:r}=e;return(0,l.jsxs)(b.xJ,{children:[(0,l.jsx)(b.lX,{required:!0,children:"Client ID"}),(0,l.jsx)(b.NI,{children:(0,l.jsx)(C.I,{placeholder:"e.g. ae1542c44b154c10c859",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",...r})}),(0,l.jsx)(b.zG,{})]})}}),(0,l.jsx)(b.Wi,{control:Z.control,name:"clientSecret",render:e=>{let{field:r}=e;return(0,l.jsxs)(b.xJ,{children:[(0,l.jsx)(b.lX,{required:t,children:"Client Secret"}),(0,l.jsx)(b.NI,{children:(0,l.jsx)(C.I,{className:(0,v.cn)({"placeholder:translate-y-[10%] !placeholder-foreground":!t}),placeholder:er,autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r})}),(0,l.jsx)(b.zG,{})]})}}),(0,l.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,l.jsx)(f.z,{type:"button",variant:"ghost",onClick:V,children:"Back"}),!t&&(0,l.jsxs)(j.aR,{open:P,onOpenChange:X,children:[(0,l.jsx)(j.vW,{asChild:!0,children:(0,l.jsx)(f.z,{variant:"hover-destructive",children:"Delete"})}),(0,l.jsxs)(j._T,{children:[(0,l.jsxs)(j.fY,{children:[(0,l.jsx)(j.f$,{children:"Are you absolutely sure?"}),(0,l.jsx)(j.yT,{children:"This action cannot be undone. It will permanently delete the current credential."})]}),(0,l.jsxs)(j.xo,{children:[(0,l.jsx)(j.le,{children:"Cancel"}),(0,l.jsxs)(j.OL,{className:(0,f.d)({variant:"destructive"}),onClick:e=>{e.preventDefault(),M(!0),K({provider:J}).then(e=>{var r,t;(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.deleteOauthCredential)?V():(M(!1),(null==e?void 0:e.error)&&d.A.error(null==e?void 0:null===(t=e.error)||void 0===t?void 0:t.message))})},children:[B&&(0,l.jsx)(g.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Yes, delete it"]})]})]})]}),(0,l.jsx)(I.M,{licenses:[x.oj.Enterprise],children:e=>{let{hasValidLicense:r}=e;return(0,l.jsxs)(f.z,{type:"submit",disabled:!r||W||!t&&!L,children:[W&&(0,l.jsx)(g.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),t?"Create":"Update"]})}})]})]}),(0,l.jsx)(b.zG,{className:"text-center"})]})})}},48537:function(e,r,t){t.d(r,{q:function(){return a}});var l=t(36164);t(3546);var n=t(28312),i=t(31458),s=t(81565);function a(e){let{className:r,value:t,onCopyContent:a,text:o,...d}=e,{isCopied:c,copyToClipboard:u}=(0,n.m)({timeout:2e3,onCopyContent:a});return t?(0,l.jsxs)(i.z,{variant:"ghost",size:o?"default":"icon",className:r,onClick:()=>{c||u(t)},...d,children:[c?(0,l.jsx)(s.IconCheck,{className:"text-green-600"}):(0,l.jsx)(s.IconCopy,{}),o&&(0,l.jsx)("span",{children:o}),!o&&(0,l.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},28312:function(e,r,t){t.d(r,{m:function(){return a}});var l=t(3546),n=t(61200),i=t.n(n),s=t(2578);function a(e){let{timeout:r=2e3,onError:t,onCopyContent:n}=e,[a,o]=l.useState(!1),d=()=>{o(!0),setTimeout(()=>{o(!1)},r)},c=e=>{if("function"==typeof t){null==t||t(e);return}s.A.error("Failed to copy.")};return{isCopied:a,copyToClipboard:e=>{var r;if(e){if(n){n(e),d();return}if(null===(r=navigator.clipboard)||void 0===r?void 0:r.writeText)navigator.clipboard.writeText(e).then(d).catch(c);else{let r=i()(e);r?d():c()}}}}}}}]);