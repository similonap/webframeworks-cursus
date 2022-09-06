"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[49],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,b=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return t?a.createElement(b,s(s({ref:n},u),{},{components:t})):a.createElement(b,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:3},s="Arrays en objecten in state",i={unversionedId:"state/complexstate",id:"state/complexstate",title:"Arrays en objecten in state",description:"Tot nu toe hebben we enkel gebruik gemaakt van een primitieve waarde in de state. Zo is de werking van number, string en boolean vrij gelijkaardig en moeten we deze niet in detail behandelen.",source:"@site/docs/state/complexstate.md",sourceDirName:"state",slug:"/state/complexstate",permalink:"/webframeworks-cursus/state/complexstate",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Formulieren",permalink:"/webframeworks-cursus/state/forms"},next:{title:"Communicatie tussen componenten",permalink:"/webframeworks-cursus/child-parent/"}},l={},d=[{value:"Array als state",id:"array-als-state",level:2},{value:"Object als state",id:"object-als-state",level:2}],u={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"arrays-en-objecten-in-state"},"Arrays en objecten in state"),(0,r.kt)("p",null,"Tot nu toe hebben we enkel gebruik gemaakt van een primitieve waarde in de state. Zo is de werking van number, string en boolean vrij gelijkaardig en moeten we deze niet in detail behandelen. "),(0,r.kt)("p",null,"Voor complexe data types zoals arrays en objecten zijn er een aantal speciale dingen waarmee je rekening moet houden."),(0,r.kt)("h2",{id:"array-als-state"},"Array als state"),(0,r.kt)("p",null,"Een array als state definieren gebeurd op identiek dezelfde manier als een state met andere data types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport {useState} from "react";\n//hide-end\nconst App = () => {\n  const [numbers, setNumbers] = useState<number[]>([0,1,2,3,4]);\n\n  return (\n    <>\n      <table>\n        <tbody>\n        {numbers.map((number, index) => <tr key={index}><td>{number}</td></tr>)}\n        </tbody>\n      </table>\n    </>\n  );\n};\n//hide-start\nexport default App;\n//hide-end\n')),(0,r.kt)("p",null,"Tot nu toe is er nog niets interactief aan de hand en hadden we de state even goed als een variabele kunnen declareren. "),(0,r.kt)("p",null,"We voegen een invoerveld toe zoals we dit in het vorige deel hebben gedaan waarmee we een getal kunnen invoeren."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'<input type="number" onChange={(event) => setNumber(parseInt(event.target.value))}/>\n')),(0,r.kt)("p",null,"en we maken hier ook ineens een controller component van:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const [number, setNumber] = useState<number>(0);\n")),(0,r.kt)("p",null,"Nu willen we een button toevoegen die dit getal toevoegt aan de lijst van getallen als we op de knop duwen."),(0,r.kt)("p",null,"We zullen eerst laten zien hoe we dit ",(0,r.kt)("strong",{parentName:"p"},"NIET")," moeten doen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'// DEZE CODE IS FOUT\n//hide-start\nimport {useState} from "react";\n//hide-end\nconst App = () => {\n  const [numbers, setNumbers] = useState<number[]>([0,1,2,3,4]);\n  const [number, setNumber] = useState<number>(0);\n\n  const addClicked : React.MouseEventHandler<HTMLButtonElement> = () => {\n    numbers.push(number);\n  }\n\n  return (\n    <>\n      <input type="number" onChange={(event) => setNumber(parseInt(event.target.value))} value={number}/>\n      <button onClick={addClicked}>Add</button>\n      <table>\n        <tbody>\n          {numbers.map((number, index) => <tr key={index}><td>{number}</td></tr>)}\n        </tbody>\n      </table>\n    </>\n  );\n};\n//hide-start\nexport default App;\n//hide-end\n')),(0,r.kt)("p",null,"Als je deze code uitprobeert zie je dat er niets gebeurt. Pas nadat je terug op de knop duwt zal je element worden toegevoegd. Dat is omdat je niet de ",(0,r.kt)("inlineCode",{parentName:"p"},"setNumber")," functie gebruikt om de state te zetten dus React weet niet dat het component opnieuw moet worden gerendered."),(0,r.kt)("p",null,"De volgende foute (maar begrijpelijke) veronderstelling zou zijn om gewoon hierna de ",(0,r.kt)("inlineCode",{parentName:"p"},"setNumber")," functie aan te roepen, maar dit werkt ook niet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// OOK FOUT!\nconst addClicked : React.MouseEventHandler<HTMLButtonElement> = () => {\n  numbers.push(number);\n  setNumbers(numbers);\n}\n")),(0,r.kt)("p",null,"Dit komt omdat je alle state objecten moet behandelen als readonly. Je mag dus nooit iets rechstreeks aanpassen aan het object."),(0,r.kt)("p",null,"Voor een array moeten we bij elke wijziging een kopie maken van de array en daar het element in toevoegen. Enkel dan kan React weten dat de array opnieuw gerendered moet worden."),(0,r.kt)("p",null,"Een kopie van een array doe je aan de hand van de spread syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'{6} codesandbox={"template": "react", "filename": "src/App.tsx"}',"{6}":!0,codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport {useState} from "react";\n//hide-end\nconst App = () => {\n  const [numbers, setNumbers] = useState<number[]>([0,1,2,3,4]);\n  const [number, setNumber] = useState<number>(0);\n\n  const addClicked : React.MouseEventHandler<HTMLButtonElement> = () => {\n    setNumbers([...numbers, number]);\n  }\n\n  return (\n    <>\n      <input type="number" onChange={(event) => setNumber(parseInt(event.target.value))} value={number}/>\n      <button onClick={addClicked}>Add</button>\n      <table>\n        <tbody>\n          {numbers.map((number, index) => <tr key={index}><td>{number}</td></tr>)}\n        </tbody>\n      </table>\n    </>\n  );\n};\n//hide-start\nexport default App;\n//hide-end\n')),(0,r.kt)("p",null,"Het verwijderen van elementen kan je doen aan de hand van een filter. We kunnen hier een ",(0,r.kt)("inlineCode",{parentName:"p"},"removeNumber")," functie aanmaken die een ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," (de index) als argument aanvaard. Dit werkt omdat filter altijd een ",(0,r.kt)("strong",{parentName:"p"},"nieuwe")," array teruggeeft."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'{9-11,22} codesandbox={"template": "react", "filename": "src/App.tsx"}',"{9-11,22}":!0,codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport {useState} from "react";\n//hide-end\nconst App = () => {\n  const [numbers, setNumbers] = useState<number[]>([0,1,2,3,4]);\n  const [number, setNumber] = useState<number>(0);\n\n  const addClicked : React.MouseEventHandler<HTMLButtonElement> = () => {\n    setNumbers([...numbers, number]);\n  }\n\n  const removeNumber = (i : number) => {\n    setNumbers(numbers.filter((number, index) => index !== i));\n  }\n\n  return (\n    <>\n      <input type="number" onChange={(event) => setNumber(parseInt(event.target.value))} value={number}/>\n      <button onClick={addClicked}>Add</button>\n      <table>\n        <tbody>\n          {numbers.map((number, index) => \n            (<tr key={index}>\n              <td>{number}</td>\n              <td><button onClick={() => { removeNumber(index); }}>X</button></td>\n            </tr>)\n            )}\n        </tbody>\n      </table>\n    </>\n  );\n};\n//hide-start\nexport default App;\n//hide-end\n')),(0,r.kt)("h2",{id:"object-als-state"},"Object als state"),(0,r.kt)("p",null,"In het volgende code voorbeeld plaatsen we een object in een state zodat we dynamisch de keys en values van dit object kunnen aanpassen. Omdat het een object is met een niet op voorhand gedefinieerde interface moeten we een speciale interface gebruiken waar we gewoon aangeven welk type de key heeft en welk type de value (zie dictionary). Dit object mag net zoals een array niet rechtstreeks worden aangepast maar er moet een kopie voorzien worden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'{11} codesandbox={"template": "react", "filename": "src/App.tsx"}',"{11}":!0,codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'//hide-start\nimport React, { useState } from "react";\n//hide-end\ninterface Dictionary {\n  [key: string]: string\n}\n\nconst App = () => {\n  const [dictionary, setDictionary] = useState<Dictionary>({})\n  const [key,setKey] = useState("");\n  const [value,setValue] = useState("");\n\n  const buttonClicked : React.MouseEventHandler<HTMLButtonElement> = () => {\n    setDictionary({...dictionary, [key]:value});\n  }\n\n  return (\n    <>\n      <div>\n        <input placeholder="key" type="text" value={key} onChange={(event) => setKey(event.target.value)}/>\n        <input placeholder="value" type="text" value={value} onChange={(event) => setValue(event.target.value)}/>\n        <button onClick={buttonClicked}>Set</button>\n        <br/>\n        {JSON.stringify(dictionary)}\n      </div>\n    </>\n  );\n};\n//hide-start\nexport default App;\n//hide-end\n')))}p.isMDXComponent=!0}}]);