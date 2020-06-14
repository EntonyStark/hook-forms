import easyHook from 'hook-easy-form';

import {
  CustomInput, CustomRadio, CustomSelect, CustomCheckbox, CustomTextArea,
} from '../form-elements';
import { CustomButton } from '../button/button';
import { Values } from '../values/values';

import {
  CHECKBOX, SELECT, RADIO, TEXTAREA,
} from '../../constants';
import styles from './form-factory.module.scss';

export const FormFactory = ({
  form, valuesBlock = true,
}) => {
  const {
    formArray, updateEvent, submitEvent, resetEvent, setValueManually,
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
            if (item.options.type === CHECKBOX) {
              return (
                <div className={styles.factory__formItem} key={item.name}>
                  <p>{item.options.label}</p>
                  <CustomCheckbox
                    name={item.name}
                    value={item.value}
                    onChange={updateEvent}
                  />
                </div>
              );
            }
            if (item.options.type === TEXTAREA) {
              return (
                <div className={styles.factory__formItem} key={item.name}>
                  <p>{item.options.label}</p>
                  <CustomTextArea
                    name={item.name}
                    value={item.value}
                    onChange={updateEvent}
                  />
                </div>
              );
            }
            if (item.options.type === SELECT) {
              return (
                <div className={styles.factory__formItem} key={item.name}>
                  <p>{item.options.label}</p>
                  <CustomSelect
                    name={item.name}
                    onChangeEvent={(el) => setValueManually(item.name, el.value)}
                    options={item.options.options}
                  />
                </div>
              );
            }
            if (item.options.type === RADIO) {
              return (
                <div className={styles.factory__formItem} key={item.name}>
                  <p>{item.options.label}</p>
                  <CustomRadio
                    name={item.name}
                    value={item.value}
                    onChange={updateEvent}
                    buttons={item.options.buttons}
                  />
                </div>
              );
            }

            return (
              <div className={styles.factory__formItem} key={item.name}>
                <p>{item.options.label}</p>
                <CustomInput
                  name={item.name}
                  value={item.value}
                  onChange={updateEvent}
                />
              </div>
            );
          })}
          <div className={styles.factory__btnBox}>
            <CustomButton type="submit">Submit</CustomButton>
            <CustomButton onClick={resetEvent}>Clear</CustomButton>
          </div>
        </form>

        {valuesBlock && (
        <>
          <h1 className={styles.factory__title}>Values</h1>
          <Values array={formArray} />
        </>
        )}
      </div>
    </>
  );
};
