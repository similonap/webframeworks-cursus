---
sidebar_position: 9999
---

# custom hooks

## Wat zijn custom hooks?

Custom hooks zijn een manier om herbruikbare logica in React te creëren. Ze stellen je in staat om stateful logica te delen tussen componenten zonder de componenthiërarchie te veranderen. Een custom hook is gewoon een JavaScript-functie die begint met het woord `use` en andere hooks zoals `useState`, `useEffect` of zelfs andere custom hooks mag gebruiken.

Custom hooks helpen vooral wanneer je dezelfde logica meerdere keren nodig hebt, bijvoorbeeld voor het ophalen van data, het bijhouden van formulierstate of het luisteren naar browser-events. In plaats van die logica te kopiëren tussen componenten, stop je ze in een custom hook en roep je die hook aan waar nodig.

## Voorbeelden

### useTimeout hook

Stel dat je de volgende component hebt met een useEffect die een interval instelt die elke seconde iets doet:

```typescript codesandbox={"template": "react-non-strict", "filename": "src/App.tsx"}
import { useState, useEffect } from 'react';

const App = () => {
    const [delay, setDelay] = useState(1000);
    const [counter, setCounter] = useState(0);  

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prev) => prev + 1);
        }, delay);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <p>Counter: {counter}</p>
        </div>
    );
}
//hide-start
export default App;
//hide-end
```

Stel dat je deze functionaliteit vaker nodig hebt. Bijvoorbeeld een ander component gebruikt de timer voor een klok te laten zien:

```typescript codesandbox={"template": "react-non-strict", "filename": "src/App.tsx"}
import { useState, useEffect } from 'react';

const App = () => {
    const [delay, setDelay] = useState(1000);
    const [time, setTime] = useState(new Date());  

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, delay);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <p>Time: {time.toLocaleTimeString()}</p>
        </div>
    )
}
//hide-start
export default App;
//hide-end
```

Eigenlijk is grotendeel van de code hetzelfde. We kunnen deze logica in een custom hook stoppen:

```typescript codesandbox={"template": "react-non-strict", "filename": "src/App.tsx"}
import { useState, useEffect } from 'react';

type TimeoutCallback = () => void;

const useTimeout = (d: number, callback: TimeoutCallback) => {
    const [delay, setDelay] = useState(d);

    useEffect(() => {
        const timer = setInterval(() => {
            callback();
        }, delay);

        return () => clearTimeout(timer);
    }, []);
}

const App = () => {
    const [counter, setCounter] = useState(0);  
    const [time, setTime] = useState(new Date());  

    useTimeout(1000, () => setCounter((prev) => prev + 1));
    useTimeout(1000, () => setTime(new Date()));

    return (
        <div>
            <p>Counter: {counter}</p>
            <p>Time: {time.toLocaleTimeString()}</p>
        </div>
    )
}

//hide-start
export default App;
//hide-end
```

Op deze manier wordt deze hook herbruikbaar in meerdere componenten zonder code te dupliceren. Je kan hem ook in een apart bestand zetten en importeren waar nodig.

Je zou deze hook ook kunnen uitbreiden met extra functionaliteit, zoals het pauzeren of hervatten van de timer. Dan moet de functie ook een functie teruggeven die de timer stil zet (en terug start)

```typescript codesandbox={"template": "react-non-strict", "filename": "src/App.tsx"}
import { useState, useEffect } from 'react';

type TimeoutCallback = () => void;

const useTimeout = (d: number, callback: TimeoutCallback) => {
    const [delay, setDelay] = useState(d);
    const [running, setRunning] = useState(true);

    const pause = () => setRunning(false);
    const resume = () => setRunning(true);

    useEffect(() => {
        if (!running) return;
        const timer = setInterval(() => {
            callback();
        }, delay);

        return () => clearTimeout(timer);
    }, [running]);

    return { pause, resume };
}
```

En dan kan je deze op de volgende manier in je component gebruiken:

```tsx
const { pause, resume } = useTimeout(1000, () => setCounter((prev) => prev + 1));
```

Je kan deze ook hernoemen naar iets anders op de volgende manier, zodat je meerdere useTimeout hooks kan gebruiken in hetzelfde component:

```tsx
const { pause: pauseCounter, resume: resumeCounter } = useTimeout(1000, () => setCounter((prev) => prev + 1));
const { pause: pauseTime, resume: resumeTime } = useTimeout(1000, () => setTime(new Date()));
```