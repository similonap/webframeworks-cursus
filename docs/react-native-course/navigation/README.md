---
sidebar_position: 8
---

# Routing en navigatie

Onder Routing en navigatie worden de volgende aspecten behandeld:
- Opsplitsen van de app in verschillende schermen
- Navigeren tussen deze schermen
- Tonen van platform specifieke navigatie elementen (tabs, navigatiebalk, transities,...)

Vergelijking met web browser:
- We hebben verschillende pagina's (html files) met links
- De gebruiker klikt op een link en wordt naar een andere pagina gebracht
- De gebruiker kan terug gaan naar de vorige pagina (via de browser history)
- De back knop zorgt ervoor dat de vorige pagina wordt geladen

React native heeft deze concepten niet zonder een externe library. Wij gaan gebruik maken van [React Navigation](https://reactnavigation.org/).

Om React Navigation te gebruiken moeten we deze eerst installeren:

```bash
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
```

## Stack Navigator

React Navigation ondersteunt verschillende navigatie stijlen. De meest eenvoudige is de Stack Navigator. Deze navigatie stijl is vergelijkbaar met de browser history. De gebruiker kan door de verschillende schermen navigeren en kan terug gaan naar de vorige schermen.

Als we de stack navigator willen gebruiken moeten we deze ook nog apart installeren:

```bash
npm install @react-navigation/native-stack
```

### Eerste schermen

- `createStackNavigator` is een functie die een object teruggeeft met twee properties: `Screen` en `Navigator`. We gebruiken deze properties om een stack navigator te maken.
- `NavigationContainer` is een component die we gebruiken om de stack navigator te renderen. Alle `Navigator` en `Screen` componenten moeten binnen dit component zitten.

Hieronder een voorbeeld met 1 `Screen` component:

```typescript expo={"dependencies":"@react-navigation/native-stack,react-native-screens,react-native-safe-area-context,@react-navigation/native"}
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

Als we een tweede Screen willen toevoegen moeten we deze er gewoon bijzetten. Het eerste scherm is altijd het scherm dat wordt getoond als de app wordt gestart.

```typescript expo={"dependencies":"@react-navigation/native-stack,react-native-screens,react-native-safe-area-context,@react-navigation/native"}
//hide-start
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const DetailScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
//hide-end
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//hide-start
export default App;
//hide-end
```

### Titel Veranderen

De titel van een scherm kan worden veranderd door de `options` property van het `Screen` component te gebruiken. De titel wordt getoond in de navigatiebalk.

```typescript expo={"dependencies":"@react-navigation/native-stack,react-native-screens,react-native-safe-area-context,@react-navigation/native"}
//hide-start
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const DetailScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
//hide-end
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Overview"}}/>
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//hide-start
export default App;
//hide-end
```

### Doorgeven van props

Soms willen we properties doorgeven aan een scherm. We geven dan niet meer de component door als prop maar een functie die een component teruggeeft. Deze functie krijgt als argument de properties die we hebben doorgegeven.

```typescript expo={"dependencies":"@react-navigation/native-stack,react-native-screens,react-native-safe-area-context,@react-navigation/native"}
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({colors}: {colors: string[]}) => {
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
      {colors.map((color) => <View style={{backgroundColor: color, flex: 1}}></View>)}
    </View>
  );
}

const DetailScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  let colors : string[] = ["red", "green", "blue"]; 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
            {props => <HomeScreen {...props} colors={colors} />}
        </Stack.Screen>
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

### Navigeren

Hiervoor gebruiken we de `useNavigation` hook. Deze hook geeft ons een object waarmee we kunnen navigeren. 

#### navigate

We kunnen dan de `navigate` functie gebruiken om naar een andere scherm te navigeren. We geven de naam van het scherm mee als argument.

```typescript expo={"dependencies":"@react-navigation/native-stack,react-native-screens,react-native-safe-area-context,@react-navigation/native"}
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {
  const navigation : any = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
      <Button title="Detail" onPress={() => navigation.navigate("Detail")}/>
    </View>
  );
}

const DetailScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

:::note
We gebruiken hier een `any` als type. Het type systeem van React Navigation is behoorlijk complex, daarom hebben we besloten dat we dit hier niet gaan behandelen. Als je meer wilt weten over het type systeem van React Navigation, dan kun je [hier](https://reactnavigation.org/docs/typescript/) meer informatie vinden.
:::

#### push

We kunnen ook de `push` functie gebruiken om naar een andere scherm te navigeren. Het grote verschil is dat je met push twee keer hetzelfde scherm achter elkaar kunt pushen. Bij navigate gaat hij altijd eerst kijken of die niet al op de stack staat.

#### replace

Als je een scherm wilt vervangen door een ander scherm, dan kun je de `replace` functie gebruiken. Deze functie verwijdert het huidige scherm en plaatst het nieuwe scherm op de stack.

Er zal geen back knop verschijnen als je een scherm vervangt.

#### goBack

Als je wilt terug gaan naar het vorige scherm, dan kun je de `goBack` functie gebruiken. Deze functie verwijdert het huidige scherm en plaatst het vorige scherm op de stack.

```typescript expo={"dependencies":"@react-navigation/native-stack,react-native-screens,react-native-safe-area-context,@react-navigation/native"}
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {
  const navigation : any = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
      <Button title="Detail" onPress={() => navigation.navigate("Detail")}/>
    </View>
  );
}

const DetailScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

Wil je teruggaan naar een specifiek scherm dan gebruik je best gewoon terug `navigate`. `popToTop` is een functie die je gebruikt om terug te gaan naar het eerste scherm van de stack.

### Parameters doorgeven

We kunnen parameters doorgeven aan een scherm. Dit doen we door een object mee te geven aan de `navigate` functie. We kunnen deze parameters dan opvragen in het scherm waar we naartoe navigeren met de `useRoute` hook.

```typescript {10-12,18,23} expo={"dependencies":"@react-navigation/native-stack,react-native-screens,react-native-safe-area-context,@react-navigation/native"}
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {
  const navigation : any = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
      <Button title="Detail 1" onPress={() => navigation.navigate("Detail", {id: 1})}/>
      <Button title="Detail 2" onPress={() => navigation.navigate("Detail", {id: 2})}/>
      <Button title="Detail 3" onPress={() => navigation.navigate("Detail", {id: 3})}/>
    </View>
  );
}

const DetailScreen = () => {
  const route: RouteProp<any> = useRoute();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
      <Text>{route.params?.id}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```