import React from "react";
import { useState } from "react";

const initializeGrid = (row: number, col: number): number[][] => {
  return Array.from({ length: row }, () => Array.from({ length: col }, () => Math.round(Math.random())))
}

const ROWS: number = 50;
const COLUMNS: number = 50;

const App = () => {
  const [gameBoard, setGameBoard] = useState<number[][]>(initializeGrid(ROWS, COLUMNS));
  const [rowsInput, setRowsInput] = useState<number>(ROWS);
  const [columnsInput, setColumnsInput] = useState<number>(COLUMNS);

  const rows = gameBoard.length;
  const columns = gameBoard[0].length;

  const setBoard = () => {
    setGameBoard(initializeGrid(rowsInput, columnsInput))
  }

  const flipElement = (x: number, y: number) => {

    let gameBoardCpy = gameBoard.map(row => row.map(col => col));
    console.log(x, y);
    console.log(gameBoardCpy[y][x]);
    gameBoardCpy[y][x] = gameBoardCpy[y][x] == 0 ? 1 : 0;
    setGameBoard(gameBoardCpy);
  }

  return (
    <>
      <input type="number" value={columnsInput} onChange={(e) => setColumnsInput(parseInt(e.target.value))} />
      <input type="number" value={rowsInput} onChange={(e) => setRowsInput(parseInt(e.target.value))} />
      <button onClick={setBoard}>Refresh board</button>

      <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 10px)`, gridTemplateRows: `repeat(${rows}, 10px)` }}>

        {gameBoard.map((y, yi) => (<div key={"row_" + yi}>
          {y.map((x, xi) => (<div key={"col_" + xi + "_" + yi} style={{ width: 10, height: 10, backgroundColor: x == 0 ? "black" : "white" }} onClick={() => flipElement(xi, yi)}>
          </div>))}

        </div>))}
      </div>
    </>
  )


}

export default App
