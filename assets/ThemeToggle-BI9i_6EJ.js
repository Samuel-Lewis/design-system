import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{a as je,u as ce}from"./use-mantine-color-scheme-DjzNPPrq.js";import{r as q}from"./index-DRjF_FHU.js";import{f as A,u as N,a as L,B as x,c as J,g as T,p as ke,i as de,j as B,h as pe}from"./polymorphic-factory-BWewEH0K.js";import{r as P,a as Ce}from"./MantineThemeProvider-Dk0V1vVM.js";import{u as ue,c as he}from"./createReactComponent-B_AdouA7.js";import{u as me}from"./use-uncontrolled-dNlZsZWO.js";function Ne(s=null){const e=q.createContext(s);return[({children:i,value:a})=>o.jsx(e.Provider,{value:a,children:i}),()=>q.useContext(e)]}function $e(s,e={getInitialValueInEffect:!0}){const t=je(s,e),{colorScheme:r}=ce();return r==="auto"?t:r}const[ze,X]=Ne({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var j={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};const ae={},Ee=J((s,{size:e})=>({description:{"--input-description-size":e===void 0?void 0:`calc(${T(e)} - ${P(2)})`}})),Z=A((s,e)=>{const t=N("InputDescription",ae,s),{classNames:r,className:i,style:a,styles:m,unstyled:v,vars:f,size:b,__staticSelector:d,__inheritStyles:p=!0,variant:u,...h}=N("InputDescription",ae,t),n=X(),l=L({name:["InputWrapper",d],props:t,classes:j,className:i,style:a,classNames:r,styles:m,unstyled:v,rootSelector:"description",vars:f,varsResolver:Ee}),y=p&&(n==null?void 0:n.getStyles)||l;return o.jsx(x,{component:"p",ref:e,variant:u,size:b,...y("description",n!=null&&n.getStyles?{className:i,style:a}:void 0),...h})});Z.classes=j;Z.displayName="@mantine/core/InputDescription";const Pe={},We=J((s,{size:e})=>({error:{"--input-error-size":e===void 0?void 0:`calc(${T(e)} - ${P(2)})`}})),ee=A((s,e)=>{const t=N("InputError",Pe,s),{classNames:r,className:i,style:a,styles:m,unstyled:v,vars:f,size:b,__staticSelector:d,__inheritStyles:p=!0,variant:u,...h}=t,n=L({name:["InputWrapper",d],props:t,classes:j,className:i,style:a,classNames:r,styles:m,unstyled:v,rootSelector:"error",vars:f,varsResolver:We}),l=X(),y=p&&(l==null?void 0:l.getStyles)||n;return o.jsx(x,{component:"p",ref:e,variant:u,size:b,...y("error",l!=null&&l.getStyles?{className:i,style:a}:void 0),...h})});ee.classes=j;ee.displayName="@mantine/core/InputError";const ie={labelElement:"label"},Re=J((s,{size:e})=>({label:{"--input-label-size":T(e),"--input-asterisk-color":void 0}})),te=A((s,e)=>{const t=N("InputLabel",ie,s),{classNames:r,className:i,style:a,styles:m,unstyled:v,vars:f,labelElement:b,size:d,required:p,htmlFor:u,onMouseDown:h,children:n,__staticSelector:l,variant:y,mod:k,...g}=N("InputLabel",ie,t),c=L({name:["InputWrapper",l],props:t,classes:j,className:i,style:a,classNames:r,styles:m,unstyled:v,rootSelector:"label",vars:f,varsResolver:Re}),I=X(),z=(I==null?void 0:I.getStyles)||c;return o.jsxs(x,{...z("label",I!=null&&I.getStyles?{className:i,style:a}:void 0),component:b,variant:y,size:d,ref:e,htmlFor:b==="label"?u:void 0,mod:[{required:p},k],onMouseDown:_=>{h==null||h(_),!_.defaultPrevented&&_.detail>1&&_.preventDefault()},...g,children:[n,p&&o.jsx("span",{...z("required"),"aria-hidden":!0,children:" *"})]})});te.classes=j;te.displayName="@mantine/core/InputLabel";const le={},oe=A((s,e)=>{const t=N("InputPlaceholder",le,s),{classNames:r,className:i,style:a,styles:m,unstyled:v,vars:f,__staticSelector:b,variant:d,error:p,mod:u,...h}=N("InputPlaceholder",le,t),n=L({name:["InputPlaceholder",b],props:t,classes:j,className:i,style:a,classNames:r,styles:m,unstyled:v,rootSelector:"placeholder"});return o.jsx(x,{...n("placeholder"),mod:[{error:!!p},u],component:"span",variant:d,ref:e,...h})});oe.classes=j;oe.displayName="@mantine/core/InputPlaceholder";function Be(s,{hasDescription:e,hasError:t}){const r=s.findIndex(f=>f==="input"),i=s.slice(0,r),a=s.slice(r+1),m=e&&i.includes("description")||t&&i.includes("error");return{offsetBottom:e&&a.includes("description")||t&&a.includes("error"),offsetTop:m}}const Te={labelElement:"label",inputContainer:s=>s,inputWrapperOrder:["label","description","input","error"]},Le=J((s,{size:e})=>({label:{"--input-label-size":T(e),"--input-asterisk-color":void 0},error:{"--input-error-size":e===void 0?void 0:`calc(${T(e)} - ${P(2)})`},description:{"--input-description-size":e===void 0?void 0:`calc(${T(e)} - ${P(2)})`}})),re=A((s,e)=>{const t=N("InputWrapper",Te,s),{classNames:r,className:i,style:a,styles:m,unstyled:v,vars:f,size:b,variant:d,__staticSelector:p,inputContainer:u,inputWrapperOrder:h,label:n,error:l,description:y,labelProps:k,descriptionProps:g,errorProps:c,labelElement:I,children:z,withAsterisk:_,id:F,required:D,__stylesApiProps:K,mod:Q,...Y}=t,O=L({name:["InputWrapper",p],props:K||t,classes:j,className:i,style:a,classNames:r,styles:m,unstyled:v,vars:f,varsResolver:Le}),w={size:b,variant:d,__staticSelector:p},W=ue(F),R=typeof _=="boolean"?_:D,U=(c==null?void 0:c.id)||`${W}-error`,G=(g==null?void 0:g.id)||`${W}-description`,V=W,C=!!l&&typeof l!="boolean",S=!!y,H=`${C?U:""} ${S?G:""}`,E=H.trim().length>0?H.trim():void 0,M=(k==null?void 0:k.id)||`${W}-label`,ge=n&&o.jsx(te,{labelElement:I,id:M,htmlFor:V,required:R,...w,...k,children:n},"label"),Se=S&&o.jsx(Z,{...g,...w,size:(g==null?void 0:g.size)||w.size,id:(g==null?void 0:g.id)||G,children:y},"description"),_e=o.jsx(q.Fragment,{children:u(z)},"input"),Ie=C&&q.createElement(ee,{...c,...w,size:(c==null?void 0:c.size)||w.size,key:"error",id:(c==null?void 0:c.id)||U},l),we=h.map(xe=>{switch(xe){case"label":return ge;case"input":return _e;case"description":return Se;case"error":return Ie;default:return null}});return o.jsx(ze,{value:{getStyles:O,describedBy:E,inputId:V,labelId:M,...Be(h,{hasDescription:S,hasError:C})},children:o.jsx(x,{ref:e,variant:d,size:b,mod:[{error:!!l},Q],...O("root"),...Y,children:we})})});re.classes=j;re.displayName="@mantine/core/InputWrapper";const Fe={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},Ge=J((s,e,t)=>({wrapper:{"--input-margin-top":t.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":t.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":B(e.size,"input-height"),"--input-fz":T(e.size),"--input-radius":e.radius===void 0?void 0:pe(e.radius),"--input-left-section-width":e.leftSectionWidth!==void 0?P(e.leftSectionWidth):void 0,"--input-right-section-width":e.rightSectionWidth!==void 0?P(e.rightSectionWidth):void 0,"--input-padding-y":e.multiline?B(e.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":e.leftSectionPointerEvents,"--input-right-section-pointer-events":e.rightSectionPointerEvents}})),$=ke((s,e)=>{const t=N("Input",Fe,s),{classNames:r,className:i,style:a,styles:m,unstyled:v,required:f,__staticSelector:b,__stylesApiProps:d,size:p,wrapperProps:u,error:h,disabled:n,leftSection:l,leftSectionProps:y,leftSectionWidth:k,rightSection:g,rightSectionProps:c,rightSectionWidth:I,rightSectionPointerEvents:z,leftSectionPointerEvents:_,variant:F,vars:D,pointer:K,multiline:Q,radius:Y,id:O,withAria:w,withErrorStyles:W,mod:R,inputSize:U,...G}=t,{styleProps:V,rest:C}=de(G),S=X(),H={offsetBottom:S==null?void 0:S.offsetBottom,offsetTop:S==null?void 0:S.offsetTop},E=L({name:["Input",b],props:d||t,classes:j,className:i,style:a,classNames:r,styles:m,unstyled:v,stylesCtx:H,rootSelector:"wrapper",vars:D,varsResolver:Ge}),M=w?{required:f,disabled:n,"aria-invalid":!!h,"aria-describedby":S==null?void 0:S.describedBy,id:(S==null?void 0:S.inputId)||O}:{};return o.jsxs(x,{...E("wrapper"),...V,...u,mod:[{error:!!h&&W,pointer:K,disabled:n,multiline:Q,"data-with-right-section":!!g,"data-with-left-section":!!l},R],variant:F,size:p,children:[l&&o.jsx("div",{...y,"data-position":"left",...E("section",{className:y==null?void 0:y.className,style:y==null?void 0:y.style}),children:l}),o.jsx(x,{component:"input",...C,...M,ref:e,required:f,mod:{disabled:n,error:!!h&&W},variant:F,__size:U,...E("input")}),g&&o.jsx("div",{...c,"data-position":"right",...E("section",{className:c==null?void 0:c.className,style:c==null?void 0:c.style}),children:g})]})});$.classes=j;$.Wrapper=re;$.Label=te;$.Error=ee;$.Description=Z;$.Placeholder=oe;$.displayName="@mantine/core/Input";var ve={root:"m_5f75b09e",body:"m_5f6e695e",labelWrapper:"m_d3ea56bb",label:"m_8ee546b8",description:"m_328f68c0",error:"m_8e8a99cc"};const Ve=ve,fe=q.forwardRef(({__staticSelector:s,__stylesApiProps:e,className:t,classNames:r,styles:i,unstyled:a,children:m,label:v,description:f,id:b,disabled:d,error:p,size:u,labelPosition:h="left",bodyElement:n="div",labelElement:l="label",variant:y,style:k,vars:g,mod:c,...I},z)=>{const _=L({name:s,props:e,className:t,style:k,classes:ve,classNames:r,styles:i,unstyled:a});return o.jsx(x,{..._("root"),ref:z,__vars:{"--label-fz":T(u),"--label-lh":B(u,"label-lh")},mod:[{"label-position":h},c],variant:y,size:u,...I,children:o.jsxs(x,{component:n,htmlFor:n==="label"?b:void 0,..._("body"),children:[m,o.jsxs("div",{..._("labelWrapper"),"data-disabled":d||void 0,children:[v&&o.jsx(x,{component:l,htmlFor:l==="label"?b:void 0,..._("label"),"data-disabled":d||void 0,children:v}),f&&o.jsx($.Description,{size:u,__inheritStyles:!1,..._("description"),children:f}),p&&typeof p!="boolean"&&o.jsx($.Error,{size:u,__inheritStyles:!1,..._("error"),children:p})]})]})})});fe.displayName="@mantine/core/InlineInput";function Me({children:s,role:e}){const t=X();return t?o.jsx("div",{role:e,"aria-labelledby":t.labelId,"aria-describedby":t.describedBy,children:s}):o.jsx(o.Fragment,{children:s})}const ye=q.createContext(null),qe=ye.Provider,Ae=()=>q.useContext(ye),De={},ne=A((s,e)=>{const{value:t,defaultValue:r,onChange:i,size:a,wrapperProps:m,children:v,readOnly:f,...b}=N("SwitchGroup",De,s),[d,p]=me({value:t,defaultValue:r,finalValue:[],onChange:i}),u=h=>{const n=h.currentTarget.value;!f&&p(d.includes(n)?d.filter(l=>l!==n):[...d,n])};return o.jsx(qe,{value:{value:d,onChange:u,size:a},children:o.jsx($.Wrapper,{size:a,ref:e,...m,...b,labelElement:"div",__staticSelector:"SwitchGroup",children:o.jsx(Me,{role:"group",children:v})})})});ne.classes=$.Wrapper.classes;ne.displayName="@mantine/core/SwitchGroup";var be={root:"m_5f93f3bb",input:"m_926b4011",track:"m_9307d992",thumb:"m_93039a1d",trackLabel:"m_8277e082"};const Oe={labelPosition:"right"},Ue=J((s,{radius:e,color:t,size:r})=>({root:{"--switch-radius":e===void 0?void 0:pe(e),"--switch-height":B(r,"switch-height"),"--switch-width":B(r,"switch-width"),"--switch-thumb-size":B(r,"switch-thumb-size"),"--switch-label-font-size":B(r,"switch-label-font-size"),"--switch-track-label-padding":B(r,"switch-track-label-padding"),"--switch-color":t?Ce(t,s):void 0}})),se=A((s,e)=>{const t=N("Switch",Oe,s),{classNames:r,className:i,style:a,styles:m,unstyled:v,vars:f,color:b,label:d,offLabel:p,onLabel:u,id:h,size:n,radius:l,wrapperProps:y,thumbIcon:k,checked:g,defaultChecked:c,onChange:I,labelPosition:z,description:_,error:F,disabled:D,variant:K,rootRef:Q,mod:Y,...O}=t,w=Ae(),W=n||(w==null?void 0:w.size),R=L({name:"Switch",props:t,classes:be,className:i,style:a,classNames:r,styles:m,unstyled:v,vars:f,varsResolver:Ue}),{styleProps:U,rest:G}=de(O),V=ue(h),C=w?{checked:w.value.includes(G.value),onChange:w.onChange}:{},[S,H]=me({value:C.checked??g,defaultValue:c,finalValue:!1});return o.jsxs(fe,{...R("root"),__staticSelector:"Switch",__stylesApiProps:t,id:V,size:W,labelPosition:z,label:d,description:_,error:F,disabled:D,bodyElement:"label",labelElement:"span",classNames:r,styles:m,unstyled:v,"data-checked":C.checked||void 0,variant:K,ref:Q,mod:Y,...U,...y,children:[o.jsx("input",{...G,disabled:D,checked:S,onChange:E=>{var M;w?(M=C.onChange)==null||M.call(C,E):I==null||I(E),H(E.currentTarget.checked)},id:V,ref:e,type:"checkbox",role:"switch",...R("input")}),o.jsxs(x,{"aria-hidden":"true",mod:{error:F,"label-position":z,"without-labels":!u&&!p},...R("track"),children:[o.jsx(x,{component:"span",mod:"reduce-motion",...R("thumb"),children:k}),o.jsx("span",{...R("trackLabel"),children:S?u:p})]})]})});se.classes={...be,...Ve};se.displayName="@mantine/core/Switch";se.Group=ne;/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var He=he("outline","moon-stars","IconMoonStars",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}],["path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2",key:"svg-1"}],["path",{d:"M19 11h2m-1 -1v2",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.24.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Je=he("outline","sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]]);function Ke(){const{setColorScheme:s}=ce(),e=$e("dark",{getInitialValueInEffect:!0}),t=o.jsx(Je,{style:{width:P(16),height:P(16)},stroke:2.5}),r=o.jsx(He,{style:{width:P(16),height:P(16)},stroke:2.5});return o.jsx(se,{size:"lg",color:"dark.4",onLabel:t,offLabel:r,checked:e==="dark",onChange:()=>{s(e==="dark"?"light":"dark")}})}Ke.__docgenInfo={description:"",methods:[],displayName:"ThemeToggle"};export{Ke as T};