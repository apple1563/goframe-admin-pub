import{d,i as l,E as O,G as y,H as m}from"./index-812ea633.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_7351)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .19l3.62 3.08 4.73.38.38 4.73L23.81 12l-3.08 3.62-.38 4.73-4.73.38L12 23.81l-3.62-3.08-4.73-.38-.38-4.73L.19 12l3.08-3.62.38-4.73 4.73-.38L12 .19zm0 2.62l-2.81 2.4-3.69.3-.29 3.68L2.81 12l2.4 2.81.3 3.69 3.68.29 2.81 2.4 2.81-2.4 3.69-.3.29-3.68 2.4-2.81-2.4-2.81-.3-3.69-3.68-.29L12 2.81zm5.91 6.69L11 16.41 6.59 12 8 10.59l3 3 5.5-5.5 1.41 1.41z"}}]}]},b=d({name:"VerifiedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:s}=O(t),p=l(()=>["t-icon","t-icon-verified",a.value]),u=l(()=>c(c({},s.value),r.style)),f=l(()=>({class:p.value,style:u.value,onClick:v=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:v})}}));return()=>y(g,f.value)}});export{b as default};
