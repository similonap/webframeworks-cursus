import Labo4TicTacToe from '@site/src/components/LabSolutions/Labo4TicTacToe';
import Labo4Slots from '@site/src/components/LabSolutions/Labo4Slots';


# Labo 4

- Event Handling
- State 

## 1. Slots

Je breidt nu de slots machine uit die je gemaakt hebt in labo 2 uit met een aantal nieuwe functionaliteiten.

- Zorg voor een state `slots` die de array met slots bevat. Zorg ervoor dat deze initieel met random waarden gevuld is.
- Zorg voor een state `money` dat het geld van de speler bijhoudt. Zorg ervoor dat deze initieel op 100 staat.
- Zorg voor een button `Pull lever` die een functie aanroept die de `slots` state verandert naar een nieuwe array met random waarden. Als de speler gewonnen heeft (3 dezelfde symbolen), dan wordt de `money` state verhoogd met 20. Als de speler verloren heeft (3 verschillende symbolen), dan wordt de `money` state verlaagd met 1.
- Toon bovenaan het saldo van de speler.
- Als het saldo van de speler 0 is, dan wordt de button `Pull lever` disabled en wordt er een tekst getoond die zegt dat de speler geen geld meer heeft.

Het spel ziet er nu als volgt uit:

<Labo4Slots/>

## 2. Tic Tac Toe

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo2-tictactoe`.

Maak een component `TicTacToe` aan met de volgende functionaliteit:
- Het component bevat een `state` met een property `board` die een array bevat met 9 elementen. Elk element is een string met de waarde `''`.
- Gebruik de `map` functie om een array van 9 `div` elementen te maken. Elk `div` element heeft een `onClick` event handler die een functie aanroept die de `board` state verandert. De functie krijgt als parameter de index van het `div` element dat geklikt is.
- Als je op een `div` element klikt, wordt de waarde van het `div` element veranderd naar `X` of `O`. De speler die aan de beurt is, wordt bepaald door de index van het `div` element. Als de index even is, dan is het `X`, anders is het `O`.

<Labo4TicTacToe/>