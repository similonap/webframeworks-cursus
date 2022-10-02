---
sidebar_position: 4
---

# Combineren van navigators

Een van de krachtige features van React Navigation is dat je verschillende navigators kan combineren.

Wil je bijvoorbeeld een app die bestaat uit twee screens. De eerste pagina is een welkomstpagina met een knop om naar de hoofd screen te gaan. De hoofd screen bestaat uit een tab navigation met twee tabs. 

Om dit te realiseren moeten we een `Stack.Navigator` component maken met daarin twee screens. De eerste screen is de welkomstpagina. De tweede screen is dan een nieuw component dat de tab navigation bevat.

```typescript expo={"dependencies":"@react-navigation/native-stack,@react-navigation/bottom-tabs,react-native-screens,react-native-safe-area-context,@react-navigation/native,react-native-safe-area-context,@react-navigation/native,react-native-gesture-handler,react-native-reanimated"}
import * as React from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Button, Text } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tab1Screen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tab 1!</Text>
    </View>
  );
}

const Tab2Screen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tab 2!</Text>
    </View>
  );
}

const HomeScreen = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Tab1" component={Tab1Screen} />
        <Tab.Screen name="Tab2" component={Tab2Screen} />
    </Tab.Navigator>
  );
}

const WelcomeScreen = () => {
  let navigation = useNavigation();
  return (
    <View>   
        <Text>Welcome</Text>
        <Button title="Go to home screen" onPress={() => navigation.replace("Home")}/>
    </View>
  );
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
```

