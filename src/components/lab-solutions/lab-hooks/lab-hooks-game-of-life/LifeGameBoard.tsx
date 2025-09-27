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
    const [playing, setPlaying] = useState(false);

    const resetGrid = () => {
        setGrid(initializeGrid(rows, cols));
    }

    const flipElement = (x: number, y: number) => {

        const newGrid = [...grid.map(row => [...row])];


        newGrid[y][x] = newGrid[y][x] === 1 ? 0 : 1;

        setGrid(newGrid);

    }

    const step = () => {
        setGrid(grid => {
            const newGrid = [...grid.map(row => [...row])];

            for (let y = 0; y < grid.length; y++) {
                let row = grid[y];
                for (let x = 0; x < row.length; x++) {
                    let topLeft = grid[y - 1]?.[x - 1] ?? 0;
                    let top = grid[y - 1]?.[x] ?? 0;
                    let topRight = grid[y - 1]?.[x + 1] ?? 0;
                    let left = grid[y]?.[x - 1] ?? 0;
                    let right = grid[y]?.[x + 1] ?? 0;
                    let bottomLeft = grid[y + 1]?.[x - 1] ?? 0;
                    let bottom = grid[y + 1]?.[x] ?? 0;
                    let bottomRight = grid[y + 1]?.[x + 1] ?? 0;
                    let neighbors: number[] = [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight].filter(cell => cell === 1);

                    if (grid[y][x] === 1) {
                        if (neighbors.length === 0 || neighbors.length === 1) {
                            newGrid[y][x] = 0;
                        }
                        if (neighbors.length >= 4) {
                            newGrid[y][x] = 0;
                        }
                        if (neighbors.length === 2 || neighbors.length === 3) {
                            newGrid[y][x] = 1;
                        }
                    } else {
                        if (neighbors.length === 3) {
                            newGrid[y][x] = 1;
                        }
                    }

                }
            }

            return newGrid;
        });


    }

    useEffect(() => {
        let cb = setInterval(() => {
            if (playing) {
                step();
            }
        }, 100);

        return () => {
            clearInterval(cb);
        }
    }, [playing])




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
            <button onClick={() => step()}>STEP</button>
            {!playing && <button onClick={() => setPlaying(true)}>PLAY</button>}
            {playing && <button onClick={() => setPlaying(false)}>STOP</button>}
        </>
    )
}

export default LifeGameBoard;