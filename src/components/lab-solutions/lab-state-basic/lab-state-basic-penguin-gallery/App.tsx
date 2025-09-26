import React, { useState } from "react";
import penguinsData from "@site/src/components/lab-solutions/assets/penguins.json";
import styles from "./PenguinList.module.css";

interface Penguin {
    id: number;
    nickname: string;
    description: string;
    species_id: number;
    island: string;
    gender: string;
    weight: number;
    height: number;
    year: number;
    image: string;
    assigned_to: string | null;
}

interface PenguinCardProps {
    penguin: Penguin;
}

const PenguinCard: React.FC<PenguinCardProps> = ({ penguin }) => {
    const [selected, setSelected] = useState(false);

    const toggleSelected = () => {
        setSelected((current) => !current);
    };

    return (
        <div
            className={`${styles.penguinCard} ${selected ? styles.selected : ""}`}
            onClick={toggleSelected}
        >
            <img src={penguin.image} alt={penguin.nickname} className={styles.penguinImage} />
            <h2 className={styles.cardTitle}>{penguin.nickname}</h2>
            <p className={styles.cardText}>
                <strong>Species ID:</strong> {penguin.species_id}
            </p>
            <p className={styles.cardText}>
                <strong>Description:</strong> {penguin.description}
            </p>
            <p className={styles.cardText}>
                <strong>Island:</strong> {penguin.island}
            </p>
        </div>
    );
};

const App: React.FC = () => {
    const penguins = (penguinsData as Penguin[]).filter((penguin) => penguin.gender === "Female");

    return (
        <div className={styles.page}>
            <h1 className={styles.heading}>Female Penguins</h1>
            <div className={styles.penguinGrid}>
                {penguins.map((penguin) => (
                    <PenguinCard key={penguin.id} penguin={penguin} />
                ))}
            </div>
        </div>
    );
};

export default App;
