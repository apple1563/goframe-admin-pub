import{d as O,aM as j,u as q,r as f,i as C,j as I,a2 as K,m as r,o as Q,c as G,a as e,q as a,v as n,Q as V,x as i,b as H,aS as J,N as W,g as X}from"./index-fd6a2e45.js";import{C as Y}from"./constants-e39b1224.js";const Z={class:"list-common-table"},ee={class:"table-container"},te="index",ae="top",oe=!0,ne=O({__name:"CommonTable",setup(le){const t=j(),x=q(),g=f(null),d=f(!1),m=f(-1),k=C(()=>m.value>-1?"删除后，公告无法恢复":""),h=()=>{m.value=-1},N=async()=>{await J(m.value),d.value=!1,W.success("删除成功"),h(),t.getNoticeList()},D=()=>{h()};I(()=>{t.getNoticeList()});const S=l=>{m.value=l.row.id,d.value=!0},w=l=>{g.value.reset(),console.log(l)},b=()=>{t.getNoticeList()},F=(l,o)=>{console.log("分页变化",l,o),t.setPagination({...t.pagination,current:l.current,pageSize:l.pageSize}),b()},L=(l,o)=>{console.log("统一Change",l,o)},T=l=>{t.setCurrentRow(l.row),M()},U=C(()=>({offsetTop:x.isUseTabsRouter?48:0,container:`.${K}-layout`})),B=()=>{t.setAddVisible(!0)},M=()=>{t.setEditVisible(!0)};return(l,o)=>{const _=r("t-input"),u=r("t-form-item"),c=r("t-col"),z=r("t-input-number"),v=r("t-row"),p=r("t-button"),A=r("t-form"),y=r("t-link"),P=r("t-space"),R=r("t-table"),$=r("t-dialog");return Q(),G("div",Z,[e(A,{ref_key:"form",ref:g,data:n(t).searchFormData,"label-width":80,colon:"",onReset:w,onSubmit:b},{default:a(()=>[e(v,null,{default:a(()=>[e(c,{span:10},{default:a(()=>[e(v,{gutter:[24,24]},{default:a(()=>[e(c,{span:3},{default:a(()=>[e(u,{label:"标题",name:"title"},{default:a(()=>[e(_,{modelValue:n(t).searchFormData.title,"onUpdate:modelValue":o[0]||(o[0]=s=>n(t).searchFormData.title=s),class:"form-item-content",type:"search",placeholder:"请输入标题关键字"},null,8,["modelValue"])]),_:1})]),_:1}),e(c,{span:3},{default:a(()=>[e(u,{label:"内容",name:"content"},{default:a(()=>[e(_,{modelValue:n(t).searchFormData.content,"onUpdate:modelValue":o[1]||(o[1]=s=>n(t).searchFormData.content=s),class:"form-item-content",type:"search",placeholder:"请输入内容关键字"},null,8,["modelValue"])]),_:1})]),_:1}),e(c,{span:3},{default:a(()=>[e(u,{label:"标签",name:"tag"},{default:a(()=>[e(_,{modelValue:n(t).searchFormData.tag,"onUpdate:modelValue":o[2]||(o[2]=s=>n(t).searchFormData.tag=s),class:"form-item-content",type:"search",placeholder:"请输入标签"},null,8,["modelValue"])]),_:1})]),_:1}),e(c,{span:3},{default:a(()=>[e(u,{label:"创建者",name:"creater"},{default:a(()=>[e(z,{modelValue:n(t).searchFormData.creater,"onUpdate:modelValue":o[3]||(o[3]=s=>n(t).searchFormData.creater=s),class:"form-item-content",type:"search",placeholder:"请输入创建者账号"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{span:2,class:"operation-container"},{default:a(()=>[e(p,{theme:"primary",type:"button",style:V({marginLeft:"var(--td-comp-margin-s)"}),onClick:B},{default:a(()=>[i(" 发送 ")]),_:1},8,["style"]),e(p,{theme:"primary",type:"submit",style:V({marginLeft:"var(--td-comp-margin-s)"})},{default:a(()=>[i(" 查询 ")]),_:1},8,["style"]),e(p,{type:"reset",variant:"base",theme:"default"},{default:a(()=>[i(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data"]),H("div",ee,[e(R,{data:n(t).noticeList,columns:n(Y),"row-key":te,"vertical-align":ae,hover:oe,pagination:n(t).pagination,loading:n(t).dataLoading,"header-affixed-top":U.value,onPageChange:F,onChange:L},{op:a(s=>[e(P,null,{default:a(()=>[e(y,{theme:"primary",onClick:E=>T(s)},{default:a(()=>[i("编辑")]),_:2},1032,["onClick"]),e(y,{theme:"danger",onClick:E=>S(s)},{default:a(()=>[i("删除")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["data","columns","pagination","loading","header-affixed-top"]),e($,{visible:d.value,"onUpdate:visible":o[4]||(o[4]=s=>d.value=s),header:"确认删除当前公告？",body:k.value,"on-cancel":D,onConfirm:N},null,8,["visible","body"])])])}}});const ce=X(ne,[["__scopeId","data-v-a7090647"]]);export{ce as default};
