import{j as S,g as j,a as N}from"./MantineThemeProvider-JCYNcDHZ.js";import"./index-CTjT7uj6.js";import{p as R,u as _,a as z,B,c as F,g as P,b as C}from"./polymorphic-factory-Dr6zLZsC.js";var n={root:"m_b6d8b162"};function E(t){if(t==="start")return"start";if(t==="end"||t)return"end"}const G={inherit:!1},H=F((t,{variant:r,lineClamp:e,gradient:o,size:s,color:a})=>({root:{"--text-fz":P(s),"--text-lh":C(s),"--text-gradient":r==="gradient"?j(o,t):void 0,"--text-line-clamp":typeof e=="number"?e.toString():void 0,"--text-color":a?N(a,t):void 0}})),i=R((t,r)=>{const e=_("Text",G,t),{lineClamp:o,truncate:s,inline:a,inherit:l,gradient:L,span:c,__staticSelector:p,vars:d,className:m,style:u,classNames:x,styles:g,unstyled:f,variant:v,mod:y,size:T,...h}=e,b=z({name:["Text",p],props:e,classes:n,className:m,style:u,classNames:x,styles:g,unstyled:f,vars:d,varsResolver:H});return S.jsx(B,{...b("root",{focusable:!0}),ref:r,component:c?"span":"p",variant:v,mod:[{"data-truncate":E(s),"data-line-clamp":typeof o=="number","data-inline":a,"data-inherit":l},y],size:T,...h})});i.classes=n;i.displayName="@mantine/core/Text";export{i as T};
