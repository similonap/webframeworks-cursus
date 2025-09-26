import React, { useMemo, useState } from "react";

interface CounterProps {
    value: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const Counter: React.FC<CounterProps> = ({ value, onIncrease, onDecrease }) => {
    const color = value > 0 ? "green" : value < 0 ? "red" : "black";

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
            }}
        >
            <button onClick={onDecrease}>Omlaag</button>
            <div style={{ color }}>Count: {value}</div>
            <button onClick={onIncrease}>Omhoog</button>
        </div>
    );
};

const CounterList: React.FC = () => {
    const [counters, setCounters] = useState<number[]>([]);

    const addCounter = () => {
        setCounters((previous) => [...previous, 0]);
    };

    const increaseCounter = (index: number) => {
        setCounters((previous) =>
            previous.map((value, currentIndex) =>
                currentIndex === index ? value + 1 : value
            )
        );
    };

    const decreaseCounter = (index: number) => {
        setCounters((previous) =>
            previous.map((value, currentIndex) =>
                currentIndex === index ? value - 1 : value
            )
        );
    };

    const sum = useMemo(
        () => counters.reduce((total, value) => total + value, 0),
        [counters]
    );

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {counters.map((counter, index) => (
                <Counter
                    key={`counter-${index}`}
                    value={counter}
                    onIncrease={() => increaseCounter(index)}
                    onDecrease={() => decreaseCounter(index)}
                />
            ))}
            <p>Som van de tellers: {sum}</p>
            <button onClick={addCounter}>Voeg teller toe</button>
        </div>
    );
};

const App: React.FC = () => {
    return <CounterList />;
};

export default App;
