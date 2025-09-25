import React, { useState } from 'react';
import slotCherry from './assets/slot-cherry.png';
import slotLemon from './assets/slot-lemon.png';
import slotMelon from './assets/slot-melon.png';
import slotPrune from './assets/slot-prune.png';
import slotSeven from './assets/slot-seven.png';

import styles from './Labo2Slots.module.css';
import Refreshable from './Refreshable';

export const Slot = ({ value }: { value: number }) => {
  let img = slotCherry;
  switch (value) {
    case 0: img = slotCherry; break;
    case 1: img = slotLemon; break;
    case 2: img = slotMelon; break;
    case 3: img = slotPrune; break;
    case 4: img = slotSeven; break;
  }
  return (
    <div className={styles.slot}>
      <img src={img}/>
    </div>
  );
};

export const SlotMachine = ({ slots }: { slots: number }) => {
  let slotNumbers: number[] = Array.from(Array(slots).keys()).map(() =>
    Math.floor(Math.random() * 5)
  );
  let winning = slotNumbers.find((slot) => slot !== slots[0]) == undefined;

  return (
    <div className={styles.slotMachineContainer}>
      <div className={styles.slotMachineSubContainer}>
        {slotNumbers.map((slot, i) => (
          <Slot value={slot} key={i} />
        ))}
      </div>
      {winning ? <p className={styles.linearWipe}>Je hebt gewonnen</p> : <p className={styles.linearWipe}>Je hebt verloren</p>}
 
    </div>
  );
};

const App = () => {
  return (
    <>
      <h1>Labo 2: Slots</h1>
      
      <SlotMachine slots={3} />
      <SlotMachine slots={4} />
      <SlotMachine slots={5} />

    </>
  );
};

export default () => <Refreshable><App/></Refreshable>;
