import React, { useCallback, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from './styles.module.css';
import Button from '@theme/CodeBlock/Buttons/Button';
import { useCodeBlockContext } from '@docusaurus/theme-common/internal';
import { useCodeBlockWrapperContext } from '../../CodeBlockWrapperContextProvider';

interface CodeSandboxConfig {
  template: string;
  filename: string;
}

interface TemplateFile {
  content: string;
}

interface Template {
  files: Record<string, TemplateFile>;
}

interface CodeSandboxPluginData {
  templates: Record<string, Template>;
}

interface CodeSandboxApiResponse {
  sandbox_id: string;
}

interface UseSandboxParams {
  code?: string;
  template: string;
  filename?: string;
  setSandboxId: (id: string) => void;
}

export function parseMetaString(metastring: string): CodeSandboxConfig {
  const groups = /codesandbox=({.*})/g.exec(metastring);
  
  if (!groups || !groups[1]) {
    throw new Error('Invalid codesandbox metastring format');
  }

  try {
    return JSON.parse(groups[1]) as CodeSandboxConfig;
  } catch (error) {
    throw new Error('Failed to parse codesandbox configuration');
  }
}

export function useSandbox({ code, template, filename, setSandboxId }: UseSandboxParams): [() => Promise<void>] {
  const { templates } = usePluginData('codesandbox-plugin') as CodeSandboxPluginData;
  
  const openCodeSandbox = async (): Promise<void> => {
    try {
      let templateJson = { ...templates[template] };
      
      if (code && filename) {
        templateJson.files[filename] = { content: code };
      }

      const response = await fetch(
        'https://codesandbox.io/api/v1/sandboxes/define?json=1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(templateJson),
        },
      );

      if (!response.ok) {
        throw new Error(`Failed to create sandbox: ${response.statusText}`);
      }

      const data = await response.json() as CodeSandboxApiResponse;
      setSandboxId(data.sandbox_id);
    } catch (error) {
      console.error('Error creating CodeSandbox:', error);
      // Handle error appropriately - could show user notification
    }
  };

  return [openCodeSandbox];
}

export default function CodeSandboxButton(): JSX.Element {
  const { setSandboxId, sandboxId } = useCodeBlockWrapperContext();
  const codeBlockContext = useCodeBlockContext();
  const { allCode, metastring } = codeBlockContext.metadata;
  
  let config: CodeSandboxConfig;
  try {
    config = parseMetaString(metastring);
  } catch (error) {
    console.error('Error parsing metastring:', error);
    return <></>;
  }

  const { template, filename } = config;
  const code = allCode;
  const [openCodeSandbox] = useSandbox({ code, template, filename, setSandboxId });

  return sandboxId ? (
    <Button
      title="Hide CodeSandbox"
      className={clsx()}
      onClick={() => setSandboxId("")}
    >
      <span className={styles.copyButtonIcons} aria-hidden="true">
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          data-testid="CodeIcon" 
          className={styles.copyButtonIcon}
        >
          <path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      </span>
    </Button>
  ) : (
    <Button
      title="Open in CodeSandbox"
      className={clsx()}
      onClick={openCodeSandbox}
    >
      <span className={styles.copyButtonIcons} aria-hidden="true">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          className={styles.copyButtonIcon} 
          viewBox="0 0 16 16"
        >
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
        </svg>
      </span>
    </Button>
  );
}