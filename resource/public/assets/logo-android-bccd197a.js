import{d,i as o,E as O,G as y,H as g}from"./index-9f7c584d.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.37 3.64l2.12 3.7a11.95 11.95 0 0111.02 0l2.12-3.7 1.73.99-2.15 3.77C22.1 10.6 24 14.08 24 18v2H0v-2c0-3.92 1.88-7.4 4.8-9.6L2.63 4.63l1.73-1zM12 8A10 10 0 002 18h20A10 10 0 0012 8zm-6 5h2v2H6v-2zm10 0h2v2h-2v-2z"}}]},b=d({name:"LogoAndroidIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:c}=O(t),p=o(()=>["t-icon","t-icon-logo-android",a.value]),v=o(()=>s(s({},c.value),r.style)),u=o(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(m,u.value)}});export{b as default};