(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{107:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,g=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return r?o.a.createElement(g,l(l({ref:t},b),{},{components:r})):o.a.createElement(g,l({ref:t},b))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<a;b++)c[b]=r[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(107)),c={id:"start",title:"\u5feb\u901f\u5f00\u59cb"},l={unversionedId:"getting-started/start",id:"getting-started/start",isDocsHomePage:!1,title:"\u5feb\u901f\u5f00\u59cb",description:"\u7248\u672c\u9700\u6c42",source:"@site/docs/getting-started/start.md",slug:"/getting-started/start",permalink:"/docs/getting-started/start",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/getting-started/start.md",version:"current",sidebar:"docs",previous:{title:"Kratos \u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/changelog"},next:{title:"\u5de5\u5177\u4ecb\u7ecd",permalink:"/docs/getting-started/usage"}},i=[{value:"\u7248\u672c\u9700\u6c42",id:"\u7248\u672c\u9700\u6c42",children:[]},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",children:[]},{value:"\u9879\u76ee\u7f16\u8bd1\u548c\u8fd0\u884c",id:"\u9879\u76ee\u7f16\u8bd1\u548c\u8fd0\u884c",children:[]},{value:"\u9879\u76ee\u6a21\u677f",id:"\u9879\u76ee\u6a21\u677f",children:[]}],b={toc:i};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u7248\u672c\u9700\u6c42"},"\u7248\u672c\u9700\u6c42"),Object(a.b)("p",null,"\u9700\u8981\u4f7f\u7528 kratos v2.0.0 \u4ee5\u4e0a\u7248\u672c\uff1b"),Object(a.b)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),Object(a.b)("p",null,"\u9700\u8981\u5b89\u88c5\u597d\u5bf9\u5e94\u7684\u4f9d\u8d56\u73af\u5883\uff0c\u4ee5\u53ca\u5de5\u5177\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://golang.org/dl/"}),"go")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/protocolbuffers/protobuf"}),"protoc")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/protocolbuffers/protobuf-go"}),"protoc-gen-go"))),Object(a.b)("p",null,"\u5efa\u8bae\u5f00\u542fGO111MODULE"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"go env -w GO111MODULE=on\n")),Object(a.b)("p",null,"\u5982\u679c\u62c9\u53d6\u4f9d\u8d56\u9047\u5230\u7f51\u7edc\u95ee\u9898\uff0c\u5efa\u8bae",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://goproxy.cn/"}),"\u914d\u7f6eGOPROXY")),Object(a.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5 kratos \u547d\u4ee4\u5de5\u5177\ngo get -u github.com/go-kratos/kratos/cmd/kratos/v2\ngo get -u github.com/go-kratos/kratos/cmd/protoc-gen-go-http/v2\ngo get -u github.com/go-kratos/kratos/cmd/protoc-gen-go-errors/v2\n\n# \u6216\u8005\u6e90\u4ee3\u7801\u62c9\u53d6\u5230\u672c\u5730\uff0c\u624b\u52a8\u5b89\u88c5\ngit clone -b main https://github.com/go-kratos/kratos\ncd kratos\ncd cmd/kratos && go install\ncd cmd/protoc-gen-go-http && go install\ncd cmd/protoc-gen-go-errors && go install\n")),Object(a.b)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u521b\u5efa\u9879\u76ee\u6a21\u677f\nkratos new helloworld\n\ncd helloworld\n# \u751f\u6210proto\u6a21\u677f\nkratos proto add api/helloworld/helloworld.proto\n# \u751f\u6210service\u6a21\u677f\nkratos proto service api/helloworld/helloworld.proto -t internal/service\n")),Object(a.b)("h2",{id:"\u9879\u76ee\u7f16\u8bd1\u548c\u8fd0\u884c"},"\u9879\u76ee\u7f16\u8bd1\u548c\u8fd0\u884c"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u521d\u59cb\u5316\u4f9d\u8d56\u5de5\u5177\nmake init\n# \u751f\u6210api\u4e0b\u6240\u6709proto\u6587\u4ef6\nmake proto\n# \u7f16\u8bd1cmd\u4e0b\u6240\u6709main\u6587\u4ef6\nmake build\n# \u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\nmake test\n\n# \u8fd0\u884c\u9879\u76ee\n./bin/helloworld\n")),Object(a.b)("h2",{id:"\u9879\u76ee\u6a21\u677f"},"\u9879\u76ee\u6a21\u677f"),Object(a.b)("p",null,"Kratos \u662f\u901a\u8fc7\u5728\u7ebf github \u4ed3\u5e93\u6a21\u677f\uff0c\u5e76\u4e14\u8fdb\u884c\u62c9\u53d6\u521b\u5efa\u9879\u76ee\uff0c\u5bf9\u5e94\u6a21\u677f\u5730\u5740\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/go-kratos/kratos-layout"}),"Kratos Layout"))))}p.isMDXComponent=!0}}]);