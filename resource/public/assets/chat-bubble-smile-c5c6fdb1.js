import{d as b,i as a,E as O,G as m,H as y}from"./index-812ea633.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8.33 13.6l-.4-.92-1.83.8.4.92a6 6 0 0011 0l.4-.92-1.83-.8-.4.92a4 4 0 01-7.34 0z"}},{tag:"path",attrs:{fill:"currentColor",d:"M12 1a11 11 0 00-8.48 18L1.3 23H12a11 11 0 000-22zM3 12a9 9 0 119 9H4.7l1.27-2.28-.5-.53A8.97 8.97 0 013 12z"}}]},h=b({name:"ChatBubbleSmileIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=O(r),p=a(()=>["t-icon","t-icon-chat-bubble-smile",l.value]),u=a(()=>s(s({},c.value),t.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>m(d,f.value)}});export{h as default};
