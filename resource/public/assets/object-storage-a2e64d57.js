import{d as O,i as a,E as y,G as g,H as b}from"./index-fd6a2e45.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){b(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 4a5 5 0 00-5 5v2H6c-.78 0-1.8.3-2.62.96A3.73 3.73 0 002 15c0 1.41.61 2.39 1.42 3.03A4.4 4.4 0 006 19c.97 0 2.24-.02 3.26-.52.49-.24.9-.59 1.2-1.1.31-.52.54-1.27.54-2.38v-1.09l-1.5 1.5L8.09 14 12 10.09 15.91 14l-1.41 1.41-1.5-1.5V15c0 1.39-.29 2.51-.81 3.4a4.78 4.78 0 01-2.04 1.87c-1.48.73-3.17.73-4.1.73H6a6.4 6.4 0 01-3.83-1.4A5.72 5.72 0 010 15c0-2.07.9-3.6 2.12-4.59A6.45 6.45 0 015 9.1V9a7 7 0 0114 0v.1c.97.17 2 .6 2.88 1.31A5.73 5.73 0 0124 15a5.6 5.6 0 01-2.2 4.6 7.17 7.17 0 01-4.3 1.4h-4v-2h4c1.07 0 2.22-.32 3.08-.98A3.6 3.6 0 0022 15c0-1.43-.6-2.4-1.38-3.04A4.36 4.36 0 0018 11h-1V9a5 5 0 00-5-5z"}}]},m=O({name:"ObjectStorageIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=y(r),p=a(()=>["t-icon","t-icon-object-storage",o.value]),v=a(()=>i(i({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>g(d,u.value)}});export{m as default};
