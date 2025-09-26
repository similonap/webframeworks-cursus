import React, { useState } from "react";

const VisibilityToggle: React.FC = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input
                    checked={visible}
                    type="checkbox"
                    onChange={(event) => setVisible(event.target.checked)}
                />
                Show/Hide
            </label>
            {visible && (
                <div
                    style={{
                        border: "1px solid black",
                        height: 400,
                        padding: 5,
                        backgroundRepeat: "repeat",
                        backgroundImage:
                            "url('https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif')",
                    }}
                />
            )}
        </div>
    );
};

const App: React.FC = () => {
    return <VisibilityToggle />;
};

export default App;
