import{d as u,i as a,E as f,G as O,H as y}from"./index-812ea633.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var z={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm2 2v2h2V4H4zm4 0v7h8V4H8zm10 0v2h2V4h-2zm2 4h-2v3h2V8zm0 5h-2v3h2v-3zm0 5h-2v2h2v-2zm-4 2v-7H8v7h8zM6 20v-2H4v2h2zm-2-4h2v-3H4v3zm0-5h2V8H4v3z"}}]},g=u({name:"Film1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:s}=f(t),c=a(()=>["t-icon","t-icon-film-1",i.value]),p=a(()=>v(v({},s.value),r.style)),m=a(()=>({class:c.value,style:p.value,onClick:h=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:h})}}));return()=>O(z,m.value)}});export{g as default};
