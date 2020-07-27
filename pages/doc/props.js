import { BaseLayout } from '../../layouts/base-layout';

import { Navigation } from '../../components/navigation/navigation';
import { CodeBlock } from '../../components/code/code';
// import { PropsTable } from '../../components/table/table';
import { propsProperty } from '../../constants/props';
// import styles from '../../styles/doc.module.scss';
import { WithTooltip } from '../../components/typography/tooltip';

export const getStaticProps = async () => ({
  props: {},
});

// const Component = () => (
//   <div className={styles.doc}>
//     <h1 className={styles.doc__title}>Hook props <span>What you can pass to the hook ?</span></h1>

//     {propsProperty.map((el) => (
//       <div key={el.id} className={styles.doc__box}>
//         <h4 className={styles.doc__subTitle}>{el.title}</h4>
//         <p className={styles.doc__desc}>{el.desc}</p>

//         {el.table && (<PropsTable table={el.table} className={styles.doc__table} />)}
//         <CodeBlock title={false} value={el.code} />
//       </div>
//     ))}
//   </div>
// );

const TitleComponent = ({ text, type }) => (
  <h4 className="mt-2">
    <code>&lt;/&gt;</code>&nbsp;{text}:&nbsp;<code style={{ fontSize: '57%' }}>{type}</code>
  </h4>
);

const Component = () => (
  <>
    <div className="row justify-content-center mt-5">
      <div className="col-auto">
        <h1 className="display-3">API & props</h1>
      </div>
    </div>
    <div className="row">
      <Navigation />
      <div className="col-lg-9">
        <section>
          <TitleComponent text="initialForm" type="Array" />
          <p className="lead">{propsProperty[0].desc} <WithTooltip text="Required" /></p>
          <CodeBlock title={false} value={propsProperty[0].code} />
        </section>
        <section>
          <TitleComponent text="defaultValues" type="Object" />
        </section>
        <section>
          <TitleComponent text="resetAfterSubmit" type="Boolean" />
        </section>
        data will be here
      </div>
    </div>
  </>
);

export default () => (
  <BaseLayout>
    <Component />
  </BaseLayout>
);
