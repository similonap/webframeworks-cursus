---
sidebar_position: 1
---

# Strapi

In deze cursus gaan we gebruik maken van [Strapi](https://strapi.io/). Dit is een headless CMS dat specifiek gemaakt is om te gebruiken als headless CMS. Het is open source en gratis te gebruiken. Het is ook heel eenvoudig om te gebruiken. Het is volledig geschreven in JavaScript en maakt gebruik van Node.js. Je kan het dus gemakkelijk installeren met behulp van npm. 

Strapi applicaties kunnen op een server worden geïnstalleerd of lokaal worden uitgevoerd. We gaan eerst zien hoe je een strapi applicatie kan installeren op je lokale machine. Vervolgens gaan we deze applicatie deployen naar een server.

## Strapi installeren

Om Strapi te installeren moeten we het volgende commando uitvoeren:

```bash
npx create-strapi-app@latest my-project
```

We moeten vervolgens een installatie type kiezen. Op dit moment zullen we `Quickstart (recommended)` kiezen. Dit is de eenvoudigste manier om strapi te installeren en gebruikt een SQLite database. Dit is een database die in een bestand wordt opgeslagen. Dit is ideaal voor lokale ontwikkeling, maar niet ideaal voor productie. 

Vervolgens zal de installatie beginnen. Dit kan even duren. Als de installatie klaar is, zal de applicatie automatisch opstarten. Je kan de applicatie ook zelf opstarten met het volgende commando:

```bash
npm run develop
```

Als je naar de applicatie surft, dan zal je een scherm zien waar je een account kan aanmaken. Dit account heb je nodig om in te loggen in de applicatie. 

![Alt text](<Screenshot 2023-09-24 at 22.01.48.png>)

## Content types

Als je bent ingelogd in de applicatie, dan kan je content types aanmaken. Een content type is een soort van model dat je kan gebruiken om data op te slaan in de database. Je kan bijvoorbeeld een content type aanmaken voor blogposts. Dit content type bevat dan een aantal velden zoals bijvoorbeeld een titel, een inhoud, een auteur, een datum, enzovoort. 

Er is altijd een content type aanwezig met de naam `User`. Dit content type bevat een aantal velden zoals bijvoorbeeld een gebruikersnaam, een email, een wachtwoord, enzovoort. Dit content type wordt gebruikt om gebruikers aan te maken die kunnen inloggen in de applicatie.

Er zijn 3 verschillende soorten content types:
- Collection types (bijvoorbeeld blogposts). Dit zijn content types die meerdere items bevatten. Je kan bijvoorbeeld meerdere blogposts aanmaken.
- Single types (bijvoorbeeld een homepage). Dit zijn content types die maar 1 item bevatten. 
- Component types (bijvoorbeeld een header). Dit zijn content types die je kan gebruiken in andere content types. Als je een bepaald stuk van een content type wil hergebruiken, dan kan je dit stuk in een component type plaatsen en dit component type gebruiken in andere content types.

### Voorbeeld blog posts

We gaan als voorbeeld een collection content type aanmaken voor blogposts. We gaan dit content type `Post` noemen. 

![Alt text](<Screenshot 2023-09-24 at 22.18.15.png>)

Je krijgt in het eerste venster ineens te zien welke API endpoints er worden aangemaakt voor dit content type. Je kan deze endpoints gebruiken om data op te halen van de server. We gaan dit later in de cursus gebruiken om data op te halen van de server.

Vervolgens moeten we de velden van het content type aanmaken. We gaan de volgende velden aanmaken:
- title: Text
- content: Rich Text (Markdown)

De keuze van Rich Text is belangrijk. Dit betekent dat we een rich text editor kunnen gebruiken om de inhoud van de blogpost te schrijven. Dit is een editor die je kan gebruiken om tekst op te maken. Je kan bijvoorbeeld tekst vet maken, tekst cursief maken, lijsten maken, afbeeldingen toevoegen, enzovoort.

Vervolgens moet je op de `Save` knop klikken om het content type op te slaan. Na het opslaan wordt de server automatisch herstart. Het kan zijn dat je de pagina moet herladen om de wijzigingen te zien.

We zouden ook graag de `Author` van een blog post gaan tonen in onze applicatie. We kunnen dit doen door een nieuwe content type aan te maken. We gaan dit content type `Author` noemen. Dit content type bevat de volgende velden:

- firstname: Text
- lastname: Text
- email: Text
- shortBio: Text

Voor de author veld moeten we een relatie leggen met het Author content type. Dit wil zeggen dat we een gebruiker kunnen kiezen als auteur van de blogpost. We kiezen hiervoor de `Many to one` relatie. Dit wil zeggen dat een gebruiker meerdere blogposts kan schrijven, maar dat een blogpost maar 1 auteur kan hebben.  We moeten dus een aanpassing doen aan onze `Post` content type en het volgende veld toevoegen:

- author: Relation (met Author)

Nu kunnen we effectief een blog post aanmaken. Je kan dan naar de Content Manager gaan en vervolgens op de `Post` link klikken. Je krijgt dan een overzicht te zien van alle blogposts. Uiteraard is er nog geen blogpost aanwezig. Je kan een blogpost aanmaken door op de `Create an entry` knop te klikken. Je krijgt dan een formulier te zien waar je de blogpost kan aanmaken. De rich text editor heeft support voor Markdown. Als je meer wil weten over Markdown, dan kan je [hier](https://www.markdownguide.org/basic-syntax/) meer informatie vinden.

![Alt text](<Screenshot 2023-09-24 at 22.45.04.png>)

## REST API

Voor elke collection content type wordt er automatisch een REST API endpoint aangemaakt. Dit endpoint kan je gebruiken om data op te halen van de server of om data te versturen naar de server. 

| Method   | URL                             | Description                           |
| -------- | ------------------------------- | ------------------------------------- |
| `GET`    | `/api/:pluralApiId`             | [Get a list of entries](#get-entries) |
| `POST`   | `/api/:pluralApiId`             | [Create an entry](#create-an-entry)   |
| `GET`    | `/api/:pluralApiId/:documentId` | [Get an entry](#get-an-entry)         |
| `PUT`    | `/api/:pluralApiId/:documentId` | [Update an entry](#update-an-entry)   |
| `DELETE` | `/api/:pluralApiId/:documentId` | [Delete an entry](#delete-an-entry)   |

Dus in ons geval bij de blog posts:

| Method   | URL                             | Description                           |
| -------- | ------------------------------- | ------------------------------------- |
| `GET`    | `/api/posts`             | Get a list of all blog posts |
| `POST`   | `/api/posts`             | Create a new blog post   |
| `GET`    | `/api/posts/:id` | Get a specific blog post         |
| `PUT`    | `/api/posts/:id` | Update a specific blog post   |
| `DELETE` | `/api/posts/:id` | Delete a specific blog post   |

Strapi biedt een heel gamma van query parameters aan die het mogelijk maken om te filteren, sorteren en pagineren. Deze kan je vinden op de [Strapi documentatie](https://docs.strapi.io/dev-docs/api/rest/parameters).

Je kan ook de [Interactive query builder](https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder) gebruiken om de query parameters te genereren. 

## API Token

Vooraleer je gebruik kan maken van deze endpoints moet je een API Token aanmaken en aangeven wat de gebruiker van deze token allemaal mag uitvoeren. Je kan dit doen door naar de `Settings` tab te gaan en vervolgens op API tokens te klikken. Daarna klik je op `Create new API token`.

![Alt text](<Screenshot 2023-09-25 at 12.13.30.png>)

Vervolgens krijg je het settings scherm te zien van de nieuwe token. Je kan hier de volgende zaken instellen:
- Name: De naam van de token.
- Description: Een beschrijving van de token.
- Token duration: De duur van de token. Wanneer de token vervalt, dan kan je deze niet meer gebruiken. Je kan een token ook manueel deactiveren. Voor deze cursus kiezen we altijd Unlimited.
- Token type: Je kan hier kiezen tussen Read-Only, Full Access en Custom. Meestal kiezen we hier een Read-Only token als we willen voorkomen dat de applicatie data kan aanpassen. Je kan ook per content type aangeven wat de token mag doen. Dit is handig als we bijvoorbeeld een commenting systeem willen bouwen waar de gebruikers comments kunnen aanmaken, maar niet kunnen aanpassen of verwijderen. We willen uiteraard niet dat een gewone gebruiker van de blog blogposts kan aanpassen of verwijderen.

Na het aanmaken van een token krijg je de token te zien. Je kan deze nu meegeven als Bearer token in de header van je request. Nu zal je zien dat je wel data kan ophalen van de server maar niet kan aanpassen of verwijderen.

Nu zou je bijvoorbeeld met fetch data kunnen ophalen van de server. Je kan bijvoorbeeld de volgende code gebruiken om alle blogposts op te halen:

```jsx
const response = await fetch("http://localhost:1337/api/posts?populate=*", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
});

const posts = await response.json();
```

We voegen hier de `populate=*` parameter toe om de author van de blogpost op te halen. Als je dit niet doet, dan krijg je enkel de id van de author te zien. 

## Image upload

Het is mogelijk ook afbeeldingen te uploaden met strapi. By default worden deze afbeeldingen opgeslagen in een lokale folder. Omdat het niet altijd mogelijk is om afbeeldingen lokaal op te slaan, kan je ook gebruik maken van een externe service zoals Amazon S3 of Cloudinary. 

In deze cursus gaan we gebruik maken van Cloudinary. Dit is een service die het mogelijk maakt om afbeeldingen op te slaan in de cloud. Je kan een gratis account aanmaken op [Cloudinary](https://cloudinary.com/).

In het dashboard kan je de volgende informatie vinden:
- Cloud name
- API Key
- API Secret

Deze informatie heb je later nodig om de afbeeldingen te uploaden naar Cloudinary via Strapi.

### Cloudinary plugin installeren

Het eerste wat je moet doen is de Cloudinary plugin installeren. Dit doe je door het volgende commando uit te voeren:

```bash
npm install @strapi/provider-upload-cloudinary
```

Zorg ervoor dat de strapi server niet draait als je dit commando uitvoert.

Daarna moet je een `./config/plugins.js` bestand aanmaken met de volgende inhoud:

```js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  }
});
```

Deze plugin maakt gebruik van environment variabelen. Deze variabelen kan je instellen in het `.env` bestand. Je kan dit bestand aanmaken in de root van je project. Je kan de volgende variabelen toevoegen:

```bash
CLOUDINARY_NAME = cloudinary-name
CLOUDINARY_KEY = cloudinary-key
CLOUDINARY_SECRET = cloudinary-secret
```

Er moet nog een laatste stap worden uitgevoerd om de security policy van strapi aan te passen. Je moet een wijziging maken in `./config/middlewares.js`:

```js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

Zonder deze wijziging zal je een error krijgen als je een afbeelding wil uploaden.

### Blog post aanpassen

Nu kunnen we de blog post aanpassen zodat we een afbeelding kunnen toevoegen. We gaan een nieuw veld toevoegen aan het blog post content type. Dit veld noemen we `image` en is van het type `Media`. Dit is een speciaal type dat we kunnen gebruiken om afbeeldingen op te slaan.

Nu kunnen we een blog post aanmaken met een afbeelding. Als je de blog post opslaat, dan zal de afbeelding automatisch worden geüpload naar Cloudinary. Je kan dit controleren door naar de Cloudinary website te gaan. Je zal zien dat de afbeelding is geüpload naar Cloudinary.

### Environment variabelen

Omdat we de API token die we zelf hebben aangemaakt ook willen gebruiken in onze next.js applicatie, moeten we deze token opslaan in een environment variabele. Net zoals we dit hebben gedaan bij strapi moeten we ook hier een `.env` bestand aanmaken. Dit bestand moet je aanmaken in de root van je next.js project. Hier kan je een `TOKEN` variabele aanmaken en de token van strapi hierin opslaan. 

We kunnen deze dan op de volgende manier uitlezen in onze next.js applicatie:

```jsx
const token = process.env.TOKEN;
```

Let er op je kan deze variabele enkel maar gebruiken in de server code. Je kan deze niet gebruiken in de client code want deze variabele wordt niet meegestuurd naar de client. Dus je kan deze enkel in de `getStaticProps`, `getServerSideProps` functies gebruiken.

### Markdown

Alle rich text velden worden opgeslagen in markdown. Dit is een speciale syntax die je kan gebruiken om tekst op te maken. Je kan bijvoorbeeld tekst vet maken, tekst cursief maken, lijsten maken, afbeeldingen toevoegen, enzovoort.

Hier een voorbeeld van een aantal features van markdown:

```markdown
# Heading 1
## Heading 2
### Heading 3
**Bold text**
*Italic text*
- List item 1
- List item 2
- List item 3

![Alt text](image.png)
```

We zijn van plan om de inhoud van de blogpost te tonen op de website. We moeten dus de markdown omzetten naar HTML. We gaan dit doen met de `next-mdx-remote` package. Deze package zorgt ervoor dat we markdown kunnen omzetten naar HTML.

```bash
npm install next-mdx-remote
```

Nu kan je de serialize functie importeren in je code:

```jsx
import { serialize } from 'next-mdx-remote';
```

Je kan deze functie gebruiken om markdown om te zetten naar HTML. Je kan de volgende code gebruiken om de markdown om te zetten naar HTML:

```jsx
const mdxSource = await serialize(post.attributes.content);
```

deze kan je in de getStaticProps functie plaatsen. Je kan dan de mdxSource doorgeven aan de props van de pagina. Je kan dan de volgende code gebruiken om de HTML te tonen:

```jsx
<MDXRemote {...mdxSource} />
```

Dan bekom je iets zoals dit:

```jsx
export async function getStaticProps() {
  const response = await fetch("http://localhost:1337/api/posts?populate=*", {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });

  const posts : PostResponse = await response.json();

  const serializedPosts: PostShort[] = await Promise.all(
    posts.data.map(async (post) => {
      const mdxSource = await serialize(post.attributes.content);
      return {
        cover: post.attributes.cover.data.attributes.formats.large.url,
        title: post.attributes.title,
        name: post.attributes.author.data.attributes.firstname + " " + post.attributes.author.data.attributes.lastname,
        content: mdxSource,
      };
    })
  );

  return {
    props: {
      posts: serializedPosts,
    },
  };
}
```

De `PostResponse` interface kan je genereren met behulp van [Quicktype](https://app.quicktype.io/) aan de hand van de JSON data die je krijgt van de server. En de `PostShort` interface kan je als volgt definiëren:

```jsx
export interface PostShort {
    title: string;
    content: MDXRemoteSerializeResult;
    cover: string;
    name: string;
}
```

Dit is een verkorte versie van de Post interface die we later gaan gebruiken. Deze interface bevat enkel de velden die we nodig hebben om de blog post te tonen op de website.

In je blog post component kan je dan de volgende code gebruiken om de HTML te tonen:

```jsx
<MDXRemote {...post.content} />
```

Je kan het uiterlijk per markdown element aanpassen. Je kan bijvoorbeeld de volgende code gebruiken om de headings een andere stijl te geven:

```jsx
<MDXRemote {...post.content} components={{
    h1: ({children}) => (<h1 className="text-xl">{children}</h1>),
    h2: ({children}) => (<h2 className="text-l">{children}</h2>),
    h3: ({children}) => (<h2 className="text-m">{children}</h2>),
    p: ({children}) => (<p className="text-m mt-4">{children}</p>)
}} />
```