import{d as m,i as a,E as b,G as O,H as y}from"./index-fd6a2e45.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 1.84l6.07 3.55L22 2.5v15.57l-7 4.09-6.07-3.55L2 21.5V5.93l7-4.09zM4 7.07V18.5l5.07-2.11L15 19.84l5-2.91V5.5l-5.07 2.11L9 4.16 4 7.07zM7.5 9.5a.25.25 0 100-.5.25.25 0 000 .5zm-1.75-.25a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM14 10.5a.25.25 0 100-.5.25.25 0 000 .5zm-1.75-.25a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM10 14a.25.25 0 100-.5.25.25 0 000 .5zm-1.75-.25a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM16.5 15a.25.25 0 100-.5.25.25 0 000 .5zm-1.75-.25a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z"}}]},g=m({name:"MapBubbleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=b(t),c=a(()=>["t-icon","t-icon-map-bubble",l.value]),u=a(()=>s(s({},p.value),r.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,v.value)}});export{g as default};
