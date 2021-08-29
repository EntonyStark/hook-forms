import { useEffect } from 'react';
import easyHook from 'hook-easy-form';

import {
  CustomInput, CustomRadio, CustomSelectV2, CustomCheckbox, CustomTextArea,
} from '..';

import {
  CHECKBOX, SELECT, RADIO, TEXTAREA,
} from '../../../constants';

import { Values } from '../../values/values';

export const FormFactoryV2 = ({
  form,
  valuesBlock = false,
}) => {
  const {
    formArray, updateEvent, submitEvent, resetEvent, updateFormArray, runValidate,
  } = easyHook({ initialForm: form });

  useEffect(() => {
    updateFormArray(form);
  }, [form]);

  const submit = (v) => {
    alert(JSON.stringify(v, null, 2));
  };
  return (
    <>
      <form onSubmit={submitEvent(submit)}>
        {formArray.map((item) => {
          if (item.options.type === CHECKBOX) {
            return (
              <CustomCheckbox
                key={item.name}
                label={item.options.label}
                name={item.name}
                value={item.value}
                onChange={updateEvent}
                onBlur={() => !item.onChangeValidate && runValidate(item.name)}
                error={item.error}
                touched={item.touched}
              />
            );
          }
          if (item.options.type === TEXTAREA) {
            return (
              <CustomTextArea
                key={item.name}
                label={item.options.label}
                name={item.name}
                value={item.value}
                onChange={updateEvent}
                onBlur={() => !item.onChangeValidate && runValidate(item.name)}
                error={item.error}
                touched={item.touched}
              />
            );
          }
          if (item.options.type === SELECT) {
            return (
              <CustomSelectV2
                key={item.name}
                label={item.options.label}
                name={item.name}
                onChange={updateEvent}
                onBlur={() => !item.onChangeValidate && runValidate(item.name)}
                options={item.options.options}
                error={item.error}
                touched={item.touched}
              />
            );
          }
          if (item.options.type === RADIO) {
            return (
              <CustomRadio
                key={item.name}
                label={item.options.label}
                name={item.name}
                value={item.value}
                onChange={updateEvent}
                onBlur={() => !item.onChangeValidate && runValidate(item.name)}
                buttons={item.options.buttons || item.options.options}
                error={item.error}
                touched={item.touched}
              />
            );
          }

          return (
            <CustomInput
              key={item.name}
              name={item.name}
              label={item.options.label}
              value={item.value}
              onChange={updateEvent}
              onBlur={() => !item.onChangeValidate && runValidate(item.name)}
              error={item.error}
              touched={item.touched}
            />
          );
        })}
        <div className="form-row" role="group" aria-label="Control box">
          <div className="col">
            <button type="submit" className="btn btn-primary btn-sm btn-block">Submit</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-primary btn-sm btn-block" onClick={resetEvent}>Clear</button>
          </div>
        </div>
      </form>
      {valuesBlock && (
        <div className="mt-5">
          <h4>Values</h4>
          <Values array={formArray} />
        </div>
      )}
    </>
  );
};
