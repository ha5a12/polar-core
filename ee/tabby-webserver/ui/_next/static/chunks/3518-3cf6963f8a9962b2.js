"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3518],{3518:function(e,s,n){n.r(s),n.d(s,{CredentialList:function(){return y},oauthCredential:function(){return b}});var t=n(36164),a=n(3546),r=n(70652),l=n.n(r),i=n(11978),d=n(1853),c=n(826),o=n(40055),u=n(43240),x=n(18500),f=n(70410),m=n(31458),h=n(79972),p=n(81565),j=n(3448),v=n(94770),N=n(6230);let g=[{name:"github",enum:x.O4.Github,meta:{domain:"github.com",displayName:"GitHub"}},{name:"google",enum:x.O4.Google,meta:{domain:"google.com",displayName:"Google"}},{name:"gitlab",enum:x.O4.Gitlab,meta:{domain:"gitlab.com",displayName:"GitLab"}}],b=(0,u.BX)("\n  query OAuthCredential($provider: OAuthProvider!) {\n    oauthCredential(provider: $provider) {\n      provider\n      clientId\n      createdAt\n      updatedAt\n    }\n  }\n"),y=()=>{let[{data:e,fetching:s}]=(0,o.aM)({query:b,variables:{provider:x.O4.Github}}),[{data:n,fetching:r}]=(0,o.aM)({query:b,variables:{provider:x.O4.Google}}),[{data:c,fetching:u}]=(0,o.aM)({query:b,variables:{provider:x.O4.Gitlab}}),[{data:h,fetching:p}]=(0,o.aM)({query:f.wz}),g=a.useMemo(()=>(0,d.Z)([null==e?void 0:e.oauthCredential,null==n?void 0:n.oauthCredential,null==c?void 0:c.oauthCredential]),[e,n,c]),y=(0,i.useRouter)(),C=(0,t.jsx)(v.M,{licenses:[x.oj.Enterprise],children:e=>{let{hasValidLicense:s}=e;return(0,t.jsx)(m.z,{disabled:!s,onClick:()=>y.push("/settings/sso/new"),children:"Create"})}});return(null==g?void 0:g.length)?(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex flex-col gap-8",children:[g.map(e=>(0,t.jsx)(w,{data:e},e.provider)),(0,t.jsx)(O,{data:null==h?void 0:h.ldapCredential})]}),g.length<3&&(0,t.jsx)("div",{className:"mt-4 flex justify-end",children:C})]}):(0,t.jsx)("div",{children:(0,t.jsx)(N.Z,{loading:s||r||u||p,fallback:(0,t.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,t.jsx)(j.O,{className:"h-[180px] w-full rounded-xl"}),(0,t.jsx)(j.O,{className:"h-[180px] w-full rounded-xl"})]}),children:(0,t.jsxs)("div",{className:"flex flex-col items-center gap-4 rounded-lg border-4 border-dashed py-8",children:[(0,t.jsx)("div",{children:"No Data"}),(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(l(),{href:"/settings/sso/new",className:(0,m.d)({variant:"default"}),children:"Create"})})]})})})},w=e=>{let{data:s}=e,n=a.useMemo(()=>{var e;return null===(e=(0,c.Z)(g,{enum:null==s?void 0:s.provider}))||void 0===e?void 0:e.meta},[s]);return s?(0,t.jsxs)(h.Zb,{children:[(0,t.jsx)(h.Ol,{className:"border-b p-4",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)(h.ll,{className:"flex items-center gap-2 text-xl",children:[(0,t.jsx)(C,{provider:s.provider}),(null==n?void 0:n.displayName)||s.provider]}),(0,t.jsx)(l(),{href:"/settings/sso/detail/".concat(s.provider.toLowerCase()),className:(0,m.d)({variant:"secondary"}),children:"View"})]})}),(0,t.jsxs)(h.aY,{className:"p-0 text-sm",children:[(0,t.jsxs)("div",{className:"flex border-b px-8 py-4",children:[(0,t.jsx)("span",{className:"w-[100px]",children:"Type"}),(0,t.jsx)("span",{children:"OAuth 2.0"})]}),(0,t.jsxs)("div",{className:"flex px-8 py-4",children:[(0,t.jsx)("span",{className:"w-[100px] shrink-0",children:"Host"}),(0,t.jsx)("span",{className:"truncate",children:null==n?void 0:n.domain})]})]})]}):null},O=e=>{let{data:s}=e;return s?(0,t.jsxs)(h.Zb,{children:[(0,t.jsx)(h.Ol,{className:"border-b p-4",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)(h.ll,{className:"flex items-center gap-2 text-xl",children:[(0,t.jsx)(p.IconUsers,{className:"h-6 w-6"}),"LDAP"]}),(0,t.jsx)(l(),{href:"/settings/sso/detail/ldap",className:(0,m.d)({variant:"secondary"}),children:"View"})]})}),(0,t.jsxs)(h.aY,{className:"p-0 text-sm",children:[(0,t.jsxs)("div",{className:"flex border-b px-8 py-4",children:[(0,t.jsx)("span",{className:"w-[100px]",children:"Type"}),(0,t.jsx)("span",{children:"LDAP"})]}),(0,t.jsxs)("div",{className:"flex px-8 py-4",children:[(0,t.jsx)("span",{className:"w-[100px] shrink-0",children:"Host"}),(0,t.jsx)("span",{className:"truncate",children:null==s?void 0:s.host})]})]})]}):null};function C(e){let{provider:s}=e;switch(s){case x.O4.Github:return(0,t.jsx)(p.IconGitHub,{className:"h-6 w-6"});case x.O4.Google:return(0,t.jsx)(p.IconGoogle,{className:"h-6 w-6"});case x.O4.Gitlab:return(0,t.jsx)(p.IconGitLab,{className:"h-6 w-6"});default:return null}}},94770:function(e,s,n){n.d(s,{M:function(){return x}});var t=n(36164),a=n(3546),r=n(70652),l=n.n(r),i=n(88542),d=n(29917),c=n(57288),o=n(31458),u=n(90615);let x=e=>{let{licenses:s,children:n}=e,[r,l]=a.useState(!1),i=(0,d.Gm)(),o=(0,d.Cz)({licenses:s}),{isLicenseOK:x,hasSufficientLicense:m}=o,h=m&&x,p=e=>{h||l(e)};return(0,t.jsxs)(u.zs,{open:r,onOpenChange:p,openDelay:100,children:[(0,t.jsx)(u.bZ,{side:"top",collisionPadding:16,className:"w-[400px]",children:(0,t.jsx)(f,{licenses:s,...o})}),(0,t.jsx)(u.Yi,{asChild:!0,onClick:e=>{h||(e.preventDefault(),p(!0))},children:(0,t.jsx)("div",{className:(0,c.cn)(h?"":"cursor-not-allowed"),children:n({hasValidLicense:h,license:i})})})]})};function f(e){let{hasSufficientLicense:s,isExpired:n,isSeatsExceeded:a,licenses:r}=e,d=(0,i.Z)(r[0]),c=d;return(2==r.length&&(c="".concat((0,i.Z)(r[0])," or ").concat((0,i.Z)(r[1]))),s&&n)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"Your license has expired. Please update your license to use this feature."}),(0,t.jsx)("div",{className:"mt-4 text-center",children:(0,t.jsx)(l(),{className:(0,o.d)(),href:"/settings/subscription",children:"Update license"})})]}):s&&a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"Your seat count has exceeded the limit. Please upgrade your license to continue using this feature."}),(0,t.jsx)("div",{className:"mt-4 text-center",children:(0,t.jsx)(l(),{className:(0,o.d)(),href:"/settings/subscription",children:"Upgrade license"})})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{children:["This feature is only available on Tabby's"," ",(0,t.jsx)("span",{className:"font-semibold",children:c})," plan. Upgrade to use this feature."]}),(0,t.jsx)("div",{className:"mt-4 text-center",children:(0,t.jsxs)(l(),{className:(0,o.d)(),href:"/settings/subscription",children:["Upgrade to ",d]})})]})}x.displayName="LicenseGuard"},6230:function(e,s,n){var t=n(36164),a=n(3546),r=n(24449),l=n(90379);s.Z=e=>{let{loading:s,fallback:n,delay:i,children:d}=e,[c,o]=a.useState(!s),[u]=(0,r.n)(c,null!=i?i:200);return(a.useEffect(()=>{s||c||o(!0)},[s]),u)?d:n||(0,t.jsx)(l.cg,{})}},90379:function(e,s,n){n.d(s,{PF:function(){return d},cg:function(){return l},tB:function(){return i}});var t=n(36164),a=n(57288),r=n(3448);let l=e=>{let{className:s,...n}=e;return(0,t.jsxs)("div",{className:(0,a.cn)("space-y-3",s),...n,children:[(0,t.jsx)(r.O,{className:"h-4 w-full"}),(0,t.jsx)(r.O,{className:"h-4 w-full"}),(0,t.jsx)(r.O,{className:"h-4 w-full"}),(0,t.jsx)(r.O,{className:"h-4 w-full"})]})},i=e=>{let{className:s,...n}=e;return(0,t.jsx)(r.O,{className:(0,a.cn)("h-4 w-full",s),...n})},d=e=>{let{className:s,...n}=e;return(0,t.jsxs)("div",{className:(0,a.cn)("flex flex-col gap-3",s),...n,children:[(0,t.jsx)(r.O,{className:"h-4 w-[20%]"}),(0,t.jsx)(r.O,{className:"h-4 w-full"}),(0,t.jsx)(r.O,{className:"h-4 w-[20%]"}),(0,t.jsx)(r.O,{className:"h-4 w-full"})]})}},79972:function(e,s,n){n.d(s,{Ol:function(){return i},Zb:function(){return l},aY:function(){return o},eW:function(){return u},ll:function(){return d}});var t=n(36164),a=n(3546),r=n(57288);let l=a.forwardRef((e,s)=>{let{className:n,...a}=e;return(0,t.jsx)("div",{ref:s,className:(0,r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...a})});l.displayName="Card";let i=a.forwardRef((e,s)=>{let{className:n,...a}=e;return(0,t.jsx)("div",{ref:s,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",n),...a})});i.displayName="CardHeader";let d=a.forwardRef((e,s)=>{let{className:n,...a}=e;return(0,t.jsx)("h3",{ref:s,className:(0,r.cn)("text-2xl font-semibold leading-none tracking-tight",n),...a})});d.displayName="CardTitle";let c=a.forwardRef((e,s)=>{let{className:n,...a}=e;return(0,t.jsx)("p",{ref:s,className:(0,r.cn)("text-sm text-muted-foreground",n),...a})});c.displayName="CardDescription";let o=a.forwardRef((e,s)=>{let{className:n,...a}=e;return(0,t.jsx)("div",{ref:s,className:(0,r.cn)("p-6 pt-0",n),...a})});o.displayName="CardContent";let u=a.forwardRef((e,s)=>{let{className:n,...a}=e;return(0,t.jsx)("div",{ref:s,className:(0,r.cn)("flex items-center p-6 pt-0",n),...a})});u.displayName="CardFooter"},90615:function(e,s,n){n.d(s,{Yi:function(){return d},bZ:function(){return c},zs:function(){return i}});var t=n(36164),a=n(3546),r=n(38421),l=n(57288);let i=r.fC,d=r.xz;r.h_;let c=a.forwardRef((e,s)=>{let{className:n,align:a="center",sideOffset:i=4,...d}=e;return(0,t.jsx)(r.VY,{ref:s,align:a,sideOffset:i,className:(0,l.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...d})});c.displayName=r.VY.displayName},3448:function(e,s,n){n.d(s,{O:function(){return r}});var t=n(36164),a=n(57288);function r(e){let{className:s,...n}=e;return(0,t.jsx)("div",{className:(0,a.cn)("h-4 animate-pulse rounded-md bg-border",s),...n})}},24449:function(e,s,n){n.d(s,{S:function(){return i},n:function(){return d}});var t=n(3546),a=n(45391),r=n(16784);let l=e=>{let s=(0,r.d)(e);t.useEffect(()=>()=>{s.current()},[])};function i(e,s,n){let i=(0,r.d)(e),d=t.useMemo(()=>(0,a.Z)(function(){for(var e=arguments.length,s=Array(e),n=0;n<e;n++)s[n]=arguments[n];return i.current(...s)},s,n),[]);return l(()=>{var e;null==n||null===(e=n.onUnmount)||void 0===e||e.call(n,d),d.cancel()}),{run:d,cancel:d.cancel,flush:d.flush}}function d(e,s,n){let[a,r]=t.useState(e),{run:l}=i(()=>{r(e)},s,n);return t.useEffect(()=>{l()},[e]),[a,r]}},16784:function(e,s,n){n.d(s,{d:function(){return a}});var t=n(3546);function a(e){let s=t.useRef(e);return s.current=e,s}},29917:function(e,s,n){n.d(s,{Cz:function(){return o},Gm:function(){return c},jp:function(){return d}});var t=n(11978),a=n(40055),r=n(43240),l=n(18500);let i=(0,r.BX)("\n  query GetLicenseInfo {\n    license {\n      type\n      status\n      seats\n      seatsUsed\n      issuedAt\n      expiresAt\n    }\n  }\n"),d=()=>(0,a.aM)({query:i}),c=()=>{let[{data:e}]=d();return null==e?void 0:e.license},o=e=>{var s;let[{data:n}]=d(),a=null==n?void 0:n.license,r=(0,t.useSearchParams)(),i=!!a&&(!(null==e?void 0:null===(s=e.licenses)||void 0===s?void 0:s.length)||e.licenses.includes(a.type)),c=(null==a?void 0:a.status)===l.rW.Ok,o=(null==a?void 0:a.status)===l.rW.Expired,u=(null==a?void 0:a.status)===(null===l.rW||void 0===l.rW?void 0:l.rW.SeatsExceeded),x="expired"===r.get("licenseError"),f="seatsExceed"===r.get("licenseError");return{hasLicense:!!a,isLicenseOK:c&&!(x||f),isExpired:o||x,isSeatsExceeded:u||f,hasSufficientLicense:i}}}}]);