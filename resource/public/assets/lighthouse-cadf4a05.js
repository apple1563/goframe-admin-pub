import{d as f,i as l,E as O,G as m,H as y}from"./index-9f7c584d.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 1v1h6V1h2v9c0 2.4.48 5.31.98 7.67a71.32 71.32 0 00.96 3.98l.02.06v.01l.37 1.28h-6.11l-1-4h-.44l-1 4h-6.1l.36-1.27v-.02l.02-.06a34.65 34.65 0 00.28-1.07c.19-.72.43-1.74.68-2.91.5-2.36.98-5.28.98-7.67V1h2zm0 6v3c0 2.6-.52 5.69-1.02 8.08A73.35 73.35 0 017.3 21h1.92l1-4h3.56l1 4h1.92c-.19-.74-.43-1.75-.68-2.92A42.1 42.1 0 0115 10V7H9zm6-2V4H9v1h6zm-4 4h2v2h-2V9z"}}]},b=f({name:"LighthouseIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:a,style:c}=O(r),p=l(()=>["t-icon","t-icon-lighthouse",a.value]),v=l(()=>s(s({},c.value),t.style)),h=l(()=>({class:p.value,style:v.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>m(g,h.value)}});export{b as default};
