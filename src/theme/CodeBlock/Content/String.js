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
import { parseMetaString } from '../CodeSandboxButton';
import styles from './styles.module.css';

const NormalCodeBlock = ({ showLineNumbers, lineClassNames, blockClassName, language, prismTheme, wordWrap, partialCode, title, code, allCode, metastring }) => {
  return (
    <div>
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
          <div className={styles.buttonGroup}>
            {(wordWrap.isEnabled || wordWrap.isCodeScrollable) && (
              <WordWrapButton
                className={styles.codeButton}
                onClick={() => wordWrap.toggle()}
                isEnabled={wordWrap.isEnabled}
              />
            )}
            <CopyButton className={styles.codeButton} code={code} />
          </div>
        </div>
      </Container>
    </div>
  )
}

const ExpoSnack = ({ filename, showLineNumbers, lineClassNames, blockClassName, language, prismTheme, wordWrap, partialCode, title, code, allCode, metastring }) => {
  const [snackVisible, setSnackVisible] = useState(false);

  let groups = /expo=({.*})/g.exec(metastring);

  let parameters = JSON.parse(groups[1]);

  const files = {
    // Inlined code
    'App.tsx': {
      type: 'CODE',
      contents: allCode
    }
  };

  return (
    <div>
      {snackVisible && (
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
          
            <div className={styles.buttonGroup}>
              <button
                type="button"
                title="CodeSandbox"
                className={clsx('clean-btn')}
                onClick={() => setSnackVisible(false)}
              >
                <span className={styles.copyButtonIcons} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" data-testid="CodeIcon" className={styles.copyButtonIcon}><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></svg>
                </span>
              </button>
            </div>
          </Container>
        </div>
      )}

      <div style={{ display: !snackVisible ? 'inherit' : 'none' }}>
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
            <div className={styles.buttonGroup}>
              {(wordWrap.isEnabled || wordWrap.isCodeScrollable) && (
                <WordWrapButton
                  className={styles.codeButton}
                  onClick={() => wordWrap.toggle()}
                  isEnabled={wordWrap.isEnabled}
                />
              )}
              <CopyButton className={styles.codeButton} code={code} />
              <button
                type="button"
                title="CodeSandbox"
                className={clsx(
                  'clean-btn'
                )}
                onClick={() => {setSnackVisible(true)}}>
                  <span className={styles.copyButtonIcons} aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={styles.copyButtonIcon} viewBox="0 0 16 16"> <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/> </svg>
                </span>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

const CodeSandbox = ({ filename, showLineNumbers, lineClassNames, blockClassName, language, prismTheme, wordWrap, partialCode, title, code, allCode, metastring }) => {
  const [sandboxId, setSandboxId] = useState('');

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
            <div className={styles.buttonGroup}>
              {(wordWrap.isEnabled || wordWrap.isCodeScrollable) && (
                <WordWrapButton
                  className={styles.codeButton}
                  onClick={() => wordWrap.toggle()}
                  isEnabled={wordWrap.isEnabled}
                />
              )}
              <CopyButton className={styles.codeButton} code={code} />
              <CodeSandboxButton
                className={styles.codeButton}
                code={allCode}
                metastring={metastring}
                setSandboxId={setSandboxId}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}


export default function CodeBlockString({
  children,
  className: blockClassName = '',
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}) {

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
  let filename = "";

  const codesandboxRegex = /codesandbox=({.*})/g;
  let hasCodeSandbox = false;
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

  let allCode = code.replace(/\/\/hide-start\n/g, "").replace(/\/\/hide-end/g, "").replace(/\/\/hide-start/g, "").replace(/\/\/hide-end\n/g, "");
  let partialCode = code.replace(/(\/\/hide-start)[\w\W]*?(\/\/hide-end)\n/g, "").replace(/(\/\/hide-start)[\w\W]*?(\/\/hide-end)/g, "").replace(/\n+$/, "");

  if (hasCodeSandbox) {
    return <CodeSandbox
      blockClassName={blockClassName}
      language={language}
      prismTheme={prismTheme}
      wordWrap={wordWrap}
      partialCode={partialCode}
      title={title}
      code={code}
      allCode={allCode}
      metastring={metastring}
      showLineNumbers={showLineNumbers}
      lineClassNames={lineClassNames}
      filename={filename}
    />
  } else if (hasExpoSnack) {
    return <ExpoSnack
      blockClassName={blockClassName}
      language={language}
      prismTheme={prismTheme}
      wordWrap={wordWrap}
      partialCode={partialCode}
      title={title}
      code={code}
      allCode={allCode}
      metastring={metastring}
      showLineNumbers={showLineNumbers}
      lineClassNames={lineClassNames}
    />
  } else {
    return <NormalCodeBlock
      blockClassName={blockClassName}
      language={language}
      prismTheme={prismTheme}
      wordWrap={wordWrap}
      partialCode={partialCode}
      title={title}
      code={code}
      allCode={allCode}
      metastring={metastring}
      showLineNumbers={showLineNumbers}
      lineClassNames={lineClassNames}
    />
  }
}
