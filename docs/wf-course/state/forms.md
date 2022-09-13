---
sidebar_position: 2
---
# Formulieren

Om met form elements te werken in React is het bijna altijd aangewezen om een state aan te maken die up to date wordt gehouden met de waarde van het invoer element. Op deze manier kunnen andere manieren voorzien worden om het inputveld te wijzigen, zoals een knop om de input leeg te maken, een handler die ingetypte tekst automatisch omzet naar hoofdletters, enzovoort.

We zullen hier een aantal voorbeelden geven van controlled componenten en hoe deze kunnen gebruikt worden.

## Select

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

## Select Multiple

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
      setSelectedBrands([...Array.from(event.target.selectedOptions)].map(option => option.value));
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
setSelectedBrands([...Array.from(event.target.selectedOptions)].map(option => option.value));
```

Dit zorgt ervoor dat we de selectedOptions omzetten naar een array en dan elk element mappen naar zijn waarde. Zo krijgen we een array van strings van de waarden. Vervolgens gebruiken we de setter van de state om de state te updaten naar de nieuwe lijst.


## Checkbox

Iets gelijkaardigs kunnen we nu doen met een `Checkbox`:

```typescript codesandbox={"template": "react-images", "filename": "src/App.tsx"}
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

## Checkbox multiple

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

## Radio button

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