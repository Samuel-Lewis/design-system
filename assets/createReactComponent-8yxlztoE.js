import{R as p,r}from"./index-CDs2tPxN.js";import{a as h}from"./use-isomorphic-effect-lXfF9XqN.js";function g(){return`mantine-${Math.random().toString(36).slice(2,11)}`}const k=p.useId||(()=>{});function v(){const t=k();return t?`mantine-${t.replace(/:/g,"")}`:""}function R(t){const e=v(),[o,n]=r.useState(e);return h(()=>{n(g())},[]),typeof t=="string"?t:typeof window>"u"?e:o}/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var x={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(t,e,o,n)=>{const s=r.forwardRef(({color:a="currentColor",size:u=24,stroke:c=2,className:d,children:i,...l},f)=>r.createElement("svg",{ref:f,...x[t],width:u,height:u,className:["tabler-icon",`tabler-icon-${e}`,d].join(" "),...t==="filled"?{fill:a}:{strokeWidth:c,stroke:a},...l},[...n.map(([m,w])=>r.createElement(m,w)),...Array.isArray(i)?i:[i]]));return s.displayName=`${o}`,s};export{y as c,R as u};
