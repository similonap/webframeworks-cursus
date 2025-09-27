import { useState, useEffect } from 'react';

type TimeoutCallback = () => void;

const useTimeout = (d: number, callback: TimeoutCallback) => {
    const [delay, setDelay] = useState(d);
    const [running, setRunning] = useState(true);

    const pause = () => setRunning(false);
    const resume = () => setRunning(true);

    useEffect(() => {
        if (!running) return;
        const timer = setInterval(() => {
            callback();
        }, delay);

        return () => clearTimeout(timer);
    }, [running, delay]);

    return { pause, resume, delay, setDelay };
    
}

export default useTimeout;