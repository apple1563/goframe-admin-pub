import{d,i as a,E as h,G as O,H as y}from"./index-fd6a2e45.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 1v3h8V1h2v3h4v18H2V4h4V1h2zM4 6v3h16V6H4zm16 5H4v9h16v-9z"}},{tag:"path",attrs:{fill:"currentColor",d:"M16.91 13.25l-5.65 5.66-3.54-3.54 1.42-1.41 2.12 2.12 4.24-4.24 1.41 1.41z"}}]},b=d({name:"Calendar2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=h(t),p=a(()=>["t-icon","t-icon-calendar-2",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(m,u.value)}});export{b as default};
