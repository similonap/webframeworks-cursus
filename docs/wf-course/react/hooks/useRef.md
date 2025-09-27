---
sidebar_position: 2
---

# useRef

:::warning
useRef is een geavanceerde hook die je niet vaak nodig hebt. Gebruik deze hook alleen als je echt weet wat je doet. De meeste toepassingen van useRef kunnen ook opgelost worden met useState of useEffect. Dus kijk eerst altijd of je het probleem niet op een reactievere manier kan oplossen (met useState of useEffect) voordat je useRef gebruikt.
:::

## Werking

Wanneer je wil dat een component een waarde wil onthouden, maar je wil niet dat de component opnieuw gerenderd wordt wanneer die waarde verandert, kan je gebruik maken van de `useRef` hook. Deze hook is een manier om een waarde te onthouden tussen renders van een component.

Om een `useRef` te gebruiken, moet je eerst de hook importeren:

```typescript
import { useRef } from "react";
```

In je component kan je dan een `useRef` aanmaken en initialiseren met een waarde:

```typescript
const myRef = useRef(initialValue);
```

Als je dan de waarde van de `myRef` variabele bekijkt, zal je zien dat het een object bevat met een `current` eigenschap. Deze eigenschap bevat de waarde die je hebt meegegeven aan `useRef`:

```typescript
console.log(myRef.current); // Geeft de waarde van initialValue
// {
//     current: 0
// }
```

Je kan de waarde van een `useRef` aanpassen door de `current` eigenschap te veranderen:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import React, { useRef } from "react";


const App = () => {
  const myRef = useRef(0);

  const handleClick = () => {
    myRef.current += 1;
    console.log(myRef.current);
  }

  return (
    <>
      <h1>Counter</h1>
      <p>{myRef.current}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default App;
```

Merk op dat wanneer je de waarde van een `useRef` aanpast er dus geen nieuwe render van het component wordt getriggered. Dus zelfs al verhoog je de waarde van `myRef.current`, zal de waarde niet opnieuw in de DOM worden geupdated en dus niet op het scherm verschijnen. In de console zal je wel zien dat de waarde van `myRef.current` is veranderd.

## Toepassingen

Dit is allemaal leuk en aardig, maar wat kan je nu eigenlijk doen met `useRef`? Hier zijn enkele toepassingen:

### TimeoutId of intervalId bijhouden

Stel dat we een StopWatch component willen maken. 

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { useState, useRef } from 'react';

const StopWatch = () => {
  const [secondsPassed, setSecondsPassed] = useState(0);

  const handleStart = () => {
    setSecondsPassed(0);
    setInterval(() => {
      setSecondsPassed(passed => passed + 1);
    }, 1000);
  }

  return (
    <>
      <h1>Seconds passed: {secondsPassed}</h1>
      <button onClick={handleStart}>
        Start
      </button>
    </>
  );
}

export default StopWatch;
```

Als we nu deze component willen uitbreiden met een stop knop moeten we de referentie naar de interval bijhouden. We kunnen dit niet in een gewone variabele doen of in de state, omdat dit de component zou triggeren om opnieuw te renderen en dit kan onverwachte gevolgen hebben. We kunnen dit wel doen met een `useRef`:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { useState, useRef } from 'react';

const StopWatch = () => {
  const [secondsPassed, setSecondsPassed] = useState(0);
  const intervalRef = useRef<number>();

  const handleStart = () => {
    setSecondsPassed(0);
    intervalRef.current = setInterval(() => {
      setSecondsPassed(passed => passed + 1);
    }, 1000);
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <h1>Seconds passed: {secondsPassed}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}
 
export default StopWatch;
```

### DOM manipulatie

#### Focus op een input element zetten

Een andere toepassing van `useRef` is om een referentie naar een DOM element bij te houden. Dit kan handig zijn als je bijvoorbeeld de focus wil zetten op een input element wanneer de component mount:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { useEffect, useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
        <>
            <input ref={inputRef} />
            <button onClick={() => { inputRef.current?.focus(); }}>
                Focus the input
            </button>
        </>
  );
}

export default FocusInput;
```

Wat hier gebeurt is dat we een referentie naar de input bijhouden in `inputRef`. Wanneer de button wordt geklikt, zetten we de focus op de input door de `focus` methode aan te roepen op `inputRef.current`.

#### Video element bedienen

Een andere toepassing is het bedienen van een video element. Stel dat we een video element hebben en we willen de video pauzeren wanneer de gebruiker op een knop klikt:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { useState, useRef } from 'react';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const ref = useRef();

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
    setIsPlaying(nextIsPlaying);
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video width="250" ref={ref}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}

export default VideoPlayer;
```

#### Groottes van elementen meten

Een andere toepassing is het meten van de grootte van een element. Stel dat we een component hebben dat de grootte van een element moet meten en weergeven:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { useEffect, useRef, useState } from 'react';

const SizeMeasurer = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      });
    }
  }, [ref.current]);

  return (
    <div ref={ref}>
      <h1>Width: {size.width}</h1>
      <h1>Height: {size.height}</h1>
    </div>
  );
}

export default SizeMeasurer;
```