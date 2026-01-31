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

## State en reactiviteit

In React zijn niet alle properties standaard reactief zoals in Angular. In React moet je expliciet aangeven welke data reactief moet zijn door gebruik te maken van `useState` hook. Deze werkt heel gelijkaardig aan `signals` in Angular. Dus tegenwoordig lijken de concepten van reactiviteit in Angular en React meer op elkaar dan vroeger.

### Angular signals voorbeeld

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent {
  count: signal<number> = signal(0);
}
```

```html
<div>
  <p>Count: {{ count() }}</p>
  <button (click)="count.set(count() + 1)">Increment</button>
</div>
```

### React useState voorbeeld

```tsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

Opgelet je mag NOOIT de state variabele direct aanpassen, dus niet `count = count + 1`, maar altijd via de setter functie `setCount`.

## Data binding en events

In Anngular heb je verschillende manieren om data binding te doen, zoals property binding, event binding en two-way binding met `ngModel`. In React wordt data binding voornamelijk gedaan via props en state, en event handling gebeurt via event handlers die aan JSX-elementen worden gekoppeld.

### Angular event binding voorbeeld

```html
<input [(ngModel)]="username" placeholder="Enter your name" />
<p>Hello, {{ username }}!</p>
```

```ts
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-greeting",
  templateUrl: "./greeting.component.html",
  styleUrls: ["./greeting.component.css"],
  imports: [FormsModule]
})
export class GreetingComponent {
  username: signal<string> = signal("");
}
```

### React event handling voorbeeld

```tsx
import React, { useState } from "react";

const Greeting = () => {
  const [username, setUsername] = useState<string>("");

  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {username}!</p>
    </div>
  );
};