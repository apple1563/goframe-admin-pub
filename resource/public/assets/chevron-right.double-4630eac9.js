import{_ as O}from"./dep-f0c03047-1764bf98.js";import{d,i as o,E as m,G as y}from"./index-812ea633.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.59 16.5l4.5-4.5-4.5-4.5L7 6.09 12.91 12 7 17.91 5.59 16.5zm6.5 0l4.5-4.5-4.5-4.5 1.41-1.41L19.41 12l-5.91 5.91-1.41-1.41z"}}]},P=d({name:"ChevronRightDoubleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:s}=m(t),p=o(()=>["t-icon","t-icon-chevron-right.double",a.value]),u=o(()=>c(c({},s.value),r.style)),v=o(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(g,v.value)}});export{P as default};
