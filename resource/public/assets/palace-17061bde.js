import{d as f,i as a,E as O,G as m,H as y}from"./index-9f7c584d.js";function v(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?v(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 2v1.13A4 4 0 0116 7h3v2h-1v1h4v2h-1v8h1v2H2v-2h1v-8H2v-2h4V9H5V7h3a4 4 0 013-3.87V2h2zM8 9v1h8V9H8zm6-2a2 2 0 10-4 0h4zm-9 5v8h3v-2a4 4 0 018 0v2h3v-8H5zm9 8v-2a2 2 0 10-4 0v2h4z"}}]},P=f({name:"PalaceIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),s=a(()=>["t-icon","t-icon-palace",l.value]),p=a(()=>i(i({},c.value),r.style)),u=a(()=>({class:s.value,style:p.value,onClick:h=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:h})}}));return()=>m(d,u.value)}});export{P as default};