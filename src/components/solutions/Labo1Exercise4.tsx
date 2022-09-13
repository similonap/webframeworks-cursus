import React, {useState} from "react";
import slotCherry from "./assets/slot-cherry.png";
import slotLemon from "./assets/slot-lemon.png";
import slotMelon from "./assets/slot-melon.png";
import slotPrune from "./assets/slot-prune.png";
import slotSeven from "./assets/slot-seven.png";


const App = () => {
    const [refresh, setRefresh] = useState(0);
    let amount: number = 5;
    let slots : number[] = Array.from(Array(amount).keys()).map(() => Math.floor(Math.random() * 5));

    let winning = slots.find((slot) => slot !== slots[0]) == undefined;

    return (
        <>
            <h1>Labo 4</h1>
            <img src={slotCherry} height="64" width="64"/>
            <img src={slotLemon} height="64" width="64"/>
            <img src={slotMelon} height="64" width="64"/>
            <img src={slotPrune} height="64" width="64"/>
            <img src={slotSeven} height="64" width="64"/>
            <br/>
            {winning ? <p>Je hebt gewonnen</p> : <p>Je hebt verloren</p>}


            {slots.map((slot,i) => {
                return (
                    <React.Fragment key={i}>
                        {slot == 0 && <img src={slotCherry} height="64" width="64"/>} 
                            {slot == 1 && <img src={slotLemon} height="64" width="64"/>} 
                            {slot == 2 && <img src={slotMelon} height="64" width="64"/>} 
                            {slot == 3 && <img src={slotPrune} height="64" width="64"/>} 
                            {slot == 4 && <img src={slotSeven} height="64" width="64"/>} 
                    </React.Fragment>
                )
            })}
            
            <br/>
            <button onClick={() => { setRefresh(Math.random()) }}>Refresh</button>
        </>
    );
}

export default App;