---
sidebar_position: 5
---

# Callbacks/Function types

Een callback is een functie (functie A) die wordt meegegeven als parameter van een andere functie (functie B). Deze functie (B) zal dan de meegegeven functie (A) uitvoeren.

Dit ziet er in code als volgt uit:

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
interface Callback {
    (): void
}

let functionA = (functionB: Callback) => {
    functionB();
}

let functionB: Callback = () => {
    console.log("Function B executed")
}

functionA(functionB);
```

Wil je geen interface aanmaken kan je ook gebruik maken van TypeScript types rechtstreeks in de functie signature.

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
//hide-start
interface Callback {
    (): void
}
//hide-end
let functionA = (functionB: () => void) => {
    functionB();
}
//hide-start
let functionB: Callback = () => {
    console.log("Function B executed")
}

functionA(functionB);
//hide-end
```

Een voorbeeld van zo'n callback functie kan je hieronder vinden

```typescript codesandbox={"template": "typescript", "filename": "index.ts" }
let sum = (a: number, b: number, callback: (sum: number) => void) => {
  callback(a + b);
};

let printNumber = (number: number) => {
  console.log(number);
};

sum(1, 2, printNumber);
```