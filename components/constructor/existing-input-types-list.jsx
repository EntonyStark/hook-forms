/* eslint-disable jsx-a11y/no-static-element-interactions */
import { constructorElementsOptions } from '../../constants';

export const ExistingInputTypesList = ({ addItem }) => (
  <div className="col-md-4">
    <h3 className="text-center">Existing input types</h3>
    <hr className="my-4" />

    <p className="mb-2">Step 1 - Add field to the form</p>

    <ul className="list-group">
      {constructorElementsOptions.map((el) => (
        <li key={el.value} className="list-group-item d-flex justify-content-between align-items-center">
          <span
            className="badge badge-primary badge-pill"
            onClick={addItem.bind(null, el.value)}
          ><i className="fas fa-arrow-left" />
          </span>
          {el.title}
        </li>
      ))}
    </ul>
  </div>
);

ExistingInputTypesList.displayName = 'ExistingInputTypesList';
