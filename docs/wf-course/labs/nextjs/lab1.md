import Labo7Pokemon from '@site/src/components/LabSolutions/Pokemon/App';
import ReactPlayer from 'react-player';

# Labo 1

- Next.js routing

## 1. Animals basic routing

Maak een nieuwe Next.js applicatie aan met de naam "animals". Maak een home pagina met een aantal links naar verschillende dieren. Als je op een link klikt, moet je naar een pagina gaan met een afbeelding van het dier. De routes van de applicatie moeten er als volgt uitzien:

```bash
/ -> home pagina
/animals/dog -> pagina met een afbeelding van een hond
/animals/cat -> pagina met een afbeelding van een kat
/animals/hamster -> pagina met een afbeelding van een hamster
```

Je mag op deze moment nog aparte pagina's maken voor de verschillende dieren. Je moet dus nog geen gebruik maken van dynamische routes.

### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/2PTksSxAM2Q'/>

## 2. Animals advanced routing

Pas de vorige oefening aan zodat je gebruik maakt van dynamische routes. Bv. `/animals/[name]`. De lijst van dieren moet komen van een externe API. Je kan bijvoorbeeld `json-server` gebruiken om een REST API voor deze data te maken.

Voorzie een 404 pagina voor als de gebruiker een ongeldige route ingeeft. 

### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/TgUFKnVsk7M'/>

## 3. API routing

Pas nu de vorige applicatie aan zodat die gebruik maakt van een API route om de data op te halen. Je hoeft dus niet meer gebruik maken van de json-server. Je kan de data gewoon in een bestand zetten en die importeren in de API route.

### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/38mheZvLQ_Y'/>

## 4. Pokemon app

Maak de pokemon app oefening van labo 7 (react basics) opnieuw maar gebruik deze keer Next.js om de routing te doen.

<Labo7Pokemon/>

### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/tKTH_B1FP6Q'/>