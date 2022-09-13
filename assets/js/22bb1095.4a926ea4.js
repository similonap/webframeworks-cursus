"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[970],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(t),u=r,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return t?o.createElement(h,i(i({ref:n},c),{},{components:t})):o.createElement(h,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<a;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var o=t(7462),r=(t(7294),t(3905));const a={},i="Context",s={unversionedId:"wf-course/child-parent/context",id:"wf-course/child-parent/context",title:"Context",description:"Delen van data via context",source:"@site/docs/wf-course/child-parent/context.md",sourceDirName:"wf-course/child-parent",slug:"/wf-course/child-parent/context",permalink:"/webframeworks-cursus/wf-course/child-parent/context",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wfCourse",previous:{title:"Communicatie tussen componenten",permalink:"/webframeworks-cursus/wf-course/child-parent/"},next:{title:"Recepten voor React.js",permalink:"/webframeworks-cursus/wf-course/recepten/"}},l={},m=[{value:"Delen van data via context",id:"delen-van-data-via-context",level:2},{value:"Functies in context",id:"functies-in-context",level:2},{value:"Globale state",id:"globale-state",level:2}],c={toc:m};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"context"},"Context"),(0,r.kt)("h2",{id:"delen-van-data-via-context"},"Delen van data via context"),(0,r.kt)("p",null,"In een React applicatie wordt data van het bovenste component doorgegeven naar het onderste component aan de hand van props. Dit is mogelijk in een applicatie waar de component structuur niet heel diep is, maar naar mate de applicatie groeit, groeit meestal ook de diepte van je componenten structuur. Je zal dan vaak een prop verschillende niveau's diep moeten doorgeven. Dit concept heet property drilling, en is in grote applicaties niet wenselijk."),(0,r.kt)("p",null,"Stel dat we een light theme en een dark theme willen ondersteunen in onze applicatie. Elk component heeft deze prop nodig want elk component moet zijn UI aanpassen als de theme light of dark is. "),(0,r.kt)("p",null,"Hieronder kan je een voorbeeld hiervan zien:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport { useState } from "react";\n\nconst getThemeStyle = (theme: string, color: string) => {\n    return { backgroundColor: theme === "dark" ? "black" : "white", padding: 10, border: "10px solid " + color }\n}\n//hide-end\nconst ComponentA = ({ theme }: { theme: string }) => {\n  return (\n    <div style={getThemeStyle(theme, "red")}>\n      <ComponentB theme={theme} />\n    </div>\n  );\n};\nconst ComponentB = ({ theme }: { theme: string }) => {\n  return (\n    <div style={getThemeStyle(theme, "green")}>\n      <ComponentC theme={theme} />\n    </div>\n  );\n};\nconst ComponentC = ({ theme }: { theme: string }) => {\n  return (\n    <div style={getThemeStyle(theme, "blue")}>\n      <ComponentD theme={theme} />\n    </div>\n  );\n};\nconst ComponentD = ({ theme }: { theme: string }) => {\n  return <p style={{color: theme === "dark" ? "white" : "black"}}>{theme}</p>;\n};\n\nconst App = () => {\n  const [theme, setTheme] = useState("light");\n  \n  return (\n    <>\n      <button onClick={()=>{ setTheme(theme => theme == "dark" ? "light" : "dark")}}>Toggle theme!</button>\n      <ComponentA theme={theme} />\n    </>\n  );\n};\n//hide-start\nexport default App;\n//hide-end\n')),(0,r.kt)("p",null,"Je ziet dat zelfs voor een kleine applicatie, zoals die hierboven, dat we deze theme prop al moeten doorgeven doorheen 3 niveaus van componenten. Bij grotere applicaties gaat dit nog veel erger worden. Daarom heeft React voor de Context API gezorgd. Dit is een manier om data te gaan delen doorheen componenten zonder door heel de structuur te moeten doorgegeven worden."),(0,r.kt)("p",null,"Het eerste wat we moeten doen is een Context aanmaken aan de hand van de createContext"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IThemeContext {\n    theme: string\n}\n\nexport const ThemeContext = React.createContext<IThemeContext>({theme: 'light'});\n")),(0,r.kt)("p",null,"Je moet altijd een default waarde meegeven aan de context. Deze default waarde wordt enkel gebruikt als er geen provider aanwezig is bovenaan in de component structuur. We geven hier een object met een mode property. Dus in ons geval zal onze layout dus standaard in light mode staan."),(0,r.kt)("p",null,"Nu moeten we een Provider maken van onze ThemeContext zodat we de values kunnen meegeven die we in de componenten willen gebruiken. De provider moet rond de bovenste component staan die onze context willen gebruiken."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const App = () => {\n  const [theme, setTheme] = useState("light");\n\n  return (\n    <ThemeContext.Provider value={{theme: theme}}>\n       <...>\n\n       </...>\n    </ThemeContext.Provider>\n  );\n};\n')),(0,r.kt)("p",null,"Nu kan je de values van de ThemeContext provider opvragen aan de hand van de ",(0,r.kt)("inlineCode",{parentName:"p"},"useContext")," hook. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport React, { useState, useContext } from "react";\n\ninterface IThemeContext {\n    theme: string\n}\nexport const ThemeContext = React.createContext<IThemeContext>({theme: \'light\'});\n\nconst getThemeStyle = (theme: string, color: string) => {\n  return { backgroundColor: theme === "dark" ? "black" : "white", padding: 10, border: "10px solid " + color }\n}\n//hide-end\nconst ComponentA = () => {\n  const {theme} = useContext(ThemeContext);\n  return (\n    <div style={getThemeStyle(theme, "red")}>\n      <ComponentB/>\n    </div>\n  );\n};\nconst ComponentB = () => {\n  const {theme} = useContext(ThemeContext);\n  return (\n    <div style={getThemeStyle(theme, "green")}>\n      <ComponentC />\n    </div>\n  );\n};\nconst ComponentC = () => {\n  const {theme} = useContext(ThemeContext);\n  return (\n    <div style={getThemeStyle(theme, "blue")}>\n      <ComponentD  />\n    </div>\n  );\n};\nconst ComponentD = () => {\n  const {theme} = useContext(ThemeContext);\n  return <p style={{color: theme === "dark" ? "white" : "black"}}>{theme}</p>;\n};\n\nconst App = () => {\n  const [theme, setTheme] = useState("light");\n\n  return (\n    <ThemeContext.Provider value={{theme: theme}}>\n        <>\n            <button onClick={()=>{ setTheme(theme => theme == "dark" ? "light" : "dark")}}>Toggle theme!</button>\n            <ComponentA />\n        </>\n    </ThemeContext.Provider>\n  );\n};\n//hide-start\nexport default App;\n//hide-end\n')),(0,r.kt)("p",null,"Je ziet nu dat elk component toegang heeft tot de mode variabele die we in de context hebben aangeboden zonder dat we deze moeten doorgeven doorheen de component hierarchie."),(0,r.kt)("h2",{id:"functies-in-context"},"Functies in context"),(0,r.kt)("p",null,"We kunnen ook functies toevoegen in onze ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemeContext")," zodat we bijvoorbeeld ook vanuit elk component de theme kunnen aanpassen. We voegen nu aan de createContext functie een setMode functie toe. We moeten hier een default value voor aanbieden, op dit moment hebben we nog geen handler dus we geven een lege functie mee."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface IThemeContext {\n    theme: string,\n    setTheme: (theme: string) => void\n}\n\nexport const ThemeContext = React.createContext<IThemeContext>({theme: "light", setTheme: (theme: string) => {}});\n')),(0,r.kt)("p",null,"We geven hier bij de createContext een interface mee tussen de ",(0,r.kt)("inlineCode",{parentName:"p"},"<>")," haken zodat TypeScript weet welke keys er in de context zullen voorkomen en welke types deze hebben."),(0,r.kt)("p",null,"Als we nu de ",(0,r.kt)("inlineCode",{parentName:"p"},"setTheme")," functie (van de useState) meegeven aan de provider dan is deze functie beschikbaar in elk component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'{2} codesandbox={"template": "react", "filename": "src/App.tsx"}',"{2}":!0,codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport React, { useState, useContext } from "react";\n\ninterface IThemeContext {\n    theme: string,\n    setTheme: (theme: string) => void\n}\nexport const ThemeContext = React.createContext<IThemeContext>({theme: \'light\', setTheme: (theme: string)=>{}});\n\nconst getThemeStyle = (theme: string, color: string) => {\n  return { backgroundColor: theme === "dark" ? "black" : "white", padding: 10, border: "10px solid " + color }\n}\n\nconst ComponentA = () => {\n  const {theme} = useContext(ThemeContext);\n  return (\n    <div style={getThemeStyle(theme, "red")}>\n      <ComponentB/>\n    </div>\n  );\n};\nconst ComponentB = () => {\n  const {theme} = useContext(ThemeContext);\n  return (\n    <div style={getThemeStyle(theme, "green")}>\n      <ComponentC />\n    </div>\n  );\n};\nconst ComponentC = () => {\n  const {theme} = useContext(ThemeContext);\n  return (\n    <div style={getThemeStyle(theme, "blue")}>\n      <ComponentD  />\n    </div>\n  );\n};\n//hide-end\nconst ComponentD = () => {\n  const {theme,setTheme} = useContext(ThemeContext);\n  return <button onClick={() => { setTheme(theme === "dark" ? "light" : "dark")}} style={{backgroundColor: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black"}}>{theme}</button>;\n};\n//hide-start\nconst App = () => {\n  const [theme, setTheme] = useState("light");\n\n  return (\n    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>\n        <>\n            <button onClick={()=>{ setTheme(theme => theme == "dark" ? "light" : "dark")}}>Toggle theme!</button>\n            <ComponentA />\n        </>\n    </ThemeContext.Provider>\n  );\n};\nexport default App;\n//hide-end\n')),(0,r.kt)("h2",{id:"globale-state"},"Globale state"),(0,r.kt)("p",null,"Het komt vaak voor dat data die vanuit een externe API komt moet beschikbaar zijn over verschillende componenten of verschillende paginas. We zouden deze data kunnen doorgeven aan de hand van properties, maar meestal wordt dit gedaan met de ",(0,r.kt)("inlineCode",{parentName:"p"},"Context")," api. Zo bekomen we een grote state die we kunnen delen over de verschillende componenten. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react-router-context-api", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react-router-context-api",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport React, { useContext, useEffect, useState } from "react";\nimport { useParams, BrowserRouter, Routes, Route, Link } from "react-router-dom";\n\ninterface RootObject {\n    genres: Genre[]\n}\n\ninterface Genre {\n    id: string;\n    description: string;\n    count: number;\n}\n//hide-end\ninterface IGenreDataContext {\n    genres: Genre[]\n}\n\nconst GenreDataContext = React.createContext<IGenreDataContext>({genres: []});\n\nconst HomePage = () => {\n    let {genres} = useContext(GenreDataContext);\n    return (<>\n        Welcome to the home page!\n        <ul>\n        {genres.map((genre) => {\n            return <li key={`detail/${genre.id}`}><Link to={`detail/${genre.id}`}>{genre.description}</Link></li>\n        })}\n        </ul>\n      </>);\n}\n\nconst DetailPage = () => {\n    let { id } = useParams();\n    let {genres} = useContext(GenreDataContext);\n\n    let genre : Genre | undefined = genres.find(genre => genre.id === id);\n\n    if (!genre) {\n        return <>Not found!</>\n    }\n    return (\n        <>\n            <h1>\n                {genre.description}\n            </h1>\n            <ul>\n                <li>{genre.description} has {genre.count} games</li>\n            </ul>\n            <Link to="/">Back</Link>\n        </>\n    );\n}\n\nconst App = () => {\n    const [genres, setGenres] = useState<Genre[]>([]);\n    useEffect(() => {\n        const fetchGenres = async () => {\n            let result = await fetch("/steam.json");\n            let json : RootObject = await result.json();\n            setGenres(json.genres);\n        }\n        fetchGenres();\n    },[]);\n\n    return (\n        <GenreDataContext.Provider value={{genres: genres}}>\n            <BrowserRouter>\n            <Routes>\n                <Route path="/" element={<HomePage />}/>\n                <Route path="/detail/:id" element={<DetailPage />}/>\n            </Routes>\n            </BrowserRouter>\n        </GenreDataContext.Provider>\n    );\n}\nexport default App;\n')),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Een groot nadeel van Context is dat elk component dat deze context gebruikt zal gererendered worden als iets in die context veranderd. Het is daarom aangewezen niet alle data zomaar in 1 context te plaatsen maar verschillende kleine ",(0,r.kt)("inlineCode",{parentName:"p"},"Context")," objecten aan te maken en enkel deze context te gebruiken als je hem echt nodig hebt.")))}d.isMDXComponent=!0}}]);