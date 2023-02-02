"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},T=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),T=a,m=p["".concat(o,".").concat(T)]||p[T]||d[T]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=T;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}T.displayName="MDXCreateElement"},9155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={id:"5-insert",title:"insert",sidebar_position:5},i=void 0,s={unversionedId:"flinksql/syntax/5-insert",id:"flinksql/syntax/5-insert",title:"insert",description:"\u4ecb\u7ecd",source:"@site/docs/flinksql/syntax/5-insert.md",sourceDirName:"flinksql/syntax",slug:"/flinksql/syntax/5-insert",permalink:"/docs/flinksql/syntax/5-insert",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/flinksql/syntax/5-insert.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"5-insert",title:"insert",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"create",permalink:"/docs/flinksql/syntax/4-create"},next:{title:"use",permalink:"/docs/flinksql/syntax/6-use"}},o={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u901a\u8fc7select\u67e5\u8be2Insert\u6570\u636e",id:"\u901a\u8fc7select\u67e5\u8be2insert\u6570\u636e",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:3},{value:"Insert values into tables",id:"insert-values-into-tables",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5-1",level:3},{value:"\u6848\u4f8b",id:"\u6848\u4f8b-1",level:3},{value:"\u8fd0\u884c\u591a\u4e2ainsert",id:"\u8fd0\u884c\u591a\u4e2ainsert",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"NSERT\u8bed\u53e5\u7528\u4e8e\u5411\u8868\u4e2d\u6dfb\u52a0\u884c\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"\u901a\u8fc7select\u67e5\u8be2insert\u6570\u636e"},"\u901a\u8fc7select\u67e5\u8be2Insert\u6570\u636e"),(0,a.kt)("p",null,"select\u67e5\u8be2\u7ed3\u679c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528insert\u5b50\u53e5\u63d2\u5165\u5230\u8868\u4e2d\u3002"),(0,a.kt)("h3",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT { INTO | OVERWRITE } [catalog_name.][db_name.]table_name [PARTITION part_spec] [column_list] select_statement\npart_spec:\n    (part_col_name1=val1 [, part_col_name2=val2, ...])\ncolumn_list:\n    (col_name1 [, column_name2, ...])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OVERWRITE"),(0,a.kt)("br",{parentName:"p"}),"\n","INSERT OVERWRITE\u5c06\u8986\u76d6\u8868\u6216\u5206\u533a\u4e2d\u7684\u4efb\u4f55\u73b0\u6709\u6570\u636e\u3002\u5426\u5219\uff08INTO\uff09\uff0c\u5c06\u8ffd\u52a0\u65b0\u7684\u6570\u636e\u3002  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PARTITION"),(0,a.kt)("br",{parentName:"p"}),"\n","PARTITION\u5b50\u53e5\u6307\u5b9a\u63d2\u5165\u8bed\u53e5\u7684\u9759\u6001\u5206\u533a\u5217\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"COLUMN LIST"),(0,a.kt)("br",{parentName:"p"}),"\n","\u73b0\u5728\u6709\u8868T(a INT, b INT, c INT)\uff0c flink\u652f\u6301"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO T(c, b) SELECT x, y FROM S\n")),(0,a.kt)("p",null,"\u67e5\u8be2\u7684\u6570\u636e\u5217\u2018x\u2019\u5c06\u88ab\u5199\u5165\u5217\u2018c\u2019\uff0c\u67e5\u8be2\u7684\u6570\u636e\u5217\u2018y\u2019\u5c06\u88ab\u5199\u5165\u5217\u2018b\u2019\uff0c\u5e76\u4e14\u5217\u2018a\u2019\u88ab\u8bbe\u7f6e\u4e3aNULL\uff08\u9700\u4fdd\u8bc1\u5217\u2018z\u2019\u662f\u53ef\u4ee5\u4e3a\u7a7a\u7684\uff09\u3002"),(0,a.kt)("p",null,"overwrite \u548c partition \u5173\u952e\u5b57\u7ecf\u5e38\u7528\u4e8e\u5199\u5165 hive \u3002"),(0,a.kt)("h3",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u521b\u5efa\u4e00\u4e2a\u5206\u533a\u8868\nCREATE TABLE country_page_view (user STRING, cnt INT, date STRING, country STRING)\nPARTITIONED BY (date, country)\nWITH (...)\n\n-- \u5411\u9759\u6001\u5206\u533a(date='2019-8-30', country='China')\u8ffd\u52a0\u6570\u636e\u884c\nINSERT INTO country_page_view PARTITION (date='2019-8-30', country='China')\nSELECT user, cnt FROM page_view_source;\n\n-- \u5411\u5206\u533a(date, country)\u8ffd\u52a0\u6570\u636e\u884c\uff0c\u9759\u6001data\u5206\u533a\u503c\u4e3a\u201c2019-8-30\u201d\uff0ccountry\u4e3a\u52a8\u6001\u5206\u533a\uff0c\u8be5\u5206\u533a\u503c\u901a\u8fc7\u6bcf\u884c\u5bf9\u5e94\u5b57\u6bb5\u503c\u52a8\u6001\u83b7\u53d6\nINSERT INTO country_page_view PARTITION (date='2019-8-30')\nSELECT user, cnt, country FROM page_view_source;\n\n-- \u5411\u9759\u6001\u5206\u533a(date='2019-8-30', country='China')\u8986\u76d6\u6570\u636e\nINSERT OVERWRITE country_page_view PARTITION (date='2019-8-30', country='China')\nSELECT user, cnt FROM page_view_source;\n\n-- \u5411\u5206\u533a(date, country)\u8986\u76d6\u6570\u636e\u884c\uff0c\u9759\u6001data\u5206\u533a\u503c\u4e3a\u201c2019-8-30\u201d\uff0ccountry\u4e3a\u52a8\u6001\u5206\u533a\uff0c\u8be5\u5206\u533a\u503c\u901a\u8fc7\u6bcf\u884c\u5bf9\u5e94\u5b57\u6bb5\u503c\u52a8\u6001\u83b7\u53d6\nINSERT OVERWRITE country_page_view PARTITION (date='2019-8-30')\nSELECT user, cnt, country FROM page_view_source;\n\n-- \u5411\u9759\u6001\u5206\u533a(date='2019-8-30', country='China')\u8ffd\u52a0\u6570\u636e\u884c\uff0ccnt\u5b57\u6bb5\u503c\u88ab\u8bbe\u7f6e\u4e3aNULL\nINSERT INTO country_page_view PARTITION (date='2019-8-30', country='China') (user)\nSELECT user FROM page_view_source;\n")),(0,a.kt)("h2",{id:"insert-values-into-tables"},"Insert values into tables"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528INSERT\u2026VALUES\u8bed\u53e5\u5c06\u6570\u636e\u76f4\u63a5\u4eceSQL\u63d2\u5165\u5230\u8868\u4e2d\u3002"),(0,a.kt)("h3",{id:"\u8bed\u6cd5-1"},"\u8bed\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT { INTO | OVERWRITE } [catalog_name.][db_name.]table_name VALUES values_row [, values_row ...]\nvalues_row:\n    : (val1 [, val2, ...])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OVERWRITE"),(0,a.kt)("br",{parentName:"p"}),"\n","INSERT OVERWRITE\u5c06\u8986\u76d6\u8868\u4e2d\u4efb\u4f55\u73b0\u6709\u6570\u636e\u3002\u5426\u5219\uff0c\u5c06\u8ffd\u52a0\u65b0\u7684\u6570\u636e\u3002"),(0,a.kt)("h3",{id:"\u6848\u4f8b-1"},"\u6848\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE students (name STRING, age INT, gpa DECIMAL(3, 2)) WITH (...);\nINSERT INTO students\nVALUES ('fred flintstone', 35, 1.28), ('barney rubble', 32, 2.32);\n")),(0,a.kt)("h2",{id:"\u8fd0\u884c\u591a\u4e2ainsert"},"\u8fd0\u884c\u591a\u4e2ainsert"),(0,a.kt)("p",null,"\u57fa\u4e8e\u5e73\u53f0\u5185\u90e8\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u76ee\u524d\u652f\u6301\u4e00\u4e2a flink \u4efb\u52a1\u4e2d\u540c\u65f6\u8fd0\u884c\u591a\u4e2a insert \u8bed\u53e5\uff0c\u5373\u5728\u9875\u9762\u7684 sql \u8f93\u5165\u6846\u4e2d\u8f93\u5165\u591a\u4e2a insert \u8bed\u53e5\uff0c\u53ea\u4f1a\u542f\u52a8\u4e00\u4e2a flink \u4efb\u52a1\u3002"),(0,a.kt)("p",null,"\u8fd0\u884c\u7684\u591a\u4e2a insert \u4efb\u52a1\uff0c\u5728 flink UI \u754c\u9762\u4e2d\uff0c\u4f1a\u4f53\u73b0\u51fa\u591a\u4e2a\u8fd0\u884c\u56fe\u3002\u5f53\u7136\uff0c\u5982\u679c\u4f60\u7684\u591a\u4e2a insert \u8bed\u53e5\u8bfb\u53d6\u4e86\u540c\u4e00\u5f20\u8868\uff0c\u6216\u8005\u662f\u5199\u5165\u4e86\u540c\u4e00\u5f20\u8868\uff0cflink \u5219\u4f1a\u5bf9\u5176\u4f18\u5316\uff0c\u6700\u540e\u751f\u6210\u4e00\u5f20\u8fd0\u884c\u56fe\u3002"))}p.isMDXComponent=!0}}]);