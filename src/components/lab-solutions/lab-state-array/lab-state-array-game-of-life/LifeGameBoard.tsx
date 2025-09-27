import { useEffect, useState } from "react";

const initializeGrid = (rows: number, columns: number) => {
    const grid = Array.from({ length: rows }, () => Array.from({ length: columns }, () => Math.random() > 0.5 ? 0 : 1));
    return grid;
}

interface LifeGameBoardProps {

}

const LifeGameBoard = ({ }: LifeGameBoardProps) => {
    const [rows, setRows] = useState(50);
    const [cols, setCols] = useState(50);
    const [grid, setGrid] = useState<number[][]>(initializeGrid(rows, cols));

    const resetGrid = () => {
        setGrid(initializeGrid(rows, cols));
    }

    const flipElement = (x: number, y: number) => {
        const newGrid = [...grid.map(row => [...row])];
        newGrid[y][x] = newGrid[y][x] === 1 ? 0 : 1;
        setGrid(newGrid);
    }

    return (
        <>
            <input type="number" value={rows} onChange={(e) => setRows(parseInt(e.target.value))} />
            <input type="number" value={cols} onChange={(e) => setCols(parseInt(e.target.value))} />
            <button onClick={() => resetGrid()}>Set</button>
            <div style={{ display: 'flex', flexDirection: 'column' }}>

                {grid.map((row, y) => (
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {
                            row.map((col, x) => (
                                <div style={{ width: 10, height: 10, backgroundColor: col === 1 ? "black" : "white" }} onClick={() => flipElement(x, y)}>
                                </div>
                            ))
                        }
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default LifeGameBoard;