import{d as y,i as n,E as O,G as m,H as d}from"./index-9f7c584d.js";function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?o(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 3h22v17h-5.5v-2H21V5H3v13h3.5v2H1V3zm15.95 10.38a7 7 0 00-9.9 0l-.7.71-1.42-1.41.7-.71a9 9 0 0112.73 0l.71.7-1.41 1.42-.71-.7zm-2.83 2.83a3 3 0 00-4.24 0l-.7.7-1.42-1.4.7-.71a5 5 0 017.08 0l.7.7-1.41 1.42-.7-.7zM12 18.1L15.91 22H8.1L12 18.09z"}}]},b=y({name:"AirplayWaveIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:l,style:p}=O(t),c=n(()=>["t-icon","t-icon-airplay-wave",l.value]),v=n(()=>s(s({},p.value),r.style)),u=n(()=>({class:c.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(g,u.value)}});export{b as default};
