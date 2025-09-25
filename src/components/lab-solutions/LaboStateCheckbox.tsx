
import React, {useState} from 'react';

const Checkbox = () => {
    const [showDiv, setShowDiv] = useState(false);
    return (
        <>
            <input checked={showDiv} type="checkbox" onChange={(event) => { setShowDiv(event.target.checked)}}/> Show/Hide
            {showDiv && (
            <div style={{border: "1px solid black", height: 400,padding: 5, backgroundRepeat: "repeat-xy", backgroundImage: "url('https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif')"}}>

            </div>
            )}
        </>
    );
};

export default Checkbox;


