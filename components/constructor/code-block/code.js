import { OverflowBox } from '../overflow-box';

export const CodeBox = ({ string }) => (
  <div className="col-md-6">
    <h3 className="text-center">Code</h3>
    <hr className="my-4" />
    <div>
      <div className="d-flex my-3">
        <blockquote className="blockquote mr-auto">
          <p className="mb-0">3. Copy code of new form to your project</p>
        </blockquote>
      </div>
      <OverflowBox className="card bg-light">
        <div className="card-body">
          <pre>{string}</pre>
        </div>
      </OverflowBox>
    </div>
  </div>
);
