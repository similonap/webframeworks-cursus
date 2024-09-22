import ReactPlayer from 'react-player';
import ColorClicker from '@site/src/components/LabSolutions/ColorClicker';
import CheckBoxGrid from '@site/src/components/LabSolutions/CheckBoxGrid';

# Labo 3

Voor dit labo moet je de volgende theorie bekeken hebben:
- Event Handling

## Color Clicker

Maak een nieuwe React applicatie aan en noem deze `labo-color-clicker`.

Maak een component `ColorSquare` aan met de volgende properties:
- `color`: string, de kleur van de vierkant
- `size`: number, de grootte van het vierkant

Gebruik een `div` element om het vierkant te tonen. Geef het vierkant de juiste kleur en grootte.

Zorg voor een event handler die een alert toont met de kleur van het vierkant als je erop klikt. Gebruik een handleClick functie (met het juiste type) die de kleur van het vierkant toont in een alert.

Maak 10 vierkanten met willekeurige kleuren en toon deze in een rij op het scherm.

<ColorClicker/>

## Checkbox Grid

Maak een nieuwe React applicatie aan en noem deze `labo-checkbox-grid`.

Maak een nieuw component `CheckBox` aan met de volgende properties:
- `size`: number, de grootte van de grid

Maak een grid van checkboxes met de grootte die je meekrijgt als property. Als je op een checkbox klikt, toon je een alert met de positie van de checkbox en of deze aangevinkt is of niet. Het grid kan je maken met een array van arrays van booleans (type `boolean[][]`). 

<CheckBoxGrid/>
