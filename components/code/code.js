import React, { memo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/cjs/prism';

export const CodeBlock = memo(({ language, value }) => (
  <SyntaxHighlighter language={language} style={coy}>
    {value}
  </SyntaxHighlighter>
));
