import React, { useState } from "react";

const CounterList = () => {
    const [counters, setCounters] = useState<number[]>([]);

    const addCounter = () => {
        setCounters([...counters, 0]);
    }

    const increaseCounter = (index: number) => {
        setCounters(counterCpy => counterCpy.map((counter, i) => (i === index) ? counter + 1 : counter));
    }

    const decreaseCounter = (index: number) => {
        setCounters(counterCpy => counterCpy.map((counter, i) => (i === index) ? counter - 1 : counter));
    }

    return (
        <>
            {counters.map((counter, index) => {
                let color = 'black';
                if (counter > 0) {
                    color = 'green';
                } else if (counter < 0) {
                    color = 'red';
                }
                return (
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <button onClick={() => decreaseCounter(index)}>Omlaag</button>
                        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", color: color }}>Count: {counter}</div>
                        <button onClick={() => increaseCounter(index)}>Omhoog</button>
                    </div>
                )
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