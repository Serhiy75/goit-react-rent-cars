// 'https://64f9ff184098a7f2fc1543aa.mockapi.io';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64f9ff184098a7f2fc1543aa.mockapi.io',
});

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/cars');
      console.log(data.cars);
      return data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
