"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[7907],{8759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>C,default:()=>E,frontMatter:()=>N,metadata:()=>h,toc:()=>y});var a=n(7462),l=n(7294),i=n(3905);const o=()=>{const[e,t]=(0,l.useState)(0);let n="black";return e>0?n="green":e<0&&(n="red"),l.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}},l.createElement("button",{onClick:()=>t(e+1)},"Omhoog"),l.createElement("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"center",color:n}},"Count: ",e),l.createElement("button",{onClick:()=>t(e-1)},"Omlaag"))},r=()=>l.createElement(l.Fragment,null,l.createElement(o,null),l.createElement(o,null),l.createElement(o,null)),p=()=>{const[e,t]=(0,l.useState)("#000000");return l.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},l.createElement("input",{type:"color",value:e,onChange:e=>t(e.target.value)}),l.createElement("select",{onChange:e=>t(e.target.value)},l.createElement("option",{value:"#000000"},"#000000"),l.createElement("option",{value:"#FF0000"},"#FF0000"),l.createElement("option",{value:"#00FF00"},"#00FF00"),l.createElement("option",{value:"#0000FF"},"#0000FF")),l.createElement("div",{style:{width:100,height:100,backgroundColor:e}}))},d=()=>l.createElement(l.Fragment,null,l.createElement(p,null)),m=()=>{const[e,t]=(0,l.useState)(""),[n,a]=(0,l.useState)(""),[i,o]=(0,l.useState)(""),[r,p]=(0,l.useState)(""),[d,m]=(0,l.useState)("");return l.createElement("form",{onSubmit:l=>{l.preventDefault(),m("Thanks "+e+" "+n+"! We will contact you at "+i+"."),t(""),a(""),o(""),p("")},style:{display:"grid",gridTemplateColumns:"100px 1fr",gap:"5px"}},l.createElement("label",null,"First name:"),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)}),l.createElement("label",null,"Last name:"),l.createElement("input",{type:"text",value:n,onChange:e=>a(e.target.value)}),l.createElement("label",null,"Email:"),l.createElement("input",{type:"email",value:i,onChange:e=>o(e.target.value)}),l.createElement("label",null,"Message:"),l.createElement("textarea",{value:r,onChange:e=>p(e.target.value)}),l.createElement("button",{type:"submit",style:{gridColumn:"1 / span 2"},disabled:!(e.length>0&&n.length>0&&i.length>0&&r.length>0)},"Send"),d&&l.createElement("div",{style:{gridRowStart:6,gridColumn:"1 / span 2"}},d))},u=()=>{const[e,t]=(0,l.useState)("");return l.createElement(l.Fragment,null,l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)}),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)}),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)}),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)}),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)}))},k=()=>{const[e,t]=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement("input",{checked:e,type:"checkbox",onChange:e=>{t(e.target.checked)}})," Show/Hide",e&&l.createElement("div",{style:{border:"1px solid black",height:400,padding:5,backgroundRepeat:"repeat-xy",backgroundImage:"url('https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif')"}}))},c=e=>{let{goods:t}=e;const[n,a]=(0,l.useState)(t),[i,o]=(0,l.useState)(""),[r,p]=(0,l.useState)(500),[d,m]=(0,l.useState)(!1);return l.createElement("div",null,l.createElement("div",null,l.createElement("form",{onSubmit:e=>{e.preventDefault(),a([...n,{name:i,price:r,inStock:d}]),o(""),p(0),m(!1)},style:{display:"grid",gridTemplateColumns:"200px 200px"}},l.createElement("label",null,"Product name: "),l.createElement("input",{placeholder:"product name",type:"text",value:i,onChange:e=>o(e.target.value)}),l.createElement("label",null,"Price: "),l.createElement("input",{placeholder:"price",type:"number",value:r,onChange:e=>p(parseInt(e.target.value))}),l.createElement("label",null,"In stock? "),l.createElement("input",{type:"checkbox",checked:d,onChange:e=>m(e.target.checked)}),l.createElement("input",{type:"submit",value:"Add product",style:{gridColumnStart:1,gridColumnEnd:"span 2"}}))),l.createElement("div",{style:{display:"grid",gridTemplateColumns:"300px 100px"}},n.map((e=>l.createElement(l.Fragment,{key:e.name},l.createElement("span",{style:{color:e.inStock?"black":"red"}},e.name),l.createElement("span",null,"\u20ac ",e.price))))))},s=()=>l.createElement(c,{goods:[{name:"iPhone 12",price:699,inStock:!1},{name:"iPhone 12 Pro",price:999,inStock:!0},{name:"iPhone 12 Pro Max",price:1099,inStock:!0},{name:"Samsung Galaxy S20",price:799,inStock:!0},{name:"Samsung Galaxy S10",price:699,inStock:!1},{name:"Samsung Galaxy S20 Ultra",price:999,inStock:!0},{name:"Huawei P30",price:499,inStock:!0},{name:"Huawei P40",price:599,inStock:!0},{name:"Nokia 3310",price:399,inStock:!1}]});var g=n(6460);const b=()=>l.createElement(g.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),v=()=>{const[e,t]=(0,l.useState)(!1);return l.createElement("div",null,!e&&l.createElement("button",{onClick:()=>{t(!0),setTimeout((()=>{t(!1)}),3e3)}},"Start loading"),e&&l.createElement(b,null))},N={},C="Labo 3",h={unversionedId:"wf-course/labs/lab3",id:"wf-course/labs/lab3",title:"Labo 3",description:"Voor dit labo moet je de volgende theorie bekeken hebben:",source:"@site/docs/wf-course/labs/lab3.md",sourceDirName:"wf-course/labs",slug:"/wf-course/labs/lab3",permalink:"/webframeworks-cursus/wf-course/labs/lab3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wfCourse",previous:{title:"Labo 2",permalink:"/webframeworks-cursus/wf-course/labs/lab2"},next:{title:"Labo 4",permalink:"/webframeworks-cursus/wf-course/labs/lab4"}},w={},y=[{value:"1. State herkennen",id:"1-state-herkennen",level:2},{value:"2. Input veld",id:"2-input-veld",level:2},{value:"3. Checkbox",id:"3-checkbox",level:2},{value:"4. Omhoog/Omlaag",id:"4-omhoogomlaag",level:2},{value:"5. Loading indicator",id:"5-loading-indicator",level:2},{value:"6. Kleurkiezer",id:"6-kleurkiezer",level:2},{value:"7. Contactformulier",id:"7-contactformulier",level:2}],f={toc:y};function E(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"labo-3"},"Labo 3"),(0,i.kt)("p",null,"Voor dit labo moet je de volgende theorie bekeken hebben:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Event Handling"),(0,i.kt)("li",{parentName:"ul"},"State"),(0,i.kt)("li",{parentName:"ul"},"Formulieren")),(0,i.kt)("h2",{id:"1-state-herkennen"},"1. State herkennen"),(0,i.kt)("p",null,"Identificeer de state in de volgende componenten. Geef aan waar de state zich bevindt en wat de initi\xeble waarde is."),(0,i.kt)(s,{mdxType:"Labo3Goods"}),(0,i.kt)("h2",{id:"2-input-veld"},"2. Input veld"),(0,i.kt)("p",null,"Maak een nieuwe React applicatie aan met behulp van ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," en noem deze ",(0,i.kt)("inlineCode",{parentName:"p"},"labo2-inputfield"),"."),(0,i.kt)("p",null,"Maak een component ",(0,i.kt)("inlineCode",{parentName:"p"},"InputFields")," aan met de volgende functionaliteit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Het component heeft 1 state property ",(0,i.kt)("inlineCode",{parentName:"li"},"inputValue")," die een string bevat. Deze begint bij een lege string."),(0,i.kt)("li",{parentName:"ul"},"Zorg ervoor dat je 5 input velden op je scherm staat die allemaal de waarde van ",(0,i.kt)("inlineCode",{parentName:"li"},"inputValue")," bevatten."),(0,i.kt)("li",{parentName:"ul"},"Zorg ervoor dat als je iets typt in 1 van de input velden, de waarde van ",(0,i.kt)("inlineCode",{parentName:"li"},"inputValue")," verandert en alle input velden de nieuwe waarde bevatten.")),(0,i.kt)("p",null,"Gebruik deze component in de ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," component om de volgende pagina te maken:"),(0,i.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,i.kt)(u,{mdxType:"Labo3InputField"})),(0,i.kt)("h2",{id:"3-checkbox"},"3. Checkbox"),(0,i.kt)("p",null,"Maak een nieuwe React applicatie aan met behulp van ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," en noem deze ",(0,i.kt)("inlineCode",{parentName:"p"},"labo3-checkbox"),"."),(0,i.kt)("p",null,"Maak een component ",(0,i.kt)("inlineCode",{parentName:"p"},"Checkbox")," aan met de volgende functionaliteit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plaats een checkbox in je component met als label ",(0,i.kt)("inlineCode",{parentName:"li"},"Show/Hide")),(0,i.kt)("li",{parentName:"ul"},"Als de gebruiker de checkbox aanvinkt moet er een div getoond worden met een image als background."),(0,i.kt)("li",{parentName:"ul"},"Als de gebruiker de checkbox uitzet moet de div verdwijnen.",(0,i.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,i.kt)(k,{mdxType:"Labo3Checkbox"})))),(0,i.kt)("h2",{id:"4-omhoogomlaag"},"4. Omhoog/Omlaag"),(0,i.kt)("p",null,"Maak een nieuwe React applicatie aan met behulp van ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," en noem deze ",(0,i.kt)("inlineCode",{parentName:"p"},"labo2-omhooglaag"),"."),(0,i.kt)("p",null,"Maak een component ",(0,i.kt)("inlineCode",{parentName:"p"},"Counter")," aan met de volgende functionaliteit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"De component bevat een ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," met een property ",(0,i.kt)("inlineCode",{parentName:"li"},"count")," die een getal bevat. Begint bij 0."),(0,i.kt)("li",{parentName:"ul"},"De component bevat een ",(0,i.kt)("inlineCode",{parentName:"li"},"button")," met de tekst ",(0,i.kt)("inlineCode",{parentName:"li"},"Omhoog"),". Als je op deze knop klikt, wordt de waarde van ",(0,i.kt)("inlineCode",{parentName:"li"},"count")," met 1 verhoogd."),(0,i.kt)("li",{parentName:"ul"},"De component bevat een ",(0,i.kt)("inlineCode",{parentName:"li"},"button")," met de tekst ",(0,i.kt)("inlineCode",{parentName:"li"},"Omlaag"),". Als je op deze knop klikt, wordt de waarde van ",(0,i.kt)("inlineCode",{parentName:"li"},"count")," met 1 verlaagd."),(0,i.kt)("li",{parentName:"ul"},"De component bevat de tekst ",(0,i.kt)("inlineCode",{parentName:"li"},"Count: {count}"),". Hier wordt de waarde van ",(0,i.kt)("inlineCode",{parentName:"li"},"count")," getoond."),(0,i.kt)("li",{parentName:"ul"},"Zorg ervoor dat de tekst rood wordt als ",(0,i.kt)("inlineCode",{parentName:"li"},"count")," kleiner is dan 0 en groen wordt als ",(0,i.kt)("inlineCode",{parentName:"li"},"count")," groter is dan 0. Als het gelijk is aan 0, wordt de tekst zwart.")),(0,i.kt)("p",null,"Gebruik deze component in de ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," component om de volgende pagina te maken:"),(0,i.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,i.kt)(r,{mdxType:"Labo3OmHooglaag"})),(0,i.kt)("h2",{id:"5-loading-indicator"},"5. Loading indicator"),(0,i.kt)("p",null,"Maak een nieuwe React applicatie aan met behulp van ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," en noem deze ",(0,i.kt)("inlineCode",{parentName:"p"},"labo2-loading"),"."),(0,i.kt)("p",null,"installeer de volgende npm packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install react-loader-spinner\n")),(0,i.kt)("p",null,"Zorg er nu voor dat de applicatie de volgende functionaliteiten heeft:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"De applicatie bevat een ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," met een property ",(0,i.kt)("inlineCode",{parentName:"li"},"loading")," die een boolean bevat. Deze begint bij ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},"De applicatie bevat een ",(0,i.kt)("inlineCode",{parentName:"li"},"button")," met de tekst ",(0,i.kt)("inlineCode",{parentName:"li"},"Start loading"),". Als je op deze knop klikt, wordt de waarde van ",(0,i.kt)("inlineCode",{parentName:"li"},"loading")," op ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," gezet."),(0,i.kt)("li",{parentName:"ul"},"Na 3 seconden wordt de waarde van ",(0,i.kt)("inlineCode",{parentName:"li"},"loading")," op ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," gezet."),(0,i.kt)("li",{parentName:"ul"},"Als de waarde van ",(0,i.kt)("inlineCode",{parentName:"li"},"loading")," ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," is, wordt er een loading indicator getoond. De button verdwijnt."),(0,i.kt)("li",{parentName:"ul"},"Als de waarde van ",(0,i.kt)("inlineCode",{parentName:"li"},"loading")," ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," is, wordt de loading indicator niet getoond. De button verschijnt terug.")),(0,i.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,i.kt)(v,{mdxType:"Labo3Loading"})),(0,i.kt)("h2",{id:"6-kleurkiezer"},"6. Kleurkiezer"),(0,i.kt)("p",null,"Maak een nieuwe React applicatie aan met behulp van ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," en noem deze ",(0,i.kt)("inlineCode",{parentName:"p"},"labo2-kleurkiezer"),"."),(0,i.kt)("p",null,"Maak een component ",(0,i.kt)("inlineCode",{parentName:"p"},"ColorPicker")," aan met de volgende functionaliteit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Het component bevat een ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," met een property ",(0,i.kt)("inlineCode",{parentName:"li"},"color")," die een kleur bevat. Begint bij ",(0,i.kt)("inlineCode",{parentName:"li"},"#000000"),"."),(0,i.kt)("li",{parentName:"ul"},"Het component bevat een ",(0,i.kt)("inlineCode",{parentName:"li"},"input")," met type ",(0,i.kt)("inlineCode",{parentName:"li"},"color"),". Als je een andere kleur kiest, wordt de waarde van ",(0,i.kt)("inlineCode",{parentName:"li"},"color")," aangepast."),(0,i.kt)("li",{parentName:"ul"},"Het component bevat een ",(0,i.kt)("inlineCode",{parentName:"li"},"div")," met een achtergrondkleur die gelijk is aan de waarde van ",(0,i.kt)("inlineCode",{parentName:"li"},"color"),"."),(0,i.kt)("li",{parentName:"ul"},"Het component bevat ook een select met de volgende opties:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#000000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#FF0000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#00FF00")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#0000FF")))),(0,i.kt)("li",{parentName:"ul"},"Als je een optie kiest dan wordt ook de kleur aangepast.")),(0,i.kt)("p",null,"Gebruik deze component in de ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," component om de volgende pagina te maken:"),(0,i.kt)(d,{mdxType:"Labo3Kleurkiezer"}),(0,i.kt)("h2",{id:"7-contactformulier"},"7. Contactformulier"),(0,i.kt)("p",null,"Maak een nieuwe React applicatie aan met behulp van ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," en noem deze ",(0,i.kt)("inlineCode",{parentName:"p"},"labo2-contactformulier"),"."),(0,i.kt)("p",null,"Maak een component ",(0,i.kt)("inlineCode",{parentName:"p"},"ContactForm")," aan met de volgende functionaliteit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Het component bevat 3 ",(0,i.kt)("inlineCode",{parentName:"li"},"input")," elementen met de volgende labels:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"First name"),(0,i.kt)("li",{parentName:"ul"},"Last name"),(0,i.kt)("li",{parentName:"ul"},"Email"))),(0,i.kt)("li",{parentName:"ul"},"Het component bevat een ",(0,i.kt)("inlineCode",{parentName:"li"},"textarea")," met de label ",(0,i.kt)("inlineCode",{parentName:"li"},"Message"),"."),(0,i.kt)("li",{parentName:"ul"},"Het component bevat een ",(0,i.kt)("inlineCode",{parentName:"li"},"button")," met de tekst ",(0,i.kt)("inlineCode",{parentName:"li"},"Send"),"."),(0,i.kt)("li",{parentName:"ul"},"Als je op de knop klikt, wordt de volgende tekst getoond: ",(0,i.kt)("inlineCode",{parentName:"li"},"Thanks {firstName} {lastName}! We will contact you at {email}.")),(0,i.kt)("li",{parentName:"ul"},"De velden worden leeggemaakt na het versturen van het formulier."),(0,i.kt)("li",{parentName:"ul"},"Zorg dat de button disabled is als de velden niet allemaal ingevuld zijn."),(0,i.kt)("li",{parentName:"ul"},"Je hebt hier 5 states nodig:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"firstName")," (bevat de waarde van het ",(0,i.kt)("inlineCode",{parentName:"li"},"input")," element firstName)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lastName")," (bevat de waarde van het ",(0,i.kt)("inlineCode",{parentName:"li"},"input")," element lastName)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"email")," (bevat de waarde van het ",(0,i.kt)("inlineCode",{parentName:"li"},"input")," element email)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")," (bevat de waarde van het ",(0,i.kt)("inlineCode",{parentName:"li"},"textarea")," element)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"confirmationText")," (bevat de text die getoond wordt na het versturen van het formulier)")))),(0,i.kt)("p",null,"Gebruik deze component in de ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," component om de volgende pagina te maken:"),(0,i.kt)(m,{mdxType:"Labo3ContactForm"}))}E.isMDXComponent=!0}}]);