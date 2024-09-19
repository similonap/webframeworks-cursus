import Labo1Exercise1 from '@site/src/components/LabSolutions/Labo1Exercise1';
import Labo1Exercise2 from '@site/src/components/LabSolutions/Labo1Exercise2';
import Labo1Exercise3 from '@site/src/components/LabSolutions/Labo1Exercise3';
import Labo1Exercise4 from '@site/src/components/LabSolutions/Labo1Exercise4';
import Labo1AlienAlphabet from '@site/src/components/LabSolutions/Labo1AlienAlphabet';
import Regenboog from '@site/src/components/LabSolutions/Regenboog';
import Maaltafels from '@site/src/components/LabSolutions/Maaltafels';
import ChatMessages from '@site/src/components/LabSolutions/ChatMessages';
import WhosThatPokemonBasic from '@site/src/components/LabSolutions/WhosThatPokemonBasic';
import ReactPlayer from 'react-player'

# Labo 1

Voor dit labo moet je de volgende theorie bekeken hebben:
- React app aanmaken
- TSX
- Statische bestanden
- Lijsten

## 1. Expressies

Maak een nieuwe react applicatie aan en maak het volgende `App.tsx` component aan:

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
- Maak een variabele aan met de naam `random` en geef deze de waarde van `Math.random()`. Toon deze waarde in de browser. 
- Maak een variabele aan met de naam `getal1` en geef deze een waarde tussen 0 en 10. Toon deze waarde in de browser.
- Maak een variabele aan met de naam `getal2` en geef deze een waarde tussen 0 en 10.
Toon deze waarde in de browser.
- Maak een functie som aan die 2 parameters heeft en deze optelt. Gebruik deze functie om de som van `getal1` en `getal2` te berekenen en deze te tonen in de browser. 
- Maak een functie vermenigvuldiging aan die 2 parameters heeft en deze vermenigvuldigt. Gebruik deze functie om de vermenigvuldiging van `getal1` en `getal2` te berekenen en deze te tonen in de browser.
- Vervang de div tags met een fragment tag.
- Gebruik conditionele rendering om een boodschap te tonen in de browser afhankelijk van de waarde van `random`. Als `random` groter is dan 0.5 dan tonen we de vermenivuldiging van de twee getallen, anders tonen we de som van de twee getallen.

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo1Exercise1/>
</div>

#### Video

<ReactPlayer controls url='https://youtu.be/wHT0FYsQa6k'/>

## 2. Slotmachine

Maak een nieuwe react applicatie aan `labo1-slotmachine`.

#### Opdracht

- Toon alle mogelijke afbeeldingen van de slotmachine in de browser.
- Maak 3 variabelen met de namen `slot1`, `slot2` en `slot3` aan. Zorg ervoor dat deze variabele een willekeurige waarde krijgt tussen 0 en 4 (met 4 inbregrepen)
- Toon de tekst "Je hebt gewonnen" als `slot1`,`slot2` en `slot3` dezelfde waarde heeft. Toon de tekst "Je hebt verloren" als `slot1`,`slot2` en `slot3` een andere waarde hebben.
- Zorg ervoor dat er 3 afbeeldingen worden getoond afhankelijk van de waarde van slot1, slot2 en slot3.
    - Als de slot 0 is toon je een kers
    - Als de slot 1 is toon je een citroen
    - ...
- Probeer de afbeeldingen te tonen met behulp van import, require en een url (public folder)

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo1Exercise2/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/v-MZWSG5uN0'/>

## 3. Lijsten

Maak een nieuwe react applicatie aan `labo1-lijsten`.

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
    <Labo1Exercise3/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/68O9gQZ8Ykk'/>

## 4. Slot machine met map

Maak een nieuwe react applicatie aan `labo1-slotmachine-map`. Kopieer je code van de vorige opdracht naar deze nieuwe applicatie.

#### Opdracht

- Zorg ervoor dat je niet meer werkt met aparte variabelen per slot, maar dat je een array maakt met een variabel aantal slots (bepaald in een variabele).
- Pas je code nu aan dat je gebruik maakt van een map functie om de slots te tonen in de browser.
- Ook de tekst "Je hebt gewonnen" of "Je hebt verloren" moet je nu bepalen met een array functie.

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo1Exercise4/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/eqS3Ovt2FYE'/>

## 5. Alien Alphabet

Maak een nieuwe react applicatie aan `alien-alphabet`.

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
    <Labo1AlienAlphabet/>
</div>

## 6. Maaltafels

Maak een nieuwe react applicatie aan `maaltafels`.

#### Opdracht

Maak een React-component met de naam MultiplicationTable die een tabel genereert met de vermenigvuldigingstabel van getallen van 1 tot 10. Elk cel in de tabel moet het resultaat van de vermenigvuldiging van het rijnummer en het kolomnummer bevatten.

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <Maaltafels/>
</div>

## 7. Regenboog

Maak een nieuwe react applicatie aan `regenboog`.

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
    <Regenboog/>
</div>

## 8. Chat messages

Maak een nieuwe react applicatie aan `chat-messages`.

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
    <ChatMessages/>
</div>

## 9. Who's that Pokémon?

Maak een nieuwe react applicatie aan `whos-that-pokemon`. Maak een array met 150 Pokémon aan. Elke Pokémon heeft een id en een naam. We willen een afbeelding van een willekeurige Pokémon tonen. Onder de afbeelding tonen we 4 knoppen met de namen van 4 willekeurige Pokémon. 

De afbeelding kan gehaald worden op de volgende url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png`. 

Je kan de identiteit van de pokémon verbergen door `filter: "brightness(0)` te gebruiken op de afbeelding. De knoppen moeten nog niets doen.

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <WhosThatPokemonBasic/>
</div>
