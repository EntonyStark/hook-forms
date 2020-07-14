import { useEffect } from 'react';
import easyHook from 'hook-easy-form';

import {
  CustomInput, CustomRadio, CustomSelectV2, CustomCheckbox, CustomTextArea,
} from '..';

import {
  CHECKBOX, SELECT, RADIO, TEXTAREA,
} from '../../../constants';

export const FormFactoryV2 = ({
  form,
}) => {
  const {
    formArray, updateEvent, submitEvent, resetEvent, updateFormArray,
  } = easyHook({ initialForm: form });

  useEffect(() => {
    updateFormArray(form);
  }, [form]);

  const submit = (v) => {
    alert(JSON.stringify(v, null, 2));
    resetEvent();
  };
  return (
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
              buttons={item.options.buttons}
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
            error={item.error}
            touched={item.touched}
          />
        );
      })}
      <div className="btn-group btn-block" role="group" aria-label="Control box">
        <button type="submit" className="btn btn-primary btn-sm">Submit</button>
        <button type="button" className="btn btn-primary btn-sm" onClick={resetEvent}>Clear</button>
      </div>
    </form>
  );
};
