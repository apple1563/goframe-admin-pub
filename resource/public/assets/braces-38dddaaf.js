import{d as O,i as a,E as y,G as d,H as h}from"./index-fd6a2e45.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2.5 17.6A3.4 3.4 0 005.9 21H7v-2H5.9a1.4 1.4 0 01-1.4-1.4V14c0-.77-.29-1.47-.76-2 .47-.53.76-1.23.76-2V6.4c0-.77.63-1.4 1.4-1.4H7V3H5.9a3.4 3.4 0 00-3.4 3.4V10a1 1 0 01-1 1H.4v2h1.1a1 1 0 011 1v3.6zM17 21h1.1a3.4 3.4 0 003.4-3.4V14a1 1 0 011-1h1.1v-2h-1.1a1 1 0 01-1-1V6.4A3.4 3.4 0 0018.1 3H17v2h1.1c.77 0 1.4.63 1.4 1.4V10c0 .77.29 1.47.76 2a2.99 2.99 0 00-.76 2v3.6c0 .77-.63 1.4-1.4 1.4H17v2z"}}]},g=O({name:"BracesIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=y(t),p=a(()=>["t-icon","t-icon-braces",o.value]),v=a(()=>l(l({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>d(b,u.value)}});export{g as default};
