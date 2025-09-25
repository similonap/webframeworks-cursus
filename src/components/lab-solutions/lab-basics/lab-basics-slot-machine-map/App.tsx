import React, { useState } from 'react';
import slotCherry from './assets/slot-cherry.png';
import slotLemon from './assets/slot-lemon.png';
import slotMelon from './assets/slot-melon.png';
import slotPrune from './assets/slot-prune.png';
import slotSeven from './assets/slot-seven.png';

const slotImages = [slotCherry, slotLemon, slotMelon, slotPrune, slotSeven];

export const Slot = ({ value }: { value: number }) => {
  const image = slotImages[value];
  if (!image) {
    return null;
  }

  return <img src={image} height="64" width="64" />;
};

export const SlotMachine = ({ slots }: { slots: number }) => {
  const slotNumbers: number[] = Array.from({ length: slots }, () =>
    Math.floor(Math.random() * slotImages.length)
  );
  const winning = slotNumbers.every((slot) => slot === slotNumbers[0]);

  return (
    <>
      {winning ? <p>Je hebt gewonnen</p> : <p>Je hebt verloren</p>}

      {slotNumbers.map((slot, index) => (
        <Slot value={slot} key={index} />
      ))}
    </>
  );
};

const App = () => {
  const [, setRefresh] = useState(0);

  return (
    <>
      <h1>Labo 1: Slots met map</h1>
      <Slot value={0} />
      <Slot value={1} />
      <Slot value={2} />
      <Slot value={3} />
      <Slot value={4} />
      <br />
      <SlotMachine slots={5} />
      <br />
      <button
        onClick={() => {
          setRefresh(Math.random());
        }}
      >
        Refresh
      </button>
    </>
  );
};

export default App;
