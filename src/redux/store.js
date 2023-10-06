import { configureStore } from '@reduxjs/toolkit';
import { carSlice } from './carSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    cars: carSlice.reducer,
    filter: filterSlice.reducer,
  },
});
