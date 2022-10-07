"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[2416],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?t.createElement(y,i(i({ref:n},c),{},{components:r})):t.createElement(y,i({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9453:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Arrays/Objecten kopieren",s={unversionedId:"wf-course/typescript-revisited/arrays-objecten-kopieren",id:"wf-course/typescript-revisited/arrays-objecten-kopieren",title:"Arrays/Objecten kopieren",description:"Spread operator",source:"@site/docs/wf-course/typescript-revisited/arrays-objecten-kopieren.md",sourceDirName:"wf-course/typescript-revisited",slug:"/wf-course/typescript-revisited/arrays-objecten-kopieren",permalink:"/webframeworks-cursus/wf-course/typescript-revisited/arrays-objecten-kopieren",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"wfCourse",previous:{title:"TypeScript Revisited",permalink:"/webframeworks-cursus/wf-course/typescript-revisited/"},next:{title:"Omgaan met null/undefined",permalink:"/webframeworks-cursus/wf-course/typescript-revisited/optional-chaining"}},l={},p=[{value:"Spread operator",id:"spread-operator",level:3},{value:"Objecten kopi\xebren",id:"objecten-kopi\xebren",level:3}],c={toc:p};function d(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"arraysobjecten-kopieren"},"Arrays/Objecten kopieren"),(0,a.kt)("h3",{id:"spread-operator"},"Spread operator"),(0,a.kt)("p",null,"Het is vaak nodig in deze cursus om kopie\xebn te maken van arrays. Je zou misschien denken dat de volgende code een kopie van een array maakt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let array : number[] = [1,2,3,4];\nlet newArray : number[] = array;\n")),(0,a.kt)("p",null,"maar niets is minder waar! In de code hierboven wordt gewoon de referentie naar ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," toegewezen aan de variabele ",(0,a.kt)("inlineCode",{parentName:"p"},"newArray"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," en ",(0,a.kt)("inlineCode",{parentName:"p"},"newArray")," verwijzen gewoon naar dezelfde plaats in het geheugen. Het onderstaande voorbeeld toont dit aan:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let array : number[] = [1,2,3,4];\nlet newArray : number[] = array;\n\nnewArray.push(5);\nconsole.log(array); // 1,2,3,4,5\nconsole.log(newArray); // 1,2,3,4,5\n")),(0,a.kt)("p",null,"Als je een kopie van een array moet maken dan ga je gebruik moeten maken van de spread syntax (drie puntjes)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let array : number[] = [1,2,3,4];\nlet newArray : number[] = [...array];\n\nnewArray.push(5);\nconsole.log(array); // 1,2,3,4\nconsole.log(newArray); // 1,2,3,4,5\n")),(0,a.kt)("p",null,"Beide verwijzen nu naar een aparte plaats in het geheugen."),(0,a.kt)("h3",{id:"objecten-kopi\xebren"},"Objecten kopi\xebren"),(0,a.kt)("p",null,"Het bovenstaande geldt ook voor objecten:"," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let andie = { name: 'Andie Similon', age: 37 };\nlet clone = andie;\n\nclone.name = 'Clone Similon';\n\nconsole.log(andie); // Clone Similon\nconsole.log(clone); // Clone Similon\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let andie = { name: 'Andie Similon', age: 37 };\nlet clone = {...andie};\n\nclone.name = 'Clone Similon';\n\nconsole.log(andie); // Andie Similon\nconsole.log(clone); // Clone Similon\n")),(0,a.kt)("p",null,"Het is wel belangrijk dat je weet dat je hiermee enkel objecten kan kopi\xebren met 1 niveau diep."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let address = { street: '123 fakestreet' };\nlet andie = { name: 'Andie Similon', age: 37, address: address };\nlet clone = { ...andie };\n\nclone.name = 'Clone Similon';\nclone.address.street = '234 fakestreet';\n\nconsole.log(andie.address.street); // 234 fakestreet\nconsole.log(clone.address.street); // 234 fakestreet\n")),(0,a.kt)("p",null,"Beide address velden wijzen naar hetzelfde object."," "),(0,a.kt)("p",null,"Het kopi\xebren van objecten van meerdere niveau's diep noemen ze vaak een ",(0,a.kt)("strong",{parentName:"p"},"'deep copy'")," van het object. De beste manier om dit te doen is momenteel door eerst het object om te zetten naar een JSON-string en dan direct terug om te zetten naar een object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let address = { street: '123 fakestreet' };\nlet andie = { name: 'Andie Similon', age: 37, address: address };\nlet clone = JSON.parse(JSON.stringify(andie));\n\nclone.name = 'Clone Similon';\nclone.address.street = '234 fakestreet';\n\nconsole.log(andie.address.street); // 123 Fakestreet\nconsole.log(clone.address.street); // 234 Fakestreet\n")))}d.isMDXComponent=!0}}]);