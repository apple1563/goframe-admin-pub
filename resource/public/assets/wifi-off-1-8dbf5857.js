import{d as O,i as a,E as y,G as d,H as m}from"./index-9f7c584d.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1.59L22.41 21 21 22.41l-5.36-5.36L12 21.6.6 7.35l.78-.62c.75-.6 1.53-1.13 2.35-1.59L1.59 3 3 1.59zm2.2 5.03c-.6.31-1.2.67-1.77 1.07L12 18.39l2.21-2.76-9-9zM20.58 7.7A15 15 0 009.4 5.22l-.99.18-.34-1.97.99-.18c4.68-.81 9.64.34 13.55 3.47l.78.63-5.47 6.83-1.56-1.25 4.2-5.24z"}}]},w=O({name:"WifiOff1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:s}=y(t),f=a(()=>["t-icon","t-icon-wifi-off-1",i.value]),p=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:f.value,style:p.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>d(g,u.value)}});export{w as default};