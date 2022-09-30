"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[350],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),y=o,f=m["".concat(i,".").concat(y)]||m[y]||u[y]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:6},s="Custom Components",l={unversionedId:"react-native-course/custom-components/README",id:"react-native-course/custom-components/README",title:"Custom Components",description:"Properties",source:"@site/docs/react-native-course/custom-components/README.md",sourceDirName:"react-native-course/custom-components",slug:"/react-native-course/custom-components/",permalink:"/webframeworks-cursus/react-native-course/custom-components/",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"reactNative",previous:{title:"Flexbox",permalink:"/webframeworks-cursus/react-native-course/flexbox/"},next:{title:"Lijsten",permalink:"/webframeworks-cursus/react-native-course/lists-and-keys/"}},i={},c=[{value:"Properties",id:"properties",level:2},{value:"Styles doorgeven als props",id:"styles-doorgeven-als-props",level:2},{value:"Default styles",id:"default-styles",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-components"},"Custom Components"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("p",null,"Net zoals in React.js kunnen we ook in React Native onze eigen componenten maken. We gaan zoveel mogelijk onze componenten opsplitsen in kleine deeltjes. We kunnen ook gebruik maken van properties om informatie door te geven aan onze componenten."),(0,o.kt)("p",null,"We doen dit helemaal hetzelfde als in React.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"expo={}",expo:"{}"},'import {View, StatusBar} from \'react-native\';\n\ninterface BoxProps {\n    color: string,\n    size: number\n}\n\nconst Box = ({color, size}: BoxProps) => {\n  return (\n    <View\n      style={{\n        backgroundColor: color,\n        width: size,\n        height: size,\n      }}\n    />\n  );\n};\n\nconst App = () => {\n    return (\n        <View style={{flexDirection: "column", flex: 1}}>\n            <StatusBar translucent={false}/>\n            <Box size={40} color="red"/>\n            <Box size={40} color="green"/>\n            <Box size={40} color="blue"/>\n        </View>\n    )\n}\n\nexport default App;\n')),(0,o.kt)("h2",{id:"styles-doorgeven-als-props"},"Styles doorgeven als props"),(0,o.kt)("p",null,"We kunnen zelfs ons style object meegeven als property om zo onze componenten nog flexibeler te maken."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"expo={}",expo:"{}"},'import {View, StatusBar} from \'react-native\';\n\ninterface BoxProps {\n    boxStyle: StyleProp<ViewStyle>\n}\n\nconst Box = ({boxStyle}: BoxProps) => {\n  return (\n    <View\n      style={boxStyle}\n    />\n  );\n};\n\nconst App = () => {\n    return (\n        <View style={{flexDirection: "column", flex: 1}}>\n            <StatusBar translucent={false}/>\n            <Box boxStyle={{backgroundColor: "red", width: 40, height: 40}}/>\n            <Box boxStyle={{backgroundColor: "green", width: 40, height: 40}}/>\n            <Box boxStyle={{backgroundColor: "blue", width: 40, height: 40}}/>\n        </View>\n    )\n}\n\nexport default App;\n')),(0,o.kt)("h2",{id:"default-styles"},"Default styles"),(0,o.kt)("p",null,"We kunnen ook default styles meegeven aan onze componenten. Dit doen we door een default waarde mee te geven aan onze property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"expo={}",expo:"{}"},'import {View, StatusBar} from \'react-native\';\n\ninterface BoxProps {\n    boxStyle?: StyleProp<ViewStyle>\n}\n\nconst Box = ({boxStyle = {backgroundColor: "red", width: 40, height: 40}}: BoxProps) => {\n  return (\n    <View\n      style={boxStyle}\n    />\n  );\n};\n\nconst App = () => {\n    return (\n        <View style={{flexDirection: "column", flex: 1}}>\n            <StatusBar translucent={false}/>\n            <Box/>\n            <Box/>\n            <Box/>\n        </View>\n    )\n}\n\nexport default App;\n')),(0,o.kt)("h1",{id:"style-array"},"Style array"),(0,o.kt)("p",null,"Een heel belangrijke techniek die je in React Native kan toepassen en niet in React.js is het gebruik van een array van styles. De laatste style in de array heeft altijd voorrang. Zo kan je style inheritance toepassen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"expo={}",expo:"{}"},'import {View, StyleSheet, StatusBar} from \'react-native\';\n\ninterface BoxProps {\n    boxStyle?: StyleProp<ViewStyle>\n}\n\nconst DefaultBoxStyle = StyleSheet.create({\n    box: {\n        backgroundColor: "red",\n        width: 40,\n        height: 40\n    }\n})\n\nconst Box = ({boxStyle}: BoxProps) => {\n  return (\n    <View\n      style={[DefaultBoxStyle.box, boxStyle]}\n    />\n  );\n};\n\nconst App = () => {\n    return (\n        <View style={{flexDirection: "column", flex: 1}}>\n            <StatusBar translucent={false}/>\n            <Box/>\n            <Box boxStyle={{backgroundColor: "green"}}/>\n            <Box boxStyle={{backgroundColor: "blue"}}/>\n        </View>\n    )\n}\n\nexport default App;\n')))}u.isMDXComponent=!0}}]);