import{d as m,i as a,E as O,G as y,H as d}from"./index-fd6a2e45.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.38 4.97l2.86 2.86a5 5 0 015.52 0l2.86-2.86a9 9 0 00-11.24 0zm12.65 1.41l-2.86 2.86a5 5 0 010 5.52l2.86 2.86a9 9 0 000-11.24zm-1.41 12.65l-2.86-2.86a5 5 0 01-5.52 0l-2.86 2.86a9 9 0 0011.24 0zM4.97 17.62l2.86-2.86a5 5 0 010-5.52L4.97 6.38a9 9 0 000 11.24zm-.75-13.4a11 11 0 1115.56 15.56A11 11 0 014.22 4.22zm9.9 5.66a3 3 0 10-4.24 4.24 3 3 0 004.24-4.24z"}}]},P=m({name:"SupportIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),c=a(()=>["t-icon","t-icon-support",l.value]),u=a(()=>p(p({},s.value),r.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(g,v.value)}});export{P as default};
