import{d as m,i as a,E as O,G as y,H as d}from"./index-9f7c584d.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 25",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.41.06l3.72 6.17 7.02 1.63-4.73 5.44.62 7.18-6.63-2.81-6.63 2.8.62-7.17L.68 7.86 7.7 6.23 11.4.06zm0 3.88L8.97 7.99l-4.6 1.07 3.1 3.57-.41 4.71 4.35-1.84 4.36 1.84-.41-4.71 3.1-3.57-4.61-1.07-2.44-4.05zM20.86 14l2.48 2.48-1.42 1.41-2.47-2.47L20.86 14zm-8.3 6.12l2.48 2.47-1.41 1.42-2.48-2.48 1.42-1.41zm6.58 0l2.48 2.47-1.41 1.42-2.48-2.48 1.41-1.41z"}}]},P=m({name:"Animation1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:c}=O(r),p=a(()=>["t-icon","t-icon-animation-1",i.value]),u=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(g,v.value)}});export{P as default};
