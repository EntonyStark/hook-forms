// import { classNames } from '../../../utils/classNames';
import styles from './checkbox.module.scss';

export default ({
  label, value, onChange, name,
}) => (
  <div className={styles.checkbox}>
    <input
      type="checkbox"
      name={name}
      checked={value}
      id={name}
      onChange={onChange}
      className={styles.checkbox__input}
    />
    {label && <label className={styles.checkbox__label} htmlFor={name}>{label}</label>}
  </div>
);
