import{d as O,i as a,E as y,G as m,H as d}from"./index-fd6a2e45.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 1.84l6.07 3.55L22 2.5v15.57l-7 4.09-6.07-3.55L2 21.5V5.93l7-4.09zM4 7.07V18.5l5.07-2.11L15 19.84l5-2.91V5.5l-5.07 2.11L9 4.16 4 7.07z"}}]},P=O({name:"MapOutlineIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:p}=y(r),c=a(()=>["t-icon","t-icon-map-outline",l.value]),u=a(()=>s(s({},p.value),t.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{P as default};
