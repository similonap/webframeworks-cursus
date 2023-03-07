import { SandpackProvider, SandpackCodeViewer } from "@codesandbox/sandpack-react";
import React from "react";

const ReactCodeViewer = () => {
    return (
        <SandpackProvider
        customSetup={{
            entry: "index.ts"
        }}
        files={{
              "index.ts": `Hello world`,
          }}
      >
        <SandpackCodeViewer showLineNumbers={false} />
      </SandpackProvider>
    )
}

export default ReactCodeViewer;