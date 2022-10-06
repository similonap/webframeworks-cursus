"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[7091],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,g=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:6},o="Array Methoden",l={unversionedId:"wf-course/typescript-revisited/array-methoden",id:"wf-course/typescript-revisited/array-methoden",title:"Array Methoden",description:"Het is belangrijk om te weten dat in React.js bijna nooit gewone for lussen worden gebruikt. Het is vaak mogelijk om ze te gebruiken, maar het maakt de code bijna onleesbaar. Daarom is het kennen van array methoden een van de belangrijkste dingen die je moet kennen voordat je met React.js kan beginnen.",source:"@site/docs/wf-course/typescript-revisited/array-methoden.md",sourceDirName:"wf-course/typescript-revisited",slug:"/wf-course/typescript-revisited/array-methoden",permalink:"/wf-course/typescript-revisited/array-methoden",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"wfCourse",previous:{title:"Callbacks/Function types",permalink:"/wf-course/typescript-revisited/callbacks-function-types"},next:{title:"Collections",permalink:"/wf-course/typescript-revisited/collections/"}},d={},s=[{value:"Map",id:"map",level:3},{value:"Filter",id:"filter",level:3},{value:"Reduce",id:"reduce",level:3},{value:"Find",id:"find",level:3},{value:"Slice",id:"slice",level:3}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"array-methoden"},"Array Methoden"),(0,a.kt)("p",null,"Het is belangrijk om te weten dat in React.js bijna nooit gewone for lussen worden gebruikt. Het is vaak mogelijk om ze te gebruiken, maar het maakt de code bijna onleesbaar. Daarom is het kennen van array methoden een van de belangrijkste dingen die je moet kennen voordat je met React.js kan beginnen."),(0,a.kt)("h3",{id:"map"},"Map"),(0,a.kt)("p",null,"De map() functie maakt een nieuwe array bestaande uit de resultaten van de callback functie op elk element van die array. Deze functie is de meest gebruikte functie in React.js, dus zorg er voor dat je deze onder de knie hebt."),(0,a.kt)("p",null,"Wil je bijvoorbeeld een array van getallen omzetten naar een nieuwe array maar waar de elementen verdubbeld zijn, kunnen we dit op de volgende manier doen"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'codesandbox={"template": "typescript", "filename": "index.ts" }',codesandbox:'{"template":','"typescript",':!0,'"filename":':!0,'"index.ts"':!0,"}":!0},"let numbers: number[] = [1,2,3,4,5];\nlet newArray: number[] = numbers.map(number => number * 2);\nconsole.log(newArray);\n")),(0,a.kt)("p",null,"Als we dit met een for lus zouden willen doen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "typescript", "filename": "index.ts" }',codesandbox:'{"template":','"typescript",':!0,'"filename":':!0,'"index.ts"':!0,"}":!0},"let numbers: number[] = [1,2,3,4,5];\nlet newArray: number[] = [];\nfor (let number of numbers) {\n    newArray.push(number*2);\n}\nconsole.log(newArray);\n")),(0,a.kt)("p",null,"We verkiezen altijd in react.js voor de oplossing met de map functie."),(0,a.kt)("h3",{id:"filter"},"Filter"),(0,a.kt)("p",null,"De filter() functie wordt heel vaak gebruikt bij het verbergen van bepaalde objecten in lijsten. Soms wil je niet de hele lijst van objecten te zien krijgen, maar een klein deel ervan dat voldoet aan een bepaalde filter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"characters.filter(age => age.age >= 30);\n")),(0,a.kt)("p",null,"geeft alleen de characters terug waarvan de leeftijd groter of gelijk is aan 30."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "typescript", "filename": "index.ts" }',codesandbox:'{"template":','"typescript",':!0,'"filename":':!0,'"index.ts"':!0,"}":!0},'interface Character {\n  name: string;\n  age: number;\n}\n\nlet characters = [\n  {\n    name: "Jinx",\n    age: 16\n  },\n  {\n    name: "Caitlyn",\n    age: 24\n  },\n  {\n    name: "Jayce",\n    age: 30\n  },\n  {\n    name: "Victor",\n    age: 30\n  },\n  {\n    name: "Heimerdinger",\n    age: 307\n  }\n];\n\nconsole.log(characters.filter((age) => age.age >= 30));\n\n')),(0,a.kt)("h3",{id:"reduce"},"Reduce"),(0,a.kt)("p",null,"De reduce() methode herleid een array naar een enkele waarde aan de hand van de meegegeven reducer functie. De return value van deze reducer functie wordt doorgegeven als argument aan de volgende reducer functie."),(0,a.kt)("p",null,"Dit lijkt een beetje complex, dus even een voorbeeld: Stel dat je een lijst hebt van een aantal getallen: 1,2,3,4 dan kan je deze lijst herleiden (reduceren) tot de som van dit getal. De functie die het volgende getal optelt bij het vorige noemen we dan de reducer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "typescript", "filename": "index.ts" }',codesandbox:'{"template":','"typescript",':!0,'"filename":':!0,'"index.ts"':!0,"}":!0},"let numbers : number[] = [1,2,3,4];\n\nconsole.log(numbers.reduce((sum, current)=>sum+current)); // 10\n")),(0,a.kt)("p",null,"Een voorbeeld waarvoor we reduce zouden kunnen gebruiken is het volgende: Stel dat we een lijst van objecten hebben met een id, en we willen een nieuw element toevoegen. Dan moeten we eerst op zoek gaan naar de hoogste id in de lijst objecten. We kunnen dit doen aan de hand van reduce:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "typescript", "filename": "index.ts" }',codesandbox:'{"template":','"typescript",':!0,'"filename":':!0,'"index.ts"':!0,"}":!0},'interface Book {\n  id: number;\n  name: string;\n}\n\nlet books : Book[] = [\n  {\n    id: 0,\n    name: "Game of thrones"\n  },\n  {\n    id: 1,\n    name: "Hitchhikers guide to the galaxy"\n  },\n  {\n    id: 2,\n    name: "Witcher"\n  },\n  {\n    id: 5,\n    name: "The expanse"\n  }\n];\n\n// highlight-next-line\nconsole.log(books.reduce((maxId, current) => (current.id > maxId ? current.id : maxId), 0)); // 5\n')),(0,a.kt)("p",null,"Je merkt hier op dat we hier een parameter 0 meegeven aan de reduce. Dat doen we omdat we hier de lijst niet willen reduceren tot een book object maar naar een getal. Daarom moeten we de start waarde meegeven."),(0,a.kt)("h3",{id:"find"},"Find"),(0,a.kt)("p",null,"De find() methode geeft de waarde terug van het eerste element van de array dat voldoet aan de meegegeven callback functie. Als er geen waarde voldoet aan de callback functie geeft deze undefined terug."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'console.log(characters.find((age) => age.age == 30));\n// {name: "Jayce", age: 30}\nconsole.log(characters.find((age) => age.age == 0));\n// undefined\n')),(0,a.kt)("h3",{id:"slice"},"Slice"),(0,a.kt)("p",null,"Array.slice() is een functie die gebruikt wordt om een deel van een array te kopi\xebren (extracten) in een nieuwe array.\\\n\\\n",(0,a.kt)("strong",{parentName:"p"},"Syntax:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," array.slice( begin [,end] ); \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameter:")," Deze methode aanvaard twee parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"begin :")," de zero based index van waar de extractie moet starten"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"end :")," de zero based index van waar de extractie moet eindigen")),(0,a.kt)("p",null,"Deze functie geeft een ",(0,a.kt)("strong",{parentName:"p"},"nieuwe array")," terug met daarin een deel van de array. De originele array wordt hier ",(0,a.kt)("strong",{parentName:"p"},"NIET aangepast"),"."," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let numbers: number[] = [0,1,2,3,4,5];\n\nconsole.log(numbers.slice(0,2)); // [0,1]\nconsole.log(numbers.slice(2,4)); // [2,3]\nconsole.log(numbers.slice(4,6)); // [4,5]\n")))}u.isMDXComponent=!0}}]);