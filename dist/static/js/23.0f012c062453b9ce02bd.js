webpackJsonp([23],{"/+Ma":function(t,e,i){var n=i("2dT3");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("8bSs")("28e3fb80",n,!0)},"2dT3":function(t,e,i){(t.exports=i("BkJT")(!1)).push([t.i,".pswp{z-index:9999999}.model-table{margin-bottom:0}",""])},nyma:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("cAgV"),o=i("U4Ig"),r=i.n(o),l=(i("0xDb"),i("tDxQ"));e.default={name:"auditFhd",directives:{waves:n.a},components:{GridUnit:r.a},data:function(){return{formOptions:{status:"",keyword:"",cityId:""},cityList:[],colModels:[{prop:"title",label:"搜索词TOP"},{prop:"title",label:"搜索次数",sortable:!0,align:"right"},{prop:"title",label:"搜索结果数",sortable:!0,align:"right"},{label:"操作",slotName:"handle",width:150,fixed:"right",align:"center"},{prop:"title",label:"操作时间",width:150,fixed:"right",filter:"parseTime"}],tableHeight:300,url:l.c.defaultOptions.requestUrl,method:l.c.defaultOptions.method,rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],picList:[{required:!0,message:"请上传图片",trigger:"change"}]},temp:{},actionBaseUrl:"https://api.mdguanjia.com/bop/",layer_showInfo:!1}},mounted:function(){var t=this;this.$nextTick(function(){var e=t.$refs.refGridUnit.$el.offsetTop||140,i=document.body.clientHeight-e-5-20;t.tableHeight=i>300?i:300,window.onresize=function(){return i=document.body.clientHeight-e-5-20,void(t.tableHeight=t.tableHeight=i>300?i:300)}})},computed:{tableStyle:function(){return{width:"100%",height:this.tableHeight+"px"}}},methods:{searchParam:function(t){"clear"===t&&(this.formOptions={}),this.$refs.refGridUnit.searchHandler()},handleAdd:function(){this.layer_showInfo=!0},handleSetting:function(t){},saveData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&(t.temp.iconId?l.c.edit:l.c.add)({iconId:t.temp.iconId,title:t.temp.title,picUrl:t.temp.picList.length>0?t.temp.picList[0].url:""}).then(function(e){t.searchParam(),t.layer_showInfo=!1,t.$notify({title:"成功",message:"操作成功",type:"success",duration:2e3})})})},dialogClose:function(){this.temp={},this.$refs.dataForm.resetFields(),this.layer_showInfo=!1},pictureUpload:function(t){var e=t.size/1024/1024<=.5;return-1==["image/jpeg","image/jpg","image/png"].indexOf(t.type)?(this.$message.error("请上传jpg/png的图片"),!1):e?void 0:(this.$message.error("请上传500Kb大小以内的图片"),!1)},pictureRemove:function(t,e){console.log("remove"),this.temp.picList=[]},picturePreview:function(t){var e=this;if(!this.temp.picList||0==this.temp.picList.length)return this.$message.error("图片预览失败"),!1;var i={src:this.temp.picList[0].url},n=new Image;n.src=this.temp.picList[0].url,n.onload=function(){i.w=n.width||800,i.h=n.height||600,e.$preview.open(0,[i])}},pictureSuccess:function(t,e,i){console.log("success"),i=t.data.map(function(t){return{url:t,name:"查看图片"}}),this.$set(this.temp,"picList",i)},pictureError:function(t,e){null},resetFile:function(t){null}}}},r6Ud:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-form",{attrs:{inline:!0,model:t.formOptions,size:"small"}},[i("el-form-item",[i("el-select",{attrs:{filterable:"",clearable:"",placeholder:"城市"},model:{value:t.formOptions.cityId,callback:function(e){t.$set(t.formOptions,"cityId",e)},expression:"formOptions.cityId"}},t._l(t.cityList,function(t){return i("el-option",{key:t.cityId,attrs:{label:t.cityName,value:t.cityId}})}))],1),t._v(" "),i("el-form-item",[i("el-select",{attrs:{filterable:"",clearable:"",placeholder:"搜索词状态"},model:{value:t.formOptions.status,callback:function(e){t.$set(t.formOptions,"status",e)},expression:"formOptions.status"}},[i("el-option",{attrs:{label:"未推荐",value:"1"}}),t._v(" "),i("el-option",{attrs:{label:"已推荐",value:"2"}})],1)],1),t._v(" "),i("el-form-item",[i("el-input",{attrs:{clearable:"",placeholder:"搜索词"},model:{value:t.formOptions.keyword,callback:function(e){t.$set(t.formOptions,"keyword",e)},expression:"formOptions.keyword"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.searchParam}},[t._v("查询")]),t._v(" "),i("el-button",{attrs:{icon:"el-icon-remove-outline"},on:{click:function(e){t.searchParam("clear")}}},[t._v("清空")]),t._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("新增搜索词")])],1)],1),t._v(" "),i("GridUnit",{ref:"refGridUnit",attrs:{columns:t.colModels,showPagination:!1,url:t.url,listField:"data",dataMethod:t.method,height:t.tableHeight},scopedSlots:t._u([{key:"handle",fn:function(e){return[2===e.row.status?i("el-button",{attrs:{type:"primary",icon:"el-icon-setting",size:"small"},on:{click:function(i){t.handleSetting(e.row)}}},[t._v("\n        设为推荐词\n      ")]):i("el-button",{attrs:{type:"danger",icon:"el-icon-warning",size:"small"},on:{click:function(i){t.handleSetting(e.row)}}},[t._v("\n        取消设置\n      ")])]}}])})],1)},staticRenderFns:[]}},uDmn:function(t,e,i){var n=i("Alxp")(i("nyma"),i("r6Ud"),function(t){i("/+Ma")},null,null);t.exports=n.exports}});