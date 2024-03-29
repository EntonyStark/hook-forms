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
  ...rest
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
      {...rest}
    >
      {!options || options.length === 0 ? (
        <option>{placeholder}&nbsp;</option>
      ) : options.map((el) => <option key={el.value} value={el.value}>{el.title}</option>)}
    </select>
    <div className="invalid-feedback">{error}</div>
  </div>
);
