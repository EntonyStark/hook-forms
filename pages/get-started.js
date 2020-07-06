import { WorkLayout } from '../layouts/work-layout';

export const getStaticProps = async () => ({
  props: {},
});

export default () => (
  <WorkLayout>
    <div>
      <h1>Basic Usage Guide</h1>

      <h3>Step 1 of 4: Create Form Array</h3>
      <p>Create an array with full description for your form</p>

      <pre>code</pre>
    </div>
  </WorkLayout>
);
