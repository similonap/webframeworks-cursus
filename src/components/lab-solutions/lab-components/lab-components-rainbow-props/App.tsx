import React from "react";

type Direction = "horizontal" | "vertical";

const RainbowLine = ({color, direction}: {color: string, direction: Direction}) => {
    return <div style={{backgroundColor: color, width: "100%", height: (direction === "vertical" ? "4px" : "100px")}}></div>
}

const Rainbow = ({amount, direction}: {amount: number, direction: Direction}) => {
    const colors = Array.from({length: amount}, (_, i) => `hsl(${i * 360 / amount}, 100%, 50%)`);
    return (
        <div style={{display: 'flex', flex: 1, flexDirection: direction === "horizontal" ? "row" : "column"}} >
            {
                colors.map((color, index) => <RainbowLine key={index} color={color} direction={direction}/>)
            }
        </div>
    );
}


const App = () => {

    return (
        <>
            <div style={{flex: 1, flexDirection: "column"}}>
                <Rainbow amount={10} direction="horizontal"/>
                <Rainbow amount={20} direction="vertical"/>
            </div>
        </>
    );
}

export default App;