---
sidebar_position: 1
---

# Routing

Tot nu toe bestonden onze applicaties uit één enkele pagina. Dit is niet erg handig als je een volledige website wil maken. Daarom is er een manier nodig om meerdere pagina's te maken. Dit kan met behulp van een router. Een router is een stukje code dat bepaalt welke pagina getoond moet worden op basis van de URL. 

Next.js biedt twee verschillende routers aan: de `Pages Router` en de `App Router`. In deze cursus gaan we enkel gebruik maken van de `Pages Router`. Deze is eenvoudiger in gebruik en is voldoende voor de meeste applicaties. Ook wordt de `App Router` nog niet aanbevolen door de officiele React documentatie.

## File-system based router

Next.js maakt gebruik van een zogenaamde "file-system based" router. Dit betekend dat we geen extra code moeten schrijven om de router te configureren. We moeten enkel een aantal bestanden en directories aanmaken en de router zal automatisch de juiste pagina tonen op basis van het pad.

Als je een nieuw `tsx` bestand aanmaakt in de `pages` directory zal dit automatisch een nieuwe pagina worden. Als je bijvoorbeeld een bestand `pages/about.tsx` aanmaakt, dan zal dit bestand getoond worden als je naar `http://localhost:3000/about` surft.

```jsx
const About = () => {
  return <div>About</div>;
}

export default About;
```

### Index route

Je kan ook gebruik maken van de `index.tsx` bestanden om de index route te configureren. Als je bijvoorbeeld de volgende bestanden aanmaakt dan krijg je ook de bijbehorende routes:

```
pages/index.tsx → /
pages/blog/index.tsx → /blog
```

Je kan zelfs geneste routes maken:

```
pages/blog/first-post.tsx → /blog/first-post
pages/dashboard/settings/username.tsx → /dashboard/settings/username
```

### Dynamische routes

Wil je gebruik maken van dynamische routes. Bijvoorbeeld als je een blog wil maken waarbij de URL van de blogpost de titel of id van de blogpost bevat. Dan kan je gebruik maken van dynamische routes. Je kan dit doen door een bestand aan te maken met de naam van de route tussen vierkante haken. 

```jsx
pages/posts/[id].jsx → /posts/1, /posts/2, ...
pages/posts/[id]/index.jsx → /posts/1, /posts/2, ...
```

Wil je dan in je component gebruik maken van de id, dan kan je dit doen door gebruik te maken van de `useRouter` hook. Deze hook geeft je toegang tot de router en de parameters die je hebt meegegeven in de URL.

```jsx
import { useRouter } from "next/router";
 
const Posts = () => {
  const router = useRouter()
  return <p>Post: {router.query.id}</p>
}

export default Posts;
```

### Linking and Navigating

Om te navigeren tussen de verschillende pagina's kan je gebruik maken van de `Link` component. Deze component zorgt ervoor dat de pagina niet opnieuw moet laden als je naar een andere pagina navigeert. Dit zorgt voor een betere gebruikerservaring. 

```jsx
import Link from "next/link"

const Home = () => {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}

export default Home;
```

Je kan bij de `Link` component ook gebruik maken van dynamische routes. Hier gebruik je meestal string interpolation om de juiste URL te genereren.

```jsx  
import Link from "next/link"

const Home = () => {
  let pages : string[] = [1,2,3,4,5];
  return (
    <div>
        {pages.map((page) => (
            <Link href={`/posts/${page}`} key={page}>
                {page}
            </Link>
        ))}
    </div>
  )
}

export default Home;
```

of je kan ook gebruik maken van een object om de URL te genereren.

```jsx
import Link from "next/link"

const Home = () => {
  let pages : string[] = [1,2,3,4,5];
  return (
    <div>
        {pages.map((page) => (
            <Link href={{ pathname: '/posts/[id]', query: { id: page } }} key={page}>
                {page}
            </Link>
        ))}
    </div>
  )
}

export default Home;
```

via de `useRouter` hook kan je ook navigeren naar een andere pagina zonder gebruik te maken van de `Link` component. Dit is handig als je bijvoorbeeld wil navigeren op basis van een event.

```jsx
import { useRouter } from "next/router"

const Home = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push('/about')}>About</button>
    </div>
  )
}

export default Home;
```

Interessant om te weten: Next.js zal aan de hand van de links bepaalde pagina's gaan prefetchen. Dit wil zeggen dat de pagina al wordt opgehaald voordat de gebruiker erop klikt. Dit zorgt ervoor dat de pagina sneller zal laden als de gebruiker erop klikt. Dit is standaard ingeschakeld, maar je kan dit uitschakelen door de `prefetch` property op `false` te zetten.

## Custom App

Als je wil gebruik maken van een `Layout` component die op elke pagina getoond moet worden, dan kan je gebruik maken van de `Custom App` functionaliteit van Next.js. Dit is een component dat je kan aanmaken in `pages/_app.tsx`. Dit component wordt dan gebruikt als de basis van je applicatie. Je kan hier bijvoorbeeld de `Layout` component toevoegen.

```jsx
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
 
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
        <Component {...pageProps} />
    <Layout>
  );
}

export default MyApp;
```

met als bijbehorende `Layout` component:

```jsx
const Layout = ({ children } : {children: ReactElement}) => {
  return (
    <div>
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </div>
  );
}

export default Layout;
```

Deze code zorgt ervoor dat alle pagina's worden omgeven door de `Layout` component. 

## Custom Document

Als je wil gebruik maken van een custom `Document` dan kan je dit doen door een bestand `pages/_document.tsx` aan te maken. Dit bestand wordt gebruikt om de HTML te genereren. Wil je bijvoorbeeld een custom `head` toevoegen aan je applicatie, dan kan je dit doen door het volgende bestand aan te maken. Je kan hier ook externe CSS of javascript bestanden toevoegen (bv voor fontawesome).

```jsx
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="My custom description" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
```

Je ziet hier dat we gebruik maken van het `Head` component. Deze component zorgt ervoor dat de inhoud van de `head` tag wordt aangepast. Je kan hier bijvoorbeeld de `title` van de pagina aanpassen of een `meta` tag toevoegen. Je kan dit component ook gebruiken op aparte pagina's om een custom `head` toe te voegen voor die pagina.

```jsx
import Head from 'next/head'

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
    </div>
  )
}

export default About;
```

```jsx

## Custom error pages

Normaal gezien moet je geen gebruik maken van custom error pages. Next.js zal automatisch de juiste error pagina tonen als er iets mis gaat. Wil je toch gebruik maken van een custom error pagina, dan volstaat het een bestand aan te maken met als naam de status code van de error. Bijvoorbeeld `pages/404.tsx` voor een 404 error. 

```jsx
const Custom404 = () => {
  return <h1>404 - Page Not Found</h1>
}

export default Custom404;
```