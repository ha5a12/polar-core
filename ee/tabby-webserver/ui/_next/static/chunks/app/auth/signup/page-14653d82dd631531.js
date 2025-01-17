(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5271],{92589:function(e,t,r){Promise.resolve().then(r.bind(r,4047))},4047:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(36164),s=r(11978),o=r(3546),a=r(57288),i=r(31458),l=r(84381),c=r(5493),d=r(23782),u=r(21808),m=r(43240),f=r(91302),p=r(11634),x=r(98150),h=r(81565),j=r(82394),g=r(4302);let v=(0,m.BX)("\n  mutation register(\n    $name: String!\n    $email: String!\n    $password1: String!\n    $password2: String!\n    $invitationCode: String\n  ) {\n    register(\n      name: $name\n      email: $email\n      password1: $password1\n      password2: $password2\n      invitationCode: $invitationCode\n    ) {\n      accessToken\n      refreshToken\n    }\n  }\n"),N=d.Ry({name:d.Z_(),email:d.Z_().email("Invalid email address"),password1:d.Z_(),password2:d.Z_(),invitationCode:d.Z_().optional()});function S(e){var t,r;let{className:d,invitationCode:m,onSuccess:S,buttonClass:C,..._}=e,[w,y]=o.useState(!1),[b,I]=o.useState(!1),E=(0,c.cI)({resolver:(0,l.F)(N),defaultValues:{invitationCode:m}}),{password1:A}=E.watch(),[R]=(0,g.Y0)(A),T=(0,s.useRouter)(),G=(0,f.zq)(),{isSubmitting:M}=E.formState,P=(0,p.Db)(v,{async onCompleted(e){await G(null==e?void 0:e.register)&&(S?S():T.replace("/"))},form:E}),O=()=>{if(0===R.length)return y(!1);I(!0)};return(0,n.jsx)(x.l0,{...E,children:(0,n.jsxs)("div",{className:(0,a.cn)("grid gap-2",d),..._,children:[(0,n.jsxs)("form",{className:"grid gap-4",onSubmit:E.handleSubmit(P),children:[(0,n.jsx)(x.Wi,{control:E.control,name:"name",render:e=>{let{field:t}=e;return(0,n.jsxs)(x.xJ,{children:[(0,n.jsx)(x.lX,{children:"Name"}),(0,n.jsx)(x.NI,{children:(0,n.jsx)(j.I,{...t,value:t.value})}),(0,n.jsx)(x.zG,{})]})}}),(0,n.jsx)(x.Wi,{control:E.control,name:"email",render:e=>{let{field:r}=e;return(0,n.jsxs)(x.xJ,{children:[(0,n.jsx)(x.lX,{children:"Email"}),(0,n.jsx)(x.NI,{children:(0,n.jsx)(j.I,{placeholder:"e.g. ".concat(u.o0),type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",...r,value:null!==(t=r.value)&&void 0!==t?t:""})}),(0,n.jsx)(x.zG,{})]})}}),(0,n.jsxs)("div",{children:[(0,n.jsx)(x.Wi,{control:E.control,name:"password1",render:e=>{let{field:t}=e;return(0,n.jsxs)(x.xJ,{children:[(0,n.jsx)(x.lX,{children:"Password"}),(0,n.jsx)(x.NI,{children:(0,n.jsx)(j.I,{type:"password",...t,onFocus:()=>y(!0),onBlur:O})})]})}}),(0,n.jsx)(g.Lu,{password:A||"",showPasswordSchema:w,passworErrors:R,showPasswordError:b})]}),(0,n.jsx)(x.Wi,{control:E.control,name:"password2",render:e=>{let{field:t}=e;return(0,n.jsxs)(x.xJ,{children:[(0,n.jsx)(x.lX,{children:"Confirm Password"}),(0,n.jsx)(x.NI,{children:(0,n.jsx)(j.I,{type:"password",...t,value:null!==(r=t.value)&&void 0!==r?r:""})}),(0,n.jsx)(x.zG,{})]})}}),(0,n.jsx)(x.Wi,{control:E.control,name:"invitationCode",render:e=>{let{field:t}=e;return(0,n.jsx)(x.xJ,{className:"hidden",children:(0,n.jsx)(x.NI,{children:(0,n.jsx)(j.I,{type:"hidden",...t})})})}}),(0,n.jsxs)(i.z,{type:"submit",className:(0,a.cn)("mt-2",C),disabled:M,children:[M&&(0,n.jsx)(h.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Register"]})]}),(0,n.jsx)(x.zG,{className:"text-center"})]})})}function C(e){let{step:t,currentStep:r,children:s}=e;return(0,n.jsx)("div",{id:"step-".concat(t),className:(0,a.cn)("border-l border-foreground py-8 pl-12 pr-2",{"step-mask":t!==r,remote:Math.abs(r-t)>1}),children:s})}function _(){let e=(0,s.useRouter)(),[t,r]=(0,o.useState)(1),a=(0,o.useRef)(null);return(0,o.useEffect)(()=>{var e;1!==t&&(null===(e=document.getElementById("step-".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"}))},[t]),(0,n.jsxs)("div",{className:"admin-register-wrap h-screen w-[600px] overflow-hidden",children:[(0,n.jsxs)(C,{step:1,currentStep:t,children:[(0,n.jsx)("h2",{className:"text-3xl font-semibold tracking-tight first:mt-0",children:"Welcome!"}),(0,n.jsx)("p",{className:"mt-2 leading-7 text-muted-foreground",children:"Your tabby server is live and ready to use. This step by step guide will help you set up your admin account."}),(0,n.jsx)("p",{className:"leading-7 text-muted-foreground",children:"Admin account is the highest level of access in your server. Once created, you can invite other members to join your server."}),(0,n.jsx)(i.z,{className:"mt-5 w-48",onClick:()=>r(2),children:"Start"})]}),(0,n.jsxs)(C,{step:2,currentStep:t,children:[(0,n.jsx)("h3",{className:"text-2xl font-semibold tracking-tight",children:"Create Admin Account"}),(0,n.jsx)("p",{className:"mb-3 leading-7 text-muted-foreground",children:"Please store your password in a safe place. We do not store your password and cannot recover it for you."}),(0,n.jsx)(S,{onSuccess:()=>{var e;r(3),null===(e=a.current)||void 0===e||e.focus()},buttonClass:"self-start w-48"})]}),(0,n.jsxs)(C,{step:3,currentStep:t,children:[(0,n.jsx)("h3",{className:"text-2xl font-semibold tracking-tight",children:"Congratulations!"}),(0,n.jsx)("p",{className:"leading-7 text-muted-foreground",children:"You have successfully created an admin account."}),(0,n.jsx)("p",{className:"mb-3 leading-7 text-muted-foreground",children:"To start, navigate to the dashboard and invite other members to join your server."}),(0,n.jsx)(i.z,{className:"mt-5 w-48 focus-visible:ring-0",onClick:()=>e.replace("/"),ref:a,children:"Go to dashboard"})]})]})}function w(){let e=(0,s.useSearchParams)(),t=e.get("invitationCode")||void 0,r=e.get("isAdmin")||!1;return r?(0,n.jsx)(_,{}):t?(0,n.jsx)(y,{title:"Create an account",description:"Fill form below to create your account",show:!0}):(0,n.jsx)(y,{title:"No invitation code",description:"Please contact your Tabby admin for an invitation code to register"})}function y(e){let{title:t,description:r,show:o}=e,a=(0,s.useSearchParams)(),i=a.get("invitationCode")||void 0;return(0,n.jsxs)("div",{className:"w-[350px] space-y-6",children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,n.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:t}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:r})]}),o&&(0,n.jsx)(S,{invitationCode:i})]})}r(5499)},4302:function(e,t,r){"use strict";r.d(t,{Lu:function(){return m},Y0:function(){return u}});var n,s,o=r(36164),a=r(3546),i=r(74630),l=r(23782),c=r(57288);(n=s||(s={})).LOWERCASE_MSISSING="lowercase_missing",n.UPPERCASE_MSISSING="uppercase_missing",n.NUMBER_MISSING="number_missing",n.SPECIAL_CHAR_MISSING="special_char_missing",n.AT_LEAST_EIGHT_CHAR="at_least_eight_char",n.AT_MOST_TWENTY_CHAT="at_most_twenty_char";let d=l.Z_().refine(e=>/[a-z]/.test(e),{params:{errorCode:s.LOWERCASE_MSISSING}}).refine(e=>/[A-Z]/.test(e),{params:{errorCode:s.UPPERCASE_MSISSING}}).refine(e=>/\d/.test(e),{params:{errorCode:s.NUMBER_MISSING}}).refine(e=>/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e),{params:{errorCode:s.SPECIAL_CHAR_MISSING}}).refine(e=>e.length>=8,{params:{errorCode:s.AT_LEAST_EIGHT_CHAR}}).refine(e=>e.length<=20,{params:{errorCode:s.AT_MOST_TWENTY_CHAT}}),u=e=>{let[t,r]=a.useState([]);return a.useEffect(()=>{if(!(0,i.Z)(e))try{d.parse(e),r([])}catch(e){e instanceof l.jm&&r(e.issues.map(e=>e.params.errorCode))}},[e]),[t,r]};function m(e){let{password:t,showPasswordSchema:r,passworErrors:n,showPasswordError:a}=e;function i(e){let{errorCode:r,text:s}=e;return(0,o.jsx)("li",{className:(0,c.cn)("py-0.5",{"text-green-600 dark:text-green-500":t.length>0&&!n.includes(r),"text-red-600 dark:text-red-500":a&&t.length>0&&n.includes(r)}),children:s})}return(0,o.jsxs)("div",{className:(0,c.cn)("relative text-sm transition-all",{"h-0 opacity-0 -z-10":!r,"mt-4 h-40 opacity-100":r}),children:[(0,o.jsx)("p",{className:"mb-0.5 text-xs text-muted-foreground",children:"Set up a strong password with"}),(0,o.jsxs)("ul",{className:"list-disc pl-4",children:[(0,o.jsx)(i,{errorCode:s.AT_LEAST_EIGHT_CHAR,text:"At least 8 characters long"}),(0,o.jsx)(i,{errorCode:s.AT_MOST_TWENTY_CHAT,text:"No more than 20 characters long"}),(0,o.jsx)(i,{errorCode:s.LOWERCASE_MSISSING,text:"At least one lowercase character"}),(0,o.jsx)(i,{errorCode:s.UPPERCASE_MSISSING,text:"At least one uppercase character"}),(0,o.jsx)(i,{errorCode:s.NUMBER_MISSING,text:"At least one numeric character"}),(0,o.jsx)(i,{errorCode:s.SPECIAL_CHAR_MISSING,text:"At least one special character , such as @#$%^&{}"})]})]})}},98150:function(e,t,r){"use strict";r.d(t,{NI:function(){return h},Wi:function(){return u},l0:function(){return c},lX:function(){return x},pf:function(){return j},xJ:function(){return p},zG:function(){return g}});var n=r(36164),s=r(3546),o=r(74047),a=r(5493),i=r(57288),l=r(5266);let c=a.RV,d=s.createContext({}),u=e=>{let{...t}=e;return(0,n.jsx)(d.Provider,{value:{name:t.name},children:(0,n.jsx)(a.Qr,{...t})})},m=()=>{let e=s.useContext(d),t=s.useContext(f),{getFieldState:r,formState:n}=(0,a.Gc)(),o=e.name||"root",i=r(o,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:l}=t;return{id:l,name:o,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...i}},f=s.createContext({}),p=s.forwardRef((e,t)=>{let{className:r,...o}=e,a=s.useId();return(0,n.jsx)(f.Provider,{value:{id:a},children:(0,n.jsx)("div",{ref:t,className:(0,i.cn)("space-y-2",r),...o})})});p.displayName="FormItem";let x=s.forwardRef((e,t)=>{let{className:r,required:s,...o}=e,{error:a,formItemId:c}=m();return(0,n.jsx)(l._,{ref:t,className:(0,i.cn)(a&&"text-destructive",s&&'after:ml-0.5 after:text-destructive after:content-["*"]',r),htmlFor:c,...o})});x.displayName="FormLabel";let h=s.forwardRef((e,t)=>{let{...r}=e,{error:s,formItemId:a,formDescriptionId:i,formMessageId:l}=m();return(0,n.jsx)(o.g7,{ref:t,id:a,"aria-describedby":s?"".concat(i," ").concat(l):"".concat(i),"aria-invalid":!!s,...r})});h.displayName="FormControl";let j=s.forwardRef((e,t)=>{let{className:r,...s}=e,{formDescriptionId:o}=m();return(0,n.jsx)("div",{ref:t,id:o,className:(0,i.cn)("text-sm text-muted-foreground",r),...s})});j.displayName="FormDescription";let g=s.forwardRef((e,t)=>{let{className:r,children:s,...o}=e,{error:a,formMessageId:l}=m(),c=a?String(null==a?void 0:a.message):s;return c?(0,n.jsx)("p",{ref:t,id:l,className:(0,i.cn)("text-sm font-medium text-destructive",r),...o,children:c}):null});g.displayName="FormMessage"},82394:function(e,t,r){"use strict";r.d(t,{I:function(){return a}});var n=r(36164),s=r(3546),o=r(57288);let a=s.forwardRef((e,t)=>{let{className:r,type:s,...a}=e;return(0,n.jsx)("input",{type:s,className:(0,o.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})});a.displayName="Input"},5266:function(e,t,r){"use strict";r.d(t,{_:function(){return c}});var n=r(36164),s=r(3546),o=r(90893),a=r(14375),i=r(57288);let l=(0,a.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(o.f,{ref:t,className:(0,i.cn)(l(),r),...s})});c.displayName=o.f.displayName},21808:function(e,t,r){"use strict";r.d(t,{$6:function(){return o},$I:function(){return a},L8:function(){return s},ir:function(){return i},o0:function(){return n},rZ:function(){return l}});let n="name@yourcompany.com",s=20,o={DEMO_AUTO_LOGIN:"_tabby_demo_autologin"},a=48,i="NOT_FOUND",l="\n"},5499:function(){},65122:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},79869:function(e,t,r){"use strict";r.d(t,{F:function(){return s},e:function(){return o}});var n=r(3546);function s(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function o(...e){return(0,n.useCallback)(s(...e),e)}},72205:function(e,t,r){"use strict";r.d(t,{WV:function(){return i},jH:function(){return l}});var n=r(65122),s=r(3546),o=r(30171),a=r(74047);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,s.forwardRef)((e,r)=>{let{asChild:o,...i}=e,l=o?a.g7:t;return(0,s.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,s.createElement)(l,(0,n.Z)({},i,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function l(e,t){e&&(0,o.flushSync)(()=>e.dispatchEvent(t))}},74047:function(e,t,r){"use strict";r.d(t,{A4:function(){return l},g7:function(){return a}});var n=r(65122),s=r(3546),o=r(79869);let a=(0,s.forwardRef)((e,t)=>{let{children:r,...o}=e,a=s.Children.toArray(r),l=a.find(c);if(l){let e=l.props.children,r=a.map(t=>t!==l?t:s.Children.count(e)>1?s.Children.only(null):(0,s.isValidElement)(e)?e.props.children:null);return(0,s.createElement)(i,(0,n.Z)({},o,{ref:t}),(0,s.isValidElement)(e)?(0,s.cloneElement)(e,void 0,r):null)}return(0,s.createElement)(i,(0,n.Z)({},o,{ref:t}),r)});a.displayName="Slot";let i=(0,s.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,s.isValidElement)(r)?(0,s.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let s=e[n],o=t[n],a=/^on[A-Z]/.test(n);a?s&&o?r[n]=(...e)=>{o(...e),s(...e)}:s&&(r[n]=s):"style"===n?r[n]={...s,...o}:"className"===n&&(r[n]=[s,o].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?(0,o.F)(t,r.ref):r.ref}):s.Children.count(r)>1?s.Children.only(null):null});i.displayName="SlotClone";let l=({children:e})=>(0,s.createElement)(s.Fragment,null,e);function c(e){return(0,s.isValidElement)(e)&&e.type===l}}},function(e){e.O(0,[8415,7430,55,7812,2546,240,7288,1565,3240,4656,3375,5289,1744],function(){return e(e.s=92589)}),_N_E=e.O()}]);