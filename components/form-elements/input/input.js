import { classNames } from '../../../utils/classNames';

export default ({
  name, type = 'text', error, touched, placeholder, label, value, onChange,
}) => (
  <div className="form-group">
    {label && <label htmlFor={name}>{label}</label>}
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={classNames({
        'form-control': true,
        'is-invalid': !!(error && touched),
      })}
    />
    <div className="invalid-feedback">{error}</div>
  </div>
);
