---
sidebar_position: 4
---

# Array/Object Destructuring

Vaak willen we bepaalde delen van een object of array op een gemakkelijke manier aanspreken zonder dit uitdrukkelijk te doen aan de hand van de dot notatie (bij objecten) en de index (bij arrays)

### Array Destructuring

Zoals je weet kan je aan de hand van de array index bepaalde elementen aanspreken van een array:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
// Een array die een voornaam en achternaam bevat
let arr : string[] = ['Andie', 'Similon'];

let firstName = arr[0];
let lastName = arr[1];

console.log(firstName); // Andie
console.log(lastName); // Similon
```

Dit kan je ook schrijven als:

```typescript
// Een array die een voornaam en achternaam bevat
let arr : string[] = ['Andie', 'Similon'];

let [firstName, lastName] = arr;

console.log(firstName); // Andie
console.log(lastName); // Similon
```

Dit concept noemen we **Array Destructuring**

Wil je bepaalde elementen overslagen dan kan je dit doen op de volgende manier:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
let arr : string[] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
let [firstName, , title] = arr;

console.log(title); // Consul
```

Wil je bijvoorbeeld alleen de eerste twee waarden in een variabele en de rest in een nieuwe array kan je dit doen aan de hand van de `...` notatie:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
let arr : string[] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
let [firstName, lastName, ...rest] = arr;

console.log(firstName); // Julius
console.log(lastName); // Caesar
console.log(rest); // ["Consul", "of the Roman Republic"];
```

De `rest` variabele bevat dan de array van de laatste twee elementen.&#x20;

### Object Destructuring

Hetzelfde concept kan je ook gebruiken bij objecten. In plaats van

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
interface Options {
  title: string;
  width?: number;
  height?: number;
}

let options : Options  = {
  title: "Menu",
  width: 100,
  height: 200
};

let title = options.title;
let width = options.width;
let height = options.height;
```

te doen kan je dit veel compacter schrijven aan de hand van object destructuring:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
//hide-start
interface Options {
  title: string;
  width?: number;
  height?: number;
}
//hide-end
let options : Options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title,width,height} = options;
```

de volgorde maakt hier ook niet uit zolang de namen maar overeenkomen met de keys van het object

```typescript
let {width,title,height} = options;
```

mag dus ook.

#### Rest operator

Uiteraard moet je hier niet alle keys opgeven en kan je ook maar een deel van de keys opgeven en de rest negeren:

```typescript
let {title} = options;
```

Je kan hier net zoals bij arrays ook gebruik maken van de `...` notatie (of rest operator)

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
//hide-start
interface Options {
  title: string;
  width?: number;
  height?: number;
}
//hide-end
let options : Options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let {title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100
```

#### Hernoemen van keys

Willen we hier niet dezelfde namen gebruiken als de keys van het object is het ook mogelijk om deze een andere naam te geven:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
//hide-start
interface Options {
  title: string;
  width?: number;
  height?: number;
}
//hide-end
let options : Options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

console.log(title);  // Menu
console.log(w);      // 100
console.log(h);      // 200
```

#### Default waarden

Als je naar de interface van `Options` kijkt dan zie je dat de width en de height optioneel zijn. Als je deze leeg laat dan zijn `width` en `height` undefined bij het destructuren:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
//hide-start
interface Options {
  title: string;
  width?: number;
  height?: number;
}
//hide-end
let options: Options = {
  title: 'Menu',
};

let { title, width, height } = options;
 
console.log(width);  // undefined
console.log(height); // undefined
```

wil je dit voorkomen kan je dit doen aan de hand van default waarden op te geven

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
//hide-start
interface Options {
  title: string;
  width?: number;
  height?: number;
}
//hide-end
let options: Options = {
  title: 'Menu',
};

let { title, width = 100 , height = 200 } = options;
 
console.log(width);  // 100
console.log(height); // 200
```

#### Destructuring in functie parameters

Je kan ook rechtstreeks in de functie parameters het object destructuren. Stel dat je de volgende functie hebt:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
//hide-start
interface Options {
  title: string;
  width?: number;
  height?: number;
}
//hide-end
let options : Options  = {
  title: "Menu",
  width: 100,
  height: 200
};

const showOptions = (options: Options) => {
  console.log(options.title);
  console.log(options.width);
  console.log(options.height)
}

showOptions(options);
```

Je ziet hier dat we telkens de dot notatie moeten gebruiken voor title, width en height uit het `options` object moeten halen. Je zou uiteraard dit al kunnen vereenvoudigen door de `showOptions` functie als volgt te schrijven:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
//hide-start
interface Options {
  title: string;
  width?: number;
  height?: number;
}
let options : Options  = {
  title: "Menu",
  width: 100,
  height: 200
};
//hide-end
const showOptions = (options: Options) => {
  let {title,width, height} = options;
  console.log(title);
  console.log(width);
  console.log(height);
}
showOptions(options);
```

maar je kan dit zelfs nog korter door rechtstreeks in de functie parameters  de destructuring operator te gebruiken:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
//hide-start
interface Options {
  title: string;
  width?: number;
  height?: number;
}
let options : Options  = {
  title: "Menu",
  width: 100,
  height: 200
};
//hide-end
const showOptions = ({title, width, height}: Options) => {
  console.log(title);
  console.log(width);
  console.log(height)
}
//hide-start
showOptions(options);
//hide-end
```

Kort en bondig! Je kan dit zelfs combineren met default waarden

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
//hide-start
interface Options {
  title: string;
  width?: number;
  height?: number;
}
let options : Options  = {
  title: "Menu",
  width: 100,
  height: 200
};
//hide-end
const showOptions = ({title, width = 200, height = 100}: Options) => {
  console.log(title);
  console.log(width);
  console.log(height)
}
//hide-start
showOptions(options);
//hide-end
```

als `width` of `height` dan niet zijn ingegeven dan zullen hier de default waarden gebruikt worden.

#### Function parameters opschonen

Het werken met object destructuring in functie parameters kan een manier zijn om functies met veel parameters te vereenvoudigen

```typescript
const f = (a:number, b: number, c: number, d: string, e: number, f: number, g: boolean) => {
    // do something
}

f(0,2,4, "test",.... Euh.... ik weet het niet meer!)
```

dit kan je ook herschrijven door alle parameters in een apart object in te pakken

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
interface Params {
    a:number, b: number, c: number, d: string, e: number, f: number, g: boolean
}

const f = ({a,b,c,d,e,f,g}: Params) => {
    // do something
}

f({a:0,b:2,c:4,d:"test",e:6,f:8,g:true});
```

Zo zie je exact welke parameter bij welke naam hoort.&#x20;
