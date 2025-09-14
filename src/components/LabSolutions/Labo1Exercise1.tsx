import React, {useState} from "react";

const add = (a: number, b: number) => {
    return a + b;
}

const multiply = (a: number, b: number) => {
    return a * b;
}

const App = () => {
    let random : number = Math.random();
    let getal1: number = Math.floor(Math.random() * 10);
    let getal2: number = Math.floor(Math.random() * 10);
    return (
        <>
            <h1>Labo 1: Expressies</h1>
            <p>Random: {random}</p>
            <p>Getal 1: {getal1}</p>
            <p>Getal 2: {getal2}</p>
            {random > 0.5 ? <p>{getal1} * {getal2}: {multiply(getal1, getal2)}</p> : <p>{getal1} + {getal2}: {add(getal1, getal2)}</p>}
        </>
    );
}

export default App;