webpackJsonp([28],{TrwX:function(e,t,a){var i=a("YEE7");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("778d20f4",i,!0)},U9qS:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-container",[a("el-aside",{attrs:{width:"240px"}},[a("div",{staticClass:"model-search"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"10px"}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"left",attrs:{size:"small",type:"primary",icon:"el-icon-search"},nativeOn:{click:function(t){e.handleSearchParams(t)}}},[e._v("查询")]),e._v(" "),a("el-button",{staticClass:"left",attrs:{size:"small",icon:"el-icon-remove-outline"},nativeOn:{click:function(t){e.clearForm(t)}}},[e._v("清空")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"left",attrs:{size:"small",type:"primary",icon:"el-icon-upload"},nativeOn:{click:function(t){e.handleExport(t)}}},[e._v("导出")])],1),e._v(" "),a("el-date-picker",{staticStyle:{"margin-bottom":"10px",width:"100%"},attrs:{clearable:e.clearable,size:"small",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}}),e._v(" "),a("el-input",{staticStyle:{"margin-bottom":"10px"},style:e.textareaHeight,attrs:{type:"textarea",placeholder:"请输入手机号码或组织名称，多个请换行查询"},model:{value:e.textareaVal,callback:function(t){e.textareaVal=t},expression:"textareaVal"}})],1)]),e._v(" "),a("el-main",{staticStyle:{padding:"0","padding-left":"15px"}},[a("div",{staticClass:"model-table",staticStyle:{"margin-top":"0"},style:e.tableStyle},[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.tableData,"max-height":e.tableHeight,size:"small",fit:"",stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",width:"60",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",size:"small",inline:""}},e._l(e.expandCols,function(i,n){return a("el-form-item",{key:n,attrs:{label:i.label}},[a("span",[e._v(e._s(t.row[i.prop]))])])}))]}}])}),e._v(" "),e._l(e.colModels,function(t,i){return a("el-table-column",{key:i,attrs:{label:t.label,width:t.width,fit:"","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(i){return["formatAdmin"==t.type?a("span",[e._v("\n                "+e._s(e._f("formatAdminFilter")(i.row[t.prop]))+"\n              ")]):a("span",[e._v("\n                "+e._s(i.row[t.prop])+"\n              ")])]}}])})})],2)],1),e._v(" "),a("div",{staticClass:"model-pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.pageItems.pageNo,"page-sizes":e.pageSizeList,"page-size":e.pageItems.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.pageItems,"pageNo",t)}}})],1)])],1)],1)},staticRenderFns:[]}},YEE7:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".el-textarea textarea{height:100%}.table-expand{font-size:0}.table-expand .el-form-item__content,.table-expand .el-form-item__label{font-size:12px}.table-expand label{color:#99a9bf}.table-expand .el-form-item{margin-right:0;margin-bottom:0;width:33%}",""])},hAuG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("woOf"),n=a.n(i),o=a("cAgV"),l=a("0xDb"),r=a("QHcW");t.default={name:"dataReport",directives:{waves:o.a},data:function(){return{downloadLoading:!1,colModels:[{prop:"orgGmtCreateStr",label:"创建时间",width:180},{prop:"organizationName",label:"组织名称"},{prop:"displayName",label:"组织缩写名"},{prop:"orgTypeName",label:"组织类型"},{prop:"orgContactMobile",label:"手机号码",width:150},{prop:"orgLegalPersonName",label:"法人姓名"}],expandCols:[{prop:"estateCount",label:"公寓数量"},{prop:"houseCount",label:"分散式套数(非金融)"},{prop:"financehouseCount",label:"分散式套数(金融)"},{prop:"estateRoomCount",label:"公寓房间数"},{prop:"houseRoomCount",label:"分散式房间数(非金融)"},{prop:"financeRoomCount",label:"分散式房间数(金融)"}],tableHeight:300,listLoading:!1,tableData:[],total:null,pageItems:{pageNo:1,pageSize:20},pageSizeList:[10,20,30,50],clearable:!1,dateTime:[],formData:{orgNames:"",startDate:"",endDate:""},textareaVal:""}},created:function(){this.getGridData(this.pageItems)},mounted:function(){var e=this,t=document.body.clientHeight-152;this.tableHeight=t>300?t:300,window.onresize=function(){return t=document.body.clientHeight-152,void(e.tableHeight=e.tableHeight=t>300?t:300)}},computed:{tableStyle:function(){return{width:"100%",height:this.tableHeight+"px"}},textareaHeight:function(){return{height:this.tableHeight-40+"px"}}},methods:{handleSizeChange:function(e){this.pageItems.pageSize=e,this.getGridData(this.pageItems)},handleCurrentChange:function(e){this.pageItems.pageNo=e,this.getGridData(this.pageItems)},clearForm:function(){this.dateTime=[],this.textareaVal="",this.formData={},this.pageItems={pageNo:1,pageSize:20},this.getGridData(this.pageItems)},handleExport:function(){var e=this;this.downloadLoading=!0,this.searchParams=n()({pageNo:1,pageSize:999999},this.formData),Object(r.z)(Object(l.a)(this.searchParams)).then(function(t){t.data.list.map(function(e,t){e.index=1*t+1}),Promise.all([a.e(60),a.e(61)]).then(function(){(0,a("zWO4").export_json_to_excel)(["序号","创建日期","组织名称","组织缩写名","组织类型","手机号码","法人姓名","公寓数","公寓房间数","分散式套数（非金融）","分散式间数（非金融）","分散式套数（金融）","分散式间数 (金融）"],e.formatJson(["index","orgGmtCreateStr","organizationName","displayName","orgTypeName","orgContactMobile","orgLegalPersonName","estateCount","estateRoomCount","houseCount","houseRoomCount","financehouseCount","financeRoomCount"],t.data.list||[]),(new Date).getTime(),"组织房源信息表"),e.downloadLoading=!1}.bind(null,a)).catch(a.oe)})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})},handleSearchParams:function(){this.getGridData(this.pageItems)},getGridData:function(e){var t=this;this.listLoading=!0,this.searchParams=n()(Object(l.d)(e),this.formData),Object(r.z)(Object(l.a)(this.searchParams)).then(function(e){t.tableData=e.data.list,t.total=e.data.record,t.listLoading=!1})}},watch:{dateTime:function(e){e=e||[],this.formData.startDate=e[0]?Object(l.f)(e[0]):"",this.formData.endDate=e[1]?Object(l.f)(e[1]):""},textareaVal:function(e){""!=e&&(this.formData.orgNames=e.split(/[\n|\r\n|\r]/gi).join(","))}}}},sAAN:function(e,t,a){var i=a("VU/8")(a("hAuG"),a("U9qS"),function(e){a("TrwX")},null,null);e.exports=i.exports}});