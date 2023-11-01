import{d as I,r as v,ax as L,ay as M,m as u,o as S,c as C,a as n,q as o,v as p,az as T,N as V}from"./index-fd6a2e45.js";import{R as U}from"./constants-64d75a77.js";function b(d,a){if(!d||d.length===0)return"";for(const e of d){if(e.id===a)return e.title;const i=b(e.children,a);if(i)return i}return""}const z=I({__name:"AddButton",setup(d){const a=v(null),e=v({title:"",name:"",menuId:null,remark:""}),i={keys:{label:"title",value:"id",children:"children"}},c=L();c.getMenuTreeList();const f=M(),_=()=>{f.setAddVisible(!1)},k=()=>{a.value.reset()},g=()=>{a.value.validate({showErrorMessage:!0}).then(async m=>{var t,r;if(m===!0){await T({...e.value,menuTitle:b(c.menuTreeList,e.value.menuId)}),V.success("添加成功"),f.getButtonList(),_();return}if(m&&Object.keys(m).length){const s=(r=(t=Object.values(m)[0])==null?void 0:t[0])==null?void 0:r.message;V.warning(s)}})};return(m,t)=>{const r=u("t-input"),s=u("t-form-item"),y=u("t-cascader"),h=u("t-form"),w=u("t-space"),B=u("t-drawer");return S(),C("div",null,[n(B,{size:"large",visible:p(f).addVisible,header:"添加按钮","on-confirm":g,onClose:_},{default:o(()=>[n(w,{direction:"vertical",size:"large",style:{width:"100%"}},{default:o(()=>[n(h,{ref_key:"form",ref:a,data:e.value,rules:p(U),onReset:k},{default:o(()=>[n(s,{label:"名称",name:"title"},{default:o(()=>[n(r,{modelValue:e.value.title,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value.title=l),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),n(s,{label:"标识码",name:"name"},{default:o(()=>[n(r,{modelValue:e.value.name,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value.name=l),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),n(s,{label:"所在菜单",name:"menuId"},{default:o(()=>[n(y,{modelValue:e.value.menuId,"onUpdate:modelValue":t[2]||(t[2]=l=>e.value.menuId=l),"value-mode":"onlyLeaf",keys:i.keys,options:p(c).menuTreeList,clearable:""},null,8,["modelValue","keys","options"])]),_:1}),n(s,{label:"备注",name:"remark"},{default:o(()=>[n(r,{modelValue:e.value.remark,"onUpdate:modelValue":t[3]||(t[3]=l=>e.value.remark=l),placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1},8,["data","rules"])]),_:1})]),_:1},8,["visible"])])}}});export{z as _};
