"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[6740],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=l,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));const r={id:"9-alter",title:"alter",sidebar_position:9},i=void 0,o={unversionedId:"flinksql/syntax/9-alter",id:"flinksql/syntax/9-alter",title:"alter",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/syntax/9-alter.md",sourceDirName:"flinksql/syntax",slug:"/flinksql/syntax/9-alter",permalink:"/zh-CN/docs/flinksql/syntax/9-alter",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/syntax/9-alter.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"9-alter",title:"alter",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"describe",permalink:"/zh-CN/docs/flinksql/syntax/8-describe"},next:{title:"explain",permalink:"/zh-CN/docs/flinksql/syntax/10-explain"}},p={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"ALTER TABLE",id:"alter-table",level:3},{value:"ALTER VIEW",id:"alter-view",level:3},{value:"ALTER DATABASE",id:"alter-database",level:3},{value:"ALTER FUNCTION",id:"alter-function",level:3}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"ALTER\u8bed\u53e5\u7528\u4e8e\u4fee\u6539Catalog\u4e2d\u5df2\u6ce8\u518c\u7684\u8868/\u89c6\u56fe/\u51fd\u6570\u5b9a\u4e49\u3002"),(0,l.kt)("p",null,"Flink SQL\u76ee\u524d\u652f\u6301\u4ee5\u4e0bALTER\u8bed\u53e5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ALTER TABLE"),(0,l.kt)("li",{parentName:"ul"},"ALTER VIEW\uff08\u4ece1.14.x\u5f00\u59cb\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"ALTER DATABASE"),(0,l.kt)("li",{parentName:"ul"},"ALTER FUNCTION")),(0,l.kt)("h3",{id:"alter-table"},"ALTER TABLE"),(0,l.kt)("p",null,"\u91cd\u547d\u540d\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [catalog_name.][db_name.]table_name RENAME TO new_table_name\n")),(0,l.kt)("p",null,"\u5c06\u7ed9\u5b9a\u7684\u8868\u540d\u91cd\u547d\u540d\u4e3a\u53e6\u4e00\u4e2a\u65b0\u8868\u540d\u3002 \u8bbe\u7f6e\u6216\u66f4\u6539\u8868\u5c5e\u6027:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [catalog_name.][db_name.]table_name SET (key1=val1, key2=val2, ...)\n")),(0,l.kt)("p",null,"\u7ed9\u6307\u5b9a\u7684\u8868\u8bbe\u7f6e\u4e00\u4e2a\u6216\u591a\u4e2a\u5c5e\u6027\u3002\u5982\u679c\u8868\u4e2d\u5df2\u7ecf\u8bbe\u7f6e\u4e86\u7279\u5b9a\u7684\u5c5e\u6027\uff0c\u5219\u7528\u65b0\u503c\u8986\u76d6\u65e7\u503c\u3002"),(0,l.kt)("h3",{id:"alter-view"},"ALTER VIEW"),(0,l.kt)("p",null,"\u4ece1.14.x\u5f00\u59cb\u652f\u6301\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER VIEW [catalog_name.][db_name.]view_name RENAME TO new_view_name\n")),(0,l.kt)("p",null,"\u5c06\u4e4b\u524d catalog \u548c database \u4e0b\u7684\u89c6\u56fe\u91cd\u540d\u4e3a\u65b0\u7684\u540d\u79f0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER VIEW [catalog_name.][db_name.]view_name AS new_query_expression\n")),(0,l.kt)("p",null,"\u6539\u53d8\u89c6\u56fe\u4e4b\u524d\u7684\u67e5\u8be2\u5b9a\u4e49\u4e3a\u65b0\u7684\u67e5\u8be2\u3002"),(0,l.kt)("h3",{id:"alter-database"},"ALTER DATABASE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE [catalog_name.]db_name SET (key1=val1, key2=val2, ...)\n")),(0,l.kt)("p",null,"\u7ed9\u6307\u5b9a\u7684\u6570\u636e\u5e93\u8bbe\u7f6e\u4e00\u4e2a\u6216\u591a\u4e2a\u5c5e\u6027\u3002\u5982\u679c\u6570\u636e\u5e93\u4e2d\u5df2\u7ecf\u8bbe\u7f6e\u4e86\u7279\u5b9a\u7684\u5c5e\u6027\uff0c\u5219\u4f7f\u7528\u65b0\u503c\u8986\u76d6\u65e7\u503c\u3002"),(0,l.kt)("h3",{id:"alter-function"},"ALTER FUNCTION"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER [TEMPORARY|TEMPORARY SYSTEM] FUNCTION [IF EXISTS] [catalog_name.][db_name.]function_name AS identifier [LANGUAGE JAVA|SCALA|PYTHON]\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u65b0\u7684\u6807\u8bc6\u7b26\u548c\u53ef\u9009\u7684\u8bed\u8a00\u6807\u8bb0\u66f4\u6539catalog\u51fd\u6570\u3002\u5982\u679c\u51fd\u6570\u5728catalog\u4e2d\u4e0d\u5b58\u5728\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002\u5982\u679c\u8bed\u8a00\u6807\u8bb0\u662fJAVA/SCALA\uff0c\u5219\u6807\u8bc6\u7b26\u662fUDF\u7684\u5b8c\u6574\u7c7b\u8def\u5f84\u3002\u5173\u4e8eJava/Scala UDF\u7684\u5b9e\u73b0\uff0c\u8bf7\u53c2\u8003\u7528\u6237",(0,l.kt)("a",{parentName:"p",href:"../../../../../../docs/flinksql/udf"},"\u81ea\u5b9a\u4e49\u51fd\u6570"),"\u3002  "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TEMPORARY")," "),(0,l.kt)("p",null,"\u66f4\u6539\u5177\u6709catalog\u548c\u6570\u636e\u5e93\u540d\u79f0\u7a7a\u95f4\u7684\u4e34\u65f6catalog\u51fd\u6570\uff0c\u5e76\u91cd\u5199catalog\u51fd\u6570\u3002  "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TEMPORARY SYSTEM"),"  "),(0,l.kt)("p",null,"\u66f4\u6539\u6ca1\u6709\u540d\u79f0\u7a7a\u95f4\u7684\u4e34\u65f6\u7cfb\u7edf\u51fd\u6570\u5e76\u8986\u76d6\u5185\u7f6e\u51fd\u6570\u3002 "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"IF EXISTS")," "),(0,l.kt)("p",null,"\u5982\u679c\u51fd\u6570\u4e0d\u5b58\u5728\uff0c\u4ec0\u4e48\u4e5f\u4e0d\u4f1a\u53d1\u751f\u3002  "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"LANGUAGE JAVA|SCALA|PYTHON"),"  "),(0,l.kt)("p",null,"\u7528\u4e8e\u6307\u793aflink\u8fd0\u884c\u65f6\u5982\u4f55\u6267\u884c\u8be5\u51fd\u6570\u7684\u8bed\u8a00\u6807\u8bb0\u3002\u76ee\u524d\u53ea\u652f\u6301JAVA\u3001SCALA\u548cPYTHON\uff0c\u51fd\u6570\u9ed8\u8ba4\u8bed\u8a00\u4e3aJAVA\u3002"))}u.isMDXComponent=!0}}]);