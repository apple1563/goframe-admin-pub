import{d as O,i as a,E as y,G as d,H as m}from"./index-9f7c584d.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_7197)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M.59 12L5 7.59 6.41 9l-3 3 3 3L5 16.41.59 12zm7-7L12 .59 16.41 5 15 6.41l-3-3-3 3L7.59 5zM9 17.59l3 3 3-3L16.41 19 12 23.41 7.59 19 9 17.59zM11 13v-2h2v2h-2zm6.59 2l3-3-3-3L19 7.59 23.41 12 19 16.41 17.59 15z"}}]}]},P=O({name:"ApiIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:p}=y(r),s=a(()=>["t-icon","t-icon-api",l.value]),u=a(()=>c(c({},p.value),t.style)),v=a(()=>({class:s.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>d(g,v.value)}});export{P as default};
