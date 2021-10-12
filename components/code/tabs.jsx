import { CodeBlockV2 } from './codeV2';

const hookJS = `const {} = easyHook({ initialForm: form });
`;

const hookTS = `type Data = {
  firstName: string;
  lastName: string;
  email: string;
  sex: string;
  role: string;
  verified: boolean;
  bio: string;
} // type which will be returned from submitEvent

type Objects = 'firstName'
  | 'lastName'
  | 'email'
  | 'sex'
  | 'role'
  | 'verified'
  | 'bio'; // types for formObject

const {} = easyHook<Data, Objects>({ initialForm: form });
`;

export const Tabs = () => (
  <div className="mt-4">
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item">
        <a
          className="nav-link active"
          id="js-tab"
          data-toggle="tab"
          href="#js"
          role="tab"
          aria-controls="js"
          aria-selected="true"
        >JavaScript
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          id="ts-tab"
          data-toggle="tab"
          href="#ts"
          role="tab"
          aria-controls="ts"
          aria-selected="false"
        >TypeScript
        </a>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="js" role="tabpanel" aria-labelledby="js-tab">
        <div className="my-3">
          <CodeBlockV2 codeString={hookJS} />
        </div>
      </div>
      <div className="tab-pane fade" id="ts" role="tabpanel" aria-labelledby="ts-tab">
        <div className="my-3">
          <CodeBlockV2 codeString={hookTS} />
        </div>
      </div>
    </div>
  </div>
);
