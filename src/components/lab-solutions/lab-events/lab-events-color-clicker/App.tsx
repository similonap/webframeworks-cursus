import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";

interface ColorSquareProps {
    color?: string;
    size?: number;
}

const ColorSquare: React.FC<ColorSquareProps> = ({ color = "red", size = 100 }) => {
    const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
        alert(`ColorSquare clicked with color: ${color}`);
    };

    return (
        <div
            style={{
                backgroundColor: color,
                width: size,
                height: size,
            }}
            onClick={handleClick}
        />
    );
};

const getRandomColor = () => {
    const COLORS = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
        "black",
    ];
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
};

const ColorClicker: React.FC = () => {
    const randomColors = React.useMemo(
        () => Array.from({ length: 10 }, () => getRandomColor()),
        []
    );

    return (
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            {randomColors.map((color, index) => (
                <ColorSquare key={index} color={color} />
            ))}
        </div>
    );
};

const App: React.FC = () => {
    return <BrowserOnly>{() => <ColorClicker />}</BrowserOnly>;
};

export default App;
