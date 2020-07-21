import { RADIO, SELECT, CHECKBOX } from '../constants';

const genOptions = (o) => {
  switch (o.type) {
    case RADIO: {
      return `options: {
      type: "${o.type}",
      buttons: []
    },`;
    }
    case SELECT: {
      return `options: {
      type: "${o.type}",
      options: []
    },`;
    }
    default: {
      return `options: {
      type: "${o.type}"
    },`;
    }
  }
};

const getValidate = (o) => {
  let string = '';
  if (o.required) string = "required: (v) => (v.trim() === '' ? 'Required' : ''),";
  if (o.maxLength) {
    string = string.length === 0 ? `maxLength: (v) => (parseInt(v) > ${o.maxLength} ? 'Invalid' : ''),` : `${string}
      maxLength: (v) => (parseInt(v) > ${o.maxLength} ? 'Invalid' : ''),`;
  }
  if (o.pattern) {
    string = string.length === 0 ? `pattern: (v) => (${new RegExp(o.pattern)}.test(v) ? '' : 'Invalid'),` : `${string}
      pattern: (v) => (${new RegExp(o.pattern)}.test(v) ? '' : 'Invalid'),`;
  }

  return string ? `validate: {
      ${string}
    },` : 'validate: {}';
};

const generateElement = ({ name, options, defaultUserValidate }) => `
  {
    name: "${name}",
    value: ${options.type === CHECKBOX ? 'false' : '\'\''},
    ${genOptions(options)}
    ${getValidate(defaultUserValidate)}
  },
`;

export const generateForm = (arr) => `const form = [
  ${arr.reduce((acc, elem) => {
    const newElement = generateElement(elem);
    return acc ? acc.trimLeft() + newElement.trimRight() : newElement.trim();
  }, '')}
];

const { formArray, updateEvent, submitEvent } = easyHook({ initialForm: form });`;
