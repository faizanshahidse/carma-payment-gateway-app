import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../components/Card';
import { add } from '../features/creditCardSlice';
import { addStr } from '../utils/appendString';

const CreditCardPage = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    values.cardNo = values.cardNo.slice(0, 19);
    values.cvv = values.cvv.slice(0, 3);
    values.expiryDate = values.expiryDate.slice(0, 5);

    values.expiryDate = addStr(values.expiryDate, 3, '01/');

    dispatch(add(values));
  };

  return <Card onSubmit={onSubmit} />;
};

export default CreditCardPage;
