import{R as b,r as f}from"./index-Dh25_VVa.js";import{u as V,b as E,k as d,e as M,c as p,p as A,d as $,r as F,f as T,D as H,h as I,M as R,i as z}from"./MantineThemeProvider-BWlR-gxW.js";import{a as L}from"./use-isomorphic-effect-D7kIh7my.js";function B(r){var o;return typeof r!="string"||!r.includes("var(--mantine-scale)")?r:(o=r.match(/^calc\((.*?)\)$/))==null?void 0:o[1].split("*")[0].trim()}function D(r){const o=B(r);return typeof o=="number"?o:typeof o=="string"?o.includes("calc")||o.includes("var")?o:o.includes("px")?Number(o.replace("px","")):o.includes("rem")?Number(o.replace("rem",""))*16:o.includes("em")?Number(o.replace("em",""))*16:Number(o):NaN}function S(r){return r==="auto"||r==="dark"||r==="light"}function G({key:r="mantine-color-scheme-value"}={}){let o;return{get:a=>{if(typeof window>"u")return a;try{const n=window.localStorage.getItem(r);return S(n)?n:a}catch{return a}},set:a=>{try{window.localStorage.setItem(r,a)}catch(n){console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.",n)}},subscribe:a=>{o=n=>{n.storageArea===window.localStorage&&n.key===r&&S(n.newValue)&&a(n.newValue)},window.addEventListener("storage",o)},unsubscribe:()=>{window.removeEventListener("storage",o)},clear:()=>{window.localStorage.removeItem(r)}}}function U(){const r=V(),o=E(),a=d(r.breakpoints).reduce((n,e)=>{const t=r.breakpoints[e].includes("px"),i=D(r.breakpoints[e]),l=t?`${i-.1}px`:M(i-.1),c=t?`${i}px`:M(i);return`${n}@media (max-width: ${l}) {.mantine-visible-from-${e} {display: none !important;}}@media (min-width: ${c}) {.mantine-hidden-from-${e} {display: none !important;}}`},"");return b.createElement("style",{"data-mantine-styles":"classes",nonce:o==null?void 0:o(),dangerouslySetInnerHTML:{__html:a}})}function w(r){return Object.entries(r).map(([o,a])=>`${o}: ${a};`).join("")}function C(r,o){return(Array.isArray(r)?r:[r]).reduce((n,e)=>`${e}{${n}}`,o)}function q(r,o){const a=w(r.variables),n=a?C(o,a):"",e=w(r.dark),t=e?C(`${o}[data-mantine-color-scheme="dark"]`,e):"",i=w(r.light),l=i?C(`${o}[data-mantine-color-scheme="light"]`,i):"";return`${n}${t}${l}`}function J({color:r,theme:o,autoContrast:a}){return(typeof a=="boolean"?a:o.autoContrast)&&A({color:r||o.primaryColor,theme:o}).isLight?"var(--mantine-color-black)":"var(--mantine-color-white)"}function x(r,o){return J({color:r.colors[r.primaryColor][p(r,o)],theme:r,autoContrast:null})}function h({theme:r,color:o,colorScheme:a,name:n=o,withColorValues:e=!0}){if(!r.colors[o])return{};if(a==="light"){const l=p(r,"light"),c={[`--mantine-color-${n}-text`]:`var(--mantine-color-${n}-filled)`,[`--mantine-color-${n}-filled`]:`var(--mantine-color-${n}-${l})`,[`--mantine-color-${n}-filled-hover`]:`var(--mantine-color-${n}-${l===9?8:l+1})`,[`--mantine-color-${n}-light`]:$(r.colors[o][l],.1),[`--mantine-color-${n}-light-hover`]:$(r.colors[o][l],.12),[`--mantine-color-${n}-light-color`]:`var(--mantine-color-${n}-${l})`,[`--mantine-color-${n}-outline`]:`var(--mantine-color-${n}-${l})`,[`--mantine-color-${n}-outline-hover`]:$(r.colors[o][l],.05)};return e?{[`--mantine-color-${n}-0`]:r.colors[o][0],[`--mantine-color-${n}-1`]:r.colors[o][1],[`--mantine-color-${n}-2`]:r.colors[o][2],[`--mantine-color-${n}-3`]:r.colors[o][3],[`--mantine-color-${n}-4`]:r.colors[o][4],[`--mantine-color-${n}-5`]:r.colors[o][5],[`--mantine-color-${n}-6`]:r.colors[o][6],[`--mantine-color-${n}-7`]:r.colors[o][7],[`--mantine-color-${n}-8`]:r.colors[o][8],[`--mantine-color-${n}-9`]:r.colors[o][9],...c}:c}const t=p(r,"dark"),i={[`--mantine-color-${n}-text`]:`var(--mantine-color-${n}-4)`,[`--mantine-color-${n}-filled`]:`var(--mantine-color-${n}-${t})`,[`--mantine-color-${n}-filled-hover`]:`var(--mantine-color-${n}-${t===9?8:t+1})`,[`--mantine-color-${n}-light`]:$(r.colors[o][Math.max(0,t-2)],.15),[`--mantine-color-${n}-light-hover`]:$(r.colors[o][Math.max(0,t-2)],.2),[`--mantine-color-${n}-light-color`]:`var(--mantine-color-${n}-${Math.max(t-5,0)})`,[`--mantine-color-${n}-outline`]:`var(--mantine-color-${n}-${Math.max(t-4,0)})`,[`--mantine-color-${n}-outline-hover`]:$(r.colors[o][Math.max(t-4,0)],.05)};return e?{[`--mantine-color-${n}-0`]:r.colors[o][0],[`--mantine-color-${n}-1`]:r.colors[o][1],[`--mantine-color-${n}-2`]:r.colors[o][2],[`--mantine-color-${n}-3`]:r.colors[o][3],[`--mantine-color-${n}-4`]:r.colors[o][4],[`--mantine-color-${n}-5`]:r.colors[o][5],[`--mantine-color-${n}-6`]:r.colors[o][6],[`--mantine-color-${n}-7`]:r.colors[o][7],[`--mantine-color-${n}-8`]:r.colors[o][8],[`--mantine-color-${n}-9`]:r.colors[o][9],...i}:i}function K(r){return!!r&&typeof r=="object"&&"mantine-virtual-color"in r}function g(r,o,a){d(o).forEach(n=>Object.assign(r,{[`--mantine-${a}-${n}`]:o[n]}))}const j=r=>{const o=p(r,"light"),a=r.defaultRadius in r.radius?r.radius[r.defaultRadius]:F(r.defaultRadius),n={variables:{"--mantine-scale":r.scale.toString(),"--mantine-cursor-type":r.cursorType,"--mantine-color-scheme":"light dark","--mantine-webkit-font-smoothing":r.fontSmoothing?"antialiased":"unset","--mantine-moz-font-smoothing":r.fontSmoothing?"grayscale":"unset","--mantine-color-white":r.white,"--mantine-color-black":r.black,"--mantine-line-height":r.lineHeights.md,"--mantine-font-family":r.fontFamily,"--mantine-font-family-monospace":r.fontFamilyMonospace,"--mantine-font-family-headings":r.headings.fontFamily,"--mantine-heading-font-weight":r.headings.fontWeight,"--mantine-heading-text-wrap":r.headings.textWrap,"--mantine-radius-default":a,"--mantine-primary-color-filled":`var(--mantine-color-${r.primaryColor}-filled)`,"--mantine-primary-color-filled-hover":`var(--mantine-color-${r.primaryColor}-filled-hover)`,"--mantine-primary-color-light":`var(--mantine-color-${r.primaryColor}-light)`,"--mantine-primary-color-light-hover":`var(--mantine-color-${r.primaryColor}-light-hover)`,"--mantine-primary-color-light-color":`var(--mantine-color-${r.primaryColor}-light-color)`},light:{"--mantine-primary-color-contrast":x(r,"light"),"--mantine-color-bright":"var(--mantine-color-black)","--mantine-color-text":r.black,"--mantine-color-body":r.white,"--mantine-color-error":"var(--mantine-color-red-6)","--mantine-color-placeholder":"var(--mantine-color-gray-5)","--mantine-color-anchor":`var(--mantine-color-${r.primaryColor}-${o})`,"--mantine-color-default":"var(--mantine-color-white)","--mantine-color-default-hover":"var(--mantine-color-gray-0)","--mantine-color-default-color":"var(--mantine-color-black)","--mantine-color-default-border":"var(--mantine-color-gray-4)","--mantine-color-dimmed":"var(--mantine-color-gray-6)"},dark:{"--mantine-primary-color-contrast":x(r,"dark"),"--mantine-color-bright":"var(--mantine-color-white)","--mantine-color-text":"var(--mantine-color-dark-0)","--mantine-color-body":"var(--mantine-color-dark-7)","--mantine-color-error":"var(--mantine-color-red-8)","--mantine-color-placeholder":"var(--mantine-color-dark-3)","--mantine-color-anchor":`var(--mantine-color-${r.primaryColor}-4)`,"--mantine-color-default":"var(--mantine-color-dark-6)","--mantine-color-default-hover":"var(--mantine-color-dark-5)","--mantine-color-default-color":"var(--mantine-color-white)","--mantine-color-default-border":"var(--mantine-color-dark-4)","--mantine-color-dimmed":"var(--mantine-color-dark-2)"}};g(n.variables,r.breakpoints,"breakpoint"),g(n.variables,r.spacing,"spacing"),g(n.variables,r.fontSizes,"font-size"),g(n.variables,r.lineHeights,"line-height"),g(n.variables,r.shadows,"shadow"),g(n.variables,r.radius,"radius"),r.colors[r.primaryColor].forEach((t,i)=>{n.variables[`--mantine-primary-color-${i}`]=`var(--mantine-color-${r.primaryColor}-${i})`}),d(r.colors).forEach(t=>{const i=r.colors[t];if(K(i)){Object.assign(n.light,h({theme:r,name:i.name,color:i.light,colorScheme:"light",withColorValues:!0})),Object.assign(n.dark,h({theme:r,name:i.name,color:i.dark,colorScheme:"dark",withColorValues:!0}));return}i.forEach((l,c)=>{n.variables[`--mantine-color-${t}-${c}`]=l}),Object.assign(n.light,h({theme:r,color:t,colorScheme:"light",withColorValues:!1})),Object.assign(n.dark,h({theme:r,color:t,colorScheme:"dark",withColorValues:!1}))});const e=r.headings.sizes;return d(e).forEach(t=>{n.variables[`--mantine-${t}-font-size`]=e[t].fontSize,n.variables[`--mantine-${t}-line-height`]=e[t].lineHeight,n.variables[`--mantine-${t}-font-weight`]=e[t].fontWeight||r.headings.fontWeight}),n};function Q({theme:r,generator:o}){const a=j(r),n=o==null?void 0:o(r);return n?T(a,n):a}const k=j(H);function X(r){const o={variables:{},light:{},dark:{}};return d(r.variables).forEach(a=>{k.variables[a]!==r.variables[a]&&(o.variables[a]=r.variables[a])}),d(r.light).forEach(a=>{k.light[a]!==r.light[a]&&(o.light[a]=r.light[a])}),d(r.dark).forEach(a=>{k.dark[a]!==r.dark[a]&&(o.dark[a]=r.dark[a])}),o}function Y(r){return`
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`}function N({cssVariablesSelector:r,deduplicateCssVariables:o}){const a=V(),n=E(),e=I(),t=Q({theme:a,generator:e}),i=r===":root"&&o,l=i?X(t):t,c=q(l,r);return c?b.createElement("style",{"data-mantine-styles":!0,nonce:n==null?void 0:n(),dangerouslySetInnerHTML:{__html:`${c}${i?"":Y(r)}`}}):null}N.displayName="@mantine/CssVariables";function Z(){const r=console.error;console.error=(...o)=>{o.length>1&&typeof o[0]=="string"&&o[0].toLowerCase().includes("extra attributes from the server")&&typeof o[1]=="string"&&o[1].toLowerCase().includes("data-mantine-color-scheme")||r(...o)}}function v(r,o){var n;const a=r!=="auto"?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";(n=o())==null||n.setAttribute("data-mantine-color-scheme",a)}function rr({manager:r,defaultColorScheme:o,getRootElement:a,forceColorScheme:n}){const e=f.useRef(),[t,i]=f.useState(()=>r.get(o)),l=n||t,c=f.useCallback(s=>{n||(v(s,a),i(s),r.set(s))},[r.set,l,n]),y=f.useCallback(()=>{i(o),v(o,a),r.clear()},[r.clear,o]);return f.useEffect(()=>(r.subscribe(c),r.unsubscribe),[r.subscribe,r.unsubscribe]),L(()=>{v(r.get(o),a)},[]),f.useEffect(()=>{var u;if(n)return v(n,a),()=>{};n===void 0&&v(t,a),e.current=window.matchMedia("(prefers-color-scheme: dark)");const s=m=>{t==="auto"&&v(m.matches?"dark":"light",a)};return(u=e.current)==null||u.addEventListener("change",s),()=>{var m;return(m=e.current)==null?void 0:m.removeEventListener("change",s)}},[t,n]),{colorScheme:l,setColorScheme:c,clearColorScheme:y}}function or({respectReducedMotion:r,getRootElement:o}){L(()=>{var a;r&&((a=o())==null||a.setAttribute("data-respect-reduced-motion","true"))},[r])}Z();function nr({theme:r,children:o,getStyleNonce:a,withStaticClasses:n=!0,withGlobalClasses:e=!0,deduplicateCssVariables:t=!0,withCssVariables:i=!0,cssVariablesSelector:l=":root",classNamesPrefix:c="mantine",colorSchemeManager:y=G(),defaultColorScheme:s="light",getRootElement:u=()=>document.documentElement,cssVariablesResolver:m,forceColorScheme:_}){const{colorScheme:P,setColorScheme:O,clearColorScheme:W}=rr({defaultColorScheme:s,forceColorScheme:_,manager:y,getRootElement:u});return or({respectReducedMotion:(r==null?void 0:r.respectReducedMotion)||!1,getRootElement:u}),b.createElement(R.Provider,{value:{colorScheme:P,setColorScheme:O,clearColorScheme:W,getRootElement:u,classNamesPrefix:c,getStyleNonce:a,cssVariablesResolver:m,cssVariablesSelector:l,withStaticClasses:n}},b.createElement(z,{theme:r},i&&b.createElement(N,{cssVariablesSelector:l,deduplicateCssVariables:t}),e&&b.createElement(U,null),o))}nr.displayName="@mantine/core/MantineProvider";function er(r){return r}function lr(...r){return r.reduce((o,a)=>T(o,a),{})}export{nr as M,er as c,lr as m,D as p};