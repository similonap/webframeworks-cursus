"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[9274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,c=m["".concat(p,".").concat(u)]||m[u]||k[u]||i;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="Strapi",o={unversionedId:"wf-course/advanced/headless-cms/strapi",id:"wf-course/advanced/headless-cms/strapi",title:"Strapi",description:"In deze cursus gaan we gebruik maken van Strapi. Dit is een headless CMS dat specifiek gemaakt is om te gebruiken als headless CMS. Het is open source en gratis te gebruiken. Het is ook heel eenvoudig om te gebruiken. Het is volledig geschreven in JavaScript en maakt gebruik van Node.js. Je kan het dus gemakkelijk installeren met behulp van npm.",source:"@site/docs/wf-course/advanced/headless-cms/strapi.md",sourceDirName:"wf-course/advanced/headless-cms",slug:"/wf-course/advanced/headless-cms/strapi",permalink:"/webframeworks-cursus/wf-course/advanced/headless-cms/strapi",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"wfCourse",previous:{title:"Headless CMS",permalink:"/webframeworks-cursus/wf-course/advanced/headless-cms/"},next:{title:"Recepten voor React.js",permalink:"/webframeworks-cursus/wf-course/recepten/"}},p={},s=[{value:"Strapi installeren",id:"strapi-installeren",level:2},{value:"Content types",id:"content-types",level:2},{value:"Voorbeeld blog posts",id:"voorbeeld-blog-posts",level:3},{value:"REST API",id:"rest-api",level:3},{value:"API Token",id:"api-token",level:3}],d={toc:s};function k(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"strapi"},"Strapi"),(0,r.kt)("p",null,"In deze cursus gaan we gebruik maken van ",(0,r.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi"),". Dit is een headless CMS dat specifiek gemaakt is om te gebruiken als headless CMS. Het is open source en gratis te gebruiken. Het is ook heel eenvoudig om te gebruiken. Het is volledig geschreven in JavaScript en maakt gebruik van Node.js. Je kan het dus gemakkelijk installeren met behulp van npm. "),(0,r.kt)("p",null,"Strapi applicaties kunnen op een server worden ge\xefnstalleerd of lokaal worden uitgevoerd. We gaan eerst zien hoe je een strapi applicatie kan installeren op je lokale machine. Vervolgens gaan we deze applicatie deployen naar een server."),(0,r.kt)("h2",{id:"strapi-installeren"},"Strapi installeren"),(0,r.kt)("p",null,"Om Strapi te installeren moeten we het volgende commando uitvoeren:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-strapi-app@latest my-project\n")),(0,r.kt)("p",null,"We moeten vervolgens een installatie type kiezen. Op dit moment zullen we ",(0,r.kt)("inlineCode",{parentName:"p"},"Quickstart (recommended)")," kiezen. Dit is de eenvoudigste manier om strapi te installeren en gebruikt een SQLite database. Dit is een database die in een bestand wordt opgeslagen. Dit is ideaal voor lokale ontwikkeling, maar niet ideaal voor productie. "),(0,r.kt)("p",null,"Vervolgens zal de installatie beginnen. Dit kan even duren. Als de installatie klaar is, zal de applicatie automatisch opstarten. Je kan de applicatie ook zelf opstarten met het volgende commando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run develop\n")),(0,r.kt)("p",null,"Als je naar de applicatie surft, dan zal je een scherm zien waar je een account kan aanmaken. Dit account heb je nodig om in te loggen in de applicatie. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(5853).Z,width:"1026",height:"1338"})),(0,r.kt)("h2",{id:"content-types"},"Content types"),(0,r.kt)("p",null,"Als je bent ingelogd in de applicatie, dan kan je content types aanmaken. Een content type is een soort van model dat je kan gebruiken om data op te slaan in de database. Je kan bijvoorbeeld een content type aanmaken voor blogposts. Dit content type bevat dan een aantal velden zoals bijvoorbeeld een titel, een inhoud, een auteur, een datum, enzovoort. "),(0,r.kt)("p",null,"Er is altijd een content type aanwezig met de naam ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),". Dit content type bevat een aantal velden zoals bijvoorbeeld een gebruikersnaam, een email, een wachtwoord, enzovoort. Dit content type wordt gebruikt om gebruikers aan te maken die kunnen inloggen in de applicatie."),(0,r.kt)("p",null,"Er zijn 3 verschillende soorten content types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Collection types (bijvoorbeeld blogposts). Dit zijn content types die meerdere items bevatten. Je kan bijvoorbeeld meerdere blogposts aanmaken."),(0,r.kt)("li",{parentName:"ul"},"Single types (bijvoorbeeld een homepage). Dit zijn content types die maar 1 item bevatten. "),(0,r.kt)("li",{parentName:"ul"},"Component types (bijvoorbeeld een header). Dit zijn content types die je kan gebruiken in andere content types. Als je een bepaald stuk van een content type wil hergebruiken, dan kan je dit stuk in een component type plaatsen en dit component type gebruiken in andere content types.")),(0,r.kt)("h3",{id:"voorbeeld-blog-posts"},"Voorbeeld blog posts"),(0,r.kt)("p",null,"We gaan als voorbeeld een collection content type aanmaken voor blogposts. We gaan dit content type ",(0,r.kt)("inlineCode",{parentName:"p"},"Post")," noemen. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(3304).Z,width:"1312",height:"724"})),(0,r.kt)("p",null,"Je krijgt in het eerste venster ineens te zien welke API endpoints er worden aangemaakt voor dit content type. Je kan deze endpoints gebruiken om data op te halen van de server. We gaan dit later in de cursus gebruiken om data op te halen van de server."),(0,r.kt)("p",null,"Vervolgens moeten we de velden van het content type aanmaken. We gaan de volgende velden aanmaken:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"title: Text"),(0,r.kt)("li",{parentName:"ul"},"content: Rich Text"),(0,r.kt)("li",{parentName:"ul"},"author: Relation (met het User content type)")),(0,r.kt)("p",null,"De keuze van Rich Text is belangrijk. Dit betekent dat we een rich text editor kunnen gebruiken om de inhoud van de blogpost te schrijven. Dit is een editor die je kan gebruiken om tekst op te maken. Je kan bijvoorbeeld tekst vet maken, tekst cursief maken, lijsten maken, afbeeldingen toevoegen, enzovoort."),(0,r.kt)("p",null,"Voor de author veld moeten we een relatie leggen met het User content type. Dit wil zeggen dat we een gebruiker kunnen kiezen als auteur van de blogpost. We kiezen hiervoor de ",(0,r.kt)("inlineCode",{parentName:"p"},"Many to one")," relatie. Dit wil zeggen dat een gebruiker meerdere blogposts kan schrijven, maar dat een blogpost maar 1 auteur kan hebben."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(5857).Z,width:"1314",height:"638"})),(0,r.kt)("p",null,"Vervolgens moet je op de ",(0,r.kt)("inlineCode",{parentName:"p"},"Save")," knop klikken om het content type op te slaan. Na het opslaan wordt de server automatisch herstart. Het kan zijn dat je de pagina moet herladen om de wijzigingen te zien."),(0,r.kt)("p",null,"Nu kunnen we effectief een blog post aanmaken. Je kan dan naar de Content Manager gaan en vervolgens op de ",(0,r.kt)("inlineCode",{parentName:"p"},"Post")," link klikken. Je krijgt dan een overzicht te zien van alle blogposts. Uiteraard is er nog geen blogpost aanwezig. Je kan een blogpost aanmaken door op de ",(0,r.kt)("inlineCode",{parentName:"p"},"Create an entry")," knop te klikken. Je krijgt dan een formulier te zien waar je de blogpost kan aanmaken. De rich text editor heeft support voor Markdown. Als je meer wil weten over Markdown, dan kan je ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"hier")," meer informatie vinden."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(6233).Z,width:"1908",height:"1338"})),(0,r.kt)("h3",{id:"rest-api"},"REST API"),(0,r.kt)("p",null,"Voor elke collection content type wordt er automatisch een REST API endpoint aangemaakt. Dit endpoint kan je gebruiken om data op te halen van de server of om data te versturen naar de server. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/:pluralApiId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#get-entries"},"Get a list of entries"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POST")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/:pluralApiId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#create-an-entry"},"Create an entry"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/:pluralApiId/:documentId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#get-an-entry"},"Get an entry"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PUT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/:pluralApiId/:documentId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#update-an-entry"},"Update an entry"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DELETE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/:pluralApiId/:documentId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#delete-an-entry"},"Delete an entry"))))),(0,r.kt)("p",null,"Dus in ons geval bij de blog posts:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/posts")),(0,r.kt)("td",{parentName:"tr",align:null},"Get a list of all blog posts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POST")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/posts")),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new blog post")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/posts/:id")),(0,r.kt)("td",{parentName:"tr",align:null},"Get a specific blog post")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PUT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/posts/:id")),(0,r.kt)("td",{parentName:"tr",align:null},"Update a specific blog post")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DELETE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/posts/:id")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a specific blog post")))),(0,r.kt)("p",null,"Strapi biedt een heel gamma van query parameters aan die het mogelijk maken om te filteren, sorteren en pagineren. Deze kan je vinden op de ",(0,r.kt)("a",{parentName:"p",href:"https://docs.strapi.io/dev-docs/api/rest/parameters"},"Strapi documentatie"),"."),(0,r.kt)("p",null,"Je kan ook de ",(0,r.kt)("a",{parentName:"p",href:"https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder"},"Interactive query builder")," gebruiken om de query parameters te genereren. "),(0,r.kt)("h3",{id:"api-token"},"API Token"),(0,r.kt)("p",null,"Vooraleer je gebruik kan maken van deze endpoints moet je een API Token aanmaken en aangeven wat de gebruiker van deze token allemaal mag uitvoeren. Je kan dit doen door naar de ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," tab te gaan en vervolgens op API tokens te klikken. Daarna klik je op ",(0,r.kt)("inlineCode",{parentName:"p"},"Create new API token"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(1577).Z,width:"2752",height:"934"})),(0,r.kt)("p",null,"Vervolgens krijg je het settings scherm te zien van de nieuwe token. Je kan hier de volgende zaken instellen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: De naam van de token."),(0,r.kt)("li",{parentName:"ul"},"Description: Een beschrijving van de token."),(0,r.kt)("li",{parentName:"ul"},"Token duration: De duur van de token. Wanneer de token vervalt, dan kan je deze niet meer gebruiken. Je kan een token ook manueel deactiveren. Voor deze cursus kiezen we altijd Unlimited."),(0,r.kt)("li",{parentName:"ul"},"Token type: Je kan hier kiezen tussen Read-Only, Full Access en Custom. Meestal kiezen we hier een Read-Only token als we willen voorkomen dat de applicatie data kan aanpassen. Je kan ook per content type aangeven wat de token mag doen. Dit is handig als we bijvoorbeeld een commenting systeem willen bouwen waar de gebruikers comments kunnen aanmaken, maar niet kunnen aanpassen of verwijderen. We willen uiteraard niet dat een gewone gebruiker van de blog blogposts kan aanpassen of verwijderen.")),(0,r.kt)("p",null,"Na het aanmaken van een token krijg je de token te zien. Je kan deze nu meegeven als Bearer token in de header van je request. Nu zal je zien dat je wel data kan ophalen van de server maar niet kan aanpassen of verwijderen."),(0,r.kt)("p",null,"Nu zou je bijvoorbeeld met fetch data kunnen ophalen van de server. Je kan bijvoorbeeld de volgende code gebruiken om alle blogposts op te halen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const response = await fetch("http://localhost:1337/posts", {\n      headers: {\n        Authorization: `Bearer ${token}`,\n      },\n});\n\nconst posts = await response.json();\n')))}k.isMDXComponent=!0},5853:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot 2023-09-24 at 22.01.48-502fc17bbfcf9b7229927e31e120160e.png"},3304:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot 2023-09-24 at 22.18.15-7a1049370d9c52c06faa2ab16bc1c837.png"},5857:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot 2023-09-24 at 22.24.14-3b7e98f96076b8045691aef17f54243b.png"},6233:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot 2023-09-24 at 22.45.04-4eb6d62b10ec1fe76243dc46313e7c78.png"},1577:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot 2023-09-25 at 12.13.30-a9c627061db1af4d9931e09a774efe10.png"}}]);