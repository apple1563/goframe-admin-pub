import{d as O,i as a,E as y,G as d,H as g}from"./index-fd6a2e45.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.4 5.2a11 11 0 0114.38 1.02l.7.71 1.42-1.41-.7-.71A13 13 0 004.5 3.37V1.5h-2v5.7H7.5v-2H5.4zm3.84 2.37a2.76 2.76 0 115.52 0v2.95h1.15c.5 0 .97.13 1.4.38L20.92 13a2.76 2.76 0 011.22 3.25l-1.78 5.35a2.76 2.76 0 01-2.61 1.89h-7.09c-.86 0-1.66-.4-2.18-1.08l-4.3-5.59.94-1.41a1.88 1.88 0 011.97-.8l2.14.48V7.57zM12 6.8a.76.76 0 00-.76.76V17.6l-4.5-1-.1.15 3.43 4.45c.14.19.37.3.6.3h7.09c.32 0 .61-.2.71-.52l1.79-5.35a.76.76 0 00-.34-.9l-3.62-2.1a.76.76 0 00-.39-.11h-3.15V7.57A.76.76 0 0012 6.8z"}}]},b=O({name:"GestureLeftSlipIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=y(r),p=a(()=>["t-icon","t-icon-gesture-left-slip",l.value]),u=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>d(h,v.value)}});export{b as default};
