(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{92720:function(e,s,t){Promise.resolve().then(t.bind(t,64074))},64074:function(e,s,t){"use strict";t.r(s),t.d(s,{Chat:function(){return J}});var n=t(57437),a=t(57139),r=t(39311),l=t(2265),i=t(26823);let o=l.forwardRef((e,s)=>{let{className:t,orientation:a="horizontal",decorative:l=!0,...o}=e;return(0,n.jsx)(i.f,{ref:s,decorative:l,orientation:a,className:(0,r.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",t),...o})});o.displayName=i.f.displayName;var c=t(48975),d=t(82180),u=t(30513),m=t(4523);function h(e){let{timeout:s=2e3}=e,[t,n]=l.useState(!1);return{isCopied:t,copyToClipboard:e=>{var t;(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText)&&e&&navigator.clipboard.writeText(e).then(()=>{n(!0),setTimeout(()=>{n(!1)},s)})}}}var p=t(84168),x=t(93023);let f={javascript:".js",python:".py",java:".java",c:".c",cpp:".cpp","c++":".cpp","c#":".cs",ruby:".rb",php:".php",swift:".swift","objective-c":".m",kotlin:".kt",typescript:".ts",go:".go",perl:".pl",rust:".rs",scala:".scala",haskell:".hs",lua:".lua",shell:".sh",sql:".sql",html:".html",css:".css"},g=function(e){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t="ABCDEFGHJKLMNPQRSTUVWXY3456789",n="";for(let s=0;s<e;s++)n+=t.charAt(Math.floor(Math.random()*t.length));return s?n.toLowerCase():n},v=(0,l.memo)(e=>{let{language:s,value:t}=e,{isCopied:a,copyToClipboard:r}=h({timeout:2e3});return(0,n.jsxs)("div",{className:"relative w-full font-sans codeblock bg-zinc-950",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between w-full px-6 py-2 pr-4 bg-zinc-800 text-zinc-100",children:[(0,n.jsx)("span",{className:"text-xs lowercase",children:s}),(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsxs)(x.z,{variant:"ghost",className:"hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{let e=f[s]||".file",n="file-".concat(g(3,!0)).concat(e),a=window.prompt("Enter file name",n);if(!a)return;let r=new Blob([t],{type:"text/plain"}),l=URL.createObjectURL(r),i=document.createElement("a");i.download=a,i.href=l,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(l)},size:"icon",children:[(0,n.jsx)(p.Dj,{}),(0,n.jsx)("span",{className:"sr-only",children:"Download"})]}),(0,n.jsxs)(x.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{a||r(t)},children:[a?(0,n.jsx)(p.NO,{}):(0,n.jsx)(p.vU,{}),(0,n.jsx)("span",{className:"sr-only",children:"Copy code"})]})]})]}),(0,n.jsx)(u.Z,{language:s,style:m.RY,PreTag:"div",showLineNumbers:!0,customStyle:{margin:0,width:"100%",background:"transparent",padding:"1.5rem 1rem"},codeTagProps:{style:{fontSize:"0.9rem",fontFamily:"var(--font-mono)"}},children:t})]})});v.displayName="CodeBlock";var b=t(19349);let j=(0,l.memo)(b.D,(e,s)=>e.children===s.children&&e.className===s.className);var y=t(16691),w=t.n(y);function N(e){let{message:s,className:t,...a}=e,{isCopied:l,copyToClipboard:i}=h({timeout:2e3});return(0,n.jsx)("div",{className:(0,r.cn)("flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0",t),...a,children:(0,n.jsxs)(x.z,{variant:"ghost",size:"icon",onClick:()=>{l||i(s.content)},children:[l?(0,n.jsx)(p.NO,{}):(0,n.jsx)(p.vU,{}),(0,n.jsx)("span",{className:"sr-only",children:"Copy message"})]})})}function k(e){let{message:s,...t}=e;return(0,n.jsxs)("div",{className:(0,r.cn)("group relative mb-4 flex items-start md:-ml-12"),...t,children:[(0,n.jsx)("div",{className:(0,r.cn)("flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow","user"===s.role?"bg-background":"bg-primary text-primary-foreground"),children:"user"===s.role?(0,n.jsx)(p.f7,{}):(0,n.jsx)(C,{})}),(0,n.jsxs)("div",{className:"flex-1 px-1 ml-4 space-y-2 overflow-hidden",children:[(0,n.jsx)(j,{className:"prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0",remarkPlugins:[c.Z,d.Z],components:{p(e){let{children:s}=e;return(0,n.jsx)("p",{className:"mb-2 last:mb-0",children:s})},code(e){let{node:s,inline:t,className:a,children:r,...l}=e;if(r.length){if("▍"==r[0])return(0,n.jsx)("span",{className:"mt-1 cursor-default animate-pulse",children:"▍"});r[0]=r[0].replace("`▍`","▍")}let i=/language-(\w+)/.exec(a||"");return t?(0,n.jsx)("code",{className:a,...l,children:r}):(0,n.jsx)(v,{language:i&&i[1]||"",value:String(r).replace(/\n$/,""),...l},Math.random())}},children:s.content}),(0,n.jsx)(N,{message:s})]})]})}function C(){return(0,n.jsx)(w(),{style:{borderRadius:4},src:"https://avatars.githubusercontent.com/u/125617854?s=128&v=4",alt:"tabby",width:"128",height:"128"})}function z(e){let{messages:s}=e;return s.length?(0,n.jsx)("div",{className:"relative mx-auto max-w-2xl px-4",children:s.map((e,t)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(k,{message:e}),t<s.length-1&&(0,n.jsx)(o,{className:"my-4 md:my-8"})]},t))}):null}var E=t(45470),L=t(95482),R=t(24033);function S(e){let{onSubmit:s,input:t,setInput:a,isLoading:i}=e,{formRef:o,onKeyDown:c}=function(){let e=(0,l.useRef)(null);return{formRef:e,onKeyDown:s=>{if("Enter"===s.key&&!s.shiftKey&&!s.nativeEvent.isComposing){var t;null===(t=e.current)||void 0===t||t.requestSubmit(),s.preventDefault()}}}}(),d=l.useRef(null),u=(0,R.useRouter)();return l.useEffect(()=>{d.current&&d.current.focus()},[]),(0,n.jsx)("form",{onSubmit:async e=>{e.preventDefault(),(null==t?void 0:t.trim())&&(a(""),await s(t))},ref:o,children:(0,n.jsxs)("div",{className:"relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12",children:[(0,n.jsxs)(L.u,{children:[(0,n.jsx)(L.aJ,{asChild:!0,children:(0,n.jsxs)("button",{onClick:e=>{e.preventDefault(),u.refresh(),u.push("/")},className:(0,r.cn)((0,x.d)({size:"sm",variant:"outline"}),"absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-4"),children:[(0,n.jsx)(p.SC,{}),(0,n.jsx)("span",{className:"sr-only",children:"New Chat"})]})}),(0,n.jsx)(L._v,{children:"New Chat"})]}),(0,n.jsx)(E.Z,{ref:d,tabIndex:0,onKeyDown:c,rows:1,value:t,onChange:e=>a(e.target.value),placeholder:"Ask a question.",spellCheck:!1,className:"min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"}),(0,n.jsx)("div",{className:"absolute right-0 top-4 sm:right-4",children:(0,n.jsxs)(L.u,{children:[(0,n.jsx)(L.aJ,{asChild:!0,children:(0,n.jsxs)(x.z,{type:"submit",size:"icon",disabled:i||""===t,children:[(0,n.jsx)(p.vq,{}),(0,n.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,n.jsx)(L._v,{children:"Send message"})]})})]})})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[s,t]=l.useState(!1);return l.useEffect(()=>{let s=()=>{t(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)};return window.addEventListener("scroll",s,{passive:!0}),s(),()=>{window.removeEventListener("scroll",s)}},[e]),s}function _(e){let{className:s,...t}=e,a=T();return(0,n.jsxs)(x.z,{variant:"outline",size:"icon",className:(0,r.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",a?"opacity-0":"opacity-100",s),onClick:()=>window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"}),...t,children:[(0,n.jsx)(p.BD,{}),(0,n.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}function D(e){let{href:s,children:t}=e;return(0,n.jsxs)("a",{href:s,target:"_blank",className:"inline-flex flex-1 justify-center gap-1 leading-4 hover:underline",children:[(0,n.jsx)("span",{children:t}),(0,n.jsx)("svg",{"aria-hidden":"true",height:"7",viewBox:"0 0 6 6",width:"7",className:"opacity-70",children:(0,n.jsx)("path",{d:"M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z",fill:"currentColor"})})]})}function B(e){let{className:s,...t}=e;return(0,n.jsxs)("p",{className:(0,r.cn)("px-2 text-center text-xs leading-normal text-muted-foreground",s),...t,children:[(0,n.jsx)(D,{href:"https://tabby.tabbyml.com",children:"Tabby"}),", an opensource, self-hosted AI coding assistant ."]})}function O(e){let{id:s,isLoading:t,stop:a,append:r,reload:l,input:i,setInput:o,messages:c}=e;return(0,n.jsxs)("div",{className:"fixed inset-x-0 bottom-0 bg-gradient-to-b from-muted/10 from-10% to-muted/30 to-50%",children:[(0,n.jsx)(_,{}),(0,n.jsxs)("div",{className:"mx-auto sm:max-w-2xl sm:px-4",children:[(0,n.jsx)("div",{className:"flex h-10 items-center justify-center",children:t?(0,n.jsxs)(x.z,{variant:"outline",onClick:()=>a(),className:"bg-background",children:[(0,n.jsx)(p.zu,{className:"mr-2"}),"Stop generating"]}):(null==c?void 0:c.length)>0&&(0,n.jsxs)(x.z,{variant:"outline",onClick:()=>l(),className:"bg-background",children:[(0,n.jsx)(p.tr,{className:"mr-2"}),"Regenerate response"]})}),(0,n.jsxs)("div",{className:"space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4",children:[(0,n.jsx)(S,{onSubmit:async e=>{await r({id:s,content:e,role:"user"})},input:i,setInput:o,isLoading:t}),(0,n.jsx)(B,{className:"hidden sm:block"})]})]})]})}let U=[{heading:"Explain technical concepts",message:'What is a "serverless function"?'},{heading:"Explain how to parse email address",message:"How to parse email address with regex"}];function H(e){let{setInput:s}=e;return(0,n.jsx)("div",{className:"mx-auto max-w-2xl px-4",children:(0,n.jsxs)("div",{className:"rounded-lg border bg-background p-8",children:[(0,n.jsx)("h1",{className:"mb-2 text-lg font-semibold",children:"Welcome to Tabby Playground!"}),(0,n.jsx)("p",{className:"leading-normal text-muted-foreground",children:"You can start a conversation here or try the following examples:"}),(0,n.jsx)("div",{className:"mt-4 flex flex-col items-start space-y-2",children:U.map((e,t)=>(0,n.jsxs)(x.z,{variant:"link",className:"h-auto p-0 text-base",onClick:()=>s(e.message),children:[(0,n.jsx)(p.Ec,{className:"mr-2 text-muted-foreground"}),e.heading]},t))})]})})}var I=t(4327);function P(e){let{trackVisibility:s}=e,t=T(),{ref:a,entry:r,inView:i}=(0,I.YD)({trackVisibility:s,delay:100,rootMargin:"0px 0px -150px 0px"});return l.useEffect(()=>{t&&s&&!i&&(null==r||r.target.scrollIntoView({block:"start"}))},[i,r,t,s]),(0,n.jsx)("div",{ref:a,className:"h-px w-full"})}var q=t(5925),M=t(4913),Y=t(62601);let A=Y.env.NEXT_PUBLIC_TABBY_SERVER_URL||"http://localhost:8080";function J(e){let{id:s,initialMessages:t,className:i}=e;(0,l.useEffect)(()=>{let e=window.fetch;window.fetch=async function(s,t){if("/api/chat"!==s)return e(s,t);let{messages:n}=JSON.parse(t.body),a=await e("".concat(A,"/v1beta/generate_stream"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:function(e){let s=e[e.length-1].content;return"Below is an instruction that describes a task. Write a response that appropriately completes the request.\n\n### Instruction:\n".concat(s,"\n\n### Response:")}(n)})}),r=(0,M.Ks)(a,void 0);return new M.wn(r)}},[]);let{messages:o,append:c,reload:d,stop:u,isLoading:m,input:h,setInput:p,setMessages:x}=(0,a.R)({initialMessages:t,id:s,body:{id:s},onResponse(e){401===e.status&&q.toast.error(e.statusText)}});return o.length>2&&x(o.slice(o.length-2,o.length)),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:(0,r.cn)("pb-[200px] pt-4 md:pt-10",i),children:o.length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(z,{messages:o}),(0,n.jsx)(P,{trackVisibility:m})]}):(0,n.jsx)(H,{setInput:p})}),(0,n.jsx)(O,{id:s,isLoading:m,stop:u,append:c,reload:d,messages:o,input:h,setInput:p})]})}}},function(e){e.O(0,[346,978,524,971,864,744],function(){return e(e.s=92720)}),_N_E=e.O()}]);