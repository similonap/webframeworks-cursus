import React, { useState } from "react";
import { ColorRing } from  'react-loader-spinner'

const LoadingIndicator = () => {
    return (
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
    )
}

const App = () => {
    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }
    return (
        <div>
            {!loading && <button onClick={load}>Start loading</button>}
            {loading && <LoadingIndicator />}
        </div>
    )

}

export default App;