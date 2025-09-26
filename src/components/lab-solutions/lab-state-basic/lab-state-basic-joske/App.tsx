import React, { useState } from "react";
import styles from "./Joske.module.css";

const COLORS = ["red", "yellow", "blue"] as const;

const Joske: React.FC = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const [name, setName] = useState("Joske");
    const [nameField, setNameField] = useState("Joske");
    const [emotion, setEmotion] = useState(":)");
    const [isSquare, setIsSquare] = useState(true);

    const cycleColor = () => {
        setColorIndex((current) => (current + 1) % COLORS.length);
    };

    const applyNameChange = () => {
        setName(nameField);
    };

    const resetName = () => {
        setName("Joske");
        setNameField("Joske");
    };

    return (
        <div className={styles.container}>
            <p>
                <strong>{name}</strong>
            </p>
            <div
                className={styles.square}
                style={{
                    backgroundColor: COLORS[colorIndex],
                    borderRadius: isSquare ? 20 : 400,
                }}
                onClick={cycleColor}
            >
                <p style={{ userSelect: "none" }}>{emotion}</p>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                <input
                    type="text"
                    onChange={(event) => setNameField(event.target.value)}
                    value={nameField}
                />
                <button onClick={resetName}>Reset Name</button>
                <button onClick={applyNameChange}>Set</button>
            </div>

            <select
                onChange={(event) => setEmotion(event.target.value)}
                value={emotion}
                style={{ marginTop: 16 }}
            >
                <option value=":)">:)</option>
                <option value=":(">:(</option>
                <option value=":|">:|</option>
            </select>

            <label style={{ display: "flex", gap: 8, marginTop: 16 }}>
                <input
                    type="checkbox"
                    onChange={(event) => setIsSquare(event.target.checked)}
                    checked={isSquare}
                />
                Square
            </label>
        </div>
    );
};

const App: React.FC = () => {
    return <Joske />;
};

export default App;
