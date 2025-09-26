import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { useState } from "react";

const RandomCat: React.FC = () => {
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

    const setRandomPosition = () => {
        const top = Math.floor(Math.random() * window.innerHeight);
        const left = Math.floor(Math.random() * window.innerWidth);
        setPosition({ top, left });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {position && (
                <img
                    src="https://cataas.com/cat?width=200&height=200"
                    alt="Random cat"
                    style={{ position: "fixed", top: position.top, left: position.left }}
                />
            )}
            <button onClick={setRandomPosition}>Random Cat</button>
        </div>
    );
};

const App: React.FC = () => {
    return <BrowserOnly>{() => <RandomCat />}</BrowserOnly>;
};

export default App;
