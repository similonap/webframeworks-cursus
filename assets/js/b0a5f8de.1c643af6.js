"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[4444],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,k=u["".concat(s,".").concat(g)]||u[g]||c[g]||i;return t?r.createElement(k,o(o({ref:n},l),{},{components:t})):r.createElement(k,o({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:3},o="Rendering",d={unversionedId:"wf-course/advanced/nextjs/rendering",id:"wf-course/advanced/nextjs/rendering",title:"Rendering",description:"Client side rendering",source:"@site/docs/wf-course/advanced/nextjs/rendering.md",sourceDirName:"wf-course/advanced/nextjs",slug:"/wf-course/advanced/nextjs/rendering",permalink:"/webframeworks-cursus/wf-course/advanced/nextjs/rendering",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"wfCourse",previous:{title:"API Routing",permalink:"/webframeworks-cursus/wf-course/advanced/nextjs/api-routing"},next:{title:"Context",permalink:"/webframeworks-cursus/wf-course/advanced/context"}},s={},p=[{value:"Client side rendering",id:"client-side-rendering",level:2},{value:"Data ophalen",id:"data-ophalen",level:3},{value:"Server side rendering",id:"server-side-rendering",level:2},{value:"getServerSideProps",id:"getserversideprops",level:3},{value:"GetServerSidePropsContext",id:"getserversidepropscontext",level:3},{value:"Static Site Generation",id:"static-site-generation",level:2},{value:"Static Generation zonder data",id:"static-generation-zonder-data",level:3},{value:"Static Generation met data",id:"static-generation-met-data",level:3},{value:"getStaticProps",id:"getstaticprops",level:4}],l={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rendering"},"Rendering"),(0,a.kt)("h2",{id:"client-side-rendering"},"Client side rendering"),(0,a.kt)("p",null,"Tot nu toe hebben we altijd gebruik gemaakt van client side rendering. Dit wil zeggen dat de applicatie wordt opgebouwd in de browser. De volledige applicatie moet dus eerst gedownload worden door de browser en wordt dan ook volledig uitgevoerd in de browser. Dit heeft als voordeel dat de applicatie heel snel reageert op interacties van de gebruiker. Het nadeel is dat de applicatie pas kan beginnen met laden als de volledige applicatie is gedownload. Dit kan ervoor zorgen dat de gebruiker een lege pagina te zien krijgt als de applicatie nog aan het laden is. Dit is niet ideaal voor de gebruikerservaring. "),(0,a.kt)("p",null,"Nog een groter probleem is dat de applicatie niet of slecht ge\xefndexeerd kan worden door zoekmachines. Als je een applicatie hebt die bijvoorbeeld een lijst van producten toont, dan wil je dat deze lijst ook getoond wordt als iemand zoekt naar een van deze producten. Als je applicatie niet ge\xefndexeerd kan worden, dan zal deze lijst niet getoond worden in de zoekresultaten. Dit is niet ideaal voor de vindbaarheid van je applicatie."),(0,a.kt)("p",null,"Tot nu toe heb je altijd gebruik gemaakt van client side rendering. Dit is de standaard manier van werken in React. "),(0,a.kt)("h3",{id:"data-ophalen"},"Data ophalen"),(0,a.kt)("p",null,"In een client side rendered applicatie wordt de data opgehaald in de browser. Dit kan je doen met behulp van de ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," API. Deze API zorgt ervoor dat je data kan ophalen van een server. Je kan bijvoorbeeld de volgende code gebruiken om data op te halen van de ",(0,a.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/"},"JSON Placeholder API"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'interface Post {\n  id: number; \n  userId: number;\n  title: string;\n  body: string;\n};\n\nconst Posts = () => {\n  const [posts, setPosts] = useState<Post[]>([]);\n\n  useEffect(() => {\n    fetch("https://jsonplaceholder.typicode.com/posts")\n      .then((response) => response.json())\n      .then((data) => setPosts(data));\n  }, []);\n\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n};\n\nexport default Posts;\n')),(0,a.kt)("p",null,"Bij een hele trage internetverbinding kan het zijn dat de data niet meteen wordt opgehaald. Dit kan ervoor zorgen dat de gebruiker een lege pagina te zien krijgt. Dit is niet ideaal voor de gebruikerservaring."),(0,a.kt)("h2",{id:"server-side-rendering"},"Server side rendering"),(0,a.kt)("p",null,"Om de gebruikerservaring te verbeteren kan je gebruik maken van server side rendering. Dit wil zeggen dat de pagina wordt opgebouwd op de server en dat de volledige pagina wordt doorgestuurd naar de browser. De browser moet dus niet meer wachten tot de volledige applicatie is gedownload. De gebruiker krijgt meteen de pagina te zien. Dit zorgt voor een betere gebruikerservaring."),(0,a.kt)("p",null,"Een ander voordeel is dat de pagina ge\xefndexeerd kan worden door zoekmachines. De pagina wordt namelijk opgebouwd op de server en wordt dan doorgestuurd naar de browser. De browser krijgt dus meteen de volledige pagina te zien. Dit is ideaal voor zoekmachines."),(0,a.kt)("h3",{id:"getserversideprops"},"getServerSideProps"),(0,a.kt)("p",null,"Wil je in het voorbeeld van hierboven gebruik maken van server side rendering, dan kan je gebruik maken van de ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," functie. Deze functie wordt uitgevoerd op de server en zorgt ervoor dat je data kan ophalen van een server. Als return value moet je een object teruggeven met een ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," property. Deze property bevat de data die je wil doorgeven aan je component. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'interface Post {\n  id: number; \n  userId: number;\n  title: string;\n  body: string;\n};\n\nexport const getServerSideProps = async () => {\n    const response = await fetch("https://jsonplaceholder.typicode.com/posts");\n    const posts = await response.json();\n    \n    return {\n        props: {\n            posts: posts,\n        },\n    };\n};\n\nconst Posts = ({ posts }: { posts: Post[] }) => {\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n};\n\nexport default Posts;\n')),(0,a.kt)("h3",{id:"getserversidepropscontext"},"GetServerSidePropsContext"),(0,a.kt)("p",null,"De ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," functie krijgt een ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," parameter mee. Deze parameter bevat een aantal handige properties. De belangrijkste property is de ",(0,a.kt)("inlineCode",{parentName:"p"},"req")," property. Deze property bevat de request die binnenkomt op de server. Je kan deze gebruiken om bijvoorbeeld de cookies op te halen. In het volgende voorbeeld tonen we een aantal handige properties van de ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { GetServerSidePropsContext } from \"next\";\n\nexport const getServerSideProps = async (context: GetServerSidePropsContext) => {\n  return {\n    props: {\n      ipAddress: context.req.headers['x-forwarded-for'] || context.req.socket.remoteAddress,\n      cookies: JSON.stringify(context.req.cookies),\n      userAgent: context.req.headers['user-agent'],\n      query: JSON.stringify(context.query),\n    },\n  };\n};\n\nconst RequestInfo = ({ ipAddress, cookies, userAgent, query }: { ipAddress: string, cookies: string, userAgent: string, query: string }) => {\n  return (\n    <>\n      <main>\n        <p>IP Address: {ipAddress}</p>\n        <p>Cookies: {cookies}</p>\n        <p>User Agent: {userAgent}</p>\n        <p>Query: {query}</p>\n      </main>\n    </>\n  )\n}\n\nexport default RequestInfo;\n")),(0,a.kt)("h2",{id:"static-site-generation"},"Static Site Generation"),(0,a.kt)("p",null,"Bij static site generation wordt de pagina opgebouwd tijdens het runnen van het ",(0,a.kt)("inlineCode",{parentName:"p"},"next build")," commando. Na het builden worden alle pagina's opgeslagen als statische HTML bestanden. Deze HTML paginas worden dan doorgestuurd naar de browser. Alle data die je wil gebruiken in je applicatie moet je dus ophalen tijdens het builden van de applicatie en kan in principe niet meer veranderen. Dit zorgt ervoor dat de applicatie heel snel kan laden. Je kan dit soort applicaties ook hosten op een CDN, zo kan je de pagina nog sneller aan de gebruiker tonen. Wel opgelet, als de data verandert, dan moet je de applicatie opnieuw builden."),(0,a.kt)("h3",{id:"static-generation-zonder-data"},"Static Generation zonder data"),(0,a.kt)("p",null,"Elke pagina die geen gebruik maakt van externe data wordt in next.js by default gebuild als een statische pagina:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const About = () => {\n  return (\n    <>\n      <main>\n        Hello world!\n      </main>\n    </>\n  )\n}\n\nexport default About;\n")),(0,a.kt)("p",null,"Deze pagina wordt gebuild als een statische pagina. Je kan dit controleren door de ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build")," commando uit te voeren. Je krijgt daar een lijst te zien van alle pagina's die gebuild worden. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Route (pages)                              Size     First Load JS\n\u250c \u25cb /                                      271 B          75.9 kB\n\u251c   /_app                                  0 B            75.6 kB\n\u251c \u25cb /404                                   182 B          75.8 kB\n\u251c \u25cb /about                                 270 B          75.9 kB\n\u2514 \u03bb /requestInfo                           371 B            76 kB\n+ First Load JS shared by all              76.3 kB\n  \u251c chunks/framework-63157d71ad419e09.js   45.2 kB\n  \u251c chunks/main-c6c319de9f7d0316.js        29.4 kB\n  \u251c chunks/pages/_app-5fbdfbcdfb555d2f.js  296 B\n  \u251c chunks/webpack-8fa1640cc84ba8fe.js     750 B\n  \u2514 css/876d048b5dab7c28.css               706 B\n\n\u03bb  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)\n\u25cb  (Static)  automatically rendered as static HTML (uses no initial props)\n")),(0,a.kt)("p",null,"Je ziet hierboven dat alle pagina's buiten de ",(0,a.kt)("inlineCode",{parentName:"p"},"requestInfo")," pagina worden gebuild als statische pagina's. Je kan deze pagina's ook bekijken in de ",(0,a.kt)("inlineCode",{parentName:"p"},".next/server/pages")," directory. "),(0,a.kt)("h3",{id:"static-generation-met-data"},"Static Generation met data"),(0,a.kt)("h4",{id:"getstaticprops"},"getStaticProps"),(0,a.kt)("p",null,"Je kan ook statische pagina's maken die gebruik maken van externe data. Het build commando zal dan de externe data tijdens het bouwen verzamelen en hiermee statische html pagina's genereren. Je kan dit doen door gebruik te maken van de ",(0,a.kt)("inlineCode",{parentName:"p"},"getStaticProps")," functie. Deze lijkt heel hard op de ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," functie in de zin dat je ook een object moet returnen met een ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," property. Het verschil is dat deze functie niet wordt uitgevoerd op de server, maar tijdens het builden van de applicatie. "),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Als je de applicatie in development mode runt, dan zal de applicatie niet op voorhand gebuild worden. Alle statische pagina's worden toch opgebouwd tijdens het runnen van de applicatie. Het is alsof het toch gebruik maakt van ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"getServerSideProps"),".")),(0,a.kt)("p",null,"We kunnen teruggrijpen naar het Posts voorbeeld van hierboven. We kunnen dit voorbeeld aanpassen zodat we gebruik maken van static generation. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'export const getStaticProps = async () => {\n    const response = await fetch("https://jsonplaceholder.typicode.com/posts");\n    const posts = await response.json();\n\n    return {\n        props: {\n            posts: posts,\n        },\n    };\n};\n')),(0,a.kt)("p",null,"Je kan dit controleren door de ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build")," commando uit te voeren. Je krijgt daar een lijst te zien van alle pagina's die gebuild worden. Ook kan je de ",(0,a.kt)("inlineCode",{parentName:"p"},".next/server/pages")," directory bekijken. Je zal zien dat de ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," pagina wordt gebuild als een statische pagina."))}c.isMDXComponent=!0}}]);