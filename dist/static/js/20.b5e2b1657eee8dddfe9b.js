webpackJsonp([20],{"8RSs":function(t,n){},ARoL:function(t,n,e){var s=e("Alxp")(e("WM23"),e("mNdg"),function(t){e("8RSs")},null,null);t.exports=s.exports},WM23:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("4YfN"),i=e.n(s),r=e("9rMa"),a=e("nTyu"),o=e.n(a);n.default={name:"dashboard",filters:{rolesFilter:function(t){return{admin:"【超级管理员】",global:"【普通用户】",service:"【服务用户】"}[t]||"【普通用户】"}},data:function(){return{bannerPic:o.a}},computed:i()({},Object(r.b)(["name","roles"]))}},mNdg:function(t,n){t.exports={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"dashboard-container"},[n("p",{staticStyle:{"margin-top":"0"}},[this._v(this._s(this._f("rolesFilter")(this.roles))+this._s(this.name)+"，欢迎进入复恒科技运营平台")]),this._v(" "),n("div",{staticClass:"img-banner"})])},staticRenderFns:[]}},nTyu:function(t,n,e){t.exports=e.p+"static/img/banner1.dbf64ba.jpg"}});