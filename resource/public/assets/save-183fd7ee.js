import{d as O,i as a,E as m,G as y,H as h}from"./index-812ea633.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h14.41L22 7.59V22H2V2zm2 2v16h2v-6h12v6h2V8.41L15.59 4H13v4H6V4H4zm4 0v2h3V4H8zm8 16v-4H8v4h8z"}}]},b=O({name:"SaveIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=m(t),c=a(()=>["t-icon","t-icon-save",o.value]),p=a(()=>s(s({},v.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(d,u.value)}});export{b as default};
