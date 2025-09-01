---
sidebar_position: 10
---

# React Router

## Twee soorten routering

Het proces waarbij de **resource** die bij een uniform resource locator (**URL**) hoort wordt opgezocht, heet **routering**. Vanuit het perspectief van de eindgebruiker is routering dus een vertaling van URL's in de browserbalk naar webpagina's. Er zijn twee vormen van routering, beide met hun eigen voor- en nadelen.

### Server-side routering

De oudste (maar daarom niet "verouderde") vorm van routering is **server-side routering**. Hierbij wordt een **HTTP request** naar de server gestuurd, met daarin de te raadplegen URL. **Het is dan de taak van de server deze URL te gebruiken om een bepaalde resource op te zoeken.** Voor deze vorm van routering is niet noodzakelijk een specifiek framework vereist. Bovendien downloadt de gebruiker enkel de pagina's die hij/zij daadwerkelijk wil zien. Daar tegenover staat dat routering enkel mogelijk is zo lang de gebruiker verbonden blijft met het Internet. Ook kost het tijd om telkens een request te versturen en te wachten op een response.

### Routering in single-page applicaties

Een nieuwere vorm van routering, die we aantreffen in single-page applicaties, is **client-side routering**. Bij gebruik van client-side routering beschikt de client vanaf het opstarten van de applicatie over meerdere (applicatie)pagina's. **Gebruik van een link binnen de applicatie zorgt er dan niet voor dat er opnieuw een HTTP request plaatsvindt.** In plaats daarvan wordt door de applicatie zelf bepaald welke (applicatie)pagina moet worden getoond. Hierbij wordt géén nieuw HTML-bestand gedownload.

Omdat client-side routering geen extra netwerkverkeer vereist, kan deze vorm ook toegepast worden wanneer de gebruiker niet verbonden is met het Internet. Zo lang de opgevraagde pagina's al in de applicatie aanwezig zijn, is er geen probleem. Bovendien kan deze vorm van routering responsiever aanvoelen, omdat het tijd kost een request te versturen en op een response te wachten.

## React router

Om client-side routering toe te passen, moet de app zelf over de nodige logica beschikken om URL's om te zetten naar pagina's. Deze logica hoef je als applicatieprogrammeur zelf niet te verzinnen. In plaats daarvan kan je gebruik maken van de bibliotheek **React Router**. Deze ondersteunt alle gebruikelijke manieren om URL's te vertalen naar pagina's.

We gebruiken de laatste versie van React Router (versie 7). Deze versie heeft een aantal grote wijzigingen ondergaan ten opzichte van de vorige versies. Er zijn namelijk nieuwe manieren van definiëren van routes toegevoegd. Wij gebruiken in deze cursus de **declaratieve manier** van routes definiëren. Dus als je documentatie opzoekt, let er dan op dat je de juiste versie van de documentatie bekijkt.

### Installatie

Omdat React Router een externe bibliotheek is, moet je deze eerst installeren. Hiervoor gebruik je in de root directory van je React project volgend commando:

```
npm  install --save react-router-dom@7
```

Ondersteuning voor TypeScript is in deze versie ingebouwd, dus de types hoef je niet apart te installeren.

Op het moment van schrijven is de recentste versie van React Router versie 7.8.2. Nieuwere versies die ook beginnen met het cijfer 7 zouden zonder problemen moeten werken. Daarom eindigt bovenstaand commando op `@7`. 

:::warning
Als versie 8 of hoger verschenen is op het moment dat je deze leerstof raadpleegt, moet je toch versie 7 gebruiken.
:::

### Voorbeeld

Om te zien hoe je React Router gebruikt, bekijken we een voorbeeld. Dit voorbeeld heeft een aantal pagina's en een gedeelde layout die op elke pagina getoond wordt. 

```typescript codesandbox={"template": "react-router", "filename": "src/App.tsx"}
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";
import styles from "./App.module.css";

const Root = () => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>Header</div>
            <div className={styles.nav}>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="page1">Page 1</NavLink>
                <NavLink to="page2">Page 2</NavLink>
            </div>
            <div className={styles.content}>
                <Outlet/>
            </div>
            <div className={styles.footer}>
                Footer
            </div>
        </div>
    );
}

const Home = () => {
    return (
        <div>This is the home page!</div>
    );
}

const Page1 = () => {
    return (
        <div>Page 1</div>
    );
}

const Page2 = () => {
    return (
        <div>Page 2</div>
    );
}


const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "",
                    element: <Home/>
                },
                {
                    path: "page1",
                    element: <Page1/>
                },
                {
                    path: "page2",
                    element: <Page2/>
                }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;  
```

Het eerst ding dat we moeten doen is een Browser Router aanmaken en onze eerste route configureren. Dit zal client-side routering mogelijk maken voor onze webapplicatie.

Dit doen we aan de hand van de `createBrowserRouter` functie. Deze functie heeft als argument een array van routes. Deze routes zijn van het type `RouteObject`. Deze `RouteObject` heeft een aantal properties:
- `path`: de URL waarop de route moet reageren
- `element`: het element dat moet worden gerenderd wanneer de route wordt geactiveerd
- `children`: een array van `RouteObject` die de subroutes van de huidige route bevat
- ...

Het object dat teruggegeven wordt door de `createBrowserRouter` functie moeten we meegeven aan de `RouterProvider` component. 

Als je de code bekijkt, zie je dat we een `Root` component hebben gemaakt. Deze component bevat de basis structuur van onze webapplicatie. Deze structuur bestaat uit een header, een navigatiebalk, een content gedeelte en een footer. Deze component bevat ook de `NavLink` componenten. Deze componenten zorgen ervoor dat de gebruiker kan navigeren tussen de verschillende pagina's van onze webapplicatie.

Het `Root` component bevat ook een `Outlet` component. Dit is een component die de inhoud van de pagina zal renderen van de child route die geactiveerd is. Surft de gebruiker naar de "/" route, dan zal de `Home` component gerenderd worden. Surft de gebruiker naar de "/page1" route, dan zal de `Page1` component gerenderd worden, enzovoort.

### Links

Er zijn twee verschillende manieren om links te maken in React Router. De eerste manier is door gebruik te maken van de `Link` component. Deze component heeft als enige property de `to` property. Deze property bevat de URL waar de gebruiker naar toe moet navigeren wanneer hij op de link klikt. 

```typescript
<Link to="/page1">Page 1</Link>
```

Een tweede manier om links te maken is door gebruik te maken van de `NavLink` component. Deze component heeft dezelfde properties als de `Link` component. Het voordeel hier is dat je de link kan stylen aan de hand van CSS. Er wordt altijd automatisch een `active` class toegevoegd aan de link wanneer de link geactiveerd is. Je kan die class gebruiken om de link te stylen.

```css
.active {
    color: red;
}
```

Je kan ook een functie meegeven aan de `className` property. Deze functie bevat een object met een `isActive` property. Deze property bevat een boolean die aangeeft of de link geactiveerd is of niet. 

```typescript
<NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/">Home</NavLink>
```

### Ontbrekende pagina's afhandelen

Als de gebruiker een URL gebruikt die niet naar een geldige pagina leidt, wordt er een algemene error pagina. Dat is niet gebruiksvriendelijk. Het is beter een pagina te voorzien die de gebruiker op de hoogte stelt dat het ingevoerde adres niet bestaat. Dit kan je doen door een route te voorzien met een **wildcard** te voorzien. Als je dan een component genaamd `PageNotFound` hebt, kan je de volgende route toevoegen:

```typescript
{
    path: "*",
    element: <PageNotFound/>
}
```

Omdat deze route zo algemeen is, zal ze enkel matchen wanneer er geen betere match gevonden wordt.

### URL parameters

Tot nu toe hebben we altijd routes gebruikt die exacte paden voorstellen. Soms wil je ook aan de hand van de url bepaalde parameters meegeven. Dat kan bijvoorbeeld een ID zijn: een uniek stukje informatie dat verwijst naar één specifieke user, één bestelling, één event op de kalender,... Als deze zaken voortdurend worden toegevoegd aan het systeem, is het niet mogelijk een route per user, per bestelling of per event te voorzien. Het is echter wel mogelijk een URL zoals `/detail/:id` toe te laten waarbij de `:id` een **parameter** is: een algemene plaatshouder in de URL waaraan een concrete waarde gegeven kan worden. Zo kan bijvoorbeeld `/detail/1` of `/detail/2` gebruikt worden, waarbij in beide gevallen dezelfde component wordt gerenderd, maar met andere data.

Om dit te laten werken, moet de applicatie de precieze waarde kunnen opvragen die de parameter heeft gekregen. Dit kan door middel van de **`useParams`** hook. Deze staat je toe de URL parameters op te vragen die gebruikt zijn om naar de huidige pagina te navigeren.

```typescript codesandbox={"template": "react-router", "filename": "src/App.tsx"}
import { useParams,  Outlet, createBrowserRouter, RouterProvider, Route, NavLink,Link } from "react-router-dom";
import "./App.css";
//hide-start
const Root = () => {
    return (
        <div className="container">
            <div className="head">Header</div>
            <div className="nav">
                <NavLink to="/" >Home</NavLink>
            </div>
            <div className="content">
                <Outlet/>
            </div>
            <div className="footer">
                Footer
            </div>
        </div>
    );
}
//hide-end
const Home = () => {
    return (
        <div>
            <ul>
                <li><Link to="/detail/1">Detail 1</Link></li>
                <li><Link to="/detail/2">Detail 2</Link></li>
                <li><Link to="/detail/3">Detail 3</Link></li>
            </ul>
        </div>
    );
}

const Detail = () => {
    const { id } = useParams();

    return (
        <div>Detail {id}</div>
    );
}


const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "",
                    element: <Home/>
                },
                {
                    path: "detail/:id",
                    element: <Detail/>
                }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App; 
```

Het object dat je terugkrijgt van `useParams` staat je toe een waarde op te zoeken voor om het even welke key. Er treedt dus geen compilatiefout op als je in TypeScript een parameter probeert te raadplegen die niet voorzien is. Je krijgt gewoon `undefined` terug.

# useNavigate

De `useNavigate` hook is een hook die je toelaat te navigeren naar een andere pagina in je applicatie aan de hand van JavaScript code. Dit kan handig zijn als

```typescript codesandbox={"template": "react-router", "filename": "src/App.tsx"}
const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/detail/1")}>Detail 1</button>
            <button onClick={() => navigate("/detail/2")}>Detail 2</button>
            <button onClick={() => navigate("/detail/3")}>Detail 3</button>
        </div>
    );
}

# Meer weten
- https://reactrouter.com/en/6.4.3