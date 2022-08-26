"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[441],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,k=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={},i="Create React App",p={unversionedId:"create-react-app/README",id:"create-react-app/README",title:"Create React App",description:"Create React App",source:"@site/docs/create-react-app/README.md",sourceDirName:"create-react-app",slug:"/create-react-app/",permalink:"/webframeworks-cursus/docs/create-react-app/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/create-react-app/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/webframeworks-cursus/docs/intro"},next:{title:"Inleiding",permalink:"/webframeworks-cursus/docs/inleiding/"}},l={},s=[{value:"Create React App",id:"create-react-app-1",level:3},{value:"Je eerste component",id:"je-eerste-component",level:3}],d={toc:s};function c(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-react-app"},"Create React App"),(0,r.kt)("h3",{id:"create-react-app-1"},"Create React App"),(0,r.kt)("p",null,"We gebruiken ",(0,r.kt)("inlineCode",{parentName:"p"},"create-react-app")," om snel een eerste applicatie op te zetten. Dit is een startscript om snel een React applicatie aan te maken. Het vereist geen configuratie en wordt aangeraden voor beginnende React gebruikers."),(0,r.kt)("p",null,"Voordat we kunnen werken met de ",(0,r.kt)("inlineCode",{parentName:"p"},"create-react-app")," kijk je best ook nog na of je ",(0,r.kt)("inlineCode",{parentName:"p"},"npx")," hebt geinstalleerd op jouw machine. Normaal wordt dit mee ge\xefnstalleerd met ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," en ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),"."),(0,r.kt)("p",null,"Je kan dit nakijken door op de command line ",(0,r.kt)("inlineCode",{parentName:"p"},"npx --version")," te typen."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npx")," laat toe om tooling te gebruiken zonder die eerst te installeren op jouw machine. Zo heb je altijd de laatste nieuwe versie van deze tool. Je zou eventueel deze ook kunnen installeren op jouw machine met ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install -g"),", maar dan zou je zelf verantwoordelijk zijn voor het updaten van deze tool."),(0,r.kt)("p",null,"Nu we dit klaar hebben staan kunnen we onze eerste React applicatie aanmaken door volgend commando uit te voeren:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx create-react-app our-first-react-app --template typescript\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Let op dat je het stuk ",(0,r.kt)("inlineCode",{parentName:"p"},"--template typescript")," niet vergeet. We werken in deze cursus met TypeScript. Anders wordt er een React applicatie gemaakt in JavaScript.")),(0,r.kt)("p",null,"We kunnen nu de folder ",(0,r.kt)("inlineCode",{parentName:"p"},"our-first-react-app")," openen in Visual Studio Code en naar de inhoud van het project kijken:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-react-app maakt veel bestanden aan. In het begin zullen we er niet veel aanpassen.",src:t(2986).Z,width:"467",height:"636"})),(0,r.kt)("p",null,"Hier merk je onder andere volgende bestanden en folders in op:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"node","_","modules")," deze folder bevat alle packages die werden ge\xefnstalleerd bij het runnen van het ",(0,r.kt)("inlineCode",{parentName:"li"},"create-react-app")," commando. Alle packages die je zelf installeert met ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install")," zullen ook in deze folder terecht komen. ",(0,r.kt)("strong",{parentName:"li"},"Normaal doe je nooit rechtstreeks aanpassingen in deze folder.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"package.json")," beschrijft welke packages ge\xefnstalleerd moeten zijn om deze applicatie uit te voeren. We noemen dit ook de ",(0,r.kt)("strong",{parentName:"li"},"dependencies")," van de applicatie. Het ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install")," commando zal deze dependencies dan installeren in de ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," folder."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"src")," bevat de eigenlijke bestanden die rechtstreeks te maken hebben met react. Hier zal jouw broncode in komen. Het belangrijkste bestand op dit moment is het ",(0,r.kt)("inlineCode",{parentName:"li"},"App.tsx")," bestand. Daar zullen we eerst onze eerste React code schrijven. Later zullen we dit opsplitsen in verschillende bestanden om het overzicht te bewaren."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"public")," bevat het HTML-bestand waarin de react applicatie zal getoond worden. Hier moet je meestal niets voor aanpassen want alle visuele componenten worden in react zelf gerenderd. Deze folder bevat ook andere dingen zoals het icoontje dat je in het tabblad van je browser ziet.")),(0,r.kt)("p",null,"Je kan de applicatie opstarten door ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," uit te voeren in je terminal venster. Als alles in orde is zal je browser automatisch openen op de eerste en enige pagina van jouw webapplicatie:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"De starter applicatie ziet er normaal zo uit in je browser.",src:t(4683).Z,width:"1563",height:"1347"})),(0,r.kt)("h3",{id:"je-eerste-component"},"Je eerste component"),(0,r.kt)("p",null,"Alle React applicaties zijn gebouwd uit verschillende React ",(0,r.kt)("strong",{parentName:"p"},"componenten"),". Componenten stellen afgebakende stukjes van de applicatie voor. Ze worden in moderne React code uitgedrukt als functies. Ze accepteren invoerwaarden (deze noemen we \u201cprops\u201d) en geven een beschrijving terug van wat er in de gegenereerde pagina zou moeten staan. Met componenten splits je de UI in onafhankelijke, herbruikbare delen."),(0,r.kt)("p",null,"Het eerste component waar je altijd mee in aanraking zal komen kan je vinden in het ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," bestand. Deze zal er een beetje zoals het onderstaand bestand uitzien:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react-starter", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react-starter",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import React from \'react\';\nimport logo from \'./logo.svg\';\nimport \'./App.css\';\n\nfunction App() {\n  return (\n    <div className="App">\n      <header className="App-header">\n        <img src={logo} className="App-logo" alt="logo" />\n        <p>\n          Edit <code>src/App.tsx</code> and save to reload.\n        </p>\n        <a\n          className="App-link"\n          href="https://reactjs.org"\n          target="_blank"\n          rel="noopener noreferrer"\n        >\n          Learn React\n        </a>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Je bestand heet ",(0,r.kt)("inlineCode",{parentName:"p"},"App"),(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},".tsx")),", niet ",(0,r.kt)("inlineCode",{parentName:"p"},"App.ts"),". Het bevat geen alledaagse TypeScript code. Het maakt ook gebruik van de TSX-syntax, die verderop wordt uitgelegd. Als je de extensie verkeerd invult, zal je een foutmelding krijgen.")),(0,r.kt)("p",null,"We zullen nu even het component herleiden tot de essentie door wat overbodige boilerplate code weg te halen. Zo bekomen we tot een heel eenvoudige ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello world")," applicatie:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import React from "react";\n\nconst App = () => {\n  return (\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"We zien hier een aantal dingen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We zien hier eigenlijk gewoon een eenvoudige functie. We noemen deze in React geen functie maar een ",(0,r.kt)("strong",{parentName:"li"},"function component"),". Op deze manier maken we het onderscheid duidelijk met functies die werk verrichten dat niet rechstreeks zichtbaar is."),(0,r.kt)("li",{parentName:"ul"},"Deze function component heeft geen parameters, maar in verdere delen zullen we zien dat we ook parameters kunnen meegeven aan componenten. Parameters van een component heten ",(0,r.kt)("strong",{parentName:"li"},"props"),"."),(0,r.kt)("li",{parentName:"ul"},"Deze functie returnt een waarde die genoteerd is in een HTML-achtige syntax. Deze HTML-achtige syntax heet ",(0,r.kt)("strong",{parentName:"li"},"TSX"),". Ook al ziet dit er grotendeels uit als HTML, is het eigenlijk TypeScript.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Om TSX over meerdere regels te kunnen spreiden zonder last te hebben van automatische puntkomma's, zetten we de hele TSX-expressie tussen ronde haakjes."),(0,r.kt)("li",{parentName:"ul"},"Af en toe zijn er lichte verschillen met echte HTML. Je ziet dit bijvoorbeeld aan het gebruik van ",(0,r.kt)("inlineCode",{parentName:"li"},"className"),". In echte HTML is dit ",(0,r.kt)("inlineCode",{parentName:"li"},"class"),".")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Wanneer React gebruikt wordt met JavaScript, spreekt men over JSX in plaats van TSX.")),(0,r.kt)("p",null,"Omdat de component een functie is, kunnen we in de body van de functie alles doen wat onder normale omstandigheden kan in TypeScript functies. We kunnen bijvoorbeeld, voor we de ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," uitvoeren, variabelen initialiseren en berekeningen uitvoeren:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react-starter", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react-starter",':!0,'"filename":':!0,'"src/App.tsx"}':!0},"import React from 'react';\n\nconst App = () => {\n  // we bevinden ons in de body van een TypeScript functie\n  // we kunnen dus variabelen aanmaken zoals anders\n  const title = \"World\";\n  return (\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  );\n}\n\nexport default App;\n")))}c.isMDXComponent=!0},2986:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/react-project-folder-contents-dfef79d1ba7cab11783d7e7181f83b06.png"},4683:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/screenshot-react-starter-1a79e5422a72cf662c1f9eb5a05dcb0e.png"}}]);