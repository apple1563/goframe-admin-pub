import{d as O,i as a,E as m,G as y,H as d}from"./index-812ea633.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M21 1v22H3V1h18zm-8 2v6.5l-3-2.25L7 9.5V3H5v18h14V3h-6zM9 3v2.5l1-.75 1 .75V3H9zm-2 9h10v2H7v-2zm0 4h8v2H7v-2z"}}]},b=O({name:"Certificate1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:s}=m(r),v=a(()=>["t-icon","t-icon-certificate-1",i.value]),p=a(()=>c(c({},s.value),t.style)),f=a(()=>({class:v.value,style:p.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>y(h,f.value)}});export{b as default};
