(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d86ec2a"],{"120a":function(t,e,s){"use strict";var a=s("4faf"),n=s.n(a);n.a},"4faf":function(t,e,s){},"55bf":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"unlock-apply"},[t._m(0),s("div",{staticClass:"unlock-apply-list"},[s("div",{staticClass:"unlock-apply-list-select"},t._l(t.SelectOption,(function(e,a){return s("span",{key:a,class:e.isSelect?"active":"",on:{click:function(s){return t.HandleSelect(e)}}},[t._v(t._s(e.SelectName))])})),0),s("div",{staticClass:"unlock-apply-list-search"},[s("div",{staticClass:"unlock-apply-list-search-form"},[s("el-form",{ref:"form"},[s("el-form-item",[s("span",[t._v("债事人:")]),s("el-input")],1),s("el-form-item",[s("span",[t._v("录入编号:")]),s("el-input")],1)],1)],1),s("div",{staticClass:"unlock-apply-list-search-button"},[t._v("搜索")])]),s("div",{staticClass:"unlock-apply-list-content"},[[t._m(1),s("div",{staticClass:"unlock-apply-list-content-tab"},t._l(t.UnlockMsg,(function(e,a){return s("div",{key:a,staticClass:"unlock-apply-list-content-tab-item"},[s("span",[t._v(t._s(a+1))]),s("span",[t._v(t._s(e.reportId))]),s("span",[t._v(t._s(e.reportNo))]),s("span",[t._v(t._s(e.debtId))]),s("span",[t._v(t._s(e.debtNo))]),s("span",{class:["2"===e.status||"6"===e.status||"9"===e.status?"pass":"1"===e.status||"4"===e.status||"7"===e.status?"unpass":"hassubmit"]},[t._v(t._s("0"===e.status?"调查报告未审核":"1"===e.status?"调查报告审核未通过":"2"===e.status?"调查报告审批通过,债权信息未审核":"3"===e.status?"置换信息审核未通过":"4"===e.status||"5"===e.status?"置换信息审核通过":"7"===e.status?"财务未审核":"8"===e.status?"财务审核未通过":"财务审核通过"))]),s("span",[t._v(t._s(e.personName))]),s("span",[s("button",{directives:[{name:"show",rawName:"v-show",value:"6"===e.status,expression:"item.status === '6'"}],on:{click:function(s){return t.GoUnlockPayment(a,e)}}},[t._v("缴费")]),s("button",{directives:[{name:"show",rawName:"v-show",value:"0"===e.status,expression:"item.status === '0'"}],on:{click:function(s){return t.CheckData(a,e)}}},[t._v("调查报告审批")]),s("button",{directives:[{name:"show",rawName:"v-show",value:"4"===e.status,expression:"item.status === '4'"}],on:{click:function(s){return t.CheckUnlockData(a,e)}}},[t._v("债权信息审核")])])])})),0)]],2)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"unlock-apply-title"},[s("span",{staticClass:"unlock-apply-title-go1"},[t._v("我的审批")]),s("span",{staticClass:"unlock-apply-title-separator"},[t._v("/")]),s("span",{staticClass:"unlock-apply-title-go2"},[t._v("债权处理")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"unlock-apply-list-content-title"},[s("span",[t._v("序号")]),s("span",[t._v("录入号")]),s("span",[t._v("录入编号")]),s("span",[t._v("服务协议ID")]),s("span",[t._v("债权处理编号")]),s("span",[t._v("审核状态")]),s("span",[t._v("债事人")]),s("span",[t._v("操作")])])}],c=(s("4160"),s("159b"),s("96cf"),s("1da1")),i={data:function(){return{SelectOption:[{SelectName:"全部",isSelect:!0},{SelectName:"待审核",isSelect:!1},{SelectName:"审核通过",isSelect:!1},{SelectName:"审核驳回",isSelect:!1}],UnlockMsg:[],isNormal:!1,pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(t){t.$emit("pick",new Date)}},{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}},{text:"一周前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",e)}}]},UnlockSearchSrc:{pageNum:"1",pageSize:"10",debtNo:"",debtId:"",companyType:window.sessionStorage.getItem("companyType"),comId:window.sessionStorage.getItem("companyId")}}},methods:{HandleSelect:function(t){this.SelectOption.forEach((function(t){t.isSelect=!1})),t.isSelect=!0},InitUnlockApply:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var s,a,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(a in s=new FormData,t.UnlockSearchSrc)s.append(a,t.UnlockSearchSrc[a]);return e.next=4,t.$http({method:"post",url:"/api/api/pubDebtController/selectDebtListShow",data:s,headers:{"Content-Type":"multipart/form-data"}});case 4:n=e.sent,c=n.data,t.UnlockMsg=c.data.list,console.log(t.UnlockMsg);case 8:case"end":return e.stop()}}),e)})))()},CheckData:function(t,e){this.$router.push({path:"/ExamineReportFormApprove",query:{debtId:e.debtId,reportId:e.reportId}})},CheckUnlockData:function(t,e){this.$router.push({path:"/UnlockApplyApprove",query:{debtId:e.debtId,reportId:e.reportId}})},GoUnlockPayment:function(t,e){var s={debtId:e.debtId,reportId:e.reportId,payId:e.payId};this.$router.push({path:"/UnlockPayment",query:s})}},created:function(){this.InitUnlockApply()}},o=i,l=(s("120a"),s("2877")),r=Object(l["a"])(o,a,n,!1,null,"52c4b2d8",null);e["default"]=r.exports}}]);