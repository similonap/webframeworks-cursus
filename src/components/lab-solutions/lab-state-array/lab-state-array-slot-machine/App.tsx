import React, { useState } from "react";
import slotCherry from "@site/src/components/lab-solutions/assets/slot-cherry.png";
import slotLemon from "@site/src/components/lab-solutions/assets/slot-lemon.png";
import slotMelon from "@site/src/components/lab-solutions/assets/slot-melon.png";
import slotPrune from "@site/src/components/lab-solutions/assets/slot-prune.png";
import slotSeven from "@site/src/components/lab-solutions/assets/slot-seven.png";

import styles from "./SlotMachine.module.css";

type SlotValue = 0 | 1 | 2 | 3 | 4;

const SLOT_IMAGES: Record<SlotValue, string> = {
    0: slotCherry,
    1: slotLemon,
    2: slotMelon,
    3: slotPrune,
    4: slotSeven,
};

const pullRandomSlots = (count: number): SlotValue[] =>
    Array.from({ length: count }, () => Math.floor(Math.random() * 5) as SlotValue);

const Slot: React.FC<{ value: SlotValue }> = ({ value }) => {
    return (
        <div className={styles.slot}>
            <img src={SLOT_IMAGES[value]} alt="slot symbol" />
        </div>
    );
};

const SlotMachine: React.FC<{ slotCount?: number }> = ({ slotCount = 3 }) => {
    const [slotValues, setSlotValues] = useState<SlotValue[]>(pullRandomSlots(slotCount));
    const [money, setMoney] = useState(100);

    const isWinning = (values: SlotValue[]) => values.every((value) => value === values[0]);

    const pullLever: React.MouseEventHandler<HTMLButtonElement> = () => {
        setSlotValues((previous) => {
            const nextValues = pullRandomSlots(previous.length);
            setMoney((current) => (isWinning(nextValues) ? current + 20 : current - 1));
            return nextValues;
        });
    };

    const isBankrupt = money <= 0;

    return (
        <div className={styles.slotMachineContainer}>
            {!isBankrupt && <div>Saldo: €{money}</div>}
            <div className={styles.slotMachineSubContainer}>
                <button
                    className={styles.lever}
                    onClick={pullLever}
                    disabled={isBankrupt}
                    type="button"
                >
                    Pull lever
                </button>
                {slotValues.map((value, index) => (
                    <Slot key={index} value={value} />
                ))}
            </div>
            {isBankrupt && <p className={styles.linearWipe}>Je bent bankroet!</p>}
        </div>
    );
};

const App: React.FC = () => {
    return <SlotMachine />;
};

export default App;
