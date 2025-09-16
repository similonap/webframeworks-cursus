import React, {useCallback, useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
// @ts-expect-error: TODO, we need to make theme-classic have type: module
import {usePluginData} from '@docusaurus/useGlobalData';
import styles from './styles.module.css';
import Button from '@theme/CodeBlock/Buttons/Button';
import { useCodeBlockContext } from '@docusaurus/theme-common/internal';
import { useCodeBlockWrapperContext } from '../../CodeBlockWrapperContextProvider';

export default function CodeSandboxButton() {
  const { expoSnackVisible, setExpoSnackVisible} = useCodeBlockWrapperContext();
  const codeBlockContext = useCodeBlockContext();
  const { allCode, metastring } = codeBlockContext.metadata;
  const code = allCode;
  return (
    expoSnackVisible ? (
        <Button
        title="CodeSandbox"
        className={clsx(
            
        )}
        onClick={() => setExpoSnackVisible(false)}>
            <span className={styles.copyButtonIcons} aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" data-testid="CodeIcon" className={styles.copyButtonIcon}><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></svg>
            </span>
        </Button>
    ) : (
        <Button
        title="CodeSandbox"
        className={clsx(
            
        )}
        onClick={() => setExpoSnackVisible(true)}>
            <span className={styles.copyButtonIcons} aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={styles.copyButtonIcon} viewBox="0 0 16 16"> <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/> </svg>
            </span>
        </Button>
    )
  );
}
