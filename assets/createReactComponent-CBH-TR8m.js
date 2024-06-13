import{R as g,r as e}from"./index-CDs2tPxN.js";import{a as h}from"./use-isomorphic-effect-lXfF9XqN.js";function k(){return`mantine-${Math.random().toString(36).slice(2,11)}`}const v=g.useId||(()=>{});function x(){const t=v();return t?`mantine-${t.replace(/:/g,"")}`:""}function E(t){const r=x(),[o,n]=e.useState(r);return h(()=>{n(k())},[]),typeof t=="string"?t:typeof window>"u"?r:o}/**
 * @license @tabler/icons-react v3.6.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var I={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.6.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(t,r,o,n)=>{const s=e.forwardRef(({color:a="currentColor",size:u=24,stroke:d=2,title:c,className:l,children:i,...f},m)=>e.createElement("svg",{ref:m,...I[t],width:u,height:u,className:["tabler-icon",`tabler-icon-${r}`,l].join(" "),...t==="filled"?{fill:a}:{strokeWidth:d,stroke:a},...f},[c&&e.createElement("title",{key:"svg-title"},c),...n.map(([w,p])=>e.createElement(w,p)),...Array.isArray(i)?i:[i]]));return s.displayName=`${o}`,s};export{R as c,E as u};
