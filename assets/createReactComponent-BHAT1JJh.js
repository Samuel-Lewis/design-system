import{R as g,r as a}from"./index-DRjF_FHU.js";import{a as v}from"./use-isomorphic-effect-CtQhMHy6.js";import{j as x}from"./jsx-runtime-DiklIkkE.js";import{p as k,u as B,a as b,B as S}from"./polymorphic-factory-BncCP4Jr.js";function _(t="mantine-"){return`${t}${Math.random().toString(36).slice(2,11)}`}const E=g.useId||(()=>{});function I(){const t=E();return t?`mantine-${t.replace(/:/g,"")}`:""}function A(t){const e=I(),[o,s]=a.useState(e);return v(()=>{s(_())},[]),typeof t=="string"?t:typeof window>"u"?e:o}var p={root:"m_87cf2631"};const R={__staticSelector:"UnstyledButton"},f=k((t,e)=>{const o=B("UnstyledButton",R,t),{className:s,component:r="button",__staticSelector:u,unstyled:i,classNames:l,styles:c,style:m,...n}=o,d=b({name:u,props:o,classes:p,className:s,style:m,classNames:l,styles:c,unstyled:i});return x.jsx(S,{...d("root",{focusable:!0}),component:r,ref:e,type:r==="button"?"button":void 0,...n})});f.classes=p;f.displayName="@mantine/core/UnstyledButton";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var U={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(t,e,o,s)=>{const r=a.forwardRef(({color:u="currentColor",size:i=24,stroke:l=2,title:c,className:m,children:n,...d},y)=>a.createElement("svg",{ref:y,...U[t],width:i,height:i,className:["tabler-icon",`tabler-icon-${e}`,m].join(" "),strokeWidth:l,stroke:u,...d},[c&&a.createElement("title",{key:"svg-title"},c),...s.map(([w,h])=>a.createElement(w,h)),...Array.isArray(n)?n:[n]]));return r.displayName=`${o}`,r};export{f as U,L as c,A as u};
