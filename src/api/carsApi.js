import axios from 'axios';
axios.defaults.baseURL = 'https://648ed67c75a96b66444457c1.mockapi.io';

export const getTotalCars = async () => {
  try {
    const { data } = await axios.get(`/cars`);
    return data;
  } catch (error) {
    console.error('Error getting total cars:', error);
    throw error;
  }
};
