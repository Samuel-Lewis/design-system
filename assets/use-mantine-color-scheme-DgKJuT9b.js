import{r as c}from"./index-l2PZgWEW.js";import{M as w,u as C}from"./MantineThemeProvider-1nrFSpLT.js";import{u as S}from"./use-isomorphic-effect-D_MaFt8y.js";function p(o,e){return S("(prefers-color-scheme: dark)",o==="dark",e)?"dark":"light"}function l(o){const e=document.createElement("style");return e.setAttribute("data-mantine-styles","inline"),e.innerHTML="*, *::before, *::after {transition: none !important;}",e.setAttribute("data-mantine-disable-transition","true"),o&&e.setAttribute("nonce",o),document.head.appendChild(e),()=>document.querySelectorAll("[data-mantine-disable-transition]").forEach(t=>t.remove())}function E({keepTransitions:o}={}){const e=c.useRef(),n=c.useRef(),t=c.useContext(w),i=C(),a=c.useRef(i==null?void 0:i());if(!t)throw new Error("[@mantine/core] MantineProvider was not found in tree");const u=r=>{t.setColorScheme(r),e.current=o?()=>{}:l(a.current),window.clearTimeout(n.current),n.current=window.setTimeout(()=>{var m;(m=e.current)==null||m.call(e)},10)},d=()=>{t.clearColorScheme(),e.current=o?()=>{}:l(a.current),window.clearTimeout(n.current),n.current=window.setTimeout(()=>{var r;(r=e.current)==null||r.call(e)},10)},h=p("light",{getInitialValueInEffect:!1}),s=t.colorScheme==="auto"?h:t.colorScheme,f=c.useCallback(()=>u(s==="light"?"dark":"light"),[u,s]);return c.useEffect(()=>()=>{var r;(r=e.current)==null||r.call(e),window.clearTimeout(n.current)},[]),{colorScheme:t.colorScheme,setColorScheme:u,clearColorScheme:d,toggleColorScheme:f}}export{p as a,E as u};