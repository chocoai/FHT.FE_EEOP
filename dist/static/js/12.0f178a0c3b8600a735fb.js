webpackJsonp([12,42],{C0YM:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,".organ-container .el-upload--picture-card.uploadImage[data-v-28d365ae]{width:120px;height:90px;line-height:88px;display:inline-block}",""])},QmXh:function(e,t,a){var l=a("C0YM");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("8bSs")("76495f50",l,!0)},Wmkv:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"model-search clearfix"},[a("el-form",{attrs:{size:"small",inline:!0,model:e.formData}},[a("el-date-picker",{staticStyle:{width:"350px"},attrs:{size:"small",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.searchParam},model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{size:"small",placeholder:"房东／房东手机号码"},nativeOn:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchParam(t)}},model:{value:e.formData.orgKeyWord,callback:function(t){e.$set(e.formData,"orgKeyWord",t)},expression:"formData.orgKeyWord"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{size:"small",placeholder:"城市管家／手机号码"},nativeOn:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchParam(t)}},model:{value:e.formData.cmKeyWord,callback:function(t){e.$set(e.formData,"cmKeyWord",t)},expression:"formData.cmKeyWord"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{size:"small",placeholder:"机构类型"},model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}},e._l(e.organList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",size:"small",icon:"el-icon-search"},nativeOn:{click:function(t){e.searchParam(t)}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{plain:"",size:"small",icon:"el-icon-remove-outline"},nativeOn:{click:function(t){e.clearForm(t)}}},[e._v("清空")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-upload"},nativeOn:{click:function(t){e.exportExcel(t)}}},[e._v("导出\n       ")])],1)],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.organAllList,border:"",size:"small",height:e.tableHeight}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtCreateStr",width:"160",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"机构名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",width:"120",label:"手机号码"}}),e._v(" "),a("el-table-column",{attrs:{label:"类型",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                 "+e._s(e._f("filererType")(t.row.type))+"\n         ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"费率"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n               "+e._s(t.row.splitFee||"-")+"\n         ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"province",label:"是否绑卡",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n             "+e._s(e._f("filererhaveBindCardId")(t.row.haveBindCardId))+"\n           ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"自报体量",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n               "+e._s(t.row.volumn||"-")+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"身份证照片"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n               "+e._s(e._f("filererIsNo")(t.row.haveIdCardImage))+"\n             ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"平台代理收租服务"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n               "+e._s(e._f("filererIsNo")(t.row.haveProxyImage))+"\n             ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"房源发布和租客引流服务"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n               "+e._s(e._f("filererIsNo")(t.row.haveAttractionFlowImage))+"\n             ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"hostingFlyCount",label:"分散式间数（飞虎队）"}}),e._v(" "),a("el-table-column",{attrs:{prop:"estateFlyCount",label:"分散式间数",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"hostingFlyCount",label:"集中式间数（飞虎队）"}}),e._v(" "),a("el-table-column",{attrs:{prop:"estateCount",label:"集中式间数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"flyRentCount",label:"飞虎队在住房间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"onlineBillCount",label:"租客线上交租单数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"offlineBillCount",label:"租客线下交租单数"}}),e._v(" "),a("el-table-column",{attrs:{label:"城市管家",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n               "+e._s(t.row.createManagerName||"-")+"\n             ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"手机号码",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n               "+e._s(t.row.createManagerMobile||"-")+"\n             ")]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.editOrgan(t.row)}}},[e._v("\n                 编辑\n               ")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.remarkOrgan(t.row)}}},[e._v("\n                 备注信息\n               ")])]}}])})],1),e._v(" "),a("div",{staticClass:"model-pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.pageItems.pageNo,"page-sizes":e.pageSizeList,"page-size":e.pageItems.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.pageItems,"pageNo",t)}}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"备注信息",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-row",[a("el-button",{attrs:{type:"primary"},on:{click:e.addFllow}},[e._v("新增备注")])],1),e._v(" "),a("el-dialog",{attrs:{width:"30%",title:"新增备注信息",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[a("el-form",{ref:"orgForm",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"备注","label-width":e.formLabelWidth,prop:"remark"}},[a("el-input",{attrs:{maxlength:100,type:"textarea",rows:2,placeholder:"请输入备注（0-100字)"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addFollowSubmit}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:e.closeInner}},[e._v("关闭")])],1)],1),e._v(" "),a("div",{staticClass:"all-text"},[e.gridData.length?a("div",{staticClass:"table-container"},e._l(e.gridData,function(t){return a("div",{key:t.id,staticClass:"box"},[a("div",{staticClass:"name-box"},[e._v(e._s(t.gmtCreateStr)+" "+e._s(t.userName))]),e._v(" "),a("div",{staticClass:"name-box"},[e._v(e._s(t.remark))])])})):a("div",{staticClass:"table-container"},[a("div",{staticClass:"box"},[a("div",{staticClass:"text-empty"},[e._v("暂无数据")])])])]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogTableVisible=!1}}},[e._v("关闭")])],1)],1),e._v(" "),a("organ-Edit",{ref:"organEdit",attrs:{datalist:e.nowData}})],1)},staticRenderFns:[]}},eSUc:function(e,t,a){var l=a("Alxp")(a("lzfC"),a("vaZO"),function(e){a("QmXh")},"data-v-28d365ae",null);e.exports=l.exports},k9HG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("aA9S"),o=a.n(l),r=a("0xDb"),i=a("TIfe"),n=a("Ao5+"),s=a("eSUc"),c=a.n(s);t.default={components:{organEdit:c.a},data:function(){return{formLabelWidth:"60px",dialogTableVisible:!1,innerVisible:!1,total:null,gridData:[],nowData:{},formData:{type:"",gmtCreateStart:"",gmtCreateEnd:"",cmKeyWord:"",orgKeyWord:"",sessionId:Object(i.a)()},form:{remark:null,orgId:null,sessionId:Object(i.a)()},pageItems:{pageNo:1,pageSize:20},rules:{remark:[{required:!0,message:"请输入备注",trigger:"blur"}]},pageSizeList:[10,20,30,50],dateTime:[],organList:[{value:1,label:"个人"},{value:2,label:"企业"}],tableHeight:300,organAllList:[]}},filters:{filererType:function(e){return 1===e?"个人":"企业"},filererhaveBindCardId:function(e){return 0===e?"否":"是"},filererIsNo:function(e){return 0===e?"无":"有"}},mounted:function(){var e=this,t=Object(r.c)(function(){e.tableHeight=Math.max(document.body.clientHeight-210,300)},100);this.$nextTick(function(){t()}),window.addEventListener("resize",t),this.searchParam()},created:function(){},beforeDestroy:function(){document.querySelectorAll("body>.el-dialog__wrapper").forEach(function(e){e.style.display="none"})},watch:{dateTime:function(e){e=e||[],this.formData.gmtCreateStart=e[0]?Object(r.f)(e[0]):"",this.formData.gmtCreateEnd=e[1]?Object(r.f)(e[1]):""}},methods:{exportExcel:function(){var e="https://test-flying-api.mdguanjia.com/bop/orgManage/export?type="+this.formData.type+"&gmtCreateStart="+this.formData.gmtCreateStart+"&gmtCreateEnd="+this.formData.gmtCreateEnd+"&cmKeyWord="+this.formData.cmKeyWord+"&orgKeyWord="+this.formData.orgKeyWord,t=document.createElement("a");t.style.display="none",console.log(e),t.href=encodeURI(e),console.log(t.href),document.body.appendChild(t),t.click(),document.body.removeChild(t)},editOrgan:function(e){this.nowData=e,this.$refs.organEdit.open(this.nowData)},remarkOrgan:function(e){this.dialogTableVisible=!0,this.nowData=e,this.getremarkList()},getremarkList:function(){var e=this,t={orgId:this.nowData.orgId,sessionId:Object(i.a)()};Object(n.m)(t).then(function(t){e.gridData=t.data.orgRemarkList})},closeInner:function(){this.innerVisible=!1,Object(r.e)(this.form)},addFollowSubmit:function(){var e=this;this.form.orgId=this.nowData.orgId,this.$refs.orgForm.validate(function(t){t&&Object(n.n)(e.form).then(function(t){e.getremarkList(),Object(r.e)(e.form),e.innerVisible=!1,e.$message({message:"添加备注成功",type:"succes"})})})},addFllow:function(){this.innerVisible=!0},handleSizeChange:function(e){this.pageItems.pageSize=e,this.searchParam()},handleCurrentChange:function(e){this.pageItems.pageNo=e,this.searchParam()},searchParam:function(){var e=this,t=o()(this.pageItems,this.formData);Object(n.f)(Object(r.a)(t)).then(function(t){if(!t.success)return e.$message.error("请求飞虎队失败"),!1;e.organAllList=t.data.result||[],e.total=t.data.total})},clearForm:function(){this.formData=Object(r.e)(this.formData),this.dateTime=[]}}}},l5nG:function(e,t,a){var l=a("nKug");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("8bSs")("60fb2460",l,!0)},lzfC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("lC5x"),o=a.n(l),r=a("hRKE"),i=a.n(r),n=a("rVsN"),s=a.n(n),c=a("J0Oq"),m=a.n(c),p=a("IHPB"),u=a.n(p),d=a("TIfe"),f=a("E4LH"),b=a("H1GV"),v=a.n(b),g=a("fDDG"),y=a.n(g),h=a("0xDb"),_=a("Ao5+");t.default={components:{Preview:v.a,ImageCropper:y.a},data:function(){return{rules:{idNum:[{required:!0,trigger:"blur",validator:function(e,t,a){Object(f.d)(t)?a():a(new Error("请输入正确身份证号码"))}}],volumn:[{required:!0,trigger:"blur",validator:function(e,t,a){Object(f.a)(t)?a():a(new Error("请输入正整数"))}}]},text:"",accept:"image/png, image/jpeg, image/jpg",companyTableVisible:!1,personalTableVisible:!1,companyForm:{},cropperList:[],personalForm:{},key:null}},mounted:function(){},methods:{textCard:function(){return"330000000000000000"!==this.text&&(null!==this.text&&""!==this.text)},closeDialog:function(e){this[e]=!1,Object(h.e)(this.companyForm)},submit:function(e){var t=this;this.$refs.ruleForm.validate(function(a){a&&Object(_.i)(t.companyForm).then(function(a){t[e]=!1,t.getData(),console.log("12"),console.log(a)})})},emitDelete:function(e,t){this.companyForm[t]=e},emitCropperList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.cropperList=e},emitCropperData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.forEach(function(e,t){e.type=1});var t=[].concat(u()(this.companyForm[this.key]),u()(e));this.companyForm[this.key]=t.map(function(e,t){return-1!==e.src.indexOf("data:image/jpeg;base64")?{src:e.src,tag:0}:{src:e.src,tag:1}})},uploadImg:function(e,t){var a=this;return m()(o.a.mark(function l(){var r,n,c,m;return o.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(e.target.value){l.next=3;break}return console.log("取消上传..."),l.abrupt("return",!1);case 3:r=[],n=function(e){return new s.a(function(l){var o=new FileReader;o.onerror=function(e){console.log("读取异常....")},o.onload=function(o){var r="object"===i()(o.target.result)?window.URL.createObjectURL(new Blob([o.target.result])):o.target.result,n="";if(n=e.name?e.name.split(".")[0].length<=30?e.name.split(".")[0]:e.name.split(".")[0].substr(0,30):"",console.log(a.companyForm[t].length),a.companyForm[t].length>2)return a.$message.error("您已上传"+a.companyForm[t].length+"张图片，最多还能上传"+(3-a.companyForm[t].length)+"张图片"),!1;l({img:r,imageName:n,type:1})},o.readAsArrayBuffer(e)})},c=e.target.files,m=0;case 7:if(!(m<c.length)){l.next=20;break}if(a.accept.includes(c[m].type)){l.next=12;break}return a.$message.error("请上传"+a.accept.replace(/image\//gi,"")+"的图片"),e.target.value=null,l.abrupt("return",!1);case 12:return l.t0=r,l.next=15,n(c[m]);case 15:l.t1=l.sent,l.t0.push.call(l.t0,l.t1);case 17:m++,l.next=7;break;case 20:a.cropperList=r.map(function(e,t){return{img:e.img,imageName:e.imageName,type:e.type}}),a.layer_cropper=!0,a.key=t,e.target.value=null;case 24:case"end":return l.stop()}},l,a)}))()},open:function(e){this.datalist=e,console.log(e),1===this.datalist.type?this.personalTableVisible=!0:this.companyTableVisible=!0,this.getData()},getData:function(){var e=this,t={sessionId:d.a,id:this.datalist.id};Object(_.k)(t).then(function(t){e.companyForm=t.data,e.text=e.companyForm.idNum+""})}}}},nKug:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,".container[data-v-ae973590]{padding:20px}.table-box[data-v-ae973590]{margin-top:20px;border:1px solid #e5e5e5}.box[data-v-ae973590]{min-height:68px;padding-top:10px;padding-bottom:10px;border-bottom:1px solid #e0e0e0}.text-empty[data-v-ae973590]{line-height:60px;text-align:center;border-top:1px solid #e0e0e0}",""])},ruXY:function(e,t,a){var l=a("Alxp")(a("k9HG"),a("Wmkv"),function(e){a("l5nG")},"data-v-ae973590",null);e.exports=l.exports},vaZO:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"organ-container"},[e.companyTableVisible?a("el-dialog",{staticClass:"organEdit",attrs:{title:"飞虎队企业机构",width:"800px",visible:e.companyTableVisible},on:{"update:visible":function(t){e.companyTableVisible=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.companyForm,inline:!0,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"企业名称"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.companyName,callback:function(t){e.$set(e.companyForm,"companyName",t)},expression:"companyForm.companyName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"企业法人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.legalPerson,callback:function(t){e.$set(e.companyForm,"legalPerson",t)},expression:"companyForm.legalPerson"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"社会统一信用代码"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.unifiedSocialCreditCode,callback:function(t){e.$set(e.companyForm,"unifiedSocialCreditCode",t)},expression:"companyForm.unifiedSocialCreditCode"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"出房费率"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.splitFee,callback:function(t){e.$set(e.companyForm,"splitFee",t)},expression:"companyForm.splitFee"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"企业联系人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.name,callback:function(t){e.$set(e.companyForm,"name",t)},expression:"companyForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手机号码"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.mobile,callback:function(t){e.$set(e.companyForm,"mobile",t)},expression:"companyForm.mobile"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"联系人身份证",prop:"idNum"}},[a("el-input",{attrs:{disabled:e.textCard()},model:{value:e.companyForm.idNum,callback:function(t){e.$set(e.companyForm,"idNum",t)},expression:"companyForm.idNum"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"房源体量",prop:"volumn"}},[a("el-input",{model:{value:e.companyForm.volumn,callback:function(t){e.$set(e.companyForm,"volumn",t)},expression:"companyForm.volumn"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行开户名"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.accountName,callback:function(t){e.$set(e.companyForm,"accountName",t)},expression:"companyForm.accountName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行卡号"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.bankCardNum,callback:function(t){e.$set(e.companyForm,"bankCardNum",t)},expression:"companyForm.bankCardNum"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"平台代收租服务","label-width":"120px"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.proxyImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete(t,"proxyImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImages"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImages",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"proxyImageList")}}})])])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"房源发布和租客引流服务","label-width":"120px"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.attractionFlowImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete(t,"attractionFlowImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImageflow"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImageflow",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"attractionFlowImageList")}}})])])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"企业营业执照","label-width":"120px"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.businessLicenseImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete(t,"businessLicenseImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImagebusiness"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImagebusiness",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"businessLicenseImageList")}}})])])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"联系人身份证照片"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.idCardImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete(t,"idCardImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImageidCard"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImageidCard",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"idCardImageList")}}})])])],1)],1)],1),e._v(" "),a("ImageCropper",{attrs:{cropperList:e.cropperList},on:{emitCropperList:e.emitCropperList,emitCropperData:e.emitCropperData}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.closeDialog("companyTableVisible")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit("companyTableVisible")}}},[e._v("确 定")])],1)],1):a("el-dialog",{staticClass:"organEdit",attrs:{title:"飞虎队个人机构",width:"800px",visible:e.personalTableVisible},on:{"update:visible":function(t){e.personalTableVisible=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.companyForm,inline:!0,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.name,callback:function(t){e.$set(e.companyForm,"name",t)},expression:"companyForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手机号码"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.mobile,callback:function(t){e.$set(e.companyForm,"mobile",t)},expression:"companyForm.mobile"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"身份证",prop:"idNum"}},[a("el-input",{attrs:{disabled:e.textCard()},model:{value:e.companyForm.idNum,callback:function(t){e.$set(e.companyForm,"idNum",t)},expression:"companyForm.idNum"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"出房费率"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.splitFee,callback:function(t){e.$set(e.companyForm,"splitFee",t)},expression:"companyForm.splitFee"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"房源体量",prop:"volumn"}},[a("el-input",{model:{value:e.companyForm.volumn,callback:function(t){e.$set(e.companyForm,"volumn",t)},expression:"companyForm.volumn"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行开户名"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.accountName,callback:function(t){e.$set(e.companyForm,"accountName",t)},expression:"companyForm.accountName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行卡号"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.companyForm.bankCardNum,callback:function(t){e.$set(e.companyForm,"bankCardNum",t)},expression:"companyForm.bankCardNum"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"平台代收租服务","label-width":"120px"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.proxyImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete(t,"proxyImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImagesper"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImagesper",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"proxyImageList")}}})])])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"房源发布和租客引流服务","label-width":"120px"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.attractionFlowImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete(t,"attractionFlowImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImagesflow"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImagesflow",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"attractionFlowImageList")}}})])])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"身份证照片","label-width":"120px"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.companyForm.idCardImageList,"delete-icon":"delete",disabled:""},on:{emitDelete:function(t){e.emitDelete(t,"idCardImageList")}}})],1),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImagesidCards"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImagesidCards",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t,"idCardImageList")}}})])])],1)],1)],1),e._v(" "),a("ImageCropper",{attrs:{cropperList:e.cropperList},on:{emitCropperList:e.emitCropperList,emitCropperData:e.emitCropperData}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.closeDialog("personalTableVisible")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit("personalTableVisible")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}}});