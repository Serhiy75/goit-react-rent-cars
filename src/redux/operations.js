//64f9ff184098a7f2fc1543aa.mockapi.io/adverts
//649c1e0a0480757192377b6a.mockapi.io';
//64c21d6bfa35860baea1349e.mockapi.io/

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const CARS_LIMIT = 8;

const instance = axios.create({
  baseURL: 'https://64c21d6bfa35860baea1349e.mockapi.io/',
  params: {
    limit: CARS_LIMIT,
  },
});

export const fetchCars = createAsyncThunk(
  'adverts/fetchCars',
  async (page, thunkApi) => {
    try {
      const { data } = await instance.get(`/adverts?page=${page}`);
      // console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
