import{d as O,i as a,E as m,G as y,H as d}from"./index-812ea633.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 00-5.61 16.04L8.23 12H10V8.59l2-2 2 2V12h1.77l1.84 7.04A9 9 0 0012 3zm3.83 17.15L14.23 14H9.77l-1.6 6.15a8.96 8.96 0 007.66 0zM1 12a11 11 0 1122 0 11 11 0 01-22 0z"}}]},P=O({name:"MarkupIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=m(t),c=a(()=>["t-icon","t-icon-markup",l.value]),u=a(()=>s(s({},p.value),r.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(g,v.value)}});export{P as default};
