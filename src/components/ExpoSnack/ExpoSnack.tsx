import React from "react";

const ExpoSnack = ({snackId} : {snackId: string}) => {
    return (
        <>
            <div data-snack-code="console.log('Hello World')" data-snack-platform="web" data-snack-preview="true" data-snack-theme="light" style={{overflow:"hidden",background:"#F9F9F9",border:"1px solid black",borderRadius:"4px",height:"505px",width:"100%"}}></div>
        </>
    )
}

export default ExpoSnack;