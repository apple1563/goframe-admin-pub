import{d as f,i as a,E as O,G as y,H as m}from"./index-9f7c584d.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h7v2.5h6V2h7v7h-2.5v6H22v7h-7v-2.5H9V22H2v-7h2.5V9H2V2zm5 5V4H4v3h3zm-.5 2v6H9v2.5h6V15h2.5V9H15V6.5H9V9H6.5zM17 17v3h3v-3h-3zM7 17H4v3h3v-3zM17 4v3h3V4h-3z"}}]},g=f({name:"BlockchainIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=O(t),s=a(()=>["t-icon","t-icon-blockchain",o.value]),p=a(()=>c(c({},v.value),r.style)),h=a(()=>({class:s.value,style:p.value,onClick:u=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:u})}}));return()=>y(d,h.value)}});export{g as default};
