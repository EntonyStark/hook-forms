/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import path from 'path';
import fs from 'fs';

const mdDirectory = path.join(process.cwd(), 'forms');

export async function getMdData(fileName) {
  const fullPath2ToJsFiel = path.join(mdDirectory, `${fileName}.js`);
  const fileContents = fs.readFileSync(fullPath2ToJsFiel, 'utf8');

  const { form } = require(`../forms/${fileName}.js`);

  return {
    form,
    fileContents,
  };
}
