import { classNames } from '../../../utils/classNames';
import styles from './select.module.scss';

export default ({
  label, placeholder, error, value, onChange, touched, name, options = [],
}) => (
  <div className={styles.select}>
    {label && <p className={styles.select__label}>{label}</p>}
    <div className={classNames({
      [styles.select__box]: true,
      // [styles['input__input--error']]: !!(error && touched),
    })}
    >
      <select name={name} onChange={onChange} value={value} placeholder={placeholder} className={styles.select__input}>
        {options.map((el) => <option key={el.value} value={el.value}>{el.title}</option>)}
      </select>

      {error && touched && <span className={styles.select__error}>{error}</span>}
    </div>
  </div>
);
