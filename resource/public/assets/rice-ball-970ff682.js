import{d as O,i as a,E as h,G as y,H as m}from"./index-fd6a2e45.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9.02 2.4A4.09 4.09 0 0112 1c1.11 0 2.15.52 2.98 1.4a35.87 35.87 0 014.8 6.78 27.84 27.84 0 013.11 7.93c.15.8.17 1.63-.1 2.43-.29.81-.83 1.5-1.63 2.1-.37.28-.92.46-1.44.6-.58.14-1.28.27-2.07.39a42.8 42.8 0 01-11.3 0c-.79-.12-1.5-.25-2.07-.4a4.32 4.32 0 01-1.44-.59 4.45 4.45 0 01-1.62-2.1 4.7 4.7 0 01-.11-2.43 27.85 27.85 0 013.11-7.93 35.87 35.87 0 014.8-6.78zM12 3c-.46 0-1 .2-1.52.77a33.9 33.9 0 00-4.51 6.39 25.91 25.91 0 00-2.9 7.32c-.1.6-.09 1.04.04 1.4.12.37.38.75.93 1.16l.19.09c.13.05.32.1.56.17a17.17 17.17 0 002.21.4V13h10v7.7l.37-.06a17.17 17.17 0 002.4-.51l.19-.09c.55-.41.81-.8.93-1.15.13-.37.15-.81.04-1.41-.41-2.2-1.5-4.82-2.9-7.32a33.9 33.9 0 00-4.5-6.4C13 3.22 12.45 3 12 3zm3 17.89V15H9v5.89a44.06 44.06 0 006 0zM11 5.13h2v2h-2v-2zM8.3 9.19h2v2h-2v-2zm5.4 0h2v2h-2v-2z"}}]},g=O({name:"RiceBallIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=h(t),v=a(()=>["t-icon","t-icon-rice-ball",l.value]),p=a(()=>o(o({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>y(d,u.value)}});export{g as default};
