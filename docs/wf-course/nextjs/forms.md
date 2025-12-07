# Form Handling

## Server Actions

React Server Actions maken het mogelijk om asynchrone code rechtstreeks op de server uit te voeren. Dat betekent dat je geen aparte API-endpoints meer hoeft te schrijven om data te wijzigen. In plaats daarvan schrijf je asynchrone functies die op de server draaien, maar die je kunt aanroepen vanuit zowel Client Components als Server Components. Zo kan je bijvoorbeeld een formulier rechtstreeks koppelen aan een serverfunctie: wanneer de gebruiker het formulier indient, wordt die functie op de server uitgevoerd met directe toegang tot de database en andere back-endlogica. Er is geen extra fetch-request nodig, geen CORS-configuratie en ook geen aparte router of JSON-parsing — alles zit in één plek.

Vroeger moest dit heel anders. Je had een aparte backend nodig, bijvoorbeeld een Express-server of een .NET Core API. Daarin moest je routes definiëren zoals een POST-endpoint voor het verwerken van formulieren en een GET-endpoint voor het ophalen van data. Op de clientkant moest je in React met fetch of axios een request sturen naar dat endpoint, wachten op een JSON-response en daarna zelf de UI bijwerken. Je moest zorgen voor correcte headers, validatie, beveiliging tegen CSRF en CORS-problemen, en vaak ook dubbele type-definities maken voor zowel frontend als backend. Dat werkte prima, maar voor een eenvoudige use-case zoals het versturen van een contactformulier was er behoorlijk wat boilerplate nodig.

Met Server Actions valt al die extra code weg: je definieert één enkele functie in je Next.js-project, markeert die met "use server" en koppelt ze direct aan je formulier. De data gaat automatisch naar de server, de actie wordt uitgevoerd en je kunt na afloop meteen de UI opnieuw valideren of een redirect doen. Dit maakt de code veel overzichtelijker, veiliger en makkelijker te onderhouden. Een aparte API is alleen nog nodig als je data wil delen met externe clients, zoals mobiele apps of andere systemen.

## Formulier (Server Component)

We gaan een eenvoudig formulier maken dat een bericht opslaagt in een mongodb database. Hiervoor hebben we al een voor gedefinieerde `database.ts` file die de connectie met de database maakt en een `Message` model die we kunnen gebruiken om berichten op te slaan in de database.

```typescript
import { Collection, MongoClient } from "mongodb";
import { Message } from "@/types";

console.log(process.env.MONGODB_URI);

const client = new MongoClient(process.env.MONGODB_URI!);

export const messageCollection: Collection<Message> = client.db("messages").collection<Message>("message");

export const saveMessage = async (message: Message) => {  
    const result = await messageCollection.insertOne(message);
    return result;
}

export const getMessages = async() => {
    const messages = await messageCollection.find().toArray();
    return messages;
}
```

en 

```typescript
export interface Message {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    createdAt?: Date;
}
```

We gaan nu een formulier maken in een server component. Dit formulier zal de data doorsturen naar een server action die we later gaan maken.

```typescript
import React from "react";
import "./page.css";

export default function ContactPage() {
    return (
        <div className="form-container">
            <div className="form-card">
                <div className="form-header">
                    <h1>Send a Message</h1>
                    <p>Fill in the form below. Fields marked with * are required.</p>
                </div>
                <form className="form-body">
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="firstName">First name *</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                placeholder="Ada"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last name *</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                placeholder="Lovelace"
                            />
                        </div>

                        <div className="form-group form-full">
                            <label htmlFor="email">Email *</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="ada@example.com"
                            />
                        </div>

                        <div className="form-group form-full">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                required
                                placeholder="Write your message here..."
                            />
                            <p className="form-hint">Keep it clear and concise.</p>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="reset" className="btn-secondary">
                            Reset
                        </button>
                        <button type="submit" className="btn-primary">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
```

Nu hebben we een formulier, maar het doet nog niets als we op de knop "Send" klikken. We gaan nu een server action maken die de data van het formulier zal verwerken. Meestal maken we een aparte file aan voor server actions, bijvoorbeeld `actions.ts`. Op dit moment willen we gewoon een `console.log` doen met de data die we ontvangen van het formulier.

```typescript
"use server";

const createMessage = async (formData: FormData) => {
    const firstName = formData.get("firstName")?.toString();
    const lastName = formData.get("lastName")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();

    console.log({ firstName, lastName, email, message });
};
```

FormData bevat de data van het formulier. We kunnen deze data ophalen met de `get` methode. De naam die we meegeven aan de `get` methode moet overeenkomen met de naam die we hebben meegegeven aan het `name` attribuut van het input veld in het formulier. Nu moeten we deze server action koppelen aan het formulier. Dit doen we door de `action` attribute van het `form` element te gebruiken.

Vergeet hier niet om bovenaan de file `use server` toe te voegen anders gaan de server actions niet werken.

```typescript
<form className="form-body" action={createMessage}>
```

Let op dat we hier geen methode zoals `POST` of `GET` moeten meegeven. Als je nu op de knop "Send" klikt, dan zal de server action worden aangeroepen en zal de data van het formulier worden gelogd in de console van de server. Vervolgens kunnen we de data opslaan in de database. Hiervoor moeten we de `saveMessage` functie importeren uit de `database.ts` file die we eerder hebben gemaakt.

```typescript
"use server"

import { redirect } from "next/navigation";
import { saveMessage } from "./database";

export const createMessage = async (formData: FormData) => {
    const firstName = formData.get("firstName")?.toString();
    const lastName = formData.get("lastName")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();

    if (!firstName || !lastName || !email || !message) {
        throw new Error("All fields are required");
    }

    await saveMessage({
        firstName,
        lastName,
        email,
        message,
        createdAt: new Date()
    });
    
    redirect("/contact/thank-you");
}
```

Hier doen we een aantal dingen:
- We controleren of alle velden zijn ingevuld. Als dit niet het geval is, dan gooien we een error. In een echte applicatie zou je hier een betere foutafhandeling moeten implementeren. Hoe we deze fout kunnen afhandelen komt later aan bod.
- We slaan het bericht op in de database met de `saveMessage` functie. Deze functie is asynchroon, dus we moeten hier `await` voor gebruiken.
- We redirecten de gebruiker naar een "Thank you" pagina nadat het bericht is opgeslagen.

Je moet uiteraard nog wel een nieuwe pagina aanmaken voor de "Thank you" pagina, bijvoorbeeld `app/contact/thank-you/page.tsx`.

```typescript
import React from "react";
import "../page.css";

const MessageForm = () => {
  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h1>Thank you</h1>
          <p>Your message has been sent successfully. We will get back to you shortly.</p>
        </div>
      </div>
    </div>
  );
}

export default MessageForm;
```

Als we de error message nu willen afhandelen op een heel eenvoudige manier kunnen we gebruik maken van een `error.tsx` file. Deze file wordt automatisch gebruikt door Next.js als er een error wordt gegooid in een server component. We kunnen deze file aanmaken in de `app/contact` folder. 

```typescript
"use client";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <div className="form-container">
            <div className="form-card">
                <div className="form-header">
                    <h1>Something went wrong</h1>
                    <p>{error.message}</p>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;
```

Wil je er voor zorgen dat de button even gedisabled wordt nadat je de knop hebt ingedrukt, dan kan je gebruik maken van een kleine Client Component die we kunnen inladen in het formulier. Deze component zorgt er voor dat de button even disabled wordt nadat je op de knop hebt geklikt. We maken hiervoor een nieuwe component aan `SubmitButton.tsx`.

```typescript
"use client"

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
    const status = useFormStatus();

    return (
        <button type="submit" className={`btn-primary`} disabled={status.pending}>
            Send
        </button>
    )
}

export default SubmitButton;
```

Hier gebruiken we dus de `useFormStatus` hook die ons vertelt of het formulier aan het verzenden is. We gebruiken deze status om de button te disablen als het formulier aan het verzenden is. We kunnen deze component nu gebruiken in het formulier.

### Formulier (Client Component)

Soms is het nodig om meer controle te hebben over het formulier, bijvoorbeeld om validatie te doen of om de UI bij te werken zonder de pagina te herladen. In dat geval kunnen we een Client Component maken die het formulier bevat. Hiervoor hebben we de `useActionState` hook nodig die we kunnen importeren uit `react-dom`. Deze hook geeft ons de status van de server action en maakt het mogelijk om de UI bij te werken op basis van deze status.

```typescript
const [state, createMessageAction, pending] = useActionState(createMessage, {success: false, error: null});
```

Deze hook geeft ons drie dingen:
- `state`: de huidige status van de actie. Dit is een object dat we kunnen gebruiken om de status bij te houden. In dit geval houden we bij of de actie succesvol is geweest of dat er een error is opgetreden.
- `createMessageAction`: een functie die we kunnen aanroepen om de server action uit te voeren.
- `pending`: een boolean die aangeeft of de actie aan het uitvoeren is (een soort van loading state).

We hoeven hier dus zelf geen verschillende states bij te houden zoals loading, success of error. Dit wordt allemaal voor ons gedaan door de `useActionState` hook. 

We moeten hier ook onze `createMessage` server action een klein beetje aanpassen zodat hij als parameter de vorige state meekrijgt en deze kan updaten. We moeten hier ook de return value aanpassen zodat we de nieuwe state teruggeven.

```typescript
export interface CreateMessageState {
    error: string | null;
    success: boolean;
}

export const createMessage = async (state: CreateMessageState, formData: FormData) => {
    const firstName = formData.get("firstName")?.toString();
    const lastName = formData.get("lastName")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();

    let error : string | null = null;

    if (!firstName || !lastName || !email || !message) {
        error = "All fields are required";
    } else {
        await saveMessage({
            firstName,
            lastName,
            email,
            message,
            createdAt: new Date()
        });
    }   

    return {
        success: true,
        error: error
    }
}
```

Vervolgens kunnen we nu de `createMessageAction` meegeven aan het formulier.

### revalidatePath

Soms wil je na het indienen van een formulier de pagina of een deel van de pagina opnieuw valideren om de nieuwste data weer te geven. In Next.js kun je hiervoor de `revalidatePath` functie gebruiken, die je kunt importeren uit `next/cache`. Met deze functie kun je een specifiek pad opgeven dat opnieuw gevalideerd moet worden. Dit veroorzaakt dat Next.js de data voor dat pad opnieuw ophaalt en de bijbehorende componenten opnieuw rendert.

Stel dat je een formulier hebt waarmee gebruikers reacties kunnen plaatsen op een blogpost. Nadat een gebruiker een reactie heeft ingediend, wil je dat de lijst met reacties automatisch wordt bijgewerkt om de nieuwe reactie weer te geven. Je kunt dit doen door `revalidatePath` aan te roepen met het pad van de blogpost nadat de reactie is opgeslagen.

```typescript
import { revalidatePath } from "next/cache";

export const submitComment = async (formData: FormData) => {
    // Code om de reactie op te slaan in de database

    // Na het opslaan van de reactie, hervalideer het pad van de blogpost
    revalidatePath("/blog/my-post");
}
```

## Use case: Todo List

We gaan een eenvoudige Todo List maken waarbij we een formulier hebben om nieuwe todo's toe te voegen en een lijst om de bestaande todo's weer te geven. We zullen gebruik maken van Server Actions om de todo's op te slaan in een MongoDB database en de lijst opnieuw te valideren nadat een nieuwe todo is toegevoegd.

### Database setup

We hebben een `database.ts` file nodig om de connectie met de database te maken en een `Todo` model om de todo's op te slaan.

```typescript
import { Collection, MongoClient } from "mongodb";
import { Todo } from "@/types";

const client = new MongoClient(process.env.MONGODB_URI!);

export const todosCollection: Collection<Todo> = client.db("todos").collection<Todo>("todos");

export const getTodos = async (): Promise<Todo[]> => {
    let todos = await todosCollection.find().toArray();
    return todos.map(todo => ({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
    }));
}

export const addTodo = async (title: string): Promise<void> => {
    let max = await todosCollection.find().sort({ id: -1 }).limit(1).toArray();
    let id = max[0]?.id + 1 || 1;
    await todosCollection.insertOne({
        id: id,
        title,
        completed: false,
    });
}

export const getTodoById = async (id: number): Promise<Todo | null> => {
    return await todosCollection.findOne({ id });
}

export const updateTodo = async (id: number, completed: boolean): Promise<void> => {
    await todosCollection.updateOne({ id }, { $set: { completed } });
}
```

### Todo model

```typescript
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
``` 

### Actions

```typescript
"use server";

import { addTodo, getTodoById, updateTodo } from "@/database";
import { revalidatePath } from "next/cache";

export const addTodoAction = async (formData: FormData): Promise<void> => {
    const title = formData.get("title") as string;
    if (!title) {
        return;
    }
    await addTodo(title);
    revalidatePath("/");
}

export const toggleTodoCompletion = async (formdata: FormData): Promise<void> => {
    const id = Number(formdata.get("id"));
    let todo = await getTodoById(id);
    if (!todo) return;

    await updateTodo(id, !todo.completed);

    revalidatePath("/");

    return ;

}
```

### Add Todo Form component

```typescript
import { addTodoAction } from "@/actions";
import SubmitButton from "./SubmitButton";

const AddTodoForm = () => {
    return (
        <form className="mb-4" action={addTodoAction}>
            <input
                type="text"
                name="title"
                placeholder="New todo"
                className="border border-gray-300 rounded px-3 py-2 mr-2 w-64"
            />
            <SubmitButton/>
        </form>
    )
}

export default AddTodoForm;
```

### Todo List component

```typescript
import { getTodos } from "@/database";
import TodoItem from "./TodoItem";

const TodoList = async () => {

    const todos = await getTodos();

    return (
        <div className="max-w-md mx-auto mt-10">
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
``` 

### Todo Item component

```typescript
"use client";

import { toggleTodoCompletion } from "@/actions";
import { Todo } from "@/types"

export interface TodoItemProps {
    todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
    return (
        <li className="mb-2 w-lg p-4 bg-white rounded shadow flex items-center justify-between">
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
                {todo.title}
            </span>
            <form action={toggleTodoCompletion}>
                <input type="hidden" name="id" value={todo.id} />
                <input type="checkbox" defaultChecked={todo.completed} onChange={(e) => {
                    e.currentTarget.form?.requestSubmit();
                }}/>
            </form>
        </li>
    );
}

export default TodoItem;
```

### Page component

```typescript
import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>

        <AddTodoForm/>
        <Suspense fallback={<div>Loading...</div>}>
            <TodoList/>
        </Suspense>
    </div>
  );
}
```

### Pending state voor checkbox

In de `TodoItem` component kunnen we de `useActionState` hook gebruiken om een pending state te krijgen voor de checkbox. Op die manier kunnen we de checkbox disablen terwijl de actie aan het uitvoeren is.

We moeten dan wel de `toggleTodoCompletion` actie een klein beetje aanpassen zodat hij de vorige state meekrijgt en deze kan updaten.

```typescript
interface ToggleTodoCompletionState {
    error: string | null;
}

export const toggleTodoCompletion = async (previousState: ToggleTodoCompletionState, formdata: FormData): Promise<ToggleTodoCompletionState> => {
    const id = Number(formdata.get("id"));
    let todo = await getTodoById(id);
    if (!todo) {
        return { error: "Todo not found" };
    }

    await updateTodo(id, !todo.completed);

    revalidatePath("/");

    return {
        error: null
    }

}
```

Vervolgens kunnen we nu de `useActionState` hook gebruiken in de `TodoItem` component.

```typescript
    const [state, toggleTodoCompletionAction, pending] = useActionState(toggleTodoCompletion, { error: null})
```

We kunnen nu de `toggleTodoCompletionAction` meegeven aan het formulier en de checkbox disablen als de actie aan het uitvoeren is.

```typescript
    <form action={toggleTodoCompletionAction}>
        <input type="hidden" name="id" value={todo.id} />
        <input type="checkbox" defaultChecked={todo.completed} disabled={pending} onChange={(e) => {
            e.currentTarget.form?.requestSubmit();
        }}/>
    </form>
``` 