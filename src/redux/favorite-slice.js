import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [], // Изменено на пустой массив
  reducers: {
    addFavoriteList: (state, action) => {
      state.push(action.payload); // Мы используем push для добавления элемента в массив
    },
    removeFavoriteList: (state, action) => {
      return state.filter(item => item !== action.payload); // Возвращаем новый массив без элемента для удаления
    },
  },
});

export const { addFavoriteList, removeFavoriteList } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
