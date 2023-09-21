"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[7248],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return t?r.createElement(k,s(s({ref:n},d),{},{components:t})):r.createElement(k,s({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1},s="Folder structuur",i={unversionedId:"wf-course/componenten/opsplitsen",id:"wf-course/componenten/opsplitsen",title:"Folder structuur",description:"Tot nu toe stond al onze React code in het App.tsx bestand. Zelfs al hadden we meerdere componenten dan zaten die ook allemaal in dit bestand vervat. Als alle code in hetzelfde bestand staat, is het moeilijk om de code terug te vinden die op een gegeven moment belangrijk is. Bovendien is het dan ook niet mogelijk \xe9\xe9n component te herbruiken zonder de code van andere componenten over te nemen.",source:"@site/docs/wf-course/componenten/opsplitsen.md",sourceDirName:"wf-course/componenten",slug:"/wf-course/componenten/opsplitsen",permalink:"/webframeworks-cursus/wf-course/componenten/opsplitsen",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"wfCourse",previous:{title:"Props",permalink:"/webframeworks-cursus/wf-course/componenten/props"},next:{title:"Styling",permalink:"/webframeworks-cursus/wf-course/componenten/stylen"}},p={},l=[{value:"Aparte bestanden per component",id:"aparte-bestanden-per-component",level:2},{value:"Van component files naar React folders",id:"van-component-files-naar-react-folders",level:2}],d={toc:l};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"folder-structuur"},"Folder structuur"),(0,o.kt)("p",null,"Tot nu toe stond al onze React code in het ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," bestand. Zelfs al hadden we meerdere componenten dan zaten die ook allemaal in dit bestand vervat. Als alle code in hetzelfde bestand staat, is het moeilijk om de code terug te vinden die op een gegeven moment belangrijk is. Bovendien is het dan ook niet mogelijk \xe9\xe9n component te herbruiken zonder de code van andere componenten over te nemen."),(0,o.kt)("p",null,"In React zijn componenten niet gekoppeld aan een specifieke bestandenstructuur. Toch zijn er bepaalde, veel toegepaste, afspraken. Deze worden hier toegelicht."),(0,o.kt)("h2",{id:"aparte-bestanden-per-component"},"Aparte bestanden per component"),(0,o.kt)("p",null,"Een eerste verbetering bestaat erin elke component in een eigen bestand te plaatsen. Componenten kunnen dan op dezelfde manier ge\xefmporteerd worden als andere functies. Indien er bijvoorbeeld componenten ",(0,o.kt)("inlineCode",{parentName:"p"},"App"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Header"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," en ",(0,o.kt)("inlineCode",{parentName:"p"},"ListItem")," zijn, worden deze ondergebracht in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"List.tsx")," en ",(0,o.kt)("inlineCode",{parentName:"p"},"ListItem.tsx"),"."),(0,o.kt)("p",null,"We bekomen een structuur die er als volgt uitziet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- src\n--- App.tsx\n--- List.tsx\n--- ListItem.tsx\n--- types.ts\n")),(0,o.kt)("p",null,"Het bestand List.tsx ziet er dan als volgt uit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react-split-files", "filename": "src/List.tsx"}',codesandbox:'{"template":','"react-split-files",':!0,'"filename":':!0,'"src/List.tsx"}':!0},'import ListItem from "./ListItem";\nimport { Game } from "./types";\n\ninterface ListProps {\n    games: Game[]\n}\n\nconst List = ({games}: ListProps) => {\n  return (\n    <div>\n    {games.map((game: Game) => {\n        return <ListItem key={game.id} game={game}/>\n      })}\n    </div>\n  );\n}\n\nexport default List;\n')),(0,o.kt)("p",null,"We zorgen met de laatste lijn dat we de List component exporteren zodat andere bestanden die kunnen importeren. Je ziet hierboven ook hoe dat importeren in zijn werk zal gaan. Je ziet dat hier het keyword default bij de export wordt gezet. Dit is nodig zodat je de componenten kan importeren op de volgende manier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import ListItem from "./ListItem";\n')),(0,o.kt)("p",null,"Soms zie je ook de syntax met { } in de import. Dit wil zeggen dat er meerdere functies, variabelen,... worden ge\xebxporteerd in een bestand. Een goed voorbeeld hiervan is een nieuw bestand dat we hebben aangemaakt voor alle types in te beschrijven. We hebben alle types die met het model te maken hebben in 1 bestand gezet: ",(0,o.kt)("inlineCode",{parentName:"p"},"types.ts"),". "),(0,o.kt)("p",null,"Op dit moment staat daar  1 interface in, maar het is uiteraard niet ondenkbaar dat daar meerdere interfaces zullen zitten. We exporteren dus elke interface apart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react-split-files", "filename": "src/types.ts"}',codesandbox:'{"template":','"react-split-files",':!0,'"filename":':!0,'"src/types.ts"}':!0},"export interface Game {\n  id?: number\n  name: string,\n  releaseYear: number,\n  sales: number\n}\n")),(0,o.kt)("h2",{id:"van-component-files-naar-react-folders"},"Van component files naar React folders"),(0,o.kt)("p",null,"Naarmate een project groeit, worden componenten complexer. Er worden styles en tests  toegevoegd. Je zou de vorige structuur kunnen blijven volgen en deze bestanden naast de component bestanden plaatsen. Vaak worden deze bestanden ook nog in een folder components geplaatst om het onderscheid te maken met andere code.\nDe bestandenstructuur ziet er dan bijvoorbeeld zo uit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"src\n\u2514\u2500\u2500 components\n    \u251c\u2500\u2500 App.css\n    \u251c\u2500\u2500 App.test.tsx\n    \u251c\u2500\u2500 App.tsx\n    \u251c\u2500\u2500 List.css\n    \u251c\u2500\u2500 List.test.tsx\n    \u2514\u2500\u2500 List.tsx\n")),(0,o.kt)("p",null,"Op termijn is deze aanpak niet houdbaar. Daarom verkiest men bij grotere projecten vaak \xe9\xe9n directory per component, als volgt: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"src\n\u2514\u2500\u2500 components\n    \u251c\u2500\u2500 App\n    \u2502\xa0\xa0 \u251c\u2500\u2500 App.css\n    \u2502\xa0\xa0 \u251c\u2500\u2500 App.test.tsx\n    \u2502\xa0\xa0 \u2514\u2500\u2500 App.tsx\n    \u2514\u2500\u2500 List\n        \u251c\u2500\u2500 List.css\n        \u251c\u2500\u2500 List.test.tsx\n        \u2514\u2500\u2500 List.tsx\n")),(0,o.kt)("p",null,"De bestandsnamen in dit voorbeeld zijn zuiver ter illustratie. Afhankelijk van het gebruikte test framework, de techniek om componenten te stylen enzovoort kunnen er andere afspraken gevolgd worden. Hoe dan ook staan folders toe tijdens het ontwikkelen niet-relevante bestanden te verbergen. "),(0,o.kt)("p",null,"In sommige gevallen horen componenten sterk samen. In het voorbeeld bovenaan deze pagina werd gebruikt gemaakt van ListItem. Deze wordt enkel gebruikt als onderdeel van de List component. Meestal worden zo'n componenten samen in \xe9\xe9n folder geplaatst, als volgt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"src\n\u2514\u2500\u2500 components\n    \u251c\u2500\u2500 App\n    \u2502\xa0\xa0 \u251c\u2500\u2500 App.css\n    \u2502\xa0\xa0 \u251c\u2500\u2500 App.test.tsx\n    \u2502\xa0\xa0 \u2514\u2500\u2500 App.tsx\n    \u2514\u2500\u2500 List\n        \u251c\u2500\u2500 List.css\n        \u251c\u2500\u2500 List.test.tsx\n        \u251c\u2500\u2500 List.tsx\n        \u251c\u2500\u2500 ListItem.css\n        \u251c\u2500\u2500 ListItem.test.tsx\n        \u2514\u2500\u2500 ListItem.tsx\n")))}c.isMDXComponent=!0}}]);