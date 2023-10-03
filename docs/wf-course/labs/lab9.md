import Labo7Pokemon from '@site/src/components/LabSolutions/Pokemon/App';

# Labo 9

- Server side rendering
- Static site Generation

## 1. Animals 

Pas de animals oefening van vorige week aan zodat je gebruik maakt van server side rendering. Je mag de data uit een json bestand halen maar dit moet volledig server side gebeuren. Je mag dus geen fetch gebruiken in de browser.

## 2. SSG Animals

Pas de animals oefening nu aan zodat je gebruik maakt van static site generation. Elke pagina moet dus op voorhand gegenereerd worden. 

## 3. Pokemon app

Pas de pokemon app oefening van vorige week aan zodat je gebruik maakt van static site generation. Elke pagina moet op voorhand gegenereerd worden.

## 4. Priem getallen

Maak een nieuwe Next.js applicatie aan met de naam "prime-numbers". We willen een pagina maken die het zoeken naar priem getallen demonstreert. 

bv: 
- het 5de priem getal is 11 want 2, 3, 5, 7, 11 zijn de eerste 5 priem getallen.
- het 10de priem getal is 29 want 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 zijn de eerste 10 priem getallen.
- het 100ste priem getal is 541 want 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ..., 523, 541 zijn de eerste 100 priem getallen.

Wij willen een pagina voorzien waar de eerste 4000 priem getallen op staan. Hiervoor kan je de volgende functie gebruiken: 

```ts
const nthprime = (n: number) => {
    let count = 0;
    let i = 1;
    while (count < n) {
        i++;
        if (isPrime(i)) {
            count++;
        }
    }
    return i;
}

const isPrime = (n: number) => {
    if (n < 2) {
        return false;
    }
    if (n == 2) {
        return true;
    }
    if (n % 2 == 0) {
        return false;
    }
    let maxDivisor = Math.sqrt(n);
    for (let i = 3; i <= maxDivisor; i += 2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
```

Laat je niet afschrikken door de naam van deze oefening. Het is een oefening die je moet doen om te leren hoe je static site generation kan gebruiken. De wiskunde achter het genereren van de priem getallen is niet belangrijk en moet je niet begrijpen.

Voor het 100ste priem getal is dit dus:

```ts
nthprime(100) // 541
```

Wil je een array van de eerste 100 priem getallen dan kan je dit doen:

```ts
const primes = [];
for (let i = 1; i <= 100; i++) {
    primes.push(nthprime(i));
}
```

Maak de volgende pagina's aan:
- prime-spa -> deze pagina moet de eerste 4000 priem getallen tonen op basis van client side rendering. 
- prime-ssr -> deze pagina moet de eerste 4000 priem getallen tonen op basis van server side rendering.
- prime-ssg -> deze pagina moet de eerste 4000 priem getallen tonen op basis van static site generation.

Je moet deze oefening niet in dev mode uitvoeren want static site generation werkt niet in dev mode. Je kan de applicatie dus gewoon builden en runnen.

```
npm run build
npm run start
```

De pagina zal er als volgt uitzien: 

![Prime images](../images/prime.png)



