import{d as h,i as l,E as O,G as y,H as g}from"./index-812ea633.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.7 3.3L5 2.58l-.7.7L2 5.6l-.7.7 1.4 1.42.71-.71.59-.59V17.6L3.41 17l-.7-.7-1.42 1.4.71.71 2.3 2.3.7.7.7-.7L8 18.4l.7-.7-1.4-1.42-.71.71-.59.59V6.4l.59.59.7.7 1.42-1.4L8 5.58l-2.3-2.3zM13 4h-1v2h10V4h-9zm-2 7h-1v2h12v-2H11zm1 7h10v2H12v-2z"}}]},b=h({name:"LineHeightIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:a,style:c}=O(r),p=l(()=>["t-icon","t-icon-line-height",a.value]),v=l(()=>s(s({},c.value),t.style)),u=l(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(m,u.value)}});export{b as default};
