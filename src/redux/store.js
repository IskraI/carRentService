import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars-slice';
import { favoriteReducer } from './favorite-slice';
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
  whitelist: ['favorite'],
};

const rootReducer = combineReducers({
  cars: carsReducer,
  favorite: favoriteReducer,
});
const persistUsersReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistUsersReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }).concat(carsReducer.middleware),
});
export const persistor = persistStore(store);
