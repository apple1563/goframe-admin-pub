import{d as y,i as a,E as O,G as d,H as g}from"./index-fd6a2e45.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_9446)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17 .59L23.41 7 22 8.41l-1.94-1.94c-.65.8-1.5 1.98-2.26 3.34-1.03 1.85-1.82 3.91-1.81 5.8a4.56 4.56 0 01-.28 6.1 4.56 4.56 0 01-6.42 0 4.56 4.56 0 010-6.42 4.56 4.56 0 014.8-1.04 16 16 0 011.96-5.41c.56-1 1.16-1.9 1.7-2.66-.61.08-1.33.19-2.1.34-2.16.45-4.56 1.24-6.29 2.6a4.57 4.57 0 01-.65 5.59 4.56 4.56 0 01-6.42 0 4.56 4.56 0 010-6.42 4.57 4.57 0 015.67-.6c2.12-1.76 4.99-2.66 7.3-3.13.92-.19 1.77-.31 2.5-.4L15.58 2 17 .59zM7.3 9.7a2.56 2.56 0 00-3.6 0c-.97.97-.97 2.6 0 3.58.98.98 2.62.98 3.6 0 .97-.97.97-2.6 0-3.58zm7 7a2.56 2.56 0 00-3.6 0 2.56 2.56 0 000 3.58c.98.98 2.62.98 3.6 0 .97-.97.97-2.6 0-3.58z"}}]}]},P=y({name:"CherryIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),p=a(()=>["t-icon","t-icon-cherry",l.value]),u=a(()=>o(o({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>d(h,v.value)}});export{P as default};
