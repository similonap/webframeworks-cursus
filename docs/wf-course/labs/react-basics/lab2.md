import LabComponentsSlotMachine from '@site/src/components/lab-solutions/lab-components/lab-components-slot-machine/App';
import CodeSandbox from '@site/src/components/CodeSandbox/CodeSandbox';
import LabComponentsBasics from '@site/src/components/lab-solutions/lab-components/lab-components-basics/App';
import LabComponentsMultiplicationTables from '@site/src/components/lab-solutions/lab-components/lab-components-maaltafels/App';
import LabComponentsWhosThatPokemon from '@site/src/components/lab-solutions/lab-components/lab-components-whos-that-pokemon/App';
import LabComponentsRainbowProps from '@site/src/components/lab-solutions/lab-components/lab-components-rainbow-props/App';
import LabComponentsPenguinGallery from '@site/src/components/lab-solutions/lab-components/lab-components-penguin-gallery/App';
import ReactPlayer from 'react-player'

# Labo 2

Voor dit labo moet je de volgende theorie bekeken hebben:
- Componenten
- Props
- Folder structuur
- Styling

## 1. Simpele componenten

> 📂 **Naam project:** `lab-components-basics`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-components-basics`.

Maak de volgende componenten aan:
- `Header` met als props `title` en `subtitle`
- `List` met als props `items` (array van strings). 
    - Elke string wordt getoond in een apart component `ListItem` met als props `text`.
    - Gebruik hiervoor de `map` functie. 
    - Gebruik een ongeordende lijst (`<ul>`) om de items te tonen.
- `Footer` met als props `copy` en `year`

Gebruik deze componenten in de `App` component om de volgende pagina te maken:

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabComponentsBasics/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/V6N5Nt_YNA8'/>

## 2. Facebook cards

> 📂 **Naam project:** `lab-components-facebook-card`  
> 🔗 **Basis project:** n/a

Maak een nieuw project aan en noem deze `lab-components-facebook-card`.

Neem de volgende code over. 

<CodeSandbox template="react-facebook-labo"/>

Teken eerst op papier hoe je deze facebook card zou opdelen in componenten. Splits deze componenten op in aparte componenten. Zorg dat alle content aanpasbaar is via props.

Let er op dat componenten ook kunnen bestaan uit andere componenten. 

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/jAKwAgCFfws'/>

## 3. Penguins

> 📂 **Naam project:** `lab-components-penguin-gallery`  
> 🔗 **Basis project:** n/a

Maak een nieuw project aan en noem deze `lab-components-penguin-gallery`
[Penguins.json](https://raw.githubusercontent.com/similonap/json/refs/heads/master/penguins/penguins.json) in je `src` folder.
- importeer dit bestand in je project aan de hand van `import penguins from './penguins.json';`
- Maak een component `PenguinCard` dat een penguin toont. Dit component aanvaard een property `penguin` met het type van een penguin uit het json bestand.
- Filter de pinguïns zodat je enkel de vrouwelijke pinguïns toont (property `gender` is "Female").
- Toon alle vrouwelijke pinguïns in een grid met 3 kolommen. Gebruik hiervoor css modules.

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabComponentsPenguinGallery/>
</div>

## 4. Slotmachine

> 📂 **Naam project:** `lab-components-slot-machine`  
> 🔗 **Basis project:** [`lab-basics-slot-machine`](lab1.md#2-slotmachine)

Kopieer de slotmachine code van labo 1 en noem deze nieuwe applicatie `lab-components-slot-machine` en zorg voor de volgende dingen:

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
    <LabComponentsSlotMachine/>
</div>

#### Oplossingsvideo

<ReactPlayer controls url='https://youtu.be/fRYEQ-NR0aU'/>

## 5. Maaltafels component

> 📂 **Naam project:** `lab-components-maaltafels`  
> 🔗 **Basis project:** [`lab-basics-multiplication-tables`](lab1.md#6-maaltafels)

Kopieer de maaltafels code van labo 1 naar een nieuw project en noem deze `lab-components-maaltafels` en zorg voor de volgende componenten:

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
    <LabComponentsMultiplicationTables/>
</div>

## 6. Who's that pokemon?

> 📂 **Naam project:** n/a  
> 🔗 **Basis project:** [`lab-basics-whos-that-pokemon`](lab1.md#9-who-s-that-pokemon)

Kopieer het `lab-basics-whos-that-pokemon` project van labo 1 naar een nieuw project.

Maak een nieuw component `PokemonImage` dat de afbeelding van een pokemon toont. Deze component aanvaardt de volgende properties:
- `id`: het id van de pokemon (1 = Bulbasaur, 2 = Ivysaur, ...)
- `visible`: boolean die aangeeft of de pokemon zichtbaar is of niet. Indien deze false is, moet de afbeelding zwart gemaakt worden (gebruik hiervoor de CSS filter `brightness(0)`)
- `size`: de grootte van de afbeelding in pixels (standaard 200)

Toon in de `App` component twee keer de `PokemonImage` component. Eén keer met `visible` op false en één keer met `visible` op true. 

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabComponentsWhosThatPokemon/>
</div>

## 7. Rainbow Props

> 📂 **Naam project:** `lab-components-rainbow-props`  
> 🔗 **Basis project:** [`lab-basics-rainbow`](lab1.md#7-regenboog)

Maak een kopie van de `lab-basics-rainbow` applicatie van labo 1 naar een nieuw project en noem deze `lab-components-rainbow-props`. En zorg voor de volgende componenten:

- `Rainbow`: Heeft een property `amount` die het aantal kleuren aangeeft. Heeft ook een property `direction` die de richting van de kleuren aangeeft. Deze kan ofwel "horizontal" ofwel "vertical" zijn. Je kan de richting van de regenboog bepalen door de `flexDirection` van de container aan te passen.
- `RainbowLine`: Heeft een property `color` die de kleur van de lijn aangeeft. Heeft ook een property `direction` die de richting van de lijn aangeeft. Deze kan ofwel "horizontal" ofwel "vertical" zijn. De hoogte van de lijn is 4px indien de richting "horizontal" is, anders is de hoogte 100px.

Je kan dus bijvoorbeeld de volgende code gebruiken om een horizontale en een verticale regenboog te tonen:

```
<Rainbow amount={10} direction="horizontal"/>
<Rainbow amount={20} direction="vertical"/>
```

Dit zal de volgende output geven:

<div style={{padding: 10, border: "1px dotted black"}}>
    <LabComponentsRainbowProps/>
</div>
