# Statische bestanden

In react kan je net zoals in HTML afbeeldingen gebruiken. Dit doe je door de `<img>` tag te gebruiken. Je kan de `src` property gebruiken om de afbeelding te kiezen. Je kan ook de `alt` property gebruiken om een alternatieve tekst te geven als de afbeelding niet geladen kan worden.

## Afbeeldingen in de public folder

Alles wat in de public folder staat wordt automatisch naar de root van de website gekopieerd. Je kan dus een afbeelding in de public folder zetten met de naam `logo.png`, en deze gebruiken door de `src` property te zetten op `/llama.png`. We zetten hier `/` voor omdat alle bestanden in de public folder naar de root van de website gekopieerd worden.

```typescript codesandbox={"template": "react-ts", "templateFiles": "react-assets", "filename": "App.tsx"}
import React from "react";

const App = () => {
  return (
    <img src="/llama.svg" alt="llama image" width="100"/>
  );
};

export default App;
```

## Afbeeldingen bij de source code

Vaak worden de afbeeldingen mee bij de source code gestoken. Dit is handig omdat dan je afbeeldingen bij je componenten zitten, en je dus niet moet zoeken naar de afbeeldingen. 

### Met het import keyword

Je kan ook afbeeldingen mee in de src folder zetten. Je kan dan aan de hand van het import statement de afbeelding importeren. Je kan dan de `src` property zetten op de variabele die je hebt geïmporteerd. 

```typescript codesandbox={"template": "react-ts", "templateFiles": "react-assets", "filename": "App.tsx"}
import React from "react";
import llama from "./assets/llama.svg";
import bear from "./assets/bear.svg";
import gpig from "./assets/gpig.svg";

const App = () => {
  return (
    <img src={llama} alt="llama image" width="100" />
  );
};

export default App;
```

:::tip
In dit voorbeeld hebben we alle bestanden in een aparte folder `assets` gezet. Dit mag je zelf kiezen, maar het is wel een goede gewoonte om je assets in een aparte folder te zetten. Hoe je die noemt is niet belangrijk, maar het is wel belangrijk dat je het consequent doet.
:::

### Als SVG componenten

Je kan ook SVG afbeeldingen importeren als SVG componenten. Dit doe je door de `ReactComponent` suffix toe te voegen aan de import statement. 

```typescript codesandbox={"template": "react-ts", "templateFiles": "react-assets", "filename": "App.tsx"}
import React from "react";
import { ReactComponent as Llama } from "./assets/llama.svg";
import { ReactComponent as Bear } from "./assets/bear.svg";

import { ReactComponent as GuineaPig } from "./assets/gpig.svg";

const App = () => {
  return (
    <Llama />
  );
};

export default App;
```

## Audio bestanden

Je kan ook audio bestanden gebruiken in react. Je kan dit doen door de `<audio>` tag te gebruiken. Je kan de `src` property gebruiken om de audio bestand te kiezen. Je kan ook de `controls` property gebruiken om de audio bestanden te laten afspelen. 

```typescript codesandbox={"template": "react-ts", "templateFiles": "react-assets", "filename": "App.tsx"}
import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";

const App = () => {
  return (
    <audio controls autoPlay>
      <source src={require("./assets/horse.mp3")} type="audio/mpeg"/>
    </audio>
  );
};

export default App;
```

We kunnen hiervoor ook de import methode gebruiken of de bestanden in de public folder zetten zoals hierboven beschreven.