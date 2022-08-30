---
sidebar_position: 1
---

# Folder structuur

Tot nu toe stond al onze React code in het `App.tsx` bestand. Zelfs al hadden we meerdere componenten dan zaten die ook allemaal in dit bestand vervat. Als alle code in hetzelfde bestand staat, is het moeilijk om de code terug te vinden die op een gegeven moment belangrijk is. Bovendien is het dan ook niet mogelijk één component te herbruiken zonder de code van andere componenten over te nemen.

In React zijn componenten niet gekoppeld aan een specifieke bestandenstructuur. Toch zijn er bepaalde, veel toegepaste, afspraken. Deze worden hier toegelicht.

## Aparte bestanden per component
Een eerste verbetering bestaat erin elke component in een eigen bestand te plaatsen. Componenten kunnen dan op dezelfde manier geïmporteerd worden als andere functies. Indien er bijvoorbeeld componenten `App`, `Header`, `List` en `ListItem` zijn, worden deze ondergebracht in `App.tsx`, `List.tsx` en `ListItem.tsx`.

We bekomen een structuur die er als volgt uitziet:
```
- src
--- App.tsx
--- List.tsx
--- ListItem.tsx
--- types.ts
```

Het bestand List.tsx ziet er dan als volgt uit:

```typescript codesandbox={"template": "react-split-files", "filename": "src/List.tsx"}
import ListItem from "./ListItem";
import { Game } from "./types";

interface ListProps {
    games: Game[]
}

const List = ({games}: ListProps) => {
  return (
    <div>
    {games.map((game: Game) => {
        return <ListItem key={game.id} game={game}/>
      })}
    </div>
  );
}

export default List;
```

We zorgen met de laatste lijn dat we de List component exporteren zodat andere bestanden die kunnen importeren. Je ziet hierboven ook hoe dat importeren in zijn werk zal gaan. Je ziet dat hier het keyword default bij de export wordt gezet. Dit is nodig zodat je de componenten kan importeren op de volgende manier.

```typescript
import ListItem from "./ListItem";
```

Soms zie je ook de syntax met { } in de import. Dit wil zeggen dat er meerdere functies, variabelen,... worden geëxporteerd in een bestand. Een goed voorbeeld hiervan is een nieuw bestand dat we hebben aangemaakt voor alle types in te beschrijven. We hebben alle types die met het model te maken hebben in 1 bestand gezet: `types.ts`. 

Op dit moment staat daar  1 interface in, maar het is uiteraard niet ondenkbaar dat daar meerdere interfaces zullen zitten. We exporteren dus elke interface apart.

```typescript codesandbox={"template": "react-split-files", "filename": "src/types.ts"}
export interface Game {
  id?: number
  name: string,
  releaseYear: number,
  sales: number
}
```

## Van component files naar React folders
Naarmate een project groeit, worden componenten complexer. Er worden styles en tests  toegevoegd. Je zou de vorige structuur kunnen blijven volgen en deze bestanden naast de component bestanden plaatsen. Vaak worden deze bestanden ook nog in een folder components geplaatst om het onderscheid te maken met andere code.
De bestandenstructuur ziet er dan bijvoorbeeld zo uit:

```
src
└── components
    ├── App.css
    ├── App.test.tsx
    ├── App.tsx
    ├── List.css
    ├── List.test.tsx
    └── List.tsx
```

Op termijn is deze aanpak niet houdbaar. Daarom verkiest men bij grotere projecten vaak één directory per component, als volgt: 

```
src
└── components
    ├── App
    │   ├── App.css
    │   ├── App.test.tsx
    │   └── App.tsx
    └── List
        ├── List.css
        ├── List.test.tsx
        └── List.tsx
```
De bestandsnamen in dit voorbeeld zijn zuiver ter illustratie. Afhankelijk van het gebruikte test framework, de techniek om componenten te stylen enzovoort kunnen er andere afspraken gevolgd worden. Hoe dan ook staan folders toe tijdens het ontwikkelen niet-relevante bestanden te verbergen. 

In sommige gevallen horen componenten sterk samen. In het voorbeeld bovenaan deze pagina werd gebruikt gemaakt van ListItem. Deze wordt enkel gebruikt als onderdeel van de List component. Meestal worden zo'n componenten samen in één folder geplaatst, als volgt:

```
src
└── components
    ├── App
    │   ├── App.css
    │   ├── App.test.tsx
    │   └── App.tsx
    └── List
        ├── List.css
        ├── List.test.tsx
        ├── List.tsx
        ├── ListItem.css
        ├── ListItem.test.tsx
        └── ListItem.tsx
```

## Absolute imports

Je zal al wel opgemerkt hebben tijdens het verplaatsen van alle components dat je structuur van je imports altijd met relatieve paden werken. Je herkent dit door imports zoals

```
import InputView from '../InputView/InputView';
import List from '../List/List';
import { Game } from '../../types';
```

je ziet dat je doorheen verschillende niveaus moet gaan aan de hand van `../` dit geeft aan dat het bestand een folder niveau hoger staat. Dit is niet zo'n handige manier van werken, zeker als je dingen begint te verplaatsen kan dit nogal onoverzichtelijk worden. Gelukkig is hier een oplossing voor. Open je `tsconfig.json` bestand en voeg de volgende lijn toe aan je compilerOptions

```
"baseUrl": "src"
```

je `tsconfig.json` bestand zal er dan ongeveer als volgt uitzien:

```typescript {13} codesandbox={"template": "react-folder-structure", "filename": "tsconfig.json"}
{
    "include": [
        "./src/**/*"
    ],
    "compilerOptions": {
        "strict": true,
        "esModuleInterop": true,
        "lib": [
            "dom",
            "es2015"
        ],
        "jsx": "react-jsx",
        "baseUrl": "src"
    }
}
```