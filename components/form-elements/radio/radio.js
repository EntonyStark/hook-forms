// import { classNames } from '../../../utils/classNames';
import styles from './radio.module.scss';

export default ({
  error, touched, buttons = [], onChange, name, value,
}) => (
  <div className={styles.radio}>
    {buttons.map((el) => (
      <label htmlFor={el.value} key={el.value} className={styles.radio__label}>
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
);
