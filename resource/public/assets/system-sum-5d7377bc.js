import{d as f,i as n,E as y,G as O,H as d}from"./index-9f7c584d.js";function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?s(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13.53 5.7a32.12 32.12 0 014.61 4.61 17.5 17.5 0 001.38-2.5c.46-1.03.68-1.91.71-2.6.03-.68-.14-1.05-.34-1.26-.2-.2-.59-.37-1.27-.35-.68.03-1.56.26-2.6.71-.78.35-1.62.81-2.5 1.38zm-1.7-1.28a20.4 20.4 0 013.39-1.94 9.47 9.47 0 013.32-.87c1.02-.05 2.03.2 2.76.93.74.73.97 1.74.93 2.76a9.47 9.47 0 01-.88 3.32A20.4 20.4 0 0119.42 12c.8 1.16 1.46 2.3 1.93 3.38.52 1.17.84 2.3.88 3.32a3.58 3.58 0 01-.93 2.76c-.73.74-1.74.97-2.76.93a9.47 9.47 0 01-3.32-.88 20.42 20.42 0 01-3.38-1.93c-1.16.8-2.3 1.46-3.38 1.93-1.17.52-2.3.84-3.32.88a3.58 3.58 0 01-2.76-.93 3.58 3.58 0 01-.93-2.76c.04-1.02.36-2.15.87-3.32A20.41 20.41 0 014.26 12c-.8-1.16-1.46-2.3-1.94-3.38a9.47 9.47 0 01-.87-3.32c-.05-1.02.2-2.03.93-2.76a3.58 3.58 0 012.76-.93c1.02.04 2.15.36 3.32.87a20.4 20.4 0 013.38 1.94zm-6.3 5.9a32.12 32.12 0 014.62-4.63 17.52 17.52 0 00-2.5-1.38 7.53 7.53 0 00-2.6-.7c-.68-.03-1.05.13-1.26.34-.2.2-.37.58-.34 1.26.02.69.25 1.57.7 2.6.35.79.81 1.63 1.38 2.5zM6.75 12a29.74 29.74 0 005.09 5.1 29.74 29.74 0 005.1-5.1 29.73 29.73 0 00-5.1-5.1 29.75 29.75 0 00-5.1 5.1zm-1.22 1.69c-.57.87-1.03 1.71-1.38 2.5a7.53 7.53 0 00-.7 2.6c-.03.68.13 1.05.34 1.26.2.2.58.37 1.26.34a7.53 7.53 0 002.6-.7c.79-.35 1.63-.82 2.5-1.39a32.1 32.1 0 01-4.62-4.61zm8 4.61c.87.57 1.71 1.04 2.5 1.38 1.03.46 1.91.68 2.6.71.68.03 1.05-.14 1.26-.34.2-.2.37-.58.34-1.27a7.53 7.53 0 00-.7-2.6c-.35-.78-.81-1.62-1.39-2.5a32.12 32.12 0 01-4.61 4.62zM11 11h2v2h-2v-2z"}}]},h=f({name:"SystemSumIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:c,style:l}=y(r),p=n(()=>["t-icon","t-icon-system-sum",c.value]),u=n(()=>i(i({},l.value),t.style)),v=n(()=>({class:p.value,style:u.value,onClick:m=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:m})}}));return()=>O(g,v.value)}});export{h as default};