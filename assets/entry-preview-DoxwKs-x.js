import{R as n,r as a}from"./index-CDs2tPxN.js";import{c as h}from"./client-Rupudqsw.js";import"./index-B-yFm4aN.js";var E=Object.defineProperty,f=(e,r)=>{for(var t in r)E(e,t,{get:r[t],enumerable:!0})},s=new Map,_=({callback:e,children:r})=>{let t=a.useRef();return a.useLayoutEffect(()=>{t.current!==e&&(t.current=e,e())},[e]),r},v=async(e,r)=>{let t=await w(r);return new Promise(o=>{t.render(n.createElement(_,{callback:()=>o(null)},e))})},u=(e,r)=>{let t=s.get(e);t&&(t.unmount(),s.delete(e))},w=async e=>{let r=s.get(e);return r||(r=h.createRoot(e),s.set(e,r)),r};const{global:g}=__STORYBOOK_MODULE_GLOBAL__;var y={};f(y,{parameters:()=>M,render:()=>x,renderToCanvas:()=>R});var x=(e,r)=>{let{id:t,component:o}=r;if(!o)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return n.createElement(o,{...e})},{FRAMEWORK_OPTIONS:c}=g,C=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:e}=this.state,{showMain:r}=this.props;e||r()}componentDidCatch(e){let{showException:r}=this.props;r(e)}render(){let{hasError:e}=this.state,{children:r}=this.props;return e?null:r}},m=c!=null&&c.strictMode?a.StrictMode:a.Fragment;async function R({storyContext:e,unboundStoryFn:r,showMain:t,showException:o,forceRemount:d},i){let p=n.createElement(C,{showMain:t,showException:o},n.createElement(r,{...e})),l=m?n.createElement(m,null,p):p;return d&&u(i),await v(l,i),()=>u(i)}var M={renderer:"react"};export{M as parameters,x as render,R as renderToCanvas};
