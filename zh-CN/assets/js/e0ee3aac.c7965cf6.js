"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=l,f=s["".concat(i,".").concat(d)]||s[d]||k[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:l,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={id:"10-black-hole",title:"BlackHole",sidebar_position:10},o=void 0,c={unversionedId:"flinksql/connector/10-black-hole",id:"flinksql/connector/10-black-hole",title:"BlackHole",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/connector/10-black-hole.md",sourceDirName:"flinksql/connector",slug:"/flinksql/connector/10-black-hole",permalink:"/zh-CN/docs/flinksql/connector/10-black-hole",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/flinksql/connector/10-black-hole.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"10-black-hole",title:"BlackHole",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Print",permalink:"/zh-CN/docs/flinksql/connector/9-print"},next:{title:"\u9ad8\u7ea7\u6269\u5c55",permalink:"/zh-CN/docs/advanced/"}},i={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u521b\u5efa BlackHole \u8868",id:"\u521b\u5efa-blackhole-\u8868",level:2},{value:"\u8fde\u63a5\u5668\u9009\u9879",id:"\u8fde\u63a5\u5668\u9009\u9879",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u652f\u6301\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sink: Bounded "),(0,l.kt)("li",{parentName:"ul"},"Sink: UnBounded")),(0,l.kt)("p",null,"BlackHole \u8fde\u63a5\u5668\u5141\u8bb8\u63a5\u6536\u6240\u6709\u8f93\u5165\u8bb0\u5f55\u3002\u5b83\u88ab\u8bbe\u8ba1\u7528\u4e8e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\u6d4b\u8bd5\u3002"),(0,l.kt)("li",{parentName:"ul"},"UDF \u8f93\u51fa\uff0c\u800c\u4e0d\u662f\u5b9e\u8d28\u6027 sink\u3002")),(0,l.kt)("p",null,"\u5c31\u50cf\u7c7b Unix \u64cd\u4f5c\u7cfb\u7edf\u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"/dev/null"),"\u3002"),(0,l.kt)("p",null,"BlackHole \u8fde\u63a5\u5668\u662f\u5185\u7f6e\u7684\u3002"),(0,l.kt)("h2",{id:"\u521b\u5efa-blackhole-\u8868"},"\u521b\u5efa BlackHole \u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE blackhole_table (\n    f0 INT,\n    f1 INT,\n    f2 STRING,\n    f3 DOUBLE\n) WITH (\n    'connector' = 'blackhole'\n);\n")),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u57fa\u4e8e\u73b0\u6709\u6a21\u5f0f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIKE")," \u5b50\u53e5 \u521b\u5efa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE blackhole_table WITH ('connector' = 'blackhole')\nLIKE source_table (EXCLUDING ALL)\n")),(0,l.kt)("h2",{id:"\u8fde\u63a5\u5668\u9009\u9879"},"\u8fde\u63a5\u5668\u9009\u9879"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u8981"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"connector"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u8981"),(0,l.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u9700\u8981\u4f7f\u7528\u7684\u8fde\u63a5\u5668\uff0c\u6b64\u5904\u5e94\u4e3a ",(0,l.kt)("strong",{parentName:"td"},"blackhole")," \u3002")))))}s.isMDXComponent=!0}}]);