import{d as O,i as a,E as m,G as y,H as d}from"./index-9f7c584d.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_8450)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M15.86.22l7.8 7.8-15.8 15.81-7.81-7.8L15.85.21zm0 2.82l-2.19 2.19 1.6 1.6-1.4 1.41-1.61-1.6-2.19 2.19 2.4 2.4-1.4 1.41-2.4-2.4-2.2 2.19 1.6 1.6-1.4 1.41-1.6-1.6-2.2 2.18 5 4.99L20.83 8.03l-4.98-4.99z"}}]}]},b=O({name:"MapRulerIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=m(t),s=a(()=>["t-icon","t-icon-map-ruler",l.value]),u=a(()=>c(c({},p.value),r.style)),v=a(()=>({class:s.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(g,v.value)}});export{b as default};
