import{d,i as a,E as h,G as O,H as y}from"./index-fd6a2e45.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.89 1.86l8.08 3.54L22 2.38V11h-2V5.62l-3 1.5V11h-2V7.15L9 4.53v10.85l2.34 1.17-.9 1.8-2.4-1.21L2 20.77V5.97l5.89-4.11zM7 15.43V4.93l-3 2.1v10.2l3-1.8zM19 12v4h4v2h-4v4h-2v-4h-4v-2h4v-4h2z"}}]},b=d({name:"MapAddIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=h(t),c=a(()=>["t-icon","t-icon-map-add",l.value]),v=a(()=>s(s({},p.value),r.style)),u=a(()=>({class:c.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(m,u.value)}});export{b as default};
