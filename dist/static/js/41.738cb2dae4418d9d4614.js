webpackJsonp([41],{Iu76:function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,".table-container{width:100%;margin-top:20px}.box{min-height:68px;padding-top:10px;padding-bottom:10px;border-bottom:1px solid #e0e0e0}.text-empty{line-height:60px;text-align:center;border-top:1px solid #e0e0e0}",""])},JHuP:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{attrs:{title:"催租跟进",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[s("el-row",[s("el-button",{attrs:{type:"primary"},on:{click:e.addFllow}},[e._v("新增催租结果")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.rentMessage}},[e._v("短信催租")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.managerMessage}},[e._v("管家提醒")])],1),e._v(" "),s("el-dialog",{attrs:{width:"30%",title:"新增催租结果",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[s("el-form",{attrs:{model:e.form}},[s("el-form-item",{attrs:{label:"催租结果","label-width":e.formLabelWidth}},[s("el-select",{attrs:{placeholder:"请选择催租结果"},model:{value:e.form.resultType,callback:function(t){e.$set(e.form,"resultType",t)},expression:"form.resultType"}},e._l(e.resultTypeList,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),s("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.filterType(e.form.resultType),expression:"filterType(form.resultType)"}],attrs:{label:"备注","label-width":e.formLabelWidth}},[s("el-input",{attrs:{maxlength:100,type:"textarea",rows:2,placeholder:"请输入备注（0-100字）"},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:e.addFollowSubmit}},[e._v("确 定")]),e._v(" "),s("el-button",{on:{click:e.closeInner}},[e._v("关闭")])],1)],1),e._v(" "),s("el-dialog",{attrs:{width:"30%",title:"提醒模版",visible:e.innerWarn,"append-to-body":""},on:{"update:visible":function(t){e.innerWarn=t}}},[s("el-form",[s("el-form-item",{attrs:{label:"提醒模版","label-width":e.formLabelWidth}},[s("el-select",{attrs:{placeholder:"请选择提醒模版"},model:{value:e.messageType,callback:function(t){e.messageType=t},expression:"messageType"}},e._l(e.messageTypeList,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:e.managerMessageSubmit}},[e._v("确 定")]),e._v(" "),s("el-button",{on:{click:function(t){e.innerWarn=!1}}},[e._v("关闭")])],1)],1),e._v(" "),s("div",{staticClass:"all-text"},[e.gridData.length?s("div",{staticClass:"table-container"},e._l(e.gridData,function(t){return s("div",{key:t.id,staticClass:"box"},[s("div",{staticClass:"name-box"},[e._v(e._s(t.gmtCreate)+" "+e._s(e._f("filterCreat")(t.createStatus))+"-"+e._s(t.createName))]),e._v(" "),s("div",{staticClass:"name-box"},[e._v(e._s(t.content))])])})):s("div",{staticClass:"table-container"},[s("div",{staticClass:"box"},[s("div",{staticClass:"text-empty"},[e._v("暂无数据")])])])]),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogTableVisible=!1}}},[e._v("关闭")])],1)],1)},staticRenderFns:[]}},JR8P:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s("woOf"),i=s.n(l),a=s("bOdI"),o=s.n(a),n=s("Ao5+"),r=s("0xDb");t.default={data:function(){var e;return e={status:null,gridData:[],dialogTableVisible:!1,innerVisible:!1,innerWarn:!1,followId:{id:null,billNo:null},pageItems:{pageNo:1,pageSize:20},isOver:null,resultTypeList:[{value:1,label:"已退租"},{value:2,label:"未缴纳"},{value:3,label:"待确认真实性"},{value:4,label:"未接听"}],messageTypeList:[],messageType:null,messageTypes:[{value:1,label:"逾期账单催租提醒"},{value:2,label:"租客账单交租提醒"},{value:3,label:"租客已退房（账单已逾期）信息确认"},{value:4,label:"租客已退房信息确认"},{value:5,label:"线下交租确认信息"}],messageTypeIs:[{value:2,label:"租客账单交租提醒"},{value:4,label:"租客已退房信息确认"},{value:5,label:"线下交租确认信息"}],messageTypeOver:[{value:1,label:"逾期账单催租提醒"},{value:3,label:"租客已退房（账单已逾期）信息确认"},{value:5,label:"线下交租确认信息"}],form:{resultType:null,content:null}},o()(e,"messageType",null),o()(e,"formLabelWidth","120px"),e},mounted:function(){},beforeDestroy:function(){document.querySelectorAll("body>.el-dialog__wrapper").forEach(function(e){e.style.display="none"})},filters:{filterCreat:function(e){return["运营","飞虎队"][e-1]}},methods:{closeInner:function(){this.innerVisible=!1,Object(r.e)(this.form)},filterType:function(e){if(3===e)return!0},textStatus:function(){return console.log(this.status),3!=this.status||(this.$message({message:"账单已撤销，无法继续跟进.",type:"error"}),!1)},rentMessage:function(){var e=this;Object(n.n)(this.followId).then(function(t){0==t.code&&(e.getfollowList(),e.$message({message:t.message,type:"success"}))})},getfollowList:function(){var e=this,t=i()(this.pageItems,this.followId);Object(n.b)(t).then(function(t){e.gridData=t.data.content})},addFllow:function(){this.textStatus()&&(this.innerVisible=!0)},addFollowSubmit:function(){if(!this.form.resultType)return this.$message({message:"请选择催租结果",type:"success"}),!1;3!=this.form.resultType&&null!=this.form.resultType&&""!=this.form.resultType?(this.form.content=this.resultTypeList[this.form.resultType-1].label,this.addfun()):""===this.form.content||null===this.form.content?this.$message({message:"请填写催租结果的备注",type:"success"}):this.addfun()},addfun:function(){var e=this,t=i()(this.followId,this.form);Object(n.a)(t).then(function(t){e.innerVisible=!1,e.getfollowList(),e.$emit("searchStart"),Object(r.e)(e.form)})},managerMessageSubmit:function(){this.messageType?this.messageSubmit():this.$message.error("请选择提醒模版")},messageSubmit:function(){var e=this,t={isOver:this.isOver,messageType:this.messageType},s=i()(t,this.followId);Object(n.c)(s).then(function(t){0==t.code&&(e.getfollowList(),e.$message({message:t.message,type:"success"}),e.innerWarn=!1)})},managerMessage:function(){this.textStatus()&&(this.innerWarn=!0,1==this.isOver?this.messageTypeList=this.messageTypeOver:0==this.isOver?this.messageTypeList=this.messageTypeIs:this.messageTypeList=messageTypes)},open:function(e,t,s,l,i){this.dialogTableVisible=!0,this.followId.id=t,this.followId.billNo=s,this.isOver=l,this.status=i,this.getfollowList()}}}},Zlyl:function(e,t,s){var l=s("VU/8")(s("JR8P"),s("JHuP"),function(e){s("ffVH")},null,null);e.exports=l.exports},ffVH:function(e,t,s){var l=s("Iu76");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);s("rjj0")("5b8f7ba2",l,!0)}});