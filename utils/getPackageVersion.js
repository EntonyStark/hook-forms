import packageJson from '../package.json';

export const getPackageVersion = (name = 'hook-easy-form') => packageJson.dependencies[name].replace(/^\^/, '');
