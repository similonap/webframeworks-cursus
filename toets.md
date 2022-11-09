# Oefening 1

Maak een nieuw component `ColorBox` en zorg voor de volgende functionaliteit:
- Maak een array aan met 5 kleuren (bv. rood, groen, blauw, geel, paars).
- Maak een state variabele aan met de naam `color` en geef deze de waarde van de eerste kleur uit de array.
- Maak een div aan met een achtergrondkleur die overeenkomt met de waarde van de `color` state variabele.
- Maak een button aan met de tekst "Next color".
- Je hebt maar 1 state variabele nodig om deze oefening op te lossen.

# Oefening 2

- Maak een nieuw component `Calculator` en zorg voor de volgende functionaliteit:
- Plaats een invoerveld met type `number` en een label met de tekst "Getal 1".
- Plaats een invoerveld met type `number` en een label met de tekst "Getal 2".
- Plaats een select met de volgende opties:
    - optie 1: "Plus"
    - optie 2: "Min"
    - optie 3: "Keer"
    - optie 4: "Gedeeld door"
- Plaats een button met de tekst "Bereken".
- Maak een state variabele aan met de naam `result` en geef deze de waarde 0.
- Maak een div aan met de tekst "Resultaat: " en de waarde van de `result` state variabele. Deze div is enkel zichtbaar als de `result` state variabele een waarde heeft.

# Oefening 3

Maak een nieuw component `ChatBox` en zorg voor de volgende functionaliteit:

- Plaats een invoerveld en een label met de tekst "Naam".
- Plaats een invoerveld en een label met de tekst "Bericht".
- Plaats een button met de tekst "Verstuur".
- Maak een state variabele aan met de naam `messages` en geef deze de waarde van een lege array.
- Als de gebruiker op de "Verstuur" button klikt, voeg je een nieuw object toe aan de `messages` state variabele. Dit object bevat de volgende properties:
    - `name`: de waarde van het invoerveld met de naam "Naam".
    - `message`: de waarde van het invoerveld met de naam "Bericht".
    - `id`: een oplopende nummering vanaf 1. 
- Als het bericht in de lijst van messages staat, moet het invoerveld met de naam "Bericht" leeg gemaakt worden.
- Elk bericht kan verwijderd worden door op het kruisje te klikken. Als je een element uit een array verwijdert, moet je niet de `id` van de andere elementen aanpassen.
