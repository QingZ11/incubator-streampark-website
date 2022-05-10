"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[630],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=o(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),i=n(2389),s=n(9443);var l=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3616),o=n(6010),u="tabItem_vU9c";function p(e){var t,n,i,s=e.lazy,p=e.block,d=e.defaultValue,m=e.values,h=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,c.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),S=y.tabGroupChoices,E=y.setTabGroupChoices,b=(0,r.useState)(x),C=b[0],w=b[1],N=[],R=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var T=S[h];null!=T&&T!==C&&v.some((function(e){return e.value===T}))&&w(T)}var H=function(e){var t=e.currentTarget,n=N.indexOf(t),a=v[n].value;a!==C&&(R(t),w(a),null!=h&&E(h,a))},F=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.currentTarget)+1;n=N[a]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.currentTarget)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return N.push(e)},onKeyDown:F,onFocus:H,onClick:H},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},4565:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=n(6396),l=n(8215),c=["components"],o={id:"Elasticsearch-Connector",title:"Elasticsearch Connector",sidebar_position:4},u=void 0,p={unversionedId:"connector/Elasticsearch-Connector",id:"connector/Elasticsearch-Connector",title:"Elasticsearch Connector",description:"Elasticsearch \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u3001RESTful \u98ce\u683c\u7684\u641c\u7d22\u548c\u6570\u636e\u5206\u6790\u5f15\u64ce\u3002",source:"@site/docs/connector/es.md",sourceDirName:"connector",slug:"/connector/Elasticsearch-Connector",permalink:"/zh-CN/docs/connector/Elasticsearch-Connector",editUrl:"https://github.com/streamxhub/streamx-website/edit/dev/docs/connector/es.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"Elasticsearch-Connector",title:"Elasticsearch Connector",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Doris Connector",permalink:"/zh-CN/docs/connector/Doris-Connector"},next:{title:"Http Connector",permalink:"/zh-CN/docs/connector/Http-Connector"}},d=[{value:"elastic\u5199\u5165\u4f9d\u8d56",id:"elastic\u5199\u5165\u4f9d\u8d56",children:[],level:2},{value:"\u57fa\u4e8e\u5b98\u7f51\u7684Elasticsearch\u5199\u5165\u6570\u636e",id:"\u57fa\u4e8e\u5b98\u7f51\u7684elasticsearch\u5199\u5165\u6570\u636e",children:[],level:2},{value:"StreamX \u5199\u5165 Elasticsearch",id:"streamx-\u5199\u5165-elasticsearch",children:[{value:"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",children:[],level:3},{value:"2. \u5199\u5165Elasticsearch",id:"2-\u5199\u5165elasticsearch",children:[],level:3}],level:2},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",children:[{value:"\u5904\u7406\u5931\u8d25\u7684 Elasticsearch \u8bf7\u6c42",id:"\u5904\u7406\u5931\u8d25\u7684-elasticsearch-\u8bf7\u6c42",children:[],level:3},{value:"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668",id:"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668",children:[],level:3},{value:"StreamX\u914d\u7f6e",id:"streamx\u914d\u7f6e",children:[],level:3}],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/cn/elasticsearch/"},"Elasticsearch")," \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u3001RESTful \u98ce\u683c\u7684\u641c\u7d22\u548c\u6570\u636e\u5206\u6790\u5f15\u64ce\u3002\n",(0,i.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/"},"Flink \u5b98\u65b9"),"\u63d0\u4f9b\u4e86",(0,i.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/"},"Elasticsearch"),"\u7684\u8fde\u63a5\u5668,\u7528\u4e8e\u5411 elasticsearch \u4e2d\u5199\u5165\u6570\u636e,\u53ef\u63d0\u4f9b ",(0,i.kt)("strong",{parentName:"p"},"\u81f3\u5c11\u4e00\u6b21")," \u7684\u5904\u7406\u8bed\u4e49"),(0,i.kt)("p",null,"ElasticsearchSink \u4f7f\u7528 TransportClient\uff086.x \u4e4b\u524d\uff09\u6216\u8005 RestHighLevelClient\uff086.x \u5f00\u59cb\uff09\u548c Elasticsearch \u96c6\u7fa4\u8fdb\u884c\u901a\u4fe1\uff0c\n",(0,i.kt)("inlineCode",{parentName:"p"},"Streamx"),"\u5bf9 flink-connector-elasticsearch6 \u8fdb\u4e00\u6b65\u5c01\u88c5\uff0c\u5c4f\u853d\u5f00\u53d1\u7ec6\u8282\uff0c\u7b80\u5316Elasticsearch6\u53ca\u4ee5\u4e0a\u7684\u5199\u5165\u64cd\u4f5c\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u56e0\u4e3aFlink Connector Elasticsearch \u4e0d\u540c\u7248\u672c\u4e4b\u95f4\u5b58\u5728\u51b2\u7a81",(0,i.kt)("inlineCode",{parentName:"p"},"Streamx"),"\u6682\u65f6\u4ec5\u652f\u6301Elasticsearch6\u53ca\u4ee5\u4e0a\u7684\u5199\u5165\u64cd\u4f5c\uff0c\u5982\u9700\u5199\u5165Elasticsearch5\u9700\u8981\u4f7f\u7528\u8005\u6392\u9664\nflink-connector-elasticsearch6 \u4f9d\u8d56\uff0c\u5f15\u5165 flink-connector-elasticsearch5\u4f9d\u8d56 \u521b\u5efa\norg.apache.flink.streaming.connectors.elasticsearch5.ElasticsearchSink \u5b9e\u4f8b\u5199\u5165\u6570\u636e\u3002"))),(0,i.kt)("h2",{id:"elastic\u5199\u5165\u4f9d\u8d56"},"elastic\u5199\u5165\u4f9d\u8d56"),(0,i.kt)("p",null,"Elasticsearch\u7248\u672c\u4e0d\u540c\u4f9d\u8d56 Flink Connector Elasticsearch \u4e0d\u901a,\u4ee5\u4e0b\u4fe1\u606f\u6765\u6e90",(0,i.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/connectors/datastream/elasticsearch/"},"flink-docs-release-1.14\u6587\u6863"),":",(0,i.kt)("br",{parentName:"p"}),"\n","es5.x Maven\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-elasticsearch5_2.11</artifactId>\n    <version>1.14.3</version>\n</dependency>\n")),(0,i.kt)("p",null,"es6.x Maven\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-elasticsearch5_2.11</artifactId>\n    <version>1.14.3</version>\n</dependency>\n")),(0,i.kt)("p",null,"es7.x\u53ca\u4ee5\u4e0a Maven\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-elasticsearch5_2.11</artifactId>\n    <version>1.14.3</version>\n</dependency>\n")),(0,i.kt)("h2",{id:"\u57fa\u4e8e\u5b98\u7f51\u7684elasticsearch\u5199\u5165\u6570\u636e"},"\u57fa\u4e8e\u5b98\u7f51\u7684Elasticsearch\u5199\u5165\u6570\u636e"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u6458\u81ea",(0,i.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/#elasticsearch-sink"},"\u5b98\u65b9\u6587\u6863")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java, Elasticsearch 6.x \u53ca\u4ee5\u4e0a",java:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.flink.api.common.functions.RuntimeContext;\nimport org.apache.flink.streaming.api.datastream.DataStream;\nimport org.apache.flink.streaming.connectors.elasticsearch.ElasticsearchSinkFunction;\nimport org.apache.flink.streaming.connectors.elasticsearch.RequestIndexer;\nimport org.apache.flink.streaming.connectors.elasticsearch6.ElasticsearchSink;\n\nimport org.apache.http.HttpHost;\nimport org.elasticsearch.action.index.IndexRequest;\nimport org.elasticsearch.client.Requests;\n\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\nDataStream<String> input = ...;\n\nList<HttpHost> httpHosts = new ArrayList<>();\nhttpHosts.add(new HttpHost("127.0.0.1", 9200, "http"));\nhttpHosts.add(new HttpHost("10.2.3.1", 9200, "http"));\n\n// \u4f7f\u7528 ElasticsearchSink.Builder \u521b\u5efa ElasticsearchSink\nElasticsearchSink.Builder<String> esSinkBuilder = new ElasticsearchSink.Builder<>(\n    httpHosts,\n    new ElasticsearchSinkFunction<String>() {\n        public IndexRequest createIndexRequest(String element) {\n            Map<String, String> json = new HashMap<>();\n            json.put("data", element);\n        \n            return Requests.indexRequest()\n                    .index("my-index")\n                    .type("my-type")\n                    .source(json);\n        }\n        \n        @Override\n        public void process(String element, RuntimeContext ctx, RequestIndexer indexer) {\n            indexer.add(createIndexRequest(element));\n        }\n    }\n);\n\n// \u6279\u91cf\u8bf7\u6c42\u7684\u914d\u7f6e\uff1b\u4e0b\u9762\u7684\u8bbe\u7f6e\u4f7f sink \u5728\u63a5\u6536\u6bcf\u4e2a\u5143\u7d20\u4e4b\u540e\u7acb\u5373\u63d0\u4ea4\uff0c\u5426\u5219\u8fd9\u4e9b\u5143\u7d20\u5c06\u88ab\u7f13\u5b58\u8d77\u6765\nesSinkBuilder.setBulkFlushMaxActions(1);\n\n// \u4e3a\u5185\u90e8\u521b\u5efa\u7684 REST \u5ba2\u6237\u7aef\u63d0\u4f9b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u914d\u7f6e\u4fe1\u606f\u7684 RestClientFactory\nesSinkBuilder.setRestClientFactory(\n  restClientBuilder -> {\n    restClientBuilder.setDefaultHeaders(...)\n    restClientBuilder.setMaxRetryTimeoutMillis(...)\n    restClientBuilder.setPathPrefix(...)\n    restClientBuilder.setHttpClientConfigCallback(...)\n  }\n);\n\n// \u6700\u540e\uff0c\u6784\u5efa\u5e76\u6dfb\u52a0 sink \u5230\u4f5c\u4e1a\u7ba1\u9053\u4e2d\ninput.addSink(esSinkBuilder.build());\n'))),(0,i.kt)(l.Z,{value:"scala, Elasticsearch 6.x \u53ca\u4ee5\u4e0a",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'\nimport org.apache.flink.api.common.functions.RuntimeContext\nimport org.apache.flink.streaming.api.datastream.DataStream\nimport org.apache.flink.streaming.connectors.elasticsearch.ElasticsearchSinkFunction\nimport org.apache.flink.streaming.connectors.elasticsearch.RequestIndexer\nimport org.apache.flink.streaming.connectors.elasticsearch6.ElasticsearchSink\n\nimport org.apache.http.HttpHost\nimport org.elasticsearch.action.index.IndexRequest\nimport org.elasticsearch.client.Requests\n\nimport java.util.ArrayList\nimport java.util.List\n\nval input: DataStream[String] = ...\n\nval httpHosts = new java.util.ArrayList[HttpHost]\nhttpHosts.add(new HttpHost("127.0.0.1", 9200, "http"))\nhttpHosts.add(new HttpHost("10.2.3.1", 9200, "http"))\n\nval esSinkBuilder = new ElasticsearchSink.Builder[String](\n  httpHosts,\n  new ElasticsearchSinkFunction[String] {\n     def process(element: String, ctx: RuntimeContext, indexer: RequestIndexer) {\n          val json = new java.util.HashMap[String, String]\n          json.put("data", element)\n\n          val rqst: IndexRequest = Requests.indexRequest\n            .index("my-index")\n            .`type`("my-type")\n            .source(json)\n\n          indexer.add(rqst)\n     } \n  }\n)\n\n// \u6279\u91cf\u8bf7\u6c42\u7684\u914d\u7f6e\uff1b\u4e0b\u9762\u7684\u8bbe\u7f6e\u4f7f sink \u5728\u63a5\u6536\u6bcf\u4e2a\u5143\u7d20\u4e4b\u540e\u7acb\u5373\u63d0\u4ea4\uff0c\u5426\u5219\u8fd9\u4e9b\u5143\u7d20\u5c06\u88ab\u7f13\u5b58\u8d77\u6765\nesSinkBuilder.setBulkFlushMaxActions(1)\n\n// \u4e3a\u5185\u90e8\u521b\u5efa\u7684 REST \u5ba2\u6237\u7aef\u63d0\u4f9b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u914d\u7f6e\u4fe1\u606f\u7684 RestClientFactory\nesSinkBuilder.setRestClientFactory(new RestClientFactory {\n  override def configureRestClientBuilder(restClientBuilder: RestClientBuilder): Unit = {\n       restClientBuilder.setDefaultHeaders(...)\n       restClientBuilder.setMaxRetryTimeoutMillis(...)\n       restClientBuilder.setPathPrefix(...)\n       restClientBuilder.setHttpClientConfigCallback(...)\n  }\n})\n\n// \u6700\u540e\uff0c\u6784\u5efa\u5e76\u6dfb\u52a0 sink \u5230\u4f5c\u4e1a\u7ba1\u9053\u4e2d\ninput.addSink(esSinkBuilder.build)\n')))),(0,i.kt)("p",null,"\u4ee5\u4e0a\u521b\u5efaElasticsearchSink\u6dfb\u52a0\u53c2\u6570\u975e\u5e38\u7684\u4e0d\u7075\u654f\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"StreamX"),"\u4f7f\u7528\u7ea6\u5b9a\u5927\u4e8e\u914d\u7f6e\u3001\u81ea\u52a8\u914d\u7f6e\u7684\u65b9\u5f0f\u53ea\u9700\u8981\u914d\u7f6ees\n\u8fde\u63a5\u53c2\u6570\u3001flink\u8fd0\u884c\u53c2\u6570\uff0cStreamX \u4f1a\u81ea\u52a8\u7ec4\u88c5source\u548csink\uff0c\u6781\u5927\u7684\u7b80\u5316\u5f00\u53d1\u903b\u8f91\uff0c\u63d0\u5347\u5f00\u53d1\u6548\u7387\u548c\u7ef4\u62a4\u6027\u3002"),(0,i.kt)("h2",{id:"streamx-\u5199\u5165-elasticsearch"},"StreamX \u5199\u5165 Elasticsearch"),(0,i.kt)("p",null,"ESSink \u5728\u542f\u7528 Flink checkpoint \u540e\uff0c\u4fdd\u8bc1\u81f3\u5c11\u4e00\u6b21\u5c06\u64cd\u4f5c\u8bf7\u6c42\u53d1\u9001\u5230 Elasticsearch \u96c6\u7fa4\u3002"),(0,i.kt)("h3",{id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f"},"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#redis sink \u914d\u7f6e\n#  \u5fc5\u586b\u53c2\u6570\uff0c\u591a\u4e2a\u8282\u70b9\u4f7f\u7528 host1:port, host2:port,\nhost: localhost:9200\n#  \u9009\u586b\u53c2\u6570\n#  es:\n#    disableFlushOnCheckpoint: true #\u9ed8\u8ba4\u4e3afalse\n#    auth:\n#    user:\n#      password:\n#    rest:\n#      max.retry.timeout:\n#      path.prefix:\n#      content.type:\n#    connect:\n#      request.timeout:\n#      timeout:\n#    cluster.name: elasticsearch\n#  client.transport.sniff:\n#  bulk.flush.: \n")),(0,i.kt)("h3",{id:"2-\u5199\u5165elasticsearch"},"2. \u5199\u5165Elasticsearch"),(0,i.kt)("p",null,"\u7528 StreamX \u5199\u5165Elasticsearch\u975e\u5e38\u7b80\u5355,\u4ee3\u7801\u5982\u4e0b:"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import com.streamxhub.streamx.flink.core.scala.FlinkStreaming\nimport com.streamxhub.streamx.flink.core.scala.sink.ESSink\nimport com.streamxhub.streamx.flink.core.scala.util.ElasticSearchUtils\nimport org.apache.flink.api.scala._\nimport org.elasticsearch.action.index.IndexRequest\nimport org.json4s.DefaultFormats\nimport org.json4s.jackson.Serialization\n\nimport java.util.Date\n\nobject ConnectorApp extends FlinkStreaming {\n\n\n  implicit lazy val formats: DefaultFormats.type = org.json4s.DefaultFormats\n\n  override def handle(): Unit = {\n    val ds = context.fromCollection(List(\n      OrderEntity(1, 1, 11.3d, 3.1d, new Date()),\n      OrderEntity(2, 1, 12.3d, 3.2d, new Date()),\n      OrderEntity(3, 1, 13.3d, 3.3d, new Date()),\n      OrderEntity(4, 1, 14.3d, 3.4d, new Date()),\n      OrderEntity(5, 1, 15.3d, 7.5d, new Date()),\n      OrderEntity(6, 1, 16.3d, 3.6d, new Date()),\n      OrderEntity(7, 1, 17.3d, 3.7d, new Date())\n    ))\n\n    // es sink.........\n\n    //1)\u5b9a\u4e49 Index\u7684\u5199\u5165\u89c4\u5219\n    implicit def indexReq(x: OrderEntity): IndexRequest = ElasticSearchUtils.indexRequest(\n      "flink_order",\n      "_doc",\n      s"${x.id}_${x.time.getTime}",\n      Serialization.write(x)\n    )\n    //3)\u5b9a\u4e49esSink\u5e76\u4e0b\u6c89=\u6570\u636e. done\n    ESSink().sink6[OrderEntity](ds)\n  }\n\n\n  case class OrderEntity(id: Int, num: Int, price: Double, gmv: Double, time: Date) extends Serializable\n\n}\n')))),(0,i.kt)("p",null,"Flink ElasticsearchSinkFunction\u53ef\u4ee5\u6267\u884c\u591a\u79cd\u7c7b\u578b\u8bf7\u6c42\uff0c\u5982\uff08DeleteRequest\u3001 UpdateRequest\u3001IndexRequest\uff09,StreamX\u4e5f\u5bf9\u4ee5\u4e0a\u529f\u80fd\u8fdb\u884c\u4e86\u652f\u6301\uff0c\u5bf9\u5e94\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import com.streamxhub.streamx.flink.core.scala.StreamingContext\nimport org.apache.flink.streaming.api.datastream.DataStreamSink\nimport org.apache.flink.streaming.api.scala.DataStream\nimport org.apache.flink.streaming.connectors.elasticsearch.ActionRequestFailureHandler\nimport org.apache.flink.streaming.connectors.elasticsearch.util.RetryRejectedExecutionFailureHandler\nimport org.apache.flink.streaming.connectors.elasticsearch6.RestClientFactory\nimport org.elasticsearch.action.delete.DeleteRequest\nimport org.elasticsearch.action.index.IndexRequest\nimport org.elasticsearch.action.update.UpdateRequest\n\nimport java.util.Properties\nimport scala.annotation.meta.param\n\n\nclass ESSink(@(transient@param) context: StreamingContext,\n             property: Properties = new Properties(),\n             parallelism: Int = 0,\n             name: String = null,\n             uid: String = null) {\n\n  /**\n   * for ElasticSearch6\n   *\n   * @param stream\n   * @param suffix\n   * @param restClientFactory\n   * @param failureHandler\n   * @param f\n   * @tparam T\n   * @return\n   */\n  def sink6[T](stream: DataStream[T],\n               suffix: String = "",\n               restClientFactory: RestClientFactory = null,\n               failureHandler: ActionRequestFailureHandler = new RetryRejectedExecutionFailureHandler)\n              (implicit f: T => IndexRequest): DataStreamSink[T] = {\n\n    new ES6Sink(context, property, parallelism, name, uid).sink[T](stream, suffix, restClientFactory, failureHandler, f)\n  }\n\n\n\n  def update6[T](stream: DataStream[T],\n               suffix: String = "",\n               restClientFactory: RestClientFactory = null,\n               failureHandler: ActionRequestFailureHandler = new RetryRejectedExecutionFailureHandler)\n              ( f: T => UpdateRequest): DataStreamSink[T] = {\n\n    new ES6Sink(context, property, parallelism, name, uid).sink[T](stream, suffix, restClientFactory, failureHandler, f)\n  }\n\n\n  def delete6[T](stream: DataStream[T],\n               suffix: String = "",\n               restClientFactory: RestClientFactory = null,\n               failureHandler: ActionRequestFailureHandler = new RetryRejectedExecutionFailureHandler)\n              ( f: T => DeleteRequest): DataStreamSink[T] = {\n\n    new ES6Sink(context, property, parallelism, name, uid).sink[T](stream, suffix, restClientFactory, failureHandler, f)\n  }\n\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u542f\u7528 Flink checkpoint \u540e\uff0cFlink Elasticsearch Sink \u4fdd\u8bc1\u81f3\u5c11\u4e00\u6b21\u5c06\u64cd\u4f5c\u8bf7\u6c42\u53d1\u9001\u5230 Elasticsearch \u96c6\u7fa4\u3002 \u8fd9\u662f\u901a\u8fc7\u5728\u8fdb\u884c checkpoint \u65f6\u7b49\u5f85 BulkProcessor \u4e2d\u6240\u6709\u6302\u8d77\u7684\u64cd\u4f5c\u8bf7\u6c42\u6765\u5b9e\u73b0\u3002 \u8fd9\u6709\u6548\u5730\u4fdd\u8bc1\u4e86\u5728\u89e6\u53d1 checkpoint \u4e4b\u524d\u6240\u6709\u7684\u8bf7\u6c42\u88ab Elasticsearch \u6210\u529f\u786e\u8ba4\uff0c\u7136\u540e\u7ee7\u7eed\u5904\u7406\u53d1\u9001\u5230 sink \u7684\u8bb0\u5f55\u3002\n\u7528\u6237\u60f3\u8981\u7981\u7528\u5237\u65b0\uff0c\u53ef\u4ee5\u914d\u7f6edisableFlushOnCheckpoint\u4e3atrue\u6765\u5b9e\u73b0\uff0c\u5b9e\u8d28\u4e0a\u610f\u5473\u7740 sink \u5c06\u4e0d\u518d\u63d0\u4f9b\u4efb\u4f55\u53ef\u9760\u7684\u4ea4\u4ed8\u4fdd\u8bc1\uff0c\u5373\u4f7f\u542f\u7528\u4e86\u4f5c\u4e1a\u62d3\u6251\u7684 checkpoint\u3002"))),(0,i.kt)("h2",{id:"\u5176\u4ed6\u914d\u7f6e"},"\u5176\u4ed6\u914d\u7f6e"),(0,i.kt)("h3",{id:"\u5904\u7406\u5931\u8d25\u7684-elasticsearch-\u8bf7\u6c42"},"\u5904\u7406\u5931\u8d25\u7684 Elasticsearch \u8bf7\u6c42"),(0,i.kt)("p",null,"Elasticsearch \u64cd\u4f5c\u8bf7\u6c42\u53ef\u80fd\u7531\u4e8e\u591a\u79cd\u539f\u56e0\u800c\u5931\u8d25\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0ActionRequestFailureHandler\u6765\u6307\u5b9a\u5931\u8d25\u5904\u7406\u903b\u8f91\uff0c\u89c1\n",(0,i.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/#elasticsearch-sink"},"\u5b98\u65b9\u6587\u6863"),(0,i.kt)("strong",{parentName:"p"},"\u5904\u7406\u5931\u8d25\u7684 Elasticsearch \u8bf7\u6c42")," \u5355\u5143"),(0,i.kt)("h3",{id:"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668"},"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668"),(0,i.kt)("p",null,"es\u5185\u90e8",(0,i.kt)("inlineCode",{parentName:"p"},"BulkProcessor"),"\u53ef\u4ee5\u8fdb\u4e00\u6b65\u914d\u7f6e\u5176\u5982\u4f55\u5237\u65b0\u7f13\u5b58\u64cd\u4f5c\u8bf7\u6c42\u7684\u884c\u4e3a\u8be6\u7ec6\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/#elasticsearch-sink"},"\u5b98\u65b9\u6587\u6863"),(0,i.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668")," \u5355\u5143"),(0,i.kt)("h3",{id:"streamx\u914d\u7f6e"},"StreamX\u914d\u7f6e"),(0,i.kt)("p",null,"\u5176\u4ed6\u7684\u6240\u6709\u7684\u914d\u7f6e\u90fd\u5fc5\u987b\u9075\u5b88 ",(0,i.kt)("strong",{parentName:"p"},"StreamX")," \u914d\u7f6e,\u5177\u4f53\u53ef\u914d\u7f6e\u9879\u548c\u5404\u4e2a\u53c2\u6570\u7684\u4f5c\u7528\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/docs/development/conf"},"\u9879\u76ee\u914d\u7f6e")))}h.isMDXComponent=!0}}]);