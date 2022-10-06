"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[3341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),v=a,d=g["".concat(c,".").concat(v)]||g[v]||u[v]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:9},o="Routing en navigatie",l={unversionedId:"react-native-course/navigation/README",id:"react-native-course/navigation/README",title:"Routing en navigatie",description:"Onder Routing en navigatie worden de volgende aspecten behandeld:",source:"@site/docs/react-native-course/navigation/README.md",sourceDirName:"react-native-course/navigation",slug:"/react-native-course/navigation/",permalink:"/react-native-course/navigation/",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"reactNative",previous:{title:"Controlled Components",permalink:"/react-native-course/controlled-components/"},next:{title:"Stack Navigation",permalink:"/react-native-course/navigation/stack-navigation"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"routing-en-navigatie"},"Routing en navigatie"),(0,a.kt)("p",null,"Onder Routing en navigatie worden de volgende aspecten behandeld:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Opsplitsen van de app in verschillende schermen"),(0,a.kt)("li",{parentName:"ul"},"Navigeren tussen deze schermen"),(0,a.kt)("li",{parentName:"ul"},"Tonen van platform specifieke navigatie elementen (tabs, navigatiebalk, transities,...)")),(0,a.kt)("p",null,"Vergelijking met web browser:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We hebben verschillende pagina's (html files) met links"),(0,a.kt)("li",{parentName:"ul"},"De gebruiker klikt op een link en wordt naar een andere pagina gebracht"),(0,a.kt)("li",{parentName:"ul"},"De gebruiker kan terug gaan naar de vorige pagina (via de browser history)"),(0,a.kt)("li",{parentName:"ul"},"De back knop zorgt ervoor dat de vorige pagina wordt geladen")),(0,a.kt)("p",null,"React native heeft deze concepten niet zonder een externe library. Wij gaan gebruik maken van ",(0,a.kt)("a",{parentName:"p",href:"https://reactnavigation.org/"},"React Navigation"),"."),(0,a.kt)("p",null,"Om React Navigation te gebruiken moeten we deze eerst installeren:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/native\nnpx expo install react-native-screens react-native-safe-area-context\n")))}u.isMDXComponent=!0}}]);