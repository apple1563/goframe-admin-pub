import{d as m,i as a,E as O,G as y,H as d}from"./index-9f7c584d.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 1.84l6.07 3.55L22 2.5V11h-2V5.5l-4 1.67V11h-2V7.07l-4-2.33v12.19l1.87 1.09-1.01 1.72-1.93-1.13L2 21.5V5.93l7-4.09zm-1 15V4.73L4 7.07V18.5l4-1.67zM18 14a2.75 2.75 0 00-2.75 2.75c0 1.25.73 2.45 1.61 3.42.41.45.82.82 1.14 1.08.32-.26.73-.63 1.14-1.08.88-.97 1.61-2.17 1.61-3.42A2.75 2.75 0 0018 14zm0 9.7l-.55-.37h-.01l-.01-.01-.04-.03a7.12 7.12 0 01-.6-.45c-.39-.31-.9-.76-1.4-1.32-1-1.1-2.14-2.77-2.14-4.77a4.75 4.75 0 119.5 0c0 2-1.14 3.67-2.14 4.77a12.83 12.83 0 01-2 1.77l-.04.03-.01.01-.56.37zM16.75 16h2.5v2h-2.5v-2z"}}]},b=m({name:"MapLocationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=O(r),p=a(()=>["t-icon","t-icon-map-location",l.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(h,u.value)}});export{b as default};
