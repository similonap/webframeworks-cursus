"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Array/Object Destructuring",l={unversionedId:"typescript-revisited/array-object-destructuring",id:"typescript-revisited/array-object-destructuring",title:"Array/Object Destructuring",description:"Vaak willen we bepaalde delen van een object of array op een gemakkelijke manier aanspreken zonder dit uitdrukkelijk te doen aan de hand van de dot notatie (bij objecten) en de index (bij arrays)",source:"@site/docs/typescript-revisited/4-array-object-destructuring.md",sourceDirName:"typescript-revisited",slug:"/typescript-revisited/array-object-destructuring",permalink:"/docs/typescript-revisited/array-object-destructuring",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript-revisited/4-array-object-destructuring.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lazy evaluation",permalink:"/docs/typescript-revisited/lazy-evaluation"},next:{title:"Callbacks/Function types",permalink:"/docs/typescript-revisited/callbacks-function-types"}},s={},p=[{value:"Array Destructuring",id:"array-destructuring",level:3},{value:"Object Destructuring",id:"object-destructuring",level:3},{value:"Rest operator",id:"rest-operator",level:4},{value:"Hernoemen van keys",id:"hernoemen-van-keys",level:4},{value:"Default waarden",id:"default-waarden",level:4},{value:"Destructuring in functie parameters",id:"destructuring-in-functie-parameters",level:4},{value:"Function parameters opschonen",id:"function-parameters-opschonen",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"arrayobject-destructuring"},"Array/Object Destructuring"),(0,a.kt)("p",null,"Vaak willen we bepaalde delen van een object of array op een gemakkelijke manier aanspreken zonder dit uitdrukkelijk te doen aan de hand van de dot notatie (bij objecten) en de index (bij arrays)"),(0,a.kt)("h3",{id:"array-destructuring"},"Array Destructuring"),(0,a.kt)("p",null,"Zoals je weet kan je aan de hand van de array index bepaalde elementen aanspreken van een array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Een array die een voornaam en achternaam bevat\nlet arr : string[] = ['Andie', 'Similon'];\n\nlet firstName = arr[0];\nlet lastName = arr[1];\n\nconsole.log(firstName); // Andie\nconsole.log(lastName); // Similon\n")),(0,a.kt)("p",null,"Dit kan je ook schrijven als:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Een array die een voornaam en achternaam bevat\nlet arr : string[] = ['Andie', 'Similon'];\n\nlet [firstName, lastName] = arr;\n\nconsole.log(firstName); // Andie\nconsole.log(lastName); // Similon\n")),(0,a.kt)("p",null,"Dit concept noemen we ",(0,a.kt)("strong",{parentName:"p"},"Array Destructuring")),(0,a.kt)("p",null,"Wil je bepaalde elementen overslagen dan kan je dit doen op de volgende manier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let arr : string[] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];\nlet [firstName, , title] = arr;\n\nconsole.log(title); // Consul\n')),(0,a.kt)("p",null,"Wil je bijvoorbeeld alleen de eerste twee waarden in een variabele en de rest in een nieuwe array kan je dit doen aan de hand van de ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," notatie:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let arr : string[] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];\nlet [firstName, lastName, ...rest] = arr;\n\nconsole.log(firstName); // Julius\nconsole.log(lastName); // Caesar\nconsole.log(rest); // [\"Consul\", \"of the Roman Republic\"];\n")),(0,a.kt)("p",null,"De ",(0,a.kt)("inlineCode",{parentName:"p"},"rest")," variabele bevat dan de array van de laatste twee elementen."," "),(0,a.kt)("h3",{id:"object-destructuring"},"Object Destructuring"),(0,a.kt)("p",null,"Hetzelfde concept kan je ook gebruiken bij objecten. In plaats van"," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface Options {\n  title: string;\n  width?: number;\n  height?: number;\n}\n\nlet options : Options  = {\n  title: "Menu",\n  width: 100,\n  height: 200\n};\n\nlet title = options.title;\nlet width = options.width;\nlet height = options.height;\n')),(0,a.kt)("p",null,"te doen kan je dit veel compacter schrijven aan de hand van object destructuring:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let options : Options = {\n  title: "Menu",\n  width: 100,\n  height: 200\n};\n\nlet {title,width,height} = options;\n')),(0,a.kt)("p",null,"de volgorde maakt hier ook niet uit zolang de namen maar overeenkomen met de keys van het object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let {width,title,height} = options;\n")),(0,a.kt)("p",null,"mag dus ook."),(0,a.kt)("h4",{id:"rest-operator"},"Rest operator"),(0,a.kt)("p",null,"Uiteraard moet je hier niet alle keys opgeven en kan je ook maar een deel van de keys opgeven en de rest negeren:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let {title} = options;\n")),(0,a.kt)("p",null,"Je kan hier net zoals bij arrays ook gebruik maken van de ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," notatie (of rest operator)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let options : Options = {\n  title: "Menu",\n  height: 200,\n  width: 100\n};\n\n// title = property named title\n// rest = object with the rest of properties\nlet {title, ...rest} = options;\n\n// now title="Menu", rest={height: 200, width: 100}\nalert(rest.height);  // 200\nalert(rest.width);   // 100\n')),(0,a.kt)("h4",{id:"hernoemen-van-keys"},"Hernoemen van keys"),(0,a.kt)("p",null,"Willen we hier niet dezelfde namen gebruiken als de keys van het object is het ook mogelijk om deze een andere naam te geven:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let options : Options = {\n  title: "Menu",\n  width: 100,\n  height: 200\n};\n\n// { sourceProperty: targetVariable }\nlet {width: w, height: h, title} = options;\n\n// width -> w\n// height -> h\n// title -> title\n\nconsole.log(title);  // Menu\nconsole.log(w);      // 100\nconsole.log(h);      // 200\n')),(0,a.kt)("h4",{id:"default-waarden"},"Default waarden"),(0,a.kt)("p",null,"Als je naar de interface van ",(0,a.kt)("inlineCode",{parentName:"p"},"Options")," kijkt dan zie je dat de width en de height optioneel zijn. Als je deze leeg laat dan zijn ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," en ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," undefined bij het destructuren:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let options: Options = {\n  title: 'Menu',\n};\n\nlet { title, width, height } = options;\n \nconsole.log(width);  // undefined\nconsole.log(height); // undefined\n")),(0,a.kt)("p",null,"wil je dit voorkomen kan je dit doen aan de hand van default waarden op te geven"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let options: Options = {\n  title: 'Menu',\n};\n\nlet { title, width = 100 , height = 200 } = options;\n \nconsole.log(width);  // 100\nconsole.log(height); // 200\n")),(0,a.kt)("h4",{id:"destructuring-in-functie-parameters"},"Destructuring in functie parameters"),(0,a.kt)("p",null,"Je kan ook rechtstreeks in de functie parameters het object destructuren. Stel dat je de volgende functie hebt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let options : Options  = {\n  title: "Menu",\n  width: 100,\n  height: 200\n};\n\nconst showOptions = (options: Options) => {\n  console.log(options.title);\n  console.log(options.width);\n  console.log(options.height)\n}\n')),(0,a.kt)("p",null,"Je ziet hier dat we telkens de dot notatie moeten gebruiken voor title, width en height uit het ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," object moeten halen. Je zou uiteraard dit al kunnen vereenvoudigen door de ",(0,a.kt)("inlineCode",{parentName:"p"},"showOptions")," functie als volgt te schrijven:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const showOptions = (options: Options) => {\n  let {title,width, height} = options;\n  console.log(title);\n  console.log(width);\n  console.log(height);\n}\n")),(0,a.kt)("p",null,"maar je kan dit zelfs nog korter door rechtstreeks in de functie parameters  de destructuring operator te gebruiken:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const showOptions = ({title, width, height}: Options) => {\n  console.log(title);\n  console.log(width);\n  console.log(height)\n}\n")),(0,a.kt)("p",null,"Kort en bondig! Je kan dit zelfs combineren met default waarden"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const showOptions = ({title, width = 200, height = 100}: Options) => {\n  console.log(title);\n  console.log(width);\n  console.log(height)\n}\n")),(0,a.kt)("p",null,"als ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," dan niet zijn ingegeven dan zullen hier de default waarden gebruikt worden."),(0,a.kt)("h4",{id:"function-parameters-opschonen"},"Function parameters opschonen"),(0,a.kt)("p",null,"Het werken met object destructuring in functie parameters kan een manier zijn om functies met veel parameters te vereenvoudigen"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const f = (a:number, b: number, c: number, d: string, e: number, f: number, g: boolean) => {\n    // do something\n}\n\nf(0,2,4, "test",.... Euh.... ik weet het niet meer!)\n')),(0,a.kt)("p",null,"dit kan je ook herschrijven door alle parameters in een apart object in te pakken"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface Params {\n    a:number, b: number, c: number, d: string, e: number, f: number, g: boolean\n}\n\nconst f = ({a,b,c,d,e,f,g}: Params) => {\n    // do something\n}\n\nf({a:0,b:2,c:4,d:"test",e:6,f:8,g:true});\n')),(0,a.kt)("p",null,"Zo zie je exact welke parameter bij welke naam hoort."," "))}u.isMDXComponent=!0}}]);