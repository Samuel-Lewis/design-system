import{r as g,b as w,m as jt,n as wt,o as zt,q as vt,k as H,u as Mt,j as N,p as V,s as Et}from"./MantineThemeProvider-BbGVjNjF.js";import{r as z}from"./index-CDs2tPxN.js";function _t(t){return t.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}function I(t){return Object.keys(t).reduce((r,e)=>(t[e]!==void 0&&(r[e]=t[e]),r),{})}function D(t){return typeof t=="number"?!0:typeof t=="string"?t.startsWith("calc(")||t.startsWith("var(")||t.includes(" ")&&t.trim()!==""?!0:/[0-9]/.test(t.trim().replace("-","")[0]):!1}function C(t,r="size",e=!0){if(t!==void 0)return D(t)?e?g(t):t:`var(--${r}-${t})`}function Nr(t){return C(t,"mantine-spacing")}function Cr(t){return t===void 0?"var(--mantine-radius-default)":C(t,"mantine-radius")}function Rr(t){return C(t,"mantine-font-size")}function Tr(t){return C(t,"mantine-line-height",!1)}function jr(t){if(t)return C(t,"mantine-shadow",!1)}function wr(t){return t}function K(t){var r,e,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(r=0;r<i;r++)t[r]&&(e=K(t[r]))&&(n&&(n+=" "),n+=e)}else for(e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function v(){for(var t,r,e=0,n="",i=arguments.length;e<i;e++)(t=arguments[e])&&(r=K(t))&&(n&&(n+=" "),n+=r);return n}const Bt={};function kt(t){const r={};return t.forEach(e=>{Object.entries(e).forEach(([n,i])=>{r[n]?r[n]=v(r[n],i):r[n]=i})}),r}function O({theme:t,classNames:r,props:e,stylesCtx:n}){const a=(Array.isArray(r)?r:[r]).map(s=>typeof s=="function"?s(t,e,n):s||Bt);return kt(a)}function _({theme:t,styles:r,props:e,stylesCtx:n}){return(Array.isArray(r)?r:[r]).reduce((a,s)=>typeof s=="function"?{...a,...s(t,e,n)}:{...a,...s},{})}function Ht(t){return Array.isArray(t)?t:Array(10).fill(t)}const It={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};function Ot({theme:t,options:r,unstyled:e}){return v((r==null?void 0:r.focusable)&&!e&&(t.focusClassName||It[t.focusRing]),(r==null?void 0:r.active)&&!e&&t.activeClassName)}function Lt({selector:t,stylesCtx:r,options:e,props:n,theme:i}){return O({theme:i,classNames:e==null?void 0:e.classNames,props:(e==null?void 0:e.props)||n,stylesCtx:r})[t]}function W({selector:t,stylesCtx:r,theme:e,classNames:n,props:i}){return O({theme:e,classNames:n,props:i,stylesCtx:r})[t]}function Wt({rootSelector:t,selector:r,className:e}){return t===r?e:void 0}function Ft({selector:t,classes:r,unstyled:e}){return e?void 0:r[t]}function Pt({themeName:t,classNamesPrefix:r,selector:e,withStaticClass:n}){return n===!1?[]:t.map(i=>`${r}-${i}-${e}`)}function Vt({themeName:t,theme:r,selector:e,props:n,stylesCtx:i}){return t.map(a=>{var s,o;return(o=O({theme:r,classNames:(s=r.components[a])==null?void 0:s.classNames,props:n,stylesCtx:i}))==null?void 0:o[e]})}function Dt({options:t,classes:r,selector:e,unstyled:n}){return t!=null&&t.variant&&!n?r[`${e}--${t.variant}`]:void 0}function Kt({theme:t,options:r,themeName:e,selector:n,classNamesPrefix:i,classNames:a,classes:s,unstyled:o,className:y,rootSelector:f,props:p,stylesCtx:c,withStaticClasses:u,headless:d,transformedStyles:h}){return v(Ot({theme:t,options:r,unstyled:o||d}),Vt({theme:t,themeName:e,selector:n,props:p,stylesCtx:c}),Dt({options:r,classes:s,selector:n,unstyled:o}),W({selector:n,stylesCtx:c,theme:t,classNames:a,props:p}),W({selector:n,stylesCtx:c,theme:t,classNames:h,props:p}),Lt({selector:n,stylesCtx:c,options:r,props:p,theme:t}),Wt({rootSelector:f,selector:n,className:y}),Ft({selector:n,classes:s,unstyled:o||d}),u&&!d&&Pt({themeName:e,classNamesPrefix:i,selector:n,withStaticClass:r==null?void 0:r.withStaticClass}),r==null?void 0:r.className)}function Qt({theme:t,themeName:r,props:e,stylesCtx:n,selector:i}){return r.map(a=>{var s;return _({theme:t,styles:(s=t.components[a])==null?void 0:s.styles,props:e,stylesCtx:n})[i]}).reduce((a,s)=>({...a,...s}),{})}function B({style:t,theme:r}){return Array.isArray(t)?[...t].reduce((e,n)=>({...e,...B({style:n,theme:r})}),{}):typeof t=="function"?t(r):t??{}}function qt(t){return t.reduce((r,e)=>(e&&Object.keys(e).forEach(n=>{r[n]={...r[n],...I(e[n])}}),r),{})}function Yt({vars:t,varsResolver:r,theme:e,props:n,stylesCtx:i,selector:a,themeName:s,headless:o}){var y;return(y=qt([o?{}:r==null?void 0:r(e,n,i),...s.map(f=>{var p,c,u;return(u=(c=(p=e.components)==null?void 0:p[f])==null?void 0:c.vars)==null?void 0:u.call(c,e,n,i)}),t==null?void 0:t(e,n,i)]))==null?void 0:y[a]}function Gt({theme:t,themeName:r,selector:e,options:n,props:i,stylesCtx:a,rootSelector:s,styles:o,style:y,vars:f,varsResolver:p,headless:c,withStylesTransform:u}){return{...!u&&Qt({theme:t,themeName:r,props:i,stylesCtx:a,selector:e}),...!u&&_({theme:t,styles:o,props:i,stylesCtx:a})[e],...!u&&_({theme:t,styles:n==null?void 0:n.styles,props:(n==null?void 0:n.props)||i,stylesCtx:a})[e],...Yt({theme:t,props:i,stylesCtx:a,vars:f,varsResolver:p,selector:e,themeName:r,headless:c}),...s===e?B({style:y,theme:t}):null,...B({style:n==null?void 0:n.style,theme:t})}}function Ut({props:t,stylesCtx:r,themeName:e}){var s;const n=w(),i=(s=jt())==null?void 0:s();return{getTransformedStyles:o=>i?[...o.map(f=>i(f,{props:t,theme:n,ctx:r})),...e.map(f=>{var p;return i((p=n.components[f])==null?void 0:p.styles,{props:t,theme:n,ctx:r})})].filter(Boolean):[],withStylesTransform:!!i}}function zr({name:t,classes:r,props:e,stylesCtx:n,className:i,style:a,rootSelector:s="root",unstyled:o,classNames:y,styles:f,vars:p,varsResolver:c}){const u=w(),d=wt(),h=zt(),b=vt(),S=(Array.isArray(t)?t:[t]).filter(m=>m),{withStylesTransform:x,getTransformedStyles:A}=Ut({props:e,stylesCtx:n,themeName:S});return(m,l)=>({className:Kt({theme:u,options:l,themeName:S,selector:m,classNamesPrefix:d,classNames:y,classes:r,unstyled:o,className:i,rootSelector:s,props:e,stylesCtx:n,withStaticClasses:h,headless:b,transformedStyles:A([l==null?void 0:l.styles,f])}),style:Gt({theme:u,themeName:S,selector:m,options:l,props:e,stylesCtx:n,rootSelector:s,styles:f,style:a,vars:p,varsResolver:c,headless:b,withStylesTransform:x})})}function vr(t,r,e){var s;const n=w(),i=(s=n.components[t])==null?void 0:s.defaultProps,a=typeof i=="function"?i(n):i;return{...r,...a,...I(e)}}function M(t){return H(t).reduce((r,e)=>t[e]!==void 0?`${r}${_t(e)}:${t[e]};`:r,"").trim()}function Zt({selector:t,styles:r,media:e,container:n}){const i=r?M(r):"",a=Array.isArray(e)?e.map(o=>`@media${o.query}{${t}{${M(o.styles)}}}`):[],s=Array.isArray(n)?n.map(o=>`@container ${o.query}{${t}{${M(o.styles)}}}`):[];return`${i?`${t}{${i}}`:""}${a.join("")}${s.join("")}`.trim()}function Jt(t){const r=Mt();return N.jsx("style",{"data-mantine-styles":"inline",nonce:r==null?void 0:r(),dangerouslySetInnerHTML:{__html:Zt(t)}})}function Xt(t){const{m:r,mx:e,my:n,mt:i,mb:a,ml:s,mr:o,me:y,ms:f,p,px:c,py:u,pt:d,pb:h,pl:b,pr:S,pe:x,ps:A,bd:m,bg:l,c:R,opacity:$,ff:T,fz:j,fw:U,lts:Z,ta:J,lh:X,fs:tt,tt:rt,td:et,w:nt,miw:it,maw:at,h:st,mih:ot,mah:ft,bgsz:pt,bgp:ct,bgr:yt,bga:ut,pos:mt,top:dt,left:lt,bottom:gt,right:ht,inset:bt,display:St,flex:$t,hiddenFrom:xt,visibleFrom:At,lightHidden:Nt,darkHidden:Ct,sx:Rt,...Tt}=t;return{styleProps:I({m:r,mx:e,my:n,mt:i,mb:a,ml:s,mr:o,me:y,ms:f,p,px:c,py:u,pt:d,pb:h,pl:b,pr:S,pe:x,ps:A,bd:m,bg:l,c:R,opacity:$,ff:T,fz:j,fw:U,lts:Z,ta:J,lh:X,fs:tt,tt:rt,td:et,w:nt,miw:it,maw:at,h:st,mih:ot,mah:ft,bgsz:pt,bgp:ct,bgr:yt,bga:ut,pos:mt,top:dt,left:lt,bottom:gt,right:ht,inset:bt,display:St,flex:$t,hiddenFrom:xt,visibleFrom:At,lightHidden:Nt,darkHidden:Ct,sx:Rt}),rest:Tt}}const tr={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bd:{type:"border",property:"border"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}};function L(t,r){const e=V({color:t,theme:r});return e.color==="dimmed"?"var(--mantine-color-dimmed)":e.color==="bright"?"var(--mantine-color-bright)":e.variable?`var(${e.variable})`:e.color}function rr(t,r){const e=V({color:t,theme:r});return e.isThemeColor&&e.shade===void 0?`var(--mantine-color-${e.color}-text)`:L(t,r)}function er(t,r){if(typeof t=="number")return g(t);if(typeof t=="string"){const[e,n,...i]=t.split(" ").filter(s=>s.trim()!=="");let a=`${g(e)}`;return n&&(a+=` ${n}`),Ht.length>0&&(a+=` ${L(i.join(" "),r)}`),a.trim()}return t}const F={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",monospace:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)",headings:"var(--mantine-font-family-headings)"};function nr(t){return typeof t=="string"&&t in F?F[t]:t}const ir=["h1","h2","h3","h4","h5","h6"];function ar(t,r){return typeof t=="string"&&t in r.fontSizes?`var(--mantine-font-size-${t})`:typeof t=="string"&&ir.includes(t)?`var(--mantine-${t}-font-size)`:typeof t=="number"?g(t):typeof t=="string"?g(t):t}function sr(t){return t}const or=["h1","h2","h3","h4","h5","h6"];function fr(t,r){return typeof t=="string"&&t in r.lineHeights?`var(--mantine-line-height-${t})`:typeof t=="string"&&or.includes(t)?`var(--mantine-${t}-line-height)`:t}function pr(t){return typeof t=="number"?g(t):t}function cr(t,r){if(typeof t=="number")return g(t);if(typeof t=="string"){const e=t.replace("-","");if(!(e in r.spacing))return g(t);const n=`--mantine-spacing-${e}`;return t.startsWith("-")?`calc(var(${n}) * -1)`:`var(${n})`}return t}const E={color:L,textColor:rr,fontSize:ar,spacing:cr,identity:sr,size:pr,lineHeight:fr,fontFamily:nr,border:er};function P(t){return t.replace("(min-width: ","").replace("em)","")}function yr({media:t,...r}){const n=Object.keys(t).sort((i,a)=>Number(P(i))-Number(P(a))).map(i=>({query:i,styles:t[i]}));return{...r,media:n}}function ur(t){if(typeof t!="object"||t===null)return!1;const r=Object.keys(t);return!(r.length===1&&r[0]==="base")}function mr(t){return typeof t=="object"&&t!==null?"base"in t?t.base:void 0:t}function dr(t){return typeof t=="object"&&t!==null?H(t).filter(r=>r!=="base"):[]}function lr(t,r){return typeof t=="object"&&t!==null&&r in t?t[r]:t}function gr({styleProps:t,data:r,theme:e}){return yr(H(t).reduce((n,i)=>{if(i==="hiddenFrom"||i==="visibleFrom"||i==="sx")return n;const a=r[i],s=Array.isArray(a.property)?a.property:[a.property],o=mr(t[i]);if(!ur(t[i]))return s.forEach(f=>{n.inlineStyles[f]=E[a.type](o,e)}),n;n.hasResponsiveStyles=!0;const y=dr(t[i]);return s.forEach(f=>{o&&(n.styles[f]=E[a.type](o,e)),y.forEach(p=>{const c=`(min-width: ${e.breakpoints[p]})`;n.media[c]={...n.media[c],[f]:E[a.type](lr(t[i],p),e)}})}),n},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}function hr(){return`__m__-${z.useId().replace(/:/g,"")}`}function Q(t){return t.startsWith("data-")?t:`data-${t}`}function br(t){return Object.keys(t).reduce((r,e)=>{const n=t[e];return n===void 0||n===""||n===!1||n===null||(r[Q(e)]=t[e]),r},{})}function q(t){return t?typeof t=="string"?{[Q(t)]:!0}:Array.isArray(t)?[...t].reduce((r,e)=>({...r,...q(e)}),{}):br(t):null}function k(t,r){return Array.isArray(t)?[...t].reduce((e,n)=>({...e,...k(n,r)}),{}):typeof t=="function"?t(r):t??{}}function Sr({theme:t,style:r,vars:e,styleProps:n}){const i=k(r,t),a=k(e,t);return{...i,...a,...n}}const Y=z.forwardRef(({component:t,style:r,__vars:e,className:n,variant:i,mod:a,size:s,hiddenFrom:o,visibleFrom:y,lightHidden:f,darkHidden:p,renderRoot:c,__size:u,...d},h)=>{var j;const b=w(),S=t||"div",{styleProps:x,rest:A}=Xt(d),m=Et(),l=(j=m==null?void 0:m())==null?void 0:j(x.sx),R=hr(),$=gr({styleProps:x,theme:b,data:tr}),T={ref:h,style:Sr({theme:b,style:r,vars:e,styleProps:$.inlineStyles}),className:v(n,l,{[R]:$.hasResponsiveStyles,"mantine-light-hidden":f,"mantine-dark-hidden":p,[`mantine-hidden-from-${o}`]:o,[`mantine-visible-from-${y}`]:y}),"data-variant":i,"data-size":D(s)?void 0:s||void 0,size:u,...q(a),...A};return N.jsxs(N.Fragment,{children:[$.hasResponsiveStyles&&N.jsx(Jt,{selector:`.${R}`,styles:$.styles,media:$.media}),typeof c=="function"?c(T):N.jsx(S,{...T})]})});Y.displayName="@mantine/core/Box";const Mr=Y;function G(t){return t}function Er(t){const r=z.forwardRef(t);return r.extend=G,r}function _r(t){const r=z.forwardRef(t);return r.extend=G,r}export{Mr as B,Jt as I,zr as a,Tr as b,wr as c,Nr as d,Cr as e,Er as f,Rr as g,Xt as h,C as i,v as j,jr as k,_r as p,vr as u};