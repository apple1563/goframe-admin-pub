import{d as h,i as a,E as m,G as O,H as y}from"./index-9f7c584d.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 1v15h6v2H6V8H1V6h5V1h2zm2 5h8v10h5v2h-5v5h-2V8h-6V6z"}}]},b=h({name:"Transform2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),p=a(()=>["t-icon","t-icon-transform-2",o.value]),v=a(()=>s(s({},c.value),r.style)),f=a(()=>({class:p.value,style:v.value,onClick:u=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:u})}}));return()=>O(d,f.value)}});export{b as default};
