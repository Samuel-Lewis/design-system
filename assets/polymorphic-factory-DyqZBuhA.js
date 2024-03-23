import{r as N,u as M,l as vt,m as xt,n as Rt,k as T,b as wt,p as I}from"./MantineThemeProvider-9pAoEhm2.js";import{R as $,r as v}from"./index-Dl6G-zuu.js";function Et(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function _(t){return Object.keys(t).reduce((e,r)=>(t[r]!==void 0&&(e[r]=t[r]),e),{})}function O(t){return typeof t=="number"?!0:typeof t=="string"?t.startsWith("calc(")||t.startsWith("var(")||t.includes(" ")&&t.trim()!==""?!0:/[0-9]/.test(t.trim().replace("-","")[0]):!1}function C(t,e="size",r=!0){if(t!==void 0)return O(t)?r?N(t):t:`var(--${e}-${t})`}function me(t){return C(t,"mantine-spacing")}function de(t){return t===void 0?"var(--mantine-radius-default)":C(t,"mantine-radius")}function ge(t){return C(t,"mantine-font-size")}function be(t){return C(t,"mantine-line-height",!1)}function he(t){if(t)return C(t,"mantine-shadow",!1)}function Se(t){return t}function L(t){var e,r,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(r=L(t[e]))&&(n&&(n+=" "),n+=r)}else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function x(){for(var t,e,r=0,n="",i=arguments.length;r<i;r++)(t=arguments[r])&&(e=L(t))&&(n&&(n+=" "),n+=e);return n}const zt={};function Mt(t){const e={};return t.forEach(r=>{Object.entries(r).forEach(([n,i])=>{e[n]?e[n]=x(e[n],i):e[n]=i})}),e}function j({theme:t,classNames:e,props:r,stylesCtx:n}){const a=(Array.isArray(e)?e:[e]).map(s=>typeof s=="function"?s(t,r,n):s||zt);return Mt(a)}function w({theme:t,styles:e,props:r,stylesCtx:n}){return(Array.isArray(e)?e:[e]).reduce((a,s)=>typeof s=="function"?{...a,...s(t,r,n)}:{...a,...s},{})}const Tt={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};function _t({theme:t,options:e,unstyled:r}){return x((e==null?void 0:e.focusable)&&!r&&(t.focusClassName||Tt[t.focusRing]),(e==null?void 0:e.active)&&!r&&t.activeClassName)}function jt({selector:t,stylesCtx:e,options:r,props:n,theme:i}){return j({theme:i,classNames:r==null?void 0:r.classNames,props:(r==null?void 0:r.props)||n,stylesCtx:e})[t]}function Bt({selector:t,stylesCtx:e,theme:r,classNames:n,props:i}){return j({theme:r,classNames:n,props:i,stylesCtx:e})[t]}function kt({rootSelector:t,selector:e,className:r}){return t===e?r:void 0}function Ht({selector:t,classes:e,unstyled:r}){return r?void 0:e[t]}function It({themeName:t,classNamesPrefix:e,selector:r,withStaticClass:n}){return n===!1?[]:t.map(i=>`${e}-${i}-${r}`)}function Ot({themeName:t,theme:e,selector:r,props:n,stylesCtx:i}){return t.map(a=>{var s,o;return(o=j({theme:e,classNames:(s=e.components[a])==null?void 0:s.classNames,props:n,stylesCtx:i}))==null?void 0:o[r]})}function Lt({options:t,classes:e,selector:r,unstyled:n}){return t!=null&&t.variant&&!n?e[`${r}--${t.variant}`]:void 0}function Pt({theme:t,options:e,themeName:r,selector:n,classNamesPrefix:i,classNames:a,classes:s,unstyled:o,className:u,rootSelector:c,props:f,stylesCtx:p,withStaticClasses:y,headless:l}){return x(_t({theme:t,options:e,unstyled:o||l}),Ot({theme:t,themeName:r,selector:n,props:f,stylesCtx:p}),Lt({options:e,classes:s,selector:n,unstyled:o}),Bt({selector:n,stylesCtx:p,theme:t,classNames:a,props:f}),jt({selector:n,stylesCtx:p,options:e,props:f,theme:t}),kt({rootSelector:c,selector:n,className:u}),Ht({selector:n,classes:s,unstyled:o||l}),y&&!l&&It({themeName:r,classNamesPrefix:i,selector:n,withStaticClass:e==null?void 0:e.withStaticClass}),e==null?void 0:e.className)}function Wt({theme:t,themeName:e,props:r,stylesCtx:n,selector:i}){return e.map(a=>{var s;return w({theme:t,styles:(s=t.components[a])==null?void 0:s.styles,props:r,stylesCtx:n})[i]}).reduce((a,s)=>({...a,...s}),{})}function E({style:t,theme:e}){return Array.isArray(t)?[...t].reduce((r,n)=>({...r,...E({style:n,theme:e})}),{}):typeof t=="function"?t(e):t??{}}function Ft(t){return t.reduce((e,r)=>(r&&Object.keys(r).forEach(n=>{e[n]={...e[n],..._(r[n])}}),e),{})}function Vt({vars:t,varsResolver:e,theme:r,props:n,stylesCtx:i,selector:a,themeName:s,headless:o}){var u;return(u=Ft([o?{}:e==null?void 0:e(r,n,i),...s.map(c=>{var f,p,y;return(y=(p=(f=r.components)==null?void 0:f[c])==null?void 0:p.vars)==null?void 0:y.call(p,r,n,i)}),t==null?void 0:t(r,n,i)]))==null?void 0:u[a]}function Dt({theme:t,themeName:e,selector:r,options:n,props:i,stylesCtx:a,rootSelector:s,styles:o,style:u,vars:c,varsResolver:f,headless:p}){return{...Wt({theme:t,themeName:e,props:i,stylesCtx:a,selector:r}),...w({theme:t,styles:o,props:i,stylesCtx:a})[r],...w({theme:t,styles:n==null?void 0:n.styles,props:(n==null?void 0:n.props)||i,stylesCtx:a})[r],...Vt({theme:t,props:i,stylesCtx:a,vars:c,varsResolver:f,selector:r,themeName:e,headless:p}),...s===r?E({style:u,theme:t}):null,...E({style:n==null?void 0:n.style,theme:t})}}function Ne({name:t,classes:e,props:r,stylesCtx:n,className:i,style:a,rootSelector:s="root",unstyled:o,classNames:u,styles:c,vars:f,varsResolver:p}){const y=M(),l=vt(),b=xt(),h=Rt(),S=(Array.isArray(t)?t:[t]).filter(m=>m);return(m,d)=>({className:Pt({theme:y,options:d,themeName:S,selector:m,classNamesPrefix:l,classNames:u,classes:e,unstyled:o,className:i,rootSelector:s,props:r,stylesCtx:n,withStaticClasses:b,headless:h}),style:Dt({theme:y,themeName:S,selector:m,options:d,props:r,stylesCtx:n,rootSelector:s,styles:c,style:a,vars:f,varsResolver:p,headless:h})})}function $e(t,e,r){var s;const n=M(),i=(s=n.components[t])==null?void 0:s.defaultProps,a=typeof i=="function"?i(n):i;return{...e,...a,..._(r)}}function B(t){return T(t).reduce((e,r)=>t[r]!==void 0?`${e}${Et(r)}:${t[r]};`:e,"").trim()}function Kt({selector:t,styles:e,media:r}){const n=e?B(e):"",i=Array.isArray(r)?r.map(a=>`@media${a.query}{${t}{${B(a.styles)}}}`):[];return`${n?`${t}{${n}}`:""}${i.join("")}`.trim()}function Qt({selector:t,styles:e,media:r}){const n=wt();return $.createElement("style",{"data-mantine-styles":"inline",nonce:n==null?void 0:n(),dangerouslySetInnerHTML:{__html:Kt({selector:t,styles:e,media:r})}})}function Yt(t){const{m:e,mx:r,my:n,mt:i,mb:a,ml:s,mr:o,me:u,ms:c,p:f,px:p,py:y,pt:l,pb:b,pl:h,pr:S,pe:m,ps:d,bg:g,c:A,opacity:K,ff:Q,fz:Y,fw:G,lts:U,ta:Z,lh:q,fs:J,tt:X,td:tt,w:et,miw:rt,maw:nt,h:it,mih:at,mah:st,bgsz:ot,bgp:pt,bgr:ft,bga:ct,pos:ut,top:yt,left:lt,bottom:mt,right:dt,inset:gt,display:bt,flex:ht,hiddenFrom:St,visibleFrom:Nt,lightHidden:$t,darkHidden:Ct,...At}=t;return{styleProps:_({m:e,mx:r,my:n,mt:i,mb:a,ml:s,mr:o,me:u,ms:c,p:f,px:p,py:y,pt:l,pb:b,pl:h,pr:S,pe:m,ps:d,bg:g,c:A,opacity:K,ff:Q,fz:Y,fw:G,lts:U,ta:Z,lh:q,fs:J,tt:X,td:tt,w:et,miw:rt,maw:nt,h:it,mih:at,mah:st,bgsz:ot,bgp:pt,bgr:ft,bga:ct,pos:ut,top:yt,left:lt,bottom:mt,right:dt,inset:gt,display:bt,flex:ht,hiddenFrom:St,visibleFrom:Nt,lightHidden:$t,darkHidden:Ct}),rest:At}}const Gt={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}};function P(t,e){const r=I({color:t,theme:e});return r.color==="dimmed"?"var(--mantine-color-dimmed)":r.color==="bright"?"var(--mantine-color-bright)":r.variable?`var(${r.variable})`:r.color}function Ut(t,e){const r=I({color:t,theme:e});return r.isThemeColor&&r.shade===void 0?`var(--mantine-color-${r.color}-text)`:P(t,e)}const k={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)"};function Zt(t){return typeof t=="string"&&t in k?k[t]:t}function qt(t,e){return typeof t=="string"&&t in e.fontSizes?`var(--mantine-font-size-${t})`:typeof t=="number"?N(t):typeof t=="string"?N(t):t}function Jt(t){return t}function Xt(t,e){return typeof t=="string"&&t in e.lineHeights?`var(--mantine-line-height-${t})`:t}function te(t){return typeof t=="number"?N(t):t}function ee(t,e){if(typeof t=="number")return N(t);if(typeof t=="string"){const r=t.replace("-","");if(!(r in e.spacing))return N(t);const n=`--mantine-spacing-${r}`;return t.startsWith("-")?`calc(var(${n}) * -1)`:`var(${n})`}return t}const R={color:P,textColor:Ut,fontSize:qt,spacing:ee,identity:Jt,size:te,lineHeight:Xt,fontFamily:Zt};function H(t){return t.replace("(min-width: ","").replace("em)","")}function re({media:t,...e}){const n=Object.keys(t).sort((i,a)=>Number(H(i))-Number(H(a))).map(i=>({query:i,styles:t[i]}));return{...e,media:n}}function ne(t){if(typeof t!="object"||t===null)return!1;const e=Object.keys(t);return!(e.length===1&&e[0]==="base")}function ie(t){return typeof t=="object"&&t!==null?"base"in t?t.base:void 0:t}function ae(t){return typeof t=="object"&&t!==null?T(t).filter(e=>e!=="base"):[]}function se(t,e){return typeof t=="object"&&t!==null&&e in t?t[e]:t}function oe({styleProps:t,data:e,theme:r}){return re(T(t).reduce((n,i)=>{if(i==="hiddenFrom"||i==="visibleFrom")return n;const a=e[i],s=Array.isArray(a.property)?a.property:[a.property],o=ie(t[i]);if(!ne(t[i]))return s.forEach(c=>{n.inlineStyles[c]=R[a.type](o,r)}),n;n.hasResponsiveStyles=!0;const u=ae(t[i]);return s.forEach(c=>{o&&(n.styles[c]=R[a.type](o,r)),u.forEach(f=>{const p=`(min-width: ${r.breakpoints[f]})`;n.media[p]={...n.media[p],[c]:R[a.type](se(t[i],f),r)}})}),n},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}function pe(){return`__m__-${v.useId().replace(/:/g,"")}`}function W(t){return t.startsWith("data-")?t:`data-${t}`}function fe(t){return Object.keys(t).reduce((e,r)=>{const n=t[r];return n===void 0||n===""||n===!1||n===null||(e[W(r)]=t[r]),e},{})}function F(t){return t?typeof t=="string"?{[W(t)]:!0}:Array.isArray(t)?[...t].reduce((e,r)=>({...e,...F(r)}),{}):fe(t):null}function z(t,e){return Array.isArray(t)?[...t].reduce((r,n)=>({...r,...z(n,e)}),{}):typeof t=="function"?t(e):t??{}}function ce({theme:t,style:e,vars:r,styleProps:n}){const i=z(e,t),a=z(r,t);return{...i,...a,...n}}const V=v.forwardRef(({component:t,style:e,__vars:r,className:n,variant:i,mod:a,size:s,hiddenFrom:o,visibleFrom:u,lightHidden:c,darkHidden:f,renderRoot:p,...y},l)=>{const b=M(),h=t||"div",{styleProps:S,rest:m}=Yt(y),d=pe(),g=oe({styleProps:S,theme:b,data:Gt}),A={ref:l,style:ce({theme:b,style:e,vars:r,styleProps:g.inlineStyles}),className:x(n,{[d]:g.hasResponsiveStyles,"mantine-light-hidden":c,"mantine-dark-hidden":f,[`mantine-hidden-from-${o}`]:o,[`mantine-visible-from-${u}`]:u}),"data-variant":i,"data-size":O(s)?void 0:s||void 0,...F(a),...m};return $.createElement($.Fragment,null,g.hasResponsiveStyles&&$.createElement(Qt,{selector:`.${d}`,styles:g.styles,media:g.media}),typeof p=="function"?p(A):$.createElement(h,{...A}))});V.displayName="@mantine/core/Box";const Ce=V;function D(t){return t}function Ae(t){const e=v.forwardRef(t);return e.extend=D,e}function ve(t){const e=v.forwardRef(t);return e.extend=D,e}export{Ce as B,Qt as I,Ne as a,be as b,Se as c,me as d,de as e,Ae as f,ge as g,Yt as h,C as i,he as j,x as k,ve as p,$e as u};
