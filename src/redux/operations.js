//64f9ff184098a7f2fc1543aa.mockapi.io/adverts
//649c1e0a0480757192377b6a.mockapi.io';
//64c21d6bfa35860baea1349e.mockapi.io/

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64f9ff184098a7f2fc1543aa.mockapi.io/',
});

export const fetchCars = createAsyncThunk(
  'adverts/fetchCars',
  async ({ page, limit }, thunkApi) => {
    try {
      const { data } = await instance.get(`/adverts?page=${page}`, {
        params: {
          limit,
        },
      });

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
