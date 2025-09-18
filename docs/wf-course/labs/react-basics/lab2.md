import Labo2Slots from '@site/src/components/LabSolutions/Labo2Slots';
import CodeSandbox from '@site/src/components/CodeSandbox/CodeSandbox';
import Labo2BasicComponents from '@site/src/components/LabSolutions/Labo2BasicComponents';
import Maaltafels2 from '@site/src/components/LabSolutions/Maaltafels2';
import WhosThatPokemonComponent from '@site/src/components/LabSolutions/WhosThatPokemonComponent';
import RegenboogProps from '@site/src/components/LabSolutions/RegenboogProps';
import PenguinList from '@site/src/components/LabSolutions/PenguinList';
import ReactPlayer from 'react-player'

# Labo 2

Voor dit labo moet je de volgende theorie bekeken hebben:
- Componenten
- Props
- Folder structuur
- Styling

## 1. Simpele componenten

Maak een nieuwe React applicatie aan en noem deze `labo2-component`.

Maak de volgende componenten aan:
- `Header` met als props `title` en `subtitle`
- `List` met als props `items` (array van strings). 
    - Elke string wordt getoond in een apart component `ListItem` met als props `text`.
    - Gebruik hiervoor de `map` functie. 
    - Gebruik een ongeordende lijst (`<ul>`) om de items te tonen.
- `Footer` met als props `copy` en `year`

Gebruik deze componenten in de `App` component om de volgende pagina te maken:

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo2BasicComponents/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/V6N5Nt_YNA8'/>

## 2. Facebook cards

Maak een nieuw project aan en noem deze `labo2-facebook`.

Neem de volgende code over. 

<CodeSandbox template="react-facebook-labo"/>

Teken eerst op papier hoe je deze facebook card zou opdelen in componenten. Splits deze componenten op in aparte componenten. Zorg dat alle content aanpasbaar is via props.

Let er op dat componenten ook kunnen bestaan uit andere componenten. 

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/jAKwAgCFfws'/>

## 3. Penguins

Maak een nieuw project aan en noem deze `labo2-penguins`. 
- Download het bestand <a href="/assets/penguins.json" download>penguins.json</a> in je `src` folder.
- importeer dit bestand in je project aan de hand van `import penguins from './penguins.json';`
- Maak een component `PenguinCard` dat een penguin toont. Dit component aanvaard een property `penguin` met het type van een penguin uit het json bestand.
- Filter de pinguïns zodat je enkel de vrouwelijke pinguïns toont (property `gender` is "Female").
- Toon alle vrouwelijke pinguïns in een grid met 3 kolommen. Gebruik hiervoor css modules.

<div style={{padding: 10, border: "1px dotted black"}}>
    <PenguinList/  >
</div>

## 4. Slotmachine

Gebruik de slotmachine code die je in labo 1 hebt geschreven en zorg voor de volgende dingen:

- `SlotMachine`: aanvaard een property `slots` die het aantal slots aangeeft. Deze component bevat de logica om de slots te genereren en te tonen. Je kan deze component ook gebruiken om de logica te schrijven om te bepalen of de speler gewonnen heeft of verloren heeft.

    ```
    <SlotMachine slots={5} />
    ```
- `Slot`: deze component bevat de logica om een slot te tonen. De waarde van de slot wordt doorgegeven via een property `value`. 

    ```
    <Slot value={1} />
    ```

- Zorg ervoor dat je meerdere slotmachines kan tonen op een pagina. Toon bijvoorbeeld een SlotMachine met 5 slots, een SlotMachine met 4 slots en een SlotMachine met 3 slots.

- Gebruik css modules om de stijl van de slotmachine te bepalen. Je bent vrij om de stijl te kiezen.

De applicatie moet ongeveer er als volgt uitzien:

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo2Slots/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/fRYEQ-NR0aU'/>

## 5. Maaltafels component

Maak een kopie van de maaltafels oefening van labo 1 en zorg ervoor dat je de volgende componenten hebt:

- `MultiplicationTable`: deze component bevat de logica om de tabel te tonen. Deze component bevat een property `max` die het maximum getal aangeeft dat getoond moet worden. 

    ```
    <MultiplicationTable max={5} />
    ```
- `MultiplicationRow`: deze component bevat de logica om 1 rij van de tabel te tonen. Deze component bevat een property `factor` die het getal aangeeft waarvan de tafel getoond moet worden. Deze component bevat ook een property `max` die het maximum getal aangeeft dat getoond moet worden. 

    ```
    <MultiplicationRow factor={2} max={5} />
    ```
- `Header`: deze component bevat de logica om de header van de tabel te tonen. Deze component bevat een property `max` die het maximum getal aangeeft dat getoond moet worden. 

    ```
    <Header max={5} />
    ```

De applicatie moet ongeveer er als volgt uitzien:

<div style={{padding: 10, border: "1px dotted black"}}>
    <Maaltafels2/>
</div>

## 6. Who's that pokemon?

Kopieer het `whos-that-pokemon` project van labo 1 naar een nieuw project.

Maak een nieuw component `PokemonImage` dat de afbeelding van een pokemon toont. Deze component aanvaardt de volgende properties:
- `id`: het id van de pokemon (1 = Bulbasaur, 2 = Ivysaur, ...)
- `visible`: boolean die aangeeft of de pokemon zichtbaar is of niet. Indien deze false is, moet de afbeelding zwart gemaakt worden (gebruik hiervoor de CSS filter `brightness(0)`)
- `size`: de grootte van de afbeelding in pixels (standaard 200)

Toon in de `App` component twee keer de `PokemonImage` component. Eén keer met `visible` op false en één keer met `visible` op true. 

<div style={{padding: 10, border: "1px dotted black"}}>
    <WhosThatPokemonComponent/>
</div>

## 7. Rainbow Props

Maak een kopie van de regenboog oefening van labo 1 en zorg ervoor dat je de volgende componenten hebt:
- `Rainbow`: Heeft een property `amount` die het aantal kleuren aangeeft. Heeft ook een property `direction` die de richting van de kleuren aangeeft. Deze kan ofwel "horizontal" ofwel "vertical" zijn. Je kan de richting van de regenboog bepalen door de `flexDirection` van de container aan te passen.
- `RainbowLine`: Heeft een property `color` die de kleur van de lijn aangeeft. Heeft ook een property `direction` die de richting van de lijn aangeeft. Deze kan ofwel "horizontal" ofwel "vertical" zijn. De hoogte van de lijn is 4px indien de richting "horizontal" is, anders is de hoogte 100px.

Je kan dus bijvoorbeeld de volgende code gebruiken om een horizontale en een verticale regenboog te tonen:

```
<Rainbow amount={10} direction="horizontal"/>
<Rainbow amount={20} direction="vertical"/>
```

Dit zal de volgende output geven:

<div style={{padding: 10, border: "1px dotted black"}}>
    <RegenboogProps/>
</div>