import{d as O,i as a,E as y,G as m,H as d}from"./index-9f7c584d.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 4a2.91 2.91 0 00-2.89 2.94c0 1.63 1.3 2.93 2.89 2.93 1.58 0 2.89-1.3 2.89-2.93C14.89 5.3 13.59 4 12 4zM7.11 6.94A4.91 4.91 0 0112 2a4.91 4.91 0 014.89 4.94A4.91 4.91 0 0112 11.87a4.91 4.91 0 01-4.89-4.93zM5.9 14.12A2.91 2.91 0 003 17.07C3 18.7 4.3 20 5.89 20c1.58 0 2.89-1.3 2.89-2.94 0-1.63-1.3-2.93-2.9-2.93zM1 17.07a4.91 4.91 0 014.89-4.93 4.91 4.91 0 014.89 4.93A4.91 4.91 0 015.88 22 4.91 4.91 0 011 17.06zm17.11-2.93a2.91 2.91 0 00-2.89 2.93c0 1.64 1.3 2.94 2.9 2.94 1.57 0 2.88-1.3 2.88-2.94 0-1.63-1.3-2.93-2.89-2.93zm-4.89 2.93a4.91 4.91 0 014.9-4.93A4.91 4.91 0 0123 17.05 4.91 4.91 0 0118.11 22a4.91 4.91 0 01-4.89-4.94z"}}]},b=O({name:"Palette1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=y(r),p=a(()=>["t-icon","t-icon-palette-1",l.value]),u=a(()=>c(c({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{b as default};
