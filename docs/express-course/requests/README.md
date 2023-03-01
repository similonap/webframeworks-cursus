# Requests

Een simpele request naar / ziet er zo uit:

```typescript
app.get("/",(req,res)=>{
    res.type("text/html")
    res.send("hello");req
})
```

De gebruiker vraagt naar bv. localhost:3030 en krijgt zo de inhoud van index.ejs.

Wat als we de gebruiker wat meer controle willen geven over de request?

### **GET requests**

Een standaard manier om data te versturen is via een GET request. Zoals je misschien al gemerkt hebt, zijn alle requests tot nu toe van het type GET (app.get). Om data mee te geven kunnen we gebruik maken van query strings, bv.:

```typescript
https://www.google.be/search?q=ap&client=safari
```

Dit is een GET request naar google. De domein naam is google.be. Het pad is /search. Alles achter ? is bevat de query string.

```typescript
q=ap&client=safari
```

De query string bepaalt de velden en waarden die we naar de server willen sturen. In dit geval sturen we q met de waarde "ap" (de zoekterm) en client met de waarde "safari" (de gebruike web browser).&#x20;

**Query**

Om de waarden in een query string te raadplegen, maken we gebruik de property query van het request object.

{% hint style="info" %}
Herhaling: Het request object is de eerste parameter in de callback functie van app.get. Dit object bevat informatie van de request die de gebruiker/browser stuurt.
{% endhint %}

Stel we hebben een array met namen. We willen de naam oproepen dmv een index waarde.&#x20;

```typescript
let people = ["Sven","Andie","George","Geoff"];

app.get("/person",(req,res)=>{
    let index = parseInt(req.query.index as string);
    res.type("text/html")
    res.send(people[index]);
});
```

`req` is het Request object. De property `query` bevat alle query velden die meegestuurd worden.&#x20;

:::info
Probeer zelf eens een lijst van query velden toe te voegen aan de url en print de inhoud van req.query naar de console
:::info

:::info
Om een query string toe te voegen aan een url start je met ?
:::

:::info
Meerdere velden aan een query string voeg je toe door & te plaatsen voor de extra veldnamen
:::

:::danger
Let op welke characters je gebruikt in een query string. Je kan bv. geen spaties gebruiken. Wil je in jouw client applicatie een random string meegeven als waarden, gebruik dan URI Encode om het om te zetten in een geldige string!

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/encodeURI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/encodeURI)
:::

**Route Parameters**

Ipv query strings te gebruiken, kunnen we ook gestructureerde routes maken die parameters integreren in het pad zelf. Route parameters laten ons toe parameters te definieren in onze route. Bv.:

```typescript
let people = ["Sven","Andie","George","Geoff"];
app.get("/person/:index",(req,res)=>{
    let index = parseInt(req.params.index);
    res.type("text/html")
    res.send(people[index]);
})
```

Parameters starten met : . In het voorbeeld hebben we een route naar /person/\[waarde]. De gebruiker moet een waarde achter /person/ plaatsen om de route aan te spreken.&#x20;

:::danger
De route /person bestaat niet. Enkel wanneer een waarde achter person/ staat zal de route aangesproken worden. Probeer het zelf uit!
:::

Door :index bepaal je de naam van de property die de waarde van de parameter zal bevatten. Deze naam kan je dan gebruiken om de property terug te vinden in het object params van het request object.

:::info
Herhaling: Het request object is de eerste parameter in de callback functie van app.get. Dit object bevat informatie van de request die de gebruiker/browser stuurt.
:::

In het voorbeeld hierboven halen we de waarde dus op via `req.params.index`

```typescript
...
app.get("/person/:index",(req,res)=>{
    let index = parseInt(req.params.index);
...
```

Je kan ook meerdere parameters meegeven:

```typescript
let people = ["Sven","Andie","George","Geoff"];
app.get("/person/:index/replace/:newname",(req,res)=>{
    let index = parseInt(req.params.index);
    let oldName = people[index];
    people[index] = req.params.newname;
    res.type("text/html")
    res.send(`Old name was ${oldName}, new name is ${people[index]}`);
})
```

Je kan ook regular expressions gebruiken om te bepalen waar een parameter moet aan voldoen. Bv. :index zou een getal moeten:

```typescript
let people = ["Sven","Andie","George","Geoff"];
app.get("/person/:index(\[0-9]+)/replace/:newname",(req,res)=>{
    let index = parseInt(req.params.index);
    let oldName = people[index];
    people[index] = req.params.newname;
    res.type("text/html")
    res.send(`Old name was ${oldName}, new name is ${people[index]}`);
})
```

### POST requests

GET requests zijn beperkt door de lengte van de url (meestal 2048). Dit wil zeggen dat je grote hoeveelheid data zoals bv lange paragrafen tekst, bestanden, grote JSON objecten etc niet kan doorsturen via een GET request. Wanneer je gevoelige data wil versturen, is een GET request ook niet ideaal. Bv. een paswoord plaatsen in het pad of query string is onveilig. POST requests helpen hierbij.

:::info
Let op. De inhoud van een POST request is ook leesbaar. Tenzij je gebruik maakt van encryptie (zie Software Security) is de data niet veilig.
:::

Om POST requests makkelijk te behandelen voegen we volgende lijnen toe aan onze applicatie:

```typescript
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended:true}))
```

Let op: limit kies je zelf. Dit is de grootte van het request.

De tweede lijn zorgt ervoor dat de inhoud van de POST omgezet wordt in een handig JSON object.&#x20;

Om een POST request te behandelen gebruiken `we app.post` ipv `app.get`.

```typescript
app.post("/sendData",(req, res)=>{
    ...
})
```

Laten we een simpel form maken dat onze sendData route aanroept:

```typescript
<form action="/sendData" method="post">
    <div>
        <label for="fname">First name?</label>
        <input name="fname" id="fname" value="George">
      </div>
      <div>
        <label for="lname">Last Name?</label>
        <input name="lname" id="lname" value="Smith">
      </div>
      <div>
        <button type="submit">Send!</button>
      </div>
</form>
```

Dit voorbeeld stuurt 2 velden: fname en lname. Het formulier doet ook een POST request (zie method).

Om de data die gestuurd is op te vragen, gebruiken we weeral het Request object. Hierin bevindt zich de property body die de velden zal bevatten van ons POST request:

```typescript
app.post("/sendData",(req, res)=>{
    let data = req.body;
    res.json(data);
})
```

:::info
* Query string parameters vind je terug in req.query.
* Route parameters vind je terug in req.params.
* POST data vind je terug in req.body
:::

De velden fname en lname bevinden zich in `req.body`:

```typescript
app.post("/sendData",(req, res)=>{
    let firstName = req.body.fname;
    let lastName = req.body.lname;
    res.type("text/html")
    res.send(`Hello ${firstName} ${lastName}`);
})
```

:::info
Probeer nu zelf query string en route parameters te combineren met een POST request.
:::
