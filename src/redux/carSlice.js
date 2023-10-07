import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

export const carSlice = createSlice({
  name: 'Cars',
  initialState: {
    items: [],
    isLoading: false,
    isError: '',
    filter: null,
  },
  extraReducers: {
    [fetchCars.pending]: state => {
      state.isLoading = true;
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = [...state.items, ...action.payload];
    },
    [fetchCars.rejected]: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },

    // [addCars.pending]: state => {
    //   state.isLoading = true;
    // },
    // [addCars.fulfilled]: (state, action) => {
    //   state.items = [...state.items, action.payload];
    //   state.isLoading = false;
    // },
    // [addCars.rejected]: (state, action) => {
    //   state.isError = action.payload;
    //   state.isLoading = false;
    // },

    // [deleteCars.pending]: state => {
    //   state.isLoading = true;
    // },
    // [deleteCars.fulfilled]: (state, action) => {
    //   state.items = state.items.filter(car => car.id !== action.payload.id);
    //   state.isLoading = false;
    // },
    // [deleteCars.rejected]: (state, action) => {
    //   state.isError = action.payload;
    //   state.isLoading = false;
    // },
  },
});
