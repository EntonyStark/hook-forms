import { BaseLayout } from '../../layouts/base-layout';

import { getMdData } from '../../utils/getMdFiles';
import { examples } from '../../constants';

import { FormFactoryV2 } from '../../components/form-elements/factory/factoryV2';

import { CodeBlockV2 } from '../../components/code/codeV2';

import { formArray } from '../../forms/validation';

export const getStaticProps = async () => {
  const { fileContents } = await getMdData(examples.validation);
  return {
    props: {
      fileContents,
    },
  };
};

const Component = ({ fileContents }) => (
  <>
    <div className="d-flex flex-column mt-5">
      <h3 className="display-4">Validation Form Example</h3>
      <p className="lead">
        For provide client-side validation in your form put <span>validate</span> object to your field object. <br />
        Each field in <span>validate</span> object must be a function,
        this function take 2 arguments and and should return string with error <br />
        <br />
        IMPORTANT: Synchronous validation happens on every change to your form data, so,
        if your field value is invalid, your field.error value will always be present.
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
  <BaseLayout>
    <Component fileContents={fileContents} />
  </BaseLayout>
);
