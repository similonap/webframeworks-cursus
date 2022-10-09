"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[7926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},l="Labo 2",i={unversionedId:"react-native-course/labs/lab2",id:"react-native-course/labs/lab2",title:"Labo 2",description:"Voor dit labo moet je de volgende theorie bekeken hebben:",source:"@site/docs/react-native-course/labs/lab2.md",sourceDirName:"react-native-course/labs",slug:"/react-native-course/labs/lab2",permalink:"/webframeworks-cursus/react-native-course/labs/lab2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactNative",previous:{title:"Labo 1",permalink:"/webframeworks-cursus/react-native-course/labs/lab1"},next:{title:"Labo 3",permalink:"/webframeworks-cursus/react-native-course/labs/lab3"}},p={},d=[{value:"Opdracht: Core Components",id:"opdracht-core-components",level:2},{value:"Maak een nieuw project aan",id:"maak-een-nieuw-project-aan",level:3},{value:"Tekst toevoegen",id:"tekst-toevoegen",level:3},{value:"Styling",id:"styling",level:3},{value:"Images",id:"images",level:3},{value:"Input",id:"input",level:3},{value:"Opdracht: RandomMoviePosters",id:"opdracht-randommovieposters",level:2}],u={toc:d};function s(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"labo-2"},"Labo 2"),(0,r.kt)("p",null,"Voor dit labo moet je de volgende theorie bekeken hebben:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core Components"),(0,r.kt)("li",{parentName:"ul"},"Event Handling")),(0,r.kt)("h2",{id:"opdracht-core-components"},"Opdracht: Core Components"),(0,r.kt)("h3",{id:"maak-een-nieuw-project-aan"},"Maak een nieuw project aan"),(0,r.kt)("p",null,"Maak een nieuw project ",(0,r.kt)("inlineCode",{parentName:"p"},"CoreComponents")," aan met expo. Vervang de inhoud van ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," door de volgende code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"expo={}",expo:"{}"},'import React from "react";\nimport { Text, View, StyleSheet, Button } from "react-native";\n\nconst App = () => {\n  return (\n    <View style={styles.container}>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: "#ff",\n  },\n});\n\nexport default App;\n')),(0,r.kt)("p",null,"Verwijder alle styles in container maar laat backgroundColor staan."),(0,r.kt)("h3",{id:"tekst-toevoegen"},"Tekst toevoegen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maak een functie die een willekeurig getal tussen 0 en 10 teruggeeft. Noem deze functie ",(0,r.kt)("inlineCode",{parentName:"li"},"random0To10"),"."),(0,r.kt)("li",{parentName:"ul"},"Voeg een Text component toe aan de View van de App functie component. Als tekst toon je het getal dat ",(0,r.kt)("inlineCode",{parentName:"li"},"random0To10")," teruggeeft."),(0,r.kt)("li",{parentName:"ul"},"Voeg daarna ook de tekst ",(0,r.kt)("inlineCode",{parentName:"li"},"Het getal is")," toe aan deze Text component met daarachter het getal (zonder extra Text component te gebruiken)"),(0,r.kt)("li",{parentName:"ul"},"Gebruik nu een tweede Text component om het getal in drukletters te tonen. Maak hiervoor een style ",(0,r.kt)("inlineCode",{parentName:"li"},"boldText")," aan die je gebruikt via het ",(0,r.kt)("inlineCode",{parentName:"li"},"styles")," attribuut.")),(0,r.kt)("h3",{id:"styling"},"Styling"),(0,r.kt)("p",null,"Maak een nieuwe View als kind van de originele View aan. Plaats daarin een Text component met de tekst ",(0,r.kt)("inlineCode",{parentName:"p"},"SubView"),"."),(0,r.kt)("p",null,"Geef Subview een breedte van 100. Geef het een rode rand van breedte 2, een padding van 10."),(0,r.kt)("p",null,"Geef het nieuwe ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," component in Subview een blauwe achtergrond met witte letters."),(0,r.kt)("h3",{id:"images"},"Images"),(0,r.kt)("p",null,"Voeg 2 afbeeldingen toe aan de originele view: 1 afbeelding van een Pokemon die je lokaal toevoegt aan jouw project en een andere afbeelding van een filmposter die je via de URL aanspreekt (en dus niet downloadt)."),(0,r.kt)("p",null,"Geef beide afbeeldingen een breedte en hoogte van 100."),(0,r.kt)("p",null,"Zorg dat beide afbeeldingen volledig te zien zijn."),(0,r.kt)("h3",{id:"input"},"Input"),(0,r.kt)("p",null,"Voeg een TextInput component toe die "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"een zwarte rand heeft"),(0,r.kt)("li",{parentName:"ul"},"de tekst verstopt die je typt (als een password)"),(0,r.kt)("li",{parentName:"ul"},'als standaard text "Enter Password" toont'),(0,r.kt)("li",{parentName:"ul"},"de tekst aan de gebruiker toont via een alert wanneer de gebruiker de enter (return/submit) toets gebruikt")),(0,r.kt)("p",null,"Voeg een Button component toe die"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rood is "),(0,r.kt)("li",{parentName:"ul"},"de tekst Random bevat"),(0,r.kt)("li",{parentName:"ul"},"wanneer een gebruiker erop drukt, de alert The number is X waar X een waarde is die Random0To10 teruggeeft (dit hoeft niet dezelfde waarde te zijn als die in het tekst veld)")),(0,r.kt)("p",null,"Zorg dat wanneer een gebruiker de Pokemon 3 seconden indrukt, je de naam van de Pokemon in een alert toont. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"interaction_labo1_oef1.gif",src:n(4576).Z,width:"322",height:"682"})),(0,r.kt)("h2",{id:"opdracht-randommovieposters"},"Opdracht: RandomMoviePosters"),(0,r.kt)("p",null,"Maak een nieuw expo project aan met de naam ",(0,r.kt)("inlineCode",{parentName:"p"},"RandomMoviePosters"),"."),(0,r.kt)("p",null,"Zorg dat de app"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"de 6 posters onder mekaar toont"),(0,r.kt)("li",{parentName:"ul"},"de posters volledig te zien zijn met een maximum hoogte van 50"),(0,r.kt)("li",{parentName:"ul"},"de volgorde van de posters verandert elke keer de de app opnieuw laadt"),(0,r.kt)("li",{parentName:"ul"},"als je op een poster drukt, krijg je een alert met de filmnaam als titel en jaar als beschrijving eronder.")),(0,r.kt)("p",null,"Zorg ook dat:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"de data van posters (url, name, year) in een array van JSON objecten zitten (hoeft geen externe file te zijn, mag een variable zijn)"),(0,r.kt)("li",{parentName:"ul"},"een filmposter maar 1 keer op het scherm getoond wordt"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tip:")," je gebruikt 6 keer de Image tag (dus geen loops, dat zien we later)")))}s.isMDXComponent=!0},4576:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/interaction_labo1_oef1-a6abd0be0ea6f0a95288eb811a9c76b8.gif"}}]);