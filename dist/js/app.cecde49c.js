(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],d=0,b=[];d<o.length;d++)i=o[d],s[i]&&b.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id="4678"},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("a4bb"),s=n.n(a),r=(n("6b54"),n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),i=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-inverse navbar-fixed-top"},[n("div",{staticClass:"container-fluid top-header"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{attrs:{src:"https://www.nordicenergy.io/content/uploads/nordicenergy-logo-secondary-white@3x.png"}})]),n("div",{staticClass:"form-inline"},[n("label",{attrs:{for:"selected-provider"}},[t._v("Provider")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedProvider,expression:"selectedProvider"}],staticClass:"form-control",attrs:{id:"selected-provider"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedProvider=e.target.multiple?n:n[0]},function(e){return t.changeProvider()}]}},t._l(t.availableNodes,function(e){return n("option",{key:e.rpc,domProps:{value:e}},[t._v(t._s(e.nodeName))])}),0)]),n("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.search()}}},[n("label",{attrs:{for:"input"}},[t._v("Search")]),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"form-control",attrs:{type:"text",id:"input",placeholder:"block, transaction, address"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),t._m(0)])])],1),t._m(1),t._m(2),t._m(3)]),n("div",{staticClass:"container-fluid header"},[n("div",{staticClass:"row no_overflow headerimage"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"container-fluid title-container"},[t._m(4),n("br"),n("div",{staticClass:"container-fluid text-left contact-container"},[n("router-view")],1)])]),t._m(5)])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[t._v("go")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert alert-warning alert-dismissible",attrs:{role:"alert"}},[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),n("div",{staticClass:"message"},[t._v("warning")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert alert-info alert-dismissible",attrs:{role:"alert"}},[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),n("div",{staticClass:"message"},[t._v("info")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),n("div",{staticClass:"message"},[t._v("danger")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("strong",[t._v("Nordic Energy Blockchain Explorer for Energy Case")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circle_container"},[n("div",{staticClass:"circle"})])}],l=(n("7514"),n("96cf"),n("3b8d")),u=(n("7f7f"),{54084:{name:"PowerChain Testnet",manager:"https://localhost:22004",rpc:"https://localhost:22000/"},78377:{name:"PowerChain Prod",manager:"http://localhost:32004",rpc:"http://localhost:32000/"}}),d=n("97f2"),b=n.n(d),f=n("a6b6"),h=n.n(f),p={name:"app",data:function(){return{networkId:0,networkName:"(to be determined)",web3js:!1,config:{},input:"",selectedProvider:null,availableNodes:[]}},mounted:function(){this.networkId=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_NETWORK,this.config=u[this.networkId],this.networkName=this.config.name,this.web3js=new b.a(this.config.rpc),this.web3js.extend({property:"eth",methods:[new this.web3js.extend.Method({name:"getQuorumPayload",call:"eth_getQuorumPayload",params:1})]}),this.web3js.utils.hexToNumber=function(t){if(!t)return t;try{return h()(t).toNumber()}catch(e){return h()(t).toString()}},this.getNodes()},methods:{search:function(){var t=this;switch(this.input.length){case 66:this.web3js.eth.getBlock(this.input).then(function(e){e?t.$router.push("/block/".concat(t.input)):t.$router.push("/tx/".concat(t.input))});break;case 42:this.$router.push("/address/".concat(this.input));break;default:this.web3js.eth.getBlock(this.input).then(function(e){e&&t.$router.push("/block/".concat(e.hash))});break}},getNodes:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,n,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=new URL(this.config.rpc),n=new URL(this.config.manager),t.next=4,fetch("".concat(this.config.manager,"/getNodeList")).then(function(t){return t.json()}).then(function(t){a.availableNodes=t.map(function(t){return e.hostname=t.ip,n.hostname=t.ip,{nodeName:t.nodeName,publicKey:t.publicKey,rpc:e.toString(),manager:n.toString()}})});case 4:this.selectedProvider=this.availableNodes.find(function(t){return t.rpc===a.config.rpc});case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),changeProvider:function(){var t=new b.a.providers.HttpProvider(this.selectedProvider.rpc);this.web3js.setProvider(t)}}},v=p,m=(n("034f"),n("2877")),k=Object(m["a"])(v,o,c,!1,null,null,null),_=k.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index-container"}},[n("h3",[t._v("Network: "+t._s(t.$parent.networkName))]),n("h3",[t._v("Nodes Online: "+t._s(t.peers+1))]),n("div",{staticClass:"section-title"},[n("h3",[t._v("Blocks")]),t.blocks?t._e():n("div",{attrs:{id:"blocks-standin"}},[n("p",[t._v("(Retrieving blocks...)")])])]),n("div",{staticClass:"table-container table-responsive"},[t.blocks?n("table",{staticClass:"table table-striped",attrs:{id:"blocks"}},[t._m(0),n("tbody",t._l(t.blocks,function(e){return n("tr",{key:e.id},[n("td",[n("router-link",{attrs:{to:"/block/"+e.hash}},[t._v(t._s(e.number))])],1),n("td",[n("router-link",{attrs:{to:"/block/"+e.hash}},[t._v(t._s(t._f("datetime")(e.timestamp)))])],1),n("td",[n("router-link",{attrs:{to:"/block/"+e.hash}},[t._v(t._s(e.hash))])],1)])}),0)]):t._e(),n("button",{staticClass:"btn btn-default",attrs:{disabled:t.lastBlockNumber===t.lastNetworkBlockNumber},on:{click:function(e){return t.nextBlocks()}}},[t._v("\n      <\n    ")]),n("button",{staticClass:"btn btn-default",attrs:{disabled:t.lastBlockNumber===t.blocksPerPage-1},on:{click:function(e){return t.prevBlocks()}}},[t._v("\n      >\n    ")])]),n("div",{staticClass:"section-title"},[n("h3",[t._v("Transactions")]),t.transactions?t._e():n("div",{attrs:{id:"transactions-standin"}},[n("p",[t._v("(Retrieving transactions...)")])])]),n("div",{staticClass:"table-container table-responsive"},[t.transactions?n("table",{staticClass:"table table-striped",attrs:{id:"transactions"}},[t._m(1),n("tbody",t._l(t.transactions,function(e){return n("tr",{key:e.id},[n("td",[n("router-link",{attrs:{to:"/address/"+e.from}},[t._v(t._s(e.from))])],1),n("td",[n("router-link",{attrs:{to:"/address/"+e.to}},[t._v(t._s(e.to))])],1),n("td",[n("router-link",{attrs:{to:"/tx/"+e.hash}},[t._v(t._s(e.hash))])],1)])}),0)]):t._e(),n("button",{staticClass:"btn btn-default",attrs:{disabled:t.lastBlockNumber===t.lastNetworkBlockNumber},on:{click:function(e){return t.nextBlocks()}}},[t._v("\n      <\n    ")]),n("button",{staticClass:"btn btn-default",attrs:{disabled:t.lastBlockNumber===t.blocksPerPage-1},on:{click:function(e){return t.prevBlocks()}}},[t._v("\n      >\n    ")])])])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("#")]),n("th",[t._v("Timestamp")]),n("th",[t._v("Hash")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("From")]),n("th",[t._v("To")]),n("th",[t._v("Hash")])])])}],w=(n("55dd"),n("f499")),C=n.n(w),y={name:"Index",data:function(){return{peers:0,blocks:[],transactions:[],lastNetworkBlockNumber:null,lastBlockNumber:null,blocksPerPage:10,autoUpdate:!0}},beforeRouteEnter:function(t,e,n){n(function(t){t.getPeers(),t.getBlocks(),setInterval(function(){t.autoUpdate&&t.getBlocks()},5e3)})},methods:{getPeers:function(){var t=this;this.$parent.web3js.eth.net.getPeerCount().then(function(e){return t.peers=e})},getBlocks:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,n,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$parent.web3js.eth.getBlockNumber();case 2:if(this.lastNetworkBlockNumber=t.sent,!this.autoUpdate){t.next=9;break}if(this.lastBlockNumber!==this.lastNetworkBlockNumber){t.next=6;break}return t.abrupt("return");case 6:this.lastBlockNumber=this.lastNetworkBlockNumber,t.next=11;break;case 9:this.lastBlockNumber>=this.lastNetworkBlockNumber&&(this.lastBlockNumber=this.lastNetworkBlockNumber),this.lastBlockNumber<this.blocksPerPage-1&&(this.lastBlockNumber=this.blocksPerPage-1);case 11:for(e=[],n=0;n<this.blocksPerPage;n++)e.push({jsonrpc:"2.0",method:"eth_getBlockByNumber",params:["0x"+(this.lastBlockNumber-n).toString(16),!0],id:n});fetch(this.$parent.web3js._provider.host,{method:"POST",headers:{"Content-Type":"application/json"},body:C()(e)}).then(function(t){return t.json()}).then(function(t){return t.sort(function(t,e){return t.id-e.id})}).then(function(t){a.blocks=t.map(function(t){return t.result}).map(a.$parent.web3js.extend.formatters.outputBlockFormatter),a.transactions=a.blocks.reduce(function(t,e){return t.concat(e.transactions)},[])});case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),prevBlocks:function(){this.autoUpdate=!1,this.lastBlockNumber=this.lastBlockNumber-this.blocksPerPage,this.getBlocks()},nextBlocks:function(){this.autoUpdate=!1,this.lastBlockNumber=this.lastBlockNumber+this.blocksPerPage,this.getBlocks()}}},N=y,B=Object(m["a"])(N,g,j,!1,null,null,null),x=B.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"block-container"}},[n("div",{staticClass:"section-title"},[n("h3",[t._v("Block")]),t.block?t._e():n("div",{attrs:{id:"block-standin"}},[n("p",[t._v("(Retrieving block...)")])])]),n("div",{staticClass:"table-container table-responsive"},[t.block?n("table",{staticClass:"table table-striped",attrs:{id:"block"}},[n("tbody",t._l(t.block,function(e,a){return n("tr",{key:a},[n("td",[t._v("\n          "+t._s(a)+"\n        ")]),n("td",{staticClass:"word-break"},["timestamp"===a?n("span",[t._v(t._s(t._f("datetime")(e)))]):"transactions"===a?n("span",t._l(e,function(e){return n("span",{key:e},[n("router-link",{attrs:{to:"/tx/"+e}},[t._v(t._s(e))])],1)}),0):n("span",[t._v(t._s(e))])])])}),0)]):t._e()])])},E=[],O={name:"Block",data:function(){return{block:null}},beforeRouteEnter:function(t,e,n){n(function(t){t.getBlock(t.$route.params.id,!0)})},methods:{getBlock:function(t){var e=this;this.$parent.web3js.eth.getBlock(t).then(function(t){e.block=t})}}},R=O,D=Object(m["a"])(R,P,E,!1,null,null,null),T=D.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"transaction-container"}},[n("div",{staticClass:"section-title"},[n("h3",[t._v("Transaction")]),t.transaction?t._e():n("div",{attrs:{id:"transaction-standin"}},[n("p",[t._v("(Retrieving transaction...)")])])]),n("div",{staticClass:"table-container table-responsive"},[t.transaction?n("table",{staticClass:"table table-striped",attrs:{id:"transaction"}},[n("tbody",t._l(t.transaction,function(e,a){return n("tr",{key:a},[n("td",[n("b",[t._v("\n            "+t._s(a)+"\n          ")])]),n("td",{staticClass:"word-break"},["from"===a||"to"===a?n("span",[n("router-link",{attrs:{to:"/address/"+e}},[t._v(t._s(e))])],1):"blockHash"===a?n("span",[n("router-link",{attrs:{to:"/block/"+e}},[t._v(t._s(e))])],1):n("span",[t._v(t._s(e))])])])}),0)]):t._e()]),n("div",{staticClass:"section-title"},[n("h3",[t._v("Receipt")]),t.receipt?t._e():n("div",{attrs:{id:"receipt-standin"}},[n("p",[t._v("(Retrieving receipt...)")])])]),n("div",{staticClass:"table-container table-responsive"},[t.receipt?n("table",{staticClass:"table table-striped",attrs:{id:"receipt"}},[n("tbody",t._l(t.receipt,function(e,a){return n("tr",{key:a},[n("td",[n("b",[t._v("\n            "+t._s(a)+"\n          ")])]),n("td",{staticClass:"word-break"},[t._v("\n          "+t._s(e)+"\n        ")])])}),0)]):t._e()]),n("div",{staticClass:"section-title"},[n("h3",[t._v("Decoded Input")]),t.decodedInput?t._e():n("div",{attrs:{id:"decoded-input-standin"}},[n("p",[t._v("(Not available...)")])])]),n("div",{staticClass:"table-container table-responsive"},[t.decodedInput?n("table",{staticClass:"table table-striped",attrs:{id:"decoded-input"}},[n("tbody",t._l(t.decodedInput,function(e,a){return n("tr",{key:a},[n("td",[n("b",[t._v("\n            "+t._s(a)+"\n          ")])]),n("td",{staticClass:"word-break"},[t._v("\n          "+t._s(t.format(a,e))+"\n        ")])])}),0)]):t._e()]),n("div",{staticClass:"section-title"},[n("h3",[t._v("Decoded Events")]),t.decodedEvents?t._e():n("div",{attrs:{id:"decoded-events-standin"}},[n("p",[t._v("(Not available...)")])])]),n("div",t._l(t.decodedEvents,function(e,a){return n("div",{key:a,staticClass:"table-container table-responsive"},[n("table",{staticClass:"table table-striped",attrs:{id:"decoded-event"}},[n("tbody",t._l(e,function(e,a){return n("tr",{key:a},[n("td",[t._v("\n            "+t._s(a)+"\n          ")]),n("td",{staticClass:"word-break"},[t._v("\n            "+t._s(e)+"\n          ")])])}),0)])])}),0),t.isPrivate&&!t.deleted?n("button",{staticClass:"btn btn-success btn-lg",on:{click:function(e){return t.deleteData()}}},[t._v("Delete data")]):t._e()])},S=[],A=n("0a0d"),U=n.n(A),F=(n("f559"),{data:function(){return{abi:null}},methods:{loadAbi:function(t){var e=this;fetch("".concat("/","abi/").concat(t.toLowerCase(),".json")).then(function(t){return t.json()}).then(function(t){e.abi=t.map(function(t){switch(t.type){case"function":t.signature=e.$parent.web3js.eth.abi.encodeFunctionSignature(t);break;case"event":t.signature=e.$parent.web3js.eth.abi.encodeEventSignature(t);break}return t.result=null,t})})}}}),I={name:"Transaction",mixins:[F],data:function(){return{isPrivate:!1,deleted:!1,transaction:null,receipt:null,abi:null,decodedInput:null,decodedEvents:null}},beforeRouteEnter:function(t,e,n){n(function(t){t.getTransaction(t.$route.params.id),t.getReceipt(t.$route.params.id)})},watch:{transaction:function(){this.getAbi()},abi:function(){this.decode()}},methods:{getTransaction:function(t){var e=this;this.$parent.web3js.eth.getTransaction(t).then(function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n){t.next=4;break}return $(".alert-danger > .message").text("Transaction not found"),$(".alert-danger").show(),t.abrupt("return");case 4:if("0x25"!==n.v&&"0x26"!==n.v||(e.isPrivate=!0),!e.isPrivate){t.next=9;break}return t.next=8,e.$parent.web3js.eth.getQuorumPayload(n.input);case 8:n.input=t.sent;case 9:e.transaction=n,"0x"===e.transaction.input&&(e.deleted=!0,$(".alert-warning > .message").text("Transaction found, but data is deleted"),$(".alert-warning").show());case 11:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())},getReceipt:function(t){var e=this;this.$parent.web3js.eth.getTransactionReceipt(t).then(function(t){e.receipt=t})},getAbi:function(){this.deleted||this.loadAbi(this.transaction.to)},decode:function(){var t=this,e=this.abi.filter(function(e){return t.transaction.input.startsWith(e.signature)})[0],n="0x".concat(this.transaction.input.slice(10)),a=this.$parent.web3js.eth.abi.decodeParameters(e.inputs,n);a.__name=e.name,this.decodedInput=this.$options.filters.cleanDecodedObject(a),this.decodedEvents=this.receipt.logs.map(function(e){var n=t.abi.filter(function(t){return e.topics[0]===t.signature})[0],a=t.$parent.web3js.eth.abi.decodeLog(n.inputs,e.data,e.topics.slice(1));return a.__event=n.name,t.$options.filters.cleanDecodedObject(a)})},deleteData:function(){confirm("Are you sure?")&&fetch("".concat(this.$parent.config.manager,"/rmpld/").concat(this.transaction.hash)).finally(function(){$(".alert-info > .message").text("Data is deleted"),$(".alert-info").show()})},format:function(t,e){return this[t]?this[t](e):e},aday:function(t){return new Date(1e3*t).toLocaleString()},aprice:function(t){return"".concat((t/1e3).toFixed(3)," ct/kWh")},aenergy:function(t){return"".concat((t/1e6).toFixed(6)," kWh")},"atimestamp-definition":function(t){return"\n              ".concat((t/1e9).toFixed(3)," s since 1970\n              (").concat((U()()/1e3-t/1e9).toFixed(3)," s ago\n              or ").concat(new Date(t/1e6).toDateString(),")\n              or did you mean ").concat(new Date(t/1e3).toDateString(),"?\n          ")},atimestamp:function(t){return"0"===t&&(t=1e3*U()()),"\n              ".concat(new Date(t/1e3).toLocaleString(),"\n              (").concat((U()()/1e3-t/1e6).toFixed(0)," s ago)\n          ")},auserID:function(t){return"User with ID ".concat(t)}}},L=I,M=Object(m["a"])(L,z,S,!1,null,null,null),H=M.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"addrss-container"}},[n("div",{staticClass:"section-title"},[n("h3",[t._v("Address: "+t._s(t.$route.params.id))])]),n("div",[n("ul",{staticClass:"nav nav-tabs margin-bottom-xl",attrs:{role:"tablist"}},[t._m(0),t.abi?n("li",{attrs:{role:"presentation"}},[n("a",{attrs:{href:"#events","aria-controls":"events",role:"tab","data-toggle":"tab"}},[t._v("Events")])]):t._e(),t.abi?n("li",{attrs:{role:"presentation"}},[n("a",{attrs:{href:"#read","aria-controls":"read",role:"tab","data-toggle":"tab"}},[t._v("Read")])]):t._e(),t.abi?n("li",{attrs:{role:"presentation"}},[n("a",{attrs:{href:"#write","aria-controls":"write",role:"tab","data-toggle":"tab"}},[t._v("Write")])]):t._e()]),n("div",{staticClass:"tab-content"},[n("div",{staticClass:"tab-pane active",attrs:{role:"tabpanel",id:"info"}},[n("h3",[t._v("Transactions: "+t._s(t.transactionCount))])]),t.abi?n("div",{staticClass:"tab-pane",attrs:{role:"tabpanel",id:"events"}},[n("div",[n("button",{staticClass:"btn btn-default",attrs:{disabled:t.lastBlockNumber===t.lastNetworkBlockNumber},on:{click:function(e){return t.nextBlocks()}}},[t._v("<\n          ")]),t._v("\n          "+t._s(t.lastBlockNumber-t.blocksPerPage+1)+" - "+t._s(t.lastBlockNumber+1)+"\n          "),n("button",{staticClass:"btn btn-default",attrs:{disabled:t.lastBlockNumber===t.blocksPerPage-1},on:{click:function(e){return t.prevBlocks()}}},[t._v(">\n          ")]),t.decodedEvents&&t.decodedEvents.length>0?n("div",t._l(t.decodedEvents,function(e,a){return n("div",{key:a,staticClass:"table-container table-responsive"},[n("table",{staticClass:"table table-striped",attrs:{id:"decoded-event"}},[n("tbody",t._l(e,function(e,a){return n("tr",{key:a},[n("td",[t._v("\n                    "+t._s(a)+"\n                  ")]),n("td",{staticClass:"word-break"},["blockHash"===a?n("span",[n("router-link",{attrs:{to:"/block/"+e}},[t._v(t._s(e))])],1):"transactionHash"===a?n("span",[n("router-link",{attrs:{to:"/tx/"+e}},[t._v(t._s(e))])],1):n("span","returnValues"===a?[t._v("\n                      "+t._s(t._f("cleanDecodedObject")(e))+"\n                    ")]:[t._v(t._s(e))])])])}),0)])])}),0):n("div",[t._v("no events")]),n("button",{staticClass:"btn btn-default",attrs:{disabled:t.lastBlockNumber===t.lastNetworkBlockNumber},on:{click:function(e){return t.nextBlocks()}}},[t._v("<\n          ")]),t._v("\n          "+t._s(t.lastBlockNumber-t.blocksPerPage+1)+" - "+t._s(t.lastBlockNumber+1)+"\n          "),n("button",{staticClass:"btn btn-default",attrs:{disabled:t.lastBlockNumber===t.blocksPerPage-1},on:{click:function(e){return t.prevBlocks()}}},[t._v(">\n          ")])])]):t._e(),t.abi?n("div",{staticClass:"tab-pane",attrs:{role:"tabpanel",id:"read"}},[n("div",{staticClass:"form-inline"},[t._v("\n          Block: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.readBlock,expression:"readBlock"}],staticClass:"form-control",domProps:{value:t.readBlock},on:{input:function(e){e.target.composing||(t.readBlock=e.target.value)}}}),t._l(t.abi.filter(function(t){return t.constant}),function(e,a){return n("div",{key:a,staticClass:"margin-bottom-lg"},[n("div",[t._v(t._s(a+1)+". "+t._s(e.name))]),t._l(e.inputs,function(e,a){return n("div",{key:a,staticClass:"margin-bottom-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"input.value"}],staticClass:"form-control",attrs:{placeholder:e.name},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}}),t._v("\n              "+t._s(e.type)+"\n            ")])}),n("div",{staticClass:"margin-bottom-sm"},[n("button",{staticClass:"btn btn-default",on:{click:function(n){return t.call(e)}}},[t._v("query")])]),n("div",[n("table",{staticClass:"table table-striped",attrs:{id:"decoded-result"}},[n("tbody",t._l(e.result,function(e,a){return n("tr",{key:a},[n("td",[t._v("\n                    "+t._s(a)+"\n                  ")]),n("td",{staticClass:"word-break"},[n("span","timestamp"===a?[t._v(t._s(t._f("datetime")(e)))]:[t._v(t._s(e))])])])}),0)])])],2)})],2)]):t._e(),t.abi?n("div",{staticClass:"tab-pane",attrs:{role:"tabpanel",id:"write"}},[n("div",{staticClass:"form-inline"},[t._v("\n          Private for:\n          "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.privateFor,expression:"privateFor"}],staticClass:"form-control",attrs:{multiple:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.privateFor=e.target.multiple?n:n[0]}}},t._l(t.$parent.availableNodes,function(e){return n("option",{key:e.publicKey,domProps:{value:e.publicKey}},[t._v("\n              "+t._s(e.nodeName)+"\n            ")])}),0),t._l(t.abi.filter(function(t){return!1===t.constant}),function(e,a){return n("div",{key:a,staticClass:"margin-bottom-lg"},[n("div",[t._v(t._s(a+1)+". "+t._s(e.name))]),t._l(e.inputs,function(e,a){return n("div",{key:a,staticClass:"margin-bottom-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"input.value"}],staticClass:"form-control",attrs:{placeholder:e.name},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}}),t._v("\n              "+t._s(e.type)+"\n            ")])}),n("div",{staticClass:"margin-bottom-sm"},[n("button",{staticClass:"btn btn-default",on:{click:function(n){return t.send(e)}}},[t._v("write")])]),n("div",[n("table",{staticClass:"table table-striped",attrs:{id:"result"}},[n("tbody",t._l(e.result,function(e,a){return n("tr",{key:a},[n("td",[t._v("\n                    "+t._s(a)+"\n                  ")]),n("td",{staticClass:"word-break"},[n("span","timestamp"===a?[t._v(t._s(t._f("datetime")(e)))]:[t._v(t._s(e))])])])}),0)])])],2)})],2)]):t._e()])])])},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"active",attrs:{role:"presentation"}},[n("a",{attrs:{href:"#info","aria-controls":"info",role:"tab","data-toggle":"tab"}},[t._v("Info")])])}],Y=n("75fc"),q={name:"Address",mixins:[F],data:function(){return{transactionCount:0,isContract:!1,contract:null,decodedEvents:null,abi:null,readBlock:"latest",lastNetworkBlockNumber:null,lastBlockNumber:null,blocksPerPage:10,autoUpdate:!0,privateFor:[]}},beforeRouteEnter:function(t,e,n){n(function(t){t.getTransactionCount(),t.getCode()})},watch:{isContract:function(){this.getAbi()},abi:function(){this.getEvents()},"$parent.selectedProvider":function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.contract){t.next=2;break}return t.abrupt("return");case 2:return this.contract.setProvider(this.$parent.selectedProvider),t.next=5,this.$parent.web3js.eth.getAccounts();case 5:e=t.sent,this.contract.options.from=e[0];case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},methods:{getTransactionCount:function(){var t=this;this.$parent.web3js.eth.getTransactionCount(this.$route.params.id).then(function(e){t.transactionCount=e})},getCode:function(){var t=this;this.$parent.web3js.eth.getCode(this.$route.params.id).then(function(e){t.isContract="0x"!==e})},getAbi:function(){this.loadAbi(this.$route.params.id)},getEvents:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$parent.web3js.eth.getBlockNumber();case 2:if(this.lastNetworkBlockNumber=t.sent,!this.autoUpdate){t.next=9;break}if(this.lastBlockNumber!==this.lastNetworkBlockNumber){t.next=6;break}return t.abrupt("return");case 6:this.lastBlockNumber=this.lastNetworkBlockNumber,t.next=11;break;case 9:this.lastBlockNumber>=this.lastNetworkBlockNumber&&(this.lastBlockNumber=this.lastNetworkBlockNumber),this.lastBlockNumber<this.blocksPerPage-1&&(this.lastBlockNumber=this.blocksPerPage-1);case 11:return t.next=13,this.$parent.web3js.eth.getAccounts();case 13:e=t.sent,this.contract=new this.$parent.web3js.eth.Contract(this.abi,this.$route.params.id,{from:e[0]}),this.contract.getPastEvents("allEvents",{fromBlock:this.lastBlockNumber-this.blocksPerPage,toBlock:this.lastBlockNumber}).then(function(t){return n.decodedEvents=t});case 16:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),call:function(t){var e,n=this,a=t.inputs.map(function(t){return t.value});(e=this.contract.methods)[t.name].apply(e,Object(Y["a"])(a)).call({},this.readBlock).then(function(e){e=n.$options.filters.cleanDecodedObject(e),t.result=e}).catch(function(){t.result={}})},send:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var n,a,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$parent.web3js.eth.personal.unlockAccount(this.contract.options.from);case 2:a=e.inputs.map(function(t){return t.value}),(n=this.contract.methods)[e.name].apply(n,Object(Y["a"])(a)).send({privateFor:this.privateFor.filter(function(t){return t!==s.$parent.selectedProvider.publicKey})}).then(function(t){e.result=t}).catch(function(t){console.error(t),$(".alert-info > .message").text(t.message),$(".alert-info").show()});case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),prevBlocks:function(){this.autoUpdate=!1,this.lastBlockNumber=this.lastBlockNumber-this.blocksPerPage,this.getEvents()},nextBlocks:function(){this.autoUpdate=!1,this.lastBlockNumber=this.lastBlockNumber+this.blocksPerPage,this.getEvents()}}},Q=q,V=Object(m["a"])(Q,K,W,!1,null,null,null),G=V.exports,J=n("c1df"),X=n.n(J);r["a"].config.productionTip=!1,r["a"].use(i["a"]);var Z=[{path:"/",component:x},{path:"/block/:id",component:T},{path:"/tx/:id",component:H},{path:"/address/:id",component:G}],tt=new i["a"]({routes:Z});tt.afterEach(function(){$(".alert").hide()}),r["a"].filter("datetime",function(t){if(!t)return"";var e=t.toString().length-13;return X()(t/Math.pow(10,e)).format("YYYY-MM-DD HH:mm:ss")}),r["a"].filter("cleanDecodedObject",function(t){return t?(delete t.__length__,s()(t).filter(function(t){return!/^\d+$/.test(t)}).reduce(function(e,n){return e[n]=t[n],e},{})):""}),new r["a"]({router:tt,render:function(t){return t(_)}}).$mount("#app")},6:function(t,e){},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.cecde49c.js.map