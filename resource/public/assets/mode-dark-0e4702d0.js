import{d,i as a,E as m,G as O,H as y}from"./index-9f7c584d.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M15.84 3.34l-1.42.79 1.42.78.79 1.42.78-1.42 1.42-.78-1.42-.79-.79-1.42-.78 1.42zm-5.43.82A8 8 0 1018.93 16 9 9 0 0110 7c0-.98.13-1.94.41-2.84zM2 12A10 10 0 0112 2h1.73l-.86 1.5C12.29 4.5 12 5.7 12 7a7 7 0 008.35 6.87l1.68-.33-.54 1.63A10 10 0 012 12zm18.5-5.58l.91 1.67 1.67.91-1.67.91-.91 1.67-.91-1.67L17.92 9l1.67-.91.91-1.67z"}}]},P=d({name:"ModeDarkIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),p=a(()=>["t-icon","t-icon-mode-dark",o.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(g,v.value)}});export{P as default};
