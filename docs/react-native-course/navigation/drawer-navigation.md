---
sidebar_position: 2
---

# Drawer Navigation

Een drawer navigation is een navigatie die bestaat uit een menu dat uitgeklapt kan worden. Dit menu bevat links naar de verschillende schermen van de app. Je kan deze laten verschijnen door te swipen vanaf de linkerkant van het scherm of door op een knop te drukken.

## Installatie

Voordat we kunnen beginnen moeten we eerst `@react-navigation/drawer` installeren:

```bash
npm install @react-navigation/drawer
```

je moet ook nog `react-native-gesture-handler` en `react-native-reanimated` installeren:

```bash
npx expo install react-native-gesture-handler react-native-reanimated
```

## Gebruik

Om een drawer navigation te gebruiken moeten we eerst een `Drawer.Navigator` component maken. Dit component bevat de verschillende schermen die we willen tonen in de drawer. Deze moet net zoals de `Stack.Navigator` component in de `NavigationContainer` component gezet worden.

```typescript expo={"dependencies":"@react-navigation/drawer,react-native-screens,react-native-safe-area-context,@react-navigation/native,react-native-gesture-handler,react-native-reanimated"}
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}

const SettingsScreen = () => {
    return (
        <View>
            <Text>Settings</Text>
        </View>
    );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

:::note
We voegen `useLegacyImplementation` toe aan de `Drawer.Navigator` omdat we anders een foutmelding krijgen. Dit is een tijdelijke oplossing en zal in de toekomst niet meer nodig zijn.
:::

Voor meer informatie over de `Drawer.Navigator` component kan je de [documentatie](https://reactnavigation.org/docs/drawer-based-navigation) raadplegen.

## Openen en sluiten van de drawer

Om de drawer programmatisch te openen of sluiten kan je gebruik maken van de `useNavigation` hook. Deze hook geeft je toegang tot de `navigation` object. Dit object bevat een `toggleDrawer` functie die je kan gebruiken om de drawer te openen of sluiten.

```typescript {6} expo={"dependencies":"@react-navigation/drawer,react-native-screens,react-native-safe-area-context,@react-navigation/native,react-native-gesture-handler,react-native-reanimated"}
//hide-start
import { View, Text, Button } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
//hide-end
const HomeScreen = () => {
    const navigation : any = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
            <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer"/>
        </View>
    );
}
//hide-start
const SettingsScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings</Text>
        </View>
    );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
//hide-end
```

Je kan ook `navigation.openDrawer` en `navigation.closeDrawer` gebruiken om de drawer te openen of sluiten.