import React, { useState } from "react";
import { ReactNode } from "react";

interface CodeBlockMetadata {
    allCode?: string;
    partialCode?: string;
    title?: string;
    code?: string;
    language?: string;
    lineNumbersStart?: number;
    lineClassNames?: string[];
    metastring?: string;
    hasCodeSandbox?: boolean;
    codesandboxFilename?: string;
    hasExpoSnack?: boolean;
}

interface CodeBlockWrapperContextProps {
    metadata: CodeBlockMetadata | null;
    setMetadata: (metadata: CodeBlockMetadata | null) => void;
    sandboxId: string;
    setSandboxId: (id: string) => void;
    expoSnackVisible: boolean;
    setExpoSnackVisible: (visible: boolean) => void;
}

const CodeBlockWrapperContext = React.createContext<CodeBlockWrapperContextProps>({} as CodeBlockWrapperContextProps);

const CodeBlockExtraContext = ({children}: {children: ReactNode}) => {
    const [metadata, setMetadata] = React.useState<CodeBlockMetadata | null>(null);
    const [sandboxId, setSandboxId] = useState<string>('');
    const [expoSnackVisible, setExpoSnackVisible] = useState<boolean>(false);

    return (
        <CodeBlockWrapperContext.Provider value={{expoSnackVisible, setExpoSnackVisible, metadata,setMetadata, sandboxId, setSandboxId}}>
            {children}
        </CodeBlockWrapperContext.Provider>
    );
}

export const useCodeBlockWrapperContext = () => React.useContext(CodeBlockWrapperContext);

export default CodeBlockExtraContext;
