import{d as O,i as a,E as y,G as m,H as d}from"./index-fd6a2e45.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.5 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM6 7.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm8.38 6h7.24l2.08 4.16L18 24l-5.7-6.33 2.08-4.16zm1.24 2l-.92 1.84L18 21l3.3-3.67-.92-1.84h-4.76zM8 16a4 4 0 00-4 4h7.05v2H2v-2a6 6 0 016-6h3v2H8z"}}]},b=O({name:"UserVipIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=y(t),c=a(()=>["t-icon","t-icon-user-vip",l.value]),u=a(()=>s(s({},p.value),r.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(h,v.value)}});export{b as default};
