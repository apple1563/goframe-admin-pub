import{d as h,i as a,E as f,G as O,H as y}from"./index-812ea633.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 2v18h18v2H2V2h2zm16 1v1c0 2.05-.25 4.71-1.2 6.9a7.34 7.34 0 01-2.13 2.89A5.78 5.78 0 0113 15a5.79 5.79 0 01-3.67-1.21 7.35 7.35 0 01-2.12-2.9A17.95 17.95 0 016 4.02V3h2v1a16 16 0 001.04 6.09c.4.9.9 1.62 1.53 2.11.61.49 1.4.8 2.43.8 1.03 0 1.82-.31 2.43-.8a5.36 5.36 0 001.53-2.11C17.76 8.28 18 5.94 18 4V3h2zM6 16h2v2H6v-2zm3 0h2v2H9v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z"}}]},b=h({name:"ChartMinimumIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:c}=f(t),s=a(()=>["t-icon","t-icon-chart-minimum",i.value]),p=a(()=>v(v({},c.value),r.style)),u=a(()=>({class:s.value,style:p.value,onClick:m=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:m})}}));return()=>O(d,u.value)}});export{b as default};
