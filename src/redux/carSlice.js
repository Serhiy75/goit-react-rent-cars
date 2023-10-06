import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

export const carSlice = createSlice({
  name: 'Cars',
  initialState: {
    items: [],
    isLoading: false,
    isError: '',
  },
  extraReducers: {
    [fetchCars.pending]: state => {
      state.isLoading = true;
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchCars.rejected]: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },

    //   [addCar.pending]: state => {
    //     state.isLoading = true;
    //   },
    //   [addCar.fulfilled]: (state, action) => {
    //     state.items = [...state.items, action.payload];
    //     state.isLoading = false;
    //   },
    //   [addCar.rejected]: (state, action) => {
    //     state.isError = action.payload;
    //     state.isLoading = false;
    //   },

    //   [deleteCars.pending]: state => {
    //     state.isLoading = true;
    //   },
    //   [deleteCars.fulfilled]: (state, action) => {
    //     state.items = state.items.filter(car => car.id !== action.payload.id);
    //     state.isLoading = false;
    //   },
    //   [deleteCar.rejected]: (state, action) => {
    //     state.isError = action.payload;
    //     state.isLoading = false;
    //   },
  },
});
