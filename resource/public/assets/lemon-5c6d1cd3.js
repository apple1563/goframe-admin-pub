import{d as m,i as a,E as O,G as y,H as d}from"./index-812ea633.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3.6 12.34a6.84 6.84 0 001.23 4.6l.25.38-.57 2.18 2.17-.58.38.25c1.35.9 2.92 1.4 4.6 1.22 1.68-.19 3.6-1.06 5.63-3.1 2.04-2.04 2.91-3.95 3.1-5.63a6.87 6.87 0 00-1.22-4.6l-.25-.38.58-2.17-2.18.57-.38-.25a6.84 6.84 0 00-4.6-1.22c-1.67.18-3.59 1.05-5.63 3.1-2.05 2.04-2.92 3.96-3.1 5.63zm-1.98-.21c.24-2.23 1.39-4.55 3.67-6.84 2.29-2.28 4.6-3.43 6.84-3.67a8.74 8.74 0 015.54 1.3l1.55-.4h.04a1.95 1.95 0 012.23 2.25v.04l-.41 1.52a8.77 8.77 0 011.3 5.54c-.25 2.24-1.39 4.55-3.67 6.84-2.29 2.28-4.6 3.42-6.84 3.66a8.77 8.77 0 01-5.54-1.29l-1.52.4-.04.01a1.95 1.95 0 01-2.26-2.23l.01-.04.4-1.55a8.74 8.74 0 01-1.3-5.54zM7.88 9.3l1.41-1.42 1.42 1.42L9.3 10.7 7.88 9.3zm-.71 3.53l1.42-1.42L10 12.83 8.6 14.25l-1.42-1.42zm4.24-4.24l1.42-1.42 1.42 1.42L12.83 10 11.4 8.59z"}}]},P=m({name:"LemonIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),p=a(()=>["t-icon","t-icon-lemon",l.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(g,v.value)}});export{P as default};
