import{d as O,i as l,E as y,G as m,H as d}from"./index-9f7c584d.js";function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1.94 1h20.12l-1.1 19.2L12 23.58 3.04 20.2 1.94 1zm2.12 2l.9 15.8L12 21.42l7.04-2.64.9-15.79H4.06zm1.42 2h12.85l-.1 1.89-7.3 3.49h7.1l-.41 7.08-5.62 2.1-5.62-2.1-.11-2-.08-1.39H8.2l.06 1.29.04.69 3.7 1.38 3.7-1.38.2-3.67H6.1l-.11-1.85L13.35 7H12l-6.25.01L5.48 5z"}}]},b=O({name:"Css3Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=y(t),p=l(()=>["t-icon","t-icon-css3",a.value]),u=l(()=>i(i({},c.value),r.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{b as default};
