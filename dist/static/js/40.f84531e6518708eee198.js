webpackJsonp([40],{"8IpJ":function(e,t,a){var o=a("yBsG");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("76b23d9e",o,!0)},I2Be:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-dialog",{staticClass:"organEdit",attrs:{title:"飞虎队企业机构",width:"800px",visible:e.companyTableVisible},on:{"update:visible":function(t){e.companyTableVisible=t}}},[a("el-form",{attrs:{model:e.companyForm,inline:!0}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"企业名称"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.companyName,callback:function(t){e.$set(e.companyForm,"companyName",t)},expression:"companyForm.companyName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"企业法人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.legalPerson,callback:function(t){e.$set(e.companyForm,"legalPerson",t)},expression:"companyForm.legalPerson"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"社会统一信用代码"}},[a("el-input",{attrs:{disabled:!0,"auto-complete":"off"},model:{value:e.companyForm.unifiedSocialCreditCode,callback:function(t){e.$set(e.companyForm,"unifiedSocialCreditCode",t)},expression:"companyForm.unifiedSocialCreditCode"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"出房费率"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.splitFee,callback:function(t){e.$set(e.companyForm,"splitFee",t)},expression:"companyForm.splitFee"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"企业联系人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.name,callback:function(t){e.$set(e.companyForm,"name",t)},expression:"companyForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手机号码"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.mobile,callback:function(t){e.$set(e.companyForm,"mobile",t)},expression:"companyForm.mobile"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"联系人身份证"}},[a("el-input",{model:{value:e.companyForm.idNum,callback:function(t){e.$set(e.companyForm,"idNum",t)},expression:"companyForm.idNum"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"房源体量"}},[a("el-input",{model:{value:e.companyForm.volumn,callback:function(t){e.$set(e.companyForm,"volumn",t)},expression:"companyForm.volumn"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行开户名"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.accountName,callback:function(t){e.$set(e.companyForm,"accountName",t)},expression:"companyForm.accountName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行卡号"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.accountIdNum,callback:function(t){e.$set(e.companyForm,"accountIdNum",t)},expression:"companyForm.accountIdNum"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"平台代收租服务"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.proxyImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete("proxyImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImages"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImages",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"proxyImageList")}}})])])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"房源发布和租客引流服务"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.attractionFlowImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete("attractionFlowImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImageflow"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImageflow",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"attractionFlowImageList")}}})])])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"企业营业执照"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.businessLicenseImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete("businessLicenseImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImagebusiness"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImagebusiness",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"businessLicenseImageList")}}})])])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"联系人身份证照片"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.idCardImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete("idCardImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImageidCard"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImageidCard",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"idCardImageList")}}})])])],1)],1)],1),e._v(" "),a("ImageCropper",{attrs:{cropperList:e.cropperList},on:{emitCropperList:e.emitCropperList,emitCropperData:e.emitCropperData}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.closeDialog()}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit()}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"organEdit",attrs:{title:"飞虎队个人机构",width:"800px",visible:e.personalTableVisible},on:{"update:visible":function(t){e.personalTableVisible=t}}},[a("el-form",{attrs:{model:e.companyForm,inline:!0}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.name,callback:function(t){e.$set(e.companyForm,"name",t)},expression:"companyForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手机号码"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.mobile,callback:function(t){e.$set(e.companyForm,"mobile",t)},expression:"companyForm.mobile"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"身份证"}},[a("el-input",{model:{value:e.companyForm.idNum,callback:function(t){e.$set(e.companyForm,"idNum",t)},expression:"companyForm.idNum"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"出房费率"}},[a("el-input",{model:{value:e.companyForm.splitFee,callback:function(t){e.$set(e.companyForm,"splitFee",t)},expression:"companyForm.splitFee"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"房源体量"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.companyForm.volumn,callback:function(t){e.$set(e.companyForm,"volumn",t)},expression:"companyForm.volumn"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行开户名"}},[a("el-input",{model:{value:e.companyForm.accountName,callback:function(t){e.$set(e.companyForm,"accountName",t)},expression:"companyForm.accountName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行卡号"}},[a("el-input",{model:{value:e.companyForm.accountIdNum,callback:function(t){e.$set(e.companyForm,"accountIdNum",t)},expression:"companyForm.accountIdNum"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"平台代收租服务"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.proxyImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete("proxyImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImagesper"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImagesper",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"proxyImageList")}}})])])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"房源发布和租客引流服务"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.attractionFlowImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete("attractionFlowImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImagesflow"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImagesflow",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"attractionFlowImageList")}}})])])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"身份证照片"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.idCardImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete("idCardImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImagesidCards"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImagesidCards",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"idCardImageList")}}})])])],1)],1)],1),e._v(" "),a("ImageCropper",{attrs:{cropperList:e.cropperList},on:{emitCropperList:e.emitCropperList,emitCropperData:e.emitCropperData}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.closeDialog("personalTableVisible")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}},"W/Xs":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Xxa5"),l=a.n(o),i=a("pFYg"),s=a.n(i),n=a("//Fk"),r=a.n(n),c=a("exGp"),m=a.n(c),p=a("Gu7T"),u=a.n(p),d=a("TIfe"),f=a("H1GV"),b=a.n(f),v=a("fDDG"),g=a.n(v),y=a("0xDb"),F=a("Ao5+");t.default={components:{Preview:b.a,ImageCropper:g.a},data:function(){return{accept:"image/png, image/jpeg, image/jpg",companyTableVisible:!1,personalTableVisible:!1,companyForm:{},cropperList:[],personalForm:{},key:null}},mounted:function(){},methods:{closeDialog:function(e){this[e]=!1,Object(y.e)(this.companyForm)},submit:function(){var e=this;Object(F.h)(this.companyForm).then(function(t){e.getData(),Object(y.e)(e.companyForm)})},emitDelete:function(e,t){this.companyForm[t]=e},emitCropperList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.cropperList=e},emitCropperData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.forEach(function(e,t){e.type=1});var t=[].concat(u()(this.companyForm[this.key]),u()(e));this.companyForm[this.key]=t.map(function(e,t){return-1!==e.src.indexOf("data:image/jpeg;base64")?{src:e.src,tag:0}:{src:e.src,tag:1}})},uploadImg:function(e,t){var a=this;return m()(l.a.mark(function o(){var i,n,c,m;return l.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(e.target.value){o.next=3;break}return console.log("取消上传..."),o.abrupt("return",!1);case 3:alert(t),i=[],n=function(e){return new r.a(function(t){var a=new FileReader;a.onerror=function(e){console.log("读取异常....")},a.onload=function(a){var o="object"===s()(a.target.result)?window.URL.createObjectURL(new Blob([a.target.result])):a.target.result,l="";l=e.name?e.name.split(".")[0].length<=30?e.name.split(".")[0]:e.name.split(".")[0].substr(0,30):"",t({img:o,imageName:l,type:1})},a.readAsArrayBuffer(e)})},c=e.target.files,m=0;case 8:if(!(m<c.length)){o.next=21;break}if(a.accept.includes(c[m].type)){o.next=13;break}return a.$message.error("请上传"+a.accept.replace(/image\//gi,"")+"的图片"),e.target.value=null,o.abrupt("return",!1);case 13:return o.t0=i,o.next=16,n(c[m]);case 16:o.t1=o.sent,o.t0.push.call(o.t0,o.t1);case 18:m++,o.next=8;break;case 21:a.cropperList=i.map(function(e,t){return{img:e.img,imageName:e.imageName,type:e.type}}),a.layer_cropper=!0,a.key=t,e.target.value=null;case 25:case"end":return o.stop()}},o,a)}))()},open:function(e){this.datalist=e,console.log(e),1===this.datalist.type?this.personalTableVisible=!0:this.companyTableVisible=!0,this.getData()},getData:function(){var e=this,t={sessionId:d.a,id:this.datalist.id};Object(F.j)(t).then(function(t){e.companyForm=t.data})}}}},eSUc:function(e,t,a){var o=a("VU/8")(a("W/Xs"),a("I2Be"),function(e){a("8IpJ")},"data-v-2bf2c172",null);e.exports=o.exports},yBsG:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".container .el-upload--picture-card.uploadImage[data-v-2bf2c172]{width:120px;height:90px;line-height:88px;display:inline-block}",""])}});