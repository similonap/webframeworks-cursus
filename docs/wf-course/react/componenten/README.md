---
sidebar_position: 4
---

# Componenten

Tot nu toe had je altijd maar 1 functie: de `App` functie. Het is mogelijk alle code onder te brengen in deze functie, maar dan is het niet meer mogelijk (bijvoorbeeld in een later project) een onderdeeltje van de applicatie te herbruiken. Het is beter de applicatie op te splitsen in kleine herbruikbare blokjes. Deze herbruikbare blokjes heten componenten.

We illustreren dit met onderstaande applicatie, die een lijst van games toont:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React from "react";

interface Game {
  id: number
  name: string,
  releaseYear: number,
  sales: number
}

const games : Game[] = [
  {
    id: 0,
    name: "World of Warcraft",
    releaseYear: 2004,
    sales: 5
  },
  {
    id: 1,
    name: "Valheim",
    releaseYear: 2021,
    sales: 10
  },
  {
    id: 2,
    name: "Minecraft",
    releaseYear: 2011,
    sales: 20
  }
]
//hide-end
const App = () => {
  return (
    <div>
      <h1>Welcome to the H2O Game shop</h1>
      <div>{games.map((game: Game) => {
        return <React.Fragment key={game.id}>
              <h2>{game.name} ({game.releaseYear})</h2>
              <p>Aantal keer verkocht: {game.sales}</p>
            </React.Fragment>
      })}
      </div>
    </div>
  );
}
//hide-start
export default App;
//hide-end
```

:::note 
Deze applicatie is niet erg interactief, dus je zou ze als statische HTML-pagina kunnen schrijven. Uitgebreidere code zou de lijst met games uit een database kunnen inladen of zou het mogelijk maken games toe te voegen,...
:::

De lijst met games is een deel van de website dat als één geheel beschouwd kan worden. Daarom is het zinvol deze af te zonderen in een component. We noemen deze List:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React from "react";

interface Game {
  id: number
  name: string,
  releaseYear: number,
  sales: number
}

const games : Game[] = [
  {
    id: 0,
    name: "World of Warcraft",
    releaseYear: 2004,
    sales: 5
  },
  {
    id: 1,
    name: "Valheim",
    releaseYear: 2021,
    sales: 10
  },
  {
    id: 2,
    name: "Minecraft",
    releaseYear: 2011,
    sales: 20
  }
]
//hide-end
const List = () => {
  return (
    <div>
    {games.map((game: Game) => {
        return <React.Fragment key={game.id}>
              <h2>{game.name} ({game.releaseYear})</h2>
              <p>Aantal keer verkocht: {game.sales}</p>
            </React.Fragment>
      })}
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Welcome to the H2O Game shop</h1>
      <List/>
    </div>
  );
}
//hide-start
export default App;
//hide-end
```

Een component is hier geschreven als functie die TSX teruggeeft als returnwaarde. We hebben deze TSX verplaatst van de App component naar de List component.

De component gebruiken in App kan door hem te behandelen als een HTML-tag. Daarom staat er `<List />`.

