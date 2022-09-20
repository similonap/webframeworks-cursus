---
sidebar_position: 2
---

# Omgaan met null/undefined

### Optional

Soms heb je objecten waarbij niet alle properties een waarde hebben. In TypeScript moet je dit aangeven in de interface van dat object. Stel dat we een `Options` interface hebben die gebruikt wordt om een scherm in te stellen.

```typescript
interface Options {
  title: string;
  width: number;
  height: number;
}
```

Als je nu

```typescript
let options : Options = {
    title: 'Hello World'
};
// Type '{ title: string; }' is missing the following properties from type 'Options': width, height(2739)
```

doet dan krijg je een error in typescript want width en height zijn hier niet opgegeven.

Wil je dit toch toelaten dan moet je dit aangeven in de interface van Options aan de hand van de ? operator. Dit geeft aan dat een property optional is.

```typescript
interface Options {
  title: string;
  width?: number;
  height?: number;
}
```

### Optional chaining

Stel dat we de interface iets aanpassen en de `width` en de `height` in een apart object plaatsen. Dan krijgen we de volgende situatie

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
interface Size {
  width: number;
  height: number;
}
interface Options {
  title: string;
  size: Size
}

let options: Options = {
  title: 'Hello World',
  size: {
    width: 100,
    height: 100
  }
};

console.log(options.size.width); // 100
```

Als we nu `size` optioneel maken zoals hiervoor geraken we in de problemen. Onze compiler zal ons dan de volgende foutmelding geven:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
interface Size {
  width: number;
  height: number;
}
interface Options {
  title: string;
  size?: Size
}

let options: Options = {
  title: 'Hello World',
  size: {
    width: 100,
    height: 100
  }
};

console.log(options.size.width); // Object is possibly 'undefined'
```

Omdat we `size` optioneel hebben gemaakt bestaat er een kans dat size undefined zou zijn. Dus de typescript compiler waarschuwt ons hiervoor. Hier kunnen we een aantal dingen aan doen. Je zou expliciet kunnen kijken of options.size gelijk is aan undefined aan de hand van een if statement:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
//hide-start
interface Size {
  width: number;
  height: number;
}
interface Options {
  title: string;
  size?: Size
}
//hide-end
let options: Options = {
  title: 'Hello World'
};

if (options.size != undefined) {
    console.log(options.size.height);
}
```

of je kan hier optional chaining gebruiken. Je gebruikt hier `.?` in plaats van de `.` operator:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
//hide-start
interface Size {
  width: number;
  height: number;
}
interface Options {
  title: string;
  size?: Size
}
let options: Options = {
  title: 'Hello World'
};
//hide-end
console.log(options.size?.height); // undefined
```

en dan krijg je ook geen errors meer te zien.  Als je optional chaining gebruikt dan zal de hele expressie als undefined gezien worden als een van de elementen undefined is. In dit geval is `size` undefined, dus dan zal de height hiervan ook undefined zijn.

### ?? Operator (Nullish Coalescing)

Soms wil je een default waarde gebruiken als een property undefined is. Je kan dit doen met de `??` operator:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
//hide-start
interface Size {
  width: number;
  height: number;
}
interface Options {
  title: string;
  size?: Size
}
let options: Options = {
  title: 'Hello World'
};
//hide-end
console.log(options.size?.height ?? 180); // 180
```
In dit geval wordt de height 180 als de height undefined is.

### && operator

De `&&` operator wordt gebruikt om een expressie te evalueren als de linkerkant `true` is. Als de linkerkant niet waar is dan zal de rechterkant niet geëvalueerd worden.

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
const hasLight = false;

const turnOffLight = () => {
  console.log('Light is turned off');
};

hasLight && turnOffLight();
```

In dit geval zal de `turnOffLight` functie niet aangeroepen worden omdat de `hasLight` false is.

Dit werkt ook met null en undefined:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
const light = undefined;

const turnOffLight = () => {
  console.log('Light is turned off');
};

light && turnOffLight();
```

Er zijn veel waarden in JavaScript die als false/true gezien worden. Deze noemen we gewoonlijke truethy en falsy.
- https://developer.mozilla.org/en-US/docs/Glossary/Falsy
- https://developer.mozilla.org/en-US/docs/Glossary/Truthy

### .! operator (Non-null assertion)

Heel zelden kom je in situaties terecht dat TypeScript denkt dat een bepaald veld **undefined** of **null** kan zijn. Als je zeker bent dat een bepaald veld nooit undefined kan zijn dan kan je ook de `!` operator gebruiken om een "Object is possibly undefined" error te vermijden.

Bij de onderstaande code is de TypeScript compilator niet in staat zelf te bepalen of text undefined is of niet. Daarom moet je achter text een uitroepteken zetten om deze error te vermijden.

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
const duplicate = (text?: string) => {
  let fixString = () => {
    if (text === null || text === undefined) {
      text = "";
    }
  };
  fixString();

  return text!.concat(text!);
}

console.log(duplicate("hello"));
```

:::warning
Gebruik dit alleen als je zeker bent dat het veld nooit undefined kan zijn. Anders kan je beter de `.?` operator gebruiken. Of zet je een default waarde aan de hand van de `??` operator.
:::