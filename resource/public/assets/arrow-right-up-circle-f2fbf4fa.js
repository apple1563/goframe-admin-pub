import{d as O,i as a,E as y,G as g,H as d}from"./index-812ea633.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M21 12a9 9 0 10-18 0 9 9 0 0018 0zM12 1a11 11 0 110 22 11 11 0 010-22zm.77 8.82H8.53v-2h7.65v7.66h-2v-4.25L8.82 16.6 7.4 15.18l5.37-5.36z"}}]},w=O({name:"ArrowRightUpCircleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:s}=y(t),p=a(()=>["t-icon","t-icon-arrow-right-up-circle",i.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>g(h,v.value)}});export{w as default};
