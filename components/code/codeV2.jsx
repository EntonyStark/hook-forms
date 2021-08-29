import { useState } from 'react';

import { classNames } from '../../utils/classNames';
import styles from './react-markdown.module.scss';

export const CodeBlockV2 = ({ codeString, copyBtn = true, className = 'list-group-item-secondary' }) => {
  const [showSpan, setShowSpan] = useState(false);

  const copyCommandToClipboard = (text) => navigator.clipboard.writeText(text)
    .then(() => setShowSpan(true))
    .then(() => setTimeout(() => setShowSpan(false), 1000));

  return (
    <ul className="list-group">
      <li className={`list-group-item d-flex justify-content-between align-items-center ${className}`}>
        <pre style={{ margin: 0 }}>
          {codeString}
        </pre>
        {copyBtn && (
        <button
          type="button"
          className={classNames('btn btn-outline-dark btn-sm align-self-start', styles.box)}
          onClick={copyCommandToClipboard.bind(null, codeString)}
        >
          {showSpan && <span>Copied !</span>}
          Copy
        </button>
        )}
      </li>
    </ul>
  );
};
