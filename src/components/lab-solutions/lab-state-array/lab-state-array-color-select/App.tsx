import React, { useState } from "react";

const AVAILABLE_COLORS = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"] as const;

type Color = (typeof AVAILABLE_COLORS)[number];

const ColorSelect: React.FC = () => {
    const [selectedColors, setSelectedColors] = useState<Color[]>([]);
    const [displayColors, setDisplayColors] = useState<Color[]>([]);

    const handleSelectionChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const values = Array.from(event.target.selectedOptions, (option) => option.value as Color);
        setSelectedColors(values);
    };

    const showColors = () => {
        setDisplayColors([...selectedColors]);
    };

    const changeColor = (index: number) => {
        const current = displayColors[index];
        const replacement = prompt("Choose a new color", current);
        if (!replacement) {
            return;
        }
        setDisplayColors((previous) =>
            previous.map((color, idx) => (idx === index ? (replacement as Color) : color))
        );
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <select multiple value={selectedColors} onChange={handleSelectionChange}>
                {AVAILABLE_COLORS.map((color) => (
                    <option key={color} value={color}>
                        {color}
                    </option>
                ))}
            </select>
            <button type="button" onClick={showColors}>
                Show colors
            </button>
            {displayColors.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", width: "100%", height: 200 }}>
                    {displayColors.map((color, index) => (
                        <div
                            key={`${color}-${index}`}
                            style={{ flex: 1, backgroundColor: color }}
                            onClick={() => changeColor(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const App: React.FC = () => {
    return <ColorSelect />;
};

export default App;
