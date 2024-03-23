import{u as oe,r as j,j as E}from"./MantineThemeProvider-9pAoEhm2.js";import{u as ge,c as ne}from"./createReactComponent-Xm4pRI4G.js";import{r as X,R as f}from"./index-Dl6G-zuu.js";import{f as w,u as C,B as S,a as re,c as se,e as ve,d as ye}from"./polymorphic-factory-DyqZBuhA.js";import{c as ae}from"./create-safe-context-8CLO_m3T.js";import{u as Ee,m as be,a as Ae,g as xe,U as Se}from"./UnstyledButton-Dw07lJWc.js";import{r as Ce}from"./index-D1_ZHIBm.js";import{u as Ie}from"./use-uncontrolled-CRiF4l_U.js";import{T as we}from"./Text-aGdwS_vx.js";import"./use-isomorphic-effect-cEzCLKTI.js";function Z(o,n){return e=>{if(typeof e!="string"||e.trim().length===0)throw new Error(n);return`${o}-${e}`}}function B(o,n){let e=o;for(;(e=e.parentElement)&&!e.matches(n););return e}function ke(o,n,e){for(let t=o-1;t>=0;t-=1)if(!n[t].disabled)return t;if(e){for(let t=n.length-1;t>-1;t-=1)if(!n[t].disabled)return t}return o}function Ne(o,n,e){for(let t=o+1;t<n.length;t+=1)if(!n[t].disabled)return t;if(e){for(let t=0;t<n.length;t+=1)if(!n[t].disabled)return t}return o}function Pe(o,n,e){return B(o,e)===B(n,e)}function Re({parentSelector:o,siblingSelector:n,onKeyDown:e,loop:t=!0,activateOnFocus:l=!1,dir:c="rtl",orientation:p}){return r=>{var i;e==null||e(r);const s=Array.from(((i=B(r.currentTarget,o))==null?void 0:i.querySelectorAll(n))||[]).filter(d=>Pe(r.currentTarget,d,o)),m=s.findIndex(d=>r.currentTarget===d),a=Ne(m,s,t),h=ke(m,s,t),v=c==="rtl"?h:a,g=c==="rtl"?a:h;switch(r.key){case"ArrowRight":{p==="horizontal"&&(r.stopPropagation(),r.preventDefault(),s[v].focus(),l&&s[v].click());break}case"ArrowLeft":{p==="horizontal"&&(r.stopPropagation(),r.preventDefault(),s[g].focus(),l&&s[g].click());break}case"ArrowUp":{p==="vertical"&&(r.stopPropagation(),r.preventDefault(),s[h].focus(),l&&s[h].click());break}case"ArrowDown":{p==="vertical"&&(r.stopPropagation(),r.preventDefault(),s[a].focus(),l&&s[a].click());break}case"Home":{r.stopPropagation(),r.preventDefault(),!s[0].disabled&&s[0].focus();break}case"End":{r.stopPropagation(),r.preventDefault();const d=s.length-1;!s[d].disabled&&s[d].focus();break}}}}function De(o){if(!o||typeof o=="string")return 0;const n=o/36;return Math.round((4+15*n**.25+n/5)*10)}function M(o){return o!=null&&o.current?o.current.scrollHeight:"auto"}const I=typeof window<"u"&&window.requestAnimationFrame;function _e({transitionDuration:o,transitionTimingFunction:n="ease",onTransitionEnd:e=()=>{},opened:t}){const l=X.useRef(null),c=0,p={display:"none",height:0,overflow:"hidden"},[r,s]=X.useState(t?{}:p),m=i=>{Ce.flushSync(()=>s(i))},a=i=>{m(d=>({...d,...i}))};function h(i){const d=o||De(i);return{transition:`height ${d}ms ${n}, opacity ${d}ms ${n}`}}Ee(()=>{typeof I=="function"&&I(t?()=>{a({willChange:"height",display:"block",overflow:"hidden"}),I(()=>{const i=M(l);a({...h(i),height:i})})}:()=>{const i=M(l);a({...h(i),willChange:"height",height:i}),I(()=>a({height:c,overflow:"hidden"}))})},[t]);const v=i=>{if(!(i.target!==l.current||i.propertyName!=="height"))if(t){const d=M(l);d===r.height?m({}):a({height:d}),e()}else r.height===c&&(m(p),e())};function g({style:i={},refKey:d="ref",...u}={}){const x=u[d];return{"aria-hidden":!t,...u,[d]:be(l,x),onTransitionEnd:v,style:{boxSizing:"border-box",...i,...r}}}return g}const Te={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},ie=w((o,n)=>{const{children:e,in:t,transitionDuration:l,transitionTimingFunction:c,style:p,onTransitionEnd:r,animateOpacity:s,...m}=C("Collapse",Te,o),a=oe(),h=Ae(),g=(a.respectReducedMotion?h:!1)?0:l,i=_e({opened:t,transitionDuration:g,transitionTimingFunction:c,onTransitionEnd:r});return g===0?t?f.createElement(S,{...m},e):null:f.createElement(S,{...i({style:{opacity:t||!s?1:0,transition:s?`opacity ${g}ms ${c}`:"none",...xe(p,a)},ref:n,...m})},e)});ie.displayName="@mantine/core/Collapse";const[Me,L]=ae("Accordion component was not found in the tree");function U({style:o,size:n=16,...e}){return f.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...o,width:j(n),height:j(n),display:"block"},...e},f.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}U.displayName="@mantine/core/AccordionChevron";const[$e,ce]=ae("Accordion.Item component was not found in the tree");var k={root:"m-9bdbb667",panel:"m-df78851f",content:"m-4ba554d4",itemTitle:"m-8fa820a0",control:"m-4ba585b8","control--default":"m-6939a5e9","control--contained":"m-4271d21b",label:"m-df3ffa0f",chevron:"m-3f35ae96",icon:"m-9bd771fe",item:"m-9bd7b098","item--default":"m-fe19b709","item--contained":"m-1f921b3b","item--filled":"m-2cdf939a","item--separated":"m-9f59b069"};const je={},V=w((o,n)=>{const{classNames:e,className:t,style:l,styles:c,vars:p,chevron:r,icon:s,onClick:m,onKeyDown:a,children:h,disabled:v,mod:g,...i}=C("AccordionControl",je,o),{value:d}=ce(),u=L(),x=u.isItemActive(d),G=typeof u.order=="number",_=`h${u.order}`,N=f.createElement(Se,{...i,...u.getStyles("control",{className:t,classNames:e,style:l,styles:c,variant:u.variant}),unstyled:u.unstyled,mod:["accordion-control",{active:x,"chevron-position":u.chevronPosition,disabled:v},g],ref:n,onClick:P=>{m==null||m(P),u.onChange(d)},type:"button",disabled:v,"aria-expanded":x,"aria-controls":u.getRegionId(d),id:u.getControlId(d),onKeyDown:Re({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:u.loop,orientation:"vertical",onKeyDown:a})},f.createElement(S,{component:"span",mod:{rotate:!u.disableChevronRotation&&x,position:u.chevronPosition},...u.getStyles("chevron",{classNames:e,styles:c})},r||u.chevron),f.createElement("span",{...u.getStyles("label",{classNames:e,styles:c})},h),s&&f.createElement(S,{component:"span",mod:{"chevron-position":u.chevronPosition},...u.getStyles("icon",{classNames:e,styles:c})},s));return G?f.createElement(_,{...u.getStyles("itemTitle",{classNames:e,styles:c})},N):N});V.displayName="@mantine/core/AccordionControl";V.classes=k;const Be={},H=w((o,n)=>{const{classNames:e,className:t,style:l,styles:c,vars:p,value:r,mod:s,...m}=C("AccordionItem",Be,o),a=L();return f.createElement($e,{value:{value:r}},f.createElement(S,{ref:n,mod:[{active:a.isItemActive(r)},s],...a.getStyles("item",{className:t,classNames:e,styles:c,style:l,variant:a.variant}),...m}))});H.displayName="@mantine/core/AccordionItem";H.classes=k;const Le={},q=w((o,n)=>{const{classNames:e,className:t,style:l,styles:c,vars:p,children:r,...s}=C("AccordionPanel",Le,o),{value:m}=ce(),a=L();return f.createElement(ie,{ref:n,...a.getStyles("panel",{className:t,classNames:e,style:l,styles:c}),...s,in:a.isItemActive(m),transitionDuration:a.transitionDuration??200,role:"region",id:a.getRegionId(m),"aria-labelledby":a.getControlId(m)},f.createElement("div",{...a.getStyles("content",{classNames:e,styles:c})},r))});q.displayName="@mantine/core/AccordionPanel";q.classes=k;const Ue={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:f.createElement(U,null)},Ve=se((o,{transitionDuration:n,chevronSize:e,radius:t})=>({root:{"--accordion-transition-duration":n===void 0?void 0:`${n}ms`,"--accordion-chevron-size":e===void 0?void 0:j(e),"--accordion-radius":t===void 0?void 0:ve(t)}}));function y(o){const n=C("Accordion",Ue,o),{classNames:e,className:t,style:l,styles:c,unstyled:p,vars:r,children:s,multiple:m,value:a,defaultValue:h,onChange:v,id:g,loop:i,transitionDuration:d,disableChevronRotation:u,chevronPosition:x,chevronSize:G,order:_,chevron:N,variant:P,radius:We,...de}=n,T=ge(g),[b,ue]=Ie({value:a,defaultValue:h,finalValue:m?[]:null,onChange:v}),me=A=>Array.isArray(b)?b.includes(A):A===b,pe=A=>{const fe=Array.isArray(b)?b.includes(A)?b.filter(he=>he!==A):[...b,A]:A===b?null:A;ue(fe)},W=re({name:"Accordion",classes:k,props:n,className:t,style:l,classNames:e,styles:c,unstyled:p,vars:r,varsResolver:Ve});return f.createElement(Me,{value:{isItemActive:me,onChange:pe,getControlId:Z(`${T}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:Z(`${T}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:d,disableChevronRotation:u,chevronPosition:x,order:_,chevron:N,loop:i,getStyles:W,variant:P,unstyled:p}},f.createElement(S,{...W("root"),id:T,...de,variant:P,"data-accordion":!0},s))}const He=o=>o;y.extend=He;y.classes=k;y.displayName="@mantine/core/Accordion";y.Item=H;y.Panel=q;y.Control=V;y.Chevron=U;var le={root:"m-6d731127"};const qe={gap:"md",align:"stretch",justify:"flex-start"},ze=se((o,{gap:n,align:e,justify:t})=>({root:{"--stack-gap":ye(n),"--stack-align":e,"--stack-justify":t}})),z=w((o,n)=>{const e=C("Stack",qe,o),{classNames:t,className:l,style:c,styles:p,unstyled:r,vars:s,align:m,justify:a,gap:h,variant:v,...g}=e,i=re({name:"Stack",props:e,classes:le,className:l,style:c,classNames:t,styles:p,unstyled:r,vars:s,varsResolver:ze});return f.createElement(S,{ref:n,...i("root"),variant:v,...g})});z.classes=le;z.displayName="@mantine/core/Stack";/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Oe=ne("outline","alert-triangle","IconAlertTriangle",[["path",{d:"M12 9v4",key:"svg-0"}],["path",{d:"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ge=ne("outline","backhoe","IconBackhoe",[["path",{d:"M4 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M13 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M13 19l-9 0",key:"svg-2"}],["path",{d:"M4 15l9 0",key:"svg-3"}],["path",{d:"M8 12v-5h2a3 3 0 0 1 3 3v5",key:"svg-4"}],["path",{d:"M5 15v-2a1 1 0 0 1 1 -1h7",key:"svg-5"}],["path",{d:"M21.12 9.88l-3.12 -4.88l-5 5",key:"svg-6"}],["path",{d:"M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z",key:"svg-7"}]]),$={};const F=$.NEXT_PUBLIC_NODE_ENV==="development"||$.VERCEL_ENV==="development"||$.DEBUG==="true",O=({children:o,title:n="Debug Information",debugMode:e=F,isError:t=!1})=>{const l=oe();if(!e||!o)return null;const c=t?E.jsx(Oe,{color:l.colors.red[7]}):E.jsx(Ge,{});return E.jsx(y,{m:"xs",variant:"separated",children:E.jsxs(y.Item,{value:"default",children:[E.jsx(y.Control,{icon:c,children:n}),E.jsx(y.Panel,{children:E.jsxs(z,{children:[o,E.jsxs(we,{size:"xs",c:"dimmed",children:["This error panel should only exist in DEBUG modes. If you are seeing this in production, please contact support.",E.jsx("br",{}),"isDevelopment: ",F.toString()]})]})})]})})};O.displayName="DebugPanel";O.__docgenInfo={description:"",methods:[],displayName:"DebugPanel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Debug Information"',computed:!1}},debugMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:`process.env.NODE_ENV === "development" ||
process.env.NEXT_PUBLIC_NODE_ENV === "development" ||
process.env.VERCEL_ENV === "development" ||
process.env.DEBUG === "true"`,computed:!1}},isError:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const nt={component:O},R={args:{title:"Ship Status",isError:!1,children:"All systems normal"}},D={args:{title:"Ship Status",isError:!0,children:"Engines are down! Ship is going down!"}};var J,Q,Y;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: "Ship Status",
    isError: false,
    children: "All systems normal"
  }
}`,...(Y=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var K,ee,te;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: "Ship Status",
    isError: true,
    children: "Engines are down! Ship is going down!"
  }
}`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const rt=["Default","Error"];export{R as Default,D as Error,rt as __namedExportsOrder,nt as default};
