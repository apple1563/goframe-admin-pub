import{d as h,i as a,E as O,G as y,H as d}from"./index-fd6a2e45.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 1v1h3v6h-.98c.08 1.87.37 4.35.9 6.73.32 1.41.72 2.77 1.2 3.93.35.86.74 1.57 1.14 2.11l.2.23H20v2h-6v-2h1.67l-.27-.25a9.95 9.95 0 00-1.75-1.25A3.6 3.6 0 0012 19a3.6 3.6 0 00-1.65.5A9.95 9.95 0 008.33 21H10v2H4v-2h1.54l.2-.23c.4-.54.79-1.25 1.14-2.11a24.5 24.5 0 001.2-3.93c.53-2.38.82-4.86.9-6.73H8V2h3V1h2zm-2.02 7a42.03 42.03 0 01-.95 7.17c-.2.89-.44 1.77-.7 2.62l.07-.04A5.56 5.56 0 0112 17a5.56 5.56 0 012.68.79 30.7 30.7 0 01-.7-2.62A42.03 42.03 0 0113.01 8h-2.04zM10 6h4V4h-4v2z"}}]},w=h({name:"TowerIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),p=a(()=>["t-icon","t-icon-tower",o.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(m,u.value)}});export{w as default};
