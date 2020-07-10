export default ({
  label, value, onChange, name,
}) => (
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id={name} name={name} checked={value} onChange={onChange} />
    {label && <label className="form-check-label" htmlFor={name}>{label}</label>}
  </div>
);
