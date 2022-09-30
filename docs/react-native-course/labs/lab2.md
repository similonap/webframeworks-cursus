# Labo 2

Voor dit labo moet je de volgende theorie bekeken hebben:
- Core Components
- Event Handling

## Maak een nieuw project aan

Maak een nieuw project `CoreComponents` aan met expo. Vervang de inhoud van `App.tsx` door de volgende code:

```typescript expo={}
import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff",
  },
});

export default App;
```

Verwijder alle styles in container maar laat backgroundColor staan.

## Tekst toevoegen

- Maak een functie die een willekeurig getal tussen 0 en 10 teruggeeft. Noem deze functie `random0To10`.
- Voeg een Text component toe aan de View van de App functie component. Als tekst toon je het getal dat `random0To10` teruggeeft.
- Voeg daarna ook de tekst `Het getal is` toe aan deze Text component met daarachter het getal (zonder extra Text component te gebruiken)
- Gebruik nu een tweede Text component om het getal in drukletters te tonen. Maak hiervoor een style `boldText` aan die je gebruikt via het `styles` attribuut.

## Styling

Maak een nieuwe View als kind van de originele View aan. Plaats daarin een Text component met de tekst `SubView`.

Geef Subview een breedte van 100. Geef het een rode rand van breedte 2, een padding van 10.

Geef het nieuwe `Text` component in Subview een blauwe achtergrond met witte letters.

## Images

Voeg 2 afbeeldingen toe aan de originele view: 1 afbeelding van een Pokemon die je lokaal toevoegt aan jouw project en een andere afbeelding van een filmposter die je via de URL aanspreekt (en dus niet downloadt).

Geef beide afbeeldingen een breedte en hoogte van 100.

Zorg dat beide afbeeldingen volledig te zien zijn.