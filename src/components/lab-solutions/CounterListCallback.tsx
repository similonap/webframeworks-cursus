import React, { useState } from "react";

interface CounterProps {
    counter: number;
    index: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const Counter = ({ counter, index, onIncrease, onDecrease }: CounterProps) => {
    let color = 'black';
    if (counter > 0) {
        color = 'green';
    } else if (counter < 0) {
        color = 'red';
    }
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <button onClick={onDecrease}>Omlaag</button>
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", color: color }}>Count: {counter}</div>
            <button onClick={onIncrease}>Omhoog</button>
        </div>
    )
}

const CounterList = () => {
    const [counters, setCounters] = useState<number[]>([]);

    const addCounter = () => {
        setCounters([...counters, 0]);
    }

    const increaseCounter = (index: number) => {
        setCounters(counters.map((counter, i) => (i === index) ? counter + 1 : counter));
    }

    const decreaseCounter = (index: number) => {
        setCounters(counters.map((counter, i) => (i === index) ? counter - 1 : counter));
    }

    return (
        <>
            {counters.map((counter, index) => {
                return <Counter counter={counter} index={index} onIncrease={() => increaseCounter(index)} onDecrease={() => decreaseCounter(index)} />
            })}
            <p>Som van de tellers: {counters.reduce((prev, curr) => prev + curr, 0)}</p>
            <button onClick={addCounter}>Voeg teller toe</button>
        </>
    )

}

const App = () => {
    return (
        <div>
            <CounterList />
        </div>
    )


}

export default App;