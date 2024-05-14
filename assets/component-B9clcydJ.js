import{r as f}from"./index-CDs2tPxN.js";var s=function(){return s=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)};function b(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function G(n,e,t){if(t||arguments.length===2)for(var r=0,o=e.length,a;r<o;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return n.concat(a||Array.prototype.slice.call(e))}var l="right-scroll-bar-position",v="width-before-scroll-bar",S="with-scroll-bars-hidden",w="--removed-body-scroll-bar-size";function E(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function x(n,e){var t=f.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(r){var o=t.value;o!==r&&(t.value=r,t.callback(r,o))}}}})[0];return t.callback=e,t.facade}function Q(n,e){return x(e||null,function(t){return n.forEach(function(r){return E(r,t)})})}function C(n){return n}function O(n,e){e===void 0&&(e=C);var t=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(a){var i=e(a,r);return t.push(i),function(){t=t.filter(function(c){return c!==i})}},assignSyncMedium:function(a){for(r=!0;t.length;){var i=t;t=[],i.forEach(a)}t={push:function(c){return a(c)},filter:function(){return t}}},assignMedium:function(a){r=!0;var i=[];if(t.length){var c=t;t=[],c.forEach(a),i=t}var y=function(){var d=i;i=[],d.forEach(a)},p=function(){return Promise.resolve().then(y)};p(),t={push:function(d){i.push(d),p()},filter:function(d){return i=i.filter(d),t}}}};return o}function F(n){n===void 0&&(n={});var e=O(null);return e.options=s({async:!0,ssr:!1},n),e}var m=function(n){var e=n.sideCar,t=b(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return f.createElement(r,s({},t))};m.isSideCarExport=!0;function H(n,e){return n.useMedium(e),m}var _=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function k(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=_();return e&&n.setAttribute("nonce",e),n}function A(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function R(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var j=function(){var n=0,e=null;return{add:function(t){n==0&&(e=k())&&(A(e,t),R(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},N=function(){var n=j();return function(e,t){f.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},T=function(){var n=N(),e=function(t){var r=t.styles,o=t.dynamic;return n(r,o),null};return e},I={left:0,top:0,right:0,gap:0},g=function(n){return parseInt(n||"",10)||0},W=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],r=e[n==="padding"?"paddingTop":"marginTop"],o=e[n==="padding"?"paddingRight":"marginRight"];return[g(t),g(r),g(o)]},z=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return I;var e=W(n),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-t+e[2]-e[0])}},M=T(),u="data-scroll-locked",P=function(n,e,t,r){var o=n.left,a=n.top,i=n.right,c=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(S,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body[`).concat(u,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(l,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(v,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(l," .").concat(l,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(v," .").concat(v,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(u,`] {
    `).concat(w,": ").concat(c,`px;
  }
`)},h=function(){var n=parseInt(document.body.getAttribute(u)||"0",10);return isFinite(n)?n:0},B=function(){f.useEffect(function(){return document.body.setAttribute(u,(h()+1).toString()),function(){var n=h()-1;n<=0?document.body.removeAttribute(u):document.body.setAttribute(u,n.toString())}},[])},U=function(n){var e=n.noRelative,t=n.noImportant,r=n.gapMode,o=r===void 0?"margin":r;B();var a=f.useMemo(function(){return z(o)},[o]);return f.createElement(M,{styles:P(a,!e,o,t?"":"!important")})};export{U as R,b as _,s as a,G as b,F as c,H as e,v as f,T as s,Q as u,l as z};
