import{d as O,i as a,E as m,G as y,H as h}from"./index-9f7c584d.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 8a8 8 0 1116 0v4.7l2 3V20h-5.61a4.5 4.5 0 01-8.78 0H2v-4.3l2-3V8zm16 10v-1.7l-2-3V8A6 6 0 006 8v5.3l-2 3V18h16zm-5.7 2H9.7a2.5 2.5 0 004.6 0zM13 6v6h-2V6h2zm-2 7.5h2v2h-2v-2z"}}]},b=O({name:"NotificationErrorIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=m(t),p=a(()=>["t-icon","t-icon-notification-error",o.value]),v=a(()=>c(c({},s.value),r.style)),f=a(()=>({class:p.value,style:v.value,onClick:u=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:u})}}));return()=>y(d,f.value)}});export{b as default};
