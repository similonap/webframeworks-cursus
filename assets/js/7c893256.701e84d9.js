"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[833],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return t?i.createElement(f,o(o({ref:n},d),{},{components:t})):i.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={sidebar_position:2},o="Optional chaining",l={unversionedId:"wf-course/typescript-revisited/optional-chaining",id:"wf-course/typescript-revisited/optional-chaining",title:"Optional chaining",description:"Optional",source:"@site/docs/wf-course/typescript-revisited/optional-chaining.md",sourceDirName:"wf-course/typescript-revisited",slug:"/wf-course/typescript-revisited/optional-chaining",permalink:"/webframeworks-cursus/wf-course/typescript-revisited/optional-chaining",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"wfCourse",previous:{title:"Arrays/Objecten kopieren",permalink:"/webframeworks-cursus/wf-course/typescript-revisited/arrays-objecten-kopieren"},next:{title:"Lazy evaluation",permalink:"/webframeworks-cursus/wf-course/typescript-revisited/lazy-evaluation"}},p={},s=[{value:"Optional",id:"optional",level:3},{value:"Optional chaining",id:"optional-chaining-1",level:3},{value:"Uitroepingsteken (!.) of non null operator",id:"uitroepingsteken--of-non-null-operator",level:4}],d={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"optional-chaining"},"Optional chaining"),(0,r.kt)("h3",{id:"optional"},"Optional"),(0,r.kt)("p",null,"Soms heb je objecten waarbij niet alle properties een waarde hebben. In TypeScript moet je dit aangeven in de interface van dat object. Stel dat we een ",(0,r.kt)("inlineCode",{parentName:"p"},"Options")," interface hebben die gebruikt wordt om een scherm in te stellen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Options {\n  title: string;\n  width: number;\n  height: number;\n}\n")),(0,r.kt)("p",null,"Als je nu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"let options : Options = {\n    title: 'Hello World'\n};\n// Type '{ title: string; }' is missing the following properties from type 'Options': width, height(2739)\n")),(0,r.kt)("p",null,"doet dan krijg je een error in typescript want width en height zijn hier niet opgegeven."),(0,r.kt)("p",null,"Wil je dit toch toelaten dan moet je dit aangeven in de interface van Options aan de hand van de ? operator. Dit geeft aan dat een property optional is."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Options {\n  title: string;\n  width?: number;\n  height?: number;\n}\n")),(0,r.kt)("h3",{id:"optional-chaining-1"},"Optional chaining"),(0,r.kt)("p",null,"Stel dat we de interface iets aanpassen en de ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," en de ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," in een apart object plaatsen. Dan krijgen we de volgende situatie"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "typescript", "filename": "index.ts" }',codesandbox:'{"template":','"typescript",':!0,'"filename":':!0,'"index.ts"':!0,"}":!0},"interface Size {\n  width: number;\n  height: number;\n}\ninterface Options {\n  title: string;\n  size: Size\n}\n\nlet options: Options = {\n  title: 'Hello World',\n  size: {\n    width: 100,\n    height: 100\n  }\n};\n\nconsole.log(options.size.width); // 100\n")),(0,r.kt)("p",null,"Als we nu ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," optioneel maken zoals hiervoor geraken we in de problemen. Onze compiler zal ons dan de volgende foutmelding geven:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "typescript", "filename": "index.ts" }',codesandbox:'{"template":','"typescript",':!0,'"filename":':!0,'"index.ts"':!0,"}":!0},"interface Size {\n  width: number;\n  height: number;\n}\ninterface Options {\n  title: string;\n  size?: Size\n}\n\nlet options: Options = {\n  title: 'Hello World',\n  size: {\n    width: 100,\n    height: 100\n  }\n};\n\nconsole.log(options.size.width); // Object is possibly 'undefined'\n")),(0,r.kt)("p",null,"Omdat we ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," optioneel hebben gemaakt bestaat er een kans dat size undefined zou zijn. Dus de typescript compiler waarschuwt ons hiervoor. Hier kunnen we een aantal dingen aan doen. Je zou expliciet kunnen kijken of options.size gelijk is aan undefined aan de hand van een if statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"if (options.size != undefined) {\n    console.log(options.size.height);\n}\n")),(0,r.kt)("p",null,"of je kan hier optional chaining gebruiken. Je gebruikt hier ",(0,r.kt)("inlineCode",{parentName:"p"},".?")," in plaats van de ",(0,r.kt)("inlineCode",{parentName:"p"},".")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"console.log(options.size?.height); // undefined\n")),(0,r.kt)("p",null,"en dan krijg je ook geen errors meer te zien.  Als je optional chaining gebruikt dan zal de hele expressie als undefined gezien worden als een van de elementen undefined is. In dit geval is ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," undefined, dus dan zal de height hiervan ook undefined zijn."),(0,r.kt)("h4",{id:"uitroepingsteken--of-non-null-operator"},"Uitroepingsteken (!.) of non null operator"),(0,r.kt)("p",null,"Heel zelden kom je in situaties terecht dat TypeScript denkt dat een bepaald veld ",(0,r.kt)("strong",{parentName:"p"},"undefined")," of ",(0,r.kt)("strong",{parentName:"p"},"null")," kan zijn. Als je zeker bent dat een bepaald veld nooit undefined kan zijn dan kan je ook de ",(0,r.kt)("inlineCode",{parentName:"p"},"!"),' operator gebruiken om een "Object is possibly undefined" error te vermijden.'," "),(0,r.kt)("p",null,"Bij de onderstaande code is de TypeScript compilator niet in staat zelf te bepalen of text undefined is of niet. Daarom moet je achter text een uitroepteken zetten om deze error te vermijden."," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "typescript", "filename": "index.ts" }',codesandbox:'{"template":','"typescript",':!0,'"filename":':!0,'"index.ts"':!0,"}":!0},'function duplicate(text?: string) {\n  let fixString = function () {\n    if (text === null || text === undefined) {\n      text = "";\n    }\n  };\n  fixString();\n\n  return text!.concat(text!);\n}\n\nconsole.log(duplicate("hello"));\n')))}c.isMDXComponent=!0}}]);