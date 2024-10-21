---
sidebar_position: 2
---

# Expo

Expo is een tool die het ontwikkelen van React Native apps makkelijker maakt. Het is een bundel van tools die je kan gebruiken om je app te testen op je smartphone of tablet. Je kan ook een app bouwen zonder Expo, maar dan moet je de app eerst bundelen en dan op je smartphone installeren. Dat is een stuk moeilijker.

## Expo CLI

Expo CLI is een command line interface die je kan gebruiken om een nieuwe React Native app aan te maken. 

### Hoe Expo CLI gebruiken

Je kan de Expo CLI gebruiken zonder het eerst te installeren. Je kan het gewoon gebruiken met `npx`. Zo heb je ook altijd de laatste versie.

Je kan zien welke commando's je kan gebruiken met `npx expo --help`.

Het wordt aangeraden om eerst een Expo account aan te maken. Je kan zien of je al een account hebt door het volgende commando uit te voeren:

```bash
npx expo whoami
```

Als je nog geen account hebt, kan je er een aanmaken met het volgende commando:

```bash
npx expo register
```

Als je een account hebt, kan je inloggen met het volgende commando:

```bash
npx expo login
```

### Expo Go App voor iOS en Android

Om je app te testen op je smartphone of tablet, moet je de Expo Go app installeren. Deze app kan je vinden in de App Store en de Play Store.

[Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) - Android Lollipop (5) and greater
[iOS App Store](https://apps.apple.com/app/expo-go/id982107779) - iOS 11 and greater

Na de installatie kan je via de app met dezelfde account inloggen. Als je ingelogd bent is het veel eenvoudiger om projecten te openen. Ze zullen automatisch onder het "Projects" onderdeel staan.

## Nieuwe app aanmaken

Om een nieuwe app aan te maken, kan je het volgende commando gebruiken:

```bash
npx create-expo-app <project-name> --template expo-template-blank-typescript
```

of korter:

```bash
npx create-expo-app -t expo-template-blank-typescript <project-name>
```

Omdat we typescript gaan gebruiken in deze cursus, gebruiken we het `--template` argument. Als je geen typescript wil gebruiken, kan je het argument weglaten.

## Development server

Je kan de development server starten met het volgende commando:

```bash
npx expo start
```

Als je dit commando uitvoert dan wordt de Metro bundler gestart. Deze bundler is een http server die de javascript code compileert en bundelt. De bundler is ook verantwoordelijk voor het hot reloading. Als je een bestand aanpast, dan zal de bundler de code opnieuw compileren en de app opnieuw laden.

## De app openen op je telefoon of tablet

Om de app te openen:
- Op android devices druk je op de "Scan QR Code" knop en scan je de QR code die in de terminal verschijnt.
- Op een iPhone of iPad moet je de default camera app gebruiken om de QR code te scannen. Als je de QR code scant, dan zal de Expo Go app automatisch geopend worden.

:::warning
Zorg ervoor dat je op hetzelfde netwerk zit als je telefoon of tablet. Als je op een ander netwerk zit, dan zal de bundler niet kunnen verbinden met je telefoon of tablet. Gebruik desnoods een hotspot van je telefoon.
:::

### Expo gebruiken via een tunnel

Op sommige netwerken kan het zijn dat je geen verbinding kan maken met je telefoon of tablet. In dat geval kan je een tunnel gebruiken. Je kan dit doen met het volgende commando:

```bash
npx expo start --tunnel
```

De bundler zal nu een tunnel opzetten en een url genereren. Je kan deze url gebruiken om je app te openen op je smartphone of tablet.

Het kan zijn dat je nog een extra dependency moet installeren. Je kan dit doen met het volgende commando:

```bash
npm install --save-dev @expo/ngrok@^4.1.1
npm install --global @expo/ngrok@^4.1.1
```

Ook kan het gebeuren dat het `npx create-expo-app` command niet de nieuwste versie van expo installeert. De volgende commando's verhelpen dit probleem:

```bash
npm install expo@latest
npx expo install --fix
```
In het bestand `babel.config.json` moet je dan vervolgens de plugin `expo-router/babel` verwijderen.

## De app openen in de browser

Als je de app in de browser wil openen, dan kan je het volgende commando gebruiken:

```bash
npx expo start --web
```

of je kan de w toets indrukken in de terminal als je opgestart bent met `npx expo start`.

Het kan zijn dat je de volgende foutmelding krijgt:

```bash
CommandError: It looks like you're trying to use web support but don't have the required
dependencies installed.

Please install react-native-web@~0.19.10, react-dom@18.2.0,
@expo/metro-runtime@~3.2.3 by running:

npx expo install react-native-web react-dom @expo/metro-runtime

If you're not using web, please ensure you remove the "web" string from the platforms
array in the project Expo config.
```

Zoals de instructies zeggen moet je zelf deze dependencies installeren. Als je daarna opnieuw `npx expo start --web` uitvoert, dan zou het moeten werken.

## Eerste wijziging aanbrengen

Open de `App.tsx` file in de `src` folder. Verander de tekst in de `Text` component naar "Hello World". Als je de app nu opnieuw laadt, dan zal je de tekst zien veranderen.

```tsx expo={}
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change this code
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
```
