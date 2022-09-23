"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[8816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:7},i="Controlled Components",l={unversionedId:"react-native-course/controlled-components/README",id:"react-native-course/controlled-components/README",title:"Controlled Components",description:"Net zoals in React.js gebruiken we in React Native ook state om de waarde van een input te beheren. We kunnen dit doen door een useState hook te gebruiken. We gebruiken dan de change handlers om deze state te updaten.",source:"@site/docs/react-native-course/controlled-components/README.md",sourceDirName:"react-native-course/controlled-components",slug:"/react-native-course/controlled-components/",permalink:"/webframeworks-cursus/react-native-course/controlled-components/",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"reactNative",previous:{title:"Lijsten",permalink:"/webframeworks-cursus/react-native-course/lists-and-keys/"},next:{title:"Labo",permalink:"/webframeworks-cursus/react-native-course/labs/"}},p={},s=[{value:"TextInput",id:"textinput",level:2},{value:"TextInput met getallen",id:"textinput-met-getallen",level:2},{value:"Button",id:"button",level:2},{value:"Switch",id:"switch",level:2},{value:"Conditioneel renderen",id:"conditioneel-renderen",level:2},{value:"ActivityIndicator",id:"activityindicator",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"controlled-components"},"Controlled Components"),(0,a.kt)("p",null,"Net zoals in React.js gebruiken we in React Native ook ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," om de waarde van een input te beheren. We kunnen dit doen door een ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook te gebruiken. We gebruiken dan de change handlers om deze state te updaten."),(0,a.kt)("p",null,"We geven in dit onderdeel een aantal voorbeelden van core components en hoe we deze kunnen gebruiken in samenwerking met ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),". "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Zorg altijd voor een state voor elk element waar je invoer kan ingeven. Ook al lijkt het in eerste instantie niet nodig.")),(0,a.kt)("h2",{id:"textinput"},"TextInput"),(0,a.kt)("p",null,"Om een TextInput een controlled component te maken, moeten we de ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," property meegeven aan de ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput")," component. We moeten ook een ",(0,a.kt)("inlineCode",{parentName:"p"},"onChangeText")," handler meegeven om de state te updaten."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"expo={}",expo:"{}"},"import React, {useState} from 'react';\nimport {View, TextInput, Button, Alert, Text} from 'react-native';\n\nconst App = () => {\n    const [text, setText] = useState(\"\");\n\n    return (\n        <View style={{flexDirection: \"column\", flex: 1, marginTop: 40}}>\n            <TextInput\n                style={{height: 40, borderColor: 'gray', borderWidth: 1}}\n                onChangeText={text => setText(text)}\n                value={text}\n            />\n            <Text>You typed: {text}</Text>\n            <Button title=\"Show Value\" onPress={() => { Alert.alert(text); }}/>\n        </View>\n    )\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"Het is ook mogelijk om meerdere componenten aan 1 state te binden. In dit voorbeeld binden we 2 ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput")," componenten aan 1 state. Beide zullen up to date blijven bij de huidige waarde van de state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"expo={}",expo:"{}"},"import React, {useState} from 'react';\nimport {View, TextInput, Button, Alert, Text} from 'react-native';\n\nconst App = () => {\n    const [text, setText] = useState(\"\");\n\n    return (\n        <View style={{flexDirection: \"column\", flex: 1, marginTop: 40}}>\n            <TextInput\n                style={{height: 40, borderColor: 'gray', borderWidth: 1}}\n                onChangeText={text => setText(text)}\n                value={text}\n            />\n            <TextInput\n                style={{height: 40, borderColor: 'gray', borderWidth: 1}}\n                onChangeText={text => setText(text)}\n                value={text}\n            />\n        </View>\n    )\n}\n\nexport default App;\n")),(0,a.kt)("h2",{id:"textinput-met-getallen"},"TextInput met getallen"),(0,a.kt)("p",null,"Als we een ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput")," component willen gebruiken om getallen in te geven, moeten we de ",(0,a.kt)("inlineCode",{parentName:"p"},"keyboardType")," property meegeven aan de ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput")," component. Niet alle keyboards in Android hebben een numeriek keyboard. Dus de gebruiker kan nog steeds niet numerieke waarden ingeven. "),(0,a.kt)("p",null,"De beste manier om dit op te lossen is toch een string als state te gebruiken en deze te converteren naar een numerieke waarde wanneer we deze nodig hebben."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"expo={}",expo:"{}"},'import React, {useState} from \'react\';\nimport {View, TextInput, Button, Alert, Text} from \'react-native\';\n\nconst App = () => {\n    const [number, setNumber] = useState("0");\n\n    const validateAndMultiply = () => {\n      if (isNaN(number)) {\n        Alert.alert("This is not a number!");\n        setNumber("0");\n      } else {\n        setNumber((parseInt(number) * 2).toString())\n      }\n    }\n\n    return (\n        <View style={{flexDirection: "column", flex: 1, marginTop: 40}}>\n            <TextInput\n                keyboardType="number-pad"\n                style={{height: 40, borderColor: \'gray\', borderWidth: 1}}\n                onChangeText={text => setNumber(text)}\n                value={number}\n            />\n            <Button title="Multiply" onPress={validateAndMultiply}/>\n        </View>\n    )\n}\n\nexport default App;\n')),(0,a.kt)("h2",{id:"button"},"Button"),(0,a.kt)("p",null,"We kunnen ook een ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," component gebruiken om de state te updaten. We kunnen dit doen door een ",(0,a.kt)("inlineCode",{parentName:"p"},"onPress")," handler mee te geven aan de ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," component. Buttons zijn geen controlled components."),(0,a.kt)("p",null,"We zullen in het onderstaande voorbeeld een teller tonen die we aan de hand van de Button kunnen verhogen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"expo={}",expo:"{}"},"import React, {useState} from 'react';\nimport {View, Button, Text} from 'react-native';\n\nconst App = () => {\n    const [counter, setCounter] = useState(0);\n\n    return (\n        <View style={{flexDirection: \"column\", flex: 1, marginTop: 40}}>\n            <Text>Counter: {counter}</Text>\n            <Button title=\"Increase Counter\" onPress={() => { setCounter(counter + 1); }}/>\n        </View>\n    )\n}\n\nexport default App;\n")),(0,a.kt)("h2",{id:"switch"},"Switch"),(0,a.kt)("p",null,"Een ",(0,a.kt)("inlineCode",{parentName:"p"},"Switch")," component heeft een ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," property en een ",(0,a.kt)("inlineCode",{parentName:"p"},"onValueChange")," handler. We kunnen deze gebruiken om een ",(0,a.kt)("inlineCode",{parentName:"p"},"Switch")," component te maken die een controlled component is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"expo={}",expo:"{}"},'import React, {useState} from \'react\';\n\nimport {View, Switch, Text} from \'react-native\';\n\nconst App = () => {\n    const [isEnabled, setIsEnabled] = useState(false);\n\n    return (\n        <View style={{flexDirection: "column", flex: 1, marginTop: 40}}>\n            <Switch\n                onValueChange={() => setIsEnabled(previousState => !previousState)}\n                value={isEnabled}\n            />\n            <Text>Switch is {isEnabled ? "On" : "Off"}</Text>\n        </View>\n    )\n}\n\nexport default App;\n')),(0,a.kt)("h2",{id:"conditioneel-renderen"},"Conditioneel renderen"),(0,a.kt)("p",null,"We kunnen ook conditioneel renderen in React Native. We gebruiken hier vooral de ",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," operator voor of de ternary operator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"expo={}",expo:"{}"},'import React, {useState} from \'react\';\n\nimport {View, Switch, Text, Image} from \'react-native\';\n\nconst App = () => {\n    const [isEnabled, setIsEnabled] = useState(false);\n\n    return (\n        <View style={{flexDirection: "column", flex: 1, marginTop: 40}}>\n            <Switch\n                onValueChange={() => setIsEnabled(previousState => !previousState)}\n                value={isEnabled}\n            />\n            {isEnabled ? <Image style={{width: 60, height: 60}} source={{uri: "https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg/alarm-light.svg"}}/>\n            :\n            <Image style={{width: 60, height: 60}} source={{uri: "https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg/alarm-light-off.svg"}}/>\n            }\n        </View>\n    )\n}\n\nexport default App;\n')),(0,a.kt)("h2",{id:"activityindicator"},"ActivityIndicator"),(0,a.kt)("p",null,"Een ",(0,a.kt)("inlineCode",{parentName:"p"},"ActivityIndicator")," component heeft een ",(0,a.kt)("inlineCode",{parentName:"p"},"animating")," property en een ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," property. Meestal is de animating property afhankelijk van de waarde van een state. Als we bijvoorbeeld iets willen laden, dan zetten we de ",(0,a.kt)("inlineCode",{parentName:"p"},"animating")," property op ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," en als we klaar zijn met laden, dan zetten we de ",(0,a.kt)("inlineCode",{parentName:"p"},"animating")," property op ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"expo={}",expo:"{}"},'import React, {useState} from \'react\';\n\nimport {View, Button, Text, ActivityIndicator} from \'react-native\';\n\ninterface TimezoneInterface {\n    datetime: string;\n}\n\nconst App = () => {\n    const [loading, setLoading] = useState(false);\n    const [result, setResult] = useState("");\n\n    const loadData = async() => {\n    \n        setLoading(true);\n        \n        let result = await fetch("https://worldtimeapi.org/api/timezone/Europe/Brussels");\n        let json : TimezoneInterface = await result.json();\n\n        setResult(json.datetime);\n\n        setLoading(false);\n    }\n\n    return (\n        <View style={{flexDirection: "column", flex: 1, marginTop: 40}}>\n            <Button title="Load data" onPress={() => loadData() }/>\n            <ActivityIndicator animating={loading}/>\n            <Text>{result}</Text>\n        </View>\n    )\n}\n\nexport default App;\n')))}c.isMDXComponent=!0}}]);