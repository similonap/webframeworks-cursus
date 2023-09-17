import Labo7Pokemon from '@site/src/components/LabSolutions/Pokemon/App';

# Labo 7

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

## 2. Animals advanced routing

Pas de vorige oefening aan zodat de lijst van dieren in een json bestand zit. Je kan bijvoorbeeld `json-server` gebruiken om een REST API voor deze data te maken. Je moet dus deze keer gebruik maken van dynamische routes bv. `/animals/[name]`. 

## 3. Pokemon app

Maak de pokemon app oefening van labo 7 opnieuw maar gebruik deze keer Next.js om de routing te doen.

<Labo7Pokemon/>