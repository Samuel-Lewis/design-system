import{r as $,R as j}from"./index-Dl6G-zuu.js";import{f as B,u as N,d,a as S,B as _,c as z}from"./polymorphic-factory-DyqZBuhA.js";function E(r){return $.Children.toArray(r).filter(Boolean)}var u={root:"m-4081bf90"};const O={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},P=z((r,{grow:s,preventGrowOverflow:e,gap:t,align:o,justify:a,wrap:l},{childWidth:n})=>({root:{"--group-child-width":s&&e?n:void 0,"--group-gap":d(t),"--group-align":o,"--group-justify":a,"--group-wrap":l}})),f=B((r,s)=>{const e=N("Group",O,r),{classNames:t,className:o,style:a,styles:l,unstyled:n,children:g,gap:m,align:W,justify:b,wrap:A,grow:h,preventGrowOverflow:F,vars:y,variant:v,__size:w,mod:G,...x}=e,c=E(g),i=c.length,p=d(m??"md"),C={childWidth:`calc(${100/i}% - (${p} - ${p} / ${i}))`},R=S({name:"Group",props:e,stylesCtx:C,className:o,style:a,classes:u,classNames:t,styles:l,unstyled:n,vars:y,varsResolver:P});return j.createElement(_,{...R("root"),ref:s,variant:v,mod:[{grow:h},G],size:w,...x},c)});f.classes=u;f.displayName="@mantine/core/Group";export{f as G};
