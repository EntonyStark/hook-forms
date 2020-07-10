import { classNames } from '../../../utils/classNames';

export default ({
  options,
  label,
  onChange,
  touched,
  error,
  name,
  value,
  placeholder,
}) => (
  <div className="form-group">
    {label && <label htmlFor={name}>{label}</label>}
    <select
      className={classNames({
        'form-control': true,
        'is-invalid': !!(error && touched),
      })}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    >
      {!options || options.length === 0 ? (
        <option>{placeholder}&nbsp;</option>
      ) : options.map((el) => <option key={el.value} value={el.value}>{el.text}</option>)}
    </select>
    <div className="invalid-feedback">{error}</div>
  </div>
);
