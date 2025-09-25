import React from "react";

const App = () => {
    const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
    return (
        <table>
            <tbody>
                {numbers.map((row) => (
                    <tr key={row}>
                        {numbers.map((column) => (
                            <td key={`${row}-${column}`}>{row * column}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default App;
