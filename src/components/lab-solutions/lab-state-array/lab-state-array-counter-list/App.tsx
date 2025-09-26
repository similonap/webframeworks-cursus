import React, { useMemo, useState } from "react";

const CounterList: React.FC = () => {
    const [counters, setCounters] = useState<number[]>([]);

    const addCounter = () => {
        setCounters((previous) => [...previous, 0]);
    };

    const updateCounter = (index: number, delta: number) => {
        setCounters((previous) =>
            previous.map((value, currentIndex) =>
                currentIndex === index ? value + delta : value
            )
        );
    };

    const sum = useMemo(() => counters.reduce((total, value) => total + value, 0), [counters]);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {counters.map((counter, index) => {
                const color = counter > 0 ? "green" : counter < 0 ? "red" : "black";
                return (
                    <div
                        key={`counter-${index}`}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 12,
                        }}
                    >
                        <button type="button" onClick={() => updateCounter(index, -1)}>
                            Omlaag
                        </button>
                        <div style={{ color }}>Count: {counter}</div>
                        <button type="button" onClick={() => updateCounter(index, +1)}>
                            Omhoog
                        </button>
                    </div>
                );
            })}
            <p>Som van de tellers: {sum}</p>
            <button type="button" onClick={addCounter}>
                Voeg teller toe
            </button>
        </div>
    );
};

const App: React.FC = () => {
    return <CounterList />;
};

export default App;
