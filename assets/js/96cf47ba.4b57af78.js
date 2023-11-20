"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[3577],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>g});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),p=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,v=c["".concat(d,".").concat(g)]||c[g]||u[g]||s;return n?t.createElement(v,a(a({ref:r},l),{},{components:n})):t.createElement(v,a({ref:r},l))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=c;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8973:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=n(7462),o=(n(7294),n(3905));const s={sidebar_position:2},a="Server side rendering",i={unversionedId:"wf-course/advanced/nextjs/rendering/ssr",id:"wf-course/advanced/nextjs/rendering/ssr",title:"Server side rendering",description:"Om de gebruikerservaring te verbeteren kan je gebruik maken van server side rendering. Dit wil zeggen dat de pagina wordt opgebouwd op de server en dat de volledige pagina wordt doorgestuurd naar de browser. De browser moet dus niet meer wachten tot de volledige applicatie is gedownload. De gebruiker krijgt meteen de pagina te zien. Dit zorgt voor een betere gebruikerservaring.",source:"@site/docs/wf-course/advanced/nextjs/rendering/ssr.md",sourceDirName:"wf-course/advanced/nextjs/rendering",slug:"/wf-course/advanced/nextjs/rendering/ssr",permalink:"/webframeworks-cursus/wf-course/advanced/nextjs/rendering/ssr",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"wfCourse",previous:{title:"Client side rendering",permalink:"/webframeworks-cursus/wf-course/advanced/nextjs/rendering/csr"},next:{title:"Static Site Generation",permalink:"/webframeworks-cursus/wf-course/advanced/nextjs/rendering/ssg"}},d={},p=[{value:"getServerSideProps",id:"getserversideprops",level:2},{value:"GetServerSidePropsContext",id:"getserversidepropscontext",level:2},{value:"Not Found",id:"not-found",level:2},{value:"Redirect",id:"redirect",level:3}],l={toc:p};function u(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"server-side-rendering"},"Server side rendering"),(0,o.kt)("p",null,"Om de gebruikerservaring te verbeteren kan je gebruik maken van server side rendering. Dit wil zeggen dat de pagina wordt opgebouwd op de server en dat de volledige pagina wordt doorgestuurd naar de browser. De browser moet dus niet meer wachten tot de volledige applicatie is gedownload. De gebruiker krijgt meteen de pagina te zien. Dit zorgt voor een betere gebruikerservaring."),(0,o.kt)("p",null,"Een ander voordeel is dat de pagina ge\xefndexeerd kan worden door zoekmachines. De pagina wordt namelijk opgebouwd op de server en wordt dan doorgestuurd naar de browser. De browser krijgt dus meteen de volledige pagina te zien. Dit is ideaal voor zoekmachines."),(0,o.kt)("h2",{id:"getserversideprops"},"getServerSideProps"),(0,o.kt)("p",null,"Wil je in het voorbeeld van hierboven gebruik maken van server side rendering, dan kan je gebruik maken van de ",(0,o.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," functie. Deze functie wordt uitgevoerd op de server en zorgt ervoor dat je data kan ophalen van een server. Als return value moet je een object teruggeven met een ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," property. Deze property bevat de data die je wil doorgeven aan je component. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { GetServerSideProps } from "next";\n\ninterface Post {\n  id: number; \n  userId: number;\n  title: string;\n  body: string;\n};\n\ninterface PostsProps {\n  posts: Post[]\n}\n\nexport const getServerSideProps : GetServerSideProps<PostsProps> = async () => {\n    const response = await fetch("https://jsonplaceholder.typicode.com/posts");\n    const posts = await response.json();\n    \n    return {\n        props: {\n            posts: posts\n        },\n    };\n};\n\nconst Posts = ({ posts }: { posts: Post[] }) => {\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n};\n\nexport default Posts;\n')),(0,o.kt)("h2",{id:"getserversidepropscontext"},"GetServerSidePropsContext"),(0,o.kt)("p",null,"De ",(0,o.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," functie krijgt een ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," parameter mee. Deze parameter bevat een aantal handige properties. De belangrijkste property is de ",(0,o.kt)("inlineCode",{parentName:"p"},"req")," property. Deze property bevat de request die binnenkomt op de server. Je kan deze gebruiken om bijvoorbeeld de cookies op te halen. In het volgende voorbeeld tonen we een aantal handige properties van de ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { GetServerSideProps } from \"next\";\n\ninterface RequestInfoProps {\n  ipAddress: string; \n  cookies: string;\n  userAgent: string;\n  query: string\n}\n\nexport const getServerSideProps : GetServerSideProps<RequestInfoProps> = async (context) => {\n  return {\n    props: {\n      ipAddress: (context.req.headers['x-forwarded-for'] || context.req.socket.remoteAddress) as string,\n      cookies: JSON.stringify(context.req.cookies),\n      userAgent: context.req.headers['user-agent'] as string,\n      query: JSON.stringify(context.query),\n    },\n  };\n};\n\nconst RequestInfo = ({ ipAddress, cookies, userAgent, query }: RequestInfoProps) => {\n  return (\n    <>\n      <main>\n        <p>IP Address: {ipAddress}</p>\n        <p>Cookies: {cookies}</p>\n        <p>User Agent: {userAgent}</p>\n        <p>Query: {query}</p>\n      </main>\n    </>\n  )\n}\n\nexport default RequestInfo;\n")),(0,o.kt)("h2",{id:"not-found"},"Not Found"),(0,o.kt)("p",null,"Als je in je getServerSideProps functie een 404 not found wil teruggeven, dan kan je dit doen door een ",(0,o.kt)("inlineCode",{parentName:"p"},"notFound")," property toe te voegen aan het return object. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export const getServerSideProps : GetServerSideProps<PostsProps> = async (context) => {\n    const id = parseInt(context.params?.id as string);\n    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);\n    const post = await response.json();\n    \n    if (!post) {\n        return {\n            notFound: true,\n        };\n    } else {\n      return {\n          props: {\n              post\n          },\n      };\n    }\n};\n")),(0,o.kt)("h3",{id:"redirect"},"Redirect"),(0,o.kt)("p",null,"Soms wil je de gebruiker doorsturen naar een andere pagina. Bijvoorbeeld als de gebruiker niet is ingelogd of een andere reden. Dit kan je doen door een ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect")," property toe te voegen aan het return object. "),(0,o.kt)("p",null,"Als je bijvoorbeeld ook wil directen naar de pagina ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts")," als de post niet gevonden is, dan kan je dit doen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'return {\n  redirect: {\n    destination: "/posts",\n    permanent: false,\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"permanent")," geeft aan of het een permanente redirect is. Dit is standaard ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."))}u.isMDXComponent=!0}}]);