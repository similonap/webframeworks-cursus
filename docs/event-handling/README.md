---
sidebar_position: 6
---

# Event Handling

## Text Input

We gaan nu eens kijken hoe we onze applicatie iets interactiever kunnen maken door de hand van form elementen en event handling. We gaan nu een nieuwe component introduceren genaamd InputView. Deze staat toe een naam en een jaartal in te vullen.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
const styles = {
    inputFields: {
        display: "grid", gridTemplateColumns: "70px 200px"
    }
}
//hide-end
const InputView = () => {
  return (
    <div>
      <div style={styles.inputFields}>
        <label htmlFor="name">name:</label>
        <input type="text" id="name" />
        <label htmlFor="year">year:</label>
        <input type="number" id="year" name="year" min="1900" max="2021" />
      </div>
      <input type="button" id="submit" value="Add Movie" />
    </div>
  )
}
//hide-start
const App = () => {
    return <InputView/>
}

export default App;
//hide-end
```

Hier hebben we één tekstveld voor de naam van de film en een numeriek invoerveld voor het jaartal. We zetten hier een maximum 2021 en een minimum van 1900. Tot nu toe wordt er nog niets gedaan met deze invoervelden. 

Om hier iets mee te doen, maken we een functie om iets te doen wanneer er iets ingetypt wordt in het invoerveld. Dit soort functie is een event listener. Verderop in de code zullen we er voor zorgen dat deze functie loopt zodra een bepaald type gebeurtenis (event) zich voordoet.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
const styles = {
    inputFields: {
        display: "grid", gridTemplateColumns: "70px 200px"
    }
}
//hide-end
const handleChange = (event) => {
  console.log(event.target.value);
}
//hide-start
const InputView = () => {
  return (
    <div>
      <div style={styles.inputFields}>
        <label htmlFor="name">name:</label>
        <input type="text" id="name" onChange={handleChange} />
        <label htmlFor="year">year:</label>
        <input type="number" id="year" name="year" min="1900" max="2021" />
      </div>
      <input type="button" id="submit" value="Add Movie" />
    </div>
  )
}
//hide-end
//hide-start
const App = () => {
    return <InputView/>
}

export default App;
//hide-end
```

We kunnen de gewenste interface van de handleChange functie hierboven te weten komen door de muis over de onChange property te plaatsen. Je krijgt dan iets gelijkaardig aan:

![Change Event Handler](img/changeeventhandler.png)

We kunnen nu de signatuur `handleChange` aanpassen om de waarschuwing van hierboven op te lossen.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
const styles = {
    inputFields: {
        display: "grid", gridTemplateColumns: "70px 200px"
    }
}
//hide-end
const handleChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(event.target.value);
}
//hide-start
const InputView = () => {
  return (
    <div>
      <div style={styles.inputFields}>
        <label htmlFor="name">name:</label>
        <input type="text" id="name" onChange={handleChange} />
        <label htmlFor="year">year:</label>
        <input type="number" id="year" name="year" min="1900" max="2021" />
      </div>
      <input type="button" id="submit" value="Add Movie" />
    </div>
  )
}
//hide-end
//hide-start
const App = () => {
    return <InputView/>
}

export default App;
//hide-end
```

We kunnen op dezelfde manier een functie maken om een click af te handelen:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
const styles = {
    inputFields: {
        display: "grid", gridTemplateColumns: "70px 200px"
    }
}
const handleChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(event.target.value);
}
//hide-end
const handleClick : MouseEventHandler<HTMLInputElement> = (event) => {
  console.log("button clicked");
}
//hide-start
const InputView = () => {
  return (
    <div>
      <div style={styles.inputFields}>
        <label htmlFor="name">name:</label>
        <input type="text" id="name" onChange={handleChange} />
        <label htmlFor="year">year:</label>
        <input type="number" id="year" name="year" min="1900" max="2021" onChange={handleChange}/>
      </div>
      <input type="button" id="submit" value="Add Movie" onClick={handleClick}/>
    </div>
  )
}
//hide-end
//hide-start
const App = () => {
    return <InputView/>
}

export default App;
//hide-end
```

Het is ook mogelijk om de event handlers op te geven een anonieme handler functie:

```typescript {6,8,10} codesandbox={"template": "react", "filename": "src/App.tsx"}
//hide-start
const styles = {
    inputFields: {
        display: "grid", gridTemplateColumns: "70px 200px"
    }
}
//hide-end
const InputView = () => {
  return (
    <div>
      <div style={styles.inputFields}>
        <label htmlFor="name">name:</label>
        <input type="text" id="name" onChange={(event) => { console.log(event.target.value); }}/>
        <label htmlFor="year">year:</label>
        <input type="number" id="year" name="year" min="1900" max="2021" onChange={(event) => { console.log(event.target.value); }}/>
      </div>
      <input type="button" id="submit" value="Add Movie" onClick={(event) => { console.log("button clicked");}}/>
    </div>
  )
}
//hide-start
const App = () => {
    return <InputView/>
}

export default App;
//hide-end
```

Hier ben je niet verplicht een type mee te geven omdat hij zelf het type kan afleiden. 

:::note
In HTML is er een verschil tussen een input en een change event. Bij React is dit niet het geval. Beide triggeren bij elke wijziging aan het input veld. 
:::

## Checkbox

Checkbox werkt zeer gelijkaardig aan de andere input elementen. We gebruiken hier ook een onChange handler.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
const App = () => {
    return (
      <>
        <label>
        <input
          type="checkbox"
          onChange={(event) => console.log(event.target.checked)}
        />
        Toggle
      </label>
      </>
    )
}

export default App;
```

Het type van deze handler is ook ```
React.ChangeEventHandler<HTMLInputElement>```

## Select

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
const App = () => {
    return (
      <>
        <label htmlFor="cars">Choose a car:</label>
        <select id="cars" name="cars" onChange={(event) => console.log(event.target.value)}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </>
    )
}

export default App;
```

Deze handler heeft het type ```React.ChangeEventHandler<HTMLSelectElement>```

