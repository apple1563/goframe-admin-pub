import{d as O,i as a,E as h,G as y,H as d}from"./index-9f7c584d.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M20.5 5.83A10.49 10.49 0 001.56 10.9l-.1.99 1.98.2.1-.99a8.5 8.5 0 0115.67-3.6H15.5v2h7v-7h-2v3.33zm.06 6.07l-.1 1a8.5 8.5 0 01-15.67 3.6H8.5v-2h-7v7h2v-3.33a10.48 10.48 0 0018.94-5.07l.1-.99-1.98-.2z"}}]},b=O({name:"RefreshIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=h(t),p=a(()=>["t-icon","t-icon-refresh",l.value]),v=a(()=>s(s({},c.value),r.style)),f=a(()=>({class:p.value,style:v.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>y(m,f.value)}});export{b as default};
