import{d as V,aj as y,ay as S,r as p,w as k,aX as P,m as s,o as r,c as _,a as u,q as a,F as R,t as x,e as z,b as L,z as m,v as N,aY as F,N as M}from"./index-812ea633.js";const A=V({__name:"AuthButton",setup(j){const n=y(),i=S(),c=p([]),l=p();i.setPagination({current:1,pageSize:9999}),i.getButtonList().then(()=>{c.value=i.buttonList}),k(()=>n.buttonPermissionVisible,e=>{e&&P(n.currentRow.id).then(t=>{l.value=t.list})});const d=()=>{n.setButtonPermissionVisible(!1)},g=async()=>{await F(n.currentRow.id,l.value),M.success("设置成功").then(),d()},h=(e,t)=>(console.log("filter:",e,t),t.label.indexOf(e)!==-1),f=e=>{console.log("handleBlur: ",e.value,e.e)},v=(e,t)=>{console.log("handleChange: ",e,t)};return(e,t)=>{const b=s("t-option"),B=s("t-select"),w=s("t-space"),C=s("t-dialog");return r(),_("div",null,[u(C,{size:"large",visible:N(n).buttonPermissionVisible,header:"按钮权限设置","on-confirm":g,onClose:d},{default:a(()=>[u(w,{direction:"vertical",size:"large",style:{width:"100%"}},{default:a(()=>[u(B,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=o=>l.value=o),"min-collapsed-num":5,multiple:"",placeholder:"-请选择-",filter:h,style:{width:"400px",display:"inline-block"},onBlur:f,onChange:v},{default:a(()=>[(r(!0),_(R,null,x(c.value,o=>(r(),z(b,{key:o.id,value:o.id,label:o.title},{default:a(()=>[L("div",null,m(o.menuTitle)+"-"+m(o.title),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["visible"])])}}});export{A as _};