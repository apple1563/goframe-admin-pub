import{d as h,i as a,E as O,G as y,H as m}from"./index-812ea633.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 2v1.08A6 6 0 0118 9h4v13H2V9h4a6 6 0 015-5.92V2h2zm-1 3a4 4 0 00-4 4v2H4v9h4v-1.65a6.43 6.43 0 013.55-5.74l.45-.23.45.23A6.43 6.43 0 0116 18.35V20h4v-9h-4V9a4 4 0 00-4-4zm2 15v-1.65c0-1.5-.76-2.89-2-3.7-1.24.81-2 2.2-2 3.7V20h4zM11 8h2v2h-2V8z"}}]},P=h({name:"Palace3Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),p=a(()=>["t-icon","t-icon-palace-3",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(d,u.value)}});export{P as default};