import{T as b}from"./index-002cbfa3.js";import{d as y,u as I,r as O,i as W,j as z,n as B,k as N,w as x,m as r,o as D,e as L,q as e,a as t,s as w,v as $,x as m,b as s,y as V,p as j,f as A,g as F}from"./index-812ea633.js";import{L as C}from"./date-cfb2be51.js";import{c as g}from"./index-37d0be60.js";import{u as q,i as H,h as M,j as U}from"./charts-6da7917c.js";import{c as Y,b as G,a as J}from"./install-3b1d0747.js";const p=d=>(j("data-v-24e20917"),d=d(),A(),d),K=p(()=>s("div",{id:"stokeContainer",style:{width:"100%",height:"351px"},class:"dashboard-chart-container"},null,-1)),P={class:"inner-card__content"},Q=p(()=>s("div",{class:"inner-card__content-title"},"1726",-1)),R={class:"inner-card__content-footer"},X={class:"inner-card__content"},Z=p(()=>s("div",{class:"inner-card__content-title"},"226",-1)),ee={class:"inner-card__content-footer"},te={name:"DashboardBase"},se=y({...te,setup(d){q([Y,G,J,H,M]);const l=I(),_=O(1),h=W(()=>l.chartColors);let n,a;const k=()=>{n||(n=document.getElementById("stokeContainer")),a=U(n),a.setOption(g({dateTime:C,...h.value}))},f=()=>{k()},u=()=>{document.documentElement.clientWidth>=1400&&document.documentElement.clientWidth<1920?_.value=Number((document.documentElement.clientWidth/2080).toFixed(2)):document.documentElement.clientWidth<1080?_.value=Number((document.documentElement.clientWidth/1080).toFixed(2)):_.value=1,a.resize({width:n.clientWidth,height:n.clientHeight})};z(()=>{f(),B(()=>{u()}),window.addEventListener("resize",u,!1)}),N(()=>{window.removeEventListener("resize",u)}),x(()=>l.brandTheme,()=>{V([a])}),x(()=>l.mode,()=>{[a].forEach(c=>{c.dispose()}),f()});const T=c=>{a.setOption(g({dateTime:c,...h.value}))};return(c,ae)=>{const E=r("t-date-range-picker"),o=r("t-card"),i=r("t-col"),S=r("t-button"),v=r("t-row");return D(),L(o,{bordered:!1},{default:e(()=>[t(v,null,{default:e(()=>[t(i,{xs:12,xl:9},{default:e(()=>[t(o,{bordered:!1,title:"出入库概览",subtitle:"(件)",class:w({"dashboard-overview-card":!0,"overview-panel":!0})},{actions:e(()=>[t(E,{class:"card-date-picker-container",theme:"primary",mode:"date","default-value":$(C),onChange:T},null,8,["default-value"])]),default:e(()=>[K]),_:1})]),_:1}),t(i,{xs:12,xl:3},{default:e(()=>[t(o,{bordered:!1,class:w({"dashboard-overview-card":!0,"export-panel":!0})},{actions:e(()=>[t(S,null,{default:e(()=>[m("导出数据")]),_:1})]),default:e(()=>[t(v,null,{default:e(()=>[t(i,{xs:6,xl:12},{default:e(()=>[t(o,{bordered:!1,subtitle:"本月出库总计（件）",class:"inner-card"},{default:e(()=>[s("div",P,[Q,s("div",R,[m(" 自从上周以来 "),t(b,{class:"trend-tag",type:"down","is-reverse-color":!1,describe:"20.3%"})])])]),_:1})]),_:1}),t(i,{xs:6,xl:12},{default:e(()=>[t(o,{bordered:!1,subtitle:"本月入库总计（件）",class:"inner-card"},{default:e(()=>[s("div",X,[Z,s("div",ee,[m(" 自从上周以来 "),t(b,{class:"trend-tag",type:"down","is-reverse-color":!1,describe:"20.3%"})])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});const le=F(se,[["__scopeId","data-v-24e20917"]]);export{le as default};