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
