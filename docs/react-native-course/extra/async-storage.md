# AsyncStorage

AsyncStorage is een manier om data op te slaan op de telefoon. Dit is een soort van lokale database. We kunnen hiermee data opslaan die we nodig hebben voor de app. Dit is zeer gelijkaardig aan de `localStorage` in een web browser.

Dit geeft het voordeel dat je data kan opslaan die je wil bijhouden als je de applicatie sluit.

## Installatie

Om AsyncStorage te gebruiken moeten we eerst de `@react-native-async-storage/async-storage` library installeren:

```bash
npx expo install @react-native-async-storage/async-storage
```

## Opslaan/uitlezen van een string

Om een string op te slaan in AsyncStorage gebruiken we de `setItem` functie. Deze functie heeft twee parameters: de key en de value. De key is een string die we gebruiken om de value later terug op te halen. De value is de string die we willen opslaan.

```typescript expo={"dependencies":"@react-native-async-storage/async-storage"}
import React from "react";

import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async () => {
  await AsyncStorage.setItem("name", "John Doe");
};

const getData = async () => {
  const value = await AsyncStorage.getItem("name");
  if (value !== null) {
    alert(value);
  } else {
    alert("No Data found");
  }
};
const App = () => {
  return (
    <View>
      <Text>AsyncStorage</Text>
      <Button title="Store Data" onPress={storeData} />
      <Button title="Load Data" onPress={getData } />
    </View>
  );
};

export default App;
```

## Opslaan/uitlezen van een getal

Wil je een getal rechtstreeks opslagen in AsyncStorage dan moet je eerst de waarde omzetten naar een string. Dit kan je doen met de `toString` functie. Om een getal terug te halen uit AsyncStorage moet je eerst de string omzetten naar een getal. Dit kan je doen met de `parseInt` functie.

```typescript expo={"dependencies":"@react-native-async-storage/async-storage"}
import React from "react";

import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async () => {
  let randomNumber : number = Math.floor(Math.random() * 100);
  await AsyncStorage.setItem("randomNumber", randomNumber.toString());
};

const getData = async () => {
  const value : string = await AsyncStorage.getItem("randomNumber");
  if (value !== null) {
    alert(parseInt(value));
  } else {
    alert("No Data found");
  }
};
const App = () => {
  return (
    <View>
      <Text>AsyncStorage</Text>
      <Button title="Store Data" onPress={storeData} />
      <Button title="Load Data" onPress={getData } />
    </View>
  );
};

export default App;
```

## Opslaan/uitlezen van een object

Om een object op te slaan in AsyncStorage moet je eerst het object omzetten naar een string. Dit kan je doen met de `JSON.stringify` functie. Om een object terug te halen uit AsyncStorage moet je eerst de string omzetten naar een object. Dit kan je doen met de `JSON.parse` functie.

```typescript expo={"dependencies":"@react-native-async-storage/async-storage"}
import React from "react";

import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Student {
  name: string;
  age: number;
}

const storeData = async () => {
  let student : Student = {
    name: "John Doe",
    age: Math.floor(Math.random() * 10) + 18
  };
  await AsyncStorage.setItem("randomStudent", JSON.stringify(student));
};

const getData = async () => {
  const value : string = await AsyncStorage.getItem("randomStudent");
  if (value !== null) {
    let student : Student = JSON.parse(value);
    alert(student.name + " is " + student.age + " years old");
  } else {
    alert("No Data found");
  }
};
const App = () => {
  return (
    <View>
      <Text>AsyncStorage</Text>
      <Button title="Store Data" onPress={storeData} />
      <Button title="Load Data" onPress={getData } />
    </View>
  );
};

export default App;
```

Je kan ook een array van objecten opslaan in AsyncStorage. Dit werkt op dezelfde manier als een enkel object.

## State in AsyncStorage

We kunnen ook de state van een component opslaan in AsyncStorage. Dit kan handig zijn als we de state willen bijhouden als de gebruiker de applicatie sluit. We moeten er dan voor zorgen dat elke wijziging in state ook opgeslagen wordt in AsyncStorage.

```typescript expo={"dependencies":"@react-native-async-storage/async-storage"}
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const value = await AsyncStorage.getItem("counter");
      if (value !== null) {
        setCounter(parseInt(value));
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const storeData = async () => {
      await AsyncStorage.setItem("counter", counter.toString());
    };
    storeData();
  }, [counter]);

  return (
    <View>
      <Text>AsyncStorage</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Increment" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

export default App;
```

We gebruiken hier twee `useEffect` hooks. De eerste `useEffect` hook wordt uitgevoerd als het component voor het eerst geladen wordt. In deze `useEffect` hook halen we de waarde van `counter` op uit AsyncStorage. Als er een waarde gevonden wordt dan zetten we deze waarde in de state van het component. Als er geen waarde gevonden wordt dan blijft de state op 0 staan.

De tweede `useEffect` hook wordt uitgevoerd als de state van `counter` verandert. In deze `useEffect` hook slaan we de nieuwe waarde van `counter` op in AsyncStorage. 

## Meer informatie

Voor meer informatie over de `AsyncStorage` package kan je de [documentatie](https://reactnative.dev/docs/asyncstorage) raadplegen.