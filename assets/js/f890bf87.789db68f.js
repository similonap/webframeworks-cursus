"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},l="Labo 3",i={unversionedId:"react-native-course/labs/lab3",id:"react-native-course/labs/lab3",title:"Labo 3",description:"Voor dit labo moet je de volgende theorie bekeken hebben:",source:"@site/docs/react-native-course/labs/lab3.md",sourceDirName:"react-native-course/labs",slug:"/react-native-course/labs/lab3",permalink:"/webframeworks-cursus/react-native-course/labs/lab3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactNative",previous:{title:"Labo 2",permalink:"/webframeworks-cursus/react-native-course/labs/lab2"},next:{title:"Labo 4",permalink:"/webframeworks-cursus/react-native-course/labs/lab4"}},s={},p=[{value:"Opdracht: Rainbows",id:"opdracht-rainbows",level:3},{value:"Vereisten:",id:"vereisten",level:4},{value:"Tips:",id:"tips",level:4}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"labo-3"},"Labo 3"),(0,a.kt)("p",null,"Voor dit labo moet je de volgende theorie bekeken hebben:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flexbox"),(0,a.kt)("li",{parentName:"ul"},"Custom Components")),(0,a.kt)("h3",{id:"opdracht-rainbows"},"Opdracht: Rainbows"),(0,a.kt)("p",null,"Maak een nieuw project ",(0,a.kt)("inlineCode",{parentName:"p"},"Rainbows")," aan met expo. Vervang de inhoud van ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," door de volgende code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'expo={"dependencies": "rainbow-colors-array-ts"}',expo:'{"dependencies":','"rainbow-colors-array-ts"}':!0},'import * as React from "react";\nimport { rainbow } from "rainbow-colors-array-ts";\nimport {View, StyleSheet} from "react-native";\nimport Constants from \'expo-constants\';\n\nexport default function App() {\n\n  return (\n    <View style={styles.container}>\n       \n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: "flex-start",\n    paddingTop: Constants.statusBarHeight,\n  }\n});\n')),(0,a.kt)("p",null,"In dit labo gaan jullie spelen met Flexbox en Custom components. Ipv stapsgewijs de oefening op te bouwen, starten we deze keer met een screenshot. Het is de bedoeling dat jullie een React Native app maken die er exact hetzelfde uitziet:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"picture 8",src:n(1326).Z,width:"634",height:"1304"})),(0,a.kt)("p",null,"We geven jullie hieronder enkele vereisten en tips:"),(0,a.kt)("h4",{id:"vereisten"},"Vereisten:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Zorg dat elke regenboog voorgesteld wordt door 1 custom component Rainbow"),(0,a.kt)("li",{parentName:"ul"},"Gebruik een custom component Footer voor de tekst Rainbow"),(0,a.kt)("li",{parentName:"ul"},"Gebruik een custom component  Letter voor elke letter van de tekst Rainbow"),(0,a.kt)("li",{parentName:"ul"},"Plaats alle custom components in hun eigen bestand"),(0,a.kt)("li",{parentName:"ul"},"Gebruik de npm library ",(0,a.kt)("inlineCode",{parentName:"li"},"rainbow-colors-array-ts"),'. Gebruik hier de functie als volgt: rainbow(10, "hex",true); (lees de info op de npm pagina hoe je die gebruikt)')),(0,a.kt)("h4",{id:"tips"},"Tips:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Geef de style van de de Rainbow component mee als property"),(0,a.kt)("li",{parentName:"ul"},"Het typescript type van deze property is: ",(0,a.kt)("inlineCode",{parentName:"li"},"StyleProp<ViewStyle>")),(0,a.kt)("li",{parentName:"ul"},'Geef de array van  kleuren van elk child element van Rainbow (dus elke "blokje" kleur) mee als property'),(0,a.kt)("li",{parentName:"ul"},"Geef de hoogte en breedte van elke child element van Rainbow mee als property (indien je niets meegeeft, zal de style van een element dit negeren)"),(0,a.kt)("li",{parentName:"ul"},"De eerste Rainbow heeft elementen van hoogte 10"),(0,a.kt)("li",{parentName:"ul"},"De tweede Rainbow heeft elementen van breedte 10"),(0,a.kt)("li",{parentName:"ul"},"De derde Rainbow heeft elementen van hoogte 50 en breedte 50"),(0,a.kt)("li",{parentName:"ul"},"De footer heeft een hoogte van 100"),(0,a.kt)("li",{parentName:"ul"},"de lettergrootte van de tekst Rainbow is 30"),(0,a.kt)("li",{parentName:"ul"},"Footer gebruik 7 maal de Letter component"),(0,a.kt)("li",{parentName:"ul"},"De tweede en derde Rainbow zitten samen in 1 View")),(0,a.kt)("p",null,"Hier een screenshot met borders aan om een beter idee te krijgen van de layout:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"picture 8",src:n(5079).Z,width:"664",height:"1218"})))}u.isMDXComponent=!0},1326:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/labo3rainbow-7d63789a1872ab6521caaced9848f415.png"},5079:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/labo3views-5ce8bb301101f817bba5f322e86263f5.png"}}]);