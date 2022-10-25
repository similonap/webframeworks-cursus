import Labo3OmHooglaag from '@site/src/components/LabSolutions/Labo3OmHooglaag';
import Labo3Kleurkiezer from '@site/src/components/LabSolutions/Labo3Kleurkiezer';
import Labo3ContactForm from '@site/src/components/LabSolutions/Labo3ContactForm';
import Labo3InputField from '@site/src/components/LabSolutions/Labo3InputField';
import Labo3Checkbox from '@site/src/components/LabSolutions/Labo3Checkbox';
import Labo3Goods from '@site/src/components/LabSolutions/Labo3Goods';
import Labo3Loading from '@site/src/components/LabSolutions/Labo3Loading';
import Labo3RandomNicCage from '@site/src/components/LabSolutions/Labo3RandomNicCage';
import ReactPlayer from 'react-player'

# Labo 3

Voor dit labo moet je de volgende theorie bekeken hebben:
- Event Handling
- State 
    - Hoe state herkennen?
    - useState hook
    - setState met callback
    - Regels van useState
    - Select, Checkbox en Radio Buttons

## 1. State herkennen

Identificeer de state in de volgende componenten. Geef aan waar de state zich bevindt en wat de initiële waarde is.

<Labo3Goods/>

## 2. Input veld

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo3-inputfield`.

Maak een component `InputFields` aan met de volgende functionaliteit:
- Het component heeft 1 state property `inputValue` die een string bevat. Deze begint bij een lege string.
- Zorg ervoor dat je 5 input velden op je scherm staat die allemaal de waarde van `inputValue` bevatten.
- Zorg ervoor dat als je iets typt in 1 van de input velden, de waarde van `inputValue` verandert en alle input velden de nieuwe waarde bevatten.

Gebruik deze component in de `App` component om de volgende pagina te maken:

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo3InputField/>
</div>

## 3. Checkbox

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo3-checkbox`.

Maak een component `Checkbox` aan met de volgende functionaliteit:

- Plaats een checkbox in je component met als label `Show/Hide`
- Als de gebruiker de checkbox aanvinkt moet er een div getoond worden met een image als background.
- Als de gebruiker de checkbox uitzet moet de div verdwijnen.
<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo3Checkbox/>
</div>

## 4. Omhoog/Omlaag

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo3-omhooglaag`.

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

## 5. Loading indicator

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo3-loading`.

installeer de volgende npm packages:

```
npm install react-loader-spinner
```

Zorg er nu voor dat de applicatie de volgende functionaliteiten heeft:
- De applicatie bevat een `state` met een property `loading` die een boolean bevat. Deze begint bij `false`.
- De applicatie bevat een `button` met de tekst `Start loading`. Als je op deze knop klikt, wordt de waarde van `loading` op `true` gezet.
- Na 3 seconden wordt de waarde van `loading` op `false` gezet.
- Als de waarde van `loading` `true` is, wordt er een loading indicator getoond. De button verdwijnt.
- Als de waarde van `loading` `false` is, wordt de loading indicator niet getoond. De button verschijnt terug.

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo3Loading/>
</div>

## 6. Kleurkiezer

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo3-kleurkiezer`.

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

## 7. Contactformulier

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo3-contactformulier`.

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

## 8. Random Cage

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo3-random-cage`.

Maak een component `RandomCage` aan met de volgende functionaliteit:
- Het component bevat een `button` met de tekst `Random Cage`.
- Als je op de knop klikt, wordt er een willekeurige locatie op je scherm bepaald.
- Op die locatie wordt een afbeelding van Nicolas Cage getoond.
- Als je terug op de knop klikt, wordt de afbeelding op een andere locatie getoond.
- Je mag de volgende afbeelding tonen: https://www.placecage.com/gif/200/200

<Labo3RandomNicCage/>
