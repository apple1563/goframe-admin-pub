import{d as O,i as n,E as m,G as y,H as d}from"./index-fd6a2e45.js";function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.98 1.55l.82.56C20 2.94 21.06 4 21.9 5.2l.56.82-1.64 1.14-.57-.83c-.7-1-1.57-1.88-2.57-2.57l-.83-.57 1.14-1.64zm-6.52 5.33a.39.39 0 00-.55.55l5.23 5.23-1.41 1.42-6.6-6.6a.39.39 0 00-.55.54l6.6 6.6-1.41 1.42-5.24-5.24a.39.39 0 00-.55.55l5.24 5.24L10.81 18l-3.16-3.15a.39.39 0 00-.54.55l4.32 4.32a5.19 5.19 0 007.34 0l.84-.85c1.67-1.67 2-4.25.81-6.29l-2.22-3.8a.15.15 0 00-.27.1l.67 2.5a1 1 0 01-.28.98 1 1 0 01-1.4-.01l-5.46-5.47zm-5.47 6.3l-.42-.42a2.39 2.39 0 01.33-3.65A2.39 2.39 0 019.22 5.8a2.39 2.39 0 013.65-.33l3.08 3.08a2.15 2.15 0 013.97-.78l2.23 3.82a7.19 7.19 0 01-1.12 8.7l-.85.85a7.19 7.19 0 01-10.17 0L5.7 16.81a2.39 2.39 0 01.3-3.63zm-2.8 3.66l.57.83c.7 1 1.57 1.88 2.57 2.57l.83.57-1.14 1.64-.82-.56A12.06 12.06 0 012.1 18.8l-.56-.82 1.64-1.14z"}}]},P=O({name:"GestureRanslation1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:l,style:c}=m(r),p=n(()=>["t-icon","t-icon-gesture-ranslation-1",l.value]),u=n(()=>s(s({},c.value),t.style)),v=n(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(g,v.value)}});export{P as default};
