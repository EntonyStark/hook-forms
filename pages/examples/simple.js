import { WorkLayout } from '../../layouts/work-layout';
import { getMdData } from '../../utils/getMdFiles';
import { examples } from '../../constants';

import { FormFactory } from '../../components/form-factory/form-factory';

import { MarkdownBlock } from '../../components/code/react-markdown';

import styles from '../../styles/examples.module.scss';

export const getStaticProps = async () => {
  const { md, form } = await getMdData(examples.simple);
  return {
    props: {
      repoInfo: {},
      md,
      form,
    },
  };
};

export default ({ md, form }) => (
  <WorkLayout>
    <div className={styles.examples}>
      <h1 className={styles.examples__title}>Simple Form Example</h1>
      <p className={styles.examples__desc}>This is a simple demonstration of how to work standard form. <br />
        All tricks and things which you want to use,
        write in form array and then &apos;hook-easy-form&apos; will return a new array for work.
      </p>

      <FormFactory form={form} />

      <MarkdownBlock md={md} />
    </div>
  </WorkLayout>
);
