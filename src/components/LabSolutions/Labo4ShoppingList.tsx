import React, {useState} from "react";
import styles from "./Labo4ShoppingList.module.css";

interface ShoppingListItem { 
    name: string;
    quantity: number;
}

const App = () => {
    const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const addItem = (name: string, quantity: number) => {
        setSuccess("");
        setError("");
        if (quantity <= 0) {
            setError("Quantity must be greater than 0");
            return;
        }
        if (name.length === 0) {
            setError("Name must not be empty");
            return;
        }
        setShoppingList([...shoppingList, { name: name, quantity: quantity }]);
        setError("");
        setName("");
        setQuantity(0);
        setSuccess("Item added to shopping list");
    };

    const removeItem = (index: number) => {
        const newShoppingList = shoppingList.filter((item, i) => i !== index);
        setShoppingList(newShoppingList);
        setSuccess("Item removed from shopping list");
    };

    return (
        <div style={{width: 500}}>
            {error && <div className={styles.error}>
                {error}
            </div>}
            {success && <div className={styles.success}>
                {success}
            </div>}
            <div style={{padding: 10}}>
            <div style={{display: "grid", gridTemplateColumns: "100px 1fr"}}>
                <label>Name:</label>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name}/>
                <label>Quantity:</label>
                <input type="number" placeholder="Quantity" onChange={(e) => setQuantity(parseInt(e.target.value))} value={quantity}/>
            </div>
            <input type="button" value="Add" onClick={() => addItem(name, quantity)}/>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style={{width: 400}}>Name</th>
                        <th>Quantity</th>
                        <th style={{width: 100}}></th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td><input type="button" value="Remove" onClick={() => removeItem(index)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default App;