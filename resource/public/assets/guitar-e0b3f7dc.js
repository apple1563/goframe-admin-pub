import{d as O,i as a,E as y,G as m,H as d}from"./index-fd6a2e45.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M19 1.59L22.41 5 21 6.41l-1-1-.59.59.5.5-1.41 1.41-.5-.5-.83.83A4.98 4.98 0 0115 15.6L15 16a7 7 0 11-6.59-6.99 5 5 0 017.35-2.18l.83-.83-.5-.5 1.41-1.41.5.5.59-.59-1-1L19 1.59zM13 8a3 3 0 00-2.92 2.32l-.22.94-.94-.18a5 5 0 104 4l-.18-.94.94-.22A3 3 0 0013 8zm-5 7a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z"}}]},P=O({name:"GuitarIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=y(t),p=a(()=>["t-icon","t-icon-guitar",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(g,v.value)}});export{P as default};
