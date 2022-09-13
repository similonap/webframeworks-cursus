# Afbeeldingen

In react kan je net zoals in HTML afbeeldingen gebruiken. Dit doe je door de `<img>` tag te gebruiken. Je kan de `src` property gebruiken om de afbeelding te kiezen. Je kan ook de `alt` property gebruiken om een alternatieve tekst te geven als de afbeelding niet geladen kan worden.

## Afbeeldingen in de public folder

Alles wat in de public folder staat wordt automatisch naar de root van de website gekopieerd. Je kan dus een afbeelding in de public folder zetten met de naam `logo.png`, en deze gebruiken door de `src` property te zetten op `/llama.png`. We zetten hier `/` voor omdat alle bestanden in de public folder naar de root van de website gekopieerd worden.

```typescript codesandbox={"template": "react-assets", "filename": "src/App.tsx"}
import React from "react";

const App = () => {
  return (
    <img src="/llama.png" alt="llama image" />
  );
};

export default App;
```

## Afbeeldingen bij de source code

Vaak worden de afbeeldingen mee bij de source code gestoken. Dit is handig omdat dan je afbeeldingen bij je componenten zitten, en je dus niet moet zoeken naar de afbeeldingen. 

### Met het import keyword

Je kan ook afbeeldingen mee in de src folder zetten. Je kan dan aan de hand van het import statement de afbeelding importeren. Je kan dan de `src` property zetten op de variabele die je hebt geïmporteerd. 

```typescript codesandbox={"template": "react-assets", "filename": "src/App.tsx"}
import React from "react";
import logo from "./assets/llama2.png";

const App = () => {
  return (
    <img src={logo} alt="llama image" />
  );
};

export default App;
```

### Met require keyword

Je kan ook de `require` keyword gebruiken om afbeeldingen te importeren. 

```typescript codesandbox={"template": "react-assets", "filename": "src/App.tsx"}
import React from "react";

const App = () => {
  return (
    <img src={require("./assets/llama3.png")} alt="llama image" />
  );
};

export default App;
```

Require kan ook gebruikt worden om audio, video of documenten in je project te includen. 

:::tip
In dit voorbeeld hebben we alle bestanden in een aparte folder `assets` gezet. Dit mag je zelf kiezen, maar het is wel een goede gewoonte om je assets in een aparte folder te zetten. Hoe je die noemt is niet belangrijk, maar het is wel belangrijk dat je het consequent doet.
:::

### Als SVG componenten

Je kan ook SVG afbeeldingen importeren als SVG componenten. Dit doe je door de `ReactComponent` suffix toe te voegen aan de import statement. 

```typescript codesandbox={"template": "react-assets", "filename": "src/App.tsx"}
import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";

const App = () => {
  return (
    <Logo />
  );
};

export default App;
```