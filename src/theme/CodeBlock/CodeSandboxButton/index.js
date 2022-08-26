import React, {useCallback, useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
// @ts-expect-error: TODO, we need to make theme-classic have type: module
import {usePluginData} from '@docusaurus/useGlobalData';
import styles from './styles.module.css';


export default function CodeSandboxButton({code, className, metastring,setSandboxId}) {
  const {templates} = usePluginData('codesandbox-plugin');

  let groups = /codesandbox=({.*})/g.exec(metastring);

  let { template, filename } = JSON.parse(groups[1]);
  
  const openCodeSandbox = async() => {
    let templateJson = templates[template];
    templateJson.files[filename] = {"content": code};

    console.log(templateJson);

    const res = await fetch(
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

    const { sandbox_id } = await res.json();
    
    setSandboxId(sandbox_id);
  }

  return (
    <button
      type="button"
      title="CodeSandbox"
      className={clsx(
        'clean-btn'
      )}
      onClick={openCodeSandbox}>
        <span className={styles.copyButtonIcons} aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={styles.copyButtonIcon} viewBox="0 0 16 16"> <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/> </svg>
      </span>
    </button>
  );
}
