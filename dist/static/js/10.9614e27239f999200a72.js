webpackJsonp([10,38],{"4lkU":function(e,t,r){var i=r("VU/8")(r("PIqh"),r("qctM"),function(e){r("iWtj")},"data-v-5083d41a",null);e.exports=i.exports},ODXr:function(e,t,r){var i=r("VU/8")(r("yZFM"),r("ULTJ"),function(e){r("akws")},"data-v-7ff96604",null);e.exports=i.exports},PIqh:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("woOf"),a=r.n(i),o=r("ODXr"),l=r.n(o),s=r("0xDb"),n=r("Ao5+"),c=r("TIfe");t.default={components:{relieveOrg:l.a},data:function(){return{tableHeight:300,formLabelWidth:"60px",orgKeyWord:"",recoverVisible:!1,pageItems:{pageNo:1,pageSize:20},recoverform:{remark:"",id:"",sessionId:Object(c.a)()},form:{remark:null,orgId:null,sessionId:Object(c.a)()},rulesRecover:{remark:[{required:!0,message:"请输入备注信息",trigger:"blur"}]},rules:{remark:[{required:!0,message:"请输入备注",trigger:"blur"}]},pageSizeList:[10,20,30,50],total:null,backList:[],dialogTableVisible:!1,innerVisible:!1,nowData:[],gridData:[]}},computed:{styleHeight:function(){return{width:"100%",height:this.tableHeight+"px"}}},filters:{filererType:function(e){return 1===e?"个人":"企业"}},mounted:function(){var e=this;this.searchParam();var t=document.body.clientHeight-190;this.tableHeight=t>300?t:300,window.onresize=function(){return t=document.body.clientHeight-190,void(e.tableHeight=e.tableHeight=t>300?t:300)}},methods:{relieveOrnFun:function(){this.$refs.relieveOrg.open()},recoverOrgan:function(e){this.recoverform.id=e.id,this.recoverVisible=!0},saveRecover:function(){var e=this;this.$refs.recoverform.validate(function(t){t&&Object(n.g)(e.recoverform).then(function(t){e.$message({message:"已回恢复合作",type:"succes"}),e.recoverVisible=!1,e.searchParam()})})},closeInner:function(){this.innerVisible=!1,Object(s.e)(this.form)},cancalRecover:function(){Object(s.e)(this.recoverform)},addFollowSubmit:function(){var e=this;this.form.orgId=this.nowData.orgId,this.$refs.orgForm.validate(function(t){t&&Object(n.m)(e.form).then(function(t){e.getremarkList(),e.innerVisible=!1,e.$message({message:"添加备注成功",type:"succes"})})})},addFllow:function(){this.innerVisible=!0},remarkOrgan:function(e){this.dialogTableVisible=!0,this.nowData=e,this.getremarkList()},getremarkList:function(){var e=this,t={orgId:this.nowData.orgId,sessionId:Object(c.a)()};Object(n.l)(t).then(function(t){e.gridData=t.data.orgRemarkList})},handleSizeChange:function(e){this.pageItems.pageSize=e,this.searchParam()},handleCurrentChange:function(e){this.pageItems.pageNo=e,this.searchParam()},clearForm:function(){this.orgKeyWord=null},searchParam:function(){var e=this,t={orgKeyWord:this.orgKeyWord,sessionId:Object(c.a)()};t=a()(t,this.pageItems),Object(n.i)(t).then(function(t){e.backList=t.data.result,e.total=t.data.total})}}}},QczP:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])},ULTJ:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"解除合作合作机构",visible:e.outerVisible},on:{"update:visible":function(t){e.outerVisible=t}}},[r("el-form",{ref:"searchForm",attrs:{model:e.searchForm,inline:!0,rules:e.searchF}},[r("el-form-item",{attrs:{label:"组织的主账号",prop:"mobile"}},[r("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.searchForm.mobile,callback:function(t){e.$set(e.searchForm,"mobile",t)},expression:"searchForm.mobile"}})],1)],1),e._v(" "),r("el-dialog",{attrs:{width:"40%",title:"解除合作合作机构",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[r("el-form",{ref:"relieve",attrs:{model:e.relieve,rules:e.relieveRule}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"机构名称"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.relieve.name,callback:function(t){e.$set(e.relieve,"name",t)},expression:"relieve.name"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"手机号码"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.relieve.mobile,callback:function(t){e.$set(e.relieve,"mobile",t)},expression:"relieve.mobile"}})],1)],1)],1),e._v(" "),r("div",{staticClass:"text"},[e._v("确定要此机构解除合作么")]),e._v(" "),r("div",{staticClass:"text"},[e._v("解除后，机构所有房源全部下架，无法给此机构录入房源，带看")]),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"remark",width:"100%"}},[r("el-input",{attrs:{maxlength:100,type:"textarea",rows:2,placeholder:"请输入原因（0-100字)"},model:{value:e.relieve.remark,callback:function(t){e.$set(e.relieve,"remark",t)},expression:"relieve.remark"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.innerVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.saveOrg}},[e._v("确 定")])],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.clear}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.goNext}},[e._v("下一步")])],1)],1)},staticRenderFns:[]}},akws:function(e,t,r){var i=r("QczP");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r("rjj0")("545671ee",i,!0)},iWtj:function(e,t,r){var i=r("xwv8");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r("rjj0")("2f9e5bb0",i,!0)},qctM:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"model-search clearfix"},[r("el-form",{attrs:{size:"small",inline:!0}},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{size:"small",placeholder:"房东／房东手机号码"},nativeOn:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchParam(t)}},model:{value:e.orgKeyWord,callback:function(t){e.orgKeyWord=t},expression:"orgKeyWord"}}),e._v(" "),r("el-button",{staticClass:"filter-item",attrs:{type:"primary",size:"small",icon:"el-icon-search"},nativeOn:{click:function(t){e.searchParam(t)}}},[e._v("查询")]),e._v(" "),r("el-button",{attrs:{plain:"",size:"small",icon:"el-icon-remove-outline"},nativeOn:{click:function(t){e.clearForm(t)}}},[e._v("清空")]),e._v(" "),r("el-button",{staticClass:"btn-right",attrs:{type:"primary",size:"small"},nativeOn:{click:function(t){e.relieveOrnFun(t)}}},[e._v("机构解除合作")])],1)],1),e._v(" "),r("div",{staticClass:"table-box",style:e.styleHeight},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.backList,"max-height":e.tableHeight}},[r("el-table-column",{attrs:{prop:"gmtRelieveStr",label:"解除合作时间",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:"机构名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"mobile",label:"手机号码"}}),e._v(" "),r("el-table-column",{attrs:{label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(e._f("filererType")(t.row.type))+"\n         ")]}}])}),e._v(" "),r("el-table-column",{attrs:{width:"220",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(r){r.preventDefault(),e.remarkOrgan(t.row)}}},[e._v("\n              备注信息\n            ")]),e._v(" "),r("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(r){r.preventDefault(),e.recoverOrgan(t.row)}}},[e._v("\n               恢复合作\n            ")])]}}])})],1)],1),e._v(" "),r("div",{staticClass:"model-pagination"},[r("el-pagination",{attrs:{background:"","current-page":e.pageItems.pageNo,"page-sizes":e.pageSizeList,"page-size":e.pageItems.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.pageItems,"pageNo",t)}}})],1),e._v(" "),r("el-dialog",{attrs:{title:"备注信息",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[r("el-row",[r("el-button",{attrs:{type:"primary"},on:{click:e.addFllow}},[e._v("新增备注")])],1),e._v(" "),r("el-dialog",{attrs:{width:"30%",title:"新增备注信息",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[r("el-form",{ref:"orgForm",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"备注","label-width":e.formLabelWidth,prop:"remark"}},[r("el-input",{attrs:{maxlength:100,type:"textarea",rows:2,placeholder:"请输入备注（0-100字)"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.addFollowSubmit}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:e.closeInner}},[e._v("关闭")])],1)],1),e._v(" "),r("div",{staticClass:"all-text"},[e.gridData.length?r("div",{staticClass:"table-container"},e._l(e.gridData,function(t){return r("div",{key:t.id,staticClass:"box"},[r("div",{staticClass:"name-box"},[e._v(e._s(t.gmtCreateStr)+" "+e._s(t.userName))]),e._v(" "),r("div",{staticClass:"name-box"},[e._v(e._s(t.remark))])])})):r("div",{staticClass:"table-container"},[r("div",{staticClass:"box"},[r("div",{staticClass:"text-empty"},[e._v("暂无数据")])])])]),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogTableVisible=!1}}},[e._v("关闭")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"恢复合作",visible:e.recoverVisible},on:{"update:visible":function(t){e.recoverVisible=t}}},[r("div",{staticClass:"text"},[e._v("确定要与此机构重新合作么")]),e._v(" "),r("div",{staticClass:"text"},[e._v("恢复后请重新调整服务费率")]),e._v(" "),r("el-form",{ref:"recoverform",attrs:{model:e.recoverform,rules:e.rulesRecover}},[r("el-form-item",{attrs:{prop:"remark"}},[r("el-input",{attrs:{maxlength:100,type:"textarea",rows:2,placeholder:"请输入备注（0-100字)"},model:{value:e.recoverform.remark,callback:function(t){e.$set(e.recoverform,"remark",t)},expression:"recoverform.remark"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.cancalRecover}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.saveRecover}},[e._v("确 定")])],1)],1),e._v(" "),r("relieve-Org",{ref:"relieveOrg",attrs:{search:e.searchParam}})],1)},staticRenderFns:[]}},xwv8:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,".container[data-v-5083d41a]{padding:20px}.table-box[data-v-5083d41a]{margin-top:20px;border:1px solid #e5e5e5}.btn-right[data-v-5083d41a]{float:right}.box[data-v-5083d41a]{min-height:68px;padding-top:10px;padding-bottom:10px;border-bottom:1px solid #e0e0e0}.text-empty[data-v-5083d41a]{line-height:60px;text-align:center;border-top:1px solid #e0e0e0}",""])},yZFM:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("E4LH"),a=r("0xDb"),o=r("Ao5+"),l=r("TIfe");t.default={data:function(){return{outerVisible:!1,innerVisible:!1,searchF:{mobile:{required:!0,trigger:"blur",validator:function(e,t,r){Object(i.b)(t)?r():r(new Error("请输入正确的手机号"))}}},relieveRule:{remark:[{required:!0,message:"请输入原因",trigger:"blur"}]},searchForm:{mobile:"",sessionId:Object(l.a)()},relieve:{remark:"",name:"",mobile:"",id:"",sessionId:Object(l.a)()}}},methods:{saveOrg:function(){var e=this;this.$refs.relieve.validate(function(t){if(t){var r={id:e.relieve.id,remark:e.relieve.remark,sessionId:Object(l.a)()};Object(o.g)(r).then(function(t){Object(a.e)(e.relieve),e.$emit("search"),e.innerVisible=!1,e.outerVisible=!1,e.$message({message:"已解除",type:"succes"})})}})},clear:function(){Object(a.e)(this.searchForm),this.outerVisible=!1},goNext:function(){this.getManage()},open:function(){this.outerVisible=!0},getManage:function(){var e=this;this.$refs.searchForm.validate(function(t){t&&Object(o.k)(e.searchForm).then(function(t){"0"===t.code?(e.innerVisible=!0,e.relieve.name=t.data.name,e.relieve.mobile=t.data.mobile,e.relieve.id=t.data.id):e.$message({message:t.message,type:"error"})})})}}}}});