import { useState, useEffect } from 'react';
import useInterval from './useInterval';

const App = () => {
    const [counter, setCounter] = useState(0);  

    const { pause, resume, delay, setDelay } = useInterval(1000, () => setCounter((prev) => prev + 1));

    return (
        <div>
            <h1>useTimeout</h1>
            <p>Counter: {counter}</p>
            <input type="number" value={delay} onChange={(e) => setDelay(Number(e.target.value))} />
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
        </div>
    )
}

export default App;