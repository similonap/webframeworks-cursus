import React, { useState } from "react";
import styles from "./ShoppingList.module.css";

interface ShoppingListItem {
    name: string;
    quantity: number;
}

const ShoppingList: React.FC = () => {
    const [items, setItems] = useState<ShoppingListItem[]>([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const resetMessages = () => {
        setError("");
        setSuccess("");
    };

    const addItem = () => {
        resetMessages();

        if (!name.trim()) {
            setError("Name must not be empty");
            return;
        }

        if (quantity <= 0) {
            setError("Quantity must be greater than 0");
            return;
        }

        setItems((previous) => [...previous, { name: name.trim(), quantity }]);
        setName("");
        setQuantity(0);
        setSuccess("Item added to shopping list");
    };

    const removeItem = (index: number) => {
        resetMessages();
        setItems((previous) => previous.filter((_, i) => i !== index));
        setSuccess("Item removed from shopping list");
    };

    return (
        <div style={{ width: 500, display: "flex", flexDirection: "column", gap: 16 }}>
            {error && <div className={styles.error}>{error}</div>}
            {success && <div className={styles.success}>{success}</div>}

            <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 8 }}>
                <label htmlFor="item-name">Name:</label>
                <input
                    id="item-name"
                    type="text"
                    placeholder="Name"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                />
                <label htmlFor="item-quantity">Quantity:</label>
                <input
                    id="item-quantity"
                    type="number"
                    min={0}
                    placeholder="Quantity"
                    onChange={(event) => setQuantity(Number(event.target.value) || 0)}
                    value={quantity}
                />
            </div>
            <button type="button" onClick={addItem}>
                Add
            </button>

            <table>
                <thead>
                    <tr>
                        <th style={{ width: 300 }}>Name</th>
                        <th>Quantity</th>
                        <th style={{ width: 120 }}></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={`${item.name}-${index}`}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button type="button" onClick={() => removeItem(index)}>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const App: React.FC = () => {
    return <ShoppingList />;
};

export default App;
