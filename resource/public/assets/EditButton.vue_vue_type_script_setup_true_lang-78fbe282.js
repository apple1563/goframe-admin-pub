import{d as h,ay as B,r as f,w as C,ax as E,m as u,o as S,c as L,a,q as n,v as i,aC as U,N as _}from"./index-9f7c584d.js";import{R as x}from"./constants-64d75a77.js";const j=h({__name:"EditButton",setup(I){const m=B(),d=f(null),e=f({title:"",name:"",menuId:0,menuTitle:"",remark:""});C(()=>m.editVisible,l=>{l&&(e.value=m.currentRow)});const v={keys:{label:"title",value:"id",children:"children"}},c=E();c.getMenuTreeList();const p=()=>{m.setEditVisible(!1)},V=()=>{d.value.reset()},b=()=>{d.value.validate({showErrorMessage:!0}).then(async l=>{var t,s;if(l===!0){await U({...e.value}),_.success("修改成功"),m.getButtonList(),p();return}if(l&&Object.keys(l).length){const r=(s=(t=Object.values(l)[0])==null?void 0:t[0])==null?void 0:s.message;_.warning(r)}})};return(l,t)=>{const s=u("t-input"),r=u("t-form-item"),k=u("t-cascader"),g=u("t-form"),w=u("t-space"),y=u("t-drawer");return S(),L("div",null,[a(y,{size:"large",visible:i(m).editVisible,header:"修改按钮","on-confirm":b,onClose:p},{default:n(()=>[a(w,{direction:"vertical",size:"large",style:{width:"100%"}},{default:n(()=>[a(g,{ref_key:"form",ref:d,data:e.value,rules:i(x),onReset:V},{default:n(()=>[a(r,{label:"名称",name:"title"},{default:n(()=>[a(s,{modelValue:e.value.title,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value.title=o),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),a(r,{label:"标识码",name:"name"},{default:n(()=>[a(s,{modelValue:e.value.name,"onUpdate:modelValue":t[1]||(t[1]=o=>e.value.name=o),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),a(r,{label:"所在菜单",name:"menuId"},{default:n(()=>[a(k,{modelValue:e.value.menuId,"onUpdate:modelValue":t[2]||(t[2]=o=>e.value.menuId=o),"value-mode":"onlyLeaf",keys:v.keys,options:i(c).menuTreeList,clearable:""},null,8,["modelValue","keys","options"])]),_:1}),a(r,{label:"备注",name:"remark"},{default:n(()=>[a(s,{modelValue:e.value.remark,"onUpdate:modelValue":t[3]||(t[3]=o=>e.value.remark=o),placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1},8,["data","rules"])]),_:1})]),_:1},8,["visible"])])}}});export{j as _};