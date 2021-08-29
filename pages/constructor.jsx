import { useCallback, useState } from 'react';

import { InputList } from '../components/constructor/input-list';
import { ExistingInputTypesList } from '../components/constructor/existing-input-types-list';
import { CustomizeItem } from '../components/constructor/customize-item';
import { generateNewElementV2 } from '../utils/generateElements';
import { generateFormV2 } from '../utils/generateStingElement';
import { CustomModal } from '../components/modal/modal';
import { CodeBox } from '../components/constructor/code-block/code';
import { ExampleBox } from '../components/constructor/example-block/example';


const Constructor = () => {
  const [list, setList] = useState([]);
  const [itemForCustomize, setItemForCustomize] = useState(null);
  const [stringCode, setStringCode] = useState('');
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [totalFormModal, setTotalFormModal] = useState(false);

  const addItem = (v) => setList((ps) => ps.concat(generateNewElementV2(v)));

  const openCustomizeModal = useCallback((id) => {
    setShowCustomizeModal(true);
    const item = list.find((el) => el.id === id);
    setItemForCustomize(item);
  }, [list]);

  const openTotalModal = useCallback(() => {
    setTotalFormModal(true);
    setStringCode(generateFormV2(list));
  }, [list]);

  const hideCustomizeModal = useCallback(() => {
    setShowCustomizeModal(false);
    setItemForCustomize(null);
  }, []);

  const applyUpdate = useCallback(() => {
    setList((ps) => ps.map((el) => (el.id === itemForCustomize.id ? itemForCustomize : el)));
    hideCustomizeModal();
  }, [itemForCustomize]);

  return (
    <>
      <div className="d-flex flex-column mt-5">
        <h3 className="display-4 text-center">Builder</h3>
        <p className="lead text-center">Build your form with code and example.</p>
      </div>
      <div className="row my-5">
        <InputList list={list} openCustomizeModal={openCustomizeModal} />
        <div className="col-md-2" />
        <ExistingInputTypesList addItem={addItem} />
      </div>

      {list.length !== 0 && (
      <button
        className="btn btn-outline-primary btn-sm btn-block mb-5"
        onClick={openTotalModal}
      >
        Step 3 - Generate your form
      </button>
      )}

      {showCustomizeModal && itemForCustomize && (
        <CustomModal closeEvent={hideCustomizeModal} title="Customize your field" size="small">
          <CustomizeItem item={itemForCustomize} updateItem={setItemForCustomize} />

          <div>
            <button type="button" className="btn btn-primary" onClick={applyUpdate}>Save</button>
          </div>
        </CustomModal>
      )}

      {totalFormModal && (
        <CustomModal closeEvent={() => setTotalFormModal(false)} title="Your Form">
          <div className="row">
            <CodeBox string={stringCode} />
            <ExampleBox form={list.map((el) => el.formItem)} />
          </div>
        </CustomModal>
      )}
    </>
  );
};

export default Constructor;
