import{d as h,i as n,E as d,G as O,H as y}from"./index-812ea633.js";function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?o(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 109 9v-1h2v1A11 11 0 1112 1h1v2h-1zm0 4a5 5 0 103.51 1.44l-.7-.7 1.4-1.42.71.7A7 7 0 1112 5h1v2h-1zm0 4a1 1 0 101 1v-1h2v1a3 3 0 11-3-3h1v2h-1z"}}]},b=h({name:"ChartRadialIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:l,style:s}=d(t),p=n(()=>["t-icon","t-icon-chart-radial",l.value]),v=n(()=>c(c({},s.value),r.style)),u=n(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(m,u.value)}});export{b as default};
