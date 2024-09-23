"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[2225],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>k});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(t),k=o,g=m["".concat(p,".").concat(k)]||m[k]||u[k]||r;return t?a.createElement(g,i(i({ref:n},l),{},{components:t})):a.createElement(g,i({ref:n},l))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:1},i="Routing",s={unversionedId:"wf-course/nextjs/routing",id:"wf-course/nextjs/routing",title:"Routing",description:"Tot nu toe bestonden onze applicaties uit \xe9\xe9n enkele pagina. Dit is niet erg handig als je een volledige website wil maken. Daarom is er een manier nodig om meerdere pagina's te maken. Dit kan met behulp van een router. Een router is een stukje code dat bepaalt welke pagina getoond moet worden op basis van de URL.",source:"@site/docs/wf-course/nextjs/routing.md",sourceDirName:"wf-course/nextjs",slug:"/wf-course/nextjs/routing",permalink:"/webframeworks-cursus/wf-course/nextjs/routing",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"wfCourse",previous:{title:"Next.js",permalink:"/webframeworks-cursus/wf-course/nextjs/"},next:{title:"API Routing",permalink:"/webframeworks-cursus/wf-course/nextjs/api-routing"}},p={},d=[{value:"File-system based router",id:"file-system-based-router",level:2},{value:"Index route",id:"index-route",level:3},{value:"Dynamische routes",id:"dynamische-routes",level:3},{value:"Linking and Navigating",id:"linking-and-navigating",level:3},{value:"Custom App",id:"custom-app",level:2},{value:"Custom Document",id:"custom-document",level:2},{value:"Custom error pages",id:"custom-error-pages",level:2}],l={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"routing"},"Routing"),(0,o.kt)("p",null,"Tot nu toe bestonden onze applicaties uit \xe9\xe9n enkele pagina. Dit is niet erg handig als je een volledige website wil maken. Daarom is er een manier nodig om meerdere pagina's te maken. Dit kan met behulp van een router. Een router is een stukje code dat bepaalt welke pagina getoond moet worden op basis van de URL. "),(0,o.kt)("p",null,"Next.js biedt twee verschillende routers aan: de ",(0,o.kt)("inlineCode",{parentName:"p"},"Pages Router")," en de ",(0,o.kt)("inlineCode",{parentName:"p"},"App Router"),". In deze cursus gaan we enkel gebruik maken van de ",(0,o.kt)("inlineCode",{parentName:"p"},"Pages Router"),". Deze is eenvoudiger in gebruik en is voldoende voor de meeste applicaties. Ook wordt de ",(0,o.kt)("inlineCode",{parentName:"p"},"App Router")," nog niet aanbevolen door de officiele React documentatie."),(0,o.kt)("h2",{id:"file-system-based-router"},"File-system based router"),(0,o.kt)("p",null,'Next.js maakt gebruik van een zogenaamde "file-system based" router. Dit betekend dat we geen extra code moeten schrijven om de router te configureren. We moeten enkel een aantal bestanden en directories aanmaken en de router zal automatisch de juiste pagina tonen op basis van het pad.'),(0,o.kt)("p",null,"Als je een nieuw ",(0,o.kt)("inlineCode",{parentName:"p"},"tsx")," bestand aanmaakt in de ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," directory zal dit automatisch een nieuwe pagina worden. Als je bijvoorbeeld een bestand ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/about.tsx")," aanmaakt, dan zal dit bestand getoond worden als je naar ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/about")," surft."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const About = () => {\n  return <div>About</div>;\n}\n\nexport default About;\n")),(0,o.kt)("h3",{id:"index-route"},"Index route"),(0,o.kt)("p",null,"Je kan ook gebruik maken van de ",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")," bestanden om de index route te configureren. Als je bijvoorbeeld de volgende bestanden aanmaakt dan krijg je ook de bijbehorende routes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pages/index.tsx \u2192 /\npages/blog/index.tsx \u2192 /blog\n")),(0,o.kt)("p",null,"Je kan zelfs geneste routes maken:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pages/blog/first-post.tsx \u2192 /blog/first-post\npages/dashboard/settings/username.tsx \u2192 /dashboard/settings/username\n")),(0,o.kt)("h3",{id:"dynamische-routes"},"Dynamische routes"),(0,o.kt)("p",null,"Wil je gebruik maken van dynamische routes. Bijvoorbeeld als je een blog wil maken waarbij de URL van de blogpost de titel of id van de blogpost bevat. Dan kan je gebruik maken van dynamische routes. Je kan dit doen door een bestand aan te maken met de naam van de route tussen vierkante haken. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"pages/posts/[id].jsx \u2192 /posts/1, /posts/2, ...\npages/posts/[id]/index.jsx \u2192 /posts/1, /posts/2, ...\n")),(0,o.kt)("p",null,"Wil je dan in je component gebruik maken van de id, dan kan je dit doen door gebruik te maken van de ",(0,o.kt)("inlineCode",{parentName:"p"},"useRouter")," hook. Deze hook geeft je toegang tot de router en de parameters die je hebt meegegeven in de URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useRouter } from "next/router";\n \nconst Posts = () => {\n  const router = useRouter()\n  return <p>Post: {router.query.id}</p>\n}\n\nexport default Posts;\n')),(0,o.kt)("h3",{id:"linking-and-navigating"},"Linking and Navigating"),(0,o.kt)("p",null,"Om te navigeren tussen de verschillende pagina's kan je gebruik maken van de ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," component. Deze component zorgt ervoor dat de pagina niet opnieuw moet laden als je naar een andere pagina navigeert. Dit zorgt voor een betere gebruikerservaring. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import Link from "next/link"\n\nconst Home = () => {\n  return (\n    <div>\n      <Link href="/about">\n        <a>About</a>\n      </Link>\n    </div>\n  )\n}\n\nexport default Home;\n')),(0,o.kt)("p",null,"Je kan bij de ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," component ook gebruik maken van dynamische routes. Hier gebruik je meestal string interpolation om de juiste URL te genereren."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import Link from "next/link"\n\nconst Home = () => {\n  let pages : string[] = [1,2,3,4,5];\n  return (\n    <div>\n        {pages.map((page) => (\n            <Link href={`/posts/${page}`} key={page}>\n                {page}\n            </Link>\n        ))}\n    </div>\n  )\n}\n\nexport default Home;\n')),(0,o.kt)("p",null,"of je kan ook gebruik maken van een object om de URL te genereren."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Link from \"next/link\"\n\nconst Home = () => {\n  let pages : string[] = [1,2,3,4,5];\n  return (\n    <div>\n        {pages.map((page) => (\n            <Link href={{ pathname: '/posts/[id]', query: { id: page } }} key={page}>\n                {page}\n            </Link>\n        ))}\n    </div>\n  )\n}\n\nexport default Home;\n")),(0,o.kt)("p",null,"via de ",(0,o.kt)("inlineCode",{parentName:"p"},"useRouter")," hook kan je ook navigeren naar een andere pagina zonder gebruik te maken van de ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," component. Dit is handig als je bijvoorbeeld wil navigeren op basis van een event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRouter } from \"next/router\"\n\nconst Home = () => {\n  const router = useRouter()\n  return (\n    <div>\n      <button onClick={() => router.push('/about')}>About</button>\n    </div>\n  )\n}\n\nexport default Home;\n")),(0,o.kt)("p",null,"Interessant om te weten: Next.js zal aan de hand van de links bepaalde pagina's gaan prefetchen. Dit wil zeggen dat de pagina al wordt opgehaald voordat de gebruiker erop klikt. Dit zorgt ervoor dat de pagina sneller zal laden als de gebruiker erop klikt. Dit is standaard ingeschakeld, maar je kan dit uitschakelen door de ",(0,o.kt)("inlineCode",{parentName:"p"},"prefetch")," property op ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," te zetten."),(0,o.kt)("h2",{id:"custom-app"},"Custom App"),(0,o.kt)("p",null,"Als je wil gebruik maken van een ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout")," component die op elke pagina getoond moet worden, dan kan je gebruik maken van de ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom App")," functionaliteit van Next.js. Dit is een component dat je kan aanmaken in ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/_app.tsx"),". Dit component wordt dan gebruikt als de basis van je applicatie. Je kan hier bijvoorbeeld de ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout")," component toevoegen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import type { AppProps } from 'next/app';\nimport Layout from '../components/Layout';\n \nconst MyApp = ({ Component, pageProps }: AppProps) => {\n  return (\n    <Layout>\n        <Component {...pageProps} />\n    <Layout>\n  );\n}\n\nexport default MyApp;\n")),(0,o.kt)("p",null,"met als bijbehorende ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const Layout = ({ children } : {children: ReactElement}) => {\n  return (\n    <div>\n      <h1>Header</h1>\n      {children}\n      <h1>Footer</h1>\n    </div>\n  );\n}\n\nexport default Layout;\n")),(0,o.kt)("p",null,"Deze code zorgt ervoor dat alle pagina's worden omgeven door de ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout")," component. "),(0,o.kt)("h2",{id:"custom-document"},"Custom Document"),(0,o.kt)("p",null,"Als je wil gebruik maken van een custom ",(0,o.kt)("inlineCode",{parentName:"p"},"Document")," dan kan je dit doen door een bestand ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/_document.tsx")," aan te maken. Dit bestand wordt gebruikt om de HTML te genereren. Wil je bijvoorbeeld een custom ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," toevoegen aan je applicatie, dan kan je dit doen door het volgende bestand aan te maken. Je kan hier ook externe CSS of javascript bestanden toevoegen (bv voor fontawesome)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import Document, { Html, Head, Main, NextScript } from \'next/document\'\n\nclass MyDocument extends Document {\n  render() {\n    return (\n      <Html lang="en">\n        <Head>\n          <meta name="description" content="My custom description" />\n        </Head>\n        <body>\n          <Main />\n          <NextScript />\n        </body>\n      </Html>\n    )\n  }\n}\n\nexport default MyDocument;\n')),(0,o.kt)("p",null,"Je ziet hier dat we gebruik maken van het ",(0,o.kt)("inlineCode",{parentName:"p"},"Head")," component. Deze component zorgt ervoor dat de inhoud van de ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," tag wordt aangepast. Je kan hier bijvoorbeeld de ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," van de pagina aanpassen of een ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," tag toevoegen. Je kan dit component ook gebruiken op aparte pagina's om een custom ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," toe te voegen voor die pagina."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Head from 'next/head'\n\nconst About = () => {\n  return (\n    <div>\n      <Head>\n        <title>About</title>\n      </Head>\n      <h1>About</h1>\n    </div>\n  )\n}\n\nexport default About;\n")),(0,o.kt)("h2",{id:"custom-error-pages"},"Custom error pages"),(0,o.kt)("p",null,"Normaal gezien moet je geen gebruik maken van custom error pages. Next.js zal automatisch de juiste error pagina tonen als er iets mis gaat. Wil je toch gebruik maken van een custom error pagina, dan volstaat het een bestand aan te maken met als naam de status code van de error. Bijvoorbeeld ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/404.tsx")," voor een 404 error. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const Custom404 = () => {\n  return <h1>404 - Page Not Found</h1>\n}\n\nexport default Custom404;\n")))}u.isMDXComponent=!0}}]);