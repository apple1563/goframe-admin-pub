import{d as O,i as a,E as m,G as y,H as d}from"./index-9f7c584d.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 1.91l3.64 8.7.4.89-.02.01L19.16 19H21v2H3v-2h1.83l3.15-7.49-.03-.01.4-.9L12 1.91zm-1.85 9.59L9 14.23h6l-1.15-2.73h-3.7zm2.86-2L12 7.09 10.99 9.5H13zm2.83 6.73H8.17L7 19h10l-1.16-2.77z"}}]},b=O({name:"TrafficEventsIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=m(r),p=a(()=>["t-icon","t-icon-traffic-events",l.value]),f=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:p.value,style:f.value,onClick:u=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:u})}}));return()=>y(h,v.value)}});export{b as default};
