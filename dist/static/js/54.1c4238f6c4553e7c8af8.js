webpackJsonp([54],{"8hW5":function(t,e,a){var s=a("Alxp")(a("Qt7a"),a("YFVP"),function(t){a("YIgZ")},"data-v-7d559cc8",null);t.exports=s.exports},Qt7a:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("H1GV"),l=a.n(s),i=a("0xDb"),n=a("IcnI"),r=[{value:"01000000",name:"邮储银行"},{value:"01020000",name:"工商银行"},{value:"01030000",name:"农业银行"},{value:"01040000",name:"中国银行"},{value:"01050000",name:"建设银行"},{value:"03010000",name:"交通银行"},{value:"03020000",name:"中信银行"},{value:"03030000",name:"光大银行"},{value:"03040000",name:"华夏银行"},{value:"03050000",name:"民生银行"},{value:"03060000",name:"广发银行"},{value:"03070000",name:"平安银行"},{value:"03080000",name:"招商银行"},{value:"03090000",name:"兴业银行"},{value:"03100000",name:"浦发银行"},{value:"03160000",name:"浙商银行"},{value:"04012900",name:"上海银行"},{value:"04031000",name:"北京银行"},{value:"04083320",name:"宁波银行"},{value:"04233310",name:"杭州银行"},{value:"04256020",name:"东莞银行"},{value:"04375850",name:"珠海华润"},{value:"04791920",name:"包商银行"},{value:"05083000",name:"江苏银行"},{value:"64135810",name:"广州银行"},{value:"64895910",name:"广东南粤"}];e.default={name:"fhdBusiness",props:{tempData:{type:Object,default:function(){return{}}}},components:{Preview:l.a},computed:{textNumber:function(){return 30-this.fhdBusinessData.reason.length<0?0:30-this.fhdBusinessData.reason.length}},filters:{filterBankCode:function(t){if(!t)return"";var e=r.filter(function(e){return e.value===t});return e.length>0?e[0].name:""},picListFilter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t?t.map(function(t){return{src:t}}):[]},filterNum:function(t){return t?t.replace(/\s/g,"").replace(/\D/g,"").replace(/(\d{4})(?=\d)/g,"$1 "):""},sexFilter:function(t){return["先生","女士"][t-1]||"不详"},statusFilter:function(t){return{0:"info",1:"success",2:"danger"}[t]||"info"},statusStrFilter:function(t){return["待审核","审核通过","审核不通过"][t]||"待审核"}},data:function(){return{temp:Object(i.d)(this.tempData),fhdBusinessData:{status:"",reason:""}}},created:function(){this.fhdBusinessData={status:"",reason:""}},watch:{tempData:{handler:function(t){this.temp=t,this.fhdBusinessData={status:"",reason:""}},deep:!0},fhdBusinessData:{handler:function(t){t.reason=1===t.status?"":t.reason,0===this.temp.status&&n.a.dispatch("UpdateFhdData",{data:t,rowData:this.temp})},deep:!0}}}},YFVP:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{attrs:{size:"small",model:t.temp,"label-position":"left","label-width":"70px"}},[a("div",{staticClass:"clearfix"},[a("el-col",{attrs:{span:13}},[a("el-form-item",{attrs:{label:"企业名称"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.temp.companyName,callback:function(e){t.$set(t.temp,"companyName",e)},expression:"temp.companyName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:1}},[t._v("  ")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"企业法人"}},[a("el-input",{attrs:{value:t.temp.legalPerson,disabled:!0}})],1)],1)],1),t._v(" "),a("div",{staticClass:"clearfix"},[a("el-col",{attrs:{span:13}},[a("el-form-item",{attrs:{label:"社会统一信用代码","label-width":"130px"}},[a("el-input",{attrs:{value:t.temp.unifiedSocialCreditCode,disabled:!0}})],1)],1),t._v(" "),a("el-col",{attrs:{span:1}},[t._v("  ")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"出房费率"}},[a("el-input",{attrs:{value:t.temp.splitFee+"%",disabled:!0}})],1)],1)],1),t._v(" "),a("div",{staticClass:"clearfix"},[a("el-col",{attrs:{span:13}},[a("el-form-item",{attrs:{label:"企业联系人","label-width":"90px"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}},[a("template",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(t._f("sexFilter")(t.temp.sex)))])],2)],1)],1),t._v(" "),a("el-col",{attrs:{span:1}},[t._v("  ")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"手机号码"}},[a("el-input",{attrs:{value:t._f("filterNum")(t.temp.mobile),disabled:!0}})],1)],1)],1),t._v(" "),a("div",{staticClass:"clearfix"},[a("el-col",{attrs:{span:13}},[a("el-form-item",{attrs:{label:"联系人身份证","label-width":"100px"}},[a("el-input",{attrs:{value:t.temp.idNum,disabled:!0}})],1)],1),t._v(" "),a("el-col",{attrs:{span:1}},[t._v("  ")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"房源体量"}},[a("el-input",{attrs:{value:t.temp.volumn,disabled:!0}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"银行开户名","label-width":"90px"}},[a("el-input",{attrs:{value:t.temp.accountName,disabled:!0}})],1),t._v(" "),1===t.temp.bankCardType?a("div",{staticClass:"clearfix"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"开户人身份证","label-width":"100px"}},[a("el-input",{attrs:{value:t.temp.accountIdNum,disabled:!0}})],1)],1),t._v(" "),a("el-col",{attrs:{span:1}},[t._v("  ")]),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"银行卡号"}},[a("el-input",{attrs:{value:t._f("filterNum")(t.temp.bankCardNum),disabled:!0}})],1)],1)],1):a("div",{staticClass:"clearfix"},[a("el-col",{attrs:{span:13}},[a("el-form-item",{attrs:{label:"银行卡号"}},[a("el-input",{attrs:{value:t._f("filterNum")(t.temp.bankCardNum),disabled:!0}})],1)],1),t._v(" "),a("el-col",{attrs:{span:1}},[t._v("  ")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"开户银行","label-width":"70px"}},[a("el-input",{attrs:{value:t._f("filterBankCode")(t.temp.accountBank),disabled:!0}})],1)],1)],1),t._v(" "),a("div",{staticClass:"clearfix"},[a("el-form-item",{attrs:{label:"审核结果"}},[t.temp.status&&0!==t.temp.status?a("el-tag",{attrs:{type:t._f("statusFilter")(t.temp.status)}},[t._v("\n        "+t._s(t._f("statusStrFilter")(t.temp.status))+"\n      ")]):a("el-radio-group",{model:{value:t.fhdBusinessData.status,callback:function(e){t.$set(t.fhdBusinessData,"status",e)},expression:"fhdBusinessData.status"}},[a("el-radio",{attrs:{label:1}},[t._v("通过")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("不通过")])],1),t._v(" "),2===t.temp.status?a("el-input",{attrs:{type:"textarea",rows:2,disabled:!0},model:{value:t.temp.reason,callback:function(e){t.$set(t.temp,"reason",e)},expression:"temp.reason"}}):t._e(),t._v(" "),0===t.temp.status&&2===t.fhdBusinessData.status?a("div",{staticStyle:{position:"relative"}},[a("el-input",{staticStyle:{position:"relative"},attrs:{type:"textarea",rows:2,placeholder:"请输入审核不通过原因",maxlength:30},model:{value:t.fhdBusinessData.reason,callback:function(e){t.$set(t.fhdBusinessData,"reason",e)},expression:"fhdBusinessData.reason"}}),t._v(" "),a("span",{staticClass:"textNumber"},[t._v("还可以输入"+t._s(t.textNumber)+"字符")])],1):t._e()],1)],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"平台代理收租服务"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":t._f("picListFilter")(t.temp.proxyImage),"delete-icon":"",disabled:""}})],1)]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"房源发布和租客引流服务"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":t._f("picListFilter")(t.temp.attractionFlowImage),"delete-icon":"",disabled:""}})],1)]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"企业营业执照"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":t._f("picListFilter")(t.temp.businessLicenseImage),"delete-icon":"",disabled:""}})],1)]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"身份证照片"}},[a("div",{staticClass:"previewItems"},[a("Preview",{attrs:{"pic-list":t._f("picListFilter")(t.temp.idCardImage),"delete-icon":"",disabled:""}})],1)])],1)},staticRenderFns:[]}},YIgZ:function(t,e,a){var s=a("wARl");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("8bSs")("41c214dc",s,!0)},wARl:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,".el-tag[data-v-7d559cc8]{margin:0 5px 5px 0}.textNumber[data-v-7d559cc8]{position:absolute;bottom:5px;right:10px;color:#666;font-size:12px;line-height:1.2}",""])}});