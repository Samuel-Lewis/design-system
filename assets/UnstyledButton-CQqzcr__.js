import{r,R as y}from"./index-Dl6G-zuu.js";import{u as b}from"./use-isomorphic-effect-cEzCLKTI.js";import{p as R,u as g,a as B,B as U}from"./polymorphic-factory-DeKDuS4N.js";function j(t,e){const n=r.useRef(!1);r.useEffect(()=>()=>{n.current=!1},[]),r.useEffect(()=>{if(n.current)return t();n.current=!0},e)}function E(t,e){typeof t=="function"?t(e):typeof t=="object"&&t!==null&&"current"in t&&(t.current=e)}function S(...t){return e=>{t.forEach(n=>E(n,e))}}function v(...t){return r.useCallback(S(...t),t)}function A(t,e){return b("(prefers-reduced-motion: reduce)",t,e)}function _(t,e){return Array.isArray(t)?[...t].reduce((n,s)=>({...n,..._(s,e)}),{}):typeof t=="function"?t(e):t??{}}var u={root:"m_87cf2631"};const x={__staticSelector:"UnstyledButton"},c=R((t,e)=>{const n=g("UnstyledButton",x,t),{className:s,component:o="button",__staticSelector:a,unstyled:i,classNames:f,styles:l,style:d,...p}=n,m=B({name:a,props:n,classes:u,className:s,style:d,classNames:f,styles:l,unstyled:i});return y.createElement(U,{...m("root",{focusable:!0}),component:o,ref:e,type:o==="button"?"button":void 0,...p})});c.classes=u;c.displayName="@mantine/core/UnstyledButton";export{c as U,A as a,E as b,v as c,_ as g,S as m,j as u};