webpackJsonp([33],{"/azh":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("lC5x"),i=o.n(a),s=o("hRKE"),l=o.n(s),r=o("rVsN"),n=o.n(r),c=o("J0Oq"),m=o.n(c),u=o("IHPB"),g=o.n(u),h=o("3cXf"),p=o.n(h),d=o("ZLEe"),f=o.n(d),b=o("aA9S"),v=o.n(b),R=o("KH7x"),D=o.n(R),_=o("T76A"),C=o.n(_),y=o("o1W5"),L=o.n(y),x=o("QHcW"),I=o("pFO2"),k=o("H1GV"),N=o.n(k),w=o("fDDG"),$=o.n(w),M=o("0xDb"),z=function(t,e){var o=0;return t.length!==e.length?++o:(t.forEach(function(t,a){t.imageName!==e[a].imageName&&o++}),o>0)};e.default={components:{areaSelect:C.a,Preview:N.a,ImageCropper:$.a,mapSelect:L.a},data:function(){return{hostingRoomDetail:{},tempFormData:{},hostingRoomDetailRules:{areaCode:[{required:!0,validator:function(t,e,o){""===e[0]?o(new Error("请选择所在地区")):o()},trigger:"change"}],zoneId:[{required:!0,message:"请选择所属板块",trigger:"change"}],address:[{required:!0,message:"请输入公寓/小区",trigger:"change"}],buildingName:[{required:!0,message:"请输入楼幢名",trigger:"blur"}],roomNo:[{required:!0,message:"请输入房间号",trigger:"blur"}],chamberCount:[{required:!0,message:"请输入室",trigger:"blur"}],boardCount:[{required:!0,message:"请输入厅",trigger:"blur"}],toiletCount:[{required:!0,message:"请输入卫",trigger:"blur"}],houseArea:[{required:!0,message:"请输入面积",trigger:"blur"}],houseDirection:[{required:!0,message:"请选择房屋朝向",trigger:"change"}],decorationDegree:[{required:!0,message:"请选择装修程度",trigger:"change"}],floorName:[{required:!0,message:"请输入房源所在层",trigger:"blur"}],floorAmount:[{required:!0,message:"请输入总楼层数",trigger:"blur"}],contactName:[{required:!0,message:"请输入联系人姓名",trigger:"blur"}],contactMobile:[{required:!0,message:"请输入联系人电话",trigger:"blur"}],houseDesc:[{max:150,message:"长度不能超过150个字符",trigger:"change"}],sourceInfo:[{required:!0,message:"请选择一个房源提供者",trigger:"change"}],roomDetail:{roomArea:[{required:!0,message:"请输入房间面积",trigger:"blur"}],roomDirection:[{required:!0,message:"请选择房间朝向",trigger:"change"}]},orgId:[{required:!0,message:"请选择一个组织，支持模糊查询",trigger:"change"}],tag:[{required:!0,message:"",trigger:"change"}]},zoneList:[],orgList:[],loading:!1,decorationDegreeList:[{label:"毛坯",value:1},{label:"简装",value:2},{label:"精装修",value:3},{label:"豪华装",value:4}],roomDirectionList:[{label:"朝南",value:1},{label:"朝北",value:2},{label:"朝东",value:3},{label:"朝西",value:4},{label:"东南",value:5},{label:"西南",value:6},{label:"东北",value:7},{label:"西北",value:8}],uploadPicsModelVisible:!1,facilityGroup:[{label:"家电",facilitys:[{value:"2",label:"洗衣机"},{value:"3",label:"空调"},{value:"4",label:"冰箱"},{value:"5",label:"电视"}]},{label:"家具",facilitys:[{value:"7",label:"沙发"},{value:"8",label:"茶几"},{value:"10",label:"餐桌"}]},{label:"其他",facilitys:[{value:"6",label:"宽带"}]}],activeRoomName:"1",tabIndex:1,cityManagerList:[],filterManagerList:[],cropperList:[],accept:"image/png, image/jpeg, image/jpg",curPicListIndex:-1,currentPicList:[]}},computed:{roomFacilityGroup:function(){var t=this.facilityGroup.slice(0);return t.splice(1,1,{label:"家具",facilitys:[{value:"1",label:"床"},{value:"9",label:"书桌"},{value:"12",label:"衣柜"}]}),t}},methods:{searchZoneList:function(t){var e=this,o=D()(this.hostingRoomDetail.areaCode,3);this.hostingRoomDetail.provinceId=o[0],this.hostingRoomDetail.cityId=o[1],this.hostingRoomDetail.regionId=o[2],t||(this.hostingRoomDetail.address="",this.hostingRoomDetail.zoneId=""),void 0!==this.hostingRoomDetail.areaCode[2]?Object(x.o)({regionId:this.hostingRoomDetail.regionId}).then(function(t){e.zoneList=t.data.list}):this.zoneList=[]},addressChange:function(t){this.hostingRoomDetail=v()(this.hostingRoomDetail,t),this.$refs.hostingRoomDetail.validateField("address"),this.searchZoneList(!0)},handleTabsEdit:function(t,e){var o=this;if("add"===e){if(this.hostingRoomDetail.hostingRooms.length>25)return;var a=this.hostingRoomDetail.hostingRooms.length,i=++this.tabIndex+"";this.hostingRoomDetail.hostingRooms.push({roomName:"房间"+"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")[a],name:i,roomArea:"",roomAttributesList:[],pictures:[]}),this.activeRoomName=i}if("remove"===e){var s=this.hostingRoomDetail.hostingRooms,l=this.activeRoomName;l===t&&s.forEach(function(e,o){if(e.name===t){var a=s[o-1]||s[o+1];a&&(l=a.name)}}),this.hostingRoomDetail.hostingRooms=s.filter(function(e){return e.name!==t}),this.hostingRoomDetail.hostingRooms.forEach(function(t,e){t.roomName="房间"+"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")[e]}),this.$nextTick(function(){o.activeRoomName=l})}},searchOrgListByKeywords:function(t){var e=this;""!==t?(this.loading=!0,Object(x.l)({orgName:t}).then(function(t){e.loading=!1,"0"===t.code&&(e.orgList=t.data.list)})):this.orgList=[]},setOrg:function(t){this.hostingRoomDetail.accountName=t?t.accountName:"",this.hostingRoomDetail.adminUserId=t?t.adminUserId:""},fetchFlyTigerList:function(t){var e=this;""!==t?(this.loading=!0,this.cityManagerList.length?(this.loading=!1,this.filterManagerList=this.cityManagerList.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.mobile.includes(t)})):I.b.queryCityManager().then(function(o){e.loading=!1,"0"===o.code&&o.data&&(e.cityManagerList=o.data,e.filterManagerList=e.cityManagerList.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.mobile.includes(t)}))})):this.filterManagerList=[]},handleSourceInfo:function(t){t||(this.hostingRoomDetail.sourceInfo="",this.filterManagerList=[])},setRoomDetailData:function(t){var e=this;2===t.houseRentType&&(this.tabIndex=t.hostingRooms.length,this.activeRoomName="1"),t.isEditFlag?(t.zoneId=0===t.zoneId?"":t.zoneId,this.orgList=[{orgId:t.orgId,orgName:t.orgName}],1===t.houseRentType&&t.pictures?t.pictures.forEach(function(t){t.title=t.imageName,t.key=Math.random().toFixed(5),t.isBase64=0}):t.hostingRooms.forEach(function(t){t.pictures&&t.pictures.forEach(function(t){t.title=t.imageName,t.key=Math.random().toFixed(5),t.isBase64=0})})):(this.orgList=[],this.zoneList=[]),t.tag=!!t.tag,t.sourceInfo&&(this.filterManagerList=[{id:t.sourceInfo.split(",")[0],name:t.sourceInfo.split(",")[1]}],t.sourceInfo=t.sourceInfo.split(",")[0]),this.$nextTick(function(){e.$set(e,"hostingRoomDetail",t),e.$set(e,"tempFormData",Object(M.d)(t)),t.isEditFlag&&t.zoneId&&e.searchZoneList(!0),e.$nextTick(function(){e.$refs.hostingRoomDetail.clearValidate()})})},checkEditFlag:function(){var t=this,e=!1;return f()(this.tempFormData).forEach(function(o){p()(t.tempFormData[o])!==p()(t.hostingRoomDetail[o])&&("pictures"===o?e=z(t.tempFormData[o],t.hostingRoomDetail[o]):"hostingRooms"===o?t.tempFormData.hostingRooms.forEach(function(o,a){f()(o).forEach(function(i){p()(o[i])!==p()(t.hostingRoomDetail.hostingRooms[a][i])&&(e="pictures"!==i||z(o[i],t.hostingRoomDetail.hostingRooms[a].pictures))})}):e=!0)}),e},returnRoomDetailData:function(){var t=this,e=!1;return this.$refs.hostingRoomDetail.validate(function(o){if(!o){if(2===t.hostingRoomDetail.houseRentType)for(var a=function(e){t.$refs.hostingRoomDetail.validateField("hostingRooms."+e+".roomArea",function(o){if(o)return t.activeRoomName=t.hostingRoomDetail.hostingRooms[e].name,!1}),t.$refs.hostingRoomDetail.validateField("hostingRooms."+e+".roomDirection",function(o){if(o)return t.activeRoomName=t.hostingRoomDetail.hostingRooms[e].name,!1})},i=0;i<t.hostingRoomDetail.hostingRooms.length;i++)a(i);return t.$message.error("您还有必填信息未填写完全，请全部填写好后再保存"),!1}(e=Object(M.d)(t.hostingRoomDetail)).facilityItems=e.facilityItemsList.join(","),e.tag=e.tag?1:0;var s=e.tag?t.filterManagerList.filter(function(t){return t.id===e.sourceInfo}):"";e.sourceInfo=s.length?s[0].id+","+s[0].name:"",2===e.houseRentType&&e.hostingRooms.forEach(function(t,e){t.facilityItems=t.facilityItemsList.join(","),t.roomAttributes=t.roomAttributesList.join(",")})}),e},openPicModel:function(t){this.curPicListIndex=t,this.currentPicList=-1===t?this.hostingRoomDetail.pictures:this.hostingRoomDetail.hostingRooms[t].pictures,this.uploadPicsModelVisible=!0},uploadModelClose:function(){-1===this.curPicListIndex?this.hostingRoomDetail.pictures=this.currentPicList:this.hostingRoomDetail.hostingRooms[this.curPicListIndex].pictures=this.currentPicList,this.currentPicList=[]},deleteCurRoom:function(t,e){var o=this;t.needCheck?Object(x.e)({roomCodeList:[t.roomCode]}).then(function(e){o.handleTabsEdit(t.name,"remove")}).catch(function(t){console.log(t)}):this.handleTabsEdit(t.name,"remove")},emitDelete:function(t){this.currentPicList=t||[]},emitCropperList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.cropperList=t},emitCropperData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.forEach(function(t,e){t.type=1,t.imageName=t.title,t.image=t.src,t.key=t.key||Math.random().toFixed(5),void 0===t.isBase64&&(t.isBase64=1)}),this.currentPicList=[].concat(g()(this.currentPicList),g()(t))},uploadImg:function(t){var e=this;return m()(i.a.mark(function o(){var a,s,r,c,m;return i.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(t.target.value){o.next=3;break}return console.log("取消上传..."),o.abrupt("return",!1);case 3:if(a=[],s=function(t){return new n.a(function(e){var o=new FileReader;o.onerror=function(t){console.log("读取异常....")},o.onload=function(o){var a="object"===l()(o.target.result)?window.URL.createObjectURL(new Blob([o.target.result])):o.target.result,i="";i=t.name?t.name.split(".")[0].length<=30?t.name.split(".")[0]:t.name.split(".")[0].substr(0,30):"",e({img:a,imageName:i,type:1})},o.readAsArrayBuffer(t)})},r=t.target.files,!((c=e.currentPicList).length+r.length>15)){o.next=11;break}return e.$message.error("您已上传"+c.length+"张图片，最多还能上传"+(15-c.length)+"张图片"),t.target.value=null,o.abrupt("return",!1);case 11:m=0;case 12:if(!(m<r.length)){o.next=25;break}if(e.accept.includes(r[m].type)){o.next=17;break}return e.$message.error("请上传"+e.accept.replace(/image\//gi,"")+"的图片"),t.target.value=null,o.abrupt("return",!1);case 17:return o.t0=a,o.next=20,s(r[m]);case 20:o.t1=o.sent,o.t0.push.call(o.t0,o.t1);case 22:m++,o.next=12;break;case 25:e.cropperList=a.map(function(t,e){return{img:t.img,imageName:t.imageName,type:t.type}}),t.target.value=null;case 27:case"end":return o.stop()}},o,e)}))()}}}},"4kz6":function(t,e){},NbDi:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return"{}"!==JSON.stringify(t.hostingRoomDetail)?o("el-form",{ref:"hostingRoomDetail",staticClass:"room-detail-container hosting-room-detail",attrs:{model:t.hostingRoomDetail,rules:t.hostingRoomDetailRules,"label-width":"90px",size:"small"}},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"所在地区",prop:"areaCode"}},[o("area-select",{ref:"areaSelect",attrs:{level:1},on:{input:function(e){t.searchZoneList(!1)}},model:{value:t.hostingRoomDetail.areaCode,callback:function(e){t.$set(t.hostingRoomDetail,"areaCode",e)},expression:"hostingRoomDetail.areaCode"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:7}},[o("el-form-item",{attrs:{label:"所属板块",prop:"zoneId",rules:{required:t.zoneList.length>0,message:"请选择所属板块",trigger:"change"}}},[o("el-select",{staticClass:"room-detail-select",attrs:{placeholder:t.zoneList.length?"请选择":"无"},model:{value:t.hostingRoomDetail.zoneId,callback:function(e){t.$set(t.hostingRoomDetail,"zoneId",e)},expression:"hostingRoomDetail.zoneId"}},t._l(t.zoneList,function(t){return o("el-option",{key:t.zoneId,attrs:{label:t.zoneName,value:t.zoneId}})}))],1)],1),t._v(" "),o("el-col",{attrs:{span:9}},[o("el-form-item",{attrs:{label:"公寓/小区",prop:"address"}},[o("map-select",{attrs:{areaCode:t.hostingRoomDetail.areaCode,value:t.hostingRoomDetail.address},on:{addressChange:t.addressChange}})],1)],1)],1),t._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"楼幢",prop:"buildingName"}},[o("el-input",{model:{value:t.hostingRoomDetail.buildingName,callback:function(e){t.$set(t.hostingRoomDetail,"buildingName",e)},expression:"hostingRoomDetail.buildingName"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:7}},[o("el-form-item",{attrs:{label:"单元"}},[o("el-input",{model:{value:t.hostingRoomDetail.unitCode,callback:function(e){t.$set(t.hostingRoomDetail,"unitCode",e)},expression:"hostingRoomDetail.unitCode"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"室",prop:"roomNo"}},[o("el-input",{model:{value:t.hostingRoomDetail.roomNo,callback:function(e){t.$set(t.hostingRoomDetail,"roomNo",e)},expression:"hostingRoomDetail.roomNo"}})],1)],1)],1),t._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:10}},[o("el-form-item",{staticClass:"room-count",attrs:{label:"户型",prop:"chamberCount","show-message":!1}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:4}},[o("el-form-item",{staticClass:"room-item-count",attrs:{label:"",prop:"chamberCount"}},[o("el-input",{attrs:{type:"number"},model:{value:t.hostingRoomDetail.chamberCount,callback:function(e){t.$set(t.hostingRoomDetail,"chamberCount",e)},expression:"hostingRoomDetail.chamberCount"}})],1)],1),t._v(" "),o("el-col",{staticClass:"room-count-text",attrs:{span:2}},[t._v("\n            室\n          ")]),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-form-item",{staticClass:"room-item-count",attrs:{label:"",prop:"boardCount"}},[o("el-input",{attrs:{type:"number"},model:{value:t.hostingRoomDetail.boardCount,callback:function(e){t.$set(t.hostingRoomDetail,"boardCount",e)},expression:"hostingRoomDetail.boardCount"}})],1)],1),t._v(" "),o("el-col",{staticClass:"room-count-text",attrs:{span:2}},[t._v("\n            厅\n          ")]),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-form-item",{staticClass:"room-item-count",attrs:{label:"",prop:"toiletCount"}},[o("el-input",{attrs:{type:"number"},model:{value:t.hostingRoomDetail.toiletCount,callback:function(e){t.$set(t.hostingRoomDetail,"toiletCount",e)},expression:"hostingRoomDetail.toiletCount"}})],1)],1),t._v(" "),o("el-col",{staticClass:"room-count-text",attrs:{span:2}},[t._v("\n            卫\n          ")]),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-form-item",{staticClass:"room-item-count",attrs:{label:"",prop:"houseArea"}},[o("el-input",{attrs:{type:"number"},model:{value:t.hostingRoomDetail.houseArea,callback:function(e){t.$set(t.hostingRoomDetail,"houseArea",e)},expression:"hostingRoomDetail.houseArea"}})],1)],1),t._v(" "),o("el-col",{staticClass:"room-count-text",attrs:{span:2}},[t._v("\n            m\n            "),o("sup",[t._v("2")])])],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{"label-width":"0",prop:"houseDirection"}},[o("el-select",{staticClass:"room-detail-select",attrs:{placeholder:"朝向"},model:{value:t.hostingRoomDetail.houseDirection,callback:function(e){t.$set(t.hostingRoomDetail,"houseDirection",e)},expression:"hostingRoomDetail.houseDirection"}},t._l(t.roomDirectionList,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{"label-width":"0",prop:"decorationDegree"}},[o("el-select",{staticClass:"room-detail-select",attrs:{placeholder:"装修程度"},model:{value:t.hostingRoomDetail.decorationDegree,callback:function(e){t.$set(t.hostingRoomDetail,"decorationDegree",e)},expression:"hostingRoomDetail.decorationDegree"}},t._l(t.decorationDegreeList,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),o("el-col",{staticClass:"room-detail-floor-container",attrs:{span:8}},[o("el-form-item",{attrs:{label:"层高","label-width":"50px",prop:"floorName"}},[o("el-input",{staticClass:"room-detail-floor-input",attrs:{type:"number"},model:{value:t.hostingRoomDetail.floorName,callback:function(e){t.$set(t.hostingRoomDetail,"floorName",e)},expression:"hostingRoomDetail.floorName"}},[o("template",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("所在层")])],2)],1),t._v(" "),o("el-form-item",{attrs:{"label-width":"0",prop:"floorAmount"}},[o("el-input",{staticClass:"room-detail-floor-input",attrs:{type:"number"},model:{value:t.hostingRoomDetail.floorAmount,callback:function(e){t.$set(t.hostingRoomDetail,"floorAmount",e)},expression:"hostingRoomDetail.floorAmount"}},[o("template",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("总楼层")])],2)],1)],1)],1),t._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"看房电话",prop:"contactName"}},[o("el-input",{attrs:{placeholder:"联系人"},model:{value:t.hostingRoomDetail.contactName,callback:function(e){t.$set(t.hostingRoomDetail,"contactName",e)},expression:"hostingRoomDetail.contactName"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{"label-width":"0"}},[o("el-select",{model:{value:t.hostingRoomDetail.contactGender,callback:function(e){t.$set(t.hostingRoomDetail,"contactGender",e)},expression:"hostingRoomDetail.contactGender"}},[o("el-option",{attrs:{label:"先生",value:1}}),t._v(" "),o("el-option",{attrs:{label:"女士",value:2}})],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{"label-width":"0",prop:"contactMobile"}},[o("el-input",{attrs:{placeholder:"联系电话"},model:{value:t.hostingRoomDetail.contactMobile,callback:function(e){t.$set(t.hostingRoomDetail,"contactMobile",e)},expression:"hostingRoomDetail.contactMobile"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:4}},[1===t.hostingRoomDetail.houseRentType?o("el-form-item",{attrs:{label:"房间照片"}},[o("el-badge",{attrs:{value:t.hostingRoomDetail.pictures.length}},[o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.openPicModel(-1)}}},[t._v("上传照片")])],1)],1):t._e()],1)],1),t._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:13}},[o("el-form-item",{attrs:{label:1===t.hostingRoomDetail.houseRentType?"公区设施":"房间设施"}},[o("el-select",{staticClass:"room-detail-select",attrs:{multiple:"",placeholder:"请选择"},model:{value:t.hostingRoomDetail.facilityItemsList,callback:function(e){t.$set(t.hostingRoomDetail,"facilityItemsList",e)},expression:"hostingRoomDetail.facilityItemsList"}},t._l(t.facilityGroup,function(e){return o("el-option-group",{key:e.label,attrs:{label:e.label}},t._l(e.facilitys,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))}))],1)],1)],1),t._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"房源描述",prop:"houseDesc"}},[o("el-input",{attrs:{type:"textarea",placeholder:"最多可输入150个字",rows:2},model:{value:t.hostingRoomDetail.houseDesc,callback:function(e){t.$set(t.hostingRoomDetail,"houseDesc",e)},expression:"hostingRoomDetail.houseDesc"}}),t._v(" "),o("span",{staticClass:"estate-iontro-length-tips"},[t._v(t._s(t.hostingRoomDetail.houseDesc.length)+"/150")])],1)],1)],1),t._v(" "),2===t.hostingRoomDetail.houseRentType?[o("el-tabs",{staticClass:"sub-room-info-list",attrs:{type:"border-card",addable:t.hostingRoomDetail.hostingRooms.length<26},on:{edit:t.handleTabsEdit},model:{value:t.activeRoomName,callback:function(e){t.activeRoomName=e},expression:"activeRoomName"}},t._l(t.hostingRoomDetail.hostingRooms,function(e,a){return o("el-tab-pane",{key:e.roomName,attrs:{name:e.name}},[o("span",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(e.roomName)+"\n          "),o("i",{directives:[{name:"show",rawName:"v-show",value:a===t.hostingRoomDetail.hostingRooms.length-1&&a>0,expression:"index === hostingRoomDetail.hostingRooms.length - 1 && index > 0"}],staticClass:"el-icon-delete",on:{click:function(o){t.deleteCurRoom(e,a)}}})]),t._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:5}},[o("el-form-item",{staticClass:"room-count",attrs:{"label-width":"0"}},[o("el-row",[o("el-col",{attrs:{span:19}},[o("el-form-item",{staticClass:"room-item-count",attrs:{label:"房间面积",prop:"hostingRooms."+a+".roomArea",rules:t.hostingRoomDetailRules.roomDetail.roomArea}},[o("el-input",{attrs:{type:"number"},model:{value:t.hostingRoomDetail.hostingRooms[a].roomArea,callback:function(e){t.$set(t.hostingRoomDetail.hostingRooms[a],"roomArea",e)},expression:"hostingRoomDetail.hostingRooms[index].roomArea"}})],1)],1),t._v(" "),o("el-col",{staticClass:"room-count-text",attrs:{span:5}},[t._v("\n                  m\n                  "),o("sup",[t._v("2")])])],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{"label-width":"0",prop:"hostingRooms."+a+".roomDirection",rules:t.hostingRoomDetailRules.roomDetail.roomDirection}},[o("el-select",{staticClass:"room-detail-select",attrs:{placeholder:"房间朝向"},model:{value:t.hostingRoomDetail.hostingRooms[a].roomDirection,callback:function(e){t.$set(t.hostingRoomDetail.hostingRooms[a],"roomDirection",e)},expression:"hostingRoomDetail.hostingRooms[index].roomDirection"}},t._l(t.roomDirectionList,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),o("el-col",{attrs:{span:5}},[o("el-form-item",{attrs:{label:"房间照片",prop:""}},[o("el-badge",{attrs:{value:t.hostingRoomDetail.hostingRooms[a].pictures?t.hostingRoomDetail.hostingRooms[a].pictures.length:0}},[o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.openPicModel(a)}}},[t._v("上传照片")])],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{"label-width":"0",prop:""}},[o("el-checkbox-group",{model:{value:t.hostingRoomDetail.hostingRooms[a].roomAttributesList,callback:function(e){t.$set(t.hostingRoomDetail.hostingRooms[a],"roomAttributesList",e)},expression:"hostingRoomDetail.hostingRooms[index].roomAttributesList"}},[o("el-checkbox",{staticClass:"room-attributes",attrs:{label:"1"}},[t._v("独立卫生间")]),t._v(" "),o("el-checkbox",{staticClass:"room-attributes",attrs:{label:"2"}},[t._v("独立阳台")]),t._v(" "),o("el-checkbox",{staticClass:"room-attributes",attrs:{label:"3"}},[t._v("独立厨房")]),t._v(" "),o("el-checkbox",{staticClass:"room-attributes",attrs:{label:"4"}},[t._v("飘窗")])],1)],1)],1)],1),t._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:13}},[o("el-form-item",{attrs:{label:"房间设施"}},[o("el-select",{staticClass:"room-detail-select",attrs:{multiple:"",placeholder:"请选择"},model:{value:t.hostingRoomDetail.hostingRooms[a].facilityItemsList,callback:function(e){t.$set(t.hostingRoomDetail.hostingRooms[a],"facilityItemsList",e)},expression:"hostingRoomDetail.hostingRooms[index].facilityItemsList"}},t._l(t.roomFacilityGroup,function(e){return o("el-option-group",{key:e.label,attrs:{label:e.label}},t._l(e.facilitys,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))}))],1)],1)],1)],1)}))]:t._e(),t._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{"label-width":"110px",label:"房源管理权限",prop:"orgId"}},[o("el-select",{staticClass:"estate-model-select",attrs:{filterable:"",remote:"",clearable:!0,placeholder:"组织名称","remote-method":t.searchOrgListByKeywords,loading:t.loading,disabled:t.hostingRoomDetail.isEditFlag},on:{clear:t.setOrg},model:{value:t.hostingRoomDetail.orgId,callback:function(e){t.$set(t.hostingRoomDetail,"orgId",e)},expression:"hostingRoomDetail.orgId"}},t._l(t.orgList,function(e){return o("el-option",{key:e.ordId,attrs:{value:e.orgId,label:e.orgName},nativeOn:{click:function(o){t.setOrg(e)}}},[o("span",{staticStyle:{float:"left"}},[t._v(t._s(e.orgName))]),t._v(" "),o("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.adminMobile))])])}))],1)],1),t._v(" "),o("el-col",{attrs:{span:5}},[o("el-form-item",{attrs:{"label-width":"0"}},[o("el-input",{attrs:{placeholder:"账号名",disabled:!0},model:{value:t.hostingRoomDetail.accountName,callback:function(e){t.$set(t.hostingRoomDetail,"accountName",e)},expression:"hostingRoomDetail.accountName"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{"label-width":"30px",prop:"tag"}},[o("el-checkbox",{attrs:{label:"飞虎队",name:"type"},on:{change:t.handleSourceInfo},model:{value:t.hostingRoomDetail.tag,callback:function(e){t.$set(t.hostingRoomDetail,"tag",e)},expression:"hostingRoomDetail.tag"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[t.hostingRoomDetail.tag?o("el-form-item",{attrs:{"label-width":"0",prop:"sourceInfo"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",remote:"",placeholder:"房源提供者","remote-method":t.fetchFlyTigerList,loading:t.loading,clearable:!0,size:"small"},model:{value:t.hostingRoomDetail.sourceInfo,callback:function(e){t.$set(t.hostingRoomDetail,"sourceInfo",e)},expression:"hostingRoomDetail.sourceInfo"}},t._l(t.filterManagerList,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}},[o("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),t._v(" "),o("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.mobile))])])}))],1):t._e()],1)],1),t._v(" "),o("el-dialog",{attrs:{title:"上传房间照片",visible:t.uploadPicsModelVisible,"append-to-body":!0,"custom-class":"upload-pics-model",width:"600px"},on:{"update:visible":function(e){t.uploadPicsModelVisible=e},close:t.uploadModelClose}},[o("div",{staticClass:"previewItems"},[o("Preview",{attrs:{"pic-list":t.currentPicList,"delete-icon":"delete",disabled:""},on:{emitDelete:t.emitDelete}}),t._v(" "),o("label",{staticClass:"el-upload el-upload--picture-card uploadImage",attrs:{for:"uploadImages"}},[o("i",{staticClass:"el-icon-plus"}),t._v(" "),o("input",{attrs:{type:"file",id:"uploadImages",accept:t.accept,multiple:""},on:{change:function(e){t.uploadImg(e)}}})])],1),t._v(" "),o("p",{staticClass:"upload-pics-info"},[t._v("温馨提示： ")]),t._v(" "),o("p",{staticClass:"upload-pics-info"},[t._v("1.请勿上传虚假、模糊、与房源信息无关、含有其他公司水印的照片； ")]),t._v(" "),o("p",{staticClass:"upload-pics-info"},[t._v("2.房间照片最佳组合：卧室2~6张、公共区域1~4张、厨房1~3张、卫生间1-4张； ")]),t._v(" "),o("p",{staticClass:"upload-pics-info"},[t._v("3.目前最多支持15张，支持JPG/JPEG/PNG，可以拖动图片进行排序，支持批量上传。")]),t._v(" "),o("ImageCropper",{attrs:{cropperList:t.cropperList},on:{emitCropperList:t.emitCropperList,emitCropperData:t.emitCropperData}}),t._v(" "),o("span",{attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.uploadPicsModelVisible=!1}}},[t._v("关 闭")])],1)],1)],2):t._e()},staticRenderFns:[]}},twel:function(t,e,o){var a=o("Alxp")(o("/azh"),o("NbDi"),function(t){o("4kz6")},"data-v-722b2b5b",null);t.exports=a.exports}});