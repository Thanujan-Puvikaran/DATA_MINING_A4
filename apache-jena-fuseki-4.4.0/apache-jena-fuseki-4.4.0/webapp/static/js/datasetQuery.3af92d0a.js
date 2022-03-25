(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["datasetQuery"],{"07ac":function(e,t,r){var n=r("23e7"),i=r("6f53").values;n({target:"Object",stat:!0},{values:function(e){return i(e)}})},2532:function(e,t,r){"use strict";var n=r("23e7"),i=r("e330"),o=r("5a34"),a=r("1d80"),s=r("577e"),l=r("ab13"),u=i("".indexOf);n({target:"String",proto:!0,forced:!l("includes")},{includes:function(e){return!!~u(s(a(this)),s(o(e)),arguments.length>1?arguments[1]:void 0)}})},"2de2":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-row",{staticClass:"mt-4"},[r("b-col",{attrs:{cols:"12"}},[r("h2",[e._v("/"+e._s(this.datasetName))]),r("b-card",{attrs:{"no-body":""}},[r("b-card-header",{attrs:{"header-tag":"nav"}},[r("Menu",{attrs:{"dataset-name":e.datasetName}})],1),r("b-card-body",[r("b-card-title",[e._v("SPARQL Query")]),r("p",[e._v("To try out some SPARQL queries against the selected dataset, enter your query here.")]),r("div",[r("b-row",[r("b-col",[r("b-form-group",{attrs:{label:"Example Queries"}},e._l(e.queries,(function(t){return r("b-badge",{key:t.text,staticClass:"p-2 mr-2",attrs:{variant:"info",href:"#"},on:{click:function(r){return e.setQuery(t.value)}}},[e._v(e._s(t.text))])})),1)],1),r("b-col",[r("b-form-group",{attrs:{label:"Prefixes"}},e._l(e.prefixes,(function(t){return r("b-badge",{key:t.uri,staticClass:"p-2 mr-2",attrs:{variant:e.getPrefixBadgeVariant(t),href:"#"},on:{"!click":function(r){return e.togglePrefix(t)}}},[e._v(e._s(t.text))])})),1)],1)],1),r("b-row",[r("b-col",{attrs:{sm:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Content Type (SELECT)","label-cols":"6"}},[r("b-form-select",{attrs:{options:e.contentTypeSelectOptions},on:{change:e.onYasqeOptionsChange},model:{value:e.contentTypeSelect,callback:function(t){e.contentTypeSelect=t},expression:"contentTypeSelect"}})],1)],1),r("b-col",{attrs:{sm:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Content Type (GRAPH)","label-cols":"6"}},[r("b-form-select",{attrs:{options:e.contentTypeGraphOptions},on:{change:e.onYasqeOptionsChange},model:{value:e.contentTypeGraph,callback:function(t){e.contentTypeGraph=t},expression:"contentTypeGraph"}})],1)],1)],1)],1),r("div",[e.loading?r("b-spinner"):e._e(),r("b-row",[r("b-col",{attrs:{sm:"12"}},[r("div",{attrs:{id:"yasqe"}})]),r("b-col",{attrs:{sm:"12"}},[r("div",{attrs:{id:"yasr"}})])],1)],1)],1)],1)],1)],1)],1)},i=[];function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("caad6"),r("2532"),r("07ac"),r("a434");var a=r("3906"),s=r("f727"),l=r.n(s),u=r("8ef0"),c=r.n(u);function p(){var e="/home/afs/ASF/Release/jena/target/checkout/jena-fuseki2/jena-fuseki-ui/src/views/dataset/Query.vue",t="0744b036527cac47c2b6b07e14224962c806315b",r=new Function("return this")(),n="__coverage__",i={path:"/home/afs/ASF/Release/jena/target/checkout/jena-fuseki2/jena-fuseki-ui/src/views/dataset/Query.vue",statementMap:{0:{start:{line:113,column:29},end:{line:117,column:9}},1:{start:{line:119,column:29},end:{line:128,column:9}},2:{start:{line:145,column:4},end:{line:180,column:5}},3:{start:{line:184,column:4},end:{line:216,column:6}},4:{start:{line:185,column:6},end:{line:215,column:13}},5:{start:{line:186,column:19},end:{line:186,column:23}},6:{start:{line:188,column:8},end:{line:195,column:9}},7:{start:{line:198,column:8},end:{line:207,column:9}},8:{start:{line:208,column:8},end:{line:211,column:10}},9:{start:{line:209,column:10},end:{line:209,column:30}},10:{start:{line:210,column:10},end:{line:210,column:49}},11:{start:{line:212,column:8},end:{line:212,column:35}},12:{start:{line:213,column:8},end:{line:213,column:32}},13:{start:{line:214,column:8},end:{line:214,column:28}},14:{start:{line:220,column:4},end:{line:220,column:10}},15:{start:{line:225,column:6},end:{line:225,column:82}},16:{start:{line:226,column:6},end:{line:226,column:80}},17:{start:{line:229,column:6},end:{line:229,column:32}},18:{start:{line:230,column:6},end:{line:230,column:30}},19:{start:{line:233,column:6},end:{line:235,column:7}},20:{start:{line:234,column:8},end:{line:234,column:24}},21:{start:{line:236,column:6},end:{line:236,column:20}},22:{start:{line:239,column:23},end:{line:239,column:56}},23:{start:{line:240,column:6},end:{line:240,column:36}},24:{start:{line:241,column:6},end:{line:243,column:7}},25:{start:{line:242,column:8},end:{line:242,column:43}},26:{start:{line:246,column:24},end:{line:248,column:7}},27:{start:{line:249,column:6},end:{line:255,column:7}},28:{start:{line:250,column:8},end:{line:250,column:44}},29:{start:{line:251,column:8},end:{line:251,column:90}},30:{start:{line:253,column:8},end:{line:253,column:41}},31:{start:{line:254,column:8},end:{line:254,column:50}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:144,column:2},end:{line:144,column:3}},loc:{start:{line:144,column:10},end:{line:181,column:3}},line:144},1:{name:"(anonymous_1)",decl:{start:{line:183,column:2},end:{line:183,column:3}},loc:{start:{line:183,column:13},end:{line:217,column:3}},line:183},2:{name:"(anonymous_2)",decl:{start:{line:184,column:19},end:{line:184,column:20}},loc:{start:{line:184,column:25},end:{line:216,column:5}},line:184},3:{name:"(anonymous_3)",decl:{start:{line:185,column:17},end:{line:185,column:18}},loc:{start:{line:185,column:23},end:{line:215,column:7}},line:185},4:{name:"(anonymous_4)",decl:{start:{line:208,column:37},end:{line:208,column:38}},loc:{start:{line:208,column:68},end:{line:211,column:9}},line:208},5:{name:"(anonymous_5)",decl:{start:{line:219,column:2},end:{line:219,column:3}},loc:{start:{line:219,column:36},end:{line:221,column:3}},line:219},6:{name:"(anonymous_6)",decl:{start:{line:224,column:4},end:{line:224,column:5}},loc:{start:{line:224,column:28},end:{line:227,column:5}},line:224},7:{name:"(anonymous_7)",decl:{start:{line:228,column:4},end:{line:228,column:5}},loc:{start:{line:228,column:21},end:{line:231,column:5}},line:228},8:{name:"(anonymous_8)",decl:{start:{line:232,column:4},end:{line:232,column:5}},loc:{start:{line:232,column:35},end:{line:237,column:5}},line:232},9:{name:"(anonymous_9)",decl:{start:{line:238,column:4},end:{line:238,column:5}},loc:{start:{line:238,column:25},end:{line:244,column:5}},line:238},10:{name:"(anonymous_10)",decl:{start:{line:245,column:4},end:{line:245,column:5}},loc:{start:{line:245,column:26},end:{line:256,column:5}},line:245}},branchMap:{0:{loc:{start:{line:233,column:6},end:{line:235,column:7}},type:"if",locations:[{start:{line:233,column:6},end:{line:235,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:233},1:{loc:{start:{line:249,column:6},end:{line:255,column:7}},type:"if",locations:[{start:{line:249,column:6},end:{line:255,column:7}},{start:{line:252,column:13},end:{line:255,column:7}}],line:249}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,sources:["Query.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4GA;AACA;AACA;;AAEA;AACA;AACA;AACA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA",file:"Query.vue",sourceRoot:"src/views/dataset",sourcesContent:['\x3c!--\n   Licensed to the Apache Software Foundation (ASF) under one or more\n   contributor license agreements.  See the NOTICE file distributed with\n   this work for additional information regarding copyright ownership.\n   The ASF licenses this file to You under the Apache License, Version 2.0\n   (the "License"); you may not use this file except in compliance with\n   the License.  You may obtain a copy of the License at\n\n       http://www.apache.org/licenses/LICENSE-2.0\n\n   Unless required by applicable law or agreed to in writing, software\n   distributed under the License is distributed on an "AS IS" BASIS,\n   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n   See the License for the specific language governing permissions and\n   limitations under the License.\n--\x3e\n\n<template>\n  <b-container fluid>\n    <b-row class="mt-4">\n      <b-col cols="12">\n        <h2>/{{ this.datasetName }}</h2>\n        <b-card no-body>\n          <b-card-header header-tag="nav">\n            <Menu :dataset-name="datasetName" />\n          </b-card-header>\n          <b-card-body>\n            <b-card-title>SPARQL Query</b-card-title>\n            <p>To try out some SPARQL queries against the selected dataset, enter your query here.</p>\n            <div>\n              <b-row>\n                <b-col>\n                  <b-form-group\n                    label="Example Queries"\n                  >\n                    <b-badge\n                      v-for="query of queries"\n                      :key="query.text"\n                      variant="info"\n                      class="p-2 mr-2"\n                      href="#"\n                      @click="setQuery(query.value)"\n                    >{{ query.text }}</b-badge>\n                  </b-form-group>\n                </b-col>\n                <b-col>\n                  <b-form-group\n                    label="Prefixes"\n                  >\n                    <b-badge\n                      v-for="prefix of prefixes"\n                      :key="prefix.uri"\n                      :variant="getPrefixBadgeVariant(prefix)"\n                      class="p-2 mr-2"\n                      href="#"\n                      @click.capture="togglePrefix(prefix)"\n                    >{{ prefix.text }}</b-badge>\n                  </b-form-group>\n                </b-col>\n              </b-row>\n              <b-row>\n                <b-col sm="12" md="6">\n                  <b-form-group\n                    label="Content Type (SELECT)"\n                    label-cols="6"\n                  >\n                    <b-form-select\n                      :options="contentTypeSelectOptions"\n                      v-model="contentTypeSelect"\n                      @change="onYasqeOptionsChange"\n                    ></b-form-select>\n                  </b-form-group>\n                </b-col>\n                <b-col sm="12" md="6">\n                  <b-form-group\n                    label="Content Type (GRAPH)"\n                    label-cols="6"\n                  >\n                    <b-form-select\n                      :options="contentTypeGraphOptions"\n                      v-model="contentTypeGraph"\n                      @change="onYasqeOptionsChange"\n                    ></b-form-select>\n                  </b-form-group>\n                </b-col>\n              </b-row>\n            </div>\n            \x3c!-- This div cannot use v-if or v-show, as YASQE/YASR seem to fail to calculate the margins and\n                 paddings if the element is not already rendered/existing in the DOM? --\x3e\n            <div>\n              <b-spinner v-if="loading"></b-spinner>\n              <b-row>\n                <b-col sm="12">\n                  <div id="yasqe"></div>\n                </b-col>\n                <b-col sm="12">\n                  <div id="yasr"></div>\n                </b-col>\n              </b-row>\n            </div>\n          </b-card-body>\n        </b-card>\n      </b-col>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport Menu from \'@/components/dataset/Menu\'\nimport Yasqe from \'@triply/yasqe\'\nimport Yasr from \'@triply/yasr\'\n\nconst SELECT_TRIPLES_QUERY = `SELECT ?subject ?predicate ?object\nWHERE {\n  ?subject ?predicate ?object\n}\nLIMIT 25`\n\nconst SELECT_CLASSES_QUERY = `PREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?class ?label ?description\nWHERE {\n  ?class a owl:Class.\n  OPTIONAL { ?class rdfs:label ?label}\n  OPTIONAL { ?class rdfs:comment ?description}\n}\nLIMIT 25`\n\nexport default {\n  name: \'DatasetQuery\',\n\n  components: {\n    Menu\n  },\n\n  props: {\n    datasetName: {\n      type: String,\n      required: true\n    }\n  },\n\n  data () {\n    return {\n      loading: true,\n      yasqe: null,\n      yasr: null,\n      contentTypeSelect: \'application/sparql-results+json\',\n      contentTypeSelectOptions: [\n        { value: \'application/sparql-results+json\', text: \'JSON\' },\n        { value: \'application/sparql-results+xml\', text: \'XML\' },\n        { value: \'text/csv\', text: \'CSV\' },\n        { value: \'text/tab-separated-values\', text: \'TSV\' }\n      ],\n      contentTypeGraph: \'text/turtle\',\n      contentTypeGraphOptions: [\n        { value: \'text/turtle\', text: \'Turtle\' },\n        { value: \'application/ld+json\', text: \'JSON-LD\' },\n        { value: \'application/n-triples\', text: \'N-Triples\' },\n        { value: \'application/rdf+xml\', text: \'XML\' }\n      ],\n      queries: [\n        {\n          value: SELECT_TRIPLES_QUERY,\n          text: \'Selection of triples\'\n        },\n        {\n          value: SELECT_CLASSES_QUERY,\n          text: \'Selection of classes\'\n        }\n      ],\n      prefixes: [\n        { uri: \'http://www.w3.org/1999/02/22-rdf-syntax-ns#\', text: \'rdf\' },\n        { uri: \'http://www.w3.org/2000/01/rdf-schema#\', text: \'rdfs\' },\n        { uri: \'http://www.w3.org/2002/07/owl#\', text: \'owl\' },\n        { uri: \'http://www.w3.org/2001/XMLSchema#\', text: \'xsd\' }\n      ],\n      currentQueryPrefixes: []\n    }\n  },\n\n  created () {\n    this.$nextTick(() => {\n      setTimeout(() => {\n        const vm = this\n        // results area\n        vm.yasr = new Yasr(\n          document.getElementById(\'yasr\'),\n          {\n            // we do not want to save the results, otherwise we will have query results showing in different\n            // dataset views\n            persistenceId: null\n          }\n        )\n        // query editor\n        // NOTE: the full screen functionality was removed from YASQE: https://github.com/Triply-Dev/YASGUI.YASQE-deprecated/issues/139#issuecomment-573656137\n        vm.yasqe = new Yasqe(\n          document.getElementById(\'yasqe\'),\n          {\n            showQueryButton: true,\n            resizeable: false,\n            requestConfig: {\n              endpoint: this.$fusekiService.getFusekiUrl(`/${vm.datasetName}/sparql`)\n            }\n          }\n        )\n        vm.yasqe.on(\'queryResponse\', (yasqe, response, duration) => {\n          vm.yasqe.saveQuery()\n          vm.yasr.setResponse(response, duration)\n        })\n        this.onYasqeOptionsChange()\n        this.syncYasqePrefixes()\n        this.loading = false\n      }, 300)\n    })\n  },\n\n  beforeRouteLeave (to, from, next) {\n    next()\n  },\n\n  methods: {\n    onYasqeOptionsChange () {\n      this.yasqe.options.requestConfig.acceptHeaderSelect = this.contentTypeSelect\n      this.yasqe.options.requestConfig.acceptHeaderGraph = this.contentTypeGraph\n    },\n    setQuery (query) {\n      this.yasqe.setValue(query)\n      this.syncYasqePrefixes()\n    },\n    getPrefixBadgeVariant (prefix) {\n      if (this.currentQueryPrefixes.includes(prefix.uri)) {\n        return \'primary\'\n      }\n      return \'light\'\n    },\n    syncYasqePrefixes () {\n      const prefixes = this.yasqe.getPrefixesFromQuery()\n      this.currentQueryPrefixes = []\n      for (const uri of Object.values(prefixes)) {\n        this.currentQueryPrefixes.push(uri)\n      }\n    },\n    togglePrefix (prefix) {\n      const newPrefix = {\n        [prefix.text]: prefix.uri\n      }\n      if (this.currentQueryPrefixes.includes(prefix.uri)) {\n        this.yasqe.removePrefixes(newPrefix)\n        this.currentQueryPrefixes.splice(this.currentQueryPrefixes.indexOf(prefix.uri), 1)\n      } else {\n        this.yasqe.addPrefixes(newPrefix)\n        this.currentQueryPrefixes.push(prefix.uri)\n      }\n    }\n  }\n}\n<\/script>\n\n<style lang="scss">\n@import \'~@triply/yasqe/build/yasqe.min.css\';\n@import \'~@triply/yasr/build/yasr.min.css\';\n\n// N.B: these were copied from an old release of YASR due to this\n//      change: https://github.com/TriplyDB/Yasgui/commit/19521998f035e718d3f1d5cfa6073ce2e34242e7\n//      for more: https://github.com/apache/jena/pull/1153\n.yasr table.dataTable {\n  border: 1px solid rgb(217, 217, 217);\n  border-image-source: initial;\n  border-image-slice: initial;\n  border-image-repeat: initial;\n  tbody {\n    tr {\n      td {\n        border-top: 1px solid #ddd;\n      }\n      &:last-of-type {\n        td {\n          border-bottom: 1px solid #ddd;\n        }\n      }\n      &:nth-child(even) {\n        background-color: #f9f9f9;\n      }\n    }\n  }\n}\n</style>\n']},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0744b036527cac47c2b6b07e14224962c806315b"},o=r[n]||(r[n]={});o[e]&&o[e].hash===t||(o[e]=i);var a=o[e];return p=function(){return a},a}p();var f=(p().s[0]++,"SELECT ?subject ?predicate ?object\nWHERE {\n  ?subject ?predicate ?object\n}\nLIMIT 25"),h=(p().s[1]++,"PREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?class ?label ?description\nWHERE {\n  ?class a owl:Class.\n  OPTIONAL { ?class rdfs:label ?label}\n  OPTIONAL { ?class rdfs:comment ?description}\n}\nLIMIT 25"),d={name:"DatasetQuery",components:{Menu:a["a"]},props:{datasetName:{type:String,required:!0}},data:function(){return p().f[0]++,p().s[2]++,{loading:!0,yasqe:null,yasr:null,contentTypeSelect:"application/sparql-results+json",contentTypeSelectOptions:[{value:"application/sparql-results+json",text:"JSON"},{value:"application/sparql-results+xml",text:"XML"},{value:"text/csv",text:"CSV"},{value:"text/tab-separated-values",text:"TSV"}],contentTypeGraph:"text/turtle",contentTypeGraphOptions:[{value:"text/turtle",text:"Turtle"},{value:"application/ld+json",text:"JSON-LD"},{value:"application/n-triples",text:"N-Triples"},{value:"application/rdf+xml",text:"XML"}],queries:[{value:f,text:"Selection of triples"},{value:h,text:"Selection of classes"}],prefixes:[{uri:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",text:"rdf"},{uri:"http://www.w3.org/2000/01/rdf-schema#",text:"rdfs"},{uri:"http://www.w3.org/2002/07/owl#",text:"owl"},{uri:"http://www.w3.org/2001/XMLSchema#",text:"xsd"}],currentQueryPrefixes:[]}},created:function(){var e=this;p().f[1]++,p().s[3]++,this.$nextTick((function(){p().f[2]++,p().s[4]++,setTimeout((function(){p().f[3]++;var t=(p().s[5]++,e);p().s[6]++,t.yasr=new c.a(document.getElementById("yasr"),{persistenceId:null}),p().s[7]++,t.yasqe=new l.a(document.getElementById("yasqe"),{showQueryButton:!0,resizeable:!1,requestConfig:{endpoint:e.$fusekiService.getFusekiUrl("/".concat(t.datasetName,"/sparql"))}}),p().s[8]++,t.yasqe.on("queryResponse",(function(e,r,n){p().f[4]++,p().s[9]++,t.yasqe.saveQuery(),p().s[10]++,t.yasr.setResponse(r,n)})),p().s[11]++,e.onYasqeOptionsChange(),p().s[12]++,e.syncYasqePrefixes(),p().s[13]++,e.loading=!1}),300)}))},beforeRouteLeave:function(e,t,r){p().f[5]++,p().s[14]++,r()},methods:{onYasqeOptionsChange:function(){p().f[6]++,p().s[15]++,this.yasqe.options.requestConfig.acceptHeaderSelect=this.contentTypeSelect,p().s[16]++,this.yasqe.options.requestConfig.acceptHeaderGraph=this.contentTypeGraph},setQuery:function(e){p().f[7]++,p().s[17]++,this.yasqe.setValue(e),p().s[18]++,this.syncYasqePrefixes()},getPrefixBadgeVariant:function(e){return p().f[8]++,p().s[19]++,this.currentQueryPrefixes.includes(e.uri)?(p().b[0][0]++,p().s[20]++,"primary"):(p().b[0][1]++,p().s[21]++,"light")},syncYasqePrefixes:function(){p().f[9]++;var e=(p().s[22]++,this.yasqe.getPrefixesFromQuery());p().s[23]++,this.currentQueryPrefixes=[],p().s[24]++;for(var t=0,r=Object.values(e);t<r.length;t++){var n=r[t];p().s[25]++,this.currentQueryPrefixes.push(n)}},togglePrefix:function(e){p().f[10]++;var t=(p().s[26]++,o({},e.text,e.uri));p().s[27]++,this.currentQueryPrefixes.includes(e.uri)?(p().b[1][0]++,p().s[28]++,this.yasqe.removePrefixes(t),p().s[29]++,this.currentQueryPrefixes.splice(this.currentQueryPrefixes.indexOf(e.uri),1)):(p().b[1][1]++,p().s[30]++,this.yasqe.addPrefixes(t),p().s[31]++,this.currentQueryPrefixes.push(e.uri))}}},g=d,v=(r("6d59"),r("2877")),m=Object(v["a"])(g,n,i,!1,null,null,null);t["default"]=m.exports},3906:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-nav",{attrs:{"card-header":"",tabs:""}},[r("b-nav-item",{attrs:{to:"/dataset/"+this.datasetName+"/query","active-class":"active"}},[r("FontAwesomeIcon",{attrs:{icon:"question-circle"}}),r("span",{staticClass:"ml-1"},[e._v("query")])],1),r("b-nav-item",{attrs:{to:"/dataset/"+this.datasetName+"/upload","active-class":"active"}},[r("FontAwesomeIcon",{attrs:{icon:"upload"}}),r("span",{staticClass:"ml-1"},[e._v("add data")])],1),r("b-nav-item",{attrs:{to:"/dataset/"+this.datasetName+"/edit","active-class":"active"}},[r("FontAwesomeIcon",{attrs:{icon:"edit"}}),r("span",{staticClass:"ml-1"},[e._v("edit")])],1),r("b-nav-item",{attrs:{to:"/dataset/"+this.datasetName+"/info","active-class":"active"}},[r("FontAwesomeIcon",{attrs:{icon:"tachometer-alt"}}),r("span",{staticClass:"ml-1"},[e._v("info")])],1)],1)},i=[],o=r("ecee"),a=r("c074"),s=r("ad3d");function l(){var e="/home/afs/ASF/Release/jena/target/checkout/jena-fuseki2/jena-fuseki-ui/src/components/dataset/Menu.vue",t="9bbe771379993852b16557c822de7f81bc697f54",r=new Function("return this")(),n="__coverage__",i={path:"/home/afs/ASF/Release/jena/target/checkout/jena-fuseki2/jena-fuseki-ui/src/components/dataset/Menu.vue",statementMap:{0:{start:{line:56,column:0},end:{line:56,column:64}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},inputSourceMap:{version:3,sources:["Menu.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmDA;AACA;AACA;;AAEA;;AAEA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;AACA;AACA",file:"Menu.vue",sourceRoot:"src/components/dataset",sourcesContent:['\x3c!--\n   Licensed to the Apache Software Foundation (ASF) under one or more\n   contributor license agreements.  See the NOTICE file distributed with\n   this work for additional information regarding copyright ownership.\n   The ASF licenses this file to You under the Apache License, Version 2.0\n   (the "License"); you may not use this file except in compliance with\n   the License.  You may obtain a copy of the License at\n\n       http://www.apache.org/licenses/LICENSE-2.0\n\n   Unless required by applicable law or agreed to in writing, software\n   distributed under the License is distributed on an "AS IS" BASIS,\n   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n   See the License for the specific language governing permissions and\n   limitations under the License.\n--\x3e\n\n<template>\n  <b-nav card-header tabs>\n    <b-nav-item\n      :to="`/dataset/${this.datasetName}/query`"\n      active-class="active"\n    >\n      <FontAwesomeIcon icon="question-circle" />\n      <span class="ml-1">query</span>\n    </b-nav-item>\n    <b-nav-item\n      :to="`/dataset/${this.datasetName}/upload`"\n      active-class="active"\n    >\n      <FontAwesomeIcon icon="upload" />\n      <span class="ml-1">add data</span>\n    </b-nav-item>\n    <b-nav-item\n      :to="`/dataset/${this.datasetName}/edit`"\n      active-class="active"\n    >\n      <FontAwesomeIcon icon="edit" />\n      <span class="ml-1">edit</span>\n    </b-nav-item>\n    <b-nav-item\n      :to="`/dataset/${this.datasetName}/info`"\n      active-class="active"\n    >\n      <FontAwesomeIcon icon="tachometer-alt" />\n      <span class="ml-1">info</span>\n    </b-nav-item>\n  </b-nav>\n</template>\n\n<script>\nimport { library } from \'@fortawesome/fontawesome-svg-core\'\nimport { faQuestionCircle, faUpload, faTachometerAlt, faEdit } from \'@fortawesome/free-solid-svg-icons\'\nimport { FontAwesomeIcon } from \'@fortawesome/vue-fontawesome\'\n\nlibrary.add(faQuestionCircle, faUpload, faTachometerAlt, faEdit)\n\nexport default {\n  name: \'DatasetMenu\',\n\n  props: {\n    datasetName: {\n      type: String,\n      required: true\n    }\n  },\n\n  components: {\n    FontAwesomeIcon\n  }\n}\n<\/script>\n']},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9bbe771379993852b16557c822de7f81bc697f54"},o=r[n]||(r[n]={});o[e]&&o[e].hash===t||(o[e]=i);var a=o[e];return l=function(){return a},a}l(),l().s[0]++,o["c"].add(a["j"],a["o"],a["k"],a["e"]);var u={name:"DatasetMenu",props:{datasetName:{type:String,required:!0}},components:{FontAwesomeIcon:s["a"]}},c=u,p=r("2877"),f=Object(p["a"])(c,n,i,!1,null,null,null);t["a"]=f.exports},"44e7":function(e,t,r){var n=r("861d"),i=r("c6b6"),o=r("b622"),a=o("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},"5a34":function(e,t,r){var n=r("da84"),i=r("44e7"),o=n.TypeError;e.exports=function(e){if(i(e))throw o("The method doesn't accept regular expressions");return e}},"6d59":function(e,t,r){"use strict";r("9124")},"6f53":function(e,t,r){var n=r("83ab"),i=r("e330"),o=r("df75"),a=r("fc6a"),s=r("d1e7").f,l=i(s),u=i([].push),c=function(e){return function(t){var r,i=a(t),s=o(i),c=s.length,p=0,f=[];while(c>p)r=s[p++],n&&!l(i,r)||u(f,e?[r,i[r]]:i[r]);return f}};e.exports={entries:c(!0),values:c(!1)}},"8ef0":function(module,exports,__webpack_require__){
/*! For license information please see yasr.min.js.LICENSE.txt */
//# sourceMappingURL=datasetQuery.3af92d0a.js.map