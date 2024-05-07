"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[9274],{7622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=t(7462),l=(t(7294),t(3905)),r=t(2004);const i={},o=void 0,d={unversionedId:"wf-course/advanced/headless-cms/strapi",id:"wf-course/advanced/headless-cms/strapi",title:"strapi",description:"---",source:"@site/docs/wf-course/advanced/headless-cms/strapi.md",sourceDirName:"wf-course/advanced/headless-cms",slug:"/wf-course/advanced/headless-cms/strapi",permalink:"/webframeworks-cursus/wf-course/advanced/headless-cms/strapi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wfCourse",previous:{title:"GraphQL API",permalink:"/webframeworks-cursus/wf-course/advanced/headless-cms/graphql"},next:{title:"Handige Tools",permalink:"/webframeworks-cursus/wf-course/tools/"}},p={},s=[{value:"sidebar_position: 1",id:"sidebar_position-1",level:2},{value:"Strapi installeren",id:"strapi-installeren",level:2},{value:"Content types",id:"content-types",level:2},{value:"Voorbeeld blog posts",id:"voorbeeld-blog-posts",level:3},{value:"REST API",id:"rest-api",level:2},{value:"API Token",id:"api-token",level:2},{value:"Image upload",id:"image-upload",level:2},{value:"Cloudinary plugin installeren",id:"cloudinary-plugin-installeren",level:3},{value:"Blog post aanpassen",id:"blog-post-aanpassen",level:3},{value:"Environment variabelen",id:"environment-variabelen",level:3},{value:"Markdown",id:"markdown",level:2}],k={toc:s};function m(e){let{components:n,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sidebar_position-1"},"sidebar_position: 1"),(0,l.kt)("h1",{id:"strapi"},"Strapi"),(0,l.kt)("p",null,"In deze cursus gaan we gebruik maken van ",(0,l.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi"),". Dit is een headless CMS dat specifiek gemaakt is om te gebruiken als headless CMS. Het is open source en gratis te gebruiken. Het is ook heel eenvoudig om te gebruiken. Het is volledig geschreven in JavaScript en maakt gebruik van Node.js. Je kan het dus gemakkelijk installeren met behulp van npm. "),(0,l.kt)("p",null,"Strapi applicaties kunnen op een server worden ge\xefnstalleerd of lokaal worden uitgevoerd. We gaan eerst zien hoe je een strapi applicatie kan installeren op je lokale machine. Vervolgens gaan we deze applicatie deployen naar een server."),(0,l.kt)(r.Z,{controls:!0,url:"https://youtu.be/SlTV2qB4AzE",mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"strapi-installeren"},"Strapi installeren"),(0,l.kt)("p",null,"Om Strapi te installeren moeten we het volgende commando uitvoeren:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-strapi-app@latest my-project\n")),(0,l.kt)("p",null,"We moeten vervolgens een installatie type kiezen. Op dit moment zullen we ",(0,l.kt)("inlineCode",{parentName:"p"},"Quickstart (recommended)")," kiezen. Dit is de eenvoudigste manier om strapi te installeren en gebruikt een SQLite database. Dit is een database die in een bestand wordt opgeslagen. Dit is ideaal voor lokale ontwikkeling, maar niet ideaal voor productie. "),(0,l.kt)("p",null,"Vervolgens zal de installatie beginnen. Dit kan even duren. Als de installatie klaar is, zal de applicatie automatisch opstarten. Je kan de applicatie ook zelf opstarten met het volgende commando:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run develop\n")),(0,l.kt)("p",null,"Als je naar de applicatie surft, dan zal je een scherm zien waar je een account kan aanmaken. Dit account heb je nodig om in te loggen in de applicatie. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Alt text",src:t(5853).Z,width:"1026",height:"1338"})),(0,l.kt)("h2",{id:"content-types"},"Content types"),(0,l.kt)("p",null,"Als je bent ingelogd in de applicatie, dan kan je content types aanmaken. Een content type is een soort van model dat je kan gebruiken om data op te slaan in de database. Je kan bijvoorbeeld een content type aanmaken voor blogposts. Dit content type bevat dan een aantal velden zoals bijvoorbeeld een titel, een inhoud, een auteur, een datum, enzovoort. "),(0,l.kt)("p",null,"Er is altijd een content type aanwezig met de naam ",(0,l.kt)("inlineCode",{parentName:"p"},"User"),". Dit content type bevat een aantal velden zoals bijvoorbeeld een gebruikersnaam, een email, een wachtwoord, enzovoort. Dit content type wordt gebruikt om gebruikers aan te maken die kunnen inloggen in de applicatie."),(0,l.kt)("p",null,"Er zijn 3 verschillende soorten content types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Collection types (bijvoorbeeld blogposts). Dit zijn content types die meerdere items bevatten. Je kan bijvoorbeeld meerdere blogposts aanmaken."),(0,l.kt)("li",{parentName:"ul"},"Single types (bijvoorbeeld een homepage). Dit zijn content types die maar 1 item bevatten. "),(0,l.kt)("li",{parentName:"ul"},"Component types (bijvoorbeeld een header). Dit zijn content types die je kan gebruiken in andere content types. Als je een bepaald stuk van een content type wil hergebruiken, dan kan je dit stuk in een component type plaatsen en dit component type gebruiken in andere content types.")),(0,l.kt)("h3",{id:"voorbeeld-blog-posts"},"Voorbeeld blog posts"),(0,l.kt)("p",null,"We gaan als voorbeeld een collection content type aanmaken voor blogposts. We gaan dit content type ",(0,l.kt)("inlineCode",{parentName:"p"},"Post")," noemen. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Alt text",src:t(3304).Z,width:"1312",height:"724"})),(0,l.kt)("p",null,"Je krijgt in het eerste venster ineens te zien welke API endpoints er worden aangemaakt voor dit content type. Je kan deze endpoints gebruiken om data op te halen van de server. We gaan dit later in de cursus gebruiken om data op te halen van de server."),(0,l.kt)("p",null,"Vervolgens moeten we de velden van het content type aanmaken. We gaan de volgende velden aanmaken:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"title: Text"),(0,l.kt)("li",{parentName:"ul"},"content: Rich Text (Markdown)")),(0,l.kt)("p",null,"De keuze van Rich Text is belangrijk. Dit betekent dat we een rich text editor kunnen gebruiken om de inhoud van de blogpost te schrijven. Dit is een editor die je kan gebruiken om tekst op te maken. Je kan bijvoorbeeld tekst vet maken, tekst cursief maken, lijsten maken, afbeeldingen toevoegen, enzovoort."),(0,l.kt)("p",null,"Vervolgens moet je op de ",(0,l.kt)("inlineCode",{parentName:"p"},"Save")," knop klikken om het content type op te slaan. Na het opslaan wordt de server automatisch herstart. Het kan zijn dat je de pagina moet herladen om de wijzigingen te zien."),(0,l.kt)("p",null,"We zouden ook graag de ",(0,l.kt)("inlineCode",{parentName:"p"},"Author")," van een blog post gaan tonen in onze applicatie. We kunnen dit doen door een nieuwe content type aan te maken. We gaan dit content type ",(0,l.kt)("inlineCode",{parentName:"p"},"Author")," noemen. Dit content type bevat de volgende velden:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"firstname: Text"),(0,l.kt)("li",{parentName:"ul"},"lastname: Text"),(0,l.kt)("li",{parentName:"ul"},"email: Text"),(0,l.kt)("li",{parentName:"ul"},"shortBio: Text")),(0,l.kt)("p",null,"Voor de author veld moeten we een relatie leggen met het Author content type. Dit wil zeggen dat we een gebruiker kunnen kiezen als auteur van de blogpost. We kiezen hiervoor de ",(0,l.kt)("inlineCode",{parentName:"p"},"Many to one")," relatie. Dit wil zeggen dat een gebruiker meerdere blogposts kan schrijven, maar dat een blogpost maar 1 auteur kan hebben.  We moeten dus een aanpassing doen aan onze ",(0,l.kt)("inlineCode",{parentName:"p"},"Post")," content type en het volgende veld toevoegen:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"author: Relation (met Author)")),(0,l.kt)("p",null,"Nu kunnen we effectief een blog post aanmaken. Je kan dan naar de Content Manager gaan en vervolgens op de ",(0,l.kt)("inlineCode",{parentName:"p"},"Post")," link klikken. Je krijgt dan een overzicht te zien van alle blogposts. Uiteraard is er nog geen blogpost aanwezig. Je kan een blogpost aanmaken door op de ",(0,l.kt)("inlineCode",{parentName:"p"},"Create an entry")," knop te klikken. Je krijgt dan een formulier te zien waar je de blogpost kan aanmaken. De rich text editor heeft support voor Markdown. Als je meer wil weten over Markdown, dan kan je ",(0,l.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"hier")," meer informatie vinden."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Alt text",src:t(6233).Z,width:"1908",height:"1338"})),(0,l.kt)("h2",{id:"rest-api"},"REST API"),(0,l.kt)("p",null,"Voor elke collection content type wordt er automatisch een REST API endpoint aangemaakt. Dit endpoint kan je gebruiken om data op te halen van de server of om data te versturen naar de server. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"URL"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GET")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/:pluralApiId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#get-entries"},"Get a list of entries"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"POST")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/:pluralApiId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#create-an-entry"},"Create an entry"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GET")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/:pluralApiId/:documentId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#get-an-entry"},"Get an entry"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PUT")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/:pluralApiId/:documentId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#update-an-entry"},"Update an entry"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DELETE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/:pluralApiId/:documentId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#delete-an-entry"},"Delete an entry"))))),(0,l.kt)("p",null,"Dus in ons geval bij de blog posts:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"URL"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GET")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/posts")),(0,l.kt)("td",{parentName:"tr",align:null},"Get a list of all blog posts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"POST")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/posts")),(0,l.kt)("td",{parentName:"tr",align:null},"Create a new blog post")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GET")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/posts/:id")),(0,l.kt)("td",{parentName:"tr",align:null},"Get a specific blog post")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PUT")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/posts/:id")),(0,l.kt)("td",{parentName:"tr",align:null},"Update a specific blog post")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DELETE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/posts/:id")),(0,l.kt)("td",{parentName:"tr",align:null},"Delete a specific blog post")))),(0,l.kt)("p",null,"Strapi biedt een heel gamma van query parameters aan die het mogelijk maken om te filteren, sorteren en pagineren. Deze kan je vinden op de ",(0,l.kt)("a",{parentName:"p",href:"https://docs.strapi.io/dev-docs/api/rest/parameters"},"Strapi documentatie"),"."),(0,l.kt)("p",null,"Je kan ook de ",(0,l.kt)("a",{parentName:"p",href:"https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder"},"Interactive query builder")," gebruiken om de query parameters te genereren. "),(0,l.kt)("h2",{id:"api-token"},"API Token"),(0,l.kt)("p",null,"Vooraleer je gebruik kan maken van deze endpoints moet je een API Token aanmaken en aangeven wat de gebruiker van deze token allemaal mag uitvoeren. Je kan dit doen door naar de ",(0,l.kt)("inlineCode",{parentName:"p"},"Settings")," tab te gaan en vervolgens op API tokens te klikken. Daarna klik je op ",(0,l.kt)("inlineCode",{parentName:"p"},"Create new API token"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Alt text",src:t(1577).Z,width:"2752",height:"934"})),(0,l.kt)("p",null,"Vervolgens krijg je het settings scherm te zien van de nieuwe token. Je kan hier de volgende zaken instellen:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Name: De naam van de token."),(0,l.kt)("li",{parentName:"ul"},"Description: Een beschrijving van de token."),(0,l.kt)("li",{parentName:"ul"},"Token duration: De duur van de token. Wanneer de token vervalt, dan kan je deze niet meer gebruiken. Je kan een token ook manueel deactiveren. Voor deze cursus kiezen we altijd Unlimited."),(0,l.kt)("li",{parentName:"ul"},"Token type: Je kan hier kiezen tussen Read-Only, Full Access en Custom. Meestal kiezen we hier een Read-Only token als we willen voorkomen dat de applicatie data kan aanpassen. Je kan ook per content type aangeven wat de token mag doen. Dit is handig als we bijvoorbeeld een commenting systeem willen bouwen waar de gebruikers comments kunnen aanmaken, maar niet kunnen aanpassen of verwijderen. We willen uiteraard niet dat een gewone gebruiker van de blog blogposts kan aanpassen of verwijderen.")),(0,l.kt)("p",null,"Na het aanmaken van een token krijg je de token te zien. Je kan deze nu meegeven als Bearer token in de header van je request. Nu zal je zien dat je wel data kan ophalen van de server maar niet kan aanpassen of verwijderen."),(0,l.kt)("p",null,"Nu zou je bijvoorbeeld met fetch data kunnen ophalen van de server. Je kan bijvoorbeeld de volgende code gebruiken om alle blogposts op te halen:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'const response = await fetch("http://localhost:1337/api/posts?populate=*", {\n      headers: {\n        Authorization: `Bearer ${token}`,\n      },\n});\n\nconst posts = await response.json();\n')),(0,l.kt)("p",null,"We voegen hier de ",(0,l.kt)("inlineCode",{parentName:"p"},"populate=*")," parameter toe om de author van de blogpost op te halen. Als je dit niet doet, dan krijg je enkel de id van de author te zien. "),(0,l.kt)("h2",{id:"image-upload"},"Image upload"),(0,l.kt)("p",null,"Het is mogelijk ook afbeeldingen te uploaden met strapi. By default worden deze afbeeldingen opgeslagen in een lokale folder. Omdat het niet altijd mogelijk is om afbeeldingen lokaal op te slaan, kan je ook gebruik maken van een externe service zoals Amazon S3 of Cloudinary. "),(0,l.kt)("p",null,"In deze cursus gaan we gebruik maken van Cloudinary. Dit is een service die het mogelijk maakt om afbeeldingen op te slaan in de cloud. Je kan een gratis account aanmaken op ",(0,l.kt)("a",{parentName:"p",href:"https://cloudinary.com/"},"Cloudinary"),"."),(0,l.kt)("p",null,"In het dashboard kan je de volgende informatie vinden:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cloud name"),(0,l.kt)("li",{parentName:"ul"},"API Key"),(0,l.kt)("li",{parentName:"ul"},"API Secret")),(0,l.kt)("p",null,"Deze informatie heb je later nodig om de afbeeldingen te uploaden naar Cloudinary via Strapi."),(0,l.kt)("h3",{id:"cloudinary-plugin-installeren"},"Cloudinary plugin installeren"),(0,l.kt)("p",null,"Het eerste wat je moet doen is de Cloudinary plugin installeren. Dit doe je door het volgende commando uit te voeren:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @strapi/provider-upload-cloudinary\n")),(0,l.kt)("p",null,"Zorg ervoor dat de strapi server niet draait als je dit commando uitvoert."),(0,l.kt)("p",null,"Daarna moet je een ",(0,l.kt)("inlineCode",{parentName:"p"},"./config/plugins.js")," bestand aanmaken met de volgende inhoud:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = ({ env }) => ({\n  upload: {\n    config: {\n      provider: 'cloudinary',\n      providerOptions: {\n        cloud_name: env('CLOUDINARY_NAME'),\n        api_key: env('CLOUDINARY_KEY'),\n        api_secret: env('CLOUDINARY_SECRET'),\n      },\n      actionOptions: {\n        upload: {},\n        delete: {},\n      },\n    },\n  }\n});\n")),(0,l.kt)("p",null,"Deze plugin maakt gebruik van environment variabelen. Deze variabelen kan je instellen in het ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," bestand. Je kan dit bestand aanmaken in de root van je project. Je kan de volgende variabelen toevoegen:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"CLOUDINARY_NAME = cloudinary-name\nCLOUDINARY_KEY = cloudinary-key\nCLOUDINARY_SECRET = cloudinary-secret\n")),(0,l.kt)("p",null,"Er moet nog een laatste stap worden uitgevoerd om de security policy van strapi aan te passen. Je moet een wijziging maken in ",(0,l.kt)("inlineCode",{parentName:"p"},"./config/middlewares.js"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = [\n  'strapi::errors',\n  {\n    name: 'strapi::security',\n    config: {\n      contentSecurityPolicy: {\n        useDefaults: true,\n        directives: {\n          'connect-src': [\"'self'\", 'https:'],\n          'img-src': [\"'self'\", 'data:', 'blob:', 'res.cloudinary.com'],\n          'media-src': [\"'self'\", 'data:', 'blob:', 'res.cloudinary.com'],\n          upgradeInsecureRequests: null,\n        },\n      },\n    },\n  },\n  'strapi::cors',\n  'strapi::poweredBy',\n  'strapi::logger',\n  'strapi::query',\n  'strapi::body',\n  'strapi::session',\n  'strapi::favicon',\n  'strapi::public',\n];\n")),(0,l.kt)("p",null,"Zonder deze wijziging zal je een error krijgen als je een afbeelding wil uploaden."),(0,l.kt)("h3",{id:"blog-post-aanpassen"},"Blog post aanpassen"),(0,l.kt)("p",null,"Nu kunnen we de blog post aanpassen zodat we een afbeelding kunnen toevoegen. We gaan een nieuw veld toevoegen aan het blog post content type. Dit veld noemen we ",(0,l.kt)("inlineCode",{parentName:"p"},"image")," en is van het type ",(0,l.kt)("inlineCode",{parentName:"p"},"Media"),". Dit is een speciaal type dat we kunnen gebruiken om afbeeldingen op te slaan."),(0,l.kt)("p",null,"Nu kunnen we een blog post aanmaken met een afbeelding. Als je de blog post opslaat, dan zal de afbeelding automatisch worden ge\xfcpload naar Cloudinary. Je kan dit controleren door naar de Cloudinary website te gaan. Je zal zien dat de afbeelding is ge\xfcpload naar Cloudinary."),(0,l.kt)("h3",{id:"environment-variabelen"},"Environment variabelen"),(0,l.kt)("p",null,"Omdat we de API token die we zelf hebben aangemaakt ook willen gebruiken in onze next.js applicatie, moeten we deze token opslaan in een environment variabele. Net zoals we dit hebben gedaan bij strapi moeten we ook hier een ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," bestand aanmaken. Dit bestand moet je aanmaken in de root van je next.js project. Hier kan je een ",(0,l.kt)("inlineCode",{parentName:"p"},"TOKEN")," variabele aanmaken en de token van strapi hierin opslaan. "),(0,l.kt)("p",null,"We kunnen deze dan op de volgende manier uitlezen in onze next.js applicatie:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const token = process.env.TOKEN;\n")),(0,l.kt)("p",null,"Let er op je kan deze variabele enkel maar gebruiken in de server code. Je kan deze niet gebruiken in de client code want deze variabele wordt niet meegestuurd naar de client. Dus je kan deze enkel in de ",(0,l.kt)("inlineCode",{parentName:"p"},"getStaticProps"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," functies gebruiken."),(0,l.kt)("h2",{id:"markdown"},"Markdown"),(0,l.kt)("p",null,"Alle rich text velden worden opgeslagen in markdown. Dit is een speciale syntax die je kan gebruiken om tekst op te maken. Je kan bijvoorbeeld tekst vet maken, tekst cursief maken, lijsten maken, afbeeldingen toevoegen, enzovoort."),(0,l.kt)("p",null,"Hier een voorbeeld van een aantal features van markdown:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"# Heading 1\n## Heading 2\n### Heading 3\n**Bold text**\n*Italic text*\n- List item 1\n- List item 2\n- List item 3\n\n![Alt text](image.png)\n")),(0,l.kt)("p",null,"We zijn van plan om de inhoud van de blogpost te tonen op de website. We moeten dus de markdown omzetten naar HTML. We gaan dit doen met de ",(0,l.kt)("inlineCode",{parentName:"p"},"marked")," package. Deze package zorgt ervoor dat we markdown kunnen omzetten naar HTML."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install marked\n")),(0,l.kt)("p",null,"Nu kan je de Marked library importeren in je code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Marked } from 'marked';\n")),(0,l.kt)("p",null,"Vervolgens moet je nog een markdown object aanmaken dat je kan gebruiken om de markdown om te zetten naar HTML:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const marked = new Marked();\n")),(0,l.kt)("p",null,"Dit kan je globaal doen in je bestand."),(0,l.kt)("p",null,"Je kan deze functie gebruiken om markdown om te zetten naar HTML. Je kan de volgende code gebruiken om de markdown om te zetten naar HTML:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"marked.parse(post.attributes.content);\n")),(0,l.kt)("p",null,"Je kan deze functie in je React component gebruiken om de HTML te tonen. Je moet hier wel de ",(0,l.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML")," gebruiken omdat je HTML gaat renderen. De naam van deze functie ziet er eng uit, maar dit is de enige manier om HTML te renderen in React. De reden dat deze naam zo is gekozen is omdat je HTML kan injecteren in je component. Dit is gevaarlijk omdat je hierdoor kwetsbaar bent voor XSS aanvallen. Je moet dus zeker zijn dat je de HTML vertrouwt die je gaat renderen. In ons geval vertrouwen we de HTML die we gaan renderen omdat we deze zelf hebben gegenereerd."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<div dangerouslySetInnerHTML={{ __html: marked.parse(post.attributes.content) }} />\n")),(0,l.kt)("p",null,"Soms wil je de manier waarop de markdown wordt omgezet naar HTML aanpassen. Je kan dit doen door een renderer te gebruiken. Je kan bijvoorbeeld de volgende code gebruiken om een renderer aan te maken:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Marked, Renderer } from 'marked';\n\nconst renderer = new Renderer();\n\nrenderer.heading = (text, level) => {\n  return `<h${level} class=\"heading\">${text}</h${level}>`;\n};\n")),(0,l.kt)("p",null,"Zo kan je zelf bepalen hoe de markdown wordt omgezet naar HTML. Je kan bijvoorbeeld de headings een bepaalde class geven zodat je deze kan stylen met CSS."))}m.isMDXComponent=!0},5853:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Screenshot 2023-09-24 at 22.01.48-502fc17bbfcf9b7229927e31e120160e.png"},3304:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Screenshot 2023-09-24 at 22.18.15-7a1049370d9c52c06faa2ab16bc1c837.png"},6233:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Screenshot 2023-09-24 at 22.45.04-4eb6d62b10ec1fe76243dc46313e7c78.png"},1577:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Screenshot 2023-09-25 at 12.13.30-a9c627061db1af4d9931e09a774efe10.png"}}]);