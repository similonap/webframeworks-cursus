import React from "react";

const App = () => {
    let numbers = Array.from(Array(10).keys()).map((i) => i + 1);
    return (
        <>
            {
                <table>
                    {
                        numbers.map((x) => {
                            return (
                                <tr key={x}>{numbers.map((y) => {
                                    return <td key={x+y}>{x*y}</td>
                                    })}
                                </tr>
                            );
                        })
                    }
                </table>
            }
        </>
    );
}

export default App;