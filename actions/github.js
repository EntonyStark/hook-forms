import axios from 'axios';

export const getRepoInfo = async () => {
  try {
    const info = await axios.get(process.env.REPOSITORY_URL);
    return info.data;
  } catch (error) {
    console.warn('getRepoInfo,', error);
    return {};
  }
};

export const getRepoContributors = async () => {
  try {
    const infoContributors = await axios.get(`${process.env.REPOSITORY_URL}/contributors`);
    return infoContributors.data;
  } catch (error) {
    console.warn('getRepoContributors,', error);
    return {};
  }
};
