import{d as O,i as l,E as m,G as y,H as d}from"./index-812ea633.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v2h-2v18.08l-1.62-1.3-1.85-1.47-1.62 1.44-.66.59-.66-.6-1.59-1.4-1.59 1.4-.66.6-.66-.6-1.62-1.43-1.85 1.47L4 22.08V4H2V2zm4 2v13.92l.88-.7.65-.53.63.56 1.59 1.41 1.59-1.4.66-.6.66.6 1.59 1.4 1.59-1.4.63-.57.65.53.88.7V4H6zm2 3h8v2H8V7zm2 4H9v2h6v-2h-5z"}}]},g=O({name:"BillIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=m(t),p=l(()=>["t-icon","t-icon-bill",a.value]),v=l(()=>s(s({},c.value),r.style)),u=l(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(h,u.value)}});export{g as default};
