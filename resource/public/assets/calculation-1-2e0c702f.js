import{d as h,i as a,E as m,G as O,H as y}from"./index-fd6a2e45.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 1h22v22H1V1zm2 2v18h18V3H3zm6 2v2h2v2H9v2H7V9H5V7h2V5h2zm4 2h6v2h-6V7zm-6.41 6.17L8 14.6l1.41-1.42 1.42 1.42L9.4 16l1.42 1.41-1.42 1.42L8 17.4l-1.41 1.42-1.42-1.42L6.6 16l-1.42-1.41 1.42-1.42zm6.41.33h6v2h-6v-2zm0 3h6v2h-6v-2z"}}]},b=h({name:"Calculation1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=m(r),v=a(()=>["t-icon","t-icon-calculation-1",l.value]),p=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
