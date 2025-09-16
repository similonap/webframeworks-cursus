import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useCodeBlockContext } from '@docusaurus/theme-common/internal';
import CopyButton from '@theme/CodeBlock/Buttons/CopyButton';
import WordWrapButton from '@theme/CodeBlock/Buttons/WordWrapButton';
import type { Props } from '@theme/CodeBlock/Buttons';

import styles from './styles.module.css';
import CodeSandboxButton from "./CodeSandboxButton";
import { useCodeBlockWrapperContext } from "../CodeBlockWrapperContextProvider";
import ExpoSnackButton from "./ExpoSnackButton";

// Code block buttons are not server-rendered on purpose
// Adding them to the initial HTML is useless and expensive (due to JSX SVG)
// They are hidden by default and require React  to become interactive
export default function CodeBlockButtons({ className }: Props): ReactNode {
    const {metadata, sandboxId} = useCodeBlockWrapperContext();
    
    if (!metadata) {
        return null;
    }
    return (
        <BrowserOnly>
            {() => (
                <div className={clsx(className, styles.buttonGroup)}>
                    {sandboxId === "" && <WordWrapButton />}
                    {sandboxId === "" && <CopyButton />}
                    {metadata.hasCodeSandbox && (
                        <CodeSandboxButton/>
                    )}
                    {metadata.hasExpoSnack && (
                        <ExpoSnackButton/>
                    )}
                </div>
            )}
        </BrowserOnly>
    );
}
