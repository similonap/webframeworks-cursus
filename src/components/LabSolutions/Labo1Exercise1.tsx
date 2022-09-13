import React, {useState} from "react";

const som = (a: number, b: number) => {
    return a + b;
}

const vermenigvuldiging = (a: number, b: number) => {
    return a * b;
}

const App = () => {
    const [refresh, setRefresh] = useState(0);


    let random : number = Math.random();
    let getal1: number = Math.floor(Math.random() * 10);
    let getal2: number = Math.floor(Math.random() * 10);
    return (
        <>
            <h1>Labo 1</h1>
            <p>Random: {random}</p>
            <p>Getal 1: {getal1}</p>
            <p>Getal 2: {getal2}</p>
            {random > 0.5 ? <p>{getal1} * {getal2}: {vermenigvuldiging(getal1, getal2)}</p> : <p>{getal1} + {getal2}: {som(getal1, getal2)}</p>}
            <button onClick={() => { setRefresh(random) }}>Refresh</button>
        </>
    );
}

export default App;