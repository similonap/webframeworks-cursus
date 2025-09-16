import { useSandbox } from '@site/src/theme/CodeBlock/Buttons/CodeSandboxButton';
import React, { useEffect } from 'react';

const CodeSandBox = ({template} : {template: string}) => {
  const [sandboxId, setSandboxId] = React.useState<string>();
  const [openCodeSandbox] = useSandbox({
    template: template,
    setSandboxId,
  });

  useEffect(() => {
    openCodeSandbox();
  }, []);

  return (
    <>
      {sandboxId && <iframe
        src={`https://codesandbox.io/embed/${sandboxId}?fontsize=14&hidenavigation=1&theme=light`}
        style={{
          width: '100%',
          height: '500px',
          border: 0,
          borderRadius: 4,
          overflow: 'hidden',
        }}
        title="Hello World (Variabele)"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>}
    </>
  );
};

export default CodeSandBox;
