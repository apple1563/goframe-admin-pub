import{d as O,i as a,E as y,G as h,H as d}from"./index-9f7c584d.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.5 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM6 7.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zM18 14c-.93 0-1.5.66-1.5 1.25v1h-2v-1c0-1.9 1.67-3.25 3.5-3.25s3.5 1.36 3.5 3.25c0 .91-.4 1.72-1.03 2.3L19 18.94v.68h-2v-1.54l2.11-2c.26-.23.39-.53.39-.83 0-.6-.57-1.25-1.5-1.25zM8 16a4 4 0 00-4 4h8.8v2H2v-2a6 6 0 016-6h4.75v2H8zm9 5h2v2h-2v-2z"}}]},w=O({name:"UserUnknownIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=y(t),v=a(()=>["t-icon","t-icon-user-unknown",o.value]),p=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>h(m,u.value)}});export{w as default};
