import { classNames } from '../../../utils/classNames';
import styles from './select.module.scss';

export default ({
  label, error, value, onChange, touched, name, options = [], className,
}) => (
  <div className={classNames(styles.select, className)}>
    {label && <p className={styles.select__label}>{label}</p>}
    <div className={classNames({
      [styles.select__box]: true,
      [styles['select__box--label']]: !!label,
    })}
    >
      <select name={name} onChange={onChange} value={value} className={styles.select__input}>
        {options.map((el) => <option key={el.value} value={el.value}>{el.title}</option>)}
      </select>

      {error && touched && <span className={styles.select__error}>{error}</span>}
    </div>
  </div>
);
