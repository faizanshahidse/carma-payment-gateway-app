import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/axios';

export const add = createAsyncThunk(
  '/api/card/add',
  async (creditCard, thunkAPI) => {
    try {
      console.log(creditCard);
      const response = await axios.post('/card/add', creditCard);

      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data,
          status: err.response.status,
        });
      } else {
        return thunkAPI.rejectWithValue({
          err: 'Network Error',
        });
      }
    }
  },
);

const creditCard = createSlice({
  name: 'creditCard',
  initialState: {
    newCreditCard: {},
    err: '',
    loading: false,
    done: false,
  },
  reducers: {},
  extraReducers: {
    /*......... Add Credit Card .................*/
    [add.pending]: (state, action) => {
      state.loading = true;
    },
    [add.fulfilled]: (state, action) => {
      state.loading = false;
      state.done = true;
      state.newChat = action.payload.data;
    },
    [add.rejected]: (state, action) => {
      state.loading = false;
      state.err = action.payload.err;
    },
  },
});

const { reducer } = creditCard;

export default reducer;
