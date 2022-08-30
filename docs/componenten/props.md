---
sidebar_position: 0
---

# Props

Componenten staan meestal niet zomaar op zichzelf. Vaak hebben ze data nodig dat van buitenaf komt. Afhankelijk van welke data er doorgegeven wordt aan het component zal het zich anders gedragen. Deze data worden doorgeven aan der hand van properties (of props in het kort).

## String doorgeven als property

Stel dat je een component hebt dat een gekleurd vierkant toont:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
const ColorSquare = () => {
    return <div style={{width: 100, height: 100, backgroundColor: 'red'}}/>
}

const App = () => {
    return <ColorSquare/>
}
//hide-start
export default App;
//hide-end
```

Willen we het `ColorSquare` component ook gebruiken voor blauwe vierkanten moeten we een nieuwe property: `color` aanmaken:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
interface ColorSquareProps {
    color: string
}
const ColorSquare = (props: ColorSquareProps) => {
    return <div style={{width: 100, height: 100, backgroundColor: props.color}}/>
}

const App = () => {
    return (
        <>
            <ColorSquare color="blue"/>
            <ColorSquare color="red"/>
        </>
    );
}
//hide-start
export default App;
//hide-end
```

Hier zie je een aantal dingen:
- ColorSquare krijgt een argument: `props` bij met het type `ColorSquareProps`. Hier zitten alle properties die worden doorgegeven aan de `ColorSquare` component.
- In TypeScript voorzien we altijd types voor elk object, dit is ook zo voor het props object.
- We halen de `color` property uit het props object aan de hand van de dot notatie. 
- Properties worden doorgegeven zoals elk HTML attribuut.

## Expressies doorgeven als property

We kunnen ook de grootte van onze ColorSquare doorgeven aan de hand van props:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
interface ColorSquareProps {
    color: string;
    size: number
}
const ColorSquare = (props: ColorSquareProps) => {
    return <div style={{width: props.size, height: props.size, backgroundColor: props.color}}/>
}

const App = () => {
    return <ColorSquare color="blue" size={200}/>
}
//hide-start
export default App;
//hide-end
```

Belangrijk hier is dat getallen doorgegeven worden tussen accolades en niet tussen dubbele quotes.

Dit geldt ook voor alle andere soorten expressies. Wil je bijvoorbeeld werken met variabelen dan moeten deze ook tussen accolades staan.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
interface ColorSquareProps {
    color: string;
    size: number
}
const ColorSquare = (props: ColorSquareProps) => {
    return <div style={{width: props.size, height: props.size, backgroundColor: props.color}}/>
}
//hide-end
const App = () => {
    let color: string = "blue";
    let size: number = 200;
    return <ColorSquare color={color} size={size}/>
}
//hide-start
export default App;
//hide-end
```
## Destructuring props

Om je code te vereenvoudigen kan je gebruik maken van object destructuring om de properties al uit het props object te halen. 

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
interface ColorSquareProps {
    color: string;
    size: number
}
//hide-end
const ColorSquare = ({size, color}: ColorSquareProps) => {
    return <div style={{width: size, height: size, backgroundColor: color}}/>
}
//hide-start
const App = () => {
    return <ColorSquare color="blue" size={200}/>
}

export default App;
//hide-end
```

Op deze manier moeten we dus niet elke keer de property uit het `props` object halen. 

## Interface vervangen door type alias

We hebben hiervoor aangegeven dat je altijd een interface moet aanmaken voor elk component. We kunnen dit ook in de functie declaratie zelf doen. 

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
const ColorSquare = ({size, color}: {color: string, size: number}) => {
    return <div style={{width: size, height: size, backgroundColor: color}}/>
}
//hide-start
const App = () => {
    return <ColorSquare color="blue" size={200}/>
}

export default App;
//hide-end
```

## H2O Game Shop

We grijpen nu even terug naar ons voorbeeld van de games winkel die we aan het opbouwen zijn.

Op dit moment hebben we nog altijd onze data die we gebruiken voor onze lijst in een globale variabele gestoken in de huidige applicatie. Het is uiteraard niet houdbaar om alles in globale variabelen te steken en deze zo te delen onder verschillende componenten. De juiste manier om dit te doen in React is deze lijst of andere variabelen door te geven als props of properties. We geven dus informatie door van het ene component naar de andere.

Voordat we props voor de eerste keer gaan gebruiken in onze applicatie gaan we eerst onze lijst van games verplaatsen naar het App component zelf.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React from "react";

interface Game {
  id: number
  name: string,
  releaseYear: number,
  sales: number
}

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
//hide-end
const App = () => {
  const games : Game[] = [
    //hide-start
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
    //hide-end
    //...
  ];
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

Nu geeft uiteraard de List component een foutmelding omdat de games variabele niet meer globaal staat en dit component dus geen toegang heeft tot deze lijst. We gaan dit oplossen door de games variabele door te geven aan de List component aan de hand van een `games` property.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React from "react";

interface Game {
  id: number
  name: string,
  releaseYear: number,
  sales: number
}
//hide-end
interface ListProps {
    games: Game[]
}

const List = ({games}: ListProps) => {
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
  const games : Game[] = [
    //hide-start
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
    //hide-end
    //...
  ];
  return (
    <div>
      <h1>Welcome to the H2O Game shop</h1>
      <List games={games}/>
    </div>
  );
}
//hide-start
export default App;
//hide-end
```

Nu kunnen we onze kennis over props gaan gebruiken om onze List component nog verder op te splitsen in kleinere componenten als we dit willen. Zo kunnen we een ListItem introduceren die verantwoordelijk is voor het tonen van 1 item van de lijst.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
import React from "react";

interface Game {
  id: number
  name: string,
  releaseYear: number,
  sales: number
}

interface ListProps {
    games: Game[]
}
//hide-end
interface ListItemProps {
  game: Game
}

const ListItem = ({game} : ListItemProps) => {
    return (
        <React.Fragment>
            <h2>{game.name} ({game.releaseYear})</h2>
            <p>Aantal keer verkocht: {game.sales}</p>
        </React.Fragment>
    )
}

const List = ({games}: ListProps) => {
  return (
    <div>
    {games.map((game: Game) => {
        return <ListItem key={game.id} game={game}/>
      })}
    </div>
  );
}
//hide-start
const App = () => {
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
  ];
  return (
    <div>
      <h1>Welcome to the H2O Game shop</h1>
      <List games={games}/>
    </div>
  );
}
export default App;
//hide-end
```

Het gebeurt vaak dat props doorheen meerdere componenten worden doorgegeven. Indien je componenten structuur dieper en dieper wordt, wordt het ook altijd maar minder praktisch om dingen te gaan blijven doorgeven aan de hand van properties. We zien later nog hoe we dit probleem kunnen oplossen.