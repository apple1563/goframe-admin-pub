import{d as y,i as a,E as m,G as O,H as d}from"./index-812ea633.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 12.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM10.5 16a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"}},{tag:"path",attrs:{fill:"currentColor",d:"M17.53 5.12L14.35.66 2.65 10H1.5v12h21V10h-.96l-1.92-5.6-2.1.72zm1.9 4.88H9.4l7.47-2.55 1.52-.48L19.42 10zm-3.88-4.21L7.84 8.42l6.1-4.88 1.61 2.25zM3.5 18.17v-4.34A3 3 0 005.33 12h13.34a3 3 0 001.83 1.83v4.34A3 3 0 0018.67 20H5.33a3.01 3.01 0 00-1.83-1.83z"}}]},b=y({name:"MoneyIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=m(r),p=a(()=>["t-icon","t-icon-money",o.value]),u=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(g,v.value)}});export{b as default};
