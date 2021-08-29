import { useEffect, useState } from 'react';

import { CodeBlockV2 } from '../code/codeV2';

export const Values = ({ array }) => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(array.reduce((a, el) => ({ ...a, [el.name]: el.value }), {}));
  }, [array]);

  return <CodeBlockV2 codeString={JSON.stringify(values, null, 2)} copyBtn={false} />;
};
