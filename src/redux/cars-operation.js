import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://648ed67c75a96b66444457c1.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (page, thunkAPI) => {
    try {
      const responce = await axios.get(`/cars`, {
        params: {
          page: page,
          limit: 8,
        },
      });

      const data = responce.data;

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
