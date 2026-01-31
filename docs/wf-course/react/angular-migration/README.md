# Van angular developer naar react developer

## Componenten

In Angular worden componenten gemaakt met behulp van TypeScript-klassen, decorateurs en HTML-sjablonen. In React worden componenten gemaakt met behulp van JavaScript-functies of klassen, JSX en props/state. Ook wordt in angular de html en de logica vaak in aparte bestanden geplaatst, terwijl in React de logica en de markup vaak in hetzelfde bestand worden geplaatst.

### Basisstructuur

Angular en React gebruiken allebei componentgebaseerde architecturen, maar de manier waarop componenten worden gedefinieerd en beheerd, verschilt.

#### Angular component voorbeeld

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-hello-world",
  templateUrl: "./hello-world.component.html",
  styleUrls: ["./hello-world.component.css"]
})
export class HelloWorldComponent {
  message: string = "Hello, World!";
}
```

en de bijbehorende HTML-sjabloon:

```html
<h1 class="hello">{{ message }}</h1>
```

en de bijbehorende CSS:

```css
.hello {
  color: blue;
}
```

#### React component voorbeeld

```tsx
import React from "react";
import "./HelloWorld.css";

const HelloWorld = () => {
  const message: string = "Hello, World!";

  return (
    <h1 className="hello">{message}</h1>
  );
};

export default HelloWorld;
```

#### Kernverschillen

- **Definitie**: Angular gebruikt TypeScript-klassen en decorateurs, terwijl React functies gebruikt.
- **Templates**: Angular scheidt HTML-sjablonen van de componentlogica, terwijl React JSX gebruikt om beide te combineren.
- **Stijlbeheer**: Angular gebruikt aparte CSS-bestanden, terwijl React vaak inline stijlen of CSS-in-JS benaderingen gebruikt. Let op in React gebruiken we className in plaats van class voor CSS klassen en wordt de css geimporteerd in het component bestand.
- **Property binding**: In Angular worden properties gebonden met behulp van dubbele accolades (`{{ }}`), terwijl React gebruikmaakt van JavaScript-expressies binnen JSX aan de hand van enkele accolades (`{ }`).

### Angular inline styles

In angular is het ook mogelijk om styles in de html zelf te definieren met property binding. Bijvoorbeeld:

```html
<h1 [style.color]="'blue'">{{ message }}</h1>
```

of met ngStyle:

```html
<h1 [ngStyle]="{ color: 'blue', fontSize: '20px' }">{{ message }}</h1>
```

uiteraard kan je hier ook variabelen voor gebruiken die in de component class zijn gedefinieerd.

```html
<h1 [style.color]="textColor">{{ message }}</h1>
```

### React inline styles

Omdat je in React vaak gebruik maakt van JavaScript, wordt er iets vaker gebruik gemaakt van inline styles. Dit kan bijvoorbeeld zo:

```tsx
const HelloWorld = () => {
  const message: string = "Hello, World!";

  return (
    <h1 style={{ color: "blue" }}>{message}</h1>
  );
};
```

of met een variabele:

```tsx
const HelloWorld = () => {
  const message: string = "Hello, World!";
  const color: string = "blue";

  return (
      <h1 style={{ color: color }}>{message}</h1>
  );
};
```

### React CSS modules

In angular zijn styles per definitie per component, in React kan je dit ook bereiken met CSS modules. Dit werkt als volgt:

```css
.hello {
  color: blue;
}
```

```tsx
import React from "react";
import styles from "./HelloWorld.module.css";

const HelloWorld = () => {
  const message: string = "Hello, World!";

  return (
    <h1 className={styles.hello}>{message}</h1>
  );
};
```

### Properties vs @Input

Componenten zijn herbruikbare bouwstenen in zowel Angular als React, het is essentieel dat je informatie kunt doorgeven aan deze componenten. Zo kan je bijvoorbeeld een `Button` component maken die je op verschillende plaatsen in je applicatie gebruikt, maar met verschillende labels of stijlen.

In Angular gebruik je hiervoor `@Input` decorateurs om properties te definiëren die van buitenaf kunnen worden ingesteld. In React gebruik je `props` om vergelijkbare functionaliteit te bereiken.

#### Angular @Input voorbeeld

Stel dat je een `Tag` component hebt die een label en een kleur moet weergeven. In Angular zou je dit als volgt doen:

```html
<!-- tag.component.html -->
<span [style.backgroundColor]="color" class="tag">{{ label }}</span>
```

```ts
// tag.component.ts
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.css"]
})
export class TagComponent {
  @Input() label: string = "";
  @Input() color: string = "gray";
}
```

en dan kan je deze component gebruiken in een andere component:

```html
<app-tag label="Angular" color="red"></app-tag>
<app-tag label="React" color="blue"></app-tag>
```

### React props voorbeeld

```tsx
// Tag.tsx
import React from "react";

interface TagProps {
  label?: string;
  color?: string;
}

const Tag = ({ label = "", color = "gray" } : TagProps) => {
  return (
    <span style={{ backgroundColor: color }} className="tag">
      {label}
    </span>
  );
};

export default Tag;
```

en dan kan je deze component gebruiken in een andere component:

```tsx
<Tag label="Angular" color="red" />
<Tag label="React" color="blue" />
```



