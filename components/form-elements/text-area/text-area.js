import { classNames } from '../../../utils/classNames';

export default ({
  label, placeholder, error, value, onChange, touched, name,
}) => (
  <div className="form-group">
    {label && <label htmlFor={name}>{label}</label>}
    <textarea
      name={name}
      id={name}
      onChange={onChange}
      value={value}
      rows="3"
      className={classNames({
        'form-control': true,
        'is-invalid': !!(error && touched),
      })}
      placeholder={placeholder}
    />
    <div className="invalid-feedback">{error}</div>
  </div>
);
