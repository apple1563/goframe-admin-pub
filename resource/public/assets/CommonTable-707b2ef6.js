import{d as W,u as X,ai as Y,aj as Z,r as p,j as ee,i as w,a2 as te,m as s,o as f,c as ae,a as e,q as t,v as o,Q as A,x as c,b as oe,e as b,M as h,ak as ne,N as le,g as se}from"./index-812ea633.js";import{U as y,C as re}from"./constants-22cde1fe.js";const ie={class:"list-common-table"},ce={class:"table-container"},de="index",ue="top",me=!0,_e=W({__name:"CommonTable",setup(pe){const E=X(),l=Y(),C=Z(),B={value:"id",label:"name"},k=p([]);ee(()=>{l.getUserList(),C.getRoleListForSelect().then(()=>{k.value=C.roleListForSelect})});const U=p(),i=l.searchFormData,u=p(!1),m=p(-1),N=w(()=>m.value>-1?"注销后，账号将无法使用":""),V=()=>{m.value=-1},D=async()=>{await ne(m.value),u.value=!1,le.success("注销成功"),V(),l.getUserList(),l.getUserTreeList()},R=()=>{V()},I=r=>{m.value=r.row.id,u.value=!0},F=()=>{U.value.reset()},S=()=>{l.getUserList()},M=(r,n)=>{console.log("分页变化",r,n),l.setPagination({...l.pagination,current:r.current,pageSize:r.pageSize}),S()},O=(r,n)=>{console.log("统一Change",r,n)},z=()=>{l.setAddVisible(!0)},P=r=>{l.setEditVisible(!0),l.setCurrentRow(r.row)},$=w(()=>({offsetTop:E.isUseTabsRouter?48:0,container:`.${te}-layout`}));return(r,n)=>{const j=s("t-input-number"),_=s("t-form-item"),d=s("t-col"),x=s("t-input"),q=s("t-select"),L=s("t-row"),g=s("t-button"),K=s("t-form"),v=s("t-tag"),T=s("t-link"),Q=s("t-space"),G=s("t-table"),H=s("t-dialog");return f(),ae("div",ie,[e(K,{ref_key:"form",ref:U,data:o(i),"label-width":80,colon:"",onReset:F,onSubmit:S},{default:t(()=>[e(L,null,{default:t(()=>[e(d,{span:10},{default:t(()=>[e(L,{gutter:[24,24]},{default:t(()=>[e(d,{span:3},{default:t(()=>[e(_,{label:"用户id",name:"id"},{default:t(()=>[e(j,{modelValue:o(i).id,"onUpdate:modelValue":n[0]||(n[0]=a=>o(i).id=a),class:"form-item-content",type:"search",placeholder:"请输入用户id"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:3},{default:t(()=>[e(_,{label:"用户名",name:"username"},{default:t(()=>[e(x,{modelValue:o(i).username,"onUpdate:modelValue":n[1]||(n[1]=a=>o(i).username=a),class:"form-item-content",type:"search",placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:3},{default:t(()=>[e(_,{label:"用户角色",name:"roleId"},{default:t(()=>[e(q,{modelValue:o(i).roleId,"onUpdate:modelValue":n[2]||(n[2]=a=>o(i).roleId=a),class:"form-item-content",keys:B,options:k.value,placeholder:"请选择用户角色",clearable:""},null,8,["modelValue","options"])]),_:1})]),_:1}),e(d,{span:3},{default:t(()=>[e(_,{label:"直属上级",name:"pUsername"},{default:t(()=>[e(x,{modelValue:o(i).pUsername,"onUpdate:modelValue":n[3]||(n[3]=a=>o(i).pUsername=a),class:"form-item-content",placeholder:"请输入直属上级名称"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{span:2,class:"operation-container"},{default:t(()=>[e(g,{theme:"primary",type:"button",style:A({marginLeft:"var(--td-comp-margin-s)"}),onClick:z},{default:t(()=>[c(" 新增 ")]),_:1},8,["style"]),e(g,{theme:"primary",type:"submit",style:A({marginLeft:"var(--td-comp-margin-s)"})},{default:t(()=>[c(" 查询 ")]),_:1},8,["style"]),e(g,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[c(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data"]),oe("div",ce,[e(G,{data:o(l).userList,columns:o(re),"row-key":de,"vertical-align":ue,hover:me,pagination:o(l).pagination,loading:o(l).dataLoading,"header-affixed-top":$.value,onPageChange:M,onChange:O},{status:t(({row:a})=>[a.status===o(y).ENABLE?(f(),b(v,{key:0,theme:"success",variant:"light"},{default:t(()=>[c(" 正常 ")]),_:1})):h("",!0),a.status===o(y).DISABLE?(f(),b(v,{key:1,theme:"warning",variant:"light"},{default:t(()=>[c(" 禁用 ")]),_:1})):h("",!0),a.status===o(y).DEAD?(f(),b(v,{key:2,theme:"danger",variant:"light"},{default:t(()=>[c(" 注销 ")]),_:1})):h("",!0)]),op:t(a=>[e(Q,null,{default:t(()=>[e(T,{theme:"primary",onClick:J=>P(a)},{default:t(()=>[c("编辑")]),_:2},1032,["onClick"]),e(T,{theme:"danger",onClick:J=>I(a)},{default:t(()=>[c("注销")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["data","columns","pagination","loading","header-affixed-top"]),e(H,{visible:u.value,"onUpdate:visible":n[4]||(n[4]=a=>u.value=a),header:"确认注销当前用户？",body:N.value,"on-cancel":R,onConfirm:D},null,8,["visible","body"])])])}}});const ve=se(_e,[["__scopeId","data-v-0c225f92"]]);export{ve as default};