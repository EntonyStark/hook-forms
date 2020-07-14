// import { classNames } from '../../../utils/classNames';
import styles from './radio.module.scss';

export default ({
  error, touched, buttons = [], onChange, name, value,
}) => (
  <>
    {buttons.map((el) => (
      <div className="form-check form-check-inline" key={el.value}>
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={el.value}
          value={el.value}
          checked={value === el.value}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor={el.value}>{el.title}</label>
      </div>
    ))}
    {error && touched && <span className={styles.radio__error}>{error}</span>}
  </>
);
