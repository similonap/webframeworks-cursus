# EJS

## Response sturen

Dankzij Express kunnen we nu dynamisch HTML terugsturen naar de client. Bekijk eventjes dit voorbeeld:

```typescript
import express from "express";

const app = express();

app.set("port", 3000);

app.get("/",(req,res)=>{
    let randomGetal = Math.random()*100;
    res.type("text/html");
    res.send(`Het random getal is ${randomGetal}`);
});

app.listen(app.get("port"), () =>
  console.log("[server] http://localhost:" + app.get("port"))
);
```

Bezoek `http://localhost:3000` en merk op wat er gebeurt.

Bij elke refresh verandert de waarde van het random getal. Kijk naar de source code van deze pagina. Je ziet enkel een getal, geen scripts! Express stuurt een nieuwe inhoud van de pagina bij elke refresh! Laten we het voorbeeld even analyseren:

```typescript
let randomGetal = Math.random()*100;
```

Deze lijn geeft een willekeurig getal terug. We gebruiken Math.random dat een random getal geeft tussen 0 en 1 en vermenigvuldigen dat met 100.

```typescript
res.send(`Het random getal is ${randomGetal}`);
```

In plaats van een vaste string, geven we nu het randomgetal mee. Elke refresh voert de callback in app.get uit, dus elke refresh zorgt voor een ander getal.

## Templates

Volledige web paginas in variabelen steken is niet ideaal. Wanneer je weet dat ook nog CSS en scripts erbij moeten, dan is het duidelijk dat we een andere oplossing nodig hebben. Express laat toe templates te gebruiken.

We kunnen bv een Hello World pagina maken:

```markup
<html>
<body>
Hello world!
</body>
</html>
```

Maar wat als we nu een willekeurige boodschap willen tonen? &#x20;

```markup
<html>
<body>
[DIT MOET DYNAMISCH ZIJN]
</body>
</html>
```

Templates laten ons toe HTML paginas te schrijven zoals we dat gewoon zijn maar met variabele inhoud. Express ondersteunt verschillende template "engines". Hier gaan we gebruik maken van EJS.

## EJS

Om EJS (Embedded JavaScript templating) te gebruiken installeren we de ejs module:

```markup
npm install ejs
```

en we installeren ook de TypeScript types:

```
npm install --save-dev @types/ejs
```

We stellen onze express app in om EJS als default view engine te gebruiken:

```typescript
import express from "express";
import ejs from "ejs";

const app = express();

app.set("view engine", "ejs"); // EJS als view engine
app.set("port", 3000);
```

Net zoals we "port" de waarde 3000 geven, zetten we de property "view engine" op ejs.

### EJS renderen

EJS bestanden lijken op HTML files maar bevatten wat extras. Laten we starten met een simpel EJS bestand.

```markup
<h1>Hello World!</h1>
This is yet another boring hello world app
```

Dit bestand bewaren we als **index.ejs** in de folder **/views**. Merk op, dit is HTML in een EJS bestand, niets speciaals.

:::info
Alle EJS files moeten de extensie .ejs hebben.

Alle EJS files moeten in de _views_ folder staan (die zich in de folder van jouw applicatie bevindt)
:::

Nu passen we onze applicatie aan om de index.ejs te tonen (renderen: omzetten van EJS naar HTML):

```typescript
import express from "express";
const app : Express = express();

app.set("view engine", "ejs"); // EJS als view engine
app.set("port", 3000);

app.get("/",(req,res)=>{
  res.render("index");
})

app.listen(app.get("port"), ()=>console.log( "[server] http://localhost:" + app.get("port")));
```

Merk op hoe eenvoudig onze route naar / is geworden:

```typescript
app.get("/",(req,res)=>{
    res.render("index");
})
```

Ipv `res.send` gebruiken we `res.render`. Render verwacht als parameter de naam van een template die zich in de views folder bevindt. Hier tonen we de index file. Ga naar localhost:3000/ om jouw EJS file als HTML te zien.

Je kan nu verschillende EJS files toevoegen. Render ze via verschillende routes en kijk hoe je nu volledige control hebt over routes en de html die getoond wordt.

### Dynamische content

Templates helpen ons de HTML dynamisch te maken. Laten we ons voorbeeld aanpassen zodat we het willekeurig getal weer zien verschijnen. Eerst passen we onze TypeScript aan.

```typescript
app.get("/",(req,res)=>{
    let randomGetal = Math.random()*100;
    res.render("index", {aRandomNumber: randomGetal});
})
```

`res.render()` heeft ook een tweede optionele parameter: een object waar elke property een variabel is die beschikbaar zal zijn in de EJS file.

In dit voorbeeld heeft de tweede parameter maar 1 property: `aRandomNumber`. We geven dit de waarde van de variabele `randomGetal`. `aRandomNumber` zal dus bij elke refresh een willekeurig getal tussen 0 en 100 bevatten.

We kunnen ook meerdere properties meegeven:

```typescript
app.get("/",(req,res)=>{
    let randomGetal = Math.random()*100;
    let randomGetal2 = randomGetal * 2;
    res.render("index", 
        {    
            aRandomNumber: randomGetal,
            name: "Sven",
            age: 40,
            someOtherNumber: randomGetal2
        });
})
```

Express zal nu index tonen, maar geeft eerst deze lijst van properties mee. Deze properties zijn nu beschikbaar als variabelen in de EJS file!

Laten we de index.ejs file aanpassen:

```html
<h1>Hello World!</h1>
<p>
    This is yet another boring hello world app.
</p>
<p>
    But this time we have a random 
    number which is <%= aRandomNumber %>
</p>
```

Wanneer je nu naar localhost:3000 gaat, zal je het random getal in de tekst zien staan.

### EJS expressies

Om de variabelen te gebruiken moet je de volgende exacte notatie gebruiken:

```markup
<%= variable_name %>
```

De naam moet volledig overeenkomen met de naam van de property die je in render() meegeeft.

:::info
Alles wat tussen <% %> staat, wordt door de EJS view engine geparsed. Wanneer <%= gebruikt wordt, zal de waarde de variabel naar de finale HTML render gestuurd worden.
:::

We kunnen zo elke JavaScipt object raadplegen:

```markup
<%= name %>
<%= person.name %>
<%= people[0] %>
...
```

EJS laat ons toe JavaScript te gebruiken om meer controle te hebben over de dynamische inhoud van het template. Tussen <% %> kunnen we JavaScript plaatsen:

```markup
<% 
    let firstName = "John";
    let lastName = "Smith";
    let age = Math.random() * 100;
%>
```

Deze code zal uitgevoerd worden tijdens het parsen van de EJS file. De variabelen hier zijn ook aanspreekbaar in de rest van het template:

```markup
<% 
    let firstName = "John";
    let lastName = "Smith";
    let age = Math.random() * 100;
%>

<h1>Hi</h1>
<p>
    My name is <%= firstName %> <%= lastName %> 
    and I'm <%= age %> years old.
</p>
```

Zo kan je bv. ook een loop toevoegen. Merk op dat we <% %> gebruiken om JavaScript uit te voeren. <%= %> zal de waarde van de statement omzetten naar tekst. Daarom gebruiken we <% voor de for loop en <%= wanneer we i willen tonen.

```markup
<% for(let i=1; i<10;i++) {%>
    <%= i %>
<% }; %>
```

:::warning
Let op de haakjes. Op lijn 1 openen we het haakje {. We moeten dit haakje dus ook sluiten. Dit doen we op lijn 3.
:::

Laten we loopen over een array met forEach. Hiervoor hebben we een functie nodig die iets met de output doet. In JavaScript/TypeScript (zonder EJS) zouden we dit zo doen:

```typescript
let names = ["george","geoff","jane"];
names.forEach( name => {
    //do something with name
}); 
```

Lijn 3 zou onze output moeten zijn naar EJS. Daar gaan we dus <%= voor moeten gebruiken. De andere lijnen moeten uitgevoerd worden en plaatsen we tussen <% %>.

Dit wordt dus:

```javascript
<% 
    let names = ["george","geoff","jane"];
    names.forEach( name => {
%>
    <%= name %>
<% 
    }); 
%>
```

`<%=` zal de waarde rechtstreeks omzetten naar een correcte string. Ze zal dus geen rekening houden met HTML tags. Probeer de volgende EJS code:

```markup
<% 
    let names = ["george","geoff","jane"];
    names.forEach( t => {
%>
    <%= "<strong>" + t + "</strong><br/>" %>
<% 
    }); 
%>
```

De output zal zijn:

```markup
<strong>george</strong><br/> <strong>geoff</strong><br/> <strong>jane</strong><br/>
```

Er wordt geen rekening met de tags gehouden, deze worden als strings gerenderd client side.

Door gebruik te maken van <%- ipv <%= wordt wel rekening gehouden met de tags:

```markup
<% 
    let names = ["george","geoff","jane"];
    names.forEach( t => {
%>
    <%- "<strong>" + t + "</strong><br/>" %>
<% 
    }); 
%>
```

:::info
* <% %> voert JavaScript code uit
* <%= %> geeft de waarde terug als string (HTML Escaped, maw tags zichtbaar client-side
* <%- %> geeft d waarde terug en laat HTML toe
:::

Je kan <%- ook gebruiken om andere templates te importeren. Bv. als je een header en/of footer template wil toevoegen:

```markup
<%- include("header"); %>
```

