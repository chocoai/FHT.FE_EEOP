webpackJsonp([22],{"1FR4":function(e,t,l){var s=l("Alxp")(l("BimL"),l("ppnj"),function(e){l("TRJ9")},null,null);e.exports=s.exports},BimL:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=l("U4Ig"),i=l.n(s),a=(l("0xDb"),l("QHcW"));t.default={name:"houseSync",components:{GridUnit:i.a},filters:{renderStatusType:function(e){return{"已发布":"success","发布中":"primary","发布失败":"danger","下架中":"warning","未发布":"info"}[e]||"info"},renderStatusValue:function(e){return e||"未知"}},data:function(){return{tabMapOptions:["整租","合租","集中式"],activeName:"整租",searchParams:{houseRentType:1,houseStatus:0,houseType:"",publishStatus:"",organizationName:"",keywords:"",mobileOrName:""},selectedItems:[],colModels:[{prop:"organizationName",label:"组织名称"},{prop:"name",label:"姓名",width:100},{prop:"mobile",label:"手机号",width:150},{prop:"userType",label:"用户类型",width:100},{prop:"address",label:"房源位置",width:200},{prop:"roomName",label:"公寓/小区-房间",width:200},{prop:"houseType",label:"房源类型",width:150},{prop:"roomCode",label:"房源编码",width:100},{prop:"rent",label:"房价(元/月)",width:100,align:"right"},{prop:"roomStatus",label:"房间状态",width:100,type:"status",fixed:"right",unitFilters:{renderStatusType:function(e){return{"已出租":"success","未出租":"info"}[e]||"info"},renderStatusValue:function(e){return e||"未知"}}},{prop:"publishStatus",label:"麦邻租房",width:100,type:"status",fixed:"right",unitFilters:{renderStatusType:function(e){return{"已发布":"success","未发布":"info","发布中":"primary"}[e]||"info"},renderStatusValue:function(e){return e||"未知"}}},{prop:"idlefishStatus",label:"闲鱼租房",width:100,slotName:"slot_popover",fixed:"right"},{prop:"operation",label:"操作记录",width:180}],tableHeight:300,url:a.q.defaultOptions.requestUrl,method:a.q.defaultOptions.method,dialogVisible:!1,publishSelect:{mlzf:!0,idlefish:!0},dialogTitle:""}},mounted:function(){var e=this;this.$nextTick(function(){var t=document.body.clientHeight-230-64-20;e.tableHeight=t>300?t:300,window.onresize=function(){return t=document.body.clientHeight-230-64-20,void(e.tableHeight=e.tableHeight=t>300?t:300)}})},computed:{tableStyle:function(){return{width:"100%",height:this.tableHeight+"px"}}},methods:{searchParam:function(e){var t=this;"clear"===e&&(this.searchParams={houseStatus:"",houseType:"",publishStatus:"",organizationName:"",keywords:"",mobileOrName:""}),this.searchParams.houseRentType="整租"===this.activeName?1:"合租"===this.activeName?2:0,this.$nextTick(function(){t.$refs.refGridUnit.searchHandler()})},handleClickTab:function(e){this.searchParam("clear")},handleSelectionChange:function(e){this.selectedItems=e},syncItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"on",t={on:{title:"发布",api:a.q.publish},off:{title:"撤销",api:a.q.unpublish}};return 0===this.selectedItems.length?(this.$message.error("请选择需要"+t[e].title+"的房源"),!1):this.selectedItems.filter(function(e){return"发布中"===e.idlefishStatus||"发布中"===e.publishStatus}).length>0?(this.$message.error("发布中的房源不能进行"+t[e].title),!1):0!==this.selectedItems.filter(function(t){return t.idlefishStatus===e||t.publishStatus===e}).length?(this.$message.error("已"+t[e].title+"的房源不能再"+t[e].title),!1):(this.dialogVisible=!0,this.dialogTitle=t[e].title,this.publishSelect.mlzf=!1,void(this.publishSelect.idlefish=!1))},gotoHouseAsync:function(){var e=this,t="发布"===this.dialogTitle?a.q.publish:a.q.unpublish,l=this.selectedItems.map(function(e){return e.roomCode}),s=[];for(var i in this.publishSelect)this.publishSelect[i]&&s.push(i);t({platforms:s,roomCodes:l}).then(function(t){e.$notify({title:"成功",message:"操作成功",type:"success",duration:2e3}),e.searchParam()})}}}},TRJ9:function(e,t,l){var s=l("c4wS");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);l("8bSs")("c261e5ca",s,!0)},c4wS:function(e,t,l){(e.exports=l("BkJT")(!1)).push([e.i,".model-search .filter-item{margin-left:10px}.select-platform-container{height:100px;padding:15px 10px}.item-select{width:150px}.left{margin-left:5%}.right{margin-right:5%}input[type=checkbox]{display:none}label{display:inline-block;width:120px;height:30px}.ml-selectStatus{width:40px;height:30px;margin-top:-30px;font-size:25px;color:orange;float:right;border:.5px solid #e4e7ed;text-align:center;line-height:35px}.ml-selectName{background-color:#ebeef5;width:80px;height:30px;font-size:14px;text-align:center;line-height:30px}.changeBackground{background-color:orange;color:#fff}#mlRent{position:absolute;clip:rect(0,0,0,0)}",""])},ppnj:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.handleClickTab},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[e._l(e.tabMapOptions,function(e,t){return l("el-tab-pane",{key:t,attrs:{label:e,name:e}})}),e._v(" "),l("el-form",{staticClass:"model-search clearfix",attrs:{inline:!0,size:"small"}},[l("div",[l("el-select",{staticClass:"item-select",attrs:{size:"small",filterable:"",clearable:"",placeholder:"房间状态"},model:{value:e.searchParams.houseStatus,callback:function(t){e.$set(e.searchParams,"houseStatus",t)},expression:"searchParams.houseStatus"}},[l("el-option",{attrs:{label:"已出租",value:1}}),e._v(" "),l("el-option",{attrs:{label:"未出租",value:0}})],1),e._v(" "),l("el-select",{staticClass:"item-select filter-item",attrs:{size:"small",filterable:"",clearable:"",placeholder:"房间类型"},model:{value:e.searchParams.houseType,callback:function(t){e.$set(e.searchParams,"houseType",t)},expression:"searchParams.houseType"}},[l("el-option",{attrs:{label:"普通",value:0}}),e._v(" "),l("el-option",{attrs:{label:"金融",value:1}}),e._v(" "),l("el-option",{attrs:{label:"飞虎队",value:2}})],1),e._v(" "),l("el-select",{staticClass:"item-select filter-item",attrs:{size:"small",filterable:"",clearable:"",placeholder:"麦邻发布状态"},model:{value:e.searchParams.publishStatus,callback:function(t){e.$set(e.searchParams,"publishStatus",t)},expression:"searchParams.publishStatus"}},[l("el-option",{attrs:{label:"未发布",value:0}}),e._v(" "),l("el-option",{attrs:{label:"已发布",value:1}}),e._v(" "),l("el-option",{attrs:{label:"发布中",value:2}})],1),e._v(" "),l("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.searchParam}},[e._v("查询")]),e._v(" "),l("el-button",{staticClass:"filter-item",attrs:{size:"small",icon:"el-icon-remove-outline"},on:{click:function(t){e.searchParam("clear")}}},[e._v("清空")])],1),e._v(" "),l("div",{staticStyle:{"margin-top":"10px"}},[l("el-input",{staticStyle:{width:"150px"},attrs:{size:"small",clearable:"",placeholder:"组织名称"},model:{value:e.searchParams.organizationName,callback:function(t){e.$set(e.searchParams,"organizationName",t)},expression:"searchParams.organizationName"}}),e._v(" "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{size:"small",clearable:"",placeholder:"手机号/姓名"},model:{value:e.searchParams.mobileOrName,callback:function(t){e.$set(e.searchParams,"mobileOrName",t)},expression:"searchParams.mobileOrName"}}),e._v(" "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{size:"small",clearable:"",placeholder:"公寓/小区"},model:{value:e.searchParams.keywords,callback:function(t){e.$set(e.searchParams,"keywords",t)},expression:"searchParams.keywords"}}),e._v(" "),l("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"success",icon:"el-icon-upload"},on:{click:function(t){e.syncItems("on")}}},[e._v("发布")]),e._v(" "),l("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"danger",icon:"el-icon-remove"},on:{click:function(t){e.syncItems("off")}}},[e._v("撤销")]),e._v(" "),l("el-dialog",{staticClass:"select-dialog",attrs:{title:"选择"+e.dialogTitle+"平台",visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("div",{staticClass:"select-platform-container"},[l("div",{staticClass:"left"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.publishSelect.mlzf,expression:"publishSelect.mlzf"}],attrs:{type:"checkbox",id:"mlRent"},domProps:{checked:Array.isArray(e.publishSelect.mlzf)?e._i(e.publishSelect.mlzf,null)>-1:e.publishSelect.mlzf},on:{change:function(t){var l=e.publishSelect.mlzf,s=t.target,i=!!s.checked;if(Array.isArray(l)){var a=e._i(l,null);s.checked?a<0&&(e.publishSelect.mlzf=l.concat([null])):a>-1&&(e.publishSelect.mlzf=l.slice(0,a).concat(l.slice(a+1)))}else e.$set(e.publishSelect,"mlzf",i)}}}),e._v(" "),l("label",{attrs:{for:"mlRent"}},[l("div",{staticClass:"ml-selectName",class:{changeBackground:e.publishSelect.mlzf}},[e._v("麦邻租房")]),e._v(" "),l("div",{staticClass:"ml-selectStatus"},[l("i",{directives:[{name:"show",rawName:"v-show",value:e.publishSelect.mlzf,expression:"publishSelect.mlzf"}],staticClass:"el-icon-check"})])])]),e._v(" "),l("div",{staticClass:"right"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.publishSelect.idlefish,expression:"publishSelect.idlefish"}],attrs:{type:"checkbox",id:"idleFishRent"},domProps:{checked:Array.isArray(e.publishSelect.idlefish)?e._i(e.publishSelect.idlefish,null)>-1:e.publishSelect.idlefish},on:{change:function(t){var l=e.publishSelect.idlefish,s=t.target,i=!!s.checked;if(Array.isArray(l)){var a=e._i(l,null);s.checked?a<0&&(e.publishSelect.idlefish=l.concat([null])):a>-1&&(e.publishSelect.idlefish=l.slice(0,a).concat(l.slice(a+1)))}else e.$set(e.publishSelect,"idlefish",i)}}}),e._v(" "),l("label",{attrs:{for:"idleFishRent"}},[l("div",{staticClass:"ml-selectName",class:{changeBackground:e.publishSelect.idlefish}},[e._v("咸鱼租房")]),e._v(" "),l("div",{staticClass:"ml-selectStatus"},[l("i",{directives:[{name:"show",rawName:"v-show",value:e.publishSelect.idlefish,expression:"publishSelect.idlefish"}],staticClass:"el-icon-check"})])])])]),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:e.gotoHouseAsync}},[e._v(e._s("撤销"===e.dialogTitle?"确定":"发布"))])],1)])],1)]),e._v(" "),l("GridUnit",{ref:"refGridUnit",attrs:{columns:e.colModels,formOptions:e.searchParams,url:e.url,showSelection:!0,pageSizes:[50,100,200,500],dataMethod:e.method,height:e.tableHeight},on:{"selection-change":e.handleSelectionChange},scopedSlots:e._u([{key:"slot_popover",fn:function(t){return["发布失败"===t.row.idlefishStatus||"发布失败"===t.row.publishStatus?l("el-popover",{attrs:{trigger:"hover",placement:"top"}},[l("p",[e._v("发布失败原因: "+e._s(t.row.failReason))]),e._v(" "),l("div",{attrs:{slot:"reference"},slot:"reference"},[l("el-tag",{attrs:{type:e._f("renderStatusType")(t.row.idlefishStatus||t.row.publishStatus)}},[e._v("\n              "+e._s(e._f("renderStatusValue")(t.row.idlefishStatus||t.row.publishStatus))+"\n            ")])],1)]):l("el-tag",{attrs:{type:e._f("renderStatusType")(t.row.idlefishStatus||t.row.publishStatus)}},[e._v("\n          "+e._s(e._f("renderStatusValue")(t.row.idlefishStatus||t.row.publishStatus))+"\n        ")])]}}])})],2)],1)},staticRenderFns:[]}}});