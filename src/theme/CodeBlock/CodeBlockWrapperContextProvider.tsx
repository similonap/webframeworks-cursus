import React, { useState } from "react";
import { ReactNode } from "react";

interface CodeBlockWrapperContextProps {
    metadata: any;
    setMetadata: (metadata: any) => void;
    sandboxId: string;
    setSandboxId: (id: string) => void;
    expoSnackVisible: boolean;
    setExpoSnackVisible: (visible: boolean) => void;
}

const CodeBlockWrapperContext = React.createContext<CodeBlockWrapperContextProps>({} as CodeBlockWrapperContextProps);

const CodeBlockExtraContext = ({children}: {children: ReactNode}) => {
    const [metadata, setMetadata] = React.useState<any>(null);
    const [sandboxId, setSandboxId] = useState('');
    const [expoSnackVisible, setExpoSnackVisible] = useState(false);

    return (
        <CodeBlockWrapperContext.Provider value={{expoSnackVisible, setExpoSnackVisible, metadata,setMetadata, sandboxId, setSandboxId}}>
            {children}
        </CodeBlockWrapperContext.Provider>
    );
}

export const useCodeBlockWrapperContext = () => React.useContext(CodeBlockWrapperContext);

export default CodeBlockExtraContext;
