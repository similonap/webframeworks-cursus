---
sidebar_position: 12
---

# Client-side routering

## Twee soorten routering

Het proces waarbij de **resource** die bij een uniform resource locator (**URL**) hoort wordt opgezocht, heet **routering**. Vanuit het perspectief van de eindgebruiker is routering dus een vertaling van URL's in de browserbalk naar webpagina's. Er zijn twee vormen van routering, beide met hun eigen voor- en nadelen.

### Server-side routering

De oudste (maar daarom niet "verouderde") vorm van routering is **server-side routering**. Hierbij wordt een **HTTP request** naar de server gestuurd, met daarin de te raadplegen URL. **Het is dan de taak van de server deze URL te gebruiken om een bepaalde resource op te zoeken.** Voor deze vorm van routering is niet noodzakelijk een specifiek framework vereist. Bovendien downloadt de gebruiker enkel de pagina's die hij/zij daadwerkelijk wil zien. Daar tegenover staat dat routering enkel mogelijk is zo lang de gebruiker verbonden blijft met het Internet. Ook kost het tijd om telkens een request te versturen en te wachten op een response.

### Routering in single-page applicaties

Een nieuwere vorm van routering, die we aantreffen in single-page applicaties, is **client-side routering**. Bij gebruik van client-side routering beschikt de client vanaf het opstarten van de applicatie over meerdere (applicatie)pagina's. **Gebruik van een link binnen de applicatie zorgt er dan niet voor dat er opnieuw een HTTP request plaatsvindt.** In plaats daarvan wordt door de applicatie zelf bepaald welke (applicatie)pagina moet worden getoond. Hierbij wordt géén nieuw HTML-bestand gedownload.

Omdat client-side routering geen extra netwerkverkeer vereist, kan deze vorm ook toegepast worden wanneer de gebruiker niet verbonden is met het Internet. Zo lang de opgevraagde pagina's al in de applicatie aanwezig zijn, is er geen probleem. Bovendien kan deze vorm van routering responsiever aanvoelen, omdat het tijd kost een request te versturen en op een response te wachten.

## React router

Om client-side routering toe te passen, moet de app zelf over de nodige logica beschikken om URL's om te zetten naar pagina's. Deze logica hoef je als applicatieprogrammeur zelf niet te verzinnen. In plaats daarvan kan je gebruik maken van de bibliotheek **React Router**. Deze ondersteunt alle gebruikelijke manieren om URL's te vertalen naar pagina's.

### Installatie

Omdat React Router een externe bibliotheek is, moet je deze eerst installeren. Hiervoor gebruik je in de root directory van je React project volgend commando:

```
npm  install --save react-router-dom@6
```

Ondersteuning voor TypeScript is in deze versie ingebouwd, dus de types hoef je niet apart te installeren.

Op het moment van schrijven is de recentste versie van React Router versie 6.3.0. Nieuwere versies die ook beginnen met het cijfer 6 zouden zonder problemen moeten werken. Daarom eindigt bovenstaand commando op `@6`. 

:::warning
Als versie 7 of hoger verschenen is op het moment dat je deze leerstof raadpleegt, moet je toch versie 6 gebruiken.
:::

## Pagina's als componenten

Wanneer we doorheen een applicatie navigeren, blijft de globale layout typisch stabiel, maar wijzigt het gedeelte van de applicatie dat de eigenlijke content bevat. Daarom zorgt React Router ervoor dat het gebruik van een link één bepaald deel van de applicatie rendert. 

Dit gebeurt door per pagina een React component te voorzien. Op elk moment wordt exact één van deze components getoond op een vaste plaats in de globale structuur.

Om React Router toe te passen in een webapplicatie, zet je het element **`BrowserRouter`** rond alle andere componenten die navigatielinks kunnen bevatten. Om één actieve paginacomponent te tonen, zet je ergens in je paginacode een **`Routes`** component. Deze component zal in zijn geheel vervangen worden door de actieve pagina. In deze component staan ook **`Route`** componenten. Deze bevatten een **`path`** property (de URL waarop ze terug te vinden zijn) en een **`element`** property (de component die overeenstemt met de pagina). Om te routeren naar een bepaalde URL, klikt de gebruiker op een **`Link`** component. Deze componenten beschikken over een attribuut **`to`** dat overeenstemt met een routeerbaar pad. Ze mogen afstammen van de `Routes` component, maar ze mogen er ook buiten vallen.

```typescript codesandbox={"template": "react-router", "filename": "src/App.tsx"}
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const HomePage = () => {
    return (<>
        Welcome to the home page!
      </>);
}

const HelloWorld = () => {
    return (
        <div>
            <p>Hello World</p>
        </div>
    );
}

const GoodbyeWorld = () => {
    return (
        <div>
            <p>Goodbye World</p>
        </div>
    );
}

const App = () => {
    return (
        <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="hello">Hello</Link></li>
                <li><Link to="goodbye">Goodbye</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="hello" element={<HelloWorld />} />
            <Route path="goodbye" element={<GoodbyeWorld />}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;
```

:::note
In onze voorbeelden van de cursus plaatsen we al onze componenten in 1 bestand. In de oefeningen dien je altijd gebruik te maken van aparte files per pagina component.
:::

## Routes nesten

Webapplicaties en hun routes zijn vaak hiërarchisch verdeeld. Zo kan het zijn dat `mijnwebsite.com` leidt naar je website en dat alle URL's die te maken hebben met nieuwsartikels beginnen met `mijnwebsite.com/news`. Bijvoorbeeld `mijnwebsite.com/news/binnenland` en `mijnwebsite.com/news/buitenland`. Delen van de website die hier niet mee te maken hebben, beginnen dan anders, bijvoorbeeld `mijnwebsite.com/contact`.

Routes die dichter bij elkaar liggen, zullen meer inhoud gemeen hebben dan routes die verder uiteen liggen. Bijvoorbeeld binnenlands nieuws en buitenlands nieuws zullen een gelijkaardige layout hebben, maar zullen er misschien volledig anders uitzien dan de pagina met contactinformatie.

React Router ondersteunt deze conventie door middel van geneste routes. Dit zijn routes die voortbouwen op algemenere routes. We kunnen dit bijvoorbeeld gebruiken om dezelfde navigatiestructuur te bewaren over verwante pagina's heen.

Dit vereist een aantal zaken:

1. Een component met de globale structuur die we over meerdere pagina's willen gebruiken. Deze component moet zelf een `<Outlet />` renderen. Dit is een plaatshouder voor de meer specifieke content.
2. Een route naar deze component met de globale structuur, met een `path` en met als `element` de component waarvan sprake in puntje 1.
3. Bijkomende `<Route>` componenten , genest in de `<Route>` component waarvan sprake in puntje 2. Hun `element` property bevat de component die de plaats van de `<Outlet />` moet innemen. Hun `path` wordt aan dat van de route in puntje 2 toegevoegd.
    
```typescript codesandbox={"template": "react-router", "filename": "src/App.tsx"}
//hide-start
import { Outlet, BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const HomePage = () => {
    return (<>
        Welcome to the home page!
      </>);
}

const HelloWorld = () => {
    return (
        <div>
            <p>Hello World</p>
        </div>
    );
}

const GoodbyeWorld = () => {
    return (
        <div>
            <p>Goodbye World</p>
        </div>
    );
}
//hide-end
const SubPages = () => {
    return (
        <div>
            <h1>Sub Pages</h1>
            <Outlet/>
        </div>
    )
}

const ContactUs = () => {
    return (
        <div>
            <p>Contact Us</p>
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Sub</li>
                <ul>
                    <li><Link to="sub/hello">Hello</Link></li>
                    <li><Link to="sub/goodbye">Goodbye</Link></li>
                </ul>
                <li><Link to="contact">Contact Us</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="" element={<HomePage />}/>
            <Route path="contact" element={<ContactUs/>}/>
            <Route path="sub" element={<SubPages />}>
                <Route path="hello" element={<HelloWorld />} />
                <Route path="goodbye" element={<GoodbyeWorld />}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}
//hide-start
export default App;
//hide-end
```

Het is ook mogelijk routes te maken die meer dan twee niveaus diep gaan. Dit vereist alleen verdere nesting en meer `<Outlet />` componenten.

## Ontbrekende pagina's afhandelen

Als de gebruiker een URL gebruikt die niet naar een geldige pagina leidt, wordt er een lege pagina getoond. Dat is niet gebruiksvriendelijk. Het is beter een pagina te voorzien die de gebruiker op de hoogte stelt dat het ingevoerde adres niet bestaat. Dit kan je doen door een route te voorzien met een **wildcard** te voorzien. Als je dan een component genaamd `PageNotFound` hebt, kan je het volgende doen:

```typescript
<Route path="*" element={<PageNotFound />} />
```

Omdat deze route zo algemeen is, zal ze enkel matchen wanneer er geen betere match gevonden wordt.

## URL parameters

Tot nu toe hebben we altijd routes gebruikt die exacte paden voorstellen. Soms wil je ook aan de hand van de url bepaalde parameters meegeven. Dat kan bijvoorbeeld een ID zijn: een uniek stukje informatie dat verwijst naar één specifieke user, één bestelling, één event op de kalender,... Als deze zaken voortdurend worden toegevoegd aan het systeem, is het niet mogelijk een route per user, per bestelling of per event te voorzien. Het is echter wel mogelijk een URL zoals `/detail/:id` toe te laten waarbij de `:id` een **parameter** is: een algemene plaatshouder in de URL waaraan een concrete waarde gegeven kan worden. Zo kan bijvoorbeeld `/detail/1` of `/detail/2` gebruikt worden, waarbij in beide gevallen dezelfde component wordt gerenderd, maar met andere data.

Om dit te laten werken, moet de applicatie de precieze waarde kunnen opvragen die de parameter heeft gekregen. Dit kan door middel van de **`useParams`** hook. Deze staat je toe de URL parameters op te vragen die gebruikt zijn om naar de huidige pagina te navigeren.

```typescript {2,18} codesandbox={"template": "react-router", "filename": "src/App.tsx"}
//hide-start
import { useParams, BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const HomePage = () => {
    return (<>
        Welcome to the home page!
        <ul>
        {Array.from(Array(10).keys()).map((i) => {
            return <li key={`detail${i}`}><Link to={`detail/${i}`}>Detail {i}</Link></li>
        })}
        </ul>
      </>);
}
//hide-end
const DetailPage = () => {
    let { id } = useParams();
    return (
        <>
            <h1>
                Detail of {id}
            </h1>
            <Link to="/">Back</Link>
        </>
    );
}

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/detail/:id" element={<DetailPage />}/>
        </Routes>
        </BrowserRouter>
    );
}
//hide-start
export default App;
//hide-end
```

Het object dat je terugkrijgt van `useParams` staat je toe een waarde op te zoeken voor om het even welke key. Er treedt dus geen compilatiefout op als je in TypeScript een parameter probeert te raadplegen die niet voorzien is. Je krijgt gewoon `undefined` terug.

# Meer weten
- https://reactrouter.com/docs/en/v6