import{r as n}from"./index-Dl6G-zuu.js";function c(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch{return e.addListener(t),()=>e.removeListener(t)}}function f(e,t){return typeof t=="boolean"?t:typeof window<"u"&&"matchMedia"in window?window.matchMedia(e).matches:!1}function d(e,t,{getInitialValueInEffect:i}={getInitialValueInEffect:!0}){const[o,a]=n.useState(i?t:f(e)),r=n.useRef();return n.useEffect(()=>{if("matchMedia"in window)return r.current=window.matchMedia(e),a(r.current.matches),c(r.current,s=>a(s.matches))},[e]),o}const h=typeof document<"u"?n.useLayoutEffect:n.useEffect;export{h as a,d as u};
