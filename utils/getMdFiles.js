import path from 'path';
import fs from 'fs';

const mdDirectory = path.join(process.cwd(), 'forms');

export async function getMdData(fileName) {
  const fullPathToJsFile = path.join(mdDirectory, `${fileName}.js`);
  const fileContents = fs.readFileSync(fullPathToJsFile, 'utf8');

  return {
    fileContents,
  };
}
