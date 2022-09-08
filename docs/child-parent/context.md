# Context

## Delen van data via context

In een React applicatie wordt data van het bovenste component doorgegeven naar het onderste component aan de hand van props. Dit is mogelijk in een applicatie waar de component structuur niet heel diep is, maar naar mate de applicatie groeit, groeit meestal ook de diepte van je componenten structuur. Je zal dan vaak een prop verschillende niveau's diep moeten doorgeven. Dit concept heet property drilling, en is in grote applicaties niet wenselijk.

Stel dat we een light theme en een dark theme willen ondersteunen in onze applicatie. Elk component heeft deze prop nodig want elk component moet zijn UI aanpassen als de theme light of dark is. 

Hieronder kan je een voorbeeld hiervan zien:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import { useState } from "react";

const getThemeStyle = (theme: string, color: string) => {
    return { backgroundColor: theme === "dark" ? "black" : "white", padding: 10, border: "10px solid " + color }
}
//hide-end
const ComponentA = ({ theme }: { theme: string }) => {
  return (
    <div style={getThemeStyle(theme, "red")}>
      <ComponentB theme={theme} />
    </div>
  );
};
const ComponentB = ({ theme }: { theme: string }) => {
  return (
    <div style={getThemeStyle(theme, "green")}>
      <ComponentC theme={theme} />
    </div>
  );
};
const ComponentC = ({ theme }: { theme: string }) => {
  return (
    <div style={getThemeStyle(theme, "blue")}>
      <ComponentD theme={theme} />
    </div>
  );
};
const ComponentD = ({ theme }: { theme: string }) => {
  return <p style={{color: theme === "dark" ? "white" : "black"}}>{theme}</p>;
};

const App = () => {
  const [theme, setTheme] = useState("light");
  
  return (
    <>
      <button onClick={()=>{ setTheme(theme => theme == "dark" ? "light" : "dark")}}>Toggle theme!</button>
      <ComponentA theme={theme} />
    </>
  );
};
//hide-start
export default App;
//hide-end
```

Je ziet dat zelfs voor een kleine applicatie, zoals die hierboven, dat we deze theme prop al moeten doorgeven doorheen 3 niveaus van componenten. Bij grotere applicaties gaat dit nog veel erger worden. Daarom heeft React voor de Context API gezorgd. Dit is een manier om data te gaan delen doorheen componenten zonder door heel de structuur te moeten doorgegeven worden.

Het eerste wat we moeten doen is een Context aanmaken aan de hand van de createContext

```typescript


export const ThemeContext = React.createContext({theme: 'light'});
```

Je moet altijd een default waarde meegeven aan de context. Deze default waarde wordt enkel gebruikt als er geen provider aanwezig is bovenaan in de component structuur. We geven hier een object met een mode property. Dus in ons geval zal onze layout dus standaard in light mode staan.

Nu moeten we een Provider maken van onze ThemeContext zodat we de values kunnen meegeven die we in de componenten willen gebruiken. De provider moet rond de bovenste component staan die onze context willen gebruiken.

```typescript
const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme: theme}}>
       <...>

       </...>
    </ThemeContext.Provider>
  );
};
```

Nu kan je de values van de ThemeContext provider opvragen aan de hand van de `useContext` hook. 

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React, { useState, useContext } from "react";

export const ThemeContext = React.createContext({theme: 'light'});

const getThemeStyle = (theme: string, color: string) => {
  return { backgroundColor: theme === "dark" ? "black" : "white", padding: 10, border: "10px solid " + color }
}
//hide-end
const ComponentA = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div style={getThemeStyle(theme, "red")}>
      <ComponentB/>
    </div>
  );
};
const ComponentB = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div style={getThemeStyle(theme, "green")}>
      <ComponentC />
    </div>
  );
};
const ComponentC = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div style={getThemeStyle(theme, "blue")}>
      <ComponentD  />
    </div>
  );
};
const ComponentD = () => {
  const {theme} = useContext(ThemeContext);
  return <p style={{color: theme === "dark" ? "white" : "black"}}>{theme}</p>;
};

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme: theme}}>
        <>
            <button onClick={()=>{ setTheme(theme => theme == "dark" ? "light" : "dark")}}>Toggle theme!</button>
            <ComponentA />
        </>
    </ThemeContext.Provider>
  );
};
//hide-start
export default App;
//hide-end
```

Je ziet nu dat elk component toegang heeft tot de mode variabele die we in de context hebben aangeboden zonder dat we deze moeten doorgeven doorheen de component hierarchie.

## Functies in context

We kunnen ook functies toevoegen in onze `ThemeContext` zodat we bijvoorbeeld ook vanuit elk component de theme kunnen aanpassen. We voegen nu aan de createContext functie een setMode functie toe. We moeten hier een default value voor aanbieden, op dit moment hebben we nog geen handler dus we geven een lege functie mee.

```typescript
export const ThemeContext = React.createContext({theme: "light", setTheme: (theme: string) => {}});
```

We moeten hier geen types voorzien want TypeScript kan uit de default value het type afleiden.

Als we nu de `setMode` functie (van de useState) meegeven aan de provider dan is deze functie beschikbaar in elk component.

```typescript {2} codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React, { useState, useContext } from "react";

export const ThemeContext = React.createContext({theme: 'light', setTheme: (theme: string)=>{}});

const getThemeStyle = (theme: string, color: string) => {
  return { backgroundColor: theme === "dark" ? "black" : "white", padding: 10, border: "10px solid " + color }
}

const ComponentA = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div style={getThemeStyle(theme, "red")}>
      <ComponentB/>
    </div>
  );
};
const ComponentB = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div style={getThemeStyle(theme, "green")}>
      <ComponentC />
    </div>
  );
};
const ComponentC = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div style={getThemeStyle(theme, "blue")}>
      <ComponentD  />
    </div>
  );
};
//hide-end
const ComponentD = () => {
  const {theme,setTheme} = useContext(ThemeContext);
  return <button onClick={() => { setTheme(theme === "dark" ? "light" : "dark")}} style={{backgroundColor: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black"}}>{theme}</button>;
};
//hide-start
const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
        <>
            <button onClick={()=>{ setTheme(theme => theme == "dark" ? "light" : "dark")}}>Toggle theme!</button>
            <ComponentA />
        </>
    </ThemeContext.Provider>
  );
};
export default App;
//hide-end
```

## Voorbeelden

### Globale API state
