import React, {useState} from "react";
import styles from "./Labo4ShoppingList.module.css";

const MultiSelect = () => {
    let [selectedColors, setSelectedColors] = useState<string[]>([])
    let [flag, setFlag] = useState<string[]>([]);

    const onChange : React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setSelectedColors([...Array.from(e.target.selectedOptions)].map((option) => option.value));
    }

    const makeFlag = () => {
        setFlag([...selectedColors]);
    }

    const changeColor = (index: number) => {
        let askColor = prompt("Geef een nieuwe kleur in", flag[index]);
        if (askColor) {
            let flagCpy = flag.map((color, i) => i == index ? askColor : color);
            setFlag(flagCpy);
        }
    }
    
    return (
        <div style={{width: "100%"}}>
            <select multiple onChange={onChange} value={selectedColors}>
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
            </select>

            <button style={{display: "block"}} onClick={makeFlag}>Show Colors</button>

            {flag.length > 0 && <div style={{display: "flex", flexDirection: "column", width: "100%", height: 200}}>
                {flag.map((color,index) => <div key={index} style={{flex: 1, height: 200, backgroundColor: color}} onClick={() => changeColor(index)}></div>)}
            </div>}
        </div>
    )
}

export default MultiSelect;