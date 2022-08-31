"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[592],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,k=c["".concat(i,".").concat(u)]||c[u]||m[u]||o;return t?a.createElement(k,s(s({ref:n},d),{},{components:t})):a.createElement(k,s({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:2},s="Styling",l={unversionedId:"componenten/stylen",id:"componenten/stylen",title:"Styling",description:"Er zijn verschillende manieren om stylesheets toe te passen op React applicaties. De twee belangrijkste zijn:",source:"@site/docs/componenten/stylen.md",sourceDirName:"componenten",slug:"/componenten/stylen",permalink:"/webframeworks-cursus/componenten/stylen",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Folder structuur",permalink:"/webframeworks-cursus/componenten/opsplitsen"}},i={},p=[{value:"CSS Modules",id:"css-modules",level:2},{value:"Rechtstreeks importeren",id:"rechtstreeks-importeren",level:3},{value:"Werken met CSS modules",id:"werken-met-css-modules",level:3},{value:"CSS-in-JS",id:"css-in-js",level:2},{value:"Styled components",id:"styled-components",level:2},{value:"UI Frameworks",id:"ui-frameworks",level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"styling"},"Styling"),(0,r.kt)("p",null,"Er zijn verschillende manieren om stylesheets toe te passen op React applicaties. De twee belangrijkste zijn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CSS-in-CSS (CSS Modules)"),(0,r.kt)("li",{parentName:"ul"},"CSS-in-JS")),(0,r.kt)("p",null,"Elke aanpak heeft zijn voor- en nadelen."),(0,r.kt)("h2",{id:"css-modules"},"CSS Modules"),(0,r.kt)("p",null,"CSS Modules is de aanpak die het dichtst aanleunt bij traditionele css bestanden zoals deze gebruikt worden in statische HTML-pagina's. Alle elementen krijgen een ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," toegewezen en krijgen een style toegewezen via een CSS bestand. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In React gebruiken we niet ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," maar ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," omdat ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," een reserved keyword is in TypeScript. ")),(0,r.kt)("p",null,"In React willen we dat componenten zo veel mogelijk op zichzelf gebruikt kunnen worden. Zo kan \xe9\xe9n component zonder aanpassingen in verschillende applicaties gebruikt worden. Daarom maken we per component een apart CSS bestand aan. Het is technisch mogelijk om alles in \xe9\xe9n algemene file index.css te plaatsen, maar dan is de CSS-code voor \xe9\xe9n component gekoppeld aan die van alle andere componenten."),(0,r.kt)("h3",{id:"rechtstreeks-importeren"},"Rechtstreeks importeren"),(0,r.kt)("p",null,"Je kan CSS bestanden gebruiken in een React component door deze te importeren op de volgende manier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import './styles.css';\n")),(0,r.kt)("p",null,"Bijvoorbeeld de volgende ",(0,r.kt)("inlineCode",{parentName:"p"},"styles.css")," zorgt voor een rode achtergrond en gele letters voor ons ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/styles.css"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/styles.css"}':!0},".App {\n    padding: 10px;\n    background-color: red;\n    color: yellow\n}\n")),(0,r.kt)("p",null,"Het nadeel van deze manier is dat we moeten opletten dat al deze CSS bestanden niet dezelfde namen voor klassen gebruiken. Als dit wel gebeurt zullen deze CSS classes met elkaar botsen en zal de ene de andere overschrijven."),(0,r.kt)("h3",{id:"werken-met-css-modules"},"Werken met CSS modules"),(0,r.kt)("p",null,"Om het probleem van herhaalde klassen op te lossen, kunnen we gebruik maken van CSS modules. Het gebruik van modules is zeer gelijkaardig aan dat van gewone CSS bestanden, maar modules zijn ge\xefsoleerd van elkaar. Om gebruik te maken van de CSS Modules moet het CSS bestand de naam krijgen van de component, gevolgd door .module.css "),(0,r.kt)("p",null,"Als we nu gebruik willen maken van CSS modules in de App component, moeten we de CSS file hernoemen naar App.module.css en moeten we de manier van importeren aanpassen als volgt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import styles from './App.module.css';\n")),(0,r.kt)("p",null,"In plaats van de className property rechstreeks in te vullen, halen we deze uit het styles object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react-css-module", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react-css-module",':!0,'"filename":':!0,'"src/App.tsx"}':!0},"import styles from './App.module.css';\n\nconst App = () => {\n  return (\n    <div className={styles.App}>\n        <h1>Hello component</h1>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Visual studio code ondersteunt geen auto completion van CSS-Module styles. Je kan wel een plugin hier voor downloaden."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules"},"https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules"))),(0,r.kt)("h2",{id:"css-in-js"},"CSS-in-JS"),(0,r.kt)("p",null,"De manier van styling die we hierboven hebben toegepast is zeer gelijkaardig aan de werkwijze voor statische HTML-pagina's. In React kan je de styles ook rechtstreeks ook in JavaScript defini\xebren. Het voordeel van deze manier is dat we niet afhankelijk zijn van aparte CSS-bestanden."),(0,r.kt)("p",null,"De eerste manier om dit te doen is via inline styles. Je geeft rechtstreeks de styles mee aan de hand van de style property. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},"const Header = () => {\n  return (\n    <h1 style={{fontSize: '22pt', borderBottom: '2px solid black', textTransform: 'uppercase'}}>Welcome to the H2O Game shop</h1>\n  );\n}\n//hide-start\nconst App = () => {\n  return (\n    <Header/>\n  );\n}\n\nexport default App;\n//hide-end\n")),(0,r.kt)("p",null,"Je ziet dat we hier niet de schrijfwijze ",(0,r.kt)("inlineCode",{parentName:"p"},"font-size"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"border-bottom")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"text-transform")," gebruiken, die we wel in een CSS-bestand zouden gebruiken. De regel is hier dat we de camel case varianten gebruiken van CSS properties. Dit komt omdat JavaScript ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," interpreteert als een minteken en niet als geldig onderdeel van een identifier. Zo wordt bv ",(0,r.kt)("inlineCode",{parentName:"p"},"font-size")," dus ",(0,r.kt)("inlineCode",{parentName:"p"},"fontSize"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},"import { CSSProperties } from 'react';\n\nconst headerStyle : CSSProperties = {\n  fontSize: '22pt', borderBottom: '2px solid black', textTransform: 'uppercase'\n}\n\nconst Header = () => {\n  return (\n    <h1 style={headerStyle}>Welcome to the H2O Game shop</h1>\n  );\n}\n//hide-start\nconst App = () => {\n  return (\n    <Header/>\n  );\n}\n\nexport default App;\n//hide-end\n")),(0,r.kt)("h2",{id:"styled-components"},"Styled components"),(0,r.kt)("p",null,"Niet alle dingen die je kan gebruiken in CSS kan je in CSS-in-JS gebruiken. Dingen zoals animaties zijn hierdoor niet eenvoudig te implementeren. Daarom wordt er vaak voor CSS-in-JS gebruik gemaakt van de library styled-components."),(0,r.kt)("p",null,"Je kan deze eenvoudigweg installeren door volgende commando's uit te voeren:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install styled-components\nnpm install @types/styled-components\n")),(0,r.kt)("p",null,"Deze functionaliteit kan je dan importeren op de volgende manier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import styled from "styled-components"\n')),(0,r.kt)("p",null,"Zo kunnen we onze header component ook als volgt stylen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react-styled-components", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react-styled-components",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import styled from "styled-components"\n\n// merk op: backticks\nconst TitleHeader = styled.div`\n  font-size: 22pt;\n  border-bottom: 2px solid black;\n  text-transform: uppercase;\n`;\n\nconst Header = () => {\n  return (\n    <TitleHeader>Welcome to the H2O Game shop</TitleHeader>\n  );\n}\n\nexport default Header;\n')),(0,r.kt)("p",null,"Je merkt op dat we hier wel de standaard CSS properties kunnen gebruiken. Door middel van styled-components kunnen we zelfs meer geavanceerde functionaliteit gebruiken, zoals animaties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react-styled-components", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react-styled-components",':!0,'"filename":':!0,'"src/App.tsx"}':!0},"import styled, { keyframes } from 'styled-components'\n\nconst fadeIn = keyframes`\n  0% {\n    transform: translate(-300px, 0);\n    opacity: 0;\n  }\n  \n  20%, 80% {\n    transform: translate(0, 0);\n    opacity: 1;\n  }\n`;\n\nconst TitleHeader = styled.div`\n  font-size: 22pt;\n  text-transform: uppercase;\n  animation: 1s ${fadeIn} ease-out;\n`;\n\nconst Border = styled.div`\n  border-bottom: 2px solid black;\n`;\n\nconst Header = () => {\n  return (\n    <Border>\n        <TitleHeader>Welcome to the H2O Game shop</TitleHeader>\n    </Border>\n  );\n}\n\nexport default Header;\n")),(0,r.kt)("h2",{id:"ui-frameworks"},"UI Frameworks"),(0,r.kt)("p",null,"Er zijn een tal van frameworks die het gebruik van zelf CSS schrijven minimaliseren. Je maakt daar gebruik van herbruikbare componenten die allemaal al voor jou geschreven zijn. De meest bekende zijn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://material-ui.com/"},"https://material-ui.com/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://react-bootstrap.github.io/"},"https://react-bootstrap.github.io/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tailwindcss.com/"},"https://tailwindcss.com/"))),(0,r.kt)("p",null,"Deze vereenvoudigen het ontwikkelproces drastisch en zorgen ervoor dat er een bepaald design systeem wordt gebruikt. Dit zorgt ervoor dat het ontwikkelen van webapplicaties drastisch kan versneld worden."))}m.isMDXComponent=!0}}]);