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
- content: Rich Text
- author: Relation (met het User content type)

De keuze van Rich Text is belangrijk. Dit betekent dat we een rich text editor kunnen gebruiken om de inhoud van de blogpost te schrijven. Dit is een editor die je kan gebruiken om tekst op te maken. Je kan bijvoorbeeld tekst vet maken, tekst cursief maken, lijsten maken, afbeeldingen toevoegen, enzovoort.

Voor de author veld moeten we een relatie leggen met het User content type. Dit wil zeggen dat we een gebruiker kunnen kiezen als auteur van de blogpost. We kiezen hiervoor de `Many to one` relatie. Dit wil zeggen dat een gebruiker meerdere blogposts kan schrijven, maar dat een blogpost maar 1 auteur kan hebben.

![Alt text](<Screenshot 2023-09-24 at 22.24.14.png>)

Vervolgens moet je op de `Save` knop klikken om het content type op te slaan. Na het opslaan wordt de server automatisch herstart. Het kan zijn dat je de pagina moet herladen om de wijzigingen te zien.

Nu kunnen we effectief een blog post aanmaken. Je kan dan naar de Content Manager gaan en vervolgens op de `Post` link klikken. Je krijgt dan een overzicht te zien van alle blogposts. Uiteraard is er nog geen blogpost aanwezig. Je kan een blogpost aanmaken door op de `Create an entry` knop te klikken. Je krijgt dan een formulier te zien waar je de blogpost kan aanmaken. De rich text editor heeft support voor Markdown. Als je meer wil weten over Markdown, dan kan je [hier](https://www.markdownguide.org/basic-syntax/) meer informatie vinden.

![Alt text](<Screenshot 2023-09-24 at 22.45.04.png>)

### REST API

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



### API Token

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
const response = await fetch("http://localhost:1337/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
});

const posts = await response.json();
```

