import{d as m,i as a,E as O,G as h,H as y}from"./index-812ea633.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 100 18 9 9 0 000-18zM1 12a11 11 0 1122 0 11 11 0 01-22 0zm5-3h4v2H9v2H7v-2H6V9zm8 0h4v2h-1v2h-2v-2h-1V9zm-3 5h2v2h-2v-2z"}}]},b=m({name:"Calm1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),v=a(()=>["t-icon","t-icon-calm-1",l.value]),p=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(d,u.value)}});export{b as default};
