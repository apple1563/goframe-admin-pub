import{d as h,i as a,E as y,G as m,H as O}from"./index-9f7c584d.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h10v8h10v12H2V2zm10 10v8h4v-5h4v-3h-8zm8 5h-2v3h2v-3zm-10 3V4H4v16h6zM8 6v2H6V6h2zm0 5v2H6v-2h2zm0 5v2H6v-2h2z"}}]},b=h({name:"City1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:c}=y(r),s=a(()=>["t-icon","t-icon-city-1",i.value]),p=a(()=>v(v({},c.value),t.style)),u=a(()=>({class:s.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(d,u.value)}});export{b as default};
