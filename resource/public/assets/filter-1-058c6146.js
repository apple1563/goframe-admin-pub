import{d as O,i as a,E as y,G as m,H as d}from"./index-812ea633.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.55 5.5l.19.15c.3.22.81.45 1.53.66C7.7 6.73 9.72 7 12 7c2.28 0 4.3-.27 5.73-.7a5.53 5.53 0 001.72-.8 5.53 5.53 0 00-1.72-.8C16.3 4.26 14.28 4 12 4c-2.28 0-4.3.27-5.73.7a5.53 5.53 0 00-1.72.8zm12.62 3c-1.48.32-3.26.5-5.17.5-1.9 0-3.7-.18-5.17-.5L11 13.65v6.19A3 3 0 0013 17v-3.36l4.17-5.13zm4.33-3v.86l-6.5 8V17a5 5 0 01-5 5H9v-7.64l-6.5-8V5.5c0-.84.57-1.43 1.1-1.8.55-.38 1.29-.69 2.1-.93C7.37 2.3 9.59 2 12 2c2.41 0 4.64.29 6.3.77.81.24 1.55.55 2.1.94.53.36 1.1.95 1.1 1.79z"}}]},P=O({name:"Filter1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),p=a(()=>["t-icon","t-icon-filter-1",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(g,u.value)}});export{P as default};