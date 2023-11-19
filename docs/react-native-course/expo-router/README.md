---
sidebar_position: 9
---

# Expo Router

Expo Router werkt zeer gelijkaardig aan de routing in next.js. Het is een file-based router. Dit wil zeggen dat je een mapstructuur aanmaakt en dat je op basis van de bestandsnaam de route bepaalt. Het laat toe om navigatie tussen schermen in je app te beheren, waardoor gebruikers naadloos tussen verschillende delen van de UI van je app kunnen bewegen, met behulp van dezelfde componenten op meerdere platforms (Android, iOS en web).

Het is gebouwd op [React Navigation](https://reactnavigation.org/), een populaire library voor het beheren van navigatie in React Native apps.

## Installatie

Als je expo-router wil gebruiken in je project moet je eerst enkele packages installeren en een aantal bestanden aanpassen. Deze stappen worden hieronder uitgelegd. 

### Nieuw project

Als je nog geen project hebt kan je een nieuw project aanmaken met een template en hoef je geen ingewikkelde installatie te doen. 

```bash
npx create-expo-app my-project --template expo-template-typescript-router
```

Je moet nog wel de `scheme` property aanpassen in je `app.json` (zie verder).

### Bestaand project

#### Packages installeren

Installeer de library in je project:

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler react-native-web react-dom @react-navigation/drawer react-native-reanimated
```

#### Package.json aanpassen

Pas de `main` property in je `package.json` aan:

```json
{
  "main": "expo-router/entry"
}
```

#### App.js aanpassen

Pas je `App.js` aan:

```jsx
{
  ...
  "scheme": "your-app-scheme"
  ...
  "web": {
    ...
    "bundler": "metro"
  }
}
```

Je moet de `scheme` property aanpassen naar een unieke naam voor je app. Dit is nodig voor deep linking. Je kan hier bijvoorbeeld de naam van je app voor gebruiken. Je moet er wel voor zorgen dat deze naam uniek is. 

#### babel.config.js aanpassen

Je moet de `babel.config.js` aanpassen zodat `expo-router` en `react-native-reanimated` correct werken. 

```
module.exports = function (api) {
  ...
  return {
    ...
    plugins: ['expo-router/babel','react-native-reanimated/plugin'],
  };
};
```

### Opstarten

Als je nu de applicatie opstart met `expo start` dan krijg je de volgende pagina te zien:

![Alt text](./img/initial.png)