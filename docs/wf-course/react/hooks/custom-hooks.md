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

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
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

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
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

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
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

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { useState, useEffect } from 'react';

type TimeoutCallback = () => void;

interface UseTimeoutReturn {
    pause: () => void;
    resume: () => void;
}

const useTimeout = (d: number, callback: TimeoutCallback): UseTimeoutReturn => {
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

### useFetch hook

Een heel interessante hook om te schrijven is een `useFetch` hook die data ophaalt van een API en deze in de state plaatst. Deze hook kan ook loading en error states bijhouden.

De onderstaande hook illustreert dit:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { useState, useEffect } from 'react';


interface FetchState<T> {
    loading: boolean;
    data: T | null;
    error: Error | null;
    refetch: () => void;
}

export function useFetch<T>(url: string): FetchState<T> {
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [trigger, setTrigger] = useState<number>(0);

    const refetch = () => setTrigger(trigger => trigger + 1);

    useEffect(() => {
        let cancelled: boolean = false;
        const fetchData = async() => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Something went wrong fetching data");
                }
                const result : T = await response.json();
                if (cancelled) return;
                setData(result);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

        return () => {
            cancelled = true;
        }
    }, [trigger, url]);

    return {
        data, loading, error, refetch
    }
}

//hide-start
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const App = () => {
    const { data, loading, error, refetch } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <button onClick={refetch}>Refetch</button>
            <ul>
                {data?.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}   

export default App;
//hide-end
```

Er zijn verschillende libraries die gelijkaardige hooks aanbieden die veel uitgebreider zijn. Een voorbeeld hiervan is [React Query](https://tanstack.com/query/v3/) die een heleboel functionaliteit aanbiedt rond data fetching, caching, synchronisatie en updates in React applicaties. Of [SWR](https://swr.vercel.app/) van Vercel. 

Met `useSWR` zou je bovenstaande voorbeeld als volgt kunnen herschrijven:

```typescript codesandbox={"template": "react-swr", "filename": "src/App.tsx"}
import useSWR from 'swr';
import React from 'react';

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const App = () => {
    const { data, error, mutate } = useSWR<Post[]>('https://jsonplaceholder.typicode.com/posts', fetcher);

    if (!data) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <button onClick={() => mutate()}>Refetch</button>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default App;
```

Deze hooks zijn veel krachtiger en bieden veel meer functionaliteit dan onze eenvoudige `useFetch` hook, maar het idee is hetzelfde: herbruikbare logica in een hook stoppen. 