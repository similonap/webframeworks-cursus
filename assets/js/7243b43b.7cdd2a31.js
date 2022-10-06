"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[6199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,k=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="Android Emulator",d={unversionedId:"react-native-course/expo/emulator",id:"react-native-course/expo/emulator",title:"Android Emulator",description:"Een emulator is een programma dat een virtuele Android-telefoon nabootst. Je kunt het gebruiken om je app te testen zonder dat je een fysieke telefoon nodig hebt. Het is ook handig om te gebruiken als je een app wilt testen op een telefoon met een ander besturingssysteem dan het jouwe.",source:"@site/docs/react-native-course/expo/emulator.md",sourceDirName:"react-native-course/expo",slug:"/react-native-course/expo/emulator",permalink:"/react-native-course/expo/emulator",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"reactNative",previous:{title:"Expo",permalink:"/react-native-course/expo/"},next:{title:"Core Components",permalink:"/react-native-course/core-components/"}},l={},s=[{value:"Android Studio",id:"android-studio",level:2},{value:"Installeren",id:"installeren",level:3},{value:"Gebruiken met Expo CLI",id:"gebruiken-met-expo-cli",level:3}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"android-emulator"},"Android Emulator"),(0,a.kt)("p",null,"Een emulator is een programma dat een virtuele Android-telefoon nabootst. Je kunt het gebruiken om je app te testen zonder dat je een fysieke telefoon nodig hebt. Het is ook handig om te gebruiken als je een app wilt testen op een telefoon met een ander besturingssysteem dan het jouwe."),(0,a.kt)("h2",{id:"android-studio"},"Android Studio"),(0,a.kt)("h3",{id:"installeren"},"Installeren"),(0,a.kt)("p",null,"We gaan de ingebouwde emulator van Android Studio gebruiken. Als je Android Studio nog niet hebt ge\xefnstalleerd, kan je dat ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"hier")," doen. Gebruik alle standaardinstellingen tijdens de installatie. Daarna kan je Android Studio starten."),(0,a.kt)("p",null,"De eerste keer dat je Android Studio opstart, moet je doorheen een aantal stappen gaan in een wizard. Ook deze kan je doorlopen door de standaardinstellingen te gebruiken. Deze wizard zal ook alle Android SDK's downloaden die nodig zijn om de emulator te gebruiken. Dit kan even duren."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Android Studio",src:n(3592).Z,width:"783",height:"590"})),(0,a.kt)("p",null,"Na de wizard krijg je het volgende scherm te zien. Je klikt hier op ",(0,a.kt)("inlineCode",{parentName:"p"},"More Actions")," en dan op ",(0,a.kt)("inlineCode",{parentName:"p"},"Virtual Device Manager"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Android Studio",src:n(9333).Z,width:"785",height:"589"})),(0,a.kt)("p",null,"Normaal gezien zou er standaard al een emulator beschikbaar moeten zijn. Als dit niet het geval is, kan je een nieuwe emulator aanmaken door op ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Device")," te klikken."),(0,a.kt)("p",null,"Let op dat je emulator genoeg geheugen en opslagruimte heeft. Als je een emulator aanmaakt, kan je de instellingen aanpassen door het pen-icoontje te gebruiken. Als je dan de Advanced Settings opent, kan je de instellingen aanpassen. 2gb storage en 2gb RAM zou voldoende moeten zijn."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Android Studio",src:n(9739).Z,width:"1000",height:"650"})),(0,a.kt)("p",null,"Als dit allemaal gedaan is kan je de emulator starten door op ",(0,a.kt)("inlineCode",{parentName:"p"},"Play")," te klikken. Je krijgt dan een scherm te zien waarin je de emulator kan starten. Als je de emulator start, zal je een virtuele Android-telefoon zien. Je kan de emulator nu gebruiken om je app te testen."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Android Studio",src:n(8289).Z,width:"485",height:"864"})),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Wacht tot de emulator helemaal geladen is voor je de app opstart. Als je de app opstart voor de emulator helemaal geladen is, kan het zijn dat de app niet correct werkt.")),(0,a.kt)("h3",{id:"gebruiken-met-expo-cli"},"Gebruiken met Expo CLI"),(0,a.kt)("p",null,"Als je expo gebruikt om je app te testen, kan je de emulator gebruiken door de volgende stappen te volgen:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Android Studio en start de emulator op."),(0,a.kt)("li",{parentName:"ol"},"Open een terminal in de map waar je je app in hebt staan."),(0,a.kt)("li",{parentName:"ol"},"Voer het volgende commando uit: ",(0,a.kt)("inlineCode",{parentName:"li"},"expo start --android")," of door ",(0,a.kt)("inlineCode",{parentName:"li"},"a")," te drukken in de terminal waarin je ",(0,a.kt)("inlineCode",{parentName:"li"},"expo start")," hebt uitgevoerd.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"De eerste keer kan dit een tijdje duren want de Expo Go app moet gedownload en geinstalleerd worden op de emulator. Dit gebeurt automatisch door de Expo CLI.")))}u.isMDXComponent=!0},3592:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/androidstudiowizard-bbe9c6819ce17d4591f1fb5fb6dc5a13.png"},8289:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/emulator-0077698f5cb8affc573c8f0c0dcd7f16.png"},9739:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/increasesize-492107d2df33a0fa9f1d6bfd1e0e1914.png"},9333:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/virtualdevicemanager-f8580390fd9dd5fdf39c985038947fee.png"}}]);