import{d as h,a5 as k,r as u,w,m as s,o as V,c as C,a as n,q as l,v as E,a9 as y,N as _}from"./index-fd6a2e45.js";const z=h({__name:"EditFile",setup(F){const t=k(),i=u(null),o=u({drive:"",originName:"",remark:"",fileUrl:"",size:0});w(()=>t.editVisible,e=>{e&&(o.value=t.currentRow)});const m=()=>{t.setEditVisible(!1)},f=()=>{i.value.reset()},d=()=>{i.value.validate({showErrorMessage:!0}).then(async e=>{var a,r;if(e===!0){await y({...o.value}),_.success("修改成功"),t.getFileList(),m();return}if(e&&Object.keys(e).length){const c=(r=(a=Object.values(e)[0])==null?void 0:a[0])==null?void 0:r.message;_.warning(c)}})};return(e,a)=>{const r=s("t-input"),c=s("t-form-item"),p=s("t-form"),v=s("t-space"),g=s("t-dialog");return V(),C("div",null,[n(g,{size:"large",visible:E(t).editVisible,header:"修改文件","on-confirm":d,onClose:m},{default:l(()=>[n(v,{direction:"vertical",size:"large",style:{width:"100%"}},{default:l(()=>[n(p,{ref_key:"form",ref:i,data:o.value,onReset:f},{default:l(()=>[n(c,{label:"备注",name:"remark"},{default:l(()=>[n(r,{modelValue:o.value.remark,"onUpdate:modelValue":a[0]||(a[0]=b=>o.value.remark=b),placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1},8,["visible"])])}}});export{z as _};
