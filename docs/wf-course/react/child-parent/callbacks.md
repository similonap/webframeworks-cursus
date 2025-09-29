---
sidebar_position: 15
---

# Child-Parent communicatie

Tot nu toe hebben we altijd gezien dat je data kan doorgeven aan een component via properties (props). Dit is een manier om data van een parent component naar een child component door te geven. 

Zo hadden we bijvoorbeeld een `Square` component die een property `color` had. Deze property werd doorgegeven vanuit de parent component `App`:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
interface SquareProps {
    color: string
}

const Square = ({color}: SquareProps) => {
    return <div style={{width: 100, height: 100, backgroundColor: color}}></div>
}

const App = () => {
    return (
        <>
            <Square color="red"/>
            <Square color="green"/>
            <Square color="blue"/>
        </>
    );
}

export default App;
```

Dit is een voorbeeld van parent-to-child communicatie. Stel je voor dat we de `Square` component willen aanpassen als we op het vierkant klikken dan en deze dan een border krijgt. Dit kan je op de volgende manier doen:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import {useState} from "react";

interface SquareProps {
    color: string
}

const Square = ({color}: SquareProps) => {
    const [clicked, setClicked] = useState(false);
    let borderStyle = clicked ? {border: "5px solid black"} : {};
    return (
        <div style={{width: 100, height: 100, backgroundColor: color, ...borderStyle}} onClick={() => setClicked(!clicked)}/>
    );
}

//hide-start
const App = () => {
    return (
        <>
            <Square color="red"/>
            <Square color="green"/>
            <Square color="blue"/>
        </>
    );
}

export default App;
//hide-end
```

Elk component staat dus volledig op zichzelf en kan zijn eigen state bijhouden. Maar wat als we willen dat er maar één vierkant tegelijk geselecteerd kan zijn? Dus als we op een vierkant klikken, dan moet het andere vierkant zijn selectie verliezen. Dit kunnen we niet doen met de huidige opzet omdat elk component zijn eigen state bijhoudt. We moeten dus de state van welk vierkant geselecteerd is, bijhouden in de parent component `App`.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import {useState} from "react";

interface SquareProps {
    color: string,
    selected: boolean,
    onClick: () => void
}

const Square = ({color, selected, onClick}: SquareProps) => {
    let borderStyle = selected ? {border: "5px solid black"} : {};
    return (
        <div style={{width: 100, height: 100, backgroundColor: color, ...borderStyle}} onClick={onClick}/>
    );
}

const App = () => {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    return (
        <>
            <Square color="red" selected={selectedColor === "red"} onClick={() => setSelectedColor("red")}/>
            <Square color="green" selected={selectedColor === "green"} onClick={() => setSelectedColor("green")}/>
            <Square color="blue" selected={selectedColor === "blue"} onClick={() => setSelectedColor("blue")}/>
        </>
    );
}

export default App;
```

Je ziet in het voorbeeld hierboven dat je dus perfect ook een functie kan doorgeven als property. Deze functie kan dan gebruikt worden om te communiceren van het child component naar het parent component. Dit concept noemen we callback functies of event handlers.

Je ziet dat we hier een vereenvoudigde versie van de onClick handler hebben gemaakt en hier niet de event parameter gebruiken. Als we deze toch nodig hebben in de parent component dan kunnen we deze ook doorgeven:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import {useState} from "react";
interface SquareProps {
    color: string,
    selected: boolean,
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const Square = ({color, selected, onClick}: SquareProps) => {
    let borderStyle = selected ? {border: "5px solid black"} : {};
    return (
        <div style={{width: 100, height: 100, backgroundColor: color, ...borderStyle}} onClick={onClick}/>
    );
}

const App = () => {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    return (
        <>
            <Square color="red" selected={selectedColor === "red"} onClick={(e) => { console.log(e.currentTarget); setSelectedColor("red") }}/>
            <Square color="green" selected={selectedColor === "green"} onClick={(e) => { console.log(e.currentTarget); setSelectedColor("green") }}/>
            <Square color="blue" selected={selectedColor === "blue"} onClick={(e) => { console.log(e.currentTarget); setSelectedColor("blue") }}/>
        </>
    );
}
//hide-start
export default App;
//hide-end
```

Het is ook mogelijk om de hele state en de state setter door te geven naar het child component. Maar dit is niet aan te raden omdat je dan de encapsulatie van het component doorbreekt. Het is beter om alleen de nodige properties en functies door te geven. Gebruik dit alleen als je echt geen andere optie hebt.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import {useState} from "react";

interface SquareProps {
    color: string,
    selectedColor: string | null,
    setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>
}

const Square = ({color, selectedColor, setSelectedColor}: SquareProps) => {
    let borderStyle = selectedColor === color ? {border: "5px solid black"} : {};
    return (
        <div style={{width: 100, height: 100, backgroundColor: color, ...borderStyle}} onClick={() => setSelectedColor(color)}/>
    );
}

const App = () => {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    return (
        <>
            <Square color="red" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
            <Square color="green" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
            <Square color="blue" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        </>
    );
}

export default App;
```

## Welke aanpak verkiezen?

- ✅ **Voorkeur**: geef enkel de nodige properties en callback functies door  
  - Child blijft eenvoudig en goed geïsoleerd  
  - Parent behoudt controle over de state  

- ➡️ **Optioneel**: geef de event handler rechtstreeks door (met de `event` als parameter)  
  - Handig als de parent informatie uit het event zelf nodig heeft (bv. `e.currentTarget`)  
  - Iets meer koppeling tussen parent en child, maar nog steeds overzichtelijk  

- ⚠️ **Af te raden**: geef de volledige state en setter door  
  - Doorbreekt de encapsulatie  
  - Child wordt te afhankelijk van de interne logica van de parent 

## Voorbeelden

### Todo App met InputView

We gaan een eenvoudige Todo app bouwen waar we de invoer in een aparte `InputView` component plaatsen. De `InputView` zal een callback functie krijgen om de nieuwe todo toe te voegen aan de lijst in de parent component `App`.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import {useState} from "react";

interface InputViewProps {
    onAddTodo: (todo: string) => void
}

const InputView = ({onAddTodo}: InputViewProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim() !== "") {
            onAddTodo(inputValue);
            setInputValue("");
        }
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
}

const App = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (todo: string) => {
        setTodos([...todos, todo]);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <InputView onAddTodo={addTodo}/>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
```

### Todo App met delete functie

Je kan deze zelfs nog uitbreiden met een `TodoItem` component met een verwijder functie:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import {useState} from "react";

interface InputViewProps {
    onAddTodo: (todo: string) => void
}

const InputView = ({onAddTodo}: InputViewProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim() !== "") {
            onAddTodo(inputValue);
            setInputValue("");
        }
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
}

interface TodoItemProps {
    onDelete: () => void,
    todo: string
}

const TodoItem = ({onDelete, todo}: TodoItemProps) => {
    return (
        <li>
            {todo} <button onClick={onDelete}>Delete</button>
        </li>
    );
}

const App = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (todo: string) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <InputView onAddTodo={addTodo}/>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} onDelete={() => deleteTodo(index)}/>
                ))}
            </ul>
        </div>
    );
}

export default App;
```

### Checkbox lijst

We kunnen ook een lijst van checkboxen maken waarbij we de geselecteerde items in de parent component bijhouden:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import {useState} from "react";

interface CheckboxProps {
    label: string,
    checked: boolean,
    onChange: (checked: boolean) => void
}

const Checkbox = ({label, checked, onChange}: CheckboxProps) => {
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)}/>
            <label>{label}</label>
        </div>
    );
}

const App = () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleCheckboxChange = (item: string, isChecked: boolean) => {
        if (isChecked) {
            setSelectedItems([...selectedItems, item]);
        } else {
            setSelectedItems(selectedItems.filter(i => i !== item));
        }
    };

    const items = ["Item 1", "Item 2", "Item 3"];

    return (
        <div>
            <h1>Checkbox List</h1>
            {items.map(item => (
                <Checkbox
                    key={item}
                    label={item}
                    checked={selectedItems.includes(item)}
                    onChange={(isChecked) => handleCheckboxChange(item, isChecked)}
                />
            ))}
            <div>
                <h2>Selected Items:</h2>
                <ul>
                    {selectedItems.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
```

### Filter lijst

We kunnen ook een filter lijst maken waarbij we de filter tekst in de parent component bijhouden:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import {useState} from "react";

interface FilterInputProps {
    filterText: string,
    onFilterChange: (text: string) => void
}

const FilterInput = ({filterText, onFilterChange}: FilterInputProps) => {
    return (
        <div>
            <input
                type="text"
                value={filterText}
                onChange={(e) => onFilterChange(e.target.value)}
                placeholder="Filter items..."
            />
        </div>
    );
}

const App = () => {
    const [filterText, setFilterText] = useState("");

    const items = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div>
            <h1>Filter List</h1>
            <FilterInput filterText={filterText} onFilterChange={setFilterText}/>
            <ul>
                {filteredItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
```

### Lijst met een selectievakje

````typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import {useState} from "react";

interface ShoppingItem {
    name: ShoppingItem,
    quantity: number
}

interface SelectableItemProps {
    item: string,
    isSelected: boolean,
    onSelect: (item: string) => void
}

const SelectableItem = ({item, isSelected, onSelect}: SelectableItemProps) => {
    return (
        <div
            style={{
                padding: "10px",
                margin: "5px",
                border: isSelected ? "2px solid blue" : "1px solid gray",
                cursor: "pointer"
            }}
            onClick={() => onSelect(item)}
        >
            {item}
        </div>
    );
}

const App = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const items = ["Item A", "Item B", "Item C", "Item D"];

    return (
        <div>
            <h1>Selectable List</h1>
            {items.map(item => (
                <SelectableItem
                    key={item}
                    item={item}
                    isSelected={selectedItem === item}
                    onSelect={setSelectedItem}
                />
            ))}
            {selectedItem && <div>Selected: {selectedItem}</div>}
        </div>
    );
}

export default App;
````

### Formulier met validatie

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import {useState} from "react";

interface FormProps {
    onSubmit: (data: { name: string; email: string }) => void
}

interface FormErrors {
    name?: string;
    email?: string;
}

const Form = ({onSubmit}: FormProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    const validate = () => {
        const newErrors: FormErrors = {};
        if (name.trim() === "") {
            newErrors.name = "Name is required";
        }
        if (email.trim() === "") {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            onSubmit({name, email});
            setName("");
            setEmail("");
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                {errors.name && <span style={{color: "red"}}>{errors.name}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {errors.email && <span style={{color: "red"}}>{errors.email}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

const App = () => {
    const [submissions, setSubmissions] = useState<{ name: string; email: string }[]>([]);

    const handleFormSubmit = (data: { name: string; email: string }) => {
        setSubmissions([...submissions, data]);
    };

    return (
        <div>
            <h1>Form with Validation</h1>
            <Form onSubmit={handleFormSubmit}/>
            <h2>Submissions:</h2>
            <ul>
                {submissions.map((submission, index) => (
                    <li key={index}>{submission.name} - {submission.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
````