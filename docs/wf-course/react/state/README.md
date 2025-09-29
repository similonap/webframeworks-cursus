---
sidebar_position: 6
---

import GoodsSearch from '@site/src/components/Course/GoodsSearch';

# State

State en Props zijn een van de meest essentiële concepten die je moet begrijpen in React. Props dienen om informatie door een componenten structuur te geven, en state wordt gebruikt om applicaties interactief te maken. 

Terwijl props worden gebruikt om data van buitenaf te geven aan een component, wordt state gebruikt om data van een component te bewaren. Als deze data verandert, zal de component opnieuw gerenderd worden (en dus ook zijn kinderen). 

Alles wat verandert doorheen de levenscyclus van een component, wordt opgeslagen in de state. Dit kan een waarde zijn van een input veld, een checkbox, een lijst van items, een error, een loading state, ...

## useState hook

We gaan het gebruik van state eens demonstreren aan de hand van een voorbeeld. We gaan hiervoor terug naar ons `InputView` voorbeeld. Stel dat we elke keer de gebruiker iets intypt in de input box, dat we deze text willen laten tonen ergens anders in de applicatie. Dit is dus informatie die aangepast wordt over de looptijd van de applicatie. 

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

## Regels van useState

Je mag geen `useState` hook gebruiken in:
- loops
- condities
- geneste functies

Je moet altijd de `useState` hook gebruiken **bovenaan** je React component (functie). 

Als je deze regels volgt dan ben je altijd zeker dat de `useState` hooks opgeroepen worden in dezelfde volgorde elke keer het component gerendered wordt. 

`setState` mag uiteraard wel overal gebruikt worden in het component op eender welke plaats.

:::warning
Er zullen meestal geen foutmeldingen ontstaan als je dit toch doet. Maar hierdoor kunnen heel moeilijk te debuggen bugs door kunnen onstaan. Dus let er op dat je deze regels zelf goed volgt!
:::

Hier is een voorbeeld waar we de regels van de `useState` hook niet respecteren:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { useState } from "react";

const BadCounter = ({ enableExtra }: { enableExtra: boolean }) => {
  // ✅ Hook 1 – always runs
  const [count, setCount] = useState(0);

  // ❌ Hook 2 – only runs sometimes
  if (enableExtra) {
    const [extra, setExtra] = useState(100); 
    // React explodes if this runs on one render but not the next

    return (
      <>
        <p>Count: {count}</p>
        <p>Extra: {extra}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <button onClick={() => setExtra(extra + 10)}>Increment Extra</button>
      </>
    );
  }

  // If enableExtra = false, hook order is different → 💥
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </>
  );
};

const App = () => {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showExtra}
          onChange={(e) => setShowExtra(e.target.checked)}
        />
        Enable Extra Counter
      </label>
      <BadCounter enableExtra={showExtra} />
    </>
  );
};

export default App;
```

De oplossing hier is de `useState` hook uit de if statement te zetten en bovenaan de functie.

## Hoe state herkennen?

Bij elk component moet je de volgende vragen stellen:
- Werd de data van buitenaf gegeven? Dan is het een prop.
- Blijft de date hetzelfde doorheen de levenscyclus van het component? Dan is het waarschijnlijk geen state.
- Is de data afgeleid van andere data in je component? Dan is het waarschijnlijk geen state.

#### We kunnen deze analyse eens uitvoeren op het volgende component:

<div style={{border: "1px solid black", padding: 10}}>
<GoodsSearch/>
</div>

#### We kunnen hier de volgende data herkennen:

- De originele lijst van producten
- De tekst die in de zoekbalk is ingegeven
- De waarde van de checkbox
- De lijst van producten die gefilterd is op de zoektekst

#### Als we deze data analyseren, kunnen we de volgende conclusies trekken:

- De originele lijst van producten wordt niet aangepast. Er worden bijvoorbeeld geen producten toegevoegd of verwijderd. Dit is dus geen state.
- De tekst die in de zoekbalk is ingegeven, wordt aangepast door de gebruiker. Dit is dus state.
- De waarde van de checkbox wordt aangepast door de gebruiker. Dit is dus state.
- De gefilterde lijst van producten is afgeleid van de originele lijst en de tekst die in de zoekbalk is ingegeven. Dit is dus geen state.

:::info
De uitwerking van dit voorbeeld kan je vinden op [Voorbeelden](./voorbeelden.md#zoeken-en-filteren)
:::

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

### Toevoegen aan array

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

### Verwijderen van array

Het verwijderen van elementen kan je doen aan de hand van een filter. We kunnen hier een `removeNumber` functie aanmaken die een `i` (de index) als argument aanvaard. Dit werkt omdat filter altijd een **nieuwe** array teruggeeft.

```typescript {4-6} codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import {useState} from "react";
//hide-end
const App = () => {
  const [numbers, setNumbers] = useState<number[]>([0,1,2,3,4]);

  const removeNumber = (i : number) => {
    let numbersCpy = numbers.filter((number, index) => index !== i);
    setNumbers(numbersCpy);
  }

  return (
    <>
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

### Wijzigen in array

Wil je een element wijzigen dan kan je dit doen door een kopie te maken van de array en het element te vervangen door een nieuw element. We kunnen hiervoor de `map` functie gebruiken. We mappen elk element van de array naar een nieuw element. Als het element dat we willen wijzigen is dan maken we een nieuw element aan, anders laten we het element ongewijzigd.

```typescript {7-9} codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import {useState} from "react";
//hide-end
const App = () => {
  const [numbers, setNumbers] = useState<number[]>([0,1,2,3,4]);

  const modifyNumber = (i : number) => {
    let promptResult = prompt("Enter new number");
    if (promptResult) {
        let newNumber = parseInt(promptResult);
        let numbersCpy = numbers.map((oldNumber, index) => (index === i) ? newNumber : oldNumber);
        setNumbers(numbersCpy);
    }
  }

  return (
    <>
      <table>
        <tbody>
          {numbers.map((number, index) => 
            (<tr key={index}>
              <td>{number}</td>
              <td><button onClick={() => { modifyNumber(index); }}>Modify</button></td>
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

### Object

Een object kan je ook gebruiken als state. Je moet hier net zoals bij een array de spread syntax gebruiken om een kopie te maken van het object. Je kan dan de gewenste eigenschap aanpassen.

```typescript {4-6} codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import {useState} from "react";

interface Person {
  name: string;
  age: number;
}

//hide-end
const App = () => {
  const [person, setPerson] = useState<Person>({name: "John", age: 42});

  const changeName = () => {

    setPerson({...person, name: "Jane"});
  }

  return (
    <>
      <p>{person.name} is {person.age} years old</p>
      <button onClick={changeName}>Change name</button>
    </>
  );
};

export default App;
```

### Dictionary

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

## Voorbeelden
### Select

We beginnen van het `Select` voorbeeld dat we hebben gemaakt in het onderdeel over event handling. We gaan hier nu een controlled component van maken. Dit betekent dat we een state moeten aanmaken om de geselecteerde waarde van dit component bij te houden:

```typescript
const [selectedBrand, setSelectedBrand] = useState("");
```

daarna zorg je dat de `onChange` prop een functie bevat die de state aanpast als het veld aangepast is. Ook zet je de `value` prop op de waarde van de state. Zo blijft die altijd up-to-date.

```typescript {2,7} codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import {useState} from "react";
//hide-end
const App = () => {
    const [selectedBrand, setSelectedBrand] = useState("");

    return (
      <>
        <label htmlFor="cars">Choose a car:</label>
        <select id="cars" name="cars" onChange={(event) => setSelectedBrand(event.target.value)} value={selectedBrand}>
          <option disabled value="">Select an option</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <p>You selected {selectedBrand}</p>
      </>
    )
}
//hide-start
export default App;
//hide-end
```

### Checkbox

Iets gelijkaardigs kunnen we nu doen met een `Checkbox`:

```typescript codesandbox={"template": "react-assets", "filename": "src/App.tsx"}
//hide-start
import {useState} from "react";

const containerStyle : React.CSSProperties = {
    height: "100vh",width:"100vw"
}

const centerBulb : React.CSSProperties = {
    position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"
}

//hide-end
const App = () => {
    const [light, setLight] = useState(true);
    const backgroundStyle = {backgroundColor: light ? "white" : "black"};
    return (
      <div style={{...containerStyle,...backgroundStyle}}>
        <input
          type="checkbox"
          onChange={(event) => setLight(event.target.checked)}
          checked={light}
        />

        <div style={centerBulb} onClick={() => {alert(`This light is ${light ? "on" : "off"}`)}}>
        {light ? <img src={require("./assets/lightbulb_on.png")}/> : <img src={require("./assets/lightbulb_off.png")}/>}
        </div>
      </div>
    )
}
//hide-start
export default App;
//hide-end
```

Je ziet hierboven dat je de waarde van de state op verschillende plaatsen kan aanspreken:
- In een event handler van een ander element. Dit kan omdat de state ook in de scope van deze handler is.
- In plaats van de `value` prop gebruiken we hier de `checked` prop om de checked status te zetten van de checkbox.
- In de TSX zelf: we gebruiken de conditional operator (?) hier om de juiste image te tonen afhankelijk van de waarde van de state.

### Radio button

Ook een reeks radio buttons heeft een achterliggende state nodig. We hebben per radio button een change listener nodig en hier maken we ook gebruik van de `checked` property. 

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { useState } from "react";

const App = () => {
  const [favoriteLanguage, setFavoriteLanguage] = useState<string>("");

  return (
    <div className="App">
      Please enter your favorite programming language:
      <br />
      <input type="radio" name="fav_language" value="TypeScript" checked={favoriteLanguage === "TypeScript"} onChange={(event) => setFavoriteLanguage(event.target.value)}/>
      <label htmlFor="typescript">TypeScript</label>
      <br />
      <input type="radio" name="fav_language" value="C#" checked={favoriteLanguage === "C#"} onChange={(event) => setFavoriteLanguage(event.target.value)}/>
      <label htmlFor="C#">C#</label>
      <br />
      <input type="radio" name="fav_language" value="PHP" checked={favoriteLanguage === "PHP"} onChange={(event) => setFavoriteLanguage(event.target.value)}/>
      <label htmlFor="PHP">PHP</label>
      <br/>
      <button onClick={() => { alert(`You selected ${favoriteLanguage}`)}}>Click Me</button>
    </div>
  );
}
//hide-start
export default App;
//hide-end
```

### Select Multiple

In het voorgaande voorbeeld kon je maar 1 item selecteren in de lijst. Als je wil werken met een multiselect is een state met een string hier niet voldoende voor. We moeten een array bijhouden van geselecteerde waarden. 

```typescript
const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
```

Dat gaan we ook in een state doen. De logica hierachter is wel iets complexer. 

```typescript {5} codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React, {useState} from "react";
//hide-end
const App = () => {
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    const brandChange : React.ChangeEventHandler<HTMLSelectElement> = (event) => {
      setSelectedBrands(Array.from(event.target.selectedOptions, option => option.value));
    }

    return (
      <>
        <label htmlFor="cars">Choose your favorite car brands:</label>
        <br/>
        <select id="cars" name="cars" onChange={brandChange} value={selectedBrands} multiple>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        
      </>
    )
}
//hide-start
export default App;
//hide-end
```

Je merkt hier het volgende stuk code op:

```typescript
setSelectedBrands(Array.from(event.target.selectedOptions, option => option.value));
```

Dit zorgt ervoor dat we de selectedOptions omzetten naar een array en dan elk element mappen naar zijn waarde. Zo krijgen we een array van strings van de waarden. Vervolgens gebruiken we de setter van de state om de state te updaten naar de nieuwe lijst. 

Je zou dit ook kunnen doen met een `for` loop:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React, {useState} from "react";
//hide-end
const App = () => {
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    const brandChange : React.ChangeEventHandler<HTMLSelectElement> = (event) => {
      let selectedBrands: string[] = [];
      for (let option of event.target.selectedOptions) {
        selectedBrands.push(option.value);
      }
      setSelectedBrands(selectedBrands);
    }

    return (
      <>
        <label htmlFor="cars">Choose your favorite car brands:</label>
        <br/>
        <select id="cars" name="cars" onChange={brandChange} value={selectedBrands} multiple>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        
      </>
    )
}
//hide-start
export default App;
//hide-end
```

### Checkbox multiple

In het voorgaande voorbeeld hebben we gebruik gemaakt van 1 checkbox. In het onderstaande voorbeeld maken we een groep van checkboxes die aan elkaar gelinked zijn.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { useState } from "react";

export default function App() {
  const [favoriteLanguages, setFavoriteLanguages] = useState<string[]>([]);

  const handleFavoriteLanguageChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.checked) {
      // Add to the favorite list
      setFavoriteLanguages([...favoriteLanguages, event.target.value]);
    } else {
      // Remove from the favorite list
      setFavoriteLanguages(favoriteLanguages.filter((lang) => lang !== event.target.value));
    }
  }

  return (
    <div className="App">
      <fieldset>
        <legend>Select the programming languages you like</legend>      
        <input type="checkbox" name="fav_language" value="TypeScript" checked={favoriteLanguages.includes("TypeScript")} onChange={handleFavoriteLanguageChange}/>
        <label htmlFor="typescript">TypeScript</label>
        <br />
        <input type="checkbox" name="fav_language" value="C#" checked={favoriteLanguages.includes("C#")} onChange={handleFavoriteLanguageChange}/>
        <label htmlFor="C#">C#</label>
        <br />
        <input type="checkbox" name="fav_language" value="PHP" checked={favoriteLanguages.includes("PHP")} onChange={handleFavoriteLanguageChange}/>
        <label htmlFor="PHP">PHP</label>
        <br/>
      </fieldset>
      You selected: 
      <ul>
      {favoriteLanguages.map((lang) => <li>{lang}</li>)}
      </ul>
    </div>
  );
}
//hide-start
export default App;
//hide-end
```

We hebben hier een aparte handler gemaakt voor de onChange listener. Die kijkt na of het element geselecteerd is, zo ja dan voegt hij het element toe aan de lijst en updated de state, anders wordt het element verwijderd uit de lijst.