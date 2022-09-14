import React, {useState} from "react";
import slotCherry from "./assets/slot-cherry.png";
import slotLemon from "./assets/slot-lemon.png";
import slotMelon from "./assets/slot-melon.png";
import slotPrune from "./assets/slot-prune.png";
import slotSeven from "./assets/slot-seven.png";
import Refreshable from "./Refreshable";


const App = () => {
    let slot1 : number = Math.floor(Math.random() * 5);
    let slot2 : number = Math.floor(Math.random() * 5);
    let slot3 : number = Math.floor(Math.random() * 5);

    let winning = slot1 == slot2 && slot2 == slot3;

    return (
        <>
            <h1>Labo 1: Slots</h1>
            <img src={slotCherry} height="64" width="64"/>
            <img src={slotLemon} height="64" width="64"/>
            <img src={slotMelon} height="64" width="64"/>
            <img src={slotPrune} height="64" width="64"/>
            <img src={slotSeven} height="64" width="64"/>
            <br/>
            {winning ? <p>Je hebt gewonnen</p> : <p>Je hebt verloren</p>}

            {slot1 == 0 && <img src={slotCherry} height="64" width="64"/>} 
            {slot1 == 1 && <img src={slotLemon} height="64" width="64"/>} 
            {slot1 == 2 && <img src={slotMelon} height="64" width="64"/>} 
            {slot1 == 3 && <img src={slotPrune} height="64" width="64"/>} 
            {slot1 == 4 && <img src={slotSeven} height="64" width="64"/>} 


            {slot2 == 0 && <img src={slotCherry} height="64" width="64"/>} 
            {slot2 == 1 && <img src={slotLemon} height="64" width="64"/>} 
            {slot2 == 2 && <img src={slotMelon} height="64" width="64"/>} 
            {slot2 == 3 && <img src={slotPrune} height="64" width="64"/>} 
            {slot2 == 4 && <img src={slotSeven} height="64" width="64"/>} 

            {slot3 == 0 && <img src={slotCherry} height="64" width="64"/>} 
            {slot3 == 1 && <img src={slotLemon} height="64" width="64"/>} 
            {slot3 == 2 && <img src={slotMelon} height="64" width="64"/>} 
            {slot3 == 3 && <img src={slotPrune} height="64" width="64"/>} 
            {slot3 == 4 && <img src={slotSeven} height="64" width="64"/>} 
        </>
    );
}

export default () => <Refreshable><App/></Refreshable>;
