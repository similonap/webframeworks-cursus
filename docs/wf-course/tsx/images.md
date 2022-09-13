# Images

In react kan je net zoals in HTML afbeeldingen gebruiken. Dit doe je door de `<img>` tag te gebruiken. Je kan de `src` property gebruiken om de afbeelding te kiezen. Je kan ook de `alt` property gebruiken om een alternatieve tekst te geven als de afbeelding niet geladen kan worden.

## Afbeeldingen in de public folder

Alles wat in de public folder staat wordt automatisch naar de root van de website gekopieerd. Je kan dus een afbeelding in de public folder zetten met de naam `logo.png`, en deze gebruiken door de `src` property te zetten op `logo192.png`.

```typescript codesandbox={"template": "react-starter", "filename": "src/App.tsx"}
import React from "react";

const App = () => {
  return (
    <img src="/logo192.png" alt="React logo" />
  );
};

export default App;
```

## Afbeeldingen in de src folder

### Met import keyword

Je kan ook afbeeldingen mee in de src folder zetten. Je kan dan aan de hand van het import statement de afbeelding importeren. Je kan dan de `src` property zetten op de variabele die je hebt geïmporteerd. 

```typescript codesandbox={"template": "react-starter", "filename": "src/App.tsx"}
import React from "react";
import logo from "./logo.svg";

const App = () => {
  return (
    <img src={logo} alt="React logo" />
  );
};

export default App;
```

### Met require keyword

Je kan ook de `require` keyword gebruiken om afbeeldingen te importeren. 

```typescript codesandbox={"template": "react-starter", "filename": "src/App.tsx"}
import React from "react";

const App = () => {
  return (
    <img src={require("./logo.svg")} alt="React logo" />
  );
};

export default App;
```

Require kan ook gebruikt worden om audio, video of documenten in je project te includen. De meest voorkomende types zijn .mp3, .wav, .mp4, .mov, .html en .pdf.

### Als SVG componenten

Je kan ook afbeeldingen importeren als SVG componenten. Dit doe je door de `ReactComponent` suffix toe te voegen aan de import statement. 

```typescript codesandbox={"template": "react-starter", "filename": "src/App.tsx"}
import React from "react";
import { ReactComponent as Logo } from "./logo.svg";

const App = () => {
  return (
    <Logo />
  );
};

export default App;
```