"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[2565],{1860:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(1978),l=a(7294);const o=e=>{let{template:t}=e;const[a,o]=l.useState(),[i]=(0,n.UH)({template:t,setSandboxId:o});return(0,l.useEffect)((()=>{i()}),[]),l.createElement(l.Fragment,null,a&&l.createElement("iframe",{src:"https://codesandbox.io/embed/"+a+"?fontsize=14&hidenavigation=1&theme=light",style:{width:"100%",height:"500px",border:0,borderRadius:4,overflow:"hidden"},title:"Hello World (Variabele)",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},1978:(e,t,a)=>{a.d(t,{ZP:()=>m,cR:()=>d,UH:()=>p});var n=a(7294),l=a(6010),o=a(8084);const i="copyButtonIcons_om_X",r="copyButtonIcon_NN7I",d=e=>{let t=/codesandbox=({.*})/g.exec(e);return JSON.parse(t[1])},p=e=>{let{code:t,template:a,filename:n,setSandboxId:l}=e;const{templates:i}=(0,o.eZ)("codesandbox-plugin");return[async()=>{let e=i[a];t&&(e.files[n]={content:t});const o=await fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}),{sandbox_id:r}=await o.json();l(r)}]};function m(e){let{code:t,className:a,metastring:o,setSandboxId:m}=e,{template:s,filename:u}=d(o);const[c]=p({code:t,template:s,filename:u,setSandboxId:m});return n.createElement("button",{type:"button",title:"CodeSandbox",className:(0,l.Z)("clean-btn"),onClick:c},n.createElement("span",{className:i,"aria-hidden":"true"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",className:r,viewBox:"0 0 16 16"}," ",n.createElement("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"})," ")))}},7117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>F,contentTitle:()=>j,default:()=>O,frontMatter:()=>S,metadata:()=>z,toc:()=>R});var n=a(7462),l=a(7294),o=a(3905);const i=()=>{const[e,t]=(0,l.useState)(0);let a="black";return e>0?a="green":e<0&&(a="red"),l.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}},l.createElement("button",{onClick:()=>t(e+1)},"Omhoog"),l.createElement("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"center",color:a}},"Count: ",e),l.createElement("button",{onClick:()=>t(e-1)},"Omlaag"))},r=()=>l.createElement(l.Fragment,null,l.createElement(i,null),l.createElement(i,null),l.createElement(i,null)),d=()=>{const[e,t]=(0,l.useState)("#000000");return l.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},l.createElement("input",{type:"color",value:e,onChange:e=>t(e.target.value)}),l.createElement("select",{onChange:e=>t(e.target.value)},l.createElement("option",{value:"#000000"},"#000000"),l.createElement("option",{value:"#FF0000"},"#FF0000"),l.createElement("option",{value:"#00FF00"},"#00FF00"),l.createElement("option",{value:"#0000FF"},"#0000FF")),l.createElement("div",{style:{width:100,height:100,backgroundColor:e}}))},p=()=>l.createElement(l.Fragment,null,l.createElement(d,null)),m=()=>{const[e,t]=(0,l.useState)(""),[a,n]=(0,l.useState)(""),[o,i]=(0,l.useState)(""),[r,d]=(0,l.useState)(""),[p,m]=(0,l.useState)("");return l.createElement("form",{onSubmit:l=>{l.preventDefault(),m("Thanks "+e+" "+a+"! We will contact you at "+o+"."),t(""),n(""),i(""),d("")},style:{display:"grid",gridTemplateColumns:"100px 1fr",gap:"5px"}},l.createElement("label",null,"First name:"),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)}),l.createElement("label",null,"Last name:"),l.createElement("input",{type:"text",value:a,onChange:e=>n(e.target.value)}),l.createElement("label",null,"Email:"),l.createElement("input",{type:"email",value:o,onChange:e=>i(e.target.value)}),l.createElement("label",null,"Message:"),l.createElement("textarea",{value:r,onChange:e=>d(e.target.value)}),l.createElement("button",{type:"submit",style:{gridColumn:"1 / span 2"},disabled:!(e.length>0&&a.length>0&&o.length>0&&r.length>0)},"Send"),p&&l.createElement("div",{style:{gridRowStart:6,gridColumn:"1 / span 2"}},p))},s=()=>{const[e,t]=(0,l.useState)("");return l.createElement(l.Fragment,null,l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)}),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)}),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)}),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)}),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)}))},u=()=>{const[e,t]=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement("input",{checked:e,type:"checkbox",onChange:e=>{t(e.target.checked)}})," Show/Hide",e&&l.createElement("div",{style:{border:"1px solid black",height:400,padding:5,backgroundRepeat:"repeat-xy",backgroundImage:"url('https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif')"}}))},c=e=>{let{goods:t}=e;const[a,n]=(0,l.useState)(t),[o,i]=(0,l.useState)(""),[r,d]=(0,l.useState)(500),[p,m]=(0,l.useState)(!1);return l.createElement("div",null,l.createElement("div",null,l.createElement("form",{onSubmit:e=>{e.preventDefault(),n([...a,{name:o,price:r,inStock:p}]),i(""),d(0),m(!1)},style:{display:"grid",gridTemplateColumns:"200px 200px"}},l.createElement("label",null,"Product name: "),l.createElement("input",{placeholder:"product name",type:"text",value:o,onChange:e=>i(e.target.value)}),l.createElement("label",null,"Price: "),l.createElement("input",{placeholder:"price",type:"number",value:r,onChange:e=>d(parseInt(e.target.value))}),l.createElement("label",null,"In stock? "),l.createElement("input",{type:"checkbox",checked:p,onChange:e=>m(e.target.checked)}),l.createElement("input",{type:"submit",value:"Add product",style:{gridColumnStart:1,gridColumnEnd:"span 2"}}))),l.createElement("div",{style:{display:"grid",gridTemplateColumns:"300px 100px"}},a.map((e=>l.createElement(l.Fragment,{key:e.name},l.createElement("span",{style:{color:e.inStock?"black":"red"}},e.name),l.createElement("span",null,"\u20ac ",e.price))))))},k=()=>l.createElement(c,{goods:[{name:"iPhone 12",price:699,inStock:!1},{name:"iPhone 12 Pro",price:999,inStock:!0},{name:"iPhone 12 Pro Max",price:1099,inStock:!0},{name:"Samsung Galaxy S20",price:799,inStock:!0},{name:"Samsung Galaxy S10",price:699,inStock:!1},{name:"Samsung Galaxy S20 Ultra",price:999,inStock:!0},{name:"Huawei P30",price:499,inStock:!0},{name:"Huawei P40",price:599,inStock:!0},{name:"Nokia 3310",price:399,inStock:!1}]});var g=a(6460);const v=()=>l.createElement(g.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),b=()=>{const[e,t]=(0,l.useState)(!1);return l.createElement("div",null,!e&&l.createElement("button",{onClick:()=>{t(!0),setTimeout((()=>{t(!1)}),3e3)}},"Start loading"),e&&l.createElement(v,null))},h=()=>{const[e,t]=(0,l.useState)(0),[a,n]=(0,l.useState)(0);return l.createElement(l.Fragment,null,0!==e&&0!==a&&l.createElement("img",{style:{position:"fixed",top:e,left:a},src:"https://www.placecage.com/gif/200/200"}),l.createElement("button",{onClick:()=>{(()=>{let e=Math.floor(Math.random()*window.innerWidth),a=Math.floor(Math.random()*window.innerHeight);console.log({x:e,y:a}),t(e),n(a)})()}},"Random Cage"))},N="container_XVFF",C="square_eOOF",w=["red","yellow","blue"],y=()=>{const[e,t]=(0,l.useState)(0),[a,n]=(0,l.useState)("joske"),[o,i]=(0,l.useState)("joske"),[r,d]=(0,l.useState)(":)"),[p,m]=(0,l.useState)(!0);return l.createElement("div",{className:N},l.createElement("p",null,l.createElement("b",null,a)),l.createElement("div",{className:C,style:{backgroundColor:w[e],borderRadius:p?0:400},onClick:()=>{t((e=>(e+1)%w.length))}},l.createElement("p",{style:{userSelect:"none"}},r)),l.createElement("div",null,l.createElement("input",{type:"text",onChange:e=>i(e.target.value),value:o}),l.createElement("button",{onClick:()=>{n("Joske"),i("Joske")}},"Reset Name"),l.createElement("button",{onClick:()=>n(o)},"Set")),l.createElement("select",{onChange:e=>d(e.target.value),value:r},l.createElement("option",{value:":)"},":)"),l.createElement("option",{value:":("},":("),l.createElement("option",{value:":|"},":|")),l.createElement("div",null,l.createElement("input",{type:"checkbox",onChange:e=>m(e.target.checked),checked:p}),l.createElement("label",{htmlFor:"squareCheckbox"},"Square")))},f=()=>l.createElement(y,null);var x=a(1860),E=a(2004);const S={},j="Labo 3",z={unversionedId:"wf-course/labs/react-basics/lab4",id:"wf-course/labs/react-basics/lab4",title:"Labo 3",description:"Voor dit labo moet je de volgende theorie bekeken hebben:",source:"@site/docs/wf-course/labs/react-basics/lab4.md",sourceDirName:"wf-course/labs/react-basics",slug:"/wf-course/labs/react-basics/lab4",permalink:"/webframeworks-cursus/wf-course/labs/react-basics/lab4",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wfCourse",previous:{title:"Labo 3",permalink:"/webframeworks-cursus/wf-course/labs/react-basics/lab3"},next:{title:"Labo 4",permalink:"/webframeworks-cursus/wf-course/labs/react-basics/lab5"}},F={},R=[{value:"1. State herkennen",id:"1-state-herkennen",level:2},{value:"2. Input veld",id:"2-input-veld",level:2},{value:"3. Checkbox",id:"3-checkbox",level:2},{value:"Oplossingsvideo",id:"oplossingsvideo",level:4},{value:"4. Omhoog/Omlaag",id:"4-omhoogomlaag",level:2},{value:"Oplossingsvideo",id:"oplossingsvideo-1",level:4},{value:"5. Loading indicator",id:"5-loading-indicator",level:2},{value:"Oplossingsvideo",id:"oplossingsvideo-2",level:4},{value:"6. Kleurkiezer",id:"6-kleurkiezer",level:2},{value:"Oplossingsvideo",id:"oplossingsvideo-3",level:4},{value:"7. Contactformulier",id:"7-contactformulier",level:2},{value:"Oplossingsvideo",id:"oplossingsvideo-4",level:4},{value:"8. Random Cage",id:"8-random-cage",level:2},{value:"Oplossingsvideo",id:"oplossingsvideo-5",level:4},{value:"9. Joske het vierkant",id:"9-joske-het-vierkant",level:2}],M={toc:R};function O(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},M,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"labo-3"},"Labo 3"),(0,o.kt)("p",null,"Voor dit labo moet je de volgende theorie bekeken hebben:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Event Handling"),(0,o.kt)("li",{parentName:"ul"},"State ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Hoe state herkennen?"),(0,o.kt)("li",{parentName:"ul"},"useState hook"),(0,o.kt)("li",{parentName:"ul"},"setState met callback"),(0,o.kt)("li",{parentName:"ul"},"Regels van useState"),(0,o.kt)("li",{parentName:"ul"},"Select, Checkbox en Radio Buttons")))),(0,o.kt)("h2",{id:"1-state-herkennen"},"1. State herkennen"),(0,o.kt)("p",null,"Identificeer de state in de volgende componenten. Geef aan waar de state zich bevindt en wat de initi\xeble waarde is."),(0,o.kt)(k,{mdxType:"LaboStateGoods"}),(0,o.kt)("h2",{id:"2-input-veld"},"2. Input veld"),(0,o.kt)("p",null,"Maak een nieuwe React applicatie aan en noem deze ",(0,o.kt)("inlineCode",{parentName:"p"},"labo4-inputfield"),"."),(0,o.kt)("p",null,"Maak een component ",(0,o.kt)("inlineCode",{parentName:"p"},"InputFields")," aan met de volgende functionaliteit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Het component heeft 1 state property ",(0,o.kt)("inlineCode",{parentName:"li"},"inputValue")," die een string bevat. Deze begint bij een lege string."),(0,o.kt)("li",{parentName:"ul"},"Zorg ervoor dat je 5 input velden op je scherm staat die allemaal de waarde van ",(0,o.kt)("inlineCode",{parentName:"li"},"inputValue")," bevatten."),(0,o.kt)("li",{parentName:"ul"},"Zorg ervoor dat als je iets typt in 1 van de input velden, de waarde van ",(0,o.kt)("inlineCode",{parentName:"li"},"inputValue")," verandert en alle input velden de nieuwe waarde bevatten.")),(0,o.kt)("p",null,"Gebruik deze component in de ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component om de volgende pagina te maken:"),(0,o.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,o.kt)(s,{mdxType:"LaboStateInputField"})),(0,o.kt)("h2",{id:"3-checkbox"},"3. Checkbox"),(0,o.kt)("p",null,"Maak een nieuwe React applicatie aan en noem deze ",(0,o.kt)("inlineCode",{parentName:"p"},"labo4-checkbox"),"."),(0,o.kt)("p",null,"Maak een component ",(0,o.kt)("inlineCode",{parentName:"p"},"Checkbox")," aan met de volgende functionaliteit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plaats een checkbox in je component met als label ",(0,o.kt)("inlineCode",{parentName:"li"},"Show/Hide")),(0,o.kt)("li",{parentName:"ul"},"Als de gebruiker de checkbox aanvinkt moet er een div getoond worden met een image als background."),(0,o.kt)("li",{parentName:"ul"},"Als de gebruiker de checkbox uitzet moet de div verdwijnen.",(0,o.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,o.kt)(u,{mdxType:"LaboStateCheckbox"})))),(0,o.kt)("h4",{id:"oplossingsvideo"},"Oplossingsvideo"),(0,o.kt)(E.Z,{controls:!0,url:"https://youtu.be/FVMpB_rGnBQ",mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"4-omhoogomlaag"},"4. Omhoog/Omlaag"),(0,o.kt)("p",null,"Maak een nieuwe React applicatie aan en noem deze ",(0,o.kt)("inlineCode",{parentName:"p"},"labo4-omhooglaag"),"."),(0,o.kt)("p",null,"Maak een component ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," aan met de volgende functionaliteit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"De component bevat een ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," met een property ",(0,o.kt)("inlineCode",{parentName:"li"},"count")," die een getal bevat. Begint bij 0."),(0,o.kt)("li",{parentName:"ul"},"De component bevat een ",(0,o.kt)("inlineCode",{parentName:"li"},"button")," met de tekst ",(0,o.kt)("inlineCode",{parentName:"li"},"Omhoog"),". Als je op deze knop klikt, wordt de waarde van ",(0,o.kt)("inlineCode",{parentName:"li"},"count")," met 1 verhoogd."),(0,o.kt)("li",{parentName:"ul"},"De component bevat een ",(0,o.kt)("inlineCode",{parentName:"li"},"button")," met de tekst ",(0,o.kt)("inlineCode",{parentName:"li"},"Omlaag"),". Als je op deze knop klikt, wordt de waarde van ",(0,o.kt)("inlineCode",{parentName:"li"},"count")," met 1 verlaagd."),(0,o.kt)("li",{parentName:"ul"},"De component bevat de tekst ",(0,o.kt)("inlineCode",{parentName:"li"},"Count: {count}"),". Hier wordt de waarde van ",(0,o.kt)("inlineCode",{parentName:"li"},"count")," getoond."),(0,o.kt)("li",{parentName:"ul"},"Zorg ervoor dat de tekst rood wordt als ",(0,o.kt)("inlineCode",{parentName:"li"},"count")," kleiner is dan 0 en groen wordt als ",(0,o.kt)("inlineCode",{parentName:"li"},"count")," groter is dan 0. Als het gelijk is aan 0, wordt de tekst zwart.")),(0,o.kt)("p",null,"Gebruik deze component in de ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component om de volgende pagina te maken:"),(0,o.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,o.kt)(r,{mdxType:"LaboStateOmHooglaag"})),(0,o.kt)("h4",{id:"oplossingsvideo-1"},"Oplossingsvideo"),(0,o.kt)(E.Z,{controls:!0,url:"https://youtu.be/OMa72fFFRUI",mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"5-loading-indicator"},"5. Loading indicator"),(0,o.kt)("p",null,"Maak een nieuwe React applicatie aan en noem deze ",(0,o.kt)("inlineCode",{parentName:"p"},"labo4-loading"),"."),(0,o.kt)("p",null,"installeer de volgende npm packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install react-loader-spinner\n")),(0,o.kt)("p",null,"Zorg er nu voor dat de applicatie de volgende functionaliteiten heeft:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"De applicatie bevat een ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," met een property ",(0,o.kt)("inlineCode",{parentName:"li"},"loading")," die een boolean bevat. Deze begint bij ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},"De applicatie bevat een ",(0,o.kt)("inlineCode",{parentName:"li"},"button")," met de tekst ",(0,o.kt)("inlineCode",{parentName:"li"},"Start loading"),". Als je op deze knop klikt, wordt de waarde van ",(0,o.kt)("inlineCode",{parentName:"li"},"loading")," op ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," gezet."),(0,o.kt)("li",{parentName:"ul"},"Na 3 seconden wordt de waarde van ",(0,o.kt)("inlineCode",{parentName:"li"},"loading")," op ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," gezet."),(0,o.kt)("li",{parentName:"ul"},"Als de waarde van ",(0,o.kt)("inlineCode",{parentName:"li"},"loading")," ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," is, wordt er een loading indicator getoond. De button verdwijnt."),(0,o.kt)("li",{parentName:"ul"},"Als de waarde van ",(0,o.kt)("inlineCode",{parentName:"li"},"loading")," ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," is, wordt de loading indicator niet getoond. De button verschijnt terug.")),(0,o.kt)("div",{style:{padding:10,border:"1px dotted black"}},(0,o.kt)(b,{mdxType:"LaboStateLoading"})),(0,o.kt)("h4",{id:"oplossingsvideo-2"},"Oplossingsvideo"),(0,o.kt)(E.Z,{controls:!0,url:"https://youtu.be/SSZaOVdY3ls",mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"6-kleurkiezer"},"6. Kleurkiezer"),(0,o.kt)("p",null,"Maak een nieuwe React applicatie aan en noem deze ",(0,o.kt)("inlineCode",{parentName:"p"},"labo4-kleurkiezer"),"."),(0,o.kt)("p",null,"Maak een component ",(0,o.kt)("inlineCode",{parentName:"p"},"ColorPicker")," aan met de volgende functionaliteit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Het component bevat een ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," met een property ",(0,o.kt)("inlineCode",{parentName:"li"},"color")," die een kleur bevat. Begint bij ",(0,o.kt)("inlineCode",{parentName:"li"},"#000000"),"."),(0,o.kt)("li",{parentName:"ul"},"Het component bevat een ",(0,o.kt)("inlineCode",{parentName:"li"},"input")," met type ",(0,o.kt)("inlineCode",{parentName:"li"},"color"),". Als je een andere kleur kiest, wordt de waarde van ",(0,o.kt)("inlineCode",{parentName:"li"},"color")," aangepast."),(0,o.kt)("li",{parentName:"ul"},"Het component bevat een ",(0,o.kt)("inlineCode",{parentName:"li"},"div")," met een achtergrondkleur die gelijk is aan de waarde van ",(0,o.kt)("inlineCode",{parentName:"li"},"color"),"."),(0,o.kt)("li",{parentName:"ul"},"Het component bevat ook een select met de volgende opties:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#000000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#FF0000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#00FF00")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#0000FF")))),(0,o.kt)("li",{parentName:"ul"},"Als je een optie kiest dan wordt ook de kleur aangepast.")),(0,o.kt)("p",null,"Gebruik deze component in de ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component om de volgende pagina te maken:"),(0,o.kt)(p,{mdxType:"LaboStateKleurkiezer"}),(0,o.kt)("h4",{id:"oplossingsvideo-3"},"Oplossingsvideo"),(0,o.kt)(E.Z,{controls:!0,url:"https://youtu.be/pBx9IClu9eA",mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"7-contactformulier"},"7. Contactformulier"),(0,o.kt)("p",null,"Maak een nieuwe React applicatie aan en noem deze ",(0,o.kt)("inlineCode",{parentName:"p"},"labo4-contactformulier"),"."),(0,o.kt)("p",null,"Maak een component ",(0,o.kt)("inlineCode",{parentName:"p"},"ContactForm")," aan met de volgende functionaliteit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Het component bevat 3 ",(0,o.kt)("inlineCode",{parentName:"li"},"input")," elementen met de volgende labels:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"First name"),(0,o.kt)("li",{parentName:"ul"},"Last name"),(0,o.kt)("li",{parentName:"ul"},"Email"))),(0,o.kt)("li",{parentName:"ul"},"Het component bevat een ",(0,o.kt)("inlineCode",{parentName:"li"},"textarea")," met de label ",(0,o.kt)("inlineCode",{parentName:"li"},"Message"),"."),(0,o.kt)("li",{parentName:"ul"},"Het component bevat een ",(0,o.kt)("inlineCode",{parentName:"li"},"button")," met de tekst ",(0,o.kt)("inlineCode",{parentName:"li"},"Send"),"."),(0,o.kt)("li",{parentName:"ul"},"Als je op de knop klikt, wordt de volgende tekst getoond: ",(0,o.kt)("inlineCode",{parentName:"li"},"Thanks {firstName} {lastName}! We will contact you at {email}.")),(0,o.kt)("li",{parentName:"ul"},"De velden worden leeggemaakt na het versturen van het formulier."),(0,o.kt)("li",{parentName:"ul"},"Zorg dat de button disabled is als de velden niet allemaal ingevuld zijn."),(0,o.kt)("li",{parentName:"ul"},"Je hebt hier 5 states nodig:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"firstName")," (bevat de waarde van het ",(0,o.kt)("inlineCode",{parentName:"li"},"input")," element firstName)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lastName")," (bevat de waarde van het ",(0,o.kt)("inlineCode",{parentName:"li"},"input")," element lastName)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"email")," (bevat de waarde van het ",(0,o.kt)("inlineCode",{parentName:"li"},"input")," element email)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message")," (bevat de waarde van het ",(0,o.kt)("inlineCode",{parentName:"li"},"textarea")," element)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"confirmationText")," (bevat de text die getoond wordt na het versturen van het formulier)")))),(0,o.kt)("p",null,"Gebruik deze component in de ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component om de volgende pagina te maken:"),(0,o.kt)(m,{mdxType:"LaboStateContactForm"}),(0,o.kt)("h4",{id:"oplossingsvideo-4"},"Oplossingsvideo"),(0,o.kt)(E.Z,{controls:!0,url:"https://youtu.be/og0BReQkfz8",mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"8-random-cage"},"8. Random Cage"),(0,o.kt)("p",null,"Maak een nieuwe React applicatie aan en noem deze ",(0,o.kt)("inlineCode",{parentName:"p"},"labo4-random-cage"),"."),(0,o.kt)("p",null,"Maak een component ",(0,o.kt)("inlineCode",{parentName:"p"},"RandomCage")," aan met de volgende functionaliteit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Het component bevat een ",(0,o.kt)("inlineCode",{parentName:"li"},"button")," met de tekst ",(0,o.kt)("inlineCode",{parentName:"li"},"Random Cage"),"."),(0,o.kt)("li",{parentName:"ul"},"Als je op de knop klikt, wordt er een willekeurige locatie op je scherm bepaald."),(0,o.kt)("li",{parentName:"ul"},"Op die locatie wordt een afbeelding van Nicolas Cage getoond."),(0,o.kt)("li",{parentName:"ul"},"Als je terug op de knop klikt, wordt de afbeelding op een andere locatie getoond."),(0,o.kt)("li",{parentName:"ul"},"Je mag de volgende afbeelding tonen: ",(0,o.kt)("a",{parentName:"li",href:"https://www.placecage.com/gif/200/200"},"https://www.placecage.com/gif/200/200"))),(0,o.kt)(h,{mdxType:"LaboStateRandomNicCage"}),(0,o.kt)("h4",{id:"oplossingsvideo-5"},"Oplossingsvideo"),(0,o.kt)(E.Z,{controls:!0,url:"https://youtu.be/nh5lVRHBj0s",mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"9-joske-het-vierkant"},"9. Joske het vierkant"),(0,o.kt)("p",null,"Maak een nieuwe React applicatie aan en noem deze ",(0,o.kt)("inlineCode",{parentName:"p"},"labo4-joske"),"."),(0,o.kt)("p",null,"Je begint met Joske... Het statische vierkant:"),(0,o.kt)(x.Z,{template:"react-joske-labo",mdxType:"CodeSandbox"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Joske is een rood vierkant. Maar zou ook soms graag blauw zijn! Of zelfs groen! Pas Joske aan zodat als je op hem klikt, hij van kleur verandert. De eerste keer wordt hij blauw, de tweede keer groen, de derde keer rood, de vierde keer blauw, enzovoort."),(0,o.kt)("li",{parentName:"ul"},"Joske zou graag van naam veranderen en Josje worden. Maak een input veld waarin je de naam van Joske kan aanpassen. Tijdens het aanpassen van de naam wordt de naam van Joske aangepast."),(0,o.kt)("li",{parentName:"ul"},"Soms wil Josje toch terug Joske zijn. Zorg ervoor dat zijn naam kan gereset worden naar Joske via een knop."),(0,o.kt)("li",{parentName:"ul"},"Josje is heel de tijd triestig. Zorg voor een dropdown waarin je kan kiezen uit verschillende emoties. Als je een emotie kiest, dan verandert de emotie van Josje. De emoties worden uitgedrukt in smileys."),(0,o.kt)("li",{parentName:"ul"},"Soms wil Josje helemaal geen vierkant meer zijn. Hij zou graag ook een cirkel zijn. Zorg voor een checkbox om te togglen tussen vierkant en cirkel")),(0,o.kt)("p",null,"Josje is nu een blij cirkeltje!"),(0,o.kt)(f,{mdxType:"Joske"}))}O.isMDXComponent=!0}}]);