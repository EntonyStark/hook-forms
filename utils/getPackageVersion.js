import axios from 'axios';

import packageJson from '../package.json';

export const getPackageVersionFromLocal = (name = 'hook-easy-form') => packageJson.dependencies[name].replace(/^\^/, '');

export const getPackageVersionFromNpm = async (name = 'hook-easy-form') => {
  try {
    const data = await axios.get(`/api/info?name=${name}`);

    return data.data;
  } catch (error) {
    console.warn('getPackageVersionFromNpm', error);
    return getPackageVersionFromLocal();
  }
};
