import{d as h,i as a,E as O,G as y,H as m}from"./index-fd6a2e45.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 2v7.1l2.5-2.47 1.41 1.42L12 12.91 7.09 8.05l1.4-1.42L11 9.11V2h2zM2 2h7v2H4v10h16V4h-5V2h7v20H2V2zm18 14H4v4h16v-4zM6 17h2v2H6v-2zm3 0h2v2H9v-2z"}}]},b=h({name:"InstallIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:v}=O(r),c=a(()=>["t-icon","t-icon-install",l.value]),p=a(()=>s(s({},v.value),t.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(d,u.value)}});export{b as default};
