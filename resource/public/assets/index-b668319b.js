import{d as i,m as l,o as s,c as o,a as t,q as c,b as a,F as y,t as m,z as p,s as v,M as f,x,g}from"./index-812ea633.js";const k={class:"detail-base"},b={class:"info-block"},h={key:0},B={name:"DetailBase"},C=i({...B,setup(N){const _=[{name:"合同名称",value:"总部办公用品采购项目",type:null},{name:"合同状态",value:"履行中",type:{key:"contractStatus",value:"inProgress"}},{name:"合同编号",value:"BH00010",type:null},{name:"合同类型",value:"主合同",type:null},{name:"合同收付类型",value:"付款",type:null},{name:"合同金额",value:"5,000,000元",type:null},{name:"甲方",value:"腾讯科技（深圳）有限公司",type:null},{name:"乙方",value:"欧尚",type:null},{name:"合同签订日期",value:"2020-12-20",type:null},{name:"合同生效日期",value:"2021-01-20",type:null},{name:"合同结束日期",value:"2022-12-20",type:null},{name:"合同附件",value:"总部办公用品采购项目合同.pdf",type:{key:"contractAnnex",value:"pdf"}},{name:"备注",value:"--",type:null},{name:"创建时间",value:"2020-12-22 10:00:00",type:null}];return(A,S)=>{const u=l("t-card"),n=l("t-step-item"),r=l("t-steps");return s(),o("div",k,[t(u,{title:"基本信息",bordered:!1},{default:c(()=>[a("div",b,[(s(),o(y,null,m(_,(e,d)=>a("div",{key:d,class:"info-item"},[a("h1",null,p(e.name),1),a("span",{class:v({inProgress:e.type&&e.type.value==="inProgress",pdf:e.type&&e.type.value==="pdf"})},[e.type&&e.type.key==="contractStatus"?(s(),o("i",h)):f("",!0),x(" "+p(e.value),1)],2)])),64))])]),_:1}),t(u,{title:"变更记录",class:"container-base-margin-top",bordered:!1},{default:c(()=>[t(r,{class:"detail-base-info-steps",layout:"vertical",theme:"dot",current:1},{default:c(()=>[t(n,{title:"上传合同附件",content:"这里是提示文字"}),t(n,{title:"修改合同金额",content:"这里是提示文字"}),t(n,{title:"新建合同",content:"2020-12-01 15:00:00 管理员-李川操作"})]),_:1})]),_:1})])}}});const D=g(C,[["__scopeId","data-v-01322837"]]);export{D as default};
