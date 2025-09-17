import React, { JSX, useState, type ComponentProps, type ReactNode } from 'react';
import clsx from 'clsx';
import { useCodeBlockContext } from '@docusaurus/theme-common/internal';
import { usePrismTheme } from '@docusaurus/theme-common';
import { Highlight } from 'prism-react-renderer';
import type { Props } from '@theme/CodeBlock/Content';
import Line from '@theme/CodeBlock/Line';

import styles from './styles.module.css';
import CodeSandboxButton, { parseMetaString } from "../Buttons/CodeSandboxButton";
import Container from "../Container";
import CopyButton from "../Buttons/CopyButton";
import WordWrapButton from "../Buttons/WordWrapButton";
import { useCodeBlockWrapperContext } from "../CodeBlockWrapperContextProvider";

interface CodeBlockComponentProps {
  filename: string;
  showLineNumbers: boolean;
  lineClassNames: string[][];
  blockClassName: string;
  language: string;
  prismTheme: any;
  wordWrap: any;
  title?: string;
  code: string;
  metastring: string;
}

interface ExpoSnackProps extends CodeBlockComponentProps {
  partialCode: string;
  allCode: string;
}

interface CodeSandboxProps extends CodeBlockComponentProps {}

interface ExpoSnackConfig {
  dependencies?: string;
}

interface ExpoSnackFile {
  type: string;
  contents: string;
}

// TODO Docusaurus v4: remove useless forwardRef
const Pre = React.forwardRef<HTMLPreElement, ComponentProps<'pre'>>(
    (props, ref) => {
        return (
            <pre
                ref={ref}
                /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
                tabIndex={0}
                {...props}
                className={clsx(props.className, styles.codeBlock, 'thin-scrollbar')}
            />
        );
    },
);

function Code(props: ComponentProps<'code'>) {
    const { metadata } = useCodeBlockContext();
    return (
        <code
            {...props}
            className={clsx(
                props.className,
                styles.codeBlockLines,
                metadata.lineNumbersStart !== undefined &&
                styles.codeBlockLinesWithNumbering,
            )}
            style={{
                ...props.style,
                counterReset:
                    metadata.lineNumbersStart === undefined
                        ? undefined
                        : `line-count ${metadata.lineNumbersStart - 1}`,
            }}
        />
    );
}

const ExpoSnack = ({ filename, showLineNumbers, lineClassNames, blockClassName, language, prismTheme, wordWrap, partialCode, title, code, allCode, metastring }: ExpoSnackProps): JSX.Element => {
  const {expoSnackVisible, setExpoSnackVisible} = useCodeBlockWrapperContext();

  let parameters: ExpoSnackConfig;
  try {
    const groups = /expo=({.*})/g.exec(metastring);
    if (!groups || !groups[1]) {
      throw new Error('Invalid expo metastring format');
    }
    parameters = JSON.parse(groups[1]) as ExpoSnackConfig;
  } catch (error) {
    console.error('Error parsing expo metastring:', error);
    parameters = {};
  }

  const files: Record<string, ExpoSnackFile> = {
    // Inlined code
    'App.tsx': {
      type: 'CODE',
      contents: allCode
    }
  };

  return (
    <div>
      {expoSnackVisible && (
        <div className={styles.codeBlockContent}>
          <Container
            as="div"
            className={clsx(
              blockClassName,
              language &&
              !blockClassName.includes(`language-${language}`) &&
              `language-${language}`
            )}
          >
            <iframe
              style={{ width: '100%', height: '500px' }}
              src={`https://snack.expo.dev/embedded?platform=web&files=${encodeURIComponent(JSON.stringify(files))}${parameters.dependencies ? `&dependencies=${parameters.dependencies}` : ""}`}
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </Container>
        </div>
      )}

      <div style={{ display: !expoSnackVisible ? 'inherit' : 'none' }}>
        <Container
          as="div"
          className={clsx(
            blockClassName,
            language &&
            !blockClassName.includes(`language-${language}`) &&
            `language-${language}`
          )}
        >
          {title && <div className={styles.codeBlockTitle}>{title}</div>}
          <div className={styles.codeBlockContent}>
            <Highlight
              theme={prismTheme}
              code={partialCode}
              language={language ?? 'text'}
            >
              {({ className, tokens, getLineProps, getTokenProps }) => (
                <pre
                  /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
                  tabIndex={0}
                  ref={wordWrap.codeBlockRef}
                  className={clsx(
                    className,
                    styles.codeBlock,
                    'thin-scrollbar'
                  )}
                >
                  <code
                    className={clsx(
                      styles.codeBlockLines,
                      showLineNumbers && styles.codeBlockLinesWithNumbering
                    )}
                  >
                    {tokens.map((line, i) => (
                      <Line
                        key={i}
                        line={line}
                        getLineProps={getLineProps}
                        getTokenProps={getTokenProps}
                        classNames={lineClassNames[i]}
                        showLineNumbers={showLineNumbers}
                      />
                    ))}
                  </code>
                </pre>
              )}
            </Highlight>
           
          </div>
        </Container>
      </div>
    </div>
  );
}

const CodeSandbox = ({ filename, showLineNumbers, lineClassNames, blockClassName, language, prismTheme, wordWrap, title, code, metastring }: CodeSandboxProps): JSX.Element => {
    const { setSandboxId, sandboxId } = useCodeBlockWrapperContext();
    const codeBlockContext = useCodeBlockContext();
    const { allCode, partialCode } = codeBlockContext.metadata;
    return (
        <div>
            {sandboxId !== '' && (
                <div className={styles.codeBlockContent}>
                    <Container
                        as="div"
                        className={clsx(
                            blockClassName,
                            language &&
                            !blockClassName.includes(`language-${language}`) &&
                            `language-${language}`
                        )}
                    >
                        <iframe
                            style={{ width: '100%', height: '500px' }}
                            src={`https://codesandbox.io/embed/${sandboxId}?fontsize=14&hidenavigation=1&theme=light&view=preview&autoresize=1&expanddevtools=1&module=/${filename}`}
                            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                        ></iframe>
                    </Container>
                </div>
            )}

            <div style={{ display: sandboxId === '' ? 'inherit' : 'none' }}>
                <Container
                    as="div"
                    className={clsx(
                        blockClassName,
                        language &&
                        !blockClassName.includes(`language-${language}`) &&
                        `language-${language}`
                    )}
                >
                    {title && <div className={styles.codeBlockTitle}>{title}</div>}
                    <div className={styles.codeBlockContent}>
                        <Highlight
                            theme={prismTheme}
                            code={partialCode}
                            language={language ?? 'text'}
                        >
                            {({ className, tokens, getLineProps, getTokenProps }) => (
                                <pre
                                    /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
                                    tabIndex={0}
                                    ref={wordWrap.codeBlockRef}
                                    className={clsx(
                                        className,
                                        styles.codeBlock,
                                        'thin-scrollbar'
                                    )}
                                >
                                    <code
                                        className={clsx(
                                            styles.codeBlockLines,
                                            showLineNumbers && styles.codeBlockLinesWithNumbering
                                        )}
                                    >
                                        {tokens.map((line, i) => (
                                            <Line
                                                key={i}
                                                line={line}
                                                getLineProps={getLineProps}
                                                getTokenProps={getTokenProps}
                                                classNames={lineClassNames[i]}
                                                showLineNumbers={showLineNumbers}
                                            />
                                        ))}
                                    </code>
                                </pre>
                            )}
                        </Highlight>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default function CodeBlockContent({
    className: classNameProp,
}: Props): ReactNode {
    const { metadata, wordWrap } = useCodeBlockContext();

    const prismTheme = usePrismTheme();

    const { allCode, partialCode, title, code, language, lineNumbersStart, lineClassNames, metastring, hasCodeSandbox, codesandboxFilename, hasExpoSnack } = metadata;
    const filename = codesandboxFilename;

    if (hasCodeSandbox) {
        return (<CodeSandbox
            filename={filename || "App.js"}
            showLineNumbers={lineNumbersStart !== undefined}
            lineClassNames={lineClassNames}
            blockClassName={clsx(
                classNameProp,
                language &&
                !classNameProp?.includes(`language-${language}`) &&
                `language-${language}`
            )}
            language={language}
            prismTheme={prismTheme}
            wordWrap={wordWrap}
            title={title}
            code={code}
            metastring={metastring}
        />
        );
    } else if (hasExpoSnack) {
        return <ExpoSnack
            blockClassName={clsx(
                classNameProp,
                language &&
                !classNameProp?.includes(`language-${language}`) &&
                `language-${language}`
            )}
            filename={filename || "App.js"}
            language={language}
            prismTheme={prismTheme}
            wordWrap={wordWrap}
            partialCode={partialCode}
            title={title}
            code={code}
            allCode={allCode}
            metastring={metastring}
            showLineNumbers={lineNumbersStart !== undefined}
            lineClassNames={lineClassNames}
        />
    }

    return (<Highlight theme={prismTheme} code={code} language={language}>
        {({ className, style, tokens: lines, getLineProps, getTokenProps }) => (
            <Pre
                ref={wordWrap.codeBlockRef}
                className={clsx(classNameProp, className)}
                style={style}>
                <Code>
                    {lines.map((line, i) => (
                        <Line
                            key={i}
                            line={line}
                            getLineProps={getLineProps}
                            getTokenProps={getTokenProps}
                            classNames={lineClassNames[i]}
                            showLineNumbers={lineNumbersStart !== undefined}
                        />
                    ))}
                </Code>
            </Pre>
        )}
    </Highlight>
    );
}
