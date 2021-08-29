import { Navigation } from '../components/navigation/navigation';
import { CodeBlockV2 } from '../components/code/codeV2';
import { PropsTable } from '../components/table/table';
import { WithTooltip } from '../components/typography/tooltip';
import { APIProperty } from '../constants/api-doc';

const getNavigation = (doc) => {
  const propsNav = [{
    id: 'props', nested: false, anchor: 'initialForm', text: 'Props',
  }];
  const apiNav = [{
    id: 'api', nested: false, anchor: 'formArray', text: 'API',
  }];

  doc.forEach((element) => {
    if (element.link.ref === 'props') {
      propsNav.push(element.link);
    }
    if (element.link.ref === 'api') {
      apiNav.push(element.link);
    }
  });

  return [...propsNav, ...apiNav];
};


export const getStaticProps = async () => {
  const navigation = getNavigation(APIProperty);
  return {
    props: {
      navigation,
    },
  };
};

const TitleComponent = ({ text, type, ...rest }) => (
  <h4 className="mt-2" {...rest}>
    <code>&lt;/&gt;</code>&nbsp;{text}:&nbsp;<code style={{ fontSize: '57%' }}>{type}</code>
  </h4>
);

const APIComponent = ({ navigation }) => (
  <>
    <div className="row justify-content-center mt-5">
      <div className="col-auto">
        <h1 className="display-3">API & props</h1>
      </div>
    </div>
    <div className="row">
      <Navigation navigation={navigation} />
      <div className="col-lg-9">
        {APIProperty.map((el) => (
          <section key={el.id} className="mb-5">
            <TitleComponent text={el.title} type={el.type} id={el.title} />
            <p className="lead">{el.desc} {el.required && <WithTooltip text="Required" />}</p>
            {el.code && <CodeBlockV2 codeString={el.code} copyBtn={false} />}

            {el.table && <PropsTable table={el.table} />}
          </section>
        ))}
      </div>
    </div>
  </>
);

export default ({ navigation }) => (
  <APIComponent navigation={navigation} />
);
