"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[925],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:3},o="TSX",l={unversionedId:"tsx/README",id:"tsx/README",title:"TSX",description:"TSX is eigenlijk TypeScript code. Dus is het mogelijk TypeScript-expressies te integreren in de gegenereerde output. Als we de title variabele willen renderen tussen de h1 tags kunnen we deze als volgt toevoegen:",source:"@site/docs/tsx/README.md",sourceDirName:"tsx",slug:"/tsx/",permalink:"/webframeworks-cursus/tsx/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create React App",permalink:"/webframeworks-cursus/create-react-app/"},next:{title:"Lijsten",permalink:"/webframeworks-cursus/lijsten/"}},p={},s=[{value:"Verschillende namen en werking attributen",id:"verschillende-namen-en-werking-attributen",level:3},{value:"Conditionele rendering",id:"conditionele-rendering",level:3},{value:"Met een if statement",id:"met-een-if-statement",level:4},{value:"JSX in een variabele",id:"jsx-in-een-variabele",level:4},{value:"Inline If-Else met conditional ? operator",id:"inline-if-else-met-conditional--operator",level:4},{value:"Inline If met logische &amp;&amp; operator",id:"inline-if-met-logische--operator",level:4},{value:"Geneste accolades",id:"geneste-accolades",level:3},{value:"Fragments",id:"fragments",level:3}],d={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tsx"},"TSX"),(0,a.kt)("p",null,"TSX is eigenlijk TypeScript code. Dus is het mogelijk TypeScript-expressies te integreren in de gegenereerde output. Als we de ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," variabele willen renderen tussen de h1 tags kunnen we deze als volgt toevoegen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import React from "react";\n\nconst App = () => {\n  const title = "World";\n  // let op de accolades rond title in de JSX-expressie hieronder\n  return (\n    <div>\n      <h1>Hello {title}</h1>\n    </div>\n  );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"Waarden die in deze accolades verschijnen, worden omgezet naar inhoud van de HTML. Breed gesproken gebeurt dit door de waarden gewoonweg als tekst voor te stellen. De variabele ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," heeft het type string, dus de toegekende tekst ",(0,a.kt)("inlineCode",{parentName:"p"},'"World"')," wordt gewoonweg ingevoegd in de HTML."),(0,a.kt)("p",null,"Hier zijn enkele uitzonderingen op: ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," en ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," worden niet omgezet. Ze verdwijnen gewoon uit de output. Dit zie je als je volgende code uitvoert:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h1>Hello {title.toUpperCase()}</h1>\n")),(0,a.kt)("p",null,"of:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h1>1+1 = {1+1}</h1>\n")),(0,a.kt)("p",null,"Je kan zelfs functies uitvoeren en het resultaat hiervan laten zien:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import React from "react";\n\nconst getGreeting = () => {\n  return "Hello World";\n};\n\nconst App = () => {\n  return (\n    <div>\n      <h1>{getGreeting()}</h1>\n    </div>\n  );\n};\n\nexport default App;\n')),(0,a.kt)("h3",{id:"verschillende-namen-en-werking-attributen"},"Verschillende namen en werking attributen"),(0,a.kt)("p",null,"Enkele attributen van tags hebben in TSX een andere naam of volgen andere afspraken in React dan in HTML. Dit komt bijvoorbeeld omdat deze attributen een naam hebben die niet gebruikt mag worden in TypeScript of omdat de werking van een bepaald attribuut in HTML duidelijke tekortkomingen vertoont."),(0,a.kt)("p",null,"We lijsten ze hier niet allemaal op. Deze verschillen zullen vermeld worden waar ze een probleem kunnen stellen. Het enige verschil dat we hier meegeven: het ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," attribuut van een HTML-element wordt het ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," attribuut van een TSX-element. Dit komt omdat ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," een woord met een speciale betekenis is in TypeScript / JavaScript."),(0,a.kt)("p",null,"Een volledige lijst met verschillen vind je ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/dom-elements.html"},"hier")," in de documentatie van React."),(0,a.kt)("h3",{id:"conditionele-rendering"},"Conditionele rendering"),(0,a.kt)("p",null,"Conditionele rendering in React werkt op dezelfde manier als condities werken in TypeScript. Je kan hiervoor een if statement gebruiken of de conditionele operator (vraagteken operator) en afhankelijk hiervan UI elementen te tonen."),(0,a.kt)("h4",{id:"met-een-if-statement"},"Met een if statement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport React from "react";\n//hide-end\nconst App = () => {\n  let random : number = Math.random();\n  if (random > 0.5) {\n    return <p>We hebben geluk gehad</p>\n  } else {\n    return <p>We hebben pech gehad</p>\n  }\n};\n//hide-start\nexport default App;\n//hide-end\n')),(0,a.kt)("h4",{id:"jsx-in-een-variabele"},"JSX in een variabele"),(0,a.kt)("p",null,"Het is perfect mogelijk om JSX toe te kennen aan een variabele en deze dan op een later moment te renderen. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport React from "react";\n//hide-end\nconst App = () => {\n  let random : number = Math.random();\n  let luckyText : JSX.Element;\n  if (random > 0.5) {\n    luckyText = <p>We hebben geluk gehad</p>\n  } else {\n    luckyText = <p>We hebben pech gehad</p>\n  }\n  return <div>{luckyText}</div>\n};\n//hide-start\nexport default App;\n//hide-end\n')),(0,a.kt)("h4",{id:"inline-if-else-met-conditional--operator"},"Inline If-Else met conditional ? operator"),(0,a.kt)("p",null,"Een andere manier om een ",(0,a.kt)("inlineCode",{parentName:"p"},"If-Else")," conditie na te bootsen is met het gebruik van de conditional operator. Dit zal er als volgt uitzien:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport React from "react";\n//hide-end\nconst App = () => {\n  let random : number = Math.random();\n  return (\n    <p>{random > 0.5 ? <p>We hebben geluk gehad</p> : <p>We hebben pech gehad</p>}</p>\n  );\n};\n//hide-start\nexport default App;\n//hide-end\n')),(0,a.kt)("h4",{id:"inline-if-met-logische--operator"},"Inline If met logische && operator"),(0,a.kt)("p",null,"Als je enkel iets wil tonen als een bepaalde conditie waar is kan je ook gebruik maken van de ",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," operator. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport React from "react";\n//hide-end\nconst App = () => {\n  let random : number = Math.random();\n  return (\n    <p>{random > 0.5 && <p>We hebben geluk gehad</p>}</p>\n  );\n};\n//hide-start\nexport default App;\n//hide-end\n')),(0,a.kt)("h3",{id:"geneste-accolades"},"Geneste accolades"),(0,a.kt)("p",null,"Accolades zijn nodig om te wisselen van de HTML-achtige syntax naar de klassieke TypeScript syntax. Binnenin deze syntax kan weer naar de HTML-achtige syntax gewisseld worden, enzovoort. Dit wordt hier gedemonstreerd:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import React from "react";\n\nconst getLuckText = () => "We hebben geluk gehad";\nconst getBadLuckText = () => "We hebben pech gehad";\n\nconst App = () => {\n  return (\n    <>{\n      Math.random() > 0.5 ? \n        <p>{getLuckText()}</p> : \n        <p>{getBadLuckText()}</p>\n       }\n    </>\n  );\n};\n\nexport default App;\n')),(0,a.kt)("h3",{id:"fragments"},"Fragments"),(0,a.kt)("p",null,"Function components worden verwacht \xe9\xe9n TSX-expressie terug te geven. Nochtans wordt niet elke component naar exact \xe9\xe9n HTML-element omgezet in de uiteindelijk geproduceerde pagina. Anders gezegd: ",(0,a.kt)("strong",{parentName:"p"},"\xe9\xe9n")," component ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," kan niet rechtstreeks omgezet worden naar ",(0,a.kt)("strong",{parentName:"p"},"twee of meer")," HTML-elementen ",(0,a.kt)("strong",{parentName:"p"},"die siblings zijn")," in het Document Object Model. Volgende code is dus niet uitvoerbaar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},"const App = () => {\n  return (\n    <h1>Titel van mijn boek</h1>\n    <h2>Eerste hoofdstuk</h2>\n    <h2>Tweede hoofdstuk</h2>\n  );\n}\n")),(0,a.kt)("p",null,"Dit gaat niet, omdat er drie TSX-expressies op hetzelfde niveau staan. De ",(0,a.kt)("inlineCode",{parentName:"p"},"h2"),"-elementen zijn niet genest in het ",(0,a.kt)("inlineCode",{parentName:"p"},"h1"),"-element."),(0,a.kt)("p",null,"Hoger op deze pagina hebben we het probleem omzeild door elementen in een ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," te plaatsen. Dit soort element is heel algemeen en voegt vaak overbodige ballast toe aan een pagina. Daarom is het beter om het zo spaarzaam mogelijk te gebruiken. Hier is een eenvoudige oplossing voor: de drie expressies in een grotere expressie plaatsen die niet vertaald wordt naar HTML. Een dergelijke expressie heet een ",(0,a.kt)("strong",{parentName:"p"},"fragment"),". Er bestaat een langere notatie en een kortere notatie voor fragments. Met de langere notatie kan bovenstaande code als volgt herschreven worden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},"const App = () => {\n  return (\n    <Fragment>\n      <h1>Titel van mijn boek</h1>\n      <h2>Eerste hoofdstuk</h2>\n      <h2>Tweede hoofdstuk</h2>\n    </Fragment>\n  );\n}\n")),(0,a.kt)("p",null,"In de korte notatie ziet een fragment er uit als een tag zonder naam:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import React from "react";\n\nconst App = () => {\n  return (\n    <>\n      <h1>Titel van mijn boek</h1>\n      <h2>Eerste hoofdstuk</h2>\n      <h2>Tweede hoofdstuk</h2>\n    </>\n  );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"Meestal wordt de korte notatie gebruikt."))}c.isMDXComponent=!0}}]);