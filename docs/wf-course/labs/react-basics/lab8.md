import LabContextPokemon from '@site/src/components/lab-solutions/lab-context/lab-context-pokemon/App';
import BasicContext from '@site/src/components/lab-solutions/lab-context/lab-context-settings/App';
import ReactPlayer from 'react-player';

# Labo 8

- React Router
- Context API

## 1. Wake up Neo

> 📂 **Naam project:** `lab-context-wake-up-neo`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-context-wake-up-neo`.

Begin van de volgende code:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { useState } from 'react'

interface LineProps {
  text: string
}
const FourthLine = ({text}: LineProps) => <><p>{text}</p></>;
const ThirdLine = ({text}: LineProps) => <><p>Follow the white rabbit.</p><FourthLine text={text}/></>;
const SecondLine = ({text}: LineProps) => <><p>The matrix has you...</p><ThirdLine text={text}/></>;
const FirstLine = ({text}: LineProps) => <><p>Wake Up, Neo...</p><SecondLine text={text}/></>

const App = () => {
  const [text, setText] = useState("Knock, Knock, Neo");
  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <div style={{backgroundColor: "black", color: "#4AF626", display: "flex", flexDirection: "column", padding: 20}}> 
        <FirstLine text={text}/>
      </div>
    </>
  )
}

export default App
```

Pas deze helemaal aan zodat je gebruik maakt van Context. 

### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/lde14vFfBZU'/>

## 2. Basic context

> 📂 **Naam project:** `lab-context-settings`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-context-settings`.

1. Creëer een context genaamd `SettingsContext`. De context moet twee waarden bijhouden: `color` en `setColor`. `color` is een string die een kleur waarde heeft en `setColor` is een functie die `color` kan aanpassen. De startwaarde van `color` moet 'red' zijn.

2. Maak een component genaamd `Square`. Dit component moet de `color` waarde uit de `SettingsContext` uitlezen en deze waarde gebruiken om de achtergrondkleur van een vierkant blok te bepalen. Het blok moet een breedte en hoogte hebben van 100 pixels met 10 pixels marge. 

3. Creëer een component `SquareRow`. Dit component moet drie `Square` componenten naast elkaar tonen.

4. Maak een component genaamd `SelectionBox`. Dit component moet een selectie box bevatten met de opties 'red', 'blue' en 'green'. De huidige geselecteerde waarde moet de `color` zijn uit de `SettingsContext`. Als de gebruiker een andere kleur selecteert, moet de `setColor` functie van de `SettingsContext` gebruikt worden om de kleur aan te passen.

5. Ook moet je het `App` component aanmaken. In dit component, maakt het gebruik van de `useState` hook om de huidige kleur en de `setColor` functie te bepalen. Dit moet vervolgens in de `SettingsContext` meegegeven worden. Het `App` component moet daarna het `SelectionBox` en `SquareRow` component weergeven, beide omringd door de `SettingsContext.Provider`.

6. Zorg er nu voor dat je ook op de `Square` component kan drukken om de kleur te veranderen. 

<BasicContext/>

### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/owOyNsHt800'/>

## 3. Todo App

> 📂 **Naam project:** `lab-context-todo-app`  
> 🔗 **Basis project:** [`lab-communication-todo-app`](lab7.md#2-todo-app)

Maak een kopie van de Todo app van het vorige labo (lab-communication-todo-app) naar een nieuw project en noem deze `lab-context-todo-app`. En zorg voor de volgende uitbreidingen.

Uitbreidingen:
- Zorg ervoor dat je de todo's uit een API kan ophalen. Je kan hiervoor gebruik maken van de [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API. Deze bevat een endpoint `/todos` die je kan gebruiken om todo's op te halen. 
- Plaats de Todo's en de code om ze in te lezen in een `TodoContext` zodat je deze kan gebruiken in de verschillende componenten.

## 4. Quiz App

> 📂 **Naam project:** `lab-context-quiz-app`  
> 🔗 **Basis project:** [`lab-communication-quiz-app`](lab7.md#3-quizapp)

Maak een kopie van de Quiz app van het vorige labo (lab-communication-quiz-app) naar een nieuw project. Noem deze `lab-context-quiz-app`. We gaan hier nog wat uitbreidingen op maken.
  
Uitbreidingen:
- Herwerk de Quiz applicatie zodat deze gebruik maakt van een `QuizContext`. De functionaliteit van de applicatie blijft voor de rest volledig hetzelfde.
- Voorzie een button bovenaan de pagina om te togglen tussen dark en light mode. Zorg ervoor dat alle componenten in de applicatie aanpassen aan de gekozen mode. 

## 5. Pokemon app

> 📂 **Naam project:** n/a  
> 🔗 **Basis project:** n/a

<LabContextPokemon/>

### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/sE1_ULJJ81Y'/>
<ReactPlayer controls url='https://youtu.be/I3kNyxoDCzU'/>

## 6. Portfolio app

> 📂 **Naam project:** `lab-router-portfolio`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-router-portfolio`.

Kies 3 verschillende oefeningen die je hebt gemaakt tijdens de voorgaande labos. Zorg ervoor dat deze oefeningen beschikbaar zijn onder de volgende routes: /oefening1, /oefening2 en /oefening3. Zorg voor een navigatiebalk die je toelaat om tussen de verschillende oefeningen te navigeren.

## 7. Quiz app met React Router

> 📂 **Naam project:** n/a  
> 🔗 **Basis project:** [`lab-context-quiz-app`](lab8.md#4-quiz-app)

We gaan verder met de Quiz app uit de vorige oefening. Maak hier een kopie van zodat je de originele code nog hebt. Want we gaan hier nog wat uitbreidingen op maken. 

Uitbreidingen:
- Maak gebruik van React Router om de moeilijkheidsniveau te kiezen:
  - `/` toont de moeilijkheidsniveau's (easy, medium, hard)
  - `/quiz/:difficulty` toont de quiz met de gekozen moeilijkheidsniveau
- Zorg voor een simpele navigatiebalk waar je kan kiezen tussen de verschillende moeilijkheidsniveau's.
- Als je voor een nieuw moeilijkheidsniveau kiest, moet de quiz opnieuw beginnen.

![Alt text](../../images/quiz.gif)
