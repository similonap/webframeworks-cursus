import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    let color = 'black';
    if (count > 0) {
        color = 'green';
    } else if (count < 0) {
        color = 'red';
    }

    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent:"center"}}>
            <button onClick={() => setCount(count + 1)}>Omhoog</button>
            <div style={{flex: 1, display: "flex", justifyContent: "center", alignItems:"center", color: color}}>Count: {count}</div>
            <button onClick={() => setCount(count - 1)}>Omlaag</button>
        </div>
    );
};

const Labo3OmHooglaag = () => {
    return (
        <>
            <Counter />
            <Counter />
            <Counter />
        </>
    );
}

export default Labo3OmHooglaag;