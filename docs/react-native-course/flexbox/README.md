---
sidebar_position: 5
---

# Flexbox

## Flexbox in React Native

React Native ondersteunt flexbox. Flexbox is een manier om de layout van je app te bepalen. Je kan flexbox gebruiken om de positie van elementen te bepalen, maar ook om de grootte van elementen te bepalen. Het is ontworpen om een consistente layout aan te bieden voor verschillende scherm groottes.

 In React Native zijn alle elementen by default flexbox elementen. Het is dus belangrijk om te weten hoe flexbox werkt. Het is zeer gelijkaardig met flexbox voor css op web. Met wat uitzonderingen.

## Flex Properties

### Flex Direction

Met flexDirection kan je de primaire as van de layout bepalen. 

Er zijn twee assen in flexbox: de main axis en de cross axis:
- De main axis is de richting waarin flex items worden geplaatst. 
- De cross axis is de richting die loodrecht staat op de main axis.

![picture 8](../images/108d4a005c0794e72388cc24caf172d783afc3e4518b24ca1ace8ae888d16385.jpeg)  

Als je flexDirection op **row** zet, dan zal de main axis horizontaal zijn. Dit wil zeggen dat alle items naast elkaar zullen staan.

Als je flexDirection op **column** zet, dan zal de main axis vertikaal zijn. Dit wil zeggen dat alle items onder elkaar zullen staan.

By **default** is de flexDirection **column**, maar bij web is dat row. Mobile apps zijn meer verticaal gericht.

```typescript expo={"dependencies":"expo-constants"}
import {View} from "react-native";

const App = () => {
    return (
        <View style={{flexDirection: "row", flex: 1}}>
            <View style={{width: 40, height: 40, backgroundColor: "red"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "green"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "blue"}}/>
        </View>
    )
}

export default App;
```

Andere mogelijkheden zijn: `column-reverse` en `row-reverse`. Deze werken hetzelfde als `column` en `row`, maar de items worden dan in omgekeerde volgorde geplaatst.

<div style={{display: "flex", flexDirection: "row", width: "100%"}}>

<img src={require("../images/flexDirectionRow.png").default} style={{maxWidth: "25%", padding: "10px"}}/>
<img src={require("../images/flexDirectionColumn.png").default} style={{maxWidth: "25%", padding: "10px"}} />
<img src={require("../images/flexDirectionRowReverse.png").default} style={{maxWidth: "25%", padding: "10px"}} />
<img src={require("../images/flexDirectionColumnReverse.png").default} style={{maxWidth: "25%", padding: "10px"}} />
</div>

### Flex 

Flex geeft aan hoe de items van de container zich moeten verhouden tot de andere items in de container. De items gaan "vechten" om de ruimte in de container. Hoe meer flex een item heeft, hoe meer ruimte het zal krijgen.

Meestal zetten we de hoofdcontainer op flex: 1. Dit zorgt ervoor dat de container de volledige ruimte inneemt. 

Hier is een voorbeeld van een container met 3 items. De eerste heeft flex: 1, de tweede heeft flex: 2 en de derde heeft flex: 3. De derde item zal dus 3 keer zo groot zijn als de eerste.

```typescript expo={"dependencies":"expo-constants"}
import {View} from "react-native";

const App = () => {
    return (
        <View style={{flexDirection: "column", flex: 1}}>
            <View style={{flex: 1, backgroundColor: "red"}}/>
            <View style={{flex: 2, backgroundColor: "green"}}/>
            <View style={{flex: 3, backgroundColor: "blue"}}/>
        </View>
    )
}

export default App;
```

### justifyContent

justifyContent bepaalt de verspreiding van de children over de main axis. 

De mogelijkheden zijn:
- `flex-start`: de items worden aan de start van de main axis geplaatst.
- `flex-end`: de items worden aan het einde van de main axis geplaatst.
- `center`: de items worden in het midden van de main axis geplaatst.
- `space-between`: de items worden verspreid over de main axis. De eerste en laatste item staan aan de start en het einde van de main axis.
- `space-around`: de items worden verspreid over de main axis. Er is evenveel ruimte tussen de items en de start en het einde van de main axis.

Default: `flex-start`

```typescript expo={"dependencies":"expo-constants"}
import {View} from "react-native";

const App = () => {
    return (
        <View style={{flexDirection: "column", flex: 1, justifyContent: "center"}}>
            <View style={{width: 40, height: 40, backgroundColor: "red"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "green"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "blue"}}/>
        </View>
    )
}

export default App;
```

<div style={{display: "flex", flexDirection: "row", width: "100%", flexWrap: "wrap"}}>

<img src={require("../images/justifyContentCenter.png").default} style={{maxWidth: "25%", padding: "10px"}}/>
<img src={require("../images/justifyContentFlexStart.png").default} style={{maxWidth: "25%", padding: "10px"}} />
<img src={require("../images/justifyContentFlexEnd.png").default} style={{maxWidth: "25%", padding: "10px"}} />
<img src={require("../images/justifyContentSpaceAround.png").default} style={{maxWidth: "25%", padding: "10px"}} />
<img src={require("../images/justifyContentSpaceBetween.png").default} style={{maxWidth: "25%", padding: "10px"}} />
</div>

# alignItems

alignItems bepaalt hoe de items worden uitgelijnd over de cross axis.

De mogelijkheden zijn:
- `flex-start`: de items worden aan de start van de cross axis geplaatst.
- `flex-end`: de items worden aan het einde van de cross axis geplaatst.
- `center`: de items worden in het midden van de cross axis geplaatst.
- `stretch`: de items worden uitgerekt om de volledige hoogte van de container te vullen. Dit werkt enkel als de relevante grootte van de items niet expliciet is gezet.

Default: `stretch`

```typescript expo={"dependencies":"expo-constants"}
import {View} from "react-native";

const App = () => {
    return (
        <View style={{flexDirection: "column", flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
            <View style={{width: 40, height: 40, backgroundColor: "red"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "green"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "blue"}}/>
        </View>
    )
}

export default App;
```

<div style={{display: "flex", flexDirection: "row", width: "100%"}}>

<img src={require("../images/alignItemsCenter.png").default} style={{maxWidth: "25%", padding: "10px"}}/>
<img src={require("../images/alignItemsFlexEnd.png").default} style={{maxWidth: "25%", padding: "10px"}} />
<img src={require("../images/alignItemsFlexStart.png").default} style={{maxWidth: "25%", padding: "10px"}} />
<img src={require("../images/alignItemsStretch.png").default} style={{maxWidth: "25%", padding: "10px"}} />
</div>

# alignSelf

Als je een item wilt uitlijnen op een andere manier dan de rest van de items, dan kan je align self gebruiken. 

```typescript expo={"dependencies":"expo-constants"}
import {View} from "react-native";

const App = () => {
    return (
        <View style={{flexDirection: "column", flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
            <View style={{width: 40, height: 40, backgroundColor: "red"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "green"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "blue", alignSelf: "flex-start"}}/>
        </View>
    )
}

export default App;
```

<div style={{display: "flex", flexDirection: "row", width: "100%"}}>

<img src={require("../images/alignSelfFlexEnd.png").default} style={{maxWidth: "25%", padding: "10px"}}/>
<img src={require("../images/alignSelfMixed.png").default} style={{maxWidth: "25%", padding: "10px"}} />
<img src={require("../images/alignSelfStretch.png").default} style={{maxWidth: "25%", padding: "10px"}} />
</div>

# flexWrap

Flex wrap bepaalt of de items op meerdere regels moeten worden weergegeven als ze niet op de main axis passen.

De mogelijkheden zijn:
- `nowrap`: de items worden niet op meerdere regels weergegeven.
- `wrap`: de items worden op meerdere regels weergegeven.

Default: `nowrap`

```typescript expo={"dependencies":"expo-constants"}
import {View} from "react-native";

const App = () => {
    return (
        <View style={{flexDirection: "row", flex: 1, justifyContent: "flex-start", alignItems: "flex-start", flexWrap:"wrap", alignContent: "flex-start"}}>
            <View style={{width: 40, height: 40, backgroundColor: "red"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "green"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "blue"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "pink"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "black"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "yellow"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "brown"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "turquoise"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "indigo"}}/>
            <View style={{width: 40, height: 40, backgroundColor: "purple"}}/>
        </View>
    )
}

export default App;
```

alignContent bepaalt hoe de regels worden uitgelijnd als er meerdere regels zijn. Dit werkt enkel als flexWrap op wrap staat.

## Absolute positioning

Absolute positioning is een manier om de positie van een element te bepalen. Je moet hier zelf rekening houden met bepaalde schermgroottes.

Je gebruikt hier de properties `top`, `bottom`, `left` en `right` om de positie van het element te bepalen.

```typescript expo={"dependencies":"expo-constants"}
import {View} from "react-native";

const App = () => {
    return (
        <View style={{flexDirection: "column", flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
            <View style={{width: 40, height: 40, backgroundColor: "red", position: "absolute", top: 0, left: 0}}/>
            <View style={{width: 40, height: 40, backgroundColor: "green", position: "absolute", top: 50, right: 50}}/>
            <View style={{width: 40, height: 40, backgroundColor: "blue", position: "absolute", bottom: 10, left: 10}}/>
            <View style={{width: 40, height: 40, backgroundColor: "pink", position: "absolute", bottom: 50, right: 30}}/>
        </View>
    )
}

export default App;
```