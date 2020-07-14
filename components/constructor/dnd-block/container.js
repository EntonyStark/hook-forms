import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { DNDElement } from './item';
import { OverflowBox } from '../overflow-box';

export const WrapperDND = ({
  form, removeAll, addItem, moveFormItem, setFormElementToUpdate, removeElement,
}) => (
  <div className="col-md-6">
    <DndProvider backend={HTML5Backend}>
      <h3 className="text-center">Form</h3>
      <hr className="my-4" />
      <div>
        <div className="d-flex justify-content-end my-3">
          <blockquote className="blockquote mr-auto">
            <p className="mb-0">1. Create field in form</p>
          </blockquote>
          <button onClick={addItem} type="button" className="btn btn-outline-success btn-sm mr-2">Add</button>
          <button onClick={removeAll} type="button" className="btn btn-outline-danger btn-sm">Remove all</button>
        </div>
        <OverflowBox>
          {form.map((el, index) => (
            <DNDElement
              key={el.id}
              index={index}
              id={el.id}
              text={el.name}
              moveElement={moveFormItem}
              setFormElementToUpdate={setFormElementToUpdate}
              removeElement={removeElement}
            />
          ))}
        </OverflowBox>
      </div>
    </DndProvider>
  </div>
);
