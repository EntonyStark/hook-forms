
import faker from 'faker';

import { constructorFormElement, RADIO, SELECT } from '../constants';

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
