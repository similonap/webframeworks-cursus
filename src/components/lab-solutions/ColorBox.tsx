import React from "react";

const ColorBox = () => {
    const colors = ["red", "green", "blue", "yellow", "purple"];
    const [color, setColor] = React.useState(colors[0]);

    const nextColor = () => {
        const index = colors.indexOf(color);
        const nextIndex = index + 1 === colors.length ? 0 : index + 1;
        setColor(colors[nextIndex]);
    };

    return (
        <div>
            <div style={{ backgroundColor: color, width: 100, height: 100 }} />
            <button onClick={() => nextColor()}>Next color</button>
        </div>
    );
}

const App = () => {
    return (
        <div>
        <ColorBox />
        </div>
    );
};

export default App;