/* eslint-disable react/jsx-no-bind */
import { CustomInput, CustomCheckbox } from '../form-elements';
import {
  RADIO, SELECT, INPUT, TEXTAREA,
} from '../../constants';

const leadToTheNumber = (v) => (!v ? 0 : parseInt(v, 10));

const validationFunctions = {
  pattern: (str) => (v) => (new RegExp(str).test(v) ? '' : 'Invalid Pattern'),
  maxLength: (length) => (v) => (v.trim().length > length ? 'Invalid' : ''),
};

const checkValidations = (obj, n, v) => {
  if (v) return obj;
  if (!obj[n]) return obj;

  const clone = { ...obj };
  delete clone[n];
  return clone;
};


export const CustomizeItem = ({ item, updateItem }) => {
  if (!item) return null;
  const {
    name, options, required, onChangeValidate,
  } = item.formItem;

  const onChangeNameEvent = (e) => {
    const { value } = e.target;
    updateItem((ps) => ({ ...ps, formItem: { ...ps.formItem, name: value } }));
  };

  const onChangeLabelEvent = (e) => {
    const { value } = e.target;
    updateItem((ps) => ({ ...ps, formItem: { ...ps.formItem, options: { ...ps.formItem.options, label: value } } }));
  };

  const onChangeOptionsCountEvent = (e) => {
    const { value } = e.target;
    updateItem((ps) => ({ ...ps, countOfOptions: leadToTheNumber(value) }));
  };

  const onChangeRequiredEvent = (e) => {
    const { checked } = e.target;
    updateItem((ps) => ({ ...ps, formItem: { ...ps.formItem, required: checked } }));
  };

  const onChangeValidateEvent = (e) => {
    const { checked } = e.target;
    updateItem((ps) => ({ ...ps, formItem: { ...ps.formItem, onChangeValidate: checked } }));
  };

  const toggleElementValidation = (e) => {
    const { checked } = e.target;
    updateItem((ps) => ({ ...ps, includeValidate: checked }));
  };

  const changeElementValidation = (property, e) => {
    const { value } = e.target;

    const v = !value ? {} : { [property]: validationFunctions[property](value) };
    updateItem((ps) => ({
      ...ps,
      defaultUserValidate: {
        ...ps.defaultUserValidate,
        [property]: value,
      },
      formItem: {
        ...ps.formItem,
        validate: { ...checkValidations(ps.formItem.validate, property, value), ...v },
      },
    }));
  };


  return (
    <>
      <CustomInput
        label="Input name* (must be unique string)"
        value={name}
        onChange={onChangeNameEvent}
        placeholder="Enter input name"
      />

      <CustomInput
        label="Input Label (optional)"
        value={options.label || ''}
        onChange={onChangeLabelEvent}
        placeholder="Enter input label"
      />

      {options && (options.type === RADIO || options.type === SELECT) && (
        <CustomInput
          type="number"
          // name="options-count"
          label="Count of options"
          value={item.countOfOptions}
          onChange={onChangeOptionsCountEvent}
          placeholder="Count"
        />
      )}

      <CustomCheckbox
        label="Required"
        value={required}
        onChange={onChangeRequiredEvent}
      />

      <CustomCheckbox
        label="Run onChange validate ?"
        value={onChangeValidate}
        onChange={onChangeValidateEvent}
      />

      {(options.type === INPUT || options.type === TEXTAREA) && (
        <CustomCheckbox
          label="Should include validation ?"
          value={item.includeValidate}
          onChange={toggleElementValidation}
        />
      )}

      {item.includeValidate && (
        <div className="card mb-3">
          <div className="card-body">
            <div className="form-row">
              <div className="col">
                <CustomInput
                  type="number"
                  label="Max Length"
                  value={item.defaultUserValidate.maxLength}
                  onChange={changeElementValidation.bind(null, 'maxLength')}
                />
              </div>
              <div className="col">
                <CustomInput
                  label="Pattern"
                  value={item.defaultUserValidate.pattern}
                  onChange={changeElementValidation.bind(null, 'pattern')}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

CustomizeItem.displayName = 'CustomizeItem';
