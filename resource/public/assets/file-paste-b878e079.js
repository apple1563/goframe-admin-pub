import{d as h,i as a,E as m,G as O,H as y}from"./index-812ea633.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1h12.41L21 6.59V23H3V1zm16 8h-6V3H5v18h14V9zm-4-5.58V7h3.59L15 3.42zM7 10h2.6v2H9v.6H7V10zm3.4 0H13v2.6h-2V12h-.6v-2zM9 14v-.6H7V16h2.6v-2H9zm2 0h6v6h-6v-6zm2 2v2h2v-2h-2z"}}]},g=h({name:"FilePasteIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:v}=m(r),c=a(()=>["t-icon","t-icon-file-paste",i.value]),p=a(()=>s(s({},v.value),t.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(d,u.value)}});export{g as default};
