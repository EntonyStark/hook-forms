import { classNames } from '../../../utils/classNames';
import styles from './text-area.module.scss';

export default ({
  label, placeholder, error, value, onChange, touched, name,
}) => (
  <div className={styles.textArea}>
    {label && <label className={styles.textArea__label} htmlFor={name}>{label}</label>}
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={classNames({
        [styles.textArea__input]: true,
        [styles['textArea__input--error']]: !!(error && touched),
      })}
      placeholder={placeholder}
    />
    {error && touched && <span className={styles.textArea__error}>{error}</span>}
  </div>
);
