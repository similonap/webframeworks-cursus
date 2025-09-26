import React, { useState } from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const color = count > 0 ? "green" : count < 0 ? "red" : "black";

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
            }}
        >
            <button onClick={() => setCount((previous) => previous + 1)}>Omhoog</button>
            <div style={{ color }}>Count: {count}</div>
            <button onClick={() => setCount((previous) => previous - 1)}>Omlaag</button>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Counter />
            <Counter />
            <Counter />
        </div>
    );
};

export default App;
