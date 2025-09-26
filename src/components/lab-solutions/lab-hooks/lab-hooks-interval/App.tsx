import React, { useEffect, useState } from "react";

const Timer: React.FC = () => {
    const [secondsElapsed, setSecondsElapsed] = useState(0);

    useEffect(() => {
        const handle = setInterval(() => {
            setSecondsElapsed((value) => value + 1);
        }, 1000);
        return () => clearInterval(handle);
    }, []);

    return <div>{secondsElapsed}</div>;
};

const CurrentTime: React.FC = () => {
    const [date, setDate] = useState(() => new Date());

    useEffect(() => {
        const handle = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(handle);
    }, []);

    return (
        <div>
            Current time: <b>{date.toLocaleTimeString()}</b>
        </div>
    );
};

interface RandomValueProps {
    min: number;
    max: number;
}

const RandomValue: React.FC<RandomValueProps> = ({ min, max }) => {
    const [randomValue, setRandomValue] = useState(() =>
        Math.floor(Math.random() * (max - min)) + min
    );

    useEffect(() => {
        const handle = setInterval(() => {
            setRandomValue(Math.floor(Math.random() * (max - min)) + min);
        }, 2000);
        return () => clearInterval(handle);
    }, [min, max]);

    return (
        <div>
            Random value between {min} and {max}: {randomValue}
        </div>
    );
};

const Interval: React.FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Timer />
            <CurrentTime />
            <RandomValue min={1} max={100} />
            <RandomValue min={100} max={200} />
        </div>
    );
};

const App: React.FC = () => {
    return <Interval />;
};

export default App;
