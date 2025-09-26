import LabCommunicationQuizApp from '@site/src/components/lab-solutions/lab-communication/lab-communication-quiz-app/App';
import LabCommunicationTodoApp from '@site/src/components/lab-solutions/lab-communication/lab-communication-todo-app/App';
import LabCommunicationHappyWorkers from '@site/src/components/lab-solutions/lab-communication/lab-communication-happy-workers/App';
import LabCommunicationCounterList from '@site/src/components/lab-solutions/lab-communication/lab-communication-counter-list/App';
import ReactPlayer from 'react-player';

# Labo 7

- Communicatie tussen componenten

## 1. Counter List

> 📂 **Naam project:** `lab-communication-counter-list`  
> 🔗 **Basis project:** n/a

We beginnen in deze oefening van de volgende code. Kopieer deze in een nieuw project en noem deze `lab-communication-counter-list`.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
const CounterList = () => {
    const [counters, setCounters] = useState<number[]>([]);

    const addCounter = () => {
        setCounters([...counters, 0]);
    }

    const increaseCounter = (index: number) => {
        setCounters(counterCpy => counterCpy.map((counter, i) => (i === index) ? counter + 1 : counter));
    }

    const decreaseCounter = (index: number) => {
        setCounters(counterCpy => counterCpy.map((counter, i) => (i === index) ? counter - 1 : counter));
    }

    return (
        <>
            {counters.map((counter, index) => {
                let color = "black";
                if (counter > 0) {
                    color = "green";
                } else if (counter < 0) {
                    color = "red";
                }
                return (
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <button onClick={() => decreaseCounter(index)}>Omlaag</button>
                        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", color: color }}>Count: {counter}</div>
                        <button onClick={() => increaseCounter(index)}>Omhoog</button>
                    </div>
                )
            })}
            <p>Som van de tellers: {counters.reduce((prev, curr) => prev + curr, 0)}</p>
            <button onClick={addCounter}>Voeg teller toe</button>
        </>
    )
}
```

Dit is een implementatie van de `CounterList` component dat je in een voorgaande oefening hebt gemaakt. Hier was het nog niet de bedoeling om een aparte component te maken voor de `Counter` component. We gaan dit nu wel doen.

Maak een nieuwe component `Counter` aan. Deze component bevat een teller die je kan verhogen en verlagen. De `Counter` component bevat de volgende properties:
- `value`: de waarde van de teller
- `onIncrease`: een callback functie die opgeroepen wordt als de teller verhoogd wordt
- `onDecrease`: een callback functie die opgeroepen wordt als de teller verlaagd wordt
- `index`: de index van de teller in de lijst van tellers

Zorg er nu voor dat de `CounterList` component de `Counter` component gebruikt. De `CounterList` component bevat nog steeds de state van de tellers. De `Counter` component bevat geen state. De `Counter` component gebruikt de properties om de teller te tonen en de callbacks op te roepen.

<LabCommunicationCounterList/>

## 2. Todo App

> 📂 **Naam project:** `lab-communication-todo-app`  
> 🔗 **Basis project:** n/a

We beginnen van een voorgemaakte Todo app. Deze app bevat een lijst van taken die je kan toevoegen en verwijderen. De app bevat ook een input veld waar je een nieuwe taak kan toevoegen. Kopieer deze code in een nieuw project en noem deze `lab-communication-todo-app`.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import React, {useState} from "react";

interface TodoItem { 
    name: string;
    completed: boolean;
}

const App = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [todo, setTodo] = useState("");

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
        setTodo("");
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };

    return (
        <div>
            <div>
                <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
                <button onClick={() => addTodo(todo)}>Add</button>
            </div>
            <div>
                {todos.map((todo, index) => (
                    <div key={index}>
                        <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(index, event.target.checked)}/>
                        <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default App;
```

Herstructureer deze applicatie als volgt:
- Maak drie nieuwe componenten aan in een aparte map `components`:
    - `TodoList` bevat de lijst van taken
    - `TodoItem` bevat een enkele taak
    - `TodoInput` bevat het input veld en de knop om een taak toe te voegen
- Verplaats de logica van de `App` component naar de nieuwe componenten
- De state die de Todo's bevat moet in de `App` component blijven. 
- Je zal dus moeten gebruik maken van `props` om de state door te geven aan de nieuwe componenten. Je zal ook gebruik moeten maken van child-to-parent communicatie om de state te kunnen updaten.
- Zorg dat elk component in een aparte file staat.

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabCommunicationTodoApp/>
</div>

### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/RNC2X9D3XbI'/>

## 3. Quizapp

> 📂 **Naam project:** `lab-communication-quiz-app`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-communication-quiz-app`.

- Maak een nieuw component `QuizApp` aan.
- Maak gebruik van de `https://opentdb.com/api.php?amount=10` om de quizvragen op te halen. Gebruik de `fetch` API om de data op te halen. Gebruik een `useEffect` om deze data op te halen en daarna in een state te plaatsen.
- Er zijn twee soorten vragen: multiple choice en true/false. Maak een component `MultipleChoiceQuestion` en een component `TrueFalseQuestion` aan. Deze componenten worden gebruikt om de vragen te tonen. Maak een component `Question` aan die de juiste vraag component toont op basis van het type vraag.
- Als de gebruiker op een antwoord klikt wordt er aan de hand van een kleur aangegeven of het antwoord juist of fout is. Daarna wordt het antwoord getoond en kan de gebruiker niet meer van antwoord veranderen.
- Onderaan staat een button met de tekst 'Load More' die de volgende 10 vragen laadt. De vragen worden opnieuw opgehaald van de API. De vragen die al getoond of beantwoord zijn blijven in de lijst staan.
- Voorzie een loading indicator die getoond wordt tot de data geladen is (ook bij het laden van de volgende 10 vragen).
- Alle state moet in de `QuizApp` component zitten. De `Question` componenten mogen **geen** state hebben. De `Question` componenten moeten de state van de `QuizApp` componenten gebruiken via props en callbacks. 
- Maak gebruik van de `html-entities` package om de html entities te decoderen. Deze worden meegeleverd in de API. Anders krijg je bijvoorbeeld `&quot;` te zien in plaats van `"`.

<div style={{padding: 10, border: "1px dotted black"}}>
<LabCommunicationQuizApp/>
</div>

### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/L00lS5tKMcQ'/>

## 4. Happy Workers

> 📂 **Naam project:** `lab-communication-happy-workers`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze lab-communication-happy-workers.

Plaats in de `App` component een progressbar (van 0 tot 100) en maak een component genaamd `Square`. Het `Square` component aanvaard initieel gewoon een color en een size prop. Later gaan hier nog props bij komen. Zorg ervoor dat je een aantal `Square` componenten toevoegd aan de `App` component met verschillende kleuren. 

Maak een state `work` aan in de `App` component die initieel op 0 staat en de waarde voorstelt die de progressbar moet tonen. 

Zorg ervoor dat als je op een `Square` klikt, de `work` state met 1 verhoogd wordt. Dit zorgt ervoor dat de progressbar met 1% verhoogd wordt.

Als de `work` state kleiner is dan 100 dan moet de `Square` component een 😐 tonen. Als de `work` state 100 is dan moet de `Square` component een 😃 tonen. Let er op: het tonen van de smileys vereist geen nieuwe state. Je kan dit afleiden van de `work` state.

<LabCommunicationHappyWorkers useProductivity={false}/>

Uitbreiding:
- Maak een `state` genaamd `productivity` aan in de Square component die initieel op 1 staat. De `productivity` state stelt voor hoeveel procent de `work` state verhoogd wordt als je op de `Square` klikt. 
- Dus als de `productivity` 1 is wordt bij elke klik de `work` state met 1 verhoogd. Als de `productivity` 2 is wordt bij elke klik de `work` state met 2 verhoogd.
- Maak een `state` genaamd `clicked` aan in de Square component die initieel op 0 staat.
- Als de `clicked` state groter of gelijk is aan 10 dan moet de `productivity` state op 0 gezet worden. Dit zorgt ervoor dat de `Square` component een 😵 toont. Het is dan tijdelijk niet meer mogelijk de `work` state te verhogen met die `Square`.
- Na 5 seconden moet de `productivity` state terug op 1 gezet worden. Dit zorgt ervoor dat de `Square` component terug een 😐 toont. Ook de `clicked` state wordt terug op 0 gezet.

<LabCommunicationHappyWorkers useProductivity={true}/>
