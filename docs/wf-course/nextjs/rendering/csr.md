---
sidebar_position: 1
---

# Client side rendering

Tot nu toe hebben we altijd gebruik gemaakt van client side rendering. Dit wil zeggen dat de applicatie wordt opgebouwd in de browser. De volledige applicatie moet dus eerst gedownload worden door de browser en wordt dan ook volledig uitgevoerd in de browser. Dit heeft als voordeel dat de applicatie heel snel reageert op interacties van de gebruiker. Het nadeel is dat de applicatie pas kan beginnen met laden als de volledige applicatie is gedownload. Dit kan ervoor zorgen dat de gebruiker een lege pagina te zien krijgt als de applicatie nog aan het laden is. Dit is niet ideaal voor de gebruikerservaring. 

Nog een groter probleem is dat de applicatie niet of slecht geïndexeerd kan worden door zoekmachines. Als je een applicatie hebt die bijvoorbeeld een lijst van producten toont, dan wil je dat deze lijst ook getoond wordt als iemand zoekt naar een van deze producten. Als je applicatie niet geïndexeerd kan worden, dan zal deze lijst niet getoond worden in de zoekresultaten. Dit is niet ideaal voor de vindbaarheid van je applicatie.

Tot nu toe heb je altijd gebruik gemaakt van client side rendering. Dit is de standaard manier van werken in React. 

### Data ophalen

In een client side rendered applicatie wordt de data opgehaald in de browser. Dit kan je doen met behulp van de `fetch` API. Deze API zorgt ervoor dat je data kan ophalen van een server. Je kan bijvoorbeeld de volgende code gebruiken om data op te halen van de [JSON Placeholder API](https://jsonplaceholder.typicode.com/).

```jsx
interface Post {
  id: number; 
  userId: number;
  title: string;
  body: string;
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
```

Bij een hele trage internetverbinding kan het zijn dat de data niet meteen wordt opgehaald. Dit kan ervoor zorgen dat de gebruiker een lege pagina te zien krijgt. Dit is niet ideaal voor de gebruikerservaring.