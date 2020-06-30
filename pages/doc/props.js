import { WorkLayout } from '../../layouts/work-layout';

import { CodeBlock } from '../../components/code/code';
import { PropsTable } from '../../components/table/table';
import { propsProperty } from '../../constants/props';
import styles from '../../styles/doc.module.scss';

export const getStaticProps = async () => ({
  props: {},
});

export default () => (
  <WorkLayout>
    <div className={styles.doc}>
      <h1 className={styles.doc__title}>Hook props <span>What you can pass to the hook ?</span></h1>

      {propsProperty.map((el) => (
        <div key={el.id} className={styles.doc__box}>
          <h4 className={styles.doc__subTitle}>{el.title}</h4>
          <p className={styles.doc__desc}>{el.desc}</p>

          {el.table && (<PropsTable table={el.table} className={styles.doc__table} />)}
          <CodeBlock title={false} value={el.code} />
        </div>
      ))}
    </div>
  </WorkLayout>
);
