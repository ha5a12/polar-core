(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6557],{33904:function(e){"use strict";var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),n=[[{color:"0, 0, 0",class:"ansi-black"},{color:"187, 0, 0",class:"ansi-red"},{color:"0, 187, 0",class:"ansi-green"},{color:"187, 187, 0",class:"ansi-yellow"},{color:"0, 0, 187",class:"ansi-blue"},{color:"187, 0, 187",class:"ansi-magenta"},{color:"0, 187, 187",class:"ansi-cyan"},{color:"255,255,255",class:"ansi-white"}],[{color:"85, 85, 85",class:"ansi-bright-black"},{color:"255, 85, 85",class:"ansi-bright-red"},{color:"0, 255, 0",class:"ansi-bright-green"},{color:"255, 255, 85",class:"ansi-bright-yellow"},{color:"85, 85, 255",class:"ansi-bright-blue"},{color:"255, 85, 255",class:"ansi-bright-magenta"},{color:"85, 255, 255",class:"ansi-bright-cyan"},{color:"255, 255, 255",class:"ansi-bright-white"}]],r=function(){function e(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),this.fg=this.bg=this.fg_truecolor=this.bg_truecolor=null,this.bright=0,this.decorations=[]}return t(e,null,[{key:"escapeForHtml",value:function(t){return new e().escapeForHtml(t)}},{key:"linkify",value:function(t){return new e().linkify(t)}},{key:"ansiToHtml",value:function(t,n){return new e().ansiToHtml(t,n)}},{key:"ansiToJson",value:function(t,n){return new e().ansiToJson(t,n)}},{key:"ansiToText",value:function(t){return new e().ansiToText(t)}}]),t(e,[{key:"setupPalette",value:function(){this.PALETTE_COLORS=[];for(var e=0;e<2;++e)for(var t=0;t<8;++t)this.PALETTE_COLORS.push(n[e][t].color);for(var r=[0,95,135,175,215,255],o=function(e,t,n){return r[e]+", "+r[t]+", "+r[n]},i=0;i<6;++i)for(var s=0;s<6;++s)for(var l=0;l<6;++l)this.PALETTE_COLORS.push(o(i,s,l));for(var a=8,u=0;u<24;++u,a+=10)this.PALETTE_COLORS.push(o(a,a,a))}},{key:"escapeForHtml",value:function(e){return e.replace(/[&<>\"]/gm,function(e){return"&"==e?"&amp;":'"'==e?"&quot;":"<"==e?"&lt;":">"==e?"&gt;":""})}},{key:"linkify",value:function(e){return e.replace(/(https?:\/\/[^\s]+)/gm,function(e){return'<a href="'+e+'">'+e+"</a>"})}},{key:"ansiToHtml",value:function(e,t){return this.process(e,t,!0)}},{key:"ansiToJson",value:function(e,t){return(t=t||{}).json=!0,t.clearLine=!1,this.process(e,t,!0)}},{key:"ansiToText",value:function(e){return this.process(e,{},!1)}},{key:"process",value:function(e,t,n){var r=this,o=e.split(/\033\[/),i=o.shift();null==t&&(t={}),t.clearLine=/\r/.test(e);var s=o.map(function(e){return r.processChunk(e,t,n)});if(t&&t.json){var l=this.processChunkJson("");return l.content=i,l.clearLine=t.clearLine,s.unshift(l),t.remove_empty&&(s=s.filter(function(e){return!e.isEmpty()})),s}return s.unshift(i),s.join("")}},{key:"processChunkJson",value:function(e,t,r){var o=(t=void 0===t?{}:t).use_classes=void 0!==t.use_classes&&t.use_classes,i=t.key=o?"class":"color",s={content:e,fg:null,bg:null,fg_truecolor:null,bg_truecolor:null,isInverted:!1,clearLine:t.clearLine,decoration:null,decorations:[],was_processed:!1,isEmpty:function(){return!s.content}},l=e.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m);if(!l)return s;s.content=l[4];var a=l[2].split(";");if(""!==l[1]||"m"!==l[3]||!r)return s;for(;a.length>0;){var u=parseInt(a.shift());if(isNaN(u)||0===u)this.fg=this.bg=null,this.decorations=[];else if(1===u)this.decorations.push("bold");else if(2===u)this.decorations.push("dim");else if(3===u)this.decorations.push("italic");else if(4===u)this.decorations.push("underline");else if(5===u)this.decorations.push("blink");else if(7===u)this.decorations.push("reverse");else if(8===u)this.decorations.push("hidden");else if(9===u)this.decorations.push("strikethrough");else if(21===u)this.removeDecoration("bold");else if(22===u)this.removeDecoration("bold"),this.removeDecoration("dim");else if(23===u)this.removeDecoration("italic");else if(24===u)this.removeDecoration("underline");else if(25===u)this.removeDecoration("blink");else if(27===u)this.removeDecoration("reverse");else if(28===u)this.removeDecoration("hidden");else if(29===u)this.removeDecoration("strikethrough");else if(39===u)this.fg=null;else if(49===u)this.bg=null;else if(u>=30&&u<38)this.fg=n[0][u%10][i];else if(u>=90&&u<98)this.fg=n[1][u%10][i];else if(u>=40&&u<48)this.bg=n[0][u%10][i];else if(u>=100&&u<108)this.bg=n[1][u%10][i];else if(38===u||48===u){var c=38===u;if(a.length>=1){var f=a.shift();if("5"===f&&a.length>=1){var d=parseInt(a.shift());if(d>=0&&d<=255){if(o){var h=d>=16?"ansi-palette-"+d:n[d>7?1:0][d%8].class;c?this.fg=h:this.bg=h}else this.PALETTE_COLORS||this.setupPalette(),c?this.fg=this.PALETTE_COLORS[d]:this.bg=this.PALETTE_COLORS[d]}}else if("2"===f&&a.length>=3){var g=parseInt(a.shift()),p=parseInt(a.shift()),v=parseInt(a.shift());if(g>=0&&g<=255&&p>=0&&p<=255&&v>=0&&v<=255){var b=g+", "+p+", "+v;o?c?(this.fg="ansi-truecolor",this.fg_truecolor=b):(this.bg="ansi-truecolor",this.bg_truecolor=b):c?this.fg=b:this.bg=b}}}}}return null===this.fg&&null===this.bg&&0===this.decorations.length||(s.fg=this.fg,s.bg=this.bg,s.fg_truecolor=this.fg_truecolor,s.bg_truecolor=this.bg_truecolor,s.decorations=this.decorations,s.decoration=this.decorations.slice(-1).pop()||null,s.was_processed=!0),s}},{key:"processChunk",value:function(e,t,r){var o=this;t=t||{};var i=this.processChunkJson(e,t,r),s=t.use_classes;if(i.decorations=i.decorations.filter(function(e){if("reverse"===e){i.fg||(i.fg=n[0][7][s?"class":"color"]),i.bg||(i.bg=n[0][0][s?"class":"color"]);var t=i.fg;i.fg=i.bg,i.bg=t;var r=i.fg_truecolor;return i.fg_truecolor=i.bg_truecolor,i.bg_truecolor=r,i.isInverted=!0,!1}return!0}),t.json)return i;if(i.isEmpty())return"";if(!i.was_processed)return i.content;var l=[],a=[],u=[],c={},f=function(e){var t=[],n=void 0;for(n in e)e.hasOwnProperty(n)&&t.push("data-"+n+'="'+o.escapeForHtml(e[n])+'"');return t.length>0?" "+t.join(" "):""};return(i.isInverted&&(c["ansi-is-inverted"]="true"),i.fg&&(s?(l.push(i.fg+"-fg"),null!==i.fg_truecolor&&(c["ansi-truecolor-fg"]=i.fg_truecolor,i.fg_truecolor=null)):l.push("color:rgb("+i.fg+")")),i.bg&&(s?(l.push(i.bg+"-bg"),null!==i.bg_truecolor&&(c["ansi-truecolor-bg"]=i.bg_truecolor,i.bg_truecolor=null)):l.push("background-color:rgb("+i.bg+")")),i.decorations.forEach(function(e){if(s){a.push("ansi-"+e);return}"bold"===e?a.push("font-weight:bold"):"dim"===e?a.push("opacity:0.5"):"italic"===e?a.push("font-style:italic"):"hidden"===e?a.push("visibility:hidden"):"strikethrough"===e?u.push("line-through"):u.push(e)}),u.length&&a.push("text-decoration:"+u.join(" ")),s)?'<span class="'+l.concat(a).join(" ")+'"'+f(c)+">"+i.content+"</span>":'<span style="'+l.concat(a).join(";")+'"'+f(c)+">"+i.content+"</span>"}},{key:"removeDecoration",value:function(e){var t=this.decorations.indexOf(e);t>=0&&this.decorations.splice(t,1)}}]),e}();e.exports=r},7404:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.flat(1/0).filter(Boolean).join(" ")},i=(e,t)=>n=>{var i;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:s,defaultVariants:l}=t,a=Object.keys(s).map(e=>{let t=null==n?void 0:n[e],o=null==l?void 0:l[e];if(null===t)return null;let i=r(t)||r(o);return s[e][i]}),u=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),c=null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...l,...u}[t]):({...l,...u})[t]===n})?[...e,n,r]:e},[]);return o(e,a,c,null==n?void 0:n.class,null==n?void 0:n.className)}},57215:function(e){function t(e){if(!e)return"";if(!/\r/.test(e))return e;for(e=e.replace(/\r+\n/gm,"\n");/\r./.test(e);)e=e.replace(/^([^\r\n]*)\r+([^\r\n]+)/gm,function(e,t,n){return n+t.slice(n.length)});return e}function n(e){if(!/\r/.test(e))return e;for(var t=e.split("\r"),n=[];t.length>0;){var r=function(e){for(var t=0,n=0;n<e.length;n++)e[t].length<=e[n].length&&(t=n);return t}(t);n.push(t[r]),t=t.slice(r+1)}return n.join("\r")}e.exports=t,e.exports.escapeCarriageReturn=t,e.exports.escapeCarriageReturnSafe=function(e){if(!e)return"";if(!/\r/.test(e))return e;if(!/\n/.test(e))return n(e);var r=(e=e.replace(/\r+\n/gm,"\n")).lastIndexOf("\n");return t(e.slice(0,r))+"\n"+n(e.slice(r+1))}},24033:function(e,t,n){e.exports=n(20290)},86806:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(33904),o=n(57215),i=n(2265);function s(e,t,n,r){let o,s;let l=t?null:function(e){let t={};switch(e.bg&&(t.backgroundColor=`rgb(${e.bg})`),e.fg&&(t.color=`rgb(${e.fg})`),e.decoration){case"bold":t.fontWeight="bold";break;case"dim":t.opacity="0.5";break;case"italic":t.fontStyle="italic";break;case"hidden":t.visibility="hidden";break;case"strikethrough":t.textDecoration="line-through";break;case"underline":t.textDecoration="underline";break;case"blink":t.textDecoration="blink"}return t}(n),a=t?(s="",(n.bg&&(s+=`${n.bg}-bg `),n.fg&&(s+=`${n.fg}-fg `),n.decoration&&(s+=`ansi-${n.decoration} `),""===s)?null:s=s.substring(0,s.length-1)):null;if(!e)return i.createElement("span",{style:l,key:r,className:a},n.content);let u=[],c=/(\s|^)(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g,f=0;for(;null!==(o=c.exec(n.content));){let[,e,t]=o,r=o.index+e.length;r>f&&u.push(n.content.substring(f,r));let s=t.startsWith("www.")?`http://${t}`:t;u.push(i.createElement("a",{key:f,href:s,target:"_blank"},`${t}`)),f=c.lastIndex}return f<n.content.length&&u.push(n.content.substring(f)),i.createElement("span",{style:l,key:r,className:a},u)}function l(e){let{className:t,useClasses:n,children:l,linkify:a}=e;return i.createElement("code",{className:t},(function(e,t=!1){return e=(0,o.escapeCarriageReturn)(function(e){let t=e;do t=(e=t).replace(/[^\n]\x08/gm,"");while(t.length<e.length);return e}(e)),r.ansiToJson(e,{json:!0,remove_empty:!0,use_classes:t})})(null!=l?l:"",null!=n&&n).map(s.bind(null,null!=a&&a,null!=n&&n)))}},27733:function(e,t,n){"use strict";n.d(t,{B:function(){return l}});var r=n(2265),o=n(56989),i=n(42210),s=n(67256);function l(e){let t=e+"CollectionProvider",[n,l]=(0,o.b)(t),[a,u]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=e+"CollectionSlot",f=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,l=u(c,n),a=(0,i.e)(t,l.collectionRef);return r.createElement(s.g7,{ref:a},o)}),d=e+"CollectionItemSlot",h="data-radix-collection-item",g=r.forwardRef((e,t)=>{let{scope:n,children:o,...l}=e,a=r.useRef(null),c=(0,i.e)(t,a),f=u(d,n);return r.useEffect(()=>(f.itemMap.set(a,{ref:a,...l}),()=>void f.itemMap.delete(a))),r.createElement(s.g7,{[h]:"",ref:c},o)});return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),i=r.useRef(new Map).current;return r.createElement(a,{scope:t,itemMap:i,collectionRef:o},n)},Slot:f,ItemSlot:g},function(t){let n=u(e+"CollectionConsumer",t),o=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${h}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return o},l]}},65400:function(e,t,n){"use strict";n.d(t,{gm:function(){return i}});var r=n(2265);let o=(0,r.createContext)(void 0);function i(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},20966:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r,o=n(2265),i=n(51030);let s=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),l=0;function a(e){let[t,n]=o.useState(s());return(0,i.b)(()=>{e||n(e=>null!=e?e:String(l++))},[e]),e||(t?`radix-${t}`:"")}},44356:function(e,t,n){"use strict";n.d(t,{Pc:function(){return k},ck:function(){return M},fC:function(){return D}});var r=n(13428),o=n(2265),i=n(85744),s=n(27733),l=n(42210),a=n(56989),u=n(20966),c=n(9381),f=n(16459),d=n(73763),h=n(65400);let g="rovingFocusGroup.onEntryFocus",p={bubbles:!1,cancelable:!0},v="RovingFocusGroup",[b,m,w]=(0,s.B)(v),[y,k]=(0,a.b)(v,[w]),[E,_]=y(v),T=(0,o.forwardRef)((e,t)=>(0,o.createElement)(b.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(b.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(C,(0,r.Z)({},e,{ref:t}))))),C=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:s,loop:a=!1,dir:u,currentTabStopId:v,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:w,onEntryFocus:y,...k}=e,_=(0,o.useRef)(null),T=(0,l.e)(t,_),C=(0,h.gm)(u),[R=null,x]=(0,d.T)({prop:v,defaultProp:b,onChange:w}),[D,M]=(0,o.useState)(!1),S=(0,f.W)(y),A=m(n),F=(0,o.useRef)(!1),[L,O]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=_.current;if(e)return e.addEventListener(g,S),()=>e.removeEventListener(g,S)},[S]),(0,o.createElement)(E,{scope:n,orientation:s,dir:C,loop:a,currentTabStopId:R,onItemFocus:(0,o.useCallback)(e=>x(e),[x]),onItemShiftTab:(0,o.useCallback)(()=>M(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>O(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>O(e=>e-1),[])},(0,o.createElement)(c.WV.div,(0,r.Z)({tabIndex:D||0===L?-1:0,"data-orientation":s},k,{ref:T,style:{outline:"none",...e.style},onMouseDown:(0,i.M)(e.onMouseDown,()=>{F.current=!0}),onFocus:(0,i.M)(e.onFocus,e=>{let t=!F.current;if(e.target===e.currentTarget&&t&&!D){let t=new CustomEvent(g,p);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=A().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===R),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);I(o)}}F.current=!1}),onBlur:(0,i.M)(e.onBlur,()=>M(!1))})))}),R=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:s=!0,active:l=!1,tabStopId:a,...f}=e,d=(0,u.M)(),h=a||d,g=_("RovingFocusGroupItem",n),p=g.currentTabStopId===h,v=m(n),{onFocusableItemAdd:w,onFocusableItemRemove:y}=g;return(0,o.useEffect)(()=>{if(s)return w(),()=>y()},[s,w,y]),(0,o.createElement)(b.ItemSlot,{scope:n,id:h,focusable:s,active:l},(0,o.createElement)(c.WV.span,(0,r.Z)({tabIndex:p?0:-1,"data-orientation":g.orientation},f,{ref:t,onMouseDown:(0,i.M)(e.onMouseDown,e=>{s?g.onItemFocus(h):e.preventDefault()}),onFocus:(0,i.M)(e.onFocus,()=>g.onItemFocus(h)),onKeyDown:(0,i.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){g.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return x[o]}(e,g.orientation,g.dir);if(void 0!==t){e.preventDefault();let o=v().filter(e=>e.focusable),i=o.map(e=>e.ref.current);if("last"===t)i.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&i.reverse();let o=i.indexOf(e.currentTarget);i=g.loop?(n=i,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):i.slice(o+1)}setTimeout(()=>I(i))}})})))}),x={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function I(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let D=T,M=R},34522:function(e,t,n){"use strict";n.d(t,{VY:function(){return I},aV:function(){return R},fC:function(){return C},xz:function(){return x}});var r=n(13428),o=n(2265),i=n(85744),s=n(56989),l=n(44356),a=n(85606),u=n(9381),c=n(65400),f=n(73763),d=n(20966);let h="Tabs",[g,p]=(0,s.b)(h,[l.Pc]),v=(0,l.Pc)(),[b,m]=g(h),w=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:i,onValueChange:s,defaultValue:l,orientation:a="horizontal",dir:h,activationMode:g="automatic",...p}=e,v=(0,c.gm)(h),[m,w]=(0,f.T)({prop:i,onChange:s,defaultProp:l});return(0,o.createElement)(b,{scope:n,baseId:(0,d.M)(),value:m,onValueChange:w,orientation:a,dir:v,activationMode:g},(0,o.createElement)(u.WV.div,(0,r.Z)({dir:v,"data-orientation":a},p,{ref:t})))}),y=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:i=!0,...s}=e,a=m("TabsList",n),c=v(n);return(0,o.createElement)(l.fC,(0,r.Z)({asChild:!0},c,{orientation:a.orientation,dir:a.dir,loop:i}),(0,o.createElement)(u.WV.div,(0,r.Z)({role:"tablist","aria-orientation":a.orientation},s,{ref:t})))}),k=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:s,disabled:a=!1,...c}=e,f=m("TabsTrigger",n),d=v(n),h=_(f.baseId,s),g=T(f.baseId,s),p=s===f.value;return(0,o.createElement)(l.ck,(0,r.Z)({asChild:!0},d,{focusable:!a,active:p}),(0,o.createElement)(u.WV.button,(0,r.Z)({type:"button",role:"tab","aria-selected":p,"aria-controls":g,"data-state":p?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:h},c,{ref:t,onMouseDown:(0,i.M)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():f.onValueChange(s)}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&f.onValueChange(s)}),onFocus:(0,i.M)(e.onFocus,()=>{let e="manual"!==f.activationMode;p||a||!e||f.onValueChange(s)})})))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:i,forceMount:s,children:l,...c}=e,f=m("TabsContent",n),d=_(f.baseId,i),h=T(f.baseId,i),g=i===f.value,p=(0,o.useRef)(g);return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,o.createElement)(a.z,{present:s||g},({present:n})=>(0,o.createElement)(u.WV.div,(0,r.Z)({"data-state":g?"active":"inactive","data-orientation":f.orientation,role:"tabpanel","aria-labelledby":d,hidden:!n,id:h,tabIndex:0},c,{ref:t,style:{...e.style,animationDuration:p.current?"0s":void 0}}),n&&l))});function _(e,t){return`${e}-trigger-${t}`}function T(e,t){return`${e}-content-${t}`}let C=w,R=y,x=k,I=E},24144:function(e,t){"use strict";t.Z=function(e){return null==e}}}]);