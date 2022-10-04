import Labo2Slots from '@site/src/components/LabSolutions/Labo2Slots';
import CodeSandbox from '@site/src/components/CodeSandbox/CodeSandbox';
import Labo2BasicComponents from '@site/src/components/LabSolutions/Labo2BasicComponents';

# Labo 2

Voor dit labo moet je de volgende theorie bekeken hebben:
- Componenten
- Props
- Folder structuur
- Styling

## 1. Simpele componenten

Maak een nieuwe React applicatie aan met behulp van `create-react-app` en noem deze `labo2-component`.

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

## 2. Facebook cards

Maak een nieuw project aan met behulp van `create-react-app` en noem deze `labo2-facebook`.

Neem de volgende code over. 

<CodeSandbox template="react-facebook-labo"/>

Teken eerst op papier hoe je deze facebook card zou opdelen in componenten. Splits deze componenten op in aparte componenten. Zorg dat alle content aanpasbaar is via props.

Let er op dat componenten ook kunnen bestaan uit andere componenten. 

## 3. Slotmachine

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

