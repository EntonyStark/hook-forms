// import { useState } from 'react';

// import { classNames } from '../utils/classNames';
// import { uuid } from '../utils/uuid';

// import { CodeBlock } from '../components/code/code';
// import { WorkLayout } from '../layouts/work-layout';
// import { CustomButton } from '../components/button/button';

// import {
//   constructorFormElement, constructorElementsOptions, CHECKBOX, RADIO, SELECT,
// } from '../constants';
// import styles from '../styles/constructor.module.scss';

// // export const getStaticProps = async () => {
// //   const md = await getMd();
// //   return {
// //     props: {
// //       md,
// //     },
// //   };
// // };

// export default () => {
//   const [form, setForm] = useState([constructorFormElement]);
//   const [showMdBox, setShowMdBox] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const triggerMdBox = () => setShowMdBox((prevState) => !prevState);

//   const addItem = () => setForm(form.concat({ ...constructorFormElement, id: uuid() }));
//   const removeItem = (id) => setForm(form.filter((el) => el.id !== id));

//   const setElementName = (id, name) => setForm(form.map((el) => (el.id === id ? ({ ...el, name }) : el)));
//   const setElementType = (id, type) => {
//     setForm(form.map((el) => {
//       if (el.id === id) {
//         switch (type) {
//           case RADIO: {
//             return {
//               ...el,
//               value: '',
//               options: { ...el.options, type, buttons: [] },
//             };
//           }
//           case SELECT: {
//             return {
//               ...el,
//               value: '',
//               options: { ...el.options, type, options: [] },
//             };
//           }
//           case CHECKBOX: {
//             return {
//               ...el,
//               value: false,
//               options: { ...el.options, type },
//             };
//           }
//           default: {
//             return {
//               ...el,
//               value: '',
//               options: { ...el.options, type },
//             };
//           }
//         }
//       }
//       return el;
//     }));
//   };
//   // const setRequiredValidationProperty = (id, value) => {
//   //   setForm(form.map((el) => {
//   //     if (!el.options.type) return el;
//   //     if (el.id === id) {
//   //       if (el.options.type === CHECKBOX) return el;

//   //       const { required, ...rest } = el.validate;

//   //       return {
//   //         ...el,
//   //         validate: value ? { ...rest, required: (v) => (v.trim() === '' ? 'Required' : '') } : rest,
//   //       };
//   //     }
//   //     return el;
//   //   }));
//   // };

//   const toMarkDown = () => JSON.stringify(form.map(({ id, ...rest }) => rest), (key, value) => {
//     // console.log('value', value);
//     if (typeof value === 'function') {
//       return value.toString();
//     }
//     return value;
//   }, 2);

//   const copy = () => {
//     navigator.clipboard.writeText(toMarkDown());
//     setCopied(true);
//   };
//   // console.log('form', toMarkDown());
//   return (
//     <WorkLayout>
//       <div className={styles.constructor}>
//         <div className={styles.constructor__addBox}>
//           <CustomButton onClick={addItem}>+ Add Field</CustomButton>
//           <div>
//             <CustomButton onClick={triggerMdBox}>Show Form Code</CustomButton>
//             <div className={styles.constructor__tooltip} onBlur={() => setCopied(false)}>
//               <CustomButton onClick={copy}>
//                 <span className={classNames({
//                   [styles.constructor__tooltiptext]: true,
//                   [styles['constructor__tooltiptext--show']]: copied,
//                 })}
//                 >Copied to clipboard
//                 </span>
//                 Copy Form To Clipboard
//               </CustomButton>
//             </div>
//           </div>
//         </div>

//         <div className={styles.constructor__box}>
//           {form.map((el) => (
//             <div key={el.id} className={styles.constructor__item}>
//               <div className={styles.constructor__left}>
//                 <div className={styles.constructor__itemBox}>
//                   <CustomInput
//                     value={el.name}
//                     onChange={(e) => setElementName(el.id, e.target.value)}
//                     placeholder="Field name"
//                   />
//                 </div>
//                 <div className={styles.constructor__itemBox}>
//                   <CustomSelect
//                     value={el.options.type}
//                     options={constructorElementsOptions}
//                     onChangeEvent={(e) => setElementType(el.id, e.value)}
//                     placeholder="Field type"
//                   />
//                 </div>
//               </div>

//               {/* <div className={styles.constructor__right}>
//                 <CustomCheckbox label="Required" onChange={(e) => setRequiredValidationProperty(el.id, e.target.checked)} />
//               </div> */}

//               <div
//                 className={styles.constructor__removeItem}
//                 onClick={removeItem.bind(null, el.id)}
//                 role="button"
//                 tabIndex="0"
//               >
//                 &#9746;
//               </div>
//             </div>
//           ))}
//         </div>
//         {showMdBox && <CodeBlock value={toMarkDown()} />}
//       </div>
//     </WorkLayout>
//   );
// };
import { useState, useCallback } from 'react';
import update from 'immutability-helper';

import { BaseLayout } from '../layouts/base-layout';
import { WrapperDND } from '../components/constructor/dnd-block/container';
import { Element } from '../components/constructor/element-block/element';

import {
  constructorFormElement, CHECKBOX, RADIO, SELECT,
} from '../constants';
import { uuid } from '../utils/uuid';

const Constructor = () => {
  const [form, setForm] = useState([]);
  const [formElement, setFormElement] = useState(null);

  const removeAll = () => setForm([]);

  const addItem = () => setForm(form.concat({ ...constructorFormElement, id: uuid() }));

  const setFormElementToUpdate = (id) => setFormElement(form.find((el) => el.id === id));

  const removeElement = () => setFormElement(null);

  const removeElementFromForm = (id) => setForm((prevState) => prevState.filter((el) => el.id !== id));

  const setElementName = (name) => setFormElement((prevState) => ({ ...prevState, name }));

  const setElementType = (type) => {
    setFormElement((prevState) => {
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

  const saveElement = () => {
    setForm((ps) => ps.map((el) => (el.id === formElement.id ? formElement : el)));
    setFormElement(null);
  };

  const moveFormItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = form[dragIndex];
      setForm(
        update(form, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      );
    },
    [form],
  );
  console.log('form', form);
  return (
    <div className="row my-5">
      <WrapperDND
        form={form}
        removeAll={removeAll}
        addItem={addItem}
        moveFormItem={moveFormItem}
        setFormElementToUpdate={setFormElementToUpdate}
        removeElement={removeElementFromForm}
      />

      <Element
        element={formElement}
        removeElement={removeElement}
        setElementName={setElementName}
        setElementType={setElementType}
        saveElement={saveElement}
      />
    </div>
  );
};

export default () => (
  <BaseLayout>
    <Constructor />
  </BaseLayout>
);
