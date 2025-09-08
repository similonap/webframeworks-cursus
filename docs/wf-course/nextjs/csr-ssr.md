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
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
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

### Combineren van Server en Client Components

Het is perfect mogelijk om server en client components te combineren in een Next.js applicatie. Een goede vuistregel is om zoveel mogelijk server components te gebruiken en alleen client components te maken als het echt nodig is. Dit zorgt ervoor dat je applicatie snel laadt en dat de hoeveelheid JavaScript die naar de browser gestuurd wordt minimaal is.

Zo kan je bijvoorbeeld een server component maken dat data ophaalt en deze data doorgeven aan een client component dat de data toont. 

```typescript
import { User } from "@/types";
import UserCard from "@/components/UserCard";

const fetchUsers = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
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