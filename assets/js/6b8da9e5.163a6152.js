"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(m,".").concat(u)]||p[u]||s[u]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>E,frontMatter:()=>g,metadata:()=>k,toc:()=>w});var a=n(7462),r=n(7294),l=n(3905);const i=()=>{const[e,t]=(0,r.useState)(0);let n=Math.random(),a=Math.floor(10*Math.random()),l=Math.floor(10*Math.random());return r.createElement(r.Fragment,null,r.createElement("h1",null,"Labo 1"),r.createElement("p",null,"Random: ",n),r.createElement("p",null,"Getal 1: ",a),r.createElement("p",null,"Getal 2: ",l),n>.5?r.createElement("p",null,a," * ",l,": ",a*l):r.createElement("p",null,a," + ",l,": ",((e,t)=>e+t)(a,l)),r.createElement("button",{onClick:()=>{t(n)}},"Refresh"))},o=n.p+"assets/images/slot-cherry-cce8464b32439efb4f79fba017477125.png",m=n.p+"assets/images/slot-lemon-52cd7112e8b6d398f97e69f8ce2da623.png",d=n.p+"assets/images/slot-melon-593489676a762d464eaea97127970d28.png",c=n.p+"assets/images/slot-prune-e486170eb7c22e6e9aed5de0316b5209.png",s=n.p+"assets/images/slot-seven-e71e0d10655b5491197925624b5ac139.png",p=()=>{const[e,t]=(0,r.useState)(0);let n=Math.floor(5*Math.random()),a=Math.floor(5*Math.random()),l=Math.floor(5*Math.random()),i=n==a&&a==l;return r.createElement(r.Fragment,null,r.createElement("h1",null,"Labo 2"),r.createElement("img",{src:o,height:"64",width:"64"}),r.createElement("img",{src:m,height:"64",width:"64"}),r.createElement("img",{src:d,height:"64",width:"64"}),r.createElement("img",{src:c,height:"64",width:"64"}),r.createElement("img",{src:s,height:"64",width:"64"}),r.createElement("br",null),i?r.createElement("p",null,"Je hebt gewonnen"):r.createElement("p",null,"Je hebt verloren"),0==n&&r.createElement("img",{src:o,height:"64",width:"64"}),1==n&&r.createElement("img",{src:m,height:"64",width:"64"}),2==n&&r.createElement("img",{src:d,height:"64",width:"64"}),3==n&&r.createElement("img",{src:c,height:"64",width:"64"}),4==n&&r.createElement("img",{src:s,height:"64",width:"64"}),0==a&&r.createElement("img",{src:o,height:"64",width:"64"}),1==a&&r.createElement("img",{src:m,height:"64",width:"64"}),2==a&&r.createElement("img",{src:d,height:"64",width:"64"}),3==a&&r.createElement("img",{src:c,height:"64",width:"64"}),4==a&&r.createElement("img",{src:s,height:"64",width:"64"}),0==l&&r.createElement("img",{src:o,height:"64",width:"64"}),1==l&&r.createElement("img",{src:m,height:"64",width:"64"}),2==l&&r.createElement("img",{src:d,height:"64",width:"64"}),3==l&&r.createElement("img",{src:c,height:"64",width:"64"}),4==l&&r.createElement("img",{src:s,height:"64",width:"64"}),r.createElement("br",null),r.createElement("button",{onClick:()=>{t(Math.random())}},"Refresh"))},u=()=>{const[e,t]=(0,r.useState)(0);let n=[{naam:"Jef",leeftijd:20},{naam:"Jan",leeftijd:21},{naam:"Joris",leeftijd:22},{naam:"Andie",leeftijd:23},{naam:"Senne",leeftijd:24}];return r.createElement(r.Fragment,null,r.createElement("h1",null,"Labo 3"),r.createElement("h3",null,"Ordered List"),r.createElement("ol",null,n.map((e=>r.createElement("li",null,e.naam)))),r.createElement("h3",null,"Select"),r.createElement("select",null,n.map((e=>r.createElement("option",null,e.naam)))),r.createElement("h3",null,"Table"),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Naam"),r.createElement("th",null,"Leeftijd"))),r.createElement("tbody",null,n.map((e=>r.createElement("tr",null,r.createElement("td",null,e.naam),r.createElement("td",null,e.leeftijd)))))))},h=()=>{const[e,t]=(0,r.useState)(0);let n=Array.from(Array(5).keys()).map((()=>Math.floor(5*Math.random()))),a=null==n.find((e=>e!==n[0]));return r.createElement(r.Fragment,null,r.createElement("h1",null,"Labo 4"),r.createElement("img",{src:o,height:"64",width:"64"}),r.createElement("img",{src:m,height:"64",width:"64"}),r.createElement("img",{src:d,height:"64",width:"64"}),r.createElement("img",{src:c,height:"64",width:"64"}),r.createElement("img",{src:s,height:"64",width:"64"}),r.createElement("br",null),a?r.createElement("p",null,"Je hebt gewonnen"):r.createElement("p",null,"Je hebt verloren"),n.map(((e,t)=>r.createElement(r.Fragment,{key:t},0==e&&r.createElement("img",{src:o,height:"64",width:"64"}),1==e&&r.createElement("img",{src:m,height:"64",width:"64"}),2==e&&r.createElement("img",{src:d,height:"64",width:"64"}),3==e&&r.createElement("img",{src:c,height:"64",width:"64"}),4==e&&r.createElement("img",{src:s,height:"64",width:"64"})))),r.createElement("br",null),r.createElement("button",{onClick:()=>{t(Math.random())}},"Refresh"))},g={},b="Labo 1",k={unversionedId:"wf-lab/lab1",id:"wf-lab/lab1",title:"Labo 1",description:"1. Expressies",source:"@site/docs/wf-lab/lab1.md",sourceDirName:"wf-lab",slug:"/wf-lab/lab1",permalink:"/webframeworks-cursus/wf-lab/lab1",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wfLab",previous:{title:"Labo materiaal",permalink:"/webframeworks-cursus/wf-lab/"}},f={},w=[{value:"1. Expressies",id:"1-expressies",level:2},{value:"Opdracht",id:"opdracht",level:4},{value:"Voorbeeldoplossing",id:"voorbeeldoplossing",level:4},{value:"2. Slotmachine",id:"2-slotmachine",level:2},{value:"Opdracht",id:"opdracht-1",level:4},{value:"3. Lijsten",id:"3-lijsten",level:2},{value:"Opdracht",id:"opdracht-2",level:4},{value:"4. Slot machine met map",id:"4-slot-machine-met-map",level:2},{value:"Opdracht",id:"opdracht-3",level:4}],v={toc:w};function E(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"labo-1"},"Labo 1"),(0,l.kt)("h2",{id:"1-expressies"},"1. Expressies"),(0,l.kt)("p",null,"Maak een nieuwe react applicatie aan met het create-react-app commando. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app labo1-expressies --template typescript\n")),(0,l.kt)("p",null,"en maak het volgende ",(0,l.kt)("inlineCode",{parentName:"p"},"App.tsx")," component aan:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},"const App = () => {\n    return (\n        <div>\n            <h1>Labo 1</h1>\n        </div>\n    );\n}\n\nexport default App;\n")),(0,l.kt)("h4",{id:"opdracht"},"Opdracht"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Maak een variabele aan met de naam ",(0,l.kt)("inlineCode",{parentName:"li"},"random")," en geef deze de waarde van ",(0,l.kt)("inlineCode",{parentName:"li"},"Math.random()"),". Toon deze waarde in de browser. "),(0,l.kt)("li",{parentName:"ul"},"Maak een variabele aan met de naam ",(0,l.kt)("inlineCode",{parentName:"li"},"getal1")," en geef deze een waarde tussen 0 en 10. Toon deze waarde in de browser."),(0,l.kt)("li",{parentName:"ul"},"Maak een variabele aan met de naam ",(0,l.kt)("inlineCode",{parentName:"li"},"getal2")," en geef deze een waarde tussen 0 en 10.\nToon deze waarde in de browser."),(0,l.kt)("li",{parentName:"ul"},"Maak een functie som aan die 2 parameters heeft en deze optelt. Gebruik deze functie om de som van ",(0,l.kt)("inlineCode",{parentName:"li"},"getal1")," en ",(0,l.kt)("inlineCode",{parentName:"li"},"getal2")," te berekenen en deze te tonen in de browser. "),(0,l.kt)("li",{parentName:"ul"},"Maak een functie vermenigvuldiging aan die 2 parameters heeft en deze vermenigvuldigt. Gebruik deze functie om de vermenigvuldiging van ",(0,l.kt)("inlineCode",{parentName:"li"},"getal1")," en ",(0,l.kt)("inlineCode",{parentName:"li"},"getal2")," te berekenen en deze te tonen in de browser."),(0,l.kt)("li",{parentName:"ul"},"Vervang de div tags met een fragment tag."),(0,l.kt)("li",{parentName:"ul"},"Gebruik conditionele rendering om een boodschap te tonen in de browser afhankelijk van de waarde van ",(0,l.kt)("inlineCode",{parentName:"li"},"random"),". Als ",(0,l.kt)("inlineCode",{parentName:"li"},"random")," groter is dan 0.5 dan tonen we de vermenivuldiging van de twee getallen, anders tonen we de som van de twee getallen.")),(0,l.kt)("h4",{id:"voorbeeldoplossing"},"Voorbeeldoplossing"),(0,l.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,l.kt)(i,{mdxType:"Labo1Exercise1"})),(0,l.kt)("h2",{id:"2-slotmachine"},"2. Slotmachine"),(0,l.kt)("p",null,"Maak een nieuwe react applicatie aan ",(0,l.kt)("inlineCode",{parentName:"p"},"labo1-slotmachine")," met het create-react-app commando. "),(0,l.kt)("h4",{id:"opdracht-1"},"Opdracht"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Toon alle mogelijke afbeeldingen van de slotmachine in de browser."),(0,l.kt)("li",{parentName:"ul"},"Maak 3 variabelen met de namen ",(0,l.kt)("inlineCode",{parentName:"li"},"slot1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"slot2")," en ",(0,l.kt)("inlineCode",{parentName:"li"},"slot3")," aan. Zorg ervoor dat deze variabele een willekeurige waarde krijgt tussen 0 en 4 (met 4 inbregrepen)"),(0,l.kt)("li",{parentName:"ul"},'Toon de tekst "Je hebt gewonnen" als ',(0,l.kt)("inlineCode",{parentName:"li"},"slot1"),",",(0,l.kt)("inlineCode",{parentName:"li"},"slot2")," en ",(0,l.kt)("inlineCode",{parentName:"li"},"slot3"),' dezelfde waarde heeft. Toon de tekst "Je hebt verloren" als ',(0,l.kt)("inlineCode",{parentName:"li"},"slot1"),",",(0,l.kt)("inlineCode",{parentName:"li"},"slot2")," en ",(0,l.kt)("inlineCode",{parentName:"li"},"slot3")," een andere waarde hebben."),(0,l.kt)("li",{parentName:"ul"},"Zorg ervoor dat er 3 afbeeldingen worden getoond afhankelijk van de waarde van slot1, slot2 en slot3.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Als de slot 0 is toon je een kers"),(0,l.kt)("li",{parentName:"ul"},"Als de slot 1 is toon je een citroen"),(0,l.kt)("li",{parentName:"ul"},"..."))),(0,l.kt)("li",{parentName:"ul"},"Probeer de afbeeldingen te tonen met behulp van import, require en een url (public folder)")),(0,l.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,l.kt)(p,{mdxType:"Labo1Exercise2"})),(0,l.kt)("h2",{id:"3-lijsten"},"3. Lijsten"),(0,l.kt)("p",null,"Maak een nieuwe react applicatie aan ",(0,l.kt)("inlineCode",{parentName:"p"},"labo1-lijsten")," met het create-react-app commando."),(0,l.kt)("h4",{id:"opdracht-2"},"Opdracht"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Maak een array met 5 student objecten aan. Elke student heeft een naam en een leeftijd."),(0,l.kt)("li",{parentName:"ul"},"Gebruik een ordered list (ol) om de namen van de personen te tonen in de browser."),(0,l.kt)("li",{parentName:"ul"},"Gebruik een select met options element om de namen van de personen te tonen in de browser. "),(0,l.kt)("li",{parentName:"ul"},"Gebruik een table om de namen en leeftijden van de personen te tonen in de browser.",(0,l.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,l.kt)(u,{mdxType:"Labo1Exercise3"})))),(0,l.kt)("h2",{id:"4-slot-machine-met-map"},"4. Slot machine met map"),(0,l.kt)("p",null,"Maak een nieuwe react applicatie aan ",(0,l.kt)("inlineCode",{parentName:"p"},"labo1-slotmachine-map")," met het create-react-app commando. Kopieer je code van de vorige opdracht naar deze nieuwe applicatie."),(0,l.kt)("h4",{id:"opdracht-3"},"Opdracht"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Zorg ervoor dat je niet meer werkt met aparte variabelen per slot, maar dat je een array maakt met een variabel aantal slots (bepaald in een variabele)."),(0,l.kt)("li",{parentName:"ul"},"Pas je code nu aan dat je gebruik maakt van een map functie om de slots te tonen in de browser."),(0,l.kt)("li",{parentName:"ul"},'Ook de tekst "Je hebt gewonnen" of "Je hebt verloren" moet je nu bepalen met een array functie.')),(0,l.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,l.kt)(h,{mdxType:"Labo1Exercise4"})))}E.isMDXComponent=!0}}]);