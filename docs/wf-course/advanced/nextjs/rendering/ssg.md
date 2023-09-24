---
sidebar_position: 3
---

# Static Site Generation

Bij static site generation wordt de pagina opgebouwd tijdens het runnen van het `next build` commando. Na het builden worden alle pagina's opgeslagen als statische HTML bestanden. Deze HTML paginas worden dan doorgestuurd naar de browser. Alle data die je wil gebruiken in je applicatie moet je dus ophalen tijdens het builden van de applicatie en kan in principe niet meer veranderen. Dit zorgt ervoor dat de applicatie heel snel kan laden. Je kan dit soort applicaties ook hosten op een CDN, zo kan je de pagina nog sneller aan de gebruiker tonen. Wel opgelet, als de data verandert, dan moet je de applicatie opnieuw builden.

## Static Generation zonder data

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

## Static Generation met data

### getStaticProps

Je kan ook statische pagina's maken die gebruik maken van externe data. Het build commando zal dan de externe data tijdens het bouwen verzamelen en hiermee statische html pagina's genereren. Je kan dit doen door gebruik te maken van de `getStaticProps` functie. Deze lijkt heel hard op de `getServerSideProps` functie in de zin dat je ook een object moet returnen met een `props` property. Het verschil is dat deze functie niet wordt uitgevoerd op de server, maar tijdens het builden van de applicatie. 

:::caution Als je de applicatie in development mode runt, dan zal de applicatie niet op voorhand gebuild worden. Alle statische pagina's worden toch opgebouwd tijdens het runnen van de applicatie. Het is alsof het toch gebruik maakt van `getServerSideProps`.

:::

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

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
```

Je kan dit controleren door de `npm run build` commando uit te voeren. Je krijgt daar een lijst te zien van alle pagina's die gebuild worden. Ook kan je de `.next/server/pages` directory bekijken. Je zal zien dat de `posts` pagina wordt gebuild als een statische pagina.

### getStaticPaths

Je kan ook dynamische pagina's maken die gebruik maken van externe data. Het build commando zal dan de externe data tijdens het bouwen verzamelen en hiermee statische html pagina's genereren. Je kan dit doen door gebruik te maken van de `getStaticPaths` functie. Deze functie moet een array returnen met alle mogelijke waarden voor de dynamische parameter.

We kunnen teruggrijpen naar het Posts voorbeeld van hierboven. We kunnen dit voorbeeld aanpassen zodat we gebruik maken van static generation. We maken dan een nieuwe pagina met de naam `[id].tsx`. Deze pagina zal dan de data van een specifieke post tonen. 

```jsx
export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return {
        paths: paths,
        fallback: false,
    };
};
```

Deze pagina heeft ook een `getStaticProps` functie nodig. Deze functie zal de data van de specifieke post ophalen. 

```jsx
export const getStaticProps = async ({ params }: { params: { id: string } }) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const post = await response.json();

    return {
        props: {
            post: post,
        },
    };
};
```

en uiteraard de pagina zelf:

```jsx
const Post = ({ post }: { post: Post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};
```

Als je vervolgens de `npm run build` commando uitvoert, dan zal je zien dat er een pagina wordt aangemaakt voor elke post. Je kan dit controleren door de `.next/server/pages` directory te bekijken. Het output van de build commando ziet er als ongeveer volgt uit:

```bash
...
 ✓ Generating static pages (103/103)
 ✓ Finalizing page optimization   

Route (pages)                              Size     First Load JS
┌ ● / (553 ms)                             296 B          78.1 kB
├   /_app                                  0 B            77.8 kB
├ ● /[id] (23432 ms)                       301 B          78.1 kB
├   ├ /2 (492 ms)
├   ├ /1
├   ├ /3
├   ├ /4
├   ├ /5
├   ├ /6
├   ├ /7
├   └ [+93 more paths]
```

Hier zie je dat er voor elke post een pagina statische pagina wordt gegeneerd. Er zal dus bij het bezoeken van de pagina geen data meer opgehaald moeten worden tijdens het runnen van de applicatie.

### Wanneer gebruik je static generation?

Er wordt over het algemeen aangeraden om static generation te gebruiken als je pagina's wil genereren die niet vaak veranderen. Als je bijvoorbeeld een blog hebt, dan kan je de blogposts genereren tijdens het builden van de applicatie. Als je een webshop hebt, dan kan je de producten genereren tijdens het builden van de applicatie.

Als je een pagina hebt die vaak verandert, dan kan je deze pagina niet genereren tijdens het builden van de applicatie. Je kan dan gebruik maken van `getServerSideProps` of `useEffect` om de data op te halen tijdens het runnen van de applicatie.