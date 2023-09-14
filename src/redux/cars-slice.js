import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from '../redux/cars-operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchCars.pending]: handlePending,

    [fetchCars.rejected]: handleRejected,

    [fetchCars.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
  },
});

export const carsReducer = carsSlice.reducer;
