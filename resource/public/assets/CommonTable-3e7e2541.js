import{d as V,al as w,u as S,r as k,j as D,i as F,a2 as K,m as s,o as T,c as B,a as e,q as a,v as o,Q as U,x as f,b as N,g as A}from"./index-fd6a2e45.js";const z=[{title:"账号",fixed:"left",ellipsis:!0,align:"left",colKey:"username"},{title:"角色",ellipsis:!0,colKey:"roleName"},{title:"上级",ellipsis:!0,colKey:"pUsername"},{title:"浏览器",ellipsis:!0,colKey:"clientAgent"},{title:"ip",ellipsis:!0,colKey:"ip"},{title:"时间",ellipsis:!0,colKey:"updatedAt"}],P={class:"list-common-table"},W={class:"table-container"},M="index",R="top",j=!0,q=V({__name:"CommonTable",setup(E){const t=w(),g=S(),m=k(null);D(()=>{t.getLoginLogList()});const h=l=>{m.value.reset(),console.log(l)},p=()=>{t.getLoginLogList()},y=(l,n)=>{console.log("分页变化",l,n),t.setPagination({...t.pagination,current:l.current,pageSize:l.pageSize}),p()},b=(l,n)=>{console.log("统一Change",l,n)},x=F(()=>({offsetTop:g.isUseTabsRouter?48:0,container:`.${K}-layout`}));return(l,n)=>{const d=s("t-input"),c=s("t-form-item"),i=s("t-col"),v=s("t-date-range-picker"),u=s("t-row"),_=s("t-button"),C=s("t-form"),L=s("t-table");return T(),B("div",P,[e(C,{ref_key:"form",ref:m,data:o(t).searchFormData,"label-width":80,colon:"",onReset:h,onSubmit:p},{default:a(()=>[e(u,null,{default:a(()=>[e(i,{span:10},{default:a(()=>[e(u,{gutter:[24,24]},{default:a(()=>[e(i,{span:4},{default:a(()=>[e(c,{label:"用户名",name:"username"},{default:a(()=>[e(d,{modelValue:o(t).searchFormData.username,"onUpdate:modelValue":n[0]||(n[0]=r=>o(t).searchFormData.username=r),class:"form-item-content",type:"search",placeholder:"请输入username",style:{minWidth:"134px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{span:4},{default:a(()=>[e(c,{label:"ip地址",name:"ip"},{default:a(()=>[e(d,{modelValue:o(t).searchFormData.ip,"onUpdate:modelValue":n[1]||(n[1]=r=>o(t).searchFormData.ip=r),class:"form-item-content",type:"search",placeholder:"请输入ip名",style:{minWidth:"134px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{span:4},{default:a(()=>[e(c,{label:"时间",name:"timeBetween"},{default:a(()=>[e(v,{modelValue:o(t).searchFormData.timeBetween,"onUpdate:modelValue":n[2]||(n[2]=r=>o(t).searchFormData.timeBetween=r),class:"form-item-content","enable-time-picker":"","allow-input":"",clearable:"",style:{minWidth:"134px"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(i,{span:2,class:"operation-container"},{default:a(()=>[e(_,{theme:"primary",type:"submit",style:U({marginLeft:"var(--td-comp-margin-s)"})},{default:a(()=>[f(" 查询 ")]),_:1},8,["style"]),e(_,{type:"reset",variant:"base",theme:"default"},{default:a(()=>[f(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data"]),N("div",W,[e(L,{data:o(t).loginLogList,columns:o(z),"row-key":M,"vertical-align":R,hover:j,pagination:o(t).pagination,loading:o(t).dataLoading,"header-affixed-top":x.value,onPageChange:y,onChange:b},null,8,["data","columns","pagination","loading","header-affixed-top"])])])}}});const Q=A(q,[["__scopeId","data-v-36abac61"]]);export{Q as default};
