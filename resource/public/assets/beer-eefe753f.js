import{d as h,i as a,E as O,G as y,H as d}from"./index-812ea633.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.15 4c.52-1.7 2.32-3 4.35-3a5.19 5.19 0 014.05 2h.95A3.5 3.5 0 0118 6.5v.01c0 .24 0 .87-.12 1.49H19a2 2 0 011.47.56c.42.43.53.98.53 1.46V18c0 .48-.11 1.03-.53 1.46A2 2 0 0119 20h-2v1c0 .48-.11 1.03-.53 1.46A2 2 0 0115 23H6a2 2 0 01-1.47-.54A2.01 2.01 0 014 21v-5.17A3 3 0 012 13V7a3 3 0 013-3h.15zM6 15.83V21h9V10H8v3a3 3 0 01-2 2.83zM17 10v8h2v-7.98V10h-2zm-1.18-2l.08-.28A6 6 0 0016 6.5c0-.83-.67-1.5-1.5-1.5h-2.12l-.27-.55A3.2 3.2 0 009.5 3C7.96 3 6.99 4.15 6.99 5v1H5a1 1 0 00-1 1v6a1 1 0 102 0V8h9.82z"}}]},g=h({name:"BeerIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),v=a(()=>["t-icon","t-icon-beer",o.value]),p=a(()=>i(i({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(m,u.value)}});export{g as default};
