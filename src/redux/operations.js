//64f9ff184098a7f2fc1543aa.mockapi.io/adverts

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const CARS_LIMIT = 8;

const instance = axios.create({
  baseURL: 'https://64f9ff184098a7f2fc1543aa.mockapi.io',
  params: {
    limit: CARS_LIMIT,
  },
});

export const fetchCars = createAsyncThunk(
  'adverts/fetchCars',
  async (page, thunkApi) => {
    try {
      const { data } = await instance.get(`/adverts?page=${page}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
