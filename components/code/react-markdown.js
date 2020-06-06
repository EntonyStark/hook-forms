import ReactMarkdown from 'react-markdown';

import { CodeBlock } from './code';

import styles from './react-markdown.module.scss';

export const MarkdownBlock = ({ md }) => (
  <>
    <h1 className={styles.markdownBox__title}>Form Code</h1>
    <ReactMarkdown
      source={md}
      escapeHtml={false}
      renderers={{ code: CodeBlock }}
      className={styles.markdownBox}
    />
  </>
);
