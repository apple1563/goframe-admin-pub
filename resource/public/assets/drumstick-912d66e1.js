import{d as m,i as a,E as O,G as d,H as y}from"./index-812ea633.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M15 3a6 6 0 00-4.2 10.29l.72.7-1.4 1.42-.72-.7a8.01 8.01 0 01-1.72-2.47l-.47.47-.01.01-.02.06a.96.96 0 000 .35c.05.36.24.84.6 1.38a6.81 6.81 0 001.71 1.76c.58.4 1.1.63 1.48.7.2.03.32.03.4.01l.06-.02.02-.01 2.13-2.1.5.08A6 6 0 1015 3zm-7.93 7.04a8 8 0 117.22 6.93l-1.43 1.4c-.63.63-1.51.7-2.25.57-.5-.1-1.04-.3-1.55-.58L8 19.42c0 .5-.04 1.17-.21 1.76-.13.41-.34.86-.73 1.22-.4.38-.93.58-1.53.6a2.24 2.24 0 01-1.57-.54c-.38-.34-.6-.76-.73-1.1a3.7 3.7 0 01-.13-.46 3.7 3.7 0 01-.45-.14 2.65 2.65 0 01-1.1-.72c-.36-.4-.56-.93-.55-1.56.01-.6.22-1.13.6-1.54.36-.39.81-.6 1.22-.72.6-.18 1.26-.21 1.77-.22l1.1-1.1a4.93 4.93 0 01-.49-1.46c-.1-.71-.01-1.54.6-2.15l1.27-1.25zm-.22 6.53L5.4 18H5c-.6 0-1.17 0-1.6.13-.21.06-.3.13-.34.17-.01.02-.06.06-.06.22 0 .14.03.18.05.2.04.05.12.1.28.17a2.05 2.05 0 00.66.11l1.03-.02L5 20.01a1.25 1.25 0 00.01.2c.02.14.05.31.1.46.06.16.12.24.16.28.02.02.06.05.2.05.17 0 .22-.05.23-.06.04-.04.1-.13.17-.33.13-.43.13-1 .13-1.6v-.42l1.43-1.43a8.61 8.61 0 01-.58-.6z"}}]},P=m({name:"DrumstickIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),p=a(()=>["t-icon","t-icon-drumstick",l.value]),u=a(()=>o(o({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>d(g,v.value)}});export{P as default};
