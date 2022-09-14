import Labo1Exercise1 from '@site/src/components/LabSolutions/Labo1Exercise1';
import Labo1Exercise2 from '@site/src/components/LabSolutions/Labo1Exercise2';
import Labo1Exercise3 from '@site/src/components/LabSolutions/Labo1Exercise3';
import Labo1Exercise4 from '@site/src/components/LabSolutions/Labo1Exercise4';

# Labo 1

## 1. Expressies

Maak een nieuwe react applicatie aan met het create-react-app commando. 

```bash
npx create-react-app labo1-expressies --template typescript
```

en maak het volgende `App.tsx` component aan:

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

## 2. Slotmachine

Maak een nieuwe react applicatie aan `labo1-slotmachine` met het create-react-app commando. 

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

## 3. Lijsten

Maak een nieuwe react applicatie aan `labo1-lijsten` met het create-react-app commando.

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


## 4. Slot machine met map

Maak een nieuwe react applicatie aan `labo1-slotmachine-map` met het create-react-app commando. Kopieer je code van de vorige opdracht naar deze nieuwe applicatie.

#### Opdracht

- Zorg ervoor dat je niet meer werkt met aparte variabelen per slot, maar dat je een array maakt met een variabel aantal slots (bepaald in een variabele).
- Pas je code nu aan dat je gebruik maakt van een map functie om de slots te tonen in de browser.
- Ook de tekst "Je hebt gewonnen" of "Je hebt verloren" moet je nu bepalen met een array functie.

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo1Exercise4/>
</div>

