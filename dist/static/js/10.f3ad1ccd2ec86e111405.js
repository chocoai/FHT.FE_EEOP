webpackJsonp([10,35],{"4Y4y":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("3cXf"),o=a.n(s),i=a("0xDb"),r=a("U4Ig"),l=a.n(r),n=a("T76A"),c=a.n(n),d=a("phKz"),p=a.n(d),u=a("QHcW");t.default={name:"estateHouseList",components:{GridUnit:l.a,areaSelect:c.a,estateModel:p.a},data:function(){return{estateModelTitle:"",showEstateModel:!1,houseSearchForm:{orgName:"",estateName:"",cityArea:[],cityId:""},tableHeight:500,estateListUrl:"/market/fangyuan",method:"queryEstateList",colModels:[{prop:"orgName",label:"组织名称"},{prop:"displayCityName",label:"城市"},{prop:"estateName",label:"公寓名称"},{prop:"provider",label:"房源提供者"},{prop:"operate",label:"操作",slotName:"operateEstate",width:"300",fixed:"right"},{prop:"operateRecord",label:"操作记录",slotName:"operateRecordStr"}]}},computed:{cityArea:function(){return this.houseSearchForm.cityArea}},methods:{searchParam:function(){this.$refs.estateHouseList.searchHandler()},searchEstateHouseList:function(e){if("clear"===e)for(var t in this.houseSearchForm)this.houseSearchForm[t]="cityArea"===t?[]:"";this.searchParam()},routerToEstateRoomList:function(e){this.$router.push({path:"estateRoomList",query:{fangyuanCode:e.fangyuanCode}})},openEstateModel:function(e,t){var a=this;1===e?(this.estateModelTitle="新建公寓",this.showEstateModel=!0):(this.estateModelTitle="编辑公寓",this.$store.commit("SET_FANGYUANCODE",t.fangyuanCode),Object(u.m)({fangyuanCode:t.fangyuanCode}).then(function(e){a.$store.commit("SET_ESTATEDATA",e.data),a.showEstateModel=!0}))},checkEditStatus:function(e){this.$refs.estateModel.checkEditFlag()?this.$confirm("您还有数据未保存, 确认关闭吗？").then(function(t){e()}).catch(function(e){}):e()},saveEstateData:function(e){var t=this,a=Object(i.d)(this.$refs.estateModel.returnEstateData(e));if(a){console.log(a);var s=null;if("新建公寓"===this.estateModelTitle)s=u.j;else switch(this.$refs.estateModel.activeNames[0]){case"1":s=u.E;break;case"2":s=u.F;break;case"3":s=u.I}s({estateInfo:o()(a)}).then(function(e){"0"===e.code&&(t.$message({message:e.message,type:"success"}),t.showEstateModel=!1,t.$refs.estateHouseList.fetchHandler())})}},deleteEstate:function(e){var t=this,a=this.$createElement;this.$msgbox({title:"确认消息",message:a("p",null,[a("span",null,"确定删除吗？ "),a("span",{style:"color: red"},"确定后，绑定在公寓上的门禁设备也将解除绑定!")]),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(a){Object(u.h)({fangyuanCode:e.fangyuanCode}).then(function(e){"0"===e.code&&(t.$message({message:e.message,type:"success"}),t.$refs.estateHouseList.fetchHandler())})})}},watch:{cityArea:function(e){e&&e[1]?this.houseSearchForm.cityId=e[1]:this.houseSearchForm.cityId=""}},mounted:function(){var e=this,t=Object(i.c)(function(){e.tableHeight=Math.max(document.body.clientHeight-190,250)},100);this.$nextTick(function(){t()}),window.addEventListener("resize",t)},beforeDestroy:function(){var e=document.querySelectorAll("body > .el-dialog__wrapper");e&&[].forEach.call(e,function(e,t){document.body.removeChild(e)})}}},JjZ8:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,".house-search-form .house-search-form-group[data-v-1bdf766f]{margin-bottom:0}.house-search-form .house-search-form-group.right[data-v-1bdf766f]{margin-right:0}",""])},N8wI:function(e,t,a){var s=a("JjZ8");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("8bSs")("1c3ad529",s,!0)},PxKs:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"houseSearchForm",staticClass:"house-search-form",attrs:{inline:!0,model:e.houseSearchForm,size:"small"}},[a("el-form-item",{staticClass:"house-search-form-group"},[a("area-select",{attrs:{level:0,placeholder:"请选择城市",filterable:!0,showAllLevels:!1},model:{value:e.houseSearchForm.cityArea,callback:function(t){e.$set(e.houseSearchForm,"cityArea",t)},expression:"houseSearchForm.cityArea"}})],1),e._v(" "),a("el-form-item",{staticClass:"house-search-form-group"},[a("el-input",{attrs:{placeholder:"组织名称"},model:{value:e.houseSearchForm.orgName,callback:function(t){e.$set(e.houseSearchForm,"orgName",t)},expression:"houseSearchForm.orgName"}})],1),e._v(" "),a("el-form-item",{staticClass:"house-search-form-group"},[a("el-input",{attrs:{placeholder:"公寓名称"},model:{value:e.houseSearchForm.estateName,callback:function(t){e.$set(e.houseSearchForm,"estateName",t)},expression:"houseSearchForm.estateName"}})],1),e._v(" "),a("el-form-item",[a("el-input",{staticStyle:{width:"120px"},attrs:{size:"small",placeholder:"房源提供者"},model:{value:e.houseSearchForm.provider,callback:function(t){e.$set(e.houseSearchForm,"provider",t)},expression:"houseSearchForm.provider"}})],1),e._v(" "),a("el-form-item",{staticClass:"house-search-form-group"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.searchEstateHouseList("search")}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-remove-outline"},on:{click:function(t){e.searchEstateHouseList("clear")}}},[e._v("清空")])],1),e._v(" "),a("el-form-item",{staticClass:"right house-search-form-group"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){e.openEstateModel(1)}}},[e._v("新建公寓")])],1)],1),e._v(" "),a("grid-unit",{ref:"estateHouseList",attrs:{url:e.estateListUrl,listField:"data.result",totalField:"data.records",dataMethod:e.method,formOptions:e.houseSearchForm,columns:e.colModels,height:e.tableHeight,pageSizes:[50,100,200]},scopedSlots:e._u([{key:"operateEstate",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.routerToEstateRoomList(t.row)}}},[e._v("查看房间")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.openEstateModel(2,t.row)}}},[e._v("编辑公寓")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.deleteEstate(t.row)}}},[e._v("删除公寓")])]}},{key:"operateRecordStr",fn:function(t){return[a("p",[e._v(e._s(t.row.lastOperator)+" "+e._s(t.row.lastOperateTime))])]}}])}),e._v(" "),a("el-dialog",{attrs:{title:e.estateModelTitle,visible:e.showEstateModel,"before-close":e.checkEditStatus,width:"900px"},on:{"update:visible":function(t){e.showEstateModel=t}}},[a("estate-model",{ref:"estateModel",attrs:{type:e.estateModelTitle,showEstateModel:e.showEstateModel}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.saveEstateData("save")}}},[e._v("保 存")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(t){e.showEstateModel=!1}}},[e._v("取 消")])],1)],1)],1)},staticRenderFns:[]}},eXvO:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return"{}"!==JSON.stringify(e.estateModel)?a("div",{staticClass:"estate-model-container"},[a("el-form",{ref:"estateModel",attrs:{model:e.estateModel,rules:e.estateModelRules,"label-width":"110px",size:"small"}},[a("el-collapse",{attrs:{accordion:""},on:{change:e.checkSaveStatus},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{staticClass:"estate-collapse-container",attrs:{name:"1"}},[a("template",{attrs:{slot:"title"},slot:"title"},[a("div",{staticClass:"model-panel-title"},[e._v("\n            公寓\n          ")])]),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"品牌公寓",prop:"estateName"}},[a("el-input",{model:{value:e.estateModel.estateName,callback:function(t){e.$set(e.estateModel,"estateName",t)},expression:"estateModel.estateName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所在地区",prop:"areaCode"}},[a("area-select",{ref:"areaSelect",attrs:{level:1},on:{input:function(t){e.searchZoneList(!1)}},model:{value:e.estateModel.areaCode,callback:function(t){e.$set(e.estateModel,"areaCode",t)},expression:"estateModel.areaCode"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所属板块",prop:e.zoneList.length?"zoneId":""}},[a("el-select",{staticClass:"estate-model-select",attrs:{placeholder:e.zoneList.length?"请选择":"无"},model:{value:e.estateModel.zoneId,callback:function(t){e.$set(e.estateModel,"zoneId",t)},expression:"estateModel.zoneId"}},e._l(e.zoneList,function(e){return a("el-option",{key:e.zoneId,attrs:{label:e.zoneName,value:e.zoneId}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"具体位置",prop:"address"}},[a("map-select",{attrs:{areaCode:e.estateModel.areaCode,value:e.estateModel.address},on:{addressChange:e.addressChange}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"看房电话",prop:"contactName"}},[a("el-input",{attrs:{placeholder:"联系人"},model:{value:e.estateModel.contactName,callback:function(t){e.$set(e.estateModel,"contactName",t)},expression:"estateModel.contactName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{"label-width":"0"}},[a("el-select",{model:{value:e.estateModel.contactGender,callback:function(t){e.$set(e.estateModel,"contactGender",t)},expression:"estateModel.contactGender"}},[a("el-option",{attrs:{label:"先生",value:1}}),e._v(" "),a("el-option",{attrs:{label:"女士",value:2}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{"label-width":"0",prop:"contactMobile"}},[a("el-input",{attrs:{type:"number",placeholder:"联系电话"},model:{value:e.estateModel.contactMobile,callback:function(t){e.$set(e.estateModel,"contactMobile",t)},expression:"estateModel.contactMobile"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"公寓简介",prop:"houseDesc"}},[a("el-input",{attrs:{type:"textarea",placeholder:"最多可输入150个字",rows:3},model:{value:e.estateModel.houseDesc,callback:function(t){e.$set(e.estateModel,"houseDesc",t)},expression:"estateModel.houseDesc"}}),e._v(" "),a("span",{staticClass:"estate-iontro-length-tips"},[e._v(e._s(e.estateModel.houseDesc?e.estateModel.houseDesc.length:0)+"/150")])],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"房源管理权限",prop:"orgId"}},[a("el-select",{staticClass:"estate-model-select",attrs:{filterable:"",remote:"",clearable:!0,placeholder:"组织名称","remote-method":e.searchOrgListByKeywords,loading:e.loading,disabled:"编辑公寓"===e.type},on:{clear:e.setOrg},model:{value:e.estateModel.orgId,callback:function(t){e.$set(e.estateModel,"orgId",t)},expression:"estateModel.orgId"}},e._l(e.orgList,function(t){return a("el-option",{key:t.ordId,attrs:{value:t.orgId,label:t.orgName},nativeOn:{click:function(a){e.setOrg(t)}}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.orgName))]),e._v(" "),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.adminMobile))])])}))],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{"label-width":"0"}},[a("el-input",{attrs:{placeholder:"账号名",disabled:!0},model:{value:e.estateModel.accountName,callback:function(t){e.$set(e.estateModel,"accountName",t)},expression:"estateModel.accountName"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-form-item",[a("el-checkbox",{attrs:{label:"飞虎队",name:"type",disabled:"编辑公寓"===this.type},on:{change:e.handleSourceInfo},model:{value:e.estateModel.tag,callback:function(t){e.$set(e.estateModel,"tag",t)},expression:"estateModel.tag"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[e.estateModel.tag?a("el-form-item",{attrs:{"label-width":"0",prop:"sourceInfo"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",remote:"",placeholder:"房源提供者","remote-method":e.fetchFlyTigerList,loading:e.loading,clearable:!0,size:"small"},model:{value:e.estateModel.sourceInfo,callback:function(t){e.$set(e.estateModel,"sourceInfo",t)},expression:"estateModel.sourceInfo"}},e._l(e.filterManagerList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),e._v(" "),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.mobile))])])}))],1):e._e()],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"公寓/照片"}},[a("el-badge",{staticClass:"estate-badge-btn",attrs:{value:e.estateModel.pictureList?e.estateModel.pictureList.length:0}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addPics("estatePics",-1)}}},[e._v("公寓照片")])],1),e._v(" "),a("el-button",{staticClass:"estate-badge-btn",attrs:{type:"primary"},on:{click:e.openDeviceModel}},[e._v("房源基础设施")])],1)],1)],1)],2),e._v(" "),a("el-collapse-item",{staticClass:"estate-collapse-container",attrs:{name:"2"}},[a("template",{attrs:{slot:"title"},slot:"title"},[a("div",{staticClass:"model-panel-title"},[e._v("\n            楼层\n          ")])]),e._v(" "),a("el-row",{staticClass:"estate-floor-container",attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"公寓楼层","label-width":"110px",prop:"floors"}},[e._l(e.estateModel.floors,function(t,s){return a("el-row",{key:s,attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{"label-width":"0",prop:"floors."+s+".floorName",rules:e.estateModelRules.floor.floorName}},[a("el-input",{attrs:{type:"text"},model:{value:t.floorName,callback:function(a){e.$set(t,"floorName",a)},expression:"item.floorName"}},[a("template",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("楼层名称")])],2)],1)],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{"label-width":"0",prop:"floors."+s+".roomNum",rules:e.estateModelRules.floor.roomNum}},[a("el-input",{attrs:{type:"number",min:"0",disabled:t.forbbidenEdit},model:{value:t.roomNum,callback:function(a){e.$set(t,"roomNum",a)},expression:"item.roomNum"}},[a("template",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("共")]),e._v(" "),a("template",{attrs:{slot:"append"},slot:"append"},[e._v("间")])],2)],1)],1),e._v(" "),t.forbbidenEdit?e._e():a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{"label-width":"0",prop:"floors."+s+".startNo",rules:e.estateModelRules.floor.startNo}},[a("el-input",{attrs:{type:"number",min:"0"},model:{value:t.startNo,callback:function(a){e.$set(t,"startNo",a)},expression:"item.startNo"}},[a("template",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("起始房号")])],2)],1)],1),e._v(" "),t.forbbidenEdit||"编辑公寓"!==e.type?e._e():a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{"label-width":"0",prop:"floors."+s+".roomTypeId",rules:e.estateModelRules.floor.roomTypeId}},[a("el-select",{attrs:{placeholder:"请选择房间类型"},model:{value:t.roomTypeId,callback:function(a){e.$set(t,"roomTypeId",a)},expression:"item.roomTypeId"}},e._l(e.estateModel.roomTypeList,function(e,t){return a("el-option",{key:t,attrs:{label:e.styleName,value:e.id}})}))],1)],1),e._v(" "),e.estateModel.floors.length>1?a("el-col",{staticClass:"estate-floor",attrs:{span:2}},[a("el-button",{staticClass:"delete-btn",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){e.deleteCurItem(1,s)}}})],1):e._e()],1)}),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addEstateFloor}},[e._v("添加楼层")])],2)],1)],1)],2),e._v(" "),a("el-collapse-item",{staticClass:"estate-collapse-container",attrs:{name:"3"}},[a("template",{attrs:{slot:"title"},slot:"title"},[a("div",{staticClass:"model-panel-title"},[e._v("\n            房型\n          ")])]),e._v(" "),a("el-row",{staticClass:"estate-house-type-container",attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"房间类型","label-width":"110px",prop:"roomTypeList"}},[e._l(e.estateModel.roomTypeList,function(t,s){return a("el-row",{key:t.id,attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{"label-width":"0",prop:"roomTypeList."+s+".styleName",rules:e.estateModelRules.roomType.styleName}},[a("el-input",{model:{value:t.styleName,callback:function(a){e.$set(t,"styleName",a)},expression:"item.styleName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-badge",{staticClass:"estate-badge-btn",attrs:{value:t&&t.pictureList?t.pictureList.length:0}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.addPics("roomTypePics",s)}}},[e._v("房型照片")])],1),e._v(" "),"编辑公寓"===e.type?a("el-badge",{staticClass:"estate-badge-btn",attrs:{value:t&&t.roomCodes?t.roomCodes.length:0}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.openBatchCopyModel(s)}}},[e._v("应用到房间")])],1):e._e()],1),e._v(" "),e.estateModel.roomTypeList.length>1?a("el-col",{staticClass:"estate-floor",attrs:{span:2}},[a("el-button",{staticClass:"delete-btn",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){e.deleteCurItem(2,s)}}})],1):e._e()],1)}),e._v(" "),"编辑公寓"===e.type?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addEstateRoomType}},[e._v("添加房间类型")]):e._e()],2)],1)],1)],2)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"estatePics"===e.curUploadPicsType?"上传公寓照片":"上传房间照片",visible:e.uploadPicsModelVisible,"append-to-body":!0,"custom-class":"upload-pics-model",width:"600px"},on:{"update:visible":function(t){e.uploadPicsModelVisible=t},close:e.uploadModelClose}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":e.currentPicList,"delete-icon":"delete",disabled:""},on:{emitDelete:e.emitDelete}}),e._v(" "),a("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImages"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("input",{attrs:{type:"file",id:"uploadImages",accept:e.accept,multiple:""},on:{change:function(t){e.uploadImg(t)}}})])],1),e._v(" "),a("p",{staticClass:"upload-pics-info"},[e._v("温馨提示： ")]),e._v(" "),a("p",{staticClass:"upload-pics-info"},[e._v("1.请勿上传虚假、模糊、与房源信息无关、含有其他公司水印的照片； ")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:"estatePics"===e.curUploadPicsType,expression:"curUploadPicsType === 'estatePics'"}],staticClass:"upload-pics-info"},[e._v("2.请上传相关体现公寓形象的照片； ")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:"roomTypePics"===e.curUploadPicsType,expression:"curUploadPicsType === 'roomTypePics'"}],staticClass:"upload-pics-info"},[e._v("2.房间照片最佳组合：卧室2~6张、公共区域1~4张、厨房1~3张、卫生间1-4张； ")]),e._v(" "),a("p",{staticClass:"upload-pics-info"},[e._v("3.目前最多支持15张，支持JPG/JPEG/PNG，可以拖动图片进行排序，支持批量上传。")]),e._v(" "),a("ImageCropper",{attrs:{cropperList:e.cropperList},on:{emitCropperList:e.emitCropperList,emitCropperData:e.emitCropperData}}),e._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.uploadPicsModelVisible=!1}}},[e._v("关 闭")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"公共基础设施",visible:e.estateDeviceModelVisible,width:"600px","append-to-body":!0,"custom-class":"estate-device-model"},on:{"update:visible":function(t){e.estateDeviceModelVisible=t}}},[a("estate-device-group",{ref:"deviceModel",attrs:{checkedData:{services:e.estateModel.services,storeServices:e.estateModel.storeServices,surroundings:e.estateModel.surroundings},deviceMap:e.deviceMap,checkList:e.deviceList,estateDeviceModelVisible:e.estateDeviceModelVisible}}),e._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.saveDeviceData("save")}}},[e._v("确 定")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(t){e.saveDeviceData("clear")}}},[e._v("取 消")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"应用到房间",visible:e.batchCopyModelVisible,width:"700px","append-to-body":!0},on:{"update:visible":function(t){e.batchCopyModelVisible=t}}},[a("room-list-selecter",{ref:"batchCopyRoom",attrs:{roomList:e.batchCopyRoomList,checkedList:e.estateModel.roomTypeList[this.curRoomTypeIndex]?e.estateModel.roomTypeList[this.curRoomTypeIndex].roomCodes:[],visible:e.batchCopyModelVisible}},[a("el-row",{staticClass:"model-head",attrs:{type:"flex",justify:"center"}},[a("el-checkbox",{attrs:{label:"当前房间已是该类型",disabled:""},model:{value:e.batchCopyOptions.isSelected,callback:function(t){e.$set(e.batchCopyOptions,"isSelected",t)},expression:"batchCopyOptions.isSelected"}}),e._v(" "),a("el-checkbox",{attrs:{label:"当前房间尚未选择该类型",disabled:""},model:{value:e.batchCopyOptions.noSelected,callback:function(t){e.$set(e.batchCopyOptions,"noSelected",t)},expression:"batchCopyOptions.noSelected"}}),e._v(" "),a("el-checkbox",{attrs:{label:"当前房间正在选择该类型"},on:{change:function(t){e.batchCopyOptions.activeSelected=!0}},model:{value:e.batchCopyOptions.activeSelected,callback:function(t){e.$set(e.batchCopyOptions,"activeSelected",t)},expression:"batchCopyOptions.activeSelected"}})],1),e._v(" "),a("span",{attrs:{slot:"card-title"},slot:"card-title"},[e._v("请选择要应用该房型的房间")])],1),e._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.saveBatchCobyRoom}},[e._v("确 定")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(t){e.batchCopyModelVisible=!1}}},[e._v("取 消")])],1)],1)],1):e._e()},staticRenderFns:[]}},lAQZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("lC5x"),o=a.n(s),i=a("hRKE"),r=a.n(i),l=a("rVsN"),n=a.n(l),c=a("J0Oq"),d=a.n(c),p=a("IHPB"),u=a.n(p),m=a("aA9S"),h=a.n(m),f=a("ZLEe"),v=a.n(f),g=a("3cXf"),b=a.n(g),y=a("KH7x"),M=a.n(y),x=a("T76A"),L=a.n(x),_=a("o1W5"),C=a.n(_),w=a("QHcW"),k=a("pFO2"),I=a("H1GV"),N=a.n(I),T=a("fDDG"),S=a.n(T),E=a("c5or"),$=a.n(E),D=a("1dB7"),P=a.n(D),F=a("0xDb"),z=[],O=function(e,t){var a=0;return e.length!==t.length?++a:(e.forEach(function(e,s){e.imageName!==t[s].imageName&&a++}),a>0)};t.default={name:"estateModel",components:{mapSelect:C.a,areaSelect:L.a,Preview:N.a,ImageCropper:S.a,estateDeviceGroup:P.a,RoomListSelecter:$.a},props:["showEstateModel","type"],data:function(){return{currentPicList:[],estateModel:{},estateModelRules:{estateName:[{required:!0,message:"请输入公寓名称",trigger:"blur"}],areaCode:[{required:!0,validator:function(e,t,a){""===t[0]?a(new Error("请选择所在地区")):a()},trigger:"change"}],zoneId:[{required:!0,message:"请选择所属板块",trigger:"change"}],address:[{required:!0,message:"请选择具体位置",trigger:"change"}],houseDesc:[{max:150,message:"长度不能超过150个字符",trigger:"change"}],contactName:[{required:!0,message:"请输入联系人",trigger:"change"}],contactMobile:[{required:!0,message:"请输入手机号码",trigger:"blur"}],orgId:[{required:!0,message:"请选择一个组织，支持模糊查询",trigger:"change"}],floors:[{required:!0,message:"",trigger:"change"}],floor:{floorName:[{required:!0,message:"请填写楼层名称",trigger:"change"}],roomNum:[{required:!0,message:"请填写房间数量",trigger:"change"}],startNo:[{required:!0,message:"请填写起始房号",trigger:"change"}],roomTypeId:[{required:!0,message:"请选择房间类型",trigger:"change"}]},roomTypeList:[{required:!0,message:"",trigger:"change"}],roomType:{styleName:[{required:!0,message:"请填写房间类型",trigger:"change"}]},sourceInfo:[{required:!0,message:"请选择一个房源提供者",trigger:"change"}]},loading:!1,zoneList:[],addressList:[],orgList:[],activeNames:["1"],uploadPicsModelVisible:!1,estateDeviceModelVisible:!1,cropperList:[],accept:"image/png, image/jpeg, image/jpg",checkAll:!1,isIndeterminate:!1,deviceMap:{},deviceList:{},curUploadPicsType:"",batchCopyModelVisible:!1,batchCopyRoomList:[],curRoomTypeIndex:0,batchCopyOptions:{isSelected:!0,noSelected:!1,activeSelected:!0},curPicListIndex:-1,tempFormData:{},regionOptions:[],tempAreaCode:[],cityManagerList:[],filterManagerList:[]}},computed:{},methods:{searchZoneList:function(e){var t=this,a=M()(this.estateModel.areaCode,3);this.estateModel.provinceId=a[0],this.estateModel.cityId=a[1],this.estateModel.regionId=a[2],this.tempFormData.regionId===this.estateModel.regionId||e||(this.estateModel.address="",this.estateModel.zoneId=""),void 0!==this.estateModel.areaCode[2]?Object(w.o)({regionId:this.estateModel.regionId}).then(function(e){t.zoneList=e.data.list}):this.zoneList=[]},searchOrgListByKeywords:function(e){var t=this;""!==e?(this.loading=!0,Object(w.l)({orgName:e}).then(function(e){t.loading=!1,"0"===e.code&&(t.orgList=e.data.list)})):this.orgList=[]},addPics:function(e,t){this.curUploadPicsType=e,this.uploadPicsModelVisible=!0,this.curPicListIndex=t,this.currentPicList=-1===this.curPicListIndex?this.estateModel.pictureList:this.estateModel.roomTypeList[this.curPicListIndex]?this.estateModel.roomTypeList[this.curPicListIndex].pictureList:[]},openDeviceModel:function(){var e=this;"{}"===b()(this.deviceMap)?Object(w.i)().then(function(t){"0"===t.code&&(e.$set(e,"deviceMap",t.data||{}),e.$set(e,"deviceList",{services:v()(e.deviceMap.baseSupportMap),storeServices:v()(e.deviceMap.storeMap),surroundings:v()(e.deviceMap.surroundingMap)}),e.estateDeviceModelVisible=!0)}):this.estateDeviceModelVisible=!0},saveDeviceData:function(e){var t=this.$refs.deviceModel.saveDeviceData();"save"===e&&(this.estateModel.services=t.services,this.estateModel.storeServices=t.storeServices,this.estateModel.surroundings=t.surroundings),this.estateDeviceModelVisible=!1},addEstateFloor:function(){this.estateModel.floors.push({floorSort:"",floorName:"",roomNum:"",startNo:"",roomTypeId:""})},addEstateRoomType:function(){this.estateModel.roomTypeList.push({id:void 0,styleName:"",pictureList:[],roomCodes:[]})},resetForm:function(e){this.$refs[e].resetFields()},checkAddressSelect:function(e){this.estateModel.areaCode[2]||(this.$message.error("请先选择所在地区"),e.target.blur())},setOrg:function(e){this.estateModel.accountName=e?e.accountName:"",this.estateModel.adminUserId=e?e.adminUserId:""},initEstateData:function(){var e=this,t=this.$store.state.estateDetailData.estateInfo;t.areaCode=[t.provinceId,t.cityId,t.regionId],"新建公寓"===this.type?(t.contactGender=1,this.orgList=[],this.zoneList=[]):(t.tag=1===t.tag,t.address=t.subdistrictName?t.subdistrictName+" - "+t.subdistrictAddress:"",t.floors.forEach(function(e){e.forbbidenEdit=!0}),t.sourceInfo&&(this.filterManagerList=[{id:t.sourceInfo.split(",")[0],name:t.sourceInfo.split(",")[1]}],t.sourceInfo=t.sourceInfo.split(",")[0]),t.pictureList.forEach(function(e){e.title=e.imageName,e.key=Math.random().toFixed(5),e.isBase64=0}),t.roomTypeList.forEach(function(e){e.pictureList.forEach(function(e){e.title=e.imageName,e.key=Math.random().toFixed(5),e.isBase64=0})}),this.orgList=[{orgId:t.orgId,orgName:t.orgName}]),setTimeout(function(){e.$set(e,"estateModel",Object(F.d)(t)),e.activeNames=["1"],z=["1"],"新建公寓"===e.type?(e.addEstateFloor(),e.addEstateRoomType()):t.zoneId&&e.searchZoneList(!0),e.$set(e,"tempFormData",Object(F.d)(e.estateModel)),e.$nextTick(function(){e.$refs.estateModel&&e.$refs.estateModel.clearValidate()})},0)},returnEstateData:function(){var e=this,t=!1;return this.$refs.estateModel.validate(function(a){if(!a)return e.$message.error("您还有必填信息未填写完全，请全部填写好后再保存"),!1;var s=Object(F.d)(e.estateModel);s.tag=!0===s.tag?1:0;var o=s.tag?e.filterManagerList.filter(function(e){return e.id===s.sourceInfo}):"";s.sourceInfo=o.length?o[0].id+","+o[0].name:"",t=s}),t},checkSaveStatus:function(e){if("新建公寓"!==this.type)if(this.checkEditFlag())this.$message.error("请先将当前更改的内容保存之后再操作"),this.activeNames=[z.join("")];else switch(e){case"1":this.$set(this,"tempFormData",Object(F.d)(this.estateModel)),z=["1"];break;case"2":this.$set(this,"tempFormData",{fangyuanCode:this.estateModel.fangyuanCode,floors:Object(F.d)(this.estateModel.floors)}),z=["2"];break;case"3":this.$set(this,"tempFormData",{fangyuanCode:this.estateModel.fangyuanCode,roomTypeList:Object(F.d)(this.estateModel.roomTypeList)}),z=["3"]}},checkEditFlag:function(){var e=this,t=!1;return v()(this.tempFormData).forEach(function(a){b()(e.tempFormData[a])!==b()(e.estateModel[a])&&("pictureList"===a?t=O(e.tempFormData[a],e.estateModel[a]):"roomTypeList"===a?e.tempFormData[a].forEach(function(s,o){t=O(s.pictureList,e.estateModel[a][o].pictureList)}):t=!0)}),t},openBatchCopyModel:function(e){var t=this;Object(w.g)({fangyuanCode:this.$store.state.estateDetailData.fangyuanCode}).then(function(a){"0"===a.code&&a.data&&(t.batchCopyRoomList=a.data,t.curRoomTypeIndex=e,t.batchCopyModelVisible=!0)})},saveBatchCobyRoom:function(){var e=this,t=this.$refs.batchCopyRoom.returnCheckedList();this.batchCopyModelVisible=!1,t.length&&this.estateModel.roomTypeList.forEach(function(a,s){e.curRoomTypeIndex===s?a.roomCodes=t:a.roomCodes=a.roomCodes.filter(function(e){return!t.includes(e)})})},deleteCurItem:function(e,t){if(1===e){if("编辑公寓"===this.type&&this.estateModel.floors[t].roomNum>0)return void this.$message.error("当前楼层下面房间不为空，不能删除该楼层");this.estateModel.floors.splice(t,1)}else{if(this.estateModel.roomTypeList[t].roomCodes.length>0)return void this.$message.error("已有应用该房型的房间，不能删除该房型");this.estateModel.roomTypeList.splice(t,1)}},fetchFlyTigerList:function(e){var t=this;""!==e?(this.loading=!0,this.cityManagerList.length?(this.loading=!1,this.filterManagerList=this.cityManagerList.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())||t.mobile.includes(e)})):k.b.queryCityManager().then(function(a){t.loading=!1,"0"===a.code&&a.data&&(t.cityManagerList=a.data,t.filterManagerList=t.cityManagerList.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())||t.mobile.includes(e)}))})):this.filterManagerList=[]},handleSourceInfo:function(e){e||"新建公寓"!==this.type||(this.estateModel.sourceInfo="")},addressChange:function(e){this.estateModel=h()(this.estateModel,e),this.$refs.estateModel.validateField("address"),this.searchZoneList(!0)},uploadModelClose:function(){this.currentPicList=[]},emitDelete:function(e){-1===this.curPicListIndex?this.estateModel.pictureList=e:this.estateModel.roomTypeList[this.curPicListIndex].pictureList=e,this.currentPicList=e||[]},emitCropperList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.cropperList=e},emitCropperData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.forEach(function(e,t){e.type=1,e.imageName=e.title,e.image=e.src,e.key=e.key||Math.random().toFixed(5),void 0===e.isBase64&&(e.isBase64=1)});var t=-1===this.curPicListIndex?this.estateModel.pictureList:this.estateModel.roomTypeList[this.curPicListIndex].pictureList;console.log(t),-1===this.curPicListIndex?this.estateModel.pictureList=[].concat(u()(this.estateModel.pictureList),u()(e)):this.estateModel.roomTypeList[this.curPicListIndex].pictureList=[].concat(u()(this.estateModel.roomTypeList[this.curPicListIndex].pictureList),u()(e)),this.currentPicList=[].concat(u()(this.currentPicList),u()(e))},uploadImg:function(e){var t=this;return d()(o.a.mark(function a(){var s,i,l,c,d;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e.target.value){a.next=3;break}return console.log("取消上传..."),a.abrupt("return",!1);case 3:if(s=[],i=function(e){return new n.a(function(t){var a=new FileReader;a.onerror=function(e){console.log("读取异常....")},a.onload=function(a){var s="object"===r()(a.target.result)?window.URL.createObjectURL(new Blob([a.target.result])):a.target.result,o="";o=e.name?e.name.split(".")[0].length<=30?e.name.split(".")[0]:e.name.split(".")[0].substr(0,30):"",t({img:s,imageName:o,type:1})},a.readAsArrayBuffer(e)})},l=e.target.files,!((c=-1===t.curPicListIndex?t.estateModel.pictureList:t.estateModel.roomTypeList[t.curPicListIndex].pictureList).length+l.length>15)){a.next=11;break}return t.$message.error("您已上传"+c.length+"张图片，最多还能上传"+(15-c.length)+"张图片"),e.target.value=null,a.abrupt("return",!1);case 11:d=0;case 12:if(!(d<l.length)){a.next=25;break}if(t.accept.includes(l[d].type)){a.next=17;break}return t.$message.error("请上传"+t.accept.replace(/image\//gi,"")+"的图片"),e.target.value=null,a.abrupt("return",!1);case 17:return a.t0=s,a.next=20,i(l[d]);case 20:a.t1=a.sent,a.t0.push.call(a.t0,a.t1);case 22:d++,a.next=12;break;case 25:t.cropperList=s.map(function(e,t){return{img:e.img,imageName:e.imageName,type:e.type}}),t.layer_cropper=!0,e.target.value=null;case 28:case"end":return a.stop()}},a,t)}))()}},watch:{showEstateModel:{immediate:!0,handler:function(e){e?this.initEstateData():this.$store.commit("CLEAR_ESTATEDATA")}}},mounted:function(){}}},opQI:function(e,t,a){var s=a("tzjh");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("8bSs")("374d258b",s,!0)},phKz:function(e,t,a){var s=a("Alxp")(a("lAQZ"),a("eXvO"),function(e){a("opQI")},"data-v-40255ef2",null);e.exports=s.exports},pwsb:function(e,t,a){var s=a("Alxp")(a("4Y4y"),a("PxKs"),function(e){a("N8wI")},"data-v-1bdf766f",null);e.exports=s.exports},tzjh:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,'.map-selected-container[data-v-40255ef2]{position:relative;width:660px;height:400px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.map-selected-container .bm-container[data-v-40255ef2]{width:400px;height:400px}.map-selected-container .bm-container .bm-view[data-v-40255ef2]{width:400px;height:400px;background-color:red}.map-selected-container .bm-container .search-input[data-v-40255ef2]{position:absolute;top:10px;left:10px;width:340px}.map-selected-container .search-list[data-v-40255ef2]{width:250px;height:400px;overflow-x:hidden;overflow-y:scroll}.map-selected-container .search-list .search-list-item[data-v-40255ef2]{display:block;line-height:1;padding:8px 15px}.map-selected-container .search-list .search-list-item[data-v-40255ef2]:hover{background-color:hsla(0,0%,94%,.8)}.map-selected-container .search-list .address[data-v-40255ef2]{margin:0;color:#999;font-size:12px}.map-selected-container .search-list .title[data-v-40255ef2]{margin:0 0 5px;font-size:14px;color:#333}.map-selected-container .selected-point[data-v-40255ef2]{position:absolute;top:200px;left:200px;width:0;height:0;visibility:hidden}.map-selected-tips[data-v-40255ef2]{margin-top:-20px;margin-bottom:10px}.map-selected-tips p[data-v-40255ef2]{font-size:12px;margin:0;color:red}.selected-house-position .form-item[data-v-40255ef2]{position:relative;margin-bottom:10px}.selected-house-position .form-item .city-label[data-v-40255ef2]:before{content:"*";color:#f56c6c;margin-right:4px}.selected-house-position .city-name[data-v-40255ef2]{margin:0}.selected-house-position .close-icon[data-v-40255ef2]{position:absolute;top:12px;right:12px;z-index:10;cursor:pointer;font-size:18px;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.selected-house-position .close-icon[data-v-40255ef2]:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.detail-address-options li[data-v-40255ef2]:last-child{color:red}.estate-model-container .model-panel-title[data-v-40255ef2]{font-size:16px}.estate-model-container .estate-model-select[data-v-40255ef2]{width:100%}.estate-model-container .estate-badge-btn[data-v-40255ef2]{margin-right:20px}.estate-model-container .estate-badge-btn button[data-v-40255ef2]{vertical-align:top}.estate-model-container .estate-collapse-container .el-row .estate-iontro-length-tips[data-v-40255ef2]{position:absolute;bottom:0;right:10px}.estate-model-container .estate-collapse-container .el-row .el-form-item[data-v-40255ef2]{margin-bottom:15px}.estate-model-container .estate-collapse-container .el-row:last-child .el-form-item[data-v-40255ef2]{margin-bottom:0}.estate-model-container .estate-house-type-container[data-v-40255ef2]{padding-top:10px}.estate-model-container .estate-house-type-container .el-row[data-v-40255ef2]{margin-bottom:10px}.estate-model-container .estate-house-type-container .el-row:first-child .el-col[data-v-40255ef2]:first-child{margin-left:-10px}.estate-model-container .estate-house-type-container .el-row .el-col:last-child .delete-btn[data-v-40255ef2]{font-size:18px;color:red}.estate-model-container .estate-floor-container .el-row[data-v-40255ef2]{margin-bottom:15px}.estate-model-container .estate-floor-container .el-row:first-child .el-col[data-v-40255ef2]:first-child{margin-left:-5px}.estate-model-container .estate-floor-container .el-row .el-col[data-v-40255ef2]:last-child{text-align:center}.estate-model-container .estate-floor-container .el-row .el-col:last-child .delete-btn[data-v-40255ef2]{font-size:18px;color:red}.upload-pics-model .previewItems[data-v-40255ef2]{margin-bottom:10px}.upload-pics-model .previewItems .el-upload--picture-card.uploadImage[data-v-40255ef2]{width:122px;height:92px;line-height:98px}.upload-pics-model .upload-pics-info[data-v-40255ef2]{margin:0 0 5px}',""])}});