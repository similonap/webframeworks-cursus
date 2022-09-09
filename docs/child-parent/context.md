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
interface IThemeContext {
    theme: string
}

export const ThemeContext = React.createContext<IThemeContext>({theme: 'light'});
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

interface IThemeContext {
    theme: string
}
export const ThemeContext = React.createContext<IThemeContext>({theme: 'light'});

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
interface IThemeContext {
    theme: string,
    setTheme: (theme: string) => void
}

export const ThemeContext = React.createContext<IThemeContext>({theme: "light", setTheme: (theme: string) => {}});
```

We geven hier bij de createContext een interface mee tussen de `<>` haken zodat TypeScript weet welke keys er in de context zullen voorkomen en welke types deze hebben.

Als we nu de `setTheme` functie (van de useState) meegeven aan de provider dan is deze functie beschikbaar in elk component.

```typescript {2} codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React, { useState, useContext } from "react";

interface IThemeContext {
    theme: string,
    setTheme: (theme: string) => void
}
export const ThemeContext = React.createContext<IThemeContext>({theme: 'light', setTheme: (theme: string)=>{}});

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

## Globale state

Het komt vaak voor dat data die vanuit een externe API komt moet beschikbaar zijn over verschillende componenten of verschillende paginas. We zouden deze data kunnen doorgeven aan de hand van properties, maar meestal wordt dit gedaan met de `Context` api. Zo bekomen we een grote state die we kunnen delen over de verschillende componenten. 

```typescript codesandbox={"template": "react-router-context-api", "filename": "src/App.tsx"}
//hide-start
import React, { useContext, useEffect, useState } from "react";
import { useParams, BrowserRouter, Routes, Route, Link } from "react-router-dom";

interface RootObject {
    genres: Genre[]
}

interface Genre {
    id: string;
    description: string;
    count: number;
}
//hide-end
interface IGenreDataContext {
    genres: Genre[]
}

const GenreDataContext = React.createContext<IGenreDataContext>({genres: []});

const HomePage = () => {
    let {genres} = useContext(GenreDataContext);
    return (<>
        Welcome to the home page!
        <ul>
        {genres.map((genre) => {
            return <li key={`detail/${genre.id}`}><Link to={`detail/${genre.id}`}>{genre.description}</Link></li>
        })}
        </ul>
      </>);
}

const DetailPage = () => {
    let { id } = useParams();
    let {genres} = useContext(GenreDataContext);

    let genre : Genre | undefined = genres.find(genre => genre.id === id);

    if (!genre) {
        return <>Not found!</>
    }
    return (
        <>
            <h1>
                {genre.description}
            </h1>
            <ul>
                <li>{genre.description} has {genre.count} games</li>
            </ul>
            <Link to="/">Back</Link>
        </>
    );
}

const App = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    useEffect(() => {
        const fetchGenres = async () => {
            let result = await fetch("/steam.json");
            let json : RootObject = await result.json();
            setGenres(json.genres);
        }
        fetchGenres();
    },[]);

    return (
        <GenreDataContext.Provider value={{genres: genres}}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/detail/:id" element={<DetailPage />}/>
            </Routes>
            </BrowserRouter>
        </GenreDataContext.Provider>
    );
}
export default App;
```

:::warning
Een groot nadeel van Context is dat elk component dat deze context gebruikt zal gererendered worden als iets in die context veranderd. Het is daarom aangewezen niet alle data zomaar in 1 context te plaatsen maar verschillende kleine `Context` objecten aan te maken en enkel deze context te gebruiken als je hem echt nodig hebt.
:::