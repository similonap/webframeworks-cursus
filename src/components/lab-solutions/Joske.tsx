import React, {useState} from "react";
import styles from './Joske.module.css';

const colors = ["red", "yellow", "blue"];

const ColorSquare = () => {

  const [color, setColor] = useState<number>(0);
  const [name, setName] = useState<string>("joske");
  const [nameField, setNameField] = useState<string>("joske");
  const [emotion, setEmotion] = useState<string>(":)");
  const [square, setSquare] = useState<boolean>(true);

  const changeColor = () => {
    setColor(color => (color + 1) % colors.length)
  }

  return (
    <div className={styles.container}>
      <p><b>{name}</b></p>
      <div className={styles.square} style={{ backgroundColor: colors[color], borderRadius: square ? 0 : 400 }} onClick={changeColor}>
        <p style={{userSelect: "none"}}>{emotion}</p>
      </div>

      <div>
        <input type="text" onChange={(e) => setNameField(e.target.value)} value={nameField} />
        <button onClick={() => { setName("Joske"); setNameField("Joske"); }}>Reset Name</button>
        <button onClick={() => setName(nameField)}>Set</button>
      </div>

      <select onChange={(e) => setEmotion(e.target.value)} value={emotion}>
        <option value=":)">:)</option>
        <option value=":(">:(</option>
        <option value=":|">:|</option>
      </select>

      <div>
        <input
          type="checkbox"
          onChange={(e) => setSquare(e.target.checked)}
          checked={square}
        />
        <label htmlFor="squareCheckbox">Square</label>
      </div>
    </div>

  )
}
const App = () => {
  return <ColorSquare />
}

export default App;
