import ReactMarkdown from 'react-markdown';

import { CodeBlock } from './code';

import styles from './react-markdown.module.scss';

export const MarkdownBlock = ({ md }) => (
  <ReactMarkdown
    source={md}
    escapeHtml={false}
    renderers={{ code: CodeBlock }}
    className={styles.markdownBox}
  />
);
