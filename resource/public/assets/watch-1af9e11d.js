import{d as h,i as a,E as O,G as y,H as m}from"./index-9f7c584d.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.12 0h9.76l.5 4.02A3 3 0 0120 7v2h1v6h-1v2a3 3 0 01-2.61 2.98l-.5 4.02H7.11l-.5-4.02A3 3 0 014 17V7a3 3 0 012.61-2.98L7.11 0zm1.51 4h6.74l-.25-2H8.88l-.25 2zM7 18h10a1 1 0 001-1V7a1 1 0 00-1-1H7a1 1 0 00-1 1v10a1 1 0 001 1zm1.63 2l.25 2h6.24l.25-2H8.63z"}}]},b=h({name:"WatchIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=O(r),p=a(()=>["t-icon","t-icon-watch",l.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(d,u.value)}});export{b as default};
