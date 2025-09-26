
import LabStateArrayShoppingList from '@site/src/components/lab-solutions/lab-state-array/lab-state-array-shopping-list/App';
import LabStateArrayTicTacToe from '@site/src/components/lab-solutions/lab-state-array/lab-state-array-tic-tac-toe/App';
import LabStateArraySlotMachine from '@site/src/components/lab-solutions/lab-state-array/lab-state-array-slot-machine/App';
import LabStateArrayColorSelect from '@site/src/components/lab-solutions/lab-state-array/lab-state-array-color-select/App';
import LabStateArrayCounterList from '@site/src/components/lab-solutions/lab-state-array/lab-state-array-counter-list/App';
import LabStateArrayFiltering from '@site/src/components/lab-solutions/lab-state-array/lab-state-array-filtering/App';
import LabStateArrayAlienAlphabet from '@site/src/components/lab-solutions/lab-state-array/lab-state-array-alien-alphabet/App';
import LabStateArrayGameOfLife from '@site/src/components/lab-solutions/lab-state-array/lab-state-array-game-of-life/App';

import ReactPlayer from 'react-player';

# Labo 5

- Event Handling
- State 

## 1. Shopping List

> 📂 **Naam project:** `lab-state-shopping-list`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-shopping-list`.

Maak een component `ShoppingList` aan met de volgende functionaliteit:
- Het component heeft een state property `shoppingList` die een array bevat. Deze begint bij een lege array.
- Zorg ervoor dat je een lijst van items kan toevoegen aan de shopping list.
- Als een element toegevoeg wordt, moet de gebruiker een bevestiging zien dat het item toegevoegd is. Als de gebruiker foutieve hoeveelheid of geen naam ingeeft, moet er een foutmelding getoond worden.
- Zorg ervoor dat je een lijst van items kan verwijderen van de shopping list.
- Als een item verwijderd wordt, moet de gebruiker een bevestiging krijgen dat het item verwijderd wordt.

Gebruik dit component in de App component om de volgende pagina te maken:

<div style={{padding: 10, border: "1px dotted black"}}>
<LabStateArrayShoppingList/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/48YqueBEB3Q'/>

## 2. Kleuren Selectie

> 📂 **Naam project:** `lab-state-color-select`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-color-select`.

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
<LabStateArrayColorSelect/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/w1tdhQ0psNc'/>

## 3. Filtering en sorting

> 📂 **Naam project:** `lab-state-filtering`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-filtering`.

Maak een component `Filtering` aan met de volgende functionaliteit:
- Maak een lijst van studenten met de volgende properties: `name`, `age`, `year`.
- Zorg voor een search input waar de gebruiker kan zoeken op naam.
- Als de gebruiker in de search input typt, moet de lijst gefilterd worden op de naam van de student. 
- Als je op de header van de tabel klikt, moet de lijst gesorteerd worden op de property waarop je geklikt hebt.
- Je hebt hier twee states nodig: `sortField` en `searchText`. De eerste state bevat de property waarop gesorteerd moet worden, de tweede state bevat de tekst die gebruikt wordt om te filteren.

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabStateArrayFiltering/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/wvtt_BGSNrc'/>

## 4. Slots

> 📂 **Naam project:** `lab-state-slot-machine`  
> 🔗 **Basis project:** [`lab-components-slot-machine`](lab2.md#4-slotmachine)

Je breidt nu de slots machine uit die je gemaakt hebt in labo 2 uit met een aantal nieuwe functionaliteiten.

- Zorg voor een state `slots` die de array met slots bevat. Zorg ervoor dat deze initieel met random waarden gevuld is.
- Zorg voor een state `money` dat het geld van de speler bijhoudt. Zorg ervoor dat deze initieel op 100 staat.
- Zorg voor een button `Pull lever` die een functie aanroept die de `slots` state verandert naar een nieuwe array met random waarden. Als de speler gewonnen heeft (3 dezelfde symbolen), dan wordt de `money` state verhoogd met 20. Als de speler verloren heeft (3 verschillende symbolen), dan wordt de `money` state verlaagd met 1.
- Toon bovenaan het saldo van de speler.
- Als het saldo van de speler 0 is, dan wordt de button `Pull lever` disabled en wordt er een tekst getoond die zegt dat de speler geen geld meer heeft.

Het spel ziet er nu als volgt uit:

<div style={{padding: 10, border: "1px dotted black"}}>
<LabStateArraySlotMachine/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/u1gLw9UwTh0'/>

## 5. Counter list

> 📂 **Naam project:** `lab-state-counter-list`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-counter-list`.

Maak een component `ButtonList` aan met de volgende functionaliteit:
- Het component bevat 1 state genaamd `counters`. Deze state bevat een array van getallen. Deze array begint bij een lege array.
- Het component bevat een button met de tekst "Add counter". Als de gebruiker op deze button klikt, moet er een nieuw getal aan de array toegevoegd worden. Het getal moet 0 zijn.
- Bij elke counter moet er een button getoond worden met de tekst "Increment" of "Decrement". Als de gebruiker op deze button klikt, moet het getal van de overeenkomstige counter verhoogd of verlaagd worden.
- Onderaan staat de som van alle waarden van de counters.

<div style={{padding: 10, border: "1px dotted black"}}>
<LabStateArrayCounterList/>
</div>

:::note
Je hoeft nog niet elke counter in een apart component te zetten. Je gaat dit later nog doen.
:::

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/FKcudUHxIc8'/>

## 6. Tic Tac Toe

> 📂 **Naam project:** `lab-state-tic-tac-toe`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-tic-tac-toe`.

Maak een component `TicTacToe` aan met de volgende functionaliteit:
- Het component bevat een `state` met de naam `board` die een array bevat met 9 elementen. Elk element is een string met de waarde `''`.
- Het component bevat een `state` met de naam `player` die de waarde `X` of `O` bevat. Dit is de speler die aan de beurt is. De speler begint bij `X`.
- Gebruik de `map` functie om een array van 9 `div` elementen te maken. Elk `div` element heeft een `onClick` event handler die een functie aanroept die de `board` state verandert. De functie krijgt als parameter de index van het `div` element dat geklikt is.
- Als je op een `div` element klikt, wordt de waarde van het `div` element veranderd naar het symbool van de speler die aan de beurt is.

Het spel ziet er nu als volgt uit:

<div style={{padding: 10, border: "1px dotted black"}}>
<LabStateArrayTicTacToe/>
</div>

## 7. Alien Alphabet

> 📂 **Naam project:** `lab-state-alien-alphabet`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-alien-alphabet`.

- Maak een array aan die de inhoud van de volgende json bevat. Je mag deze gewoon copy pasten: https://raw.githubusercontent.com/slimmii/alien-alphabet/master/alien.json . Zorg wel dat je de interface juist hebt.
- Zorg ervoor dat alle images van de letters getoond worden. Je kan dit in een button zetten.
- Als je op een alien letter klikt moet deze toegevoegt worden aan een array. Je moet het volledige object toevoegen, niet enkel de letter.
- Toon de letters die je gekozen hebt in een lijst.
- Voeg een backspace button toe die het laatste element van de array verwijdert.
- Voeg een clear button toe die de array leeg maakt.

<div style={{padding: 10, border: "1px dotted black"}}>
<LabStateArrayAlienAlphabet/>
</div>

## 8. Game of Life (1)

> 📂 **Naam project:** `lab-state-game-of-life`  
> 🔗 **Basis project:** n/a

In deze opdracht wordt van je verwacht om een React-component te implementeren voor een eenvoudig spelbord van het Game of Life spel. We gaan dit spelbord later gebruiken om een volledige implementatie van het spel te maken.

- Maak een React-component genaamd LifeGameBoard.
- Implementeer een functie initializeGrid(rows, columns) die een tweedimensionale array genereert met rows rijen en columns kolommen, waarbij elke cel een willekeurige waarde heeft van 0 of 1 om de levende en dode cellen te vertegenwoordigen.
- Voeg twee invoervelden toe voor het aantal rijen en kolommen, en een knop om het bord te vernieuwen.
- Implementeer een methode setBoard die wordt aangeroepen wanneer de knop wordt ingedrukt om het bord te vernieuwen. Deze methode moet het spelbord opnieuw initialiseren met het opgegeven aantal rijen en kolommen.
- Implementeer een methode flipElement(x, y) die wordt aangeroepen wanneer een cel op het bord wordt geklikt. Deze methode moet de staat van de cel omkeren (van 0 naar 1 of van 1 naar 0) en de nieuwe staat van het bord weergeven.
- Zorg ervoor dat het bord wordt weergegeven als een grid, waarbij elke cel wordt weergegeven als een div-element met een achtergrondkleur die overeenkomt met de staat van de cel (0 voor dode cellen, 1 voor levende cellen).
- Laat de gebruiker de gewenste grootte van het bord opgeven door de waarden in de invoervelden te wijzigen.
- Zorg ervoor dat de staat van het bord correct wordt bijgewerkt wanneer cellen worden omgedraaid of wanneer het bord wordt vernieuwd.

<LabStateArrayGameOfLife/>
