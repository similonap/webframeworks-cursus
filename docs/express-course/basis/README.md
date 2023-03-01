import WebContainer from '@site/src/components/WebContainer/WebContainer';

<WebContainer/>

# Basisconcepten
# Eerste express applicatie

We starten met het installeren van Express.

```
npm install express
```

Omdat we hier in TypeScript werken, moeten we ook de nodige types installeren.
```
npm install --save-dev @types/express @types/node
```

De Hello World applicatie:

```typescript codesandbox={"template": "express", "filename": "src/index.ts"}
import express, { Express, Request, Response } from "express";

const app: Express = express();

app.set("port", 3000);

app.get("/", (req: Request, res: Response) => {
  res.type("text/html");
  res.send("Hello <strong>World</strong>");
});

app.listen(app.get("port"), () =>
  console.log("[server] http://localhost:" + app.get("port"))
);
```

Sla dit bestand op als `server.ts` en start het op met `ts-node server.ts`. Je kan nu naar http://localhost:3000 surfen en je ziet de tekst `Hello World` verschijnen.

Laten we elke lijn bekijken

```typescript
import express, { Express, Request, Response } from "express";

const app: Express = express();
```

We importeren de express module en de nodige types en voeren `express()` uit. Het resultaat hiervan is een `Express` object die de Express applicatie voorstelt. 

We kunnen dit object gebruiken om een aantal settings aan te passen, te beslissen welke url welke data (html, json, etc) laadt en de applicatie te starten.

```
app.set("port", 3000);
```

app.set laat ons toe bepaalde properties van onze Express applicatie aan te passen. Het is belangrijk om te definieren op welke poort onze webapplicatie gaat luisteren. Een typische keuze tijdens ontwikkeling is de poort 3000. Dit wil zeggen dat we lokaal naar http://localhost:3000 zullen moeten gaan.

Laten we nu eerst de laatste lijnen bekijken:

```typescript
app.listen(app.get("port"), 
    ()=>console.log( "[server] http://localhost:" + app.get("port")));
```

`app.listen` zorgt dat onze web applicatie start met luisteren op de meegegeven poort. Let op, we gebruiken in de eerste parameter app.get om de property die we daarnet een waarde hadden gegeven op te roepen. De tweede parameter is een callback die wordt uitgevoerd wanneer het luisteren succesvol is opgestart. Hier printen we gewoon de url + port uit op de console ter info.

### Express routes

Web applicaties en websites bevatten meestal meer dan 1 "pagina". Tot nu toe zie je het path in een URL als een locatie op een webserver. Bv. localhost:3000/index.html zou de index.html zijn die zich bevindt in de root folder. localhost:3000/profile/addPicture.html zou een file addPicture.html zijn die zich in /profile/ bevindt.

Express laat ons toe zelf te bepalen welke data wordt teruggestuurd adhv het path dat gekozen wordt. In ons voorbeeld zal localhost:3000/ Hello World tonen:

```typescript
app.get("/",(req: Request,res: Response)=>{
    res.type("text/html");
    res.send("Hello <strong>World</strong>")
})
```
Express werkt met routes. Een route bepaalt welk path welke datat terugstuurt. Je doet dit adhv de methode app.get.
app.get heeft 2 parameters:
- het pad
- een functie die de data terugstuurt naar de client

Het pad hier is "/". Dit komt overeen met localhost:3000/. Vervang je dit met bv "/helloworld" dan zal je naar lolalhost:3000/helloworld moeten gaan. localhost:3000 zal niet meer werken.

De functie als tweede parameter verwacht zelf 2 parameters:
- het **request** object. Dit object heeft informatie over de request die de client heeft gedaan. Denk bv. aan de headers, de body, de query parameters, etc. Het is een object van het type Request.
- het **response** object
Het request object bevat informatie over de vraag van de client (bv. data die de client stuurt, meer hierover later). 

Het response object laat ons toe een response te sturen naar de client. We gebruiken hier 2 functies:

```typescript
res.type("text/html");
```

type() laat ons toe het Content-type van de response te bepalen. Een volledige lijst van types vind je hier. De belangrijkste die we gaan gebruiken zijn "text/html" en "application/json".

```typescript
res.send("Hello <strong>World</strong>")
```
Om data terug te sturen gebruiken we de send() functie. Omdat we HTML willen terugsturen, vullen we de parameter met een string in HTML formaat.

### Multiple routes

Verschillende routes toevoegen is makkelijk:

```typescript
app.get("/",(req:Request,res:Response)=>{
    res.type("text/html");
    res.send("Yet another hello world app...")
});
app.get("/helloworld",(req:Request,res:Response)=>{
    res.type("text/html");
    res.send("Hello World")
});
app.get("/goodbye",(req:any,res:any)=>{
    res.type("text/html");
    res.send("Later <strong>World</strong>")
});
```

Voor elke route roepen we app.get op met het path dat we willen instellen en de data die we willen terugsturen.

We kunnen ook verkeerde paths opvangen. Als de gebruiker naar een path gaat dat niet bestaat, kunnen we ze bv. een foutmelding geven.

```typescript
app.use((req:Request, res:Response) => {
    res.type("text/html");
    res.status(404);
    res.send("404 - Not Found");
    }
);
```

Merk op dat we een nieuwe lijn hebben toegevoegd:

```typescript
res.status(404);
```

Dit geeft een custom status code terug. 404 laat jouw browser weten dat de pagina niet gevonden werd. Standaard zal 200 worden teruggegeven, als alles ok is (en als je dus zelf geen status meegeeft).

:::warning
Opgelet: De volgorde is hier belangrijk. Zet je deze app.use bovenaan in de applicatie, dan zal geen enkele route meer werken. Plaats die onderaan (maar boven app.listen).
:::

### Een simpele API

Tot nu toe stuurden we html terug. Maar we kunnen ook data terugsturen. Dit verandert onze web applicatie in een echte API.

```typescript
import express, { Express, Request, Response } from "express";

const app: Express = express();

interface Person {
    name: string;
    age: number;
}

const data : Person[] = [
    {   
        name: "george",
        age: 50
    },
    {   
        name: "jane",
        age: 32
    },
    {   
        name: "john",
        age: 42
    },
];

app.get("/getData",(req:Request,res:Response)=>{
    res.type("application/json");
    res.json(data);
})

app.listen(app.get("port"), ()=>console.log( "[server] http://localhost:" + app.get("port")));
```

We hebben een variabele data aangemaakt die een array van objecten bevat. Om deze data te sturen gebruiken we een ander type: application/json.

```typescript
res.type("application/json");
```

Dit zorgt ervoor dat de client weet dat het om json gaat. De Content-type in de header zal dan ook "application/json" zijn.

```typescript
res.json(data);
```
Om de JSON data terug te sturen, gebruiken we res.json. 

:::tip
Eigenlijk moeten we het type hier niet definieren. res.json zal zelf de content-type van de header aanpassen naar "application/json".
:::

### Static files

EJS files laten ons toe dynamische content beschikbaar te stellen via onze web app. Soms wil je ook statische HTML pages ter beschikking stellen. Jouw EJS bestanden gaan ook afbeeldingen willen tonen, gebruik maken van CSS bestanden en client-side JavaScript bevatten.

We voegen volgende lijn code toe aan onze app:

```typescript
app.use(express.static('public'))
```

Dit bepaalt waar we onze statische bestanden kunnen plaatsen. Hierboven zeggen we dat de folder `public` alle statische bestanden zal bevatten.

Wanneer we bv. een test.html file maken en plaatsen in onze public folder, kunnen we volgende URL raadplegen:

```typescript
http://localhost:3000/test.html
```

Je kan ook folders toevoegen aan deze folder. Zo kan je afbeeldingen, CSS, JS en HTML ordenen in hun eigen folders:

```typescript
http://localhost:3000/images/profile.png
http://localhost:3000/css/style.css
http://localhost:3000/js/custom_code.js
...
```

