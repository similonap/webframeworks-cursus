---
sidebar_position: 3
---

# Arrays en objecten in state

Tot nu toe hebben we enkel gebruik gemaakt van een primitieve waarde in de state. Zo is de werking van number, string en boolean vrij gelijkaardig en moeten we deze niet in detail behandelen. 

Voor complexe data types zoals arrays en objecten zijn er een aantal speciale dingen waarmee je rekening moet houden.

## Array als state

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

Het verwijderen van elementen kan je doen aan de hand van een filter. We kunnen hier een `removeNumber` functie aanmaken die een `i` (de index) als argument aanvaard. Dit werkt omdat filter altijd een **nieuwe** array teruggeeft.

```typescript {9-11,22} codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import {useState} from "react";
//hide-end
const App = () => {
  const [numbers, setNumbers] = useState<number[]>([0,1,2,3,4]);
  const [number, setNumber] = useState<number>(0);

  const addClicked : React.MouseEventHandler<HTMLButtonElement> = () => {
    setNumbers([...numbers, number]);
  }

  const removeNumber = (i : number) => {
    setNumbers(numbers.filter((number, index) => index !== i));
  }

  return (
    <>
      <input type="number" onChange={(event) => setNumber(parseInt(event.target.value))} value={number}/>
      <button onClick={addClicked}>Add</button>
      <table>
        <tbody>
          {numbers.map((number, index) => 
            (<tr key={index}>
              <td>{number}</td>
              <td><button onClick={() => { removeNumber(index); }}>X</button></td>
            </tr>)
            )}
        </tbody>
      </table>
    </>
  );
};
//hide-start
export default App;
//hide-end
```

## Object als state

In het volgende code voorbeeld plaatsen we een object in een state zodat we dynamisch de keys en values van dit object kunnen aanpassen. Omdat het een object is met een niet op voorhand gedefinieerde interface moeten we een speciale interface gebruiken waar we gewoon aangeven welk type de key heeft en welk type de value (zie dictionary). Dit object mag net zoals een array niet rechtstreeks worden aangepast maar er moet een kopie voorzien worden.

```typescript {11} codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React, { useState } from "react";
//hide-end
interface Dictionary {
  [key: string]: string
}

const App = () => {
  const [dictionary, setDictionary] = useState<Dictionary>({})
  const [key,setKey] = useState("");
  const [value,setValue] = useState("");

  const buttonClicked : React.MouseEventHandler<HTMLButtonElement> = () => {
    setDictionary({...dictionary, [key]:value});
  }

  return (
    <>
      <div>
        <input placeholder="key" type="text" value={key} onChange={(event) => setKey(event.target.value)}/>
        <input placeholder="value" type="text" value={value} onChange={(event) => setValue(event.target.value)}/>
        <button onClick={buttonClicked}>Set</button>
        <br/>
        {JSON.stringify(dictionary)}
      </div>
    </>
  );
};
//hide-start
export default App;
//hide-end
```

