import React from "react";

const App = () => {
    
    const colors = Array.from({length: 100}, (_, i) => `hsl(${i * 360 / 100}, 100%, 50%)`);

    return (
        <>
            {
                colors.map((color) => {
                    return <div key={color} style={{backgroundColor: color, width: "100%", height: "4px"}}></div>
                })
            }
        </>
    );
}

export default App;