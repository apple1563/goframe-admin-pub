import{d as m,i as a,E as O,G as d,H as y}from"./index-812ea633.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3c3.9 0 7 3.16 7 7.1V20h-2v-9.9a5 5 0 00-10 0V20H5v-9.9C5 6.16 8.1 3 12 3zm9 17v-9.9C21 5.09 17.04 1 12 1s-9 4.09-9 9.1V20H2v2h8v-2H9v-9.9a3 3 0 116 0V20h-1v2h8v-2h-1z"}}]},b=m({name:"Dam1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),v=a(()=>["t-icon","t-icon-dam-1",o.value]),p=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>d(h,u.value)}});export{b as default};
