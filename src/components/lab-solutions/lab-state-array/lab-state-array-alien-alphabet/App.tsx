
import React from 'react';
import { useState } from 'react';
interface Alien {
  human: string,
  alien: string
}

interface AlienRoot {
  letters: Alien[]
}
let alien : AlienRoot = {
  "letters": [
    {
      "human": "0",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/0.png"
    },
    {
      "human": "1",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/1.png"
    },
    {
      "human": "2",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/2.png"
    },
    {
      "human": "3",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/3.png"
    },
    {
      "human": "4",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/4.png"
    },
    {
      "human": "5",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/5.png"
    },
    {
      "human": "6",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/6.png"
    },
    {
      "human": "7",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/7.png"
    },
    {
      "human": "8",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/8.png"
    },
    {
      "human": "9",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/9.png"
    },
    {
      "human": "a",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/A.png"
    },
    {
      "human": "b",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/B.png"
    },
    {
      "human": "c",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/C.png"
    },
    {
      "human": "d",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/D.png"
    },
    {
      "human": "e",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/E.png"
    },
    {
      "human": "f",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/F.png"
    },
    {
      "human": "g",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/G.png"
    },
    {
      "human": "h",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/H.png"
    },
    {
      "human": "i",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/I.png"
    },
    {
      "human": "j",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/J.png"
    },
    {
      "human": "k",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/K.png"
    },
    {
      "human": "l",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/L.png"
    },
    {
      "human": "m",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/M.png"
    },
    {
      "human": "n",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/N.png"
    },
    {
      "human": "o",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/O.png"
    },
    {
      "human": "p",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/P.png"
    },
    {
      "human": "q",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/Q.png"
    },
    {
      "human": "r",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/R.png"
    },
    {
      "human": "s",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/S.png"
    },
    {
      "human": "t",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/T.png"
    },
    {
      "human": "u",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/U.png"
    },
    {
      "human": "v",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/V.png"
    },
    {
      "human": "w",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/W.png"
    },
    {
      "human": "x",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/X.png"
    },
    {
      "human": "y",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/Y.png"
    },
    {
      "human": "z",
      "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/Z.png"
    }
  ]
}

const App = () => {
  const [letters, setLetters] = useState<Alien[]>([]);

  const backspace = () => {
    let lettersCpy = [...letters].slice(0,letters.length-1);
    setLetters(lettersCpy);
  }

  const clear = () => {
    setLetters([]);
  }

  return (
    <>
      <div style={{display: "flex", flexDirection: "row",flexWrap: "wrap"}}>
        {alien.letters.map((alien,i) => <button key={i} style={{width: 50, height: 50}} onClick={(e) => setLetters([...letters, alien])}><img src={alien.alien}/></button>)}
        <button style={{width: 50, height: 50, fontSize: 30}} onClick={() => backspace()}>⌫</button>
        <button style={{width: 50, height: 50, fontSize: 30}} onClick={() => clear()}>🗑</button>

      </div>

      <div>
        <h1>{letters.map(letter => letter.human.toUpperCase()).join("")}</h1>
      </div>
    </>
  )


}

export default App
