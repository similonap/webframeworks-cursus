---
sidebar_position: 2
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
What is your project named? my-app
Would you like to use TypeScript? Yes
Would you like to use ESLint? No
Would you like to use Tailwind CSS? No
Would you like to use `src/` directory? Yes
Would you like to use App Router? (recommended) No
Would you like to customize the default import alias? No
What import alias would you like configured? @/*
````

Let goed op dat je gebruik maakt van `TypeScript` en dat je de `App Router` niet gebruikt. We gaan in deze cursus gebruik maken van de `Pages Router`. Deze is eenvoudiger in gebruik en is voldoende voor de meeste applicaties. Ook wordt de `App Router` nog niet aanbevolen door de officiele React documentatie. De andere opties kan je zelf kiezen, maar voor te beginnen is het aan te raden om de bovenstaande opties te gebruiken. 

Je kan vervolgens het project voor de eerste keer opstarten met het volgende commando:

```bash
npm run dev
```

Dit start de development server op en opent de applicatie in je browser. Je kan nu beginnen met het aanpassen van de applicatie. Pas bijvoorbeeld de tekst aan in `pages/index.tsx` en bekijk het resultaat in je browser. Je kan eventueel een van de voorgaande oefeningen opnieuw maken in Next.js. Je gaat zien dat dit heel gelijkaardig is aan het maken van een React applicatie met `vite`.


