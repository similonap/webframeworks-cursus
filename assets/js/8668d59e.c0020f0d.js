"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[2332],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(7462),o=(t(7294),t(3905));const r={},i="Inleiding",l={unversionedId:"react-native-course/README",id:"react-native-course/README",title:"Inleiding",description:"React Native",source:"@site/docs/react-native-course/README.md",sourceDirName:"react-native-course",slug:"/react-native-course/",permalink:"/webframeworks-cursus/react-native-course/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactNative",next:{title:"Core Components",permalink:"/webframeworks-cursus/react-native-course/core-components/"}},p={},d=[{value:"React Native",id:"react-native",level:2},{value:"Expo",id:"expo",level:2},{value:"Expo CLI",id:"expo-cli",level:2},{value:"Hoe Expo CLI gebruiken",id:"hoe-expo-cli-gebruiken",level:3},{value:"Expo Go App voor iOS en Android",id:"expo-go-app-voor-ios-en-android",level:3},{value:"Nieuwe app aanmaken",id:"nieuwe-app-aanmaken",level:2},{value:"Development server",id:"development-server",level:2},{value:"De app openen op je telefoon of tablet",id:"de-app-openen-op-je-telefoon-of-tablet",level:2},{value:"Eerste wijziging aanbrengen",id:"eerste-wijziging-aanbrengen",level:2}],s={toc:d};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inleiding"},"Inleiding"),(0,o.kt)("h2",{id:"react-native"},"React Native"),(0,o.kt)("p",null,"React Native is een framework om native apps te maken voor iOS en Android. Het is gebaseerd op React.js, een JavaScript library voor het maken van webapps. React Native is ontwikkeld door Meta en wordt veel gebruikt door grote bedrijven zoals Airbnb, Facebook, Instagram, Tesla, Uber en Walmart."),(0,o.kt)("p",null,"React Native lijkt heel hard op React.js. De meeste React.js code kan je gewoon gebruiken in React Native. De grootste verschillen zijn:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React Native gebruikt native componenten in plaats van webcomponenten. Dit betekent dat je geen HTML tags gebruikt, maar native componenten zoals ",(0,o.kt)("inlineCode",{parentName:"li"},"<View>"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"<Text>")," en ",(0,o.kt)("inlineCode",{parentName:"li"},"<Image>"),". "),(0,o.kt)("li",{parentName:"ul"},"React Native gebruikt geen CSS bestanden of modules maar inline styles. Dit betekent dat je geen CSS classes kan gebruiken, maar inline styles zoals ",(0,o.kt)("inlineCode",{parentName:"li"},"style={{ color: 'red' }}"),"."),(0,o.kt)("li",{parentName:"ul"},"React Native gebruikt geen HTML bestanden maar JavaScript bestanden met de extensie ",(0,o.kt)("inlineCode",{parentName:"li"},".js")," of ",(0,o.kt)("inlineCode",{parentName:"li"},".jsx"),".")),(0,o.kt)("h2",{id:"expo"},"Expo"),(0,o.kt)("p",null,"Expo is een tool die het ontwikkelen van React Native apps makkelijker maakt. Het is een bundel van tools die je kan gebruiken om je app te testen op je smartphone of tablet. Je kan ook een app bouwen zonder Expo, maar dan moet je de app eerst bundelen en dan op je smartphone installeren. Dat is een stuk moeilijker."),(0,o.kt)("h2",{id:"expo-cli"},"Expo CLI"),(0,o.kt)("p",null,"Expo CLI is een command line interface die je kan gebruiken om een nieuwe React Native app aan te maken. "),(0,o.kt)("h3",{id:"hoe-expo-cli-gebruiken"},"Hoe Expo CLI gebruiken"),(0,o.kt)("p",null,"Je kan de Expo CLI gebruiken zonder het eerst te installeren. Je kan het gewoon gebruiken met ",(0,o.kt)("inlineCode",{parentName:"p"},"npx"),". Zo heb je ook altijd de laatste versie."),(0,o.kt)("p",null,"Je kan zien welke commando's je kan gebruiken met ",(0,o.kt)("inlineCode",{parentName:"p"},"npx expo --help"),"."),(0,o.kt)("p",null,"Het wordt aangeraden om eerst een Expo account aan te maken. Je kan zien of je al een account hebt door het volgende commando uit te voeren:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo whoami\n")),(0,o.kt)("p",null,"Als je nog geen account hebt, kan je er een aanmaken met het volgende commando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo register\n")),(0,o.kt)("p",null,"Als je een account hebt, kan je inloggen met het volgende commando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo login\n")),(0,o.kt)("h3",{id:"expo-go-app-voor-ios-en-android"},"Expo Go App voor iOS en Android"),(0,o.kt)("p",null,"Om je app te testen op je smartphone of tablet, moet je de Expo Go app installeren. Deze app kan je vinden in de App Store en de Play Store."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=host.exp.exponent"},"Android Play Store")," - Android Lollipop (5) and greater\n",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/app/expo-go/id982107779"},"iOS App Store")," - iOS 11 and greater"),(0,o.kt)("p",null,'Na de installatie kan je via de app met dezelfde account inloggen. Als je ingelogd bent is het veel eenvoudiger om projecten te openen. Ze zullen automatisch onder het "Projects" onderdeel staan.'),(0,o.kt)("h2",{id:"nieuwe-app-aanmaken"},"Nieuwe app aanmaken"),(0,o.kt)("p",null,"Om een nieuwe app aan te maken, kan je het volgende commando gebruiken:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-expo-app <project-name> --template expo-template-blank-typescript\n")),(0,o.kt)("p",null,"Omdat we typescript gaan gebruiken in deze cursus, gebruiken we het ",(0,o.kt)("inlineCode",{parentName:"p"},"--template")," argument. Als je geen typescript wil gebruiken, kan je het argument weglaten."),(0,o.kt)("h2",{id:"development-server"},"Development server"),(0,o.kt)("p",null,"Je kan de development server starten met het volgende commando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo start\n")),(0,o.kt)("p",null,"Als je dit commando uitvoert dan wordt de Metro bundler gestart. Deze bundler is een http server die de javascript code compileert en bundelt. De bundler is ook verantwoordelijk voor het hot reloading. Als je een bestand aanpast, dan zal de bundler de code opnieuw compileren en de app opnieuw laden."),(0,o.kt)("h2",{id:"de-app-openen-op-je-telefoon-of-tablet"},"De app openen op je telefoon of tablet"),(0,o.kt)("p",null,"Om de app te openen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Op android devices druk je op de "Scan QR Code" knop en scan je de QR code die in de terminal verschijnt.'),(0,o.kt)("li",{parentName:"ul"},"Op een iPhone of iPad moet je de default camera app gebruiken om de QR code te scannen. Als je de QR code scant, dan zal de Expo Go app automatisch geopend worden.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Zorg ervoor dat je op hetzelfde netwerk zit als je telefoon of tablet. Als je op een ander netwerk zit, dan zal de bundler niet kunnen verbinden met je telefoon of tablet. Gebruik desnoods een hotspot van je telefoon.")),(0,o.kt)("h2",{id:"eerste-wijziging-aanbrengen"},"Eerste wijziging aanbrengen"),(0,o.kt)("p",null,"Open de ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," file in de ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder. Verander de tekst in de ",(0,o.kt)("inlineCode",{parentName:"p"},"Text"),' component naar "Hello World". Als je de app nu opnieuw laadt, dan zal je de tekst zien veranderen.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"expo={}",expo:"{}"},"import * as React from 'react';\nimport { Text, View, StyleSheet } from 'react-native';\nimport Constants from 'expo-constants';\n\nconst App = () => {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.paragraph}>\n        Change this code\n      </Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    paddingTop: Constants.statusBarHeight,\n    backgroundColor: '#ecf0f1',\n    padding: 8,\n  },\n  paragraph: {\n    margin: 24,\n    fontSize: 18,\n    fontWeight: 'bold',\n    textAlign: 'center',\n  },\n});\n\nexport default App;\n")))}c.isMDXComponent=!0}}]);