import ExpoSnack from '@site/src/components/ExpoSnack/ExpoSnack';

# Inleiding

## React Native

React Native is een framework om native apps te maken voor iOS en Android. Het is gebaseerd op React.js, een JavaScript library voor het maken van webapps. React Native is ontwikkeld door Meta en wordt veel gebruikt door grote bedrijven zoals Airbnb, Facebook, Instagram, Tesla, Uber en Walmart.

React Native lijkt heel hard op React.js. De meeste React.js code kan je gewoon gebruiken in React Native. De grootste verschillen zijn:
- React Native gebruikt native componenten in plaats van webcomponenten. Dit betekent dat je geen HTML tags gebruikt, maar native componenten zoals `<View>`, `<Text>` en `<Image>`. 
- React Native gebruikt geen CSS bestanden of modules maar inline styles. Dit betekent dat je geen CSS classes kan gebruiken, maar inline styles zoals `style={{ color: 'red' }}`.
- React Native gebruikt geen HTML bestanden maar JavaScript bestanden met de extensie `.js` of `.jsx`.

## Expo

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
