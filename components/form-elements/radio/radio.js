// import { classNames } from '../../../utils/classNames';
import styles from './radio.module.scss';

export default ({
  label, error, touched, buttons = [], onChange, name, value,
}) => (
  <div className={styles.radio}>
    {label && <p className={styles.radio__label}>{label}</p>}
    <div className={styles.radio__box}>
      {buttons.map((el) => (
        <label htmlFor={el.value} key={el.value}>
          {el.title}
          <input
            type="radio"
            id={el.value}
            key={el.value}
            name={name}
            value={el.value}
            checked={value === el.value}
            onChange={onChange}
            className={styles.radio__input}
          />

        </label>
      ))}
      {error && touched && <span className={styles.radio__error}>{error}</span>}
    </div>
  </div>
);
