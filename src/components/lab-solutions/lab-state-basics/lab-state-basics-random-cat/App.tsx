import React, {useState} from 'react';

const ButtonChase = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const setRandom = () =>{
        // get random position in the visible screen (not the whole page)
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);

        console.log({x,y});
        setX(x); 
        setY(y);
    }

    return (
        <>
            {(x !== 0 && y !== 0) && <img style={{position: "fixed", top: `${x}%`, left: `${y}%`}} src="https://cataas.com/cat?width=200&height=200"/>}
            <button onClick={() => {setRandom()}}>Random Cat</button>
        </>
    );
}

export default ButtonChase;