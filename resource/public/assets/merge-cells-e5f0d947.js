import{d as m,i as l,E as O,G as y,H as g}from"./index-9f7c584d.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm2 2v16h7v-4h2v4h7V4h-7v4h-2V4H4zm13.18 6.23L15.41 12l1.77 1.77-1.41 1.41L12.59 12l3.18-3.18 1.41 1.41zM8.33 8.82L11.51 12l-3.18 3.18-1.41-1.41L8.68 12l-1.76-1.77 1.41-1.41z"}}]},b=m({name:"MergeCellsIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=O(t),p=l(()=>["t-icon","t-icon-merge-cells",a.value]),v=l(()=>s(s({},c.value),r.style)),u=l(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(h,u.value)}});export{b as default};
