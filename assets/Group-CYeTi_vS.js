import{j as _}from"./MantineThemeProvider-DqTzCzmZ.js";import{r as $}from"./index-l2PZgWEW.js";import{f as B,u as N,d,a as R,B as S,c as z}from"./polymorphic-factory-C71Jk2XL.js";function E(r){return $.Children.toArray(r).filter(Boolean)}var u={root:"m_4081bf90"};const O={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},P=z((r,{grow:o,preventGrowOverflow:s,gap:t,align:e,justify:a,wrap:l},{childWidth:n})=>({root:{"--group-child-width":o&&s?n:void 0,"--group-gap":d(t),"--group-align":e,"--group-justify":a,"--group-wrap":l}})),f=B((r,o)=>{const s=N("Group",O,r),{classNames:t,className:e,style:a,styles:l,unstyled:n,children:m,gap:g,align:W,justify:b,wrap:A,grow:h,preventGrowOverflow:F,vars:y,variant:v,__size:w,mod:x,...G}=s,i=E(m),c=i.length,p=d(g??"md"),j={childWidth:`calc(${100/c}% - (${p} - ${p} / ${c}))`},C=R({name:"Group",props:s,stylesCtx:j,className:e,style:a,classes:u,classNames:t,styles:l,unstyled:n,vars:y,varsResolver:P});return _.jsx(S,{...C("root"),ref:o,variant:v,mod:[{grow:h},x],size:w,...G,children:i})});f.classes=u;f.displayName="@mantine/core/Group";export{f as G};