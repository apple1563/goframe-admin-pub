import{d as f,i as a,E as d,G as m,H as O}from"./index-fd6a2e45.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h7v2H4v5H2V2zm13 0h7v7h-2V4h-5V2zM9 8v8H7V8h2zm4 0v8h-2V8h2zm4 0v8h-2V8h2zM4 15v5h5v2H2v-7h2zm18 0v7h-7v-2h5v-5h2z"}}]},g=f({name:"Barcode1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=d(t),s=a(()=>["t-icon","t-icon-barcode-1",o.value]),p=a(()=>c(c({},v.value),r.style)),u=a(()=>({class:s.value,style:p.value,onClick:h=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:h})}}));return()=>m(y,u.value)}});export{g as default};
