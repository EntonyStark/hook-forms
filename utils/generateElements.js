import faker from 'faker';

import {
  constructorFormElement,
  constructorElementsOptions,
  RADIO, SELECT,
} from '../constants';

export const generateNewElement = () => ({
  ...constructorFormElement,
  name: faker.random.word(),
  id: faker.random.uuid(),
});

const types = {
  [RADIO]: 'buttons',
  [SELECT]: 'options',
};

export const generateOptions = (elem) => {
  const typesForWork = [RADIO, SELECT];
  if (typesForWork.some((el) => el === elem.options.type) && elem.options.countOfOptions !== 0) {
    const options = new Array(elem.options.countOfOptions)
      .fill(null)
      .map(() => {
        const random = faker.random.word();
        return { title: random, value: random };
      });
    return { ...elem, options: { ...elem.options, [types[elem.options.type]]: options } };
  }

  return elem;
};

export const generateOptionsV2 = (elem) => {
  const typesForWork = [RADIO, SELECT];
  if (typesForWork.includes(elem.formItem.options.type) && elem.countOfOptions !== 0) {
    const options = new Array(elem.countOfOptions)
      .fill(null)
      .map(() => {
        const random = faker.random.word();
        return { title: random, value: random.toLowerCase() };
      });
    return {
      ...elem,
      formItem: {
        ...elem.formItem,
        options: {
          ...elem.formItem.options,
          options,
        },
      },
    };
  }

  return elem;
};

export const generateNewElementV2 = (value) => {
  const i = constructorElementsOptions.find((e) => e.value === value);


  const item = {
    formItem: {
      name: faker.name.title().replaceAll(' ', '_').toLowerCase(),
      required: false,
      onChangeValidate: false,
      value: '',
      options: { type: value, label: `${i.title} Default Label` },
      validate: {},
    },
    id: faker.random.uuid(),
    defaultUserValidate: { maxLength: '', pattern: '' },
    includeValidate: false,
    countOfOptions: 5,
  };

  return generateOptionsV2(item);
};
