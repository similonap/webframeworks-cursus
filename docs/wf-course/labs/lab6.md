import Labo6Quizapp from '@site/src/components/LabSolutions/Labo6Quizapp';
import Labo6Todo from '@site/src/components/LabSolutions/Labo6Todo';


# Labo 6

- Communicatie tussen componenten

## 1. Todo App

We beginnen van een voorgemaakte Todo app. Deze app bevat een lijst van taken die je kan toevoegen en verwijderen. De app bevat ook een input veld waar je een nieuwe taak kan toevoegen.

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
    <Labo6Todo/>
</div>

## 2. Quizapp

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo5-quizapp`.

- Maak een nieuw component `QuizApp` aan.
- Maak gebruik van de `https://opentdb.com/api.php?amount=10` om de quizvragen op te halen. Gebruik de `fetch` API om de data op te halen. Gebruik een `useEffect` om deze data op te halen en daarna in een state te plaatsen.
- Er zijn twee soorten vragen: multiple choice en true/false. Maak een component `MultipleChoiceQuestion` en een component `TrueFalseQuestion` aan. Deze componenten worden gebruikt om de vragen te tonen. Maak een component `Question` aan die de juiste vraag component toont op basis van het type vraag.
- Als de gebruiker op een antwoord klikt wordt er aan de hand van een kleur aangegeven of het antwoord juist of fout is. Daarna wordt het antwoord getoond en kan de gebruiker niet meer van antwoord veranderen.
- Onderaan staat een button met de tekst 'Load More' die de volgende 10 vragen laadt. De vragen worden opnieuw opgehaald van de API. De vragen die al getoond of beantwoord zijn blijven in de lijst staan.
- Voorzie een loading indicator die getoond wordt tot de data geladen is (ook bij het laden van de volgende 10 vragen).
- Alle state moet in de `QuizApp` component zitten. De `Question` componenten mogen **geen** state hebben. De `Question` componenten moeten de state van de `QuizApp` componenten gebruiken via props en callbacks. 
- Maak gebruik van de `html-entities` package om de html entities te decoderen. Deze worden meegeleverd in de API. Anders krijg je bijvoorbeeld `&quot;` te zien in plaats van `"`.

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo6Quizapp/>
</div>