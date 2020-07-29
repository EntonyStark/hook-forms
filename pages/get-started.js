import Link from 'next/link';

import { BaseLayout } from '../layouts/base-layout';
import { CodeBlockV2 } from '../components/code/codeV2';

import { packageTitle, URLS } from '../constants';

export const getStaticProps = async () => ({
  props: {},
});

const installCommand = 'npm install hook-easy-form';

const singleExampleFormString = `export const form = [
  {
    name: "name",
    value: '',
    options: {
      type: "text"
    },
    validate: {}
  },
  {
    name: "email",
    value: '',
    options: {
      type: "text"
    },
    validate: {}
  },
  {
    name: "age",
    value: '',
    options: {
      type: "number"
    },
    validate: {}
  },
];`;


const fullExample = `import React from 'react';
import { form } from './form';

const Component = () => {
  const {
    formArray, updateEvent, resetEvent, pristine, submitEvent,
  } = easyHook({ initialForm: form });

  const submit = (v) => console.log(v);

  return (
    <form onSubmit={submitEvent(submit)}>
      {formArray.map((el) => (
        <div key={el.name}>
          <input name={el.name} type={el.options.type} value={el.value} onChange={updateEvent} />
        </div>
      ))}
      <button type="submit" disabled={pristine}>Submit</button>
      <button type="button" onClick={resetEvent} disabled={pristine}>Submit</button>
    </form>
  );
};`;

const Component = () => (
  <>
    <div className="d-flex flex-column my-5">
      <h3 className="display-4 text-center">Basic Usage Guide</h3>
    </div>
    <section className="mb-5">
      <h3>Step 1 of 3: installation</h3>
      <p className="lead">Installing {packageTitle} only takes a single command and you&apos;re ready to roll.</p>

      <CodeBlockV2 codeString={installCommand} />
    </section>
    <section className="mb-5">
      <h3>Step 2 of 3: Create Form Array</h3>
      <p className="lead">
        Create an array with full description for your form, or you can use our&nbsp;
        <Link href={URLS.constructor}><a>Constructor</a></Link> for it.
      </p>

      <CodeBlockV2 codeString={singleExampleFormString} />
    </section>
    <section className="mb-5">
      <h3>Step 3 of 3: Use your Form Array</h3>
      <p className="lead">
        Pass your form which you generate on step 2, to the hook, and now you can use it.
      </p>

      <CodeBlockV2 codeString={fullExample} />
    </section>
  </>
);

export default () => (
  <BaseLayout>
    <Component />
  </BaseLayout>
);
