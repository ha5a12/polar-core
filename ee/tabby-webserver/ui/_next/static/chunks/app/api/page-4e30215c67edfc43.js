(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[110],{72402:function(e,n,t){Promise.resolve().then(t.bind(t,93079))},93079:function(e,n,t){"use strict";t.r(n),t.d(n,{Header:function(){return j}});var r=t(57437),s=t(2265),a=t(61396),l=t.n(a),i=t(73737),o=t(91067),c=t(70349),u=t(13287),d=t(1589),h=t(8724),f=t(88809),m=t(39311),x=t(93023),p=t(84168),b=t(6435);function v(){let{setTheme:e,theme:n}=(0,b.F)(),[t,a]=s.useTransition();return(0,r.jsxs)(x.z,{variant:"ghost",size:"icon",onClick:()=>{a(()=>{e("light"===n?"dark":"light")})},children:["dark"===n?(0,r.jsx)(p.C9,{className:"transition-all"}):(0,r.jsx)(p.O3,{className:"transition-all"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}function j(){var e;(0,f.av)();let{data:n}=(0,u.Q)(),t=(0,h.s)(),s=(0,o.Z)(t,c.xj.Chat),a=null==n?void 0:null===(e=n.version)||void 0===e?void 0:e.git_describe,{data:b}=(0,d.Z)("https://api.github.com/repos/TabbyML/tabby/releases/latest",e=>fetch(e).then(e=>e.json())),j=function(e,n){try{return e&&n&&(0,i.q)(n.name,e,">")}catch(e){return console.warn(e),!0}}(a,b);return(0,r.jsxs)("header",{className:"sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b px-4 backdrop-blur-xl",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("span",{className:"hidden select-none px-2 font-logo font-semibold sm:inline-block",children:"Tabby"})}),(0,r.jsx)(k,{href:"/api",children:"API"}),s&&(0,r.jsx)(k,{href:"/playground",children:"Playground"})]}),(0,r.jsxs)("div",{className:"flex items-center justify-end space-x-2",children:[(0,r.jsx)(v,{}),j&&(0,r.jsxs)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby/releases/latest",rel:"noopener noreferrer",className:(0,x.d)({variant:"ghost"}),children:[(0,r.jsx)(p.Qs,{className:"text-yellow-600 dark:text-yellow-400"}),(0,r.jsxs)("span",{className:"ml-2 hidden md:flex",children:["New version (",null==b?void 0:b.name,") available"]})]}),(0,r.jsxs)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby",rel:"noopener noreferrer",className:(0,m.cn)((0,x.d)({variant:"outline"})),children:[(0,r.jsx)(p.Mr,{}),(0,r.jsx)("span",{className:"ml-2 hidden md:flex",children:"GitHub"})]})]})]})}let k=e=>{let{children:n,href:t}=e;return(0,r.jsx)(l(),{href:t,className:(0,m.cn)((0,x.d)({variant:"link"}),"text-foreground"),children:n})}},13287:function(e,n,t){"use strict";t.d(n,{Q:function(){return l}});var r=t(30713),s=t(1592),a=t(88809);function l(){return(0,r.ZP)((0,a.X0)("/v1/health"),s.Z)}},8724:function(e,n,t){"use strict";t.d(n,{s:function(){return m}});var r=t(2265),s=t(16630),a=t(91317),l=t(35512),i=t(58835),o=t(70349),c=t(7820),u=t(13287);let d={[o.xj.Chat]:"chat_model",[o.xj.Completion]:"model"};function h(e,n){var t;return{kind:n,device:e.device,addr:"localhost",arch:"",cpuInfo:e.cpu_info,name:null!==(t=null==e?void 0:e[d[n]])&&void 0!==t?t:"",cpuCount:e.cpu_count,cudaDevices:e.cuda_devices}}let f=(0,i.BX)("\n  query GetWorkers {\n    workers {\n      kind\n      name\n      addr\n      device\n      arch\n      cpuInfo\n      cpuCount\n      cudaDevices\n    }\n  }\n");function m(){let{data:e}=(0,u.Q)(),{data:n}=(0,c.J9)(f),t=null==n?void 0:n.workers,i=r.useMemo(()=>{let n=(0,l.Z)(t),r=(0,s.Z)(n,{kind:o.xj.Completion})>-1,i=(0,s.Z)(n,{kind:o.xj.Chat})>-1;return!r&&(null==e?void 0:e.model)&&n.push(h(e,o.xj.Completion)),!i&&(null==e?void 0:e.chat_model)&&n.push(h(e,o.xj.Chat)),(0,a.Z)(n,"kind")},[e,t]);return i}},1592:function(e,n,t){"use strict";function r(e){let[n,t]=e,r=new Headers;return r.append("authorization","Bearer ".concat(t)),fetch(n,{headers:r}).then(e=>e.json())}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[936,948,505,787,894,971,864,744],function(){return e(e.s=72402)}),_N_E=e.O()}]);