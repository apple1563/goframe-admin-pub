import{d as x,aj as C,r as _,m as l,o as O,c as y,a as e,q as o,v as f,x as p,aU as E,N as c}from"./index-fd6a2e45.js";import{I,R as N}from"./constants-c605bb85.js";const j=x({__name:"AddRole",setup(R){const d=C(),m=_(null),a=_(I),v=()=>{d.setAddVisible(!1)},V=()=>{m.value.reset()},b=()=>{m.value.validate({showErrorMessage:!0}).then(async s=>{var t,u;if(s===!0){await E(a.value),c.success("添加成功"),d.setAddVisible(!1),d.getRoleList();return}if(s&&Object.keys(s).length){const r=(u=(t=Object.values(s)[0])==null?void 0:t[0])==null?void 0:u.message;c.warning(r)}})};return(s,t)=>{const u=l("t-input"),r=l("t-form-item"),i=l("t-radio-button"),g=l("t-radio-group"),k=l("t-input-number"),w=l("t-form"),A=l("t-space"),U=l("t-drawer");return O(),y("div",null,[e(U,{size:"large",visible:f(d).addVisible,header:"添加角色","on-confirm":b,onClose:v},{default:o(()=>[e(A,{direction:"vertical",size:"large",style:{width:"100%"}},{default:o(()=>[e(w,{ref_key:"form",ref:m,data:a.value,rules:f(N),onReset:V},{default:o(()=>[e(r,{label:"名称",name:"name"},{default:o(()=>[e(u,{modelValue:a.value.name,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value.name=n),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(r,{label:"状态",name:"status"},{default:o(()=>[e(g,{modelValue:a.value.status,"onUpdate:modelValue":t[1]||(t[1]=n=>a.value.status=n),"default-value":2},{default:o(()=>[e(i,{value:1},{default:o(()=>[p("启用")]),_:1}),e(i,{value:2},{default:o(()=>[p("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"排序",name:"listOrder"},{default:o(()=>[e(k,{modelValue:a.value.listOrder,"onUpdate:modelValue":t[2]||(t[2]=n=>a.value.listOrder=n),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(r,{label:"备注",name:"remark"},{default:o(()=>[e(u,{modelValue:a.value.remark,"onUpdate:modelValue":t[3]||(t[3]=n=>a.value.remark=n),placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1},8,["data","rules"])]),_:1})]),_:1},8,["visible"])])}}});export{j as _};
