(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8098],{25125:function(e,t,n){Promise.resolve().then(n.bind(n,95463))},95463:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var r=n(36164),s=n(3546),a=n(11978),i=n(80605),l=n(70652),o=n.n(l),c=n(31458),u=n(81565),d=n(84381),m=n(5493),x=n(23782),h=n(21808),f=n(75561),p=n(11634),v=n(98150),j=n(82394);let g=(0,f.B)("\n  mutation requestPasswordResetEmail($input: RequestPasswordResetEmailInput!) {\n    requestPasswordResetEmail(input: $input)\n  }\n"),N=x.Ry({email:x.Z_().email("Invalid email address")}),b=e=>{let{onSuccess:t}=e,n=(0,m.cI)({resolver:(0,d.F)(N)}),{isSubmitting:s}=n.formState,a=(0,p.Db)(g,{form:n});return(0,r.jsx)(v.l0,{...n,children:(0,r.jsxs)("div",{className:"grid gap-2",children:[(0,r.jsxs)("form",{className:"grid gap-4",onSubmit:n.handleSubmit(e=>a({input:e}).then(n=>{var r;(null==n?void 0:null===(r=n.data)||void 0===r?void 0:r.requestPasswordResetEmail)&&(null==t||t(e.email))})),children:[(0,r.jsx)(v.Wi,{control:n.control,name:"email",render:e=>{let{field:t}=e;return(0,r.jsxs)(v.xJ,{children:[(0,r.jsx)(v.lX,{children:"Email"}),(0,r.jsx)(v.NI,{children:(0,r.jsx)(j.I,{placeholder:h.o0,type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",...t})}),(0,r.jsx)(v.zG,{})]})}}),(0,r.jsxs)(c.z,{type:"submit",className:"mt-2",children:[s&&(0,r.jsx)(u.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Send Email"]})]}),(0,r.jsx)(v.zG,{className:"text-center"})]})})};function y(){let[e,t]=s.useState(),[n,a]=s.useState(!1);return n?(0,r.jsx)("div",{className:"w-[350px] space-y-6",children:(0,r.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(u.IconCheckCircled,{className:"h-12 w-12 text-successful-foreground"})}),(0,r.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Reset Password"}),(0,r.jsxs)("p",{className:"pb-4 text-sm text-muted-foreground",children:["Request received successfully! If the email"," ",(0,r.jsx)("span",{className:"font-bold",children:null!=e?e:""})," exists, you’ll receive an email with a reset link soon."]}),(0,r.jsx)(o(),{href:"/auth/signin",className:(0,c.d)(),children:"Back to Sign In"})]})}):(0,r.jsxs)("div",{className:"w-[350px] space-y-6",children:[(0,r.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,r.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Reset Password"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"Enter your email address. If an account exists, you’ll receive an email with a password reset link soon."})]}),(0,r.jsx)(b,{onSuccess:e=>{t(e),a(!0)}}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(o(),{href:"/auth/signin",replace:!0,className:"text-primary hover:underline",children:"Cancel"})})]})}let w=(0,f.B)("\n  mutation requestInvitationEmail($input: RequestInvitationInput!) {\n    requestInvitationEmail(input: $input) {\n      email\n      code\n    }\n  }\n"),I=x.Ry({email:x.Z_().email("Invalid email address")}),S=e=>{let{onSuccess:t}=e,n=(0,m.cI)({resolver:(0,d.F)(I)}),{isSubmitting:s}=n.formState,a=(0,p.Db)(w,{form:n});return(0,r.jsx)(v.l0,{...n,children:(0,r.jsxs)("div",{className:"grid gap-2",children:[(0,r.jsxs)("form",{className:"grid gap-4",onSubmit:n.handleSubmit(e=>a({input:e}).then(e=>{var n,r;(null==e?void 0:null===(r=e.data)||void 0===r?void 0:null===(n=r.requestInvitationEmail)||void 0===n?void 0:n.code)&&(null==t||t(e.data.requestInvitationEmail))})),children:[(0,r.jsx)(v.Wi,{control:n.control,name:"email",render:e=>{let{field:t}=e;return(0,r.jsxs)(v.xJ,{children:[(0,r.jsx)(v.lX,{children:"Email"}),(0,r.jsx)(v.NI,{children:(0,r.jsx)(j.I,{placeholder:h.o0,type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",...t})}),(0,r.jsx)(v.zG,{})]})}}),(0,r.jsxs)(c.z,{type:"submit",className:"mt-2",children:[s&&(0,r.jsx)(u.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Send Email"]})]}),(0,r.jsx)(v.zG,{className:"text-center"})]})})};function k(){let[e,t]=s.useState(),[n,a]=s.useState(!1);return n?(0,r.jsx)("div",{className:"w-[350px] space-y-6",children:(0,r.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(u.IconCheckCircled,{className:"h-12 w-12 text-successful-foreground"})}),(0,r.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Create your Tabby account"}),(0,r.jsx)("p",{className:"pb-4 text-sm text-muted-foreground",children:"Request received successfully! You’ll receive an email with a signup link soon."}),(0,r.jsx)(o(),{href:"/auth/signin",className:(0,c.d)(),children:"Back to Sign In"})]})}):(0,r.jsxs)("div",{className:"w-[350px] space-y-6",children:[(0,r.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,r.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Create your Tabby account"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"To register your account, please enter your email address."})]}),(0,r.jsx)(S,{onSuccess:e=>{t(e.email),a(!0)}}),(0,r.jsxs)("div",{className:"text-center text-sm",children:["Already have an accout?",(0,r.jsx)(o(),{href:"/auth/signin",className:"ml-1 font-semibold text-primary hover:underline",children:"Sign In"})]})]})}var E=n(36327),_=n(44645),R=n(91302),C=n(3765),P=n(43240),F=n(1544);let T=(0,P.BX)("\n  mutation tokenAuth($email: String!, $password: String!) {\n    tokenAuth(email: $email, password: $password) {\n      accessToken\n      refreshToken\n    }\n  }\n"),O=x.Ry({email:x.Z_().email("Invalid email address"),password:x.Z_()}),A={EMAIL:"demo@tabbyml.com",PASSWORD:"0$TabbyDemo"};function z(e){let{className:t,invitationCode:n,...a}=e,l=(0,i.Uw)(),x=(0,i.UA)(),f=(0,m.cI)({resolver:(0,d.F)(O)}),g=s.useRef(null);s.useEffect(()=>{let e=h.$6.DEMO_AUTO_LOGIN;if(x){if(f.setValue("email",A.EMAIL),f.setValue("password",A.PASSWORD),"true"===sessionStorage.getItem(e))return;if(g.current){let t=new Event("submit",{bubbles:!0,cancelable:!0});g.current.dispatchEvent(t),sessionStorage.setItem(e,"true")}}},[x]);let N=(0,R.zq)(),{isSubmitting:b}=f.formState,y=(0,p.Db)(T,{onCompleted(e){N(e.tokenAuth)},form:f});return(0,r.jsx)(v.l0,{...f,children:(0,r.jsxs)("div",{className:(0,F.cn)("grid gap-2",t),...a,children:[(0,r.jsxs)("form",{ref:g,className:"grid gap-4",onSubmit:f.handleSubmit(y),children:[(0,r.jsx)(v.Wi,{control:f.control,name:"email",render:e=>{let{field:t}=e;return(0,r.jsxs)(v.xJ,{children:[(0,r.jsx)(v.lX,{children:"Email"}),(0,r.jsx)(v.NI,{children:(0,r.jsx)(j.I,{placeholder:h.o0,type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",...t})}),(0,r.jsx)(v.zG,{})]})}}),(0,r.jsx)(v.Wi,{control:f.control,name:"password",render:e=>{let{field:t}=e;return(0,r.jsxs)(v.xJ,{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(v.lX,{children:"Password"}),!!l&&(0,r.jsx)("div",{className:"cursor-pointer text-right text-sm text-primary hover:underline",children:(0,r.jsx)(o(),{href:"/auth/signin?mode=reset",children:"Forgot password?"})})]}),(0,r.jsx)(v.NI,{children:(0,r.jsx)(j.I,{type:"password",...t})}),(0,r.jsx)(v.zG,{})]})}}),(0,r.jsxs)(c.z,{type:"submit",className:"mt-2",disabled:b,children:[b&&(0,r.jsx)(u.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Sign In"]})]}),(0,r.jsx)(v.zG,{className:"text-center"})]})})}function q(){let{router:e,searchParams:t}=(0,_.Z)(),n=(0,i.jJ)(),a=t.get("error_message"),l=t.get("access_token"),c=t.get("refresh_token"),d=!!l&&!!c,m=d&&!a,x=(0,R.zq)(),{data:h}=(0,E.Z)(d?null:"/oauth/providers",C.Z);(0,s.useEffect)(()=>{!a&&l&&c&&x({accessToken:l,refreshToken:c})},[t]);let{status:f}=(0,R.kP)();return((0,s.useEffect)(()=>{"authenticated"===f&&e.replace("/")},[f]),m)?(0,r.jsx)(u.IconSpinner,{className:"h-8 w-8 animate-spin"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"w-[350px] space-y-6",children:[(0,r.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,r.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Sign In"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"Enter credentials to login to your account"})]}),(0,r.jsx)(z,{}),n&&(0,r.jsxs)("div",{className:"text-center text-sm",children:["Don’t have an accout?",(0,r.jsx)(o(),{href:"/auth/signin?mode=signup",className:"ml-1 font-semibold text-primary hover:underline",children:"Create an account"})]})]}),!!(null==h?void 0:h.length)&&(0,r.jsxs)("div",{className:"relative mt-4 flex w-[350px] items-center py-5",children:[(0,r.jsx)("div",{className:"grow border-t "}),(0,r.jsx)("span",{className:"mx-4 shrink text-sm text-muted-foreground",children:"Or Sign In with"}),(0,r.jsx)("div",{className:"grow border-t "})]}),(0,r.jsxs)("div",{className:"mx-auto flex items-center gap-8",children:[(null==h?void 0:h.includes("github"))&&(0,r.jsx)("a",{href:"/oauth/signin?provider=github",children:(0,r.jsx)(u.IconGithub,{className:"h-8 w-8"})}),(null==h?void 0:h.includes("google"))&&(0,r.jsx)("a",{href:"/oauth/signin?provider=google",children:(0,r.jsx)(u.IconGoogle,{className:"h-8 w-8"})}),(null==h?void 0:h.includes("gitlab"))&&(0,r.jsx)("a",{href:"/oauth/signin?provider=gitlab",children:(0,r.jsx)(u.IconGitLab,{className:"h-8 w-8"})})]}),!!a&&(0,r.jsx)("div",{className:"mt-4 text-destructive",children:a})]})}function G(){var e;let t=(0,a.useRouter)(),n=(0,a.useSearchParams)(),l=null===(e=n.get("mode"))||void 0===e?void 0:e.toString(),o=(0,i.Uw)(),c=(0,i.jJ)();return(s.useEffect(()=>{let e=!1===o&&"reset"===l||!1===c&&"signup"===l;e&&t.replace("/auth/signin")},[l,o,c]),"reset"===l)?(0,r.jsx)(y,{}):"signup"===l?(0,r.jsx)(k,{}):(0,r.jsx)(q,{})}},98150:function(e,t,n){"use strict";n.d(t,{NI:function(){return p},Wi:function(){return d},l0:function(){return c},lX:function(){return f},pf:function(){return v},xJ:function(){return h},zG:function(){return j}});var r=n(36164),s=n(3546),a=n(74047),i=n(5493),l=n(1544),o=n(5266);let c=i.RV,u=s.createContext({}),d=e=>{let{...t}=e;return(0,r.jsx)(u.Provider,{value:{name:t.name},children:(0,r.jsx)(i.Qr,{...t})})},m=()=>{let e=s.useContext(u),t=s.useContext(x),{getFieldState:n,formState:r}=(0,i.Gc)(),a=e.name||"root",l=n(a,r);if(!r)throw Error("useFormField should be used within <Form>");let{id:o}=t;return{id:o,name:a,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...l}},x=s.createContext({}),h=s.forwardRef((e,t)=>{let{className:n,...a}=e,i=s.useId();return(0,r.jsx)(x.Provider,{value:{id:i},children:(0,r.jsx)("div",{ref:t,className:(0,l.cn)("space-y-2",n),...a})})});h.displayName="FormItem";let f=s.forwardRef((e,t)=>{let{className:n,required:s,...a}=e,{error:i,formItemId:c}=m();return(0,r.jsx)(o._,{ref:t,className:(0,l.cn)(i&&"text-destructive",s&&'after:ml-0.5 after:text-destructive after:content-["*"]',n),htmlFor:c,...a})});f.displayName="FormLabel";let p=s.forwardRef((e,t)=>{let{...n}=e,{error:s,formItemId:i,formDescriptionId:l,formMessageId:o}=m();return(0,r.jsx)(a.g7,{ref:t,id:i,"aria-describedby":s?"".concat(l," ").concat(o):"".concat(l),"aria-invalid":!!s,...n})});p.displayName="FormControl";let v=s.forwardRef((e,t)=>{let{className:n,...s}=e,{formDescriptionId:a}=m();return(0,r.jsx)("div",{ref:t,id:a,className:(0,l.cn)("text-sm text-muted-foreground",n),...s})});v.displayName="FormDescription";let j=s.forwardRef((e,t)=>{let{className:n,children:s,...a}=e,{error:i,formMessageId:o}=m(),c=i?String(null==i?void 0:i.message):s;return c?(0,r.jsx)("p",{ref:t,id:o,className:(0,l.cn)("text-sm font-medium text-destructive",n),...a,children:c}):null});j.displayName="FormMessage"},82394:function(e,t,n){"use strict";n.d(t,{I:function(){return i}});var r=n(36164),s=n(3546),a=n(1544);let i=s.forwardRef((e,t)=>{let{className:n,type:s,...i}=e;return(0,r.jsx)("input",{type:s,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...i})});i.displayName="Input"},5266:function(e,t,n){"use strict";n.d(t,{_:function(){return c}});var r=n(36164),s=n(3546),a=n(90893),i=n(14375),l=n(1544);let o=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.f,{ref:t,className:(0,l.cn)(o(),n),...s})});c.displayName=a.f.displayName},21808:function(e,t,n){"use strict";n.d(t,{$6:function(){return a},$I:function(){return i},L8:function(){return s},ir:function(){return l},o0:function(){return r}});let r="name@yourcompany.com",s=20,a={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_INITIAL_CONTEXTS:"_tabby_search_initial_contexts"},i=48,l="NOT_FOUND"},44645:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3546),s=n(11978);function a(){let e=(0,s.usePathname)(),t=(0,s.useRouter)(),n=(0,s.useSearchParams)(),a=(0,r.useCallback)(e=>{let t=new URLSearchParams(n);e&&Object.entries(e).forEach(e=>{let[n,r]=e;return t.set(n,r)});let r=t.toString();return r.length>0?"?".concat(r):""},[n]),i=(0,r.useCallback)(r=>{let s=function(e,t,n){var r,s;let a=null===(r=n.searchParams)||void 0===r?void 0:r.set,i=null===(s=n.searchParams)||void 0===s?void 0:s.del,l=new URLSearchParams(t);a&&Object.entries(a).forEach(e=>{let[t,n]=e;return l.set(t,n)}),i&&(Array.isArray(i)?i.forEach(e=>l.delete(e)):l.delete(i));let o=l.toString(),c=e;return o.length>0&&(c+="?".concat(o)),n.hash&&(c+="#".concat(n.hash.replace(/^#/,""))),c}((null==r?void 0:r.pathname)||e,n,r);return r.replace?t.replace(s):t.push(s),s},[e,n]);return{pathname:e,router:t,searchParams:n,getQueryString:a,updateUrlComponents:i}}},3765:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(44745),s=n(57778),a=n(79716),i=n(91302),l=n(66794);async function o(e,t){var n;let r=null!==(n=null==t?void 0:t.customFetch)&&void 0!==n?n:window.fetch;if(function(e){var t;if(e.startsWith("/oauth/providers"))return!1;let n=null===(t=(0,l.bW)())||void 0===t?void 0:t.accessToken;if(!n)return!0;try{let{exp:e}=(0,a.o)(n);return(0,l.pw)(e)}catch(e){return!0}}(e))return l.gN.refreshToken(c).then(n=>m(e,t));let s=await r(e,u(t));return 401===s.status?(l.gN.clearAccessToken(),l.gN.refreshToken(c).then(n=>m(e,t))):x(s,t)}async function c(){var e,t;let n=null===(e=(0,l.bW)())||void 0===e?void 0:e.refreshToken;if(!n)return;let r=await d(n);return null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.refreshToken}function u(e){var t;let n=new Headers(null==e?void 0:e.headers);return n.append("authorization","Bearer ".concat(null===(t=(0,l.bW)())||void 0===t?void 0:t.accessToken)),{...e||{},headers:n}}async function d(e){let t=new r.KU({url:"/graphql",requestPolicy:"network-only",exchanges:[r.Ek]}),n=t.createRequestOperation("mutation",(0,s.h)(i.Dp,{refreshToken:e}));return t.executeMutation(n)}function m(e,t){var n;let r=null!==(n=null==t?void 0:t.customFetch)&&void 0!==n?n:window.fetch;return r(e,u(t)).then(e=>x(e,t))}function x(e,t){return(null==e?void 0:e.ok)?(null==t?void 0:t.responseFormatter)?t.responseFormatter(e):(null==t?void 0:t.responseFormat)==="blob"?e.blob():e.json():(null==t?void 0:t.errorHandler)?t.errorHandler(e):void 0}},70652:function(e,t,n){e.exports=n(54007)},36327:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(21454),s=n(54859);let a=(0,s.xD)(r.ZP,e=>(t,n,r)=>(r.revalidateOnFocus=!1,r.revalidateIfStale=!1,r.revalidateOnReconnect=!1,e(t,n,r)))}},function(e){e.O(0,[8415,1386,55,2904,4007,9643,240,1454,1544,1565,3240,4656,3375,5289,1744],function(){return e(e.s=25125)}),_N_E=e.O()}]);