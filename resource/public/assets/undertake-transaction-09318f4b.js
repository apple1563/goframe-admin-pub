import{d,i as a,E as O,G as h,H as m}from"./index-9f7c584d.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M14.5 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM10 5.5a4.5 4.5 0 016.5-4.03A4.49 4.49 0 0123 5.5a4.5 4.5 0 01-6.5 4.03A4.49 4.49 0 0110 5.5zm8.25 2.49l.25.01a2.5 2.5 0 10-.25-4.99 4.48 4.48 0 010 4.98zm-9.81 5.26a1.25 1.25 0 00-.89.36L5.5 15.66v3.84h5.63l5.8-1.45 3.53-1.5a.56.56 0 00-.41-1.03h-.02L13.6 17H10v-2h3.13a.87.87 0 100-1.75h-4.7zm7.55 1.15l3.55-.82a2.56 2.56 0 011.8 4.76l-.03.02-3.74 1.6-6.2 1.54H0v-7.25h4.09l2.05-2.05a3.25 3.25 0 012.3-.95h4.69a2.87 2.87 0 012.86 3.15zM3.5 16.25H2v3.25h1.5v-3.25z"}}]},b=d({name:"UndertakeTransactionIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=O(r),p=a(()=>["t-icon","t-icon-undertake-transaction",o.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>h(y,u.value)}});export{b as default};
