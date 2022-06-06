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
  reducers: {
    clearCardDetails(state, action) {
      state.newCreditCard = {};
      state.err = '';
      state.loading = false;
      state.done = false;
    },
  },
  extraReducers: {
    /*......... Add Credit Card .................*/
    [add.pending]: (state, action) => {
      state.loading = true;
    },
    [add.fulfilled]: (state, action) => {
      state.loading = false;
      state.done = true;
      state.newCreditCard = action.payload.data;
    },
    [add.rejected]: (state, action) => {
      state.loading = false;
      state.err = action.payload.err;
    },
  },
});

const { reducer, actions } = creditCard;

export const { clearCardDetails } = actions;

export default reducer;
