import{d as h,i as a,E as m,G as O,H as d}from"./index-fd6a2e45.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.22 1h11.56l1 4H21v15h1v2H2v-2h1V5h2.22l1-4zm1.06 4h9.44l-.5-2H7.78l-.5 2zM5 20h3v-8h8v8h3V7H5v13zm9 0v-6h-4v6h4z"}}]},b=h({name:"Dam7Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=m(t),v=a(()=>["t-icon","t-icon-dam-7",l.value]),p=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(y,u.value)}});export{b as default};
