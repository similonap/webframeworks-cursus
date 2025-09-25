import React from "react";

const App = () => {
    const alphabet = Array.from({ length: 26 }, (_, index) =>
        String.fromCharCode(index + 65)
    );
    const alphabetImages = alphabet.map((letter) =>
        `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/${letter}.png`
    );

    return (
        <>
            {alphabetImages.map((url, index) => (
                <button key={url}>
                    <img src={url} alt={`Alien letter ${alphabet[index]}`}/>
                </button>
            ))}
        </>
    );
}

export default App;
