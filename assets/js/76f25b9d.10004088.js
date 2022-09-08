"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),d=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,u=p["".concat(m,".").concat(h)]||p[h]||s[h]||a;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={},i="Context",l={unversionedId:"child-parent/context",id:"child-parent/context",title:"Context",description:"Delen van data via context",source:"@site/docs/child-parent/context.md",sourceDirName:"child-parent",slug:"/child-parent/context",permalink:"/webframeworks-cursus/child-parent/context",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Communicatie tussen componenten",permalink:"/webframeworks-cursus/child-parent/"},next:{title:"Recepten voor React.js",permalink:"/webframeworks-cursus/recepten/"}},m={},d=[{value:"Delen van data via context",id:"delen-van-data-via-context",level:2},{value:"Functies in context",id:"functies-in-context",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2},{value:"Globale API state",id:"globale-api-state",level:3}],c={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"context"},"Context"),(0,r.kt)("h2",{id:"delen-van-data-via-context"},"Delen van data via context"),(0,r.kt)("p",null,"In een React applicatie wordt data van het bovenste component doorgegeven naar het onderste component aan de hand van props. Dit is mogelijk in een applicatie waar de component structuur niet heel diep is, maar naar mate de applicatie groeit, groeit meestal ook de diepte van je componenten structuur. Je zal dan vaak een prop verschillende niveau's diep moeten doorgeven. Dit concept heet property drilling, en is in grote applicaties niet wenselijk."),(0,r.kt)("p",null,"Stel dat we een light theme en een dark theme willen ondersteunen in onze applicatie. Elk component heeft deze prop nodig want elk component moet zijn UI aanpassen als de theme light of dark is. "),(0,r.kt)("p",null,"Hieronder kan je een voorbeeld hiervan zien:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport { useState } from "react";\n\nconst getThemeStyle = (theme: string, color: string) => {\n    return { backgroundColor: theme === "dark" ? "black" : "white", padding: 10, border: "10px solid " + color }\n}\n//hide-end\nconst ComponentA = ({ theme }: { theme: string }) => {\n  return (\n    <div style={getThemeStyle(theme, "red")}>\n      <ComponentB theme={theme} />\n    </div>\n  );\n};\nconst ComponentB = ({ theme }: { theme: string }) => {\n  return (\n    <div style={getThemeStyle(theme, "green")}>\n      <ComponentC theme={theme} />\n    </div>\n  );\n};\nconst ComponentC = ({ theme }: { theme: string }) => {\n  return (\n    <div style={getThemeStyle(theme, "blue")}>\n      <ComponentD theme={theme} />\n    </div>\n  );\n};\nconst ComponentD = ({ theme }: { theme: string }) => {\n  return <p style={{color: theme === "dark" ? "white" : "black"}}>{theme}</p>;\n};\n\nconst App = () => {\n  const [theme, setTheme] = useState("light");\n  \n  return (\n    <>\n      <button onClick={()=>{ setTheme(theme => theme == "dark" ? "light" : "dark")}}>Toggle theme!</button>\n      <ComponentA theme={theme} />\n    </>\n  );\n};\n//hide-start\nexport default App;\n//hide-end\n')),(0,r.kt)("p",null,"Je ziet dat zelfs voor een kleine applicatie, zoals die hierboven, dat we deze theme prop al moeten doorgeven doorheen 3 niveaus van componenten. Bij grotere applicaties gaat dit nog veel erger worden. Daarom heeft React voor de Context API gezorgd. Dit is een manier om data te gaan delen doorheen componenten zonder door heel de structuur te moeten doorgegeven worden."),(0,r.kt)("p",null,"Het eerste wat we moeten doen is een Context aanmaken aan de hand van de createContext"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"\n\nexport const ThemeContext = React.createContext({theme: 'light'});\n")),(0,r.kt)("p",null,"Je moet altijd een default waarde meegeven aan de context. Deze default waarde wordt enkel gebruikt als er geen provider aanwezig is bovenaan in de component structuur. We geven hier een object met een mode property. Dus in ons geval zal onze layout dus standaard in light mode staan."),(0,r.kt)("p",null,"Nu moeten we een Provider maken van onze ThemeContext zodat we de values kunnen meegeven die we in de componenten willen gebruiken. De provider moet rond de bovenste component staan die onze context willen gebruiken."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const App = () => {\n  const [theme, setTheme] = useState("light");\n\n  return (\n    <ThemeContext.Provider value={{theme: theme}}>\n       <...>\n\n       </...>\n    </ThemeContext.Provider>\n  );\n};\n')),(0,r.kt)("p",null,"Nu kan je de values van de ThemeContext provider opvragen aan de hand van de ",(0,r.kt)("inlineCode",{parentName:"p"},"useContext")," hook. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport React, { useState, useContext } from "react";\n\nexport const ThemeContext = React.createContext({theme: \'light\'});\n\nconst getThemeStyle = (theme: string, color: string) => {\n  return { backgroundColor: theme === "dark" ? "black" : "white", padding: 10, border: "10px solid " + color }\n}\n//hide-end\nconst ComponentA = () => {\n  const {theme} = useContext(ThemeContext);\n  return (\n    <div style={getThemeStyle(theme, "red")}>\n      <ComponentB/>\n    </div>\n  );\n};\nconst ComponentB = () => {\n  const {theme} = useContext(ThemeContext);\n  return (\n    <div style={getThemeStyle(theme, "green")}>\n      <ComponentC />\n    </div>\n  );\n};\nconst ComponentC = () => {\n  const {theme} = useContext(ThemeContext);\n  return (\n    <div style={getThemeStyle(theme, "blue")}>\n      <ComponentD  />\n    </div>\n  );\n};\nconst ComponentD = () => {\n  const {theme} = useContext(ThemeContext);\n  return <p style={{color: theme === "dark" ? "white" : "black"}}>{theme}</p>;\n};\n\nconst App = () => {\n  const [theme, setTheme] = useState("light");\n\n  return (\n    <ThemeContext.Provider value={{theme: theme}}>\n        <>\n            <button onClick={()=>{ setTheme(theme => theme == "dark" ? "light" : "dark")}}>Toggle theme!</button>\n            <ComponentA />\n        </>\n    </ThemeContext.Provider>\n  );\n};\n//hide-start\nexport default App;\n//hide-end\n')),(0,r.kt)("p",null,"Je ziet nu dat elk component toegang heeft tot de mode variabele die we in de context hebben aangeboden zonder dat we deze moeten doorgeven doorheen de component hierarchie."),(0,r.kt)("h2",{id:"functies-in-context"},"Functies in context"),(0,r.kt)("p",null,"We kunnen ook functies toevoegen in onze ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemeContext")," zodat we bijvoorbeeld ook vanuit elk component de theme kunnen aanpassen. We voegen nu aan de createContext functie een setMode functie toe. We moeten hier een default value voor aanbieden, op dit moment hebben we nog geen handler dus we geven een lege functie mee."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'export const ThemeContext = React.createContext({theme: "light", setTheme: (theme: string) => {}});\n')),(0,r.kt)("p",null,"We moeten hier geen types voorzien want TypeScript kan uit de default value het type afleiden."),(0,r.kt)("p",null,"Als we nu de ",(0,r.kt)("inlineCode",{parentName:"p"},"setMode")," functie (van de useState) meegeven aan de provider dan is deze functie beschikbaar in elk component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'{2} codesandbox={"template": "react", "filename": "src/App.tsx"}',"{2}":!0,codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport React, { useState, useContext } from "react";\n\nexport const ThemeContext = React.createContext({theme: \'light\', setTheme: (theme: string)=>{}});\n\nconst getThemeStyle = (theme: string, color: string) => {\n  return { backgroundColor: theme === "dark" ? "black" : "white", padding: 10, border: "10px solid " + color }\n}\n\nconst ComponentA = () => {\n  const {theme} = useContext(ThemeContext);\n  return (\n    <div style={getThemeStyle(theme, "red")}>\n      <ComponentB/>\n    </div>\n  );\n};\nconst ComponentB = () => {\n  const {theme} = useContext(ThemeContext);\n  return (\n    <div style={getThemeStyle(theme, "green")}>\n      <ComponentC />\n    </div>\n  );\n};\nconst ComponentC = () => {\n  const {theme} = useContext(ThemeContext);\n  return (\n    <div style={getThemeStyle(theme, "blue")}>\n      <ComponentD  />\n    </div>\n  );\n};\n//hide-end\nconst ComponentD = () => {\n  const {theme,setTheme} = useContext(ThemeContext);\n  return <button onClick={() => { setTheme(theme === "dark" ? "light" : "dark")}} style={{backgroundColor: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black"}}>{theme}</button>;\n};\n//hide-start\nconst App = () => {\n  const [theme, setTheme] = useState("light");\n\n  return (\n    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>\n        <>\n            <button onClick={()=>{ setTheme(theme => theme == "dark" ? "light" : "dark")}}>Toggle theme!</button>\n            <ComponentA />\n        </>\n    </ThemeContext.Provider>\n  );\n};\nexport default App;\n//hide-end\n')),(0,r.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,r.kt)("h3",{id:"globale-api-state"},"Globale API state"))}s.isMDXComponent=!0}}]);