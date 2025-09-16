import React, { type ReactNode } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import {
    CodeBlockContextProvider,
    type CodeBlockMetadata,
    createCodeBlockMetadata,
    useCodeWordWrap,
} from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/CodeBlock/Content/String';
import CodeBlockLayout from '@theme/CodeBlock/Layout';
import { parseMetaString } from "../Buttons/CodeSandboxButton";
import CodeBlockWrapperContextProvider from "../CodeBlockWrapperContextProvider";

export function useCodeBlockMetadata(props: Props): CodeBlockMetadata {
    const { prism } = useThemeConfig();

    const metadata = createCodeBlockMetadata({
        code: props.children,
        className: props.className,
        metastring: props.metastring,
        magicComments: prism.magicComments,
        defaultLanguage: prism.defaultLanguage,
        language: props.language,
        title: props.title,
        showLineNumbers: props.showLineNumbers,
    });


    let filename = "";

    const codesandboxRegex = /codesandbox=({.*})/g;
    let hasCodeSandbox = false;
    let metastring = props.metastring;
    if (metastring) {
        if (metastring.match(codesandboxRegex)) {
            if (metastring.match(codesandboxRegex)[0]) {
                hasCodeSandbox = true;
                let parsedMetaString = parseMetaString(metastring);
                filename = parsedMetaString.filename;
            }
        }
    }

    const expoRegex = /expo=({.*})/g;
    let hasExpoSnack = false;
    if (metastring) {
        if (metastring.match(expoRegex)) {
            if (metastring.match(expoRegex)[0]) {
                hasExpoSnack = true;
            }
        }
    }
    let code = props.children;
    let allCode = code.replace(/\/\/hide-start\n/g, "").replace(/\/\/hide-end/g, "").replace(/\/\/hide-start/g, "").replace(/\/\/hide-end\n/g, "");
    let partialCode = code.replace(/(\/\/hide-start)[\w\W]*?(\/\/hide-end)\n/g, "").replace(/(\/\/hide-start)[\w\W]*?(\/\/hide-end)/g, "").replace(/\n+$/, "");


    metadata.metastring = props.metastring;
    metadata.hasCodeSandbox = hasCodeSandbox;
    metadata.codesandboxFilename = filename;
    metadata.hasExpoSnack = hasExpoSnack;
    metadata.allCode = allCode;
    metadata.partialCode = partialCode;

    return metadata;
}

// TODO Docusaurus v4: move this component at the root?
export default function CodeBlockString(props: Props): ReactNode {
    const metadata = useCodeBlockMetadata(props);
    const wordWrap = useCodeWordWrap();
    return (
        <CodeBlockWrapperContextProvider>
            <CodeBlockContextProvider metadata={metadata} wordWrap={wordWrap}>
                <CodeBlockLayout />
            </CodeBlockContextProvider>
        </CodeBlockWrapperContextProvider>
    );
}
