import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";

interface ColorSquareProps {
    color?: string;
    size?: number;
}

const ColorSquare = ({color = "red", size = 100} : ColorSquareProps) => {
    const handleClick : React.MouseEventHandler<HTMLDivElement> = (event) => {
        alert(`ColorSquare clicked with color: ${color}`);
    }

    return (
        <div style={{backgroundColor: color, width: size, height: size}} onClick={handleClick}>

        </div>
    )
}



const getRandomColor = () => {
    const COLORS = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "black"];
    const randomIndex = Math.floor(Math.random() * COLORS.length);    
    return COLORS[randomIndex];
}

const ColorClicker = () => {
    const randomColors = Array.from({length: 10}, () => getRandomColor());

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            {randomColors.map((color, index) => (
                <ColorSquare key={index} color={color}/>
            ))}
        </div>
    )
}

const App = () => {
    return (
        <BrowserOnly>
            {() => <ColorClicker/>}
        </BrowserOnly>
    )
}

export default App;