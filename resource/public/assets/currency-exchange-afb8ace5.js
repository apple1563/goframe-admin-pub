import{d as h,i as a,E as y,G as O,H as g}from"./index-812ea633.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M20.5 5.83A10.49 10.49 0 001.56 10.9l-.1.99 1.98.2.1-.99a8.5 8.5 0 0115.67-3.6H17.5v2h5v-7h-2v3.33zM11 6v1a3 3 0 000 6h2a1 1 0 110 2H8.5v2H11v1h2v-1a3 3 0 100-6h-2a1 1 0 010-2h4.5V7H13V6h-2zm9.56 5.9l-.1 1a8.5 8.5 0 01-15.67 3.6H6.5v-2h-5v7h2v-3.33a10.48 10.48 0 0018.94-5.07l.1-.99-1.98-.2z"}}]},b=h({name:"CurrencyExchangeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),v=a(()=>["t-icon","t-icon-currency-exchange",l.value]),p=a(()=>i(i({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
