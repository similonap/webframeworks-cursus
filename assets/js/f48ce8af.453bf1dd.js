"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="TSX",l={unversionedId:"tsx/README",id:"tsx/README",title:"TSX",description:"TSX is eigenlijk TypeScript code. Dus is het mogelijk TypeScript-expressies te integreren in de gegenereerde output. Als we de title variabele willen renderen tussen de h1 tags kunnen we deze als volgt toevoegen:",source:"@site/docs/tsx/README.md",sourceDirName:"tsx",slug:"/tsx/",permalink:"/webframeworks-cursus/tsx/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create React App",permalink:"/webframeworks-cursus/create-react-app/"},next:{title:"Lijsten",permalink:"/webframeworks-cursus/lijsten/"}},s={},p=[{value:"Verschillende namen en werking attributen",id:"verschillende-namen-en-werking-attributen",level:3},{value:"Geneste accolades",id:"geneste-accolades",level:3},{value:"Fragments",id:"fragments",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tsx"},"TSX"),(0,a.kt)("p",null,"TSX is eigenlijk TypeScript code. Dus is het mogelijk TypeScript-expressies te integreren in de gegenereerde output. Als we de ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," variabele willen renderen tussen de h1 tags kunnen we deze als volgt toevoegen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import React from "react";\n\nconst App = () => {\n  const title = "World";\n  // let op de accolades rond title in de JSX-expressie hieronder\n  return (\n    <div>\n      <h1>Hello {title}</h1>\n    </div>\n  );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"Waarden die in deze accolades verschijnen, worden omgezet naar inhoud van de HTML. Breed gesproken gebeurt dit door de waarden gewoonweg als tekst voor te stellen. De variabele ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," heeft het type string, dus de toegekende tekst ",(0,a.kt)("inlineCode",{parentName:"p"},'"World"')," wordt gewoonweg ingevoegd in de HTML."),(0,a.kt)("p",null,"Hier zijn enkele uitzonderingen op: ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," en ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," worden niet omgezet. Ze verdwijnen gewoon uit de output. Dit zie je als je volgende code uitvoert:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h1>Hello {title.toUpperCase()}</h1>\n")),(0,a.kt)("p",null,"of:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h1>1+1 = {1+1}</h1>\n")),(0,a.kt)("p",null,"Je kan zelfs functies uitvoeren en het resultaat hiervan laten zien:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import React from "react";\n\nconst getGreeting = () => {\n  return "Hello World";\n};\n\nconst App = () => {\n  return (\n    <div>\n      <h1>{getGreeting()}</h1>\n    </div>\n  );\n};\n\nexport default App;\n')),(0,a.kt)("h3",{id:"verschillende-namen-en-werking-attributen"},"Verschillende namen en werking attributen"),(0,a.kt)("p",null,"Enkele attributen van tags hebben in TSX een andere naam of volgen andere afspraken in React dan in HTML. Dit komt bijvoorbeeld omdat deze attributen een naam hebben die niet gebruikt mag worden in TypeScript of omdat de werking van een bepaald attribuut in HTML duidelijke tekortkomingen vertoont."),(0,a.kt)("p",null,"We lijsten ze hier niet allemaal op. Deze verschillen zullen vermeld worden waar ze een probleem kunnen stellen. Het enige verschil dat we hier meegeven: het ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," attribuut van een HTML-element wordt het ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," attribuut van een TSX-element. Dit komt omdat ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," een woord met een speciale betekenis is in TypeScript / JavaScript."),(0,a.kt)("p",null,"Een volledige lijst met verschillen vind je ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/dom-elements.html"},"hier")," in de documentatie van React."),(0,a.kt)("h3",{id:"geneste-accolades"},"Geneste accolades"),(0,a.kt)("p",null,"Accolades zijn nodig om te wisselen van de HTML-achtige syntax naar de klassieke TypeScript syntax. Binnenin deze syntax kan weer naar de HTML-achtige syntax gewisseld worden, enzovoort. Dit wordt hier gedemonstreerd:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import React from "react";\n\nconst getLuckText = () => "We hebben geluk gehad";\nconst getBadLuckText = () => "We hebben pech gehad";\n\nconst App = () => {\n  return (\n    <>{\n      Math.random() > 0.5 ? \n        <p>{getLuckText()}</p> : \n        <p>{getBadLuckText()}</p>\n       }\n    </>\n  );\n};\n\nexport default App;\n')),(0,a.kt)("h3",{id:"fragments"},"Fragments"),(0,a.kt)("p",null,"Function components worden verwacht \xe9\xe9n TSX-expressie terug te geven. Nochtans wordt niet elke component naar exact \xe9\xe9n HTML-element omgezet in de uiteindelijk geproduceerde pagina. Anders gezegd: ",(0,a.kt)("strong",{parentName:"p"},"\xe9\xe9n")," component ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," kan niet rechtstreeks omgezet worden naar ",(0,a.kt)("strong",{parentName:"p"},"twee of meer")," HTML-elementen ",(0,a.kt)("strong",{parentName:"p"},"die siblings zijn")," in het Document Object Model. Volgende code is dus niet uitvoerbaar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},"const App = () => {\n  return (\n    <h1>Titel van mijn boek</h1>\n    <h2>Eerste hoofdstuk</h2>\n    <h2>Tweede hoofdstuk</h2>\n  );\n}\n")),(0,a.kt)("p",null,"Dit gaat niet, omdat er drie TSX-expressies op hetzelfde niveau staan. De ",(0,a.kt)("inlineCode",{parentName:"p"},"h2"),"-elementen zijn niet genest in het ",(0,a.kt)("inlineCode",{parentName:"p"},"h1"),"-element."),(0,a.kt)("p",null,"Hoger op deze pagina hebben we het probleem omzeild door elementen in een ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," te plaatsen. Dit soort element is heel algemeen en voegt vaak overbodige ballast toe aan een pagina. Daarom is het beter om het zo spaarzaam mogelijk te gebruiken. Hier is een eenvoudige oplossing voor: de drie expressies in een grotere expressie plaatsen die niet vertaald wordt naar HTML. Een dergelijke expressie heet een ",(0,a.kt)("strong",{parentName:"p"},"fragment"),". Er bestaat een langere notatie en een kortere notatie voor fragments. Met de langere notatie kan bovenstaande code als volgt herschreven worden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},"const App = () => {\n  return (\n    <Fragment>\n      <h1>Titel van mijn boek</h1>\n      <h2>Eerste hoofdstuk</h2>\n      <h2>Tweede hoofdstuk</h2>\n    </Fragment>\n  );\n}\n")),(0,a.kt)("p",null,"In de korte notatie ziet een fragment er uit als een tag zonder naam:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import React from "react";\n\nconst App = () => {\n  return (\n    <>\n      <h1>Titel van mijn boek</h1>\n      <h2>Eerste hoofdstuk</h2>\n      <h2>Tweede hoofdstuk</h2>\n    </>\n  );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"Meestal wordt de korte notatie gebruikt."))}c.isMDXComponent=!0}}]);