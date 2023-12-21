"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[3052],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return t?o.createElement(k,i(i({ref:n},c),{},{components:t})):o.createElement(k,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:6},i="Lijsten",s={unversionedId:"react-native-course/lists-and-keys/README",id:"react-native-course/lists-and-keys/README",title:"Lijsten",description:"Net zoals in React.js kunnen we ook in React Native lijsten maken. We kunnen dit doen door een array te maken en deze te mappen naar een component. We moeten wel een key meegeven aan elk element in de lijst. Deze key moet uniek zijn voor elk element in de lijst.",source:"@site/docs/react-native-course/lists-and-keys/README.md",sourceDirName:"react-native-course/lists-and-keys",slug:"/react-native-course/lists-and-keys/",permalink:"/webframeworks-cursus/react-native-course/lists-and-keys/",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"reactNative",previous:{title:"Custom Components",permalink:"/webframeworks-cursus/react-native-course/custom-components/"},next:{title:"Controlled Components",permalink:"/webframeworks-cursus/react-native-course/controlled-components/"}},l={},p=[{value:"Lijsten met for lus",id:"lijsten-met-for-lus",level:2},{value:"Lijsten met map",id:"lijsten-met-map",level:2},{value:"ScrollView",id:"scrollview",level:2},{value:"FlatList",id:"flatlist",level:2},{value:"ListFooterComponent",id:"listfootercomponent",level:3}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lijsten"},"Lijsten"),(0,r.kt)("p",null,"Net zoals in React.js kunnen we ook in React Native lijsten maken. We kunnen dit doen door een array te maken en deze te mappen naar een component. We moeten wel een key meegeven aan elk element in de lijst. Deze key moet uniek zijn voor elk element in de lijst."),(0,r.kt)("h2",{id:"lijsten-met-for-lus"},"Lijsten met for lus"),(0,r.kt)("p",null,"We kunnen een lijst maken door een for lus te gebruiken. We kunnen dan een array maken en deze opvullen met een for lus. We kunnen dan deze array mappen naar een component. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'expo={"dependencies":"expo-constants"}',expo:'{"dependencies":"expo-constants"}'},'import React from "react";\nimport Constants from "expo-constants";\nimport {View, Text,StyleSheet} from "react-native";\n\nconst App = () => {\n    const names = ["Andie","Lotte","Liene","Hanna"];\n    let nameTexts : JSX.Element[] = [];\n\n    for (let name of names) {\n        nameTexts.push(<Text key={name}>{name}</Text>);\n    }\n\n    return (\n        <View style={styles.container}>\n            {nameTexts}\n        </View>\n    )\n}\n\nconst styles = StyleSheet.create({\n    container: {flexDirection: "column", flex: 1, paddingTop: Constants.statusBarHeight}\n});\n\nexport default App;\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Dit is niet hoe we lijsten maken in React Native. We gebruiken hiervoor de ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," functie. Zie volgende stuk")),(0,r.kt)("h2",{id:"lijsten-met-map"},"Lijsten met map"),(0,r.kt)("p",null,"De map functie is zeer handig om een lijst te maken. We kunnen een lijst maken door een array te maken en elk element te mappen naar een component. We moeten wel een key meegeven aan elk element in de lijst. Deze key moet uniek zijn voor elk element in de lijst. Dit gebeurt op dezelfde manier als in React.js."),(0,r.kt)("p",null,"Hieronder een voorbeeld dat een lijst van kleuren naar gekleurde views mapt. We gebruiken de kleurnamen hier als key maar let goed op dat dit niet altijd de beste keuze is. In dit geval is het wel ok omdat de kleuren uniek zijn."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'expo={"dependencies":"expo-constants"}',expo:'{"dependencies":"expo-constants"}'},'import React from "react";\nimport Constants from "expo-constants";\nimport {View, Text,StyleSheet} from "react-native";\n\nconst colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];\n\nconst App = () => {\n    return (\n        <View style={styles.container}>\n            {colors.map(color => (\n                <View key={color} style={{flex:1 , backgroundColor: color}}/>\n            ))}\n        </View>\n    )\n}\n\nconst styles = StyleSheet.create({\n    container: {flexDirection: "column", alignItems: "stretch", flex: 1, paddingTop: Constants.statusBarHeight}\n});\n\nexport default App;\n')),(0,r.kt)("p",null,"Je moet uiteraard niet altijd mappen naar views. Je kan ook mappen naar andere componenten. Hieronder een voorbeeld dat een lijst van kleuren naar ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," componenten mapt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'expo={"dependencies":"expo-constants"}',expo:'{"dependencies":"expo-constants"}'},'import React from "react";\nimport Constants from "expo-constants";\nimport {View, Text,StyleSheet} from "react-native";\n\nconst colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];\n\nconst App = () => {\n    return (\n        <View style={styles.container}>\n            {colors.map(color => (\n                <Text key={color} style={{flex:1 , backgroundColor: color, textAlign:"center"}}>{color}</Text>\n            ))}\n        </View>\n    )\n}\n\nconst styles = StyleSheet.create({\n    container: {flexDirection: "column", alignItems: "stretch", flex: 1, paddingTop: Constants.statusBarHeight}\n});\n\nexport default App;\n')),(0,r.kt)("p",null,"Een extra voorbeeld:\nWe kunnen een woord opsplitsen naar een array van letters en deze dan apart tonen. We gebruiken hier de ",(0,r.kt)("inlineCode",{parentName:"p"},"split")," functie om een string te splitsen naar een array van letters. We gebruiken de index van het element om de fontSize te bepalen. We gebruiken een combinatie van de letter en de index als key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'expo={"dependencies":"expo-constants"}',expo:'{"dependencies":"expo-constants"}'},'import React from "react";\nimport Constants from "expo-constants";\nimport {View, Text,StyleSheet} from "react-native";\n\nconst App = () => {\n    const word = "Hello";\n    return (\n        <View style={styles.container}>\n            {word.split("").map((letter, index) => (\n                <Text key={letter + index} style={{flex:1 , fontSize: 20 + index * 10, textAlign:"center"}}>{letter}</Text>\n            ))}\n        </View>\n    )\n}\n\nconst styles = StyleSheet.create({\n    container: {flex: 1, flexDirection: "row", paddingTop: Constants.statusBarHeight}\n});\n\nexport default App;\n')),(0,r.kt)("h2",{id:"scrollview"},"ScrollView"),(0,r.kt)("p",null,"Tot nu toe konden we alleen maar lijsten tonen die in de lengte van het scherm passen. Als we een lijst hebben die langer is dan het scherm, dan kunnen we deze niet tonen. We kunnen dit oplossen door een ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView")," te gebruiken. Een ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView")," is een component die een lijst kan tonen die langer is dan het scherm."),(0,r.kt)("p",null,"Als we bijvoorbeeld de elementen iets groter maken dan zie je direct het probleem:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'expo={"dependencies":"expo-constants"}',expo:'{"dependencies":"expo-constants"}'},'import React from "react";\nimport Constants from "expo-constants";\nimport {View, Text,StyleSheet} from "react-native";\n\nconst colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];\n\nconst App = () => {\n    return (\n        <View style={styles.container}>\n          {colors.map(color => (\n              <View key={color} style={{height: 200, backgroundColor: color}}/>\n          ))}\n        </View>\n    )\n}\n\nconst styles = StyleSheet.create({\n    container: {flex: 1, alignItems: "stretch", paddingTop: Constants.statusBarHeight}\n});\n\nexport default App;\n')),(0,r.kt)("p",null,"We kunnen hier eenvoudig een ScrollView rondzetten om dit probleem op te lossen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'expo={"dependencies":"expo-constants"}',expo:'{"dependencies":"expo-constants"}'},'import React from "react";\nimport Constants from "expo-constants";\nimport {View, Text, ScrollView,StyleSheet} from "react-native";\n\nconst colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];\n\nconst App = () => {\n    return (\n        <View style={styles.container}>\n            <ScrollView>\n                <View style={{flex: 1, alignItems: "stretch"}}>\n                    {colors.map(color => (\n                        <View key={color} style={{height: 200, backgroundColor: color}}/>\n                    ))}\n                </View>\n            </ScrollView>\n        </View>\n    )\n}\n\nconst styles = StyleSheet.create({\n    container: {paddingTop: Constants.statusBarHeight}\n});\n\nexport default App;\n')),(0,r.kt)("h2",{id:"flatlist"},"FlatList"),(0,r.kt)("p",null,"Een andere manier om een lijst te maken is door gebruik te maken van de ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList")," component. Deze component heeft een aantal voordelen ten opzichte van de map functie. De ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList")," component is een native component en zal dus sneller zijn dan een lijst die gemaakt wordt met de map functie. Daarnaast zal de ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList")," component alleen de elementen renderen die op het scherm zichtbaar zijn. Dit is handig als je een lijst hebt met veel elementen. "),(0,r.kt)("p",null,"FlatList is automatisch scrollable dus hoeft niet in een ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView")," gezet te worden."),(0,r.kt)("p",null,"De ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList")," component heeft een aantal props die we moeten meegeven. De ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," prop is de lijst die we willen tonen. De ",(0,r.kt)("inlineCode",{parentName:"p"},"renderItem")," prop is een functie die een item uit de lijst zal renderen. De ",(0,r.kt)("inlineCode",{parentName:"p"},"keyExtractor")," prop is een functie die een key zal teruggeven voor een item uit de lijst. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'expo={"dependencies":"expo-constants"}',expo:'{"dependencies":"expo-constants"}'},'import React from "react";\nimport Constants from "expo-constants";\nimport {View, Text, FlatList,StyleSheet} from "react-native";\n\ninterface Person {\n    id: number;\n    name: string;\n    age: number;\n}\n\nconst persons : Person[] = [\n    {id: 1, name: "Andie", age: 25},\n    {id: 2, name: "Sven", age: 24},\n    {id: 3, name: "Dirk", age: 27},\n    {id: 4, name: "Lotte", age: 22},\n]\n\nconst PersonComponent = ({item} : {item: Person}) => {\n    return (\n        <View style={{flexDirection: "row", alignItems: "center"}}>\n            <Text style={{flex: 1}}>{item.name}</Text>\n            <Text style={{flex: 1}}>{item.age}</Text>\n        </View>\n    )\n}\n\nconst App = () => {\n    return (\n        <View style={styles.container}>\n            <FlatList\n                data={persons}\n                renderItem={({item}) => <PersonComponent item={item}/>}\n                keyExtractor={item => item.id.toString()}\n            />\n        </View>\n    )\n}\n\nconst styles = StyleSheet.create({\n    container: {flex: 1, flexDirection: "column", paddingTop: Constants.statusBarHeight}\n});\n\nexport default App;\n')),(0,r.kt)("p",null,"We herdoen ook nog het voorbeeld van de kleuren maar dan met het ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'expo={"dependencies":"expo-constants"}',expo:'{"dependencies":"expo-constants"}'},'import React from "react";\nimport Constants from "expo-constants";\nimport {View, Text, FlatList,StyleSheet} from "react-native";\n\nconst colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];\n\nconst App = () => {\n    return (\n        <View style={styles.container}>       \n            <FlatList\n                data={colors}\n                renderItem={({item}) => (\n                    <View style={{height: 200, backgroundColor: item}}/>\n                )}\n                keyExtractor={item => item}\n            />\n        </View>\n    )\n}\n\nconst styles = StyleSheet.create({\n    container: {flexDirection: "column", alignItems: "stretch", flex: 1, paddingTop: Constants.statusBarHeight}\n});\n\nexport default App;\n')),(0,r.kt)("h3",{id:"listfootercomponent"},"ListFooterComponent"),(0,r.kt)("p",null,"De ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList")," component heeft ook een ",(0,r.kt)("inlineCode",{parentName:"p"},"ListFooterComponent")," prop. Deze prop kan je gebruiken om een component te tonen onderaan de lijst. Dit kan bijvoorbeeld handig zijn om een knop te tonen om meer items te laden. Of om een loading indicator te tonen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'expo={"dependencies":"expo-constants"}',expo:'{"dependencies":"expo-constants"}'},'import React, {useState} from "react";\nimport Constants from "expo-constants";\nimport {View, Text, FlatList,StyleSheet, ActivityIndicator} from "react-native";\n\nconst colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];\n\nconst App = () => {\n    return (\n        <View style={styles.container}>       \n            <FlatList\n                data={colors}\n                renderItem={({item}) => (\n                    <View style={{height: 200, backgroundColor: item}}/>\n                )}\n                keyExtractor={item => item}\n                ListFooterComponent={<ActivityIndicator animating={true} style={{margin: 10}}/>}\n            />\n        </View>\n    )\n}\n\nconst styles = StyleSheet.create({\n    container: {flexDirection: "column", alignItems: "stretch", flex: 1, paddingTop: Constants.statusBarHeight}\n});\n\nexport default App;\n')))}m.isMDXComponent=!0}}]);