# Platform Specific Code

Soms wil je code schrijven die alleen op een bepaald platform werkt. Bijvoorbeeld, je wilt een knop maken die alleen op iOS werkt. In dit geval kun je de `Platform` API gebruiken om te controleren of je op iOS of Android werkt.

## Platform API

De `Platform` API is een globale variabele die je kunt importeren vanuit `react-native`. Deze variabele heeft twee eigenschappen: `OS` en `Version`. De `OS` eigenschap geeft aan of je op iOS of Android werkt. De `Version` eigenschap geeft het versienummer van het platform.

De onderstaande code laat zien hoe je alle informatie van het platform kan ophalen:

```typescript expo={}
import React from "react";
import { Platform, View, Text } from "react-native";

const App = () => {
	return (
		<View>
			<Text>Platform</Text>
			<Text>OS: {Platform.OS}</Text>
			<Text>Version: {Platform.Version}</Text>

			{Platform.OS === "ios" && <Text>Je werkt op iOS</Text>}
			{Platform.OS === "android" && <Text>Je werkt op Android</Text>}
		</View>
	);
};

export default App;
```

## Platform specifieke style

Soms wil je een style toepassen die alleen op een bepaald platform werkt. In dit geval kun je de `Platform.select` functie gebruiken om een style te selecteren op basis van het platform.

De onderstaande code laat zien hoe je een style kan selecteren op basis van het platform:

```typescript expo={}
import React from "react";
import { Platform, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        backgroundColor: "green",
      },
      ios: {
        backgroundColor: "red",
      },
      default: {
        backgroundColor: "blue",
      },
    }),
  },
});

const App = () => {
  return <View style={styles.container}></View>;
};

export default App;
```