import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { carSlice } from './carSlice';

// const favoritePersistConfig = {
//   key: 'favorite',
//   storage,
//   whitelist: ['favoritCar'],
// };

export const store = configureStore({
  reducer: {
    cars: carSlice.reducer,
    // modal: modalReduser,
    // filter: filterReducer,
    // favorit: persistReducer(favoritePersistConfig),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
