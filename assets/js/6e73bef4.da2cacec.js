"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[5173],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>l});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),v=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=v(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=v(t),l=r,b=u["".concat(s,".").concat(l)]||u[l]||p[l]||i;return t?a.createElement(b,o(o({ref:n},m),{},{components:t})):a.createElement(b,o({ref:n},m))}));function l(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var v=2;v<i;v++)o[v]=t[v];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>v});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:4},o="Combineren van navigators",c={unversionedId:"react-native-course/navigation/combineren",id:"react-native-course/navigation/combineren",title:"Combineren van navigators",description:"Een van de krachtige features van React Navigation is dat je verschillende navigators kan combineren.",source:"@site/docs/react-native-course/navigation/combineren.md",sourceDirName:"react-native-course/navigation",slug:"/react-native-course/navigation/combineren",permalink:"/webframeworks-cursus/react-native-course/navigation/combineren",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"reactNative",previous:{title:"Tab Navigation",permalink:"/webframeworks-cursus/react-native-course/navigation/tab-navigation"},next:{title:"Labo",permalink:"/webframeworks-cursus/react-native-course/labs/"}},s={},v=[],m={toc:v};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"combineren-van-navigators"},"Combineren van navigators"),(0,r.kt)("p",null,"Een van de krachtige features van React Navigation is dat je verschillende navigators kan combineren."),(0,r.kt)("p",null,"Wil je bijvoorbeeld een app die bestaat uit twee screens. De eerste pagina is een welkomstpagina met een knop om naar de hoofd screen te gaan. De hoofd screen bestaat uit een tab navigation met twee tabs. "),(0,r.kt)("p",null,"Om dit te realiseren moeten we een ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack.Navigator")," component maken met daarin twee screens. De eerste screen is de welkomstpagina. De tweede screen is dan een nieuw component dat de tab navigation bevat."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'expo={"dependencies":"@react-navigation/native-stack,@react-navigation/bottom-tabs,react-native-screens,react-native-safe-area-context,@react-navigation/native,react-native-safe-area-context,@react-navigation/native,react-native-gesture-handler,react-native-reanimated"}',expo:'{"dependencies":"@react-navigation/native-stack,@react-navigation/bottom-tabs,react-native-screens,react-native-safe-area-context,@react-navigation/native,react-native-safe-area-context,@react-navigation/native,react-native-gesture-handler,react-native-reanimated"}'},'import * as React from "react";\n\nimport { NavigationContainer, useNavigation } from "@react-navigation/native";\nimport { createNativeStackNavigator } from "@react-navigation/native-stack";\nimport { createBottomTabNavigator } from "@react-navigation/bottom-tabs";\nimport { View, Button, Text } from "react-native";\n\nconst Stack = createNativeStackNavigator();\nconst Tab = createBottomTabNavigator();\n\nconst Tab1Screen = () => {\n  return (\n    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>\n      <Text>Tab 1!</Text>\n    </View>\n  );\n}\n\nconst Tab2Screen = () => {\n  return (\n    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>\n      <Text>Tab 2!</Text>\n    </View>\n  );\n}\n\nconst HomeScreen = () => {\n  return (\n    <Tab.Navigator>\n        <Tab.Screen name="Tab1" component={Tab1Screen} />\n        <Tab.Screen name="Tab2" component={Tab2Screen} />\n    </Tab.Navigator>\n  );\n}\n\nconst WelcomeScreen = () => {\n  let navigation = useNavigation();\n  return (\n    <View>   \n        <Text>Welcome</Text>\n        <Button title="Go to home screen" onPress={() => navigation.replace("Home")}/>\n    </View>\n  );\n}\n\nconst App = () => {\n    return (\n        <NavigationContainer>\n            <Stack.Navigator>\n                <Stack.Screen name="Welcome" component={WelcomeScreen} />\n                <Stack.Screen name="Home" component={HomeScreen} />\n            </Stack.Navigator>\n        </NavigationContainer>\n    );\n}\n\nexport default App;\n')))}p.isMDXComponent=!0}}]);