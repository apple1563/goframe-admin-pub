import{d as O,i as a,E as m,G as y,H as g}from"./index-812ea633.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7 .81l1.17.2c3.99.7 6.59 2.8 8.15 5.48a15.17 15.17 0 011.83 5.36A21.43 21.43 0 0117.5 21H21v2H4v-2h3V.81zM9 21h6.38c.3-.7.58-1.75.78-3H9v3zm0-5h7.36c.05-.97.03-1.98-.08-3H9v3zm0-5h6.95c-.24-1.05-.6-2.06-1.08-3H9v3zm0-5h4.51A9.14 9.14 0 009 3.25V6z"}}]},b=O({name:"SailingHotelIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=m(r),p=a(()=>["t-icon","t-icon-sailing-hotel",l.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(h,u.value)}});export{b as default};
