import{d as M,r as E,m as s,o as p,e as f,q as a,b as m,a as e,c as x,F as D,t as h,v as b,x as r,z as B,N as i,p as L,f as Y,g as $}from"./index-812ea633.js";const j={name:[{required:!0,message:"请输入合同名称",type:"error"}],type:[{required:!0,message:"请选择合同类型",type:"error"}],payment:[{required:!0,message:"请选择合同收付类型",type:"error"}],amount:[{required:!0,message:"请输入合同金额",type:"error"}],partyA:[{required:!0,message:"请选择甲方",type:"error"}],partyB:[{required:!0,message:"请选择乙方",type:"error"}],signDate:[{required:!0,message:"请选择日期",type:"error"}],startDate:[{required:!0,message:"请选择日期",type:"error"}],endDate:[{required:!0,message:"请选择日期",type:"error"}]},G={name:"",type:"",partyA:"",partyB:"",signDate:"",startDate:"",endDate:"",payment:"1",amount:0,comment:"",files:[]},H=[{label:"类型A",value:"1"},{label:"类型B",value:"2"},{label:"类型C",value:"3"}],J=[{label:"公司A",value:"1"},{label:"公司B",value:"2"},{label:"公司C",value:"3"}],K=[{label:"公司A",value:"1"},{label:"公司B",value:"2"},{label:"公司C",value:"3"}],A=c=>(L("data-v-cd46a8b5"),c=c(),Y(),c),Q={class:"form-basic-container"},W={class:"form-basic-item"},X=A(()=>m("div",{class:"form-basic-container-title"},"合同信息",-1)),Z=A(()=>m("span",{class:"space-item"},null,-1)),ee=A(()=>m("div",{class:"form-basic-container-title form-title-gap"},"其它信息",-1)),ae={class:"form-submit-container"},te={class:"form-submit-sub"},le={class:"form-submit-left"},oe={name:"FormBase"},se=M({...oe,setup(c){const l=E({...G}),I=()=>{i.warning("取消新建")},S=u=>{u.validateResult===!0&&i.success("新建成功")},T=u=>/\.(pdf)$/.test(u.name)?u.size>60*1024*1024?(i.warning("上传文件不能大于60M"),!1):!0:(i.warning("请上传pdf文件"),!1),k=u=>{i.error(`文件 ${u.file.name} 上传失败`)},N=u=>({...u,error:"上传失败，请重试",url:u.url});return(u,o)=>{const U=s("t-input"),n=s("t-form-item"),d=s("t-col"),v=s("t-option"),y=s("t-select"),q=s("t-radio"),O=s("t-radio-group"),g=s("t-date-picker"),V=s("t-button"),P=s("t-upload"),R=s("t-row"),z=s("t-textarea"),w=s("t-avatar"),C=s("t-avatar-group"),F=s("t-form");return p(),f(F,{ref:"form",class:"base-form",data:l.value,rules:b(j),"label-align":"top","label-width":100,onReset:I,onSubmit:S},{default:a(()=>[m("div",Q,[m("div",W,[X,e(R,{class:"row-gap",gutter:[32,24]},{default:a(()=>[e(d,{span:6},{default:a(()=>[e(n,{label:"合同名称",name:"name"},{default:a(()=>[e(U,{modelValue:l.value.name,"onUpdate:modelValue":o[0]||(o[0]=t=>l.value.name=t),style:{width:"322px"},placeholder:"请输入内容"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:a(()=>[e(n,{label:"合同类型",name:"type"},{default:a(()=>[e(y,{modelValue:l.value.type,"onUpdate:modelValue":o[1]||(o[1]=t=>l.value.type=t),style:{width:"322px"},placeholder:"请选择类型",class:"demo-select-base",clearable:""},{default:a(()=>[(p(!0),x(D,null,h(b(H),(t,_)=>(p(),f(v,{key:_,value:t.value,label:t.label},{default:a(()=>[r(B(t.label),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{span:8},{default:a(()=>[e(n,{label:"合同收付类型",name:"payment"},{default:a(()=>[e(O,{modelValue:l.value.payment,"onUpdate:modelValue":o[2]||(o[2]=t=>l.value.payment=t)},{default:a(()=>[e(q,{value:"1"},{default:a(()=>[r(" 收款 ")]),_:1}),e(q,{value:"2"},{default:a(()=>[r(" 付款 ")]),_:1})]),_:1},8,["modelValue"]),Z,m("div",null,[e(U,{placeholder:"请输入金额",style:{width:"160px"}})])]),_:1})]),_:1}),e(d,{span:6},{default:a(()=>[e(n,{label:"甲方",name:"partyA"},{default:a(()=>[e(y,{modelValue:l.value.partyA,"onUpdate:modelValue":o[3]||(o[3]=t=>l.value.partyA=t),style:{width:"322px"},class:"demo-select-base",placeholder:"请选择类型",clearable:""},{default:a(()=>[(p(!0),x(D,null,h(b(J),(t,_)=>(p(),f(v,{key:_,value:t.value,label:t.label},{default:a(()=>[r(B(t.label),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:a(()=>[e(n,{label:"乙方",name:"partyB"},{default:a(()=>[e(y,{modelValue:l.value.partyB,"onUpdate:modelValue":o[4]||(o[4]=t=>l.value.partyB=t),style:{width:"322px"},placeholder:"请选择类型",class:"demo-select-base",clearable:""},{default:a(()=>[(p(!0),x(D,null,h(b(K),(t,_)=>(p(),f(v,{key:_,value:t.value,label:t.label},{default:a(()=>[r(B(t.label),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:a(()=>[e(n,{label:"合同签订日期",name:"signDate"},{default:a(()=>[e(g,{modelValue:l.value.signDate,"onUpdate:modelValue":o[5]||(o[5]=t=>l.value.signDate=t),style:{width:"322px"},theme:"primary",mode:"date",separator:"/"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:a(()=>[e(n,{label:"合同生效日期",name:"startDate"},{default:a(()=>[e(g,{modelValue:l.value.startDate,"onUpdate:modelValue":o[6]||(o[6]=t=>l.value.startDate=t),style:{width:"322px"},theme:"primary",mode:"date",separator:"/"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:a(()=>[e(n,{label:"合同结束日期",name:"endDate"},{default:a(()=>[e(g,{modelValue:l.value.endDate,"onUpdate:modelValue":o[7]||(o[7]=t=>l.value.endDate=t),style:{width:"322px"},theme:"primary",mode:"date",separator:"/"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:a(()=>[e(n,{label:"上传文件",name:"files"},{default:a(()=>[e(P,{modelValue:l.value.files,"onUpdate:modelValue":o[8]||(o[8]=t=>l.value.files=t),action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",tips:"请上传pdf文件，大小在60M以内","size-limit":{size:60,unit:"MB"},"format-response":N,"before-upload":T,onFail:k},{default:a(()=>[e(V,{class:"form-submit-upload-btn",variant:"outline"},{default:a(()=>[r(" 上传合同文件 ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),ee,e(n,{label:"备注",name:"comment"},{default:a(()=>[e(z,{modelValue:l.value.comment,"onUpdate:modelValue":o[9]||(o[9]=t=>l.value.comment=t),height:124,placeholder:"请输入备注"},null,8,["modelValue"])]),_:1}),e(n,{label:"公证人"},{default:a(()=>[e(C,null,{default:a(()=>[e(w,null,{default:a(()=>[r("D")]),_:1}),e(w,null,{default:a(()=>[r("S")]),_:1}),e(w,null,{default:a(()=>[r("+")]),_:1})]),_:1})]),_:1})])]),m("div",ae,[m("div",te,[m("div",le,[e(V,{theme:"primary",class:"form-submit-confirm",type:"submit"},{default:a(()=>[r(" 确认提交 ")]),_:1}),e(V,{type:"reset",class:"form-submit-cancel",theme:"default",variant:"base"},{default:a(()=>[r(" 取消 ")]),_:1})])])])]),_:1},8,["data","rules"])}}});const re=$(se,[["__scopeId","data-v-cd46a8b5"]]);export{re as default};
