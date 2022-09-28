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
import React from 'react';

import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async () => {
  await AsyncStorage.setItem('name', 'John Doe');
};

const getData = async () => {
  const value = await AsyncStorage.getItem('name');
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
import React from 'react';

import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async () => {
  let randomNumber : number = Math.floor(Math.random() * 100);
  await AsyncStorage.setItem('randomNumber', randomNumber.toString());
};

const getData = async () => {
  const value : string = await AsyncStorage.getItem('randomNumber');
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
import React from 'react';

import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Student {
  name: string;
  age: number;
}

const storeData = async () => {
  let student : Student = {
    name: "John Doe",
    age: Math.floor(Math.random() * 10) + 18
  };
  await AsyncStorage.setItem('randomStudent', JSON.stringify(student));
};

const getData = async () => {
  const value : string = await AsyncStorage.getItem('randomStudent');
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

## Lezen van data bij mount