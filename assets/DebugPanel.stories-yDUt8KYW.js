import{j as c}from"./jsx-runtime-DR9Q75dM.js";import{b as te,r as M}from"./MantineThemeProvider-Dk0V1vVM.js";import{u as fe,c as oe}from"./createReactComponent-CfaMSpS-.js";import{r as W}from"./index-DRjF_FHU.js";import{f as _,u as C,B as S,a as ne,e as ge,c as re,h as ve,d as ye}from"./polymorphic-factory-BWewEH0K.js";import{c as se}from"./create-safe-context-Cir3bm7S.js";import{u as xe,m as be,a as Ae,g as Se,U as Ce}from"./UnstyledButton-DfPrbSJJ.js";import{r as Ie}from"./index-rX-Bn4lm.js";import{u as _e}from"./use-uncontrolled-dNlZsZWO.js";import{T as we}from"./Text-weJagYCU.js";import"./use-isomorphic-effect-DlIeJm8l.js";function X(o,n){return e=>{if(typeof e!="string"||e.trim().length===0)throw new Error(n);return`${o}-${e}`}}function $(o,n){let e=o;for(;(e=e.parentElement)&&!e.matches(n););return e}function Ee(o,n,e){for(let t=o-1;t>=0;t-=1)if(!n[t].disabled)return t;if(e){for(let t=n.length-1;t>-1;t-=1)if(!n[t].disabled)return t}return o}function Pe(o,n,e){for(let t=o+1;t<n.length;t+=1)if(!n[t].disabled)return t;if(e){for(let t=0;t<n.length;t+=1)if(!n[t].disabled)return t}return o}function ke(o,n,e){return $(o,e)===$(n,e)}function Ne({parentSelector:o,siblingSelector:n,onKeyDown:e,loop:t=!0,activateOnFocus:d=!1,dir:l="rtl",orientation:h}){return r=>{var i;e==null||e(r);const s=Array.from(((i=$(r.currentTarget,o))==null?void 0:i.querySelectorAll(n))||[]).filter(u=>ke(r.currentTarget,u,o)),m=s.findIndex(u=>r.currentTarget===u),a=Pe(m,s,t),f=Ee(m,s,t),y=l==="rtl"?f:a,g=l==="rtl"?a:f;switch(r.key){case"ArrowRight":{h==="horizontal"&&(r.stopPropagation(),r.preventDefault(),s[y].focus(),d&&s[y].click());break}case"ArrowLeft":{h==="horizontal"&&(r.stopPropagation(),r.preventDefault(),s[g].focus(),d&&s[g].click());break}case"ArrowUp":{h==="vertical"&&(r.stopPropagation(),r.preventDefault(),s[f].focus(),d&&s[f].click());break}case"ArrowDown":{h==="vertical"&&(r.stopPropagation(),r.preventDefault(),s[a].focus(),d&&s[a].click());break}case"Home":{r.stopPropagation(),r.preventDefault(),!s[0].disabled&&s[0].focus();break}case"End":{r.stopPropagation(),r.preventDefault();const u=s.length-1;!s[u].disabled&&s[u].focus();break}}}}function je(o){if(!o||typeof o=="string")return 0;const n=o/36;return Math.round((4+15*n**.25+n/5)*10)}function D(o){return o!=null&&o.current?o.current.scrollHeight:"auto"}const I=typeof window<"u"&&window.requestAnimationFrame;function Re({transitionDuration:o,transitionTimingFunction:n="ease",onTransitionEnd:e=()=>{},opened:t}){const d=W.useRef(null),l=0,h={display:"none",height:0,overflow:"hidden"},[r,s]=W.useState(t?{}:h),m=i=>{Ie.flushSync(()=>s(i))},a=i=>{m(u=>({...u,...i}))};function f(i){const u=o||je(i);return{transition:`height ${u}ms ${n}, opacity ${u}ms ${n}`}}xe(()=>{typeof I=="function"&&I(t?()=>{a({willChange:"height",display:"block",overflow:"hidden"}),I(()=>{const i=D(d);a({...f(i),height:i})})}:()=>{const i=D(d);a({...f(i),willChange:"height",height:i}),I(()=>a({height:l,overflow:"hidden"}))})},[t]);const y=i=>{if(!(i.target!==d.current||i.propertyName!=="height"))if(t){const u=D(d);u===r.height?m({}):a({height:u}),e()}else r.height===l&&(m(h),e())};function g({style:i={},refKey:u="ref",...p}={}){const A=p[u];return{"aria-hidden":!t,...p,[u]:be(d,A),onTransitionEnd:y,style:{boxSizing:"border-box",...i,...r}}}return g}const De={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},ae=_((o,n)=>{const{children:e,in:t,transitionDuration:d,transitionTimingFunction:l,style:h,onTransitionEnd:r,animateOpacity:s,...m}=C("Collapse",De,o),a=te(),f=Ae(),g=(a.respectReducedMotion?f:!1)?0:d,i=Re({opened:t,transitionDuration:g,transitionTimingFunction:l,onTransitionEnd:r});return g===0?t?c.jsx(S,{...m,children:e}):null:c.jsx(S,{...i({style:{opacity:t||!s?1:0,transition:s?`opacity ${g}ms ${l}`:"none",...Se(h,a)},ref:n,...m}),children:e})});ae.displayName="@mantine/core/Collapse";const[Te,B]=se("Accordion component was not found in the tree");function L({style:o,size:n=16,...e}){return c.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...o,width:M(n),height:M(n),display:"block"},...e,children:c.jsx("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}L.displayName="@mantine/core/AccordionChevron";const[Me,ie]=se("Accordion.Item component was not found in the tree");var w={root:"m_9bdbb667",panel:"m_df78851f",content:"m_4ba554d4",itemTitle:"m_8fa820a0",control:"m_4ba585b8","control--default":"m_6939a5e9","control--contained":"m_4271d21b",label:"m_df3ffa0f",chevron:"m_3f35ae96",icon:"m_9bd771fe",item:"m_9bd7b098","item--default":"m_fe19b709","item--contained":"m_1f921b3b","item--filled":"m_2cdf939a","item--separated":"m_9f59b069"};const $e={},U=_((o,n)=>{const{classNames:e,className:t,style:d,styles:l,vars:h,chevron:r,icon:s,onClick:m,onKeyDown:a,children:f,disabled:y,mod:g,...i}=C("AccordionControl",$e,o),{value:u}=ie(),p=B(),A=p.isItemActive(u),O=typeof p.order=="number",j=`h${p.order}`,E=c.jsxs(Ce,{...i,...p.getStyles("control",{className:t,classNames:e,style:d,styles:l,variant:p.variant}),unstyled:p.unstyled,mod:["accordion-control",{active:A,"chevron-position":p.chevronPosition,disabled:y},g],ref:n,onClick:P=>{m==null||m(P),p.onChange(u)},type:"button",disabled:y,"aria-expanded":A,"aria-controls":p.getRegionId(u),id:p.getControlId(u),onKeyDown:Ne({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:p.loop,orientation:"vertical",onKeyDown:a}),children:[c.jsx(S,{component:"span",mod:{rotate:!p.disableChevronRotation&&A,position:p.chevronPosition},...p.getStyles("chevron",{classNames:e,styles:l}),children:r||p.chevron}),c.jsx("span",{...p.getStyles("label",{classNames:e,styles:l}),children:f}),s&&c.jsx(S,{component:"span",mod:{"chevron-position":p.chevronPosition},...p.getStyles("icon",{classNames:e,styles:l}),children:s})]});return O?c.jsx(j,{...p.getStyles("itemTitle",{classNames:e,styles:l}),children:E}):E});U.displayName="@mantine/core/AccordionControl";U.classes=w;const Be={},V=_((o,n)=>{const{classNames:e,className:t,style:d,styles:l,vars:h,value:r,mod:s,...m}=C("AccordionItem",Be,o),a=B();return c.jsx(Me,{value:{value:r},children:c.jsx(S,{ref:n,mod:[{active:a.isItemActive(r)},s],...a.getStyles("item",{className:t,classNames:e,styles:l,style:d,variant:a.variant}),...m})})});V.displayName="@mantine/core/AccordionItem";V.classes=w;const Le={},H=_((o,n)=>{const{classNames:e,className:t,style:d,styles:l,vars:h,children:r,...s}=C("AccordionPanel",Le,o),{value:m}=ie(),a=B();return c.jsx(ae,{ref:n,...a.getStyles("panel",{className:t,classNames:e,style:d,styles:l}),...s,in:a.isItemActive(m),transitionDuration:a.transitionDuration??200,role:"region",id:a.getRegionId(m),"aria-labelledby":a.getControlId(m),children:c.jsx("div",{...a.getStyles("content",{classNames:e,styles:l}),children:r})})});H.displayName="@mantine/core/AccordionPanel";H.classes=w;const Ue={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:c.jsx(L,{})},Ve=re((o,{transitionDuration:n,chevronSize:e,radius:t})=>({root:{"--accordion-transition-duration":n===void 0?void 0:`${n}ms`,"--accordion-chevron-size":e===void 0?void 0:M(e),"--accordion-radius":t===void 0?void 0:ve(t)}}));function v(o){const n=C("Accordion",Ue,o),{classNames:e,className:t,style:d,styles:l,unstyled:h,vars:r,children:s,multiple:m,value:a,defaultValue:f,onChange:y,id:g,loop:i,transitionDuration:u,disableChevronRotation:p,chevronPosition:A,chevronSize:O,order:j,chevron:E,variant:P,radius:We,...le}=n,R=fe(g),[x,de]=_e({value:a,defaultValue:f,finalValue:m?[]:null,onChange:y}),ue=b=>Array.isArray(x)?x.includes(b):b===x,pe=b=>{const me=Array.isArray(x)?x.includes(b)?x.filter(he=>he!==b):[...x,b]:b===x?null:b;de(me)},G=ne({name:"Accordion",classes:w,props:n,className:t,style:d,classNames:e,styles:l,unstyled:h,vars:r,varsResolver:Ve});return c.jsx(Te,{value:{isItemActive:ue,onChange:pe,getControlId:X(`${R}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:X(`${R}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:u,disableChevronRotation:p,chevronPosition:A,order:j,chevron:E,loop:i,getStyles:G,variant:P,unstyled:h},children:c.jsx(S,{...G("root"),id:R,...le,variant:P,"data-accordion":!0,children:s})})}const He=o=>o;v.extend=He;v.withProps=ge(v);v.classes=w;v.displayName="@mantine/core/Accordion";v.Item=V;v.Panel=H;v.Control=U;v.Chevron=L;var ce={root:"m_6d731127"};const qe={gap:"md",align:"stretch",justify:"flex-start"},ze=re((o,{gap:n,align:e,justify:t})=>({root:{"--stack-gap":ye(n),"--stack-align":e,"--stack-justify":t}})),q=_((o,n)=>{const e=C("Stack",qe,o),{classNames:t,className:d,style:l,styles:h,unstyled:r,vars:s,align:m,justify:a,gap:f,variant:y,...g}=e,i=ne({name:"Stack",props:e,classes:ce,className:d,style:l,classNames:t,styles:h,unstyled:r,vars:s,varsResolver:ze});return c.jsx(S,{ref:n,...i("root"),variant:y,...g})});q.classes=ce;q.displayName="@mantine/core/Stack";/**
 * @license @tabler/icons-react v3.22.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Oe=oe("outline","alert-triangle","IconAlertTriangle",[["path",{d:"M12 9v4",key:"svg-0"}],["path",{d:"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.22.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ge=oe("outline","backhoe","IconBackhoe",[["path",{d:"M4 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M13 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M13 19l-9 0",key:"svg-2"}],["path",{d:"M4 15l9 0",key:"svg-3"}],["path",{d:"M8 12v-5h2a3 3 0 0 1 3 3v5",key:"svg-4"}],["path",{d:"M5 15v-2a1 1 0 0 1 1 -1h7",key:"svg-5"}],["path",{d:"M21.12 9.88l-3.12 -4.88l-5 5",key:"svg-6"}],["path",{d:"M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z",key:"svg-7"}]]),T={};const Z=T.NEXT_PUBLIC_NODE_ENV==="development"||T.VERCEL_ENV==="development"||T.DEBUG==="true",z=({children:o,title:n="Debug Information",debugMode:e=Z,isError:t=!1})=>{const d=te();if(!e||!o)return null;const l=t?c.jsx(Oe,{color:d.colors.red[7]}):c.jsx(Ge,{});return c.jsx(v,{m:"xs",variant:"separated",children:c.jsxs(v.Item,{value:"default",children:[c.jsx(v.Control,{icon:l,children:n}),c.jsx(v.Panel,{children:c.jsxs(q,{children:[o,c.jsxs(we,{size:"xs",c:"dimmed",children:["This error panel should only exist in DEBUG modes. If you are seeing this in production, please contact support.",c.jsx("br",{}),"isDevelopment: ",Z.toString()]})]})})]})})};z.displayName="DebugPanel";z.__docgenInfo={description:"",methods:[],displayName:"DebugPanel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Debug Information"',computed:!1}},debugMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:`process.env.NODE_ENV === "development" ||
process.env.NEXT_PUBLIC_NODE_ENV === "development" ||
process.env.VERCEL_ENV === "development" ||
process.env.DEBUG === "true"`,computed:!1}},isError:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const rt={component:z},k={args:{title:"Ship Status",isError:!1,children:"All systems normal"}},N={args:{title:"Ship Status",isError:!0,children:"Engines are down! Ship is going down!"}};var F,J,Q;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: "Ship Status",
    isError: false,
    children: "All systems normal"
  }
}`,...(Q=(J=k.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,K,ee;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: "Ship Status",
    isError: true,
    children: "Engines are down! Ship is going down!"
  }
}`,...(ee=(K=N.parameters)==null?void 0:K.docs)==null?void 0:ee.source}}};const st=["Default","Error"];export{k as Default,N as Error,st as __namedExportsOrder,rt as default};