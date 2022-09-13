---
sidebar_position: 4
---

# Lijsten

### Lijsten in React

Wanneer we in TSX een lijst opnemen in de gegenereerde inhoud, wordt er gewoon een tekstvoorstelling voor die lijst gegenereerd door elk element rechtstreeks in de HTML in te voegen. In de praktijk is dit niet zinvol.&#x20;

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React from 'react';
//hide-end
const App = () => {
  return <p>{["een element", "tweede element", "derde element"]}</p>;
};
//hide-start
export default App;
//hide-end
```

Normaal willen we een HTML-tag met eigen inhoud renderen per element van de array. Dit kan door elk element van de array eerst te vertalen naar een TSX-expressie op zich door middel van de `map` functie.

#### map

De `map` functie kan gebruikt worden om informatie uit een lijst van gegevens te extraheren of om te zetten. Ze kan dan ook gebruikt worden om TSX-elementen te vormen. In onderstaande CodePen vertaalt ze elk element van de invoerlijst met games (voorgesteld als `string`) naar een`<li>` element, genest binnen een `<ul>` element:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React from "react";
//hide-end
const App = () => {
  const games : string[] = [
    "World of Warcraft",
    "Valheim",
    "Minecraft"
  ];
  return (
    <>
      <h1>Games</h1>
      <ul>
        {games.map((game: string) => <li key={game}>{game}</li>)}
      </ul>
    </>
  );
}
//hide-start
export default App;
//hide-end
```

Door elke string te mappen naar een li-element, wordt de TypeScript-lijst getoond als een HTML-lijst.

Omdat React gebruik maakt van geoptimaliseerde technieken voor het tonen van lijsten moet je elk element van een lijst dat op deze manier in JSX wordt ingebed voorzien van een attribuut **`key`**. Dit moet voor elk element in de lijst anders zijn. Vaak wordt hier een achterliggend ID gebruikt dat met de data geassocieerd is in een database, omdat dat normaal al uniek is. Omdat we in bovenstaande CodePen geen ID hebben voor de games, gebruiken we de naam zelf als key.

Onderstaande CodePen toont hetzelfde principe, maar met objecten en complexere structuren:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React from "react";
//hide-end
interface Game {
  id: number
  name: string,
  releaseYear: number,
  sales: number
}

const App = () => {
  const games: Game[] = [
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
  return (
    <>
      <h1>Games</h1>
        {
          games.map((game: Game) =>
            <React.Fragment key={game.id}>
              <h2>{game.name} ({game.releaseYear})</h2>
              <p>Aantal keer verkocht: {game.sales}</p>
            </React.Fragment>
          )
        }
    </>
  );
}
//hide-start
export default App;
//hide-end
```

:::caution
Dit is zowat het enige scenario waarin je de lange notatie voor een `Fragment` moet gebruiken: wanneer je een key op het fragment moet zetten.
:::

#### filter

Onderstaande CodePen toont `filter` en `map` in combinatie in een React applicatie:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React from "react";
//hide-end
interface Game {
  id: number
  name: string,
  releaseYear: number,
  sales: number
}

const App = () => {
  const games: Game[] = [
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
  return (
    <>
      <h1>Games</h1>
        {
          games.filter((game) => game.sales >= 8).map((game) =>
            <React.Fragment key={game.id}>
              <h2>{game.name} ({game.releaseYear})</h2>
              <p>Aantal keer verkocht: {game.sales}</p>
            </React.Fragment>
          )
        }
    </>
  );
}
//hide-start
export default App;
//hide-end
```