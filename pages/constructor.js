import { useState, useEffect, useCallback } from 'react';
import update from 'immutability-helper';

import { WrapperDND } from '../components/constructor/dnd-block/container';
import { Element } from '../components/constructor/element-block/element';
import { CodeBox } from '../components/constructor/code-block/code';
import { ExampleBox } from '../components/constructor/example-block/example';
import { CustomModal } from '../components/modal/modal';

import { generateForm } from '../utils/generateStingElement';
import { generateNewElement, generateOptions } from '../utils/generateElements';

const Constructor = () => {
  const [form, setForm] = useState([]);
  const [formElement, setFormElement] = useState(null);
  const [stringCode, setStringCode] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setStringCode(generateForm(form));
  }, [form]);

  const removeAll = () => {
    setForm([]);
    setFormElement(null);
  };

  const addItem = () => {
    const newElement = generateNewElement();
    setForm(form.concat(newElement));
  };

  const setFormElementToUpdate = (id) => setFormElement(form.find((el) => el.id === id));

  const removeElement = () => setFormElement(null);

  const removeElementFromForm = (id) => {
    setForm((prevState) => prevState.filter((el) => el.id !== id));
    setFormElement(null);
  };

  const saveElement = (element) => {
    setForm((ps) => ps.map((el) => (el.id === formElement.id ? generateOptions(element) : el)));
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

  return (
    <>
      <div className="d-flex flex-column mt-5">
        <h3 className="display-4 text-center">Builder</h3>
        <p className="lead text-center">Build your form with code and example.</p>
      </div>
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
          saveElement={saveElement}
        />
      </div>
      {form.length !== 0 && (
      <button
        className="btn btn-outline-primary btn-sm btn-block mb-5"
        onClick={() => setShowModal(true)}
      >
        3. Generate your form
      </button>
      )}

      {showModal && (
      <CustomModal closeEvent={() => setShowModal(false)} title="Your form">
        <div className="row">
          <CodeBox string={stringCode} />
          <ExampleBox form={form} />
        </div>
      </CustomModal>
      )}
    </>
  );
};

export default () => (
  <Constructor />
);
