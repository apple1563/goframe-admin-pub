import{d as m,i as l,E as d,G as O,H as y}from"./index-9f7c584d.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 1.84l6.07 3.55L22 2.5V11h-2V5.5l-4 1.67V11h-2V7.07l-4-2.33v12.19l1.87 1.09-1.01 1.72-1.93-1.13L2 21.5V5.93l7-4.09zm-1 15V4.73L4 7.07V18.5l4-1.67zm11.79-4.75l4.12 4.12-7.28 7.29H12.5v-4.13l7.29-7.28zm-.93 3.75l1.3 1.3.93-.93-1.3-1.3-.93.93zm-.11 2.7l-1.3-1.29-2.95 2.95v1.3h1.3l2.95-2.95z"}}]},b=m({name:"MapEditIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:a,style:p}=d(r),c=l(()=>["t-icon","t-icon-map-edit",a.value]),v=l(()=>s(s({},p.value),t.style)),u=l(()=>({class:c.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(g,u.value)}});export{b as default};
