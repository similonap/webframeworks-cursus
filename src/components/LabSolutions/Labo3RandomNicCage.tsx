import React, {useState} from 'react';

const ButtonChase = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const setRandom = () =>{
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        console.log({x,y});
        setX(x); 
        setY(y);
    }

    return (
        <>
            {(x !== 0 && y !== 0) && <img style={{position: "fixed", top: x, left: y}} src="https://www.placecage.com/gif/200/200"/>}
            <button onClick={() => {setRandom()}}>Random Cage</button>
        </>
    );
}

export default ButtonChase;