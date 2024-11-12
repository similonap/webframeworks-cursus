# CSS Frameworks in React Native

React Native gebruikt `StyleSheet.create()` om elementen te vormgeven. Op die manier is het mogelijk om stijlen door te geven als objecten, maar maakt het gebruik van CSS stylesheets, zoals we kennen uit React en andere frameworks, niet (rechtstreeks) mogelijk.

Toch kan het interessant zijn om een CSS Framework te gebruiken om een consistente stijl te handhaven in je app. In dit hoofdstuk bekijken we Nativewind, een React Native implementatie van TailwindCSS.

## Nativewind Installeren

### Nativewind configureren

In dit voorbeeld vertrekken we vanuit een expo-router project. Dit project werd aangemaakt met behulp van volgend commando:

```bash
npx create-expo-app -t expo-template-typescript-router nativewind-voorbeeld
```

Wanneer je een project hebt aangemaakt, kan je Nativewind installeren.

> **Opgelet**, zorg dat je eerst `cd` naar je nieuwe project-folder.

```bash
npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
```

Open het bestand genaamd `babel.config.js` in je project root folder. In dit bestand zal je Nativewind moeten toevoegen als importSource en als preset:

```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

Als laatste willen we ook de types toevoegen voor Typescript support. Maak een bestand `nativewind-env.d.ts` aan in je **project root folder** (dus **niet** in de app folder).

```javascript
/// <reference types="nativewind/types" />
```

### TailwindCSS configureren

Om Nativewind te gebruiken, wordt TailwindCSS geinstalleerd en in het build-proces van React Native geintegreerd. Om dit te doen werken, is er nog wat extra configuratie nodig van je project. Het volgende commando maakt een config bestand voor TailwindCSS genaamd `tailwind.config.js`.

```bash
npx tailwindcss init
```

Open het bestand `tailwind.config.js`. Hierin vind je een object met 4 arrays:

- content: welke bestanden gebruik maken van de TailwindCSS styling
- presets: welke presets deze bestanden altijd zullen bevatten
- theme: aanpassingen die je wilt maken aan de default-styling van TailwindCSS
- plugins: verschillende plugins voor TailwindCSS die je kan gebruiken in je project

Pas de inhoud van het bestand aan, zodat je content en presets ingevuld zijn.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Maak nu een bestand aan genaamd `global.css` in je **project root folder** (dus **niet** in de `app` folder). Voeg daarin de verwijzingen toe naar de 3 hoofd-onderdelen van TailwindCSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Gebruik vervolgens dit CSS bestand in de main `_layout.tsx` van je app folder.

```javascript
import "../global.css";
```

### Metro configureren

Als laatste stap moet Metro zelf ook geconfigureerd worden. Standaard zal Metro geen config bestand aanmaken, en daardoor z'n default waardes gebruiken. Wij willen nu enkele van die default waardes aanpassen, dus maken we een config bestand aan voor metro met het volgende commando:

```bash
npx expo customize metro.config.js
```

Open vervolgens het bestand `metro.config.js` en pas dit aan als volgt:

```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

## Nativewind Gebruiken

Nativewind zorgt ervoor dat je het `classname` attribute terug kunt gebruiken (dat je kent vanuit React).

Open het bestand `index.tsx`. Voeg daarin het volgende `Text` element toe aan het return-statement:

```html
<Text className="bg-black text-white font-bold italic">Edit app/index.tsx to edit this screen.</Text>
```

Je kan nog steeds gebruik maken van inline styles en eigen styles, net zoals ervoor.

```javascript
function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="bg-black text-white font-bold italic">Edit app/index.tsx to edit this screen.</Text>
        </View>
    );
}
```
