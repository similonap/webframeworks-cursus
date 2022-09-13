---
sidebar_position: 1
---

# Regels van useState

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

interface UserInfoProps {
  askAge: boolean;
}

const UserInfo = ({ askAge }: UserInfoProps) => {
  const [name, setName] = useState("");
  if (askAge) {
    const [age, setAge] = useState(0); // 1. Mag niet in een IF staan
                                       // 2. Moet altijd bovenaan de functie staan
  }

  return (
    <fieldset>
      <legend>User Info</legend>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {askAge && (
        <>
          <label htmlFor="name">Age:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </>
      )}
    </fieldset>
  );
};

const App = () => {
  const [askAge, setAskAge] = useState(false);

  return (<>
      <label>Ask age?</label>
      <input type="checkbox" checked={askAge} onChange={(e) => setAskAge(e.target.checked)}/>
      <UserInfo askAge={askAge} />
    </>);
};

export default App;
```

De oplossing hier is de `useState` hook uit de if statement te zetten en bovenaan de functie.

