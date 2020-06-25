import { WorkLayout } from '../../layouts/work-layout';

import { CodeBlock } from '../../components/code/code';
import { docs } from '../../constants/docs';
import styles from '../../styles/doc.module.scss';

export const getStaticProps = async () => ({
  props: {},
});

export default () => (
  <WorkLayout>
    <div className={styles.doc}>
      <h1 className={styles.doc__title}>Hook actions API <span>What returns the hook ?</span></h1>

      {docs.map((el) => (
        <div key={el.id} className={styles.doc__box}>
          <h4 className={styles.doc__subTitle}>{el.title}</h4>
          <p className={styles.doc__desc}>{el.desc}</p>

          {el.code && <CodeBlock title={false} value={el.code} language={el.codeLanguage} />}
        </div>
      ))}
    </div>
  </WorkLayout>
);
