# MapView

`react-native-maps` zorgt voor een interactieve kaart in React Native. We kunnen hiermee een kaart tonen en markers op de kaart plaatsen. 

## Installatie

`react-native-maps` is een externe library die we moeten installeren. We kunnen dit doen met de `expo install` commando:

```bash
npx expo install react-native-maps
```

## Gebruik

Om heel eenvoudig een kaart te tonen in React Native moeten we de `MapView` component gebruiken. Deze component heeft een `region` prop die we kunnen gebruiken om de initiele regio van de kaart te bepalen. We willen deze dynamisch maken, dus we zullen de `region` prop binden aan een state variabele.

`latitudeDelta` en `longitudeDelta` bepalen hoeveel van de kaart we willen tonen. Hoe kleiner deze waarden, hoe meer van de kaart we zien. 

```typescript expo={"dependencies":"react-native-maps"}
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import MapView, { Region, Coordinate } from "react-native-maps";
//hide-start
interface WorldWonder {
  name: string;
  latitude: number;
  longitude: number;
}

const worldWonders: WorldWonder[] = [
  { name: "AP Hogeschool", latitude: 51.2167, longitude: 4.4167 },
  { name: "Great Pyramid of Giza", latitude: 29.9792, longitude: 31.1344 },
  { name: "Hanging Gardens of Babylon", latitude: 32.5317, longitude: 44.428 },
  { name: "Colossus of Rhodes", latitude: 36.4404, longitude: 28.2241 },
  { name: "Lighthouse of Alexandria", latitude: 31.2156, longitude: 29.9553 },
  { name: "Statue of Zeus at Olympia", latitude: 37.6381, longitude: 21.6203 },
  { name: "Temple of Artemis", latitude: 37.951, longitude: 27.3683 },
  { name: "Mausoleum at Halicarnassus", latitude: 37.0372, longitude: 27.4251 },
];
//hide-end
const App = () => {
  let [wonder, setWonder] = useState<WorldWonder>(worldWonders[0]);

  const showRandomWonder = () => {
    let randomIndex = Math.floor(Math.random() * worldWonders.length);
    setWonder(worldWonders[randomIndex]);
  };
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: wonder.latitude,
          longitude: wonder.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Button title="Set random location" onPress={showRandomWonder} />
    </View>
  );
};

export default App;
```

## Markers

We kunnen markers op de kaart plaatsen door de `Marker` component te gebruiken. Deze component heeft een `coordinate` prop die we kunnen gebruiken om de positie van de marker te bepalen. We gaan in volgend voorbeeld een marker plaatsen op de kaart per wereldwonder.

```typescript expo={"dependencies":"react-native-maps"}
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import MapView, { Region, Coordinate } from "react-native-maps";
//hide-start
interface WorldWonder {
  name: string;
  latitude: number;
  longitude: number;
}

const worldWonders: WorldWonder[] = [
  { name: "AP Hogeschool", latitude: 51.2167, longitude: 4.4167 },
  { name: "Great Pyramid of Giza", latitude: 29.9792, longitude: 31.1344 },
  { name: "Hanging Gardens of Babylon", latitude: 32.5317, longitude: 44.428 },
  { name: "Colossus of Rhodes", latitude: 36.4404, longitude: 28.2241 },
  { name: "Lighthouse of Alexandria", latitude: 31.2156, longitude: 29.9553 },
  { name: "Statue of Zeus at Olympia", latitude: 37.6381, longitude: 21.6203 },
  { name: "Temple of Artemis", latitude: 37.951, longitude: 27.3683 },
  { name: "Mausoleum at Halicarnassus", latitude: 37.0372, longitude: 27.4251 },
];
//hide-end
const App = () => {
  let [wonder, setWonder] = useState<WorldWonder>(worldWonders[0]);

  const showRandomWonder = () => {
    let randomIndex = Math.floor(Math.random() * worldWonders.length);
    setWonder(worldWonders[randomIndex]);
  };
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: wonder.latitude,
          longitude: wonder.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {worldWonders.map((wonder) => (
          <MapView.Marker
            key={wonder.name}
            coordinate={{
              latitude: wonder.latitude,
              longitude: wonder.longitude,
            }}
            title={wonder.name}
          />
        ))}
      </MapView>
      <Button title="Set random location" onPress={showRandomWonder} />
    </View>
  );
};

export default App;
```

## Meer informatie

Voor meer informatie over `react-native-maps` kan je de [documentatie](https://docs.expo.dev/versions/latest/sdk/map-view/) raadplegen.