---
sidebar_position: 1
---

# State

State en Props zijn een van de meest essentiële concepten die je moet begrijpen in React. Props dienen om informatie door een componenten structuur te geven, en state wordt gebruikt om applicaties interactief te maken. State wordt gebruikt om informatie bij te houden en deze aan te passen over de looptijd van je applicatie.

## useState hook

We zullen dat laatste demonstreren aan de hand van een voorbeeld. We gaan hiervoor terug naar ons `InputView` voorbeeld. Stel dat we elke keer de gebruiker iets intypt in de input box, dat we deze text willen laten tonen ergens anders in de applicatie. Dit is dus informatie die aangepast wordt over de looptijd van de applicatie. 

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
const InputView = () => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
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
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
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

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
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

## State met complexe waarden

Tot nu toe hebben we enkel gebruik gemaakt van een primitieve waarde in de state. Zo is de werking van number, string en boolean vrij gelijkaardig en moeten we deze niet in detail behandelen. 

Voor complexe data types zoals arrays en objecten zijn er een aantal speciale dingen waarmee je rekening moet houden.

### Array als state

Een array als state definieren gebeurd op identiek dezelfde manier als een state met andere data types:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import {useState} from "react";
//hide-end
const App = () => {
  const [numbers, setNumbers] = useState<number[]>([0,1,2,3,4]);

  return (
    <>
      <table>
        <tbody>
        {numbers.map((number, index) => <tr key={index}><td>{number}</td></tr>)}
        </tbody>
      </table>
    </>
  );
};
//hide-start
export default App;
//hide-end
```

Tot nu toe is er nog niets interactief aan de hand en hadden we de state even goed als een variabele kunnen declareren. 

We voegen een invoerveld toe zoals we dit in het vorige deel hebben gedaan waarmee we een getal kunnen invoeren.

```typescript
<input type="number" onChange={(event) => setNumber(parseInt(event.target.value))}/>
```

en we maken hier ook ineens een controller component van:

```typescript
const [number, setNumber] = useState<number>(0);
```

Nu willen we een button toevoegen die dit getal toevoegt aan de lijst van getallen als we op de knop duwen.

We zullen eerst laten zien hoe we dit **NIET** moeten doen:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
// DEZE CODE IS FOUT
//hide-start
import {useState} from "react";
//hide-end
const App = () => {
  const [numbers, setNumbers] = useState<number[]>([0,1,2,3,4]);
  const [number, setNumber] = useState<number>(0);

  const addClicked : React.MouseEventHandler<HTMLButtonElement> = () => {
    numbers.push(number);
  }

  return (
    <>
      <input type="number" onChange={(event) => setNumber(parseInt(event.target.value))} value={number}/>
      <button onClick={addClicked}>Add</button>
      <table>
        <tbody>
          {numbers.map((number, index) => <tr key={index}><td>{number}</td></tr>)}
        </tbody>
      </table>
    </>
  );
};
//hide-start
export default App;
//hide-end
```

Als je deze code uitprobeert zie je dat er niets gebeurt. Pas nadat je terug op de knop duwt zal je element worden toegevoegd. Dat is omdat je niet de `setNumber` functie gebruikt om de state te zetten dus React weet niet dat het component opnieuw moet worden gerendered.

De volgende foute (maar begrijpelijke) veronderstelling zou zijn om gewoon hierna de `setNumber` functie aan te roepen, maar dit werkt ook niet:

```typescript
// OOK FOUT!
const addClicked : React.MouseEventHandler<HTMLButtonElement> = () => {
  numbers.push(number);
  setNumbers(numbers);
}
```

Dit komt omdat je alle state objecten moet behandelen als readonly. Je mag dus nooit iets rechstreeks aanpassen aan het object.

Voor een array moeten we bij elke wijziging een kopie maken van de array en daar het element in toevoegen. Enkel dan kan React weten dat de array opnieuw gerendered moet worden.

Een kopie van een array doe je aan de hand van de spread syntax:

```typescript {6} codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import {useState} from "react";
//hide-end
const App = () => {
  const [numbers, setNumbers] = useState<number[]>([0,1,2,3,4]);
  const [number, setNumber] = useState<number>(0);

  const addClicked : React.MouseEventHandler<HTMLButtonElement> = () => {
    setNumbers([...numbers, number]);
  }

  return (
    <>
      <input type="number" onChange={(event) => setNumber(parseInt(event.target.value))} value={number}/>
      <button onClick={addClicked}>Add</button>
      <table>
        <tbody>
          {numbers.map((number, index) => <tr key={index}><td>{number}</td></tr>)}
        </tbody>
      </table>
    </>
  );
};
//hide-start
export default App;
//hide-end
```
