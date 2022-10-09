---
sidebar_position: 1
---

# Inleiding

# Web Frameworks

In principe kan je met HTML, CSS en JavaScript elke website die je maar kan bedenken laten werken. Dat geldt zowel voor de frontend als de backend. In de praktijk is dit voor complexe applicaties niet haalbaar. Een fontend met heel veel onderling afhankelijke elementen scripten met alleen JavaScript is onnoemelijk complex. Een backend zelf HTTP requests volledig laten ontleden is dat ook.

Frameworks maken het wel praktisch haalbaar complexe applicaties te schrijven. Het zijn geen op zichzelf staande programma's. Het zijn softwarepakketten waar je eigen code aan toevoegt om tot een resultaat te komen. Meestal zijn ze geschreven in dezelfde programmeertaal waarin jij je eigen code schrijft, maar doen ze veel zwaarder werk. De broncode voor React.js is bijvoorbeeld véél complexer dan om het even welke code die wij hier zullen schrijven, maar React.js op zich is geen applicatie. Pas wanneer je zelf code toevoegt, verkrijg je een applicatie.

Web frameworks dienen om het schrijven van websites eenvoudiger te maken. Er bestaan zowel frontend web frameworks (React.js, Angular.js, Vue.js,...) als backend web frameworks (Express.js, Backbone.js,...).


# Single Page Applications

In deze cursus gaan we voornamelijk kijken naar het meest gebruikte Single Page Applications framework namelijk React.js (ontwikkeld door Meta). Er zijn nog vele andere SPA-frameworks zoals Angular (door Google) en Vue.js. Deze frameworks laten het toe om eenvoudig uitgebreidere applicaties te maken dan met gewone JavaScript en algemene frameworks zoals jQuery.

![React Logo](images/react.png)

In het verleden werden pagina's nog volledig opgebouwd op de server zelf. Zo had je bijvoorbeeld PHP of node.js in combinatie met Express. In deze traditionele aanpak bezocht de gebruiker een URL om een pagina in te laden en werd het opbouwen van de pagina voornamelijk op de server zelf gedaan. Voor elke pagina die de gebruiker wou bezoeken, was dus ook een nieuwe GET request nodig. JavaScript werd toen voornamelijk gebruikt voor simpele animaties en interacties of geavanceerde styling die niet met CSS alleen te doen was. Hiervoor was de JavaScript library jQuery uiterst geschikt.

![React Logo](images/lifecycle.png)

Bij single page applicaties verloopt de interactie tussen client en server heel anders. De focus wordt verlegd naar de client. De gebruiker bezoekt maar 1 URL en krijgt maar 1 HTML-bestand terug met bijbehorende JavaScript files. Nadat deze allemaal ingeladen zijn wordt de eerste "applicatiepagina" getoond aan de gebruiker. Deze toont hetzelfde soort info dat in de traditionele aanpak op één HTML-pagina zou staan, maar ze stemt niet meer overeen met een HTML-bestand. De naam single page application wijst er dus op dat er maar één HTML-bestand is. Hij betekent niet dat je website niet opgedeeld kan zijn in applicatiepagina's die je via links bereikt.

Merk op dat wij hier een onderscheid maken tussen "HTML-pagina's" en "applicatiepagina's". Dat wordt niet overal gedaan, maar normaal is duidelijk uit de context wat bedoeld wordt.
Veranderlijke data wordt niet meteen gedownload. Deze worden volledig via asynchrone API calls (ook "AJAX calls" genoemd) vanuit de client opgevraagd. Als je bijvoorbeeld een lijst van producten zou willen tonen vanuit je SPA, zal de paginastructuur meteen verschijnen, maar zullen de producten zelf iets later inladen. Dit komt omdat de client een API call moet doen om te vragen welke producten er precies zijn.