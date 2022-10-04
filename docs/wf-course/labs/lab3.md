import Labo3OmHooglaag from '@site/src/components/LabSolutions/Labo3OmHooglaag';
import Labo3Kleurkiezer from '@site/src/components/LabSolutions/Labo3Kleurkiezer';
import Labo3ContactForm from '@site/src/components/LabSolutions/Labo3ContactForm';
import Labo3InputField from '@site/src/components/LabSolutions/Labo3InputField';

# Labo 3

Voor dit labo moet je de volgende theorie bekeken hebben:
- Event Handling
- State
- Formulieren

## 1. Input veld

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo2-inputfield`.

Maak een component `InputFields` aan met de volgende functionaliteit:
- Het component heeft 1 state property `inputValue` die een string bevat. Deze begint bij een lege string.
- Zorg ervoor dat je 5 input velden op je scherm staat die allemaal de waarde van `inputValue` bevatten.
- Zorg ervoor dat als je iets typt in 1 van de input velden, de waarde van `inputValue` verandert en alle input velden de nieuwe waarde bevatten.

Gebruik deze component in de `App` component om de volgende pagina te maken:

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo3InputField/>
</div>

## 2. Omhoog/Omlaag

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo2-omhooglaag`.

Maak een component `Counter` aan met de volgende functionaliteit:
- De component bevat een `state` met een property `count` die een getal bevat. Begint bij 0.
- De component bevat een `button` met de tekst `Omhoog`. Als je op deze knop klikt, wordt de waarde van `count` met 1 verhoogd.
- De component bevat een `button` met de tekst `Omlaag`. Als je op deze knop klikt, wordt de waarde van `count` met 1 verlaagd.
- De component bevat de tekst `Count: {count}`. Hier wordt de waarde van `count` getoond.
- Zorg ervoor dat de tekst rood wordt als `count` kleiner is dan 0 en groen wordt als `count` groter is dan 0. Als het gelijk is aan 0, wordt de tekst zwart.

Gebruik deze component in de `App` component om de volgende pagina te maken:

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo3OmHooglaag/>
</div>

## 3. Kleurkiezer

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo2-kleurkiezer`.

Maak een component `ColorPicker` aan met de volgende functionaliteit:
- Het component bevat een `state` met een property `color` die een kleur bevat. Begint bij `#000000`.
- Het component bevat een `input` met type `color`. Als je een andere kleur kiest, wordt de waarde van `color` aangepast.
- Het component bevat een `div` met een achtergrondkleur die gelijk is aan de waarde van `color`.
- Het component bevat ook een select met de volgende opties:
    - `#000000`
    - `#FF0000`
    - `#00FF00`
    - `#0000FF`
- Als je een optie kiest dan wordt ook de kleur aangepast.

Gebruik deze component in de `App` component om de volgende pagina te maken:

<Labo3Kleurkiezer/>

## 4. Contactformulier

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo2-contactformulier`.

Maak een component `ContactForm` aan met de volgende functionaliteit:
- Het component bevat 3 `input` elementen met de volgende labels:
    - First name
    - Last name
    - Email
- Het component bevat een `textarea` met de label `Message`.
- Het component bevat een `button` met de tekst `Send`.
- Als je op de knop klikt, wordt de volgende tekst getoond: `Thanks {firstName} {lastName}! We will contact you at {email}.`
- De velden worden leeggemaakt na het versturen van het formulier.
- Zorg dat de button disabled is als de velden niet allemaal ingevuld zijn.
- Je hebt hier 5 states nodig:
    - `firstName` (bevat de waarde van het `input` element firstName)
    - `lastName` (bevat de waarde van het `input` element lastName)
    - `email` (bevat de waarde van het `input` element email)
    - `message` (bevat de waarde van het `textarea` element)
    - `confirmationText` (bevat de text die getoond wordt na het versturen van het formulier)

Gebruik deze component in de `App` component om de volgende pagina te maken:

<Labo3ContactForm/>