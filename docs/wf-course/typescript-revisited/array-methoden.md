---
sidebar_position: 6
---

# Array Methoden

Het is belangrijk om te weten dat in React.js bijna nooit gewone for lussen worden gebruikt. Het is vaak mogelijk om ze te gebruiken, maar het maakt de code bijna onleesbaar. Daarom is het kennen van array methoden een van de belangrijkste dingen die je moet kennen voordat je met React.js kan beginnen.

### Map

De map() functie maakt een nieuwe array bestaande uit de resultaten van de callback functie op elk element van die array. Deze functie is de meest gebruikte functie in React.js, dus zorg er voor dat je deze onder de knie hebt.

Wil je bijvoorbeeld een array van getallen omzetten naar een nieuwe array maar waar de elementen verdubbeld zijn, kunnen we dit op de volgende manier doen

```tsx codesandbox={"template": "typescript", "filename": "index.ts" }
let numbers: number[] = [1,2,3,4,5];
let newArray: number[] = numbers.map(number => number * 2);
console.log(newArray);
```

Als we dit met een for lus zouden willen doen:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
let numbers: number[] = [1,2,3,4,5];
let newArray: number[] = [];
for (let number of numbers) {
    newArray.push(number*2);
}
console.log(newArray);
```

We verkiezen altijd in react.js voor de oplossing met de map functie.

### Filter

De filter() functie wordt heel vaak gebruikt bij het verbergen van bepaalde objecten in lijsten. Soms wil je niet de hele lijst van objecten te zien krijgen, maar een klein deel ervan dat voldoet aan een bepaalde filter.

```typescript
characters.filter(age => age.age >= 30);
```

geeft alleen de characters terug waarvan de leeftijd groter of gelijk is aan 30.

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
interface Character {
  name: string;
  age: number;
}

let characters = [
  {
    name: "Jinx",
    age: 16
  },
  {
    name: "Caitlyn",
    age: 24
  },
  {
    name: "Jayce",
    age: 30
  },
  {
    name: "Victor",
    age: 30
  },
  {
    name: "Heimerdinger",
    age: 307
  }
];

console.log(characters.filter((age) => age.age >= 30));

```

### Reduce

De reduce() methode herleid een array naar een enkele waarde aan de hand van de meegegeven reducer functie. De return value van deze reducer functie wordt doorgegeven als argument aan de volgende reducer functie.

Dit lijkt een beetje complex, dus even een voorbeeld: Stel dat je een lijst hebt van een aantal getallen: 1,2,3,4 dan kan je deze lijst herleiden (reduceren) tot de som van dit getal. De functie die het volgende getal optelt bij het vorige noemen we dan de reducer.

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
let numbers : number[] = [1,2,3,4];

console.log(numbers.reduce((sum, current)=>sum+current)); // 10
```

Een voorbeeld waarvoor we reduce zouden kunnen gebruiken is het volgende: Stel dat we een lijst van objecten hebben met een id, en we willen een nieuw element toevoegen. Dan moeten we eerst op zoek gaan naar de hoogste id in de lijst objecten. We kunnen dit doen aan de hand van reduce:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
interface Book {
  id: number;
  name: string;
}

let books : Book[] = [
  {
    id: 0,
    name: "Game of thrones"
  },
  {
    id: 1,
    name: "Hitchhikers guide to the galaxy"
  },
  {
    id: 2,
    name: "Witcher"
  },
  {
    id: 5,
    name: "The expanse"
  }
];

// highlight-next-line
console.log(books.reduce((maxId, current) => (current.id > maxId ? current.id : maxId), 0)); // 5
```

Je merkt hier op dat we hier een parameter 0 meegeven aan de reduce. Dat doen we omdat we hier de lijst niet willen reduceren tot een book object maar naar een getal. Daarom moeten we de start waarde meegeven.

### Find

De find() methode geeft de waarde terug van het eerste element van de array dat voldoet aan de meegegeven callback functie. Als er geen waarde voldoet aan de callback functie geeft deze undefined terug.

```typescript
console.log(characters.find((age) => age.age == 30));
// {name: "Jayce", age: 30}
console.log(characters.find((age) => age.age == 0));
// undefined
```

### Slice

Array.slice() is een functie die gebruikt wordt om een deel van een array te kopiëren (extracten) in een nieuwe array.\
\
**Syntax:**

```
 array.slice( begin [,end] ); 
```

**Parameter:** Deze methode aanvaard twee parameters

* **begin :** de zero based index van waar de extractie moet starten
* **end :** de zero based index van waar de extractie moet eindigen

Deze functie geeft een **nieuwe array** terug met daarin een deel van de array. De originele array wordt hier **NIET aangepast**.&#x20;

```typescript
let numbers: number[] = [0,1,2,3,4,5];

console.log(numbers.slice(0,2)); // [0,1]
console.log(numbers.slice(2,4)); // [2,3]
console.log(numbers.slice(4,6)); // [4,5]
```



