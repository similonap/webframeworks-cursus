import React, { createContext, useContext, useState } from "react";

interface Settings {
    color: string;
    setColor: (color: string) => void
}

const SettingsContext = createContext<Settings>({ color: 'red', setColor: (color) => { } });

const colors = ['red', 'blue', 'green'];

const Square = () => {
    const { color, setColor } = useContext(SettingsContext);

    let toggleColors = () => {

        setColor(colors[(colors.indexOf(color) + 1) % colors.length]);
    }

    return (
        <div style={{ backgroundColor: color, width: 100, height: 100, margin: 10 }} onClick={() => toggleColors()}>

        </div>
    )
}

const SquareRow = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Square />
            <Square />
            <Square />
        </div>
    )
}

const SelectionBox = () => {
    const { color, setColor } = useContext(SettingsContext);

    return (
        <select onChange={(e) => setColor(e.target.value)} value={color}>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>
    )
}

export default function App() {
    const [color, setColor] = useState("red");

    return (
        <SettingsContext.Provider value={{ color: color, setColor: setColor }}>
            <>
                <SelectionBox />
                <SquareRow />
            </>
        </SettingsContext.Provider>
    )
}
