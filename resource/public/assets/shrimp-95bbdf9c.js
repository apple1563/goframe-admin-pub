import{d as h,i as a,E as m,G as O,H as y}from"./index-fd6a2e45.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.6 6L14 9.58V5c1.32 0 2.55.36 3.6 1zM12 5v6h-2c-2.02 0-3.78-.6-5.02-1.61A5.48 5.48 0 013 5h9zm2 9.42L17.59 18A7 7 0 0114 19v-4.58zM12 17v2H8c0-1.1.9-2 2-2h2zm2 4a9.03 9.03 0 009-9 9.03 9.03 0 00-9-9H1v2c0 2.5 1.03 4.54 2.7 5.93A9.82 9.82 0 0010 13h2v2h-2a4 4 0 00-4 4v2h8zm5.15-4.26L15.41 13h5.52a6.92 6.92 0 01-1.78 3.74zM20.93 11h-5.51l3.73-3.73A7.03 7.03 0 0120.93 11zM9 6H7v2h2V6z"}}]},z=h({name:"ShrimpIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:s}=m(t),p=a(()=>["t-icon","t-icon-shrimp",i.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{z as default};
