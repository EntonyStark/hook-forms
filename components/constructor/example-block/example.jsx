import { OverflowBox } from '../overflow-box';
import { FormFactoryV2 } from '../../form-elements/factory/factoryV2';

export const ExampleBox = ({ form }) => (
  <div className="col-md-6">
    <h3 className="text-center">Example</h3>
    <hr className="my-4" />
    <div>
      <div className="d-flex my-3">
        <blockquote className="blockquote mr-auto">
          <p className="mb-0">See how your form work</p>
        </blockquote>
      </div>
      <OverflowBox className="card bg-light">
        {form.length !== 0 && (
          <div className="card-body">
            <FormFactoryV2 form={form} tabs={false} />
          </div>
        )}
      </OverflowBox>
    </div>
  </div>
);
