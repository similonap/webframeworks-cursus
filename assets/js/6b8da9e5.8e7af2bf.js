"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=l,h=p["".concat(m,".").concat(u)]||p[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>E,frontMatter:()=>g,metadata:()=>k,toc:()=>v});var a=n(7462),l=n(7294),r=n(3905);const i=()=>{const[e,t]=(0,l.useState)(0);let n=Math.random(),a=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());return l.createElement(l.Fragment,null,l.createElement("h1",null,"Labo 1"),l.createElement("p",null,"Random: ",n),l.createElement("p",null,"Getal 1: ",a),l.createElement("p",null,"Getal 2: ",r),n>.5?l.createElement("p",null,a," * ",r,": ",a*r):l.createElement("p",null,a," + ",r,": ",((e,t)=>e+t)(a,r)),l.createElement("button",{onClick:()=>{t(n)}},"Refresh"))},o=n.p+"assets/images/slot-cherry-cce8464b32439efb4f79fba017477125.png",m=n.p+"assets/images/slot-lemon-52cd7112e8b6d398f97e69f8ce2da623.png",d=n.p+"assets/images/slot-melon-593489676a762d464eaea97127970d28.png",s=n.p+"assets/images/slot-prune-e486170eb7c22e6e9aed5de0316b5209.png",c=n.p+"assets/images/slot-seven-e71e0d10655b5491197925624b5ac139.png",p=()=>{const[e,t]=(0,l.useState)(0);let n=Math.floor(5*Math.random()),a=Math.floor(5*Math.random()),r=Math.floor(5*Math.random()),i=n==a&&a==r;return l.createElement(l.Fragment,null,l.createElement("h1",null,"Labo 2"),l.createElement("img",{src:o,height:"64",width:"64"}),l.createElement("img",{src:m,height:"64",width:"64"}),l.createElement("img",{src:d,height:"64",width:"64"}),l.createElement("img",{src:s,height:"64",width:"64"}),l.createElement("img",{src:c,height:"64",width:"64"}),l.createElement("br",null),i?l.createElement("p",null,"Je hebt gewonnen"):l.createElement("p",null,"Je hebt verloren"),0==n&&l.createElement("img",{src:o,height:"64",width:"64"}),1==n&&l.createElement("img",{src:m,height:"64",width:"64"}),2==n&&l.createElement("img",{src:d,height:"64",width:"64"}),3==n&&l.createElement("img",{src:s,height:"64",width:"64"}),4==n&&l.createElement("img",{src:c,height:"64",width:"64"}),0==a&&l.createElement("img",{src:o,height:"64",width:"64"}),1==a&&l.createElement("img",{src:m,height:"64",width:"64"}),2==a&&l.createElement("img",{src:d,height:"64",width:"64"}),3==a&&l.createElement("img",{src:s,height:"64",width:"64"}),4==a&&l.createElement("img",{src:c,height:"64",width:"64"}),0==r&&l.createElement("img",{src:o,height:"64",width:"64"}),1==r&&l.createElement("img",{src:m,height:"64",width:"64"}),2==r&&l.createElement("img",{src:d,height:"64",width:"64"}),3==r&&l.createElement("img",{src:s,height:"64",width:"64"}),4==r&&l.createElement("img",{src:c,height:"64",width:"64"}),l.createElement("br",null),l.createElement("button",{onClick:()=>{t(Math.random())}},"Refresh"))},u=()=>{const[e,t]=(0,l.useState)(0);let n=[{naam:"Jef",leeftijd:20},{naam:"Jan",leeftijd:21},{naam:"Joris",leeftijd:22},{naam:"Andie",leeftijd:23},{naam:"Senne",leeftijd:24}];return l.createElement(l.Fragment,null,l.createElement("h1",null,"Labo 3"),l.createElement("h3",null,"Getallenlijst"),l.createElement("ul",null,[1,2,3,4,5,4,3].map(((e,t)=>l.createElement("li",{key:t},e)))),l.createElement("h3",null,"Studentenlijst"),l.createElement("ol",null,n.map((e=>l.createElement("li",null,e.naam)))),l.createElement("h3",null,"Studentenlijst met J"),l.createElement("ol",null,n.filter((e=>e.naam.startsWith("J"))).map((e=>l.createElement("li",null,e.naam)))),l.createElement("h3",null,"Select"),l.createElement("select",null,n.map((e=>l.createElement("option",null,e.naam)))),l.createElement("h3",null,"Table"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Naam"),l.createElement("th",null,"Leeftijd"))),l.createElement("tbody",null,n.map((e=>l.createElement("tr",null,l.createElement("td",null,e.naam),l.createElement("td",null,e.leeftijd)))))),l.createElement("br",null),l.createElement("button",{onClick:()=>{t(Math.random())}},"Refresh"))},h=()=>{const[e,t]=(0,l.useState)(0);let n=Array.from(Array(5).keys()).map((()=>Math.floor(5*Math.random()))),a=null==n.find((e=>e!==n[0]));return l.createElement(l.Fragment,null,l.createElement("h1",null,"Labo 4"),l.createElement("img",{src:o,height:"64",width:"64"}),l.createElement("img",{src:m,height:"64",width:"64"}),l.createElement("img",{src:d,height:"64",width:"64"}),l.createElement("img",{src:s,height:"64",width:"64"}),l.createElement("img",{src:c,height:"64",width:"64"}),l.createElement("br",null),a?l.createElement("p",null,"Je hebt gewonnen"):l.createElement("p",null,"Je hebt verloren"),n.map(((e,t)=>l.createElement(l.Fragment,{key:t},0==e&&l.createElement("img",{src:o,height:"64",width:"64"}),1==e&&l.createElement("img",{src:m,height:"64",width:"64"}),2==e&&l.createElement("img",{src:d,height:"64",width:"64"}),3==e&&l.createElement("img",{src:s,height:"64",width:"64"}),4==e&&l.createElement("img",{src:c,height:"64",width:"64"})))),l.createElement("br",null),l.createElement("button",{onClick:()=>{t(Math.random())}},"Refresh"))},g={},b="Labo 1",k={unversionedId:"wf-lab/lab1",id:"wf-lab/lab1",title:"Labo 1",description:"1. Expressies",source:"@site/docs/wf-lab/lab1.md",sourceDirName:"wf-lab",slug:"/wf-lab/lab1",permalink:"/webframeworks-cursus/wf-lab/lab1",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wfLab",previous:{title:"Labo materiaal",permalink:"/webframeworks-cursus/wf-lab/"}},f={},v=[{value:"1. Expressies",id:"1-expressies",level:2},{value:"Opdracht",id:"opdracht",level:4},{value:"Voorbeeldoplossing",id:"voorbeeldoplossing",level:4},{value:"2. Slotmachine",id:"2-slotmachine",level:2},{value:"Opdracht",id:"opdracht-1",level:4},{value:"Voorbeeldoplossing",id:"voorbeeldoplossing-1",level:4},{value:"3. Lijsten",id:"3-lijsten",level:2},{value:"Opdracht",id:"opdracht-2",level:4},{value:"Voorbeeldoplossing",id:"voorbeeldoplossing-2",level:4},{value:"4. Slot machine met map",id:"4-slot-machine-met-map",level:2},{value:"Opdracht",id:"opdracht-3",level:4},{value:"Voorbeeldoplossing",id:"voorbeeldoplossing-3",level:4}],w={toc:v};function E(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"labo-1"},"Labo 1"),(0,r.kt)("h2",{id:"1-expressies"},"1. Expressies"),(0,r.kt)("p",null,"Maak een nieuwe react applicatie aan met het create-react-app commando. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app labo1-expressies --template typescript\n")),(0,r.kt)("p",null,"en maak het volgende ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," component aan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},"const App = () => {\n    return (\n        <div>\n            <h1>Labo 1</h1>\n        </div>\n    );\n}\n\nexport default App;\n")),(0,r.kt)("h4",{id:"opdracht"},"Opdracht"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maak een variabele aan met de naam ",(0,r.kt)("inlineCode",{parentName:"li"},"random")," en geef deze de waarde van ",(0,r.kt)("inlineCode",{parentName:"li"},"Math.random()"),". Toon deze waarde in de browser. "),(0,r.kt)("li",{parentName:"ul"},"Maak een variabele aan met de naam ",(0,r.kt)("inlineCode",{parentName:"li"},"getal1")," en geef deze een waarde tussen 0 en 10. Toon deze waarde in de browser."),(0,r.kt)("li",{parentName:"ul"},"Maak een variabele aan met de naam ",(0,r.kt)("inlineCode",{parentName:"li"},"getal2")," en geef deze een waarde tussen 0 en 10.\nToon deze waarde in de browser."),(0,r.kt)("li",{parentName:"ul"},"Maak een functie som aan die 2 parameters heeft en deze optelt. Gebruik deze functie om de som van ",(0,r.kt)("inlineCode",{parentName:"li"},"getal1")," en ",(0,r.kt)("inlineCode",{parentName:"li"},"getal2")," te berekenen en deze te tonen in de browser. "),(0,r.kt)("li",{parentName:"ul"},"Maak een functie vermenigvuldiging aan die 2 parameters heeft en deze vermenigvuldigt. Gebruik deze functie om de vermenigvuldiging van ",(0,r.kt)("inlineCode",{parentName:"li"},"getal1")," en ",(0,r.kt)("inlineCode",{parentName:"li"},"getal2")," te berekenen en deze te tonen in de browser."),(0,r.kt)("li",{parentName:"ul"},"Vervang de div tags met een fragment tag."),(0,r.kt)("li",{parentName:"ul"},"Gebruik conditionele rendering om een boodschap te tonen in de browser afhankelijk van de waarde van ",(0,r.kt)("inlineCode",{parentName:"li"},"random"),". Als ",(0,r.kt)("inlineCode",{parentName:"li"},"random")," groter is dan 0.5 dan tonen we de vermenivuldiging van de twee getallen, anders tonen we de som van de twee getallen.")),(0,r.kt)("h4",{id:"voorbeeldoplossing"},"Voorbeeldoplossing"),(0,r.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,r.kt)(i,{mdxType:"Labo1Exercise1"})),(0,r.kt)("h2",{id:"2-slotmachine"},"2. Slotmachine"),(0,r.kt)("p",null,"Maak een nieuwe react applicatie aan ",(0,r.kt)("inlineCode",{parentName:"p"},"labo1-slotmachine")," met het create-react-app commando. "),(0,r.kt)("h4",{id:"opdracht-1"},"Opdracht"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Toon alle mogelijke afbeeldingen van de slotmachine in de browser."),(0,r.kt)("li",{parentName:"ul"},"Maak 3 variabelen met de namen ",(0,r.kt)("inlineCode",{parentName:"li"},"slot1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"slot2")," en ",(0,r.kt)("inlineCode",{parentName:"li"},"slot3")," aan. Zorg ervoor dat deze variabele een willekeurige waarde krijgt tussen 0 en 4 (met 4 inbregrepen)"),(0,r.kt)("li",{parentName:"ul"},'Toon de tekst "Je hebt gewonnen" als ',(0,r.kt)("inlineCode",{parentName:"li"},"slot1"),",",(0,r.kt)("inlineCode",{parentName:"li"},"slot2")," en ",(0,r.kt)("inlineCode",{parentName:"li"},"slot3"),' dezelfde waarde heeft. Toon de tekst "Je hebt verloren" als ',(0,r.kt)("inlineCode",{parentName:"li"},"slot1"),",",(0,r.kt)("inlineCode",{parentName:"li"},"slot2")," en ",(0,r.kt)("inlineCode",{parentName:"li"},"slot3")," een andere waarde hebben."),(0,r.kt)("li",{parentName:"ul"},"Zorg ervoor dat er 3 afbeeldingen worden getoond afhankelijk van de waarde van slot1, slot2 en slot3.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Als de slot 0 is toon je een kers"),(0,r.kt)("li",{parentName:"ul"},"Als de slot 1 is toon je een citroen"),(0,r.kt)("li",{parentName:"ul"},"..."))),(0,r.kt)("li",{parentName:"ul"},"Probeer de afbeeldingen te tonen met behulp van import, require en een url (public folder)")),(0,r.kt)("h4",{id:"voorbeeldoplossing-1"},"Voorbeeldoplossing"),(0,r.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,r.kt)(p,{mdxType:"Labo1Exercise2"})),(0,r.kt)("h2",{id:"3-lijsten"},"3. Lijsten"),(0,r.kt)("p",null,"Maak een nieuwe react applicatie aan ",(0,r.kt)("inlineCode",{parentName:"p"},"labo1-lijsten")," met het create-react-app commando."),(0,r.kt)("h4",{id:"opdracht-2"},"Opdracht"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maak een array met een aantal getallen in. Zorg ervoor dat een bepaald getal meerdere keren voorkomt in de array."),(0,r.kt)("li",{parentName:"ul"},"Gebruik een unordered list (ul) om de getallen in de browser te tonen. Kies een goede key voor de list items."),(0,r.kt)("li",{parentName:"ul"},"Maak een array met 5 student objecten aan. Elke student heeft een id, een naam en een leeftijd."),(0,r.kt)("li",{parentName:"ul"},"Gebruik een ordered list (ol) om de namen van de studenten te tonen in de browser."),(0,r.kt)("li",{parentName:"ul"},"Gebruik een ordered list (ol) om de namen van de stundenten waarvan de naam met de letter J begint te tonen in de browser. Gebruik een combinatie van filter/map."),(0,r.kt)("li",{parentName:"ul"},"Gebruik een select met options element om de namen van de personen te tonen in de browser. "),(0,r.kt)("li",{parentName:"ul"},"Gebruik een table om de namen en leeftijden van de personen te tonen in de browser.")),(0,r.kt)("h4",{id:"voorbeeldoplossing-2"},"Voorbeeldoplossing"),(0,r.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,r.kt)(u,{mdxType:"Labo1Exercise3"})),(0,r.kt)("h2",{id:"4-slot-machine-met-map"},"4. Slot machine met map"),(0,r.kt)("p",null,"Maak een nieuwe react applicatie aan ",(0,r.kt)("inlineCode",{parentName:"p"},"labo1-slotmachine-map")," met het create-react-app commando. Kopieer je code van de vorige opdracht naar deze nieuwe applicatie."),(0,r.kt)("h4",{id:"opdracht-3"},"Opdracht"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Zorg ervoor dat je niet meer werkt met aparte variabelen per slot, maar dat je een array maakt met een variabel aantal slots (bepaald in een variabele)."),(0,r.kt)("li",{parentName:"ul"},"Pas je code nu aan dat je gebruik maakt van een map functie om de slots te tonen in de browser."),(0,r.kt)("li",{parentName:"ul"},'Ook de tekst "Je hebt gewonnen" of "Je hebt verloren" moet je nu bepalen met een array functie.')),(0,r.kt)("h4",{id:"voorbeeldoplossing-3"},"Voorbeeldoplossing"),(0,r.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,r.kt)(h,{mdxType:"Labo1Exercise4"})))}E.isMDXComponent=!0}}]);