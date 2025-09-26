import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";

interface CheckBoxProps {
    size: number;
}

const CheckBox = ({size} : CheckBoxProps) => {
    const grid : boolean[][] = Array.from({length: size}, () => Array.from({length: size}, () => false));

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {
                grid.map((row, rowIndex) => {
                    return (
                        <div style={{display: "flex", flexDirection: "row"}}>
                            {
                                row.map((col, colIndex) => {
                                    return <input type="checkbox" onChange={(event) => alert(`${rowIndex},${colIndex}: ${event.target.checked ? "is checked" : "is unchecked"}`)}/>
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

const CheckBoxGrid = () => {
    return <CheckBox size={15}/>
}

const App = () => {
    return (
        <BrowserOnly>
            {() => <CheckBoxGrid/>}
        </BrowserOnly>
    )
}

export default App;