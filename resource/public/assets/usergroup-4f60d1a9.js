import{d as O,i as a,E as g,G as y,H as h}from"./index-812ea633.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7 5a3 3 0 000 6v2a5 5 0 00-5 5v4H0v-4a7 7 0 013.75-6.2A4.99 4.99 0 017 3h1v2a5 5 0 018 0V3h1a5 5 0 013.25 8.8A7 7 0 0124 18v4h-2v-4a5 5 0 00-5-5v-2a3 3 0 100-6h-1a5 5 0 11-8 0H7zm5 0a3 3 0 100 6 3 3 0 000-6zM4 19a5 5 0 015-5h6a5 5 0 015 5v3H4v-3zm5-3a3 3 0 00-3 3v1h12v-1a3 3 0 00-3-3H9z"}}]},d=O({name:"UsergroupIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=g(t),p=a(()=>["t-icon","t-icon-usergroup",o.value]),v=a(()=>l(l({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var s;return(s=e.onClick)===null||s===void 0?void 0:s.call(e,{e:f})}}));return()=>y(m,u.value)}});const P=d;export{P as default};
