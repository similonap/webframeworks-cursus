---
sidebar_position: 9
---

# Modules

## Hoe modules gebruiken in TypeScript?

Een module is een bestand dat variabelen, functies, interfaces of klassen bevat. Je kan sommige van deze publiekelijk beschikbaar maken zodat deze zichtbaar zijn vanuit andere modules. Dit doe je door deze te **exporteren**. Objecten die niet ge-exporteerd zijn zijn private. 

### Export

Om te laten zien hoe modules werken zullen we een heel simpele `Math` module maken. We maken hiervoor een bestand `math.ts`

```typescript codesandbox={"template": "typescript-math-module", "filename": "math.ts" }
// public door het export keyword.
export const add = (a: number, b: number): number => {
    log(`${a} + ${b}`);
    return a + b;
}

// private.
export const log = (message: string): void => {
    console.log(message);
}

// Mogelijk om 1 object als 'default' te exporteren.
export default add;
```

### Import

Het import keyword laat het toe om ge-exporteerde functies van een andere module te gebruiken. In dit geval willen we de `add` functie gebruiken van de Math module.

```typescript codesandbox={"template": "typescript-math-module", "filename": "index.ts" }
// We willen de add functie gebruiken van de math module
import { add } from "./math";

console.log(add(1, 2));
```

Als we alle ge-exporteerde functies willen gebruiken van een module kunnen we de * syntax gebruiken.

```typescript codesandbox={"template": "typescript-math-module", "filename": "index.ts" }
// De math module als namespace importeren
import * as Math from "./math";

// We gebruiken de add methode in de namespace math
console.log(Math.add(1, 2));
```

Willen we enkel de default export gebruiken dan laten we de accolades weg.

```typescript codesandbox={"template": "typescript-math-module", "filename": "index.ts" }
// De math module als namespace importeren
import add from "./math";

// We gebruiken de add methode in de namespace math
console.log(add(1, 2));
```

### Interfaces exporteren

Vaak plaats je alle interfaces die met een bepaald model te maken hebben in een apart bestand. Je kan deze ook gewoon exporteren en importeren zoals je dat deed hiervoor.

```typescript
export interface Student {
    name: string;
    age: number
}

export interface Course {
    name: string;
    description: string;
    credits: number;
}
```

en dan kan je deze importeren via het import keyword:

```typescript
import { Student, Course } from "./interfaces"
```