---
sidebar_position: 7
---

# Controlled Components

Net zoals in React.js gebruiken we in React Native ook `state` om de waarde van een input te beheren. We kunnen dit doen door een `useState` hook te gebruiken. We gebruiken dan de change handlers om deze state te updaten.

We geven in dit onderdeel een aantal voorbeelden van core components en hoe we deze kunnen gebruiken in samenwerking met `state`. 

:::tip
Zorg altijd voor een state voor elk element waar je invoer kan ingeven. Ook al lijkt het in eerste instantie niet nodig.
:::

## TextInput

Om een TextInput een controlled component te maken, moeten we de `value` property meegeven aan de `TextInput` component. We moeten ook een `onChangeText` handler meegeven om de state te updaten.

```typescript expo={"dependencies":"expo-constants"}
import React, {useState} from "react";
import {View, TextInput, Button, Alert, Text} from "react-native";

const App = () => {
    const [text, setText] = useState("");

    return (
        <View style={{flexDirection: "column", flex: 1}}>
            <TextInput
                style={{height: 40, borderColor: "gray", borderWidth: 1}}
                onChangeText={text => setText(text)}
                value={text}
            />
            <Text>You typed: {text}</Text>
            <Button title="Show Value" onPress={() => { Alert.alert(text); }}/>
        </View>
    )
}

export default App;
```

Het is ook mogelijk om meerdere componenten aan 1 state te binden. In dit voorbeeld binden we 2 `TextInput` componenten aan 1 state. Beide zullen up to date blijven bij de huidige waarde van de state.

```typescript expo={"dependencies":"expo-constants"}
import React, {useState} from "react";
import {View, TextInput, Button, Alert, Text} from "react-native";

const App = () => {
    const [text, setText] = useState("");

    return (
        <View style={{flexDirection: "column", flex: 1}}>
            <TextInput
                style={{height: 40, borderColor: "gray", borderWidth: 1}}
                onChangeText={text => setText(text)}
                value={text}
            />
            <TextInput
                style={{height: 40, borderColor: "gray", borderWidth: 1}}
                onChangeText={text => setText(text)}
                value={text}
            />
        </View>
    )
}

export default App;
```

## TextInput met getallen

Als we een `TextInput` component willen gebruiken om getallen in te geven, moeten we de `keyboardType` property meegeven aan de `TextInput` component. Niet alle keyboards in Android hebben een numeriek keyboard. Dus de gebruiker kan nog steeds niet numerieke waarden ingeven. 

De beste manier om dit op te lossen is toch een string als state te gebruiken en deze te converteren naar een numerieke waarde wanneer we deze nodig hebben.

```typescript expo={"dependencies":"expo-constants"}
import React, {useState} from "react";
import {View, TextInput, Button, Alert, Text} from "react-native";

const App = () => {
    const [number, setNumber] = useState("0");

    const validateAndMultiply = () => {
      if (isNaN(number)) {
        Alert.alert("This is not a number!");
        setNumber("0");
      } else {
        setNumber((parseInt(number) * 2).toString())
      }
    }

    return (
        <View style={{flexDirection: "column", flex: 1}}>
            <TextInput
                keyboardType="number-pad"
                style={{height: 40, borderColor: "gray", borderWidth: 1}}
                onChangeText={text => setNumber(text)}
                value={number}
            />
            <Button title="Multiply" onPress={validateAndMultiply}/>
        </View>
    )
}

export default App;
```

## Button

We kunnen ook een `Button` component gebruiken om de state te updaten. We kunnen dit doen door een `onPress` handler mee te geven aan de `Button` component. Buttons zijn geen controlled components.

We zullen in het onderstaande voorbeeld een teller tonen die we aan de hand van de Button kunnen verhogen.

```typescript expo={"dependencies":"expo-constants"}
import React, {useState} from "react";
import {View, Button, Text} from "react-native";

const App = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={{flexDirection: "column", flex: 1}}>
            <Text>Counter: {counter}</Text>
            <Button title="Increase Counter" onPress={() => { setCounter(counter + 1); }}/>
        </View>
    )
}

export default App;
```

## Switch

Een `Switch` component heeft een `value` property en een `onValueChange` handler. We kunnen deze gebruiken om een `Switch` component te maken die een controlled component is.

```typescript expo={"dependencies":"expo-constants"}
import React, {useState} from "react";

import {View, Switch, Text} from "react-native";

const App = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={{flexDirection: "column", flex: 1}}>
            <Switch
                onValueChange={() => setIsEnabled(previousState => !previousState)}
                value={isEnabled}
            />
            <Text>Switch is {isEnabled ? "On" : "Off"}</Text>
        </View>
    )
}

export default App;
```

## Conditioneel renderen

We kunnen ook conditioneel renderen in React Native. We gebruiken hier vooral de `&&` operator voor of de ternary operator.

```typescript expo={"dependencies":"expo-constants"}
import React, {useState} from "react";

import {View, Switch, Text, Image} from "react-native";

const App = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={{flexDirection: "column", flex: 1}}>
            <Switch
                onValueChange={() => setIsEnabled(previousState => !previousState)}
                value={isEnabled}
            />
            {isEnabled ? <Image style={{width: 60, height: 60}} source={{uri: "https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg/alarm-light.svg"}}/>
            :
            <Image style={{width: 60, height: 60}} source={{uri: "https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg/alarm-light-off.svg"}}/>
            }
        </View>
    )
}

export default App;
```

## ActivityIndicator

Een `ActivityIndicator` component heeft een `animating` property en een `size` property. Meestal is de animating property afhankelijk van de waarde van een state. Als we bijvoorbeeld iets willen laden, dan zetten we de `animating` property op `true` en als we klaar zijn met laden, dan zetten we de `animating` property op `false`.

```typescript expo={"dependencies":"expo-constants"}
import React, {useState} from "react";

import {View, Button, Text, ActivityIndicator} from "react-native";

interface TimezoneInterface {
    datetime: string;
}

const App = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    const loadData = async() => {
    
        setLoading(true);
        
        let result = await fetch("https://worldtimeapi.org/api/timezone/Europe/Brussels");
        let json : TimezoneInterface = await result.json();

        setResult(json.datetime);

        setLoading(false);
    }

    return (
        <View style={{flexDirection: "column", flex: 1}}>
            <Button title="Load data" onPress={() => loadData() }/>
            <ActivityIndicator animating={loading}/>
            <Text>{result}</Text>
        </View>
    )
}

export default App;
```

## FlatList refreshing

Een `FlatList` component heeft een `refreshing` property en een `onRefresh` handler. We kunnen deze gebruiken om een `FlatList` component te maken die een pull to refresh heeft. Hiervoor moeten we de refreshing state bijhouden en deze updaten wanneer de gebruiker de lijst heeft gerefreshed.

```typescript expo={"dependencies":"expo-constants"}
import React, {useState} from "react";

import {View, FlatList, Text} from "react-native";

const generateRandomColors = (amount: number) => {
    let colors : string[] = [];
    for (let i = 0; i < amount; i++) {
        colors.push("#" + Math.floor(Math.random()*16777215).toString(16));
    }
    return colors;
}

const App = () => {
    const [colors, setColors] = useState(generateRandomColors(10));
    const [refreshing, setRefreshing] = useState(false);

    const refreshColors = async() => {
        setRefreshing(true);
        // wait 2 seconds to simulate API call (or whatever)
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        setColors(generateRandomColors(10));
        setRefreshing(false);
    }

    return (
        <View style={{flexDirection: "column", flex: 1}}>
            <FlatList
                data={colors}
                renderItem={({item}) => <View style={{height: 100, backgroundColor: item}}/>}
                keyExtractor={(item, index) => index.toString()}
                refreshing={refreshing}
                onRefresh={() => refreshColors()}
            />
        </View>
    )
}

export default App;
```