import { useState } from 'react';

import { classNames } from '../utils/classNames';
import { getMd } from '../utils/getMdFiles';
import { uuid } from '../utils/uuid';

import { WorkLayout } from '../layouts/work-layout';
import { CustomButton } from '../components/button/button';
import { CustomInput, CustomSelect } from '../components/form-elements';

import { MarkdownBlock } from '../components/code/react-markdown';

import {
  constructorFormElement, constructorElementsOptions, CHECKBOX, RADIO, SELECT,
} from '../constants';
import styles from '../styles/constructor.module.scss';

export const getStaticProps = async () => {
  const md = await getMd();
  return {
    props: {
      md,
    },
  };
};

export default ({ md }) => {
  const [form, setForm] = useState([constructorFormElement]);
  const [showMdBox, setShowMdBox] = useState(false);
  const [copied, setCopied] = useState(false);

  const triggerMdBox = () => setShowMdBox((prevState) => !prevState);

  const addItem = () => setForm(form.concat({ ...constructorFormElement, id: uuid() }));
  const removeItem = (id) => setForm(form.filter((el) => el.id !== id));

  const setElementName = (id, name) => setForm(form.map((el) => (el.id === id ? ({ ...el, name }) : el)));
  const setElementType = (id, type) => {
    setForm(form.map((el) => {
      if (el.id === id) {
        switch (type) {
          case RADIO: {
            return {
              ...el,
              value: '',
              options: { ...el.options, type, buttons: [] },
            };
          }
          case SELECT: {
            return {
              ...el,
              value: '',
              options: { ...el.options, type, options: [] },
            };
          }
          case CHECKBOX: {
            return {
              ...el,
              value: false,
              options: { ...el.options, type },
            };
          }
          default: {
            return {
              ...el,
              value: '',
              options: { ...el.options, type },
            };
          }
        }
      }
      return el;
    }));
  };
  // const setRequiredValidationProperty = (id, value) => {
  //   setForm(form.map((el) => {
  //     if (!el.options.type) return el;
  //     if (el.id === id) {
  //       if (el.options.type === CHECKBOX) return el;

  //       const { required, ...rest } = el.validate;

  //       return {
  //         ...el,
  //         validate: value ? { ...rest, required: (v) => (v.trim() === '' ? 'Required' : '') } : rest,
  //       };
  //     }
  //     return el;
  //   }));
  // };

  const toMarkDown = () => JSON.stringify(form.map(({ id, ...rest }) => rest), (key, value) => {
    // console.log('value', value);
    if (typeof value === 'function') {
      return value.toString();
    }
    return value;
  }, 2);

  const copy = () => {
    navigator.clipboard.writeText(toMarkDown());
    setCopied(true);
  };
  // console.log('form', toMarkDown());
  return (
    <WorkLayout>
      <div className={styles.constructor}>
        <div className={styles.constructor__addBox}>
          <CustomButton onClick={addItem}>+ Add Field</CustomButton>
          <div>
            <CustomButton onClick={triggerMdBox}>Show Form Code</CustomButton>
            <div className={styles.constructor__tooltip} onBlur={() => setCopied(false)}>
              <CustomButton onClick={copy}>
                <span className={classNames({
                  [styles.constructor__tooltiptext]: true,
                  [styles['constructor__tooltiptext--show']]: copied,
                })}
                >Copied to clipboard
                </span>
                Copy Form To Clipboard
              </CustomButton>
            </div>
          </div>
        </div>

        <div className={styles.constructor__box}>
          {form.map((el) => (
            <div key={el.id} className={styles.constructor__item}>
              <div className={styles.constructor__left}>
                <div className={styles.constructor__itemBox}>
                  <CustomInput
                    value={el.name}
                    onChange={(e) => setElementName(el.id, e.target.value)}
                    placeholder="Field name"
                  />
                </div>
                <div className={styles.constructor__itemBox}>
                  <CustomSelect
                    value={el.options.type}
                    options={constructorElementsOptions}
                    onChange={(e) => setElementType(el.id, e.target.value)}
                    placeholder="Field type"
                  />
                </div>
              </div>

              {/* <div className={styles.constructor__right}>
                <CustomCheckbox label="Required" onChange={(e) => setRequiredValidationProperty(el.id, e.target.checked)} />
              </div> */}

              <div
                className={styles.constructor__removeItem}
                onClick={removeItem.bind(null, el.id)}
                role="button"
                tabIndex="0"
              >
                &#9746;
              </div>
            </div>
          ))}
        </div>
        {showMdBox && <MarkdownBlock md={md.replace(/code/gi, toMarkDown())} />}
      </div>
    </WorkLayout>
  );
};
