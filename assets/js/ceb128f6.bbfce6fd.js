"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[7926],{9594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(2004);const l={},i="Labo 2",s={unversionedId:"react-native-course/labs/lab2",id:"react-native-course/labs/lab2",title:"Labo 2",description:"Voor dit labo moet je de volgende theorie bekeken hebben:",source:"@site/docs/react-native-course/labs/lab2.md",sourceDirName:"react-native-course/labs",slug:"/react-native-course/labs/lab2",permalink:"/webframeworks-cursus/react-native-course/labs/lab2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactNative",previous:{title:"Labo 1",permalink:"/webframeworks-cursus/react-native-course/labs/lab1"},next:{title:"Labo 3",permalink:"/webframeworks-cursus/react-native-course/labs/lab3"}},p={},d=[{value:"Opdracht: Rainbows",id:"opdracht-rainbows",level:3},{value:"Vereisten:",id:"vereisten",level:4},{value:"Tips:",id:"tips",level:4},{value:"Oplossingsvideo",id:"oplossingsvideo",level:4}],u={toc:d};function c(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"labo-2"},"Labo 2"),(0,o.kt)("p",null,"Voor dit labo moet je de volgende theorie bekeken hebben:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flexbox"),(0,o.kt)("li",{parentName:"ul"},"Custom Components")),(0,o.kt)("h3",{id:"opdracht-rainbows"},"Opdracht: Rainbows"),(0,o.kt)("p",null,"Maak een nieuw project ",(0,o.kt)("inlineCode",{parentName:"p"},"Rainbows")," aan met expo. Vervang de inhoud van ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," door de volgende code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'expo={"dependencies": "rainbow-colors-array-ts"}',expo:'{"dependencies":','"rainbow-colors-array-ts"}':!0},'import * as React from "react";\nimport { rainbow } from "rainbow-colors-array-ts";\nimport {View, StyleSheet} from "react-native";\nimport Constants from \'expo-constants\';\n\nexport default function App() {\n\n  return (\n    <View style={styles.container}>\n       \n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: "flex-start",\n    paddingTop: Constants.statusBarHeight,\n  }\n});\n')),(0,o.kt)("p",null,"In dit labo gaan jullie spelen met Flexbox en Custom components. Ipv stapsgewijs de oefening op te bouwen, starten we deze keer met een screenshot. Het is de bedoeling dat jullie een React Native app maken die er exact hetzelfde uitziet:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"picture 8",src:n(1326).Z,width:"634",height:"1304"})),(0,o.kt)("p",null,"We geven jullie hieronder enkele vereisten en tips:"),(0,o.kt)("h4",{id:"vereisten"},"Vereisten:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Zorg dat elke regenboog voorgesteld wordt door 1 custom component Rainbow"),(0,o.kt)("li",{parentName:"ul"},"Gebruik een custom component Footer voor de tekst Rainbow"),(0,o.kt)("li",{parentName:"ul"},"Gebruik een custom component  Letter voor elke letter van de tekst Rainbow"),(0,o.kt)("li",{parentName:"ul"},"Plaats alle custom components in hun eigen bestand"),(0,o.kt)("li",{parentName:"ul"},"Gebruik de npm library ",(0,o.kt)("inlineCode",{parentName:"li"},"rainbow-colors-array-ts"),'. Gebruik hier de functie als volgt: rainbow(10, "hex",true); (lees de info op de npm pagina hoe je die gebruikt)')),(0,o.kt)("h4",{id:"tips"},"Tips:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Geef de style van de de Rainbow component mee als property"),(0,o.kt)("li",{parentName:"ul"},"Het typescript type van deze property is: ",(0,o.kt)("inlineCode",{parentName:"li"},"StyleProp<ViewStyle>")),(0,o.kt)("li",{parentName:"ul"},'Geef de array van  kleuren van elk child element van Rainbow (dus elke "blokje" kleur) mee als property'),(0,o.kt)("li",{parentName:"ul"},"Geef de hoogte en breedte van elke child element van Rainbow mee als property (indien je niets meegeeft, zal de style van een element dit negeren)"),(0,o.kt)("li",{parentName:"ul"},"De eerste Rainbow heeft elementen van hoogte 10"),(0,o.kt)("li",{parentName:"ul"},"De tweede Rainbow heeft elementen van breedte 10"),(0,o.kt)("li",{parentName:"ul"},"De derde Rainbow heeft elementen van hoogte 50 en breedte 50"),(0,o.kt)("li",{parentName:"ul"},"De footer heeft een hoogte van 100"),(0,o.kt)("li",{parentName:"ul"},"de lettergrootte van de tekst Rainbow is 30"),(0,o.kt)("li",{parentName:"ul"},"Footer gebruik 7 maal de Letter component"),(0,o.kt)("li",{parentName:"ul"},"De tweede en derde Rainbow zitten samen in 1 View")),(0,o.kt)("p",null,"Hier een screenshot met borders aan om een beter idee te krijgen van de layout:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"picture 8",src:n(5079).Z,width:"664",height:"1218"})),(0,o.kt)("h4",{id:"oplossingsvideo"},"Oplossingsvideo"),(0,o.kt)(r.Z,{controls:!0,url:"https://youtu.be/fOlEBWu9_8o",mdxType:"ReactPlayer"}))}c.isMDXComponent=!0},1326:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/labo3rainbow-7d63789a1872ab6521caaced9848f415.png"},5079:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/labo3views-5ce8bb301101f817bba5f322e86263f5.png"}}]);