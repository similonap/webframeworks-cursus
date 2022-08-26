# Dictionary

Soms weet je niet op voorhand welke keys en values een bepaald object gaat bevatten. Dit is bijvoorbeeld het geval bij dictionaries. Een dictionary is een ongeordende data structuur die een verzameling elementen bevat. Om een element te vinden, moet je de "key" sleutel van een element kennen.

Hieronder een voorbeeld in JavaScript waar we het paswoord van een gebruiker willen opslagen in een dictionary

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
let passwords = {};

passwords['Andie'] = '1337h4x0r'; // hetzelfde als passwords.Andie
passwords['Sven'] = 'H4ckerman';  // hetzelfde als passwords.Sven
```

Als je dit gaat uitvoeren in TypeScript loop je direct tegen een probleem aan: er is geen interface voorzien voor dit object. Het is ook niet mogelijk om elke mogelijke key te voorspellen die deze dictionary gaat bevatten, dus je kan hier ook geen interface voor schrijven die je normaal gewoon bent.

Als we zo'n dictionary willen gebruiken dan moeten we hiervoor een speciale interface maken

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
interface PasswordDictionary {
  [key: string]: string
}

let passwords : PasswordDictionary = {};

passwords["Andie"] = "1337h4x0r";  // hetzelfde als passwords.Andie
passwords["Sven"] = "H4ckerman";   // hetzelfde als passwords.Sven
```

* `[key: string]` zegt dat de key van de dictionary een string is.  Dit noemen we een dynamic object key.
* `: string` geeft aan dat de values van de dictionary ook een string is.

Deze types kunnen uiteraard anders zijn in een andere use case.
