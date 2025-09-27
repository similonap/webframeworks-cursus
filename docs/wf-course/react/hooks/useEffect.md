---
sidebar_position: 1
---

# useEffect

## Side effects
Een React component gebruikt props en/of state en bepaalt hiermee een output van het component (renderen van het component). Als het react component lijnen code bevat die niet rechtstreeks bijdragen aan deze output, dan noemen we deze side-effects.

Voorbeelden van side-effects zijn fetch requests (API), DOM manipulaties, gebruiken van timer functies (setTimeout, setInterval), ...

We willen deze side-effect logica zo hard mogelijk scheiden van de de rest van het component. We willen nooit side-effect logica rechtsreeks in het component schrijven. We hebben geen controle over hoeveel keer een component zal worden gerendered. Dit betekent dus als we side-effect logica gewoon in het component zouden schrijven dat deze ook telkens zou worden uitgevoerd als het component gerendered wordt.

```typescript codesandbox={"template": "react-non-strict", "filename": "src/App.tsx"}
interface GreetProps {
    name: string
}

const Greet = ({ name } : GreetProps) => {
  const message = `Hello, ${name}!`;       // Output gerelateerd
  // Niet doen:
  document.title = `Greetings to ${name}`; // Side-effect!
  return <div>{message}</div>;             // Output gerelateerd
}
//hide-start
const App = () => {
    return <Greet name="Andie"/>
}

export default App;
//hide-end
```

Hoe kunnen we nu er voor zorgen dat de side-effect losgekoppeld wordt van de rest van onze rendering code? Hiervoor hebben we de `useEffect()` hook. Aan deze hook kan je code meegeven die los van de rendering code wordt uitgevoerd.

```typescript codesandbox={"template": "react-non-strict", "filename": "src/App.tsx"}
import { useEffect } from "react";

interface GreetProps {
    name: string
}

const Greet = ({ name } : GreetProps) => {
  const message = `Hello, ${name}!`;       // Output gerelateerd
  useEffect(() => {
    document.title = `Greetings to ${name}`; // Side-effect!
  }, [name]);
  return <div>{message}</div>;             // Output gerelateerd
}
//hide-start
const App = () => {
    return <Greet name="Andie"/>
}

export default App;
//hide-end
```

Het updaten van de titel van het document is duidelijk een side-effect omdat het niet rechtstreeks te bijdraagt tot de output van het component. Daarom plaatsen we `document.title` in de callback en geven we die mee met de `useEffect()` functie.

We willen ook niet dat de titel van het document geupdated wordt elke keer dat het `Greet` component gerendered wordt. Deze code mag enkel alleen maar uitgevoerd worden als de `name` property veranderd. Dat is de reden waarom we deze meegeven in de dependency array.

## Dependencies array

We hebben tot nu toe al kort gezien dat er een tweede argument kan worden meegegeven aan de `useEffect()` hook. Deze bepaald wanneer de meegegeven callback zal worden uitgevoerd. 

Er zijn een aantal manieren om deze dependency array te gebruiken:

### Geen dependencies

De side-effect callback zal worden uitgevoerd na elke render van het component.

```typescript codesandbox={"template": "react-non-strict", "filename": "src/App.tsx"}
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    console.log("useEffect called");
  });
}
//hide-start
export default App;
//hide-end
```

Deze wordt in principe niet veel gebruikt. 

### Een lege array

De side-effect wordt 1 keer uitgevoerd na de eerste render. Daarna niet meer

```typescript codesandbox={"template": "react-non-strict", "filename": "src/App.tsx"}
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    console.log("useEffect called only once!");
  },[]);
}
//hide-start
export default App;
//hide-end
```

Een voorbeeldgebruik hiervoor is bijvoorbeeld het inladen van gegevens van een API. Gewoonlijk wil je dit maar 1 keer doen.

### Een array van states en props

De side-effect wordt enkel uitgevoerd als een van de meegegeven dependencies veranderen.

```typescript codesandbox={"template": "react-non-strict", "filename": "src/App.tsx"}
//hide-start
import { useEffect, useState } from "react";
//hide-end
const App = ({}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect called when count changes");
  },[count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
//hide-start
export default App;
//hide-end
```

## Side-effect cleanup
Sommige side-effects hebben cleanup nodig: afsluiten van verbindingen, timers clearen.

Je kan de cleanup code plaatsen in een functie die je als return waarde teruggeeft:

```typescript
useEffect(() => {
  // Side-effect...
  return () => {
    // Side-effect cleanup...
  };
}, []);
```

Een concreet voorbeeld hiervan is het zetten van een timer. Als we geen cleanup code voorzien worden timers nooit gestopt en blijven die gewoon lopen zelfs al veranderd hier de interval.

```typescript codesandbox={"template": "react-non-strict", "filename": "src/App.tsx"}
import { useEffect,useState } from "react";

interface TimerProps {
  interval: number
}

const Timer = ({interval} : TimerProps) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let handle = setInterval(() => {
       setNumber(number => number + 1);
    },interval);

    return () => {
      clearInterval(handle);
    }
  },[interval]);

  return <p>{number}</p>
}


const App = () => {
    const [timerInterval, setTimerInterval] = useState(1000);
    return (
      <>
        <div>
            <input type="range" min="1" max="2000" value={interval} onChange={(e) => setTimerInterval(parseInt(e.target.value))}/>
            <label htmlFor="volume">{interval}</label>
        </div>
        <Timer interval={timerInterval} />
      </>
    );
}

export default App;
```

## Praktische voorbeelden

### Oproepen van een API

Een perfect voorbeeld waar `useEffect()` wordt gebruikt is het ophalen van data uit een API. We gaan in dit voorbeeld gebruik maken van de World Time API:

```
http://worldtimeapi.org/api/timezone/Europe/Brussels
```

De data voldoet aan de volgende interface:

```typescript
interface TimezoneInfo {
    abbreviation: string;
    client_ip: string;
    datetime: Date;
    day_of_week: number;
    day_of_year: number;
    dst: boolean;
    dst_from: Date;
    dst_offset: number;
    dst_until: Date;
    raw_offset: number;
    timezone: string;
    unixtime: number;
    utc_datetime: Date;
    utc_offset: string;
    week_number: number;
}
```

Het ophalen van data heeft nooit direct invloed op het renderen van het component. Dit komt omdat dit asynchroon gebeurd, dus op de moment dat de API aangeroepen wordt is er nog geen data beschikbaar en het renderen van componenten in react kan nooit asynchroon gebeuren. Daarom moet deze code in een side effect gebeuren.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import { useState, useEffect } from "react";

interface TimezoneInfo {
    abbreviation: string;
    client_ip: string;
    datetime: Date;
    day_of_week: number;
    day_of_year: number;
    dst: boolean;
    dst_from: Date;
    dst_offset: number;
    dst_until: Date;
    raw_offset: number;
    timezone: string;
    unixtime: number;
    utc_datetime: Date;
    utc_offset: string;
    week_number: number;
}
//hide-end
const App = () => {
    const [timezoneInfo, setTimezoneInfo] = useState<TimezoneInfo>();

    useEffect(() => {
        const fetchFunction = async() => {
            let result = await fetch("https://worldtimeapi.org/api/timezone/Europe/Brussels");
            let json : TimezoneInfo = await result.json(); 

            setTimezoneInfo(json);
        }
        fetchFunction();
    },[]);

    return (
        <>
            {timezoneInfo && (
                <ul>
                    <li>IP: {timezoneInfo.client_ip}</li>
                    <li>TimeZone: {timezoneInfo.timezone}</li>
                    <li>Time: {timezoneInfo.datetime}</li>
                </ul>
            )}

        </>
    );
}
//hide-start
export default App;
//hide-end
```

We gebruiken hier een `useEffect` met een lege dependency array omdat we deze API call maar 1 keer willen uitvoeren bij het mounten van dit component.

De callback die we meegeven aan `useEffect` mag niet `async` zijn dus we maken een aparte asynchrone functie die we dan in de `useEffect` callback oproepen.

### Opslaan in LocalStorage

Local storage laat toe bepaalde configuraties of user settings bij te houden in de browser van de gebruiker. Local storage kan bijvoorbeeld gebruikt worden om de inhoud van een veld op te slaan, zodat dit terug kan worden ingevuld wanneer de gebruiker de pagina opnieuw opent.

We kunnen deze waarde alvast uitlezen bij het zetten van de default waarde van onze state. Veronderstel bijvoorbeeld een veld name voor de naam van de gebruiker:

```typescript
const [name, setName] = useState<string>(localStorage.getItem("name") ?? "");
```

:::info
De operator ?? staat toe een defaultwaarde te voorzien. Als de waarde langs de linkerkant null of undefined is, wordt de waarde langs de rechterkant gebruikt.
:::

Door middel van een side-effect kunnen we elke wijziging aan de state variabele `name` opslaan. Om dit te verwezenlijken moeten we `name` in de dependency array meenemen zodat onze callback functie telkens wordt opgeroepen als deze veranderd.

```typescript codesandbox={"template": "react-non-strict", "filename": "src/App.tsx"}
//hide-start
import {useEffect, useState} from "react";
//hide-end
const App = () => {
  const [name, setName] = useState<string>(localStorage.getItem("name") ?? "");

  useEffect(() => {
    localStorage.setItem("name", name);
  },[name]);

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    </>
  )
}
//hide-start
export default App;
//hide-end
```

## Strict mode

:::warning
Dit is geavanceerde leerstof. Dit legt uit waarom effects onverwacht twee keer worden uitgevoerd en hoe we dit kunnen oplossen. Begrijp je dit niet? Geen probleem, je kan dit overslaan. Dit zal je geen problemen geven bij het maken van de oefeningen.
:::

In de vorige voorbeelden hebben we gezegd dat de `useEffect` hook met een lege dependency array maar 1 keer wordt uitgevoerd. Je zult opmerken dat deze useEffect hook toch 2 keer wordt uitgevoerd. Dit komt omdat de `App` component in strict mode staat. Dit is een feature van React die ervoor zorgt dat componenten in development mode altijd een tweede keer worden gerendered. Dit is om te controleren of de rendering van het component geen side-effects heeft. Bijvoorbeeld: dat je useEffect hook een cleanup functie teruggeeft.

Je kan dit uitschakelen door de `React.StrictMode` component te verwijderen uit de `index.tsx` file.

```
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Zonder de `StrictMode` component zal de `useEffect` hook maar 1 keer worden uitgevoerd.

Is het dan best dat je deze afzet? **Nee** want het kan je fouten in je code helpen opsporen. Je zal er dus voor moeten zorgen dat je altijd een `cleanup` functie voorziet voor het opruimen van je vorige effect.

Dit is vaak gemakkelijker gezegd dan gedaan. Want bijvoorbeeld wat doen we dan bij een API call? We kunnen de `fetch` functie niet zomaar stoppen. We moeten dus een manier hebben waar we het resultaat kunnen negeren als de fetch nog bezig is op de moment dat de cleanup functie is aangeroepen.

We gaan in dit voorbeeld een aantal todos inlezen bij het mounten van een component

```typescript
useEffect(( ) => {
  let ignore = false;
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos =>{
        if (!ignore) {
          console.log("SET TODO")
          setTodos(todos);
        }
    });
  return () => {
    // cleanup code
    ignore = true;
  }
}, [])
```
 
met async/await:

```typescript
useEffect(( ) => {
  let ignore = false;
  const fetchFunction = async() => {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos");
    let json = await result.json(); 
    if (!ignore) {
      console.log("SET TODO")
      setTodos(json);
    }
  }
  fetchFunction();
  return () => {
    // cleanup code
    ignore = true;
  }
}, [])
```
