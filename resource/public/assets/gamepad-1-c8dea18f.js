import{d as f,i as a,E as m,G as d,H as O}from"./index-fd6a2e45.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11 4c0-1.1.9-2 2-2h4v2h-4v2h9v14H2V6h9V4zM4 8v10h16V8H4zm5 2v2h2v2H9v2H7v-2H5v-2h2v-2h2zm6 0h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2zm0 2v2h2v-2h-2z"}}]},b=f({name:"Gamepad1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=m(t),c=a(()=>["t-icon","t-icon-gamepad-1",o.value]),p=a(()=>l(l({},s.value),r.style)),h=a(()=>({class:c.value,style:p.value,onClick:u=>{var v;return(v=e.onClick)===null||v===void 0?void 0:v.call(e,{e:u})}}));return()=>d(y,h.value)}});export{b as default};
