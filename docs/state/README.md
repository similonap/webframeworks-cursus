---
sidebar_position: 9
---

# State

State en Props zijn een van de meest essentiële concepten die je moet begrijpen in React. Props dienen om informatie door een componenten structuur te geven, en state wordt gebruikt om applicaties interactief te maken. State wordt gebruikt om informatie bij te houden en deze aan te passen over de looptijd van je applicatie.

## useState hook

We zullen dat laatste demonstreren aan de hand van een voorbeeld. We gaan hiervoor terug naar ons `InputView` voorbeeld. Stel dat we elke keer de gebruiker iets intypt in de input box, dat we deze text willen laten tonen ergens anders in de applicatie. Dit is dus informatie die aangepast wordt over de looptijd van de applicatie. 

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
const InputView = () => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
  }
  return (
    <input type="text" id="name" onChange={handleChange} />
  )
}
//hide-start
const App = () => {
    return <InputView/>
}

export default App;
//hide-end
```

We zouden foutief kunnen veronderstellen dat we dit probleem kunnen oplossen door een variabele te maken die de ingetypte tekst opslaat. Een verstaanbare poging is deze:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
// DEZE CODE IS FOUT
const InputView = () => {
  let name = "";
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event = event.target.value;
  }
  return (
    <>
      <input type="text" id="name" onChange={handleChange} />
      <p>
        The name you typed is {name}
      </p>
    </>
  );
}
//hide-start
const App = () => {
    return <InputView/>
}

export default App;
//hide-end
```

Wijzigingen in het input veld hebben **geen effect** op de rest van de pagina. Elke render (en er vindt er niet eens een plaats wanneer de handler de waarde wijzigt) runt de code voor de component opnieuw. Er wordt dus telkens een nieuwe variabele name met beginwaarde ```""``` aangemaakt.

In plaats van een gewone variabele is een state variabele nodig. **Bij een wijziging hiervan wordt de component hertekend en de waarde wordt bijgehouden over uitvoeringen heen.** Deze variabele kan aangemaakt worden door middel van de useState hook.

```typescript
const [name, setName] = useState<string>('');
```

De `useState` functie heeft als argument een initiële state. Dit is de start waarde die de state zal krijgen als de component voor de eerste keer gerenderd wordt. De functie geeft een array terug met twee elementen in: het eerste element is de huidige state en het tweede element is een functie waarmee je de state **kan en moet** aanpassen. We geven aan welk type onze state zal bevatten door `<string>` mee te geven aan de `useState` functie.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { useState } from "react";

const InputView = () => {
  const [name, setName] = useState<string>('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  }

  return (
    <>
      <input type="text" id="name" onChange={handleChange} value={name}/>
      <p>
        The name you typed is {name}
      </p>
    </>
  );
}
//hide-start
const App = () => {
    return <InputView/>
}

export default App;
//hide-end
```

Het value attribuut wordt ingesteld op de huidige waarde van de state. Zo zorgen we ervoor dat het inputveld altijd up-to-date is met de huidige waarde van de state. Dit noemen ze in react **controlled components**.

:::info
Je mag meerdere keren `useState` gebruiken in 1 component. Bijvoorbeeld als je meerdere input velden hebt in je formulier zal je ook meerdere states hebben.
:::

## setState met callback

Soms is de nieuwe waarde van een state afhankelijk van de vorige waarde van de state. In dit geval moeten we de `setState` aanroepen met een callback functie als argument. 

```typescript {8,9} codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import {useState} from "react";
//hide-end
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => {
        setCount(count + 1); 
        setCount(count + 1); // count is nog niet geupdated.
       }
      }>+</button>
    </>
  );
}
//hide-start
export default App;
//hide-end
```

In het bovenstaande voorbeeld zou je denken dat de count altijd met twee omhoog gaat. Maar dat is niet het geval. Als de tweede `setCount` wordt aangeroepen is de `count` state nog niet aangepast. 

Wil je dit doen dan moet je dit op de volgende manier doen:

```typescript {8,9} codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import {useState} from "react";
//hide-end
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => {
        setCount(prevCount => prevCount + 1); 
        setCount(prevCount => prevCount + 1);
       }
      }>+</button>
    </>
  );
}
//hide-start
export default App;
//hide-end
```