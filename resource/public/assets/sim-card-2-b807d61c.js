import{d,i as a,E as m,G as O,H as y}from"./index-fd6a2e45.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.59 1H21v22H3V5.59L7.59 1zm.82 2L5 6.41V21h14V3H8.41zM12 10a1 1 0 00-1 1v1H9v-1a3 3 0 115.15 2.1l-.03.02-1.84 1.61H15v2H9v-1.78l3.74-3.28A1 1 0 0012 10z"}}]},P=d({name:"SimCard2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:c}=m(t),p=a(()=>["t-icon","t-icon-sim-card-2",i.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,u.value)}});export{P as default};
