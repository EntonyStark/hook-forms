import { useState } from 'react';

import { CustomInput, CustomSelectV2, CustomCheckbox } from '../../form-elements';
import { constructorBlockHeight, constructorElementsOptions, INPUT } from '../../../constants';

export const Element = ({
  element, removeElement, setElementName, setElementType, saveElement,
}) => {
  const [validations, setValidations] = useState(false);

  const onChangeNameEvent = (e) => setElementName(e.target.value);

  const onChangeTypeEvent = (e) => setElementType(e.target.value);

  const onChangeValidationEvent = (e) => setValidations(e.target.checked);

  return (
    <div className="col-md-6">
      <h3 className="text-center">Input Creator</h3>
      <hr className="my-4" />
      <div>
        <div className="d-flex my-3">
          <blockquote className="blockquote mr-auto">
            <p className="mb-0">You can manage field in form </p>
          </blockquote>
          {element && <button type="button" onClick={removeElement} className="btn btn-outline-danger btn-sm">Cancel</button>}
        </div>
        {element && (
        <div className="card bg-light overflow-auto" style={{ maxHeight: constructorBlockHeight, minHeight: constructorBlockHeight }}>
          <div className="card-body">
            <CustomInput
              name="element-name"
              label="Input name"
              value={element ? element.name : ''}
              onChange={onChangeNameEvent}
              placeholder="Enter input name"
            />

            <CustomSelectV2
              name="element-type"
              label="Input type"
              value={element ? element.options.type : INPUT}
              onChange={onChangeTypeEvent}
              options={constructorElementsOptions}
            />

            <CustomCheckbox
              name="validation"
              label="Should include validation ?"
              value={validations}
              onChange={onChangeValidationEvent}
            />

            {validations ? 'open' : 'close'}
            <button type="button" onClick={saveElement} className="btn btn-primary btn-lg btn-block btn-sm">Save</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};
