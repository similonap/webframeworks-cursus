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