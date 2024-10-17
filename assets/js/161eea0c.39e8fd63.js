"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[4071],{4234:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7294),l=n(6460);const r=n.p+"assets/images/oak-7ea4f019fbeb2d928458c78a9e20f34a.png",i=e=>{let{id:t}=e;const[n,l]=(0,a.useState)();return(0,a.useEffect)((()=>{(async()=>{let e=await fetch("https://pokeapi.co/api/v2/pokemon/"+t),n=await e.json();l(n)})()}),[]),void 0===n?a.createElement("div",null):a.createElement("div",null,a.createElement("div",null,"Name: ",n.name),a.createElement("div",null,"Weight: ",n.weight),a.createElement("div",null,"Height: ",n.height),a.createElement("div",null,a.createElement("img",{src:n.sprites.front_default})),a.createElement("div",null,a.createElement(d,{style:e=>{let{hover:t}=e;return t?{cursor:"pointer",textDecoration:"underline"}:{cursor:"pointer",textDecoration:""}},to:"pokemon"},"Back")))},o=()=>a.createElement("div",{style:{flex:1,display:"flex",flexDirection:"row",padding:20}},a.createElement("div",{style:{flex:1}},a.createElement("img",{src:r,style:{width:100}})),a.createElement("div",{style:{flex:2}},"Hello there! Welcome to the world of POKEMON!",a.createElement("br",null),a.createElement("br",null),"My name is OAK! People call me the POKEMON PROF!",a.createElement("br",null),a.createElement("br",null),"This world is inhabited by creatures called POKEMON!",a.createElement("br",null),a.createElement("br",null),"For some people, POKEMON are pets. Others use them for fights. Myself...I study POKEMON as a profession.")),s=e=>{let{children:t,to:n,style:l}=e;const[r,i]=(0,a.useState)(!1),{setCurrentRoute:o,currentRoute:s}=(0,a.useContext)(m);let d=!1;s===n&&(d=!0);const u=l({active:d,hover:r});return a.createElement("span",{onClick:()=>o(n),style:u,onMouseEnter:e=>i(!0),onMouseLeave:e=>i(!1)},t)},d=e=>{let{children:t,to:n,style:l}=e;const[r,i]=(0,a.useState)(!1),{setCurrentRoute:o,currentRoute:s}=(0,a.useContext)(m);let d=!1;s===n&&(d=!0);const u=l({hover:r});return a.createElement("span",{onClick:()=>o(n),style:u,onMouseEnter:e=>i(!0),onMouseLeave:e=>i(!1)},t)},u=e=>{let{pokemon:t}=e;const[n,l]=(0,a.useState)(!1),{setCurrentRoute:r,currentRoute:i}=(0,a.useContext)(m);return a.createElement("div",{onClick:()=>r("pokemon/"+(t.id+1)),onMouseEnter:e=>l(!0),onMouseLeave:e=>l(!1),style:{display:"flex",justifyContent:"center",alignItems:"center",margin:10,height:"70px",boxShadow:"0px 0px 1px black",cursor:"pointer",backgroundColor:n?"#1AC8A2":"white",color:n?"white":"black"}},t.name)},p=e=>{let{pokemon:t}=e;const{searchTerm:n,setSearchTerm:l}=(0,a.useContext)(m);return a.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column",padding:10}},a.createElement("input",{value:n,onChange:e=>l(e.target.value),type:"text",style:{border:"1px solid #a0d18c",borderRadius:"10px",padding:10,margin:10},placeholder:"search"}),a.createElement("div",{style:{flex:1}},t.filter((e=>e.name.toUpperCase().startsWith(n.toUpperCase()))).map((e=>a.createElement(u,{pokemon:e})))))},m=(0,a.createContext)({currentRoute:"",setCurrentRoute:()=>{},searchTerm:"",setSearchTerm:()=>{}}),c=()=>a.createElement(l.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),g=()=>{const[e,t]=(0,a.useState)(""),[n,l]=(0,a.useState)(!1),[r,d]=(0,a.useState)(""),[u,g]=(0,a.useState)([]);let k=a.createElement(o,null);if("pokemon"==e&&(k=a.createElement(p,{pokemon:u})),e.match(/pokemon\/[0-9]+/g)){let t=/pokemon\/([0-9]+)/g.exec(e);k=a.createElement(i,{id:parseInt(t[1])})}(0,a.useEffect)((()=>{(async()=>{l(!0);let e=await fetch("https://pokeapi.co/api/v2/pokemon?limit=500"),t=await e.json();g(t.results.map(((e,t)=>({name:e.name,id:t})))),l(!1)})()}),[]);const v=e=>{let{active:t,hover:n}=e,a={fontSize:"11pt",display:"flex",justifyContent:"center",alignItems:"center",width:80,cursor:"pointer",color:"white"};return a=n?{...a,backgroundColor:"green"}:{...a,backgroundColor:""},t&&(a={...a,backgroundColor:"green"}),a};return a.createElement(m.Provider,{value:{currentRoute:e,setCurrentRoute:t,searchTerm:r,setSearchTerm:d}},a.createElement("div",null,a.createElement("div",{className:"browser"},a.createElement("div",{className:"browser-navigation-bar"},a.createElement("i",null),a.createElement("i",null),a.createElement("i",null),a.createElement("input",{value:"http://localhost:8080/"+e,className:"urlbar"})),a.createElement("div",{className:"browser-container"},a.createElement("div",null,a.createElement("div",{style:{height:"50px",width:"100%",backgroundColor:"#1AC8A2",display:"flex",flexDirection:"row",alignItems:"stretch"}},a.createElement(s,{to:"",style:v},"Home"),a.createElement(s,{to:"pokemon",style:v},"Pokemon"))),n&&a.createElement(c,null),k))))}},7472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),r=(n(4234),n(2004));const i={},o="Labo 2",s={unversionedId:"wf-course/labs/nextjs/lab2",id:"wf-course/labs/nextjs/lab2",title:"Labo 2",description:"- Server side rendering",source:"@site/docs/wf-course/labs/nextjs/lab2.md",sourceDirName:"wf-course/labs/nextjs",slug:"/wf-course/labs/nextjs/lab2",permalink:"/webframeworks-cursus/wf-course/labs/nextjs/lab2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wfCourse",previous:{title:"Labo 1",permalink:"/webframeworks-cursus/wf-course/labs/nextjs/lab1"},next:{title:"Projecten",permalink:"/webframeworks-cursus/wf-course/opdrachten/"}},d={},u=[{value:"1. Animals",id:"1-animals",level:2},{value:"2. SSG Animals",id:"2-ssg-animals",level:2},{value:"3. Pokemon app",id:"3-pokemon-app",level:2},{value:"Oplossingsvideo",id:"oplossingsvideo",level:3},{value:"4. Holiday calendar",id:"4-holiday-calendar",level:2},{value:"Oplossingsvideo",id:"oplossingsvideo-1",level:3},{value:"5. Priem getallen",id:"5-priem-getallen",level:2},{value:"Oplossingsvideo",id:"oplossingsvideo-2",level:3}],p={toc:u};function m(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"labo-2"},"Labo 2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Server side rendering"),(0,l.kt)("li",{parentName:"ul"},"Static site Generation")),(0,l.kt)("h2",{id:"1-animals"},"1. Animals"),(0,l.kt)("p",null,"Pas de animals oefening van vorige week aan zodat je gebruik maakt van server side rendering. Je mag de data uit een json bestand halen maar dit moet volledig server side gebeuren. Je mag dus geen fetch gebruiken in de browser."),(0,l.kt)("h2",{id:"2-ssg-animals"},"2. SSG Animals"),(0,l.kt)("p",null,"Pas de animals oefening nu aan zodat je gebruik maakt van static site generation. Elke pagina moet dus op voorhand gegenereerd worden. "),(0,l.kt)("h2",{id:"3-pokemon-app"},"3. Pokemon app"),(0,l.kt)("p",null,"Pas de pokemon app oefening van vorige week aan zodat je gebruik maakt van static site generation. Elke pagina moet op voorhand gegenereerd worden."),(0,l.kt)("h3",{id:"oplossingsvideo"},"Oplossingsvideo"),(0,l.kt)(r.Z,{controls:!0,url:"https://youtu.be/eSIWPAkEIio",mdxType:"ReactPlayer"}),(0,l.kt)(r.Z,{controls:!0,url:"https://youtu.be/8uvegPrBS9c",mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"4-holiday-calendar"},"4. Holiday calendar"),(0,l.kt)("p",null,'Maak een nieuwe Next.js applicatie aan met de naam "holiday-calendar". We willen een pagina maken waar we alle feestdagen van een bepaald land kunnen opzoeken. We willen een volledige static generated site genereren.'),(0,l.kt)("p",null,"Je moet gebruik maken van de volgende API: ",(0,l.kt)("a",{parentName:"p",href:"https://date.nager.at/swagger/index.html"},"https://date.nager.at/swagger/index.html")),(0,l.kt)("p",null,"Je moet de volgende pagina's voorzien:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/holidays -> deze pagina moet een lijst tonen van alle landen waarvoor je feestdagen kan opvragen. "),(0,l.kt)("li",{parentName:"ul"},"/holidays/","[countrycode]"," -> deze pagina moet een lijst tonen van alle feestdagen voor het land met de gegeven countrycode.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(2334).Z,width:"955",height:"367"}),"\n",(0,l.kt)("img",{src:n(2360).Z,width:"1206",height:"674"})),(0,l.kt)("p",null,"Uitbreidingen:\nPas de paden aan zodat je de volgende urls krijgt:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/holidays -> deze pagina moet een lijst tonen van alle landen waarvoor je feestdagen kan opvragen."),(0,l.kt)("li",{parentName:"ul"},"/holidays/","[countrycode]"," -> toont een aantal jaren waarvoor je feestdagen kan opvragen. Deze mag hardcoded zijn (bv: 2020, 2021, 2022)"),(0,l.kt)("li",{parentName:"ul"},"/holidays/","[countrycode]","/","[year]"," -> deze pagina moet een lijst tonen van alle feestdagen voor het land met de gegeven countrycode en het gegeven jaar.")),(0,l.kt)("h3",{id:"oplossingsvideo-1"},"Oplossingsvideo"),(0,l.kt)(r.Z,{controls:!0,url:"https://youtu.be/zC7vvHwLhjY",mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"5-priem-getallen"},"5. Priem getallen"),(0,l.kt)("p",null,'Maak een nieuwe Next.js applicatie aan met de naam "prime-numbers". We willen een pagina maken die het zoeken naar priem getallen demonstreert. '),(0,l.kt)("p",null,"bv: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"het 5de priem getal is 11 want 2, 3, 5, 7, 11 zijn de eerste 5 priem getallen."),(0,l.kt)("li",{parentName:"ul"},"het 10de priem getal is 29 want 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 zijn de eerste 10 priem getallen."),(0,l.kt)("li",{parentName:"ul"},"het 100ste priem getal is 541 want 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ..., 523, 541 zijn de eerste 100 priem getallen.")),(0,l.kt)("p",null,"Wij willen een pagina voorzien waar de eerste 4000 priem getallen op staan. Hiervoor kan je de volgende functie gebruiken: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const nthprime = (n: number) => {\n    let count = 0;\n    let i = 1;\n    while (count < n) {\n        i++;\n        if (isPrime(i)) {\n            count++;\n        }\n    }\n    return i;\n}\n\nconst isPrime = (n: number) => {\n    if (n < 2) {\n        return false;\n    }\n    if (n == 2) {\n        return true;\n    }\n    if (n % 2 == 0) {\n        return false;\n    }\n    let maxDivisor = Math.sqrt(n);\n    for (let i = 3; i <= maxDivisor; i += 2) {\n        if (n % i == 0) {\n            return false;\n        }\n    }\n    return true;\n}\n")),(0,l.kt)("p",null,"Laat je niet afschrikken door de naam van deze oefening. Het is een oefening die je moet doen om te leren hoe je static site generation kan gebruiken. De wiskunde achter het genereren van de priem getallen is niet belangrijk en moet je niet begrijpen."),(0,l.kt)("p",null,"Voor het 100ste priem getal is dit dus:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"nthprime(100) // 541\n")),(0,l.kt)("p",null,"Wil je een array van de eerste 100 priem getallen dan kan je dit doen:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const primes = [];\nfor (let i = 1; i <= 100; i++) {\n    primes.push(nthprime(i));\n}\n")),(0,l.kt)("p",null,"Maak de volgende pagina's aan:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"prime-spa -> deze pagina moet de eerste 4000 priem getallen tonen op basis van client side rendering. "),(0,l.kt)("li",{parentName:"ul"},"prime-ssr -> deze pagina moet de eerste 4000 priem getallen tonen op basis van server side rendering."),(0,l.kt)("li",{parentName:"ul"},"prime-ssg -> deze pagina moet de eerste 4000 priem getallen tonen op basis van static site generation.")),(0,l.kt)("p",null,"Je moet deze oefening niet in dev mode uitvoeren want static site generation werkt niet in dev mode. Je kan de applicatie dus gewoon builden en runnen."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm run build\nnpm run start\n")),(0,l.kt)("p",null,"De pagina zal er als volgt uitzien: "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Prime images",src:n(4882).Z,width:"1638",height:"1304"})),(0,l.kt)("p",null,"Vergelijk de verschillende pagina's met elkaar. Wat is het verschil in laadtijd? Wat is het verschil in grootte van de pagina? Wat is het verschil in de netwerk tab? "),(0,l.kt)("h3",{id:"oplossingsvideo-2"},"Oplossingsvideo"),(0,l.kt)(r.Z,{controls:!0,url:"https://youtu.be/CDB9M6O8_ug",mdxType:"ReactPlayer"}))}m.isMDXComponent=!0},2334:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/holidays_1-fe55d4295703ae140022fb1ef0047554.png"},2360:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/holidays_2-106631a2f326b5083b89e717791035ad.png"},4882:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/prime-886e68e5be357ee8d889ad5d6267f706.png"}}]);