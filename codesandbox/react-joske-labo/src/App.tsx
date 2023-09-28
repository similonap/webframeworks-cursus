import './App.css';

const ColorSquare = () => {
  let color = "red";
  let emotion = ":(";
  let name = "Joske";
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <p><b>{name}</b></p>
      <div className="square" style={{backgroundColor: color}}>
        <p>{emotion}</p>
      </div>
    </div>
  )
}
const App = () => {
    return <ColorSquare/>
}

export default App;
