webpackJsonp([22],{"6oP+":function(e,t,a){var i=a("Alxp")(a("IbiK"),a("vjI4"),function(e){a("Ds0Y")},null,null);e.exports=i.exports},Ds0Y:function(e,t){},IbiK:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("aA9S"),r=a.n(i),s=a("ZLEe"),o=a.n(s),l=a("3cXf"),n=a.n(l),c=a("KH7x"),d=a.n(c),p=a("cAgV"),m=a("0xDb"),u=a("T76A"),g=a.n(u),v=a("ms7A"),f=a("E4LH");t.default={name:"orgList",directives:{waves:p.a},components:{areaSelect:g.a},filters:{statusFilter:function(e){return{0:"info",1:"success",2:"danger"}[e]||"info"},filterStr:function(e,t){var a={status:["申请中","启用","停用"]};return a[t]?a[t][e]||("status"===t?"申请中":""):""},dateFilter:function(e){return Object(m.f)(e)+" "}},data:function(){return{rules:{organizationName:[{required:!0,message:"请输入企业名称",trigger:"blur"}],displayName:[{required:!0,message:"请输入企业缩写名",trigger:"blur"}],orgLicence:[{required:!0,message:"请输入统一社会信用代码",trigger:"blur"}],orgLegalPersonName:[{required:!0,message:"请输入法人姓名",trigger:"blur"}],orgLegalPersonCardNo:[{required:!0,message:"请输入法人身份证号",trigger:"blur"}],mobile:[{validator:function(e,t,a){Object(f.b)(t)?a():a(new Error("请输入正确的手机号"))},required:!0,trigger:"blur"}]},isHideUpload:!1,selectOptions:[{label:"系统",value:1},{label:"公司企业",value:2},{label:"个人",value:3}],sexOptions:[{label:"男",value:1},{label:"女",value:2}],cardOptions:[{label:"身份证",value:1}],listLoading:!1,financeEdit:!1,financeTrusteeshipType:"",colModels:[{prop:"organizationName",label:"组织名称"},{prop:"displayName",label:"缩写名"},{prop:"organizationId",label:"组织ID",width:120},{prop:"status",label:"状态",type:"status",width:80},{prop:"gmtCreate",label:"创建时间",type:"dateStr"},{prop:"gmtModified",label:"修改时间",type:"dateStr"}],stepForm1:{organizationName:"",displayName:"",orgLicence:"",orgAddrDetail:"",orgLegalPersonName:"",orgLegalPersonCardNo:"",orgContactName:"",orgContactMobile:"",orgAddrProvinceId:"",orgAddrCityId:"",orgAddrRegionId:"",status:1,type:2,picList:[]},permTemplate:[],organizationPermTemplateId:"",stepForm2:{name:"",gender:"",cardType:1,cardNo:"",mobile:"",cardAddrProvinceId:"",cardAddrCityId:"",cardAddrRegionId:"",cardAddrDetail:"",addrProvinceId:"",addrCityId:"",addrRegionId:"",addrDetail:""},actionBaseUrl:"https://pre.mdguanjia.com/bop/",active:0,areaCode:[],areaCode1:[],areaCode2:[],tableHeight:300,tableData:[],total:null,btnText:"",rowType:"",uploadTips:"",fileList:[],layer_showImage:!1,isEdit:!1,overlayTitle:"新增组织",showPicUrl:"",pageItems:{pageNo:1,pageSize:20},pageSizeList:[10,20,30,50],layer_showInfo:!1,formData:{searchField:"",organizationType:2},multipleSelection:[]}},created:function(){this.getGridData(this.pageItems)},mounted:function(){var e=this,t=document.body.clientHeight-200;this.tableHeight=t>300?t:300,window.onresize=function(){return t=document.body.clientHeight-200,void(e.tableHeight=e.tableHeight=t>300?t:300)}},computed:{tableStyle:function(){return{width:"100%",height:this.tableHeight+"px"}}},watch:{isEdit:function(e){this.overlayTitle=e?"基本资料":"新增组织"},"formData.organizationType":function(e){1*e==3?5===this.colModels.length&&this.colModels.splice(2,0,{prop:"contractMobile",label:"联系电话"}):6===this.colModels.length&&this.colModels.splice(2,1)}},methods:{handleApply:function(){var e=this;this.layer_showInfo=!0,this.isEdit=!1,this.isHideUpload=!1,Object(v.n)().then(function(t){console.log(t),e.permTemplate=t.data.result})},changeStep:function(e){var t=this;if(0===this.active)this.$refs.stepForm1.validate(function(a){if(!a)return!1;var i=d()(t.areaCode,3);t.stepForm1.orgAddrProvinceId=i[0],t.stepForm1.orgAddrCityId=i[1],t.stepForm1.orgAddrRegionId=i[2],t.stepForm1.picList.map(function(e){e.picUrl=e.url});var r={name:t.stepForm1.orgLegalPersonName,cardNo:t.stepForm1.orgLegalPersonCardNo};Object(v.p)(r).then(function(a){t.active+=e}).catch(function(e){})});else if(1===this.active){if(e>0&&!this.organizationPermTemplateId)return this.$message.error("请选择权限模板"),!1;this.active+=e}else this.active+=e},completeFn:function(){var e=this;this.$refs.stepForm2.validate(function(t){if(!t)return!1;var a=d()(e.areaCode1,3);e.stepForm2.cardAddrProvinceId=a[0],e.stepForm2.cardAddrCityId=a[1],e.stepForm2.cardAddrRegionId=a[2];var i=d()(e.areaCode2,3);e.stepForm2.addrProvinceId=i[0],e.stepForm2.addrCityId=i[1],e.stepForm2.addrRegionId=i[2];var r={organizationStepOneVO:e.stepForm1,organizationNewPermVO:{organizationPermTemplateId:e.organizationPermTemplateId},organizationNewUserVO:e.stepForm2};Object(v.t)(n()(r)).then(function(t){e.layer_showInfo=!1,e.getGridData(e.pageItems),e.resetFormData()})})},editData:function(e,t){var a=this,i={organizationId:t.organizationId,type:t.type};this.rowType=t.type,Object(v.k)(i).then(function(e){var i=e.data.result;a.layer_showInfo=!0,a.isEdit=!0,3!==a.rowType?(a.financeTrusteeshipType=i.financeTrusteeshipType.toString(),a.financeEdit="2"===a.financeTrusteeshipType,o()(a.stepForm1).map(function(e){a.stepForm1[e]=i[e]||""}),a.stepForm1.organizationId=t.organizationId,a.fileList=a.stepForm1.picList.map(function(e){return{name:"图片",url:e.picUrl}}),10===a.stepForm1.picList.length&&(a.isHideUpload=!0),a.areaCode=[i.orgAddrProvinceId,i.orgAddrCityId,i.orgAddrRegionId]):(o()(a.stepForm2).map(function(e){a.stepForm2[e]=i[e]||""}),a.stepForm2.organizationId=t.organizationId,a.areaCode1=[i.cardAddrProvinceId,i.cardAddrCityId,i.cardAddrRegionId],a.areaCode2=[i.addrProvinceId,i.addrCityId,i.addrRegionId],a.active=2)})},editFn:function(){var e=this;this.$refs.stepForm1.validateField("displayName",function(t){if(t)return!1;var a=d()(e.areaCode,3);e.stepForm1.orgAddrProvinceId=a[0],e.stepForm1.orgAddrCityId=a[1],e.stepForm1.orgAddrRegionId=a[2],e.stepForm1.picList.map(function(e){e.picUrl=e.picUrl||e.url}),e.stepForm1.financeTrusteeshipType=e.financeTrusteeshipType,Object(v.g)(n()(e.stepForm1)).then(function(t){e.layer_showInfo=!1,e.isEdit=!1,e.getGridData(e.pageItems),e.$message.success("操作成功")})})},resetFormData:function(){this.stepForm1={organizationName:"",displayName:"",orgLicence:"",orgAddrDetail:"",orgLegalPersonName:"",orgLegalPersonCardNo:"",orgContactName:"",orgContactMobile:"",orgAddrProvinceId:"",orgAddrCityId:"",orgAddrRegionId:"",status:1,type:2,picList:[]},this.organizationPermTemplateId="",this.stepForm2={name:"",gender:"",cardType:1,cardNo:"",mobile:"",cardAddrProvinceId:"",cardAddrCityId:"",cardAddrRegionId:"",cardAddrDetail:"",addrProvinceId:"",addrCityId:"",addrRegionId:"",addrDetail:""};var e=[[],[],[]];this.areaCode=e[0],this.areaCode1=e[1],this.areaCode2=e[2],this.active=0},enableItems:function(){var e=this;if(0===this.multipleSelection.length)return this.$message.error("请选择要启用的组织"),!1;var t=!0,a=[];this.multipleSelection.map(function(i){if(1*i.status==1)return t=!1,e.$message.error("已启用的组织不能再启用"),!1;a.push(i.organizationId)}),t&&this.$confirm("确定启用所选组织吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={type:1,organizationIds:a};Object(v.x)(Object(m.a)(t)).then(function(t){e.$message({type:"success",message:"启用成功!"}),e.getGridData(e.pageItems)})})},disableItems:function(){var e=this;if(0===this.multipleSelection.length)return this.$message.error("请选择要停用的组织"),!1;var t=!0,a=[];this.multipleSelection.map(function(i){if(2===i.status)return t=!1,e.$message.error("已停用的组织不能再停用"),!1;a.push(i.organizationId)}),t&&this.$confirm("确定停用所选组织吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={type:2,organizationIds:a};Object(v.x)(Object(m.a)(t)).then(function(t){e.$message({type:"success",message:"停用成功!"}),e.getGridData(e.pageItems)})})},handleSelectionChange:function(e){this.multipleSelection=e},delData:function(e,t){var a=this;this.$confirm("此操作将永久删除该组织, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={type:3,organizationIds:[t.organizationId]};Object(v.x)(Object(m.a)(e)).then(function(e){a.$message({type:"success",message:"删除成功!"}),a.getGridData(a.pageItems)})}).catch(function(){})},pictureUpload:function(e){var t=e.size/1024/1024<=5;return-1===["image/jpeg","image/jpg","image/png"].indexOf(e.type)?(this.$message.error("请上传jpg/png的图片"),!1):t?void 0:(this.$message.error("请上传5Mb大小以内的图片"),!1)},closeDialog:function(){this.layer_showImage=!1},handleExceed:function(e,t){this.$message.warning("当前限制上传 10 张图片，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},pictureRemove:function(e,t){this.showPicUrl="";var a=[];this.isHideUpload=!1,t.map(function(e){e.response&&(e.url=e.response.data[0]),a.push(e)}),this.stepForm1.picList=Object(m.d)(a)},picturePreview:function(e){this.showPicUrl=e.url,this.layer_showImage=!0},pictureSuccess:function(e,t,a){a.length>=10&&(this.isHideUpload=!0),this.stepForm1.picList.push({url:t.response.data[0]})},pictureError:function(e,t){console.log(e)},resetFile:function(e){null},showPicUrlClose:function(){this.showPicUrl=""},dialogClose:function(){this.resetFormData(),this.active=0,this.fileList=[],this.financeEdit=!1,this.$refs.stepForm1.clearValidate(),this.$refs.stepForm2.clearValidate()},handleSizeChange:function(e){this.pageItems.pageSize=e,this.getGridData(this.pageItems)},handleCurrentChange:function(e){this.pageItems.pageNo=e,this.getGridData(this.pageItems)},getGridData:function(e){var t=this;this.listLoading=!0,this.searchParams=r()(Object(m.d)(e),Object(m.d)(this.formData)),Object(v.j)(Object(m.a)(this.searchParams)).then(function(e){t.listLoading=!1,t.tableData=e.data.list,t.total=e.data.record})},searchParam:function(){this.pageItems={pageNo:1,pageSize:20},this.getGridData(this.pageItems)},clearForm:function(){this.pageItems={pageNo:1,pageSize:20},this.formData={searchField:"",organizationType:2},this.getGridData(this.pageItems)},changefinanceType:function(e){var t=this;if(1*e!=2)return!1;Object(v.d)({organizationId:this.stepForm1.organizationId}).then(function(e){if(1*e.code!=0){var a=t;t.$alert(e.message,"标记托底方失败",{type:"error",showClose:!1,beforeClose:function(e,t,i){a.financeTrusteeshipType=1,i()}})}})}}}},vjI4:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"model-search clearfix"},[a("el-select",{staticClass:"item-select",staticStyle:{width:"150px"},attrs:{size:"small",placeholder:"联系状态"},on:{change:e.searchParam},model:{value:e.formData.organizationType,callback:function(t){e.$set(e.formData,"organizationType",t)},expression:"formData.organizationType"}},e._l(e.selectOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{size:"small",placeholder:"组织名称/缩写名"},nativeOn:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchParam(t)}},model:{value:e.formData.searchField,callback:function(t){e.$set(e.formData,"searchField","string"==typeof t?t.trim():t)},expression:"formData.searchField"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",size:"small",icon:"el-icon-search"},nativeOn:{click:function(t){e.searchParam(t)}}},[e._v("\n      查询\n    ")]),e._v(" "),a("el-button",{attrs:{plain:"",size:"small",icon:"el-icon-remove-outline"},nativeOn:{click:function(t){e.clearForm(t)}}},[e._v("清空")]),e._v(" "),a("el-button",{staticClass:"right",attrs:{type:"danger",size:"small",icon:"el-icon-circle-close"},nativeOn:{click:function(t){e.disableItems(t)}}},[e._v("停用")]),e._v(" "),a("el-button",{staticClass:"right",attrs:{type:"success",size:"small",icon:"el-icon-circle-check"},nativeOn:{click:function(t){e.enableItems(t)}}},[e._v("启用")]),e._v(" "),a("el-button",{staticClass:"right",attrs:{type:"primary",size:"small",icon:"el-icon-circle-plus-outline"},nativeOn:{click:function(t){e.handleApply(t)}}},[e._v("新增组织")])],1),e._v(" "),a("div",{staticClass:"model-table",style:e.tableStyle},[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.tableData,"max-height":e.tableHeight,size:"small",fit:"",stripe:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),e._l(e.colModels,function(t,i){return a("el-table-column",{key:i,attrs:{label:t.label,width:t.width,fit:"","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(i){return["status"===t.type?a("el-tag",{attrs:{type:e._f("statusFilter")(i.row[t.prop])}},[e._v("\n            "+e._s(e._f("filterStr")(i.row[t.prop],"status"))+"\n          ")]):"dateStr"===t.type?a("span",[e._v("\n            "+e._s(e._f("dateFilter")(i.row[t.prop]))+"\n          ")]):a("span",[e._v("\n            "+e._s(i.row[t.prop])+"\n          ")])]}}])})}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"small"},nativeOn:{click:function(a){e.editData(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},nativeOn:{click:function(a){e.delData(t.$index,t.row)}}},[e._v("删除")])]}}])})],2)],1),e._v(" "),a("div",{staticClass:"model-pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.pageItems.pageNo,"page-sizes":e.pageSizeList,"page-size":e.pageItems.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.pageItems,"pageNo",t)}}})],1),e._v(" "),a("div",{staticClass:"dialog-info"},[a("el-dialog",{attrs:{title:e.overlayTitle,visible:e.layer_showInfo,width:"800px"},on:{"update:visible":function(t){e.layer_showInfo=t},close:e.dialogClose}},[e.isEdit?e._e():a("el-steps",{attrs:{active:e.active,"finish-status":"success"}},[a("el-step",{attrs:{title:"基本设置"}}),e._v(" "),a("el-step",{attrs:{title:"权限设置"}}),e._v(" "),a("el-step",{attrs:{title:"账号设置"}})],1),e._v(" "),a("el-form",{directives:[{name:"show",rawName:"v-show",value:0==e.active,expression:"active == 0 ? true : false"}],ref:"stepForm1",attrs:{size:"small","status-icon":"",model:e.stepForm1,rules:e.rules,"label-width":"110px"}},[a("div",{staticClass:"clearfix",staticStyle:{"margin-top":"10px"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"企业名称",prop:"organizationName"}},[a("el-input",{attrs:{disabled:e.isEdit},model:{value:e.stepForm1.organizationName,callback:function(t){e.$set(e.stepForm1,"organizationName","string"==typeof t?t.trim():t)},expression:"stepForm1.organizationName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"企业缩写名",prop:"displayName"}},[a("el-input",{model:{value:e.stepForm1.displayName,callback:function(t){e.$set(e.stepForm1,"displayName","string"==typeof t?t.trim():t)},expression:"stepForm1.displayName"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"clearfix"},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"统一社会信用码",prop:"orgLicence","label-width":"140px"}},[a("el-input",{attrs:{disabled:e.isEdit},model:{value:e.stepForm1.orgLicence,callback:function(t){e.$set(e.stepForm1,"orgLicence","string"==typeof t?t.trim():t)},expression:"stepForm1.orgLicence"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"clearfix"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"企业注册地址"}},[a("area-select",{model:{value:e.areaCode,callback:function(t){e.areaCode=t},expression:"areaCode"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-width":"10px"}},[a("el-input",{model:{value:e.stepForm1.orgAddrDetail,callback:function(t){e.$set(e.stepForm1,"orgAddrDetail",t)},expression:"stepForm1.orgAddrDetail"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"clearfix"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"法人姓名",prop:"orgLegalPersonName"}},[a("el-input",{attrs:{disabled:e.isEdit},model:{value:e.stepForm1.orgLegalPersonName,callback:function(t){e.$set(e.stepForm1,"orgLegalPersonName",t)},expression:"stepForm1.orgLegalPersonName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"法人身份证号",prop:"orgLegalPersonCardNo"}},[a("el-input",{attrs:{disabled:e.isEdit},model:{value:e.stepForm1.orgLegalPersonCardNo,callback:function(t){e.$set(e.stepForm1,"orgLegalPersonCardNo",t)},expression:"stepForm1.orgLegalPersonCardNo"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"clearfix"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"联系人姓名"}},[a("el-input",{model:{value:e.stepForm1.orgContactName,callback:function(t){e.$set(e.stepForm1,"orgContactName",t)},expression:"stepForm1.orgContactName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"联系人号码"}},[a("el-input",{model:{value:e.stepForm1.orgContactMobile,callback:function(t){e.$set(e.stepForm1,"orgContactMobile",t)},expression:"stepForm1.orgContactMobile"}})],1)],1)],1),e._v(" "),a("div",{class:{clearfix:!0,hideUpload:e.isHideUpload}},[a("el-form-item",{attrs:{label:"营业执照"}},[a("el-upload",{attrs:{action:e.actionBaseUrl+"/util/upload/uploadPicture","before-upload":e.pictureUpload,"on-preview":e.picturePreview,"on-change":e.resetFile,"on-error":e.pictureError,"on-success":e.pictureSuccess,"file-list":e.fileList,"on-remove":e.pictureRemove,limit:10,multiple:"","on-exceed":e.handleExceed,accept:"image/jpg,image/jpeg,image/png","list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("单张不超过5M，最多上传10张")])])],1)],1),e._v(" "),e.isEdit?a("el-switch",{attrs:{"active-text":"磐谷金融托底方","active-value":"2","inactive-value":"1",disabled:e.financeEdit},on:{change:e.changefinanceType},model:{value:e.financeTrusteeshipType,callback:function(t){e.financeTrusteeshipType=t},expression:"financeTrusteeshipType"}}):e._e()],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.active,expression:"active == 1 ? true : false"}],staticClass:"clearfix"},e._l(e.permTemplate,function(t,i){return a("div",{key:i},[a("el-row",{staticClass:"mtop"},[a("el-radio",{attrs:{label:t.organizationPermTemplateId},model:{value:e.organizationPermTemplateId,callback:function(t){e.organizationPermTemplateId=t},expression:"organizationPermTemplateId"}},[e._v("\n              "+e._s(t.name)+"\n            ")])],1),e._v(" "),a("div",{staticClass:"dashed"},[e._v(e._s(t.remark))])],1)})),e._v(" "),a("el-form",{directives:[{name:"show",rawName:"v-show",value:2==e.active,expression:"active == 2 ? true : false"}],ref:"stepForm2",attrs:{size:"small",rules:e.rules,model:e.stepForm2,"label-width":"110px"}},[a("div",{staticClass:"clearfix",staticStyle:{"margin-top":"10px"}},[a("el-col",{attrs:{span:9}},[a("el-form-item",{attrs:{label:"手机号码",prop:"mobile"}},[a("el-input",{attrs:{disabled:e.isEdit},model:{value:e.stepForm2.mobile,callback:function(t){e.$set(e.stepForm2,"mobile",t)},expression:"stepForm2.mobile"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:9}},[a("el-form-item",{attrs:{label:"姓名","label-width":"50px"}},[a("el-input",{attrs:{disabled:e.isEdit},model:{value:e.stepForm2.name,callback:function(t){e.$set(e.stepForm2,"name",t)},expression:"stepForm2.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"性别","label-width":"50px"}},[a("el-select",{staticClass:"item-select",attrs:{size:"small",disabled:e.isEdit,placeholder:"性别"},model:{value:e.stepForm2.gender,callback:function(t){e.$set(e.stepForm2,"gender",t)},expression:"stepForm2.gender"}},e._l(e.sexOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),a("div",{staticClass:"clearfix"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"证件类型"}},[a("el-select",{staticClass:"item-select",attrs:{size:"small",disabled:e.isEdit,placeholder:"证件类型"},model:{value:e.stepForm2.cardType,callback:function(t){e.$set(e.stepForm2,"cardType",t)},expression:"stepForm2.cardType"}},e._l(e.cardOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"证件号码"}},[a("el-input",{attrs:{disabled:e.isEdit},model:{value:e.stepForm2.cardNo,callback:function(t){e.$set(e.stepForm2,"cardNo",t)},expression:"stepForm2.cardNo"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"clearfix"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"身份证地址"}},[a("area-select",{attrs:{disabled:e.isEdit},model:{value:e.areaCode1,callback:function(t){e.areaCode1=t},expression:"areaCode1"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-width":"10px"}},[a("el-input",{attrs:{disabled:e.isEdit},model:{value:e.stepForm2.cardAddrDetail,callback:function(t){e.$set(e.stepForm2,"cardAddrDetail",t)},expression:"stepForm2.cardAddrDetail"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"clearfix"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"现居住地址"}},[a("area-select",{attrs:{disabled:e.isEdit},model:{value:e.areaCode2,callback:function(t){e.areaCode2=t},expression:"areaCode2"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-width":"10px"}},[a("el-input",{attrs:{disabled:e.isEdit},model:{value:e.stepForm2.addrDetail,callback:function(t){e.$set(e.stepForm2,"addrDetail",t)},expression:"stepForm2.addrDetail"}})],1)],1)],1),e._v(" "),e.isEdit?e._e():a("div",{staticClass:"clearfix"},[e._v("\n          温馨提示：默认密码为123456，请提醒用户首次登陆后立即更改密码\n        ")])]),e._v(" "),3!=e.rowType?a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e.isEdit?a("div",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.editFn}},[e._v("确定")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogClose,e.layer_showInfo=!1}}},[e._v("取 消")])],1):a("div",[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.active>0&&e.active<3,expression:"active > 0 && active < 3"}],attrs:{type:"primary",size:"small"},on:{click:function(t){e.changeStep(-1)}}},[e._v("上一步")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.active<2,expression:"active < 2"}],attrs:{type:"primary",size:"small"},on:{click:function(t){e.changeStep(1)}}},[e._v("下一步")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:2==e.active,expression:"active == 2"}],attrs:{type:"primary",size:"small"},on:{click:e.completeFn}},[e._v("完成")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogClose,e.layer_showInfo=!1}}},[e._v("取 消")])],1)]):e._e()],1)],1),e._v(" "),a("div",{staticClass:"dialog-image"},[a("el-dialog",{staticStyle:{"text-align":"center"},attrs:{title:"",width:"100%","show-close":!1,visible:e.layer_showImage},on:{"update:visible":function(t){e.layer_showImage=t},close:e.showPicUrlClose},nativeOn:{click:function(t){e.closeDialog(t)}}},[a("img",{staticClass:"image",attrs:{src:e.showPicUrl}})])],1)])},staticRenderFns:[]}}});