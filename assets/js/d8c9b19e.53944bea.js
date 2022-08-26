"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5},c="Callbacks/Function types",o={unversionedId:"typescript-revisited/callbacks-function-types",id:"typescript-revisited/callbacks-function-types",title:"Callbacks/Function types",description:"Een callback is een functie (functie A) die wordt meegegeven als parameter van een andere functie (functie B). Deze functie (B) zal dan de meegegeven functie (A) uitvoeren.",source:"@site/docs/typescript-revisited/callbacks-function-types.md",sourceDirName:"typescript-revisited",slug:"/typescript-revisited/callbacks-function-types",permalink:"/webframeworks-cursus/typescript-revisited/callbacks-function-types",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Array/Object Destructuring",permalink:"/webframeworks-cursus/typescript-revisited/array-object-destructuring"},next:{title:"Array Methoden",permalink:"/webframeworks-cursus/typescript-revisited/array-methoden"}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"callbacksfunction-types"},"Callbacks/Function types"),(0,a.kt)("p",null,"Een callback is een functie (functie A) die wordt meegegeven als parameter van een andere functie (functie B). Deze functie (B) zal dan de meegegeven functie (A) uitvoeren."),(0,a.kt)("p",null,"Dit ziet er in code als volgt uit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "typescript", "filename": "index.ts" }',codesandbox:'{"template":','"typescript",':!0,'"filename":':!0,'"index.ts"':!0,"}":!0},'interface Callback {\n    (): void\n}\n\nlet functionA = (functionB: Callback) => {\n    functionB();\n}\n\nlet functionB: Callback = () => {\n    console.log("Function B executed")\n}\n\nfunctionA(functionB);\n')),(0,a.kt)("p",null,"Wil je geen interface aanmaken kan je ook gebruik maken van TypeScript types rechtstreeks in de functie signature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "typescript", "filename": "index.ts" }',codesandbox:'{"template":','"typescript",':!0,'"filename":':!0,'"index.ts"':!0,"}":!0},'//hide-start\ninterface Callback {\n    (): void\n}\n//hide-end\nlet functionA = (functionB: () => void) => {\n    functionB();\n}\n//hide-start\nlet functionB: Callback = () => {\n    console.log("Function B executed")\n}\n\nfunctionA(functionB);\n//hide-end\n')),(0,a.kt)("p",null,"Een voorbeeld van zo'n callback functie kan je hieronder vinden"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "typescript", "filename": "index.ts" }',codesandbox:'{"template":','"typescript",':!0,'"filename":':!0,'"index.ts"':!0,"}":!0},"let sum = (a: number, b: number, callback: (sum: number) => void) => {\n  callback(a + b);\n};\n\nlet printNumber = (number: number) => {\n  console.log(number);\n};\n\nsum(1, 2, printNumber);\n")))}p.isMDXComponent=!0}}]);