import{d as m,i as a,E as O,G as y,H as d}from"./index-fd6a2e45.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 3a1 1 0 100 2 1 1 0 000-2zM1 4a3 3 0 015.83-1h10.34A3 3 0 1121 6.83v10.34A3 3 0 1117.17 21H6.83A3 3 0 113 17.17V6.83A3 3 0 011 4zm4 2.83v10.34A3 3 0 016.83 19h10.34A3 3 0 0119 17.17V6.83A3 3 0 0117.17 5H6.83A3 3 0 015 6.83zM20 3a1 1 0 100 2 1 1 0 000-2zM4 19a1 1 0 100 2 1 1 0 000-2zm16 0a1 1 0 100 2 1 1 0 000-2z"}}]},h=m({name:"TransformIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),p=a(()=>["t-icon","t-icon-transform",o.value]),f=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:f.value,onClick:v=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:v})}}));return()=>y(g,u.value)}});export{h as default};
