import{d as h,i as a,E as y,G as m,H as d}from"./index-812ea633.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.13.9l-.1 1.19-.02.39a4.5 4.5 0 004.9 4.49l1.19-.1-.1 1.18a6.5 6.5 0 01-2.17 4.3c.74.9 1.19 2.05 1.19 3.3a5.34 5.34 0 01-3.32 4.9l-.92.4L17 19.1l.93-.39a3.34 3.34 0 002.09-3.05 3.28 3.28 0 00-1.75-2.89 3.62 3.62 0 00-1.76-.45h-.06l-.85.02-.15-.85a4.3 4.3 0 00-3.24-3.37 4.61 4.61 0 00-1.17-.14 4.3 4.3 0 00-4.34 4.2c0 .27.03.53.08.78l.18.95-.95.21A2.5 2.5 0 004 16.52c0 .95.57 1.8 1.43 2.21l.9.44-.86 1.8-.9-.43A4.46 4.46 0 012 16.53a4.46 4.46 0 012.7-4.08v-.26c0-3.15 2.4-5.7 5.47-6.14A6.5 6.5 0 0115.95 1l1.18-.1zm-4.9 5.18l.46.1a6.33 6.33 0 014.54 4.19 5.6 5.6 0 012.05.67 4.51 4.51 0 001.5-2.1 6.5 6.5 0 01-5.73-5.72 4.52 4.52 0 00-2.82 2.86zm.77 7.9h2v2h-2v-2zm-5 2h2v2H8v-2zm5 3h2v2h-2v-2zm-5 2h2v2H8v-2z"}}]},b=h({name:"CloudyNightRainIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=y(r),v=a(()=>["t-icon","t-icon-cloudy-night-rain",l.value]),p=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(O,u.value)}});export{b as default};
