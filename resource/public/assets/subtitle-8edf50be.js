import{d as h,i as a,E as O,G as m,H as y}from"./index-9f7c584d.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 3h22v18H1V3zm2 2v14h18V5H3zm2 5c0-1.1.9-2 2-2h4v2H7v4h4v2H7a2 2 0 01-2-2v-4zm8 0c0-1.1.9-2 2-2h4v2h-4v4h4v2h-4a2 2 0 01-2-2v-4z"}}]},g=h({name:"SubtitleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:c}=O(r),v=a(()=>["t-icon","t-icon-subtitle",i.value]),p=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(b,u.value)}});export{g as default};