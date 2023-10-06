//64f9ff184098a7f2fc1543aa.mockapi.io/adverts

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64f9ff184098a7f2fc1543aa.mockapi.io',
  params: {
    limit: 8,
  },
});

export const fetchCars = createAsyncThunk(
  'adverts/fetchCars',
  async (page, thunkApi) => {
    try {
      const { data } = await instance.get(`/adverts?page=${page}`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
