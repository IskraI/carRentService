import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars-slice';
import { favoriteReducer } from './favorite-slice';
import totalCarsReducer from './totalCars-slice';
// import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite', 'totalCars'],
};

const rootReducer = combineReducers({
  cars: carsReducer,
  favorite: favoriteReducer,
  totalCars: totalCarsReducer,
});
const persistUsersReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistUsersReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
