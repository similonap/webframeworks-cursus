
import Labo4ShoppingList from '@site/src/components/LabSolutions/Labo4ShoppingList';
import Labo4TicTacToe from '@site/src/components/LabSolutions/Labo4TicTacToe';
import Labo4Slots from '@site/src/components/LabSolutions/Labo4Slots';
import Labo4MultiSelect from '@site/src/components/LabSolutions/Labo4MultiSelect';
import Labo4CounterList from '@site/src/components/LabSolutions/Labo4CounterList';
import Labo4Filtering from '@site/src/components/LabSolutions/Labo4Filtering';
import ReactPlayer from 'react-player';

# Labo 4

- Event Handling
- State 

## 1. Shopping List

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo4-shoppinglist`.

Maak een component `ShoppingList` aan met de volgende functionaliteit:
- Het component heeft een state property `shoppingList` die een array bevat. Deze begint bij een lege array.
- Zorg ervoor dat je een lijst van items kan toevoegen aan de shopping list.
- Als een element toegevoeg wordt, moet de gebruiker een bevestiging zien dat het item toegevoegd is. Als de gebruiker foutieve hoeveelheid of geen naam ingeeft, moet er een foutmelding getoond worden.
- Zorg ervoor dat je een lijst van items kan verwijderen van de shopping list.
- Als een item verwijderd wordt, moet de gebruiker een bevestiging krijgen dat het item verwijderd wordt.

Gebruik dit component in de App component om de volgende pagina te maken:

<div style={{padding: 10, border: "1px dotted black"}}>
<Labo4ShoppingList/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/48YqueBEB3Q'/>

## 2. Kleuren Selectie

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo4-color-select`.

Maak een component `ColorSelect` aan met de volgende functionaliteit:

- Het component bevat een select met de volgende kleuren: `red`, `green`, `blue`, `yellow`, `orange`, `purple`, `black`, `white`. Er kunnen meerdere kleuren geselecteerd worden.
- Het component bevat een state property `selectedColors` die een array bevat met de geselecteerde kleuren.
- Het component bevat een button met de tekst "Show colors". Als de gebruiker op deze button klikt moet de gebruiker een lijst zien met de geselecteerde kleuren.
- Als je op een kleur klikt in de lijst, krijgt de gebruiker een prompt met de vraag om een nieuwe kleur te kiezen. Als de gebruiker op "OK" klikt, moet de kleur in de lijst vervangen worden door de nieuwe kleur. 

:::tip
Je moet hier twee states gebruiken: `selectedColors` en `colors`. De eerste state bevat de geselecteerde kleuren, de tweede state bevat de kleuren die moeten getoond worden. De tweede state wordt aangepast als de gebruiker op de button klikt. Het is een kopie van de eerste state op de moment dat de gebruiker op de button klikt.
:::

Gebruik dit component in de App component om de volgende pagina te maken:
<div style={{padding: 10, border: "1px dotted black"}}>
<Labo4MultiSelect/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/w1tdhQ0psNc'/>

## 3. Filtering en sorting

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo4-filtering`.

Maak een component `Filtering` aan met de volgende functionaliteit:
- Maak een lijst van studenten met de volgende properties: `name`, `age`, `year`.
- Zorg voor een search input waar de gebruiker kan zoeken op naam.
- Als de gebruiker in de search input typt, moet de lijst gefilterd worden op de naam van de student. 
- Als je op de header van de tabel klikt, moet de lijst gesorteerd worden op de property waarop je geklikt hebt.
- Je hebt hier twee states nodig: `sortField` en `searchText`. De eerste state bevat de property waarop gesorteerd moet worden, de tweede state bevat de tekst die gebruikt wordt om te filteren.

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo4Filtering/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/wvtt_BGSNrc'/>

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

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/u1gLw9UwTh0'/>

## 5. Counter list

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo4-counter-list`.

Maak een component `ButtonList` aan met de volgende functionaliteit:
- Het component bevat 1 state genaamd `counters`. Deze state bevat een array van getallen. Deze array begint bij een lege array.
- Het component bevat een button met de tekst "Add counter". Als de gebruiker op deze button klikt, moet er een nieuw getal aan de array toegevoegd worden. Het getal moet 0 zijn.
- Bij elke counter moet er een button getoond worden met de tekst "Increment" of "Decrement". Als de gebruiker op deze button klikt, moet het getal van de overeenkomstige counter verhoogd of verlaagd worden.
- Onderaan staat de som van alle waarden van de counters.

<div style={{padding: 10, border: "1px dotted black"}}>
<Labo4CounterList/>
</div>

:::note
Je hoeft nog niet elke counter in een apart component te zetten. Je gaat dit later nog doen.
:::

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/FKcudUHxIc8'/>

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

