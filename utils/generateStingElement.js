import { RADIO, SELECT, CHECKBOX } from '../constants';


const buttonItem = (i, last) => `
        { title: "${i.title}",  value: "${i.value}" }${last ? '' : ','}`;

const genButtons = (options) => options.reduce((acc, item, i, arr) => {
  const lastItem = arr[arr.length - 1].value === item.value;
  const newElement = buttonItem(item, lastItem);
  return acc ? acc.trimLeft() + newElement.trimRight() : newElement.trim();
}, '');

const genOptions = (o) => {
  switch (o.type) {
    case RADIO: {
      return `options: {
      type: "${o.type}",
      buttons: [
        ${genButtons(o.options)}
      ],
      label: "${o.label}"
    },`;
    }
    case SELECT: {
      return `options: {
      type: "${o.type}",
      options: [
        ${genButtons(o.options)}
      ],
      label: "${o.label}"
    },`;
    }
    default: {
      return `options: {
      type: "${o.type}",
      label: "${o.label}"
    },`;
    }
  }
};

const getValidate = (o) => {
  let string = '';
  if (o.maxLength) {
    string = string.length === 0 ? `maxLength: (v) => (v.trim().length < ${o.maxLength} ? 'Invalid' : ''),` : `${string}
      maxLength: (v) => (v.trim().length < ${o.maxLength} ? 'Invalid' : ''),`;
  }
  if (o.pattern) {
    string = string.length === 0 ? `pattern: (v) => (${new RegExp(o.pattern)}.test(v) ? '' : 'Invalid'),` : `${string}
      pattern: (v) => (${new RegExp(o.pattern)}.test(v) ? '' : 'Invalid'),`;
  }

  return string ? `validate: {
      ${string}
    },` : 'validate: {}';
};

const generateElement = ({
  defaultUserValidate, formItem,
}) => `
  {
    name: "${formItem.name}",
    value: ${formItem.options.type === CHECKBOX ? 'false' : '\'\''},
    required: ${formItem.required},
    onChangeValidate: ${formItem.onChangeValidate},
    ${genOptions(formItem.options)}
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

export const generateFormV2 = (arr) => `const form = [
  ${arr.reduce((acc, elem) => {
    const newElement = generateElement(elem);
    return acc ? acc.trimLeft() + newElement.trimRight() : newElement.trim();
  }, '')}
];
`;
