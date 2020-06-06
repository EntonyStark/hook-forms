import easyHook from 'hook-easy-form';

import {
  CustomInput, CustomRadio, CustomSelect, CustomCheckbox, CustomTextArea,
} from '../form-elements';
import { CustomButton } from '../button/button';
import { Values } from '../values/values';

import styles from './form-factory.module.scss';

export const FormFactory = ({
  form, valuesBlock = true,
}) => {
  const {
    formArray, updateEvent, submitEvent, resetEvent,
  } = easyHook({ initialForm: form });

  const submit = (v) => {
    alert(JSON.stringify(v, null, 2));
    resetEvent();
  };

  return (
    <>
      <h1 className={styles.factory__title}>Form</h1>
      <div className={styles.factory__formBox}>
        <form onSubmit={submitEvent(submit)} className={styles.factory__form}>
          {formArray.map((item) => {
            if (item.options.type === 'checkbox') {
              return (
                <CustomCheckbox
                  key={item.name}
                  name={item.name}
                  value={item.value}
                  onChange={updateEvent}
                  label={item.options.label}
                />
              );
            }
            if (item.options.type === 'text-area') {
              return (
                <CustomTextArea
                  key={item.name}
                  name={item.name}
                  value={item.value}
                  onChange={updateEvent}
                  label={item.options.label}
                />
              );
            }
            if (item.options.type === 'select') {
              return (
                <CustomSelect
                  key={item.name}
                  name={item.name}
                  value={item.value}
                  onChange={updateEvent}
                  label={item.options.label}
                  options={item.options.options}
                />
              );
            }
            if (item.options.type === 'radio') {
              return (
                <CustomRadio
                  key={item.name}
                  name={item.name}
                  value={item.value}
                  onChange={updateEvent}
                  label={item.options.label}
                  buttons={item.options.buttons}
                />
              );
            }

            return (
              <CustomInput
                key={item.name}
                name={item.name}
                value={item.value}
                onChange={updateEvent}
                label={item.options.label}
              />
            );
          })}
          <div className={styles.factory__btnBox}>
            <CustomButton type="submit">Submit</CustomButton>
            <CustomButton onClick={resetEvent}>Clear</CustomButton>
          </div>
        </form>

        {valuesBlock && (
        <><h1 className={styles.factory__title}>Values</h1>
          <Values array={formArray} />
        </>
        )}
      </div>
    </>
  );
};
