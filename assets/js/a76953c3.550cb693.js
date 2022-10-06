"use strict";(self.webpackChunkwebframeworks_cursus=self.webpackChunkwebframeworks_cursus||[]).push([[4629],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},c="Extra voorbeelden",i={unversionedId:"wf-course/state/voorbeelden",id:"wf-course/state/voorbeelden",title:"Extra voorbeelden",description:"Zoeken en filteren",source:"@site/docs/wf-course/state/voorbeelden.md",sourceDirName:"wf-course/state",slug:"/wf-course/state/voorbeelden",permalink:"/wf-course/state/voorbeelden",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wfCourse",previous:{title:"State",permalink:"/wf-course/state/"},next:{title:"Hooks",permalink:"/wf-course/hooks/"}},s={},l=[{value:"Zoeken en filteren",id:"zoeken-en-filteren",level:2},{value:"Toevoegen in een lijst",id:"toevoegen-in-een-lijst",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extra-voorbeelden"},"Extra voorbeelden"),(0,o.kt)("h2",{id:"zoeken-en-filteren"},"Zoeken en filteren"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import React, { useState } from "react";\n\ninterface Item {\n    name: string;\n    price: number;\n    inStock: boolean;\n}\n\nconst GoodsList = ({goods} : {goods: Item[]}) => {\n    const [searchText, setSearchText] = useState("");\n    const [showOnlyInStock, setShowOnlyInStock] = useState(false);\n\n    const filteredGoods = goods.filter((item) => {\n        const nameContainsSearchText = item.name.toLowerCase().includes(searchText.toLowerCase());\n        const inStock = item.inStock;\n        return nameContainsSearchText && (!showOnlyInStock || inStock);\n    });\n\n    return (\n        <div>\n            <div>\n                <input placeholder="search" type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} />\n                <input type="checkbox" checked={showOnlyInStock} onChange={(event) => setShowOnlyInStock(event.target.checked)} /> Show only in stock\n            </div>\n            <div style={{display: "grid", gridTemplateColumns: "300px 100px"}}>\n                {filteredGoods.map((item) => (\n                    <React.Fragment key={item.name}>\n                        <span style={{color: item.inStock ? "black" : "red"}}>{item.name}</span>\n                        <span>\u20ac {item.price}</span>\n                    </React.Fragment>))}\n            </div>\n        </div>\n    );\n}\n\nconst App = () => {\n    let goods : Item[] = [\n        {\n            name: "iPhone 12",\n            price: 699,\n            inStock: false\n        },\n        {\n            name: "iPhone 12 Pro",\n            price: 999,\n            inStock: true\n        },\n        {\n            name: "iPhone 12 Pro Max",\n            price: 1099,\n            inStock: true\n        },\n        {\n            name: "Samsung Galaxy S20",\n            price: 799,\n            inStock: true\n        },\n        {\n            name: "Samsung Galaxy S10",\n            price: 699,\n            inStock: false\n        },\n        {\n            name: "Samsung Galaxy S20 Ultra",\n            price: 999,\n            inStock: true\n        },\n        {\n            name: "Huawei P30",\n            price: 499,\n            inStock: true\n        },\n        {\n            name: "Huawei P40",\n            price: 599,\n            inStock: true\n        },\n        {\n            name: "Nokia 3310",\n            price: 399,\n            inStock: false\n        }\n\n    ]\n\n    return <GoodsList goods={goods}/>\n\n}\n\nexport default App;\n')),(0,o.kt)("h2",{id:"toevoegen-in-een-lijst"},"Toevoegen in een lijst"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'codesandbox={"template": "react", "filename": "src/App.tsx"}',codesandbox:'{"template":','"react",':!0,'"filename":':!0,'"src/App.tsx"}':!0},'import React, { useState } from "react";\n\ninterface Item {\n    name: string;\n    price: number;\n    inStock: boolean;\n}\n\nconst GoodsList = ({goods : propsGood} : {goods: Item[]}) => {\n    const [goods, setGoods] = useState(propsGood);\n    const [productName, setProductName] = useState("");\n    const [price, setPrice] = useState(500);\n    const [inStock, setInStock] = useState(false);\n\n    const addProduct : React.FormEventHandler<HTMLFormElement> = (e) => {\n        e.preventDefault();\n        setGoods([...goods, {name: productName, price: price, inStock: inStock}]);\n        setProductName("");\n        setPrice(0);\n        setInStock(false);\n    }\n\n    return (\n        <div>\n            <div>\n                <form onSubmit={addProduct} style={{display: "grid", gridTemplateColumns: "200px 200px"}}>\n                <label>Product name: </label><input placeholder="product name" type="text" value={productName} onChange={(event) => setProductName(event.target.value)} />\n                <label>Price: </label><input placeholder="price" type="number" value={price} onChange={(event) => setPrice(parseInt(event.target.value))} />\n                <label>In stock? </label><input type="checkbox" checked={inStock} onChange={(event) => setInStock(event.target.checked)} /> \n                <input type="submit" value="Add product" style={{gridColumnStart: 1, gridColumnEnd: "span 2"}}/>\n                </form>\n            </div>\n            <div style={{display: "grid", gridTemplateColumns: "300px 100px"}}>\n                {goods.map((item) => (\n                    <React.Fragment key={item.name}>\n                        <span style={{color: item.inStock ? "black" : "red"}}>{item.name}</span>\n                        <span>\u20ac {item.price}</span>\n                    </React.Fragment>))}\n            </div>\n        </div>\n    );\n}\n\nconst App = () => {\n    let goods : Item[] = [\n        {\n            name: "iPhone 12",\n            price: 699,\n            inStock: false\n        },\n        {\n            name: "iPhone 12 Pro",\n            price: 999,\n            inStock: true\n        },\n        {\n            name: "iPhone 12 Pro Max",\n            price: 1099,\n            inStock: true\n        },\n        {\n            name: "Samsung Galaxy S20",\n            price: 799,\n            inStock: true\n        },\n        {\n            name: "Samsung Galaxy S10",\n            price: 699,\n            inStock: false\n        },\n        {\n            name: "Samsung Galaxy S20 Ultra",\n            price: 999,\n            inStock: true\n        },\n        {\n            name: "Huawei P30",\n            price: 499,\n            inStock: true\n        },\n        {\n            name: "Huawei P40",\n            price: 599,\n            inStock: true\n        },\n        {\n            name: "Nokia 3310",\n            price: 399,\n            inStock: false\n        }\n\n    ]\n\n    return <GoodsList goods={goods}/>\n\n}\n\nexport default App;\n')))}u.isMDXComponent=!0}}]);