webpackJsonp([1],{0:function(t,e){},"3f2f":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{staticClass:"demo-form-inline",staticStyle:{"margin-top":"10px"},attrs:{required:"",inline:!0}},[a("el-form-item",{attrs:{required:"",label:"url"}},[a("el-input",{attrs:{placeholder:"要代理的url"},model:{value:t.proxyData.url,callback:function(e){t.$set(t.proxyData,"url",e)},expression:"proxyData.url"}})],1),t._v(" "),a("el-form-item",{attrs:{required:"",label:"代理地址"}},[a("el-input",{attrs:{placeholder:"http://localhost:7000"},model:{value:t.proxyData.target,callback:function(e){t.$set(t.proxyData,"target",e)},expression:"proxyData.target"}})],1),t._v(" "),a("el-form-item",[a("el-checkbox",{model:{value:t.proxyData.ignorePath,callback:function(e){t.$set(t.proxyData,"ignorePath",e)},expression:"proxyData.ignorePath"}},[t._v("不代理path")])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.addProxy}},[t._v("添加")])],1)],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"},on:{select:t.handleSelectionChange,"select-all":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"url",label:"url",width:"400"}}),t._v(" "),a("el-table-column",{attrs:{prop:"target",label:"代理地址"}}),t._v(" "),a("el-table-column",{attrs:{prop:"target",label:"是否代理path"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.ignorePath?"否":"是")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.deleteProxy(e.$index)}}},[t._v("\n          删除\n        ")])]}}])})],1)],1)},n=[],i={render:o,staticRenderFns:n};e.a=i},"4ZEo":function(t,e,a){"use strict";function o(t){a("6fDS")}var n=a("vbUx"),i=a("k29w"),s=a("VU/8"),c=o,r=s(n.a,i.a,!1,c,"data-v-b17dea8e",null);e.a=r.exports},"6BgM":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-tabs",{model:{value:t.activeType,callback:function(e){t.activeType=e},expression:"activeType"}},[a("el-tab-pane",{attrs:{label:"全局代理",name:"proxy"}},[a("Proxy")],1),t._v(" "),a("el-tab-pane",{attrs:{label:"单独代理",name:"itemProxy"}},[a("item-proxy")],1),t._v(" "),a("el-tab-pane",{attrs:{label:"mock数据",name:"mock"}},[a("mock")],1),t._v(" "),a("el-tab-pane",{attrs:{label:"代码片段",name:"code"}},[a("mock-code")],1)],1)},n=[],i={render:o,staticRenderFns:n};e.a=i},"6fDS":function(t,e){},"8BMN":function(t,e){},CEsb:function(t,e){},CUsD:function(t,e){},DJce:function(t,e,a){"use strict";var o=a("mvHQ"),n=a.n(o),i=a("fZjL"),s=a.n(i),c=a("Tfo7");e.a={components:{mockModal:c.a},data:function(){return{mocks:[],active:"",mockModalVisible:!1,activeData:{}}},created:function(){this.$http.get("/proxy-api/get/activemock").then(function(t){this.active=t.data.mock,this.setActiveMock(t.data.mock)})},mounted:function(){var t=this;this.$http.get("/proxy-api/get/mock").then(function(e){t.mocks=t.parseMock(e.data),t.mocks.forEach(function(e){e.mock&&t.$refs.multipleTable.toggleRowSelection(e)})})},methods:{setMockSuccess:function(t){this.mocks=this.parseMock(t)},parseMock:function(t){return s()(t).map(function(e){return t[e]})},changeItemMock:function(t){this.$http.post("/proxy-api/set/mockStatus",t).then(function(t){this.mocks=this.parseMock(t.data)})},deleteMock:function(t){if(!confirm("是否删除这个mock"))return!1;this.$http.get("/proxy-api/delete/mock",{params:t}).then(function(t){this.mocks=this.parseMock(t.data)})},createMock:function(){this.activeData={data:[]},this.mockModalVisible=!0},setMock:function(t){this.activeData=JSON.parse(n()(t)),this.mockModalVisible=!0},setActiveMock:function(t){this.$http.get("/proxy-api/set/activemock",{params:{mock:t}}).then(function(t){this.active=t.data.mock})}}}},DJn6:function(t,e,a){"use strict";function o(t){a("8BMN")}var n=a("WT7L"),i=a("RHkP"),s=a("VU/8"),c=o,r=s(n.a,i.a,!1,c,"data-v-79b7733d",null);e.a=r.exports},EnhV:function(t,e){},IB1z:function(t,e){},JpGR:function(t,e,a){"use strict";var o=a("32SN"),n=a.n(o),i=a("CEsb"),s=(a.n(i),a("M4fF")),c=a.n(s);e.a={name:"json-editor",data:function(){return{editor:null}},props:{json:{required:!0},options:{type:Object,default:function(){return{mode:"code",indentation:2,ace:ace}}},onChange:{type:Function},onError:{type:Function},title:{type:String}},methods:{_onChange:function(t){this.onChange&&this.editor&&this.onChange(this.editor.get())}},mounted:function(){var t=this,e=this.$refs.jsoneditor;this.$nextTick(function(){e.querySelector(".jsoneditor-menu").innerHTML=t.title});var a=c.a.extend({onChange:this._onChange,onError:function(){}},this.options);this.editor=new n.a(e,a),this.editor.set(this.json)},beforeDestroy:function(){this.editor&&(this.editor.destroy(),this.editor=null)}}},K463:function(t,e){},M93x:function(t,e,a){"use strict";function o(t){a("EnhV")}var n=a("xJD8"),i=a("6BgM"),s=a("VU/8"),c=o,r=s(n.a,i.a,!1,c,"data-v-06a1fd89",null);e.a=r.exports},MZt0:function(t,e,a){"use strict";function o(t){a("K463")}var n=a("xpBT"),i=a("3f2f"),s=a("VU/8"),c=o,r=s(n.a,i.a,!1,c,"data-v-a54502be",null);e.a=r.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),n=a("M93x"),i=a("8+8L"),s=a("zL8q"),c=a.n(s),r=a("tvR6");a.n(r);o.default.config.productionTip=!1,o.default.use(i.a),o.default.use(c.a),new o.default({el:"#app",template:"<App/>",components:{App:n.a}})},RHkP:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{fullscreen:!0,modal:!1,visible:t.currentVisible,title:"编写代码片段","before-close":t.close},on:{open:t.initDialog,"update:visible":function(e){t.currentVisible=e}}},[a("el-form",{attrs:{model:t.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"name"}},[a("el-input",{model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"url",required:""}},[a("el-input",{model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}})],1),t._v(" "),a("section",{staticClass:"codeBox"},[a("article",{staticClass:"content"},[a("div",{ref:"codeEditor",staticClass:"codeEditor"})])])],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.close}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.saveCode}},[t._v("确 定")])],1)],1)},n=[],i={render:o,staticRenderFns:n};e.a=i},RKMC:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"text-success"},[t._v("\n    切换proxy\n    "),a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(e){t.selectHost({host:"",port:"",id:"",name:""})}}},[t._v("关闭proxy")])],1),t._v(" "),a("el-alert",{attrs:{title:"当前proxy:"+t.active.host+":"+t.active.port+"("+t.active.name+")",type:"warning",closable:!1}}),t._v(" "),a("el-form",{staticClass:"demo-form-inline",staticStyle:{"margin-top":"10px"},attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"Name"}},[a("el-input",{attrs:{placeholder:"测试"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),a("el-form-item",{attrs:{required:"",label:"host"}},[a("el-input",{attrs:{placeholder:"localhost"},model:{value:t.host,callback:function(e){t.host=e},expression:"host"}})],1),t._v(" "),a("el-form-item",{attrs:{required:"",label:"port"}},[a("el-input",{attrs:{placeholder:"80"},model:{value:t.port,callback:function(e){t.port=e},expression:"port"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.changeHost}},[t._v("新建并切换")])],1)],1),t._v(" "),a("ul",{staticClass:"host-list"},t._l(t.hosts,function(e){return a("li",{staticClass:"cLi"},[a("span",{staticClass:"checked",class:{active:e.host==t.active.host&&e.port==t.active.port&&e.name==t.active.name}},[t._v("✔")]),t._v(" "),a("el-button",{attrs:{size:"medium",type:"text"},on:{click:function(a){t.selectHost(e)}}},[t._v("\n          "+t._s(e.host)+":"+t._s(e.port)+"("+t._s(e.name)+")\n        ")]),t._v(" "),a("button",{staticClass:"delete-proxy",attrs:{type:"button"},on:{click:function(a){t.deleteHost(e)}}},[a("span",[t._v("×")])])],1)}))],1)},n=[],i={render:o,staticRenderFns:n};e.a=i},RUA6:function(t,e){},RegG:function(t,e,a){"use strict";function o(t){a("kucX")}var n=a("rQYZ"),i=a("RKMC"),s=a("VU/8"),c=o,r=s(n.a,i.a,!1,c,"data-v-92213b4a",null);e.a=r.exports},Tfo7:function(t,e,a){"use strict";function o(t){a("RUA6")}var n=a("vinK"),i=a("kBS2"),s=a("VU/8"),c=o,r=s(n.a,i.a,!1,c,"data-v-04ecbbc2",null);e.a=r.exports},WT7L:function(t,e,a){"use strict";var o=a("h636"),n=(a.n(o),a("eKfU"));a.n(n);e.a={components:{},props:{data:{type:Object},onSuccess:{type:Function},visible:{type:Boolean,required:!0}},computed:{currentVisible:{get:function(){return this.visible},set:function(t){this.$emit("update:visible",t)}}},data:function(){return{editor:null,formData:{name:"",url:"",code:""}}},methods:{saveCode:function(){this.$http.post("/proxy-api/set/mockCode",this.formData).then(function(t){this.onSuccess(t.data),this.initMockCodeData(),this.currentVisible=!1})},initMockCodeData:function(){this.editor.setValue("")},initDialog:function(){var t=this;this.formData=this.data,setTimeout(function(){var e=ace.edit(t.$refs.codeEditor);e.getSession().setMode("ace/mode/javascript"),e.setTheme("ace/theme/monokai"),t.formData.code&&e.setValue(t.formData.code),t.editor=e,e.on("change",function(){var a=e.getValue();t.formData.code=a})})},close:function(){this.currentVisible=!1,this.initMockCodeData()}}}},exBe:function(t,e,a){"use strict";function o(t){a("IB1z")}var n=a("JpGR"),i=a("rJ1+"),s=a("VU/8"),c=o,r=s(n.a,i.a,!1,c,null,null);e.a=r.exports},k29w:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mock-box"},[a("el-alert",{staticClass:"info",attrs:{title:"通过提供epm的sdk, 可以对mock数据增删改查，简单的模拟业务场景",type:"info",closable:!1}}),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[a("el-button",{attrs:{type:"waring"},on:{click:t.createMockCode}},[t._v("添加代码片段")])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.mocks,"tooltip-effect":"dark","row-key":"url"},on:{"select-all":t.changeItemMockCode,select:t.changeItemMockCode}},[a("el-table-column",{attrs:{"reserve-selection":!0,type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"url"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.name)+"("+t._s(e.row.url)+")\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.setMockCode(e.row)}}},[t._v("\n            编辑\n          ")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.deleteMockCode(e.row)}}},[t._v("\n            删除\n          ")])]}}])})],1)],1),t._v(" "),a("mock-code-modal",{attrs:{data:t.activeData,visible:t.mockModalVisible,onSuccess:t.onSetCode},on:{"update:visible":function(e){t.mockModalVisible=e}}})],1)},n=[],i={render:o,staticRenderFns:n};e.a=i},kBS2:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{fullscreen:!0,modal:!1,visible:t.currentVisible,title:"设置mock","before-close":t.close},on:{open:t.initDialog,"update:visible":function(e){t.currentVisible=e}}},[a("el-form",{attrs:{model:t.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"name"}},[a("el-input",{model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"url",required:""}},[a("el-input",{model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"延时",required:""}},[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.formData.duration,callback:function(e){t.$set(t.formData,"duration",t._n(e))},expression:"formData.duration"}},[a("template",{slot:"append"},[t._v("ms")])],2)],1),t._v(" "),a("span",{staticClass:"info"},[t._v("注：优先返回参数字段最多个相等那个")]),t._v(" "),a("section",{staticClass:"dataBox"},[a("article",{staticClass:"tabs"},[t._l(t.formData.data,function(e){return a("div",{class:{active:t.activeData===e},on:{click:function(a){t.selectData(e)}}},[a("span",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],staticClass:"name",attrs:{disabled:"",type:"text"},domProps:{value:e.name},on:{blur:t.nameInputBlur,input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}})]),t._v(" "),a("span",{staticClass:"iconBox"},[a("i",{staticClass:"el-icon-edit",on:{click:function(e){return e.preventDefault(),t.editName(e)}}}),t._v(" "),t.formData.data.length>1?a("i",{staticClass:"el-icon-delete",on:{click:function(a){a.preventDefault(),t.deleteItemMock(e)}}}):t._e()])])}),t._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{icon:"el-icon-circle-plus",type:"info",size:"mini"},on:{click:t.addData}},[t._v("添加参数")])],2),t._v(" "),a("article",{staticClass:"content"},[a("div",{staticClass:"paramJsonEditorBox"},[a("json-editor",{ref:"jsonEditorParam",attrs:{title:"入参",onError:t.onError,onChange:t.onParamChange,json:t.activeData.requestData||{}}})],1),t._v(" "),a("div",{staticClass:"jsonEditorBox"},[a("json-editor",{ref:"jsonEditor",attrs:{title:"出参",onError:t.onError,onChange:t.onResChange,json:t.activeData.responseData||{}}})],1)])])],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.close}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.saveMock}},[t._v("确 定")])],1)],1)},n=[],i={render:o,staticRenderFns:n};e.a=i},kucX:function(t,e){},oX5Z:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mock-box"},[a("h4",{staticClass:"text-success"},[t._v("\n    mock\n    "),a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(e){t.setActiveMock("")}}},[t._v("关闭mock")])],1),t._v(" "),a("div",{staticClass:"mock cLi"},[a("span",{class:{active:"local"==t.active}},[t._v("✔")]),t._v(" "),a("a",{staticClass:"mockChange changeHost",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.setActiveMock("local")}}},[t._v("本地全部mock")])]),t._v(" "),a("div",{staticClass:"mock cLi"},[a("span",{class:{active:"part"==t.active}},[t._v("✔")]),t._v(" "),a("a",{staticClass:"mockChange changeHost",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.setActiveMock("part")}}},[t._v("本地部分mock")])]),t._v(" "),a("ul",{staticClass:"public-mock"}),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[a("el-button",{attrs:{type:"primary"},on:{click:t.createMock}},[t._v("添加mock数据")])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.mocks,"tooltip-effect":"dark","row-key":"url"},on:{"select-all":t.changeItemMock,select:t.changeItemMock}},["part"==t.active?a("el-table-column",{attrs:{"reserve-selection":!0,type:"selection",width:"55"}}):t._e(),t._v(" "),a("el-table-column",{attrs:{label:"url"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.name)+"("+t._s(e.row.url)+")\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.setMock(e.row)}}},[t._v("\n            编辑\n          ")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.deleteMock(e.row)}}},[t._v("\n            删除\n          ")])]}}])})],1)],1),t._v(" "),a("mock-modal",{attrs:{data:t.activeData,visible:t.mockModalVisible,onSuccess:t.setMockSuccess},on:{"update:visible":function(e){t.mockModalVisible=e}}})],1)},n=[],i={render:o,staticRenderFns:n};e.a=i},"rJ1+":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"jsoneditor",staticClass:"jsoneditor-box"})},n=[],i={render:o,staticRenderFns:n};e.a=i},rQYZ:function(t,e,a){"use strict";e.a={data:function(){return{host:"",port:"",name:"",hosts:[],active:{}}},created:function(){var t=this;this.$http.get("/proxy-api/get/host").then(function(e){t.active=e.data,t.selectHost(e.data)}),this.$http.get("/proxy-api/get/proxies").then(function(e){t.hosts=e.data})},methods:{changeHost:function(){var t=this.host,e=this.port,a=this.name,o={host:t,port:e,name:a};this.$http.get("/proxy-api/change/host",{params:o}).then(function(){this.host="",this.name="",this.port="",this.hosts.push(o),this.active=o})},selectHost:function(t){this.$http.get("/proxy-api/change/host",{params:t}).then(function(){this.active=t})},deleteHost:function(t){this.$http.get("/proxy-api/delete/host",{params:t}).then(function(t){this.hosts=t.data})}}}},tvR6:function(t,e){},vbUx:function(t,e,a){"use strict";var o=a("mvHQ"),n=a.n(o),i=a("fZjL"),s=a.n(i),c=a("DJn6");e.a={components:{mockCodeModal:c.a},data:function(){return{mocks:[],active:"",mockModalVisible:!1,activeData:{}}},mounted:function(){var t=this;this.$http.get("/proxy-api/get/mockCode").then(function(e){t.mocks=t.parseMock(e.data),t.mocks.forEach(function(e){e.mock&&t.$refs.multipleTable.toggleRowSelection(e)})})},methods:{onSetCode:function(t){this.mocks=this.parseMock(t)},parseMock:function(t){return s()(t).map(function(e){return t[e]})},changeItemMockCode:function(t){this.$http.post("/proxy-api/set/mockCodeStatus",t).then(function(t){this.mocks=this.parseMock(t.data)})},deleteMockCode:function(t){if(!confirm("是否删除这个mock"))return!1;this.$http.get("/proxy-api/delete/mockCode",{params:t}).then(function(t){this.mocks=this.parseMock(t.data)})},createMockCode:function(){this.activeData={data:[]},this.mockModalVisible=!0},setMockCode:function(t){this.activeData=JSON.parse(n()(t)),this.mockModalVisible=!0}}}},vinK:function(t,e,a){"use strict";var o=a("exBe");e.a={components:{JsonEditor:o.a},props:{data:{type:Object},onSuccess:{type:Function},visible:{type:Boolean,required:!0}},computed:{currentVisible:{get:function(){return this.visible},set:function(t){this.$emit("update:visible",t)}}},data:function(){return{formData:{name:"",url:"",duration:0,data:[{name:"请求参数1",requestData:{},responseData:{}}]},activeData:{requestData:{},responseData:{}}}},methods:{nameInputBlur:function(t){t.target.disabled=!0},editName:function(t){var e=t.target.parentNode.parentNode.querySelector(".name");e.disabled=!1,e.focus()},deleteItemMock:function(t){this.formData.data=this.formData.data.filter(function(e){return e!==t}),this.activeData=this.formData.data[0],this.setEditor()},initDialog:function(){var t=this;this.formData=this.data,this.data.data&&0!==this.data.data.length||(this.data.data=[{name:"请求参数1",requestData:{},responseData:{}}]),this.$nextTick(function(){t.activeData=t.data.data[0],t.setEditor()})},addData:function(){var t={name:"请求参数"+(this.formData.data.length+1),requestData:{},responseData:{}};this.formData.data.push(t),this.activeData=t,this.setEditor()},selectData:function(t){this.activeData=t,this.setEditor()},onResChange:function(t){this.activeData.responseData=t},onParamChange:function(t){this.activeData.requestData=t},onError:function(){},saveMock:function(){this.$http.post("/proxy-api/set/mock",this.formData).then(function(t){this.onSuccess(t.data),this.initMockData(),this.currentVisible=!1})},initMockData:function(){},setEditor:function(){this.$refs.jsonEditor.editor.set(this.activeData.responseData),this.$refs.jsonEditorParam.editor.set(this.activeData.requestData)},close:function(){this.initMockData(),this.currentVisible=!1}}}},wYK0:function(t,e,a){"use strict";function o(t){a("CUsD")}var n=a("DJce"),i=a("oX5Z"),s=a("VU/8"),c=o,r=s(n.a,i.a,!1,c,null,null);e.a=r.exports},xJD8:function(t,e,a){"use strict";var o=a("RegG"),n=a("wYK0"),i=a("4ZEo"),s=a("MZt0");e.a={components:{Proxy:o.a,Mock:n.a,ItemProxy:s.a,MockCode:i.a},data:function(){return{activeType:"proxy"}}}},xpBT:function(t,e,a){"use strict";var o=a("kvU2"),n=a.n(o);e.a={data:function(){return{proxyData:{url:"",target:"",hasProxy:!0,ignorePath:!1},proxyDataAry:[],tableData:[],multipleSelection:[]}},created:function(){this.getProxy()},methods:{getProxy:function(){var t=this;this.$http.get("/proxy-api/get/itemProxy").then(function(e){t.proxyDataAry=e.data,t.tableData=e.data,t.initMultipleSelection()})},setProxy:function(){var t=this;this.$http.post("/proxy-api/set/itemProxy",this.proxyDataAry).then(function(e){t.proxyDataAry=e.data,t.tableData=e.data,t.initMultipleSelection()})},addProxy:function(){var t=n()(this.proxyData);this.proxyDataAry.push(t),this.setProxy()},initMultipleSelection:function(){var t=this;this.tableData.forEach(function(e){e.hasProxy&&setTimeout(function(){t.$refs.multipleTable.toggleRowSelection(e,!0)})})},handleSelectionChange:function(t){this.proxyDataAry.forEach(function(t){return t.hasProxy=!1}),t.forEach(function(t){return t.hasProxy=!0}),this.setProxy()},deleteProxy:function(t){this.proxyDataAry.splice(t,1),this.setProxy()}}}}},["NHnr"]);
//# sourceMappingURL=app.3c536c881f0b6e05a5a6.js.map