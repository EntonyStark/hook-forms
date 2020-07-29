/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import path from 'path';
import fs from 'fs';

const mdDirectory = path.join(process.cwd(), 'forms');

export async function getMdData(fileName) {
  const fullPathToJsFile = path.join(mdDirectory, `${fileName}.js`);
  const fileContents = fs.readFileSync(fullPathToJsFile, 'utf8');

  const { form } = require(`../forms/${fileName}`);

  return {
    fileContents,
    form,
  };
}
