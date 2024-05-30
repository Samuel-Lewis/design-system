import{j as o,r as E,a as je}from"./MantineThemeProvider-BbGVjNjF.js";import{u as ke,a as de}from"./use-mantine-color-scheme-fWs1KN8r.js";import{u as pe,c as ue}from"./createReactComponent-DuH6MHoB.js";import{r as M}from"./index-CDs2tPxN.js";import{f as q,u as C,a as F,B as x,c as J,g as L,p as Ce,h as he,i as T,e as me}from"./polymorphic-factory-Jg_M7ZQi.js";import{u as ve}from"./use-uncontrolled-DdA7D4AZ.js";function Ne(s=null){const e=M.createContext(s);return[({children:i,value:a})=>o.jsx(e.Provider,{value:a,children:i}),()=>M.useContext(e)]}function $e(s,e={getInitialValueInEffect:!0}){const t=ke(s,e),{colorScheme:r}=de();return r==="auto"?t:r}const[ze,X]=Ne({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var j={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};const ie={},Ee=J((s,{size:e})=>({description:{"--input-description-size":e===void 0?void 0:`calc(${L(e)} - ${E(2)})`}})),ee=q((s,e)=>{const t=C("InputDescription",ie,s),{classNames:r,className:i,style:a,styles:v,unstyled:f,vars:y,size:g,__staticSelector:d,__inheritStyles:h=!0,variant:m,...p}=C("InputDescription",ie,t),n=X(),l=F({name:["InputWrapper",d],props:t,classes:j,className:i,style:a,classNames:r,styles:v,unstyled:f,rootSelector:"description",vars:y,varsResolver:Ee}),b=h&&(n==null?void 0:n.getStyles)||l;return o.jsx(x,{component:"p",ref:e,variant:m,size:g,...b("description",n!=null&&n.getStyles?{className:i,style:a}:void 0),...p})});ee.classes=j;ee.displayName="@mantine/core/InputDescription";const Pe={},We=J((s,{size:e})=>({error:{"--input-error-size":e===void 0?void 0:`calc(${L(e)} - ${E(2)})`}})),te=q((s,e)=>{const t=C("InputError",Pe,s),{classNames:r,className:i,style:a,styles:v,unstyled:f,vars:y,size:g,__staticSelector:d,__inheritStyles:h=!0,variant:m,...p}=t,n=F({name:["InputWrapper",d],props:t,classes:j,className:i,style:a,classNames:r,styles:v,unstyled:f,rootSelector:"error",vars:y,varsResolver:We}),l=X(),b=h&&(l==null?void 0:l.getStyles)||n;return o.jsx(x,{component:"p",ref:e,variant:m,size:g,...b("error",l!=null&&l.getStyles?{className:i,style:a}:void 0),...p})});te.classes=j;te.displayName="@mantine/core/InputError";const le={labelElement:"label"},Re=J((s,{size:e})=>({label:{"--input-label-size":L(e),"--input-asterisk-color":void 0}})),se=q((s,e)=>{const t=C("InputLabel",le,s),{classNames:r,className:i,style:a,styles:v,unstyled:f,vars:y,labelElement:g,size:d,required:h,htmlFor:m,onMouseDown:p,children:n,__staticSelector:l,variant:b,mod:$,...S}=C("InputLabel",le,t),c=F({name:["InputWrapper",l],props:t,classes:j,className:i,style:a,classNames:r,styles:v,unstyled:f,rootSelector:"label",vars:y,varsResolver:Re}),w=X(),k=(w==null?void 0:w.getStyles)||c;return o.jsxs(x,{...k("label",w!=null&&w.getStyles?{className:i,style:a}:void 0),component:g,variant:b,size:d,ref:e,htmlFor:g==="label"?m:void 0,mod:[{required:h},$],onMouseDown:_=>{p==null||p(_),!_.defaultPrevented&&_.detail>1&&_.preventDefault()},...S,children:[n,h&&o.jsx("span",{...k("required"),"aria-hidden":!0,children:" *"})]})});se.classes=j;se.displayName="@mantine/core/InputLabel";const ce={},re=q((s,e)=>{const t=C("InputPlaceholder",ce,s),{classNames:r,className:i,style:a,styles:v,unstyled:f,vars:y,__staticSelector:g,variant:d,error:h,mod:m,...p}=C("InputPlaceholder",ce,t),n=F({name:["InputPlaceholder",g],props:t,classes:j,className:i,style:a,classNames:r,styles:v,unstyled:f,rootSelector:"placeholder"});return o.jsx(x,{...n("placeholder"),mod:[{error:!!h},m],component:"span",variant:d,ref:e,...p})});re.classes=j;re.displayName="@mantine/core/InputPlaceholder";function Be(s,{hasDescription:e,hasError:t}){const r=s.findIndex(y=>y==="input"),i=s.slice(0,r),a=s.slice(r+1),v=e&&i.includes("description")||t&&i.includes("error");return{offsetBottom:e&&a.includes("description")||t&&a.includes("error"),offsetTop:v}}const Te={labelElement:"label",inputContainer:s=>s,inputWrapperOrder:["label","description","input","error"]},Le=J((s,{size:e})=>({label:{"--input-label-size":L(e),"--input-asterisk-color":void 0},error:{"--input-error-size":e===void 0?void 0:`calc(${L(e)} - ${E(2)})`},description:{"--input-description-size":e===void 0?void 0:`calc(${L(e)} - ${E(2)})`}})),ne=q((s,e)=>{const t=C("InputWrapper",Te,s),{classNames:r,className:i,style:a,styles:v,unstyled:f,vars:y,size:g,variant:d,__staticSelector:h,inputContainer:m,inputWrapperOrder:p,label:n,error:l,description:b,labelProps:$,descriptionProps:S,errorProps:c,labelElement:w,children:k,withAsterisk:_,id:A,required:D,__stylesApiProps:O,mod:K,...Y}=t,U=F({name:["InputWrapper",h],props:O||t,classes:j,className:i,style:a,classNames:r,styles:v,unstyled:f,vars:y,varsResolver:Le}),P={size:g,variant:d,__staticSelector:h},I=pe(A),Q=typeof _=="boolean"?_:D,z=(c==null?void 0:c.id)||`${I}-error`,H=(S==null?void 0:S.id)||`${I}-description`,G=I,W=!!l&&typeof l!="boolean",u=!!b,V=`${W?z:""} ${u?H:""}`,R=V.trim().length>0?V.trim():void 0,B=($==null?void 0:$.id)||`${I}-label`,Z=n&&o.jsx(se,{labelElement:w,id:B,htmlFor:G,required:Q,...P,...$,children:n},"label"),Se=u&&o.jsx(ee,{...S,...P,size:(S==null?void 0:S.size)||P.size,id:(S==null?void 0:S.id)||H,children:b},"description"),_e=o.jsx(M.Fragment,{children:m(k)},"input"),Ie=W&&M.createElement(te,{...c,...P,size:(c==null?void 0:c.size)||P.size,key:"error",id:(c==null?void 0:c.id)||z},l),we=p.map(xe=>{switch(xe){case"label":return Z;case"input":return _e;case"description":return Se;case"error":return Ie;default:return null}});return o.jsx(ze,{value:{getStyles:U,describedBy:R,inputId:G,labelId:B,...Be(p,{hasDescription:u,hasError:W})},children:o.jsx(x,{ref:e,variant:d,size:g,mod:[{error:!!l},K],...U("root"),...Y,children:we})})});ne.classes=j;ne.displayName="@mantine/core/InputWrapper";const Fe={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},Ge=J((s,e,t)=>({wrapper:{"--input-margin-top":t.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":t.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":T(e.size,"input-height"),"--input-fz":L(e.size),"--input-radius":e.radius===void 0?void 0:me(e.radius),"--input-left-section-width":e.leftSectionWidth!==void 0?E(e.leftSectionWidth):void 0,"--input-right-section-width":e.rightSectionWidth!==void 0?E(e.rightSectionWidth):void 0,"--input-padding-y":e.multiline?T(e.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":e.leftSectionPointerEvents,"--input-right-section-pointer-events":e.rightSectionPointerEvents}})),N=Ce((s,e)=>{const t=C("Input",Fe,s),{classNames:r,className:i,style:a,styles:v,unstyled:f,required:y,__staticSelector:g,__stylesApiProps:d,size:h,wrapperProps:m,error:p,disabled:n,leftSection:l,leftSectionProps:b,leftSectionWidth:$,rightSection:S,rightSectionProps:c,rightSectionWidth:w,rightSectionPointerEvents:k,leftSectionPointerEvents:_,variant:A,vars:D,pointer:O,multiline:K,radius:Y,id:U,withAria:P,withErrorStyles:I,mod:Q,inputSize:z,...H}=t,{styleProps:G,rest:W}=he(H),u=X(),V={offsetBottom:u==null?void 0:u.offsetBottom,offsetTop:u==null?void 0:u.offsetTop},R=F({name:["Input",g],props:d||t,classes:j,className:i,style:a,classNames:r,styles:v,unstyled:f,stylesCtx:V,rootSelector:"wrapper",vars:D,varsResolver:Ge}),B=P?{required:y,disabled:n,"aria-invalid":!!p,"aria-describedby":u==null?void 0:u.describedBy,id:(u==null?void 0:u.inputId)||U}:{};return o.jsxs(x,{...R("wrapper"),...G,...m,mod:[{error:!!p&&I,pointer:O,disabled:n,multiline:K,"data-with-right-section":!!S,"data-with-left-section":!!l},Q],variant:A,size:h,children:[l&&o.jsx("div",{...b,"data-position":"left",...R("section",{className:b==null?void 0:b.className,style:b==null?void 0:b.style}),children:l}),o.jsx(x,{component:"input",...W,...B,ref:e,required:y,mod:{disabled:n,error:!!p&&I},variant:A,__size:z,...R("input")}),S&&o.jsx("div",{...c,"data-position":"right",...R("section",{className:c==null?void 0:c.className,style:c==null?void 0:c.style}),children:S})]})});N.classes=j;N.Wrapper=ne;N.Label=se;N.Error=te;N.Description=ee;N.Placeholder=re;N.displayName="@mantine/core/Input";var fe={root:"m_5f75b09e",body:"m_5f6e695e",labelWrapper:"m_d3ea56bb",label:"m_8ee546b8",description:"m_328f68c0",error:"m_8e8a99cc"};const Ve=fe,ye=M.forwardRef(({__staticSelector:s,__stylesApiProps:e,className:t,classNames:r,styles:i,unstyled:a,children:v,label:f,description:y,id:g,disabled:d,error:h,size:m,labelPosition:p="left",bodyElement:n="div",labelElement:l="label",variant:b,style:$,vars:S,mod:c,...w},k)=>{const _=F({name:s,props:e,className:t,style:$,classes:fe,classNames:r,styles:i,unstyled:a});return o.jsx(x,{..._("root"),ref:k,__vars:{"--label-fz":L(m),"--label-lh":T(m,"label-lh")},mod:[{"label-position":p},c],variant:b,size:m,...w,children:o.jsxs(x,{component:n,htmlFor:n==="label"?g:void 0,..._("body"),children:[v,o.jsxs("div",{..._("labelWrapper"),"data-disabled":d||void 0,children:[f&&o.jsx(x,{component:l,htmlFor:l==="label"?g:void 0,..._("label"),"data-disabled":d||void 0,children:f}),y&&o.jsx(N.Description,{size:m,__inheritStyles:!1,..._("description"),children:y}),h&&typeof h!="boolean"&&o.jsx(N.Error,{size:m,__inheritStyles:!1,..._("error"),children:h})]})]})})});ye.displayName="@mantine/core/InlineInput";function Me({children:s,role:e}){const t=X();return t?o.jsx("div",{role:e,"aria-labelledby":t.labelId,"aria-describedby":t.describedBy,children:s}):o.jsx(o.Fragment,{children:s})}const be=M.createContext(null),qe=be.Provider,Ae=()=>M.useContext(be),De={},ae=q((s,e)=>{const{value:t,defaultValue:r,onChange:i,size:a,wrapperProps:v,children:f,readOnly:y,...g}=C("SwitchGroup",De,s),[d,h]=ve({value:t,defaultValue:r,finalValue:[],onChange:i}),m=p=>{const n=p.currentTarget.value;!y&&h(d.includes(n)?d.filter(l=>l!==n):[...d,n])};return o.jsx(qe,{value:{value:d,onChange:m,size:a},children:o.jsx(N.Wrapper,{size:a,ref:e,...v,...g,labelElement:"div",__staticSelector:"SwitchGroup",children:o.jsx(Me,{role:"group",children:f})})})});ae.classes=N.Wrapper.classes;ae.displayName="@mantine/core/SwitchGroup";var ge={root:"m_5f93f3bb",input:"m_926b4011",track:"m_9307d992",thumb:"m_93039a1d",trackLabel:"m_8277e082"};const Oe={labelPosition:"right"},Ue=J((s,{radius:e,color:t,size:r})=>({root:{"--switch-radius":e===void 0?void 0:me(e),"--switch-height":T(r,"switch-height"),"--switch-width":T(r,"switch-width"),"--switch-thumb-size":T(r,"switch-thumb-size"),"--switch-label-font-size":T(r,"switch-label-font-size"),"--switch-track-label-padding":T(r,"switch-track-label-padding"),"--switch-color":t?je(t,s):void 0}})),oe=q((s,e)=>{const t=C("Switch",Oe,s),{classNames:r,className:i,style:a,styles:v,unstyled:f,vars:y,color:g,label:d,offLabel:h,onLabel:m,id:p,size:n,radius:l,wrapperProps:b,children:$,thumbIcon:S,checked:c,defaultChecked:w,onChange:k,labelPosition:_,description:A,error:D,disabled:O,variant:K,rootRef:Y,mod:U,...P}=t,I=Ae(),Q=n||(I==null?void 0:I.size),z=F({name:"Switch",props:t,classes:ge,className:i,style:a,classNames:r,styles:v,unstyled:f,vars:y,varsResolver:Ue}),{styleProps:H,rest:G}=he(P),W=pe(p),u=I?{checked:I.value.includes(G.value),onChange:I.onChange}:{},[V,R]=ve({value:u.checked??c,defaultValue:w,finalValue:!1});return o.jsxs(ye,{...z("root"),__staticSelector:"Switch",__stylesApiProps:t,id:W,size:Q,labelPosition:_,label:d,description:A,error:D,disabled:O,bodyElement:"label",labelElement:"span",classNames:r,styles:v,unstyled:f,"data-checked":u.checked||void 0,variant:K,ref:Y,mod:U,...H,...b,children:[o.jsx("input",{...G,disabled:O,checked:V,onChange:B=>{var Z;I?(Z=u.onChange)==null||Z.call(u,B):k==null||k(B),R(B.currentTarget.checked)},id:W,ref:e,type:"checkbox",role:"switch",...z("input")}),o.jsxs(x,{"aria-hidden":"true",mod:{error:D,"label-position":_},...z("track"),children:[o.jsx(x,{component:"span",mod:"reduce-motion",...z("thumb"),children:S}),o.jsx("span",{...z("trackLabel"),children:V?m:h})]})]})});oe.classes={...ge,...Ve};oe.displayName="@mantine/core/Switch";oe.Group=ae;/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var He=ue("outline","moon-stars","IconMoonStars",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}],["path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2",key:"svg-1"}],["path",{d:"M19 11h2m-1 -1v2",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Je=ue("outline","sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]]);function Ke(){const{setColorScheme:s}=de(),e=$e("dark",{getInitialValueInEffect:!0}),t=o.jsx(Je,{style:{width:E(16),height:E(16)},stroke:2.5}),r=o.jsx(He,{style:{width:E(16),height:E(16)},stroke:2.5});return o.jsx(oe,{size:"lg",color:"dark.4",onLabel:t,offLabel:r,checked:e==="dark",onChange:()=>{s(e==="dark"?"light":"dark")}})}Ke.__docgenInfo={description:"",methods:[],displayName:"ThemeToggle"};export{Ke as T};
