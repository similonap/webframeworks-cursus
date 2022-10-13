
import Labo4ShoppingList from '@site/src/components/LabSolutions/Labo4ShoppingList';
import Labo4TicTacToe from '@site/src/components/LabSolutions/Labo4TicTacToe';
import Labo4Slots from '@site/src/components/LabSolutions/Labo4Slots';
import Labo4MultiSelect from '@site/src/components/LabSolutions/Labo4MultiSelect';
import Labo4CounterList from '@site/src/components/LabSolutions/Labo4CounterList';


# Labo 4

- Event Handling
- State 

## 1. Shopping List

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo4-shoppinglist`.

Maak een component `ShoppingList` aan met de volgende functionaliteit:
- Het component heeft 1 state property `shoppingList` die een array bevat. Deze begint bij een lege array.
- Zorg ervoor dat je een lijst van items kan toevoegen aan de shopping list.
- Als een element toegevoeg wordt, moet de gebruiker een bevestiging zien dat het item toegevoegd is. Als de gebruiker foutieve hoeveelheid of geen naam ingeeft, moet er een foutmelding getoond worden.
- Zorg ervoor dat je een lijst van items kan verwijderen van de shopping list.
- Als een item verwijderd wordt, moet de gebruiker een bevestiging krijgen dat het item verwijderd wordt.

Gebruik dit component in de App component om de volgende pagina te maken:

<div style={{padding: 10, border: "1px dotted black"}}>
<Labo4ShoppingList/>
</div>

## 2. Kleuren Selectie

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo4-color-select`.

Maak een component `ColorSelect` aan met de volgende functionaliteit:

- Het component bevat een select met de volgende kleuren: `red`, `green`, `blue`, `yellow`, `orange`, `purple`, `black`, `white`. Er kunnen meerdere kleuren geselecteerd worden.
- Het component bevat een state property `selectedColors` die een array bevat met de geselecteerde kleuren.
- Het component bevat een button met de tekst "Show colors". Als de gebruiker op deze button klikt moet de gebruiker een lijst zien met de geselecteerde kleuren.

:::tip
Je moet hier twee states gebruiken: `selectedColors` en `colors`. De eerste state bevat de geselecteerde kleuren, de tweede state bevat de kleuren die moeten getoond worden. De tweede state wordt aangepast als de gebruiker op de button klikt. Het is een kopie van de eerste state op de moment dat de gebruiker op de button klikt.
:::

Gebruik dit component in de App component om de volgende pagina te maken:
<div style={{padding: 10, border: "1px dotted black"}}>
<Labo4MultiSelect/>
</div>

## 3. Filtering

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo4-filtering`.

Maak een component `Filtering` aan met de volgende functionaliteit:

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo4Filtering/>
</div>

## 4. Slots

Je breidt nu de slots machine uit die je gemaakt hebt in labo 2 uit met een aantal nieuwe functionaliteiten.

- Zorg voor een state `slots` die de array met slots bevat. Zorg ervoor dat deze initieel met random waarden gevuld is.
- Zorg voor een state `money` dat het geld van de speler bijhoudt. Zorg ervoor dat deze initieel op 100 staat.
- Zorg voor een button `Pull lever` die een functie aanroept die de `slots` state verandert naar een nieuwe array met random waarden. Als de speler gewonnen heeft (3 dezelfde symbolen), dan wordt de `money` state verhoogd met 20. Als de speler verloren heeft (3 verschillende symbolen), dan wordt de `money` state verlaagd met 1.
- Toon bovenaan het saldo van de speler.
- Als het saldo van de speler 0 is, dan wordt de button `Pull lever` disabled en wordt er een tekst getoond die zegt dat de speler geen geld meer heeft.

Het spel ziet er nu als volgt uit:

<div style={{padding: 10, border: "1px dotted black"}}>
<Labo4Slots/>
</div>

## 5. Counter list

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo4-counter-list`.

Maak een component `ButtonList` aan met de volgende functionaliteit:
- Het component bevat 1 state genaamd `counters`. Deze state bevat een array van getallen. Deze array begint bij een lege array.
- Het component bevat een button met de tekst "Add counter". Als de gebruiker op deze button klikt, moet er een nieuw getal aan de array toegevoegd worden. Het getal moet 0 zijn.
- Bij elke counter moet er een button getoond worden met de tekst "Increment" of "Decrement". Als de gebruiker op deze button klikt, moet het getal van de counter verhoogd of verlaagd worden.
- Onderaan staat de som van alle waarden van de counters.

<div style={{padding: 10, border: "1px dotted black"}}>
<Labo4CounterList/>
</div>

:::note
Je hoeft nog niet elke counter in een apart component te zetten. Je gaat dit later nog doen.
:::

## 6. Tic Tac Toe

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo2-tictactoe`.

Maak een component `TicTacToe` aan met de volgende functionaliteit:
- Het component bevat een `state` met een property `board` die een array bevat met 9 elementen. Elk element is een string met de waarde `''`.
- Gebruik de `map` functie om een array van 9 `div` elementen te maken. Elk `div` element heeft een `onClick` event handler die een functie aanroept die de `board` state verandert. De functie krijgt als parameter de index van het `div` element dat geklikt is.
- Als je op een `div` element klikt, wordt de waarde van het `div` element veranderd naar `X` of `O`. De speler die aan de beurt is, wordt bepaald door de index van het `div` element. Als de index even is, dan is het `X`, anders is het `O`.

Het spel ziet er nu als volgt uit:

<div style={{padding: 10, border: "1px dotted black"}}>
<Labo4TicTacToe/>
</div>

