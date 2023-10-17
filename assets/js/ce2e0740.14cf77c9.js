"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[994],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(t),c=a,h=g["".concat(d,".").concat(c)]||g[c]||u[c]||o;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},i="GraphQL API",l={unversionedId:"wf-course/advanced/headless-cms/graphql",id:"wf-course/advanced/headless-cms/graphql",title:"GraphQL API",description:"GraphQL is een nieuwe API-standaard die een effici\xebnter, krachtiger en flexibeler alternatief biedt voor REST. Het is ontwikkeld en open source gemaakt door Facebook en wordt nu onderhouden door een grote gemeenschap van bedrijven en individuen van over de hele wereld.",source:"@site/docs/wf-course/advanced/headless-cms/graphql.md",sourceDirName:"wf-course/advanced/headless-cms",slug:"/wf-course/advanced/headless-cms/graphql",permalink:"/webframeworks-cursus/wf-course/advanced/headless-cms/graphql",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wfCourse",previous:{title:"Strapi",permalink:"/webframeworks-cursus/wf-course/advanced/headless-cms/strapi"},next:{title:"Recepten voor React.js",permalink:"/webframeworks-cursus/wf-course/recepten/"}},d={},s=[{value:"Het verschil tussen REST en GraphQL",id:"het-verschil-tussen-rest-en-graphql",level:2},{value:"Voorbeeld REST vs GraphQL",id:"voorbeeld-rest-vs-graphql",level:2},{value:"REST",id:"rest",level:3},{value:"GraphQL",id:"graphql",level:3},{value:"Voordelen van GraphQL",id:"voordelen-van-graphql",level:2},{value:"Nadelen van GraphQL",id:"nadelen-van-graphql",level:2},{value:"GraphQL in Strapi",id:"graphql-in-strapi",level:2},{value:"Client code (zonder externe libraries)",id:"client-code-zonder-externe-libraries",level:3},{value:"Client code (met externe libraries)",id:"client-code-met-externe-libraries",level:3}],p={toc:s};function u(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"graphql-api"},"GraphQL API"),(0,a.kt)("p",null,"GraphQL is een nieuwe API-standaard die een effici\xebnter, krachtiger en flexibeler alternatief biedt voor REST. Het is ontwikkeld en open source gemaakt door Facebook en wordt nu onderhouden door een grote gemeenschap van bedrijven en individuen van over de hele wereld."),(0,a.kt)("p",null,"Je kan een GraphQL-query zien als een GET-verzoek in REST. GraphQL-query's worden gebruikt om net zoals bij REST gegevens die de client nodig heeft op te vragen."),(0,a.kt)("p",null,"GraphQL maakt het ",(0,a.kt)("strong",{parentName:"p"},"declaratief")," ophalen van gegevens mogelijk, waarbij een client precies kan specificeren welke gegevens hij nodig heeft van een API. In plaats van meerdere endpoints die vaste datastructuren retourneren, stelt een GraphQL-server slechts \xe9\xe9n endpoint bloot en reageert met precies de data waar een gebruiker om vraagt."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Declaratief programmeren is een programmeer paradigma waarbij de programmeur bescrijft wat er moet gebeuren maar niet hoe het moet gebeuren. Dit is in tegenstelling tot imperatief programmeren waarbij de programmeur stap voor stap beschrijft hoe het programma moet werken. ")),(0,a.kt)("p",null,"GraphQL wordt vaak verward met een databasetechnologie. Dit is een misvatting, GraphQL is een zoektaal voor API's - niet voor databases. In die zin is het database-agnostisch en kan het effectief worden gebruikt in elke context waarin een API wordt gebruikt. M.a.w. je kan gegevens ophalen vanuit eender welke soort databasetechnologie MySQL, MongoDB, Redis, Neo4j, \u2026"),(0,a.kt)("h2",{id:"het-verschil-tussen-rest-en-graphql"},"Het verschil tussen REST en GraphQL"),(0,a.kt)("p",null,"GraphQL is ontwikkeld met de behoefte aan meer flexibiliteit en effici\xebntie te voldoen! Het lost veel van de tekortkomingen en ineffici\xebnties op die ontwikkelaars ervaren bij interactie met REST API's."),(0,a.kt)("p",null,"De oplossing die Facebook bedacht is conceptueel heel eenvoudig: in plaats van meerdere endpoints te hebben, moet je een enkel endpoint hebben dat complexe requests kan verwerken en vervolgens alleen de gegevens terugstuurt dat de gebruiker nodig heeft. Er zal geen overhead zijn aan gegevens. M.a.w. het probleem van overfetching, waarmee de meeste REST API's kampen, wordt opgelost."),(0,a.kt)("h2",{id:"voorbeeld-rest-vs-graphql"},"Voorbeeld REST vs GraphQL"),(0,a.kt)("p",null,"Om de belangrijkste verschillen tussen REST en GraphQL te illustreren, als het gaat om het ophalen van gegevens uit een API, laten we een eenvoudig voorbeeld bekijken:"),(0,a.kt)("p",null,"in een blogtoepassing moet een app de titels van de berichten van een specifieke gebruiker weergeven. Hetzelfde scherm toont ook de namen van de laatste 3 volgers van die gebruiker. Hoe zou die situatie worden opgelost met REST en met GraphQL?"),(0,a.kt)("h3",{id:"rest"},"REST"),(0,a.kt)("p",null,"Met een REST API verzamel je de gegevens doorgaans door toegang te krijgen tot meerdere endpoints. In het voorbeeld zou dit een ",(0,a.kt)("inlineCode",{parentName:"p"},"/users/<id>")," endpoint kunnen zijn om de initi\xeble gebruikersgegevens op te halen. Ten tweede is er waarschijnlijk een ",(0,a.kt)("inlineCode",{parentName:"p"},"/users/<id>/posts/")," endpoint dat alle posts voor een gebruiker retourneert. Het derde endpoint is de ",(0,a.kt)("inlineCode",{parentName:"p"},"/users/<id>/followers/")," die een lijst met volgers per gebruiker retourneert."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:t(3884).Z,width:"2078",height:"1700"})),(0,a.kt)("p",null,"Met REST moet je drie verzoeken doen aan verschillende endpoints om de vereiste gegevens op te halen. Je haalt ook te veel gegevens op omdat de endpoints aanvullende informatie retourneren die niet we in de front-end niet zullen gebruiken. M.a.w. er wordt aan ",(0,a.kt)("strong",{parentName:"p"},"overfetching")," gedaan!"),(0,a.kt)("h3",{id:"graphql"},"GraphQL"),(0,a.kt)("p",null,"In GraphQL daarentegen, stuur je \xe9\xe9n enkele query naar de GraphQL-server waarin je concreet vermeld welke data je nodig hebt. De server reageert vervolgens met een JSON-object dat alleen de gevraagde data bevat."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:t(6270).Z,width:"1566",height:"946"})),(0,a.kt)("p",null,"aan de hand van een query kan de gebruiker in GraphQL precies de gegevens specificeren die hij/zij nodig heeft. In de bovenstaande foto wordt er een query geleverd aan de GraphQL-server met daarin de vraag achter specifieke informatie van de user. De client ontvangt vervolgens precies de informatie die hij/zij in de query heeft gedefinieerd en niets meer, waardoor overfetching gegevens wordt vermeden. Merk op dat de structuur van het antwoord van de server precies de geneste structuur volgt die in de query is gedefinieerd.\nDaarbij wordt er maar \xe9\xe9n request naar de server gestuurd en wordt het probleem van underfetching vermeden."),(0,a.kt)("h2",{id:"voordelen-van-graphql"},"Voordelen van GraphQL"),(0,a.kt)("p",null,"GraphQL zorgt ervoor dat de verschillende pijnpunten waarmee REST kampt worden opgelost. Met GraphQL vermijd je overfetching en underfetching door het gebruik van een voorgedefinieerd schema. Je moet maar \xe9\xe9n endpoint aanspreken, m.a.w. \xe9\xe9n request sturen naar de server, en je krijgt alleen de gevraagde data terug. Geen overhead van data en geen complexe kettingreacties van requests naar verschillende endpoints. Dit maakt het voor de front-end developer veel aangenamer en gemakkelijker om data vanuit de server op te vragen en te verwerken in de front-end."),(0,a.kt)("p",null,"GraphQL werkt met een voorgedefinieerd schema die de structuur van de opvraagbare data bevat. Dit maakt de API zeer eenvoudig te begrijpen en gemakkelijk te gebruiken. Je kan een schema in GraphQL zien als de documentatie waarmee de front-end developer te weten kan komen hoe hij/zij data kan opvragen van de server. M.a.w. er is nogmaals een vermindering van complexiteit voor de front-end developers!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Duidelijke documentatie die out of the box wordt voorzien;"),(0,a.kt)("li",{parentName:"ul"},"Geen overhead van data in de responds van de server;"),(0,a.kt)("li",{parentName:"ul"},"Er moet maar \xe9\xe9n endpoint aangesproken worden m.a.w. \xe9\xe9n roundtrip naar de server en terug;")),(0,a.kt)("h2",{id:"nadelen-van-graphql"},"Nadelen van GraphQL"),(0,a.kt)("p",null,"Als GraphQL alleen maar voordelen heeft tegenover REST dan werd REST hoogstwaarschijnlijk al lang niet meer gebruikt. Het kiezen tussen een GraphQL of REST API hangt af van de use case waarin de API zal worden gebruikt."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Serverside Complexiteit")),(0,a.kt)("p",null,"Een groot nadeel is dat alle complexiteit op de schouders van de back-end developers valt. Een GraphQL API maakt het gemakkelijk voor de front-end developers. Hoe data wordt opgevraagd, gewijzigd en verwijderd kan afgeleid worden uit het GraphQL schema.\nDe back-end developers daarin tegen moeten er voor zorgen dat de databank structuur in \xe9\xe9n overzichtelijk en gemakkelijk te gebruiken schema wordt gegoten. Hoe groter het project, hoe ingewikkelder dit wordt. Je centraliseert alles tot \xe9\xe9n geheel, \xe9\xe9n GraphQL schema. Als er zich ooit een fout optreedt dan is de kans groot dat heel de werking van de API wordt belemmerd."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Stijle Leercurve")),(0,a.kt)("p",null,"Een ander nadeel is dat de werking van GraphQL heel anders is dan dat van REST. In GraphQL schrijf je queries waarmee je data kan opvragen en mutaties om data weg te schrijven. Buiten deze twee nieuwe termen moet de ontwikkelaar ook verschillende begrippen leren zoals query-argumenten, fragmenten, etc.Het kan even duren vooraleer nieuwe developers er mee weg zijn."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST requests")),(0,a.kt)("p",null,"Alle requests van GraphQL zijn POST requests. Zelfs als je data opvraagt zal GraphQL dit behandelen als een POST. Dit heeft als nadeel dat de browser niet automatisch de opgevraagde gegevens cached. Ook al is de data al eens vanuit de server opgevraagd toch zal GraphQL hiervoor een request naar de server sturen. Er zijn uiteraard verschillende libraries die dit probleem oplossen, maar dan ben je weer afhankelijk van een externe library, wat soms bij kleine projecten niet nodig is."),(0,a.kt)("h2",{id:"graphql-in-strapi"},"GraphQL in Strapi"),(0,a.kt)("p",null,"Strapi heeft by default een REST API die je kan gebruiken om data op te vragen. Je kan echter ook gebruik maken van GraphQL. Je kan deze activeren door de graphql plugin te installeren."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run strapi install graphql\n")),(0,a.kt)("p",null,"Deze zal er voor zorgen dat er een nieuwe endpoint wordt aangemaakt op ",(0,a.kt)("inlineCode",{parentName:"p"},"/graphql"),". Je kan deze endpoint gebruiken om GraphQL queries naar te sturen. Je kan daarna naar de url ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1337/graphql")," surfen om de GraphQL playground te openen. Hier kan je queries schrijven en uitvoeren. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:t(1786).Z,width:"2770",height:"1324"})),(0,a.kt)("p",null,"De query komt exact overeen met de velden die je wil zien in het resultaat."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  posts {\n    data {\n      attributes {\n        author {\n          data{\n            attributes {\n              username\n              email\n            }\n          }\n        }\n        title\n        content\n        cover {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nMerk op dat je hier ook de Authorization header moet toevoegen voordat je de query kan uitvoeren. Je moet de API token hier meegeven die je ook in de REST API gebruikt. Je kan deze vinden in de settings van de Strapi admin interface.\n")),(0,a.kt)("p",null,"Je kan deze query ook uitvoeren aan de hand van een meegegeven id:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  post(id:1) {\n    data {\n      attributes {\n        title\n        content\n      }\n    }\n  }\n}\n")),(0,a.kt)("h3",{id:"client-code-zonder-externe-libraries"},"Client code (zonder externe libraries)"),(0,a.kt)("p",null,"Je kan deze GraphQL API ook gebruiken in je eigen React applicatie. Je kan hiervoor gebruik maken van de ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," API. Je kan de query die je in de GraphQL playground hebt geschreven ook gebruiken in je client code. Dit kan je ook in je getStaticProps functie gebruiken om data op te halen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const response = await fetch(\n    "http://localhost:1337/graphql",\n    {\n      method: "POST",\n      body: JSON.stringify({\n        query: `query {\n          posts {\n            data {\n              attributes {\n                author {\n                  data {\n                    attributes {\n                      username\n                      email\n                    }\n                  }\n                }\n                title\n                content\n                cover {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }`,\n      }),\n      headers: {\n        "Authorization": `Bearer ${process.env.TOKEN}`,\n        "Content-Type": "application/json",\n      },\n    }\n  )\n  let json = await response.json();\n')),(0,a.kt)("h3",{id:"client-code-met-externe-libraries"},"Client code (met externe libraries)"),(0,a.kt)("p",null,"We gaan in dit voorbeeld gebruik maken van Apollo Client in samenwerking met code generation voor TypeScript types. Ja, je leest dit goed. Het genereren van types in TypeScript voor graphql kan volledig automatisch verlopen. "),(0,a.kt)("p",null,"Het eerste wat je moet doen is de code generation tools installeren:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -S graphql\nnpm i -D typescript ts-node @graphql-codegen/cli @graphql-codegen/client-preset\n")),(0,a.kt)("p",null,"In de root van je project (het niveau boven je src folder) plaats je een bestand genaamd ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen.ts"),". Hierin plaats je de volgende code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"import type { CodegenConfig } from '@graphql-codegen/cli'\n \nconst config: CodegenConfig = {\n   schema: 'https://localhost:1337/graphql',\n   documents: ['src/**/*.tsx'],\n   generates: {\n      './src/gql/': {\n        preset: 'client',\n      }\n   }\n}\nexport default config\n")),(0,a.kt)("p",null,"De url in schema moet linken naar de GraphQL endpoint van je Strapi applicatie. De rest van de code kan je zo laten staan."),(0,a.kt)("p",null,"Als je nu in de root van je project het volgende commando uitvoert zal je zien dat er een nieuwe folder ",(0,a.kt)("inlineCode",{parentName:"p"},"gql")," is ontstaan. Hier worden alle typescript types voor graphql gegenereerd."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn graphql-codegen\n")),(0,a.kt)("p",null,"Je kan dit commando ook met de ",(0,a.kt)("inlineCode",{parentName:"p"},"--watch")," flag uitvoeren zodat de types elke keer opnieuw worden gegenereerd gebaseerd op de graphql queries dat je schrijft. "),(0,a.kt)("p",null,"Vervolgens gaan we de apollo client library installeren zodat we nu een echte GraphQL client hebben die we kunnen gebruiken in onze applicatie."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @apollo/client graphql\n")),(0,a.kt)("p",null,"Maak vervolgens een bestand ",(0,a.kt)("inlineCode",{parentName:"p"},"apollo-client.ts")," aan in je ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder met de volgende inhoud:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { ApolloClient, HttpLink, InMemoryCache } from \"@apollo/client\";\n\nconst createApolloClient = () => {\n  return new ApolloClient({\n    link: new HttpLink({\n      uri: 'http://localhost:1337/graphql',\n      headers: {\n        Authorization: `Bearer ${process.env.TOKEN}`\n      }\n    }),\n    cache: new InMemoryCache(),\n  });\n};\n\nexport default createApolloClient;\n")),(0,a.kt)("p",null,"Dit gaat er momenteel vanuit dat je strapi op localhost loopt en dat je de API token in een environment variabele hebt gestoken. Je kan dit ook hardcoden in de headers van de HttpLink."),(0,a.kt)("p",null,"Maak nu de query aan in het bestand waar je de data wil ophalen. In dit voorbeeld gaan we de data ophalen in de index.tsx van de pages folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { graphql } from "@/gql/index"\n\nconst GetAllPostsWithAuthors = graphql(`\nquery GetAllPostsWithAuthors {\n  posts {\n    data {\n      attributes {\n        author {\n          data{\n            attributes {\n              username\n              email\n            }\n          }\n        }\n        title\n        content\n        cover {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}\n`);\n')),(0,a.kt)("p",null,"Vervolgens kan je deze query gebruiken in je getStaticProps functie:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const client = createApolloClient();\nconst {data} = await client.query({query: GetAllPostsWithAuthors, variables: {}})\n")),(0,a.kt)("p",null,"Als je nu data gebruikt zal je opmerken dat het automatisch het juiste type heeft en dat je autocompletion hebt."))}u.isMDXComponent=!0},6270:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/graphql1-555bfc02193451702d31cd7b2d1508b6.png"},1786:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/graphql2-86009da055b10b633ddd6ee9e442a1f2.png"},3884:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/rest1-3fa5291aa61f3f94e8170a058847e55b.png"}}]);