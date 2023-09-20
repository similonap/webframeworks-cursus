import React from "react";

const App = () => {
    let alphabet = Array.from(Array(26).keys()).map((i) => {
        return String.fromCharCode(i + 65);
    });
    let alphabetImages = alphabet.map((letter) => {
        return `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/${letter.toUpperCase()}.png`
    });
    return (
        <>
            {
                alphabetImages.map((url) => <button key={url}><img src={url}/></button>)
            }
        </>
    );
}

export default App;