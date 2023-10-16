"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[3073],{3753:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const l=e=>{let{children:t}=e;const[n,l]=(0,a.useState)(0);return a.createElement(a.Fragment,null,a.Children.map(t,(e=>a.isValidElement(e)?a.cloneElement(e):e)),a.createElement("br",null),a.createElement("button",{onClick:()=>{l(Math.random())}},"Refresh"))}},7889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>Z,contentTitle:()=>A,default:()=>L,frontMatter:()=>C,metadata:()=>j,toc:()=>x});var a=n(7462),l=n(7294),r=n(3905);const o=()=>{let e=Math.random(),t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());return l.createElement(l.Fragment,null,l.createElement("h1",null,"Labo 1: Expressies"),l.createElement("p",null,"Random: ",e),l.createElement("p",null,"Getal 1: ",t),l.createElement("p",null,"Getal 2: ",n),e>.5?l.createElement("p",null,t," * ",n,": ",t*n):l.createElement("p",null,t," + ",n,": ",((e,t)=>e+t)(t,n)))};var i=n(2331),d=n(9378),s=n(2425),m=n(2786),p=n(335),c=n(3753);const u=()=>{let e=Math.floor(5*Math.random()),t=Math.floor(5*Math.random()),n=Math.floor(5*Math.random()),a=e==t&&t==n;return l.createElement(l.Fragment,null,l.createElement("h1",null,"Labo 1: Slots"),l.createElement("img",{src:i.Z,height:"64",width:"64"}),l.createElement("img",{src:d.Z,height:"64",width:"64"}),l.createElement("img",{src:s.Z,height:"64",width:"64"}),l.createElement("img",{src:m.Z,height:"64",width:"64"}),l.createElement("img",{src:p.Z,height:"64",width:"64"}),l.createElement("br",null),a?l.createElement("p",null,"Je hebt gewonnen"):l.createElement("p",null,"Je hebt verloren"),0==e&&l.createElement("img",{src:i.Z,height:"64",width:"64"}),1==e&&l.createElement("img",{src:d.Z,height:"64",width:"64"}),2==e&&l.createElement("img",{src:s.Z,height:"64",width:"64"}),3==e&&l.createElement("img",{src:m.Z,height:"64",width:"64"}),4==e&&l.createElement("img",{src:p.Z,height:"64",width:"64"}),0==t&&l.createElement("img",{src:i.Z,height:"64",width:"64"}),1==t&&l.createElement("img",{src:d.Z,height:"64",width:"64"}),2==t&&l.createElement("img",{src:s.Z,height:"64",width:"64"}),3==t&&l.createElement("img",{src:m.Z,height:"64",width:"64"}),4==t&&l.createElement("img",{src:p.Z,height:"64",width:"64"}),0==n&&l.createElement("img",{src:i.Z,height:"64",width:"64"}),1==n&&l.createElement("img",{src:d.Z,height:"64",width:"64"}),2==n&&l.createElement("img",{src:s.Z,height:"64",width:"64"}),3==n&&l.createElement("img",{src:m.Z,height:"64",width:"64"}),4==n&&l.createElement("img",{src:p.Z,height:"64",width:"64"}))},h=()=>l.createElement(c.Z,null,l.createElement(u,null)),k=()=>{let e=[{id:0,naam:"Jef",leeftijd:20},{id:1,naam:"Jan",leeftijd:21},{id:2,naam:"Joris",leeftijd:22},{id:3,naam:"Andie",leeftijd:23},{id:4,naam:"Senne",leeftijd:24}];return l.createElement(l.Fragment,null,l.createElement("h1",null,"Labo 1: Lijsten"),l.createElement("h3",null,"Getallenlijst"),l.createElement("ul",null,[1,2,3,4,5,4,3].map(((e,t)=>l.createElement("li",{key:t},e)))),l.createElement("h3",null,"Studentenlijst"),l.createElement("ol",null,e.map((e=>l.createElement("li",{key:e.id},e.naam)))),l.createElement("h3",null,"Studentenlijst met J"),l.createElement("ol",null,e.filter((e=>e.naam.startsWith("J"))).map((e=>l.createElement("li",{key:e.id},e.naam)))),l.createElement("h3",null,"Select"),l.createElement("select",null,e.map((e=>l.createElement("option",{key:e.id},e.naam)))),l.createElement("h3",null,"Table"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Naam"),l.createElement("th",null,"Leeftijd"))),l.createElement("tbody",null,e.map((e=>l.createElement("tr",{key:e.id},l.createElement("td",null,e.naam),l.createElement("td",null,e.leeftijd)))))))},g=e=>{let{value:t}=e;return l.createElement(l.Fragment,null,0==t&&l.createElement("img",{src:i.Z,height:"64",width:"64"}),1==t&&l.createElement("img",{src:d.Z,height:"64",width:"64"}),2==t&&l.createElement("img",{src:s.Z,height:"64",width:"64"}),3==t&&l.createElement("img",{src:m.Z,height:"64",width:"64"}),4==t&&l.createElement("img",{src:p.Z,height:"64",width:"64"}))},b=e=>{let{slots:t}=e,n=Array.from(Array(t).keys()).map((()=>Math.floor(5*Math.random()))),a=null==n.find((e=>e!==t[0]));return l.createElement(l.Fragment,null,a?l.createElement("p",null,"Je hebt gewonnen"):l.createElement("p",null,"Je hebt verloren"),n.map(((e,t)=>l.createElement(g,{value:e,key:t}))))},v=()=>{const[e,t]=(0,l.useState)(0);return l.createElement(l.Fragment,null,l.createElement("h1",null,"Labo 1: Slots met map"),l.createElement(g,{value:0}),l.createElement(g,{value:1}),l.createElement(g,{value:2}),l.createElement(g,{value:3}),l.createElement(g,{value:4}),l.createElement("br",null),l.createElement(b,{slots:5}),l.createElement("br",null),l.createElement("button",{onClick:()=>{t(Math.random())}},"Refresh"))},f=()=>{let e=Array.from(Array(26).keys()).map((e=>String.fromCharCode(e+65))).map((e=>"https://raw.githubusercontent.com/slimmii/alien-alphabet/master/"+e.toUpperCase()+".png"));return l.createElement(l.Fragment,null,e.map((e=>l.createElement("button",{key:e},l.createElement("img",{src:e})))))},w=()=>{const e=Array.from({length:100},((e,t)=>"hsl("+360*t/100+", 100%, 50%)"));return l.createElement(l.Fragment,null,e.map((e=>l.createElement("div",{key:e,style:{backgroundColor:e,width:"100%",height:"4px"}}))))},y=()=>{let e=Array.from(Array(10).keys()).map((e=>e+1));return l.createElement(l.Fragment,null,l.createElement("table",null,e.map((t=>l.createElement("tr",{key:t},e.map((e=>l.createElement("td",{key:t+e},t*e))))))))},E=[{from:"Wolverine",content:"Hey Mags, heard you tried to bend a spoon with your mind again. You need a hand with that?",date:"2023-09-20 10:15 AM"},{from:"Magneto",content:"Very funny, Logan. At least I don't need metal claws to pick my teeth.",date:"2023-09-20 10:17 AM"},{from:"Wolverine",content:"Touch\xe9, old man. But I bet you still can't beat me at a game of chess.",date:"2023-09-20 10:20 AM"},{from:"Magneto",content:'Chess? How pedestrian. I prefer a game of "Move All the Metal Objects Away From Wolverine."',date:"2023-09-20 10:22 AM"},{from:"Wolverine",content:"Haha, nice try, metalhead. But I've got my adamantium skeleton to keep me company.",date:"2023-09-20 10:25 AM"},{from:"Magneto",content:"True, but it doesn't help you with fashion choices. Those sideburns, really, Logan?",date:"2023-09-20 10:27 AM"},{from:"Wolverine",content:"What can I say? They help me channel my inner bad boy.",date:"2023-09-20 10:30 AM"},{from:"Magneto",content:"Speaking of bad boys, have you seen what Deadpool's up to lately?",date:"2023-09-20 10:32 AM"},{from:"Wolverine",content:"Oh, don't get me started on that guy. He makes me look like a choirboy.",date:"2023-09-20 10:35 AM"},{from:"Magneto",content:"Agreed, Logan. Let's team up and take him down. It's the only way to save our reputation.",date:"2023-09-20 10:37 AM"}],N=()=>l.createElement(l.Fragment,null,l.createElement("table",null,E.map((e=>l.createElement("tr",{key:e.date.toString()},l.createElement("td",null,e.from),l.createElement("td",null,e.content),l.createElement("td",null,e.date))))));var M=n(2004);const C={},A="Labo 1",j={unversionedId:"wf-course/labs/react-basics/lab1",id:"wf-course/labs/react-basics/lab1",title:"Labo 1",description:"Voor dit labo moet je de volgende theorie bekeken hebben:",source:"@site/docs/wf-course/labs/react-basics/lab1.md",sourceDirName:"wf-course/labs/react-basics",slug:"/wf-course/labs/react-basics/lab1",permalink:"/webframeworks-cursus/wf-course/labs/react-basics/lab1",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wfCourse",previous:{title:"React Basics",permalink:"/webframeworks-cursus/wf-course/labs/react-basics/"},next:{title:"Labo 2",permalink:"/webframeworks-cursus/wf-course/labs/react-basics/lab2"}},Z={},x=[{value:"1. Expressies",id:"1-expressies",level:2},{value:"Opdracht",id:"opdracht",level:4},{value:"Voorbeeldoplossing",id:"voorbeeldoplossing",level:4},{value:"Video",id:"video",level:4},{value:"2. Slotmachine",id:"2-slotmachine",level:2},{value:"Opdracht",id:"opdracht-1",level:4},{value:"Voorbeeldoplossing",id:"voorbeeldoplossing-1",level:4},{value:"Oplossingsvideo",id:"oplossingsvideo",level:4},{value:"3. Lijsten",id:"3-lijsten",level:2},{value:"Opdracht",id:"opdracht-2",level:4},{value:"Voorbeeldoplossing",id:"voorbeeldoplossing-2",level:4},{value:"Oplossingsvideo",id:"oplossingsvideo-1",level:4},{value:"4. Slot machine met map",id:"4-slot-machine-met-map",level:2},{value:"Opdracht",id:"opdracht-3",level:4},{value:"Voorbeeldoplossing",id:"voorbeeldoplossing-3",level:4},{value:"Oplossingsvideo",id:"oplossingsvideo-2",level:4},{value:"5. Alien Alphabet",id:"5-alien-alphabet",level:2},{value:"Opdracht",id:"opdracht-4",level:4},{value:"Voorbeeldoplossing",id:"voorbeeldoplossing-4",level:4},{value:"6. Maaltafels",id:"6-maaltafels",level:2},{value:"Opdracht",id:"opdracht-5",level:4},{value:"Voorbeeldoplossing",id:"voorbeeldoplossing-5",level:4},{value:"7. Regenboog",id:"7-regenboog",level:2},{value:"Opdracht",id:"opdracht-6",level:4},{value:"8. Chat messages",id:"8-chat-messages",level:2},{value:"Opdracht",id:"opdracht-7",level:4},{value:"Voorbeeldoplossing",id:"voorbeeldoplossing-6",level:4}],T={toc:x};function L(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"labo-1"},"Labo 1"),(0,r.kt)("p",null,"Voor dit labo moet je de volgende theorie bekeken hebben:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React app aanmaken"),(0,r.kt)("li",{parentName:"ul"},"TSX"),(0,r.kt)("li",{parentName:"ul"},"Statische bestanden"),(0,r.kt)("li",{parentName:"ul"},"Lijsten")),(0,r.kt)("h2",{id:"1-expressies"},"1. Expressies"),(0,r.kt)("p",null,"Maak een nieuwe react applicatie aan en maak het volgende ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," component aan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},"const App = () => {\n    return (\n        <div>\n            <h1>Labo 1</h1>\n        </div>\n    );\n}\n\nexport default App;\n")),(0,r.kt)("h4",{id:"opdracht"},"Opdracht"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maak een variabele aan met de naam ",(0,r.kt)("inlineCode",{parentName:"li"},"random")," en geef deze de waarde van ",(0,r.kt)("inlineCode",{parentName:"li"},"Math.random()"),". Toon deze waarde in de browser. "),(0,r.kt)("li",{parentName:"ul"},"Maak een variabele aan met de naam ",(0,r.kt)("inlineCode",{parentName:"li"},"getal1")," en geef deze een waarde tussen 0 en 10. Toon deze waarde in de browser."),(0,r.kt)("li",{parentName:"ul"},"Maak een variabele aan met de naam ",(0,r.kt)("inlineCode",{parentName:"li"},"getal2")," en geef deze een waarde tussen 0 en 10.\nToon deze waarde in de browser."),(0,r.kt)("li",{parentName:"ul"},"Maak een functie som aan die 2 parameters heeft en deze optelt. Gebruik deze functie om de som van ",(0,r.kt)("inlineCode",{parentName:"li"},"getal1")," en ",(0,r.kt)("inlineCode",{parentName:"li"},"getal2")," te berekenen en deze te tonen in de browser. "),(0,r.kt)("li",{parentName:"ul"},"Maak een functie vermenigvuldiging aan die 2 parameters heeft en deze vermenigvuldigt. Gebruik deze functie om de vermenigvuldiging van ",(0,r.kt)("inlineCode",{parentName:"li"},"getal1")," en ",(0,r.kt)("inlineCode",{parentName:"li"},"getal2")," te berekenen en deze te tonen in de browser."),(0,r.kt)("li",{parentName:"ul"},"Vervang de div tags met een fragment tag."),(0,r.kt)("li",{parentName:"ul"},"Gebruik conditionele rendering om een boodschap te tonen in de browser afhankelijk van de waarde van ",(0,r.kt)("inlineCode",{parentName:"li"},"random"),". Als ",(0,r.kt)("inlineCode",{parentName:"li"},"random")," groter is dan 0.5 dan tonen we de vermenivuldiging van de twee getallen, anders tonen we de som van de twee getallen.")),(0,r.kt)("h4",{id:"voorbeeldoplossing"},"Voorbeeldoplossing"),(0,r.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,r.kt)(o,{mdxType:"Labo1Exercise1"})),(0,r.kt)("h4",{id:"video"},"Video"),(0,r.kt)(M.Z,{controls:!0,url:"https://youtu.be/wHT0FYsQa6k",mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"2-slotmachine"},"2. Slotmachine"),(0,r.kt)("p",null,"Maak een nieuwe react applicatie aan ",(0,r.kt)("inlineCode",{parentName:"p"},"labo1-slotmachine"),"."),(0,r.kt)("h4",{id:"opdracht-1"},"Opdracht"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Toon alle mogelijke afbeeldingen van de slotmachine in de browser."),(0,r.kt)("li",{parentName:"ul"},"Maak 3 variabelen met de namen ",(0,r.kt)("inlineCode",{parentName:"li"},"slot1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"slot2")," en ",(0,r.kt)("inlineCode",{parentName:"li"},"slot3")," aan. Zorg ervoor dat deze variabele een willekeurige waarde krijgt tussen 0 en 4 (met 4 inbregrepen)"),(0,r.kt)("li",{parentName:"ul"},'Toon de tekst "Je hebt gewonnen" als ',(0,r.kt)("inlineCode",{parentName:"li"},"slot1"),",",(0,r.kt)("inlineCode",{parentName:"li"},"slot2")," en ",(0,r.kt)("inlineCode",{parentName:"li"},"slot3"),' dezelfde waarde heeft. Toon de tekst "Je hebt verloren" als ',(0,r.kt)("inlineCode",{parentName:"li"},"slot1"),",",(0,r.kt)("inlineCode",{parentName:"li"},"slot2")," en ",(0,r.kt)("inlineCode",{parentName:"li"},"slot3")," een andere waarde hebben."),(0,r.kt)("li",{parentName:"ul"},"Zorg ervoor dat er 3 afbeeldingen worden getoond afhankelijk van de waarde van slot1, slot2 en slot3.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Als de slot 0 is toon je een kers"),(0,r.kt)("li",{parentName:"ul"},"Als de slot 1 is toon je een citroen"),(0,r.kt)("li",{parentName:"ul"},"..."))),(0,r.kt)("li",{parentName:"ul"},"Probeer de afbeeldingen te tonen met behulp van import, require en een url (public folder)")),(0,r.kt)("h4",{id:"voorbeeldoplossing-1"},"Voorbeeldoplossing"),(0,r.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,r.kt)(h,{mdxType:"Labo1Exercise2"})),(0,r.kt)("h4",{id:"oplossingsvideo"},"Oplossingsvideo"),(0,r.kt)(M.Z,{controls:!0,url:"https://youtu.be/v-MZWSG5uN0",mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"3-lijsten"},"3. Lijsten"),(0,r.kt)("p",null,"Maak een nieuwe react applicatie aan ",(0,r.kt)("inlineCode",{parentName:"p"},"labo1-lijsten"),"."),(0,r.kt)("h4",{id:"opdracht-2"},"Opdracht"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maak een array met een aantal getallen in. Zorg ervoor dat een bepaald getal meerdere keren voorkomt in de array."),(0,r.kt)("li",{parentName:"ul"},"Gebruik een unordered list (ul) om de getallen in de browser te tonen. Kies een goede key voor de list items."),(0,r.kt)("li",{parentName:"ul"},"Maak een array met 5 student objecten aan. Elke student heeft een id, een naam en een leeftijd."),(0,r.kt)("li",{parentName:"ul"},"Gebruik een ordered list (ol) om de namen van de studenten te tonen in de browser."),(0,r.kt)("li",{parentName:"ul"},"Gebruik een ordered list (ol) om de namen van de stundenten waarvan de naam met de letter J begint te tonen in de browser. Gebruik een combinatie van filter/map."),(0,r.kt)("li",{parentName:"ul"},"Gebruik een select met options element om de namen van de personen te tonen in de browser. "),(0,r.kt)("li",{parentName:"ul"},"Gebruik een table om de namen en leeftijden van de personen te tonen in de browser.")),(0,r.kt)("h4",{id:"voorbeeldoplossing-2"},"Voorbeeldoplossing"),(0,r.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,r.kt)(k,{mdxType:"Labo1Exercise3"})),(0,r.kt)("h4",{id:"oplossingsvideo-1"},"Oplossingsvideo"),(0,r.kt)(M.Z,{controls:!0,url:"https://youtu.be/68O9gQZ8Ykk",mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"4-slot-machine-met-map"},"4. Slot machine met map"),(0,r.kt)("p",null,"Maak een nieuwe react applicatie aan ",(0,r.kt)("inlineCode",{parentName:"p"},"labo1-slotmachine-map"),". Kopieer je code van de vorige opdracht naar deze nieuwe applicatie."),(0,r.kt)("h4",{id:"opdracht-3"},"Opdracht"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Zorg ervoor dat je niet meer werkt met aparte variabelen per slot, maar dat je een array maakt met een variabel aantal slots (bepaald in een variabele)."),(0,r.kt)("li",{parentName:"ul"},"Pas je code nu aan dat je gebruik maakt van een map functie om de slots te tonen in de browser."),(0,r.kt)("li",{parentName:"ul"},'Ook de tekst "Je hebt gewonnen" of "Je hebt verloren" moet je nu bepalen met een array functie.')),(0,r.kt)("h4",{id:"voorbeeldoplossing-3"},"Voorbeeldoplossing"),(0,r.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,r.kt)(v,{mdxType:"Labo1Exercise4"})),(0,r.kt)("h4",{id:"oplossingsvideo-2"},"Oplossingsvideo"),(0,r.kt)(M.Z,{controls:!0,url:"https://youtu.be/eqS3Ovt2FYE",mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"5-alien-alphabet"},"5. Alien Alphabet"),(0,r.kt)("p",null,"Maak een nieuwe react applicatie aan ",(0,r.kt)("inlineCode",{parentName:"p"},"alien-alphabet"),"."),(0,r.kt)("h4",{id:"opdracht-4"},"Opdracht"),(0,r.kt)("p",null,"We willen in deze opdracht een aanzet geven tot een vertaalprogramma voor een buitenaards alfabet. We hebben een afbeelding voor elke letter van het alfabet. We willen deze afbeeldingen tonen in de browser."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maak een array aan met alle letters van het alfabet. Je mag de letters zelf typen, of je kan gebruik maken van de ",(0,r.kt)("inlineCode",{parentName:"li"},"Array.from")," functie. Zoek eens op hoe je aan de hand van de ASCII code een letter kan omzetten naar een string."),(0,r.kt)("li",{parentName:"ul"},"Maak een array aan met alle afbeeldingen van het alfabet. De afbeelding van de letters kan je vinden op ",(0,r.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/slimmii/alien-alphabet/master/")," gevolgd door de letter in hoofdletters en de extensie ",(0,r.kt)("inlineCode",{parentName:"li"},".png"),". Je kan deze afbeeldingen gebruiken door de ",(0,r.kt)("inlineCode",{parentName:"li"},"src")," property van de ",(0,r.kt)("inlineCode",{parentName:"li"},"img")," tag te zetten op de url van de afbeelding.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bv.:",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/slimmii/alien-alphabet/master/A.png"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/slimmii/alien-alphabet/master/B.png"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/slimmii/alien-alphabet/master/C.png"),(0,r.kt)("br",{parentName:"li"}),"..."))),(0,r.kt)("li",{parentName:"ul"},"Gebruik de map-functie om de afbeeldingen weer te geven in de browser. Elk element in de alphabetImages-array moet worden weergegeven als een ",(0,r.kt)("inlineCode",{parentName:"li"},"<img>")," tag binnen een ",(0,r.kt)("inlineCode",{parentName:"li"},"<button>"),"-element.")),(0,r.kt)("h4",{id:"voorbeeldoplossing-4"},"Voorbeeldoplossing"),(0,r.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,r.kt)(f,{mdxType:"Labo1AlienAlphabet"})),(0,r.kt)("h2",{id:"6-maaltafels"},"6. Maaltafels"),(0,r.kt)("p",null,"Maak een nieuwe react applicatie aan ",(0,r.kt)("inlineCode",{parentName:"p"},"maaltafels"),"."),(0,r.kt)("h4",{id:"opdracht-5"},"Opdracht"),(0,r.kt)("p",null,"Maak een React-component met de naam MultiplicationTable die een tabel genereert met de vermenigvuldigingstabel van getallen van 1 tot 10. Elk cel in de tabel moet het resultaat van de vermenigvuldiging van het rijnummer en het kolomnummer bevatten."),(0,r.kt)("h4",{id:"voorbeeldoplossing-5"},"Voorbeeldoplossing"),(0,r.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,r.kt)(y,{mdxType:"Maaltafels"})),(0,r.kt)("h2",{id:"7-regenboog"},"7. Regenboog"),(0,r.kt)("p",null,"Maak een nieuwe react applicatie aan ",(0,r.kt)("inlineCode",{parentName:"p"},"regenboog"),"."),(0,r.kt)("h4",{id:"opdracht-6"},"Opdracht"),(0,r.kt)("p",null,"Definieer een array met de naam colors om een reeks kleuren te genereren. De array moet 100 verschillende kleuren bevatten, waarbij elke kleur wordt gedefinieerd in het HSL (Hue, Saturation, Lightness) kleurenmodel. Elke kleur in de reeks moet een unieke tint hebben, vari\xebrend van 0 graden (rood) tot 360 graden (rood)."),(0,r.kt)("p",null,"Je kan deze array gebruiken om de kleuren te genereren:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const colors = Array.from({length: 100}, (_, i) => `hsl(${i * 360 / 100}, 100%, 50%)`);\n")),(0,r.kt)("p",null,"Gebruik de map-functie om de kleuren in de array weer te geven als verticale div's op de webpagina. Elke balk moet een unieke kleur hebben, en de breedte van de balk moet 100% zijn, terwijl de hoogte 4 pixels moet zijn."),(0,r.kt)("p",null,"Je hebt op dit moment nog niet geleerd hoe je css gebruikt. Je kan dit doen aan de hand van inline css:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'<div style={{width: "100%", height: "4px", backgroundColor: "red"}}></div>\n')),(0,r.kt)("p",null,"Dit wordt later nog uitgelegd! Begrijp je hoe dit werkt, kan je ook eens proberen de regenboog in de andere richting te laten gaan! Tip: Twee woorden: flex-direction en flex!"),(0,r.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,r.kt)(w,{mdxType:"Regenboog"})),(0,r.kt)("h2",{id:"8-chat-messages"},"8. Chat messages"),(0,r.kt)("p",null,"Maak een nieuwe react applicatie aan ",(0,r.kt)("inlineCode",{parentName:"p"},"chat-messages"),"."),(0,r.kt)("h4",{id:"opdracht-7"},"Opdracht"),(0,r.kt)("p",null,"We willen een chat applicatie maken. We hebben een array met chat berichten. Elk bericht heeft een id, een naam, een bericht en een timestamp. We willen deze berichten tonen in de browser aan de hand van een eenvoudige tabel (zonder styling)."),(0,r.kt)("p",null,"De data kan je gewoon in een variabele zetten. Je kan deze data gebruiken:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const messages = [\n    {\n        from: 'Wolverine',\n        content: 'Hey Mags, heard you tried to bend a spoon with your mind again. You need a hand with that?',\n        date: '2023-09-20 10:15 AM'\n    },\n    {\n        from: 'Magneto',\n        content: 'Very funny, Logan. At least I don\\'t need metal claws to pick my teeth.',\n        date: '2023-09-20 10:17 AM'\n    },\n    {\n        from: 'Wolverine',\n        content: 'Touch\xe9, old man. But I bet you still can\\'t beat me at a game of chess.',\n        date: '2023-09-20 10:20 AM'\n    },\n    {\n        from: 'Magneto',\n        content: 'Chess? How pedestrian. I prefer a game of \"Move All the Metal Objects Away From Wolverine.\"',\n        date: '2023-09-20 10:22 AM'\n    },\n    {\n        from: 'Wolverine',\n        content: 'Haha, nice try, metalhead. But I\\'ve got my adamantium skeleton to keep me company.',\n        date: '2023-09-20 10:25 AM'\n    },\n    {\n        from: 'Magneto',\n        content: 'True, but it doesn\\'t help you with fashion choices. Those sideburns, really, Logan?',\n        date: '2023-09-20 10:27 AM'\n    },\n    {\n        from: 'Wolverine',\n        content: 'What can I say? They help me channel my inner bad boy.',\n        date: '2023-09-20 10:30 AM'\n    },\n    {\n        from: 'Magneto',\n        content: 'Speaking of bad boys, have you seen what Deadpool\\'s up to lately?',\n        date: '2023-09-20 10:32 AM'\n    },\n    {\n        from: 'Wolverine',\n        content: 'Oh, don\\'t get me started on that guy. He makes me look like a choirboy.',\n        date: '2023-09-20 10:35 AM'\n    },\n    {\n        from: 'Magneto',\n        content: 'Agreed, Logan. Let\\'s team up and take him down. It\\'s the only way to save our reputation.',\n        date: '2023-09-20 10:37 AM'\n    }\n];\n")),(0,r.kt)("h4",{id:"voorbeeldoplossing-6"},"Voorbeeldoplossing"),(0,r.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,r.kt)(N,{mdxType:"ChatMessages"})))}L.isMDXComponent=!0},2331:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/slot-cherry-cce8464b32439efb4f79fba017477125.png"},9378:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/slot-lemon-52cd7112e8b6d398f97e69f8ce2da623.png"},2425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/slot-melon-593489676a762d464eaea97127970d28.png"},2786:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/slot-prune-e486170eb7c22e6e9aed5de0316b5209.png"},335:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/slot-seven-e71e0d10655b5491197925624b5ac139.png"}}]);