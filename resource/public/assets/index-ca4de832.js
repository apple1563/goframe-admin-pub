import{d as Q,u as W,r,i as E,j as Z,J as ee,a2 as te,m as u,o,c as p,a as n,q as a,b as S,x as l,z as ae,M as c,v as s,ac as ne,ad as v,e as m,ae as T,af as I,N as oe,g as se}from"./index-9f7c584d.js";import{g as le}from"./list-fa0ba668.js";import{T as P}from"./index-f078d9f9.js";const ce=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{title:"合同名称",align:"left",width:320,colKey:"name",fixed:"left"},{title:"合同状态",colKey:"status",width:160},{title:"合同编号",width:160,ellipsis:!0,colKey:"no"},{title:"合同类型",width:160,ellipsis:!0,colKey:"contractType"},{title:"合同收付类型",width:160,ellipsis:!0,colKey:"paymentType"},{title:"合同金额 (元)",width:160,ellipsis:!0,colKey:"amount"},{align:"left",fixed:"right",width:160,colKey:"op",title:"操作"}],ie={class:"left-operation-container"},ue={key:0,class:"selected-count"},de={class:"search-input"},re={key:0},pe={key:1},_e={key:2},fe={key:0,class:"payment-col"},he={key:1,class:"payment-col"},ve={name:"ListBase"},me=Q({...ve,setup(ye){const A=W(),f=r([]),y=r({defaultPageSize:20,total:100,defaultCurrent:1}),k=r(""),C=r(!1),K=async()=>{C.value=!0;try{const{list:e}=await le();f.value=e,y.value={...y.value,total:e.length}}catch(e){console.log(e)}finally{C.value=!1}},_=r(-1),U=E(()=>{if(_.value>-1){const{name:e}=f.value[_.value];return`删除后，${e}的所有合同信息将被清空，且无法恢复`}return""});Z(()=>{K()});const g=r(!1),d=r([1,2]),x=ee(),b=()=>{_.value=-1},V=()=>{f.value.splice(_.value,1),y.value.total=f.value.length;const e=d.value.indexOf(_.value);e>-1&&d.value.splice(e,1),g.value=!1,oe.success("删除成功"),b()},D=()=>{b()},M="index",B=e=>{d.value=e},R=(e,i)=>{console.log("分页变化",e,i)},L=(e,i)=>{console.log("统一Change",e,i)},O=()=>{x.push("/detail/base")},Y=()=>{x.push("/form/base")},$=e=>{_.value=e.rowIndex,g.value=!0},z=E(()=>({offsetTop:A.isUseTabsRouter?48:0,container:`.${te}-layout`}));return(e,i)=>{const N=u("t-button"),G=u("t-input"),j=u("t-row"),h=u("t-tag"),w=u("t-link"),F=u("t-space"),X=u("t-table"),q=u("t-card"),H=u("t-dialog");return o(),p("div",null,[n(q,{class:"list-card-container",bordered:!1},{default:a(()=>[n(j,{justify:"space-between"},{default:a(()=>[S("div",ie,[n(N,{onClick:Y},{default:a(()=>[l(" 新建合同 ")]),_:1}),n(N,{variant:"base",theme:"default",disabled:!d.value.length},{default:a(()=>[l(" 导出合同 ")]),_:1},8,["disabled"]),d.value.length?(o(),p("p",ue,"已选"+ae(d.value.length)+"项",1)):c("",!0)]),S("div",de,[n(G,{modelValue:k.value,"onUpdate:modelValue":i[0]||(i[0]=t=>k.value=t),placeholder:"请输入你需要搜索的内容",clearable:""},{"suffix-icon":a(()=>[n(s(ne),{size:"16px"})]),_:1},8,["modelValue"])])]),_:1}),n(X,{data:f.value,columns:s(ce),"row-key":M,"vertical-align":"top",hover:!0,pagination:y.value,"selected-row-keys":d.value,loading:C.value,"header-affixed-top":z.value,onPageChange:R,onChange:L,onSelectChange:B},{status:a(({row:t})=>[t.status===s(v).FAIL?(o(),m(h,{key:0,theme:"danger",variant:"light"},{default:a(()=>[l(" 审核失败 ")]),_:1})):c("",!0),t.status===s(v).AUDIT_PENDING?(o(),m(h,{key:1,theme:"warning",variant:"light"},{default:a(()=>[l(" 待审核 ")]),_:1})):c("",!0),t.status===s(v).EXEC_PENDING?(o(),m(h,{key:2,theme:"warning",variant:"light"},{default:a(()=>[l(" 待履行 ")]),_:1})):c("",!0),t.status===s(v).EXECUTING?(o(),m(h,{key:3,theme:"success",variant:"light"},{default:a(()=>[l(" 履行中 ")]),_:1})):c("",!0),t.status===s(v).FINISH?(o(),m(h,{key:4,theme:"success",variant:"light"},{default:a(()=>[l(" 已完成 ")]),_:1})):c("",!0)]),contractType:a(({row:t})=>[t.contractType===s(T).MAIN?(o(),p("p",re,"审核失败")):c("",!0),t.contractType===s(T).SUB?(o(),p("p",pe,"待审核")):c("",!0),t.contractType===s(T).SUPPLEMENT?(o(),p("p",_e,"待履行")):c("",!0)]),paymentType:a(({row:t})=>[t.paymentType===s(I).PAYMENT?(o(),p("div",fe,[l(" 付款"),n(P,{class:"dashboard-item-trend",type:"up"})])):c("",!0),t.paymentType===s(I).RECEIPT?(o(),p("div",he,[l(" 收款"),n(P,{class:"dashboard-item-trend",type:"down"})])):c("",!0)]),op:a(t=>[n(F,null,{default:a(()=>[n(w,{theme:"primary",onClick:i[1]||(i[1]=J=>O())},{default:a(()=>[l("详情")]),_:1}),n(w,{theme:"danger",onClick:J=>$(t)},{default:a(()=>[l("删除")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["data","columns","pagination","selected-row-keys","loading","header-affixed-top"])]),_:1}),n(H,{visible:g.value,"onUpdate:visible":i[2]||(i[2]=t=>g.value=t),header:"确认删除当前所选合同？",body:U.value,"on-cancel":D,onConfirm:V},null,8,["visible","body"])])}}});const ke=se(me,[["__scopeId","data-v-2e217721"]]);export{ke as default};