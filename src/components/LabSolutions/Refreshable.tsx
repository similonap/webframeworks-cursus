import React, { useState } from "react";

const Refreshable = ({children}: {children: React.ReactNode}) => {
    const [refresh, setRefresh] = useState(0);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child);
                }
                return child;
            })}
            <br/>
            <button
                onClick={() => {
                setRefresh(Math.random());
                }}
            >
                Refresh
            </button>
        </>
    )
}

export default Refreshable;