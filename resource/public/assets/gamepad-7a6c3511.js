import{d as h,i as a,E as m,G as d,H as O}from"./index-9f7c584d.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2.06 3h19.88l1.12 18h-6.78l-1-3H8.72l-1 3H.94L2.06 3zm1.88 2l-.88 14h3.22l1-3h9.44l1 3h3.22l-.88-14H3.94zM9 7.5v2h2v2H9v2H7v-2H5v-2h2v-2h2zm7 0h2v2h-2v-2zm0 4h2v2h-2v-2z"}}]},b=h({name:"GamepadIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=m(t),v=a(()=>["t-icon","t-icon-gamepad",l.value]),c=a(()=>s(s({},p.value),r.style)),u=a(()=>({class:v.value,style:c.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(y,u.value)}});export{b as default};
