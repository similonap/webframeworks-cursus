import React, { useState } from "react";

const InputFields: React.FC<{ size?: number }> = ({ size = 5 }) => {
    const [value, setValue] = useState("");

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {Array.from({ length: size }).map((_, index) => (
                <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            ))}
        </div>
    );
};

const App: React.FC = () => {
    return <InputFields />;
};

export default App;
