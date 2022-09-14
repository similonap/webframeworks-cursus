import Labo2Exercise1 from '@site/src/components/LabSolutions/Labo2Exercise1';

# Labo 2

## 1. Slotmachine

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

#### Voorbeeldoplossing

<div style={{padding: 10, border: "1px dotted black"}}>
    <Labo2Exercise1/>
</div>
