import { WorkLayout } from '../../layouts/work-layout';

import { getMdData } from '../../utils/getMdFiles';
import { examples } from '../../constants';

import { FormFactory } from '../../components/form-elements/factory/factory';

import { CodeBlock } from '../../components/code/code';

import { form } from '../../forms/validation';
import styles from '../../styles/examples.module.scss';

export const getStaticProps = async () => {
  const { fileContents } = await getMdData(examples.validation);
  return {
    props: {
      fileContents,
    },
  };
};
export default ({ fileContents }) => (
  <WorkLayout>
    <div className={styles.examples}>
      <h1 className={styles.examples__title}>Validation Form Example</h1>

      <p className={styles.examples__desc}>
        For provide client-side validation in your form put <span>validate</span> object to your field object. <br />
        Each field in <span>validate</span> object must be a function,
        this function take 2 arguments and and should return string with error <br />
        <br />
        IMPORTANT: Synchronous validation happens on every change to your form data, so,
        if your field value is invalid, your field.error value will always be present.
      </p>

      <FormFactory form={form} />

      <CodeBlock value={fileContents} />
    </div>
  </WorkLayout>
);
