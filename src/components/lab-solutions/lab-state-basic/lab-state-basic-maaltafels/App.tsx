import React, { useState } from "react";
import styles from "./MultiplicationTable.module.css";

const createNumbers = (max: number) => Array.from({ length: max }, (_, index) => index + 1);

const HeaderRow: React.FC<{ max: number }> = ({ max }) => (
    <tr className={styles.headerRow}>
        <th className={styles.headerCell}></th>
        {createNumbers(max).map((value) => (
            <th key={`header-${value}`} className={styles.headerCell}>
                {value}
            </th>
        ))}
    </tr>
);

interface MultiplicationRowProps {
    factor: number;
    max: number;
}

const MultiplicationRow: React.FC<MultiplicationRowProps> = ({ factor, max }) => (
    <tr className={styles.row}>
        <th className={styles.rowHeader}>{factor}</th>
        {createNumbers(max).map((value) => (
            <td key={`cell-${factor}-${value}`} className={styles.cell}>
                {factor * value}
            </td>
        ))}
    </tr>
);

const MultiplicationTable: React.FC<{ max: number }> = ({ max }) => (
    <table className={styles.table}>
        <thead>
            <HeaderRow max={max} />
        </thead>
        <tbody>
            {createNumbers(max).map((factor) => (
                <MultiplicationRow key={`row-${factor}`} factor={factor} max={max} />
            ))}
        </tbody>
    </table>
);

const App: React.FC = () => {
    const [max, setMax] = useState(5);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <label>
                Max table value:
                <input
                    type="number"
                    max={10}
                    min={2}
                    value={max}
                    onChange={(event) => setMax(Number(event.target.value) || 2)}
                    style={{ marginLeft: 8 }}
                />
            </label>
            <MultiplicationTable max={max} />
        </div>
    );
};

export default App;
