import{d as O,i as a,E as m,G as y,H as d}from"./index-fd6a2e45.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 25",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M14.35 1l3.17 4.45 2.1-.72 1.92 5.6H23V22H1V10.33h1.65L14.35 1zm-11 11.33H3V20h18v-7.67H3.35zm16.07-2L18.4 7.3l-1.6.51-7.4 2.52h10.04zm-3.87-4.21l-1.6-2.25-6.1 4.88 7.7-2.63zM5.29 15.16h2v2h-2v-2z"}}]},P=O({name:"PantoneIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=m(r),p=a(()=>["t-icon","t-icon-pantone",o.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(h,u.value)}});export{P as default};
