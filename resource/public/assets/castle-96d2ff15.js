import{d as f,i as a,E as O,G as m,H as y}from"./index-812ea633.js";function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?v(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7 2v2h2V2h2v2h2V2h2v2h2V2h2v12h2v-1h2v9H1v-9h2v1h2V2h2zM5 16H3v4h2v-4zm2 4h2v-7h6v7h2V6H7v14zm12 0h2v-4h-2v4zm-6 0v-5h-2v5h2z"}}]},b=f({name:"CastleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=O(r),c=a(()=>["t-icon","t-icon-castle",l.value]),p=a(()=>i(i({},s.value),t.style)),h=a(()=>({class:c.value,style:p.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>m(d,h.value)}});export{b as default};
