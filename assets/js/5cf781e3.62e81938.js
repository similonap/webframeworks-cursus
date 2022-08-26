"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[970],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(t),u=r,m=g["".concat(s,".").concat(u)]||g[u]||c[u]||i;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3288:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={},o="Single Page Applications",l={unversionedId:"inleiding/single-page-applications",id:"inleiding/single-page-applications",title:"Single Page Applications",description:"In deze cursus gaan we voornamelijk kijken naar het meest gebruikte Single Page Applications framework namelijk React.js (ontwikkeld door Meta). Er zijn nog vele andere SPA-frameworks zoals Angular (door Google) en Vue.js. Deze frameworks laten het toe om eenvoudig uitgebreidere applicaties te maken dan met gewone JavaScript en algemene frameworks zoals jQuery.",source:"@site/docs/inleiding/2-single-page-applications.md",sourceDirName:"inleiding",slug:"/inleiding/single-page-applications",permalink:"/docs/inleiding/single-page-applications",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/inleiding/2-single-page-applications.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web Frameworks",permalink:"/docs/inleiding/web-frameworks"},next:{title:"TypeScript Revisited",permalink:"/docs/typescript-revisited/"}},s={},d=[],p={toc:d};function c(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"single-page-applications"},"Single Page Applications"),(0,r.kt)("p",null,"In deze cursus gaan we voornamelijk kijken naar het meest gebruikte Single Page Applications framework namelijk React.js (ontwikkeld door Meta). Er zijn nog vele andere SPA-frameworks zoals Angular (door Google) en Vue.js. Deze frameworks laten het toe om eenvoudig uitgebreidere applicaties te maken dan met gewone JavaScript en algemene frameworks zoals jQuery."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"React Logo",src:t(3621).Z,width:"600",height:"167"})),(0,r.kt)("p",null,"In het verleden werden pagina's nog volledig opgebouwd op de server zelf. Zo had je bijvoorbeeld PHP of node.js in combinatie met Express. In deze traditionele aanpak bezocht de gebruiker een URL om een pagina in te laden en werd het opbouwen van de pagina voornamelijk op de server zelf gedaan. Voor elke pagina die de gebruiker wou bezoeken, was dus ook een nieuwe GET request nodig. JavaScript werd toen voornamelijk gebruikt voor simpele animaties en interacties of geavanceerde styling die niet met CSS alleen te doen was. Hiervoor was de JavaScript library jQuery uiterst geschikt."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"React Logo",src:t(6090).Z,width:"1590",height:"505"})),(0,r.kt)("p",null,'Bij single page applicaties verloopt de interactie tussen client en server heel anders. De focus wordt verlegd naar de client. De gebruiker bezoekt maar 1 URL en krijgt maar 1 HTML-bestand terug met bijbehorende JavaScript files. Nadat deze allemaal ingeladen zijn wordt de eerste "applicatiepagina" getoond aan de gebruiker. Deze toont hetzelfde soort info dat in de traditionele aanpak op \xe9\xe9n HTML-pagina zou staan, maar ze stemt niet meer overeen met een HTML-bestand. De naam single page application wijst er dus op dat er maar \xe9\xe9n HTML-bestand is. Hij betekent niet dat je website niet opgedeeld kan zijn in applicatiepagina\'s die je via links bereikt.'),(0,r.kt)("p",null,'Merk op dat wij hier een onderscheid maken tussen "HTML-pagina\'s" en "applicatiepagina\'s". Dat wordt niet overal gedaan, maar normaal is duidelijk uit de context wat bedoeld wordt.\nVeranderlijke data wordt niet meteen gedownload. Deze worden volledig via asynchrone API calls (ook "AJAX calls" genoemd) vanuit de client opgevraagd. Als je bijvoorbeeld een lijst van producten zou willen tonen vanuit je SPA, zal de paginastructuur meteen verschijnen, maar zullen de producten zelf iets later inladen. Dit komt omdat de client een API call moet doen om te vragen welke producten er precies zijn.'))}c.isMDXComponent=!0},6090:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/lifecycle-40c9b4a90ea90fe8c099ac8e48404cb7.png"},3621:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/react-3d062da10d8d826b71dd823f4061d1a9.png"}}]);