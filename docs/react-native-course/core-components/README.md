---
sidebar_position: 4
---

# Core Components

Zoals we al gezien hebben kan er in React Native geen gebruik gemaakt worden van HTML elementen. In plaats daarvan gebruiken we React Native componenten. Deze componenten zijn gebaseerd op de HTML elementen, maar hebben een andere naam en werken anders. In deze sectie gaan we de meest gebruikte componenten bekijken.

## View

De `View` component is het meest gebruikte component in React Native. Het is een container component die andere componenten kan bevatten. De `View` component is vergelijkbaar met de `div` tag in HTML.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default App;
```

Dezelfde app zou er in React.js als volgt uitzien:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import React from "react";

const App = () => {
    return (
        <div style={styles.container}>
            <p>Hello World</p>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flex: 1,
        height: "100vh",
        width: "100vw",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
}

export default App;
```

Je ziet dat deze twee componenten erg veel op elkaar lijken. De `View` component is een container component die andere componenten kan bevatten. De `div` tag in HTML is ook een container component die andere elementen kan bevatten. Een belangrijk verschil is dat alle Views by default flexbox containers zijn. Je hoeft dit niet expliciet aan te geven. In React.js moet je dit wel expliciet aangeven door de `display: flex` property toe te voegen aan de `div` tag.

## StyleSheet

Het `StyleSheet` component is een object dat alle styling informatie bevat. In React.js wordt dit meestal gedaan met CSS. In React Native wordt dit gedaan in JavaScript. Het `StyleSheet` component is een object dat alle styling informatie bevat. 

Een stylesheet kan je als volgt aanmaken:

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10
    }
});

export default App;
```

We maken hier een vierkant aan met een rode achtergrond. De `borderWidth` property geeft aan hoe dik de rand van het vierkant moet zijn. De `borderColor` property geeft aan welke kleur de rand moet hebben. De `borderRadius` property geeft aan hoeveel de hoeken van het vierkant afgerond moeten worden. 

Merk op dat we hier gebruik maken van `Constants.statusBarHeight`. Dit is een variabele die de hoogte van de statusbalk bevat. Zo kunnen we ervoor zorgen dat de app niet onder de statusbalk komt te staan.

Je kan nog meer styling properties toevoegen aan een View. Je kan deze hier vinden: 
- https://reactnative.dev/docs/view-style-props

## Inline styles

Het is ook mogelijk rechstreeks in de style property van een View een object mee te geven. Dit is echter niet aan te raden. Het is beter om een stylesheet aan te maken en deze te gebruiken. Dit is beter voor de performance van je app. Inline styles zijn echter wel handig als je snel een style wilt testen.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={{paddingTop: Constants.statusBarHeight}}>
            <View style={{width: 100,height: 100, backgroundColor: "red",borderWidth: 1,borderColor: "black",borderRadius: 10}}/>
        </View>
    );
}

export default App;
```


## Text

De `Text` component is een component die tekst kan weergeven. De `Text` component is vergelijkbaar met de `p` tag in HTML.

Hieronder een aantal voorbeelden van veel voorkomende style properties

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.hello}>Hello World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight },
    hello: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
        textDecorationLine: "underline",
        textAlign: "center",
        color: "red"
    }
});

export default App;
```

Meer informatie over de styling props van het `Text` component kan je hier vinden:
- https://reactnative.dev/docs/text-style-props

### Text nesting

Het is mogelijk om een `Text` component in een andere `Text` component te nesten. 

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={styles.container}>
            <Text>Hello<Text style={styles.world}> World</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight },
    world: { color: "blue", fontWeight: "bold" }
});

export default App;
```

## Image

Een Image is een react component om verschillende types van afbeeldingen te laten zien:
- Afbeeldingen van het internet
- Static image resources
- Afbeeldingen van local storage (zoals fotos van de camera)

### Static image resources

De afbeeldingen komen mee in je project directory staan bij de source bestanden. Je kan deze afbeeldingen gebruiken door de `require` functie te gebruiken. 

```typescript
<Image source={require("./bunny.jpg")}/>
```

### Afbeeldingen van het internet

Je kan ook afbeeldingen van het internet gebruiken. Dit doe je door de `uri` property te gebruiken. Images van het internet moeten altijd een width en een height style hebben.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight },
    image: { width: 100, height: 100 }
});

export default App;
```

### Styling

Images zijn ook View objecten, dus je kan ze ook stylen.

Meer informatie over de styling props van het `Image` component kan je hier vinden:
- https://reactnative.dev/docs/image-style-props

### Resize mode

De `resizeMode` property kan je gebruiken om de manier waarop een image wordt weergegeven in het geval dat de afmetingen van de image niet overeenkomen met de afmetingen van de `Image` component.

De volgende waarden zijn mogelijk:
- `repeat` - herhaalt de afbeelding
- `contain` - De afbeelding wordt zo groot mogelijk gemaakt, maar er wordt wel rekening gehouden met de aspect ratio van de afbeelding. De afbeelding wordt niet uitgerekt.
- `center` - De afbeelding wordt niet veranderd van grootte. De afbeelding wordt gecentreerd in de `Image` component.
- `stretch` - De afbeelding wordt zo groot mogelijk gemaakt. Er wordt geen rekening gehouden met de aspect ratio van de afbeelding. De afbeelding wordt uitgerekt.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight },
    image: { width: 150, height: 200, resizeMode: "center" }
});

export default App;
```

## TextInput

De `TextInput` component is een component die gebruikt kan worden om tekst in te voeren. De `TextInput` component is vergelijkbaar met de `input` tag in HTML.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={styles.container}>
            <TextInput
                secureTextEntry={false}
                autoCapitalize="characters"
                placeholder="Enter your name"
                keyboardType="default"
                style={styles.textinput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight},
    textinput: { borderColor: "red", borderWidth: 1}
});

export default App;
```

Meer informatie over de props van het `TextInput` component kan je hier vinden:
- https://reactnative.dev/docs/textinput#props

## Button

De `Button` component is een component die gebruikt kan worden om een button te maken. De `Button` component is vergelijkbaar met de `button` tag in HTML.

Op beide platformen zal de button een native feel hebben en button heeft beperkte styling mogelijkheden.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Button, View} from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={styles.container}>
            <Button title="Hello World" color="green" disabled={false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight }
});

export default App;
```

## Pressable

Zoals we hiervoor hebben vermeld is de `Button` component beperkt in styling mogelijkheden. Het Pressable component maakt het mogelijk andere Views te gebruiken als button. 

Zelfs als je een `Button` component gebruikt, wordt er achter de schermen een `Pressable` component gebruikt om de button te maken. 

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.pressable}
                onPress={() => {
                    Alert.alert("Pressed!");
                }}
            >
                <Text>Press Me</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight},
    pressable: { backgroundColor: "red" }
});

export default App;
```

Je kan de stijl van de `Pressable` laten aanpassen afhankelijk hij ingedrukt is of niet. Dit doe je door in plaats van een style object mee te geven een functie mee te geven die een style object teruggeeft.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={styles.container}>
            <Pressable
                style={(style) => (style.pressed) ? styles.pressedTrue : styles.pressedFalse}
                onPress={() => Alert.alert("Pressed!")}
            >
                <Text style={{color: "white"}}>Press Me</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight},
    pressedTrue: { backgroundColor: "red", padding: 10, borderRadius: 5},
    pressedFalse: { backgroundColor: "blue", padding: 10, borderRadius: 5}
});

export default App;
```

## Handling events

Zoals we al bij de pressable hebben gezien, kan je events afhandelen door een functie mee te geven aan de `onPress` prop. 

Pas op in html zijn events altijd in lowercase geschreven, in react native zijn events altijd in camelCase geschreven. 

### Button

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Button, View, Alert } from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={styles.container}>
            <Button
                title="Press me"
                onPress={() => {
                    Alert.alert("Pressed!");
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight}
});

export default App;
```

### TextInput

TextInput heeft een aantal event handlers die je kan gebruiken:
- onChange: wordt aangeroepen wanneer de tekst in de input verandert. 
- onChangeText: wordt aangeroepen wanneer de tekst in de input verandert. Het verschil met onChange is dat onChangeText de nieuwe tekst als argument meekrijgt.
- onSubmitEditing: wordt aangeroepen wanneer de gebruiker op de submit knop drukt.
- onFocus: wordt aangeroepen wanneer de gebruiker de input selecteert.
- onKeyPress: wordt aangeroepen wanneer de gebruiker een toets indrukt. 

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter your name"
                onChangeText={(text) => {
                    console.log(text);
                }}
                onChange={(event) => {
                    console.log(event.nativeEvent.text);
                }}
                onSubmitEditing={(event) => {
                    console.log(event.nativeEvent.text);
                }}
                onFocus={() => {
                    console.log("Focused");
                }}
                onKeyPress={(event) => {
                    console.log(event.nativeEvent.key);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight}
});

export default App;
```

### Pressable

Pressable heeft een aantal event handlers die je kan gebruiken:
- onPress: wordt aangeroepen wanneer de gebruiker op de button drukt.
- onPressIn: wordt aangeroepen wanneer de gebruiker op de button begint te drukken.
- onPressOut: wordt aangeroepen wanneer de gebruiker de button loslaat.
- onLongPress: wordt aangeroepen wanneer de gebruiker de button lang ingedrukt houdt. Standaard op 500ms. Kan aangepast worden met de `delayLongPress` prop.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, View, Pressable, Alert, Text } from "react-native";
import Constants from "expo-constants";

const App = () => {
    return (
        <View style={styles.container}>
            <Pressable
                delayLongPress={1000}
                onPress={() => {
                    Alert.alert("Pressed!");
                }}
                onPressIn={() => {
                    Alert.alert("Pressed in!");
                }}
                onPressOut={() => {
                    Alert.alert("Pressed out!");
                }}
                onLongPress={() => {
                    Alert.alert("Long pressed!");
                }}
            >
                <Text>Press Me</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight}
});

export default App;
```