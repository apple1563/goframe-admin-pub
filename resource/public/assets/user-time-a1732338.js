import{d as m,i as a,E as O,G as y,H as d}from"./index-812ea633.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.5 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM6 7.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm12 7a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12.5 18a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zM8 16a4 4 0 00-4 4h7.05v2H2v-2a6 6 0 016-6h3v2H8zm11-.25v1.84L20.41 19 19 20.41l-2-2v-2.66h2z"}}]},b=m({name:"UserTimeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:c}=O(t),p=a(()=>["t-icon","t-icon-user-time",i.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(g,u.value)}});export{b as default};
