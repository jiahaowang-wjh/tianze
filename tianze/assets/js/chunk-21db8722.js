(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21db8722"],{1049:function(t,a,e){"use strict";var s=e("defb"),l=e.n(s);l.a},a434:function(t,a,e){"use strict";var s=e("23e7"),l=e("23cb"),r=e("a691"),n=e("50c4"),o=e("7b0b"),i=e("65f0"),p=e("8418"),c=e("1dde"),d=e("ae40"),u=c("splice"),b=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,v=Math.min,h=9007199254740991,f="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!u||!b},{splice:function(t,a){var e,s,c,d,u,b,_=o(this),k=n(_.length),g=l(t,k),y=arguments.length;if(0===y?e=s=0:1===y?(e=0,s=k-g):(e=y-2,s=v(m(r(a),0),k-g)),k+e-s>h)throw TypeError(f);for(c=i(_,s),d=0;d<s;d++)u=g+d,u in _&&p(c,d,_[u]);if(c.length=s,e<s){for(d=g;d<k-s;d++)u=d+s,b=d+e,u in _?_[b]=_[u]:delete _[b];for(d=k;d>k-s+e;d--)delete _[d-1]}else if(e>s)for(d=k-s;d>g;d--)u=d+s-1,b=d+e-1,u in _?_[b]=_[u]:delete _[b];for(d=0;d<e;d++)_[d+g]=arguments[d+2];return _.length=k-s+e,c}})},aaf6:function(t,a,e){t.exports=e.p+"assets/img/delete.png"},defb:function(t,a,e){},f2a0:function(t,a,e){t.exports=e.p+"assets/img/company.png"},f32d:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"unlock-apply"},[s("div",{staticClass:"unlock-apply-title"},[s("span",{staticClass:"unlock-apply-title-go1"},[t._v("我的债行")]),s("span",{staticClass:"unlock-apply-title-separator"},[t._v("/")]),s("span",{staticClass:"unlock-apply-title-go2"},[t._v(t._s(t.IsApproveStatus?"债权处理审批":"债权处理编辑"))])]),s("div",{staticClass:"unlock-apply-container"},[s("div",{staticClass:"unlock-apply-container-form"},[s("el-collapse",[s("el-collapse-item",{attrs:{title:"关系绑定",name:"1"}},[s("div",{staticClass:"unlock-apply-container-form-new"},[s("button",[t._v("新增")])]),s("div",{staticClass:"unlock-apply-container-form-table-1-title"},[s("span",[t._v("序号")]),s("span",[t._v("报备号")]),s("span",[t._v("民事调解协议号")]),s("span",[t._v("服务协议ID")]),s("span",[t._v("服务协议号")]),s("span",[t._v("相对人")])]),s("div",{staticClass:"unlock-apply-container-form-table-1"},t._l(t.UnlockApplyMsg,(function(a,e){return s("div",{key:e,staticClass:"unlock-apply-container-form-table-1-item"},[s("span",[t._v(t._s(e+1))]),s("span",[t._v(t._s(a.reportNo))]),s("span",[t._v(t._s(a.civilno))]),s("span",[t._v(t._s(a.debtId))]),s("span",[t._v(t._s(a.debtNo))]),s("span",[t._v(t._s(a.personName))])])})),0),s("el-form",{attrs:{"label-width":""}},[s("h3",[t._v("债事人信息")]),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("甲方（债事人名称/姓名）：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.debtName,callback:function(a){t.$set(t.UnlockUserMsg,"debtName",a)},expression:"UnlockUserMsg.debtName"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("法定代表人/负责人：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.debtLegalName,callback:function(a){t.$set(t.UnlockUserMsg,"debtLegalName",a)},expression:"UnlockUserMsg.debtLegalName"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("身份证号码/信用代码：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.debtIdCardCode,callback:function(a){t.$set(t.UnlockUserMsg,"debtIdCardCode",a)},expression:"UnlockUserMsg.debtIdCardCode"}})],1)],1)],1),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("所住地：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.debtAdd,callback:function(a){t.$set(t.UnlockUserMsg,"debtAdd",a)},expression:"UnlockUserMsg.debtAdd"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("联系电话：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.debtPhone,callback:function(a){t.$set(t.UnlockUserMsg,"debtPhone",a)},expression:"UnlockUserMsg.debtPhone"}})],1)],1)],1),s("h3",[t._v("相对人信息")]),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("乙方（相对人名称/姓名）：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.personalName,callback:function(a){t.$set(t.UnlockUserMsg,"personalName",a)},expression:"UnlockUserMsg.personalName"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("法定代表人/负责人：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.personalLegalName,callback:function(a){t.$set(t.UnlockUserMsg,"personalLegalName",a)},expression:"UnlockUserMsg.personalLegalName"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("身份证号码/信用代码：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.personalIdCardCode,callback:function(a){t.$set(t.UnlockUserMsg,"personalIdCardCode",a)},expression:"UnlockUserMsg.personalIdCardCode"}})],1)],1)],1),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("所住地：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.personalAdd,callback:function(a){t.$set(t.UnlockUserMsg,"personalAdd",a)},expression:"UnlockUserMsg.personalAdd"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("联系电话：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.personalPhone,callback:function(a){t.$set(t.UnlockUserMsg,"personalPhone",a)},expression:"UnlockUserMsg.personalPhone"}})],1)],1)],1)],1),s("h3",[t._v("担保人信息")]),s("div",{staticClass:"unlock-apply-container-form-table-2-title"},[s("span",[t._v("序号")]),s("span",[t._v("单位类型")]),s("span",[t._v("担保人（姓名/企业名称）")]),s("span",[t._v("身份证号码/信用代码")]),s("span",[t._v("联系电话")]),s("span",[t._v("所住地")])]),s("div",{staticClass:"unlock-apply-container-form-table-2"},t._l(t.GuarantorMsg,(function(a,e){return s("div",{key:e,staticClass:"unlock-apply-container-form-table-2-item"},[s("span",[t._v(t._s(e+1))]),s("span",[t._v(t._s(a.unitType))]),s("span",[t._v(t._s(a.authname))]),s("span",[t._v(t._s(a.card))]),s("span",[t._v(t._s(a.tel))]),s("span",[t._v(t._s(a.address))])])})),0),s("h3",[t._v("本次债权处理信息")]),s("el-form",{staticClass:"pub-row-box page-row-box1",attrs:{"label-width":"0",model:t.SubmitData}},[s("el-row",[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("债权总金额：")]),s("el-form-item",{attrs:{rules:[{required:!0,message:"请输入债权总金额",trigger:"blur"}],prop:"amountTotal"}},[s("el-input",{attrs:{type:"text",disabled:!0},model:{value:t.UnlockUserMsg.amountTotal,callback:function(a){t.$set(t.UnlockUserMsg,"amountTotal",a)},expression:"UnlockUserMsg.amountTotal"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("累计已转让债权金额：")]),s("el-form-item",[s("el-input",{attrs:{type:"text",disabled:!0},model:{value:t.transfeAmount,callback:function(a){t.transfeAmount=a},expression:"transfeAmount"}})],1)],1)],1),s("el-row",[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("本次申请转让债权金额（小写）：")]),s("el-form-item",[s("el-input",{attrs:{type:"text",disabled:t.IsApproveStatus},model:{value:t.SubmitData.amountThis,callback:function(a){t.$set(t.SubmitData,"amountThis",a)},expression:"SubmitData.amountThis"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("本次申请转让债权金额（大写）：")]),s("el-form-item",[s("el-input",{staticClass:"mini-fontsize",attrs:{type:"text",disabled:!0,value:t._f("Uppercase")(t.SubmitData.amountThis)}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label",staticStyle:{color:"red"}},[t._v("注：请确定金额无误后在输入，输入后不可更改")])]),s("br")],1)],1)],1),s("el-collapse-item",{attrs:{title:"债权处理方式",name:"2"}},[s("el-form",{attrs:{"label-width":""}},[s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("债权处理类型：")]),s("el-form-item",{attrs:{label:""}},[s("el-select",{attrs:{placeholder:"请选择",disabled:t.IsApproveStatus},model:{value:t.SubmitData.debtType,callback:function(a){t.$set(t.SubmitData,"debtType",a)},expression:"SubmitData.debtType"}},[s("el-option",{attrs:{label:"一次性提取转让债权等额资产",value:"1"}}),s("el-option",{attrs:{label:"第三方商贸公司代理销售",value:"2"}}),s("el-option",{attrs:{label:"第三方电子商务公司线上代理销售",value:"3"}}),s("el-option",{attrs:{label:"其他",value:"4"}})],1)],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("债权处理年限：")]),s("el-form-item",{attrs:{label:""}},[s("el-select",{attrs:{placeholder:"请选择",disabled:t.IsApproveStatus},model:{value:t.SubmitData.debtYaer,callback:function(a){t.$set(t.SubmitData,"debtYaer",a)},expression:"SubmitData.debtYaer"}},[s("el-option",{attrs:{label:"一年",value:"1"}}),s("el-option",{attrs:{label:"二年",value:"2"}}),s("el-option",{attrs:{label:"三年",value:"3"}})],1)],1)],1)],1)],1)],1),s("el-collapse-item",{attrs:{title:"咨询服务协议",name:"3"}},[s("el-form",{attrs:{"label-width":""}},[s("h3",[t._v("甲方信息")]),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("甲方（债权人）：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.debtName,callback:function(a){t.$set(t.UnlockUserMsg,"debtName",a)},expression:"UnlockUserMsg.debtName"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("身份证号码/统一社会信用代码：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.debtIdCardCode,callback:function(a){t.$set(t.UnlockUserMsg,"debtIdCardCode",a)},expression:"UnlockUserMsg.debtIdCardCode"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("法定/联系地址：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.debtAdd,callback:function(a){t.$set(t.UnlockUserMsg,"debtAdd",a)},expression:"UnlockUserMsg.debtAdd"}})],1)],1)],1),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("联系电话：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.debtPhone,callback:function(a){t.$set(t.UnlockUserMsg,"debtPhone",a)},expression:"UnlockUserMsg.debtPhone"}})],1)],1)],1),s("h3",[t._v("乙方信息")]),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("乙方（债务人）：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.personalName,callback:function(a){t.$set(t.UnlockUserMsg,"personalName",a)},expression:"UnlockUserMsg.personalName"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("身份证号码/统一社会信用代码：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.personalIdCardCode,callback:function(a){t.$set(t.UnlockUserMsg,"personalIdCardCode",a)},expression:"UnlockUserMsg.personalIdCardCode"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("法定/联系地址：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.personalAdd,callback:function(a){t.$set(t.UnlockUserMsg,"personalAdd",a)},expression:"UnlockUserMsg.personalAdd"}})],1)],1)],1),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("联系电话：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.UnlockUserMsg.personalPhone,callback:function(a){t.$set(t.UnlockUserMsg,"personalPhone",a)},expression:"UnlockUserMsg.personalPhone"}})],1)],1)],1),s("h3",[t._v("委托事项")]),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("甲方身份情况：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{placeholder:"债权人",disabled:!0},model:{value:t.party1Identity,callback:function(a){t.party1Identity=a},expression:"party1Identity"}})],1)],1),s("el-col",{attrs:{span:8}},[t._v(" (1)债权人，无法收回确定的债权; (2)债务人，无法清偿自身所欠债务 ")]),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("债权处理申请：")]),s("el-form-item",{attrs:{label:""}},[s("el-select",{attrs:{value:t.SubmitData.debtType,disabled:!0}},[s("el-option",{attrs:{label:"一次性提取转让债权等额资产",value:"1"}}),s("el-option",{attrs:{label:"第三方商贸公司代理销售",value:"2"}}),s("el-option",{attrs:{label:"第三方电子商务公司线上代理销售",value:"3"}}),s("el-option",{attrs:{label:"其他",value:"4"}})],1)],1)],1)],1),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("乙方身份情况：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{placeholder:"债权人",disabled:!0},model:{value:t.party2Identity,callback:function(a){t.party2Identity=a},expression:"party2Identity"}})],1)],1),s("el-col",{attrs:{span:8}},[t._v(" (1)债权人，无法收回确定的债权; (2)债务人，无法清偿自身所欠债务 ")])],1),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("本次债权处理申请金额（小写）：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.SubmitData.amountThis,callback:function(a){t.$set(t.SubmitData,"amountThis",a)},expression:"SubmitData.amountThis"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("本次债权处理申请金额（大写）：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{staticClass:"mini-fontsize",attrs:{value:t._f("Uppercase")(t.SubmitData.amountThis),disabled:!0}})],1)],1)],1),s("h3",[t._v("三方约定策划方案服务费")]),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("策划方案服务费率：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{value:"10%",disabled:!0}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("本次策划方案服务费（小写）：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:!0},model:{value:t.thisPlanMoney,callback:function(a){t.thisPlanMoney=a},expression:"thisPlanMoney"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("本次策划方案服务费（大写）：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{staticClass:"mini-fontsize",attrs:{value:t._f("Uppercase")(t.thisPlanMoney),disabled:!0}})],1)],1)],1),s("h3",[t._v("其他约定事项")]),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("甲方确认送达地址：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:t.IsApproveStatus},model:{value:t.SubmitData.partyaAddr,callback:function(a){t.$set(t.SubmitData,"partyaAddr",a)},expression:"SubmitData.partyaAddr"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("甲方确认送达联系人：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:t.IsApproveStatus},model:{value:t.SubmitData.partyaPerson,callback:function(a){t.$set(t.SubmitData,"partyaPerson",a)},expression:"SubmitData.partyaPerson"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("甲方确认送达联系电话：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:t.IsApproveStatus},model:{value:t.SubmitData.partyaTel,callback:function(a){t.$set(t.SubmitData,"partyaTel",a)},expression:"SubmitData.partyaTel"}})],1)],1)],1),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("乙方确认送达地址：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:t.IsApproveStatus},model:{value:t.SubmitData.partybAddr,callback:function(a){t.$set(t.SubmitData,"partybAddr",a)},expression:"SubmitData.partybAddr"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("乙方确认送达联系人：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:t.IsApproveStatus},model:{value:t.SubmitData.partybPerson,callback:function(a){t.$set(t.SubmitData,"partybPerson",a)},expression:"SubmitData.partybPerson"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("乙方确认送达联系电话：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{disabled:t.IsApproveStatus},model:{value:t.SubmitData.partybTel,callback:function(a){t.$set(t.SubmitData,"partybTel",a)},expression:"SubmitData.partybTel"}})],1)],1)],1),s("h3",[t._v("上传资料：")]),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:16}},[s("div",{staticClass:"update-img-list"},t._l(t.SubmitData.uploadAnnex,(function(a,l){return s("div",{key:l,staticClass:"update-img-list-item"},[s("img",{attrs:{src:a,alt:""}}),t.IsApproveStatus?t._e():s("img",{staticClass:"delete-voucher",attrs:{src:e("aaf6"),alt:""},on:{click:function(a){return t.DelectVocher(l)}}})])})),0),t.IsApproveStatus?t._e():s("div",{staticClass:"update-img-button"},[s("input",{ref:"UpdateMaterialVoucher",attrs:{type:"file",value:"点击上传"},on:{change:t.UpdateVoucher}}),s("button",{staticClass:"update-voucher-button",attrs:{type:"button"}},[t._v("点击上传")])])])],1)],1)],1),s("el-collapse-item",{attrs:{title:"策划方案服务协议",name:"4"}},[s("div",{staticClass:"unlock-apply-container-form-plan-agreement"},[s("div",{staticClass:"unlock-apply-container-form-plan-agreement-title"},[t._v("策划方案服务协议")]),s("div",{staticClass:"unlock-apply-container-form-plan-agreement-introduce-part-a"},[s("div",[s("span",[t._v("协议编号：")]),s("input",{attrs:{type:"text",disabled:!0},domProps:{value:t.PlanInitData.serviceNo}})]),s("div",[s("span",[t._v("甲方(委托方)：")]),s("input",{attrs:{type:"text",placeholder:"债权人",disabled:""},domProps:{value:t.PlanInitData.debtName}})]),s("div",[s("span",[t._v("身份证号码/统一社会信用代码：")]),s("input",{attrs:{type:"text",placeholder:"债权人身份证号码",disabled:""},domProps:{value:t.PlanInitData.personCard}})]),s("div",[s("span",[t._v("通讯地址：")]),s("input",{attrs:{type:"text",placeholder:"债权人身份证地址",disabled:""},domProps:{value:t.PlanInitData.priAdd}})]),s("div",[s("span",[t._v("联系人：")]),s("input",{attrs:{type:"text",placeholder:"债权人姓名",disabled:""},domProps:{value:t.PlanInitData.debtName}})]),s("div",[s("span",[t._v("联系电话：")]),s("input",{attrs:{type:"text",placeholder:"债权人电话号码",disabled:""},domProps:{value:t.PlanInitData.priPhone}})])]),s("div",{staticClass:"unlock-apply-container-form-plan-agreement-introduce-part-b"},[t._v(" 乙方(受托方)：山东盛世天泽公关顾问有限公司 "),s("br"),t._v("统一社会信用代码：91371100MA3TA2E083 "),s("br"),t._v("联系地址：山东省日照市经济开发区贵阳路以东上海路以南（山东纳义斯汽车配件有限公司三楼302） "),s("br"),t._v("联系人：蒋莎莉 "),s("br"),t._v("联系电话：023-60946399 "),s("br"),t._v("鉴于： ")]),s("div",[t._v("甲方因无法解决自身债权债务,自愿委托乙方为其提供处理债权债务方案咨询服务,依据《中华人民共和国合同法》和国家有关法律、法规,甲乙双方经友好协商,签订本合同以共同遵守。")]),s("div",[s("h3",[t._v("第一条释义")]),t._v("(一)债事:是指基于合法的原因产生的债权债务关系,在不同的语境中可能特指债权或债务或债权债务。 "),s("br"),t._v("(二)处理债权债务咨询:是指乙方企业经营范围许可的经营活动,主要针对具有合法债权债务的客户群体进行调解安抚,结合其实际情况给予分析判断,提供具有建议性、可操作性、合法合理性的咨询方案 "),s("br"),t._v("(三)债权人:特指本协议中确定的具体债权债务关系中享有债权的一方 "),s("br"),t._v("(四)债务人:特指本协议中确定的具体债权债务关系中负有债务的一方。 "),s("br"),s("h3",[t._v("第二条委托事项")]),t._v(" （一）甲方身份属于下列第 "),s("el-select",{attrs:{disabled:t.IsApproveStatus},model:{value:t.PlanInitData.matters,callback:function(a){t.$set(t.PlanInitData,"matters",a)},expression:"PlanInitData.matters"}},[s("el-option",{attrs:{label:"(1)债权人",value:1}}),s("el-option",{attrs:{label:"(2)债务人",value:2}})],1),t._v("种情况 "),s("br"),t._v("(1)债权人,无法收回本协议确定的债权 "),s("br"),t._v("(2)债务人,无法清偿自身所欠债务 "),s("br"),t._v("（二）甲方因无法解决自身债权债务，在完全知晓和认可乙方处理债权债务咨询方式的情况下，委托乙方提供处理债权债务的咨询意见并支付策划方案服务费。 "),s("br"),t._v("2.3甲方本次咨询乙方进行处理的债权债务金额 "),s("input",{attrs:{type:"text",placeholder:"解锁金额小写",disabled:!0},domProps:{value:t.PlanInitData.amountThis}}),t._v(" 元,（大写： "),s("input",{staticClass:"mini-fontsize",attrs:{type:"text",placeholder:"解锁金额大写",disabled:!0},domProps:{value:t.PlanInitData.amountThisMax}}),t._v(" 元整）。其中包括本金 "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.PlanInitData.servicePrincipal,expression:"PlanInitData.servicePrincipal"}],attrs:{type:"text",disabled:t.IsApproveStatus},domProps:{value:t.PlanInitData.servicePrincipal},on:{input:function(a){a.target.composing||t.$set(t.PlanInitData,"servicePrincipal",a.target.value)}}}),t._v("元,利息 "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.PlanInitData.serviceInterest,expression:"PlanInitData.serviceInterest"}],attrs:{type:"text",disabled:t.IsApproveStatus},domProps:{value:t.PlanInitData.serviceInterest},on:{input:function(a){a.target.composing||t.$set(t.PlanInitData,"serviceInterest",a.target.value)}}}),t._v("元； "),s("br"),t._v("1.收集、查阅本项目相关的买卖合同、服务合同、借款协议及担保协议等协议文件,以及交易凭证、担保登记凭证等。 "),s("br"),t._v("2.在分析本项目相关协议文件及各类凭证资料的基础上，就甲方本次债事咨询提供处置服务方案。 "),s("br"),t._v("3.与本协议确定的债权债务关系相对人沟通债事处置服务方案：如甲方系债务人，相对方债权人不接受该方案，本协议自动终止；如甲方系债权人，相对方债务人不接受该方案的,不影响本协议的履行。 "),s("br"),t._v("4.对本项目相关的其他债权债务问题，解答甲方的咨询，向甲方提供有关协助。 "),s("br"),s("h3",[t._v("三、策划方案服务费及支付方式")]),t._v(" (一)甲方按照本协议约定的处理债权债务金额的10%向乙方支付策划方案服务费，策划方案服务费总额为人民币 "),s("input",{attrs:{type:"text",disabled:!0},domProps:{value:t.PlanInitData.thisPlanMoney}}),t._v("元（大写： "),s("input",{attrs:{type:"text",disabled:!0},domProps:{value:t.PlanInitData.thisPlanMoneyMax}}),t._v("圆整）。 "),s("br"),t._v("(二)甲方须将策划方案服务费支付至乙方指定的银行账户: "),s("br"),t._v("户名：山东盛世天泽公关顾问有限公司 "),s("br"),t._v("账号：810101201421046328 "),s("br"),t._v("开户行：日照银行股份有限公司银海支行 "),s("br"),t._v("(三)支付时间:本协议签订之日,甲方一次性支付 "),s("br"),t._v("(四)乙方收到策划方案服务费后须向甲方开具合法发票服务项目工作要求 "),s("br"),s("h3",[t._v("第四条 服务项目工作要求")]),t._v(" （一）乙方应按照甲方委托合理安排工作步骤,以完成甲方的委托事务。 "),s("br"),t._v("（二）为确保本项目顺利进行，甲方须全力配合乙方工作，包括及时向乙方提供本项目相关的协议文件和凭证资料，并给予乙方必要的工作时间等。 "),s("br"),t._v("（三）乙方向甲方提供本项目咨询服务方案，或以书面、邮件等方式为甲方提供本项目服务方案咨询视为乙方已完成本协议约定的服务内容，甲方不得以任何理由要求乙方退还策划方案服务费。 "),s("h3",[t._v("第五条双方的陈述和保证")]),t._v(" （一）甲方的陈述和保证 "),s("br"),t._v("1.完全知晓和认可乙方咨询服务方式，自愿将本项目全权委托给乙方提供咨询服务； "),s("br"),t._v("2.本协议内容乙方已向甲方充分告知、说明并与甲方协商一致，甲方已充分理解并同意本协议的全部内容，愿意遵守"),s("br"),t._v("各项规则及本协议的所有内容； "),s("br"),t._v("3.本协议述及的债权债务关系真实且合法； "),s("br"),t._v("4.与乙方诚信合作，为乙方开展工作提供便利，向乙方提供与服务事项相关的情况和资料，并保证其真实、合法、有效； "),s("br"),t._v("5.如本项目有关的情况和事实发生变化，应及时告知乙方； "),s("br"),t._v("6.按照本协议约定支付策划方案服务费； "),s("br"),t._v("7.对本项目相关的全部内容保密,不得向任何第三方透露。 "),s("br"),t._v("（二）乙方的陈述和保证 "),s("br"),t._v("1.遵守职业道德和执业纪律； "),s("br"),t._v("2.勤勉尽职，依法在协议约定范围内为甲方提供咨询服务； "),s("br"),t._v("3.对本项目相关的全部内容保密，不得向任何第三方透露。 "),s("h3",[t._v("第六条协议的变更和解除")]),t._v(" （一）本协议履行期间，发生特殊情况时，任何一方需变更本协议的，要求变更一方应及时书面通知对方，征得对方同意后，双方签订书面变更协议，该变更协议将成为本协议不可分割的部分。未经双方签署书面文件，任何一方无权变更本协议，否则由此造成相对方的经济损失，由责任方承担。 "),s("br"),t._v("（二）因客观情况发生变化，甲乙双方可协商解除本协议。 "),s("br"),t._v("（三）甲方自本协议签订后，应当积极配合乙方工作，不得阻碍或拒绝履行协议，否则乙方有权单方解除本协议，且策划方案服务费不予退还。 "),s("br"),t._v("（四）甲方未依照本协议约定支付策划方案服务费，逾期超过一个月的，乙方有权解除本协议，并依据本协议的约定主张违约金。 "),s("h3",[t._v("第七条违约责任")]),t._v("7.1任何一方违约的,违约方按照策划方案服务费金额的10%向守约方支付违约金。 "),s("br"),s("h3",[t._v("八、通知与送达")]),s("div",[t._v(" （一）甲乙双方一致确认，本协议首部注明的通讯地址、联系人和联系电话为双方的有效送达地址，其适用范围包括：甲乙双方之间发出的任何通知、联络或争议进入民事诉讼程序后的一审程序、二审程序和执行程序有关司法文书的通知或送达。"),s("br"),t._v(" （二）对于任何通知、联络或司法文书，甲乙双方约定如下日期为正式送达日期："),s("br"),t._v(" 1.直接交付的，在交付时视为送达。"),s("br"),t._v(" 2.以短信、微信方式发出的，以发件方发送后系统显示的时间视为送达。"),s("br"),t._v(" 3.以邮政快递形式发出的，在收件人拒收或者因送达地址、联系人和联系电话错误或不详而被退回时视为送达。"),s("br"),t._v(" （三）甲乙双方的送达地址、联系人和联系电话如有变更的，须在变更前十日以书面形式通知相对方，在书面变更通知送达对方之前，视为送达地址、联系人和联系电话未变更。"),s("br")]),s("h3",[t._v("九、其他事项")]),t._v(" （一）因本协议发生争议，甲乙双方应当友好协商解决；协商不成的可向本协议签订地人民法院起诉。"),s("br"),t._v(" （二）本协议未尽事宜,由甲乙双方另行签订补充协议,补充协议与本协议具有同等法律效力。"),s("br"),t._v(" （三）本协议自甲乙双方签字或盖章后生效。本协议壹式叁份,甲方留存壹份,乙方留存貳份,具有同等法律效力。"),s("br")],1),s("div",{staticClass:"middle-message"},[s("span",[t._v("(以下无正文,为签署页)")])]),s("el-form",{attrs:{"label-width":""}},[s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("甲方：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{value:t.PlanInitData.debtName,disabled:!0}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("乙方：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{value:"山东盛世天泽公关顾问有限公司",disabled:!0}})],1)],1)],1),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("日期：")]),s("el-form-item",{attrs:{label:""}},[s("el-date-picker",{attrs:{align:"left",type:"date",placeholder:"请选择日期","picker-options":t.pickerOptions,value:t.PlanInitData.contractDate,disabled:!0,"value-format":"yyyy-MM-dd"}})],1)],1),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("乙方(签字盖章捺印)：")])])],1),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("p")]),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("日期：")]),s("el-form-item",{attrs:{label:""}},[s("el-date-picker",{attrs:{align:"left",type:"date",placeholder:"请选择日期",value:t.PlanInitData.contractDate,disabled:!0,"picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd"}})],1)],1)],1),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:8}},[s("p")]),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"col-label"},[t._v("合同签约地：")]),s("el-form-item",{attrs:{label:""}},[s("el-input",{attrs:{type:"text",value:"重庆市渝中区",disabled:!0}})],1)],1)],1)],1)],1),t.IsApproveStatus?t._e():s("div",{staticClass:"unlock-apply-container-form-determine3"},[s("button",{attrs:{type:"button"},on:{click:t.SubmitEditMessage}},[t._v("确定")])])])],1)],1)]),t.IsApproveStatus?s("div",{staticClass:"unlock-apply-check"},[s("div",{staticClass:"unlock-apply-check-reason"},[s("span",[t._v("审批原因")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.SubmitApproveData.checkReason,expression:"SubmitApproveData.checkReason"}],attrs:{maxlength:"141"},domProps:{value:t.SubmitApproveData.checkReason},on:{input:function(a){a.target.composing||t.$set(t.SubmitApproveData,"checkReason",a.target.value)}}})]),s("div",{staticClass:"unlock-apply-check-button"},[s("button",{attrs:{type:"button"},on:{click:t.RejectCheck}},[t._v("审核驳回")]),s("button",{attrs:{type:"button"},on:{click:t.PassCheck}},[t._v("审核通过")])])]):t._e()])},l=[],r=(e("4160"),e("a434"),e("a9e3"),e("b680"),e("ac1f"),e("1276"),e("159b"),e("96cf"),e("1da1")),n={data:function(){return{SealSrc:e("f2a0"),RelativeMsg:[{IsCoordinate:"true",Type:"debtor",Properties:"person"}],UnlockApplyMsg:[],GuarantorMsg:[],pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(t){t.$emit("pick",new Date)}},{text:"昨天",onClick:function(t){var a=new Date;a.setTime(a.getTime()-864e5),t.$emit("pick",a)}},{text:"一周前",onClick:function(t){var a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",a)}}]},ServicePlan:"",UpdataMsg:[],IsPopSelectiveList:!0,UnlockUserMsg:{},SubmitData:{reportId:"",relativePerId:"",civilId:"",amountTotal:"",amountCumulative:"",amountThis:"",debtType:"",debtYaer:"",partyaAddr:"",partyaPerson:"",partyaTel:"",partybAddr:"",partybPerson:"",partybTel:"",status:"0",partyaIdentity:"1",partybIdentity:"2",comId:"",thisPlanMoney:"",debtApply:"",uploadAnnex:[]},SubmitPlanData:{matters:"",serviceNo:"",servicePrincipal:"",serviceInterest:"",contractDate:"",debtId:""},MediaSrc:[],MediaIndex:0,ResponseDebtID:"",PlanInitData:[],SubmitApproveData:{checkReason:"",status:"",debtId:""},AddSealData:{debtId:this.$route.query.debtId,comId:window.sessionStorage.getItem("companyId"),parta:"",partaCard:"",partaTel:""},IsApproveStatus:!0}},methods:{UpdateVoucher:function(){var t=this;this.$UpdateFile(this.$refs.UpdateMaterialVoucher.files[0]).then((function(a){t.SubmitData.uploadAnnex.push(a)}))},InitData:function(t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var e,s,l,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new FormData,e.append("relativePerId",a.$route.query.relativePerId),t.next=4,a.$http({method:"post",url:"/api/api/busRelativePersonController/selectByRelativePerId",data:e,headers:{"Content-Type":"multipart/form-data"}});case 4:return s=t.sent,l=s.data,a.UnlockUserMsg=l.data,r=new FormData,r.append("debtId",a.$route.query.debtId),t.next=11,a.$http({method:"post",url:"/api/api/pubDebtController/selectByPrimaryKey",data:r,headers:{"Content-Type":"multipart/form-data"}});case 11:n=t.sent,o=n.data,a.SubmitData=o.data,a.SubmitData.uploadAnnex=o.data.uploadAnnex.split(",");case 15:case"end":return t.stop()}}),t)})))()},GetMediaMsg:function(t){this.relativePerId=this.MediaSrc[this.MediaIndex].relativePerId,this.InitData(this.relativePerId);var a=this.MediaSrc[this.MediaIndex].civilId;this.SubmitData.civilId=this.MediaSrc[this.MediaIndex].civilId,this.Getguarantor(a)},Getguarantor:function(t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,l,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=new FormData,s.append("civilId",t),e.next=4,a.$http({method:"post",url:"/api/api/busGuaranteeController/selectByPrimaryKey",data:s,headers:{"Content-Type":"multipart/form-data"}});case 4:l=e.sent,r=l.data,a.GuarantorMsg=r.data;case 7:case"end":return e.stop()}}),e)})))()},SearchConciliation:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,s,l,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=t.$route.query.reportId,s=new FormData,s.append("reportId",e),a.next=5,t.$http({method:"post",url:"/api/api/busCivilController/selectCivi",data:s,headers:{"Content-Type":"multipart/form-data"}});case 5:l=a.sent,r=l.data,t.MediaSrc=r.data,t.MediaSrc.forEach((function(t,a){t.value=a})),t.GetMediaMsg(t.MediaIndex);case 10:case"end":return a.stop()}}),a)})))()},GetMsgList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,s,l,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return"/EditUnlockApplyForm"===t.$route.path&&(t.IsApproveStatus=!1),e=new FormData,s=t.$route.query.reportId,e.append("reportId",s),a.next=6,t.$http({method:"post",url:"/api/api/pubDebtController/selectByReportIds",data:e,headers:{"Content-Type":"multipart/form-data"}});case 6:l=a.sent,r=l.data,t.UnlockApplyMsg=r.data;case 9:case"end":return a.stop()}}),a)})))()},InitPlanData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,s,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=new FormData,e.append("debtId",t.$route.query.debtId),e.append("comId",window.sessionStorage.getItem("companyId")),a.next=5,t.$http({method:"post",url:"/api/api/pubDebtController/initializePlan",data:e,headers:{"Content-Type":"multipart/form-data"}});case 5:s=a.sent,l=s.data,t.PlanInitData=l.data,console.log(t.PlanInitData);case 9:case"end":return a.stop()}}),a)})))()},RejectCheck:function(){if(!this.SubmitApproveData.checkReason)return this.$message.error("请先填写审核原因");this.UpdateCheckStatus("5"),this.$router.push({path:"UnlockApply"})},PassCheck:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(s in t.UpdateCheckStatus("6"),e=new FormData,t.AddSealData.parta=t.PlanInitData.debtName,t.AddSealData.partaCard=t.PlanInitData.personCard,"1"===t.PlanInitData.reportPropert?t.AddSealData.partaTel=t.PlanInitData.priPhone:t.AddSealData.partaTel=t.PlanInitData.corBankPhone,t.AddSealData)e.append(s,t.AddSealData[s]);return a.next=8,t.$http({method:"post",url:"/api/wordConversion/fillInWordAndSaveAsSpecifyFormat",data:e,headers:{"Content-Type":"multipart/form-data"}});case 8:t.$router.push({path:"UnlockApply"});case 9:case"end":return a.stop()}}),a)})))()},UpdateCheckStatus:function(t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,l,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(l in s=new FormData,a.SubmitApproveData.status=t,a.SubmitApproveData.debtId=a.$route.query.debtId,a.SubmitApproveData)s.append(l,a.SubmitApproveData[l]);return e.next=6,a.$http({method:"post",url:"/api/api/pubDebtController/updateStatus",data:s,headers:{"Content-Type":"multipart/form-data"}});case 6:r=e.sent,n=r.data,"0"!==n.data&&"200"===n.resultCode?a.$message.success(n.resultMessage):a.$message.error("操作失败, 请重试");case 9:case"end":return e.stop()}}),e)})))()},DelectVocher:function(t){this.SubmitData.uploadAnnex.splice(t,1)},SubmitEditMessage:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,s,l,r,n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(s in e=new FormData,t.$delete(t.SubmitData,"updateTime"),t.$delete(t.SubmitData,"contractDate"),t.$delete(t.SubmitData,"createTime"),t.$delete(t.SubmitData,"checkDate"),t.$delete(t.SubmitData,"serviceDate"),t.SubmitData)e.append(s,t.SubmitData[s]);return a.next=9,t.$http({method:"post",url:"/api/api/pubDebtController/updateByPrimaryKeySelective",data:e,headers:{"Content-Type":"multipart/form-data"}});case 9:for(r in l=new FormData,t.SubmitPlanData.debtId=t.PlanInitData.debtId,t.SubmitPlanData.contractDate=t.PlanInitData.contractDate,t.SubmitPlanData.serviceNo=t.PlanInitData.serviceNo,t.SubmitPlanData.matters=t.PlanInitData.reportPropert,t.SubmitPlanData.serviceInterest=t.PlanInitData.serviceInterest,t.SubmitPlanData.servicePrincipal=t.PlanInitData.servicePrincipal,console.log(t.SubmitPlanData),t.SubmitPlanData)l.append(r,t.SubmitPlanData[r]);return a.next=20,t.$http({method:"post",url:"/api/api/pubDebtController/insertPlanInfo",data:l,headers:{"Content-Type":"multipart/form-data"}});case 20:n=a.sent,o=n.data,t.UpdateCheckStatus("4"),"200"===o.resultCode&&(t.$message.success("修改债权处理信息成功"),t.$router.push({path:"/MyDebt"}));case 24:case"end":return a.stop()}}),a)})))()}},created:function(){this.SearchConciliation(),this.GetMsgList(),this.InitPlanData()},computed:{thisPlanMoney:function(){return Number(this.SubmitData.amountThis)?(.1*Number(this.SubmitData.amountThis)).toFixed(2):""},party1Identity:function(){return"(".concat(this.SubmitData.partyaIdentity,")债权人")},party2Identity:function(){return"(".concat(this.SubmitData.partybIdentity,")债务人")},transfeAmount:function(){return Number(this.UnlockUserMsg.amountCumulative)+Number(this.SubmitData.amountThis)}}},o=n,i=(e("1049"),e("2877")),p=Object(i["a"])(o,s,l,!1,null,"bfe69ce8",null);a["default"]=p.exports}}]);