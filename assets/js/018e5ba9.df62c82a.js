"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[553],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1},o="Single Page Applications",l={unversionedId:"wf-course/inleiding/single-page-applications",id:"wf-course/inleiding/single-page-applications",title:"Single Page Applications",description:"In deze cursus gaan we voornamelijk kijken naar het meest gebruikte Single Page Applications framework namelijk React.js (ontwikkeld door Meta). Er zijn nog vele andere SPA-frameworks zoals Angular (door Google) en Vue.js. Deze frameworks laten het toe om eenvoudig uitgebreidere applicaties te maken dan met gewone JavaScript en algemene frameworks zoals jQuery.",source:"@site/docs/wf-course/inleiding/single-page-applications.md",sourceDirName:"wf-course/inleiding",slug:"/wf-course/inleiding/single-page-applications",permalink:"/webframeworks-cursus/wf-course/inleiding/single-page-applications",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"wfCourse",previous:{title:"Web Frameworks",permalink:"/webframeworks-cursus/wf-course/inleiding/web-frameworks"},next:{title:"TypeScript Revisited",permalink:"/webframeworks-cursus/wf-course/typescript-revisited/"}},s={},p=[],d={toc:p};function c(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"single-page-applications"},"Single Page Applications"),(0,a.kt)("p",null,"In deze cursus gaan we voornamelijk kijken naar het meest gebruikte Single Page Applications framework namelijk React.js (ontwikkeld door Meta). Er zijn nog vele andere SPA-frameworks zoals Angular (door Google) en Vue.js. Deze frameworks laten het toe om eenvoudig uitgebreidere applicaties te maken dan met gewone JavaScript en algemene frameworks zoals jQuery."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"React Logo",src:t(7166).Z,width:"600",height:"167"})),(0,a.kt)("p",null,"In het verleden werden pagina's nog volledig opgebouwd op de server zelf. Zo had je bijvoorbeeld PHP of node.js in combinatie met Express. In deze traditionele aanpak bezocht de gebruiker een URL om een pagina in te laden en werd het opbouwen van de pagina voornamelijk op de server zelf gedaan. Voor elke pagina die de gebruiker wou bezoeken, was dus ook een nieuwe GET request nodig. JavaScript werd toen voornamelijk gebruikt voor simpele animaties en interacties of geavanceerde styling die niet met CSS alleen te doen was. Hiervoor was de JavaScript library jQuery uiterst geschikt."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"React Logo",src:t(7951).Z,width:"1590",height:"505"})),(0,a.kt)("p",null,'Bij single page applicaties verloopt de interactie tussen client en server heel anders. De focus wordt verlegd naar de client. De gebruiker bezoekt maar 1 URL en krijgt maar 1 HTML-bestand terug met bijbehorende JavaScript files. Nadat deze allemaal ingeladen zijn wordt de eerste "applicatiepagina" getoond aan de gebruiker. Deze toont hetzelfde soort info dat in de traditionele aanpak op \xe9\xe9n HTML-pagina zou staan, maar ze stemt niet meer overeen met een HTML-bestand. De naam single page application wijst er dus op dat er maar \xe9\xe9n HTML-bestand is. Hij betekent niet dat je website niet opgedeeld kan zijn in applicatiepagina\'s die je via links bereikt.'),(0,a.kt)("p",null,'Merk op dat wij hier een onderscheid maken tussen "HTML-pagina\'s" en "applicatiepagina\'s". Dat wordt niet overal gedaan, maar normaal is duidelijk uit de context wat bedoeld wordt.\nVeranderlijke data wordt niet meteen gedownload. Deze worden volledig via asynchrone API calls (ook "AJAX calls" genoemd) vanuit de client opgevraagd. Als je bijvoorbeeld een lijst van producten zou willen tonen vanuit je SPA, zal de paginastructuur meteen verschijnen, maar zullen de producten zelf iets later inladen. Dit komt omdat de client een API call moet doen om te vragen welke producten er precies zijn.'))}c.isMDXComponent=!0},7951:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/lifecycle-40c9b4a90ea90fe8c099ac8e48404cb7.png"},7166:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/react-3d062da10d8d826b71dd823f4061d1a9.png"}}]);