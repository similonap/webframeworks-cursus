# Next.js

Ondertussen hebben we een heel groot deel van de basis van React.js gezien. We hebben gezien hoe we componenten kunnen maken, hoe we data kunnen doorgeven aan componenten en hoe we data kunnen ophalen van een API. We hebben ook gezien dat React.js in principe enkel een library is om componenten te maken en deze client side te renderen. 

Dit heeft een aantal nadelen. Zo is de pagina niet SEO vriendelijk en is de eerste laadtijd van de pagina heel traag, want de gebruiker moet eerst alle JavaScript files downloaden en dan pas kan de pagina getoond worden. Daarnaast ben je voor bepaalde zaken afhankelijk van externe libraries om bepaalde zaken te doen zoals routing. Daarom zijn er verschillende frameworks ontwikkeld die gebruik maken van React om een full stack framework aan te bieden die deze problemen oplost. Een van deze frameworks is Next.js (ontwikkeld door Vercel). Er zijn nog andere frameworks zoals Gatsby.js die ook gebruik maken van React, maar in deze cursus zullen we enkel Next.js bekijken.

## Client-side rendering (CSR)
Bij client-side rendering wordt de meeste logica en rendering van de inhoud in de browser van de gebruiker uitgevoerd. Wanneer een gebruiker een webpagina bezoekt, stuurt de server een lege of minimale HTML-pagina naar de browser, samen met de benodigde JavaScript- en CSS-bestanden. Vervolgens wordt het JavaScript in de browser uitgevoerd en haalt het de benodigde gegevens op van een API of een andere gegevensbron. Nadat de gegevens zijn opgehaald, wordt de inhoud van de webpagina dynamisch gegenereerd en weergegeven in de browser. Dit zorgt voor een soepele gebruikerservaring, maar kan leiden tot langere laadtijden, vooral bij langzame netwerkverbindingen of complexe webpagina's.

## Server-side rendering (SSR)
Bij server-side rendering daarentegen wordt het grootste deel van de rendering op de server uitgevoerd voordat de HTML naar de browser wordt verzonden. Wanneer een gebruiker een pagina aanvraagt, genereert de server de volledige HTML-pagina, inclusief de inhoud van de pagina, op basis van de gegevens van de server. Deze volledige HTML-pagina wordt vervolgens naar de browser gestuurd. Zodra de browser de HTML heeft ontvangen, kan deze de pagina direct weergeven zonder te wachten op JavaScript om gegevens op te halen en de rendering uit te voeren. Dit kan leiden tot snellere laadtijden en betere prestaties, vooral bij langzame verbindingen of op mobiele apparaten.

## Voordelen van SSR:

- Betere SEO: zoekmachines kunnen de volledige HTML-pagina crawlen en indexeren, wat de SEO van de website ten goede komt.
- Betere prestaties: de browser hoeft niet te wachten op JavaScript om de pagina te renderen, wat resulteert in snellere laadtijden en betere prestaties.
- Betere toegankelijkheid: de pagina kan worden weergegeven in browsers die JavaScript niet ondersteunen of hebben uitgeschakeld.

## Nadelen van SSR:

- Langere ontwikkeltijd: het opzetten van een SSR-applicatie kan complexer zijn dan een CSR-applicatie.
- Minder interactief: de pagina kan niet zo interactief zijn als een CSR-applicatie, omdat de browser moet wachten op de server om de pagina te renderen.
- Kosten: het uitvoeren van de rendering op de server kan meer server gebruik vereisen, wat kan leiden tot hogere kosten. Bij CSR kan de volledige applicatie in principe op een goedkope CDN worden geplaatst. Bij SSR moet je een server hebben die de rendering doet.

## Verschil express.js en next.js

Je vraagt je waarschijnlijk af. Ja maar was client side rendering dan geen evolutie op server side rendering. Server side rendering deden we toch al in principe toen we vroeger nog PHP gebruikten of express.js in combinatie met een templating engine zoals ejs. Dat klopt, maar er is een groot verschil tussen express.js en next.js. Bij express.js wordt de pagina volledig op de server gerenderd en dan naar de client gestuurd. Bij next.js wordt de pagina eerst op de server gerenderd en dan naar de client gestuurd, maar daarna wordt de pagina ook nog eens client side gerenderd. Dit zorgt ervoor dat de pagina veel sneller getoond kan worden aan de gebruiker. Het is een combinatie van server side rendering en client side rendering. Zo kan bijvoorbeeld het uitvoeren van een API call of het uitvoeren van een zware berekening op de server gebeuren en kan de rest van de pagina client side gerenderd worden.