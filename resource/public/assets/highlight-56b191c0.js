import{d as f,i as a,E as g,G as m,H as O}from"./index-9f7c584d.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h3.5v2H4v1.5H2V2zm5.5 0h3v2h-3V2zm5 0h3v2h-3V2zm5 0H21v3.5h-2V4h-1.5V2zM4 7.5v3H2v-3h2zm17 0v3h-2v-3h2zm-17 5v3H2v-3h2zM20 14v2h-2.59l4 4L20 21.41l-4-4V20h-2v-6h6zM4 17.5V19h1.5v2H2v-3.5h2zM7.5 19h3v2h-3v-2z"}}]},z=f({name:"HighlightIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:h}=g(r),s=a(()=>["t-icon","t-icon-highlight",i.value]),c=a(()=>v(v({},h.value),t.style)),p=a(()=>({class:s.value,style:c.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>m(y,p.value)}});export{z as default};
