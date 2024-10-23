(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{7922:function(e,t,r){Promise.resolve().then(r.bind(r,71901))},71901:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(36164),l=r(70652),a=r.n(l),i=r(31458),o=r(3546),u=r(2578),s=r(40055),c=r(21808),d=r(43240),f=r(11634),v=r(70410),m=r(81565),h=r(49506),p=r(99047),g=r(6230),b=r(40030),x=r(55137),w=r(14522);let j=(0,d.BX)("\n  mutation deleteGitRepository($id: ID!) {\n    deleteGitRepository(id: $id)\n  }\n"),y=c.L8;function E(){var e,t;let[r,l]=o.useState(),[{data:a,fetching:c},d]=(0,s.aM)({query:v.S1,variables:{last:y,before:r}}),[{data:E,fetching:k}]=(0,s.aM)({query:v.gI}),[N,I]=o.useState(1),S=o.useMemo(()=>{var e,t;return null==a?void 0:null===(t=a.gitRepositories)||void 0===t?void 0:null===(e=t.edges)||void 0===e?void 0:e.slice().reverse()},[null==a?void 0:null===(e=a.gitRepositories)||void 0===e?void 0:e.edges]),C=null==a?void 0:null===(t=a.gitRepositories)||void 0===t?void 0:t.pageInfo,R=Math.ceil(((null==S?void 0:S.length)||0)/y),A=e=>{var t,r;return null==S?void 0:null===(r=S.slice(0,(e-1)*y))||void 0===r?void 0:null===(t=r.pop())||void 0===t?void 0:t.cursor},M=e=>{l(A(e))},_=o.useMemo(()=>{var e;return null==S?void 0:null===(e=S.slice)||void 0===e?void 0:e.call(S,(N-1)*y,N*y)},[N,S]),P=(null==C?void 0:C.hasPreviousPage)||N<R,$=N>1,D=!!(null==_?void 0:_.length)&&(P||$),V=(0,f.D)(j),L=(0,f.D)(w.C),O=(e,t)=>{V({id:e}).then(e=>{var r,n;(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.deleteGitRepository)?M(t?N-1:N):u.A.error((null==e?void 0:null===(n=e.error)||void 0===n?void 0:n.message)||"Failed to delete repository")})},F=e=>L({command:e}).then(e=>{var t,r;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.triggerJobRun)?(u.A.success("The job has been triggered successfully, it may take a few minutes to process."),d()):u.A.error((null==e?void 0:null===(r=e.error)||void 0===r?void 0:r.message)||"Failed to trigger job")});return o.useEffect(()=>{!c&&R<N&&N>1&&I(R)},[R,N]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(g.Z,{loading:c,children:[(0,n.jsxs)(p.iA,{className:"table-fixed border-t",children:[(0,n.jsx)(p.xD,{children:(0,n.jsxs)(p.SC,{children:[(0,n.jsx)(p.ss,{className:"w-[25%]",children:"Name"}),(0,n.jsx)(p.ss,{className:"w-[45%]",children:"Git URL"}),(0,n.jsx)(p.ss,{className:"w-[140px]",children:"Access"}),(0,n.jsx)(p.ss,{className:"w-[180px]",children:"Job"}),(0,n.jsx)(p.ss,{className:"w-[60px]"})]})}),(0,n.jsx)(p.RM,{children:(null==_?void 0:_.length)||1!==N?(0,n.jsx)(n.Fragment,{children:null==_?void 0:_.map(e=>(0,n.jsxs)(p.SC,{children:[(0,n.jsx)(p.pj,{className:"break-all lg:break-words",title:e.node.name,children:e.node.name}),(0,n.jsx)(p.pj,{className:"break-all lg:break-words",title:e.node.gitUrl,children:e.node.gitUrl}),(0,n.jsx)(p.pj,{className:"break-all lg:break-words",children:(0,n.jsx)(b.r,{sourceId:e.node.sourceId,sourceName:e.node.name,fetchingUserGroups:k,userGroups:null==E?void 0:E.userGroups,editable:!0})}),(0,n.jsx)(p.pj,{children:(0,n.jsx)(x._,{jobInfo:e.node.jobInfo,onTrigger:()=>F(e.node.jobInfo.command)})}),(0,n.jsx)(p.pj,{className:"text-right",children:(0,n.jsx)(i.z,{size:"icon",variant:"hover-destructive",onClick:()=>O(e.node.id,1===_.length),children:(0,n.jsx)(m.IconTrash,{})})})]},e.node.id))}):(0,n.jsx)(p.SC,{children:(0,n.jsx)(p.pj,{colSpan:5,className:"h-[100px] text-center",children:"No Data"})})})]}),D&&(0,n.jsx)(h.tl,{className:"my-4",children:(0,n.jsxs)(h.ng,{children:[(0,n.jsx)(h.nt,{children:(0,n.jsx)(h.dN,{disabled:!$,onClick:()=>{if(N<=1||c)return;let e=N-1;M(e),I(e)}})}),(0,n.jsx)(h.nt,{children:(0,n.jsx)(h.$0,{disabled:!P,onClick:()=>{if(!P||c)return;let e=N+1;M(e),I(e)}})})]})})]})})}function k(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"my-4 flex justify-end",children:(0,n.jsx)(a(),{href:"./git/new",className:(0,i.d)(),children:"Create"})}),(0,n.jsx)(E,{})]})}},49506:function(e,t,r){"use strict";r.d(t,{$0:function(){return v},Dj:function(){return m},dN:function(){return f},kN:function(){return d},ng:function(){return s},nt:function(){return c},tl:function(){return u}});var n=r(36164),l=r(3546),a=r(1544),i=r(31458),o=r(81565);let u=e=>{let{className:t,...r}=e;return(0,n.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,a.cn)("mx-auto flex w-full justify-center",t),...r})};u.displayName="Pagination";let s=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("ul",{ref:t,className:(0,a.cn)("flex flex-row items-center gap-1",r),...l})});s.displayName="PaginationContent";let c=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)("li",{ref:t,className:(0,a.cn)("",r),...l})});c.displayName="PaginationItem";let d=e=>{let{className:t,isActive:r,size:l="icon",...o}=e;return(0,n.jsx)("a",{"aria-current":r?"page":void 0,className:(0,a.cn)("select-none",(0,i.d)({variant:r?"outline":"ghost",size:l}),t),...o})};d.displayName="PaginationLink";let f=e=>{let{className:t,disabled:r,...l}=e;return(0,n.jsxs)(d,{"aria-label":"Go to previous page",size:"default",className:(0,a.cn)("cursor-pointer select-none gap-1 pl-2.5",r&&"cursor-not-allowed text-muted-foreground",t),...l,children:[(0,n.jsx)(o.IconChevronLeft,{className:"h-4 w-4"}),(0,n.jsx)("span",{children:"Previous"})]})};f.displayName="PaginationPrevious";let v=e=>{let{className:t,disabled:r,...l}=e;return(0,n.jsxs)(d,{"aria-label":"Go to next page",size:"default",className:(0,a.cn)("cursor-pointer select-none gap-1 pr-2.5",r&&"cursor-not-allowed text-muted-foreground",t),...l,children:[(0,n.jsx)("span",{children:"Next"}),(0,n.jsx)(o.IconChevronRight,{className:"h-4 w-4"})]})};v.displayName="PaginationNext";let m=e=>{let{className:t,...r}=e;return(0,n.jsxs)("span",{"aria-hidden":!0,className:(0,a.cn)("flex h-9 w-9 items-center justify-center",t),...r,children:[(0,n.jsx)(o.IconMore,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"More pages"})]})};m.displayName="PaginationEllipsis"},21808:function(e,t,r){"use strict";r.d(t,{$6:function(){return a},$I:function(){return i},L8:function(){return l},ir:function(){return o},o0:function(){return n}});let n="name@yourcompany.com",l=20,a={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_INITIAL_CONTEXTS:"_tabby_search_initial_contexts"},i=48,o="NOT_FOUND"},70652:function(e,t,r){e.exports=r(54007)},53241:function(e,t,r){"use strict";r.d(t,{mY:function(){return A}});var n=/[\\\/_+.#"@\[\(\{&]/,l=/[\\\/_+.#"@\[\(\{&]/g,a=/[\s-]/,i=/[\s-]/g;function o(e){return e.toLowerCase().replace(i," ")}var u=r(4318),s=r(3546),c=r(72205),d='[cmdk-group=""]',f='[cmdk-group-items=""]',v='[cmdk-item=""]',m=`${v}:not([aria-disabled="true"])`,h="cmdk-item-select",p="data-value",g=(e,t,r)=>{var u;return u=e,function e(t,r,o,u,s,c,d){if(c===r.length)return s===t.length?1:.99;var f=`${s},${c}`;if(void 0!==d[f])return d[f];for(var v,m,h,p,g=u.charAt(c),b=o.indexOf(g,s),x=0;b>=0;)(v=e(t,r,o,u,b+1,c+1,d))>x&&(b===s?v*=1:n.test(t.charAt(b-1))?(v*=.8,(h=t.slice(s,b-1).match(l))&&s>0&&(v*=Math.pow(.999,h.length))):a.test(t.charAt(b-1))?(v*=.9,(p=t.slice(s,b-1).match(i))&&s>0&&(v*=Math.pow(.999,p.length))):(v*=.17,s>0&&(v*=Math.pow(.999,b-s))),t.charAt(b)!==r.charAt(c)&&(v*=.9999)),(v<.1&&o.charAt(b-1)===u.charAt(c+1)||u.charAt(c+1)===u.charAt(c)&&o.charAt(b-1)!==u.charAt(c))&&.1*(m=e(t,r,o,u,b+1,c+2,d))>v&&(v=.1*m),v>x&&(x=v),b=o.indexOf(g,b+1);return d[f]=x,x}(u=r&&r.length>0?`${u+" "+r.join(" ")}`:u,t,o(u),o(t),0,0,{})},b=s.createContext(void 0),x=()=>s.useContext(b),w=s.createContext(void 0),j=()=>s.useContext(w),y=s.createContext(void 0),E=s.forwardRef((e,t)=>{let r=P(()=>{var t,r;return{search:"",value:null!=(r=null!=(t=e.value)?t:e.defaultValue)?r:"",filtered:{count:0,items:new Map,groups:new Set}}}),n=P(()=>new Set),l=P(()=>new Map),a=P(()=>new Map),i=P(()=>new Set),o=M(e),{label:u,children:x,value:j,onValueChange:y,filter:E,shouldFilter:k,loop:N,disablePointerSelection:I=!1,vimBindings:S=!0,...C}=e,R=s.useId(),A=s.useId(),$=s.useId(),D=s.useRef(null),V=L();_(()=>{if(void 0!==j){let e=j.trim();r.current.value=e,G.emit()}},[j]),_(()=>{V(6,z)},[]);let G=s.useMemo(()=>({subscribe:e=>(i.current.add(e),()=>i.current.delete(e)),snapshot:()=>r.current,setState:(e,t,n)=>{var l,a,i;if(!Object.is(r.current[e],t)){if(r.current[e]=t,"search"===e)K(),U(),V(1,W);else if("value"===e&&(n||V(5,z),(null==(l=o.current)?void 0:l.value)!==void 0)){let e=null!=t?t:"";null==(i=(a=o.current).onValueChange)||i.call(a,e);return}G.emit()}},emit:()=>{i.current.forEach(e=>e())}}),[]),q=s.useMemo(()=>({value:(e,t,n)=>{var l;t!==(null==(l=a.current.get(e))?void 0:l.value)&&(a.current.set(e,{value:t,keywords:n}),r.current.filtered.items.set(e,T(t,n)),V(2,()=>{U(),G.emit()}))},item:(e,t)=>(n.current.add(e),t&&(l.current.has(t)?l.current.get(t).add(e):l.current.set(t,new Set([e]))),V(3,()=>{K(),U(),r.current.value||W(),G.emit()}),()=>{a.current.delete(e),n.current.delete(e),r.current.filtered.items.delete(e);let t=H();V(4,()=>{K(),(null==t?void 0:t.getAttribute("id"))===e&&W(),G.emit()})}),group:e=>(l.current.has(e)||l.current.set(e,new Set),()=>{a.current.delete(e),l.current.delete(e)}),filter:()=>o.current.shouldFilter,label:u||e["aria-label"],disablePointerSelection:I,listId:R,inputId:$,labelId:A,listInnerRef:D}),[]);function T(e,t){var n,l;let a=null!=(l=null==(n=o.current)?void 0:n.filter)?l:g;return e?a(e,r.current.search,t):0}function U(){if(!r.current.search||!1===o.current.shouldFilter)return;let e=r.current.filtered.items,t=[];r.current.filtered.groups.forEach(r=>{let n=l.current.get(r),a=0;n.forEach(t=>{a=Math.max(e.get(t),a)}),t.push([r,a])});let n=D.current;B().sort((t,r)=>{var n,l;let a=t.getAttribute("id"),i=r.getAttribute("id");return(null!=(n=e.get(i))?n:0)-(null!=(l=e.get(a))?l:0)}).forEach(e=>{let t=e.closest(f);t?t.appendChild(e.parentElement===t?e:e.closest(`${f} > *`)):n.appendChild(e.parentElement===n?e:e.closest(`${f} > *`))}),t.sort((e,t)=>t[1]-e[1]).forEach(e=>{let t=D.current.querySelector(`${d}[${p}="${encodeURIComponent(e[0])}"]`);null==t||t.parentElement.appendChild(t)})}function W(){let e=B().find(e=>"true"!==e.getAttribute("aria-disabled")),t=null==e?void 0:e.getAttribute(p);G.setState("value",t||void 0)}function K(){var e,t,i,u;if(!r.current.search||!1===o.current.shouldFilter){r.current.filtered.count=n.current.size;return}r.current.filtered.groups=new Set;let s=0;for(let l of n.current){let n=T(null!=(t=null==(e=a.current.get(l))?void 0:e.value)?t:"",null!=(u=null==(i=a.current.get(l))?void 0:i.keywords)?u:[]);r.current.filtered.items.set(l,n),n>0&&s++}for(let[e,t]of l.current)for(let n of t)if(r.current.filtered.items.get(n)>0){r.current.filtered.groups.add(e);break}r.current.filtered.count=s}function z(){var e,t,r;let n=H();n&&((null==(e=n.parentElement)?void 0:e.firstChild)===n&&(null==(r=null==(t=n.closest(d))?void 0:t.querySelector('[cmdk-group-heading=""]'))||r.scrollIntoView({block:"nearest"})),n.scrollIntoView({block:"nearest"}))}function H(){var e;return null==(e=D.current)?void 0:e.querySelector(`${v}[aria-selected="true"]`)}function B(){var e;return Array.from(null==(e=D.current)?void 0:e.querySelectorAll(m))}function J(e){let t=B()[e];t&&G.setState("value",t.getAttribute(p))}function X(e){var t;let r=H(),n=B(),l=n.findIndex(e=>e===r),a=n[l+e];null!=(t=o.current)&&t.loop&&(a=l+e<0?n[n.length-1]:l+e===n.length?n[0]:n[l+e]),a&&G.setState("value",a.getAttribute(p))}function Y(e){let t=H(),r=null==t?void 0:t.closest(d),n;for(;r&&!n;)n=null==(r=e>0?function(e,t){let r=e.nextElementSibling;for(;r;){if(r.matches(t))return r;r=r.nextElementSibling}}(r,d):function(e,t){let r=e.previousElementSibling;for(;r;){if(r.matches(t))return r;r=r.previousElementSibling}}(r,d))?void 0:r.querySelector(m);n?G.setState("value",n.getAttribute(p)):X(e)}let Z=()=>J(B().length-1),Q=e=>{e.preventDefault(),e.metaKey?Z():e.altKey?Y(1):X(1)},ee=e=>{e.preventDefault(),e.metaKey?J(0):e.altKey?Y(-1):X(-1)};return s.createElement(c.WV.div,{ref:t,tabIndex:-1,...C,"cmdk-root":"",onKeyDown:e=>{var t;if(null==(t=C.onKeyDown)||t.call(C,e),!e.defaultPrevented)switch(e.key){case"n":case"j":S&&e.ctrlKey&&Q(e);break;case"ArrowDown":Q(e);break;case"p":case"k":S&&e.ctrlKey&&ee(e);break;case"ArrowUp":ee(e);break;case"Home":e.preventDefault(),J(0);break;case"End":e.preventDefault(),Z();break;case"Enter":if(!e.nativeEvent.isComposing&&229!==e.keyCode){e.preventDefault();let t=H();if(t){let e=new Event(h);t.dispatchEvent(e)}}}}},s.createElement("label",{"cmdk-label":"",htmlFor:q.inputId,id:q.labelId,style:F},u),O(e,e=>s.createElement(w.Provider,{value:G},s.createElement(b.Provider,{value:q},e))))}),k=s.forwardRef((e,t)=>{var r,n;let l=s.useId(),a=s.useRef(null),i=s.useContext(y),o=x(),u=M(e),d=null!=(n=null==(r=u.current)?void 0:r.forceMount)?n:null==i?void 0:i.forceMount;_(()=>{if(!d)return o.item(l,null==i?void 0:i.id)},[d]);let f=V(l,a,[e.value,e.children,a],e.keywords),v=j(),m=D(e=>e.value&&e.value===f.current),p=D(e=>!!d||!1===o.filter()||!e.search||e.filtered.items.get(l)>0);function g(){var e,t;b(),null==(t=(e=u.current).onSelect)||t.call(e,f.current)}function b(){v.setState("value",f.current,!0)}if(s.useEffect(()=>{let t=a.current;if(!(!t||e.disabled))return t.addEventListener(h,g),()=>t.removeEventListener(h,g)},[p,e.onSelect,e.disabled]),!p)return null;let{disabled:w,value:E,onSelect:k,forceMount:N,keywords:I,...S}=e;return s.createElement(c.WV.div,{ref:$([a,t]),...S,id:l,"cmdk-item":"",role:"option","aria-disabled":!!w,"aria-selected":!!m,"data-disabled":!!w,"data-selected":!!m,onPointerMove:w||o.disablePointerSelection?void 0:b,onClick:w?void 0:g},e.children)}),N=s.forwardRef((e,t)=>{let{heading:r,children:n,forceMount:l,...a}=e,i=s.useId(),o=s.useRef(null),u=s.useRef(null),d=s.useId(),f=x(),v=D(e=>!!l||!1===f.filter()||!e.search||e.filtered.groups.has(i));_(()=>f.group(i),[]),V(i,o,[e.value,e.heading,u]);let m=s.useMemo(()=>({id:i,forceMount:l}),[l]);return s.createElement(c.WV.div,{ref:$([o,t]),...a,"cmdk-group":"",role:"presentation",hidden:!v||void 0},r&&s.createElement("div",{ref:u,"cmdk-group-heading":"","aria-hidden":!0,id:d},r),O(e,e=>s.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?d:void 0},s.createElement(y.Provider,{value:m},e))))}),I=s.forwardRef((e,t)=>{let{alwaysRender:r,...n}=e,l=s.useRef(null),a=D(e=>!e.search);return r||a?s.createElement(c.WV.div,{ref:$([l,t]),...n,"cmdk-separator":"",role:"separator"}):null}),S=s.forwardRef((e,t)=>{let{onValueChange:r,...n}=e,l=null!=e.value,a=j(),i=D(e=>e.search),o=D(e=>e.value),u=x(),d=s.useMemo(()=>{var e;let t=null==(e=u.listInnerRef.current)?void 0:e.querySelector(`${v}[${p}="${encodeURIComponent(o)}"]`);return null==t?void 0:t.getAttribute("id")},[]);return s.useEffect(()=>{null!=e.value&&a.setState("search",e.value)},[e.value]),s.createElement(c.WV.input,{ref:t,...n,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":u.listId,"aria-labelledby":u.labelId,"aria-activedescendant":d,id:u.inputId,type:"text",value:l?e.value:i,onChange:e=>{l||a.setState("search",e.target.value),null==r||r(e.target.value)}})}),C=s.forwardRef((e,t)=>{let{children:r,label:n="Suggestions",...l}=e,a=s.useRef(null),i=s.useRef(null),o=x();return s.useEffect(()=>{if(i.current&&a.current){let e=i.current,t=a.current,r,n=new ResizeObserver(()=>{r=requestAnimationFrame(()=>{let r=e.offsetHeight;t.style.setProperty("--cmdk-list-height",r.toFixed(1)+"px")})});return n.observe(e),()=>{cancelAnimationFrame(r),n.unobserve(e)}}},[]),s.createElement(c.WV.div,{ref:$([a,t]),...l,"cmdk-list":"",role:"listbox","aria-label":n,id:o.listId},O(e,e=>s.createElement("div",{ref:$([i,o.listInnerRef]),"cmdk-list-sizer":""},e)))}),R=s.forwardRef((e,t)=>{let{open:r,onOpenChange:n,overlayClassName:l,contentClassName:a,container:i,...o}=e;return s.createElement(u.fC,{open:r,onOpenChange:n},s.createElement(u.h_,{container:i},s.createElement(u.aV,{"cmdk-overlay":"",className:l}),s.createElement(u.VY,{"aria-label":e.label,"cmdk-dialog":"",className:a},s.createElement(E,{ref:t,...o}))))}),A=Object.assign(E,{List:C,Item:k,Input:S,Group:N,Separator:I,Dialog:R,Empty:s.forwardRef((e,t)=>D(e=>0===e.filtered.count)?s.createElement(c.WV.div,{ref:t,...e,"cmdk-empty":"",role:"presentation"}):null),Loading:s.forwardRef((e,t)=>{let{progress:r,children:n,label:l="Loading...",...a}=e;return s.createElement(c.WV.div,{ref:t,...a,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":l},O(e,e=>s.createElement("div",{"aria-hidden":!0},e)))})});function M(e){let t=s.useRef(e);return _(()=>{t.current=e}),t}var _="undefined"==typeof window?s.useEffect:s.useLayoutEffect;function P(e){let t=s.useRef();return void 0===t.current&&(t.current=e()),t}function $(e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}function D(e){let t=j(),r=()=>e(t.snapshot());return s.useSyncExternalStore(t.subscribe,r,r)}function V(e,t,r,n=[]){let l=s.useRef(),a=x();return _(()=>{var i;let o=(()=>{var e;for(let t of r){if("string"==typeof t)return t.trim();if("object"==typeof t&&"current"in t)return t.current?null==(e=t.current.textContent)?void 0:e.trim():l.current}})(),u=n.map(e=>e.trim());a.value(e,o,u),null==(i=t.current)||i.setAttribute(p,o),l.current=o}),l}var L=()=>{let[e,t]=s.useState(),r=P(()=>new Map);return _(()=>{r.current.forEach(e=>e()),r.current=new Map},[e]),(e,n)=>{r.current.set(e,n),t({})}};function O({asChild:e,children:t},r){let n;return e&&s.isValidElement(t)?s.cloneElement("function"==typeof(n=t.type)?n(t.props):"render"in n?n.render(t.props):t,{ref:t.ref},r(t.props.children)):r(t)}var F={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"}}},function(e){e.O(0,[7565,8415,1386,55,1058,4007,7674,3643,2578,6345,9421,4421,4318,3299,1544,1565,3240,3396,2869,3375,5289,1744],function(){return e(e.s=7922)}),_N_E=e.O()}]);