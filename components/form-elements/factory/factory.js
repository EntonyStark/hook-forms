import easyHook from 'hook-easy-form';

import {
  CustomInput, CustomRadio, CustomSelectV2, CustomCheckbox, CustomTextArea,
} from '..';
import { Values } from '../../values/values';

import {
  CHECKBOX, SELECT, RADIO, TEXTAREA,
} from '../../../constants';
import styles from './factory.module.scss';

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
                    error={item.error}
                    touched={item.touched}
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
                    error={item.error}
                    touched={item.touched}
                  />
                </div>
              );
            }
            if (item.options.type === SELECT) {
              return (
                <div className={styles.factory__formItem} key={item.name}>
                  <p>{item.options.label}</p>
                  <CustomSelectV2
                    name={item.name}
                    onChangeEvent={(el) => setValueManually(item.name, el.value)}
                    options={item.options.options}
                    error={item.error}
                    touched={item.touched}
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
                    error={item.error}
                    touched={item.touched}
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
                  error={item.error}
                  touched={item.touched}
                />
              </div>
            );
          })}
          <div className={styles.factory__btnBox}>
            <button type="submit">Submit</button>
            <button onClick={resetEvent}>Clear</button>
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
