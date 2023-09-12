# Rendering

## Client side rendering

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

## Server side rendering

Om de gebruikerservaring te verbeteren kan je gebruik maken van server side rendering. Dit wil zeggen dat de pagina wordt opgebouwd op de server en dat de volledige pagina wordt doorgestuurd naar de browser. De browser moet dus niet meer wachten tot de volledige applicatie is gedownload. De gebruiker krijgt meteen de pagina te zien. Dit zorgt voor een betere gebruikerservaring.

Een ander voordeel is dat de pagina geïndexeerd kan worden door zoekmachines. De pagina wordt namelijk opgebouwd op de server en wordt dan doorgestuurd naar de browser. De browser krijgt dus meteen de volledige pagina te zien. Dit is ideaal voor zoekmachines.

### getServerSideProps

Wil je in het voorbeeld van hierboven gebruik maken van server side rendering, dan kan je gebruik maken van de `getServerSideProps` functie. Deze functie wordt uitgevoerd op de server en zorgt ervoor dat je data kan ophalen van een server. Als return value moet je een object teruggeven met een `props` property. Deze property bevat de data die je wil doorgeven aan je component. 

```jsx
interface Post {
  id: number; 
  userId: number;
  title: string;
  body: string;
};

export const getServerSideProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    
    return {
        props: {
            posts: posts,
        },
    };
};

const Posts = ({ posts }: { posts: Post[] }) => {
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

### GetServerSidePropsContext

De `getServerSideProps` functie krijgt een `context` parameter mee. Deze parameter bevat een aantal handige properties. De belangrijkste property is de `req` property. Deze property bevat de request die binnenkomt op de server. Je kan deze gebruiken om bijvoorbeeld de cookies op te halen. In het volgende voorbeeld tonen we een aantal handige properties van de `context` parameter.

```jsx
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {
      ipAddress: context.req.headers['x-forwarded-for'] || context.req.socket.remoteAddress,
      cookies: JSON.stringify(context.req.cookies),
      userAgent: context.req.headers['user-agent'],
      query: JSON.stringify(context.query),
    },
  };
};

const RequestInfo = ({ ipAddress, cookies, userAgent, query }: { ipAddress: string, cookies: string, userAgent: string, query: string }) => {
  return (
    <>
      <main>
        <p>IP Address: {ipAddress}</p>
        <p>Cookies: {cookies}</p>
        <p>User Agent: {userAgent}</p>
        <p>Query: {query}</p>
      </main>
    </>
  )
}

export default RequestInfo;
```

## Static Site Generation

Bij static site generation wordt de pagina opgebouwd tijdens het runnen van het `next build` commando. Na het builden worden alle pagina's opgeslagen als statische HTML bestanden. Deze HTML paginas worden dan doorgestuurd naar de browser. Alle data die je wil gebruiken in je applicatie moet je dus ophalen tijdens het builden van de applicatie en kan in principe niet meer veranderen. Dit zorgt ervoor dat de applicatie heel snel kan laden. Je kan dit soort applicaties ook hosten op een CDN, zo kan je de pagina nog sneller aan de gebruiker tonen. Wel opgelet, als de data verandert, dan moet je de applicatie opnieuw builden.

### Static Generation zonder data

Elke pagina die geen gebruik maakt van externe data wordt in next.js by default gebuild als een statische pagina:

```
const About = () => {
  return (
    <>
      <main>
        Hello world!
      </main>
    </>
  )
}

export default About;
```

Deze pagina wordt gebuild als een statische pagina. Je kan dit controleren door de `npm run build` commando uit te voeren. Je krijgt daar een lijst te zien van alle pagina's die gebuild worden. 

```bash
Route (pages)                              Size     First Load JS
┌ ○ /                                      271 B          75.9 kB
├   /_app                                  0 B            75.6 kB
├ ○ /404                                   182 B          75.8 kB
├ ○ /about                                 270 B          75.9 kB
└ λ /requestInfo                           371 B            76 kB
+ First Load JS shared by all              76.3 kB
  ├ chunks/framework-63157d71ad419e09.js   45.2 kB
  ├ chunks/main-c6c319de9f7d0316.js        29.4 kB
  ├ chunks/pages/_app-5fbdfbcdfb555d2f.js  296 B
  ├ chunks/webpack-8fa1640cc84ba8fe.js     750 B
  └ css/876d048b5dab7c28.css               706 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
```

Je ziet hierboven dat alle pagina's buiten de `requestInfo` pagina worden gebuild als statische pagina's. Je kan deze pagina's ook bekijken in de `.next/server/pages` directory. 

### Static Generation met data

#### getStaticProps

Je kan ook statische pagina's maken die gebruik maken van externe data. Het build commando zal dan de externe data tijdens het bouwen verzamelen en hiermee statische html pagina's genereren. Je kan dit doen door gebruik te maken van de `getStaticProps` functie. Deze lijkt heel hard op de `getServerSideProps` functie in de zin dat je ook een object moet returnen met een `props` property. Het verschil is dat deze functie niet wordt uitgevoerd op de server, maar tijdens het builden van de applicatie. 

:::caution Als je de applicatie in development mode runt, dan zal de applicatie niet op voorhand gebuild worden. Alle statische pagina's worden toch opgebouwd tijdens het runnen van de applicatie. Het is alsof het toch gebruik maakt van `getServerSideProps`. :::

We kunnen teruggrijpen naar het Posts voorbeeld van hierboven. We kunnen dit voorbeeld aanpassen zodat we gebruik maken van static generation. 

```jsx
export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return {
        props: {
            posts: posts,
        },
    };
};
```

Je kan dit controleren door de `npm run build` commando uit te voeren. Je krijgt daar een lijst te zien van alle pagina's die gebuild worden. Ook kan je de `.next/server/pages` directory bekijken. Je zal zien dat de `posts` pagina wordt gebuild als een statische pagina.
