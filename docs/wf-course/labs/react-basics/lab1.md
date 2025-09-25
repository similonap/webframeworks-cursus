import LabBasicsExpressies from '@site/src/components/lab-solutions/lab-basics/lab-basics-expressies/App';
import LabBasicsSlotMachine from '@site/src/components/lab-solutions/lab-basics/lab-basics-slot-machine/App';
import LabBasicsLists from '@site/src/components/lab-solutions/lab-basics/lab-basics-lists/App';
import LabBasicsSlotMachineMap from '@site/src/components/lab-solutions/lab-basics/lab-basics-slot-machine-map/App';
import LabBasicsAlienAlphabet from '@site/src/components/lab-solutions/lab-basics/lab-basics-alien-alphabet/App';
import LabBasicsMultiplicationTables from '@site/src/components/lab-solutions/lab-basics/lab-basics-multiplication-tables/App';
import LabBasicsRainbow from '@site/src/components/lab-solutions/lab-basics/lab-basics-rainbow/App';
import LabBasicsChatMessages from '@site/src/components/lab-solutions/lab-basics/lab-basics-chat-messages/App';
import LabBasicsWhosThatPokemon from '@site/src/components/lab-solutions/lab-basics/lab-basics-whos-that-pokemon/App';
import ReactPlayer from 'react-player'

# Labo 1

Voor dit labo moet je de volgende theorie bekeken hebben:
- React app aanmaken
- TSX
- Statische bestanden
- Lijsten

## 1. Expressies

> 📂 **Naam project:** `lab-basics-expressies`  
> 🔗 **Basis project:** n/a

Maak een nieuwe react applicatie aan met de naam `lab-basics-expressies` en maak het volgende `App.tsx` component aan:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
const App = () => {
    return (
        <div>
            <h1>Labo 1</h1>
        </div>
    );
}

export default App;
```

#### Opdracht

- Maak een variabele met de naam `random` en geef deze de waarde van `Math.random()`.  
  Toon deze waarde in de browser.
- Maak een variabele met de naam `getal1` en geef deze een willekeurige waarde tussen 0 en 9  
  (gebruik bijvoorbeeld `Math.floor(Math.random() * 10)`).  
  Toon deze waarde in de browser.
- Maak een variabele met de naam `getal2` en geef ook deze een willekeurige waarde tussen 0 en 9.  
  Toon deze waarde in de browser.
- Maak twee functies:
  - `add(a, b)` die twee getallen optelt en het resultaat teruggeeft.
  - `multiply(a, b)` die twee getallen vermenigvuldigt en het resultaat teruggeeft.
- Gebruik een **fragment** (`<>...</>`) in plaats van `<div>` om je elementen te groeperen.
- Gebruik **conditionele rendering** om het resultaat te tonen:
  - Als `random` kleiner is dan `0.5`, toon je de som van de twee getallen met behulp van `add()`.
  - Als `random` groter is dan of gelijk aan `0.5`, toon je de vermenigvuldiging van de twee getallen met behulp van `multiply()`.
  - Gebruik hier de twee getallen `getal1` en `getal2` voor.

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabBasicsExpressies/>
</div>

#### Video

<ReactPlayer controls url='https://youtu.be/wHT0FYsQa6k'/>

## 2. Slotmachine

> 📂 **Naam project:** `lab-basics-slot-machine`  
> 🔗 **Basis project:** n/a

Maak een nieuwe react applicatie aan `lab-basics-slot-machine`.

#### Opdracht

- Toon alle mogelijke afbeeldingen van de slotmachine in de browser. Je kan de afbeeldingen hier onderaan gewoon downloaden vanuit het voorbeeld.
- Maak 3 variabelen met de namen `slot1`, `slot2` en `slot3` aan. Zorg ervoor dat deze variabele een willekeurige waarde krijgt tussen 0 en 4 (met 4 inbregrepen)
- Toon de tekst "Je hebt gewonnen" als `slot1`,`slot2` en `slot3` dezelfde waarde heeft. Toon de tekst "Je hebt verloren" als `slot1`,`slot2` en `slot3` een andere waarde hebben.
- Zorg ervoor dat er 3 afbeeldingen worden getoond afhankelijk van de waarde van slot1, slot2 en slot3.
    - Als de slot 0 is toon je een kers
    - Als de slot 1 is toon je een citroen
    - ...
- Probeer de afbeeldingen te tonen met behulp van import en een url uit de public folder.
- Er hoeft geen refresh knop te zijn. Elke keer dat je de pagina refresh zie je een nieuwe combinatie.

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabBasicsSlotMachine/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/v-MZWSG5uN0'/>

## 3. Lijsten

> 📂 **Naam project:** `lab-basics-lists`  
> 🔗 **Basis project:** n/a

Maak een nieuwe react applicatie aan `lab-basics-lists`.

#### Opdracht

- Maak een array met een aantal getallen in. Zorg ervoor dat een bepaald getal meerdere keren voorkomt in de array.
- Gebruik een unordered list (ul) om de getallen in de browser te tonen. Kies een goede key voor de list items.
- Maak een array met 5 student objecten aan. Elke student heeft een id, een naam en een leeftijd.
- Gebruik een ordered list (ol) om de namen van de studenten te tonen in de browser.
- Gebruik een ordered list (ol) om de namen van de stundenten waarvan de naam met de letter J begint te tonen in de browser. Gebruik een combinatie van filter/map.
- Gebruik een select met options element om de namen van de personen te tonen in de browser. 
- Gebruik een table om de namen en leeftijden van de personen te tonen in de browser.

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabBasicsLists/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/68O9gQZ8Ykk'/>

## 4. Slot machine met map

> 📂 **Naam project:** `lab-basics-slot-machine-map`  
> 🔗 **Basis project:** [`lab-basics-slot-machine`](lab1.md#2-slotmachine)

Maak een nieuwe react applicatie aan `lab-basics-slot-machine-map`. Kopieer je code van de vorige opdracht naar deze nieuwe applicatie.

#### Opdracht

- Zorg ervoor dat je niet meer werkt met aparte variabelen per slot, maar dat je een array maakt met een variabel aantal slots (bepaald in een variabele).
- Pas je code nu aan dat je gebruik maakt van een map functie om de slots te tonen in de browser.
- Ook de tekst "Je hebt gewonnen" of "Je hebt verloren" moet je nu bepalen met een array functie.

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabBasicsSlotMachineMap/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/eqS3Ovt2FYE'/>

## 5. Alien Alphabet

> 📂 **Naam project:** `lab-basics-alien-alphabet`  
> 🔗 **Basis project:** n/a

Maak een nieuwe react applicatie aan `lab-basics-alien-alphabet`.

#### Opdracht

We willen in deze opdracht een aanzet geven tot een vertaalprogramma voor een buitenaards alfabet. We hebben een afbeelding voor elke letter van het alfabet. We willen deze afbeeldingen tonen in de browser.

- Maak een array aan met alle letters van het alfabet. Je mag de letters zelf typen, of je kan gebruik maken van de `Array.from` functie. Zoek eens op hoe je aan de hand van de ASCII code een letter kan omzetten naar een string.
- Maak een array aan met alle afbeeldingen van het alfabet. De afbeelding van de letters kan je vinden op `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/` gevolgd door de letter in hoofdletters en de extensie `.png`. Je kan deze afbeeldingen gebruiken door de `src` property van de `img` tag te zetten op de url van de afbeelding.
  - Bv.:  
    `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/A.png`  
    `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/B.png`  
    `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/C.png`  
    ...
- Gebruik de map-functie om de afbeeldingen weer te geven in de browser. Elk element in de alphabetImages-array moet worden weergegeven als een `<img>` tag binnen een `<button>`-element.

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabBasicsAlienAlphabet/>
</div>

## 6. Maaltafels

> 📂 **Naam project:** `lab-basics-multiplication-tables`  
> 🔗 **Basis project:** n/a

Maak een nieuwe react applicatie aan `lab-basics-multiplication-tables`.

#### Opdracht

Maak een React-component met de naam MultiplicationTable die een tabel genereert met de vermenigvuldigingstabel van getallen van 1 tot 10. Elk cel in de tabel moet het resultaat van de vermenigvuldiging van het rijnummer en het kolomnummer bevatten.

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabBasicsMultiplicationTables/>
</div>

## 7. Regenboog

> 📂 **Naam project:** `lab-basics-rainbow`  
> 🔗 **Basis project:** n/a

Maak een nieuwe react applicatie aan `lab-basics-rainbow`.

#### Opdracht

Definieer een array met de naam colors om een reeks kleuren te genereren. De array moet 100 verschillende kleuren bevatten, waarbij elke kleur wordt gedefinieerd in het HSL (Hue, Saturation, Lightness) kleurenmodel. Elke kleur in de reeks moet een unieke tint hebben, variërend van 0 graden (rood) tot 360 graden (rood).

Je kan deze array gebruiken om de kleuren te genereren:

```typescript
const colors = Array.from({length: 100}, (_, i) => `hsl(${i * 360 / 100}, 100%, 50%)`);
```

Gebruik de map-functie om de kleuren in de array weer te geven als verticale div's op de webpagina. Elke balk moet een unieke kleur hebben, en de breedte van de balk moet 100% zijn, terwijl de hoogte 4 pixels moet zijn.

Je hebt op dit moment nog niet geleerd hoe je css gebruikt. Je kan dit doen aan de hand van inline css:

```typescript
<div style={{width: "100%", height: "4px", backgroundColor: "red"}}></div>
```

Dit wordt later nog uitgelegd! Begrijp je hoe dit werkt, kan je ook eens proberen de regenboog in de andere richting te laten gaan! Tip: Twee woorden: flex-direction en flex!

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabBasicsRainbow/>
</div>

## 8. Chat messages

> 📂 **Naam project:** `lab-basics-chat-messages`  
> 🔗 **Basis project:** n/a

Maak een nieuwe react applicatie aan `lab-basics-chat-messages`.

#### Opdracht

We willen een chat applicatie maken. We hebben een array met chat berichten. Elk bericht heeft een id, een naam, een bericht en een timestamp. We willen deze berichten tonen in de browser aan de hand van een eenvoudige tabel (zonder styling).

De data kan je gewoon in een variabele zetten. Je kan deze data gebruiken:

```typescript
const messages = [
    {
        from: 'Wolverine',
        content: 'Hey Mags, heard you tried to bend a spoon with your mind again. You need a hand with that?',
        date: '2023-09-20 10:15 AM'
    },
    {
        from: 'Magneto',
        content: 'Very funny, Logan. At least I don\'t need metal claws to pick my teeth.',
        date: '2023-09-20 10:17 AM'
    },
    {
        from: 'Wolverine',
        content: 'Touché, old man. But I bet you still can\'t beat me at a game of chess.',
        date: '2023-09-20 10:20 AM'
    },
    {
        from: 'Magneto',
        content: 'Chess? How pedestrian. I prefer a game of "Move All the Metal Objects Away From Wolverine."',
        date: '2023-09-20 10:22 AM'
    },
    {
        from: 'Wolverine',
        content: 'Haha, nice try, metalhead. But I\'ve got my adamantium skeleton to keep me company.',
        date: '2023-09-20 10:25 AM'
    },
    {
        from: 'Magneto',
        content: 'True, but it doesn\'t help you with fashion choices. Those sideburns, really, Logan?',
        date: '2023-09-20 10:27 AM'
    },
    {
        from: 'Wolverine',
        content: 'What can I say? They help me channel my inner bad boy.',
        date: '2023-09-20 10:30 AM'
    },
    {
        from: 'Magneto',
        content: 'Speaking of bad boys, have you seen what Deadpool\'s up to lately?',
        date: '2023-09-20 10:32 AM'
    },
    {
        from: 'Wolverine',
        content: 'Oh, don\'t get me started on that guy. He makes me look like a choirboy.',
        date: '2023-09-20 10:35 AM'
    },
    {
        from: 'Magneto',
        content: 'Agreed, Logan. Let\'s team up and take him down. It\'s the only way to save our reputation.',
        date: '2023-09-20 10:37 AM'
    }
];
```

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabBasicsChatMessages/>
</div>

## 9. Who's that Pokémon?

> 📂 **Naam project:** `lab-basics-whos-that-pokemon`  
> 🔗 **Basis project:** n/a

Maak een nieuwe react applicatie aan `lab-basics-whos-that-pokemon`. Maak een array met 150 Pokémon aan. Elke Pokémon heeft een id en een naam. We willen een afbeelding van een willekeurige Pokémon tonen. Onder de afbeelding tonen we 4 knoppen met de namen van 4 willekeurige Pokémon. 

De afbeelding kan gehaald worden op de volgende url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png`. 

Je kan de identiteit van de pokémon verbergen door `filter: "brightness(0)` te gebruiken op de afbeelding. De knoppen moeten nog niets doen.

Je kan beginnen met de volgende data:

```typescript
interface Pokemon {
    id: number;
    name: string;
}

const pokemons: Pokemon[] = [
    {id: 1, name: "bulbasaur"}, {id: 2, name: "ivysaur"}, {id: 3, name: "venusaur"}, {id: 4, name: "charmander"}, {id: 5, name: "charmeleon"},
    {id: 6, name: "charizard"}, {id: 7, name: "squirtle"}, {id: 8, name: "wartortle"}, {id: 9, name: "blastoise"}, {id: 10, name: "caterpie"},
    {id: 11, name: "metapod"}, {id: 12, name: "butterfree"}, {id: 13, name: "weedle"}, {id: 14, name: "kakuna"}, {id: 15, name: "beedrill"},
    {id: 16, name: "pidgey"}, {id: 17, name: "pidgeotto"}, {id: 18, name: "pidgeot"}, {id: 19, name: "rattata"}, {id: 20, name: "raticate"},
    {id: 21, name: "spearow"}, {id: 22, name: "fearow"}, {id: 23, name: "ekans"}, {id: 24, name: "arbok"}, {id: 25, name: "pikachu"},
    {id: 26, name: "raichu"}, {id: 27, name: "sandshrew"}, {id: 28, name: "sandslash"}, {id: 29, name: "nidoran-f"}, {id: 30, name: "nidorina"},
    {id: 31, name: "nidoqueen"}, {id: 32, name: "nidoran-m"}, {id: 33, name: "nidorino"}, {id: 34, name: "nidoking"}, {id: 35, name: "clefairy"},
    {id: 36, name: "clefable"}, {id: 37, name: "vulpix"}, {id: 38, name: "ninetales"}, {id: 39, name: "jigglypuff"}, {id: 40, name: "wigglytuff"},
    {id: 41, name: "zubat"}, {id: 42, name: "golbat"}, {id: 43, name: "oddish"}, {id: 44, name: "gloom"}, {id: 45, name: "vileplume"},
    {id: 46, name: "paras"}, {id: 47, name: "parasect"}, {id: 48, name: "venonat"}, {id: 49, name: "venomoth"}, {id: 50, name: "diglett"},
    {id: 51, name: "dugtrio"}, {id: 52, name: "meowth"}, {id: 53, name: "persian"}, {id: 54, name: "psyduck"}, {id: 55, name: "golduck"},
    {id: 56, name: "mankey"}, {id: 57, name: "primeape"}, {id: 58, name: "growlithe"}, {id: 59, name: "arcanine"}, {id: 60, name: "poliwag"},
    {id: 61, name: "poliwhirl"}, {id: 62, name: "poliwrath"}, {id: 63, name: "abra"}, {id: 64, name: "kadabra"}, {id: 65, name: "alakazam"},
    {id: 66, name: "machop"}, {id: 67, name: "machoke"}, {id: 68, name: "machamp"}, {id: 69, name: "bellsprout"}, {id: 70, name: "weepinbell"},
    {id: 71, name: "victreebel"}, {id: 72, name: "tentacool"}, {id: 73, name: "tentacruel"}, {id: 74, name: "geodude"}, {id: 75, name: "graveler"},
    {id: 76, name: "golem"}, {id: 77, name: "ponyta"}, {id: 78, name: "rapidash"}, {id: 79, name: "slowpoke"}, {id: 80, name: "slowbro"},
    {id: 81, name: "magnemite"}, {id: 82, name: "magneton"}, {id: 83, name: "farfetch'd"}, {id: 84, name: "doduo"}, {id: 85, name: "dodrio"},
    {id: 86, name: "seel"}, {id: 87, name: "dewgong"}, {id: 88, name: "grimer"}, {id: 89, name: "muk"}, {id: 90, name: "shellder"},
    {id: 91, name: "cloyster"}, {id: 92, name: "gastly"}, {id: 93, name: "haunter"}, {id: 94, name: "gengar"}, {id: 95, name: "onix"},
    {id: 96, name: "drowzee"}, {id: 97, name: "hypno"}, {id: 98, name: "krabby"}, {id: 99, name: "kingler"}, {id: 100, name: "voltorb"},
    {id: 101, name: "electrode"}, {id: 102, name: "exeggcute"}, {id: 103, name: "exeggutor"}, {id: 104, name: "cubone"}, {id: 105, name: "marowak"},
    {id: 106, name: "hitmonlee"}, {id: 107, name: "hitmonchan"}, {id: 108, name: "lickitung"}, {id: 109, name: "koffing"}, {id: 110, name: "weezing"},
    {id: 111, name: "rhyhorn"}, {id: 112, name: "rhydon"}, {id: 113, name: "chansey"}, {id: 114, name: "tangela"}, {id: 115, name: "kangaskhan"},
    {id: 116, name: "horsea"}, {id: 117, name: "seadra"}, {id: 118, name: "goldeen"}, {id: 119, name: "seaking"}, {id: 120, name: "staryu"},
    {id: 121, name: "starmie"}, {id: 122, name: "mr. mime"}, {id: 123, name: "scyther"}, {id: 124, name: "jynx"}, {id: 125, name: "electabuzz"},
    {id: 126, name: "magmar"}, {id: 127, name: "pinsir"}, {id: 128, name: "tauros"}, {id: 129, name: "magikarp"}, {id: 130, name: "gyarados"},
    {id: 131, name: "lapras"}, {id: 132, name: "ditto"}, {id: 133, name: "eevee"}, {id: 134, name: "vaporeon"}, {id: 135, name: "jolteon"},
    {id: 136, name: "flareon"}, {id: 137, name: "porygon"}, {id: 138, name: "omanyte"}, {id: 139, name: "omastar"}, {id: 140, name: "kabuto"},
    {id: 141, name: "kabutops"}, {id: 142, name: "aerodactyl"}, {id: 143, name: "snorlax"}, {id: 144, name: "articuno"}, {id: 145, name: "zapdos"},
    {id: 146, name: "moltres"}, {id: 147, name: "dratini"}, {id: 148, name: "dragonair"}, {id: 149, name: "dragonite"}, {id: 150, name: "mewtwo"},
    {id: 151, name: "mew"}
];
```

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabBasicsWhosThatPokemon/>
</div>
