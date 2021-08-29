import { CodeBlockV2 } from '../../code/codeV2';

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
      <CodeBlockV2 codeString={string} className="bg-light" />
    </div>
  </div>
);
