"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[379],{1895:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905)),r=a(2004);const i={},l="Labo 3",s={unversionedId:"react-native-course/labs/lab3",id:"react-native-course/labs/lab3",title:"Labo 3",description:"Voor dit labo moet je de volgende theorie bekeken hebben:",source:"@site/docs/react-native-course/labs/lab3.md",sourceDirName:"react-native-course/labs",slug:"/react-native-course/labs/lab3",permalink:"/webframeworks-cursus/react-native-course/labs/lab3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactNative",previous:{title:"Labo 2",permalink:"/webframeworks-cursus/react-native-course/labs/lab2"},next:{title:"Labo 4",permalink:"/webframeworks-cursus/react-native-course/labs/lab4"}},d={},p=[{value:"Opdracht: Twitter",id:"opdracht-twitter",level:2},{value:"Oplossingsvideo",id:"oplossingsvideo",level:3},{value:"Opdracht: Dark/Light Toggle",id:"opdracht-darklight-toggle",level:2},{value:"Opdracht: Rainbows met state",id:"opdracht-rainbows-met-state",level:2},{value:"Stap 1: Loops",id:"stap-1-loops",level:3},{value:"Stap 2: State",id:"stap-2-state",level:3},{value:"Stap 3: Randomize rainbow",id:"stap-3-randomize-rainbow",level:3},{value:"Oplossingsvideo",id:"oplossingsvideo-1",level:3}],u={toc:p};function k(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"labo-3"},"Labo 3"),(0,o.kt)("p",null,"Voor dit labo moet je de volgende theorie bekeken hebben:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lijsten"),(0,o.kt)("li",{parentName:"ul"},"Controlled components")),(0,o.kt)("h2",{id:"opdracht-twitter"},"Opdracht: Twitter"),(0,o.kt)("p",null,"Maak een nieuwe react native app. "),(0,o.kt)("p",null,"Zorg dat bij het opstarten van de app twee API calls gebeuren:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ophalen van de tweets: ",(0,o.kt)("a",{parentName:"li",href:"https://my-json-server.typicode.com/similonap/twitter-json-server/tweets"},"https://my-json-server.typicode.com/similonap/twitter-json-server/tweets")),(0,o.kt)("li",{parentName:"ul"},"Ophalen van de profielen: ",(0,o.kt)("a",{parentName:"li",href:"https://my-json-server.typicode.com/similonap/twitter-json-server/profiles"},"https://my-json-server.typicode.com/similonap/twitter-json-server/profiles"))),(0,o.kt)("p",null,"Je kan dit in een DataProvider component doen en werken met een context."),(0,o.kt)("p",null,"Vervolgens zorg je dat de tweets in een lijst getoond worden. De lijst moet er als volgt uitzien:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:a(9266).Z,width:"1080",height:"2340"})),(0,o.kt)("p",null,"Zorg er ook voor dat je een filter input veld hebt waarmee je de tweets kan filteren op basis van de naam van de auteur. De filter moet case insensitive zijn."),(0,o.kt)("p",null,"Voorzie een swipe down to refresh functionaliteit."),(0,o.kt)("h3",{id:"oplossingsvideo"},"Oplossingsvideo"),(0,o.kt)(r.Z,{controls:!0,url:"https://youtu.be/inSMqbQUz40",mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"opdracht-darklight-toggle"},"Opdracht: Dark/Light Toggle"),(0,o.kt)("p",null,"Maak een nieuwe react native app. Plaats twee invoervelden in de app en een switch. ALs je op de switch duwt, veranderd de achtergrond kleur van de app initieel van wit naar zwart en omgekeerd. De invoervelden dienen om de kleur waartussen je kan switchen in te geven. De applicatie moet er als volgt uitzien:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:a(1522).Z,width:"325",height:"718"})),(0,o.kt)("h2",{id:"opdracht-rainbows-met-state"},"Opdracht: Rainbows met state"),(0,o.kt)("h3",{id:"stap-1-loops"},"Stap 1: Loops"),(0,o.kt)("p",null,"Zorg dat je colors array 10 waarden bevat. Pas dan jouw Rainbow component aan zodat die over de eerste 6 waarden van de kleuren array loopt. (tip: je vervangt 6 lijnen code door 1 lijn)"),(0,o.kt)("p",null,"Doe dit ook voor de Footer component: maak een variabele text aan die het woord Rainbow bevat en loop over de letters van het woord (tip: je vervangt 7 lijnen code door 1 lijn). "),(0,o.kt)("p",null,"Zorg dat het woord dat in Footer getoond wordt ",(0,o.kt)("strong",{parentName:"p"},"nooit langer kan zijn dan 10 letters"),' (bv: als je de variabele text de waarde "Hallo ik ben een student van AP" geeft, zie je in de footer alleen "Hallo ik b")'),(0,o.kt)("h3",{id:"stap-2-state"},"Stap 2: State"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Voeg een knop toe waarmee je de kleuren van de regenboog kan veranderen van pastel kleuren naar niet pastelkleuren (en omgekeerd)"),(0,o.kt)("li",{parentName:"ul"},"Voeg een input veld toe waar je een tekst kan ingeven. Als je op submit drukt, wordt de tekst in de footer veranderd naar de tekst die je ingegeven hebt. (tip: gebruik de ",(0,o.kt)("inlineCode",{parentName:"li"},"onSubmitEditing")," event handler van een ",(0,o.kt)("inlineCode",{parentName:"li"},"TextInput")," component)"),(0,o.kt)("li",{parentName:"ul"},"Je hebt hier twee state variabelen nodig.")),(0,o.kt)("p",null,"Je kan je baseren op de volgende screen recording:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"picture 8",src:a(5619).Z,width:"322",height:"682"})),(0,o.kt)("h3",{id:"stap-3-randomize-rainbow"},"Stap 3: Randomize rainbow"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Voeg nog een extra knop toe waarmee je de kleuren van de regenboog kan randomizen. (tip: gebruik de ",(0,o.kt)("inlineCode",{parentName:"li"},"Math.random()")," functie)"),(0,o.kt)("li",{parentName:"ul"},"De tekst in de footer mag niet mee gerandomized worden."),(0,o.kt)("li",{parentName:"ul"},"De pastel knop moet ook nog steeds werken.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"picture 8",src:a(8153).Z,width:"322",height:"682"})),(0,o.kt)("h3",{id:"oplossingsvideo-1"},"Oplossingsvideo"),(0,o.kt)(r.Z,{controls:!0,url:"https://youtu.be/3EfjoCul3TE",mdxType:"ReactPlayer"}))}k.isMDXComponent=!0},1522:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/darklight-4074581952683906992dfa3a2823a298.gif"},5619:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/interaction-statemobile-2b411e01c199e10440ae7f0055187845.gif"},8153:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/interaction-statemobile2-e09762209f7ad4a01f0012ba90a9478d.gif"},9266:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/twitter_list-20e10cfda15d564e3e19a0e58f619282.jpg"}}]);