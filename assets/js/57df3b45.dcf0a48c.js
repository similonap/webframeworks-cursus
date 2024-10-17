"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[4093],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:10},o="React Router",l={unversionedId:"wf-course/react/routing/README",id:"wf-course/react/routing/README",title:"React Router",description:"Twee soorten routering",source:"@site/docs/wf-course/react/routing/README.md",sourceDirName:"wf-course/react/routing",slug:"/wf-course/react/routing/",permalink:"/webframeworks-cursus/wf-course/react/routing/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"wfCourse",previous:{title:"Recepten voor React.js",permalink:"/webframeworks-cursus/wf-course/react/recepten/"},next:{title:"Next.js",permalink:"/webframeworks-cursus/wf-course/nextjs/"}},d={},s=[{value:"Twee soorten routering",id:"twee-soorten-routering",level:2},{value:"Server-side routering",id:"server-side-routering",level:3},{value:"Routering in single-page applicaties",id:"routering-in-single-page-applicaties",level:3},{value:"React router",id:"react-router-1",level:2},{value:"Installatie",id:"installatie",level:3},{value:"Voorbeeld",id:"voorbeeld",level:3},{value:"Links",id:"links",level:3},{value:"Ontbrekende pagina&#39;s afhandelen",id:"ontbrekende-paginas-afhandelen",level:3},{value:"URL parameters",id:"url-parameters",level:3}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-router"},"React Router"),(0,a.kt)("h2",{id:"twee-soorten-routering"},"Twee soorten routering"),(0,a.kt)("p",null,"Het proces waarbij de ",(0,a.kt)("strong",{parentName:"p"},"resource")," die bij een uniform resource locator (",(0,a.kt)("strong",{parentName:"p"},"URL"),") hoort wordt opgezocht, heet ",(0,a.kt)("strong",{parentName:"p"},"routering"),". Vanuit het perspectief van de eindgebruiker is routering dus een vertaling van URL's in de browserbalk naar webpagina's. Er zijn twee vormen van routering, beide met hun eigen voor- en nadelen."),(0,a.kt)("h3",{id:"server-side-routering"},"Server-side routering"),(0,a.kt)("p",null,'De oudste (maar daarom niet "verouderde") vorm van routering is ',(0,a.kt)("strong",{parentName:"p"},"server-side routering"),". Hierbij wordt een ",(0,a.kt)("strong",{parentName:"p"},"HTTP request")," naar de server gestuurd, met daarin de te raadplegen URL. ",(0,a.kt)("strong",{parentName:"p"},"Het is dan de taak van de server deze URL te gebruiken om een bepaalde resource op te zoeken.")," Voor deze vorm van routering is niet noodzakelijk een specifiek framework vereist. Bovendien downloadt de gebruiker enkel de pagina's die hij/zij daadwerkelijk wil zien. Daar tegenover staat dat routering enkel mogelijk is zo lang de gebruiker verbonden blijft met het Internet. Ook kost het tijd om telkens een request te versturen en te wachten op een response."),(0,a.kt)("h3",{id:"routering-in-single-page-applicaties"},"Routering in single-page applicaties"),(0,a.kt)("p",null,"Een nieuwere vorm van routering, die we aantreffen in single-page applicaties, is ",(0,a.kt)("strong",{parentName:"p"},"client-side routering"),". Bij gebruik van client-side routering beschikt de client vanaf het opstarten van de applicatie over meerdere (applicatie)pagina's. ",(0,a.kt)("strong",{parentName:"p"},"Gebruik van een link binnen de applicatie zorgt er dan niet voor dat er opnieuw een HTTP request plaatsvindt.")," In plaats daarvan wordt door de applicatie zelf bepaald welke (applicatie)pagina moet worden getoond. Hierbij wordt g\xe9\xe9n nieuw HTML-bestand gedownload."),(0,a.kt)("p",null,"Omdat client-side routering geen extra netwerkverkeer vereist, kan deze vorm ook toegepast worden wanneer de gebruiker niet verbonden is met het Internet. Zo lang de opgevraagde pagina's al in de applicatie aanwezig zijn, is er geen probleem. Bovendien kan deze vorm van routering responsiever aanvoelen, omdat het tijd kost een request te versturen en op een response te wachten."),(0,a.kt)("h2",{id:"react-router-1"},"React router"),(0,a.kt)("p",null,"Om client-side routering toe te passen, moet de app zelf over de nodige logica beschikken om URL's om te zetten naar pagina's. Deze logica hoef je als applicatieprogrammeur zelf niet te verzinnen. In plaats daarvan kan je gebruik maken van de bibliotheek ",(0,a.kt)("strong",{parentName:"p"},"React Router"),". Deze ondersteunt alle gebruikelijke manieren om URL's te vertalen naar pagina's."),(0,a.kt)("h3",{id:"installatie"},"Installatie"),(0,a.kt)("p",null,"Omdat React Router een externe bibliotheek is, moet je deze eerst installeren. Hiervoor gebruik je in de root directory van je React project volgend commando:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm  install --save react-router-dom@6\n")),(0,a.kt)("p",null,"Ondersteuning voor TypeScript is in deze versie ingebouwd, dus de types hoef je niet apart te installeren."),(0,a.kt)("p",null,"Op het moment van schrijven is de recentste versie van React Router versie 6.3.0. Nieuwere versies die ook beginnen met het cijfer 6 zouden zonder problemen moeten werken. Daarom eindigt bovenstaand commando op ",(0,a.kt)("inlineCode",{parentName:"p"},"@6"),". "),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Als versie 7 of hoger verschenen is op het moment dat je deze leerstof raadpleegt, moet je toch versie 6 gebruiken.")),(0,a.kt)("h3",{id:"voorbeeld"},"Voorbeeld"),(0,a.kt)("p",null,"Om te zien hoe je React Router gebruikt, bekijken we een voorbeeld. Dit voorbeeld heeft een aantal pagina's en een gedeelde layout die op elke pagina getoond wordt. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react-router", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react-router",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";\nimport styles from "./App.module.css";\n\nconst Root = () => {\n    return (\n        <div className={styles.container}>\n            <div className={styles.head}>Header</div>\n            <div className={styles.nav}>\n                <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/" >Home</NavLink>\n                <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="page1">Page 1</NavLink>\n                <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="page2">Page 2</NavLink>\n\n            </div>\n            <div className={styles.content}>\n                <Outlet/>\n            </div>\n            <div className={styles.footer}>\n                Footer\n            </div>\n        </div>\n    );\n}\n\nconst Home = () => {\n    return (\n        <div>This is the home page!</div>\n    );\n}\n\nconst Page1 = () => {\n    return (\n        <div>Page 1</div>\n    );\n}\n\nconst Page2 = () => {\n    return (\n        <div>Page 2</div>\n    );\n}\n\n\nconst App = () => {\n    const router = createBrowserRouter([\n        {\n            path: "/",\n            element: <Root/>,\n            children: [\n                {\n                    path: "",\n                    element: <Home/>\n                },\n                {\n                    path: "page1",\n                    element: <Page1/>\n                },\n                {\n                    path: "page2",\n                    element: <Page2/>\n                }\n            ]\n        }\n    ]);\n\n    return (\n        <div>\n            <RouterProvider router={router} />\n        </div>\n    )\n}\n\nexport default App;  \n')),(0,a.kt)("p",null,"Het eerst ding dat we moeten doen is een Browser Router aanmaken en onze eerste route configureren. Dit zal client-side routering mogelijk maken voor onze webapplicatie."),(0,a.kt)("p",null,"Dit doen we aan de hand van de ",(0,a.kt)("inlineCode",{parentName:"p"},"createBrowserRouter")," functie. Deze functie heeft als argument een array van routes. Deze routes zijn van het type ",(0,a.kt)("inlineCode",{parentName:"p"},"RouteObject"),". Deze ",(0,a.kt)("inlineCode",{parentName:"p"},"RouteObject")," heeft een aantal properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path"),": de URL waarop de route moet reageren"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"element"),": het element dat moet worden gerenderd wanneer de route wordt geactiveerd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"children"),": een array van ",(0,a.kt)("inlineCode",{parentName:"li"},"RouteObject")," die de subroutes van de huidige route bevat"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"Het object dat teruggegeven wordt door de ",(0,a.kt)("inlineCode",{parentName:"p"},"createBrowserRouter")," functie moeten we meegeven aan de ",(0,a.kt)("inlineCode",{parentName:"p"},"RouterProvider")," component. "),(0,a.kt)("p",null,"Als je de code bekijkt, zie je dat we een ",(0,a.kt)("inlineCode",{parentName:"p"},"Root")," component hebben gemaakt. Deze component bevat de basis structuur van onze webapplicatie. Deze structuur bestaat uit een header, een navigatiebalk, een content gedeelte en een footer. Deze component bevat ook de ",(0,a.kt)("inlineCode",{parentName:"p"},"NavLink")," componenten. Deze componenten zorgen ervoor dat de gebruiker kan navigeren tussen de verschillende pagina's van onze webapplicatie."),(0,a.kt)("p",null,"Het ",(0,a.kt)("inlineCode",{parentName:"p"},"Root")," component bevat ook een ",(0,a.kt)("inlineCode",{parentName:"p"},"Outlet"),' component. Dit is een component die de inhoud van de pagina zal renderen van de child route die geactiveerd is. Surft de gebruiker naar de "/" route, dan zal de ',(0,a.kt)("inlineCode",{parentName:"p"},"Home"),' component gerenderd worden. Surft de gebruiker naar de "/page1" route, dan zal de ',(0,a.kt)("inlineCode",{parentName:"p"},"Page1")," component gerenderd worden, enzovoort."),(0,a.kt)("h3",{id:"links"},"Links"),(0,a.kt)("p",null,"Er zijn twee verschillende manieren om links te maken in React Router. De eerste manier is door gebruik te maken van de ",(0,a.kt)("inlineCode",{parentName:"p"},"Link")," component. Deze component heeft als enige property de ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," property. Deze property bevat de URL waar de gebruiker naar toe moet navigeren wanneer hij op de link klikt. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'<Link to="/page1">Page 1</Link>\n')),(0,a.kt)("p",null,"Een tweede manier om links te maken is door gebruik te maken van de ",(0,a.kt)("inlineCode",{parentName:"p"},"NavLink")," component. Deze component heeft dezelfde properties als de ",(0,a.kt)("inlineCode",{parentName:"p"},"Link")," component. Daarnaast kan je ook een functie meegeven aan de ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," property. Deze bevat een object met een ",(0,a.kt)("inlineCode",{parentName:"p"},"isActive")," property. Deze property bevat een boolean die aangeeft of de link geactiveerd is of niet. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'<NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/">Home</NavLink>\n')),(0,a.kt)("h3",{id:"ontbrekende-paginas-afhandelen"},"Ontbrekende pagina's afhandelen"),(0,a.kt)("p",null,"Als de gebruiker een URL gebruikt die niet naar een geldige pagina leidt, wordt er een algemene error pagina. Dat is niet gebruiksvriendelijk. Het is beter een pagina te voorzien die de gebruiker op de hoogte stelt dat het ingevoerde adres niet bestaat. Dit kan je doen door een route te voorzien met een ",(0,a.kt)("strong",{parentName:"p"},"wildcard")," te voorzien. Als je dan een component genaamd ",(0,a.kt)("inlineCode",{parentName:"p"},"PageNotFound")," hebt, kan je de volgende route toevoegen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    path: "*",\n    element: <PageNotFound/>\n}\n')),(0,a.kt)("p",null,"Omdat deze route zo algemeen is, zal ze enkel matchen wanneer er geen betere match gevonden wordt."),(0,a.kt)("h3",{id:"url-parameters"},"URL parameters"),(0,a.kt)("p",null,"Tot nu toe hebben we altijd routes gebruikt die exacte paden voorstellen. Soms wil je ook aan de hand van de url bepaalde parameters meegeven. Dat kan bijvoorbeeld een ID zijn: een uniek stukje informatie dat verwijst naar \xe9\xe9n specifieke user, \xe9\xe9n bestelling, \xe9\xe9n event op de kalender,... Als deze zaken voortdurend worden toegevoegd aan het systeem, is het niet mogelijk een route per user, per bestelling of per event te voorzien. Het is echter wel mogelijk een URL zoals ",(0,a.kt)("inlineCode",{parentName:"p"},"/detail/:id")," toe te laten waarbij de ",(0,a.kt)("inlineCode",{parentName:"p"},":id")," een ",(0,a.kt)("strong",{parentName:"p"},"parameter")," is: een algemene plaatshouder in de URL waaraan een concrete waarde gegeven kan worden. Zo kan bijvoorbeeld ",(0,a.kt)("inlineCode",{parentName:"p"},"/detail/1")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"/detail/2")," gebruikt worden, waarbij in beide gevallen dezelfde component wordt gerenderd, maar met andere data."),(0,a.kt)("p",null,"Om dit te laten werken, moet de applicatie de precieze waarde kunnen opvragen die de parameter heeft gekregen. Dit kan door middel van de ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"useParams"))," hook. Deze staat je toe de URL parameters op te vragen die gebruikt zijn om naar de huidige pagina te navigeren."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react-router", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react-router",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import { useParams,  Outlet, createBrowserRouter, RouterProvider, Route, NavLink,Link } from "react-router-dom";\nimport "./App.css";\n//hide-start\nconst Root = () => {\n    return (\n        <div className="container">\n            <div className="head">Header</div>\n            <div className="nav">\n                <NavLink className={({isActive}) => isActive ? "activeNavLink" : "navLink"} to="/" >Home</NavLink>\n            </div>\n            <div className="content">\n                <Outlet/>\n            </div>\n            <div className="footer">\n                Footer\n            </div>\n        </div>\n    );\n}\n//hide-end\nconst Home = () => {\n    return (\n        <div>\n            <ul>\n                <li><Link to="/detail/1">Detail 1</Link></li>\n                <li><Link to="/detail/2">Detail 2</Link></li>\n                <li><Link to="/detail/3">Detail 3</Link></li>\n            </ul>\n        </div>\n    );\n}\n\nconst Detail = () => {\n    let { id } = useParams();\n\n    return (\n        <div>Detail {id}</div>\n    );\n}\n\n\nconst App = () => {\n    const router = createBrowserRouter([\n        {\n            path: "/",\n            element: <Root/>,\n            children: [\n                {\n                    path: "",\n                    element: <Home/>\n                },\n                {\n                    path: "detail/:id",\n                    element: <Detail/>\n                }\n            ]\n        }\n    ]);\n\n    return (\n        <div>\n            <RouterProvider router={router} />\n        </div>\n    )\n}\n\nexport default App; \n')),(0,a.kt)("p",null,"Het object dat je terugkrijgt van ",(0,a.kt)("inlineCode",{parentName:"p"},"useParams")," staat je toe een waarde op te zoeken voor om het even welke key. Er treedt dus geen compilatiefout op als je in TypeScript een parameter probeert te raadplegen die niet voorzien is. Je krijgt gewoon ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," terug."),(0,a.kt)("h1",{id:"usenavigate"},"useNavigate"),(0,a.kt)("p",null,"De ",(0,a.kt)("inlineCode",{parentName:"p"},"useNavigate")," hook is een hook die je toelaat te navigeren naar een andere pagina in je applicatie aan de hand van JavaScript code. Dit kan handig zijn als"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react-router", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react-router",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'const Home = () => {\n    const navigate = useNavigate();\n\n    return (\n        <div>\n            <button onClick={() => navigate("/detail/1")}>Detail 1</button>\n            <button onClick={() => navigate("/detail/2")}>Detail 2</button>\n            <button onClick={() => navigate("/detail/3")}>Detail 3</button>\n        </div>\n    );\n}\n\n# Meer weten\n- https://reactrouter.com/en/6.4.3\n')))}u.isMDXComponent=!0}}]);