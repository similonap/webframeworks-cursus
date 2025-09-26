import React, { useMemo, useState } from "react";

const initializeGrid = (rows: number, columns: number): number[][] => {
    return Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => Math.round(Math.random()))
    );
};

const DEFAULT_ROWS = 20;
const DEFAULT_COLUMNS = 20;

const clampSize = (value: number, fallback: number) => {
    if (Number.isNaN(value) || value <= 0) {
        return fallback;
    }
    return value;
};

const GameOfLife: React.FC = () => {
    const [rowsInput, setRowsInput] = useState(DEFAULT_ROWS);
    const [columnsInput, setColumnsInput] = useState(DEFAULT_COLUMNS);
    const [board, setBoard] = useState(() => initializeGrid(DEFAULT_ROWS, DEFAULT_COLUMNS));

    const rows = board.length;
    const columns = board[0]?.length ?? 0;

    const gridTemplate = useMemo(
        () => ({
            gridTemplateColumns: `repeat(${columns}, 10px)`,
            gridTemplateRows: `repeat(${rows}, 10px)`,
        }),
        [rows, columns]
    );

    const refreshBoard = () => {
        const safeRows = clampSize(rowsInput, DEFAULT_ROWS);
        const safeColumns = clampSize(columnsInput, DEFAULT_COLUMNS);
        setBoard(initializeGrid(safeRows, safeColumns));
    };

    const flipCell = (x: number, y: number) => {
        setBoard((previous) =>
            previous.map((row, rowIndex) =>
                row.map((value, columnIndex) => {
                    if (rowIndex === y && columnIndex === x) {
                        return value === 0 ? 1 : 0;
                    }
                    return value;
                })
            )
        );
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 8 }}>
                <label>
                    Columns:
                    <input
                        type="number"
                        value={columnsInput}
                        onChange={(event) => setColumnsInput(Number(event.target.value))}
                        style={{ marginLeft: 4 }}
                    />
                </label>
                <label>
                    Rows:
                    <input
                        type="number"
                        value={rowsInput}
                        onChange={(event) => setRowsInput(Number(event.target.value))}
                        style={{ marginLeft: 4 }}
                    />
                </label>
                <button type="button" onClick={refreshBoard}>
                    Refresh board
                </button>
            </div>

            <div
                style={{
                    display: "grid",
                    gap: 1,
                    ...gridTemplate,
                }}
            >
                {board.map((row, rowIndex) =>
                    row.map((cell, columnIndex) => (
                        <div
                            key={`${rowIndex}-${columnIndex}`}
                            style={{
                                width: 10,
                                height: 10,
                                backgroundColor: cell === 0 ? "black" : "white",
                            }}
                            onClick={() => flipCell(columnIndex, rowIndex)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return <GameOfLife />;
};

export default App;
