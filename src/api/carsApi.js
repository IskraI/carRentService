import axios from 'axios';
axios.defaults.baseURL = 'https://648ed67c75a96b66444457c1.mockapi.io';

export const getCars = async page => {
  const { data } = await axios.get(`/cars`, {
    params: {
      page: page,
      limit: 8,
    },
  });
  console.log('responce', data);
  return data;
};
