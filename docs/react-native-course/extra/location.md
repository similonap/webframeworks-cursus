# Location

`expo-location` laat het toe om de locatie van de gebruiker te bepalen. Je app kan de huidige locatie opvragen of een listener registreren die de locatie bijhoudt.

## installatie

`expo-location` is een aparte package die je moet installeren. Dit doe je met de volgende commando:

```bash
npx expo install expo-location
```

## Gebruik

Ook voor het gebruik van `expo-location` moet je eerst de permissies vragen. Dit doe je aan de hand van de `requestForegroundPermissionsAsync` functie. We gaan in dit voorbeeld de permissies direct vragen wanneer het `App` component wordt gerenderd. We doen dit aan de hand van een `useEffect` hook. 

```typescript expo={"dependencies":"expo-location"}
import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import {
  requestForegroundPermissionsAsync,
  LocationObject,
  getCurrentPositionAsync,
} from "expo-location";

const App = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
};
//hide-start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
//hide-end
export default App;

```

## Meer informatie

Voor meer informatie over `expo-location` kan je de [documentatie](https://docs.expo.io/versions/latest/sdk/location/) raadplegen.