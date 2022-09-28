---
sidebar_position: 3
---

# Tab Navigation

Een van de meest gebruikte navigatie types is de tab navigation. Dit is een navigatie die bestaat uit een navigatiebalk met daarin verschillende tabs. Elke tab bevat een scherm. De gebruiker kan door de tabs navigeren door op de tab te drukken.

## Installatie

Om een tab navigation te gebruiken moeten we eerst `@react-navigation/bottom-tabs` installeren:

```bash
npm install @react-navigation/bottom-tabs
```

## Gebruik

Om een tab navigation te gebruiken moeten we eerst een `Tab.Navigator` component maken. Dit component bevat de verschillende schermen die we willen tonen in de tab navigation. Deze moet net zoals de `Stack.Navigator` component in de `NavigationContainer` component gezet worden.

```typescript expo={"dependencies":"@react-navigation/bottom-tabs,react-native-screens,react-native-safe-area-context,@react-navigation/native"}
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

## Icons

Je kan ook icons gebruiken in de tab navigation. Een lijst van alle beschikbare icons kan je vinden op [icons.expo.fyi](https://icons.expo.fyi/). Je hoeft hier geen aparte package voor te installeren, deze icons zijn al beschikbaar in `@expo/vector-icons`.

```typescript expo={"dependencies":"@react-navigation/bottom-tabs,react-native-screens,react-native-safe-area-context,@react-navigation/native"}
//hide-start
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//hide-end
import { FontAwesome } from '@expo/vector-icons';
//hide-start
const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
//hide-end
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({color, size}) => <FontAwesome name="home" size={size} color={color} />
        }} 
        />
        <Tab.Screen name="Settings" component={SettingsScreen}
         options={{
            tabBarIcon: ({color, size}) => <FontAwesome name="cog" size={size} color={color} />
        }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
//hide-start
export default App;
//hide-end
```