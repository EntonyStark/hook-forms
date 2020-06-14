/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import path from 'path';
import fs from 'fs';

const mdDirectory = path.join(process.cwd(), 'forms');

export async function getMdData(fileName) {
  const fullPathToMd = path.join(mdDirectory, 'md.md');
  const fullPath2ToJs = path.join(mdDirectory, `${fileName}.js`);
  const fileContentsMd = fs.readFileSync(fullPathToMd, 'utf8');
  const fileContentsJs = fs.readFileSync(fullPath2ToJs, 'utf8');

  const { form } = require(`../forms/${fileName}.js`);

  return {
    form,
    md: fileContentsMd.replace(/code/gi, fileContentsJs),
  };
}

export const getMd = async () => {
  const fullPathToMd = path.join(mdDirectory, 'md.md');
  const fileContentsMd = fs.readFileSync(fullPathToMd, 'utf8');
  return fileContentsMd;
};
