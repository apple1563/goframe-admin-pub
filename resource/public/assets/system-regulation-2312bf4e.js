import{d as h,i as a,E as f,G as y,H as O}from"./index-9f7c584d.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 1h22v17H1V1zm2 2v13h18V3H3zm6 2v5H7V5h2zm4 0v3h-2V5h2zm4 0v5h-2V5h2zm-4 4v5h-2V9h2zm-4 2v3H7v-3h2zm8 0v3h-2v-3h2zM3.22 21h17.56v2H3.22v-2z"}}]},z=h({name:"SystemRegulationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:v}=f(r),c=a(()=>["t-icon","t-icon-system-regulation",o.value]),p=a(()=>s(s({},v.value),t.style)),u=a(()=>({class:c.value,style:p.value,onClick:m=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:m})}}));return()=>y(g,u.value)}});export{z as default};
