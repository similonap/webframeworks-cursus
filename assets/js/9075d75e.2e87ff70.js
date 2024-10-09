"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[5416],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2590:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:9},i="Expo Router",l={unversionedId:"react-native-course/expo-router/README",id:"react-native-course/expo-router/README",title:"Expo Router",description:"Expo Router werkt zeer gelijkaardig aan de routing in next.js. Het is een file-based router. Dit wil zeggen dat je een mapstructuur aanmaakt en dat je op basis van de bestandsnaam de route bepaalt. Het laat toe om navigatie tussen schermen in je app te beheren, waardoor gebruikers naadloos tussen verschillende delen van de UI van je app kunnen bewegen, met behulp van dezelfde componenten op meerdere platforms (Android, iOS en web).",source:"@site/docs/react-native-course/expo-router/README.md",sourceDirName:"react-native-course/expo-router",slug:"/react-native-course/expo-router/",permalink:"/webframeworks-cursus/react-native-course/expo-router/",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"reactNative",previous:{title:"Controlled Components",permalink:"/webframeworks-cursus/react-native-course/controlled-components/"},next:{title:"Extra",permalink:"/webframeworks-cursus/react-native-course/extra/"}},p={},s=[{value:"Installatie",id:"installatie",level:2},{value:"Nieuw project",id:"nieuw-project",level:3},{value:"Bestaand project",id:"bestaand-project",level:3},{value:"Packages installeren",id:"packages-installeren",level:4},{value:"Package.json aanpassen",id:"packagejson-aanpassen",level:4},{value:"app.json aanpassen",id:"appjson-aanpassen",level:4},{value:"babel.config.js aanpassen",id:"babelconfigjs-aanpassen",level:4},{value:"Schermen toevoegen",id:"schermen-toevoegen",level:2},{value:"Het eerste scherm",id:"het-eerste-scherm",level:3},{value:"Nog een scherm toevoegen",id:"nog-een-scherm-toevoegen",level:3},{value:"Dynamische routes",id:"dynamische-routes",level:3},{value:"Navigeren tussen schermen",id:"navigeren-tussen-schermen",level:2},{value:"Imperatief navigeren",id:"imperatief-navigeren",level:3},{value:"Dynamische routes linken",id:"dynamische-routes-linken",level:3},{value:"Route vervangen",id:"route-vervangen",level:3},{value:"Layout routes",id:"layout-routes",level:2},{value:"Layout route aanmaken",id:"layout-route-aanmaken",level:3},{value:"Native layouts",id:"native-layouts",level:2},{value:"Stack Navigation",id:"stack-navigation",level:3},{value:"Configuratie",id:"configuratie",level:4},{value:"Animation",id:"animation",level:4},{value:"Tab Navigation",id:"tab-navigation",level:3},{value:"Drawer Navigation",id:"drawer-navigation",level:3},{value:"Combineren van layouts",id:"combineren-van-layouts",level:3}],d={toc:s};function m(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"expo-router"},"Expo Router"),(0,r.kt)("p",null,"Expo Router werkt zeer gelijkaardig aan de routing in next.js. Het is een file-based router. Dit wil zeggen dat je een mapstructuur aanmaakt en dat je op basis van de bestandsnaam de route bepaalt. Het laat toe om navigatie tussen schermen in je app te beheren, waardoor gebruikers naadloos tussen verschillende delen van de UI van je app kunnen bewegen, met behulp van dezelfde componenten op meerdere platforms (Android, iOS en web)."),(0,r.kt)("p",null,"Het is gebouwd op ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/"},"React Navigation"),", een populaire library voor het beheren van navigatie in React Native apps."),(0,r.kt)("h2",{id:"installatie"},"Installatie"),(0,r.kt)("p",null,"Als je expo-router wil gebruiken in je project moet je eerst enkele packages installeren en een aantal bestanden aanpassen. Deze stappen worden hieronder uitgelegd. "),(0,r.kt)("h3",{id:"nieuw-project"},"Nieuw project"),(0,r.kt)("p",null,"Als je nog geen project hebt kan je een nieuw project aanmaken met een template en hoef je geen ingewikkelde installatie te doen. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-expo-app <my-project> --template expo-template-typescript-router\n")),(0,r.kt)("p",null,"of korter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-expo-app -t expo-template-typescript-router <my-project>\n")),(0,r.kt)("p",null,"Je moet nog wel de ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme")," property aanpassen in je ",(0,r.kt)("inlineCode",{parentName:"p"},"app.json")," (zie verder)."),(0,r.kt)("h3",{id:"bestaand-project"},"Bestaand project"),(0,r.kt)("h4",{id:"packages-installeren"},"Packages installeren"),(0,r.kt)("p",null,"Installeer de library in je project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler react-native-web react-dom @react-navigation/drawer react-native-reanimated\n")),(0,r.kt)("h4",{id:"packagejson-aanpassen"},"Package.json aanpassen"),(0,r.kt)("p",null,"Pas de ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," property in je ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," aan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "main": "expo-router/entry"\n}\n')),(0,r.kt)("h4",{id:"appjson-aanpassen"},"app.json aanpassen"),(0,r.kt)("p",null,"Pas je ",(0,r.kt)("inlineCode",{parentName:"p"},"app.json")," aan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n  ...\n  "scheme": "your-app-scheme"\n  ...\n  "web": {\n    ...\n    "bundler": "metro"\n  }\n}\n')),(0,r.kt)("p",null,"Je moet de ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme")," property aanpassen naar een unieke naam voor je app. Dit is nodig voor deep linking. Je kan hier bijvoorbeeld de naam van je app voor gebruiken. Je moet er wel voor zorgen dat deze naam uniek is. "),(0,r.kt)("h4",{id:"babelconfigjs-aanpassen"},"babel.config.js aanpassen"),(0,r.kt)("p",null,"Je moet de ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js")," aanpassen zodat ",(0,r.kt)("inlineCode",{parentName:"p"},"expo-router")," en ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," correct werken. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"module.exports = function (api) {\n  ...\n  return {\n    ...\n    plugins: ['expo-router/babel','react-native-reanimated/plugin'],\n  };\n};\n")),(0,r.kt)("h2",{id:"schermen-toevoegen"},"Schermen toevoegen"),(0,r.kt)("p",null,"Als een bestand wordt aangemaakt in de ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," directory, wordt het automatisch een route in de app. Bijvoorbeeld, de volgende bestanden zullen de volgende routes maken:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/index.tsx")," komt overeen met ",(0,r.kt)("inlineCode",{parentName:"li"},"/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/home.tsx")," komt overeen met ",(0,r.kt)("inlineCode",{parentName:"li"},"/home")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/settings/index.tsx")," komt overeen met ",(0,r.kt)("inlineCode",{parentName:"li"},"/settings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/[user].tsx")," komt overeen met dynamische paden zoals ",(0,r.kt)("inlineCode",{parentName:"li"},"/expo")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"/joske"))),(0,r.kt)("p",null,"Deze paden kunnen worden gebruikt in de ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component om te navigeren naar een bepaald scherm. Als je de applicatie op een webbrowser opent, kan je ook de URL aanpassen om naar een bepaald scherm te navigeren."),(0,r.kt)("h3",{id:"het-eerste-scherm"},"Het eerste scherm"),(0,r.kt)("p",null,"Als je nu de applicatie opstart met ",(0,r.kt)("inlineCode",{parentName:"p"},"expo start")," dan krijg je de volgende pagina te zien:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(8371).Z,width:"1254",height:"724"})),(0,r.kt)("p",null,"Zoals de melding aangeeft moet je een directory ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," aanmaken met daarin een bestand ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx"),". Dit bestand wordt gebruikt als eerste scherm van je applicatie. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { View, StyleSheet, Text } from "react-native";\n\nconst App = () => {\n    return (\n        <View style={styles.container}>\n            <Text>Home Screen</Text>\n        </View>\n    )\n}\n\nconst styles = StyleSheet.create({\n    container: {\n        flex: 1,\n        justifyContent: "center",\n        alignItems: "center"\n    }\n})\n\nexport default App;\n')),(0,r.kt)("p",null,"Als je dan de applicatie opnieuw opstart zal de home pagina getoond worden."),(0,r.kt)("h3",{id:"nog-een-scherm-toevoegen"},"Nog een scherm toevoegen"),(0,r.kt)("p",null,"Willen we een tweede scherm toevoegen voor een bepaalde route dan maken we een bestand aan in de ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," directory met de naam van de route. Bijvoorbeeld ",(0,r.kt)("inlineCode",{parentName:"p"},"app/about.tsx")," voor de route ",(0,r.kt)("inlineCode",{parentName:"p"},"/about"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\nimport { View, StyleSheet, Text } from "react-native";\n\nconst About = () => {\n    return (\n        <View style={styles.container}>\n            <Text>About Screen</Text>\n        </View>\n    )\n}\n\nconst styles = StyleSheet.create({\n    container: {\n        flex: 1,\n        justifyContent: "center",\n        alignItems: "center"\n    }\n})\n\nexport default About;\n')),(0,r.kt)("h3",{id:"dynamische-routes"},"Dynamische routes"),(0,r.kt)("p",null,"Je kan ook dynamische routes maken. Dit doe je door een bestand aan te maken met de naam van de route en tussen vierkante haken de naam van de parameter. Bijvoorbeeld ",(0,r.kt)("inlineCode",{parentName:"p"},"app/users/[name].tsx")," voor de route ",(0,r.kt)("inlineCode",{parentName:"p"},"/users/expo")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"/users/joske"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLocalSearchParams } from "expo-router";\nimport React from "react";\nimport { View, StyleSheet, Text } from "react-native";\n\nconst User = () => {\n    const { name } = useLocalSearchParams<{name: string}();\n    return (\n        <View style={styles.container}>\n            <Text>User : { name }</Text>\n        </View>\n    )\n}\n\nconst styles = StyleSheet.create({\n    container: {\n        flex: 1,\n        justifyContent: "center",\n        alignItems: "center"\n    }\n})\n\nexport default User;\n')),(0,r.kt)("h2",{id:"navigeren-tussen-schermen"},"Navigeren tussen schermen"),(0,r.kt)("p",null,"Expo Router gebruikt het ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component om te navigeren tussen schermen. Dit component heeft een ",(0,r.kt)("inlineCode",{parentName:"p"},"href")," property die de route bepaalt. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Link href="/about">About</Link>\n')),(0,r.kt)("p",null,"Het Link component wrapt de children in een ",(0,r.kt)("inlineCode",{parentName:"p"},"<Text>")," component. Dit is handig voor accessibility maar niet altijd gewenst. Je kan het component aanpassen door de ",(0,r.kt)("inlineCode",{parentName:"p"},"asChild")," property te gebruiken. Deze property zal alle props doorgeven aan het eerste child van het Link component. Het child component moet de ",(0,r.kt)("inlineCode",{parentName:"p"},"onPress")," en ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," props ondersteunen. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Link href="/about" asChild>\n  <Button title="About" />\n</Link>\n')),(0,r.kt)("p",null,"of gebruik makende van de ",(0,r.kt)("inlineCode",{parentName:"p"},"Pressable")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Link href="/about" asChild>\n  <Pressable>\n    <Text>About</Text>\n  </Pressable>\n</Link>\n')),(0,r.kt)("h3",{id:"imperatief-navigeren"},"Imperatief navigeren"),(0,r.kt)("p",null,"Je kan ook imperatief (via programma code) navigeren. Bijvoorbeeld als je een formulier hebt en je wil na het indienen van het formulier naar een andere pagina navigeren. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { router } from 'expo-router';\n...\nrouter.replace(\"/about\");\n...\n")),(0,r.kt)("p",null,"Op het router object kan je de volgende methodes gebruiken:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"push")," : voegt een nieuwe pagina toe aan de navigatie stack"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replace")," : vervangt de huidige pagina in de navigatie stack"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"back")," : gaat terug naar de vorige pagina in de navigatie stack"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"canGoBack"),": geeft aan of er een vorige pagina is in de navigatie stack"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setParams"),": verandert de parameters van de huidige pagina in de navigatie stack")),(0,r.kt)("h3",{id:"dynamische-routes-linken"},"Dynamische routes linken"),(0,r.kt)("p",null,"Je kan dynamische router linken door zelf de route aan te maken door concatenatie van de route en de parameters. Of je kan hiervoor het ",(0,r.kt)("inlineCode",{parentName:"p"},"Href")," object gebruiken. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Link\n  href={{\n    pathname: \"/users/[name]\",\n    params: { name: 'bacon' }\n  }}>\n    View user\n</Link>\n")),(0,r.kt)("h3",{id:"route-vervangen"},"Route vervangen"),(0,r.kt)("p",null,"Per default worden routes toegevoegd aan de navigatie stack. Dit betekent dat de vorige pagina beschikbaar is als de gebruiker terug navigeert. Je kan de ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," property gebruiken om de huidige pagina te vervangen in plaats van een nieuwe toe te voegen. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Link href="/about" replace>\n  <Text>About</Text>\n</Link>\n')),(0,r.kt)("h2",{id:"layout-routes"},"Layout routes"),(0,r.kt)("p",null,"Normaal gezien vult een route het volledige scherm. Als je tussen schermen navigeert is dit een volledige pagina transitie zonder animatie. In native apps verwachten gebruikers dat gedeelde elementen zoals headers en tab bars behouden blijven tussen pagina's. Deze worden gemaakt met behulp van layout routes."),(0,r.kt)("h3",{id:"layout-route-aanmaken"},"Layout route aanmaken"),(0,r.kt)("p",null,"Om een layout route aan te maken maak je een bestand aan met de naam ",(0,r.kt)("inlineCode",{parentName:"p"},"_layout.tsx")," in de app directory. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Slot } from 'expo-router';\n\nconst HomeLayout = () => {\n  return <Slot />;\n}\n\nexport default HomeLayout;\n")),(0,r.kt)("p",null,"In het voorbeeld hierboven zal de ",(0,r.kt)("inlineCode",{parentName:"p"},"Slot")," component de huidige child route renderen. Dit is vergelijkbaar met de ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," prop in React. Deze component kan gewrapt worden met andere componenten om een layout te maken."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Slot } from 'expo-router';\n\nconst HomeLayout = () => {\n  return (\n    <View>\n      <Text>Header</Text>\n      <Slot />\n      <Text>Footer</Text>\n    </View>\n  );\n}\n\nexport default HomeLayout;\n")),(0,r.kt)("p",null,"Expo Router ondersteunt slechts \xe9\xe9n layout route per directory. Als je meerdere layout routes wil gebruiken moet je meerdere directories aanmaken. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- app\n  - _layout.tsx\n  - home\n    - _layout.tsx\n    - index.tsx\n")),(0,r.kt)("p",null,'Het nadeel hiervan is dat het pad hierdoor "vervuilt" wordt met overbodige directories. Je kan dit probleem oplossen door een deel van de directory structuur te verbergen door een deel van het pad te omringen met ronde haakjes. '),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/root/home.tsx")," komt overeen met ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/home")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/(root)/home.tsx")," komt overeen met ",(0,r.kt)("inlineCode",{parentName:"li"},"/home"))),(0,r.kt)("p",null,"Dit is handig om layouts toe te voegen zonder extra segmenten aan de URL toe te voegen. Je kan zoveel groepen toevoegen als je wil."),(0,r.kt)("h2",{id:"native-layouts"},"Native layouts"),(0,r.kt)("p",null,"Uiteraard wordt er niet vaak gebruik gemaakt van eigen layouts en wordt er vooral gebruik gemaakt van de ingebouwde native layouts van het platform. Expo Router ondersteunt de volgende native layouts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stack Navigation"),(0,r.kt)("li",{parentName:"ul"},"Tab Navigation"),(0,r.kt)("li",{parentName:"ul"},"Drawer Navigation"),(0,r.kt)("li",{parentName:"ul"},"Modals")),(0,r.kt)("h3",{id:"stack-navigation"},"Stack Navigation"),(0,r.kt)("p",null,"Stack Navigation is de meest gebruikte layout. Het is een layout waarbij de schermen op elkaar gestapeld worden. Je kan navigeren naar een volgend scherm en terugkeren naar het vorige scherm. "),(0,r.kt)("p",null,"Om de schermen te stacken moet je het ",(0,r.kt)("inlineCode",{parentName:"p"},"_layout.tsx")," bestand aanpassen en een ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack")," component gebruiken."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Stack } from 'expo-router';\n\nconst HomeLayout = () => {\n  return (\n    <Stack/>\n  );\n}\n\nexport default HomeLayout;\n")),(0,r.kt)("h4",{id:"configuratie"},"Configuratie"),(0,r.kt)("p",null,"Je kan de header van de schermen aanpassen door de ",(0,r.kt)("inlineCode",{parentName:"p"},"screenOptions")," property te gebruiken van het ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack")," component. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Stack\n    screenOptions={{\n      headerStyle: {\n        backgroundColor: '#f4511e',\n      },\n      headerTintColor: '#fff',\n      headerTitleStyle: {\n        fontWeight: 'bold',\n      },\n    }}\n/>\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(5334).Z,width:"918",height:"422"})),(0,r.kt)("p",null,"Je kan als children van het ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack")," component de schermen individueel configureren door ze ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack.Screen")," componenten te gebruiken. Dit is handig om bijvoorbeeld de titel van de header aan te passen. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Stack\n    screenOptions={{\n    headerStyle: {\n        backgroundColor: \'#f4511e\',\n    },\n    headerTintColor: \'#fff\',\n    headerTitleStyle: {\n        fontWeight: \'bold\',\n    },\n    }}\n    \n>\n    <Stack.Screen name="index" options={{title: "Home"}}></Stack.Screen>\n    <Stack.Screen name="users/[name]" options={{title: "User"}}></Stack.Screen>\n</Stack>\n')),(0,r.kt)("p",null,"Hierboven gaan we dus de titel van de header aanpassen voor de home pagina en de mische route. "),(0,r.kt)("p",null,"Het is ook mogelijk om het ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack.Screen")," component te gebruiken in het component zelf. Dus in plaats van de ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack")," component te gebruiken in het ",(0,r.kt)("inlineCode",{parentName:"p"},"_layout.tsx")," bestand kan je het ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack.Screen")," component gebruiken in het ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx")," bestand. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const App = () => {\n    return (\n        <View style={styles.container}>\n            <Stack.Screen options={{title: "Home"}}></Stack.Screen>\n            <Text>Home Screen</Text>\n        </View>\n    )\n}\n')),(0,r.kt)("p",null,"Dit maakt het mogelijk om de header iets dynamischer te maken met informatie uit de pagina. Dit is bijvoorbeeld interessant voor pagina's met dynamische routes. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const User = () => {\n    const { name } = useLocalSearchParams<{name: string}>();\n    return (\n        <View style={styles.container}>\n            <Stack.Screen options={{title: "User: " + name}}></Stack.Screen>\n            <Text>User : { name }</Text>\n        </View>\n    )\n}\n')),(0,r.kt)("p",null,"Omdat expo router gebaseerd is op React Navigation kan je alle mogelijke opties voor het ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack.Screen")," component kan je ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/native-stack-navigator/#options"},"hier")," terugvinden. "),(0,r.kt)("h4",{id:"animation"},"Animation"),(0,r.kt)("p",null,"Je kan de animatie van de transitie tussen schermen aanpassen door de ",(0,r.kt)("inlineCode",{parentName:"p"},"animation")," property mee te geven in het options object van het ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack.Screen")," component. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Stack.Screen\n  name=\"index\"\n  options={{\n    animation: 'slide_from_right',\n  }}\n  />\n")),(0,r.kt)("p",null,"De volgende animaties zijn beschikbaar:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default")," : de standaard animatie"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fade")," : fade in en fade out"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slide_from_right")," : slide in van rechts en slide out naar rechts"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slide_from_left")," : slide in van links en slide out naar links"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slide_from_bottom")," : slide in van onder en slide out naar onder"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none"),": geen animatie"),(0,r.kt)("li",{parentName:"ul"},"meer animaties zijn beschikbaar in de ",(0,r.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/native-stack-navigator#animation"},"documentatie"))),(0,r.kt)("h3",{id:"tab-navigation"},"Tab Navigation"),(0,r.kt)("p",null,"De werking van een Tab Navigation is vergelijkbaar met een Stack Navigation. Het verschil is dat de schermen niet op elkaar gestapeld worden maar dat er een tab bar wordt toegevoegd."),(0,r.kt)("p",null,"Om een Tab Navigation te gebruiken moet je het ",(0,r.kt)("inlineCode",{parentName:"p"},"_layout.tsx")," bestand aanpassen en een ",(0,r.kt)("inlineCode",{parentName:"p"},"Tabs")," component gebruiken."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Tabs } from 'expo-router';\n\nconst HomeLayout = () => {\n  return (\n    <Tabs>\n      <Tabs.Screen\n        // Name of the dynamic route.\n        name=\"index\"\n        options={{\n          title: 'Home',\n        }}\n      />\n      <Tabs.Screen\n        // Name of the dynamic route.\n        name=\"about\"\n        options={{\n          title: 'About',\n        }}\n      />\n    </Tabs>\n  );\n}\n\nexport default HomeLayout;\n")),(0,r.kt)("p",null,"Je kan eventueel ook bepaalde paginas onzichtbaar maken uit de tab bar door de href property op ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," te zetten. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Tabs.Screen\n  name="users/[name]"\n  options={{\n    href: null\n  }}\n/>\n')),(0,r.kt)("p",null,"Je kan deze href property ook gebruiken om een andere route te linken aan de tab. Bv als je deze naar een specifieke user wil linken. "),(0,r.kt)("p",null,"Je kan nog meer opties voor het ",(0,r.kt)("inlineCode",{parentName:"p"},"Tabs.Screen")," component ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/bottom-tab-navigator/#options"},"hier")," terugvinden. Een zeer interessante optie is de ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarIcon")," property. Hiermee kan je een icoon toevoegen aan de tab bar. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Tabs } from \'expo-router\';\nimport { FontAwesome } from "@expo/vector-icons";\n\nconst HomeLayout = () => {\n  return (\n    <Tabs>\n      <Tabs.Screen\n        name="index"\n        options={{\n          title: \'Home\',\n          tabBarIcon: ({color, size}) => <FontAwesome name="home" size={size} color={color} />\n        }}\n      />\n      <Tabs.Screen\n        name="about"\n        options={{\n          title: \'About\',\n          tabBarIcon: ({color, size}) => <FontAwesome name="adjust" size={size} color={color} />\n        }}\n      />\n    </Tabs>\n  );\n}\n\nexport default HomeLayout;\n')),(0,r.kt)("p",null,"Een lijst van alle beschikbare icons kan je vinden op ",(0,r.kt)("a",{parentName:"p",href:"https://icons.expo.fyi."},"https://icons.expo.fyi.")," Je hoeft hier geen aparte package voor te installeren, deze icons zijn al beschikbaar in `@expo/vector-icons``."),(0,r.kt)("h3",{id:"drawer-navigation"},"Drawer Navigation"),(0,r.kt)("p",null,"Om een Drawer Navigation te gebruiken moet je het ",(0,r.kt)("inlineCode",{parentName:"p"},"_layout.tsx")," bestand aanpassen en een ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawer")," component gebruiken."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Drawer } from 'expo-router/drawer';\n\nconst Layout = () => {\n  return (\n    <Drawer>\n      <Drawer.Screen\n        name=\"index\"\n        options={{\n          title: 'Home',\n        }}\n      />\n      <Drawer.Screen\n        name=\"about\"\n        options={{\n          title: 'About',\n        }}\n      />\n    </Drawer>\n  );\n}\n\nexport default Layout;\n")),(0,r.kt)("p",null,"Je kan nog meer opties voor het ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawer.Screen")," component ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/drawer-navigator/#options"},"hier")," terugvinden."),(0,r.kt)("h3",{id:"combineren-van-layouts"},"Combineren van layouts"),(0,r.kt)("p",null,"Je kan layouts combineren door meerdere layouts te gebruiken in een directory. Bijvoorbeeld een Tab Navigation in combinatie met een Stack Navigation. Stel dat je eerst een pagina hebt zonder tab bar en als je op een bepaalde link klikt krijg je een pagina met een tab bar."),(0,r.kt)("p",null,"De structuur van de directory ziet er dan als volgt uit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- app\n  - _layout.tsx\n  - home\n    - _layout.tsx\n    - screen1.tsx\n    - screen2.tsx\n")),(0,r.kt)("p",null,"De ",(0,r.kt)("inlineCode",{parentName:"p"},"_layout.tsx")," in de ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," directory ziet er dan als volgt uit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Stack } from 'expo-router';\n\nconst Layout = () => {\n  return (\n    <Stack>\n      <Stack.Screen\n        name=\"index\"\n        options={{\n          // Hide the header for all other routes.\n          headerShown: false,\n        }}\n      />\n      <Stack.Screen\n        name=\"home\"\n        options={{\n          // Set the presentation mode to modal for our modal route.\n          presentation: 'modal',\n          headerShown: false,\n        }}\n      />\n    </Stack>\n  );\n}\n\nexport default Layout;\n")),(0,r.kt)("p",null,"met de ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { View, Text, Button } from 'react-native';\nimport { Link } from 'expo-router';\nconst Home = () => {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{fontWeight: \"bold\", fontSize: 24}}>Welcome to the app</Text>\n      <Text style={{fontWeight: \"100\", marginBottom: 20}}>This is a dummy text</Text>\n      <Link href=\"/home\" replace asChild>\n        <Button title='Home Screen'/>\n      </Link>\n    </View>\n  );\n}\n\nexport default Home;\n")),(0,r.kt)("p",null,"met de ",(0,r.kt)("inlineCode",{parentName:"p"},"home/_layout.tsx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Tabs } from "expo-router"\nimport { FontAwesome } from "@expo/vector-icons";\n\nconst Layout = () => {\n    return (\n        <Tabs>\n            <Tabs.Screen\n                name="screen1"\n                options={{\n                    // Hide the header for all other routes.\n                    headerShown: false,\n                    tabBarIcon: ({color, size}) => <FontAwesome name="home" size={size} color={color} />\n                  }}\n            />\n            <Tabs.Screen\n                name="screen1"\n                options={{\n                    // Hide the header for all other routes.\n                    headerShown: false,\n                    tabBarIcon: ({color, size}) => <FontAwesome name="address-card" size={size} color={color} />\n                  }}\n            />\n        </Tabs>\n    )\n}\n\nexport default Layout;\n')),(0,r.kt)("p",null,"met de ",(0,r.kt)("inlineCode",{parentName:"p"},"home/screen1.tsx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { View, Text } from "react-native";\n\nconst Page1 = () => {\n    return (\n        <View style={{ flex: 1, alignItems: \'center\', justifyContent: \'center\' }}>\n            <Text style={{ fontWeight: "bold", fontSize: 24 }}>Welcome to screen 1</Text>\n            <Text style={{ fontWeight: "100", marginBottom: 20 }}>This is screen 1</Text>\n\n        </View>\n    );\n}\nexport default Page1;\n')))}m.isMDXComponent=!0},8371:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/initial-60b10cb3bb0d0d22bf037f99aa71ebf5.png"},5334:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/screenOptions-12494e9d0e6b077d638d5b962802eaab.png"}}]);