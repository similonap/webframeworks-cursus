---
sidebar_position: 6
---

# Custom Components

## Properties 

Net zoals in React.js kunnen we ook in React Native onze eigen componenten maken. We gaan zoveel mogelijk onze componenten opsplitsen in kleine deeltjes. We kunnen ook gebruik maken van properties om informatie door te geven aan onze componenten.

We doen dit helemaal hetzelfde als in React.js:

```typescript expo={"dependencies":"expo-constants"}
import {View, StyleSheet} from "react-native";
import Constants from "expo-constants";

interface BoxProps {
    color: string,
    size: number
}

const Box = ({color, size}: BoxProps) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: size,
        height: size,
      }}
    />
  );
};

const App = () => {
    return (
        <View style={styles.container}>
            <Box size={40} color="red"/>
            <Box size={40} color="green"/>
            <Box size={40} color="blue"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default App;
```

## Styles doorgeven als props

We kunnen zelfs ons style object meegeven als property om zo onze componenten nog flexibeler te maken.

```typescript expo={"dependencies":"expo-constants"}
import {View, StyleSheet} from "react-native";
import Constants from "expo-constants";

interface BoxProps {
    boxStyle: StyleProp<ViewStyle>
}

const Box = ({boxStyle}: BoxProps) => {
  return (
    <View
      style={boxStyle}
    />
  );
};

const App = () => {
    return (
        <View style={styles.container}>
            <Box boxStyle={{backgroundColor: "red", width: 40, height: 40}}/>
            <Box boxStyle={{backgroundColor: "green", width: 40, height: 40}}/>
            <Box boxStyle={{backgroundColor: "blue", width: 40, height: 40}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default App;
```

## Default styles

We kunnen ook default styles meegeven aan onze componenten. Dit doen we door een default waarde mee te geven aan onze property.

```typescript expo={"dependencies":"expo-constants"}
import {View, StyleSheet} from "react-native";
import Constants from "expo-constants";

interface BoxProps {
    boxStyle?: StyleProp<ViewStyle>
}

const Box = ({boxStyle = {backgroundColor: "red", width: 40, height: 40}}: BoxProps) => {
  return (
    <View
      style={boxStyle}
    />
  );
};

const App = () => {
    return (
        <View style={styles.container}>
            <Box/>
            <Box/>
            <Box/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default App;
```

# Style array

Een heel belangrijke techniek die je in React Native kan toepassen en niet in React.js is het gebruik van een array van styles. De laatste style in de array heeft altijd voorrang. Zo kan je style inheritance toepassen.

```typescript expo={"dependencies":"expo-constants"}
import {View, StyleSheet} from "react-native";
import Constants from "expo-constants";

interface BoxProps {
    boxStyle?: StyleProp<ViewStyle>
}

const DefaultBoxStyle = StyleSheet.create({
    box: {
        backgroundColor: "red",
        width: 40,
        height: 40
    }
})

const Box = ({boxStyle}: BoxProps) => {
  return (
    <View
      style={[DefaultBoxStyle.box, boxStyle]}
    />
  );
};

const App = () => {
    return (
        <View style={styles.container}>
            <Box/>
            <Box boxStyle={{backgroundColor: "green"}}/>
            <Box boxStyle={{backgroundColor: "blue"}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default App;
```