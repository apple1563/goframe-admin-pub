import{d as f,i as a,E as d,G as h,H as O}from"./index-fd6a2e45.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M23 3v18H1V3h22zm-2 2H3v4h18V5zm0 6h-2v6.77l-3.5-2.1-3.5 2.1V11H3v8h18v-8zm-4 0h-3v3.23l1.5-.9 1.5.9V11z"}}]},g=f({name:"CardmembershipIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:c}=d(t),p=a(()=>["t-icon","t-icon-cardmembership",i.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:m=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:m})}}));return()=>h(y,u.value)}});export{g as default};
