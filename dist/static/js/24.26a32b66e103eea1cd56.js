webpackJsonp([24],{"/a5l":function(e,t,a){var l=a("JRKx");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("8bSs")("8addc820",l,!0)},"1FR4":function(e,t,a){var l=a("Alxp")(a("BimL"),a("ppnj"),function(e){a("/a5l")},"data-v-5e5a969d",null);e.exports=l.exports},BimL:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("aA9S"),s=a.n(l),i=a("U4Ig"),r=a.n(i),o=(a("0xDb"),a("pFO2")),c=a("QHcW"),n=a("T76A"),h=a.n(n);t.default={name:"houseSync",components:{GridUnit:r.a,areaSelect:h.a},filters:{renderStatusType:function(e){return{"已发布":"success","发布中":"primary","发布失败":"danger","下架中":"warning","未发布":"info"}[e]||"info"},renderStatusValue:function(e){return e||"未知"}},data:function(){return{tabMapOptions:["整租","合租","集中式"],activeName:"整租",searchParams:{houseRentType:1,houseStatus:0,houseType:"",publishStatus:"",organizationName:"",keywords:"",mobileOrName:"",cityId:"",cityArea:[],roomCode:""},selectedItems:[],colModels:[{slot:"selection"},{prop:"organizationName",label:"组织名称"},{prop:"address",label:"房源位置",width:200},{prop:"roomName",label:"公寓/小区-房间",width:200},{prop:"houseType",label:"房源类型",width:150},{prop:"roomCode",label:"房源编码",width:100},{prop:"rent",label:"房价(元/月)",width:100,align:"right"},{prop:"name",label:"姓名",width:100},{prop:"mobile",label:"手机号",width:150},{prop:"userType",label:"用户类型",width:100},{prop:"roomStatus",label:"房间状态",width:100,type:"status",fixed:"right",unitFilters:{renderStatusType:function(e){return{"已出租":"success","未出租":"info"}[e]||"info"},renderStatusValue:function(e){return e||"未知"}}},{prop:"publishStatus",label:"麦邻租房",width:100,type:"status",fixed:"right",unitFilters:{renderStatusType:function(e){return{"已发布":"success","未发布":"info","发布中":"primary"}[e]||"info"},renderStatusValue:function(e){return e||"未知"}}},{prop:"idlefishStatus",label:"闲鱼租房",width:100,slotName:"slot_popover",fixed:"right"},{prop:"operation",label:"操作记录",width:180}],tableHeight:300,url:c.x.defaultOptions.requestUrl,method:c.x.defaultOptions.method,dialogVisible:!1,publishSelect:{mlzf:!0,idlefish:!0},dialogTitle:"",loading:!1,sourceInfo:"",cityManagerList:[],filterManagerList:[]}},mounted:function(){var e=this;this.$nextTick(function(){var t=document.body.clientHeight-230-64-20;e.tableHeight=t>300?t:300,window.onresize=function(){return t=document.body.clientHeight-230-64-20,void(e.tableHeight=e.tableHeight=t>300?t:300)}})},computed:{tableStyle:function(){return{width:"100%",height:this.tableHeight+"px"}}},methods:{searchParam:function(e){var t=this;"clear"===e&&(this.searchParams={houseStatus:"",houseType:"",publishStatus:"",organizationName:"",keywords:"",mobileOrName:"",cityId:"",cityArea:[],roomCode:""}),this.searchParams.houseRentType="整租"===this.activeName?1:"合租"===this.activeName?2:0,this.$nextTick(function(){t.$refs.refGridUnit.searchHandler()})},handleClickTab:function(e){this.searchParam("clear")},handleSelectionChange:function(e){this.selectedItems=e},syncItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"on",t={on:{title:"发布"},off:{title:"撤销"}};return 0===this.selectedItems.length?(this.$message.error("请选择需要"+t[e].title+"的房源"),!1):this.selectedItems.filter(function(e){return"发布中"===e.idlefishStatus}).length>0?(this.$message.error("发布中的房源不能进行"+t[e].title),!1):0!==this.selectedItems.filter(function(t){return t.idlefishStatus===e||t.publishStatus===e}).length?(this.$message.error("已"+t[e].title+"的房源不能再"+t[e].title),!1):(this.dialogVisible=!0,this.dialogTitle=t[e].title,this.publishSelect.mlzf=!1,void(this.publishSelect.idlefish=!1))},gotoHouseAsync:function(){var e=this,t=this.selectedItems.map(function(e){return e.roomCode}),a=[];for(var l in this.publishSelect)this.publishSelect[l]&&a.push(l);var i={platforms:a,roomCodeList:t};if("发布"===this.dialogTitle){var r=this.filterManagerList.filter(function(t){return t.id===e.sourceInfo});r.length&&(i=s()(i,{picProviderId:this.sourceInfo,picProviderName:r[0].name}))}Object(c.C)(i,"发布"===this.dialogTitle?1:2).then(function(t){e.$notify({title:"成功",message:"操作成功",type:"success",duration:2e3}),e.dialogVisible=!1,e.searchParam()})},fetchFlyTigerList:function(e){var t=this;""!==e?(this.loading=!0,this.cityManagerList.length?(this.loading=!1,this.filterManagerList=this.cityManagerList.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())||t.mobile.includes(e)})):o.b.queryCityManager().then(function(a){t.loading=!1,"0"===a.code&&a.data&&(t.cityManagerList=a.data,t.filterManagerList=t.cityManagerList.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())||t.mobile.includes(e)}))})):this.filterManagerList=[]}},watch:{"publishSelect.mlzf":function(e){e||"发布"!==this.dialogTitle||(this.sourceInfo="")},roomSearchForm:{handler:function(e){roomSearchForm.cityArea&&roomSearchForm.cityArea[1]?this.roomSearchForm.cityId=roomSearchForm.cityArea[1]:this.roomSearchForm.cityId=""}},"searchParams.cityArea":function(e){e&&e[1]?this.searchParams.cityId=e[1]:this.searchParams.cityId=""}}}},JRKx:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,".item-select[data-v-5e5a969d]{width:140px}.select-dialog .dialog-footer .tips[data-v-5e5a969d]{position:absolute;bottom:25px;left:15px;font-size:14px}.select-platform-container .left[data-v-5e5a969d]{margin-left:30px}.select-platform-container .right[data-v-5e5a969d]{margin-right:30px}.select-platform-container input[type=checkbox][data-v-5e5a969d]{display:none}.select-platform-container label[data-v-5e5a969d]{display:block;width:120px;height:30px;margin-bottom:15px}.ml-selectStatus[data-v-5e5a969d]{width:40px;height:30px;margin-top:-30px;font-size:25px;color:orange;float:right;border:.5px solid #e4e7ed;text-align:center;line-height:30px}.ml-selectName[data-v-5e5a969d]{background-color:#ebeef5;width:80px;height:30px;font-size:14px;text-align:center;line-height:30px}.changeBackground[data-v-5e5a969d]{background-color:orange;color:#fff}#mlRent[data-v-5e5a969d]{position:absolute;clip:rect(0,0,0,0)}",""])},ppnj:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.handleClickTab},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[e._l(e.tabMapOptions,function(e,t){return a("el-tab-pane",{key:t,attrs:{label:e,name:e}})}),e._v(" "),a("el-form",{staticClass:"model-search clearfix",attrs:{inline:!0,size:"small"}},[a("el-form-item",[a("area-select",{staticClass:"item-select",attrs:{placeholder:"请选择城市",filterable:!0,showAllLevels:!1,level:0},model:{value:e.searchParams.cityArea,callback:function(t){e.$set(e.searchParams,"cityArea",t)},expression:"searchParams.cityArea"}})],1),e._v(" "),a("el-form-item",[a("el-select",{staticClass:"item-select",attrs:{size:"small",filterable:"",clearable:"",placeholder:"房间状态"},model:{value:e.searchParams.houseStatus,callback:function(t){e.$set(e.searchParams,"houseStatus",t)},expression:"searchParams.houseStatus"}},[a("el-option",{attrs:{label:"已出租",value:1}}),e._v(" "),a("el-option",{attrs:{label:"未出租",value:0}})],1)],1),e._v(" "),a("el-form-item",[a("el-select",{staticClass:"item-select",attrs:{size:"small",filterable:"",clearable:"",placeholder:"房间类型"},model:{value:e.searchParams.houseType,callback:function(t){e.$set(e.searchParams,"houseType",t)},expression:"searchParams.houseType"}},[a("el-option",{attrs:{label:"普通",value:0}}),e._v(" "),a("el-option",{attrs:{label:"金融",value:1}}),e._v(" "),a("el-option",{attrs:{label:"飞虎队",value:2}})],1)],1),e._v(" "),a("el-form-item",[a("el-select",{staticClass:"item-select",attrs:{size:"small",filterable:"",clearable:"",placeholder:"麦邻发布状态"},model:{value:e.searchParams.publishStatus,callback:function(t){e.$set(e.searchParams,"publishStatus",t)},expression:"searchParams.publishStatus"}},[a("el-option",{attrs:{label:"未发布",value:0}}),e._v(" "),a("el-option",{attrs:{label:"已发布",value:1}}),e._v(" "),a("el-option",{attrs:{label:"发布中",value:2}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.searchParam}},[e._v("查询")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",icon:"el-icon-remove-outline"},on:{click:function(t){e.searchParam("clear")}}},[e._v("清空")])],1),e._v(" "),a("div",[a("el-form-item",[a("el-input",{staticClass:"item-select",attrs:{size:"small",clearable:"",placeholder:"组织名称"},model:{value:e.searchParams.organizationName,callback:function(t){e.$set(e.searchParams,"organizationName",t)},expression:"searchParams.organizationName"}})],1),e._v(" "),a("el-form-item",[a("el-input",{staticClass:"item-select",attrs:{size:"small",clearable:"",placeholder:"手机号/姓名"},model:{value:e.searchParams.mobileOrName,callback:function(t){e.$set(e.searchParams,"mobileOrName",t)},expression:"searchParams.mobileOrName"}})],1),e._v(" "),a("el-form-item",[a("el-input",{staticClass:"item-select",attrs:{size:"small",clearable:"",placeholder:"公寓/小区"},model:{value:e.searchParams.keywords,callback:function(t){e.$set(e.searchParams,"keywords",t)},expression:"searchParams.keywords"}})],1),e._v(" "),a("el-form-item",[a("el-input",{staticClass:"item-select",attrs:{size:"small",clearable:"",placeholder:"房源编码"},model:{value:e.searchParams.roomCode,callback:function(t){e.$set(e.searchParams,"roomCode",t)},expression:"searchParams.roomCode"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-upload"},on:{click:function(t){e.syncItems("on")}}},[e._v("发布")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"danger",icon:"el-icon-remove"},on:{click:function(t){e.syncItems("off")}}},[e._v("撤销")])],1),e._v(" "),a("el-dialog",{staticClass:"select-dialog",attrs:{title:"选择"+e.dialogTitle+"平台",visible:e.dialogVisible,width:"450px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"select-platform-container clearfix"},[a("div",{staticClass:"left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.publishSelect.mlzf,expression:"publishSelect.mlzf"}],attrs:{type:"checkbox",id:"mlRent"},domProps:{checked:Array.isArray(e.publishSelect.mlzf)?e._i(e.publishSelect.mlzf,null)>-1:e.publishSelect.mlzf},on:{change:function(t){var a=e.publishSelect.mlzf,l=t.target,s=!!l.checked;if(Array.isArray(a)){var i=e._i(a,null);l.checked?i<0&&(e.publishSelect.mlzf=a.concat([null])):i>-1&&(e.publishSelect.mlzf=a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.publishSelect,"mlzf",s)}}}),e._v(" "),a("label",{attrs:{for:"mlRent"}},[a("div",{staticClass:"ml-selectName",class:{changeBackground:e.publishSelect.mlzf}},[e._v("麦邻租房")]),e._v(" "),a("div",{staticClass:"ml-selectStatus"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.publishSelect.mlzf,expression:"publishSelect.mlzf"}],staticClass:"el-icon-check"})])]),e._v(" "),a("el-select",{directives:[{name:"show",rawName:"v-show",value:e.publishSelect.mlzf&&"发布"===e.dialogTitle,expression:"publishSelect.mlzf && dialogTitle === '发布'"}],staticClass:"item-select",attrs:{filterable:"",remote:"",placeholder:"照片提供者","remote-method":e.fetchFlyTigerList,loading:e.loading,clearable:!0,size:"small"},model:{value:e.sourceInfo,callback:function(t){e.sourceInfo=t},expression:"sourceInfo"}},e._l(e.filterManagerList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),e._v(" "),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.mobile))])])}))],1),e._v(" "),a("div",{staticClass:"right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.publishSelect.idlefish,expression:"publishSelect.idlefish"}],attrs:{type:"checkbox",id:"idleFishRent"},domProps:{checked:Array.isArray(e.publishSelect.idlefish)?e._i(e.publishSelect.idlefish,null)>-1:e.publishSelect.idlefish},on:{change:function(t){var a=e.publishSelect.idlefish,l=t.target,s=!!l.checked;if(Array.isArray(a)){var i=e._i(a,null);l.checked?i<0&&(e.publishSelect.idlefish=a.concat([null])):i>-1&&(e.publishSelect.idlefish=a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.publishSelect,"idlefish",s)}}}),e._v(" "),a("label",{attrs:{for:"idleFishRent"}},[a("div",{staticClass:"ml-selectName",class:{changeBackground:e.publishSelect.idlefish}},[e._v("闲鱼租房")]),e._v(" "),a("div",{staticClass:"ml-selectStatus"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.publishSelect.idlefish,expression:"publishSelect.idlefish"}],staticClass:"el-icon-check"})])])])]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("span",{staticClass:"tips"},[e._v("温馨提示：飞虎队房源需填写照片提供者")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.gotoHouseAsync}},[e._v(e._s("撤销"===e.dialogTitle?"确定":"发布"))])],1)])],1)],1),e._v(" "),a("GridUnit",{ref:"refGridUnit",attrs:{columns:e.colModels,formOptions:e.searchParams,url:e.url,showSelection:!0,pageSizes:[50,100,200,500],dataMethod:e.method,height:e.tableHeight},on:{"selection-change":e.handleSelectionChange},scopedSlots:e._u([{key:"slot_popover",fn:function(t){return["发布失败"===t.row.idlefishStatus||"发布失败"===t.row.publishStatus?a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("p",[e._v("发布失败原因: "+e._s(t.row.failReason))]),e._v(" "),a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:e._f("renderStatusType")(t.row.idlefishStatus||t.row.publishStatus)}},[e._v("\n              "+e._s(e._f("renderStatusValue")(t.row.idlefishStatus||t.row.publishStatus))+"\n            ")])],1)]):a("el-tag",{attrs:{type:e._f("renderStatusType")(t.row.idlefishStatus||t.row.publishStatus)}},[e._v("\n          "+e._s(e._f("renderStatusValue")(t.row.idlefishStatus||t.row.publishStatus))+"\n        ")])]}}])},[a("el-table-column",{attrs:{slot:"selection",type:"selection"},slot:"selection"})],1)],2)],1)},staticRenderFns:[]}}});