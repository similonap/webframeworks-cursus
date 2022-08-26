# TSX

TSX is eigenlijk TypeScript code. Dus is het mogelijk TypeScript-expressies te integreren in de gegenereerde output. Als we de `title` variabele willen renderen tussen de h1 tags kunnen we deze als volgt toevoegen:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import React from "react";

const App = () => {
  const title = "World";
  // let op de accolades rond title in de JSX-expressie hieronder
  return (
    <div>
      <h1>Hello {title}</h1>
    </div>
  );
};

export default App;
```

Waarden die in deze accolades verschijnen, worden omgezet naar inhoud van de HTML. Breed gesproken gebeurt dit door de waarden gewoonweg als tekst voor te stellen. De variabele `title` heeft het type string, dus de toegekende tekst `"World"` wordt gewoonweg ingevoegd in de HTML.

Hier zijn enkele uitzonderingen op: `false`, `null`, `undefined` en `true` worden niet omgezet. Ze verdwijnen gewoon uit de output. Dit zie je als je volgende code uitvoert:

```
<h1>Hello {title.toUpperCase()}</h1>
```

of:

```
<h1>1+1 = {1+1}</h1>
```

Je kan zelfs functies uitvoeren en het resultaat hiervan laten zien:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import React from "react";

const getGreeting = () => {
  return "Hello World";
};

const App = () => {
  return (
    <div>
      <h1>{getGreeting()}</h1>
    </div>
  );
};

export default App;
```

### Verschillende namen en werking attributen

Enkele attributen van tags hebben in TSX een andere naam of volgen andere afspraken in React dan in HTML. Dit komt bijvoorbeeld omdat deze attributen een naam hebben die niet gebruikt mag worden in TypeScript of omdat de werking van een bepaald attribuut in HTML duidelijke tekortkomingen vertoont.

We lijsten ze hier niet allemaal op. Deze verschillen zullen vermeld worden waar ze een probleem kunnen stellen. Het enige verschil dat we hier meegeven: het `class` attribuut van een HTML-element wordt het `className` attribuut van een TSX-element. Dit komt omdat `class` een woord met een speciale betekenis is in TypeScript / JavaScript.

Een volledige lijst met verschillen vind je [hier](https://reactjs.org/docs/dom-elements.html) in de documentatie van React.

### Geneste accolades

Accolades zijn nodig om te wisselen van de HTML-achtige syntax naar de klassieke TypeScript syntax. Binnenin deze syntax kan weer naar de HTML-achtige syntax gewisseld worden, enzovoort. Dit wordt hier gedemonstreerd:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import React from "react";

const getLuckText = () => "We hebben geluk gehad";
const getBadLuckText = () => "We hebben pech gehad";

const App = () => {
  return (
    <>{
      Math.random() > 0.5 ? 
        <p>{getLuckText()}</p> : 
        <p>{getBadLuckText()}</p>
       }
    </>
  );
};

export default App;
```

### Fragments

Function components worden verwacht één TSX-expressie terug te geven. Nochtans wordt niet elke component naar exact één HTML-element omgezet in de uiteindelijk geproduceerde pagina. Anders gezegd: **één** component `App` kan niet rechtstreeks omgezet worden naar **twee of meer** HTML-elementen **die siblings zijn** in het Document Object Model. Volgende code is dus niet uitvoerbaar:

```tsx codesandbox={"template": "react", "filename": "src/App.tsx"}
const App = () => {
  return (
    <h1>Titel van mijn boek</h1>
    <h2>Eerste hoofdstuk</h2>
    <h2>Tweede hoofdstuk</h2>
  );
}
```

Dit gaat niet, omdat er drie TSX-expressies op hetzelfde niveau staan. De `h2`-elementen zijn niet genest in het `h1`-element.

Hoger op deze pagina hebben we het probleem omzeild door elementen in een `div` te plaatsen. Dit soort element is heel algemeen en voegt vaak overbodige ballast toe aan een pagina. Daarom is het beter om het zo spaarzaam mogelijk te gebruiken. Hier is een eenvoudige oplossing voor: de drie expressies in een grotere expressie plaatsen die niet vertaald wordt naar HTML. Een dergelijke expressie heet een **fragment**. Er bestaat een langere notatie en een kortere notatie voor fragments. Met de langere notatie kan bovenstaande code als volgt herschreven worden:

```tsx codesandbox={"template": "react", "filename": "src/App.tsx"}
const App = () => {
  return (
    <Fragment>
      <h1>Titel van mijn boek</h1>
      <h2>Eerste hoofdstuk</h2>
      <h2>Tweede hoofdstuk</h2>
    </Fragment>
  );
}
```

In de korte notatie ziet een fragment er uit als een tag zonder naam:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import React from "react";

const App = () => {
  return (
    <>
      <h1>Titel van mijn boek</h1>
      <h2>Eerste hoofdstuk</h2>
      <h2>Tweede hoofdstuk</h2>
    </>
  );
};

export default App;
```

Meestal wordt de korte notatie gebruikt.