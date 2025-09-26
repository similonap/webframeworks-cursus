import React, { useState } from "react";

interface Item {
    name: string;
    price: number;
    inStock: boolean;
}

interface GoodsListProps {
    goods: Item[];
}

const GoodsList: React.FC<GoodsListProps> = ({ goods: initialGoods }) => {
    const [goods, setGoods] = useState(initialGoods);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(500);
    const [inStock, setInStock] = useState(false);

    const addProduct: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setGoods([...goods, { name: productName, price, inStock }]);
        setProductName("");
        setPrice(0);
        setInStock(false);
    };

    return (
        <div>
            <form
                onSubmit={addProduct}
                style={{ display: "grid", gridTemplateColumns: "200px 200px", gap: 8 }}
            >
                <label>Product name:</label>
                <input
                    placeholder="product name"
                    type="text"
                    value={productName}
                    onChange={(event) => setProductName(event.target.value)}
                />
                <label>Price:</label>
                <input
                    placeholder="price"
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(parseInt(event.target.value, 10) || 0)}
                />
                <label>In stock?</label>
                <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(event) => setInStock(event.target.checked)}
                />
                <input
                    type="submit"
                    value="Add product"
                    style={{ gridColumnStart: 1, gridColumnEnd: "span 2" }}
                />
            </form>
            <div style={{ display: "grid", gridTemplateColumns: "300px 100px", gap: 4 }}>
                {goods.map((item) => (
                    <React.Fragment key={item.name}>
                        <span style={{ color: item.inStock ? "black" : "red" }}>{item.name}</span>
                        <span>€ {item.price}</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const goods: Item[] = [
        { name: "iPhone 12", price: 699, inStock: false },
        { name: "iPhone 12 Pro", price: 999, inStock: true },
        { name: "iPhone 12 Pro Max", price: 1099, inStock: true },
        { name: "Samsung Galaxy S20", price: 799, inStock: true },
        { name: "Samsung Galaxy S10", price: 699, inStock: false },
        { name: "Samsung Galaxy S20 Ultra", price: 999, inStock: true },
        { name: "Huawei P30", price: 499, inStock: true },
        { name: "Huawei P40", price: 599, inStock: true },
        { name: "Nokia 3310", price: 399, inStock: false },
    ];

    return <GoodsList goods={goods} />;
};

export default App;
