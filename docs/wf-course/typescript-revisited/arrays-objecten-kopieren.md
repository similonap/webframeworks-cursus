---
sidebar_position: 1
---

# Arrays/Objecten kopieren

### Spread operator

Het is vaak nodig in deze cursus om kopieën te maken van arrays. Je zou misschien denken dat de volgende code een kopie van een array maakt

```typescript
let array : number[] = [1,2,3,4];
let newArray : number[] = array;
```

maar niets is minder waar! In de code hierboven wordt gewoon de referentie naar `array` toegewezen aan de variabele `newArray`. `array` en `newArray` verwijzen gewoon naar dezelfde plaats in het geheugen. Het onderstaande voorbeeld toont dit aan:

```typescript
let array : number[] = [1,2,3,4];
let newArray : number[] = array;

newArray.push(5);
console.log(array); // 1,2,3,4,5
console.log(newArray); // 1,2,3,4,5
```

Als je een kopie van een array moet maken dan ga je gebruik moeten maken van de spread syntax (drie puntjes)

```typescript
let array : number[] = [1,2,3,4];
let newArray : number[] = [...array];

newArray.push(5);
console.log(array); // 1,2,3,4
console.log(newArray); // 1,2,3,4,5
```

Beide verwijzen nu naar een aparte plaats in het geheugen.

### Objecten kopiëren

Het bovenstaande geldt ook voor objecten:&#x20;

```typescript
let andie = { name: 'Andie Similon', age: 37 };
let clone = andie;

clone.name = 'Clone Similon';

console.log(andie); // Clone Similon
console.log(clone); // Clone Similon
```

```typescript
let andie = { name: 'Andie Similon', age: 37 };
let clone = {...andie};

clone.name = 'Clone Similon';

console.log(andie); // Andie Similon
console.log(clone); // Clone Similon
```

Het is wel belangrijk dat je weet dat je hiermee enkel objecten kan kopiëren met 1 niveau diep.

```typescript
let address = { street: '123 fakestreet' };
let andie = { name: 'Andie Similon', age: 37, address: address };
let clone = { ...andie };

clone.name = 'Clone Similon';
clone.address.street = '234 fakestreet';

console.log(andie.address.street); // 234 fakestreet
console.log(clone.address.street); // 234 fakestreet
```

Beide address velden wijzen naar hetzelfde object.&#x20;

Het kopiëren van objecten van meerdere niveau's diep noemen ze vaak een **'deep copy'** van het object. De beste manier om dit te doen is momenteel door eerst het object om te zetten naar een JSON-string en dan direct terug om te zetten naar een object:

```typescript
let address = { street: '123 fakestreet' };
let andie = { name: 'Andie Similon', age: 37, address: address };
let clone = JSON.parse(JSON.stringify(andie));

clone.name = 'Clone Similon';
clone.address.street = '234 fakestreet';

console.log(andie.address.street); // 123 Fakestreet
console.log(clone.address.street); // 234 Fakestreet
```