import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";

const LaboEventsInput = () => {
    return (
        <div>
            { Array.from({length: 10}).map((_, i) => {
                return <input type="text" onChange={(e) => alert(`Textbox ${i} changed to ${e.target.value}`)}/>
            })}
        </div>
    );
}

const App = () => {
    return (
        <BrowserOnly>
            {() => <LaboEventsInput/>}
        </BrowserOnly>
    )
}

export default App;