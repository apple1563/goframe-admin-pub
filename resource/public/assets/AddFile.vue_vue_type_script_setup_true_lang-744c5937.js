import{d as D,r as g,a5 as K,w as H,m as r,o as y,c as Q,a,q as n,v as C,x as P,e as R,M as S,a6 as q,a7 as X,N as E}from"./index-812ea633.js";import{R as Z}from"./constants-bac3fbcd.js";const M=5*1024*1024,G=50,$=D({__name:"AddFile",setup(J){const w=g(null),o=g({drive:"",remark:"",file:[],fileBig:[]}),h=g(1),F=g(),k=g(),i=K(),N={value:"configValue",label:"configKey"};H(()=>i.addVisible,e=>{var l;e&&(o.value.drive=(l=i.fileTypeList[0])==null?void 0:l.configValue)});const U=()=>{i.setAddVisible(!1)},T=()=>{w.value.reset()},L=e=>new Promise(l=>{let s=0;const c=setInterval(()=>{s+10<99&&(s+=10,F.value.uploadFilePercent({file:e,percent:s}))},100),u=setTimeout(()=>{q({drive:o.value.drive,file:o.value.file.map(d=>d.raw)}).then(d=>{l({status:"success",response:d}),i.getFileList(),clearTimeout(u),clearInterval(c)})},1e3)}),x=e=>{console.log(e)},z=e=>{k.value.uploadFilePercent({file:e,percent:50}),console.log(e);const{size:l}=e,s=e.name.split(".").pop(),c=e.name+String(Date.now()),u=e.name,d=e.raw;return new Promise(async V=>{const f=[];let _=0;for(;_<d.size;){const p=d.slice(_,_+M);f.push(p),_+=M}const m=f.length;let v=0,t=0;const b=[];for(let p=0;p<m;p++){const A=new File([f[p]],String(p)),O=X({drive:o.value.drive,chunk:A,chunkIndex:p,totalChunks:m,temp:c,originName:u,ext:s,size:l}).then(j=>{v++;const B=v/m*100;console.log(B,v,m),console.log(e),k.value.uploadFilePercent({file:e,percent:B}),v===m&&(console.log(j),V({status:"success",response:{msg:"Upload completed"}}),i.getFileList())});b.push(O),t++,t>=G&&(await Promise.all(b),b.length=0,t=0)}})},I=()=>{w.value.validate({showErrorMessage:!0}).then(async e=>{var l,s;if(e===!0){await q({...o.value}),E.success("添加成功"),i.getFileList(),U();return}if(e&&Object.keys(e).length){const c=(s=(l=Object.values(e)[0])==null?void 0:l[0])==null?void 0:s.message;E.warning(c)}})};return(e,l)=>{const s=r("t-radio"),c=r("t-radio-group"),u=r("t-form-item"),d=r("t-select"),V=r("t-input"),f=r("t-upload"),_=r("t-form"),m=r("t-space"),v=r("t-dialog");return y(),Q("div",null,[a(v,{size:"large",width:"680px",visible:C(i).addVisible,header:"添加文件","on-confirm":I,"confirm-btn":null,"cancel-btn":null,onClose:U},{default:n(()=>[a(m,{direction:"vertical",size:"large",style:{width:"100%"}},{default:n(()=>[a(_,{ref_key:"form",ref:w,data:o.value,rules:C(Z),onReset:T},{default:n(()=>[a(u,{label:"上传选项"},{default:n(()=>[a(c,{modelValue:h.value,"onUpdate:modelValue":l[0]||(l[0]=t=>h.value=t)},{default:n(()=>[a(s,{value:1},{default:n(()=>[P("普通文件（10M内）")]),_:1}),a(s,{value:2},{default:n(()=>[P("大文件（10M以上）")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"驱动",name:"drive"},{default:n(()=>[a(d,{modelValue:o.value.drive,"onUpdate:modelValue":l[1]||(l[1]=t=>o.value.drive=t),"auto-width":"",keys:N,options:C(i).fileTypeList,placeholder:"请选择"},null,8,["modelValue","options"])]),_:1}),a(u,{label:"备注",name:"remark"},{default:n(()=>[a(V,{modelValue:o.value.remark,"onUpdate:modelValue":l[2]||(l[2]=t=>o.value.remark=t),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),h.value===1?(y(),R(u,{key:1,label:"文件",name:"file"},{default:n(()=>[a(f,{ref_key:"uploadRef",ref:F,modelValue:o.value.file,"onUpdate:modelValue":l[3]||(l[3]=t=>o.value.file=t),multiple:"",placeholder:"支持批量上传文件，文件格式不限，最多只能上传 10 份文件",theme:"file-flow","auto-upload":!1,"request-method":L,"on-fail":x,max:10,"show-thumbnail":!1,"allow-upload-duplicate-file":!0,"is-batch-upload":!0,"upload-all-files-in-one-request":!0,"show-upload-progress":"","use-mock-progress":""},null,8,["modelValue"])]),_:1})):S("",!0),h.value===2?(y(),R(u,{key:2,label:"大文件",name:"file"},{default:n(()=>[a(f,{ref_key:"uploadBigRef",ref:k,modelValue:o.value.fileBig,"onUpdate:modelValue":l[4]||(l[4]=t=>o.value.fileBig=t),"show-upload-progress":"","use-mock-progress":"",placeholder:"单个大文件上传",theme:"file-flow","auto-upload":!1,"request-method":z,"on-fail":x,"show-thumbnail":!1,"allow-upload-duplicate-file":!0,"is-batch-upload":!0,"upload-all-files-in-one-request":!0},null,8,["modelValue"])]),_:1})):S("",!0)]),_:1},8,["data","rules"])]),_:1})]),_:1},8,["visible"])])}}});export{$ as _};
