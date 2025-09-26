import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";

const LoadingIndicator: React.FC = () => {
    return (
        <ColorRing
            visible
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
    );
};

const App: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {!loading && <button onClick={startLoading}>Start loading</button>}
            {loading && <LoadingIndicator />}
        </div>
    );
};

export default App;
