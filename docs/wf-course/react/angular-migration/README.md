# Van angular developer naar react developer

![alt text](image.png)

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
<span [style.backgroundColor]="color()" class="tag">{{ label() }}</span>
```

```ts
// tag.component.ts
import { Component, input } from "@angular/core";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.css"]
})
export class TagComponent {
  label = input<string>("");
  color = input<string>("gray");
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

## If statements en conditionele rendering

In Angular gebruik je de control flow syntax (`@if`, `@else`) om conditionele rendering te doen. Dit is moderner en leesbaarder dan de oudere `*ngIf` directive. In React gebruik je standaard JavaScript expressies binnen JSX, zoals de ternary operator (`? :`) of de logische AND (`&&`).

### Angular if statement voorbeeld

```html
@if (showMessage()) {
  <div>
    Dit is een bericht
  </div>
} @else {
  <div>
    Geen bericht om weer te geven.
  </div>
}

<button (click)="toggleMessage()">Toggle bericht</button>
```

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent {
  showMessage: signal<boolean> = signal(false);

  toggleMessage() {
    this.showMessage.update(prev => !prev);
  }
}
```

### React if statement voorbeeld

```tsx
const MessageComponent = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      {showMessage ? <div>Dit is een bericht</div> : <div>Geen bericht om weer te geven.</div>}
      <button onClick={toggleMessage}>Toggle bericht</button>
    </div>
  );
}
```

of als je alleen een if statement wil simuleren:

```tsx
{ showMessage && <div>Dit is een bericht</div>}
```

## For loops en lijsten weergeven

In angular gebruik je `@for` directive om lijsten weer te geven in de template. In React gebruik je de `map` functie om door een array te itereren en JSX-elementen te renderen.

### Angular for loop voorbeeld

```html
<ul>
    @for (snack of snacks; track snack.id) {
        <li>
            {{ snack.name }}
        </li>
    }
</ul>
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

  increment() {
    this.count.update(c => c + 1);
  }

  reset() {
    this.count.set(0);
  }
}
```

```html
<div>
  <p>Count: {{ count() }}</p>
  <button (click)="increment()">Increment</button>
  <button (click)="reset()">Reset</button>
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
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
```

Merk op dat er bij angular twee verschillende manieren zijn om de signal te updaten: met `update` en met `set`. In React gebruik je altijd de setter functie die door `useState` wordt teruggegeven. Deze kan je gebruiken om de state te updaten, hetzij door een nieuwe waarde te geven, hetzij door een functie te geven die de huidige waarde als argument ontvangt.

### Arrays updaten in Angular en React

In beide frameworks moet je bij het updaten van arrays ervoor zorgen dat de reactiviteit behouden blijft. In Angular kan je bijvoorbeeld de `set` methode gebruiken om een nieuwe array toe te wijzen, terwijl je in React de spread operator gebruikt om een nieuwe array te maken.

#### Angular array update voorbeeld

```html
<ul>
    @for (number of numbers; track $index) {
        <li>{{ number }}</li>
    } @empty {
        <li>There are no numbers.</li>
    }
</ul>
<input type="number" [(ngModel)]="newNumber" />
<button (click)="addNumber()">Add Number</button>
```

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-number-list",
  templateUrl: "./number-list.component.html",
  styleUrls: ["./number-list.component.css"]
})
export class NumberListComponent {
  numbers: signal<number[]> = signal([]);
  newNumber: signal<number> = signal(0);

  addNumber() {
    this.numbers.update(nums => [...nums, this.newNumber()]);
    this.newNumber.set(0);
  }
}
```

#### React array update voorbeeld

```tsx
import React, { useState } from "react";    

const NumberList = () => {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [newNumber, setNewNumber] = useState<number>(0);
    
    const addNumber = () => {
        setNumbers(nums => [...nums, newNumber]);
        setNewNumber(0);
    };
    
    return (
        <div>
            <ul>
                {numbers.length > 0 ? (
                numbers.map((number, index) => <li key={index}>{number}</li>)
                ) : (
                <li>There are no numbers.</li>
                )}
            </ul>
            <input
                type="number"
                value={newNumber}
                onChange={(e) => setNewNumber(Number(e.target.value))}
            />
            <button onClick={addNumber}>Add Number</button>
        </div>
    );
};
```

## Data binding en events

In Angular heb je verschillende manieren om data binding te doen, zoals property binding, event binding en two-way binding met `ngModel`. In React wordt data binding voornamelijk gedaan via props en state, en event handling gebeurt via event handlers die aan JSX-elementen worden gekoppeld.

### Event binding in Angular

```html
<button (click)="handleClick()">Click me</button>
```

```ts
import { Component } from "@angular/core";  

@Component({
  selector: "app-clicker",
  templateUrl: "./clicker.component.html",
  styleUrls: ["./clicker.component.css"]
})
export class ClickerComponent {
    handleClick() {
        console.log("Button clicked!");
    }
}
```

of je kan het ook inline doen:

```html
<button (click)="console.log('Button clicked!')">Click me</button>
```

### Event handling in React

```tsx
import React from "react";

const Clicker = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
};
```

Je kan er ook voor kiezen om de event handler direct in de JSX te definiëren:

```tsx
<button onClick={() => console.log("Button clicked!")}>Click me</button>
```

### Angular two way binding voorbeeld

```html
<input [(ngModel)]="username" placeholder="Enter your name" />
<p>Hello, {{ username() }}!</p>
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
```

In dit voorbeeld gebruiken we de `value` prop om de huidige waarde van het invoerveld te binden aan de `username` state, en de `onChange` event handler om de state bij te werken wanneer de gebruiker iets typt.

## Communicatie tussen componenten

Communicatie van parent naar child gebeurt in beide frameworks via properties (Inputs in Angular, Props in React). Communicatie van child naar parent gebeurt in Angular via events (Outputs), en in React via callbacks die als props worden doorgegeven.

Hieronder een voorbeeld van een `Tag` component die een label ontvangt (input/prop) en een click event doorgeeft aan de parent (output/callback).

### Angular Input & Output

In modern Angular gebruiken we signals voor inputs en de `output()` functie voor events.

```html
<!-- tag.component.html -->
<span class="tag" (click)="handleClick()">
    {{ label() }}
</span>
```

```ts
// tag.component.ts
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  label = input.required<string>();
  tagClick = output<string>();

  handleClick() {
    this.tagClick.emit(this.label());
  }
}
```

```html
<!-- parent.component.html -->
<h1>Tags</h1>
<app-tag 
    label="Angular" 
    (tagClick)="handleTagClick($event)">
</app-tag>
<app-tag 
    label="React" 
    (tagClick)="handleTagClick($event)">
</app-tag>

<p>Laatst geklikt: {{ lastClickedTag() }}</p>
```

```ts
// parent.component.ts
import { Component, signal } from '@angular/core';
import { TagComponent } from './tag.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  imports: [TagComponent]
})
export class ParentComponent {
  lastClickedTag = signal("");

  handleTagClick(tagName: string) {
    this.lastClickedTag.set(tagName);
    console.log(`Tag clicked: ${tagName}`);
  }
}
```

### React Props & Callbacks

In React geven we functies door als props om events naar boven te sturen.

```tsx
// Tag.tsx
import React from 'react';

interface TagProps {
  label: string;
  onTagClick: (label: string) => void;
}

const Tag = ({ label, onTagClick }: TagProps) => {
  const handleClick = () => {
    onTagClick(label);
  };

  return (
    <span 
      onClick={handleClick}
      style={{ cursor: 'pointer', padding: '5px', background: '#eee', borderRadius: '4px', marginRight: '5px' }}
    >
      {label}
    </span>
  );
};

export default Tag;
```

```tsx
// Parent.tsx
import React, { useState } from 'react';
import Tag from './Tag';

const Parent = () => {
  const [lastClickedTag, setLastClickedTag] = useState("");

  const handleTagClick = (tagName: string) => {
    setLastClickedTag(tagName);
    console.log(`Tag clicked: ${tagName}`);
  };

  return (
    <div>
      <h1>Tags</h1>
      <Tag label="Angular" onTagClick={handleTagClick} />
      <Tag label="React" onTagClick={handleTagClick} />
      
      <p>Laatst geklikt: {lastClickedTag}</p>
    </div>
  );
};

export default Parent;
```

## Computed state

In angular heb je een computed signal die afhankelijk is van andere signals. In react heb je een computed value die afhankelijk is van andere state variabelen.

```ts
import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sum',
  imports: [FormsModule],
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent {
    number1 = signal(1);
    number2 = signal(2);
    sum = computed(() => this.number1() + this.number2());
}
```

```html

<input type="number" [(ngModel)]="number1" />
<input type="number" [(ngModel)]="number2" />

<p>Som: {{ sum() }}</p>
```


### React getallen optellen

Hetzelfde voorbeeld in React zou er als volgt uitzien:

```tsx
import React, { useState } from 'react';

const Sum = () => {
    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(2);

    const sum = number1 + number2;

    return (
        <div>
            <input 
                type="number" 
                value={number1} 
                onChange={(e) => setNumber1(Number(e.target.value))} 
            />
            <input 
                type="number" 
                value={number2} 
                onChange={(e) => setNumber2(Number(e.target.value))} 
            />
            <p>Som: {sum}</p>
        </div>
    );
};

export default Sum;
```

## Effecten en lifecycle hooks

In Angular heb je lifecycle hooks zoals `ngOnInit`, `ngOnChanges`, `ngOnDestroy`, etc. In React heb je de `useEffect` hook die kan worden gebruikt om side effects te beheren en die vergelijkbare functionaliteit biedt als de Angular lifecycle hooks.

### Angular lifecycle hooks voorbeeld

```ts
import { Component, signal, onMount, onDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
    time = signal(0);
    private intervalId: any;

    ngOnInit() {
        this.intervalId = setInterval(() => {
            this.time.update(t => t + 1);
        }, 1000);
    }
}

    ngOnDestroy() {
        clearInterval(this.intervalId);
    }
}
```

```html
<p>Timer: {{ time() }} seconds</p>
```

## React useEffect voorbeeld

```tsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(t => t + 1);
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <p>Timer: {time} seconds</p>
    );
};

export default Timer;
```

## Data fetching

In Angular kan je data ophalen in de `ngOnInit` lifecycle hook met behulp van services en HTTP-client. In React kan je data ophalen in de `useEffect` hook met behulp van de fetch API.

### Angular data fetching voorbeeld

```ts
import { Component, signal, onMount, onDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

@Component({
  selector: 'app-data-fetcher',
  templateUrl: './data-fetcher.component.html',
  styleUrls: ['./data-fetcher.component.css']
})
export class DataFetcherComponent {
    data = signal<Todo[]>([]);
    loading = signal<boolean>(true);
    error = signal<Error | null>(null);

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
            .subscribe({
                next: (todos) => {
                    this.data.set(todos);
                    this.loading.set(false);
                },
                error: (err) => {
                    this.error.set(err);
                    this.loading.set(false);
                }
            });
    }
    
}
```

```html
<ul>
    @for (todo of data(); track todo.id) {
        <li>
            {{ todo.title }} - {{ todo.completed ? 'Done' : 'Pending' }}
        </li>
    }
</ul>
```

### React data fetching voorbeeld

```tsx
import React, { useState, useEffect } from 'react';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const DataFetcher = () => {
    const [data, setData] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let cancel = false;
        const loadData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const todos: Todo[] = await response.json();
                if (!cancel) {
                    setData(todos);
                    setLoading(false);
                }
            } catch (err) {
                if (!cancel) {
                    setError(err as Error);
                    setLoading(false);
                }
            }
        };

        return () => {
            cancel = true;
        };
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <ul>
                {data.map(todo => (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed ? 'Done' : 'Pending'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetcher;
```



