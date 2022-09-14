---
sidebar_position: 2
---

# Styling

Er zijn verschillende manieren om stylesheets toe te passen op React applicaties. De twee belangrijkste zijn:

- CSS-in-CSS (CSS Modules)
- CSS-in-JS

Elke aanpak heeft zijn voor- en nadelen.

## CSS Modules

CSS Modules is de aanpak die het dichtst aanleunt bij traditionele css bestanden zoals deze gebruikt worden in statische HTML-pagina's. Alle elementen krijgen een `className` toegewezen en krijgen een style toegewezen via een CSS bestand. 

:::info
In React gebruiken we niet `class` maar `className` omdat `class` een reserved keyword is in TypeScript. 
:::

In React willen we dat componenten zo veel mogelijk op zichzelf gebruikt kunnen worden. Zo kan één component zonder aanpassingen in verschillende applicaties gebruikt worden. Daarom maken we per component een apart CSS bestand aan. Het is technisch mogelijk om alles in één algemene file index.css te plaatsen, maar dan is de CSS-code voor één component gekoppeld aan die van alle andere componenten.

### Rechtstreeks importeren

Je kan CSS bestanden gebruiken in een React component door deze te importeren op de volgende manier:

```
import './styles.css';
```

Bijvoorbeeld de volgende `styles.css` zorgt voor een rode achtergrond en gele letters voor ons `App` component.

```typescript codesandbox={"template": "react", "filename": "src/styles.css"}
.App {
    padding: 10px;
    background-color: red;
    color: yellow
}
```

Het nadeel van deze manier is dat we moeten opletten dat al deze CSS bestanden niet dezelfde namen voor klassen gebruiken. Als dit wel gebeurt zullen deze CSS classes met elkaar botsen en zal de ene de andere overschrijven.

### Werken met CSS modules

Om het probleem van herhaalde klassen op te lossen, kunnen we gebruik maken van CSS modules. Het gebruik van modules is zeer gelijkaardig aan dat van gewone CSS bestanden, maar modules zijn geïsoleerd van elkaar. Om gebruik te maken van de CSS Modules moet het CSS bestand de naam krijgen van de component, gevolgd door .module.css 

Als we nu gebruik willen maken van CSS modules in de App component, moeten we de CSS file hernoemen naar App.module.css en moeten we de manier van importeren aanpassen als volgt:

```typescript
import styles from './App.module.css';
```

In plaats van de className property rechstreeks in te vullen, halen we deze uit het styles object:

```typescript codesandbox={"template": "react-css-module", "filename": "src/App.tsx"}
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
        <h1>Hello component</h1>
    </div>
  );
}

export default App;
```

:::info
Visual studio code ondersteunt geen auto completion van CSS-Module styles. Je kan wel een plugin hier voor downloaden.

https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules
:::

Wil je meer dan een className toekennen aan een element met CSS modules, dan moet je string interpolation gebruiken:

```typescript codesandbox={"template": "react-css-module", "filename": "src/App.tsx"}
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
        <h1 className={`${styles.red} ${styles.upper}`}>Hello component</h1>
    </div>
  );
}
//hide-start
export default App;
//hide-end
```

## CSS-in-JS

De manier van styling die we hierboven hebben toegepast is zeer gelijkaardig aan de werkwijze voor statische HTML-pagina's. In React kan je de styles ook rechtstreeks ook in JavaScript definiëren. Het voordeel van deze manier is dat we niet afhankelijk zijn van aparte CSS-bestanden.

De eerste manier om dit te doen is via inline styles. Je geeft rechtstreeks de styles mee aan de hand van de style property. 

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
const Header = () => {
  return (
    <h1 style={{fontSize: '22pt', borderBottom: '2px solid black', textTransform: 'uppercase'}}>Welcome to the H2O Game shop</h1>
  );
}
//hide-start
const App = () => {
  return (
    <Header/>
  );
}

export default App;
//hide-end
```

Je ziet dat we hier niet de schrijfwijze `font-size`, `border-bottom` of `text-transform` gebruiken, die we wel in een CSS-bestand zouden gebruiken. De regel is hier dat we de camel case varianten gebruiken van CSS properties. Dit komt omdat JavaScript `-` interpreteert als een minteken en niet als geldig onderdeel van een identifier. Zo wordt bv `font-size` dus `fontSize`.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { CSSProperties } from 'react';

const headerStyle : CSSProperties = {
  fontSize: '22pt', borderBottom: '2px solid black', textTransform: 'uppercase'
}

const Header = () => {
  return (
    <h1 style={headerStyle}>Welcome to the H2O Game shop</h1>
  );
}
//hide-start
const App = () => {
  return (
    <Header/>
  );
}

export default App;
//hide-end
```

## Styled components

Niet alle dingen die je kan gebruiken in CSS kan je in CSS-in-JS gebruiken. Dingen zoals animaties zijn hierdoor niet eenvoudig te implementeren. Daarom wordt er vaak voor CSS-in-JS gebruik gemaakt van de library styled-components.

Je kan deze eenvoudigweg installeren door volgende commando's uit te voeren:

```
npm install styled-components
npm install @types/styled-components
```

Deze functionaliteit kan je dan importeren op de volgende manier:

```
import styled from "styled-components"
```

Zo kunnen we onze header component ook als volgt stylen:

```typescript codesandbox={"template": "react-styled-components", "filename": "src/App.tsx"}
import styled from "styled-components"

// merk op: backticks
const TitleHeader = styled.div`
  font-size: 22pt;
  border-bottom: 2px solid black;
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <TitleHeader>Welcome to the H2O Game shop</TitleHeader>
  );
}

export default Header;
```

Je merkt op dat we hier wel de standaard CSS properties kunnen gebruiken. Door middel van styled-components kunnen we zelfs meer geavanceerde functionaliteit gebruiken, zoals animaties:

```typescript codesandbox={"template": "react-styled-components", "filename": "src/App.tsx"}
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    transform: translate(-300px, 0);
    opacity: 0;
  }
  
  20%, 80% {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const TitleHeader = styled.div`
  font-size: 22pt;
  text-transform: uppercase;
  animation: 1s ${fadeIn} ease-out;
`;

const Border = styled.div`
  border-bottom: 2px solid black;
`;

const Header = () => {
  return (
    <Border>
        <TitleHeader>Welcome to the H2O Game shop</TitleHeader>
    </Border>
  );
}

export default Header;
```

## UI Frameworks
Er zijn een tal van frameworks die het gebruik van zelf CSS schrijven minimaliseren. Je maakt daar gebruik van herbruikbare componenten die allemaal al voor jou geschreven zijn. De meest bekende zijn:
 - https://material-ui.com/
 - https://react-bootstrap.github.io/
 - https://tailwindcss.com/
 
Deze vereenvoudigen het ontwikkelproces drastisch en zorgen ervoor dat er een bepaald design systeem wordt gebruikt. Dit zorgt ervoor dat het ontwikkelen van webapplicaties drastisch kan versneld worden. 