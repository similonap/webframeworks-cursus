"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[7187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4234:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(7294),a=n(6460);const o=n.p+"assets/images/oak-7ea4f019fbeb2d928458c78a9e20f34a.png",l=e=>{let{id:t}=e;const[n,a]=(0,r.useState)();return(0,r.useEffect)((()=>{(async()=>{let e=await fetch("https://pokeapi.co/api/v2/pokemon/"+t),n=await e.json();a(n)})()}),[]),void 0===n?r.createElement("div",null):r.createElement("div",null,r.createElement("div",null,"Name: ",n.name),r.createElement("div",null,"Weight: ",n.weight),r.createElement("div",null,"Height: ",n.height),r.createElement("div",null,r.createElement("img",{src:n.sprites.front_default})),r.createElement("div",null,r.createElement(c,{style:e=>{let{hover:t}=e;return t?{cursor:"pointer",textDecoration:"underline"}:{cursor:"pointer",textDecoration:""}},to:"pokemon"},"Back")))},i=()=>r.createElement("div",{style:{flex:1,display:"flex",flexDirection:"row",padding:20}},r.createElement("div",{style:{flex:1}},r.createElement("img",{src:o,style:{width:100}})),r.createElement("div",{style:{flex:2}},"Hello there! Welcome to the world of POKEMON!",r.createElement("br",null),r.createElement("br",null),"My name is OAK! People call me the POKEMON PROF!",r.createElement("br",null),r.createElement("br",null),"This world is inhabited by creatures called POKEMON!",r.createElement("br",null),r.createElement("br",null),"For some people, POKEMON are pets. Others use them for fights. Myself...I study POKEMON as a profession.")),s=e=>{let{children:t,to:n,style:a}=e;const[o,l]=(0,r.useState)(!1),{setCurrentRoute:i,currentRoute:s}=(0,r.useContext)(p);let c=!1;s===n&&(c=!0);const u=a({active:c,hover:o});return r.createElement("span",{onClick:()=>i(n),style:u,onMouseEnter:e=>l(!0),onMouseLeave:e=>l(!1)},t)},c=e=>{let{children:t,to:n,style:a}=e;const[o,l]=(0,r.useState)(!1),{setCurrentRoute:i,currentRoute:s}=(0,r.useContext)(p);let c=!1;s===n&&(c=!0);const u=a({hover:o});return r.createElement("span",{onClick:()=>i(n),style:u,onMouseEnter:e=>l(!0),onMouseLeave:e=>l(!1)},t)},u=e=>{let{pokemon:t}=e;const[n,a]=(0,r.useState)(!1),{setCurrentRoute:o,currentRoute:l}=(0,r.useContext)(p);return r.createElement("div",{onClick:()=>o("pokemon/"+(t.id+1)),onMouseEnter:e=>a(!0),onMouseLeave:e=>a(!1),style:{display:"flex",justifyContent:"center",alignItems:"center",margin:10,height:"70px",boxShadow:"0px 0px 1px black",cursor:"pointer",backgroundColor:n?"#1AC8A2":"white",color:n?"white":"black"}},t.name)},m=e=>{let{pokemon:t}=e;const{searchTerm:n,setSearchTerm:a}=(0,r.useContext)(p);return r.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column",padding:10}},r.createElement("input",{value:n,onChange:e=>a(e.target.value),type:"text",style:{border:"1px solid #a0d18c",borderRadius:"10px",padding:10,margin:10},placeholder:"search"}),r.createElement("div",{style:{flex:1}},t.filter((e=>e.name.toUpperCase().startsWith(n.toUpperCase()))).map((e=>r.createElement(u,{pokemon:e})))))},p=(0,r.createContext)({currentRoute:"",setCurrentRoute:()=>{},searchTerm:"",setSearchTerm:()=>{}}),d=()=>r.createElement(a.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),b=()=>{const[e,t]=(0,r.useState)(""),[n,a]=(0,r.useState)(!1),[o,c]=(0,r.useState)(""),[u,b]=(0,r.useState)([]);let g=r.createElement(i,null);if("pokemon"==e&&(g=r.createElement(m,{pokemon:u})),e.match(/pokemon\/[0-9]+/g)){let t=/pokemon\/([0-9]+)/g.exec(e);g=r.createElement(l,{id:parseInt(t[1])})}(0,r.useEffect)((()=>{(async()=>{a(!0);let e=await fetch("https://pokeapi.co/api/v2/pokemon?limit=500"),t=await e.json();b(t.results.map(((e,t)=>({name:e.name,id:t})))),a(!1)})()}),[]);const f=e=>{let{active:t,hover:n}=e,r={fontSize:"11pt",display:"flex",justifyContent:"center",alignItems:"center",width:80,cursor:"pointer",color:"white"};return r=n?{...r,backgroundColor:"green"}:{...r,backgroundColor:""},t&&(r={...r,backgroundColor:"green"}),r};return r.createElement(p.Provider,{value:{currentRoute:e,setCurrentRoute:t,searchTerm:o,setSearchTerm:c}},r.createElement("div",null,r.createElement("div",{className:"browser"},r.createElement("div",{className:"browser-navigation-bar"},r.createElement("i",null),r.createElement("i",null),r.createElement("i",null),r.createElement("input",{value:"http://localhost:8080/"+e,className:"urlbar"})),r.createElement("div",{className:"browser-container"},r.createElement("div",null,r.createElement("div",{style:{height:"50px",width:"100%",backgroundColor:"#1AC8A2",display:"flex",flexDirection:"row",alignItems:"stretch"}},r.createElement(s,{to:"",style:f},"Home"),r.createElement(s,{to:"pokemon",style:f},"Pokemon"))),n&&r.createElement(d,null),g))))}},2697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),o=n(4234);const l={},i="Labo 8",s={unversionedId:"wf-course/labs/lab8",id:"wf-course/labs/lab8",title:"Labo 8",description:"- Next.js routing",source:"@site/docs/wf-course/labs/lab8.md",sourceDirName:"wf-course/labs",slug:"/wf-course/labs/lab8",permalink:"/webframeworks-cursus/wf-course/labs/lab8",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wfCourse",previous:{title:"Labo 7",permalink:"/webframeworks-cursus/wf-course/labs/lab7"}},c={},u=[{value:"1. Animals basic routing",id:"1-animals-basic-routing",level:2},{value:"2. Animals advanced routing",id:"2-animals-advanced-routing",level:2},{value:"3. API routing",id:"3-api-routing",level:2},{value:"4. Pokemon app",id:"4-pokemon-app",level:2}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"labo-8"},"Labo 8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Next.js routing")),(0,a.kt)("h2",{id:"1-animals-basic-routing"},"1. Animals basic routing"),(0,a.kt)("p",null,'Maak een nieuwe Next.js applicatie aan met de naam "animals". Maak een home pagina met een aantal links naar verschillende dieren. Als je op een link klikt, moet je naar een pagina gaan met een afbeelding van het dier. De routes van de applicatie moeten er als volgt uitzien:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/ -> home pagina\n/animals/dog -> pagina met een afbeelding van een hond\n/animals/cat -> pagina met een afbeelding van een kat\n/animals/hamster -> pagina met een afbeelding van een hamster\n")),(0,a.kt)("p",null,"Je mag op deze moment nog aparte pagina's maken voor de verschillende dieren. Je moet dus nog geen gebruik maken van dynamische routes."),(0,a.kt)("h2",{id:"2-animals-advanced-routing"},"2. Animals advanced routing"),(0,a.kt)("p",null,"Pas de vorige oefening aan zodat je gebruik maakt van dynamische routes. Bv. ",(0,a.kt)("inlineCode",{parentName:"p"},"/animals/[name]"),". De lijst van dieren moet komen van een externe API. Je kan bijvoorbeeld ",(0,a.kt)("inlineCode",{parentName:"p"},"json-server")," gebruiken om een REST API voor deze data te maken."),(0,a.kt)("p",null,"Voorzie een 404 pagina voor als de gebruiker een ongeldige route ingeeft. "),(0,a.kt)("h2",{id:"3-api-routing"},"3. API routing"),(0,a.kt)("p",null,"Pas nu de vorige applicatie aan zodat die gebruik maakt van een API route om de data op te halen. Je hoeft dus niet meer gebruik maken van de json-server. Je kan de data gewoon in een bestand zetten en die importeren in de API route."),(0,a.kt)("h2",{id:"4-pokemon-app"},"4. Pokemon app"),(0,a.kt)("p",null,"Maak de pokemon app oefening van labo 7 opnieuw maar gebruik deze keer Next.js om de routing te doen."),(0,a.kt)(o.Z,{mdxType:"Labo7Pokemon"}))}p.isMDXComponent=!0}}]);