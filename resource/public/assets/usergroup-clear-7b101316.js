import{d as O,i as a,E as m,G as y,H as g}from"./index-fd6a2e45.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 5a3 3 0 000 6v2a5 5 0 00-5 5v4H2v-4a7 7 0 013.75-6.2A4.99 4.99 0 019 3h1v2H9zm6 0a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0zM7 19a5 5 0 015-5h3v2h-3a3 3 0 00-3 3v1h6v2H7v-3zm10.88-4.54L20 16.6l2.12-2.13 1.42 1.42L21.4 18l2.13 2.12-1.42 1.42L20 19.4l-2.12 2.13-1.42-1.42L18.6 18l-2.13-2.12 1.42-1.42z"}}]},b=O({name:"UsergroupClearIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=m(t),p=a(()=>["t-icon","t-icon-usergroup-clear",l.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(d,u.value)}});export{b as default};
