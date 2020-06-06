import { useEffect, useState } from 'react';
import styles from './values.module.scss';

export const Values = ({ array }) => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(array.reduce((a, el) => ({ ...a, [el.name]: el.value }), {}));
  }, [array]);

  return (
    <div className={styles.values}>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
};
