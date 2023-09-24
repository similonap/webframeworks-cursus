# Headless CMS

## Content Management Systeem

Iedereen kent een content management systeem zoals bijvoorbeeld Wordpress. Een content management systeem is software waarmee je inhoud/content gemakkelijk kunt maken, beheren en bijwerken zonder dat je hiervoor technische kennis nodig hebt. Het is een systeem dat je helpt om je website te beheren. Je kan er pagina's mee aanmaken, blogposts mee schrijven, afbeeldingen mee uploaden, enzovoort.

Een CMS zoals Wordpress wordt wel eens een monolitische CMS genoemd. Dit wil zeggen dat het een applicatie is die alles bevat. Het bevat een database, een back-end en een front-end. Dit heeft als voordeel dat je alles hebt wat je nodig hebt om een website te maken. Het nadeel is dat je niet veel flexibiliteit hebt. Je kan bijvoorbeeld niet zelf kiezen welke database je wil gebruiken. Je kan ook niet zelf kiezen welke programmeertaal je wil gebruiken voor de back-end. Je bent dus beperkt tot de mogelijkheden die het CMS aanbiedt.

## Headless CMS

Zoals eerder besproken bestaat een monolitische CMS uit twee delen: 
- de front-end;
- de back-end;

Een headless CMS is een CMS waarbij de front-end en de back-end van elkaar gescheiden zijn. Je kan dus zelf kiezen welke front-end je gebruikt en welke back-end je gebruikt. Je kan bijvoorbeeld gebruik maken van een headless CMS om de inhoud van je website te beheren en je kan dan zelf kiezen welke front-end je gebruikt om deze inhoud te tonen aan de gebruiker. Je kan dus perfect een React applicatie maken die gebruik maakt van een headless CMS om de inhoud te beheren. We maken dus geen gebruik meer van de ingebouwde front-end van het CMS en gaan dus zelf iets bouwen.

In het begin werd er gebruik gemaakt van bestaande CMS'en zoals Wordpress. Deze CMS'en werden dan omgebouwd naar een headless CMS. Dit zorgde ervoor dat je de inhoud van je website kon beheren met een CMS, maar dat je toch zelf kon kiezen welke front-end je gebruikte. In de loop der jaren zijn er ook headless CMS'en ontstaan die specifiek gemaakt zijn om te gebruiken als headless CMS. Deze CMS'en zijn vaak eenvoudiger in gebruik en bieden vaak meer mogelijkheden aan om de inhoud van je website te beheren.

### Voordelen

De voordelen van een headless CMS zijn als volgt:
- Flexibiliteit en aanpasbaarheid: Headless CMS maakt onafhankelijke frontend-ontwikkeling mogelijk.
- Multichannel en multiplatform: Content kan eenvoudig op verschillende platforms worden gebruikt.
- Betere prestaties: Verbeterde laadtijden en schaalbaarheid.
- Technologische onafhankelijkheid: Keuzevrijheid voor frontend-technologieën.
- Verbeterde beveiliging: Scheiding van frontend en backend verbetert beveiliging.
- Gemakkelijke schaalbaarheid: Backend en frontend kunnen onafhankelijk worden geschaald.
- Toekomstbestendigheid: Kan zich aanpassen aan toekomstige technologische veranderingen en trends.

## Strapi

In deze cursus gaan we gebruik maken van [Strapi](https://strapi.io/). Dit is een headless CMS dat specifiek gemaakt is om te gebruiken als headless CMS. Het is open source en gratis te gebruiken. Het is ook heel eenvoudig om te gebruiken. Het is volledig geschreven in JavaScript en maakt gebruik van Node.js. Je kan het dus gemakkelijk installeren met behulp van npm. 

Strapi applicaties kunnen op een server worden geïnstalleerd of lokaal worden uitgevoerd. We gaan eerst zien hoe je een strapi applicatie kan installeren op je lokale machine. Vervolgens gaan we deze applicatie deployen naar een server.

### Strapi installeren

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

### Content types

Als je bent ingelogd in de applicatie, dan kan je content types aanmaken. Een content type is een soort van model dat je kan gebruiken om data op te slaan in de database. Je kan bijvoorbeeld een content type aanmaken voor blogposts. Dit content type bevat dan een aantal velden zoals bijvoorbeeld een titel, een inhoud, een auteur, een datum, enzovoort. 

Er is altijd een content type aanwezig met de naam `User`. Dit content type bevat een aantal velden zoals bijvoorbeeld een gebruikersnaam, een email, een wachtwoord, enzovoort. Dit content type wordt gebruikt om gebruikers aan te maken die kunnen inloggen in de applicatie.

Er zijn 3 verschillende soorten content types:
- Collection types (bijvoorbeeld blogposts). Dit zijn content types die meerdere items bevatten. Je kan bijvoorbeeld meerdere blogposts aanmaken.
- Single types (bijvoorbeeld een homepage). Dit zijn content types die maar 1 item bevatten. 
- Component types (bijvoorbeeld een header). Dit zijn content types die je kan gebruiken in andere content types. Als je een bepaald stuk van een content type wil hergebruiken, dan kan je dit stuk in een component type plaatsen en dit component type gebruiken in andere content types.

#### Voorbeeld blog posts

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

#### REST API

Voor elke collection content type wordt er automatisch een REST API endpoint aangemaakt. Dit endpoint kan je gebruiken om data op te halen van de server of om data te versturen naar de server. 

