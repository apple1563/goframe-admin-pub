import{d as y,i as a,E as O,G as h,H as d}from"./index-9f7c584d.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M14 .72V10h8v12H2V3.72l12-3zM14 20h2v-5h2v5h2v-8h-6v8zM4 5.28V20h8V3.28l-8 2zM6 8h2v2H6V8z"}}]},b=y({name:"City10Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:s}=O(r),p=a(()=>["t-icon","t-icon-city-10",i.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(m,u.value)}});export{b as default};
