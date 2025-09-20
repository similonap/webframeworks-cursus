import LaboStateOmHooglaag from '@site/src/components/LabSolutions/LaboStateOmHooglaag';
import LaboStateKleurkiezer from '@site/src/components/LabSolutions/LaboStateKleurkiezer';
import LaboStateContactForm from '@site/src/components/LabSolutions/LaboStateContactForm';
import LaboStateInputField from '@site/src/components/LabSolutions/LaboStateInputField';
import LaboStateCheckbox from '@site/src/components/LabSolutions/LaboStateCheckbox';
import LaboStateGoods from '@site/src/components/LabSolutions/LaboStateGoods';
import LaboStateLoading from '@site/src/components/LabSolutions/LaboStateLoading';
import LaboStateRandomCat from '@site/src/components/LabSolutions/LaboStateRandomCat';
import Joske from '@site/src/components/LabSolutions/Joske';
import CodeSandbox from '@site/src/components/CodeSandbox/CodeSandbox';
import Maaltafels3 from '@site/src/components/LabSolutions/Maaltafels3';
import PenguinListState from '@site/src/components/LabSolutions/PenguinListState';

import ReactPlayer from 'react-player';

# Labo 4

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

<LaboStateGoods/>

## 2. Input veld

Maak een nieuwe React applicatie aan en noem deze `labo4-inputfield`.

Maak een component `InputFields` aan met de volgende functionaliteit:
- Het component heeft 1 state `inputValue` die een string bevat. Deze begint bij een lege string.
- Zorg ervoor dat je 5 input velden op je scherm staat die allemaal de waarde van `inputValue` bevatten.
- Zorg ervoor dat als je iets typt in 1 van de input velden, de waarde van `inputValue` verandert en alle input velden de nieuwe waarde bevatten.

Gebruik deze component in de `App` component om de volgende pagina te maken:

<div style={{padding: 10, border: "1px dotted black"}}>
    <LaboStateInputField/>
</div>

## 3. Checkbox

Maak een nieuwe React applicatie aan en noem deze `labo4-checkbox`.

Maak een component `Checkbox` aan met de volgende functionaliteit:

- Plaats een checkbox in je component met als label `Show/Hide`
- Als de gebruiker de checkbox aanvinkt moet er een div getoond worden met een image als background.
- Als de gebruiker de checkbox uitzet moet de div verdwijnen.
<div style={{padding: 10, border: "1px dotted black"}}>
    <LaboStateCheckbox/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/FVMpB_rGnBQ'/>

## 4. Maaltafels State

Maak een kopie van de maaltafels code die je in een van de vorige labo's hebt geschreven en zorg voor de volgende dingen:
- Zorg voor een input veld waarin je het getal kan ingeven waarvan je de maaltafel wil zien.
- Als het veld aangepast wordt, moet de maaltafel van dat getal getoond worden. 
- Je moet een state gebruiken om het getal `max` bij te houden. Dit getal bepaalt tot waar de maaltafel getoond moet worden. 
- Je kan een maximum van 10 kiezen in het input veld en een minimum van 2.

<Maaltafels3/>

## 5. Penguins met state

Maak een kopie van de `penguins` oefening van labo 2 en zorg ervoor dat je de volgende functionaliteiten toevoegt:
- Als je op een penguin klikt, wordt deze geselecteerd. De achtergrondkleur van de penguin verandert.
- Als je nog eens op dezelfde penguin klikt, wordt deze terug gedeselecteerd.
- Je kan meerdere penguins selecteren.

Tip: Je hebt een state nodig in de `PenguinCard` component om bij te houden of de penguin geselecteerd is of niet.

<PenguinListState/>

## 6. Omhoog/Omlaag

Maak een nieuwe React applicatie aan en noem deze `labo4-omhooglaag`.

Maak een component `Counter` aan met de volgende functionaliteit:
- De component bevat een `state` met de naam `count` die een getal bevat. Begint bij 0.
- De component bevat een `button` met de tekst `Omhoog`. Als je op deze knop klikt, wordt de waarde van `count` met 1 verhoogd.
- De component bevat een `button` met de tekst `Omlaag`. Als je op deze knop klikt, wordt de waarde van `count` met 1 verlaagd.
- De component bevat de tekst `Count: {count}`. Hier wordt de waarde van `count` getoond.
- Zorg ervoor dat de tekst rood wordt als `count` kleiner is dan 0 en groen wordt als `count` groter is dan 0. Als het gelijk is aan 0, wordt de tekst zwart.

Gebruik deze component in de `App` component om de volgende pagina te maken:

<div style={{padding: 10, border: "1px dotted black"}}>
    <LaboStateOmHooglaag/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/OMa72fFFRUI'/>

## 7. Loading indicator

Maak een nieuwe React applicatie aan en noem deze `labo4-loading`.

installeer de volgende npm packages:

```
npm install react-loader-spinner
```

Zorg er nu voor dat de applicatie de volgende functionaliteiten heeft:
- De applicatie bevat een `state` met als naam `loading` die een boolean bevat. Deze begint bij `false`.
- De applicatie bevat een `button` met de tekst `Start loading`. Als je op deze knop klikt, wordt de waarde van `loading` op `true` gezet.
- Na 3 seconden wordt de waarde van `loading` op `false` gezet.
- Als de waarde van `loading` `true` is, wordt er een loading indicator getoond. De button verdwijnt.
- Als de waarde van `loading` `false` is, wordt de loading indicator niet getoond. De button verschijnt terug.

<div style={{padding: 10, border: "1px dotted black"}}>
    <LaboStateLoading/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/SSZaOVdY3ls'/>

## 8. Kleurkiezer

Maak een nieuwe React applicatie aan en noem deze `labo4-kleurkiezer`.

Maak een component `ColorPicker` aan met de volgende functionaliteit:
- Het component bevat een `state` met als naam `color` die een kleur bevat. Begint bij `#000000`.
- Het component bevat een `input` met type `color`. Als je een andere kleur kiest, wordt de waarde van `color` aangepast.
- Het component bevat een `div` met een achtergrondkleur die gelijk is aan de waarde van `color`.
- Het component bevat ook een select met de volgende opties:
    - `#000000`
    - `#FF0000`
    - `#00FF00`
    - `#0000FF`
- Als je een optie kiest dan wordt ook de kleur aangepast.

Gebruik deze component in de `App` component om de volgende pagina te maken:

<LaboStateKleurkiezer/>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/pBx9IClu9eA'/>

## 9. Contactformulier

Maak een nieuwe React applicatie aan en noem deze `labo4-contactformulier`.

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

<LaboStateContactForm/>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/og0BReQkfz8'/>

## 10. Random Cat

Maak een nieuwe React applicatie aan en noem deze `labo4-random-cat`.

Maak een component `RandomCat` aan met de volgende functionaliteit:
- Het component bevat een `button` met de tekst `Random Cat`.
- Als je op de knop klikt, wordt er een willekeurige locatie op je scherm bepaald.
- Op die locatie wordt een afbeelding van Nicolas Cage getoond.
- Als je terug op de knop klikt, wordt de afbeelding op een andere locatie getoond.
- Je mag de volgende afbeelding tonen: `https://cataas.com/cat?width=200&height=200`

<LaboStateRandomCat/>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/nh5lVRHBj0s'/>

## 11. Joske het vierkant

Maak een nieuwe React applicatie aan en noem deze `labo4-joske`.

Je begint met Joske... Het statische vierkant:

<CodeSandbox template="react-joske-labo"/>

- Joske is een rood vierkant. Maar zou ook soms graag blauw zijn! Of zelfs groen! Pas Joske aan zodat als je op hem klikt, hij van kleur verandert. De eerste keer wordt hij blauw, de tweede keer groen, de derde keer rood, de vierde keer blauw, enzovoort.
- Joske zou graag van naam veranderen en Josje worden. Maak een input veld waarin je de naam van Joske kan aanpassen. Tijdens het aanpassen van de naam wordt de naam van Joske aangepast.
- Soms wil Josje toch terug Joske zijn. Zorg ervoor dat zijn naam kan gereset worden naar Joske via een knop.
- Josje is heel de tijd triestig. Zorg voor een dropdown waarin je kan kiezen uit verschillende emoties. Als je een emotie kiest, dan verandert de emotie van Josje. De emoties worden uitgedrukt in smileys.
- Soms wil Josje helemaal geen vierkant meer zijn. Hij zou graag ook een cirkel zijn. Zorg voor een checkbox om te togglen tussen vierkant en cirkel

Josje is nu een blij cirkeltje!

<Joske/>