import{d as O,i as n,E as m,G as y,H as d}from"./index-812ea633.js";function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3.16 1h17.68l-.38 1.29-.02.05a17.74 17.74 0 00-.2.77c-.14.53-.33 1.3-.5 2.21A35.14 35.14 0 0019 12c0 2.4.36 4.84.73 6.68a42.15 42.15 0 00.71 2.98l.02.04v.01l.38 1.29H3.16l.38-1.29.02-.05a18.03 18.03 0 00.2-.77A35.14 35.14 0 005 12c.01-2.4-.35-4.83-.72-6.67a42.22 42.22 0 00-.71-2.98l-.01-.04v-.01L3.14 1zM5.8 3A37.12 37.12 0 017 12a37.12 37.12 0 01-1.2 9h12.4a37.12 37.12 0 01-1.2-9 37.12 37.12 0 011.2-9H5.8z"}}]},b=O({name:"PanoramaVerticalIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:l,style:s}=m(t),p=n(()=>["t-icon","t-icon-panorama-vertical",l.value]),v=n(()=>c(c({},s.value),r.style)),u=n(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(g,u.value)}});export{b as default};
