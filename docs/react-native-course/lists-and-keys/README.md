---
sidebar_position: 6
---

# Lijsten

Net zoals in React.js kunnen we ook in React Native lijsten maken. We kunnen dit doen door een array te maken en deze te mappen naar een component. We moeten wel een key meegeven aan elk element in de lijst. Deze key moet uniek zijn voor elk element in de lijst.

## Lijsten met for lus

We kunnen een lijst maken door een for lus te gebruiken. We kunnen dan een array maken en deze opvullen met een for lus. We kunnen dan deze array mappen naar een component. 

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text,StyleSheet} from "react-native";

const App = () => {
    const names = ["Andie","Lotte","Liene","Hanna"];
    let nameTexts : JSX.Element[] = [];

    for (let name of names) {
        nameTexts.push(<Text key={name}>{name}</Text>);
    }

    return (
        <View style={styles.container}>
            {nameTexts}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default App;
```

:::note
Dit is niet hoe we lijsten maken in React Native. We gebruiken hiervoor de `map` functie. Zie volgende stuk
:::

## Lijsten met map

De map functie is zeer handig om een lijst te maken. We kunnen een lijst maken door een array te maken en elk element te mappen naar een component. We moeten wel een key meegeven aan elk element in de lijst. Deze key moet uniek zijn voor elk element in de lijst. Dit gebeurt op dezelfde manier als in React.js.

Hieronder een voorbeeld dat een lijst van kleuren naar gekleurde views mapt. We gebruiken de kleurnamen hier als key maar let goed op dat dit niet altijd de beste keuze is. In dit geval is het wel ok omdat de kleuren uniek zijn.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text,StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const App = () => {
    return (
        <View style={styles.container}>
            {colors.map(color => (
                <View key={color} style={{flex:1 , backgroundColor: color}}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", alignItems: "stretch", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default App;
```

Je moet uiteraard niet altijd mappen naar views. Je kan ook mappen naar andere componenten. Hieronder een voorbeeld dat een lijst van kleuren naar `Text` componenten mapt.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text,StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const App = () => {
    return (
        <View style={styles.container}>
            {colors.map(color => (
                <Text key={color} style={{flex:1 , backgroundColor: color, textAlign:"center"}}>{color}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", alignItems: "stretch", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default App;
```

Een extra voorbeeld:
We kunnen een woord opsplitsen naar een array van letters en deze dan apart tonen. We gebruiken hier de `split` functie om een string te splitsen naar een array van letters. We gebruiken de index van het element om de fontSize te bepalen. We gebruiken een combinatie van de letter en de index als key.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text,StyleSheet} from "react-native";

const App = () => {
    const word = "Hello";
    return (
        <View style={styles.container}>
            {word.split("").map((letter, index) => (
                <Text key={letter + index} style={{flex:1 , fontSize: 20 + index * 10, textAlign:"center"}}>{letter}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, flexDirection: "row", paddingTop: Constants.statusBarHeight}
});

export default App;
```

## ScrollView

Tot nu toe konden we alleen maar lijsten tonen die in de lengte van het scherm passen. Als we een lijst hebben die langer is dan het scherm, dan kunnen we deze niet tonen. We kunnen dit oplossen door een `ScrollView` te gebruiken. Een `ScrollView` is een component die een lijst kan tonen die langer is dan het scherm.

Als we bijvoorbeeld de elementen iets groter maken dan zie je direct het probleem:

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text,StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const App = () => {
    return (
        <View style={styles.container}>
          {colors.map(color => (
              <View key={color} style={{height: 200, backgroundColor: color}}/>
          ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: "stretch", paddingTop: Constants.statusBarHeight}
});

export default App;
```

We kunnen hier eenvoudig een ScrollView rondzetten om dit probleem op te lossen:

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, ScrollView,StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const App = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{flex: 1, alignItems: "stretch"}}>
                    {colors.map(color => (
                        <View key={color} style={{height: 200, backgroundColor: color}}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {paddingTop: Constants.statusBarHeight}
});

export default App;
```


## FlatList

Een andere manier om een lijst te maken is door gebruik te maken van de `FlatList` component. Deze component heeft een aantal voordelen ten opzichte van de map functie. De `FlatList` component is een native component en zal dus sneller zijn dan een lijst die gemaakt wordt met de map functie. Daarnaast zal de `FlatList` component alleen de elementen renderen die op het scherm zichtbaar zijn. Dit is handig als je een lijst hebt met veel elementen. 

FlatList is automatisch scrollable dus hoeft niet in een `ScrollView` gezet te worden.

De `FlatList` component heeft een aantal props die we moeten meegeven. De `data` prop is de lijst die we willen tonen. De `renderItem` prop is een functie die een item uit de lijst zal renderen. De `keyExtractor` prop is een functie die een key zal teruggeven voor een item uit de lijst. 

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, FlatList,StyleSheet} from "react-native";

interface Person {
    id: number;
    name: string;
    age: number;
}

const persons : Person[] = [
    {id: 1, name: "Andie", age: 25},
    {id: 2, name: "Sven", age: 24},
    {id: 3, name: "Dirk", age: 27},
    {id: 4, name: "Lotte", age: 22},
]

const PersonComponent = ({item} : {item: Person}) => {
    return (
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text style={{flex: 1}}>{item.name}</Text>
            <Text style={{flex: 1}}>{item.age}</Text>
        </View>
    )
}

const App = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={persons}
                renderItem={({item}) => <PersonComponent item={item}/>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, flexDirection: "column", paddingTop: Constants.statusBarHeight}
});

export default App;
```

We herdoen ook nog het voorbeeld van de kleuren maar dan met het `FlatList` component.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, FlatList,StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const App = () => {
    return (
        <View style={styles.container}>       
            <FlatList
                data={colors}
                renderItem={({item}) => (
                    <View style={{height: 200, backgroundColor: item}}/>
                )}
                keyExtractor={item => item}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", alignItems: "stretch", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default App;
```

### ListFooterComponent

De `FlatList` component heeft ook een `ListFooterComponent` prop. Deze prop kan je gebruiken om een component te tonen onderaan de lijst. Dit kan bijvoorbeeld handig zijn om een knop te tonen om meer items te laden. Of om een loading indicator te tonen.

```typescript expo={"dependencies":"expo-constants"}
import React, {useState} from "react";
import Constants from "expo-constants";
import {View, Text, FlatList,StyleSheet, ActivityIndicator} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const App = () => {
    return (
        <View style={styles.container}>       
            <FlatList
                data={colors}
                renderItem={({item}) => (
                    <View style={{height: 200, backgroundColor: item}}/>
                )}
                keyExtractor={item => item}
                ListFooterComponent={<ActivityIndicator animating={true} style={{margin: 10}}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", alignItems: "stretch", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default App;
```