import { classNames } from '../../../utils/classNames';

export default ({
  error, touched, buttons = [], onChange, name, value,
}) => (
  <>
    {buttons.map((el) => (
      <div className="form-check form-check-inline" key={el.value}>
        <input
          className={classNames({
            'form-check-input': true,
            'is-invalid': !!(error && touched),
          })}
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
    <div className="invalid-feedback" style={{ display: error && touched ? 'block' : 'none' }}>{error}</div>
  </>
);
