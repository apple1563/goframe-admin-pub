import{T as L,E as j}from"./index.esm-fff768bc.js";import{d as M,r as p,aM as O,ai as A,aN as T,j as z,aO as F,m as s,o as f,c as g,a as e,q as n,v as d,F as P,t as R,e as q,b as D,aP as G,N as V}from"./index-812ea633.js";import{R as H}from"./constants-e39b1224.js";const I={style:{border:"1px solid #ccc"}},X=M({__name:"AddNotice",setup(J){const i=p(null),o=p({content:"",title:"",sort:0,remark:"",tag:"",receivers:[]}),m=O(),_=A();_.getUserList();const v=()=>{m.setAddVisible(!1)},h=()=>{i.value.reset()},k=()=>{i.value.validate({showErrorMessage:!0}).then(async a=>{var t,u;if(a===!0){await G({...o.value}),V.success("添加成功"),m.getNoticeList(),v();return}if(a&&Object.keys(a).length){const r=(u=(t=Object.values(a)[0])==null?void 0:t[0])==null?void 0:u.message;V.warning(r)}})},c=T(),y=p("<p>hello</p>");z(()=>{setTimeout(()=>{y.value="<p>模拟 Ajax 异步设置内容</p>"},1500)});const U={},C={placeholder:"请输入内容..."};F(()=>{const a=c.value;a!=null&&a.destroy()});const w=a=>{c.value=a};return(a,t)=>{const u=s("t-input"),r=s("t-form-item"),b=s("t-option"),x=s("t-select"),N=s("t-input-number"),E=s("t-form"),S=s("t-space"),B=s("t-dialog");return f(),g("div",null,[e(B,{size:"large",width:"800px",visible:d(m).addVisible,header:"发送通知","on-confirm":k,onClose:v},{default:n(()=>[e(S,{direction:"vertical",size:"large",style:{width:"100%"}},{default:n(()=>[e(E,{ref_key:"form",ref:i,data:o.value,rules:d(H),onReset:h},{default:n(()=>[e(r,{label:"标题",name:"title"},{default:n(()=>[e(u,{modelValue:o.value.title,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value.title=l),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(r,{label:"标签",name:"tag"},{default:n(()=>[e(u,{modelValue:o.value.tag,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value.tag=l),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(r,{label:"接收者",name:"tag"},{default:n(()=>[e(x,{modelValue:o.value.receivers,"onUpdate:modelValue":t[2]||(t[2]=l=>o.value.receivers=l),"min-collapsed-num":6,placeholder:"请选择接收者",multiple:"",filterable:""},{default:n(()=>[e(b,{label:"全选","check-all":!0}),(f(!0),g(P,null,R(d(_).userList,l=>(f(),q(b,{key:l.id,value:l.id,label:l.username},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"内容",name:"content"},{default:n(()=>[D("div",I,[e(d(L),{style:{"border-bottom":"1px solid #ccc"},editor:c.value,"default-config":U,mode:"default"},null,8,["editor"]),e(d(j),{modelValue:o.value.content,"onUpdate:modelValue":t[3]||(t[3]=l=>o.value.content=l),style:{height:"240px","overflow-y":"hidden"},"default-config":C,mode:"default",onOnCreated:w},null,8,["modelValue"])])]),_:1}),e(r,{label:"排序",name:"sort"},{default:n(()=>[e(N,{modelValue:o.value.sort,"onUpdate:modelValue":t[4]||(t[4]=l=>o.value.sort=l),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(r,{label:"备注",name:"remark"},{default:n(()=>[e(u,{modelValue:o.value.remark,"onUpdate:modelValue":t[5]||(t[5]=l=>o.value.remark=l),placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1},8,["data","rules"])]),_:1})]),_:1},8,["visible"])])}}});export{X as _};
