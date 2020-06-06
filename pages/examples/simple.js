import easyHook from 'hook-easy-form';

import { WorkLayout } from '../../layouts/work-layout';
import { getRepoInfo } from '../../actions/github';
import { getMdData } from '../../utils/getMdFiles';

import {
  CustomInput, CustomRadio, CustomSelect, CustomCheckbox, CustomTextArea,
} from '../../components/form-elements';
import { CustomButton } from '../../components/button/button';
import { Values } from '../../components/values/values';
import { MarkdownBlock } from '../../components/code/react-markdown';

import styles from '../../styles/examples.module.scss';

export const getStaticProps = async () => {
  const info = await getRepoInfo();
  const { md, form } = await getMdData('simple');
  return {
    props: {
      repoInfo: info,
      md,
      form,
    },
  };
};

export default ({ repoInfo, md, form }) => {
  const {
    formArray, updateEvent, submitEvent, resetEvent,
  } = easyHook({ initialForm: form });

  const submit = (v) => console.log('v', v);

  return (
    <WorkLayout owner={repoInfo.parent.owner}>
      <div className={styles.examples}>
        <h1 className={styles.examples__title}>Simple Form Example</h1>
        <div className={styles.examples__formBox}>
          <form onSubmit={submitEvent(submit)} className={styles.examples__form}>
            {formArray.map((item) => {
              if (item.options.type === 'checkbox') {
                return (
                  <CustomCheckbox
                    key={item.name}
                    name={item.name}
                    value={item.value}
                    onChange={updateEvent}
                    label={item.options.label}
                  />
                );
              }
              if (item.options.type === 'text-area') {
                return (
                  <CustomTextArea
                    key={item.name}
                    name={item.name}
                    value={item.value}
                    onChange={updateEvent}
                    label={item.options.label}
                  />
                );
              }
              if (item.options.type === 'select') {
                return (
                  <CustomSelect
                    key={item.name}
                    name={item.name}
                    value={item.value}
                    onChange={updateEvent}
                    label={item.options.label}
                    options={item.options.options}
                  />
                );
              }
              if (item.options.type === 'radio') {
                return (
                  <CustomRadio
                    key={item.name}
                    name={item.name}
                    value={item.value}
                    onChange={updateEvent}
                    label={item.options.label}
                    buttons={item.options.buttons}
                  />
                );
              }

              return (
                <CustomInput
                  key={item.name}
                  name={item.name}
                  value={item.value}
                  onChange={updateEvent}
                  label={item.options.label}
                />
              );
            })}
            <div className={styles.examples__btnBox}>
              <CustomButton type="submit">Submit</CustomButton>
              <CustomButton onClick={resetEvent}>Clear</CustomButton>
            </div>
          </form>
        </div>
        <h1 className={styles.examples__title}>Values</h1>
        <Values array={formArray} />

        <h1 className={styles.examples__title}>Form Code</h1>

        <MarkdownBlock md={md} />
      </div>
    </WorkLayout>
  );
};
