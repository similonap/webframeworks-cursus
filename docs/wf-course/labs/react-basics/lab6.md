import Labo5Interval from '@site/src/components/LabSolutions/Labo5Interval';
import Labo5Pokemon from '@site/src/components/LabSolutions/Labo5Pokemon';
import Labo5LocalStorage from '@site/src/components/LabSolutions/Labo5LocalStorage';
import ReactPlayer from 'react-player';

# Labo 5

- Hooks

## 1. Interval

Maak een nieuwe React applicatie aan en noem deze `labo5-interval`.
<Timer/>
            
Maak de volgende componenten aan:

- Het `Timer` component. Dit component toont de tijd in seconden die verstreken is sinds de component is getoond. 
- Het `CurrentTime` component. Dit component toont de huidige tijd in het formaat `hh:mm:ss`.
- Het `RandomValue` component. Dit component toont een willekeurig getal tussen `min` en `max`.
- Alle componenten gebruiken `setInterval` om de tijd te updaten. Gebruik de `useEffect` hook om dit te doen.

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo5Interval/>
</div>

### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/QQA4PXp967c'/>

## 2. Pokemon

Maak een nieuwe React applicatie aan en noem deze `labo5-pokemon`.

- Maak een component `Pokedex` aan met als property `limit` die het aantal pokemon aangeeft dat getoond moet worden. Initieel mag je die property op 151 zetten.
- Maak gebruik van de `https://pokeapi.co/` om deze pokemon op te halen op het moment dat de component gemounted wordt. Gebruik de `useEffect` hook om dit te doen.
- Zorg voor een loading indicator die getoond wordt tot de data geladen is.
- Plaats een invoer veld bovenaan de lijst van pokemon. Deze filtert de lijst van pokemon op naam. De filtering gebeurd op het moment dat de gebruiker een letter intypt. 
- Plaats een invoerveld onderaan de lijst die aangeeft hoeveel pokemon er getoond mogen worden. Je dient deze filtering aan de hand van de `limit` query parameter te doen van de API. Pas vanaf de gebruiker op de button klikt, wordt de lijst van pokemon opnieuw opgehaald.

<div style={{padding: 10, border: "1px dotted black"}}>
<Labo5Pokemon/>
</div>

## 3. LocalStorage

Maak een nieuwe React applicatie aan en noem deze `labo5-localstorage`.

- Maak een nieuw component `DadJoke` aan. 
- Maak een functie loadJoke die een "awkward dad joke" ophaalt van de API `https://icanhazdadjoke.com/`. Gebruik de `fetch` API om de data op te halen. Plaats het resultaat in een state van het component.
- Zorg ervoor dat de functie wordt opgeroepen wanneer het component gemounted wordt. Gebruik de `useEffect` hook om dit te doen.
- Eenmaal de data geladen is, toon je de joke in een `<div>` element. Zorg voor een kaartje waarin de joke getoond wordt.
- Plaats een button `New Joke` onderaan de joke. Wanneer de gebruiker op deze button klikt, wordt er een nieuwe joke opgehaald.
- Plaats een button `Set as favorite` onderaan de joke. Wanneer de gebruiker op deze button klikt, wordt de huidige joke (als string) opgeslagen in de `localStorage` van de browser. 
- Bij het opstarten van de applicatie, wordt de laatst opgeslagen joke getoond. Gebruik hiervoor de `useEffect` hook.

<div style={{padding: 10, border: "1px dotted black"}}>
<Labo5LocalStorage/>
</div>

### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/-ZCPmx5HGvA'/>