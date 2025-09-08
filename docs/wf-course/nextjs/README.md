---
sidebar_position: 3
---

# Next.js

## Waarom een framework?

Tot nu toe hebben we gebruik gemaakt van `vite` of een andere tool om een React applicatie te maken. Deze tools maken een zo minimaal mogelijke applicatie aan die gebruik maakt van React.js. Dit is ideaal voor kleine projecten, maar als je een groter project wil maken, dan heb je meer nodig. Je hebt bijvoorbeeld een router nodig, een manier om data op te halen van een server, een manier om je applicatie te deployen, ... 

Deze dingen kan je uiteraard allemaal zelf gaan doen in `react.js`. Je kan bijvoorbeeld zelf een routing systeem in elkaar steken of gebruik maken van een van de vele verschillende libraries die aanwezig zijn op npm. Maar dit is niet altijd even eenvoudig. Je moet zelf gaan uitzoeken welke libraries goed samenwerken, je moet zelf gaan uitzoeken hoe je deze libraries moet gebruiken, je moet zelf gaan uitzoeken hoe je deze libraries moet configureren, ... . Daarom bestaan er React frameworks. Deze frameworks zijn een verzameling van libraries die goed samenwerken en die je kan gebruiken om een volledige applicatie te maken. De meeste frameworks bieden ook een manier om delen van je applicatie op de server te renderen. Dit zorgt ervoor dat je applicatie sneller zal laden en dat je applicatie beter zal scoren op SEO vlak. Meer hier over later in de cursus.

De officiele React documentatie verwijst naar 3 frameworks: [Next.js](https://nextjs.org/), [Gatsby.js](https://www.gatsbyjs.com/) en [Remix](https://remix.run/). In deze cursus gaan we gebruik maken van Next.js. Dit is een framework dat heel populair is en dat heel veel functionaliteit aanbiedt. 

## Nieuw project aanmaken

Om een project aan te maken met Next.js moeten we het volgende commando uitvoeren:

```bash
npx create-next-app@latest
```

Je zal hier dan een aantal vragen krijgen over de configuratie van je project. 

```bash
✔ What is your project named? › my-app
✔ Would you like to use TypeScript? … Yes
✔ Which linter would you like to use? › ESLint
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like your code inside a `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Turbopack? (recommended) … Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No
```

Let goed op dat je gebruik maakt van `TypeScript` en dat je de `App Router` router gebruikt. Next.js heeft twee verschillende routing systemen en als je de laatste nieuwe features van React 19 zoals server components wil gebruiken dan moet je deze router gebruiken.

Je kan vervolgens het project voor de eerste keer opstarten met het volgende commando:

```bash
npm run dev
```

Dit start de development server op en opent de applicatie in je browser. Je kan nu beginnen met het aanpassen van de applicatie. Pas bijvoorbeeld de tekst aan in `src/app/page.tsx` en bekijk het resultaat in je browser. Je kan eventueel een van de voorgaande oefeningen opnieuw maken in Next.js. Je gaat zien dat dit heel gelijkaardig is aan het maken van een React applicatie met `vite`. 

Opgelet je moet wel aangeven dat een component een client component is door bovenaan het bestand `use client` te zetten. Dit is nodig omdat Next.js standaard server components gebruikt en anders kan bijvoorbeeld geen state of effects gebruiken in je componenten.

```typescript
"use client"

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
       <button onClick={() => setCounter(counter => counter + 1)}>{counter}</button>
    </div>
  );
}
```

## Tailwind CSS

Tailwind CSS is een utility-first CSS framework dat het makkelijk maakt om snel mooie en responsieve user interfaces te maken. Tailwind CSS is gebaseerd op het idee van utility classes. Dit zijn kleine CSS classes die een specifieke stijl toepassen op een element. In plaats van zelf CSS te schrijven, kan je deze utility classes gebruiken om je elementen te stylen. By default is Tailwind CSS al geconfigureerd in je Next.js project als je deze optie hebt aangevinkt bij het aanmaken van het project. Je bent vrij dit te gebruiken of niet.

Je kan bijvoorbeeld een button maken met de volgende code:

```tsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

Deze code maakt een button met een blauwe achtergrond, witte tekst, een bold font, padding en afgeronde hoeken. Als je met de muis over de button gaat, dan verandert de achtergrondkleur naar een donkerdere blauwe kleur.
