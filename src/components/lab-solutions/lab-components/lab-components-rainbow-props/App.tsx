import React from "react";

type Direction = "horizontal" | "vertical";

const RainbowLine = ({ color, direction }: { color: string; direction: Direction }) => {
    const sizeStyle =
        direction === "horizontal"
            ? { width: "100%", height: "4px" }
            : { width: "4px", height: "100px" };

    return <div style={{ backgroundColor: color, ...sizeStyle }} />;
};

const Rainbow = ({ amount, direction }: { amount: number; direction: Direction }) => {
    const colors = Array.from({ length: amount }, (_, index) => `hsl(${(index * 360) / amount}, 100%, 50%)`);
    const containerStyle: React.CSSProperties = {
        display: "flex",
        gap: direction === "horizontal" ? "0" : "4px",
        flexDirection: direction === "horizontal" ? "column" : "row",
    };

    return (
        <div style={containerStyle}>
            {colors.map((color) => (
                <RainbowLine key={`${direction}-${color}`} color={color} direction={direction} />
            ))}
        </div>
    );
};

const App = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Rainbow amount={10} direction="horizontal" />
        <Rainbow amount={20} direction="vertical" />
    </div>
);

export default App;
