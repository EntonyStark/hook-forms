import { classNames } from '../../../utils/classNames';
import styles from './input.module.scss';

export default ({
  label, placeholder, error, value, type, onChange, touched, name, className,
}) => (
  <div className={classNames(styles.input, className)}>
    {label && <p className={styles.input__label}>{label}</p>}
    <div className={classNames({
      [styles.input__box]: true,
      [styles['input__input--error']]: !!(error && touched),
      [styles['input__box--label']]: !!label,
    })}
    >
      <input type={type} name={name} value={value} onChange={onChange} className={styles.input__input} placeholder={placeholder} />
      {error && touched && <span className={styles.input__error}>{error}</span>}
    </div>
  </div>
);
