import { useEffect, useState } from 'react'
import styles from './HappyWorkers.module.css'
import React from 'react';

interface JoskeProps {
  square: Square;
  onClick: () => void;
  work: number;
  setProductivity: (num: number) => void;
  useProductivity: boolean
}

const Joske = ({square, onClick, work, setProductivity,useProductivity} : JoskeProps) => {
  const [clicked, setClicked] = useState(0);
  useEffect(() => {
    if (useProductivity) {
      let handle : any = -1;
      if (clicked >= 10) {
        setProductivity(0);
        handle = setTimeout(() => {
          setProductivity(1);
          setClicked(0);
        }, 5000);
      }

      return () => {
        if (handle !== -1)
          clearTimeout(handle);
      }
    }
  }, [clicked,useProductivity]);

  const onClickLocal = () => {
    if (work < 100) {
      setClicked(clicked => clicked + 1); 
      onClick();
    }
  }

  let happyNess = "😐";
  if (work === 100 ) {
    happyNess = "🥰";
  } else if (square.productivity === 0) {
    happyNess = "😵";
  }
  else if (square.productivity > 0) {
    happyNess = "😐";
  }
  
  return (
    <div className={styles.joske} style={{backgroundColor: square.color, width: square.size, height: square.size}} onClick={onClickLocal}>

      <p>{happyNess}</p>
    </div>
  )
}

interface Square {
  name: string;
  size: number;
  color: string;
  productivity: number;
}

interface AppProps {
  useProductivity: boolean
}

const App = ({useProductivity = true} : AppProps) => {
  const [work, setWork] = useState<number>(0);
  const [squares, setSquares] = useState<Square[]>([
    {name: "Joske", size: 100, color: "red", productivity: 1},
    {name: "Franske", size: 100, color: "green", productivity: 1},
    {name: "Louise", size: 100, color: "pink", productivity: 1}
  ]);

  const setProductivity = (name: string, productivity: number) => {
    let foundIndex = squares.findIndex((square) => square.name === name);
    if (foundIndex !== -1) {
      setSquares(squares => squares.map((square, i) => i === foundIndex ? {...square, productivity: productivity} : square));
    }
  }

  return (
    <>

      <progress id="file" max="100" value={work}>{work}%</progress>
      <div className={styles.squareRow}>
      {
        squares.map((square) => <Joske key={square.name} useProductivity={useProductivity} square={square} onClick={() => setWork(work => work + (1 * square.productivity))} work={work} setProductivity={(num: number) => setProductivity(square.name, num)}/>)
      }
      </div>
      

    </>
  )
}

export default App;