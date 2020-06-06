import { classNames } from '../../../utils/classNames';
import styles from './text-area.module.scss';

export default ({
  label, placeholder, error, value, onChange, touched, name,
}) => (
  <div className={styles.textArea}>
    {label && <p className={styles.textArea__label}>{label}</p>}
    <div className={classNames({
      [styles.textArea__box]: true,
      [styles['textArea__input--error']]: !!(error && touched),
    })}
    >
      <textarea name={name} value={value} onChange={onChange} className={styles.textArea__input} placeholder={placeholder} />
      {error && touched && <span className={styles.textArea__error}>{error}</span>}
    </div>
  </div>
);
