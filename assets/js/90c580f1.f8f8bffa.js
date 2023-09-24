"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[3510],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,k=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:2},i="API Routing",s={unversionedId:"wf-course/advanced/nextjs/api-routing",id:"wf-course/advanced/nextjs/api-routing",title:"API Routing",description:"Tot nu toe hebben we altijd gezien we data ophalen uit een externe API met behulp van de fetch API. Soms is het niet aangewezen om rechstreeks een externe API aan te roepen vanuit de client. Bijvoorbeeld als je een API hebt die gebruik maakt van een secret key. Deze key wil je niet zomaar blootstellen aan de client. Of bijvoorbeeld als je applicatie moet gebruik maken van een database. De client kan nooit rechtstreeks communiceren met een database. De client moet altijd communiceren met een server die op zijn beurt communiceert met de database.",source:"@site/docs/wf-course/advanced/nextjs/api-routing.md",sourceDirName:"wf-course/advanced/nextjs",slug:"/wf-course/advanced/nextjs/api-routing",permalink:"/webframeworks-cursus/wf-course/advanced/nextjs/api-routing",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"wfCourse",previous:{title:"Routing",permalink:"/webframeworks-cursus/wf-course/advanced/nextjs/routing"},next:{title:"Rendering",permalink:"/webframeworks-cursus/wf-course/advanced/nextjs/rendering/"}},l={},p=[{value:"API routes aanmaken",id:"api-routes-aanmaken",level:2},{value:"Verschillende HTTP methodes",id:"verschillende-http-methodes",level:2},{value:"Request helpers",id:"request-helpers",level:2},{value:"Response helpers",id:"response-helpers",level:2},{value:"Dynamische API routes",id:"dynamische-api-routes",level:2}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-routing"},"API Routing"),(0,r.kt)("p",null,"Tot nu toe hebben we altijd gezien we data ophalen uit een externe API met behulp van de ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API. Soms is het niet aangewezen om rechstreeks een externe API aan te roepen vanuit de client. Bijvoorbeeld als je een API hebt die gebruik maakt van een secret key. Deze key wil je niet zomaar blootstellen aan de client. Of bijvoorbeeld als je applicatie moet gebruik maken van een database. De client kan nooit rechtstreeks communiceren met een database. De client moet altijd communiceren met een server die op zijn beurt communiceert met de database."),(0,r.kt)("p",null,"In plaats van een aparte API server te maken (met bijvoorbeeld express.js), kan je ook gebruik maken van de API routing functionaliteit van Next.js. Deze functionaliteit laat je toe om een API te maken die draait op dezelfde server als je applicatie."),(0,r.kt)("h2",{id:"api-routes-aanmaken"},"API routes aanmaken"),(0,r.kt)("p",null,"Het aanmaken van API routes is zeer gelijkaardig aan het aanmaken van pagina's. Je maakt een bestand aan in de ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/api")," folder. We kunnen bijvoorbeeld een bestand ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.ts")," aanmaken met de volgende inhoud:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { NextApiRequest, NextApiResponse } from 'next'\n \ntype ResponseData = {\n  message: string\n}\n \nconst handler = (\n  req: NextApiRequest,\n  res: NextApiResponse<ResponseData>\n) => {\n  res.status(200).json({ message: 'Hello from Next.js!' })\n}\n\nexport handler;\n")),(0,r.kt)("p",null,"Deze code zorgt ervoor dat je een API hebt die je kan bereiken op ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/api/hello"),". Deze geeft een status code ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," terug en een JSON object met een ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," property. "),(0,r.kt)("p",null,"Interessant om te weten is dat de API altijd beschikbaar is op hetzelfde domein als de rest van de applicatie wat ervoor zorgt dat je geen problemen hebt met CORS. Heb je een API die op een ander domein draait en stricte CORS policies heeft dan kan je op die manier een proxy API maken die wel toegankelijk is vanuit je applicatie. "),(0,r.kt)("h2",{id:"verschillende-http-methodes"},"Verschillende HTTP methodes"),(0,r.kt)("p",null,"Je kan niet zoals in express aanduiden welke HTTP methode je wil gebruiken voor een bepaalde route. Elke request met een bepaalde HTTP methode zal terecht komen in de handler. Het is aan jou om te bepalen wat je doet met de request. Je kan bijvoorbeeld gebruik maken van een ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement om te bepalen wat je doet met een bepaalde HTTP methode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { NextApiRequest, NextApiResponse } from 'next'\n\ntype ResponseData = {\n  message: string\n}\n\nconst handler = (\n  req: NextApiRequest,\n  res: NextApiResponse<ResponseData>\n) => {\n  if (req.method === 'GET') {\n    res.status(200).json({ message: 'Hello from Next.js!' })\n  } else if (req.method === 'POST') {\n    res.status(200).json({ message: 'Hello from Next.js!' })\n  } else {\n    res.status(405).json({ message: 'Method not allowed' })\n  }\n}\n\nexport default handler;\n")),(0,r.kt)("h2",{id:"request-helpers"},"Request helpers"),(0,r.kt)("p",null,"Next.js biedt een aantal handige helpers aan om informatie op te halen uit de request. Deze helpers zijn beschikbaar op de ",(0,r.kt)("inlineCode",{parentName:"p"},"req")," parameter van de handler."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.query"),": Een object met alle query parameters. Bijvoorbeeld ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/api/hello?name=John")," zal een object ",(0,r.kt)("inlineCode",{parentName:"li"},"{ name: 'John' }")," opleveren."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.body"),": Een object met de body van de request. Deze is enkel beschikbaar als de request een body heeft. Bijvoorbeeld bij een ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req.cookies"),": Een object met alle cookies die aanwezig zijn in de request.")),(0,r.kt)("h2",{id:"response-helpers"},"Response helpers"),(0,r.kt)("p",null,"Next.js biedt ook een aantal handige helpers aan om een response te sturen. Deze helpers zijn beschikbaar op de ",(0,r.kt)("inlineCode",{parentName:"p"},"res")," parameter van de handler."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"res.status(code)"),": Zet de status code van de response. Bijvoorbeeld ",(0,r.kt)("inlineCode",{parentName:"li"},"res.status(200)")," zal een status code ",(0,r.kt)("inlineCode",{parentName:"li"},"200")," terugsturen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"res.json(data)"),": Stuurt een JSON object terug als response. Bijvoorbeeld ",(0,r.kt)("inlineCode",{parentName:"li"},"res.json({ message: 'Hello from Next.js!' })")," zal een JSON object ",(0,r.kt)("inlineCode",{parentName:"li"},"{ message: 'Hello from Next.js!' }")," terugsturen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"res.redirect(url)"),": Stuurt een redirect terug als response. Bijvoorbeeld ",(0,r.kt)("inlineCode",{parentName:"li"},"res.redirect('/about')")," zal een redirect naar ",(0,r.kt)("inlineCode",{parentName:"li"},"/about")," terugsturen.")),(0,r.kt)("h2",{id:"dynamische-api-routes"},"Dynamische API routes"),(0,r.kt)("p",null,"Net zoals bij de pagina's kan je ook gebruik maken van dynamische routes. Je kan dit doen door een bestand aan te maken met de naam van de route tussen vierkante haken. Als je een bestand ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/api/post/[pid].ts")," maakt met de volgende inhoud:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { NextApiRequest, NextApiResponse } from 'next'\n \nconst handler = (req: NextApiRequest, res: NextApiResponse) => {\n  const { pid } = req.query\n  res.json({pid: pid})\n}\n\nexport handler;\n")),(0,r.kt)("p",null,"Dan zal je een API hebben die je kan bereiken op ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/api/post/1"),". Deze zal dan ",(0,r.kt)("inlineCode",{parentName:"p"},"Post: 1")," terugsturen als response."))}u.isMDXComponent=!0}}]);