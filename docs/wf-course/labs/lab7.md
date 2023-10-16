import Labo7Pokemon from '@site/src/components/LabSolutions/Pokemon/App';
import BasicContext from '@site/src/components/LabSolutions/BasicContext';
import ReactPlayer from 'react-player';

# Labo 7

- React Router
- Context API

## 1. Basic context

Maak een nieuwe React applicatie aan en noem deze `labo7-basic-context`.

1. Creëer een context genaamd `SettingsContext`. De context moet twee waarden bijhouden: `color` en `setColor`. `color` is een string die een kleur waarde heeft en `setColor` is een functie die `color` kan aanpassen. De startwaarde van `color` moet 'red' zijn.

2. Maak een component genaamd `Square`. Dit component moet de `color` waarde uit de `SettingsContext` uitlezen en deze waarde gebruiken om de achtergrondkleur van een vierkant blok te bepalen. Het blok moet een breedte en hoogte hebben van 100 pixels met 10 pixels marge. 

3. Creëer een component `SquareRow`. Dit component moet drie `Square` componenten naast elkaar tonen.

4. Maak een component genaamd `SelectionBox`. Dit component moet een selectie box bevatten met de opties 'red', 'blue' en 'green'. De huidige geselecteerde waarde moet de `color` zijn uit de `SettingsContext`. Als de gebruiker een andere kleur selecteert, moet de `setColor` functie van de `SettingsContext` gebruikt worden om de kleur aan te passen.

5. Ook moet je het `App` component aanmaken. In dit component, maakt het gebruik van de `useState` hook om de huidige kleur en de `setColor` functie te bepalen. Dit moet vervolgens in de `SettingsContext` meegegeven worden. Het `App` component moet daarna het `SelectionBox` en `SquareRow` component weergeven, beide omringd door de `SettingsContext.Provider`.

6. Zorg er nu voor dat je ook op de `Square` component kan drukken om de kleur te veranderen. 

<BasicContext/>

## 2. Todo App

We gaan verder met de Todo app uit het vorige labo. Maak hier een kopie van zodat je de originele code nog hebt. Want we gaan hier nog wat uitbreidingen op maken.

Uitbreidingen:
- Zorg ervoor dat je de todo's uit een API kan ophalen. Je kan hiervoor gebruik maken van de [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API. Deze bevat een endpoint `/todos` die je kan gebruiken om todo's op te halen. 
- Plaats de Todo's en de code om ze in te lezen in een `TodoContext` zodat je deze kan gebruiken in de verschillende componenten.

## 3. Quiz App

We gaan verder met de Quiz app uit het vorige labo. Maak hier een kopie van zodat je de originele code nog hebt. Want we gaan hier nog wat uitbreidingen op maken.
  
Uitbreidingen:
- Herwerk de Quiz applicatie zodat deze gebruik maakt van een `QuizContext`. De functionaliteit van de applicatie blijft voor de rest volledig hetzelfde.
- Voorzie een button bovenaan de pagina om te togglen tussen dark en light mode. Zorg ervoor dat alle componenten in de applicatie aanpassen aan de gekozen mode. 

## 4. Pokemon app

<Labo7Pokemon/>