# Extra voorbeelden

## Language selector

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"} 
import {useState} from "react";

interface Translation {
  [language: string]: string
}

interface Translations {
  key: string,
  translations: Translation
}

let translations : Translations[] = [
  {
    key: "welcome",
    translations: {
      "NL": "Welkom op de website.",
      "EN": "Welcome to the website.",
      "FR": "Bienvenue sur le site."
    }
  },
  {
    key: "language",
    translations: {
      "NL": "Deze website is volledig vertaald in het Nederlands.",
      "EN": "This website is fully translated into english.",
      "FR": "Ce site est entièrement traduit en francais."
    }
  }
]

const getTranslation = (language: string, key: string) => {
  return translations.find(t => t.key === key)?.translations[language];
}

const App = () => {
  const [language, setLanguage] = useState("NL");

  return (
    <div>
      <div>
        <button onClick={() => setLanguage("NL")}>NL</button>
        <button onClick={() => setLanguage("EN")}>EN</button>
        <button onClick={() => setLanguage("FR")}>FR</button>
      </div>
      <h1>{getTranslation(language, "welcome")}</h1>
      <p>{getTranslation(language, "language")}</p>
    </div>
  )

}
export default App;
```

## Zoeken en filteren

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"} 
import React, { useState } from "react";

interface Item {
    name: string;
    price: number;
    inStock: boolean;
}

const GoodsList = ({goods} : {goods: Item[]}) => {
    const [searchText, setSearchText] = useState("");
    const [showOnlyInStock, setShowOnlyInStock] = useState(false);

    const filteredGoods = goods.filter((item) => {
        const nameContainsSearchText = item.name.toLowerCase().includes(searchText.toLowerCase());
        const inStock = item.inStock;
        return nameContainsSearchText && (!showOnlyInStock || inStock);
    });

    return (
        <div>
            <div>
                <input placeholder="search" type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
                <input type="checkbox" checked={showOnlyInStock} onChange={(event) => setShowOnlyInStock(event.target.checked)} /> Show only in stock
            </div>
            <div style={{display: "grid", gridTemplateColumns: "300px 100px"}}>
                {filteredGoods.map((item) => (
                    <React.Fragment key={item.name}>
                        <span style={{color: item.inStock ? "black" : "red"}}>{item.name}</span>
                        <span>€ {item.price}</span>
                    </React.Fragment>))}
            </div>
        </div>
    );
}

const App = () => {
    let goods : Item[] = [
        {
            name: "iPhone 12",
            price: 699,
            inStock: false
        },
        {
            name: "iPhone 12 Pro",
            price: 999,
            inStock: true
        },
        {
            name: "iPhone 12 Pro Max",
            price: 1099,
            inStock: true
        },
        {
            name: "Samsung Galaxy S20",
            price: 799,
            inStock: true
        },
        {
            name: "Samsung Galaxy S10",
            price: 699,
            inStock: false
        },
        {
            name: "Samsung Galaxy S20 Ultra",
            price: 999,
            inStock: true
        },
        {
            name: "Huawei P30",
            price: 499,
            inStock: true
        },
        {
            name: "Huawei P40",
            price: 599,
            inStock: true
        },
        {
            name: "Nokia 3310",
            price: 399,
            inStock: false
        }

    ]

    return <GoodsList goods={goods}/>

}

export default App;
```

## Toevoegen in een lijst

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import React, { useState } from "react";

interface Item {
    name: string;
    price: number;
    inStock: boolean;
}

const GoodsList = ({goods : propsGood} : {goods: Item[]}) => {
    const [goods, setGoods] = useState(propsGood);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(500);
    const [inStock, setInStock] = useState(false);

    const addProduct : React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setGoods([...goods, {name: productName, price: price, inStock: inStock}]);
        setProductName("");
        setPrice(0);
        setInStock(false);
    }

    return (
        <div>
            <div>
                <form onSubmit={addProduct} style={{display: "grid", gridTemplateColumns: "200px 200px"}}>
                <label>Product name: </label><input placeholder="product name" type="text" value={productName} onChange={(event) => setProductName(event.target.value)} />
                <label>Price: </label><input placeholder="price" type="number" value={price} onChange={(event) => setPrice(parseInt(event.target.value))} />
                <label>In stock? </label><input type="checkbox" checked={inStock} onChange={(event) => setInStock(event.target.checked)} /> 
                <input type="submit" value="Add product" style={{gridColumnStart: 1, gridColumnEnd: "span 2"}}/>
                </form>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "300px 100px"}}>
                {goods.map((item) => (
                    <React.Fragment key={item.name}>
                        <span style={{color: item.inStock ? "black" : "red"}}>{item.name}</span>
                        <span>€ {item.price}</span>
                    </React.Fragment>))}
            </div>
        </div>
    );
}

const App = () => {
    let goods : Item[] = [
        {
            name: "iPhone 12",
            price: 699,
            inStock: false
        },
        {
            name: "iPhone 12 Pro",
            price: 999,
            inStock: true
        },
        {
            name: "iPhone 12 Pro Max",
            price: 1099,
            inStock: true
        },
        {
            name: "Samsung Galaxy S20",
            price: 799,
            inStock: true
        },
        {
            name: "Samsung Galaxy S10",
            price: 699,
            inStock: false
        },
        {
            name: "Samsung Galaxy S20 Ultra",
            price: 999,
            inStock: true
        },
        {
            name: "Huawei P30",
            price: 499,
            inStock: true
        },
        {
            name: "Huawei P40",
            price: 599,
            inStock: true
        },
        {
            name: "Nokia 3310",
            price: 399,
            inStock: false
        }

    ]

    return <GoodsList goods={goods}/>

}

export default App;
```