import { useEffect, useState } from 'react';

import { OverflowBox } from '../overflow-box';
import { CustomInput, CustomSelectV2, CustomCheckbox } from '../../form-elements';
import {
  constructorElementsOptions, INPUT, RADIO, SELECT, CHECKBOX, constructorFormElement,
} from '../../../constants';

const leadToTheNumber = (v) => (!v ? 0 : parseInt(v, 10));

const validationFunctions = {
  pattern: (str) => (v) => (new RegExp(str).test(v) ? '' : 'Invalid Pattern'),
  maxLength: (length) => (v) => (parseInt(v, 10) > length ? 'Invalid' : ''),
  required: () => (v) => (v.trim() === '' ? 'Required' : ''),
};

const checkValidations = (obj, n, v) => {
  if (v) return obj;
  if (!obj[n]) return obj;

  const clone = { ...obj };
  delete clone[n];
  return clone;
};

export const Element = ({
  element,
  removeElement,
  saveElement,
}) => {
  const [currentElement, setCurrentElement] = useState(null);

  useEffect(() => {
    setCurrentElement(element);
  }, [element]);

  const onChangeNameEvent = (e) => {
    const { value } = e.target;
    setCurrentElement((ps) => ({ ...ps, name: value }));
  };

  const onChangeTypeEvent = (e) => {
    const type = e.target.value;
    setCurrentElement((prevState) => {
      switch (type) {
        case RADIO: {
          return {
            ...prevState,
            value: '',
            options: { ...prevState.options, type, buttons: [] },
          };
        }
        case SELECT: {
          return {
            ...prevState,
            value: '',
            options: { ...prevState.options, type, options: [] },
          };
        }
        case CHECKBOX: {
          return {
            ...prevState,
            value: false,
            options: { ...prevState.options, type },
          };
        }
        default: {
          return {
            ...prevState,
            value: '',
            options: { ...prevState.options, type },
          };
        }
      }
    });
  };

  const onChangeLabelEvent = (e) => {
    const { value } = e.target;
    setCurrentElement((ps) => ({ ...ps, options: { ...ps.options, label: value } }));
  };

  const toggleElementValidation = (e) => {
    const { checked } = e.target;

    setCurrentElement((prevState) => ({
      ...prevState,
      includeValidate: checked,
      validate: checked ? prevState.validate : {},
      defaultUserValidate: checked ? prevState.defaultUserValidate : constructorFormElement.defaultUserValidate,
    }));
  };

  const changeElementValidation = (e) => {
    const {
      name, checked, value, type,
    } = e.target;

    const elementValue = type === CHECKBOX ? checked : value;

    const v = !elementValue ? {} : { [name]: validationFunctions[name](elementValue) };
    setCurrentElement((prevState) => ({
      ...prevState,
      defaultUserValidate: {
        ...prevState.defaultUserValidate,
        [name]: elementValue,
      },
      validate: { ...checkValidations(prevState.validate, name, elementValue), ...v },
    }));
  };

  const onChangeOptionsCountEvent = (e) => {
    const { value } = e.target;
    setCurrentElement((ps) => ({ ...ps, options: { ...ps.options, countOfOptions: leadToTheNumber(value) } }));
  };

  const saveElementEvent = () => saveElement(currentElement);

  return (
    <div className="col-md-6">
      <h3 className="text-center">Input Creator</h3>
      <hr className="my-4" />
      <div>
        <div className="d-flex my-3">
          <blockquote className="blockquote mr-auto">
            <p className="mb-0">2. Customize field here</p>
          </blockquote>
          {currentElement && <button type="button" onClick={removeElement} className="btn btn-outline-danger btn-sm">Cancel</button>}
        </div>
        {currentElement && (
        <OverflowBox className="card bg-light">
          <div className="card-body">
            <div className="form-row">
              <div className="col">
                <CustomInput
                  name="element-name"
                  label="Input name"
                  value={currentElement ? currentElement.name : ''}
                  onChange={onChangeNameEvent}
                  placeholder="Enter input name"
                />
              </div>
              <div className="col">
                <CustomInput
                  name="qwe"
                  label="Input Label"
                  value={currentElement ? currentElement.options.label : ''}
                  onChange={onChangeLabelEvent}
                  placeholder="Enter input label"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="col">
                <CustomSelectV2
                  name="element-type"
                  label="Input type"
                  value={currentElement ? currentElement.options.type : INPUT}
                  onChange={onChangeTypeEvent}
                  options={constructorElementsOptions}
                />
              </div>
              <div className="col">
                {currentElement
                && currentElement.options
                && (currentElement.options.type === RADIO || currentElement.options.type === SELECT)
                && (
                <CustomInput
                  type="number"
                  name="options-count"
                  label="Count of options"
                  value={currentElement ? currentElement.options.countOfOptions : 0}
                  onChange={onChangeOptionsCountEvent}
                  placeholder="Count"
                />
                )}
              </div>
            </div>

            <CustomCheckbox
              name="validation"
              label="Should include validation ?"
              value={currentElement.includeValidate}
              onChange={toggleElementValidation}
            />

            {currentElement.includeValidate && (
              <div className="card mb-3">
                <div className="card-body">
                  <CustomCheckbox
                    name="required"
                    label="Required"
                    value={currentElement.defaultUserValidate.required}
                    onChange={changeElementValidation}
                  />
                  <div className="form-row">
                    <div className="col">
                      <CustomInput
                        type="number"
                        name="maxLength"
                        label="Max Length"
                        value={currentElement.defaultUserValidate.maxLength}
                        onChange={changeElementValidation}
                      />
                    </div>
                    <div className="col">
                      <CustomInput
                        name="pattern"
                        label="Pattern"
                        value={currentElement.defaultUserValidate.pattern}
                        onChange={changeElementValidation}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={saveElementEvent}
              className="btn btn-primary btn-lg btn-block btn-sm mb-3"
            >
              Save
            </button>
          </div>
        </OverflowBox>
        )}
      </div>
    </div>
  );
};
