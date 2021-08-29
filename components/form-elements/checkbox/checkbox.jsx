export default ({
  label,
  value,
  onChange,
  name = Math.random().toString(),
  ...rest
}) => (
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id={name} name={name} checked={value} onChange={onChange} {...rest} />
    {label && <label className="form-check-label" htmlFor={name}>{label}</label>}
  </div>
);
