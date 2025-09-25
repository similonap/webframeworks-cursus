import React from "react";



const Calculator = () => {
    const [number1, setNumber1] = React.useState(0);
    const [number2, setNumber2] = React.useState(0);
    const [operator, setOperator] = React.useState("+");
    const [result, setResult] = React.useState<number>();
    const [error, setError] = React.useState("");

    const calculate = () => {
        setError("");
        setResult(undefined);
        if (operator === "+") {
            setResult(number1 + number2);
        } else if (operator === "-") {
            setResult(number1 - number2);
        } else if (operator === "*") {
            setResult(number1 * number2);
        } else if (operator === "/") {
            if (number2 === 0) {
                setError("Cannot divide by zero");
            } else {
                setResult(number1 / number2);
            }
        }
    }
    return (
        <div>
            Number 1: <input type="number" value={number1} onChange={(e) => setNumber1(parseInt(e.target.value))}/>
            Number 1: <input type="number" value={number2} onChange={(e) => setNumber2(parseInt(e.target.value))}/>
            <select value={operator} onChange={(e) => setOperator(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <button onClick={calculate}>Calculate</button>

            {result !== undefined && <div>Result: {result}</div>}
            {error !== undefined && <div style={{color: "red"}}>{error}</div>}
        </div>
    );
}

const App = () => {
    return (
        <div>
            <Calculator />
        </div>
    );
};

export default App;