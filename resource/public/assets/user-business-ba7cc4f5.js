import{d as O,i as a,E as m,G as y,H as d}from"./index-812ea633.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM6.5 7.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zM3 19a5 5 0 015-5h8a5 5 0 015 5v3H3v-3zm5-3a3 3 0 00-3 3v1h5.61l-1.33-4H8zm3.39 0l.61 1.84.61-1.84H11.4zm3.33 0l-1.33 4H19v-1a3 3 0 00-3-3h-1.28z"}}]},h=O({name:"UserBusinessIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:s,style:c}=m(t),p=a(()=>["t-icon","t-icon-user-business",s.value]),u=a(()=>o(o({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(b,v.value)}});export{h as default};
