import{R as g,r as e}from"./index-DRjF_FHU.js";import{a as h}from"./use-isomorphic-effect-CtQhMHy6.js";function k(t="mantine-"){return`${t}${Math.random().toString(36).slice(2,11)}`}const v=g.useId||(()=>{});function x(){const t=v();return t?`mantine-${t.replace(/:/g,"")}`:""}function E(t){const r=x(),[o,n]=e.useState(r);return h(()=>{n(k())},[]),typeof t=="string"?t:typeof window>"u"?r:o}/**
 * @license @tabler/icons-react v3.28.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.28.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(t,r,o,n)=>{const s=e.forwardRef(({color:c="currentColor",size:a=24,stroke:d=2,title:u,className:l,children:i,...m},f)=>e.createElement("svg",{ref:f,...y[t],width:a,height:a,className:["tabler-icon",`tabler-icon-${r}`,l].join(" "),strokeWidth:d,stroke:c,...m},[u&&e.createElement("title",{key:"svg-title"},u),...n.map(([w,p])=>e.createElement(w,p)),...Array.isArray(i)?i:[i]]));return s.displayName=`${o}`,s};export{R as c,E as u};
