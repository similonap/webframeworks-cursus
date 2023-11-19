---
sidebar_position: 14
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

