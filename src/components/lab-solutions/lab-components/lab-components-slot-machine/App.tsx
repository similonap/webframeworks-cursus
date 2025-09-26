import React from 'react';
import slotCherry from './assets/slot-cherry.png';
import slotLemon from './assets/slot-lemon.png';
import slotMelon from './assets/slot-melon.png';
import slotPrune from './assets/slot-prune.png';
import slotSeven from './assets/slot-seven.png';
import styles from './styles.module.css';

const slotImages = [slotCherry, slotLemon, slotMelon, slotPrune, slotSeven];

export const Slot = ({ value }: { value: number }) => {
  const image = slotImages[value];
  if (!image) {
    return null;
  }

  return (
    <div className={styles.slot}>
      <img src={image} alt="slot symbol" />
    </div>
  );
};

export const SlotMachine = ({ slots }: { slots: number }) => {
  const slotNumbers = Array.from({ length: slots }, () =>
    Math.floor(Math.random() * slotImages.length)
  );
  const winning = slotNumbers.every((slot) => slot === slotNumbers[0]);

  return (
    <div className={styles.slotMachineContainer}>
      <div className={styles.slotMachineSubContainer}>
        {slotNumbers.map((slot, index) => (
          <Slot value={slot} key={`${index}-${slot}`} />
        ))}
      </div>
      <p className={styles.linearWipe}>
        {winning ? 'Je hebt gewonnen' : 'Je hebt verloren'}
      </p>
    </div>
  );
};

const App = () => (
  <>
    <h1>Labo 2: Slots</h1>
    <SlotMachine slots={3} />
    <SlotMachine slots={4} />
    <SlotMachine slots={5} />
  </>
);

export default App;
