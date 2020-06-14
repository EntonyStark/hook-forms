import { WorkLayout } from '../../layouts/work-layout';

import styles from '../../styles/examples.module.scss';

export default (props) => {
  console.log('props', props);
  return (
    <WorkLayout>
      <div className={styles.examples}>
        <h1 className={styles.examples__title}>Validation Form Example</h1>
      </div>
    </WorkLayout>
  );
};
