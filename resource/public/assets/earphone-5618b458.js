import{d as h,i as a,E as O,G as y,H as d}from"./index-fd6a2e45.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 4c-4.41 0-8 3.6-8 8.07V13h2a3 3 0 013 3v2a3 3 0 01-3 3H2v-8.93C2 6.5 6.47 2 12 2s10 4.51 10 10.07V21h-4a3 3 0 01-3-3v-2a3 3 0 013-3h2v-.93A8.03 8.03 0 0012 4zm8 11h-2a1 1 0 00-1 1v2a1 1 0 001 1h2v-4zM4 15v4h2a1 1 0 001-1v-2a1 1 0 00-1-1H4z"}}]},b=h({name:"EarphoneIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),p=a(()=>["t-icon","t-icon-earphone",o.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(m,u.value)}});export{b as default};
