import{d as f,i as a,E as O,G as m,H as y}from"./index-812ea633.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 1v1h6V1h2v4h1v2h-1v3c0 .94.07 1.96.2 3H19v2h-1.52a59.9 59.9 0 001.4 6.43l.45 1.57h-6.11l-1-4h-.44l-1 4h-6.1l.44-1.57a57.12 57.12 0 00.9-3.76c.18-.84.35-1.74.5-2.67H5v-2h1.8c.13-1.04.2-2.06.2-3V7H6V5h1V1h2zm0 3v1h6V4H9zm6 3H9v3c0 .96-.07 1.97-.18 3h6.36a27.78 27.78 0 01-.18-3V7zm.45 8h-6.9a60.8 60.8 0 01-1.25 6h1.92l1-4h3.56l1 4h1.92a73.47 73.47 0 01-1.25-6zM11 9h2v2h-2V9z"}}]},b=f({name:"Lighthouse2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=O(r),h=a(()=>["t-icon","t-icon-lighthouse-2",l.value]),v=a(()=>s(s({},c.value),t.style)),p=a(()=>({class:h.value,style:v.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>m(g,p.value)}});export{b as default};
