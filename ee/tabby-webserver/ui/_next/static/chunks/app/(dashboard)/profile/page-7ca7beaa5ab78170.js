(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5688],{79474:function(e,r,t){Promise.resolve().then(t.bind(t,71379))},71379:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return O}});var n=t(57437),a=t(2265),s=t(71424),l=t(60106),o=t(10356),i=t(7820),u=t(39311),c=t(93023),d=t(84168),f=t(16775),m=t(55909);let p=(0,l.BX)("\n  mutation uploadUserAvatarBase64($id: ID!, $avatarBase64: String!) {\n    uploadUserAvatarBase64(id: $id, avatarBase64: $avatarBase64)\n  }\n"),v=()=>{var e;let[r,t]=(0,a.useState)(!1),[l,v]=(0,a.useState)(""),[{data:x}]=(0,o.P)(),h=(0,i.D)(p,{onError(e){s.A.error(e.message)}});if(!(null==x?void 0:null===(e=x.me)||void 0===e?void 0:e.email))return null;let w=async()=>{var e;t(!0);let r=await h({avatarBase64:l.split(",")[1],id:x.me.id});(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.uploadUserAvatarBase64)===!0&&(await (0,u.gw)(1e3),(0,m.n)(x.me.id),s.A.success("Successfully updated your profile picture!"),await (0,u.gw)(200)),v(""),t(!1)};return(0,n.jsxs)("div",{className:"grid gap-6",children:[(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("label",{htmlFor:"avatar-file",className:"absolute left-0 top-0 z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-background/90 opacity-0 transition-all hover:opacity-100",children:(0,n.jsx)(d.IconCloudUpload,{})}),(0,n.jsx)("input",{id:"avatar-file",type:"file",accept:"image/png, image/jpeg",className:"hidden",onChange:e=>{let r=e.target.files?e.target.files[0]:null;if(r){let e=parseFloat((r.size/1024).toFixed(2));if(e>500)return s.A.error("The image you are attempting to upload is too large. Please ensure the file size is under ".concat(500,"KB and try again."));let t=new FileReader;t.onloadend=()=>{let e=t.result;v(e)},t.readAsDataURL(r)}}}),l&&(0,n.jsx)("img",{src:l,className:"absolute left-0 top-0 z-10 h-16 w-16 rounded-full border object-cover",alt:"avatar to be uploaded"}),(0,n.jsx)(m.Y,{className:(0,u.cn)("relative h-16 w-16 border",{"opacity-0":l})})]}),(0,n.jsx)(f.Z,{}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)(c.z,{type:"submit",disabled:!l||r,onClick:w,className:"mr-5 w-40",children:[r&&(0,n.jsx)(d.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Save Changes"]}),(0,n.jsx)("div",{className:"flex flex-1 justify-end",children:(0,n.jsx)("p",{className:" text-xs text-muted-foreground lg:text-sm",children:"Square image recommended. Accepted file types: .png, .jpg. Max file size: ".concat(500,"KB.")})})]})]})};var x=t(38110),h=t(61865),w=t(74578),j=t(41315),N=t(51908),g=t(96976),b=t(93111);let y=(0,l.BX)("\n  mutation PasswordChange($input: PasswordChangeInput!) {\n    passwordChange(input: $input)\n  }\n"),C=e=>{let{onSuccess:r,showOldPassword:t}=e,[s,l]=a.useState(!1),[o,u]=a.useState(!1),m=w.Ry({oldPassword:t?w.Z_():w.Z_().optional(),newPassword1:w.Z_(),newPassword2:w.Z_()}),p=(0,h.cI)({resolver:(0,x.F)(m)}),{isSubmitting:v}=p.formState,{newPassword1:b}=p.watch(),[C]=(0,g.Y0)(b),P=(0,i.D)(y,{form:p,onCompleted(e){(null==e?void 0:e.passwordChange)&&(null==r||r(),p.reset({newPassword1:"",newPassword2:"",oldPassword:""}))}}),S=async e=>{await P({input:e})},k=()=>{if(0===C.length)return l(!1);u(!0)};return(0,n.jsx)(j.l0,{...p,children:(0,n.jsxs)("form",{className:"grid gap-6",onSubmit:p.handleSubmit(S),children:[t&&(0,n.jsx)(j.Wi,{control:p.control,name:"oldPassword",render:e=>{let{field:r}=e;return(0,n.jsxs)(j.xJ,{children:[(0,n.jsx)(j.lX,{required:!0,children:"Old password"}),(0,n.jsx)(j.NI,{children:(0,n.jsx)(N.I,{className:"w-[350px]",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r})}),(0,n.jsx)(j.zG,{})]})}}),(0,n.jsxs)("div",{children:[(0,n.jsx)(j.Wi,{control:p.control,name:"newPassword1",render:e=>{let{field:r}=e;return(0,n.jsxs)(j.xJ,{children:[(0,n.jsx)(j.lX,{required:!0,children:"New password"}),(0,n.jsx)(j.NI,{children:(0,n.jsx)(N.I,{className:"w-[350px]",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r,onFocus:()=>l(!0),onBlur:k})})]})}}),(0,n.jsx)(g.Lu,{password:b||"",showPasswordSchema:s,passworErrors:C,showPasswordError:o})]}),(0,n.jsx)(j.Wi,{control:p.control,name:"newPassword2",render:e=>{let{field:r}=e;return(0,n.jsxs)(j.xJ,{children:[(0,n.jsx)(j.lX,{required:!0,children:"Confirm new password"}),(0,n.jsx)(j.NI,{children:(0,n.jsx)(N.I,{className:"w-[350px]",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r})}),(0,n.jsx)(j.zG,{})]})}}),(0,n.jsx)(j.zG,{}),(0,n.jsx)(f.Z,{}),(0,n.jsx)("div",{className:"flex",children:(0,n.jsxs)(c.z,{type:"submit",disabled:v,className:"w-40",children:[v&&(0,n.jsx)(d.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Save Changes"]})})]})})},P=()=>{var e;let[{data:r},t]=(0,o.P)();return r?(0,n.jsx)(C,{onSuccess:()=>{s.A.success("Password is updated"),t()},showOldPassword:null==r?void 0:null===(e=r.me)||void 0===e?void 0:e.isPasswordSet}):(0,n.jsx)(b.cg,{})};var S=t(81860);let k=()=>{var e;let[{data:r}]=(0,o.P)();return(0,n.jsx)("div",{children:(0,n.jsx)(N.I,{disabled:!0,className:"w-[350px]",value:null==r?void 0:null===(e=r.me)||void 0===e?void 0:e.email,onChange:S.Z})})};var z=t(86110);let E=e=>{let{title:r,description:t,footer:a,footerClassname:s,className:l,children:o,...i}=e;return(0,n.jsxs)("div",{className:(0,u.cn)("flex w-full flex-col gap-8 rounded-lg border p-6 pb-0 xl:w-[800px]",l),...i,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(z.ll,{children:r}),t&&(0,n.jsx)("div",{className:"mt-4 text-sm text-muted-foreground",children:t})]}),(0,n.jsx)(z.aY,{className:"p-0",children:o}),(0,n.jsxs)("div",{className:(0,u.cn)("rounded-b-lg pb-6 text-sm text-muted-foreground",s),children:[!!a&&(0,n.jsx)(f.Z,{className:"mb-6"}),a]})]})};function O(){return(0,n.jsxs)("div",{className:"flex flex-col items-center gap-6",children:[(0,n.jsx)(E,{title:"Your Email",description:"This will be the email you use to log in and receive notifications.",footer:"The feature to change your email address will be available in a future release.",children:(0,n.jsx)(k,{})}),(0,n.jsx)(E,{title:"Your Avatar",description:"This is your avatar image.",footerClassname:"pb-0",children:(0,n.jsx)(v,{})}),(0,n.jsx)(E,{title:"Change Password",footerClassname:"pb-0",children:(0,n.jsx)(P,{})})]})}},93111:function(e,r,t){"use strict";t.d(r,{PF:function(){return i},cg:function(){return l},tB:function(){return o}});var n=t(57437),a=t(39311),s=t(25645);let l=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,a.cn)("space-y-3",r),...t,children:[(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"})]})},o=e=>{let{className:r,...t}=e;return(0,n.jsx)(s.O,{className:(0,a.cn)("h-4 w-full",r),...t})},i=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,a.cn)("flex flex-col gap-3",r),...t,children:[(0,n.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(s.O,{className:"h-4 w-full"})]})}},86110:function(e,r,t){"use strict";t.d(r,{Ol:function(){return o},Zb:function(){return l},aY:function(){return c},eW:function(){return d},ll:function(){return i}});var n=t(57437),a=t(2265),s=t(39311);let l=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});l.displayName="Card";let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...a})});o.displayName="CardHeader";let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("h3",{ref:r,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})});i.displayName="CardTitle";let u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...a})});u.displayName="CardDescription";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...a})});c.displayName="CardContent";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...a})});d.displayName="CardFooter"},16775:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(57437),a=t(2265),s=t(26823),l=t(39311);let o=a.forwardRef((e,r)=>{let{className:t,orientation:a="horizontal",decorative:o=!0,...i}=e;return(0,n.jsx)(s.f,{ref:r,decorative:o,orientation:a,className:(0,l.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",t),...i})});o.displayName=s.f.displayName},25645:function(e,r,t){"use strict";t.d(r,{O:function(){return s}});var n=t(57437),a=t(39311);function s(e){let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,a.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",r),...t})}},55909:function(e,r,t){"use strict";t.d(r,{Y:function(){return j},n:function(){return N}});var n=t(57437),a=t(11372),s=t(30713),l=t(1589),o=t(10356),i=t(1592),u=t(39311),c=t(2265),d=t(26694);let f=c.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(d.fC,{ref:r,className:(0,u.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...a})});f.displayName=d.fC.displayName;let m=c.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(d.Ee,{ref:r,className:(0,u.cn)("aspect-square h-full w-full",t),...a})});m.displayName=d.Ee.displayName;let p=c.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(d.NY,{ref:r,className:(0,u.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...a})});p.displayName=d.NY.displayName;var v=t(25645),x=t(67133).lW;let h="not_found",w=!0;function j(e){var r;let{className:t}=e,[{data:s}]=(0,o.P)(),c=null==s?void 0:s.me.id,d=c&&"/avatar/".concat(s.me.id)||null,{data:j,isLoading:N,error:g}=(0,l.Z)(d,e=>{if(w)return(0,i.Z)(e,{responseFormatter:async e=>{let r=await e.blob(),t=x.from(await r.arrayBuffer());return"data:image/png;base64,".concat(t.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(h)}})});if(!c)return null;if(N)return(0,n.jsx)(v.O,{className:(0,u.cn)("h-16 w-16 rounded-full",t)});if((null==g?void 0:g.message)===h&&(w=!1),!j){let e=(0,a.B)(s.me.email);return(0,n.jsx)(a.Z,{className:(0,u.cn)("h-16 w-16",t),...e})}return(0,n.jsxs)(f,{className:(0,u.cn)("h-16 w-16",t),children:[(0,n.jsx)(m,{src:j,alt:s.me.email,className:"object-cover"}),(0,n.jsx)(p,{children:null===(r=s.me)||void 0===r?void 0:r.email.substring(0,2)})]})}let N=e=>{w=!0,(0,s.JG)("/avatar/".concat(e))}},10356:function(e,r,t){"use strict";t.d(r,{P:function(){return l}});var n=t(99109),a=t(60106);let s=(0,a.BX)("\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isPasswordSet\n    }\n  }\n"),l=()=>(0,n.aM)({query:s})},1592:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(18398),a=t(34084),s=t(53771),l=t(58001),o=t(37004);async function i(e,r){var t;let n=null!==(t=null==r?void 0:r.customFetch)&&void 0!==t?t:window.fetch;if(function(e){var r;if(e.startsWith("/oauth/providers"))return!1;let t=null===(r=(0,o.bW)())||void 0===r?void 0:r.accessToken;if(!t)return!0;try{let{exp:e}=(0,s.o)(t);return(0,o.pw)(e)}catch(e){return!0}}(e))return o.gN.refreshToken(u).then(t=>f(e,r));let a=await n(e,c(r));return 401===a.status?o.gN.refreshToken(u).then(t=>f(e,r)):m(a,r)}async function u(){var e,r;let t=null===(e=(0,o.bW)())||void 0===e?void 0:e.refreshToken;if(!t)return;let n=await d(t);return null==n?void 0:null===(r=n.data)||void 0===r?void 0:r.refreshToken}function c(e){var r;let t=new Headers(null==e?void 0:e.headers);return t.append("authorization","Bearer ".concat(null===(r=(0,o.bW)())||void 0===r?void 0:r.accessToken)),{...e||{},headers:t}}async function d(e){let r=new n.KU({url:"/graphql",requestPolicy:"network-only",exchanges:[n.Ek]}),t=r.createRequestOperation("mutation",(0,a.h)(l.Dp,{refreshToken:e}));return r.executeMutation(t)}function f(e,r){var t;let n=null!==(t=null==r?void 0:r.customFetch)&&void 0!==t?t:window.fetch;return n(e,c(r)).then(e=>m(e,r))}function m(e,r){return(null==e?void 0:e.ok)?(null==r?void 0:r.responseFormatter)?r.responseFormatter(e):(null==r?void 0:r.responseFormat)==="blob"?e.blob():e.json():(null==r?void 0:r.errorHandler)?r.errorHandler(e):void 0}},56989:function(e,r,t){"use strict";t.d(r,{b:function(){return s},k:function(){return a}});var n=t(2265);function a(e,r){let t=(0,n.createContext)(r);function a(e){let{children:r,...a}=e,s=(0,n.useMemo)(()=>a,Object.values(a));return(0,n.createElement)(t.Provider,{value:s},r)}return a.displayName=e+"Provider",[a,function(a){let s=(0,n.useContext)(t);if(s)return s;if(void 0!==r)return r;throw Error(`\`${a}\` must be used within \`${e}\``)}]}function s(e,r=[]){let t=[],a=()=>{let r=t.map(e=>(0,n.createContext)(e));return function(t){let a=(null==t?void 0:t[e])||r;return(0,n.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:a}}),[t,a])}};return a.scopeName=e,[function(r,a){let s=(0,n.createContext)(a),l=t.length;function o(r){let{scope:t,children:a,...o}=r,i=(null==t?void 0:t[e][l])||s,u=(0,n.useMemo)(()=>o,Object.values(o));return(0,n.createElement)(i.Provider,{value:u},a)}return t=[...t,a],o.displayName=r+"Provider",[o,function(t,o){let i=(null==o?void 0:o[e][l])||s,u=(0,n.useContext)(i);if(u)return u;if(void 0!==a)return a;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let a=t.reduce((r,{useScope:t,scopeName:n})=>{let a=t(e),s=a[`__scope${n}`];return{...r,...s}},{});return(0,n.useMemo)(()=>({[`__scope${r.scopeName}`]:a}),[a])}};return t.scopeName=r.scopeName,t}(a,...r)]}},26823:function(e,r,t){"use strict";t.d(r,{f:function(){return c}});var n=t(13428),a=t(2265),s=t(9381);let l="horizontal",o=["horizontal","vertical"],i=(0,a.forwardRef)((e,r)=>{let{decorative:t,orientation:o=l,...i}=e,c=u(o)?o:l;return(0,a.createElement)(s.WV.div,(0,n.Z)({"data-orientation":c},t?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},i,{ref:r}))});function u(e){return o.includes(e)}i.propTypes={orientation(e,r,t){let n=e[r],a=String(n);return n&&!u(n)?Error(`Invalid prop \`orientation\` of value \`${a}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${l}\`.`):null}};let c=i},16459:function(e,r,t){"use strict";t.d(r,{W:function(){return a}});var n=t(2265);function a(e){let r=(0,n.useRef)(e);return(0,n.useEffect)(()=>{r.current=e}),(0,n.useMemo)(()=>(...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)},[])}},51030:function(e,r,t){"use strict";t.d(r,{b:function(){return a}});var n=t(2265);let a=(null==globalThis?void 0:globalThis.document)?n.useLayoutEffect:()=>{}},81860:function(e,r){"use strict";r.Z=function(){}}},function(e){e.O(0,[768,9109,584,1424,5414,713,3815,2256,7753,4168,2445,6654,2971,7864,1744],function(){return e(e.s=79474)}),_N_E=e.O()}]);