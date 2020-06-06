// import { classNames } from '../../../utils/classNames';
import styles from './checkbox.module.scss';

export default ({
  label, error, value, onChange, touched, name,
}) => (
  <div className={styles.checkbox}>
    {label && <p className={styles.checkbox__label}>{label}</p>}
    <div className={styles.checkbox__box}>
      <label htmlFor={name}>
        <input
          type="checkbox"
          name={name}
          checked={value}
          id={name}
          onChange={onChange}
        />
      </label>

      {error && touched && <span className={styles.checkbox__error}>{error}</span>}
    </div>
  </div>
);
