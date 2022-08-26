import React, { useState } from 'react';
import clsx from 'clsx';
import { useThemeConfig, usePrismTheme } from '@docusaurus/theme-common';

import {
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  containsLineNumbers,
  useCodeWordWrap,
} from '@docusaurus/theme-common/internal';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Line from '@theme/CodeBlock/Line';
import CopyButton from '@theme/CodeBlock/CopyButton';
import CodeSandboxButton from '../CodeSandboxButton';
import WordWrapButton from '@theme/CodeBlock/WordWrapButton';
import Container from '@theme/CodeBlock/Container';
import styles from './styles.module.css';
export default function CodeBlockString({
  children,
  className: blockClassName = '',
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}) {
  const [sandboxId, setSandboxId] = useState('');

  const {
    prism: { defaultLanguage, magicComments },
  } = useThemeConfig();
  const language =
    languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage;
  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();
  // We still parse the metastring in case we want to support more syntax in the
  // future. Note that MDX doesn't strip quotes when parsing metastring:
  // "title=\"xyz\"" => title: "\"xyz\""
  const title = parseCodeBlockTitle(metastring) || titleProp;
  const { lineClassNames, code } = parseLines(children, {
    metastring,
    language,
    magicComments,
  });
  const showLineNumbers =
    showLineNumbersProp ?? containsLineNumbers(metastring);

  const codesandboxRegex = /codesandbox=({.*})/g;
  let hasCodeSandbox = false;
  if (metastring) {
    if (metastring.match(codesandboxRegex)) {
      if (metastring.match(codesandboxRegex)[0]) {
        hasCodeSandbox = true;
      }
    }
  }

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
              src={`https://codesandbox.io/embed/${sandboxId}?fontsize=14&hidenavigation=1&theme=light&view=preview&autoresize=1&expanddevtools=1`}
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
            <div className={styles.buttonGroup}>
              <button
                type="button"
                title="CodeSandbox"
                className={clsx('clean-btn')}
                onClick={() => setSandboxId("")}
              >
                <span className={styles.copyButtonIcons} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" data-testid="CodeIcon" className={styles.copyButtonIcon}><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></svg>
                </span>
              </button>
            </div>
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
              {...defaultProps}
              theme={prismTheme}
              code={code}
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
            <div className={styles.buttonGroup}>
              {(wordWrap.isEnabled || wordWrap.isCodeScrollable) && (
                <WordWrapButton
                  className={styles.codeButton}
                  onClick={() => wordWrap.toggle()}
                  isEnabled={wordWrap.isEnabled}
                />
              )}
              <CopyButton className={styles.codeButton} code={code} />
              {hasCodeSandbox && (
                <CodeSandboxButton
                  className={styles.codeButton}
                  code={code}
                  metastring={metastring}
                  setSandboxId={setSandboxId}
                />
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
