"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=u(n),d=c,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:c,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),c=(n(7294),n(3905));const a={},i="Callbacks/Function types",o={unversionedId:"typescript-revisited/callbacks-function-types",id:"typescript-revisited/callbacks-function-types",title:"Callbacks/Function types",description:"Een callback is een functie (functie A) die wordt meegegeven als parameter van een andere functie (functie B). Deze functie (B) zal dan de meegegeven functie (A) uitvoeren.",source:"@site/docs/typescript-revisited/callbacks-function-types.md",sourceDirName:"typescript-revisited",slug:"/typescript-revisited/callbacks-function-types",permalink:"/docs/typescript-revisited/callbacks-function-types",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript-revisited/callbacks-function-types.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Arrays/Objecten kopieren",permalink:"/docs/typescript-revisited/arrays-objecten-kopieren"}},l={},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"callbacksfunction-types"},"Callbacks/Function types"),(0,c.kt)("p",null,"Een callback is een functie (functie A) die wordt meegegeven als parameter van een andere functie (functie B). Deze functie (B) zal dan de meegegeven functie (A) uitvoeren."),(0,c.kt)("p",null,"Dit ziet er in code als volgt uit:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},'interface Callback {\n    (): void\n}\n\nlet functionA = (functionB: Callback) => {\n    functionB();\n}\n\nlet functionB: Callback = () => {\n    console.log("Function B executed")\n}\n\nfunctionA(functionB);\n')),(0,c.kt)("p",null,"Wil je geen interface aanmaken kan je ook gebruik maken van TypeScript types rechtstreeks in de functie signature."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"let functionA = (functionB: () => void) => {\n    functionB();\n}\n")),(0,c.kt)("p",null,"Een voorbeeld van zo'n callback functie kan je hieronder vinden"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"let sum = (a: number, b: number, callback: (sum: number) => void) => {\n  callback(a + b);\n};\n\nlet printNumber = (number: number) => {\n  console.log(number);\n};\n\nsum(1, 2, printNumber);\n")))}p.isMDXComponent=!0}}]);