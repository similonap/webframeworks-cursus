# Server Components

Tot nu toe hebben we gebruik gemaakt van client side rendering (CSR) om onze React applicaties te maken. Dit betekend dat de volledige applicatie in de browser wordt geladen en daar gerenderd wordt. Dit is een goede manier om applicaties te maken, maar het heeft ook enkele nadelen. Een van de nadelen is dat de eerste keer dat de applicatie geladen wordt, er een lege pagina getoond wordt terwijl de JavaScript code gedownload en uitgevoerd wordt. Dit kan ervoor zorgen dat de gebruiker een tijdje naar een lege pagina moet kijken voordat de applicatie getoond wordt. Dit is niet ideaal voor de gebruikerservaring.

Sinds React 19 is het mogelijk om server components te gebruiken. Dit zijn componenten die op de server gerenderd worden en als HTML naar de browser gestuurd worden. Dit zorgt ervoor dat de gebruiker meteen een volledige pagina te zien krijgt zonder dat hij moet wachten tot de JavaScript code gedownload en uitgevoerd is. Dit zorgt voor een betere gebruikerservaring.

## Client Components

Voor we in detail treden over server components, is het belangrijk om eerst te begrijpen wat client components zijn. Client components zijn componenten die in de browser gerenderd worden. Dit is de standaard manier om React componenten te maken. In een client component kan je state en effects gebruiken om interactiviteit toe te voegen aan je applicatie. Dit zijn dus de componenten die we tot nu toe altijd gebruikt hebben in onze React applicaties.

Ook belangrijk is dat Next.js standaard alle componenten als server components behandelt. Dit betekend dat als je een nieuw component aanmaakt, dit standaard een server component is. Wil je een client component maken, dan moet je bovenaan het bestand `use client` zetten. Dit is nodig omdat client components state en effects kunnen gebruiken en server components niet.

```typescript
import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter => counter + 1)}>{counter}</button>
    </div>
  );
}

export default Home;
```

Dit zal een fout geven omdat we state gebruiken in een server component. Om dit op te lossen moeten we bovenaan het bestand `use client` zetten

```typescript
"use client"
import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

    return (
        <div>
            <button onClick={() => setCounter(counter => counter + 1)}>{counter}</button>
        </div>
    );
}
export default Home;
```

Dit wil zeggen dat alles van het onderdeel React.js dat we tot nu toe geleerd hebben, nog steeds geldig is. We kunnen nog steeds state en effects gebruiken in onze componenten. We moeten alleen bovenaan het bestand `use client` zetten om aan te geven dat het een client component is.

Over het algemeen is de regel dat je een component een client component maakt als je een van de volgende dingen wil doen:
- State gebruiken met `useState`
- Side effects gebruiken met `useEffect`
- Event handlers gebruiken zoals `onClick`, `onChange`, ...
- Browser-only APIs gebruiken zoals `localStorage`, `document`, `window`, ...
- Externe libraries gebruiken die niet op de server werken, zoals `react-router`, `leaflet`, ...

## Server Components

Zoals al eerder vermeld, zijn server components componenten die op de server gerenderd worden. Dit is nuttig voor componenten als je: 

- Data wil ophalen van een server of database
- Componenten wil maken die geen state of effects nodig hebben
- De hoeveelheid JavaScript die naar de browser gestuurd wordt wil verminderen
- De First Contentful Paint (FCP) wil verbeteren. Dit is de tijd die het duurt voordat de gebruiker iets op het scherm ziet.

By default zijn Next.js applicaties gebaseerd op React Server Components. Het ophalen van data met Server Components is een relatief nieuwe aanpak en er zijn een paar voordelen aan het gebruik ervan:
- Server Components ondersteunen JavaScript Promises, wat een oplossing biedt voor asynchrone taken zoals het ophalen van data. Je kan de async/await syntax gebruiken zonder dat je useEffect, useState of andere data fetching libraries nodig hebt.
- Server Components draaien op de server, dus je kan zware data fetches en logica op de server houden en alleen het resultaat naar de client sturen.
- Omdat Server Components op de server draaien, kan je rechtstreeks de database bevragen zonder een extra API laag. Dit bespaart je het schrijven en onderhouden van extra code.


### Data Fetching in Server Components

Stel je hebt het volgende client component dat data ophaalt van een API:

```typescript
"use client"
import { useState, useEffect } from "react";
import { User } from "@/types";

const Home = () => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data : User[] = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    },[]);

    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        {
          users.map(user => (
            <div key={user.id} className="mb-4 p-4 border border-gray-200 rounded">{user.name}</div>))
        }
      </div>
    )
}

export default Home;
```

Hier maken we gebruik van `useState` en `useEffect` om data op te halen van een API. Dit is de standaard manier om data op te halen in een React applicatie. Het nadeel hiervan is dat de gebruiker eerst een lege lijst ziet voor een paar milliseconden terwijl de data opgehaald wordt. We zouden dit kunnen oplossen door een loading indicator te tonen, maar dit is niet ideaal voor de gebruikerservaring.

Het alternatief in Next.js is om een server component te maken dat de data ophaalt. Dit kan je doen door het `use client` statement weg te laten. In een server component kan je namelijk gewoon `async` functies gebruiken om data op te halen. Dit zorgt ervoor dat de data al opgehaald is voordat de HTML naar de browser gestuurd wordt. De gebruiker ziet dus meteen de volledige lijst zonder dat hij moet wachten.

```typescript
import { User } from "@/types";

const fetchUsers = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" });
    const data : User[] = await response.json();
    return data;
}

const Home = async() => {
    const users = await fetchUsers();

    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        {
          users.map(user => (
            <div key={user.id} className="mb-4 p-4 border border-gray-200 rounded">{user.name}</div>))
        }
      </div>
    )
}

export default Home;
```

Je ziet hier dat het component `Home` nu een `async` functie is. Dit is mogelijk omdat het een server component is. We kunnen dus gewoon `await` gebruiken om de data op te halen. Dit zorgt ervoor dat de data al opgehaald is voordat de HTML naar de browser gestuurd wordt. De gebruiker ziet dus meteen de volledige lijst zonder dat hij moet wachten.

Opgelet: dit is alleen mogelijk in server components. In client components kan je geen `async` functies gebruiken voor het component zelf.

Merk op dat we bij de fetch call de optie `{ cache: "no-store" }` meegeven. Dit zorgt ervoor dat de data telkens opnieuw opgehaald wordt bij elke request. Standaard zal Next.js namelijk caching toepassen bij fetch calls in server components. Dit betekent dat als je meerdere keren dezelfde request doet, de data uit de cache gehaald wordt in plaats van opnieuw opgehaald. Dit maakt je app sneller, maar kan er ook voor zorgen dat je verouderde data toont. 

### loading.tsx

Een handige feature van Next.js is dat je een `loading.tsx` bestand kan maken in een directory om een loading indicator te tonen terwijl een server component aan het laden is. Je plaatst deze file in dezelfde directory als waar je loading pagina wil.

```typescript
const Loading = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
    )
}
export default Loading;
```

### Suspense

Als je meer controle wilt over wat er moet gebeuren als een component nog data aan het fetchen is, dan kan je gebruik maken van React's `Suspense` component. Hiermee kan je een fallback component tonen terwijl de data aan het laden is. Stel dat we een `Todo` component hebben dat data ophaalt van een API aan de hand van een prop `id`

```typescript
const fetchTodo = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {cache: 'no-store'});

    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

    if (!response.ok) {
        throw new Error('Failed to fetch todo');
    }
    const data = await response.json();
    return data;
}

const Todo = async ({ id }: { id: string }) => {
    const todo = await fetchTodo(id);

    return (
        <div className="p-4 border border-gray-200 rounded shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Todo Item</h2>
            <p><strong>ID:</strong> {todo.id}</p>
            <p><strong>Title:</strong> {todo.title}</p>
            <p><strong>Completed:</strong> {todo.completed ? "Yes" : "No"}</p>
        </div>
    );
}

export default Todo;
```

Let op dat we een vertraging van 2 seconden simuleren om het laden duidelijk te maken. We kunnen dit component nu gebruiken in een andere server component en `Suspense` gebruiken om een fallback te tonen terwijl de data aan het laden is. Als we deze eerst zonder `Suspense` zouden gebruiken, dan zou de hele pagina wachten tot de data geladen is voordat er iets getoond wordt. 

```typescript
import Todo from "@/components/Todo";

const TodosPage = () => {
    return (
        <div>
            <Todo id="1" />
            <Todo id="2" />
            <Todo id="3" />
        </div>
    );
}

export default TodosPage;
```

Om dit op te lossen kunnen we `Suspense` gebruiken:

```typescript
import { Suspense } from "react";
import Todo from "@/components/Todo";

const TodosPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading todo 1...</div>}>
                <Todo id="1" />
            </Suspense>
            <Suspense fallback={<div>Loading todo 2...</div>}>
                <Todo id="2" />
            </Suspense>
            <Suspense fallback={<div>Loading todo 3...</div>}>
                <Todo id="3" />
            </Suspense>
        </div>
    );
} 
export default TodosPage;
```

Nu zal elke `Todo` component zijn eigen loading indicator tonen terwijl de data aan het laden is. Dit zorgt voor een betere gebruikerservaring omdat de gebruiker meteen ziet dat er iets aan het gebeuren is. Vaak wordt er een skeleton loader gebruikt in plaats van een simpele tekst. Een skeleton is een grijze placeholder die de vorm van de content nabootst. Dit geeft de gebruiker een beter idee van wat er gaat komen. Je kan deze mee in de component zelf zetten en exporteren:

```typescript
export const TodoSkeleton = () => {
    return (
        <div className="p-4 border border-gray-200 rounded shadow-sm animate-pulse">
            <h2 className="text-xl font-semibold mb-2 bg-gray-300 h-6 w-1/3 rounded"></h2>
            <p className="bg-gray-300 h-4 w-1/4 rounded mb-2"></p>
            <p className="bg-gray-300 h-4 w-3/4 rounded mb-2"></p>
            <p className="bg-gray-300 h-4 w-1/2 rounded"></p>
        </div>
    )
}
```

Dan kan je deze gebruiken als fallback in `Suspense`:

```typescript
import { Suspense } from "react";
import Todo, { TodoSkeleton } from "@/components/Todo";

const TodosPage = () => {
    return (
        <div>
            <Suspense fallback={<TodoSkeleton />}>
                <Todo id="1" />
            </Suspense>
            <Suspense fallback={<TodoSkeleton />}>
                <Todo id="2" />
            </Suspense>
            <Suspense fallback={<TodoSkeleton />}>
                <Todo id="3" />
            </Suspense>
        </div>
    );
}
export default TodosPage;
```

### Combineren van Server en Client Components

Het is perfect mogelijk om server en client components te combineren in een Next.js applicatie. Een goede vuistregel is om zoveel mogelijk server components te gebruiken en alleen client components te maken als het echt nodig is. Dit zorgt ervoor dat je applicatie snel laadt en dat de hoeveelheid JavaScript die naar de browser gestuurd wordt minimaal is.

Zo kan je bijvoorbeeld een server component maken dat data ophaalt en deze data doorgeven aan een client component dat de data toont. 

```typescript
import { User } from "@/types";
import UserCard from "@/components/UserCard";

const fetchUsers = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" }););
    const data : User[] = await response.json();
    return data;
}

const Home = async() => {
    const users = await fetchUsers();

    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        {
          users.map(user => (
            <UserCard key={user.id} user={user} />))
        }
      </div>
    )
}

export default Home;
```

en 

```typescript
"use client"

import { User } from "@/types";

interface UserCardProps {
    user: User;
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <div className="mb-4 p-4 border border-gray-200 rounded">
            {user.name}
        </div>
    )
}

export default UserCard;
```

Op dit moment is het uiteraard niet nodig om deze component als client component te maken, maar stel dat je toch interactiviteit wil toevoegen, dan is dit perfect mogelijk. Zonder interactie mag je de "use client" regel weglaten en wordt het een server component.

Bijvoorbeeld als we de user card klikbaar willen maken met een `onClick` event handler en willen aanduiden dat deze geselecteerd is:

```typescript
"use client"

import { User } from "@/types";
import { useState } from "react";

interface UserCardProps {
    user: User
}

const UserCard = ({user} : UserCardProps) => {
    const [selected, setSelected] = useState(false);

    return (
        <div key={user.id} className={`mb-4 p-4 border ${selected ? "border-blue-500 bg-blue-50" : "border-gray-200"} rounded cursor-pointer`} onClick={() => setSelected(selected => !selected)}>{ user.name }</div>
    )
}

export default UserCard;
```

De `Home` component blijft een server component die de data ophaalt en de `UserCard` component is een client component die de interactiviteit afhandelt.

## Use case: MongoDB

Een veel voorkomende use case voor server components is het ophalen van data uit een database. We hebben in vorige cursus gezien dat als we data uit een database willen ophalen, dat we daar een backend server voor nodig hebben zoals Express.js. In Next.js is dit niet nodig omdat we server components kunnen gebruiken om direct data uit een database op te halen. Dit kan bijvoorbeeld met MongoDB. 

Stel dat je de volgende `database.ts` file hebt die de connectie met MongoDB afhandelt:

```typescript
import { Collection, MongoClient } from "mongodb";
import { Joke } from "./types";

const client = new MongoClient(process.env.MONGODB_URI!);

export const jokesCollection: Collection<Joke> = client.db("jokes").collection<Joke>("joke");

export const getJokes = async() => {
    await jokesCollection.deleteMany({});
    if (await jokesCollection.countDocuments() === 0) {
        const response = await fetch("https://sampleapis.assimilate.be/jokes/goodJokes");
        const json : Joke[] = await response.json();
        await jokesCollection.insertMany(json);
    }

    const jokes = await jokesCollection.find().toArray();

    return jokes;
}
```

We kunnen deze functie `getJokes` nu gebruiken in een server component om de data op te halen en te tonen:

```typescript
import { getJokes } from "@/database";

const JokesPage = async() => {
    const jokes = await getJokes();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Jokes Page</h1>
            <ul className="space-y-4">
                {jokes.map((joke) => (
                    <li key={joke.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{joke.setup}</h2>
                        <p className="mt-2 text-gray-700">{joke.punchline}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default JokesPage;
```

