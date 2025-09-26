import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";

interface TextInputProps {
    size?: number;
}

const TextInput: React.FC<TextInputProps> = ({ size = 10 }) => {
    const handleChange = (index: number) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        alert(`Textbox ${index} changed to ${event.target.value}`);
    };

    return (
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            {Array.from({ length: size }).map((_, index) => (
                <input
                    key={index}
                    type="text"
                    onChange={handleChange(index)}
                />
            ))}
        </div>
    );
};

const App: React.FC = () => {
    return <BrowserOnly>{() => <TextInput />}</BrowserOnly>;
};

export default App;
