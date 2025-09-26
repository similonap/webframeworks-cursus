import { useState } from "react";
import penguinsJson from "./assets/penguins.json";
import styles from "./PenguinList.module.css";

export interface Penguin {
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

const PenguinCard = ({penguin}: PenguinCardProps) => {
    const [selected, setSelected] = useState(false);

    const selectCard = () => {
        setSelected(selected => !selected);
    }

    return (
        <div key={penguin.id} className={`${styles.penguinCard} ${selected ? styles.selected : ""}`} onClick={selectCard} >
            <img src={penguin.image} alt={penguin.nickname} className={styles.penguinImage}/>
            <h2>{penguin.nickname}</h2>
            <p><strong>Species ID:</strong> {penguin.species_id}</p>
            <p><strong>Description:</strong> {penguin.description}</p>
            <p><strong>Island:</strong> {penguin.island}</p>
        </div>
    )
}

const PenguinList = () => {
    const penguins: Penguin[] = penguinsJson.filter(penguin => penguin.gender === "Female");
    return (
        <div>
            <h1>Female Penguins</h1>
            <div className={styles.penguinGrid}>
                {penguins.map((penguin: Penguin) => <PenguinCard key={penguin.id} penguin={penguin}/>)}
            </div>
        </div>
    );
}

export default PenguinList;
