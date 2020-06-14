import { classNames } from '../../../utils/classNames';
import styles from './input.module.scss';

export default ({
  label, placeholder, error, value, type, onChange, touched, name, className,
}) => (
  <div className={classNames(styles.customInput, className)}>
    {label && <label className={styles.customInput__label} htmlFor={name}>{label}</label>}
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={classNames({
        [styles.customInput__input]: true,
        [styles['customInput__input--error']]: !!(error && touched),
      })}
      placeholder={placeholder}
    />
    {error && touched && <span className={styles.customInput__error}>{error}</span>}
  </div>
);
