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

## Conditionele styling

Soms wil je een bepaalde stijl toepassen op basis van een bepaalde conditie. Bijvoorbeeld afhankelijk van een bepaalde property. Als we bijvoorbeeld een property toevoegen die aangeeft of we de tekst in hoofdletters willen tonen of niet, kunnen we dit als volgt doen:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
interface HeaderProps {
  uppercase?: boolean
}

const Header = ({uppercase = true}: HeaderProps) => {
  return (
    <h1 style={{fontSize: '22pt', borderBottom: '2px solid black', textTransform: uppercase ? 'uppercase' : ''}}>Welcome to the H2O Game shop</h1>
  );
}

const App = () => {
  return (
    <>
        <Header/>
        <Header uppercase={false}/>
    </>
  );
}

//hide-start
export default App;
//hide-end
```

Je kan ook aan de hand van een bepaalde conditie een bepaalde style toevoegen aan een bestaand style object. Dit kan je doen door gebruik te maken van de spread operator.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { CSSProperties } from 'react';

interface HeaderProps {
    uppercase?: boolean
    highlighted?: boolean
}

const Header = ({uppercase = true, highlighted = false}: HeaderProps) => {
    const highlightedStyle : CSSProperties = highlighted ? {backgroundColor: 'yellow'} : {};
    const uppercaseStyle : CSSProperties = uppercase ? {textTransform: 'uppercase'} : {};
    return (
        <h1 style={{fontSize: '22pt', borderBottom: '2px solid black', ...uppercaseStyle, ...highlightedStyle}}>Welcome to the H2O Game shop</h1>
    );
}

const App = () => {
    return (
        <>
            <Header/>
            <Header uppercase={false}/>
            <Header highlighted={false}/>
            <Header uppercase={false} highlighted={true}/>
        </>
    );
}
//hide-start
export default App;
//hide-end
```

Dit kan je ook doen met CSS modules. Je kan dan conditioneel bepaalde classes toevoegen aan de className property.

```typescript codesandbox={"template": "react-css-module", "filename": "src/App.tsx"}
import styles from './App.module.css';

interface HeaderProps {
    uppercase?: boolean
    highlighted?: boolean
}

const Header = ({uppercase = true, highlighted = false}: HeaderProps) => {
    return (
        <h1 className={`${styles.header} ${uppercase ? styles.upper : ''} ${highlighted ? styles.highlighted : ''}`}>Welcome to the H2O Game shop</h1>
    );
}

const App = () => {
    return (
        <>
            <Header/>
            <Header uppercase={false}/>
            <Header highlighted={false}/>
            <Header uppercase={false} highlighted={true}/>
        </>
    );
}
//hide-start
export default App;
//hide-end
```

Dit werkt ook gelijkaardig bij het gebruik van gewone CSS bestanden zonder modules.

## Tailwind CSS

Tailwind CSS is een utility-first CSS framework dat je toelaat om snel en efficiënt stijlen toe te passen op je HTML-elementen door middel van vooraf gedefinieerde klassen. In plaats van aangepaste CSS te schrijven, gebruik je Tailwind's klassen om je elementen te stylen. De laatste jaren is Tailwind CSS enorm populair geworden in de react community vanwege de flexibiliteit en snelheid die het biedt bij het ontwikkelen van gebruikersinterfaces.

De instructies om Tailwind CSS te installeren in een React project kan je vinden op de officiële Tailwind CSS website: https://tailwindcss.com/docs/installation/using-vite

### Voorbeeld

Hier is een eenvoudig voorbeeld van hoe je Tailwind CSS kunt gebruiken in een React component:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Welcome to the H2O Game shop</h1>
                <p className="text-gray-700 mb-6 text-center">Find the best games here!</p>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Shop Now</button>
            </div>
        </div>
    );
}
//hide-start
export default App;
//hide-end  
```

### shadcn UI

shadcn UI is een verzameling van herbruikbare, toegankelijke en aanpasbare componenten gebouwd met Tailwind CSS. Het biedt een snelle manier om mooie en functionele gebruikersinterfaces te creëren zonder dat je alles van nul hoeft op te bouwen. De componenten zijn ontworpen om goed samen te werken met Tailwind CSS, waardoor je gemakkelijk je eigen stijlen kunt toevoegen of aanpassen.

De installatie instructies voor shadcn UI (met vite) kan je vinden op de officiële shadcn UI website: https://ui.shadcn.com/docs/installation/vite

Als je snel aan de slag wilt met deze UI componenten kan ook gebruik maken van een starter template:

```
npx degit similonap/vite-template-react-shadcn react-vite-shadcn
```

Dit commando maakt een nieuwe map `react-vite-shadcn` aan met daarin een basis Vite + React project waarin shadcn UI (en tailwindcss) reeds is geïnstalleerd. Je kan dan meteen starten met het bouwen van je applicatie.