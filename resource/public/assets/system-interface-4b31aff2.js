import{d as m,i as a,E as y,G as h,H as O}from"./index-fd6a2e45.js";function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 1h22v22H1V1zm2 7.56V21h18V8.56H3zm18-2V3H3v3.56h18zM6 11h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"}}]},b=m({name:"SystemInterfaceIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=y(r),v=a(()=>["t-icon","t-icon-system-interface",o.value]),p=a(()=>l(l({},c.value),t.style)),f=a(()=>({class:v.value,style:p.value,onClick:u=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:u})}}));return()=>h(d,f.value)}});export{b as default};
