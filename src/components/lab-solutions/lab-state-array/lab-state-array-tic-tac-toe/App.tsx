import React, { useMemo, useState } from "react";

type Player = "X" | "O";
type Cell = Player | "";

const WINNING_COMBINATIONS: [number, number, number][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const TicTacToe: React.FC = () => {
    const [board, setBoard] = useState<Cell[]>(Array.from({ length: 9 }, () => ""));
    const [player, setPlayer] = useState<Player>("X");

    const winner = useMemo(() => {
        for (const [a, b, c] of WINNING_COMBINATIONS) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }, [board]);

    const play = (index: number) => {
        setBoard((previous) => {
            if (previous[index] !== "" || winner) {
                return previous;
            }
            const next = [...previous];
            next[index] = player;
            setPlayer((current) => (current === "X" ? "O" : "X"));
            return next;
        });
    };

    return (
        <div
            style={{
                display: "grid",
                gridTemplateRows: "repeat(3, 50px)",
                gridTemplateColumns: "repeat(3, 50px)",
            }}
        >
            {board.map((value, index) => (
                <div
                    key={index}
                    onClick={() => play(index)}
                    style={{
                        border: "1px solid black",
                        fontSize: "30px",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: winner || value ? "default" : "pointer",
                    }}
                >
                    {value}
                </div>
            ))}
            {winner && (
                <p style={{ gridColumn: "1 / span 3", margin: "12px 0 0" }}>{winner} wins!</p>
            )}
        </div>
    );
};

const App: React.FC = () => {
    return <TicTacToe />;
};

export default App;
