webpackJsonp([26],{"7+aE":function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,".dialog-image .el-dialog{background:inherit;-webkit-box-shadow:none;box-shadow:none}",""])},HuoK:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("aA9S"),n=a.n(i),o=a("0xDb"),l=a("ms7A");t.default={name:"feedbackTable",props:{type:{type:Number,default:0},formData:{type:Object,default:function(){return{feedbackType:"",startTime:"",endTime:"",keyword:""}}},dateTime:{type:Array,default:function(){return[]}}},filters:{formatTypeFilter:function(e){return{1:"建议",2:"BUG反馈",3:"投诉"}[e]}},data:function(){return{colModels:[{prop:"mobile",label:"手机号码",width:120},{prop:"realName",label:"姓名"},{prop:"gmtCreate",label:"时间",width:180},{prop:"feedbackType",label:"类型",width:100,type:"formatType"},{prop:"content",label:"内容"},{prop:"picUrl",label:"照片",width:0,type:"img"}],tableHeight:300,tableData:[],total:null,pageItems:{pageNo:1,pageSize:20},privateFormData:{},privateDateTime:[],multipleSelection:[],searchParams:{},pageSizeList:[10,20,30,50],showPicUrl:"",layer_showImage:!1}},created:function(){this.privateFormData=Object(o.d)(this.formData),this.privateDateTime=Object(o.d)(this.dateTime),this.getGridData(this.pageItems)},mounted:function(){var e=this;this.$nextTick(function(){var t=document.body.clientHeight-250;e.tableHeight=t>300?t:300,window.onresize=function(){return t=document.body.clientHeight-250,void(e.tableHeight=e.tableHeight=t>300?t:300)}})},computed:{tableStyle:function(){return{width:"100%",height:this.tableHeight+"px"}}},methods:{showImage:function(e){if(!e)return!1;this.showPicUrl=e,this.layer_showImage=!0},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.pageItems.pageSize=e,this.getGridData(this.pageItems)},handleCurrentChange:function(e){this.pageItems.pageNo=e,this.getGridData(this.pageItems)},getGridData:function(e){var t=this;this.listLoading=!0,this.searchParams=n()(Object(o.d)(e),Object(o.d)(this.privateFormData)),this.searchParams.sourceType=1*this.type+1,Object(l.l)(Object(o.a)(this.searchParams)).then(function(e){t.tableData=e.data.content,t.total=e.data.totalElements,t.listLoading=!1})},searchParam:function(){this.getGridData(this.pageItems)},handleDelete:function(e,t,a){var i=this,n=[],o="";if("multi"===a){if(0===this.multipleSelection.length)return this.$message.error("请选择需要删除的数据"),!1;this.multipleSelection.map(function(e){e.isDelete=1}),n=this.multipleSelection,o="已选择"+this.multipleSelection.length+"条数据"}else t.isDelete=1,n=[t],o="此操作将永久删除该数据";this.$confirm(o+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.saveData(n)}).catch(function(){})},saveData:function(e,t){var a=this,i=Object(o.d)(e);Object(l.s)(i).then(function(e){a.getGridData(a.pageItems),a.$notify({title:"成功",message:"操作成功",type:"success",duration:2e3})})}},watch:{formData:{handler:function(e){this.privateFormData=e,console.log(e)},deep:!0},dateTime:function(e){this.privateDateTime=e,console.log(e)}}}},"Oh5+":function(e,t,a){var i=a("7+aE");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("6a1651e4",i,!0)},o8jj:function(e,t,a){var i=a("Alxp")(a("HuoK"),a("t8QD"),function(e){a("Oh5+")},null,null);e.exports=i.exports},t8QD:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"clearfix"},[a("div",{staticClass:"model-table",staticStyle:{"margin-top":"0"},style:e.tableStyle},[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.tableData,"max-height":e.tableHeight,size:"small",fit:"",stripe:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",width:"60",align:"center"}}),e._v(" "),e._l(e.colModels,function(t,i){return a("el-table-column",{key:i,attrs:{label:t.label,width:t.width,fit:"","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(i){return["img"===t.type?a("span",[i.row[t.prop]?a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.row[t.prop],expression:"scope.row[item.prop]"}],staticClass:"image image-center",attrs:{width:"40",height:"40"},on:{click:function(a){e.showImage(i.row[t.prop])}}}):a("span")]):"formatType"===t.type?a("span",[e._v("\n            "+e._s(e._f("formatTypeFilter")(i.row[t.prop]))+"\n          ")]):a("span",[e._v("\n            "+e._s(i.row[t.prop])+"\n          ")])]}}])})}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button-group",[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])],1)]}}])})],2)],1),e._v(" "),a("div",{staticClass:"model-pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.pageItems.pageNo,"page-sizes":e.pageSizeList,"page-size":e.pageItems.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.pageItems,"pageNo",t)}}})],1),e._v(" "),a("div",{staticClass:"dialog-image"},[a("el-dialog",{staticStyle:{"text-align":"center"},attrs:{title:"",width:"100%","show-close":!1,visible:e.layer_showImage},on:{"update:visible":function(t){e.layer_showImage=t}},nativeOn:{click:function(t){e.layer_showImage=!1}}},[a("img",{staticClass:"image",attrs:{src:e.showPicUrl}})])],1)])},staticRenderFns:[]}}});