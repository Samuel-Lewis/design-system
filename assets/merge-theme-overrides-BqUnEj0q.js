import{j as h}from"./jsx-runtime-DiklIkkE.js";import{b as V,u as j,k as d,e as x,c as y,p as H,d as f,r as I,f as E,D as z,h as R,M as D,i as B}from"./MantineThemeProvider-DSAHW0aq.js";import{r as $}from"./index-DRjF_FHU.js";import{a as T}from"./use-isomorphic-effect-CtQhMHy6.js";function G(r){var o;return typeof r!="string"||!r.includes("var(--mantine-scale)")?r:(o=r.match(/^calc\((.*?)\)$/))==null?void 0:o[1].split("*")[0].trim()}function U(r){const o=G(r);return typeof o=="number"?o:typeof o=="string"?o.includes("calc")||o.includes("var")?o:o.includes("px")?Number(o.replace("px","")):o.includes("rem")?Number(o.replace("rem",""))*16:o.includes("em")?Number(o.replace("em",""))*16:Number(o):NaN}function M(r){return r==="auto"||r==="dark"||r==="light"}function q({key:r="mantine-color-scheme-value"}={}){let o;return{get:a=>{if(typeof window>"u")return a;try{const n=window.localStorage.getItem(r);return M(n)?n:a}catch{return a}},set:a=>{try{window.localStorage.setItem(r,a)}catch(n){console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.",n)}},subscribe:a=>{o=n=>{n.storageArea===window.localStorage&&n.key===r&&M(n.newValue)&&a(n.newValue)},window.addEventListener("storage",o)},unsubscribe:()=>{window.removeEventListener("storage",o)},clear:()=>{window.localStorage.removeItem(r)}}}function J(){const r=V(),o=j(),a=d(r.breakpoints).reduce((n,t)=>{const i=r.breakpoints[t].includes("px"),e=U(r.breakpoints[t]),l=i?`${e-.1}px`:x(e-.1),s=i?`${e}px`:x(e);return`${n}@media (max-width: ${l}) {.mantine-visible-from-${t} {display: none !important;}}@media (min-width: ${s}) {.mantine-hidden-from-${t} {display: none !important;}}`},"");return h.jsx("style",{"data-mantine-styles":"classes",nonce:o==null?void 0:o(),dangerouslySetInnerHTML:{__html:a}})}function C(r){return Object.entries(r).map(([o,a])=>`${o}: ${a};`).join("")}function b(r,o){return(Array.isArray(r)?r:[r]).reduce((n,t)=>`${t}{${n}}`,o)}function K(r,o){const a=C(r.variables),n=a?b(o,a):"",t=C(r.dark),i=C(r.light),e=t?b(o===":host"?`${o}([data-mantine-color-scheme="dark"])`:`${o}[data-mantine-color-scheme="dark"]`,t):"",l=i?b(o===":host"?`${o}([data-mantine-color-scheme="light"])`:`${o}[data-mantine-color-scheme="light"]`,i):"";return`${n}${e}${l}`}function Q({color:r,theme:o,autoContrast:a}){return o.autoContrast&&H({color:r||o.primaryColor,theme:o}).isLight?"var(--mantine-color-black)":"var(--mantine-color-white)"}function S(r,o){return Q({color:r.colors[r.primaryColor][y(r,o)],theme:r,autoContrast:null})}function p({theme:r,color:o,colorScheme:a,name:n=o,withColorValues:t=!0}){if(!r.colors[o])return{};if(a==="light"){const l=y(r,"light"),s={[`--mantine-color-${n}-text`]:`var(--mantine-color-${n}-filled)`,[`--mantine-color-${n}-filled`]:`var(--mantine-color-${n}-${l})`,[`--mantine-color-${n}-filled-hover`]:`var(--mantine-color-${n}-${l===9?8:l+1})`,[`--mantine-color-${n}-light`]:f(r.colors[o][l],.1),[`--mantine-color-${n}-light-hover`]:f(r.colors[o][l],.12),[`--mantine-color-${n}-light-color`]:`var(--mantine-color-${n}-${l})`,[`--mantine-color-${n}-outline`]:`var(--mantine-color-${n}-${l})`,[`--mantine-color-${n}-outline-hover`]:f(r.colors[o][l],.05)};return t?{[`--mantine-color-${n}-0`]:r.colors[o][0],[`--mantine-color-${n}-1`]:r.colors[o][1],[`--mantine-color-${n}-2`]:r.colors[o][2],[`--mantine-color-${n}-3`]:r.colors[o][3],[`--mantine-color-${n}-4`]:r.colors[o][4],[`--mantine-color-${n}-5`]:r.colors[o][5],[`--mantine-color-${n}-6`]:r.colors[o][6],[`--mantine-color-${n}-7`]:r.colors[o][7],[`--mantine-color-${n}-8`]:r.colors[o][8],[`--mantine-color-${n}-9`]:r.colors[o][9],...s}:s}const i=y(r,"dark"),e={[`--mantine-color-${n}-text`]:`var(--mantine-color-${n}-4)`,[`--mantine-color-${n}-filled`]:`var(--mantine-color-${n}-${i})`,[`--mantine-color-${n}-filled-hover`]:`var(--mantine-color-${n}-${i===9?8:i+1})`,[`--mantine-color-${n}-light`]:f(r.colors[o][Math.max(0,i-2)],.15),[`--mantine-color-${n}-light-hover`]:f(r.colors[o][Math.max(0,i-2)],.2),[`--mantine-color-${n}-light-color`]:`var(--mantine-color-${n}-${Math.max(i-5,0)})`,[`--mantine-color-${n}-outline`]:`var(--mantine-color-${n}-${Math.max(i-4,0)})`,[`--mantine-color-${n}-outline-hover`]:f(r.colors[o][Math.max(i-4,0)],.05)};return t?{[`--mantine-color-${n}-0`]:r.colors[o][0],[`--mantine-color-${n}-1`]:r.colors[o][1],[`--mantine-color-${n}-2`]:r.colors[o][2],[`--mantine-color-${n}-3`]:r.colors[o][3],[`--mantine-color-${n}-4`]:r.colors[o][4],[`--mantine-color-${n}-5`]:r.colors[o][5],[`--mantine-color-${n}-6`]:r.colors[o][6],[`--mantine-color-${n}-7`]:r.colors[o][7],[`--mantine-color-${n}-8`]:r.colors[o][8],[`--mantine-color-${n}-9`]:r.colors[o][9],...e}:e}function X(r){return!!r&&typeof r=="object"&&"mantine-virtual-color"in r}function g(r,o,a){d(o).forEach(n=>Object.assign(r,{[`--mantine-${a}-${n}`]:o[n]}))}const L=r=>{const o=y(r,"light"),a=r.defaultRadius in r.radius?r.radius[r.defaultRadius]:I(r.defaultRadius),n={variables:{"--mantine-scale":r.scale.toString(),"--mantine-cursor-type":r.cursorType,"--mantine-color-scheme":"light dark","--mantine-webkit-font-smoothing":r.fontSmoothing?"antialiased":"unset","--mantine-moz-font-smoothing":r.fontSmoothing?"grayscale":"unset","--mantine-color-white":r.white,"--mantine-color-black":r.black,"--mantine-line-height":r.lineHeights.md,"--mantine-font-family":r.fontFamily,"--mantine-font-family-monospace":r.fontFamilyMonospace,"--mantine-font-family-headings":r.headings.fontFamily,"--mantine-heading-font-weight":r.headings.fontWeight,"--mantine-heading-text-wrap":r.headings.textWrap,"--mantine-radius-default":a,"--mantine-primary-color-filled":`var(--mantine-color-${r.primaryColor}-filled)`,"--mantine-primary-color-filled-hover":`var(--mantine-color-${r.primaryColor}-filled-hover)`,"--mantine-primary-color-light":`var(--mantine-color-${r.primaryColor}-light)`,"--mantine-primary-color-light-hover":`var(--mantine-color-${r.primaryColor}-light-hover)`,"--mantine-primary-color-light-color":`var(--mantine-color-${r.primaryColor}-light-color)`},light:{"--mantine-primary-color-contrast":S(r,"light"),"--mantine-color-bright":"var(--mantine-color-black)","--mantine-color-text":r.black,"--mantine-color-body":r.white,"--mantine-color-error":"var(--mantine-color-red-6)","--mantine-color-placeholder":"var(--mantine-color-gray-5)","--mantine-color-anchor":`var(--mantine-color-${r.primaryColor}-${o})`,"--mantine-color-default":"var(--mantine-color-white)","--mantine-color-default-hover":"var(--mantine-color-gray-0)","--mantine-color-default-color":"var(--mantine-color-black)","--mantine-color-default-border":"var(--mantine-color-gray-4)","--mantine-color-dimmed":"var(--mantine-color-gray-6)"},dark:{"--mantine-primary-color-contrast":S(r,"dark"),"--mantine-color-bright":"var(--mantine-color-white)","--mantine-color-text":"var(--mantine-color-dark-0)","--mantine-color-body":"var(--mantine-color-dark-7)","--mantine-color-error":"var(--mantine-color-red-8)","--mantine-color-placeholder":"var(--mantine-color-dark-3)","--mantine-color-anchor":`var(--mantine-color-${r.primaryColor}-4)`,"--mantine-color-default":"var(--mantine-color-dark-6)","--mantine-color-default-hover":"var(--mantine-color-dark-5)","--mantine-color-default-color":"var(--mantine-color-white)","--mantine-color-default-border":"var(--mantine-color-dark-4)","--mantine-color-dimmed":"var(--mantine-color-dark-2)"}};g(n.variables,r.breakpoints,"breakpoint"),g(n.variables,r.spacing,"spacing"),g(n.variables,r.fontSizes,"font-size"),g(n.variables,r.lineHeights,"line-height"),g(n.variables,r.shadows,"shadow"),g(n.variables,r.radius,"radius"),r.colors[r.primaryColor].forEach((i,e)=>{n.variables[`--mantine-primary-color-${e}`]=`var(--mantine-color-${r.primaryColor}-${e})`}),d(r.colors).forEach(i=>{const e=r.colors[i];if(X(e)){Object.assign(n.light,p({theme:r,name:e.name,color:e.light,colorScheme:"light",withColorValues:!0})),Object.assign(n.dark,p({theme:r,name:e.name,color:e.dark,colorScheme:"dark",withColorValues:!0}));return}e.forEach((l,s)=>{n.variables[`--mantine-color-${i}-${s}`]=l}),Object.assign(n.light,p({theme:r,color:i,colorScheme:"light",withColorValues:!1})),Object.assign(n.dark,p({theme:r,color:i,colorScheme:"dark",withColorValues:!1}))});const t=r.headings.sizes;return d(t).forEach(i=>{n.variables[`--mantine-${i}-font-size`]=t[i].fontSize,n.variables[`--mantine-${i}-line-height`]=t[i].lineHeight,n.variables[`--mantine-${i}-font-weight`]=t[i].fontWeight||r.headings.fontWeight}),n};function Y({theme:r,generator:o}){const a=L(r),n=o==null?void 0:o(r);return n?E(a,n):a}const k=L(z);function Z(r){const o={variables:{},light:{},dark:{}};return d(r.variables).forEach(a=>{k.variables[a]!==r.variables[a]&&(o.variables[a]=r.variables[a])}),d(r.light).forEach(a=>{k.light[a]!==r.light[a]&&(o.light[a]=r.light[a])}),d(r.dark).forEach(a=>{k.dark[a]!==r.dark[a]&&(o.dark[a]=r.dark[a])}),o}function rr(r){return`
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`}function N({cssVariablesSelector:r,deduplicateCssVariables:o}){const a=V(),n=j(),t=R(),i=Y({theme:a,generator:t}),e=r===":root"&&o,l=e?Z(i):i,s=K(l,r);return s?h.jsx("style",{"data-mantine-styles":!0,nonce:n==null?void 0:n(),dangerouslySetInnerHTML:{__html:`${s}${e?"":rr(r)}`}}):null}N.displayName="@mantine/CssVariables";function or(){const r=console.error;console.error=(...o)=>{o.length>1&&typeof o[0]=="string"&&o[0].toLowerCase().includes("extra attributes from the server")&&typeof o[1]=="string"&&o[1].toLowerCase().includes("data-mantine-color-scheme")||r(...o)}}function v(r,o){var t,i;const a=typeof window<"u"&&"matchMedia"in window&&((t=window.matchMedia("(prefers-color-scheme: dark)"))==null?void 0:t.matches),n=r!=="auto"?r:a?"dark":"light";(i=o())==null||i.setAttribute("data-mantine-color-scheme",n)}function nr({manager:r,defaultColorScheme:o,getRootElement:a,forceColorScheme:n}){const t=$.useRef(null),[i,e]=$.useState(()=>r.get(o)),l=n||i,s=$.useCallback(c=>{n||(v(c,a),e(c),r.set(c))},[r.set,l,n]),w=$.useCallback(()=>{e(o),v(o,a),r.clear()},[r.clear,o]);return $.useEffect(()=>(r.subscribe(s),r.unsubscribe),[r.subscribe,r.unsubscribe]),T(()=>{v(r.get(o),a)},[]),$.useEffect(()=>{var u;if(n)return v(n,a),()=>{};n===void 0&&v(i,a),typeof window<"u"&&"matchMedia"in window&&(t.current=window.matchMedia("(prefers-color-scheme: dark)"));const c=m=>{i==="auto"&&v(m.matches?"dark":"light",a)};return(u=t.current)==null||u.addEventListener("change",c),()=>{var m;return(m=t.current)==null?void 0:m.removeEventListener("change",c)}},[i,n]),{colorScheme:l,setColorScheme:s,clearColorScheme:w}}function ar({respectReducedMotion:r,getRootElement:o}){T(()=>{var a;r&&((a=o())==null||a.setAttribute("data-respect-reduced-motion","true"))},[r])}or();function ir({theme:r,children:o,getStyleNonce:a,withStaticClasses:n=!0,withGlobalClasses:t=!0,deduplicateCssVariables:i=!0,withCssVariables:e=!0,cssVariablesSelector:l=":root",classNamesPrefix:s="mantine",colorSchemeManager:w=q(),defaultColorScheme:c="light",getRootElement:u=()=>document.documentElement,cssVariablesResolver:m,forceColorScheme:_,stylesTransform:P,env:O}){const{colorScheme:W,setColorScheme:A,clearColorScheme:F}=nr({defaultColorScheme:c,forceColorScheme:_,manager:w,getRootElement:u});return ar({respectReducedMotion:(r==null?void 0:r.respectReducedMotion)||!1,getRootElement:u}),h.jsx(D.Provider,{value:{colorScheme:W,setColorScheme:A,clearColorScheme:F,getRootElement:u,classNamesPrefix:s,getStyleNonce:a,cssVariablesResolver:m,cssVariablesSelector:l,withStaticClasses:n,stylesTransform:P,env:O},children:h.jsxs(B,{theme:r,children:[e&&h.jsx(N,{cssVariablesSelector:l,deduplicateCssVariables:i}),t&&h.jsx(J,{}),o]})})}ir.displayName="@mantine/core/MantineProvider";function cr(r){return r}function dr(...r){return r.reduce((o,a)=>E(o,a),{})}export{ir as M,cr as c,dr as m,U as p};
