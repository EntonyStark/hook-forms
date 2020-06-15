import React, { memo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/cjs/prism';

import styles from './react-markdown.module.scss';

const customStyle = {
  width: '100%',
  padding: '0 1em 1em 1em',
  borderRadius: 3,
};

export const CodeBlock = memo(({ language = 'javascript', value }) => (
  <>
    <h1 className={styles.markdownBox__title}>Form Code</h1>
    <SyntaxHighlighter language={language} style={coy} customStyle={customStyle}>
      {value}
    </SyntaxHighlighter>
  </>
));
