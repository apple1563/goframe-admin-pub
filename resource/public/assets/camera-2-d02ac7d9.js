import{d as m,i as n,E as O,G as y,H as d}from"./index-9f7c584d.js";function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3.5a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1110 8.95v1a9.94 9.94 0 004.63-1.68l.82-.56 1.13 1.65-.83.57A11.94 11.94 0 0113 22.46v.04h-.65a12.22 12.22 0 01-.7 0H11v-.04c-2.12-.17-4.09-.9-5.75-2.03l-.83-.57 1.13-1.65.82.56A9.94 9.94 0 0011 20.46v-1.01a9 9 0 01-8-8.95zm9-2a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"}}]},P=m({name:"Camera2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:o,style:s}=O(t),p=n(()=>["t-icon","t-icon-camera-2",o.value]),v=n(()=>c(c({},s.value),r.style)),u=n(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(g,u.value)}});export{P as default};
