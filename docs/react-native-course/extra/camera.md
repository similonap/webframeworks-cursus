# Camera

`expo-camera` is een package die je kan gebruiken om foto"s te maken met je app. Met Camera kan je ook foto"s nemen en filmpjes maken.

## Installatie

Om `expo-camera` te gebruiken moeten we eerst de `expo-camera` library installeren:

```bash
npx expo install expo-camera
```

## Gebruik

### Permissie vragen

Het is belangrijk om te weten dat je de `Camera` component pas kan gebruiken als de gebruiker hiervoor toestemming heeft gegeven. Dit kan je doen met de `requestPermission` functie afkomstig uit de `useCameraPermissions` hook. 

```typescript expo={"dependencies":"expo-camera"}
import React, { useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        // De permissies zijn nog aan het laden
        return <View/>
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text>You don"t have permission to use the camera</Text>
                <Button title="Toestemming vragen" onPress={requestPermission} />
            </View>
        );
    }

    return (
        <View>
            <Text>You have permission to use the camera</Text>
        </View>
    )
}

export default App;
```

### Camera gebruiken

Eenmaal je de permissie hebt gekregen kan je de `Camera` component gebruiken.

```typescript expo={"dependencies":"expo-camera"}
import React, { useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        // De permissies zijn nog aan het laden
        return <View/>
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text>You don"t have permission to use the camera</Text>
                <Button title="Toestemming vragen" onPress={requestPermission} />
            </View>
        );
    }

    return (
        <View style={{alignItems: "stretch"}}>
            <Camera style={{flex: 1}} type={CameraType.front}/>
        </View>
    )
}

export default App;
```

### Foto maken

Om een foto te maken kan je de `takePictureAsync` functie gebruiken. We hebben hier wel een referentie nodig naar het camera object. Dit kan je doen door de `useRef` hook te gebruiken. Deze biedt je dan een object aan waarmee je de camera kan aanroepen.

De referentie naar de camera kan je als volgt verkrijgen:

```typescript
const cameraRef = React.useRef<Camera>(null);
```

Je moet dan ook nog het `Camera` component aanpassen zodat het de `cameraRef` gebruikt:

```typescript
<Camera ref={cameraRef}>
```

daarna kunnen we de `takePictureAsync` functie aanroepen op deze `cameraRef`. Deze functie geeft ons een `Photo` object terug. Dit object bevat de `uri` van de foto.

```typescript expo={"dependencies":"expo-camera"}
import React, { useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const cameraRef = React.useRef<Camera>(null);
    const [photo, setPhoto] = useState<string | null>(null);

    const takePicture = () => {
        if (cameraRef.current) {
            cameraRef.current.takePictureAsync().then((photo) => {
                setPhoto(photo.uri);
            });
        }
    }

    if (!permission) {
        // De permissies zijn nog aan het laden
        return <View/>
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text>You don"t have permission to use the camera</Text>
                <Button title="Toestemming vragen" onPress={requestPermission} />
            </View>
        );
    }

    return (
        <View style={{alignItems: "stretch", flex: 1}}>
            <Camera ref={cameraRef} style={{flex: 1}} type={CameraType.front}/>
            {photo ? <Image source={{uri: photo}} style={{flex: 1}} /> : <View style={{flex:1}} />}
            <Button title="Take picture" onPress={takePicture} />
        </View>
    )
}

export default App;
```

### Meer informatie

Voor meer informatie over de `expo-camera` package kan je de [documentatie](https://docs.expo.io/versions/latest/sdk/camera/) raadplegen.