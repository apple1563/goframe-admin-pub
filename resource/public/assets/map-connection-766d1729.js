import{d as O,i as a,E as y,G as m,H as d}from"./index-9f7c584d.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 4a2 2 0 100 4 2 2 0 000-4zM2 6a4 4 0 017.87-1h8.21l.08.01c.63.1 1.54.41 2.32 1a3.68 3.68 0 010 5.97c-.78.6-1.69.9-2.32 1l-.08.02H6c-.24 0-.77.15-1.25.53C4.3 13.9 4 14.37 4 15s.3 1.11.75 1.47c.48.38 1.01.53 1.25.53h11v-2.5l4.67 3.5L17 21.5V19H6c-.76 0-1.73-.35-2.5-.97A3.84 3.84 0 012 15c0-1.37.7-2.39 1.5-3.03A4.28 4.28 0 016 11h11.91c.37-.07.92-.27 1.36-.6a1.69 1.69 0 000-2.8A3.48 3.48 0 0017.9 7H9.87A4 4 0 012 6z"}}]},b=O({name:"MapConnectionIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=y(r),p=a(()=>["t-icon","t-icon-map-connection",o.value]),u=a(()=>l(l({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>m(g,v.value)}});export{b as default};
