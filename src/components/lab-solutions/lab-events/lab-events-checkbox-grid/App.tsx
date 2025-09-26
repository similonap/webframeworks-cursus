import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";

interface CheckBoxProps {
    size: number;
}

const CheckBox: React.FC<CheckBoxProps> = ({ size }) => {
    const grid: boolean[][] = React.useMemo(
        () =>
            Array.from({ length: size }, () =>
                Array.from({ length: size }, () => false)
            ),
        [size]
    );

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {grid.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    style={{ display: "flex", flexDirection: "row", gap: 4 }}
                >
                    {row.map((_, colIndex) => (
                        <input
                            key={`${rowIndex}-${colIndex}`}
                            type="checkbox"
                            onChange={(event) =>
                                alert(
                                    `${rowIndex},${colIndex}: ${event.target.checked ? "is checked" : "is unchecked"}`
                                )
                            }
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

const CheckBoxGrid: React.FC = () => {
    return <CheckBox size={15} />;
};

const App: React.FC = () => {
    return <BrowserOnly>{() => <CheckBoxGrid />}</BrowserOnly>;
};

export default App;
