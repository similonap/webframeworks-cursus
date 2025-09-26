import React, { useCallback, useEffect, useState } from "react";
import styles from "./HappyWorkers.module.css";

interface Worker {
    name: string;
    size: number;
    color: string;
    productivity: number;
}

interface WorkerSquareProps {
    worker: Worker;
    totalWork: number;
    useProductivity: boolean;
    onWork: (amount: number) => void;
    onUpdateProductivity: (name: string, value: number) => void;
}

const WorkerSquare: React.FC<WorkerSquareProps> = ({
    worker,
    totalWork,
    useProductivity,
    onWork,
    onUpdateProductivity,
}) => {
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        if (!useProductivity) {
            return;
        }

        if (clickCount < 10) {
            return;
        }

        onUpdateProductivity(worker.name, 0);
        const timeoutHandle = window.setTimeout(() => {
            onUpdateProductivity(worker.name, 1);
            setClickCount(0);
        }, 5000);

        return () => window.clearTimeout(timeoutHandle);
    }, [clickCount, onUpdateProductivity, useProductivity, worker.name]);

    const handleClick = () => {
        if (totalWork >= 100) {
            return;
        }

        setClickCount((value) => value + 1);
        onWork(worker.productivity);
    };

    let mood = "😐";
    if (totalWork >= 100) {
        mood = "🥰";
    } else if (worker.productivity === 0) {
        mood = "😵";
    }

    return (
        <div
            className={styles.joske}
            style={{ backgroundColor: worker.color, width: worker.size, height: worker.size }}
            onClick={handleClick}
        >
            <p>{mood}</p>
        </div>
    );
};

interface AppProps {
    useProductivity?: boolean;
}

const App: React.FC<AppProps> = ({ useProductivity = true }) => {
    const [work, setWork] = useState(0);
    const [workers, setWorkers] = useState<Worker[]>([
        { name: "Joske", size: 100, color: "red", productivity: 1 },
        { name: "Franske", size: 100, color: "green", productivity: 1 },
        { name: "Louise", size: 100, color: "pink", productivity: 1 },
    ]);

    const updateProductivity = useCallback((name: string, productivity: number) => {
        setWorkers((previous) =>
            previous.map((worker) =>
                worker.name === name ? { ...worker, productivity } : worker
            )
        );
    }, []);

    const addWork = (amount: number) => {
        if (amount <= 0) {
            return;
        }
        setWork((value) => Math.min(100, value + amount));
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <progress max={100} value={work}>
                {work}%
            </progress>
            <div className={styles.squareRow}>
                {workers.map((worker) => (
                    <WorkerSquare
                        key={worker.name}
                        worker={worker}
                        totalWork={work}
                        useProductivity={useProductivity}
                        onWork={addWork}
                        onUpdateProductivity={updateProductivity}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
