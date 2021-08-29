import { getMdData } from '../../utils/getMdFiles';
import { examples } from '../../constants';

import { FormFactoryV2 } from '../../components/form-elements/factory/factoryV2';

import { CodeBlockV2 } from '../../components/code/codeV2';
import { formArray } from '../../forms/simple';

export const getStaticProps = async () => {
  const { fileContents } = await getMdData(examples.simple);
  return {
    props: {
      fileContents,
    },
  };
};

const Component = ({ fileContents }) => (
  <>
    <div className="d-flex flex-column mt-5">
      <h3 className="display-4">Simple Form Example</h3>
      <p className="lead">This is a simple demonstration of how to work standard form. <br />
        All tricks and things which you want to use,
        write in form array and then &apos;hook-easy-form&apos; will return a new array for work.
      </p>

    </div>
    <div className="row my-5">
      <div className="col-md-12 col-lg-6">
        <h4 className="mb-3">Form</h4>
        <FormFactoryV2 form={formArray} valuesBlock />
      </div>
      <div className="col-md-12 col-lg-6">
        <h4 className="mb-3">Code</h4>
        <CodeBlockV2 codeString={fileContents} />
      </div>
    </div>
  </>
);

export default ({ fileContents }) => (
  <Component fileContents={fileContents} />
);
