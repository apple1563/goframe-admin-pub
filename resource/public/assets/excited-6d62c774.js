import{d,i as a,E as O,G as m,H as y}from"./index-fd6a2e45.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 100 18 9 9 0 000-18zM1 12a11 11 0 1122 0 11 11 0 01-22 0zm6.62-4.86L11 9.04v1.46l-3.2 2.4-1.2-1.6 1.86-1.4-1.82-1.02.98-1.74zm9.74 1.74l-1.82 1.03 1.86 1.39-1.2 1.6-3.2-2.4V9.04l3.38-1.9.98 1.74zM12 11.26l.9 1.8c.37.75.85.98 1.18 1 .22.02.45-.03.67-.18l.83-.57 1.12 1.66-.82.56c-.36.24-.76.41-1.17.49-.18.44-.4.93-.67 1.38-.2.34-.44.7-.73.99-.26.26-.7.61-1.3.61-.61 0-1.06-.35-1.32-.61a4.9 4.9 0 01-.73-.99c-.26-.45-.49-.94-.67-1.38a3.1 3.1 0 01-1.16-.49l-.83-.56 1.12-1.66.83.57c.22.15.45.2.67.19.33-.03.8-.26 1.19-1.02l.9-1.79zm-.68 4.42a8.04 8.04 0 00.68 1.18 8.02 8.02 0 00.68-1.18c-.24-.14-.47-.3-.68-.5-.21.2-.44.36-.68.5z"}}]},P=d({name:"ExcitedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=O(r),p=a(()=>["t-icon","t-icon-excited",l.value]),u=a(()=>c(c({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(g,v.value)}});export{P as default};
