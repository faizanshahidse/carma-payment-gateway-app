import { combineReducers } from '@reduxjs/toolkit';

import creditCardReducer from './features/creditCardSlice';

const rootReducer = combineReducers({
  creditCard: creditCardReducer,
});

export default rootReducer;
